import{r as c,a as u,i as y}from"./route-for-api-b2e8e01b.js";import{a as o}from"./atob-4d3c8649.js";const d=t=>{const r=t.indexOf("["),n=t.indexOf("]");return t.slice(r+1,n).split(" ").filter(e=>e!=="__stack_trace").map(e=>e.endsWith(",")?e.slice(0,e.length-1):e)},f=async(t,r)=>(r=await r,{namespace:t,workflowId:r.id,runId:r.runId});async function s({workflow:t,namespace:r,queryType:n},e=fetch,a){t=await t;const i=await f(r,t);return await c(u("query",i),{options:{method:"POST",body:JSON.stringify({execution:{workflowId:t.id,runId:t.runId},query:{queryType:n}})},request:e,onError:a,notifyOnError:!1})}async function g(t,r=fetch){return new Promise((n,e)=>{s({...t,queryType:"@@temporal-internal__list"},r,a=>{y(a.body)&&a.body.message.includes("@@temporal-internal__list")?n(d(a.body.message)):e(a)})})}async function l(t,r=fetch){return s(t,r).then(n=>{const{queryResult:e}=n!=null?n:{queryResult:{payloads:[]}};let a=e.payloads;try{return a[0]&&(a=o(e.payloads[0].data)),JSON.parse(a)}catch{return typeof a!="string"?JSON.stringify(a):a}})}async function h(t,r=fetch){return l({...t,queryType:"__stack_trace"},r)}export{l as a,h as b,g};