import{d as t}from"./define-properties.ad07f72c.js";import{a as e}from"./call-bind.4cbdc4a9.js";var r=Object,o=TypeError,i=function(){if(null!=this&&this!==r(this))throw new o("RegExp.prototype.flags getter called on non-object");var t="";return this.hasIndices&&(t+="d"),this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),this.dotAll&&(t+="s"),this.unicode&&(t+="u"),this.sticky&&(t+="y"),t},s=i,p=t.supportsDescriptors,n=Object.getOwnPropertyDescriptor,a=function(){if(p&&"gim"===/a/gim.flags){var t=n(RegExp.prototype,"flags");if(t&&"function"==typeof t.get&&"boolean"==typeof/a/.dotAll)return t.get}return s},l=t.supportsDescriptors,c=a,f=Object.getOwnPropertyDescriptor,g=Object.defineProperty,u=TypeError,h=Object.getPrototypeOf,y=/a/,d=t,m=i,b=a,j=function(){if(!l||!h)throw new u("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var t=c(),e=h(y),r=f(e,"flags");return r&&r.get===t||g(e,"flags",{configurable:!0,enumerable:!1,get:t}),t},O=(0,e.exports)(b());d(O,{getPolyfill:b,implementation:m,shim:j});var v=O;export{v as r};
