module.exports=function(r,e,n){var o;void 0===n&&(n="The promise timed out.");var t=new Promise(function(r,t){return o=setTimeout(function(){return t(new Error(n))},e)});return Promise.race([r,t]).finally(function(){return clearTimeout(o)})};
//# sourceMappingURL=promise-retry.cjs.map
