import {
  echoScu,
  echoScuOptions,
  findScu,
  findScuOptions,
  startStoreScp,
  storeScpOptions,
  getScu,
  getScuOptions,
  moveScu,
  moveScuOptions,
  shutdownScu,
  shutdownScuOptions,
  recompress,
  recompressOptions,
} from 'dicom-dimse-native';
import config from 'config';
import * as dict from 'dicom-data-dictionary';
import simpleLogger from 'simple-node-logger';
import shell from 'shelljs';
import storage from 'node-persist';
import path from 'path';
import fs from 'fs';
import throat from 'throat';

const maxAssociations = config.get('maxAssociations') as number;
const throatLock = throat(maxAssociations);
const lock = new Map<string, Promise<any>>();

// make sure default directories exist
const logDir = config.get('logDir') as string;
shell.mkdir('-p', logDir);
shell.mkdir('-p', config.get('storagePath'));

// create a rolling file logger based on date/time that fires process events
const opts = {
  errorEventName: 'error',
  logDirectory: logDir, // NOTE: folder must exist and be writable...
  fileNamePattern: 'roll-<DATE>.log',
  dateFormat: 'YYYY.MM.DD',
};

const manager = simpleLogger.createLogManager();
// manager.createConsoleAppender();
manager.createRollingFileAppender(opts);
const logger = manager.createLogger();

enum QUERY_LEVEL {
  STUDY = 1,
  SERIES = 2,
  IMAGE = 3,
}

//------------------------------------------------------------------

const findDicomName = (name: string) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(dict.standardDataElements)) {
    const value = dict.standardDataElements[key];
    if (value.name === name) {
      return key;
    }
  }
  return undefined;
};

//------------------------------------------------------------------

// helper to add minutes to date object
const addMinutes = (date: Date, minutes: number) => {
  const ms = date.getTime() + minutes * 60000;
  return new Date(ms);
};

//------------------------------------------------------------------

const getLockUid = (studyUid: string, seriesUid: string, imageUid: string, level: string) => {
  if (level === 'STUDY') return studyUid;
  if (level === 'SERIES') return seriesUid;
  if (level === 'IMAGE') return imageUid;

  logger.warn('level not found: ', level);
  return studyUid;
};

//------------------------------------------------------------------

const getQuerLevel = (level: string) => {
  if (level === 'STUDY') return QUERY_LEVEL.STUDY;
  if (level === 'SERIES') return QUERY_LEVEL.SERIES;
  if (level === 'IMAGE') return QUERY_LEVEL.IMAGE;

  logger.warn('level not found: ', level);
  return QUERY_LEVEL.STUDY;
};

//------------------------------------------------------------------

const queryLevelToPath = (studyUid: any, seriesUid: any, imageUid: any, qlevel: QUERY_LEVEL) => {
  switch (qlevel) {
    case QUERY_LEVEL.STUDY:
      return studyUid;
    case QUERY_LEVEL.SERIES:
      return `${studyUid}/${seriesUid}`;
    case QUERY_LEVEL.IMAGE:
      return `${studyUid}/${seriesUid}/${imageUid}`;
    default:
      logger.warn('queryLevelToPath, level not found: ', qlevel);
      return `${studyUid}/${seriesUid}`;
  }
};

//------------------------------------------------------------------

// remove cached data if outdated
const clearCache = (storagePath: string, currentUid: string) => {
  const currentDate = new Date();
  storage.forEach((item: any) => {
    const dt = new Date(item.value);
    const directory = path.join(storagePath, item.key);
    if (dt.getTime() < currentDate.getTime() && item.key !== currentUid) {
      logger.info(`cleaning directory: ${directory}`);
      fs.rmdir(
        directory,
        {
          recursive: true,
        },
        (error: any) => {
          if (error) {
            logger.error(error);
          } else {
            logger.info('deleted: ', directory);
            storage.rm(item.key); // not nice but seems to work
          }
        }
      );
    }
  });
};

//------------------------------------------------------------------

