import{r as t}from"./readable-stream.99890bd7.js";const{Transform:e}=t.exports;const{Transform:s}=t.exports;const i=t=>class s extends e{constructor(e,s,i,n,r){super(r),this._rate=e,this._capacity=s,this._delimitedSuffix=i,this._hashBitLength=n,this._options=r,this._state=new t,this._state.initialize(e,s),this._finalized=!1}_transform(t,e,s){let i=null;try{this.update(t,e)}catch(n){i=n}s(i)}_flush(t){let e=null;try{this.push(this.digest())}catch(s){e=s}t(e)}update(t,e){if(!Buffer.isBuffer(t)&&"string"!=typeof t)throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");return Buffer.isBuffer(t)||(t=Buffer.from(t,e)),this._state.absorb(t),this}digest(t){if(this._finalized)throw new Error("Digest already called");this._finalized=!0,this._delimitedSuffix&&this._state.absorbLastFewBits(this._delimitedSuffix);let e=this._state.squeeze(this._hashBitLength/8);return void 0!==t&&(e=e.toString(t)),this._resetState(),e}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const t=new s(this._rate,this._capacity,this._delimitedSuffix,this._hashBitLength,this._options);return this._state.copy(t._state),t._finalized=this._finalized,t}},n=t=>class e extends s{constructor(e,s,i,n){super(n),this._rate=e,this._capacity=s,this._delimitedSuffix=i,this._options=n,this._state=new t,this._state.initialize(e,s),this._finalized=!1}_transform(t,e,s){let i=null;try{this.update(t,e)}catch(n){i=n}s(i)}_flush(){}_read(t){this.push(this.squeeze(t))}update(t,e){if(!Buffer.isBuffer(t)&&"string"!=typeof t)throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Squeeze already called");return Buffer.isBuffer(t)||(t=Buffer.from(t,e)),this._state.absorb(t),this}squeeze(t,e){this._finalized||(this._finalized=!0,this._state.absorbLastFewBits(this._delimitedSuffix));let s=this._state.squeeze(t);return void 0!==e&&(s=s.toString(e)),s}_resetState(){return this._state.initialize(this._rate,this._capacity),this}_clone(){const t=new e(this._rate,this._capacity,this._delimitedSuffix,this._options);return this._state.copy(t._state),t._finalized=this._finalized,t}};var r={};const a=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648];r.p1600=function(t){for(let e=0;e<24;++e){const s=t[0]^t[10]^t[20]^t[30]^t[40],i=t[1]^t[11]^t[21]^t[31]^t[41],n=t[2]^t[12]^t[22]^t[32]^t[42],r=t[3]^t[13]^t[23]^t[33]^t[43],h=t[4]^t[14]^t[24]^t[34]^t[44],o=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],u=t[7]^t[17]^t[27]^t[37]^t[47],f=t[8]^t[18]^t[28]^t[38]^t[48],l=t[9]^t[19]^t[29]^t[39]^t[49];let _=f^(n<<1|r>>>31),d=l^(r<<1|n>>>31);const p=t[0]^_,z=t[1]^d,w=t[10]^_,b=t[11]^d,y=t[20]^_,g=t[21]^d,S=t[30]^_,k=t[31]^d,m=t[40]^_,B=t[41]^d;_=s^(h<<1|o>>>31),d=i^(o<<1|h>>>31);const q=t[2]^_,x=t[3]^d,L=t[12]^_,E=t[13]^d,v=t[22]^_,D=t[23]^d,F=t[32]^_,T=t[33]^d,j=t[42]^_,C=t[43]^d;_=n^(c<<1|u>>>31),d=r^(u<<1|c>>>31);const I=t[4]^_,A=t[5]^d,G=t[14]^_,H=t[15]^d,J=t[24]^_,K=t[25]^d,M=t[34]^_,N=t[35]^d,O=t[44]^_,P=t[45]^d;_=h^(f<<1|l>>>31),d=o^(l<<1|f>>>31);const Q=t[6]^_,R=t[7]^d,U=t[16]^_,V=t[17]^d,W=t[26]^_,X=t[27]^d,Y=t[36]^_,Z=t[37]^d,$=t[46]^_,tt=t[47]^d;_=c^(s<<1|i>>>31),d=u^(i<<1|s>>>31);const et=t[8]^_,st=t[9]^d,it=t[18]^_,nt=t[19]^d,rt=t[28]^_,at=t[29]^d,ht=t[38]^_,ot=t[39]^d,ct=t[48]^_,ut=t[49]^d,ft=p,lt=z,_t=b<<4|w>>>28,dt=w<<4|b>>>28,pt=y<<3|g>>>29,zt=g<<3|y>>>29,wt=k<<9|S>>>23,bt=S<<9|k>>>23,yt=m<<18|B>>>14,gt=B<<18|m>>>14,St=q<<1|x>>>31,kt=x<<1|q>>>31,mt=E<<12|L>>>20,Bt=L<<12|E>>>20,qt=v<<10|D>>>22,xt=D<<10|v>>>22,Lt=T<<13|F>>>19,Et=F<<13|T>>>19,vt=j<<2|C>>>30,Dt=C<<2|j>>>30,Ft=A<<30|I>>>2,Tt=I<<30|A>>>2,jt=G<<6|H>>>26,Ct=H<<6|G>>>26,It=K<<11|J>>>21,At=J<<11|K>>>21,Gt=M<<15|N>>>17,Ht=N<<15|M>>>17,Jt=P<<29|O>>>3,Kt=O<<29|P>>>3,Mt=Q<<28|R>>>4,Nt=R<<28|Q>>>4,Ot=V<<23|U>>>9,Pt=U<<23|V>>>9,Qt=W<<25|X>>>7,Rt=X<<25|W>>>7,Ut=Y<<21|Z>>>11,Vt=Z<<21|Y>>>11,Wt=tt<<24|$>>>8,Xt=$<<24|tt>>>8,Yt=et<<27|st>>>5,Zt=st<<27|et>>>5,$t=it<<20|nt>>>12,te=nt<<20|it>>>12,ee=at<<7|rt>>>25,se=rt<<7|at>>>25,ie=ht<<8|ot>>>24,ne=ot<<8|ht>>>24,re=ct<<14|ut>>>18,ae=ut<<14|ct>>>18;t[0]=ft^~mt&It,t[1]=lt^~Bt&At,t[10]=Mt^~$t&pt,t[11]=Nt^~te&zt,t[20]=St^~jt&Qt,t[21]=kt^~Ct&Rt,t[30]=Yt^~_t&qt,t[31]=Zt^~dt&xt,t[40]=Ft^~Ot&ee,t[41]=Tt^~Pt&se,t[2]=mt^~It&Ut,t[3]=Bt^~At&Vt,t[12]=$t^~pt&Lt,t[13]=te^~zt&Et,t[22]=jt^~Qt&ie,t[23]=Ct^~Rt&ne,t[32]=_t^~qt&Gt,t[33]=dt^~xt&Ht,t[42]=Ot^~ee&wt,t[43]=Pt^~se&bt,t[4]=It^~Ut&re,t[5]=At^~Vt&ae,t[14]=pt^~Lt&Jt,t[15]=zt^~Et&Kt,t[24]=Qt^~ie&yt,t[25]=Rt^~ne&gt,t[34]=qt^~Gt&Wt,t[35]=xt^~Ht&Xt,t[44]=ee^~wt&vt,t[45]=se^~bt&Dt,t[6]=Ut^~re&ft,t[7]=Vt^~ae&lt,t[16]=Lt^~Jt&Mt,t[17]=Et^~Kt&Nt,t[26]=ie^~yt&St,t[27]=ne^~gt&kt,t[36]=Gt^~Wt&Yt,t[37]=Ht^~Xt&Zt,t[46]=wt^~vt&Ft,t[47]=bt^~Dt&Tt,t[8]=re^~ft&mt,t[9]=ae^~lt&Bt,t[18]=Jt^~Mt&$t,t[19]=Kt^~Nt&te,t[28]=yt^~St&jt,t[29]=gt^~kt&Ct,t[38]=Wt^~Yt&_t,t[39]=Xt^~Zt&dt,t[48]=vt^~Ft&Ot,t[49]=Dt^~Tt&Pt,t[0]^=a[2*e],t[1]^=a[2*e+1]}};const h=r;function o(){this.state=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.blockSize=null,this.count=0,this.squeezing=!1}o.prototype.initialize=function(t,e){for(let s=0;s<50;++s)this.state[s]=0;this.blockSize=t/8,this.count=0,this.squeezing=!1},o.prototype.absorb=function(t){for(let e=0;e<t.length;++e)this.state[~~(this.count/4)]^=t[e]<<this.count%4*8,this.count+=1,this.count===this.blockSize&&(h.p1600(this.state),this.count=0)},o.prototype.absorbLastFewBits=function(t){this.state[~~(this.count/4)]^=t<<this.count%4*8,0!=(128&t)&&this.count===this.blockSize-1&&h.p1600(this.state),this.state[~~((this.blockSize-1)/4)]^=128<<(this.blockSize-1)%4*8,h.p1600(this.state),this.count=0,this.squeezing=!0},o.prototype.squeeze=function(t){this.squeezing||this.absorbLastFewBits(1);const e=Buffer.alloc(t);for(let s=0;s<t;++s)e[s]=this.state[~~(this.count/4)]>>>this.count%4*8&255,this.count+=1,this.count===this.blockSize&&(h.p1600(this.state),this.count=0);return e},o.prototype.copy=function(t){for(let e=0;e<50;++e)t.state[e]=this.state[e];t.blockSize=this.blockSize,t.count=this.count,t.squeezing=this.squeezing};var c=function(t){const e=i(t),s=n(t);return function(t,i){switch("string"==typeof t?t.toLowerCase():t){case"keccak224":return new e(1152,448,null,224,i);case"keccak256":return new e(1088,512,null,256,i);case"keccak384":return new e(832,768,null,384,i);case"keccak512":return new e(576,1024,null,512,i);case"sha3-224":return new e(1152,448,6,224,i);case"sha3-256":return new e(1088,512,6,256,i);case"sha3-384":return new e(832,768,6,384,i);case"sha3-512":return new e(576,1024,6,512,i);case"shake128":return new s(1344,256,31,i);case"shake256":return new s(1088,512,31,i);default:throw new Error("Invald algorithm: "+t)}}}(o);export{c as j};
