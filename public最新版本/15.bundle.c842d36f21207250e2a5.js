(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1071:function(e,t,n){},1109:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1072),i=n(1),c=n.n(i),l=n(8),s=n.n(l),u=(n(1071),n(6)),d=n.n(u);function f(e,t){if(null!==e)return parseFloat(e).toFixed(t)}var p=n(19),m=n.n(p),y=n(20),v=n(86),b=n(79);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  color: white;\n  padding: 2px 7px;\n  border-radius: 10px;\n  outline: 0;\n  text-transform: none;\n  margin: 2px 2px;\n  cursor: pointer;\n  &:disabled {\n    cursor: default;\n    opacity: 0.9;\n  }\n"]);return O=function(){return e},e}var S,x,P,D=o.a.button(O()),k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),I(this,w(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.imageId,n=e.scale,r=e.windowWidth,o=e.windowCenter,i=e.inconsistencyWarnings,c=e.SRLabels;if(!t)return null;var l,u=f(100*n,0),p=s.a.metaData.get("generalSeriesModule",t)||{},h=s.a.metaData.get("imagePlaneModule",t)||{},g=h.rows,I=h.columns,w=h.sliceThickness,E=h.sliceLocation,O=p.seriesNumber,S=p.seriesDescription,x=s.a.metaData.get("generalStudyModule",t)||{},P=x.studyDate,k=x.studyTime,T=x.studyDescription,R=s.a.metaData.get("patientModule",t)||{},j=R.patientId,C=R.patientName,L=(s.a.metaData.get("generalImageModule",t)||{}).instanceNumber,M=f(1e3/(s.a.metaData.get("cineModule",t)||{}).frameTime,1),F=function(e){var t=cornerstone.metaData.get("generalImageModule",e)||{},n=t.lossyImageCompression,r=t.lossyImageCompressionRatio,a=t.lossyImageCompressionMethod;return"01"===n&&""!==r?(a||"Lossy: ")+f(r,2)+" : 1":"Lossless / Uncompressed"}(t),N="W: ".concat(r.toFixed?r.toFixed(0):r," L: ").concat(r.toFixed?o.toFixed(0):o),A="".concat(I," x ").concat(g),U=this.props,_=U.imageIndex,Y=U.stackSize,B=!(!i||0===i.length),q=function(e){if(Array.isArray(e)){var t=e.map((function(e,t){return a.a.createElement("li",{key:t},e)}));return a.a.createElement("ol",null,t)}return a.a.createElement(a.a.Fragment,null,e)},V=!(!c||0===c.length),W=a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"top-left overlay-element"},a.a.createElement("div",null,function(e){if(e)return e.replace("^",", ").replace(/\^/g," ").trim()}(C)),a.a.createElement("div",null,j)),a.a.createElement("div",{className:"top-right overlay-element"},a.a.createElement("div",null,T),a.a.createElement("div",null,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MMM D, YYYY";return d()(e,"YYYYMMDD").format(t)}(P)," ",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:mm:ss";return d()(e,"HH:mm:ss").format(t)}(k))),a.a.createElement("div",{className:"bottom-right overlay-element"},a.a.createElement("div",null,"Zoom: ",u,"%"),a.a.createElement("div",null,N),a.a.createElement("div",{className:"compressionIndicator"},F)),a.a.createElement("div",{className:"bottom-left2 warning"},a.a.createElement("div",null,B?function(e,t){return a.a.createElement(a.a.Fragment,null,0!=t.length?a.a.createElement(b.a,{key:e,placement:"left",overlay:a.a.createElement(v.a,{placement:"left",className:"in tooltip-warning",id:"tooltip-left"},a.a.createElement("div",{className:"warningTitle"},"Series Inconsistencies"),a.a.createElement("div",{className:"warningContent"},q(t)))},a.a.createElement("div",{className:m()("warning")},a.a.createElement("span",{className:"warning-icon"},a.a.createElement(y.a,{name:"exclamation-triangle"})))):a.a.createElement(a.a.Fragment,null))}(O,i):"")),a.a.createElement("div",{className:"bottom-left3 warning"},a.a.createElement("div",null,V?function(e){return a.a.createElement(a.a.Fragment,null,0!=e.length?function(e){if(Array.isArray(e)){var t=e.map((function(e,t){var n=e.labels.color;return e.labels.visible&&a.a.createElement(b.a,{key:t,placement:"top",overlay:a.a.createElement(v.a,{placement:"top",className:"in tooltip-warning",id:"tooltip-top"},a.a.createElement("div",{className:"warningTitle"}," ","Coding scheme designators"," "),a.a.createElement("div",{className:"warningContent"},e.labels.labelCodingSchemeDesignator+" : "+e.labels.valueCodingSchemeDesignator))},a.a.createElement("div",{style:{display:"inline-block"}},a.a.createElement(D,{style:{backgroundColor:n},disabled:!0,key:t},e.labels.label+" : "+e.labels.value)))}));return a.a.createElement("ol",null,t)}return a.a.createElement(a.a.Fragment,null)}(e):a.a.createElement(a.a.Fragment,null))}(c):"")),a.a.createElement("div",{className:"bottom-left overlay-element"},a.a.createElement("div",null,O>=0?"Ser: ".concat(O):""),a.a.createElement("div",null,Y>1?"Img: ".concat(L," ").concat(_,"/").concat(Y):""),a.a.createElement("div",null,M>=0?"".concat(f(M,2)," FPS"):"",a.a.createElement("div",null,A),a.a.createElement("div",null,"number"!=typeof(l=E)||isNaN(l)?"":"Loc: ".concat(f(E,2)," mm "),w?"Thick: ".concat(f(w,2)," mm"):""),a.a.createElement("div",null,S))));return a.a.createElement("div",{className:"OHIFCornerstoneViewportOverlay"},W)}}])&&g(n.prototype,r),o&&g(n,o),t}(r.PureComponent);S=k,x="propTypes",P={scale:c.a.number.isRequired,windowWidth:c.a.oneOfType([c.a.number.isRequired,c.a.string.isRequired]),windowCenter:c.a.oneOfType([c.a.number.isRequired,c.a.string.isRequired]),imageId:c.a.string.isRequired,imageIndex:c.a.number.isRequired,stackSize:c.a.number.isRequired,inconsistencyWarnings:c.a.array,SRLabels:c.a.array},x in S?Object.defineProperty(S,x,{value:P,enumerable:!0,configurable:!0,writable:!0}):S[x]=P;var T=k,R=n(1074),j=n.n(R),C=n(16),L=n(63),M=n(144),F=n.n(M),N=n(62),A=n(7),U=n.n(A),_={DICOM_SR_DISPLAY_TOOL:"DICOMSRDisplayTool"},Y={TEXT:"TEXT",POINT:"POINT",MULTIPOINT:"MULTIPOINT",POLYLINE:"POLYLINE",CIRCLE:"CIRCLE",ELLIPSE:"ELLIPSE",POLYGON:"POLYGON"},B=n(276);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var G=Object(A.importInternal)("drawing/draw"),J=Object(A.importInternal)("drawing/drawJoinedLines"),Z=Object(A.importInternal)("drawing/drawCircle"),K=Object(A.importInternal)("drawing/drawEllipse"),Q=Object(A.importInternal)("drawing/drawHandles"),$=Object(A.importInternal)("drawing/drawArrow"),ee=Object(A.importInternal)("drawing/getNewContext"),te=Object(A.importInternal)("base/BaseTool"),ne=Object(A.importInternal)("drawing/drawLinkedTextBox"),re=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r={mixins:["enabledOrDisabledBinaryTool"],name:_.DICOM_SR_DISPLAY_TOOL},a=Object.assign(r,n);return(e=H(this,X(t).call(this,a)))._module=U.a.getModule(B.a),e}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,e),n=t,(r=[{key:"renderToolData",value:function(e){var t=this,n=e.detail,r=n.element,a=this._module,o=Object(A.getToolState)(r,this.name);if(o)for(var i=a.getters.trackingUniqueIdentifiersForElement(r),c=i.activeIndex,l=i.trackingUniqueIdentifiers,s=l[c],u=o.data.filter((function(e){return l.includes(e.TrackingUniqueIdentifier)})),d=function(e){var r=u[e],a=r.renderableData,o=r.labels,i=r.TrackingUniqueIdentifier===s?A.toolColors.getActiveColor():A.toolColors.getToolColor(),c={color:i,lineWidth:2,handleRadius:6};Object.keys(a).forEach((function(e){var r=a[e];switch(e){case Y.TEXT:break;case Y.POINT:t.renderPoint(r,n,c);break;case Y.MULTIPOINT:t.renderMultipoint(r,n,c);break;case Y.POLYGON:case Y.POLYLINE:t.renderPolyLine(r,n,c);break;case Y.CIRCLE:t.renderCircle(r,n,c);break;case Y.ELLIPSE:t.renderEllipse(r,n,c)}}));var l=n.element,d=ee(n.canvasContext.canvas);if(!r.handles||!r.handles.textBox){var f={active:!1,hasMoved:!0,movesIndependently:!1,drawnIndependently:!0,allowedOutsideImage:!0,hasBoundingBox:!0},p=function(e,t){var n=[];return Object.keys(e).forEach((function(r){var a=e[r];switch(r){case Y.TEXT:break;case Y.POINT:a.forEach((function(e){n=[].concat(V(n),V(e));var r=t.image,a=r.rows,o=r.columns/10,i=a/10,c=e[0];n.push({x:c.x+o,y:c.y+i})}));break;case Y.MULTIPOINT:case Y.POLYLINE:case Y.POLYGON:a.forEach((function(e){n=[].concat(V(n),V(e))}));break;case Y.CIRCLE:a.forEach((function(e){var t=e.center,r=e.radius;n.push({x:t.x+r,y:t.y}),n.push({x:t.x-r,y:t.y}),n.push({x:t.x,y:t.y+r}),n.push({x:t.x,y:t.y-r})}));break;case Y.ELLIPSE:a.forEach((function(e){var t=e.corner1,r=e.corner2,a=Math.abs(t.x-r.x)/2,o=Math.abs(t.y-r.y)/2,i={x:(t.x+r.x)/2,y:(t.y+r.y)/2};n.push({x:i.x+a,y:i.y}),n.push({x:i.x-a,y:i.y}),n.push({x:i.x,y:i.y+o}),n.push({x:i.x,y:i.y-o})}))}})),n}(a,n);f.anchorPoints=p;var m={x:Math.max.apply(Math,V(p.map((function(e){return e.x})))),y:Math.max.apply(Math,V(p.map((function(e){return e.y}))))};f.x=m.x,f.y=m.y,r.handles={},r.handles.textBox=f}var y=function(e){for(var t=Math.min(e.length,3),n=[],r=0;r<t;r++){var a=e[r];n.push("".concat(oe(a.label)).concat(a.value))}return n}(o);function v(){return r.handles.textBox.anchorPoints}0!==r.handles.textBox.anchorPoints.length&&G(d,(function(e){ne(e,l,r.handles.textBox,y,r.handles,v,i,2,0,!0)}))},f=0;f<u.length;f++)d(f)}},{key:"renderPolyLine",value:function(e,t,n){var r=t.element,a=ee(t.canvasContext.canvas);e.forEach((function(e){G(a,(function(t){J(t,r,e[0],e,n)}))}))}},{key:"renderMultipoint",value:function(e,t,n){var r=ee(t.canvasContext.canvas);e.forEach((function(e){G(r,(function(r){Q(r,t,e,n)}))}))}},{key:"renderPoint",value:function(e,t,n){var r=t.element,a=t.image,o=a.rows,i=a.columns,c=ee(t.canvasContext.canvas),l=n.color,u=n.lineWidth,d=i/10,f=o/10;e.forEach((function(e){var t=e[0];G(c,(function(e){var n=s.a.pixelToCanvas(r,t),a=s.a.pixelToCanvas(r,{x:t.x+d,y:t.y+f});$(e,a,n,l,u,!1)}))}))}},{key:"renderCircle",value:function(e,t,n){var r=t.element,a=ee(t.canvasContext.canvas);e.forEach((function(e){var t=e.center,o=e.radius;Z(a,r,t,o,n)}))}},{key:"renderEllipse",value:function(e,t,n){var r=t.element,a=ee(t.canvasContext.canvas);e.forEach((function(e){var t=e.corner1,o=e.corner2;K(a,r,t,o,n,"pixel",0)}))}}])&&W(n.prototype,r),a&&W(n,a),t}(te);var ae={"Short Axis":"W ","Long Axis":"L ",AREA:"Area ",Length:"",CORNERSTONEFREETEXT:""};function oe(e){var t=ae[e];return void 0!==t?t:e}var ie=function(e){var t=function(e){var t=e;switch(e){case"Length":t="SRLength";break;case"Bidirectional":t="SRBidirectional";break;case"ArrowAnnotate":t="SRArrowAnnotate";break;case"EllipticalRoi":t="SREllipticalRoi";break;case"FreehandRoi":t="SRFreehandRoi";break;case"RectangleRoi":t="SRRectangleRoi"}return t}("Wwwc");U.a.addToolForElement(e,re),U.a.setToolEnabledForElement(e,_.DICOM_SR_DISPLAY_TOOL),U.a.addToolForElement(e,U.a.LengthTool,{name:"SRLength",configuration:{renderDashed:!0}}),U.a.addToolForElement(e,U.a.ArrowAnnotateTool,{name:"SRArrowAnnotate",configuration:{renderDashed:!0}}),U.a.addToolForElement(e,U.a.BidirectionalTool,{name:"SRBidirectional",configuration:{renderDashed:!0}}),U.a.addToolForElement(e,U.a.EllipticalRoiTool,{name:"SREllipticalRoi",configuration:{renderDashed:!0}}),U.a.addToolForElement(e,U.a.RectangleRoiTool,{name:"SRRectangleRoi",configuration:{renderDashed:!0}}),U.a.addToolForElement(e,U.a.FreehandRoiTool,{name:"SRFreehandRoi",configuration:{renderDashed:!0}}),U.a.setToolActiveForElement(e,"PanMultiTouch",{pointers:2}),U.a.setToolActiveForElement(e,"ZoomTouchPinch",{}),U.a.setToolActiveForElement(e,t,{mouseButtonMask:1}),U.a.setToolActiveForElement(e,"Pan",{mouseButtonMask:4}),U.a.setToolActiveForElement(e,"Zoom",{mouseButtonMask:2}),U.a.setToolActiveForElement(e,"StackScrollMouseWheel",{})};function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var se=C.a.redux.actions,ue=se.setViewportActive,de=se.setViewportSpecificData,fe=C.a.measurements.MeasurementHandlers,pe=fe.onAdded,me=fe.onRemoved,ye=fe.onModified,ve={added:pe,removed:me,modified:F()((function(e){return ye(e)}),300)},be=Object(L.b)((function(e,t){var n;e.extensions&&e.extensions.cornerstone&&(n=e.extensions.cornerstone);var r=t.viewportIndex,a=r===e.viewports.activeViewportIndex,o=e.viewports.viewportSpecificData[r]||{},i=!1,c=24;if(o&&o.cine){var l=o.cine;i=!0===l.isPlaying,c=l.cineFrameRate||c}return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(n,!0).forEach((function(t){le(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isActive:a},n,{isStackPrefetchEnabled:t.hasOwnProperty("isStackPrefetchEnabled")?t.isStackPrefetchEnabled:t.stackPrefetch?t.stackPrefetch.enabled:a,isPlaying:i,frameRate:c})}),(function(e,t){var n=t.viewportIndex;return{setViewportActive:function(){e(ue(n))},setViewportSpecificData:function(t){e(de(n,t))},onElementEnabled:function(t){var r=t.detail.element;Object(N.b)(n,r),e(de(n,{plugin:"cornerstone"})),ie(r)},onMeasurementsChanged:function(e,t){return ve[t](e)}}}))(j.a),he=C.a.utils.studyMetadataManager,ge=function(e){var t=e.viewportIndex,n=e.displaySet,r=U.a.getModule(B.a),a=Object(N.a)(t);if(a){var o=n.StudyInstanceUID,i=he.get(o);if(i){var c=i.getDisplaySets().filter((function(e){return"SR"===e.Modality}));if(0!==c.length){var l=c[0].measurements;if(l&&!(l.length<1)){var u=l.filter((function(e){return!0===e.loaded})),d=u[0];if(d){r.setters.trackingUniqueIdentifiersForElement(a,u.map((function(e){return e.TrackingUniqueIdentifier})),d);var f=d.TrackingUniqueIdentifier;r.setters.activeTrackingUniqueIdentifierForElement(a,f),s.a.updateImage(a)}}}}}};function Ie(e){return(Ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ee(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function Oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pe(e,t){return(Pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ke=C.a.utils.StackManager,Te=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return r=this,n=!(a=(e=Se(t)).call.apply(e,[this].concat(i)))||"object"!==Ie(a)&&"function"!=typeof a?xe(r):a,De(xe(n),"state",{viewportData:null}),De(xe(n),"getViewportData",function(){var e,n=(e=regeneratorRuntime.mark((function e(n,r,a,o,i){var c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.getCornerstoneStack(n,r,a,o,i),c={StudyInstanceUID:r,displaySetInstanceUID:a,stack:l},e.abrupt("return",c);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){Ee(o,r,a,i,c,"next",e)}function c(e){Ee(o,r,a,i,c,"throw",e)}i(void 0)}))});return function(e,t,r,a,o){return n.apply(this,arguments)}}()),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Pe(e,t)}(t,e),n=t,o=[{key:"init",value:function(){console.log("OHIFCornerstoneViewport init()")}},{key:"destroy",value:function(){console.log("OHIFCornerstoneViewport destroy()"),ke.clearStacks()}},{key:"getCornerstoneStack",value:function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(!e||!e.length)throw new Error("Studies not provided.");if(!t)throw new Error("StudyInstanceUID not provided.");if(!n)throw new Error("StudyInstanceUID not provided.");var o=e.find((function(e){return e.StudyInstanceUID===t}));if(!o)throw new Error("Study not found.");var i=o.displaySets.find((function(e){return e.displaySetInstanceUID===n}));if(!i)throw new Error("Display Set not found.");var c=ke.findOrCreateStack(o,i),l=Object.assign({},c);if(l.currentImageIdIndex=a,r){var u=l.imageIds.findIndex((function(e){return s.a.metaData.get("SOPInstanceUID",e)===r}));u>-1?l.currentImageIdIndex=u:console.warn("SOPInstanceUID provided was not found in specified DisplaySet")}return l}}],(r=[{key:"setStateFromProps",value:function(){var e=this,t=this.props.viewportData,n=t.studies,r=t.displaySet,a=r.StudyInstanceUID,o=r.displaySetInstanceUID,i=r.sopClassUIDs,c=r.SOPInstanceUID,l=r.frameIndex;a&&o&&(i&&i.length>1&&console.warn("More than one SOPClassUID in the same series is not yet supported."),this.getViewportData(n,a,o,c,l).then((function(t){e.setState({viewportData:t})})))}},{key:"componentDidMount",value:function(){this.setStateFromProps()}},{key:"componentDidUpdate",value:function(e){var t=this.props.viewportData.displaySet,n=e.viewportData.displaySet;if(t.displaySetInstanceUID!==n.displaySetInstanceUID||t.SOPInstanceUID!==n.SOPInstanceUID||t.frameIndex!==n.frameIndex){var r=this.props.viewportIndex;ge({displaySet:t,viewportIndex:r}),this.setStateFromProps()}}},{key:"render",value:function(){var e=this,t=null;if(!this.state.viewportData)return null;var n=this.props.viewportIndex,r=this.props.viewportData.displaySet.inconsistencyWarnings,o=this.state.viewportData.stack,i=o.imageIds,c=o.currentImageIdIndex;return this.props.children&&this.props.children.length&&(t=this.props.children.map((function(t,n){return t&&a.a.cloneElement(t,{viewportIndex:e.props.viewportIndex,key:n})}))),a.a.createElement(a.a.Fragment,null,a.a.createElement(be,we({viewportIndex:n,imageIds:i,imageIdIndex:c,onNewImageDebounced:function(t){var r=t.currentImageIdIndex,a=t.sopInstanceUid,o=e.props.viewportData.displaySet.StudyInstanceUID;r>=0&&e.props.onNewImage({StudyInstanceUID:o,SOPInstanceUID:a,frameIndex:r,activeViewportIndex:n})},onNewImageDebounceTime:300,viewportOverlayComponent:function(t){var n,o=e.props.viewportData.displaySet;return o.SRLabels&&0!==o.SRLabels.length&&(n=o.SRLabels.filter((function(e){return e.ReferencedSOPInstanceUID===o.SOPInstanceUID}))),a.a.createElement(T,we({},t,{inconsistencyWarnings:r,SRLabels:n}))},stackPrefetch:this.props.stackPrefetch,isStackPrefetchEnabled:this.props.isStackPrefetchEnabled},this.props.customProps)),t)}}])&&Oe(n.prototype,r),o&&Oe(n,o),t}(r.Component);De(Te,"defaultProps",{customProps:{},isStackPrefetchEnabled:!0}),De(Te,"propTypes",{studies:c.a.object,displaySet:c.a.object,viewportIndex:c.a.number,children:c.a.node,customProps:c.a.object,stackPrefetch:c.a.object,isStackPrefetchEnabled:c.a.bool}),De(Te,"id","OHIFCornerstoneViewport");t.default=Te}}]);
//# sourceMappingURL=15.bundle.c842d36f21207250e2a5.js.map