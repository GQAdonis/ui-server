import{s as R,h as y,t as Q,b as T,j as C,k as I,l as q,f as p,d as j,m as b,i as P,n as h,c as W,q as O}from"../chunks/scheduler.1T9hOnFr.js";import{S as F,i as H,c,a as w,m as k,t as $,b as _,d as g}from"../chunks/index.cVovwi_s.js";import{p as N}from"../chunks/stores.qMLytdka.js";import{P as z}from"../chunks/page-title.YnYjoVKm.js";import{t as E}from"../chunks/translate.HrioCK44.js";import{W as A}from"../chunks/workflow-padded-layout.U8pHGEcT.js";import{W as B}from"../chunks/worker-table.hCOHS6Zx.js";import{L as D}from"../chunks/link.BRqCDk5Q.js";import"../chunks/auth-user.CRdhaInN.js";import"../chunks/toaster.6hp_37i1.js";import{g as L}from"../chunks/route-for.xtkpLq1i.js";import"../chunks/paths.zRjPRB8I.js";import{w as G}from"../chunks/workflow-run.v5ax6B9p.js";function J(a){let e;return{c(){e=Q(a[0])},l(t){e=q(t,a[0])},m(t,n){P(t,e,n)},p(t,n){n&1&&O(e,t[0])},d(t){t&&p(e)}}}function K(a){let e,t,n=E("common.task-queue")+"",s,r,o,f,m,d;return o=new D({props:{href:L({namespace:a[2],queue:a[0]}),$$slots:{default:[J]},$$scope:{ctx:a}}}),m=new B({props:{workers:a[1]}}),{c(){e=y("section"),t=y("h2"),s=Q(n),r=Q(`:
    `),c(o.$$.fragment),f=T(),c(m.$$.fragment),this.h()},l(u){e=C(u,"SECTION",{class:!0});var l=I(e);t=C(l,"H2",{class:!0,"data-testid":!0});var i=I(t);s=q(i,n),r=q(i,`:
    `),w(o.$$.fragment,i),i.forEach(p),f=j(l),w(m.$$.fragment,l),l.forEach(p),this.h()},h(){b(t,"class","text-lg font-medium"),b(t,"data-testid","task-queue-name"),b(e,"class","flex flex-col gap-4")},m(u,l){P(u,e,l),h(e,t),h(t,s),h(t,r),k(o,t,null),h(e,f),k(m,e,null),d=!0},p(u,[l]){const i={};l&5&&(i.href=L({namespace:u[2],queue:u[0]})),l&17&&(i.$$scope={dirty:l,ctx:u}),o.$set(i);const S={};l&2&&(S.workers=u[1]),m.$set(S)},i(u){d||($(o.$$.fragment,u),$(m.$$.fragment,u),d=!0)},o(u){_(o.$$.fragment,u),_(m.$$.fragment,u),d=!1},d(u){u&&p(e),g(o),g(m)}}}function M(a,e,t){let n,s;W(a,N,f=>t(3,s=f));let{taskQueue:r}=e,{workers:o}=e;return a.$$set=f=>{"taskQueue"in f&&t(0,r=f.taskQueue),"workers"in f&&t(1,o=f.workers)},a.$$.update=()=>{a.$$.dirty&8&&t(2,{namespace:n}=s.params,n)},[r,o,n,s]}class U extends F{constructor(e){super(),H(this,e,M,K,R,{taskQueue:0,workers:1})}}function V(a){var n;let e,t;return e=new U({props:{workers:a[2],taskQueue:(n=a[1])==null?void 0:n.taskQueue}}),{c(){c(e.$$.fragment)},l(s){w(e.$$.fragment,s)},m(s,r){k(e,s,r),t=!0},p(s,r){var f;const o={};r&4&&(o.workers=s[2]),r&2&&(o.taskQueue=(f=s[1])==null?void 0:f.taskQueue),e.$set(o)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),t=!1},d(s){g(e,s)}}}function X(a){let e,t,n,s;return e=new z({props:{title:`${E("workflows.workers-tab")} | ${a[3]}`,url:a[0].url.href}}),n=new A({props:{$$slots:{default:[V]},$$scope:{ctx:a}}}),{c(){c(e.$$.fragment),t=T(),c(n.$$.fragment)},l(r){w(e.$$.fragment,r),t=j(r),w(n.$$.fragment,r)},m(r,o){k(e,r,o),P(r,t,o),k(n,r,o),s=!0},p(r,[o]){const f={};o&8&&(f.title=`${E("workflows.workers-tab")} | ${r[3]}`),o&1&&(f.url=r[0].url.href),e.$set(f);const m={};o&38&&(m.$$scope={dirty:o,ctx:r}),n.$set(m)},i(r){s||($(e.$$.fragment,r),$(n.$$.fragment,r),s=!0)},o(r){_(e.$$.fragment,r),_(n.$$.fragment,r),s=!1},d(r){r&&p(t),g(e,r),g(n,r)}}}function Y(a,e,t){let n,s,r,o,f;return W(a,G,m=>t(4,o=m)),W(a,N,m=>t(0,f=m)),a.$$.update=()=>{a.$$.dirty&1&&t(3,{workflow:n}=f.params,n),a.$$.dirty&16&&t(2,{workers:s,workflow:r}=o,s,(t(1,r),t(4,o)))},[f,r,s,n,o]}class le extends F{constructor(e){super(),H(this,e,Y,X,R,{})}}export{le as component};