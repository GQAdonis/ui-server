import{f as ft}from"../chunks/namespaces-service.yorv3BcV.js";import{d as ut,e as Qe}from"../chunks/workflow-service.YTbBJnP_.js";import{s as fe,c as oe,e as D,a as F,t as L,b as H,d as B,g as _,h as N,f as O,j as T,k as w,l as E,m as K,D as ct,_ as lt,n as ne,E as mt,p as pt,u as _t,q as $t,r as ht,i as ae,v as V,H as Re,S as rt,T as at,x as Q,y as nt}from"../chunks/scheduler.LRpOgQOC.js";import{S as ue,i as ce,c as C,a as I,m as P,t as b,b as v,d as q,f as ot,g as Y,e as Z}from"../chunks/index.dE1eZLcR.js";import{e as ie,u as dt,o as gt}from"../chunks/each._Tp_Nd1G.js";import{p as Ie}from"../chunks/stores.jBODLJbn.js";import{P as wt}from"../chunks/page-title.ZsHOm3Zs.js";import{W as bt}from"../chunks/workflow-status.Urf251Vu.js";import{t as vt,F as Ue,d as kt}from"../chunks/index.Lo-5SP1m.js";import{L as Ne}from"../chunks/link.Oo1aPRwo.js";import{T as yt}from"../chunks/table-row.Sis06F23.js";import{t as k}from"../chunks/translate.HrioCK44.js";import{t as Fe,r as Tt,f as ee}from"../chunks/time-format.kkK9nrxm.js";import{e as Et,h as St,j as Ct,k as ze,l as Me}from"../chunks/format-time.9mIRALNp.js";import{l as It}from"../chunks/has.iatLMeUG.js";import{b as Pt}from"../chunks/route-for.qlqdgNaC.js";import{u as st}from"../chunks/update-query-parameters.CzgHZwgQ.js";import{T as qt,a as Ft}from"../chunks/table-header-row.dZN5JO8t.js";import{C as Ae}from"../chunks/code-block.ltRl18AS.js";import{E as Nt}from"../chunks/empty-state.lkEVDewq.js";import{P as At}from"../chunks/pagination.q_pBGfBz.js";import{g as Wt}from"../chunks/entry.uS3HGw0x.js";import{B as Dt}from"../chunks/button.t-OTMkwT.js";import{I as it}from"../chunks/input.XNDj923K.js";import{F as Ge}from"../chunks/pagination.Yv2d1ZtP.js";import{S as Ht,a as ve}from"../chunks/simple-select.rv0gfM5z.js";const Lt=async function({params:a,url:e}){var u,p,S,y,A,z,j,J;const{searchParams:r}=e;r.has("time-range")||r.set("time-range","1 day");const t=r.get("workflow-id"),l=r.get("workflow-type"),i=r.get("time-range"),s=r.get("status"),n=await ft(a.namespace),o=(S=(p=(u=n.config)==null?void 0:u.historyArchivalUri)==null?void 0:p.toLowerCase())==null?void 0:S.startsWith("s3://"),c=(z=(A=(y=n.config)==null?void 0:y.historyArchivalUri)==null?void 0:A.toLowerCase())==null?void 0:z.startsWith("gs://"),f=o||c,m=f?{}:{workflowId:t,workflowType:l,closeTime:i,executionStatus:s},d=((j=n==null?void 0:n.config)==null?void 0:j.historyArchivalState)==="Enabled",h=((J=n==null?void 0:n.config)==null?void 0:J.visibilityArchivalState)==="Enabled",$=d&&h?await ut(a.namespace,m,fetch):null;return{workflows:$?$.workflows:[],namespace:n,archivalEnabled:d,visibilityArchivalEnabled:h,archivalQueryingNotSupported:f}},ir=Object.freeze(Object.defineProperty({__proto__:null,load:Lt},Symbol.toStringTag,{value:"Module"})),Pe=a=>e=>e.toLowerCase()===a.toLowerCase(),Ce=(a,e)=>a[e+2],Ot=a=>{if(a){for(const e of Ct)if(a[e])return{[e]:a[e]}}},Bt=Pe("WorkflowType"),jt=Pe("WorkflowId"),Qt=Pe("StartTime"),Rt=Pe("ExecutionStatus"),Ut=a=>{const e=vt(a),r={workflowId:"",workflowType:"",executionStatus:null,timeRange:null};return e.forEach((t,l)=>{if(jt(t)&&(r.workflowId=Ce(e,l)),Bt(t)&&(r.workflowType=Ce(e,l)),Rt(t)){const i=Ce(e,l);It(i)&&(r.executionStatus=i)}if(Qt(t)){const i=Ce(e,l);try{const s=Et(i),n=Ot(s);r.timeRange=St(n)}catch(s){console.error("Error parsing StartTime from query",s)}}}),r};function zt(a){let e=a[0].id+"",r;return{c(){r=L(e)},l(t){r=O(t,e)},m(t,l){w(t,r,l)},p(t,l){l&1&&e!==(e=t[0].id+"")&&ne(r,e)},d(t){t&&_(r)}}}function Mt(a){var De,He,Le;let e,r,t,l,i,s,n,o,c,f=ee(a[0].startTime,a[4],{relative:a[5]})+"",m,d,h,$,u=k("workflows.workflow-name")+"",p,S,y,A,z=a[0].name+"",j,J,te,R,me,x,pe=ee(a[0].endTime,a[4],{relative:a[5]})+"",ke,ye,le,_e,$e=ee(a[0].startTime,a[4],{relative:a[5]})+"",Te,Ee,re,he,de=ee(a[0].endTime,a[4],{relative:a[5]})+"",Se,M,qe,We;return r=new bt({props:{status:a[0].status,delay:ze(a[0].startTime)}}),i=new Ne({props:{href:a[2],$$slots:{default:[zt]},$$scope:{ctx:a}}}),n=new Ue({props:{copyIconTitle:k("common.copy-icon-title"),copySuccessIconTitle:k("common.copy-success-icon-title"),filterIconTitle:k("common.filter-workflows"),show:a[1],content:a[0].id,filterable:!1}}),R=new Ue({props:{copyIconTitle:k("common.copy-icon-title"),copySuccessIconTitle:k("common.copy-success-icon-title"),filterIconTitle:k("common.filter-workflows"),show:a[1],content:a[0].name,onFilter:a[13],filtered:(Le=(He=(De=a[3].url)==null?void 0:De.searchParams)==null?void 0:He.get("query"))==null?void 0:Le.includes(a[0].name)}}),{c(){e=D("td"),C(r.$$.fragment),t=F(),l=D("td"),C(i.$$.fragment),s=F(),C(n.$$.fragment),o=F(),c=D("p"),m=L(f),d=F(),h=D("td"),$=D("h3"),p=L(u),S=L(":"),y=F(),A=D("button"),j=L(z),te=F(),C(R.$$.fragment),me=F(),x=D("p"),ke=L(pe),ye=F(),le=D("td"),_e=D("p"),Te=L($e),Ee=F(),re=D("td"),he=D("p"),Se=L(de),this.h()},l(g){e=H(g,"TD",{});var W=B(e);I(r.$$.fragment,W),W.forEach(_),t=N(g),l=H(g,"TD",{class:!0});var G=B(l);I(i.$$.fragment,G),s=N(G),I(n.$$.fragment,G),o=N(G),c=H(G,"P",{class:!0});var se=B(c);m=O(se,f),se.forEach(_),G.forEach(_),d=N(g),h=H(g,"TD",{class:!0});var U=B(h);$=H(U,"H3",{class:!0});var X=B($);p=O(X,u),S=O(X,":"),X.forEach(_),y=N(U),A=H(U,"BUTTON",{class:!0,"aria-label":!0});var ge=B(A);j=O(ge,z),ge.forEach(_),te=N(U),I(R.$$.fragment,U),me=N(U),x=H(U,"P",{class:!0});var we=B(x);ke=O(we,pe),we.forEach(_),U.forEach(_),ye=N(g),le=H(g,"TD",{class:!0});var be=B(le);_e=H(be,"P",{});var Oe=B(_e);Te=O(Oe,$e),Oe.forEach(_),be.forEach(_),Ee=N(g),re=H(g,"TD",{class:!0});var Be=B(re);he=H(Be,"P",{});var je=B(he);Se=O(je,de),je.forEach(_),Be.forEach(_),this.h()},h(){T(c,"class","inline-time-cell svelte-1haww6m"),T(l,"class","relative break-words pr-4"),T($,"class","md:hidden"),T(A,"class","table-link"),T(A,"aria-label",J=k("workflows.filter-by",{workflowName:a[0].name})),T(x,"class","inline-time-cell svelte-1haww6m"),T(h,"class","relative truncate"),T(le,"class","time-cell svelte-1haww6m"),T(re,"class","time-cell svelte-1haww6m")},m(g,W){w(g,e,W),P(r,e,null),w(g,t,W),w(g,l,W),P(i,l,null),E(l,s),P(n,l,null),E(l,o),E(l,c),E(c,m),w(g,d,W),w(g,h,W),E(h,$),E($,p),E($,S),E(h,y),E(h,A),E(A,j),E(h,te),P(R,h,null),E(h,me),E(h,x),E(x,ke),w(g,ye,W),w(g,le,W),E(le,_e),E(_e,Te),w(g,Ee,W),w(g,re,W),E(re,he),E(he,Se),M=!0,qe||(We=[K(l,"mouseover",a[8]),K(l,"focus",a[9]),K(l,"mouseleave",a[10]),K(l,"blur",a[11]),K(A,"click",ct(lt(a[12]))),K(h,"mouseover",a[14]),K(h,"focus",a[15]),K(h,"mouseleave",a[16]),K(h,"blur",a[17])],qe=!0)},p(g,W){var ge,we,be;const G={};W&1&&(G.status=g[0].status),W&1&&(G.delay=ze(g[0].startTime)),r.$set(G);const se={};W&4&&(se.href=g[2]),W&262145&&(se.$$scope={dirty:W,ctx:g}),i.$set(se);const U={};W&2&&(U.show=g[1]),W&1&&(U.content=g[0].id),n.$set(U),(!M||W&49)&&f!==(f=ee(g[0].startTime,g[4],{relative:g[5]})+"")&&ne(m,f),(!M||W&1)&&z!==(z=g[0].name+"")&&ne(j,z),(!M||W&1&&J!==(J=k("workflows.filter-by",{workflowName:g[0].name})))&&T(A,"aria-label",J);const X={};W&2&&(X.show=g[1]),W&1&&(X.content=g[0].name),W&1&&(X.onFilter=g[13]),W&9&&(X.filtered=(be=(we=(ge=g[3].url)==null?void 0:ge.searchParams)==null?void 0:we.get("query"))==null?void 0:be.includes(g[0].name)),R.$set(X),(!M||W&49)&&pe!==(pe=ee(g[0].endTime,g[4],{relative:g[5]})+"")&&ne(ke,pe),(!M||W&49)&&$e!==($e=ee(g[0].startTime,g[4],{relative:g[5]})+"")&&ne(Te,$e),(!M||W&49)&&de!==(de=ee(g[0].endTime,g[4],{relative:g[5]})+"")&&ne(Se,de)},i(g){M||(b(r.$$.fragment,g),b(i.$$.fragment,g),b(n.$$.fragment,g),b(R.$$.fragment,g),M=!0)},o(g){v(r.$$.fragment,g),v(i.$$.fragment,g),v(n.$$.fragment,g),v(R.$$.fragment,g),M=!1},d(g){g&&(_(e),_(t),_(l),_(d),_(h),_(ye),_(le),_(Ee),_(re)),q(r),q(i),q(n),q(R),qe=!1,mt(We)}}}function Gt(a){let e,r;return e=new yt({props:{class:"hover:surface-subtle",$$slots:{default:[Mt]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,[l]){const i={};l&262207&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Kt(a,e,r){let t,l,i,s;oe(a,Ie,j=>r(3,l=j)),oe(a,Fe,j=>r(4,i=j)),oe(a,Tt,j=>r(5,s=j));let{namespace:n}=e,{workflow:o}=e,c=!1;const f=j=>{const J=Qe({timeRange:"All"}),te=l.url.searchParams.get("query"),R=Ut(te??J),me=(R==null?void 0:R.workflowType)===j?"":j,x=Qe({...R,workflowType:me});st({url:l.url,parameter:"query",value:x,allowEmpty:!0})},m=()=>r(1,c=!0),d=()=>r(1,c=!0),h=()=>r(1,c=!1),$=()=>r(1,c=!1),u=()=>f(o.name),p=()=>f(o.name),S=()=>r(1,c=!0),y=()=>r(1,c=!0),A=()=>r(1,c=!1),z=()=>r(1,c=!1);return a.$$set=j=>{"namespace"in j&&r(7,n=j.namespace),"workflow"in j&&r(0,o=j.workflow)},a.$$.update=()=>{a.$$.dirty&129&&r(2,t=Pt({namespace:n,workflow:o.id,run:o.runId}))},[o,c,t,l,i,s,f,n,m,d,h,$,u,p,S,y,A,z]}class Vt extends ue{constructor(e){super(),ce(this,e,Kt,Gt,fe,{namespace:7,workflow:0})}}function Jt(a){let e;const r=a[1].default,t=pt(r,a,a[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&4)&&_t(t,r,l,l[2],e?ht(r,l[2],i,null):$t(l[2]),null)},i(l){e||(b(t,l),e=!0)},o(l){v(t,l),e=!1},d(l){t&&t.d(l)}}}function Xt(a){let e,r="Workflows";return{c(){e=D("caption"),e.textContent=r,this.h()},l(t){e=H(t,"CAPTION",{class:!0,slot:!0,"data-svelte-h":!0}),ae(e)!=="svelte-qflexs"&&(e.textContent=r),this.h()},h(){T(e,"class","sr-only"),T(e,"slot","caption")},m(t,l){w(t,e,l)},p:V,d(t){t&&_(e)}}}function Yt(a){let e,r="Status",t,l,i="Workflow ID",s,n,o="Type",c,f,m="Start",d,h,$="End",u,p,S="Summary";return{c(){e=D("th"),e.textContent=r,t=F(),l=D("th"),l.textContent=i,s=F(),n=D("th"),n.textContent=o,c=F(),f=D("th"),f.textContent=m,d=F(),h=D("th"),h.textContent=$,u=F(),p=D("th"),p.textContent=S,this.h()},l(y){e=H(y,"TH",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-16bnp2i"&&(e.textContent=r),t=N(y),l=H(y,"TH",{class:!0,"data-svelte-h":!0}),ae(l)!=="svelte-115zk6j"&&(l.textContent=i),s=N(y),n=H(y,"TH",{class:!0,"data-svelte-h":!0}),ae(n)!=="svelte-lhnwb5"&&(n.textContent=o),c=N(y),f=H(y,"TH",{class:!0,"data-svelte-h":!0}),ae(f)!=="svelte-1xn3gxk"&&(f.textContent=m),d=N(y),h=H(y,"TH",{class:!0,"data-svelte-h":!0}),ae(h)!=="svelte-10ns7z5"&&(h.textContent=$),u=N(y),p=H(y,"TH",{class:!0,colspan:!0,"data-svelte-h":!0}),ae(p)!=="svelte-39g6qc"&&(p.textContent=S),this.h()},h(){T(e,"class","w-32 max-md:hidden"),T(l,"class","max-md:hidden md:w-auto"),T(n,"class","w-60 max-md:hidden"),T(f,"class","w-60 max-xl:hidden"),T(h,"class","w-60 max-xl:hidden"),T(p,"class","md:hidden"),T(p,"colspan","3")},m(y,A){w(y,e,A),w(y,t,A),w(y,l,A),w(y,s,A),w(y,n,A),w(y,c,A),w(y,f,A),w(y,d,A),w(y,h,A),w(y,u,A),w(y,p,A)},p:V,d(y){y&&(_(e),_(t),_(l),_(s),_(n),_(c),_(f),_(d),_(h),_(u),_(p))}}}function Zt(a){let e,r;return e=new Ft({props:{slot:"headers",$$slots:{default:[Yt]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&4&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function xt(a){let e,r;return e=new qt({props:{class:"w-full md:table-fixed",updating:a[0],"data-testid":"workflows-table",$$slots:{headers:[Zt],caption:[Xt],default:[Jt]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,[l]){const i={};l&1&&(i.updating=t[0]),l&4&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function el(a,e,r){let{$$slots:t={},$$scope:l}=e,{updating:i=!1}=e;return a.$$set=s=>{"updating"in s&&r(0,i=s.updating),"$$scope"in s&&r(2,l=s.$$scope)},[i,t,l]}class tl extends ue{constructor(e){super(),ce(this,e,el,xt,fe,{updating:0})}}function ll(a){let e;return{c(){e=L(a[2])},l(r){e=O(r,a[2])},m(r,t){w(r,e,t)},p(r,t){t&4&&ne(e,r[2])},d(r){r&&_(e)}}}function rl(a){let e,r,t,l,i,s,n;return r=new it({props:{class:"w-full",unroundRight:!0,label:a[2],id:a[5],labelHidden:!0,icon:a[4]?"search":null,type:"search",name:a[3],value:a[1],placeholder:a[0],autocomplete:"off"}}),r.$on("input",a[7]),l=new Dt({props:{borderRadiusModifier:"square-left",type:"submit",$$slots:{default:[ll]},$$scope:{ctx:a}}}),{c(){e=D("form"),C(r.$$.fragment),t=F(),C(l.$$.fragment),this.h()},l(o){e=H(o,"FORM",{role:!0,class:!0});var c=B(e);I(r.$$.fragment,c),t=N(c),I(l.$$.fragment,c),c.forEach(_),this.h()},h(){T(e,"role","search"),T(e,"class","flex items-center")},m(o,c){w(o,e,c),P(r,e,null),E(e,t),P(l,e,null),i=!0,s||(n=K(e,"submit",lt(a[6])),s=!0)},p(o,[c]){const f={};c&4&&(f.label=o[2]),c&32&&(f.id=o[5]),c&16&&(f.icon=o[4]?"search":null),c&8&&(f.name=o[3]),c&2&&(f.value=o[1]),c&1&&(f.placeholder=o[0]),r.$set(f);const m={};c&260&&(m.$$scope={dirty:c,ctx:o}),l.$set(m)},i(o){i||(b(r.$$.fragment,o),b(l.$$.fragment,o),i=!0)},o(o){v(r.$$.fragment,o),v(l.$$.fragment,o),i=!1},d(o){o&&_(e),q(r),q(l),s=!1,n()}}}function al(a,e,r){let{placeholder:t=""}=e,{value:l=""}=e,{label:i=k("common.search")}=e,{name:s="query"}=e,{icon:n=!1}=e,{id:o=`${i.toLocaleUpperCase()}-input`}=e;function c(m){Re.call(this,a,m)}function f(m){Re.call(this,a,m)}return a.$$set=m=>{"placeholder"in m&&r(0,t=m.placeholder),"value"in m&&r(1,l=m.value),"label"in m&&r(2,i=m.label),"name"in m&&r(3,s=m.name),"icon"in m&&r(4,n=m.icon),"id"in m&&r(5,o=m.id)},[t,l,i,s,n,o,c,f]}class nl extends ue{constructor(e){super(),ce(this,e,al,rl,fe,{placeholder:0,value:1,label:2,name:3,icon:4,id:5})}}function ol(a){let e,r,t;function l(s){a[6](s)}let i={type:"search",icon:"search",label:a[0],labelHidden:!0,placeholder:a[0],id:a[2]};return a[1]!==void 0&&(i.value=a[1]),e=new it({props:i}),rt.push(()=>ot(e,"value",l)),{c(){C(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,n){P(e,s,n),t=!0},p(s,[n]){const o={};n&1&&(o.label=s[0]),n&1&&(o.placeholder=s[0]),!r&&n&2&&(r=!0,o.value=s[1],at(()=>r=!1)),e.$set(o)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){q(e,s)}}}function sl(a,e,r){let t;oe(a,Ie,m=>r(5,t=m));let{parameter:l}=e,{name:i}=e,{value:s}=e,n=l&&t.url.searchParams.get(l)||s;const o=`${l||i}-filter`,c=kt(st,300);function f(m){n=m,r(1,n)}return a.$$set=m=>{"parameter"in m&&r(3,l=m.parameter),"name"in m&&r(0,i=m.name),"value"in m&&r(4,s=m.value)},a.$$.update=()=>{a.$$.dirty&42&&c({parameter:l,value:n,url:t.url})},[i,n,o,l,s,t,f]}class Ke extends ue{constructor(e){super(),ce(this,e,sl,ol,fe,{parameter:3,name:0,value:4})}}function Ve(a,e,r){const t=a.slice();return t[6]=e[r].value,t[7]=e[r].label,t}function Je(a,e,r){const t=a.slice();return t[6]=e[r],t}function il(a){let e,r;return e=new Ne({props:{href:`${a[0].url.pathname}?query=`,$$slots:{default:[ul]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&1&&(i.href=`${t[0].url.pathname}?query=`),l&4096&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function fl(a){let e,r;return e=new Ne({props:{href:a[0].url.pathname,$$slots:{default:[cl]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&1&&(i.href=t[0].url.pathname),l&4096&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function ul(a){let e=k("workflows.advanced-search")+"",r;return{c(){r=L(e)},l(t){r=O(t,e)},m(t,l){w(t,r,l)},p:V,d(t){t&&_(r)}}}function cl(a){let e=k("workflows.basic-search")+"",r;return{c(){r=L(e)},l(t){r=O(t,e)},m(t,l){w(t,r,l)},p:V,d(t){t&&_(r)}}}function ml(a){let e,r,t,l,i,s,n,o,c,f,m,d;r=new Ke({props:{parameter:"workflow-id",name:k("common.workflow-id"),value:yl}}),l=new Ke({props:{parameter:"workflow-type",name:k("common.workflow-type"),value:Tl}}),s=new Ge({props:{label:k("workflows.time-range"),parameter:"time-range",value:"24 hours",$$slots:{default:[$l]},$$scope:{ctx:a}}}),o=new Ge({props:{label:k("common.status"),parameter:"status",value:null,$$slots:{default:[dl]},$$scope:{ctx:a}}});function h(u){a[5](u)}let $={id:"filter-by-relative-time",$$slots:{default:[vl]},$$scope:{ctx:a}};return a[2]!==void 0&&($.value=a[2]),f=new Ht({props:$}),rt.push(()=>ot(f,"value",h)),{c(){e=D("div"),C(r.$$.fragment),t=F(),C(l.$$.fragment),i=F(),C(s.$$.fragment),n=F(),C(o.$$.fragment),c=F(),C(f.$$.fragment),this.h()},l(u){e=H(u,"DIV",{class:!0,role:!0});var p=B(e);I(r.$$.fragment,p),t=N(p),I(l.$$.fragment,p),i=N(p),I(s.$$.fragment,p),n=N(p),I(o.$$.fragment,p),c=N(p),I(f.$$.fragment,p),p.forEach(_),this.h()},h(){T(e,"class","grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5"),T(e,"role","search")},m(u,p){w(u,e,p),P(r,e,null),E(e,t),P(l,e,null),E(e,i),P(s,e,null),E(e,n),P(o,e,null),E(e,c),P(f,e,null),d=!0},p(u,p){const S={};p&4096&&(S.$$scope={dirty:p,ctx:u}),s.$set(S);const y={};p&4096&&(y.$$scope={dirty:p,ctx:u}),o.$set(y);const A={};p&4096&&(A.$$scope={dirty:p,ctx:u}),!m&&p&4&&(m=!0,A.value=u[2],at(()=>m=!1)),f.$set(A)},i(u){d||(b(r.$$.fragment,u),b(l.$$.fragment,u),b(s.$$.fragment,u),b(o.$$.fragment,u),b(f.$$.fragment,u),d=!0)},o(u){v(r.$$.fragment,u),v(l.$$.fragment,u),v(s.$$.fragment,u),v(o.$$.fragment,u),v(f.$$.fragment,u),d=!1},d(u){u&&_(e),q(r),q(l),q(s),q(o),q(f)}}}function pl(a){let e,r;return e=new nl({props:{icon:!0,placeholder:k("common.search"),value:a[0].url.searchParams.get("query")}}),e.$on("submit",a[4]),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&1&&(i.value=t[0].url.searchParams.get("query")),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function _l(a){let e=a[6]+"",r;return{c(){r=L(e)},l(t){r=O(t,e)},m(t,l){w(t,r,l)},p:V,d(t){t&&_(r)}}}function Xe(a){let e,r;return e=new ve({props:{value:a[6],$$slots:{default:[_l]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&4096&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function $l(a){let e,r,t=ie(Me),l=[];for(let s=0;s<t.length;s+=1)l[s]=Xe(Je(a,t,s));const i=s=>v(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=Q()},l(s){for(let n=0;n<l.length;n+=1)l[n].l(s);e=Q()},m(s,n){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(s,n);w(s,e,n),r=!0},p(s,n){if(n&0){t=ie(Me);let o;for(o=0;o<t.length;o+=1){const c=Je(s,t,o);l[o]?(l[o].p(c,n),b(l[o],1)):(l[o]=Xe(c),l[o].c(),b(l[o],1),l[o].m(e.parentNode,e))}for(Y(),o=t.length;o<l.length;o+=1)i(o);Z()}},i(s){if(!r){for(let n=0;n<t.length;n+=1)b(l[n]);r=!0}},o(s){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)v(l[n]);r=!1},d(s){s&&_(e),nt(l,s)}}}function hl(a){let e=a[7]+"",r;return{c(){r=L(e)},l(t){r=O(t,e)},m(t,l){w(t,r,l)},p:V,d(t){t&&_(r)}}}function Ye(a,e){let r,t,l;return t=new ve({props:{value:e[6],$$slots:{default:[hl]},$$scope:{ctx:e}}}),{key:a,first:null,c(){r=Q(),C(t.$$.fragment),this.h()},l(i){r=Q(),I(t.$$.fragment,i),this.h()},h(){this.first=r},m(i,s){w(i,r,s),P(t,i,s),l=!0},p(i,s){e=i;const n={};s&4096&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(i){l||(b(t.$$.fragment,i),l=!0)},o(i){v(t.$$.fragment,i),l=!1},d(i){i&&_(r),q(t,i)}}}function dl(a){let e=[],r=new Map,t,l,i=ie(Object.values(a[3]));const s=n=>n[7];for(let n=0;n<i.length;n+=1){let o=Ve(a,i,n),c=s(o);r.set(c,e[n]=Ye(c,o))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();t=Q()},l(n){for(let o=0;o<e.length;o+=1)e[o].l(n);t=Q()},m(n,o){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(n,o);w(n,t,o),l=!0},p(n,o){o&8&&(i=ie(Object.values(n[3])),Y(),e=dt(e,o,s,1,n,i,r,t.parentNode,gt,Ye,t,Ve),Z())},i(n){if(!l){for(let o=0;o<i.length;o+=1)b(e[o]);l=!0}},o(n){for(let o=0;o<e.length;o+=1)v(e[o]);l=!1},d(n){n&&_(t);for(let o=0;o<e.length;o+=1)e[o].d(n)}}}function gl(a){let e=k("common.relative")+"",r;return{c(){r=L(e)},l(t){r=O(t,e)},m(t,l){w(t,r,l)},p:V,d(t){t&&_(r)}}}function wl(a){let e=k("common.utc")+"",r;return{c(){r=L(e)},l(t){r=O(t,e)},m(t,l){w(t,r,l)},p:V,d(t){t&&_(r)}}}function bl(a){let e=k("common.local")+"",r;return{c(){r=L(e)},l(t){r=O(t,e)},m(t,l){w(t,r,l)},p:V,d(t){t&&_(r)}}}function vl(a){let e,r,t,l,i,s;return e=new ve({props:{value:"relative",$$slots:{default:[gl]},$$scope:{ctx:a}}}),t=new ve({props:{value:"UTC",$$slots:{default:[wl]},$$scope:{ctx:a}}}),i=new ve({props:{value:"local",$$slots:{default:[bl]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment),r=F(),C(t.$$.fragment),l=F(),C(i.$$.fragment)},l(n){I(e.$$.fragment,n),r=N(n),I(t.$$.fragment,n),l=N(n),I(i.$$.fragment,n)},m(n,o){P(e,n,o),w(n,r,o),P(t,n,o),w(n,l,o),P(i,n,o),s=!0},p(n,o){const c={};o&4096&&(c.$$scope={dirty:o,ctx:n}),e.$set(c);const f={};o&4096&&(f.$$scope={dirty:o,ctx:n}),t.$set(f);const m={};o&4096&&(m.$$scope={dirty:o,ctx:n}),i.$set(m)},i(n){s||(b(e.$$.fragment,n),b(t.$$.fragment,n),b(i.$$.fragment,n),s=!0)},o(n){v(e.$$.fragment,n),v(t.$$.fragment,n),v(i.$$.fragment,n),s=!1},d(n){n&&(_(r),_(l)),q(e,n),q(t,n),q(i,n)}}}function kl(a){let e,r,t,l,i,s,n,o;const c=[fl,il],f=[];function m(u,p){return u[1]?0:1}t=m(a),l=f[t]=c[t](a);const d=[pl,ml],h=[];function $(u,p){return u[1]?0:1}return s=$(a),n=h[s]=d[s](a),{c(){e=D("section"),r=D("p"),l.c(),i=F(),n.c(),this.h()},l(u){e=H(u,"SECTION",{class:!0});var p=B(e);r=H(p,"P",{class:!0});var S=B(r);l.l(S),S.forEach(_),i=N(p),n.l(p),p.forEach(_),this.h()},h(){T(r,"class","text-right text-xs"),T(e,"class","flex flex-col gap-2")},m(u,p){w(u,e,p),E(e,r),f[t].m(r,null),E(e,i),h[s].m(e,null),o=!0},p(u,[p]){let S=t;t=m(u),t===S?f[t].p(u,p):(Y(),v(f[S],1,1,()=>{f[S]=null}),Z(),l=f[t],l?l.p(u,p):(l=f[t]=c[t](u),l.c()),b(l,1),l.m(r,null));let y=s;s=$(u),s===y?h[s].p(u,p):(Y(),v(h[y],1,1,()=>{h[y]=null}),Z(),n=h[s],n?n.p(u,p):(n=h[s]=d[s](u),n.c()),b(n,1),n.m(e,null))},i(u){o||(b(l),b(n),o=!0)},o(u){v(l),v(n),o=!1},d(u){u&&_(e),f[t].d(),h[s].d()}}}let yl="",Tl="";function El(a,e,r){let t,l,i;oe(a,Ie,c=>r(0,l=c)),oe(a,Fe,c=>r(2,i=c));const s={All:{value:null,label:k("workflows.all-statuses")},"Timed Out":{value:"TimedOut",label:k("workflows.timed-out")},Completed:{value:"Completed",label:k("workflows.completed")},Failed:{value:"Failed",label:k("workflows.failed")},"Continued as New":{value:"ContinuedAsNew",label:k("workflows.continued-as-new")},Canceled:{value:"Canceled",label:k("workflows.canceled")},Terminated:{value:"Terminated",label:k("workflows.terminated")}},n=c=>{const m=new FormData(c.target).get("query");l.url.searchParams.set("query",String(m)),Wt(l.url.toString())};function o(c){i=c,Fe.set(i)}return a.$$.update=()=>{a.$$.dirty&1&&r(1,t=l.url.searchParams.has("query"))},[l,t,i,s,n,o]}class Sl extends ue{constructor(e){super(),ce(this,e,El,kl,fe,{})}}function Ze(a,e,r){const t=a.slice();return t[8]=e[r],t}function Cl(a){let e,r=k("workflows.archival-disabled-title")+"",t,l,i,s=k("workflows.archival-disabled-details")+"",n,o,c,f,m,d,h;f=new Ae({props:{content:`temporal operator namespace update --history-archival-state enabled ${a[4]}`,language:"text",inline:!0,copyIconTitle:k("common.copy-icon-title"),copySuccessIconTitle:k("common.copy-success-icon-title")}});let $=!a[1]&&xe(a);return{c(){e=D("h1"),t=L(r),l=F(),i=D("p"),n=L(s),o=L(":"),c=F(),C(f.$$.fragment),m=F(),$&&$.c(),d=Q(),this.h()},l(u){e=H(u,"H1",{class:!0,"data-testid":!0});var p=B(e);t=O(p,r),p.forEach(_),l=N(u),i=H(u,"P",{});var S=B(i);n=O(S,s),o=O(S,":"),S.forEach(_),c=N(u),I(f.$$.fragment,u),m=N(u),$&&$.l(u),d=Q(),this.h()},h(){T(e,"class","text-2xl"),T(e,"data-testid","archived-disabled-title")},m(u,p){w(u,e,p),E(e,t),w(u,l,p),w(u,i,p),E(i,n),E(i,o),w(u,c,p),P(f,u,p),w(u,m,p),$&&$.m(u,p),w(u,d,p),h=!0},p(u,p){const S={};p&16&&(S.content=`temporal operator namespace update --history-archival-state enabled ${u[4]}`),f.$set(S),u[1]?$&&(Y(),v($,1,1,()=>{$=null}),Z()):$?($.p(u,p),p&2&&b($,1)):($=xe(u),$.c(),b($,1),$.m(d.parentNode,d))},i(u){h||(b(f.$$.fragment,u),b($),h=!0)},o(u){v(f.$$.fragment,u),v($),h=!1},d(u){u&&(_(e),_(l),_(i),_(c),_(m),_(d)),q(f,u),$&&$.d(u)}}}function Il(a){let e,r=k("workflows.visibility-disabled-archival")+"",t,l,i,s=k("workflows.archival-link-preface")+"",n,o,c=k("workflows.archival-link")+"",f,m,d,h,$;return h=new Ae({props:{content:`temporal operator namespace update --visibility-archival-state enabled ${a[4]}`,language:"text",inline:!0,copyIconTitle:k("common.copy-icon-title"),copySuccessIconTitle:k("common.copy-success-icon-title")}}),{c(){e=D("h1"),t=L(r),l=F(),i=D("p"),n=L(s),o=D("a"),f=L(c),m=L(":"),d=F(),C(h.$$.fragment),this.h()},l(u){e=H(u,"H1",{class:!0,"data-testid":!0});var p=B(e);t=O(p,r),p.forEach(_),l=N(u),i=H(u,"P",{});var S=B(i);n=O(S,s),o=H(S,"A",{class:!0,href:!0,target:!0,rel:!0});var y=B(o);f=O(y,c),y.forEach(_),m=O(S,":"),S.forEach(_),d=N(u),I(h.$$.fragment,u),this.h()},h(){T(e,"class","text-2xl"),T(e,"data-testid","visibility-disabled-title"),T(o,"class","text-blue-700 underline"),T(o,"href","https://docs.temporal.io/clusters#archival"),T(o,"target","_blank"),T(o,"rel","noreferrer")},m(u,p){w(u,e,p),E(e,t),w(u,l,p),w(u,i,p),E(i,n),E(i,o),E(o,f),E(i,m),w(u,d,p),P(h,u,p),$=!0},p(u,p){const S={};p&16&&(S.content=`temporal operator namespace update --visibility-archival-state enabled ${u[4]}`),h.$set(S)},i(u){$||(b(h.$$.fragment,u),$=!0)},o(u){v(h.$$.fragment,u),$=!1},d(u){u&&(_(e),_(l),_(i),_(d)),q(h,u)}}}function Pl(a){let e,r=k("workflows.archived-workflows")+"",t,l,i,s,n,o,c,f=!a[0]&&et();const m=[Fl,ql],d=[];function h($,u){var p;return(p=$[3])!=null&&p.length?0:1}return s=h(a),n=d[s]=m[s](a),{c(){e=D("h1"),t=L(r),l=F(),f&&f.c(),i=F(),n.c(),o=Q(),this.h()},l($){e=H($,"H1",{class:!0,"data-testid":!0});var u=B(e);t=O(u,r),u.forEach(_),l=N($),f&&f.l($),i=N($),n.l($),o=Q(),this.h()},h(){T(e,"class","text-2xl"),T(e,"data-testid","archived-enabled-title")},m($,u){w($,e,u),E(e,t),w($,l,u),f&&f.m($,u),w($,i,u),d[s].m($,u),w($,o,u),c=!0},p($,u){$[0]?f&&(Y(),v(f,1,1,()=>{f=null}),Z()):f?u&1&&b(f,1):(f=et(),f.c(),b(f,1),f.m(i.parentNode,i));let p=s;s=h($),s===p?d[s].p($,u):(Y(),v(d[p],1,1,()=>{d[p]=null}),Z(),n=d[s],n?n.p($,u):(n=d[s]=m[s]($),n.c()),b(n,1),n.m(o.parentNode,o))},i($){c||(b(f),b(n),c=!0)},o($){v(f),v(n),c=!1},d($){$&&(_(e),_(l),_(i),_(o)),f&&f.d($),d[s].d($)}}}function xe(a){let e,r=k("workflows.archival-link-preface")+"",t,l,i=k("workflows.archival-link")+"",s,n,o,c,f;return c=new Ae({props:{content:`temporal operator namespace update --visibility-archival-state enabled ${a[4]}`,language:"text",inline:!0,copyIconTitle:k("common.copy-icon-title"),copySuccessIconTitle:k("common.copy-success-icon-title")}}),{c(){e=D("p"),t=L(r),l=D("a"),s=L(i),n=L(":"),o=F(),C(c.$$.fragment),this.h()},l(m){e=H(m,"P",{});var d=B(e);t=O(d,r),l=H(d,"A",{class:!0,href:!0,target:!0,rel:!0});var h=B(l);s=O(h,i),h.forEach(_),n=O(d,":"),d.forEach(_),o=N(m),I(c.$$.fragment,m),this.h()},h(){T(l,"class","text-blue-700 underline"),T(l,"href","https://docs.temporal.io/clusters#archival"),T(l,"target","_blank"),T(l,"rel","noreferrer")},m(m,d){w(m,e,d),E(e,t),E(e,l),E(l,s),E(e,n),w(m,o,d),P(c,m,d),f=!0},p(m,d){const h={};d&16&&(h.content=`temporal operator namespace update --visibility-archival-state enabled ${m[4]}`),c.$set(h)},i(m){f||(b(c.$$.fragment,m),f=!0)},o(m){v(c.$$.fragment,m),f=!1},d(m){m&&(_(e),_(o)),q(c,m)}}}function et(a){let e,r;return e=new Sl({}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function ql(a){let e,r;return e=new Nt({props:{title:k("workflows.workflow-empty-state-title"),content:k("workflows.archival-empty-state-description")}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p:V,i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Fl(a){let e,r;return e=new At({props:{items:a[3],"aria-label":k("workflows.archived-workflows"),pageSizeSelectLabel:k("common.per-page"),previousButtonLabel:k("common.previous"),nextButtonLabel:k("common.next"),$$slots:{default:[Al,({visibleItems:t})=>({7:t}),({visibleItems:t})=>t?128:0]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&8&&(i.items=t[3]),l&2192&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function tt(a){let e,r;return e=new Vt({props:{workflow:a[8],namespace:a[4]}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&128&&(i.workflow=t[8]),l&16&&(i.namespace=t[4]),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Nl(a){let e,r,t=ie(a[7]),l=[];for(let s=0;s<t.length;s+=1)l[s]=tt(Ze(a,t,s));const i=s=>v(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=Q()},l(s){for(let n=0;n<l.length;n+=1)l[n].l(s);e=Q()},m(s,n){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(s,n);w(s,e,n),r=!0},p(s,n){if(n&144){t=ie(s[7]);let o;for(o=0;o<t.length;o+=1){const c=Ze(s,t,o);l[o]?(l[o].p(c,n),b(l[o],1)):(l[o]=tt(c),l[o].c(),b(l[o],1),l[o].m(e.parentNode,e))}for(Y(),o=t.length;o<l.length;o+=1)i(o);Z()}},i(s){if(!r){for(let n=0;n<t.length;n+=1)b(l[n]);r=!0}},o(s){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)v(l[n]);r=!1},d(s){s&&_(e),nt(l,s)}}}function Al(a){let e,r;return e=new tl({props:{$$slots:{default:[Nl]},$$scope:{ctx:a}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){P(e,t,l),r=!0},p(t,l){const i={};l&2192&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){v(e.$$.fragment,t),r=!1},d(t){q(e,t)}}}function Wl(a){let e,r,t,l,i,s;e=new wt({props:{title:`${k("workflows.archival")} | ${a[4]}`,url:a[5].url.href}});const n=[Pl,Il,Cl],o=[];function c(f,m){return f[2]&&f[1]?0:f[2]?1:2}return t=c(a),l=o[t]=n[t](a),{c(){C(e.$$.fragment),r=F(),l.c(),i=Q()},l(f){I(e.$$.fragment,f),r=N(f),l.l(f),i=Q()},m(f,m){P(e,f,m),w(f,r,m),o[t].m(f,m),w(f,i,m),s=!0},p(f,[m]){const d={};m&16&&(d.title=`${k("workflows.archival")} | ${f[4]}`),m&32&&(d.url=f[5].url.href),e.$set(d);let h=t;t=c(f),t===h?o[t].p(f,m):(Y(),v(o[h],1,1,()=>{o[h]=null}),Z(),l=o[t],l?l.p(f,m):(l=o[t]=n[t](f),l.c()),b(l,1),l.m(i.parentNode,i))},i(f){s||(b(e.$$.fragment,f),b(l),s=!0)},o(f){v(e.$$.fragment,f),v(l),s=!1},d(f){f&&(_(r),_(i)),q(e,f),o[t].d(f)}}}function Dl(a,e,r){let t,l,i,s,n,o;oe(a,Ie,f=>r(5,o=f));let{data:c}=e;return a.$$set=f=>{"data"in f&&r(6,c=f.data)},a.$$.update=()=>{a.$$.dirty&64&&r(4,{namespace:{namespaceInfo:{name:t}},workflows:l,archivalEnabled:i,visibilityArchivalEnabled:s,archivalQueryingNotSupported:n}=c,t,(r(3,l),r(6,c)),(r(2,i),r(6,c)),(r(1,s),r(6,c)),(r(0,n),r(6,c)))},[n,s,i,l,t,o,c]}class fr extends ue{constructor(e){super(),ce(this,e,Dl,Wl,fe,{data:6})}}export{fr as component,ir as universal};