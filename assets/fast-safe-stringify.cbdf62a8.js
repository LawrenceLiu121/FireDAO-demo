var r=n;n.default=n,n.stable=a,n.stableStringify=a;var e=[],t=[];function i(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function n(r,n,o,u){var a;void 0===u&&(u=i()),f(r,"",0,[],void 0,0,u);try{a=0===t.length?JSON.stringify(r,n,o):JSON.stringify(r,c(n),o)}catch(s){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==e.length;){var l=e.pop();4===l.length?Object.defineProperty(l[0],l[1],l[3]):l[0][l[1]]=l[2]}}return a}function o(r,i,n,o){var f=Object.getOwnPropertyDescriptor(o,n);void 0!==f.get?f.configurable?(Object.defineProperty(o,n,{value:r}),e.push([o,n,i,f])):t.push([i,n,r]):(o[n]=r,e.push([o,n,i]))}function f(r,e,t,i,n,u,a){var l;if(u+=1,"object"==typeof r&&null!==r){for(l=0;l<i.length;l++)if(i[l]===r)return void o("[Circular]",r,e,n);if(void 0!==a.depthLimit&&u>a.depthLimit)return void o("[...]",r,e,n);if(void 0!==a.edgesLimit&&t+1>a.edgesLimit)return void o("[...]",r,e,n);if(i.push(r),Array.isArray(r))for(l=0;l<r.length;l++)f(r[l],l,l,i,r,u,a);else{var c=Object.keys(r);for(l=0;l<c.length;l++){var s=c[l];f(r[s],s,l,i,r,u,a)}}i.pop()}}function u(r,e){return r<e?-1:r>e?1:0}function a(r,n,o,f){void 0===f&&(f=i());var u,a=l(r,"",0,[],void 0,0,f)||r;try{u=0===t.length?JSON.stringify(a,n,o):JSON.stringify(a,c(n),o)}catch(v){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==e.length;){var s=e.pop();4===s.length?Object.defineProperty(s[0],s[1],s[3]):s[0][s[1]]=s[2]}}return u}function l(r,t,i,n,f,a,c){var s;if(a+=1,"object"==typeof r&&null!==r){for(s=0;s<n.length;s++)if(n[s]===r)return void o("[Circular]",r,t,f);try{if("function"==typeof r.toJSON)return}catch(g){return}if(void 0!==c.depthLimit&&a>c.depthLimit)return void o("[...]",r,t,f);if(void 0!==c.edgesLimit&&i+1>c.edgesLimit)return void o("[...]",r,t,f);if(n.push(r),Array.isArray(r))for(s=0;s<r.length;s++)l(r[s],s,s,n,r,a,c);else{var v={},d=Object.keys(r).sort(u);for(s=0;s<d.length;s++){var p=d[s];l(r[p],p,s,n,r,a,c),v[p]=r[p]}if(void 0===f)return v;e.push([f,t,r]),f[t]=v}n.pop()}}function c(r){return r=void 0!==r?r:function(r,e){return e},function(e,i){if(t.length>0)for(var n=0;n<t.length;n++){var o=t[n];if(o[1]===e&&o[0]===i){i=o[2],t.splice(n,1);break}}return r.call(this,e,i)}}export{r as f};