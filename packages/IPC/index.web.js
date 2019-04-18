!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("$vite_IPC",[],t):"object"==typeof exports?exports.$vite_IPC=t():e.$vite_IPC=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=542)}({108:function(e,t,n){"use strict";var r=n(66);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var a=function(e){function t(e){var n,r=e.onEventTypes,o=e.sendFuncName,i=e.path;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,c(t).call(this))).path=i,n._onEventTypes=r||[],n._sendFuncName=o,n.connectStatus=!1,n.responseCbs={},n._connectEnd=null,n._connectErr=null,n._connectTimeout=null,n._connectConnect=null,n._connectClose=null,n.subscribeMethod=null,n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["a"]),n=t,(o=[{key:"_connected",value:function(){this.connectStatus=!0,this._connectConnect&&this._connectConnect()}},{key:"_closed",value:function(){this.connectStatus=!1,this._connectClose&&this._connectClose()}},{key:"_errored",value:function(e){this._connectErr&&this._connectErr(e)}},{key:"_parse",value:function(e){var t=this,n=[];e.forEach(function(e){if(e)try{var t=JSON.parse(e);if(!(t instanceof Array)&&t.result)try{t.result=JSON.parse(t.result)}catch(e){}n.push(t)}catch(e){}}),n.forEach(function(e){if(e instanceof Array||e.id)if(e.id)t.responseCbs[e.id]&&t.responseCbs[e.id](e);else for(var n=0;n<e.length;n++)if(e[n].id){var r=e[n].id;t.responseCbs[r]&&t.responseCbs[r](e)}else t.subscribeMethod&&t.subscribeMethod(e[n]);else t.subscribeMethod&&t.subscribeMethod(e)})}},{key:"_checkOnType",value:function(e){if(this._onEventTypes.indexOf(e)<0)return!1;var t=e.substring(0,1).toUpperCase()+e.substring(1);return"_connect".concat(t)}},{key:"_onSend",value:function(e){var t=this,n=function(e){var t;if(e instanceof Array){for(var n=0;n<e.length;n++)if(e[n].id){t=e[n].id;break}}else t=e.id||null;return t}(e);if(n)return new Promise(function(e,r){var o=!1,i={id:n,abort:function(){o=!0}};t.responseCbs[n]=function(t){if(c(),t&&t.error)return r(t);e(t)};var u=t._addReq({request:i,rej:function(e){c(),r(e)}}),c=function(){for(var e in s&&clearTimeout(s),s=null,t._removeReq(u),t.responseCbs)if(t.responseCbs[e]===n){delete t.responseCbs[e];break}},s=t.timeout?setTimeout(function(){if(!o)return c(),r(t.ERRORS.TIMEOUT(t.timeout))},t.timeout):null})}},{key:"_send",value:function(e){return this.connectStatus?(this.socket[this._sendFuncName](JSON.stringify(e)),this._onSend(e)):Promise.reject(this.ERRORS.CONNECT(this.path))}},{key:"on",value:function(e,t){var n=this._checkOnType(e);return n<0?this.ERRORS.IPC_ON(e):t?void(this[n]=t):this.ERRORS.IPC_ON_CB(e)}},{key:"remove",value:function(e){var t=this._checkOnType(e);t&&(this[t]=null)}},{key:"request",value:function(e,t){var n=this._getRequestPayload(e,t);return n instanceof Error?Promise.reject(n):this._send(n)}},{key:"notification",value:function(e,t){var n=this._getNotificationPayload(e,t);if(n instanceof Error)return n;this._send(n)}},{key:"batch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=this._getBatchPayload(e);return t instanceof Error?Promise.reject(t):this._send(t)}},{key:"subscribe",value:function(e){if("function"!=typeof e)throw new Error("[Error] callback should be a function.");this.subscribeMethod=e}},{key:"unSubscribe",value:function(){this.subscribeMethod=null}}])&&i(n.prototype,o),a&&i(n,a),t}();t.a=a},109:function(e,t,n){var r,o,i;!function(n,u){"use strict";e.exports?e.exports=u():(o=[],void 0===(i="function"==typeof(r=u)?r.apply(t,o):r)||(e.exports=i))}("object"==typeof window&&window,function(){"use strict";var e=void 0,t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,r=Array.isArray||function(e){return"[object Array]"===t.call(e)},o=Number.isSafeInteger||function(e){return"number"==typeof e&&isFinite(e)&&e===Math.floor(e)&&Math.abs(e)<=9007199254740991},i=Error.captureStackTrace||function(e){e.stack=(new Error).stack},u={JsonRpc:s,JsonRpcError:h};function c(e){var t=null,r=null;if(e&&e.jsonrpc===s.VERSION)if(n.call(e,"id")){if(n.call(e,"method"))t=y(r=new a(e.id,e.method,e.params));else if(n.call(e,"result"))t=y(r=new l(e.id,e.result));else if(n.call(e,"error"))if(e.error){var o=new h(e.error.message,e.error.code,e.error.data);t=o.message!==e.error.message||o.code!==e.error.code?h.internalError(e):y(r=new p(e.id,o))}else t=h.internalError(e)}else t=y(r=new f(e.method,e.params));else t=h.invalidRequest(e);return!t&&r?new d(r):new d(t||h.invalidRequest(e),"invalid")}function s(){this.jsonrpc="2.0"}function a(t,n,r){s.call(this),this.id=t,this.method=n,r!==e&&(this.params=r)}function f(t,n){s.call(this),this.method=t,n!==e&&(this.params=n)}function l(e,t){s.call(this),this.id=e,this.result=t}function p(e,t){s.call(this),this.id=e,this.error=t}function d(e,t){this.payload=e,this.type=t||e.name}function h(t,n,r){i(this,this.constructor),this.message=t===e?"":String(t),this.code=o(n)?n:0,null!=r&&(this.data=r)}function y(t,n){var r=null;switch(t.name){case a.prototype.name:r=v(t.id)||b(t.method)||m(t.params);break;case f.prototype.name:r=b(t.method)||m(t.params);break;case l.prototype.name:r=v(t.id)||(t.result===e?h.internalError("Result must exist for success Response objects"):null);break;case p.prototype.name:r=v(t.id,!0)||function(e){if(!(e instanceof h))return h.internalError("Error must be an instance of JsonRpcError.");if(!o(e.code))return h.internalError("Invalid error code. It must be an integer.");if(!_(e.message))return h.internalError("Message must exist or must be a string.");return null}(t.error)}if(r&&n)throw r;return r}function v(e,t){return t&&null===e?null:_(e)||o(e)?null:h.internalError('"id" must be provided, a string or an integer.')}function b(e){return _(e)?null:h.methodNotFound(e)}function m(t){if(t===e)return null;if(r(t)||(n=t)&&"object"==typeof n&&!r(n))try{return JSON.stringify(t),null}catch(e){return h.parseError(t)}var n;return h.invalidParams(t)}function _(e){return e&&"string"==typeof e}function O(e,t){function n(){this.constructor=e}return n.prototype=t.prototype,e.prototype=new n,e}return u.request=function(e,t,n){var r=new a(e,t,n);return y(r,!0),r},u.notification=function(e,t){var n=new f(e,t);return y(n,!0),n},u.success=function(e,t){var n=new l(e,t);return y(n,!0),n},u.error=function(e,t){var n=new p(e,t);return y(n,!0),n},u.parse=function(e){if(!e||"string"!=typeof e)return new d(h.invalidRequest(e),"invalid");try{e=JSON.parse(e)}catch(t){return new d(h.parseError(e),"invalid")}if(!r(e))return c(e);if(!e.length)return new d(h.invalidRequest(e),"invalid");for(var t=0,n=e.length;t<n;t++)e[t]=c(e[t]);return e},u.parseObject=c,s.VERSION="2.0",s.prototype.serialize=s.prototype.toString=function(){return JSON.stringify(this)},O(a,s),a.prototype.name="request",O(f,s),f.prototype.name="notification",O(l,s),l.prototype.name="success",O(p,s),p.prototype.name="error",O(h,Error),h.prototype.name="JsonRpcError",h.invalidRequest=function(e){return new h("Invalid request",-32600,e)},h.methodNotFound=function(e){return new h("Method not found",-32601,e)},h.invalidParams=function(e){return new h("Invalid params",-32602,e)},h.internalError=function(e){return new h("Internal error",-32603,e)},h.parseError=function(e){return new h("Parse error",-32700,e)},u})},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={CONNECT:function(e){return new Error("CONNECTION ERROR: Couldn't connect to node "+e+".")},ABORT:function(){return new Error("ABORT ERROR: Request already aborted.")},PARAMS:function(){return new Error("PARAMS ERROR.")},TIMEOUT:function(e){return new Error("CONNECTION TIMEOUT: timeout of "+e+" ms achived")},INVAILID_RESPONSE:function(e){return new Error("Invalid JSON RPC response: "+JSON.stringify(e))},IPC_ON:function(e){return new Error("Invalid IPC event on: "+JSON.stringify(e))},IPC_ON_CB:function(e){return new Error("The IPC on event "+JSON.stringify(e)+", cb is necessary")}}},366:function(e,t,n){(function(e){var t=n(366);for(k in t)e[k]=t[k]}).call(this,n(9))},542:function(e,t,n){"use strict";n.r(t),n.d(t,"IPC_RPC",function(){return f});var r=n(108);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var a=n(366),f=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6e4,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{delimiter:"\n",retryTimes:10,retryInterval:1e4};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=u(this,c(t).call(this,{onEventTypes:["error","end","timeout","data","close","connect"],sendFuncName:"write",path:n})),!n)throw e.ERRORS.CONNECT();e.type="ipc",e.timeout=r,e.delimiter=o.delimiter;var i=0;e.socket=a.connect({path:n}),e.socket.on("connect",function(){i=0,e._connected()}),e.socket.on("close",function(){e._closed(),i>o.retryTimes||setTimeout(function(){i++,e.reconnect()},o.retryInterval)}),e.socket.on("error",function(){e._errored()}),e.socket.on("end",function(t){e._connectEnd&&e._connectEnd(t)}),e.socket.on("timeout",function(t){e._connectTimeout&&e._connectTimeout(t)});var s="";return e.socket.on("data",function(t){(t=t?t.toString():"").slice(-1)===e.delimiter&&-1!==t.indexOf(e.delimiter)?(t=s+t,s="",t=t.split(e.delimiter),e._parse(t)):s+=t}),e}var n,o,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["a"]),n=t,(o=[{key:"reconnect",value:function(){this.socket.connect({path:this.path})}},{key:"disconnect",value:function(){this.socket&&this.socket.destroy&&this.socket.destroy()}}])&&i(n.prototype,o),f&&i(n,f),t}();t.default=f},66:function(e,t,n){"use strict";var r=n(23),o=n.n(r);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=n(109),c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ERRORS=o.a,this.jsonrpc=u,this._requestManager=[],this._requestId=0}var t,n,r;return t=e,(n=[{key:"abort",value:function(){var e=this;this._requestManager.forEach(function(t){var n=t.request,r=t.rej;n.abort(),r(e.ERRORS.ABORT())}),this._requestManager=[]}},{key:"_addReq",value:function(e){var t={request:e.request,rej:e.rej};return this._requestManager.push(t),t}},{key:"_removeReq",value:function(e){for(var t=0;t<this._requestManager.length;t++)if(this._requestManager[t]===e){this._requestManager.splice(t,1);break}}},{key:"_getRequestPayload",value:function(e,t){return e?(this._requestId++,this.jsonrpc.request(this._requestId,e,t)):o.a.PARAMS()}},{key:"_getNotificationPayload",value:function(e,t){return e?this.jsonrpc.notification(e,t):o.a.PARAMS()}},{key:"_getBatchPayload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!e||!e.length)return o.a.PARAMS();for(var t=[],n=0;n<e.length;n++){var r=e[n];if(!r||!r.type||"request"!==r.type&&"notification"!==r.type)return o.a.PARAMS();var i="notification"===r.type?this._getNotificationPayload(r.methodName,r.params):this._getRequestPayload(r.methodName,r.params);if(i instanceof Error)return i;t.push(i)}return t}}])&&i(t.prototype,n),r&&i(t,r),e}();t.a=c},9:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}})});