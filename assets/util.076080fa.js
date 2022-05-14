import{i as e}from"./is-arguments.8ead4e95.js";import{i as t}from"./is-generator-function.adf285e2.js";import{w as r}from"./which-typed-array.7a97f5d7.js";import{i as n}from"./is-typed-array.2f7dba40.js";import{i}from"./inherits.d1f17cfc.js";var o={},u={};!function(i){var o=e,u=t,f=r,a=n;function c(e){return e.call.bind(e)}var s="undefined"!=typeof BigInt,p="undefined"!=typeof Symbol,y=c(Object.prototype.toString),l=c(Number.prototype.valueOf),d=c(String.prototype.valueOf),g=c(Boolean.prototype.valueOf);if(s)var b=c(BigInt.prototype.valueOf);if(p)var m=c(Symbol.prototype.valueOf);function h(e,t){if("object"!=typeof e)return!1;try{return t(e),!0}catch(r){return!1}}function w(e){return"[object Map]"===y(e)}function j(e){return"[object Set]"===y(e)}function v(e){return"[object WeakMap]"===y(e)}function A(e){return"[object WeakSet]"===y(e)}function O(e){return"[object ArrayBuffer]"===y(e)}function S(e){return"undefined"!=typeof ArrayBuffer&&(O.working?O(e):e instanceof ArrayBuffer)}function k(e){return"[object DataView]"===y(e)}function B(e){return"undefined"!=typeof DataView&&(k.working?k(e):e instanceof DataView)}i.isArgumentsObject=o,i.isGeneratorFunction=u,i.isTypedArray=a,i.isPromise=function(e){return"undefined"!=typeof Promise&&e instanceof Promise||null!==e&&"object"==typeof e&&"function"==typeof e.then&&"function"==typeof e.catch},i.isArrayBufferView=function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):a(e)||B(e)},i.isUint8Array=function(e){return"Uint8Array"===f(e)},i.isUint8ClampedArray=function(e){return"Uint8ClampedArray"===f(e)},i.isUint16Array=function(e){return"Uint16Array"===f(e)},i.isUint32Array=function(e){return"Uint32Array"===f(e)},i.isInt8Array=function(e){return"Int8Array"===f(e)},i.isInt16Array=function(e){return"Int16Array"===f(e)},i.isInt32Array=function(e){return"Int32Array"===f(e)},i.isFloat32Array=function(e){return"Float32Array"===f(e)},i.isFloat64Array=function(e){return"Float64Array"===f(e)},i.isBigInt64Array=function(e){return"BigInt64Array"===f(e)},i.isBigUint64Array=function(e){return"BigUint64Array"===f(e)},w.working="undefined"!=typeof Map&&w(new Map),i.isMap=function(e){return"undefined"!=typeof Map&&(w.working?w(e):e instanceof Map)},j.working="undefined"!=typeof Set&&j(new Set),i.isSet=function(e){return"undefined"!=typeof Set&&(j.working?j(e):e instanceof Set)},v.working="undefined"!=typeof WeakMap&&v(new WeakMap),i.isWeakMap=function(e){return"undefined"!=typeof WeakMap&&(v.working?v(e):e instanceof WeakMap)},A.working="undefined"!=typeof WeakSet&&A(new WeakSet),i.isWeakSet=function(e){return A(e)},O.working="undefined"!=typeof ArrayBuffer&&O(new ArrayBuffer),i.isArrayBuffer=S,k.working="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView&&k(new DataView(new ArrayBuffer(1),0,1)),i.isDataView=B;var x="undefined"!=typeof SharedArrayBuffer?SharedArrayBuffer:void 0;function E(e){return"[object SharedArrayBuffer]"===y(e)}function P(e){return void 0!==x&&(void 0===E.working&&(E.working=E(new x)),E.working?E(e):e instanceof x)}function M(e){return h(e,l)}function z(e){return h(e,d)}function D(e){return h(e,g)}function I(e){return s&&h(e,b)}function U(e){return p&&h(e,m)}i.isSharedArrayBuffer=P,i.isAsyncFunction=function(e){return"[object AsyncFunction]"===y(e)},i.isMapIterator=function(e){return"[object Map Iterator]"===y(e)},i.isSetIterator=function(e){return"[object Set Iterator]"===y(e)},i.isGeneratorObject=function(e){return"[object Generator]"===y(e)},i.isWebAssemblyCompiledModule=function(e){return"[object WebAssembly.Module]"===y(e)},i.isNumberObject=M,i.isStringObject=z,i.isBooleanObject=D,i.isBigIntObject=I,i.isSymbolObject=U,i.isBoxedPrimitive=function(e){return M(e)||z(e)||D(e)||I(e)||U(e)},i.isAnyArrayBuffer=function(e){return"undefined"!=typeof Uint8Array&&(S(e)||P(e))},["isProxy","isExternal","isModuleNamespaceObject"].forEach((function(e){Object.defineProperty(i,e,{enumerable:!1,value:function(){throw new Error(e+" is not supported in userland")}})}))}(u);var f=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8};!function(e){var t=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},r=/%[sdj%]/g;e.format=function(e){if(!h(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(a(arguments[n]));return t.join(" ")}n=1;for(var i=arguments,o=i.length,u=String(e).replace(r,(function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(t){return"[Circular]"}default:return e}})),f=i[n];n<o;f=i[++n])b(f)||!v(f)?u+=" "+f:u+=" "+a(f);return u},e.deprecate=function(t,r){if("undefined"!=typeof process&&!0===process.noDeprecation)return t;if("undefined"==typeof process)return function(){return e.deprecate(t,r).apply(this,arguments)};var n=!1;return function(){if(!n){if(process.throwDeprecation)throw new Error(r);process.traceDeprecation?console.trace(r):console.error(r),n=!0}return t.apply(this,arguments)}};var n={},o=/^$/;function a(t,r){var n={seen:[],stylize:s};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),g(r)?n.showHidden=r:r&&e._extend(n,r),w(n.showHidden)&&(n.showHidden=!1),w(n.depth)&&(n.depth=2),w(n.colors)&&(n.colors=!1),w(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=c),p(n,t,n.depth)}function c(e,t){var r=a.styles[t];return r?"["+a.colors[r][0]+"m"+e+"["+a.colors[r][1]+"m":e}function s(e,t){return e}function p(t,r,n){if(t.customInspect&&r&&S(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,t);return h(i)||(i=p(t,i,n)),i}var o=function(e,t){if(w(t))return e.stylize("undefined","undefined");if(h(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}if(m(t))return e.stylize(""+t,"number");if(g(t))return e.stylize(""+t,"boolean");if(b(t))return e.stylize("null","null")}(t,r);if(o)return o;var u=Object.keys(r),f=function(e){var t={};return e.forEach((function(e,r){t[e]=!0})),t}(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(r)),O(r)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return y(r);if(0===u.length){if(S(r)){var a=r.name?": "+r.name:"";return t.stylize("[Function"+a+"]","special")}if(j(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(A(r))return t.stylize(Date.prototype.toString.call(r),"date");if(O(r))return y(r)}var c,s="",v=!1,k=["{","}"];(d(r)&&(v=!0,k=["[","]"]),S(r))&&(s=" [Function"+(r.name?": "+r.name:"")+"]");return j(r)&&(s=" "+RegExp.prototype.toString.call(r)),A(r)&&(s=" "+Date.prototype.toUTCString.call(r)),O(r)&&(s=" "+y(r)),0!==u.length||v&&0!=r.length?n<0?j(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),c=v?function(e,t,r,n,i){for(var o=[],u=0,f=t.length;u<f;++u)P(t,String(u))?o.push(l(e,t,r,n,String(u),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(l(e,t,r,n,i,!0))})),o}(t,r,n,f,u):u.map((function(e){return l(t,r,n,f,e,v)})),t.seen.pop(),function(e,t,r){if(e.reduce((function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1];return r[0]+t+" "+e.join(", ")+" "+r[1]}(c,s,k)):k[0]+s+k[1]}function y(e){return"["+Error.prototype.toString.call(e)+"]"}function l(e,t,r,n,i,o){var u,f,a;if((a=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?f=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(f=e.stylize("[Setter]","special")),P(n,i)||(u="["+i+"]"),f||(e.seen.indexOf(a.value)<0?(f=b(r)?p(e,a.value,null):p(e,a.value,r-1)).indexOf("\n")>-1&&(f=o?f.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+f.split("\n").map((function(e){return"   "+e})).join("\n")):f=e.stylize("[Circular]","special")),w(u)){if(o&&i.match(/^\d+$/))return f;(u=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+f}function d(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function b(e){return null===e}function m(e){return"number"==typeof e}function h(e){return"string"==typeof e}function w(e){return void 0===e}function j(e){return v(e)&&"[object RegExp]"===k(e)}function v(e){return"object"==typeof e&&null!==e}function A(e){return v(e)&&"[object Date]"===k(e)}function O(e){return v(e)&&("[object Error]"===k(e)||e instanceof Error)}function S(e){return"function"==typeof e}function k(e){return Object.prototype.toString.call(e)}function B(e){return e<10?"0"+e.toString(10):e.toString(10)}e.debuglog=function(t){if(t=t.toUpperCase(),!n[t])if(o.test(t)){var r=process.pid;n[t]=function(){var n=e.format.apply(e,arguments);console.error("%s %d: %s",t,r,n)}}else n[t]=function(){};return n[t]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.types=u,e.isArray=d,e.isBoolean=g,e.isNull=b,e.isNullOrUndefined=function(e){return null==e},e.isNumber=m,e.isString=h,e.isSymbol=function(e){return"symbol"==typeof e},e.isUndefined=w,e.isRegExp=j,e.types.isRegExp=j,e.isObject=v,e.isDate=A,e.types.isDate=A,e.isError=O,e.types.isNativeError=O,e.isFunction=S,e.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},e.isBuffer=f;var x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function E(){var e=new Date,t=[B(e.getHours()),B(e.getMinutes()),B(e.getSeconds())].join(":");return[e.getDate(),x[e.getMonth()],t].join(" ")}function P(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.log=function(){console.log("%s - %s",E(),e.format.apply(e,arguments))},e.inherits=i.exports,e._extend=function(e,t){if(!t||!v(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var M="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function z(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}e.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(M&&e[M]){var r;if("function"!=typeof(r=e[M]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(r,M,{value:r,enumerable:!1,writable:!1,configurable:!0}),r}function r(){for(var t,r,n=new Promise((function(e,n){t=e,r=n})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(e,n){e?r(e):t(n)}));try{e.apply(this,i)}catch(u){r(u)}return n}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),M&&Object.defineProperty(r,M,{value:r,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(r,t(e))},e.promisify.custom=M,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function r(){for(var t=[],r=0;r<arguments.length;r++)t.push(arguments[r]);var n=t.pop();if("function"!=typeof n)throw new TypeError("The last argument must be of type Function");var i=this,o=function(){return n.apply(i,arguments)};e.apply(this,t).then((function(e){process.nextTick(o.bind(null,null,e))}),(function(e){process.nextTick(z.bind(null,e,o))}))}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.defineProperties(r,t(e)),r}}(o);export{o as u};