import{d as t,r as f,w as r}from"./index.fd755237.js";import{p as l}from"./stores.7849b0fb.js";import{a as u,b as d}from"./workflow-service.09dd63d1.js";import{s as p}from"./list-workflow-query.6f0a7c71.js";const m=300,b=async(s,o,e)=>{o.set(!0);try{await e()}catch(a){console.error(a)}s.set(!1),setTimeout(()=>{o.set(!1)},m)},k=r(0),y=t([l],([s])=>s.params.namespace),h=t([l],([s])=>s.url.searchParams.get("query")),C=t([y,h,k,p],([s,o,e,a])=>({namespace:s,query:o,refresh:e,supportsAdvancedVisibility:a})),A=s=>{E.set(s)},W=s=>C.subscribe(({namespace:o,query:e,supportsAdvancedVisibility:a})=>{b(v,q,async()=>{const{workflows:i,error:n}=await u(o,{query:e});if(s(i),a){const w=await d(o,e);A(w)}n?c.set(n):c.set("")})}),P=r(""),q=r(!0),v=r(!0),E=r({count:0,totalCount:0}),c=r(""),x=f([],W),L=r(""),Q=s=>!s.disableWriteActions&&!s.workflowCancelDisabled,S=s=>!s.disableWriteActions&&!s.workflowTerminateDisabled;export{S as a,P as b,x as c,c as d,L as e,E as f,v as l,k as r,q as u,Q as w};