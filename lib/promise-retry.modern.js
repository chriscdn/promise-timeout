const e=(e,r,t="The promise timed out.")=>o(()=>e,r,t),o=(e,o,r="The promise timed out.")=>{let t;const i=new Promise((e,i)=>t=setTimeout(()=>i(new Error(r)),o));return Promise.race([e(),i]).finally(()=>clearTimeout(t))};export{o as asyncTimeout,e as promiseTimeout};
//# sourceMappingURL=promise-retry.modern.js.map
