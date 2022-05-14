import{i as t}from"./isarray.396bc49a.js";import{b as r}from"./buffer.a1957365.js";import{d as e}from"./dijkstrajs.d3a33a03.js";var n={},o={},i={},a=t;s.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(r){return!1}}();var u=s.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function s(t,r,e){return s.TYPED_ARRAY_SUPPORT||this instanceof s?"number"==typeof t?l(this,t):function(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');if("undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer)return function(t,r,e,n){if(e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");var o;o=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);s.TYPED_ARRAY_SUPPORT?o.__proto__=s.prototype:o=c(t,o);return o}(t,r,e,n);if("string"==typeof r)return function(t,r){var e=0|d(r),n=h(t,e),o=n.write(r);o!==e&&(n=n.slice(0,o));return n}(t,r);return function(t,r){if(s.isBuffer(r)){var e=0|f(r.length),n=h(t,e);return 0===n.length||r.copy(n,0,0,e),n}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(o=r.length)!=o?h(t,0):c(t,r);if("Buffer"===r.type&&Array.isArray(r.data))return c(t,r.data)}var o;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}(this,t,r,e):new s(t,r,e)}function f(t){if(t>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return 0|t}function h(t,r){var e;return s.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(r)).__proto__=s.prototype:(null===(e=t)&&(e=new s(r)),e.length=r),e}function l(t,r){var e=h(t,r<0?0:0|f(r));if(!s.TYPED_ARRAY_SUPPORT)for(var n=0;n<r;++n)e[n]=0;return e}function c(t,r){for(var e=r.length<0?0:0|f(r.length),n=h(t,e),o=0;o<e;o+=1)n[o]=255&r[o];return n}function g(t,r){var e;r=r||1/0;for(var n=t.length,o=null,i=[],a=0;a<n;++a){if((e=t.charCodeAt(a))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function d(t){return s.isBuffer(t)?t.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)?t.byteLength:("string"!=typeof t&&(t=""+t),0===t.length?0:g(t).length)}s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),s.prototype.write=function(t,r,e){void 0===r||void 0===e&&"string"==typeof r?(e=this.length,r=0):isFinite(r)&&(r|=0,isFinite(e)?e|=0:e=void 0);var n=this.length-r;if((void 0===e||e>n)&&(e=n),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");return function(t,r,e,n){return function(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}(g(r,t.length-e),t,e,n)}(this,t,r,e)},s.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),s.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=s.prototype;else{var o=r-t;e=new s(o,void 0);for(var i=0;i<o;++i)e[i]=this[i+t]}return e},s.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o,i=n-e;if(this===t&&e<r&&r<n)for(o=i-1;o>=0;--o)t[o+r]=this[o+e];else if(i<1e3||!s.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+i),r);return i},s.prototype.fill=function(t,r,e){if("string"==typeof t){if("string"==typeof r?(r=0,e=this.length):"string"==typeof e&&(e=this.length),1===t.length){var n=t.charCodeAt(0);n<256&&(t=n)}}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var i=s.isBuffer(t)?t:new s(t),a=i.length;for(o=0;o<e-r;++o)this[o+r]=i[o%a]}return this},s.concat=function(t,r){if(!a(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return h(null,0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=l(null,r),o=0;for(e=0;e<t.length;++e){var i=t[e];if(!s.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},s.byteLength=d,s.prototype._isBuffer=!0,s.isBuffer=function(t){return!(null==t||!t._isBuffer)},i.alloc=function(t){var r=new s(t);return r.fill(0),r},i.from=function(t){return new s(t)};var v,p={},w=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];p.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},p.getSymbolTotalCodewords=function(t){return w[t]},p.getBCHDigit=function(t){for(var r=0;0!==t;)r++,t>>>=1;return r},p.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');v=t},p.isKanjiModeEnabled=function(){return void 0!==v},p.toSJIS=function(t){return v(t)};var m,y={};function E(){this.buffer=[],this.length=0}(m=y).L={bit:1},m.M={bit:0},m.Q={bit:3},m.H={bit:2},m.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},m.from=function(t,r){if(m.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return m.L;case"m":case"medium":return m.M;case"q":case"quartile":return m.Q;case"h":case"high":return m.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(e){return r}},E.prototype={get:function(t){var r=Math.floor(t/8);return 1==(this.buffer[r]>>>7-t%8&1)},put:function(t,r){for(var e=0;e<r;e++)this.putBit(1==(t>>>r-e-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var r=Math.floor(this.length/8);this.buffer.length<=r&&this.buffer.push(0),t&&(this.buffer[r]|=128>>>this.length%8),this.length++}};var A=E,B=i;function b(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=B.alloc(t*t),this.reservedBit=B.alloc(t*t)}b.prototype.set=function(t,r,e,n){var o=t*this.size+r;this.data[o]=e,n&&(this.reservedBit[o]=!0)},b.prototype.get=function(t,r){return this.data[t*this.size+r]},b.prototype.xor=function(t,r,e){this.data[t*this.size+r]^=e},b.prototype.isReserved=function(t,r){return this.reservedBit[t*this.size+r]};var R=b,T={};!function(t){var r=p.getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,n=r(t),o=145===n?26:2*Math.ceil((n-13)/(2*e-2)),i=[n-7],a=1;a<e-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},t.getPositions=function(r){for(var e=[],n=t.getRowColCoords(r),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||e.push([n[i],n[a]]);return e}}(T);var P={},C=p.getSymbolSize;P.getPositions=function(t){var r=C(t);return[[0,0],[r-7,0],[0,r-7]]};var I={};!function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var r=3,e=3,n=40,o=10;function i(r,e,n){switch(r){case t.Patterns.PATTERN000:return(e+n)%2==0;case t.Patterns.PATTERN001:return e%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(e+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return e*n%2+e*n%3==0;case t.Patterns.PATTERN110:return(e*n%2+e*n%3)%2==0;case t.Patterns.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+r)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(r){return t.isValid(r)?parseInt(r,10):void 0},t.getPenaltyN1=function(t){for(var e=t.size,n=0,o=0,i=0,a=null,u=null,s=0;s<e;s++){o=i=0,a=u=null;for(var f=0;f<e;f++){var h=t.get(s,f);h===a?o++:(o>=5&&(n+=r+(o-5)),a=h,o=1),(h=t.get(f,s))===u?i++:(i>=5&&(n+=r+(i-5)),u=h,i=1)}o>=5&&(n+=r+(o-5)),i>=5&&(n+=r+(i-5))}return n},t.getPenaltyN2=function(t){for(var r=t.size,n=0,o=0;o<r-1;o++)for(var i=0;i<r-1;i++){var a=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);4!==a&&0!==a||n++}return n*e},t.getPenaltyN3=function(t){for(var r=t.size,e=0,o=0,i=0,a=0;a<r;a++){o=i=0;for(var u=0;u<r;u++)o=o<<1&2047|t.get(a,u),u>=10&&(1488===o||93===o)&&e++,i=i<<1&2047|t.get(u,a),u>=10&&(1488===i||93===i)&&e++}return e*n},t.getPenaltyN4=function(t){for(var r=0,e=t.data.length,n=0;n<e;n++)r+=t.data[n];return Math.abs(Math.ceil(100*r/e/5)-10)*o},t.applyMask=function(t,r){for(var e=r.size,n=0;n<e;n++)for(var o=0;o<e;o++)r.isReserved(o,n)||r.xor(o,n,i(t,o,n))},t.getBestMask=function(r,e){for(var n=Object.keys(t.Patterns).length,o=0,i=1/0,a=0;a<n;a++){e(a),t.applyMask(a,r);var u=t.getPenaltyN1(r)+t.getPenaltyN2(r)+t.getPenaltyN3(r)+t.getPenaltyN4(r);t.applyMask(a,r),u<i&&(i=u,o=a)}return o}}(I);var M={},N=y,S=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],L=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];M.getBlocksCount=function(t,r){switch(r){case N.L:return S[4*(t-1)+0];case N.M:return S[4*(t-1)+1];case N.Q:return S[4*(t-1)+2];case N.H:return S[4*(t-1)+3];default:return}},M.getTotalCodewordsCount=function(t,r){switch(r){case N.L:return L[4*(t-1)+0];case N.M:return L[4*(t-1)+1];case N.Q:return L[4*(t-1)+2];case N.H:return L[4*(t-1)+3];default:return}};var _={},U={},x=i,Y=x.alloc(512),D=x.alloc(256);!function(){for(var t=1,r=0;r<255;r++)Y[r]=t,D[t]=r,256&(t<<=1)&&(t^=285);for(r=255;r<512;r++)Y[r]=Y[r-255]}(),U.log=function(t){if(t<1)throw new Error("log("+t+")");return D[t]},U.exp=function(t){return Y[t]},U.mul=function(t,r){return 0===t||0===r?0:Y[D[t]+D[r]]},function(t){var r=i,e=U;t.mul=function(t,n){for(var o=r.alloc(t.length+n.length-1),i=0;i<t.length;i++)for(var a=0;a<n.length;a++)o[i+a]^=e.mul(t[i],n[a]);return o},t.mod=function(t,n){for(var o=r.from(t);o.length-n.length>=0;){for(var i=o[0],a=0;a<n.length;a++)o[a]^=e.mul(n[a],i);for(var u=0;u<o.length&&0===o[u];)u++;o=o.slice(u)}return o},t.generateECPolynomial=function(n){for(var o=r.from([1]),i=0;i<n;i++)o=t.mul(o,[1,e.exp(i)]);return o}}(_);var k=i,F=_,z=r.Buffer;function H(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}H.prototype.initialize=function(t){this.degree=t,this.genPoly=F.generateECPolynomial(this.degree)},H.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var r=k.alloc(this.degree),e=z.concat([t,r],t.length+this.degree),n=F.mod(e,this.genPoly),o=this.degree-n.length;if(o>0){var i=k.alloc(this.degree);return n.copy(i,o),i}return n};var J=H,K={},O={},j={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},V={},Q="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",$="(?:(?![A-Z0-9 $%*+\\-./:]|"+(Q=Q.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";V.KANJI=new RegExp(Q,"g"),V.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),V.BYTE=new RegExp($,"g"),V.NUMERIC=new RegExp("[0-9]+","g"),V.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var q=new RegExp("^"+Q+"$"),Z=new RegExp("^[0-9]+$"),X=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");V.testKanji=function(t){return q.test(t)},V.testNumeric=function(t){return Z.test(t)},V.testAlphanumeric=function(t){return X.test(t)},function(t){var r=j,e=V;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(r){return e.testNumeric(r)?t.NUMERIC:e.testAlphanumeric(r)?t.ALPHANUMERIC:e.testKanji(r)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(r,e){if(t.isValid(r))return r;try{return function(r){if("string"!=typeof r)throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+r)}}(r)}catch(n){return e}}}(O),function(r){var e=p,n=M,o=y,i=O,a=j,u=t,s=e.getBCHDigit(7973);function f(t,r){return i.getCharCountIndicator(t,r)+4}function h(t,r){var e=0;return t.forEach((function(t){var n=f(t.mode,r);e+=n+t.getBitsLength()})),e}r.from=function(t,r){return a.isValid(t)?parseInt(t,10):r},r.getCapacity=function(t,r,o){if(!a.isValid(t))throw new Error("Invalid QR Code version");void 0===o&&(o=i.BYTE);var u=8*(e.getSymbolTotalCodewords(t)-n.getTotalCodewordsCount(t,r));if(o===i.MIXED)return u;var s=u-f(o,t);switch(o){case i.NUMERIC:return Math.floor(s/10*3);case i.ALPHANUMERIC:return Math.floor(s/11*2);case i.KANJI:return Math.floor(s/13);case i.BYTE:default:return Math.floor(s/8)}},r.getBestVersionForData=function(t,e){var n,a=o.from(e,o.M);if(u(t)){if(t.length>1)return function(t,e){for(var n=1;n<=40;n++)if(h(t,n)<=r.getCapacity(n,e,i.MIXED))return n}(t,a);if(0===t.length)return 1;n=t[0]}else n=t;return function(t,e,n){for(var o=1;o<=40;o++)if(e<=r.getCapacity(o,n,t))return o}(n.mode,n.getLength(),a)},r.getEncodedBits=function(t){if(!a.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var r=t<<12;e.getBCHDigit(r)-s>=0;)r^=7973<<e.getBCHDigit(r)-s;return t<<12|r}}(K);var W={},G=p,tt=G.getBCHDigit(1335);W.getEncodedBits=function(t,r){for(var e=t.bit<<3|r,n=e<<10;G.getBCHDigit(n)-tt>=0;)n^=1335<<G.getBCHDigit(n)-tt;return 21522^(e<<10|n)};var rt={},et=O;function nt(t){this.mode=et.NUMERIC,this.data=t.toString()}nt.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},nt.prototype.getLength=function(){return this.data.length},nt.prototype.getBitsLength=function(){return nt.getBitsLength(this.data.length)},nt.prototype.write=function(t){var r,e,n;for(r=0;r+3<=this.data.length;r+=3)e=this.data.substr(r,3),n=parseInt(e,10),t.put(n,10);var o=this.data.length-r;o>0&&(e=this.data.substr(r),n=parseInt(e,10),t.put(n,3*o+1))};var ot=nt,it=O,at=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function ut(t){this.mode=it.ALPHANUMERIC,this.data=t}ut.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},ut.prototype.getLength=function(){return this.data.length},ut.prototype.getBitsLength=function(){return ut.getBitsLength(this.data.length)},ut.prototype.write=function(t){var r;for(r=0;r+2<=this.data.length;r+=2){var e=45*at.indexOf(this.data[r]);e+=at.indexOf(this.data[r+1]),t.put(e,11)}this.data.length%2&&t.put(at.indexOf(this.data[r]),6)};var st=ut,ft=i,ht=O;function lt(t){this.mode=ht.BYTE,this.data=ft.from(t)}lt.getBitsLength=function(t){return 8*t},lt.prototype.getLength=function(){return this.data.length},lt.prototype.getBitsLength=function(){return lt.getBitsLength(this.data.length)},lt.prototype.write=function(t){for(var r=0,e=this.data.length;r<e;r++)t.put(this.data[r],8)};var ct=lt,gt=O,dt=p;function vt(t){this.mode=gt.KANJI,this.data=t}vt.getBitsLength=function(t){return 13*t},vt.prototype.getLength=function(){return this.data.length},vt.prototype.getBitsLength=function(){return vt.getBitsLength(this.data.length)},vt.prototype.write=function(t){var r;for(r=0;r<this.data.length;r++){var e=dt.toSJIS(this.data[r]);if(e>=33088&&e<=40956)e-=33088;else{if(!(e>=57408&&e<=60351))throw new Error("Invalid SJIS character: "+this.data[r]+"\nMake sure your charset is UTF-8");e-=49472}e=192*(e>>>8&255)+(255&e),t.put(e,13)}};var pt=vt;!function(t){var r=O,n=ot,o=st,i=ct,a=pt,u=V,s=p,f=e.exports;function h(t){return unescape(encodeURIComponent(t)).length}function l(t,r,e){for(var n,o=[];null!==(n=t.exec(e));)o.push({data:n[0],index:n.index,mode:r,length:n[0].length});return o}function c(t){var e,n,o=l(u.NUMERIC,r.NUMERIC,t),i=l(u.ALPHANUMERIC,r.ALPHANUMERIC,t);return s.isKanjiModeEnabled()?(e=l(u.BYTE,r.BYTE,t),n=l(u.KANJI,r.KANJI,t)):(e=l(u.BYTE_KANJI,r.BYTE,t),n=[]),o.concat(i,e,n).sort((function(t,r){return t.index-r.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function g(t,e){switch(e){case r.NUMERIC:return n.getBitsLength(t);case r.ALPHANUMERIC:return o.getBitsLength(t);case r.KANJI:return a.getBitsLength(t);case r.BYTE:return i.getBitsLength(t)}}function d(t,e){var u,f=r.getBestModeForData(t);if((u=r.from(e,f))!==r.BYTE&&u.bit<f.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(u)+".\n Suggested mode is: "+r.toString(f));switch(u!==r.KANJI||s.isKanjiModeEnabled()||(u=r.BYTE),u){case r.NUMERIC:return new n(t);case r.ALPHANUMERIC:return new o(t);case r.KANJI:return new a(t);case r.BYTE:return new i(t)}}t.fromArray=function(t){return t.reduce((function(t,r){return"string"==typeof r?t.push(d(r,null)):r.data&&t.push(d(r.data,r.mode)),t}),[])},t.fromString=function(e,n){for(var o=function(t,e){for(var n={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var u=t[a],s=[],f=0;f<u.length;f++){var h=u[f],l=""+a+f;s.push(l),n[l]={node:h,lastCount:0},o[l]={};for(var c=0;c<i.length;c++){var d=i[c];n[d]&&n[d].node.mode===h.mode?(o[d][l]=g(n[d].lastCount+h.length,h.mode)-g(n[d].lastCount,h.mode),n[d].lastCount+=h.length):(n[d]&&(n[d].lastCount=h.length),o[d][l]=g(h.length,h.mode)+4+r.getCharCountIndicator(h.mode,e))}}i=s}for(c=0;c<i.length;c++)o[i[c]].end=0;return{map:o,table:n}}(function(t){for(var e=[],n=0;n<t.length;n++){var o=t[n];switch(o.mode){case r.NUMERIC:e.push([o,{data:o.data,mode:r.ALPHANUMERIC,length:o.length},{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.ALPHANUMERIC:e.push([o,{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.KANJI:e.push([o,{data:o.data,mode:r.BYTE,length:h(o.data)}]);break;case r.BYTE:e.push([{data:o.data,mode:r.BYTE,length:h(o.data)}])}}return e}(c(e,s.isKanjiModeEnabled())),n),i=f.find_path(o.map,"start","end"),a=[],u=1;u<i.length-1;u++)a.push(o.table[i[u]].node);return t.fromArray(function(t){return t.reduce((function(t,r){var e=t.length-1>=0?t[t.length-1]:null;return e&&e.mode===r.mode?(t[t.length-1].data+=r.data,t):(t.push(r),t)}),[])}(a))},t.rawSplit=function(r){return t.fromArray(c(r,s.isKanjiModeEnabled()))}}(rt);var wt=i,mt=p,yt=y,Et=A,At=R,Bt=T,bt=P,Rt=I,Tt=M,Pt=J,Ct=K,It=W,Mt=O,Nt=rt,St=t;function Lt(t,r,e){var n,o,i=t.size,a=It.getEncodedBits(r,e);for(n=0;n<15;n++)o=1==(a>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function _t(t,r,e){var n=new Et;e.forEach((function(r){n.put(r.mode.bit,4),n.put(r.getLength(),Mt.getCharCountIndicator(r.mode,t)),r.write(n)}));var o=8*(mt.getSymbolTotalCodewords(t)-Tt.getTotalCodewordsCount(t,r));for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);for(var i=(o-n.getLengthInBits())/8,a=0;a<i;a++)n.put(a%2?17:236,8);return function(t,r,e){for(var n=mt.getSymbolTotalCodewords(r),o=Tt.getTotalCodewordsCount(r,e),i=n-o,a=Tt.getBlocksCount(r,e),u=a-n%a,s=Math.floor(n/a),f=Math.floor(i/a),h=f+1,l=s-f,c=new Pt(l),g=0,d=new Array(a),v=new Array(a),p=0,w=wt.from(t.buffer),m=0;m<a;m++){var y=m<u?f:h;d[m]=w.slice(g,g+y),v[m]=c.encode(d[m]),g+=y,p=Math.max(p,y)}var E,A,B=wt.alloc(n),b=0;for(E=0;E<p;E++)for(A=0;A<a;A++)E<d[A].length&&(B[b++]=d[A][E]);for(E=0;E<l;E++)for(A=0;A<a;A++)B[b++]=v[A][E];return B}(n,t,r)}function Ut(t,r,e,n){var o;if(St(t))o=Nt.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var i=r;if(!i){var a=Nt.rawSplit(t);i=Ct.getBestVersionForData(a,e)}o=Nt.fromString(t,i||40)}var u=Ct.getBestVersionForData(o,e);if(!u)throw new Error("The amount of data is too big to be stored in a QR Code");if(r){if(r<u)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+u+".\n")}else r=u;var s=_t(r,e,o),f=mt.getSymbolSize(r),h=new At(f);return function(t,r){for(var e=t.size,n=bt.getPositions(r),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],u=-1;u<=7;u++)if(!(i+u<=-1||e<=i+u))for(var s=-1;s<=7;s++)a+s<=-1||e<=a+s||(u>=0&&u<=6&&(0===s||6===s)||s>=0&&s<=6&&(0===u||6===u)||u>=2&&u<=4&&s>=2&&s<=4?t.set(i+u,a+s,!0,!0):t.set(i+u,a+s,!1,!0))}(h,r),function(t){for(var r=t.size,e=8;e<r-8;e++){var n=e%2==0;t.set(e,6,n,!0),t.set(6,e,n,!0)}}(h),function(t,r){for(var e=Bt.getPositions(r),n=0;n<e.length;n++)for(var o=e[n][0],i=e[n][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)-2===a||2===a||-2===u||2===u||0===a&&0===u?t.set(o+a,i+u,!0,!0):t.set(o+a,i+u,!1,!0)}(h,r),Lt(h,e,0),r>=7&&function(t,r){for(var e,n,o,i=t.size,a=Ct.getEncodedBits(r),u=0;u<18;u++)e=Math.floor(u/3),n=u%3+i-8-3,o=1==(a>>u&1),t.set(e,n,o,!0),t.set(n,e,o,!0)}(h,r),function(t,r){for(var e=t.size,n=-1,o=e-1,i=7,a=0,u=e-1;u>0;u-=2)for(6===u&&u--;;){for(var s=0;s<2;s++)if(!t.isReserved(o,u-s)){var f=!1;a<r.length&&(f=1==(r[a]>>>i&1)),t.set(o,u-s,f),-1==--i&&(a++,i=7)}if((o+=n)<0||e<=o){o-=n,n=-n;break}}}(h,s),isNaN(n)&&(n=Rt.getBestMask(h,Lt.bind(null,h,e))),Rt.applyMask(n,h),Lt(h,e,n),{modules:h,version:r,errorCorrectionLevel:e,maskPattern:n,segments:o}}o.create=function(t,r){if(void 0===t||""===t)throw new Error("No input text");var e,n,o=yt.M;return void 0!==r&&(o=yt.from(r.errorCorrectionLevel,yt.M),e=Ct.from(r.version),n=Rt.from(r.maskPattern),r.toSJISFunc&&mt.setToSJISFunction(r.toSJISFunc)),Ut(t,e,o,n)};var xt={},Yt={};!function(t){function r(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var r=t.slice().replace("#","").split("");if(r.length<3||5===r.length||r.length>8)throw new Error("Invalid hex color: "+t);3!==r.length&&4!==r.length||(r=Array.prototype.concat.apply([],r.map((function(t){return[t,t]})))),6===r.length&&r.push("F","F");var e=parseInt(r.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:255&e,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});var e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:e,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,r){return r.width&&r.width>=t+2*r.margin?r.width/(t+2*r.margin):r.scale},t.getImageWidth=function(r,e){var n=t.getScale(r,e);return Math.floor((r+2*e.margin)*n)},t.qrToImageData=function(r,e,n){for(var o=e.modules.size,i=e.modules.data,a=t.getScale(o,n),u=Math.floor((o+2*n.margin)*a),s=n.margin*a,f=[n.color.light,n.color.dark],h=0;h<u;h++)for(var l=0;l<u;l++){var c=4*(h*u+l),g=n.color.light;if(h>=s&&l>=s&&h<u-s&&l<u-s)g=f[i[Math.floor((h-s)/a)*o+Math.floor((l-s)/a)]?1:0];r[c++]=g.r,r[c++]=g.g,r[c++]=g.b,r[c]=g.a}}}(Yt),function(t){var r=Yt;t.render=function(t,e,n){var o=n,i=e;void 0!==o||e&&e.getContext||(o=e,e=void 0),e||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=r.getOptions(o);var a=r.getImageWidth(t.modules.size,o),u=i.getContext("2d"),s=u.createImageData(a,a);return r.qrToImageData(s.data,t,o),function(t,r,e){t.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=e,r.width=e,r.style.height=e+"px",r.style.width=e+"px"}(u,i,a),u.putImageData(s,0,0),i},t.renderToDataURL=function(r,e,n){var o=n;void 0!==o||e&&e.getContext||(o=e,e=void 0),o||(o={});var i=t.render(r,e,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}}(xt);var Dt={},kt=Yt;function Ft(t,r){var e=t.a/255,n=r+'="'+t.hex+'"';return e<1?n+" "+r+'-opacity="'+e.toFixed(2).slice(1)+'"':n}function zt(t,r,e){var n=t+r;return void 0!==e&&(n+=" "+e),n}Dt.render=function(t,r,e){var n=kt.getOptions(r),o=t.modules.size,i=t.modules.data,a=o+2*n.margin,u=n.color.light.a?"<path "+Ft(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",s="<path "+Ft(n.color.dark,"stroke")+' d="'+function(t,r,e){for(var n="",o=0,i=!1,a=0,u=0;u<t.length;u++){var s=Math.floor(u%r),f=Math.floor(u/r);s||i||(i=!0),t[u]?(a++,u>0&&s>0&&t[u-1]||(n+=i?zt("M",s+e,.5+f+e):zt("m",o,0),o=0,i=!1),s+1<r&&t[u+1]||(n+=zt("h",a),a=0)):o++}return n}(i,o,n.margin)+'"/>',f='viewBox="0 0 '+a+" "+a+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+f+' shape-rendering="crispEdges">'+u+s+"</svg>\n";return"function"==typeof e&&e(null,h),h};var Ht=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},Jt=o,Kt=xt,Ot=Dt;function jt(t,r,e,n,o){var i=[].slice.call(arguments,1),a=i.length,u="function"==typeof i[a-1];if(!u&&!Ht())throw new Error("Callback required as last argument");if(!u){if(a<1)throw new Error("Too few arguments provided");return 1===a?(e=r,r=n=void 0):2!==a||r.getContext||(n=e,e=r,r=void 0),new Promise((function(o,i){try{var a=Jt.create(e,n);o(t(a,r,n))}catch(u){i(u)}}))}if(a<2)throw new Error("Too few arguments provided");2===a?(o=e,e=r,r=n=void 0):3===a&&(r.getContext&&void 0===o?(o=n,n=void 0):(o=n,n=e,e=r,r=void 0));try{var s=Jt.create(e,n);o(null,t(s,r,n))}catch(f){o(f)}}n.create=Jt.create,n.toCanvas=jt.bind(null,Kt.render),n.toDataURL=jt.bind(null,Kt.renderToDataURL),n.toString=jt.bind(null,(function(t,r,e){return Ot.render(t,e)}));export{n as b};