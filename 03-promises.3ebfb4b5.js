var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){o[e]=r},e.parcelRequired7c6=n);var t=n("iQIUW");const l=document.querySelector(".form"),i=l.querySelector('[name="delay"]'),s=l.querySelector('[name="step"]'),a=l.querySelector('[name="amount"]');function u(e,r){const o=Math.random()>.3;return new Promise(((n,t)=>{setTimeout((()=>o?n(`Promisen ${e} resolved after ${r} ms.`):t(`Promisen ${e} rejected after ${r} ms.`)),r)}))}l.addEventListener("submit",(function(e){e.preventDefault();const r=Number(i.value),o=Number(s.value),n=Number(a.value);if(isNaN(r)||isNaN(o)||isNaN(n))return t.Notify.failure("Please enter all number."),void console.log("Please enter all number.");for(let e=0;e<n;e+=1){const n=e+1,l=r+e*o;u(n,l).then((e=>{console.log(e),t.Notify.success(`✅ Fulfilled promise ${n} in ${l}ms`)})).catch((e=>{console.error(e),t.Notify.failure(`❌ Rejected promise ${n} in ${l}ms`)}))}}));
//# sourceMappingURL=03-promises.3ebfb4b5.js.map
