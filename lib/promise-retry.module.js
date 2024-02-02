var r=function(r,e,n){var t;void 0===n&&(n="The promise timed out.");var o=new Promise(function(r,o){return t=setTimeout(function(){return o(new Error(n))},e)});return Promise.race([r,o]).finally(function(){return clearTimeout(t)})};export{r as default};
//# sourceMappingURL=promise-retry.module.js.map
