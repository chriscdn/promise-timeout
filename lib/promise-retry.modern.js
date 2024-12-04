const e=(e,r)=>o(()=>e,r),o=(e,o)=>{var r,t,n;const l=null!=(r=o.timeout)?r:3e4,i=null!=(t=o.errorMessage)?t:"The promise timed out.",s=null!=(n=o.onTimeout)?n:()=>{};let u;const m=new Promise((e,o)=>u=setTimeout(()=>{s(),o(new Error(i))},l));return Promise.race([e(),m]).finally(()=>clearTimeout(u))};export{o as asyncTimeout,e as promiseTimeout};
//# sourceMappingURL=promise-retry.modern.js.map
