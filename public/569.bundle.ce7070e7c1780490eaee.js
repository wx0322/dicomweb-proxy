/*! For license information please see 569.bundle.ce7070e7c1780490eaee.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[569],{33569:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(32735),o=n(60216),i=n.n(o),a=n(84334),c=n(72928),u=n(11429),s=n(38942);var l=function(t,e,n){var r=n.getModuleEntry("@ohif/extension-cornerstone.utilityModule.tools").exports,o=r.toolNames,i=r.Enums,a={active:[{toolName:o.WindowLevel,bindings:[{mouseButton:i.MouseBindings.Primary}]},{toolName:o.Pan,bindings:[{mouseButton:i.MouseBindings.Auxiliary}]},{toolName:o.Zoom,bindings:[{mouseButton:i.MouseBindings.Secondary}]},{toolName:o.StackScrollMouseWheel,bindings:[]}],enabled:[{toolName:o.SegmentationDisplay}]};return t.createToolGroupAndAddTools(e,a,{})};function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(){p=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return N()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function h(){}function d(){}function v(){}var y={};c(y,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(D([])));g&&g!==e&&n.call(g,o)&&(y=g);var w=v.prototype=h.prototype=Object.create(y);function S(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==f(p)&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function D(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=v,c(w,"constructor",v),c(v,"constructor",d),d.displayName=c(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},S(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(w),c(w,a,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=D,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:D(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}function h(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){h(i,r,o,a,c,"next",t)}function c(t){h(i,r,o,a,c,"throw",t)}a(void 0)}))}}function v(){return(v=d(p().mark((function t(e){var n,r,o,i,a,c,u,s,l,f,h,d,v;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.segDisplaySet,r=e.viewportIndex,o=e.toolGroupId,i=e.servicesManager,a=i.services,c=a.SegmentationService,u=a.HangingProtocolService,s=a.ViewportGridService,l=n.referencedDisplaySetInstanceUID,f=null,!1,t.next=7,c.createSegmentationForSEGDisplaySet(n,f,false);case 7:return f=t.sent,c.hydrateSegmentation(n.displaySetInstanceUID),h=s.getState(),d=h.viewports,v=u.getViewportsRequireUpdate(r,l),s.setDisplaySetsForViewports(v),d.forEach((function(t,e){e!==r&&(c.shouldRenderSegmentation(t.displaySetInstanceUIDs,n.displaySetInstanceUID)&&s.setDisplaySetsForViewport({viewportIndex:e,displaySetInstanceUIDs:t.displaySetInstanceUIDs,viewportOptions:{viewportType:"volume",toolGroupId:o,initialImageOptions:{preset:"middle"}}}))})),t.abrupt("return",!0);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=function(t){return v.apply(this,arguments)};function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(){g=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return N()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=x(a,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function f(){}function p(){}function h(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(D([])));y&&y!==e&&n.call(y,o)&&(d=y);var w=h.prototype=f.prototype=Object.create(d);function S(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==m(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function D(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=h,c(w,"constructor",h),c(h,"constructor",p),p.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},S(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(w),c(w,a,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=D,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:D(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}function w(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}var S=0,b=5;function x(t,e){return new Promise((function(n,r){var o=[{type:"secondary",text:"No",value:S},{type:"primary",text:"Yes",value:b}];t.show({viewportIndex:e,type:"info",message:"Do you want to open this Segmentation?",actions:o,onSubmit:function(e){t.hide(),n(e)},onOutsideClick:function(){t.hide(),n(S)}})}))}var E=function(t){var e=t.servicesManager,n=t.segDisplaySet,r=t.viewportIndex,o=t.toolGroupId,i=void 0===o?"default":o,a=e.services.UIViewportDialogService;return new Promise(function(){var t,o=(t=g().mark((function t(o,c){var u;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(a,r);case 2:if(t.sent!==b){t.next=8;break}return t.next=6,y({segDisplaySet:n,viewportIndex:r,toolGroupId:i,servicesManager:e});case 6:u=t.sent,o(u);case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){w(i,r,o,a,c,"next",t)}function c(t){w(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(t,e){return o.apply(this,arguments)}}())},I=n(40841),L=n.n(I);function D(){return D=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},D.apply(this,arguments)}function N(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return P(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var O=c.ZP.formatDate;function k(t){var e=t.children,n=t.displaySets,o=t.viewportOptions,i=t.viewportIndex,c=t.viewportLabel,f=t.servicesManager,p=t.extensionManager,h=((0,s.$G)("SEGViewport").t,f.services),d=h.DisplaySetService,v=h.ToolGroupService,y=h.SegmentationService,m=h.UINotificationService,g="".concat("SEGToolGroup","-").concat(i);if(n.length>1)throw new Error("SEG viewport should only have a single display set");var w=n[0],S=N((0,u.O_)(),2),b=S[0],x=S[1],I=N((0,u.en)(),2),P=I[0],k=(I[1],N((0,r.useState)(!1),2)),_=(k[0],k[1]),G=N((0,r.useState)(1),2),T=G[0],j=G[1],A=N((0,r.useState)(w.isHydrated),2),M=A[0],F=A[1],U=N((0,r.useState)(!w.isLoaded),2),C=U[0],V=U[1],R=N((0,r.useState)(null),2),B=(R[0],R[1]),Y=N((0,r.useState)({segmentIndex:1,totalSegments:null}),2),H=Y[0],Z=Y[1],q=(0,r.useRef)(null),J=b.viewports,W=b.activeViewportIndex,X=w.getReferenceDisplaySet(),$=function(t){var e=t.images[0];return{PatientID:e.PatientID,PatientName:e.PatientName,PatientSex:e.PatientSex,PatientAge:e.PatientAge,SliceThickness:e.SliceThickness,StudyDate:e.StudyDate,SeriesDescription:e.SeriesDescription,SeriesInstanceUID:e.SeriesInstanceUID,SeriesNumber:e.SeriesNumber,ManufacturerModelName:e.ManufacturerModelName,SpacingBetweenSlices:e.SpacingBetweenSlices}}(X);q.current={displaySet:X,metadata:$};var z=function(t){B(t.detail.element)},K=function(){B(null)},Q=(0,r.useCallback)((function(){var e=p.getModuleEntry("@ohif/extension-cornerstone.viewportModule.cornerstone").component,n=q.current.displaySet;return r.createElement(e,D({},t,{displaySets:[n,w],viewportOptions:{viewportType:"volume",toolGroupId:g,orientation:o.orientation,viewportId:o.viewportId},onElementEnabled:z,onElementDisabled:K}))}),[i,w,g]),tt=(0,r.useCallback)((function(t){t="left"===t?-1:1;var e=w.displaySetInstanceUID,n=y.getSegmentation(e).segments,r=Object.keys(n).length,o=T+t;o>r-1?o=1:0===o&&(o=r-1),y.jumpToSegmentCenter(e,o,g),j(o)}),[T]);(0,r.useEffect)((function(){C||E({servicesManager:f,viewportIndex:i,segDisplaySet:w}).then((function(t){t&&F(!0)}))}),[f,i,w,C]),(0,r.useEffect)((function(){var t=y.subscribe(y.EVENTS.SEGMENTATION_PIXEL_DATA_CREATED,(function(t){t.segDisplaySet.displaySetInstanceUID===w.displaySetInstanceUID&&V(!1),t.overlappingSegments&&m.show({title:"Overlapping Segments",message:"Overlapping segments detected which is not currently supported",type:"warning"})})).unsubscribe;return function(){t()}}),[w]),(0,r.useEffect)((function(){var t=y.subscribe(y.EVENTS.SEGMENT_PIXEL_DATA_CREATED,(function(t){var e=t.segmentIndex,n=t.numSegments;Z({segmentIndex:e,totalSegments:n})})).unsubscribe;return function(){t()}}),[w]),(0,r.useEffect)((function(){var t=d.subscribe(d.EVENTS.DISPLAY_SETS_REMOVED,(function(t){var e=t.displaySetInstanceUIDs,n=J[W];e.includes(n.displaySetInstanceUID)&&x.setDisplaySetsForViewport({viewportIndex:W,displaySetInstanceUIDs:[]})}));return function(){t.unsubscribe()}}),[]),(0,r.useEffect)((function(){var t=v.getToolGroup(g);if(!t)return t=l(v,g,p),_(!0),function(){y.removeSegmentationRepresentationFromToolGroup(g),v.destroyToolGroup(g)}}),[]),(0,r.useEffect)((function(){return F(w.isHydrated),function(){y.removeSegmentationRepresentationFromToolGroup(g),q.current=null}}),[w]);var et=null;if(!q.current||X.displaySetInstanceUID!==q.current.displaySet.displaySetInstanceUID)return null;e&&e.length&&(et=e.map((function(t,e){return t&&r.cloneElement(t,{viewportIndex:i,key:e})})));var nt=q.current.metadata,rt=nt.PatientID,ot=nt.PatientName,it=nt.PatientSex,at=nt.PatientAge,ct=nt.SliceThickness,ut=nt.ManufacturerModelName,st=nt.StudyDate,lt=nt.SeriesDescription,ft=nt.SpacingBetweenSlices,pt=nt.SeriesNumber,ht=function(){E({servicesManager:f,viewportIndex:i,segDisplaySet:w}).then((function(t){t&&F(!0)}))};return r.createElement(r.Fragment,null,r.createElement(u.uY,{onDoubleClick:function(t){t.stopPropagation(),t.preventDefault()},onArrowsClick:tt,getStatusComponent:function(){return function(t){var e=t.isHydrated,n=t.onPillClick,o=null,i=null;switch(e){case!0:i=function(){return r.createElement("div",{className:"flex items-center justify-center -mr-1 rounded-full",style:{width:"18px",height:"18px",backgroundColor:"#98e5c1",border:"solid 1.5px #000000"}},r.createElement(u.JO,{name:"exclamation",style:{color:"#000",width:"12px",height:"12px"}}))},o=function(){return r.createElement("div",null,"This Segmentation is loaded in the segmentation panel")};break;case!1:i=function(){return r.createElement("div",{className:"flex items-center justify-center -mr-1 bg-white rounded-full group-hover:bg-customblue-200",style:{width:"18px",height:"18px",border:"solid 1.5px #000000"}},r.createElement(u.JO,{name:"arrow-left",style:{color:"#000",width:"14px",height:"14px"}}))},o=function(){return r.createElement("div",null,"Click to load segmentation.")}}var a=function(){return r.createElement("div",{className:L()("group relative flex items-center justify-center px-8 rounded-full cursor-default bg-customgreen-100",{"hover:bg-customblue-100":!e,"cursor-pointer":!e}),style:{height:"24px",width:"55px"},onClick:function(){e||n&&n()}},r.createElement("div",{className:"pr-1 text-base font-medium leading-none text-black"},"SEG"),r.createElement(i,null))};return r.createElement(r.Fragment,null,o&&r.createElement(u.u,{content:r.createElement(o,null),position:"bottom-left"},r.createElement(a,null)),!o&&r.createElement(a,null))}({isHydrated:M,onPillClick:ht})},studyData:{label:c,useAltStyling:!0,studyDate:O(st),currentSeries:pt,seriesDescription:"SEG Viewport ".concat(lt),patientInformation:{patientName:ot?a.ZP.utils.formatPN(ot.Alphabetic):"",patientSex:it||"",patientAge:at||"",MRN:rt||"",thickness:ct?"".concat(ct.toFixed(2),"mm"):"",spacing:void 0!==ft?"".concat(ft.toFixed(2),"mm"):"",scanner:ut||""}}}),r.createElement("div",{className:"relative flex flex-row w-full h-full overflow-hidden"},C&&r.createElement(u.LE,{className:"w-full h-full",progress:null!==H.totalSegments?(H.segmentIndex+1)/H.totalSegments*100:null,textBlock:H.totalSegments?r.createElement("span",{className:"text-white text-sm flex items-baseline space-x-2"},r.createElement("div",null,"Loading Segment"),r.createElement("div",{className:"w-3"},"".concat(H.segmentIndex)),r.createElement("div",null,"/"),r.createElement("div",null,"".concat(H.totalSegments))):r.createElement("span",{className:"text-white text-sm"},"Loading SEG ...")}),Q(),r.createElement("div",{className:"absolute w-full"},P.viewportIndex===i&&r.createElement(u.P_,{id:"viewport-notification",message:P.message,type:P.type,actions:P.actions,onSubmit:P.onSubmit,onOutsideClick:P.onOutsideClick})),et))}k.propTypes={displaySets:i().arrayOf(i().object),viewportIndex:i().number.isRequired,dataSource:i().object,children:i().node,customProps:i().object},k.defaultProps={customProps:{}};var _=k}}]);
//# sourceMappingURL=569.bundle.ce7070e7c1780490eaee.js.map