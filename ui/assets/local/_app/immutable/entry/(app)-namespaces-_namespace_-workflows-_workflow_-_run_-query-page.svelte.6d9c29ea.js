import{S as M,b as X,a as x,ar as R,m as I,p as C,q as D,k as p,f as v,as as ee,j as g,g as d,K as W,C as y,D as E,E as q,n as m,F as j,A as re,Y as ne,c as N,w as K,d as Q,x as O,u as V,L as w,Z as le,e as G,z as oe,h as ae,a7 as se}from"../chunks/index.c37b9eda.js";import{p as te}from"../chunks/stores.f7a42554.js";import{t as B}from"../chunks/translate.d12f5886.js";import{g as ce,a as ue}from"../chunks/query-service.75cd5c17.js";import{C as fe}from"../chunks/code-block.d5f7a3cf.js";import{S as ie,a as me}from"../chunks/simple-select.222a84ab.js";import{E as pe}from"../chunks/empty-state.e8ffad73.js";import{B as $e}from"../chunks/button.7527b640.js";import{L as _e}from"../chunks/loading.aacbfbae.js";import{a as ge}from"../chunks/auth-user.c03c1d2b.js";import{T as he}from"../chunks/toggle-switch.dec6eab8.js";import{P as de}from"../chunks/page-title.f0713954.js";function H(l,t,n){const e=l.slice();return e[16]=t[n],e}function ke(l){var e;let t,n;return t=new pe({props:{title:B("error-occurred"),content:B("workflows","no-workers-running-message"),error:(e=l[19])==null?void 0:e.message}}),{c(){y(t.$$.fragment)},l(r){E(t.$$.fragment,r)},m(r,o){q(t,r,o),n=!0},p:m,i(r){n||(g(t.$$.fragment,r),n=!0)},o(r){d(t.$$.fragment,r),n=!1},d(r){j(t,r)}}}function be(l){let t,n,e,r,o,a,c,s,u,L=B("workflows","json-formatting")+"",P,S,h,A,k,F,$;function U(f){l[5](f)}let Y={id:"query-select",label:B("workflows","query-type"),testId:"query-select",$$slots:{default:[ve]},$$scope:{ctx:l}};l[0]!==void 0&&(Y.value=l[0]),e=new ie({props:Y}),re.push(()=>ne(e,"value",U)),a=new $e({props:{icon:"retry",loading:De,$$slots:{default:[ye]},$$scope:{ctx:l}}}),a.$on("click",l[6]),h=new he({props:{id:"json-formatting",checked:l[2]}}),h.$on("change",l[7]);let _={ctx:l,current:null,token:null,hasCatch:!1,pending:je,then:qe,catch:Ee,value:15,blocks:[,,,]};return R(F=l[1],_),{c(){t=I("div"),n=I("div"),y(e.$$.fragment),o=N(),y(a.$$.fragment),c=N(),s=I("div"),u=I("label"),P=K(L),S=N(),y(h.$$.fragment),A=N(),k=I("div"),_.block.c(),this.h()},l(f){t=C(f,"DIV",{class:!0});var i=D(t);n=C(i,"DIV",{class:!0});var b=D(n);E(e.$$.fragment,b),o=Q(b),E(a.$$.fragment,b),b.forEach(p),c=Q(i),s=C(i,"DIV",{class:!0});var z=D(s);u=C(z,"LABEL",{for:!0,class:!0});var T=D(u);P=O(T,L),S=Q(T),E(h.$$.fragment,T),T.forEach(p),z.forEach(p),i.forEach(p),A=Q(f),k=C(f,"DIV",{class:!0});var Z=D(k);_.block.l(Z),Z.forEach(p),this.h()},h(){V(n,"class","flex items-center gap-4"),V(u,"for","json-formatting"),V(u,"class","flex items-center gap-4 font-secondary text-sm"),V(s,"class","flex justify-end"),V(t,"class","flex justify-between"),V(k,"class","flex items-start h-full")},m(f,i){v(f,t,i),w(t,n),q(e,n,null),w(n,o),q(a,n,null),w(t,c),w(t,s),w(s,u),w(u,P),w(u,S),q(h,u,null),v(f,A,i),v(f,k,i),_.block.m(k,_.anchor=null),_.mount=()=>k,_.anchor=null,$=!0},p(f,i){l=f;const b={};i&1048576&&(b.$$scope={dirty:i,ctx:l}),!r&&i&1&&(r=!0,b.value=l[0],le(()=>r=!1)),e.$set(b);const z={};i&1048576&&(z.$$scope={dirty:i,ctx:l}),a.$set(z);const T={};i&4&&(T.checked=l[2]),h.$set(T),_.ctx=l,i&2&&F!==(F=l[1])&&R(F,_)||ee(_,l,i)},i(f){$||(g(e.$$.fragment,f),g(a.$$.fragment,f),g(h.$$.fragment,f),g(_.block),$=!0)},o(f){d(e.$$.fragment,f),d(a.$$.fragment,f),d(h.$$.fragment,f);for(let i=0;i<3;i+=1){const b=_.blocks[i];d(b)}$=!1},d(f){f&&p(t),j(e),j(a),j(h),f&&p(A),f&&p(k),_.block.d(),_.token=null,_=null}}}function we(l){let t=l[16]+"",n;return{c(){n=K(t)},l(e){n=O(e,t)},m(e,r){v(e,n,r)},p:m,d(e){e&&p(n)}}}function J(l){let t,n;return t=new me({props:{value:l[16],$$slots:{default:[we]},$$scope:{ctx:l}}}),{c(){y(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,r){q(t,e,r),n=!0},p(e,r){const o={};r&1048576&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){j(t,e)}}}function ve(l){let t,n,e=l[14],r=[];for(let a=0;a<e.length;a+=1)r[a]=J(H(l,e,a));const o=a=>d(r[a],1,1,()=>{r[a]=null});return{c(){for(let a=0;a<r.length;a+=1)r[a].c();t=G()},l(a){for(let c=0;c<r.length;c+=1)r[c].l(a);t=G()},m(a,c){for(let s=0;s<r.length;s+=1)r[s].m(a,c);v(a,t,c),n=!0},p(a,c){if(c&8){e=a[14];let s;for(s=0;s<e.length;s+=1){const u=H(a,e,s);r[s]?(r[s].p(u,c),g(r[s],1)):(r[s]=J(u),r[s].c(),g(r[s],1),r[s].m(t.parentNode,t))}for(oe(),s=e.length;s<r.length;s+=1)o(s);ae()}},i(a){if(!n){for(let c=0;c<e.length;c+=1)g(r[c]);n=!0}},o(a){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)d(r[c]);n=!1},d(a){se(r,a),a&&p(t)}}}function ye(l){let t=B("refresh")+"",n;return{c(){n=K(t)},l(e){n=O(e,t)},m(e,r){v(e,n,r)},p:m,d(e){e&&p(n)}}}function Ee(l){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function qe(l){let t,n;return t=new fe({props:{content:l[15],language:l[2]?"json":"text"}}),{c(){y(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,r){q(t,e,r),n=!0},p(e,r){const o={};r&2&&(o.content=e[15]),r&4&&(o.language=e[2]?"json":"text"),t.$set(o)},i(e){n||(g(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){j(t,e)}}}function je(l){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function Ie(l){let t,n,e,r,o=B("workflows","no-workers-failure-message")+"",a,c;return n=new _e({}),{c(){t=I("div"),y(n.$$.fragment),e=N(),r=I("p"),a=K(o),this.h()},l(s){t=C(s,"DIV",{class:!0});var u=D(t);E(n.$$.fragment,u),e=Q(u),r=C(u,"P",{});var L=D(r);a=O(L,o),L.forEach(p),u.forEach(p),this.h()},h(){V(t,"class","text-center")},m(s,u){v(s,t,u),q(n,t,null),w(t,e),w(t,r),w(r,a),c=!0},p:m,i(s){c||(g(n.$$.fragment,s),c=!0)},o(s){d(n.$$.fragment,s),c=!1},d(s){s&&p(t),j(n)}}}function Ce(l){let t,n,e={ctx:l,current:null,token:null,hasCatch:!0,pending:Ie,then:be,catch:ke,value:14,error:19,blocks:[,,,]};return R(l[3],e),{c(){t=I("section"),e.block.c()},l(r){t=C(r,"SECTION",{});var o=D(t);e.block.l(o),o.forEach(p)},m(r,o){v(r,t,o),e.block.m(t,e.anchor=null),e.mount=()=>t,e.anchor=null,n=!0},p(r,[o]){l=r,ee(e,l,o)},i(r){n||(g(e.block),n=!0)},o(r){for(let o=0;o<3;o+=1){const a=e.blocks[o];d(a)}n=!1},d(r){r&&p(t),e.block.d(),e.token=null,e=null}}}let De=!1;function Le(l,t,n){let e,r;W(l,ge,$=>n(8,e=$)),W(l,te,$=>n(9,r=$));const{namespace:o,workflow:a,run:c}=r.params,s={id:a,runId:c};let u,L=ce({namespace:o,workflow:s}).then($=>(n(0,u=u||$[0]),$)),P;const S=$=>{var U;n(1,P=ue({namespace:o,workflow:s,queryType:$},(U=r.data)===null||U===void 0?void 0:U.settings,e==null?void 0:e.accessToken))};let h=!0;function A($){u=$,n(0,u)}const k=()=>S(u),F=()=>n(2,h=!h);return l.$$.update=()=>{l.$$.dirty&1&&u&&S(u)},[u,P,h,L,S,A,k,F]}class Se extends M{constructor(t){super(),X(this,t,Le,Ce,x,{})}}function Te(l){let t,n,e,r;return t=new de({props:{title:`${B("workflows","queries-tab")} | ${l[1]}`,url:l[0].url.href}}),e=new Se({}),{c(){y(t.$$.fragment),n=N(),y(e.$$.fragment)},l(o){E(t.$$.fragment,o),n=Q(o),E(e.$$.fragment,o)},m(o,a){q(t,o,a),v(o,n,a),q(e,o,a),r=!0},p(o,[a]){const c={};a&1&&(c.url=o[0].url.href),t.$set(c)},i(o){r||(g(t.$$.fragment,o),g(e.$$.fragment,o),r=!0)},o(o){d(t.$$.fragment,o),d(e.$$.fragment,o),r=!1},d(o){j(t,o),o&&p(n),j(e,o)}}}function Ve(l,t,n){let e;W(l,te,o=>n(0,e=o));const r=e.params.workflow;return[e,r]}class Ye extends M{constructor(t){super(),X(this,t,Ve,Te,x,{})}}export{Ye as default};