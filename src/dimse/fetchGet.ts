
import { ConfParams, config } from '../utils/config';
import { getScu, getScuOptions } from 'dicom-dimse-native';
import { LoggerSingleton } from '../utils/logger';
import { QUERY_LEVEL, queryLevelToPath, stringToQueryLevel, queryLevelToString } from './querLevel';

// request data from PACS via c-get or c-move
export async function fetchGet (studyUid: string, seriesUid: string, imageUid: string, level: QUERY_LEVEL): Promise<any> {
  const logger = LoggerSingleton.Instance;

  // add query retrieve level and fetch whole study
  const ts = config.get(ConfParams.XTRANSFER) as string;
  const getOptions: getScuOptions = {
    tags: [
      {
        key: '00080052',
        value: queryLevelToString(level),
      },
      {
        key: '0020000D',
        value: studyUid,
      },
    ],
    netTransferPrefer: ts,
    source: config.get(ConfParams.SOURCE),
    target: config.get(ConfParams.TARGET),
    verbose: config.get(ConfParams.VERBOSE) as boolean,
    storagePath: config.get(ConfParams.STORAGE_PATH),
  };

  if (level >= QUERY_LEVEL.SERIES) {
    getOptions.tags.push({
      key: '0020000E',
      value: seriesUid,
    });
  }

  if (level >= QUERY_LEVEL.IMAGE) {
    getOptions.tags.push({
      key: '00080018',
      value: imageUid,
    });
  }
  const uidPath = queryLevelToPath(studyUid, seriesUid, imageUid, level);

  return new Promise((resolve, reject) => {
    try {
      logger.info(`fetch start: ${uidPath}`);
      getScu(getOptions, (result: any) => {
        if (result && result.length > 0) {
          try {
            const json = JSON.parse(result);
            if (json.code === 0 || json.code === 2) {
              logger.info(`fetch finished: ${uidPath}`);
              resolve(result);
            } else {
              logger.info(JSON.parse(result));
            }
          } catch (error) {
            reject(error);
          }
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};
