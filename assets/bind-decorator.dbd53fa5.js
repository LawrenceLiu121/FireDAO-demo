var e,o,t={};function n(o,t,n){if(!n||typeof n.value!==e.typeOfFunction)throw new TypeError("Only methods can be decorated with @bind. <"+t+"> is not a method!");return{configurable:e.boolTrue,get:function(){var o=n.value.bind(this);return Object.defineProperty(this,t,{value:o,configurable:e.boolTrue,writable:e.boolTrue}),o}}}Object.defineProperty(t,"__esModule",{value:!0}),(o=e||(e={})).typeOfFunction="function",o.boolTrue=!0,t.bind=n,t.default=n;export{t as b};