var a={
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
read:function(a,o,t,r,h){var M,p,w=8*h-r-1,f=(1<<w)-1,i=f>>1,e=-7,N=t?h-1:0,n=t?-1:1,s=a[o+N];for(N+=n,M=s&(1<<-e)-1,s>>=-e,e+=w;e>0;M=256*M+a[o+N],N+=n,e-=8);for(p=M&(1<<-e)-1,M>>=-e,e+=r;e>0;p=256*p+a[o+N],N+=n,e-=8);if(0===M)M=1-i;else{if(M===f)return p?NaN:1/0*(s?-1:1);p+=Math.pow(2,r),M-=i}return(s?-1:1)*p*Math.pow(2,M-r)},write:function(a,o,t,r,h,M){var p,w,f,i=8*M-h-1,e=(1<<i)-1,N=e>>1,n=23===h?Math.pow(2,-24)-Math.pow(2,-77):0,s=r?0:M-1,u=r?1:-1,l=o<0||0===o&&1/o<0?1:0;for(o=Math.abs(o),isNaN(o)||o===1/0?(w=isNaN(o)?1:0,p=e):(p=Math.floor(Math.log(o)/Math.LN2),o*(f=Math.pow(2,-p))<1&&(p--,f*=2),(o+=p+N>=1?n/f:n*Math.pow(2,1-N))*f>=2&&(p++,f/=2),p+N>=e?(w=0,p=e):p+N>=1?(w=(o*f-1)*Math.pow(2,h),p+=N):(w=o*Math.pow(2,N-1)*Math.pow(2,h),p=0));h>=8;a[t+s]=255&w,s+=u,w/=256,h-=8);for(p=p<<h|w,i+=h;i>0;a[t+s]=255&p,s+=u,p/=256,i-=8);a[t+s-u]|=128*l}};export{a as i};