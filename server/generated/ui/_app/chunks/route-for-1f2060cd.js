var p=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var c=(r,e)=>{var o={};for(var t in r)f.call(r,t)&&e.indexOf(t)<0&&(o[t]=r[t]);if(r!=null&&p)for(var t of p(r))e.indexOf(t)<0&&$.call(r,t)&&(o[t]=r[t]);return o};const h=(r,e)=>{const o=e instanceof URLSearchParams;return e&&!o&&(e=new URLSearchParams(e)),e?`${r}?${e}`:r};function F(r){return r.replace(/%/g,"%25").replace(/,/g,"%2C").replace(/\//g,"%2F").replace(/\\/g,"%5C").replace(/\?/g,"%3F").replace(/:/g,"%3A").replace(/@/g,"%40").replace(/&/g,"%26").replace(/=/g,"%3D").replace(/\+/g,"%2B").replace(/\$/g,"%24").replace(/#/g,"%23")}function d(r){return r.replace(/%2C/g,",").replace(/%2F/g,"/").replace(/%5C/g,"\\").replace(/%3F/g,"?").replace(/%3A/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3D/g,"=").replace(/%2B/g,"+").replace(/%24/g,"$").replace(/%23/g,"#").replace(/%25/g,"%")}const U=r=>r==="feed"||r==="compact"||r==="json",u=({namespace:r})=>`/namespaces/${r}`,w=r=>`${u(r)}/workflows`,k=r=>`${u(r)}/archival`,m=r=>`${u(r)}/settings`,s=t=>{var n=t,{workflow:r,run:e}=n,o=c(n,["workflow","run"]);const a=F(r);return`${w(o)}/${a}/${e}`},S=t=>{var n=t,{view:r,queryParams:e}=n,o=c(n,["view","queryParams"]);const a=`${s(o)}/history`;return!r||!U(r)?`${a}/feed`:h(`${a}/${r}`,e)},R=r=>`${s(r)}/workers`,L=r=>`${s(r)}/stack-trace`,v=r=>`${s(r)}/query`,A=r=>`${s(r)}/pending-activities`,W=r=>{var l;const{settings:e,searchParams:o,originUrl:t}=r,n=new URL("/auth/sso",e.baseUrl);let a=(l=e.auth.options)!=null?l:[];return a=[...a,"returnUrl"],a.forEach(i=>{const g=o.get(i);g&&n.searchParams.set(i,g)}),!n.searchParams.get("returnUrl")&&t&&n.searchParams.set("returnUrl",t),n.toString()},y=()=>{{const r=new URL("login",window.location.origin);return r.searchParams.set("returnUrl",window.location.href),r.toString()}},C=({importType:r,view:e})=>r==="events"&&e?`/import/${r}/namespace/workflow/run/history/${e}`:`/import/${r}`;export{k as a,m as b,y as c,C as d,S as e,R as f,A as g,L as h,v as i,F as j,d as k,s as l,W as m,w as r,h as t};