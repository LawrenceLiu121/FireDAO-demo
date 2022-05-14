import{c as t}from"./react.49c1050d.js";var r,e={exports:{}};
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */r=e,function(){var e="input is invalid type",n="object"==typeof window,i=n?window:{};i.JS_SHA3_NO_WINDOW&&(n=!1);var o=!n&&"object"==typeof self;!i.JS_SHA3_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node?i=t:o&&(i=self);var a=!i.JS_SHA3_NO_COMMON_JS&&r.exports,s=!i.JS_SHA3_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,f="0123456789abcdef".split(""),u=[4,1024,262144,67108864],c=[0,8,16,24],h=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],p=[224,256,384,512],d=[128,256],y=["hex","buffer","arrayBuffer","array","digest"],l={128:168,256:136};!i.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!s||!i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});for(var b=function(t,r,e){return function(n){return new N(t,r,t).update(n)[e]()}},A=function(t,r,e){return function(n,i){return new N(t,r,i).update(n)[e]()}},v=function(t,r,e){return function(r,n,i,o){return k["cshake"+t].update(r,n,i,o)[e]()}},w=function(t,r,e){return function(r,n,i,o){return k["kmac"+t].update(r,n,i,o)[e]()}},B=function(t,r,e,n){for(var i=0;i<y.length;++i){var o=y[i];t[o]=r(e,n,o)}return t},g=function(t,r){var e=b(t,r,"hex");return e.create=function(){return new N(t,r,t)},e.update=function(t){return e.create().update(t)},B(e,b,t,r)},_=[{name:"keccak",padding:[1,256,65536,16777216],bits:p,createMethod:g},{name:"sha3",padding:[6,1536,393216,100663296],bits:p,createMethod:g},{name:"shake",padding:[31,7936,2031616,520093696],bits:d,createMethod:function(t,r){var e=A(t,r,"hex");return e.create=function(e){return new N(t,r,e)},e.update=function(t,r){return e.create(r).update(t)},B(e,A,t,r)}},{name:"cshake",padding:u,bits:d,createMethod:function(t,r){var e=l[t],n=v(t,0,"hex");return n.create=function(n,i,o){return i||o?new N(t,r,n).bytepad([i,o],e):k["shake"+t].create(n)},n.update=function(t,r,e,i){return n.create(r,e,i).update(t)},B(n,v,t,r)}},{name:"kmac",padding:u,bits:d,createMethod:function(t,r){var e=l[t],n=w(t,0,"hex");return n.create=function(n,i,o){return new j(t,r,i).bytepad(["KMAC",o],e).bytepad([n],e)},n.update=function(t,r,e,i){return n.create(t,e,i).update(r)},B(n,w,t,r)}}],k={},S=[],x=0;x<_.length;++x)for(var C=_[x],m=C.bits,E=0;E<m.length;++E){var O=C.name+"_"+m[E];if(S.push(O),k[O]=C.createMethod(m[E],C.padding),"sha3"!==C.name){var z=C.name+m[E];S.push(z),k[z]=k[O]}}function N(t,r,e){this.blocks=[],this.s=[],this.padding=r,this.outputBits=e,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=e>>5,this.extraBytes=(31&e)>>3;for(var n=0;n<50;++n)this.s[n]=0}function j(t,r,e){N.call(this,t,r,e)}N.prototype.update=function(t){if(this.finalized)throw new Error("finalize already called");var r,n=typeof t;if("string"!==n){if("object"!==n)throw new Error(e);if(null===t)throw new Error(e);if(s&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||s&&ArrayBuffer.isView(t)))throw new Error(e);r=!0}for(var i,o,a=this.blocks,f=this.byteCount,u=t.length,h=this.blockCount,p=0,d=this.s;p<u;){if(this.reset)for(this.reset=!1,a[0]=this.block,i=1;i<h+1;++i)a[i]=0;if(r)for(i=this.start;p<u&&i<f;++p)a[i>>2]|=t[p]<<c[3&i++];else for(i=this.start;p<u&&i<f;++p)(o=t.charCodeAt(p))<128?a[i>>2]|=o<<c[3&i++]:o<2048?(a[i>>2]|=(192|o>>6)<<c[3&i++],a[i>>2]|=(128|63&o)<<c[3&i++]):o<55296||o>=57344?(a[i>>2]|=(224|o>>12)<<c[3&i++],a[i>>2]|=(128|o>>6&63)<<c[3&i++],a[i>>2]|=(128|63&o)<<c[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++p)),a[i>>2]|=(240|o>>18)<<c[3&i++],a[i>>2]|=(128|o>>12&63)<<c[3&i++],a[i>>2]|=(128|o>>6&63)<<c[3&i++],a[i>>2]|=(128|63&o)<<c[3&i++]);if(this.lastByteIndex=i,i>=f){for(this.start=i-f,this.block=a[h],i=0;i<h;++i)d[i]^=a[i];J(d),this.reset=!0}else this.start=i}return this},N.prototype.encode=function(t,r){var e=255&t,n=1,i=[e];for(e=255&(t>>=8);e>0;)i.unshift(e),e=255&(t>>=8),++n;return r?i.push(n):i.unshift(n),this.update(i),i.length},N.prototype.encodeString=function(t){var r,n=typeof t;if("string"!==n){if("object"!==n)throw new Error(e);if(null===t)throw new Error(e);if(s&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||s&&ArrayBuffer.isView(t)))throw new Error(e);r=!0}var i=0,o=t.length;if(r)i=o;else for(var a=0;a<t.length;++a){var f=t.charCodeAt(a);f<128?i+=1:f<2048?i+=2:f<55296||f>=57344?i+=3:(f=65536+((1023&f)<<10|1023&t.charCodeAt(++a)),i+=4)}return i+=this.encode(8*i),this.update(t),i},N.prototype.bytepad=function(t,r){for(var e=this.encode(r),n=0;n<t.length;++n)e+=this.encodeString(t[n]);var i=r-e%r,o=[];return o.length=i,this.update(o),this},N.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,r=this.lastByteIndex,e=this.blockCount,n=this.s;if(t[r>>2]|=this.padding[3&r],this.lastByteIndex===this.byteCount)for(t[0]=t[e],r=1;r<e+1;++r)t[r]=0;for(t[e-1]|=2147483648,r=0;r<e;++r)n[r]^=t[r];J(n)}},N.prototype.toString=N.prototype.hex=function(){this.finalize();for(var t,r=this.blockCount,e=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,a=0,s="";a<n;){for(o=0;o<r&&a<n;++o,++a)t=e[o],s+=f[t>>4&15]+f[15&t]+f[t>>12&15]+f[t>>8&15]+f[t>>20&15]+f[t>>16&15]+f[t>>28&15]+f[t>>24&15];a%r==0&&(J(e),o=0)}return i&&(t=e[o],s+=f[t>>4&15]+f[15&t],i>1&&(s+=f[t>>12&15]+f[t>>8&15]),i>2&&(s+=f[t>>20&15]+f[t>>16&15])),s},N.prototype.arrayBuffer=function(){this.finalize();var t,r=this.blockCount,e=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,a=0,s=this.outputBits>>3;t=i?new ArrayBuffer(n+1<<2):new ArrayBuffer(s);for(var f=new Uint32Array(t);a<n;){for(o=0;o<r&&a<n;++o,++a)f[a]=e[o];a%r==0&&J(e)}return i&&(f[o]=e[o],t=t.slice(0,s)),t},N.prototype.buffer=N.prototype.arrayBuffer,N.prototype.digest=N.prototype.array=function(){this.finalize();for(var t,r,e=this.blockCount,n=this.s,i=this.outputBlocks,o=this.extraBytes,a=0,s=0,f=[];s<i;){for(a=0;a<e&&s<i;++a,++s)t=s<<2,r=n[a],f[t]=255&r,f[t+1]=r>>8&255,f[t+2]=r>>16&255,f[t+3]=r>>24&255;s%e==0&&J(n)}return o&&(t=s<<2,r=n[a],f[t]=255&r,o>1&&(f[t+1]=r>>8&255),o>2&&(f[t+2]=r>>16&255)),f},j.prototype=new N,j.prototype.finalize=function(){return this.encode(this.outputBits,!0),N.prototype.finalize.call(this)};var J=function(t){var r,e,n,i,o,a,s,f,u,c,p,d,y,l,b,A,v,w,B,g,_,k,S,x,C,m,E,O,z,N,j,J,M,H,I,R,U,V,F,D,W,Y,K,q,G,L,P,Q,T,X,Z,$,tt,rt,et,nt,it,ot,at,st,ft,ut,ct;for(n=0;n<48;n+=2)i=t[0]^t[10]^t[20]^t[30]^t[40],o=t[1]^t[11]^t[21]^t[31]^t[41],a=t[2]^t[12]^t[22]^t[32]^t[42],s=t[3]^t[13]^t[23]^t[33]^t[43],f=t[4]^t[14]^t[24]^t[34]^t[44],u=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],p=t[7]^t[17]^t[27]^t[37]^t[47],r=(d=t[8]^t[18]^t[28]^t[38]^t[48])^(a<<1|s>>>31),e=(y=t[9]^t[19]^t[29]^t[39]^t[49])^(s<<1|a>>>31),t[0]^=r,t[1]^=e,t[10]^=r,t[11]^=e,t[20]^=r,t[21]^=e,t[30]^=r,t[31]^=e,t[40]^=r,t[41]^=e,r=i^(f<<1|u>>>31),e=o^(u<<1|f>>>31),t[2]^=r,t[3]^=e,t[12]^=r,t[13]^=e,t[22]^=r,t[23]^=e,t[32]^=r,t[33]^=e,t[42]^=r,t[43]^=e,r=a^(c<<1|p>>>31),e=s^(p<<1|c>>>31),t[4]^=r,t[5]^=e,t[14]^=r,t[15]^=e,t[24]^=r,t[25]^=e,t[34]^=r,t[35]^=e,t[44]^=r,t[45]^=e,r=f^(d<<1|y>>>31),e=u^(y<<1|d>>>31),t[6]^=r,t[7]^=e,t[16]^=r,t[17]^=e,t[26]^=r,t[27]^=e,t[36]^=r,t[37]^=e,t[46]^=r,t[47]^=e,r=c^(i<<1|o>>>31),e=p^(o<<1|i>>>31),t[8]^=r,t[9]^=e,t[18]^=r,t[19]^=e,t[28]^=r,t[29]^=e,t[38]^=r,t[39]^=e,t[48]^=r,t[49]^=e,l=t[0],b=t[1],L=t[11]<<4|t[10]>>>28,P=t[10]<<4|t[11]>>>28,O=t[20]<<3|t[21]>>>29,z=t[21]<<3|t[20]>>>29,st=t[31]<<9|t[30]>>>23,ft=t[30]<<9|t[31]>>>23,Y=t[40]<<18|t[41]>>>14,K=t[41]<<18|t[40]>>>14,H=t[2]<<1|t[3]>>>31,I=t[3]<<1|t[2]>>>31,A=t[13]<<12|t[12]>>>20,v=t[12]<<12|t[13]>>>20,Q=t[22]<<10|t[23]>>>22,T=t[23]<<10|t[22]>>>22,N=t[33]<<13|t[32]>>>19,j=t[32]<<13|t[33]>>>19,ut=t[42]<<2|t[43]>>>30,ct=t[43]<<2|t[42]>>>30,rt=t[5]<<30|t[4]>>>2,et=t[4]<<30|t[5]>>>2,R=t[14]<<6|t[15]>>>26,U=t[15]<<6|t[14]>>>26,w=t[25]<<11|t[24]>>>21,B=t[24]<<11|t[25]>>>21,X=t[34]<<15|t[35]>>>17,Z=t[35]<<15|t[34]>>>17,J=t[45]<<29|t[44]>>>3,M=t[44]<<29|t[45]>>>3,x=t[6]<<28|t[7]>>>4,C=t[7]<<28|t[6]>>>4,nt=t[17]<<23|t[16]>>>9,it=t[16]<<23|t[17]>>>9,V=t[26]<<25|t[27]>>>7,F=t[27]<<25|t[26]>>>7,g=t[36]<<21|t[37]>>>11,_=t[37]<<21|t[36]>>>11,$=t[47]<<24|t[46]>>>8,tt=t[46]<<24|t[47]>>>8,q=t[8]<<27|t[9]>>>5,G=t[9]<<27|t[8]>>>5,m=t[18]<<20|t[19]>>>12,E=t[19]<<20|t[18]>>>12,ot=t[29]<<7|t[28]>>>25,at=t[28]<<7|t[29]>>>25,D=t[38]<<8|t[39]>>>24,W=t[39]<<8|t[38]>>>24,k=t[48]<<14|t[49]>>>18,S=t[49]<<14|t[48]>>>18,t[0]=l^~A&w,t[1]=b^~v&B,t[10]=x^~m&O,t[11]=C^~E&z,t[20]=H^~R&V,t[21]=I^~U&F,t[30]=q^~L&Q,t[31]=G^~P&T,t[40]=rt^~nt&ot,t[41]=et^~it&at,t[2]=A^~w&g,t[3]=v^~B&_,t[12]=m^~O&N,t[13]=E^~z&j,t[22]=R^~V&D,t[23]=U^~F&W,t[32]=L^~Q&X,t[33]=P^~T&Z,t[42]=nt^~ot&st,t[43]=it^~at&ft,t[4]=w^~g&k,t[5]=B^~_&S,t[14]=O^~N&J,t[15]=z^~j&M,t[24]=V^~D&Y,t[25]=F^~W&K,t[34]=Q^~X&$,t[35]=T^~Z&tt,t[44]=ot^~st&ut,t[45]=at^~ft&ct,t[6]=g^~k&l,t[7]=_^~S&b,t[16]=N^~J&x,t[17]=j^~M&C,t[26]=D^~Y&H,t[27]=W^~K&I,t[36]=X^~$&q,t[37]=Z^~tt&G,t[46]=st^~ut&rt,t[47]=ft^~ct&et,t[8]=k^~l&A,t[9]=S^~b&v,t[18]=J^~x&m,t[19]=M^~C&E,t[28]=Y^~H&R,t[29]=K^~I&U,t[38]=$^~q&L,t[39]=tt^~G&P,t[48]=ut^~rt&nt,t[49]=ct^~et&it,t[0]^=h[n],t[1]^=h[n+1]};if(a)r.exports=k;else for(x=0;x<S.length;++x)i[S[x]]=k[S[x]]}();var n=e.exports;export{e as a,n as s};