// request data from PACS via c-get or c-move
const fetchData = async (studyUid: string, seriesUid: string, imageUid: string, level: string): Promise<any> => {
  const lockId = getLockUid(studyUid, seriesUid, imageUid, level);
  const queryLevel = getQuerLevel(level);

  // add query retrieve level and fetch whole study
  const ts = config.get('transferSyntax') as string;
  const getOptions: getScuOptions = {
    tags: [
      {
        key: '00080052',
        value: level,
      },
      {
        key: '0020000D',
        value: studyUid,
      },
    ],
    netTransferPrefer: ts,
    source: config.get('source'),
    target: config.get('target'),
    verbose: config.get('verboseLogging') as boolean,
    storagePath: config.get('storagePath'),
  };

  if (queryLevel >= QUERY_LEVEL.SERIES) {
    getOptions.tags.push({
      key: '0020000E',
      value: seriesUid,
    });
  }

  if (queryLevel >= QUERY_LEVEL.IMAGE) {
    getOptions.tags.push({
      key: '00080018',
      value: imageUid,
    });
  }

  // TODO: CHECK
  // netTransferPropose = ts;
  // writeTransfer = ts;

  const scu = getScu; // config.get('useCget') ? getScu : moveScu;
  const uidPath = queryLevelToPath(studyUid, seriesUid, imageUid, queryLevel);
  const cacheTime = config.get('keepCacheInMinutes') as number;

  const prom = new Promise((resolve, reject) => {
    try {
      logger.info(`fetch start: ${uidPath}`);
      clearCache(config.get('storagePath'), studyUid);
      scu(getOptions, (result: any) => {
        if (result && result.length > 0) {
          try {
            const json = JSON.parse(result);
            if (json.code === 0 || json.code === 2) {
              logger.info(`fetch finished: ${uidPath}`);
              storage
                .getItem(studyUid)
                .then((item: any) => {
                  if (!item) {
                    if (cacheTime >= 0) {
                      const minutes = addMinutes(new Date(), cacheTime);
                      if (studyUid && minutes) {
                        storage.setItem(studyUid, minutes);
                      }
                    }
                  }
                })
                .catch((e: any) => {
                  logger.error(e);
                });
              resolve(result);
            } else {
              logger.info(JSON.parse(result));
            }
          } catch (error) {
            reject(error);
          }
          lock.delete(lockId);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
  // store in lock
  lock.set(lockId, prom);
  return prom;
};

//------------------------------------------------------------------

const utils = {
  getLogger(): simpleLogger.Logger {
    return logger;
  },

  async init() {
    const persistPath = path.join(config.get('storagePath'), 'persist');
    await storage.init({ dir: persistPath });
  },

  async startScp() {
    const ts = config.get('transferSyntax') as string;

    const options: storeScpOptions = {
      source: config.get('source'),
      peers: [config.get('target')],
      storagePath: config.get('storagePath'),
      netTransferPrefer: ts,
      netTransferPropose: ts,
      writeTransfer: ts,
      permissive: true,
      verbose: config.get('verboseLogging'),
    };
    logger.info(`pacs-server listening on port: ${options.source?.port}`);

    startStoreScp(options, (result: any) => {
      // currently this will never finish
      logger.info(JSON.parse(result));
    });
  },

  async shutdown() {
    const options: shutdownScuOptions = {
      source: config.get('source'),
      target: config.get('source'),
      verbose: config.get('verboseLogging'),
    };

    logger.info(`sending shutdown request to target: ${options.target?.aet}`);

    return new Promise((resolve, reject) => {
      shutdownScu(options, (result: any) => {
        if (result && result.length > 0) {
          try {
            logger.info(JSON.parse(result));
            resolve(true);
          } catch (error) {
            logger.error(result);
            reject(error);
          }
        }
        reject();
      });
    });
  },

  async sendEcho() {
    const options: echoScuOptions = {
      source: config.get('source'),
      target: config.get('target'),
      verbose: config.get('verboseLogging'),
    };

    logger.info(`sending C-ECHO to target: ${options.target?.aet}`);

    return new Promise((resolve, reject) => {
      echoScu(options, (result: any) => {
        if (result && result.length > 0) {
          try {
            logger.info(JSON.parse(result));
            resolve(true);
          } catch (error) {
            logger.error(result);
            reject(error);
          }
        }
        reject();
      });
    });
  },

  async waitOrFetchData(studyUid: string, seriesUid: string, imageUid: string, level: string): Promise<any> {
    const lockId = getLockUid(studyUid, seriesUid, imageUid, level);

    // check if already locked and return promise
    if (lock.has(lockId)) {
      return lock.get(lockId);
    }
    return await throatLock(async () => await fetchData(studyUid, seriesUid, imageUid, level));
  },

  fileExists(pathname: string): Promise<boolean> {
    return new Promise((resolve) => {
      fs.access(pathname, (err: any) => {
        err ? resolve(false) : resolve(true);
      });
    });
  },

  compressFile(inputFile: string, outputDirectory: string, transferSyntax: string | undefined) {
    const options: recompressOptions = {
      sourcePath: inputFile,
      storagePath: outputDirectory,
      writeTransfer: transferSyntax || config.get('transferSyntax'),
      verbose: config.get('verboseLogging'),
    };

    // run find scu and return json response
    return new Promise((resolve, reject) => {
      recompress(options, (result: any) => {
        if (result && result.length > 0) {
          try {
            const json = JSON.parse(result);
            if (json.code === 0) {
              resolve(true);
            } else {
              logger.error(`recompression failure (${inputFile}): ${json.message}`);
              reject();
            }
          } catch (error) {
            logger.error(error);
            logger.error(result);
            reject();
          }
        } else {
          logger.error('invalid result received');
          reject();
        }
      });
    });
  },

  studyLevelTags() {
    return [
      '00080005',
      '00080020',
      '00080030',
      '00080050',
      '00080054',
      '00080056',
      '00080061',
      '00080090',
      '00081190',
      '00100010',
      '00100020',
      '00100030',
      '00100040',
      '0020000D',
      '00200010',
      '00201206',
      '00201208',
    ];
  },

  seriesLevelTags() {
    return ['00080005', '00080054', '00080056', '00080060', '0008103E', '00081190', '0020000E', '00200011', '00201209'];
  },

  imageLevelTags() {
    return ['00080016', '00080018'];
  },

  async doFind(queryLevel: string, query: any, defaults: string[]): Promise<any> {
    // add query retrieve level
    const options: findScuOptions = {
      tags: [
        {
          key: '00080052',
          value: queryLevel,
        },
      ],
      source: config.get('source'),
      target: config.get('target'),
      verbose: config.get('verboseLogging'),
    };

    // parse all include fields
    const includes = query.includefield;

    let tags = new Array<string>();
    if (includes) {
      tags = includes.split(',');
    }
    tags.push(...defaults);

    // add parsed tags
    tags.forEach((element: any) => {
      const tagName = findDicomName(element) || element;
      options.tags.push({ key: tagName, value: '' });
    });

    // add search param
    let invalidInput = false;
    const minCharsQido = config.get('qidoMinChars') as string;
    Object.keys(query).forEach((propName) => {
      const tag = findDicomName(propName);
      if (tag) {
        let v = query[propName];
        // patient name check
        if (tag === '00100010') {
          // check if minimum number of chars for patient name are given
          if (minCharsQido > v.length) {
            invalidInput = true;
          }
          // auto append wildcard
          if (config.get('qidoAppendWildcard')) {
            v += '*';
          }
        }
        options.tags.push({ key: tag, value: v });
      }
    });

    const offset = query.offset ? parseInt(query.offset, 10) : 0;

    // run find scu and return json response
    return new Promise((resolve) => {
      // return with empty results if invalid
      if (invalidInput) {
        resolve([]);
      }
      findScu(options, (result: any) => {
        if (result && result.length > 0) {
          try {
            const json = JSON.parse(result);
            if (json.code === 0) {
              const container = JSON.parse(json.container);
              if (container) {
                resolve(container.slice(offset));
              } else {
                resolve([]);
              }
            } else if (json.code === 1) {
              logger.info('query is pending...');
            } else {
              logger.error(`c-find failure: ${json.message}`);
              resolve([]);
            }
          } catch (error) {
            logger.error(error);
            logger.error(result);
            resolve([]);
          }
        } else {
          logger.error('invalid result received');
          resolve([]);
        }
      });
    });
  },
  async doWadoUri(query: any) {
    const fetchLevel = config.get('useFetchLevel') as string;
    const studyUid = query.studyUID as string;
    const seriesUid = query.seriesUID as string;
    const imageUid = query.objectUID as string;
    if (!studyUid || !seriesUid || !imageUid) {
      const msg = `Error missing parameters.`;
      logger.error(msg);
      throw msg;
    }
    const storagePath = config.get('storagePath') as string;
    const studyPath = path.join(storagePath, studyUid);
    const pathname = path.join(studyPath, imageUid);

    try {
      await utils.fileExists(pathname);
    } catch (error) {
      try {
        await utils.waitOrFetchData(studyUid, seriesUid, imageUid, fetchLevel);
      } catch (e) {
        logger.error(e);
        const msg = `fetch failed`;
        throw msg;
      }
    }

    try {
      await utils.fileExists(pathname);
    } catch (error) {
      logger.error(error);
      const msg = `file not found ${pathname}`;
      throw msg;
    }

    try {
      await utils.compressFile(pathname, studyPath, undefined);
    } catch (error) {
      logger.error(error);
      const msg = `failed to compress ${pathname}`;
      throw msg;
    }

    // read file from file system
    const fsPromise = fs.promises;
    try {
      return fsPromise.readFile(pathname);
    } catch (error) {
      logger.error(error);
      const msg = `failed to read ${pathname}`;
      throw msg;
    }
  },
};

export default utils;
