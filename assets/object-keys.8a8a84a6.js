var t,e=Object.prototype.toString,r=function(t){var r=e.call(t),n="[object Arguments]"===r;return n||(n="[object Array]"!==r&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===e.call(t.callee)),n};if(!Object.keys){var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,c=r,l=Object.prototype.propertyIsEnumerable,i=!l.call({toString:null},"toString"),a=l.call((function(){}),"prototype"),u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],f=function(t){var e=t.constructor;return e&&e.prototype===t},p={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},s=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!p["$"+t]&&n.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{f(window[t])}catch(e){return!0}}catch(e){return!0}return!1}();t=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===o.call(t),l=c(t),p=e&&"[object String]"===o.call(t),y=[];if(!e&&!r&&!l)throw new TypeError("Object.keys called on a non-object");var b=a&&r;if(p&&t.length>0&&!n.call(t,0))for(var g=0;g<t.length;++g)y.push(String(g));if(l&&t.length>0)for(var h=0;h<t.length;++h)y.push(String(h));else for(var $ in t)b&&"prototype"===$||!n.call(t,$)||y.push(String($));if(i)for(var j=function(t){if("undefined"==typeof window||!s)return f(t);try{return f(t)}catch(e){return!1}}(t),w=0;w<u.length;++w)j&&"constructor"===u[w]||!n.call(t,u[w])||y.push(u[w]);return y}}var y=t,b=Array.prototype.slice,g=r,h=Object.keys,$=h?function(t){return h(t)}:y,j=Object.keys;$.shim=function(){Object.keys?function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2)||(Object.keys=function(t){return g(t)?j(b.call(t)):j(t)}):Object.keys=$;return Object.keys||$};var w=$;export{w as o};
