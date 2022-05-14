import{t as e}from"./tslib.80f66652.js";var r={},t={},n={};Object.defineProperty(n,"__esModule",{value:!0});var i=e.exports,u=function(){function e(e){if(this._maxConcurrency=e,this._queue=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}return e.prototype.acquire=function(){var e=this,r=this.isLocked(),t=new Promise((function(r){return e._queue.push(r)}));return r||this._dispatch(),t},e.prototype.runExclusive=function(e){return i.__awaiter(this,void 0,void 0,(function(){var r,t,n;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,this.acquire()];case 1:r=i.sent(),t=r[0],n=r[1],i.label=2;case 2:return i.trys.push([2,,4,5]),[4,e(t)];case 3:return[2,i.sent()];case 4:return n(),[7];case 5:return[2]}}))}))},e.prototype.isLocked=function(){return this._value<=0},e.prototype.release=function(){if(this._maxConcurrency>1)throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){var e=this._currentReleaser;this._currentReleaser=void 0,e()}},e.prototype._dispatch=function(){var e=this,r=this._queue.shift();if(r){var t=!1;this._currentReleaser=function(){t||(t=!0,e._value++,e._dispatch())},r([this._value--,this._currentReleaser])}},e}();n.default=u,Object.defineProperty(t,"__esModule",{value:!0});var o=e.exports,s=n,a=function(){function e(){this._semaphore=new s.default(1)}return e.prototype.acquire=function(){return o.__awaiter(this,void 0,void 0,(function(){var e;return o.__generator(this,(function(r){switch(r.label){case 0:return[4,this._semaphore.acquire()];case 1:return e=r.sent(),[2,e[1]]}}))}))},e.prototype.runExclusive=function(e){return this._semaphore.runExclusive((function(){return e()}))},e.prototype.isLocked=function(){return this._semaphore.isLocked()},e.prototype.release=function(){this._semaphore.release()},e}();t.default=a;var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.withTimeout=void 0;var h=e.exports;c.withTimeout=function(e,r,t){var n=this;return void 0===t&&(t=new Error("timeout")),{acquire:function(){return new Promise((function(i,u){return h.__awaiter(n,void 0,void 0,(function(){var n,o;return h.__generator(this,(function(s){switch(s.label){case 0:return n=!1,setTimeout((function(){n=!0,u(t)}),r),[4,e.acquire()];case 1:return o=s.sent(),n?(Array.isArray(o)?o[1]:o)():i(o),[2]}}))}))}))},runExclusive:function(e){return h.__awaiter(this,void 0,void 0,(function(){var r,t;return h.__generator(this,(function(n){switch(n.label){case 0:r=function(){},n.label=1;case 1:return n.trys.push([1,,7,8]),[4,this.acquire()];case 2:return t=n.sent(),Array.isArray(t)?(r=t[1],[4,e(t[0])]):[3,4];case 3:return[2,n.sent()];case 4:return r=t,[4,e()];case 5:return[2,n.sent()];case 6:return[3,8];case 7:return r(),[7];case 8:return[2]}}))}))},release:function(){e.release()},isLocked:function(){return e.isLocked()}}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.withTimeout=e.Semaphore=e.Mutex=void 0;var r=t;Object.defineProperty(e,"Mutex",{enumerable:!0,get:function(){return r.default}});var i=n;Object.defineProperty(e,"Semaphore",{enumerable:!0,get:function(){return i.default}});var u=c;Object.defineProperty(e,"withTimeout",{enumerable:!0,get:function(){return u.withTimeout}})}(r);export{r as l};