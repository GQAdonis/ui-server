import{S as B,b as F,a as O,m as E,p as S,q as L,k as _,f as d,z as U,g as k,h as j,j as $,L as C,C as w,D as v,E as T,F as y,ar as Q,e as D,as as H,w as h,x as b,M as g,y as z,n as A,c as I,d as q,u as N}from"../chunks/index.d29c66be.js";import{p as M}from"../chunks/stores.9851443b.js";import{w as J}from"../chunks/workflow-run.2461dc7d.js";import{b as W}from"../chunks/query-service.73ef1f5c.js";import{C as K}from"../chunks/code-block.fc92cd67.js";import{B as X}from"../chunks/button.e7112b29.js";import{E as G}from"../chunks/empty-state.bf113865.js";import{L as Y}from"../chunks/loading.9b5a6a67.js";import{L as Z}from"../chunks/link.d5f6f19e.js";import{a as x}from"../chunks/auth-user.ead5c000.js";import{P as ee}from"../chunks/page-title.ba38eecf.js";function te(c){let t,r;return t=new G({props:{title:"No Stack Traces Found",testId:"query-stack-trace-empty",$$slots:{default:[oe]},$$scope:{ctx:c}}}),{c(){w(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,o){T(t,e,o),r=!0},p(e,o){const n={};o&4105&&(n.$$scope={dirty:o,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function re(c){let t,r,e,o={ctx:c,current:null,token:null,hasCatch:!0,pending:ce,then:le,catch:ae,value:10,error:11,blocks:[,,,]};return Q(r=c[2],o),{c(){t=D(),o.block.c()},l(n){t=D(),o.block.l(n)},m(n,a){d(n,t,a),o.block.m(n,o.anchor=a),o.mount=()=>t.parentNode,o.anchor=t,e=!0},p(n,a){c=n,o.ctx=c,a&4&&r!==(r=c[2])&&Q(r,o)||H(o,c,a)},i(n){e||($(o.block),e=!0)},o(n){for(let a=0;a<3;a+=1){const l=o.blocks[a];k(l)}e=!1},d(n){n&&_(t),o.block.d(n),o.token=null,o=null}}}function V(c){var p;let t,r,e,o,n=((p=c[0])==null?void 0:p.taskQueue)+"",a,l,s;return e=new Z({props:{href:"https://docs.temporal.io/workflows#stack-trace-query",$$slots:{default:[ne]},$$scope:{ctx:c}}}),{c(){t=E("p"),r=h("To enable "),w(e.$$.fragment),o=h(", run a Worker on the "),a=h(n),l=h(" Task Queue.")},l(i){t=S(i,"P",{});var f=L(t);r=b(f,"To enable "),v(e.$$.fragment,f),o=b(f,", run a Worker on the "),a=b(f,n),l=b(f," Task Queue."),f.forEach(_)},m(i,f){d(i,t,f),g(t,r),T(e,t,null),g(t,o),g(t,a),g(t,l),s=!0},p(i,f){var u;const m={};f&4096&&(m.$$scope={dirty:f,ctx:i}),e.$set(m),(!s||f&1)&&n!==(n=((u=i[0])==null?void 0:u.taskQueue)+"")&&z(a,n)},i(i){s||($(e.$$.fragment,i),s=!0)},o(i){k(e.$$.fragment,i),s=!1},d(i){i&&_(t),y(e)}}}function ne(c){let t;return{c(){t=h("stack traces")},l(r){t=b(r,"stack traces")},m(r,e){d(r,t,e)},d(r){r&&_(t)}}}function oe(c){var o,n,a;let t,r,e=((o=c[0])==null?void 0:o.isRunning)&&((a=(n=c[3])==null?void 0:n.pollers)==null?void 0:a.length)===0&&V(c);return{c(){e&&e.c(),t=D()},l(l){e&&e.l(l),t=D()},m(l,s){e&&e.m(l,s),d(l,t,s),r=!0},p(l,s){var p,i,f;(p=l[0])!=null&&p.isRunning&&((f=(i=l[3])==null?void 0:i.pollers)==null?void 0:f.length)===0?e?(e.p(l,s),s&9&&$(e,1)):(e=V(l),e.c(),$(e,1),e.m(t.parentNode,t)):e&&(U(),k(e,1,1,()=>{e=null}),j())},i(l){r||($(e),r=!0)},o(l){k(e),r=!1},d(l){e&&e.d(l),l&&_(t)}}}function ae(c){let t,r;return t=new G({props:{title:"An Error Occured",content:"Please make sure you have at least one worker running."}}),{c(){w(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,o){T(t,e,o),r=!0},p:A,i(e){r||($(t.$$.fragment,e),r=!0)},o(e){k(t.$$.fragment,e),r=!1},d(e){y(t,e)}}}function le(c){let t,r,e,o,n,a=c[1].toLocaleTimeString()+"",l,s,p,i,f;return r=new X({props:{icon:"retry",loading:ue,$$slots:{default:[se]},$$scope:{ctx:c}}}),r.$on("click",c[4]),i=new K({props:{content:c[10],language:"text",testId:"query-stack-trace"}}),{c(){t=E("div"),w(r.$$.fragment),e=I(),o=E("p"),n=h("Stack Trace at "),l=h(a),s=I(),p=E("div"),w(i.$$.fragment),this.h()},l(m){t=S(m,"DIV",{class:!0});var u=L(t);v(r.$$.fragment,u),e=q(u),o=S(u,"P",{});var R=L(o);n=b(R,"Stack Trace at "),l=b(R,a),R.forEach(_),u.forEach(_),s=q(m),p=S(m,"DIV",{class:!0});var P=L(p);v(i.$$.fragment,P),P.forEach(_),this.h()},h(){N(t,"class","flex items-center gap-4"),N(p,"class","flex items-start h-full")},m(m,u){d(m,t,u),T(r,t,null),g(t,e),g(t,o),g(o,n),g(o,l),d(m,s,u),d(m,p,u),T(i,p,null),f=!0},p(m,u){const R={};u&4096&&(R.$$scope={dirty:u,ctx:m}),r.$set(R),(!f||u&2)&&a!==(a=m[1].toLocaleTimeString()+"")&&z(l,a);const P={};u&4&&(P.content=m[10]),i.$set(P)},i(m){f||($(r.$$.fragment,m),$(i.$$.fragment,m),f=!0)},o(m){k(r.$$.fragment,m),k(i.$$.fragment,m),f=!1},d(m){m&&_(t),y(r),m&&_(s),m&&_(p),y(i)}}}function se(c){let t;return{c(){t=h("Refresh")},l(r){t=b(r,"Refresh")},m(r,e){d(r,t,e)},d(r){r&&_(t)}}}function ce(c){let t,r,e,o,n,a;return r=new Y({}),{c(){t=E("div"),w(r.$$.fragment),e=I(),o=E("p"),n=h("(This will fail if you have no workers running.)"),this.h()},l(l){t=S(l,"DIV",{class:!0});var s=L(t);v(r.$$.fragment,s),e=q(s),o=S(s,"P",{});var p=L(o);n=b(p,"(This will fail if you have no workers running.)"),p.forEach(_),s.forEach(_),this.h()},h(){N(t,"class","text-center")},m(l,s){d(l,t,s),T(r,t,null),g(t,e),g(t,o),g(o,n),a=!0},p:A,i(l){a||($(r.$$.fragment,l),a=!0)},o(l){k(r.$$.fragment,l),a=!1},d(l){l&&_(t),y(r)}}}function ie(c){let t,r,e,o;const n=[re,te],a=[];function l(s,p){var i,f,m;return(i=s[0])!=null&&i.isRunning&&((m=(f=s[3])==null?void 0:f.pollers)==null?void 0:m.length)>0?0:1}return r=l(c),e=a[r]=n[r](c),{c(){t=E("section"),e.c()},l(s){t=S(s,"SECTION",{});var p=L(t);e.l(p),p.forEach(_)},m(s,p){d(s,t,p),a[r].m(t,null),o=!0},p(s,[p]){let i=r;r=l(s),r===i?a[r].p(s,p):(U(),k(a[i],1,1,()=>{a[i]=null}),j(),e=a[r],e?e.p(s,p):(e=a[r]=n[r](s),e.c()),$(e,1),e.m(t,null))},i(s){o||($(e),o=!0)},o(s){k(e),o=!1},d(s){s&&_(t),a[r].d()}}}let ue=!1;function fe(c,t,r){let e,o,n,a,l;C(c,x,u=>r(6,n=u)),C(c,M,u=>r(7,a=u)),C(c,J,u=>r(5,l=u));const{namespace:s}=a.params;let p=new Date;const i=()=>{var u;return W({workflow:e,namespace:s},(u=a.data)===null||u===void 0?void 0:u.settings,n==null?void 0:n.accessToken)};let f;const m=()=>{var u;r(2,f=W({workflow:e,namespace:s},(u=a.data)===null||u===void 0?void 0:u.settings,n==null?void 0:n.accessToken)),f.then(()=>{r(1,p=new Date)})};return c.$$.update=()=>{c.$$.dirty&32&&r(0,{workflow:e,workers:o}=l,e,(r(3,o),r(5,l))),c.$$.dirty&1&&e!=null&&e.isRunning&&r(2,f=i())},[e,p,f,o,m,l]}class me extends B{constructor(t){super(),F(this,t,fe,ie,O,{})}}function pe(c){let t,r,e,o;return t=new ee({props:{title:`Stack Trace | ${c[1]}`,url:c[0].url.href}}),e=new me({}),{c(){w(t.$$.fragment),r=I(),w(e.$$.fragment)},l(n){v(t.$$.fragment,n),r=q(n),v(e.$$.fragment,n)},m(n,a){T(t,n,a),d(n,r,a),T(e,n,a),o=!0},p(n,[a]){const l={};a&1&&(l.url=n[0].url.href),t.$set(l)},i(n){o||($(t.$$.fragment,n),$(e.$$.fragment,n),o=!0)},o(n){k(t.$$.fragment,n),k(e.$$.fragment,n),o=!1},d(n){y(t,n),n&&_(r),y(e,n)}}}function _e(c,t,r){let e;C(c,M,n=>r(0,e=n));const o=e.params.workflow;return[e,o]}class Se extends B{constructor(t){super(),F(this,t,_e,pe,O,{})}}export{Se as default};