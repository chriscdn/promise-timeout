function e(e,r,t="The promise timed out."){let o;const i=new Promise((e,i)=>o=setTimeout(()=>i(new Error(t)),r));return Promise.race([e,i]).finally(()=>clearTimeout(o))}export{e as default};
//# sourceMappingURL=promise-retry.modern.js.map
