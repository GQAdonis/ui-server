import{C as ge,S as H,i as K,s as W,D as Me,E as Oe,e as $,j as T,c as g,a as E,m as j,d as u,b as m,f as D,o as S,F as qe,x as v,u as k,v as C,G as U,l as R,r as ee,w as te,H as Pe,t as F,g as z,h as re,I as ne,k as O,n as q,J as p,K as se,L as le,M as ae,N as Z,O as ce,P as ie,Q,R as ve,T as fe,U as oe,V as Re,W as Ue,X as Fe,Y as ze,Z as Ge,_ as He,$ as Ke,a0 as We,a1 as Qe,a2 as Je,a3 as Xe,a4 as be,a5 as ke,a6 as Ye,a7 as Ze,y as xe}from"../chunks/vendor-07bbbbe5.js";import{s as et,l as tt}from"../chunks/settings-127165a1.js";import{r as ue,a as me,n as _e}from"../chunks/route-for-api-46d29c40.js";import{n as we}from"../chunks/namespace-f1eae88a.js";import{S as rt,O as nt}from"../chunks/select-d9240e98.js";import{g as st}from"../chunks/navigation-51f4a605.js";import{g as lt}from"../chunks/get-context-637b8da5.js";import{d as at,l as ot,p as ct}from"../chunks/data-converter-config-ec74ef2e.js";import{p as it}from"../chunks/stores-053bb508.js";import{n as ye}from"../chunks/notifications-ff4076d0.js";import{E as ft}from"../chunks/error-e9f4881c.js";import"../chunks/is-network-error-ac7c8caf.js";import"../chunks/singletons-12a22614.js";const ut=async(a=fetch)=>await ue(me("cluster"),{request:a}),Ee=ge({}),mt=async()=>{const a=await ut();Ee.set(a)},_t=async(a=fetch)=>{const e=await ue(me("user"),{request:a});return{name:e==null?void 0:e.Name,email:e==null?void 0:e.Email,picture:e==null?void 0:e.Picture}},Ie=ge(null),dt=async()=>{const a=await _t();Ie.set(a)};function Ne(a,e,t){const r=a.slice();return r[5]=e[t],r}function pt(a){let e=a[5]+"",t;return{c(){t=F(e)},l(r){t=z(r,e)},m(r,n){D(r,t,n)},p(r,n){n&2&&e!==(e=r[5]+"")&&re(t,e)},d(r){r&&u(t)}}}function Ae(a){let e,t;return e=new nt({props:{value:a[5],$$slots:{default:[pt]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(r){j(e.$$.fragment,r)},m(r,n){S(e,r,n),t=!0},p(r,n){const s={};n&2&&(s.value=r[5]),n&258&&(s.$$scope={dirty:n,ctx:r}),e.$set(s)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function ht(a){let e,t,r=a[1],n=[];for(let l=0;l<r.length;l+=1)n[l]=Ae(Ne(a,r,l));const s=l=>k(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();e=R()},l(l){for(let c=0;c<n.length;c+=1)n[c].l(l);e=R()},m(l,c){for(let o=0;o<n.length;o+=1)n[o].m(l,c);D(l,e,c),t=!0},p(l,c){if(c&2){r=l[1];let o;for(o=0;o<r.length;o+=1){const i=Ne(l,r,o);n[o]?(n[o].p(i,c),v(n[o],1)):(n[o]=Ae(i),n[o].c(),v(n[o],1),n[o].m(e.parentNode,e))}for(ee(),o=r.length;o<n.length;o+=1)s(o);te()}},i(l){if(!t){for(let c=0;c<r.length;c+=1)v(n[c]);t=!0}},o(l){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)k(n[c]);t=!1},d(l){Pe(n,l),l&&u(e)}}}function $t(a){let e,t,r,n;function s(c){a[3](c)}let l={dark:!0,$$slots:{default:[ht]},$$scope:{ctx:a}};return a[0]!==void 0&&(l.value=a[0]),t=new rt({props:l}),Me.push(()=>Oe(t,"value",s)),t.$on("change",a[2]),{c(){e=$("div"),T(t.$$.fragment),this.h()},l(c){e=g(c,"DIV",{class:!0});var o=E(e);j(t.$$.fragment,o),o.forEach(u),this.h()},h(){m(e,"class","w-full")},m(c,o){D(c,e,o),S(t,e,null),n=!0},p(c,[o]){const i={};o&258&&(i.$$scope={dirty:o,ctx:c}),!r&&o&1&&(r=!0,i.value=c[0],qe(()=>r=!1)),t.$set(i)},i(c){n||(v(t.$$.fragment,c),n=!0)},o(c){k(t.$$.fragment,c),n=!1},d(c){c&&u(e),C(t)}}}function gt(a,e,t){let r,n;U(a,we,o=>t(4,n=o));let s=n;function l(){st("/namespaces/"+s)}function c(o){s=o,t(0,s)}return t(1,r=lt("namespaces").map(o=>o.namespaceInfo.name)),[s,r,l,c]}class vt extends H{constructor(e){super();K(this,e,gt,$t,W,{})}}function bt(a){let e,t,r,n,s,l,c;const o=a[2].default,i=ne(o,a,a[1],null);return{c(){e=$("div"),i&&i.c(),t=O(),r=$("div"),n=$("div"),s=$("span"),l=F(a[0]),this.h()},l(f){e=g(f,"DIV",{class:!0});var d=E(e);i&&i.l(d),t=q(d),r=g(d,"DIV",{class:!0});var _=E(r);n=g(_,"DIV",{class:!0});var w=E(n);s=g(w,"SPAN",{class:!0});var h=E(s);l=z(h,a[0]),h.forEach(u),w.forEach(u),_.forEach(u),d.forEach(u),this.h()},h(){m(s,"class","text-gray-100"),m(n,"class","bg-gray-800 inline-block px-2 py-2 rounded-lg"),m(r,"class","tooltip svelte-za0ex9"),m(e,"class","wrapper relative inline-block svelte-za0ex9")},m(f,d){D(f,e,d),i&&i.m(e,null),p(e,t),p(e,r),p(r,n),p(n,s),p(s,l),c=!0},p(f,[d]){i&&i.p&&(!c||d&2)&&se(i,o,f,f[1],c?ae(o,f[1],d,null):le(f[1]),null),(!c||d&1)&&re(l,f[0])},i(f){c||(v(i,f),c=!0)},o(f){k(i,f),c=!1},d(f){f&&u(e),i&&i.d(f)}}}function kt(a,e,t){let{$$slots:r={},$$scope:n}=e,{text:s=""}=e;return a.$$set=l=>{"text"in l&&t(0,s=l.text),"$$scope"in l&&t(1,n=l.$$scope)},[s,n,r]}class de extends H{constructor(e){super();K(this,e,kt,bt,W,{text:0})}}function De(a){let e,t,r,n;const s=[Et,yt,wt],l=[];function c(o,i){return o[1]==="notRequested"?0:o[1]==="error"?1:o[1]==="success"?2:-1}return~(e=c(a))&&(t=l[e]=s[e](a)),{c(){t&&t.c(),r=R()},l(o){t&&t.l(o),r=R()},m(o,i){~e&&l[e].m(o,i),D(o,r,i),n=!0},p(o,i){let f=e;e=c(o),e===f?~e&&l[e].p(o,i):(t&&(ee(),k(l[f],1,1,()=>{l[f]=null}),te()),~e?(t=l[e],t?t.p(o,i):(t=l[e]=s[e](o),t.c()),v(t,1),t.m(r.parentNode,r)):t=null)},i(o){n||(v(t),n=!0)},o(o){k(t),n=!1},d(o){~e&&l[e].d(o),o&&u(r)}}}function wt(a){let e,t;return e=new de({props:{text:"Data converter succesfully converted content",$$slots:{default:[It]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(r){j(e.$$.fragment,r)},m(r,n){S(e,r,n),t=!0},p(r,n){const s={};n&4&&(s.$$scope={dirty:n,ctx:r}),e.$set(s)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function yt(a){let e,t;return e=new de({props:{text:"Data converter couldn't connect to the remote converter",$$slots:{default:[Nt]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(r){j(e.$$.fragment,r)},m(r,n){S(e,r,n),t=!0},p(r,n){const s={};n&4&&(s.$$scope={dirty:n,ctx:r}),e.$set(s)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function Et(a){let e,t;return e=new de({props:{text:"Data converter is configured",$$slots:{default:[At]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(r){j(e.$$.fragment,r)},m(r,n){S(e,r,n),t=!0},p(r,n){const s={};n&4&&(s.$$scope={dirty:n,ctx:r}),e.$set(s)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function It(a){let e,t,r,n,s;return t=new Z({props:{icon:ce,scale:1,class:"text-blue-200 block w-full h-full"}}),n=new Z({props:{icon:ie,scale:1,class:"text-blue-200 block w-full h-full"}}),{c(){e=$("div"),T(t.$$.fragment),r=O(),T(n.$$.fragment),this.h()},l(l){e=g(l,"DIV",{class:!0});var c=E(e);j(t.$$.fragment,c),r=q(c),j(n.$$.fragment,c),c.forEach(u),this.h()},h(){m(e,"class","flex")},m(l,c){D(l,e,c),S(t,e,null),p(e,r),S(n,e,null),s=!0},p:Q,i(l){s||(v(t.$$.fragment,l),v(n.$$.fragment,l),s=!0)},o(l){k(t.$$.fragment,l),k(n.$$.fragment,l),s=!1},d(l){l&&u(e),C(t),C(n)}}}function Nt(a){let e,t,r,n,s;return t=new Z({props:{icon:ce,scale:1,class:"text-red-400 block w-full h-full"}}),n=new Z({props:{icon:ie,scale:1,class:"text-red-400 block w-full h-full"}}),{c(){e=$("div"),T(t.$$.fragment),r=O(),T(n.$$.fragment),this.h()},l(l){e=g(l,"DIV",{class:!0});var c=E(e);j(t.$$.fragment,c),r=q(c),j(n.$$.fragment,c),c.forEach(u),this.h()},h(){m(e,"class","flex")},m(l,c){D(l,e,c),S(t,e,null),p(e,r),S(n,e,null),s=!0},p:Q,i(l){s||(v(t.$$.fragment,l),v(n.$$.fragment,l),s=!0)},o(l){k(t.$$.fragment,l),k(n.$$.fragment,l),s=!1},d(l){l&&u(e),C(t),C(n)}}}function At(a){let e,t,r,n,s;return t=new Z({props:{icon:ce,scale:1,class:"text-blue-200 block w-full h-full"}}),n=new Z({props:{icon:ie,scale:1,class:"text-blue-200 block w-full h-full"}}),{c(){e=$("div"),T(t.$$.fragment),r=O(),T(n.$$.fragment),this.h()},l(l){e=g(l,"DIV",{class:!0});var c=E(e);j(t.$$.fragment,c),r=q(c),j(n.$$.fragment,c),c.forEach(u),this.h()},h(){m(e,"class","flex")},m(l,c){D(l,e,c),S(t,e,null),p(e,r),S(n,e,null),s=!0},p:Q,i(l){s||(v(t.$$.fragment,l),v(n.$$.fragment,l),s=!0)},o(l){k(t.$$.fragment,l),k(n.$$.fragment,l),s=!1},d(l){l&&u(e),C(t),C(n)}}}function Dt(a){let e,t,r=a[0]&&De(a);return{c(){r&&r.c(),e=R()},l(n){r&&r.l(n),e=R()},m(n,s){r&&r.m(n,s),D(n,e,s),t=!0},p(n,[s]){n[0]?r?(r.p(n,s),s&1&&v(r,1)):(r=De(n),r.c(),v(r,1),r.m(e.parentNode,e)):r&&(ee(),k(r,1,1,()=>{r=null}),te())},i(n){t||(v(r),t=!0)},o(n){k(r),t=!1},d(n){r&&r.d(n),n&&u(e)}}}function Tt(a,e,t){let r,n;return U(a,at,s=>t(0,r=s)),U(a,ot,s=>t(1,n=s)),[r,n]}class jt extends H{constructor(e){super();K(this,e,Tt,Dt,W,{})}}const Te=a=>{const e=a==null?void 0:a.indexOf("?");return e>-1?a.slice(0,e):a},St=(a,e,t=!1)=>{const r=Te(a).split("/"),n=Te(e).split("/");if(t&&r.length!==n.length)return!1;for(let s=0;s<r.length;s++){const l=r[s],c=n[s];if(l!==c)return!1}return!0};function Ct(a){let e,t;const r=a[4].default,n=ne(r,a,a[3],null);return{c(){e=$("a"),n&&n.c(),this.h()},l(s){e=g(s,"A",{href:!0,class:!0});var l=E(e);n&&n.l(l),l.forEach(u),this.h()},h(){m(e,"href",a[0]),m(e,"class","relative svelte-1hldide"),ve(e,"active",a[1])},m(s,l){D(s,e,l),n&&n.m(e,null),t=!0},p(s,[l]){n&&n.p&&(!t||l&8)&&se(n,r,s,s[3],t?ae(r,s[3],l,null):le(s[3]),null),(!t||l&1)&&m(e,"href",s[0]),l&2&&ve(e,"active",s[1])},i(s){t||(v(n,s),t=!0)},o(s){k(n,s),t=!1},d(s){s&&u(e),n&&n.d(s)}}}function Lt(a,e,t){let r,n;U(a,it,o=>t(2,n=o));let{$$slots:s={},$$scope:l}=e,{href:c}=e;return a.$$set=o=>{"href"in o&&t(0,c=o.href),"$$scope"in o&&t(3,l=o.$$scope)},a.$$.update=()=>{a.$$.dirty&5&&t(1,r=St(c,n.path))},[c,r,n,l,s]}class je extends H{constructor(e){super();K(this,e,Lt,Ct,W,{href:0})}}function Bt(a){let e;return{c(){e=F("Workflows")},l(t){e=z(t,"Workflows")},m(t,r){D(t,e,r)},d(t){t&&u(e)}}}function Vt(a){let e;return{c(){e=F("Archival")},l(t){e=z(t,"Archival")},m(t,r){D(t,e,r)},d(t){t&&u(e)}}}function Se(a){let e;function t(s,l){var c;return((c=s[2])==null?void 0:c.email)?Ot:Mt}let r=t(a),n=r(a);return{c(){n.c(),e=R()},l(s){n.l(s),e=R()},m(s,l){n.m(s,l),D(s,e,l)},p(s,l){r===(r=t(s))&&n?n.p(s,l):(n.d(1),n=r(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){n.d(s),s&&u(e)}}}function Mt(a){let e,t,r,n;return{c(){e=$("button"),t=F("Login"),this.h()},l(s){e=g(s,"BUTTON",{class:!0});var l=E(e);t=z(l,"Login"),l.forEach(u),this.h()},h(){m(e,"class","header-button svelte-1wxl72y")},m(s,l){D(s,e,l),p(e,t),r||(n=oe(e,"click",a[4]),r=!0)},p:Q,d(s){s&&u(e),r=!1,n()}}}function Ot(a){let e,t,r,n,s,l;return{c(){e=$("button"),t=F(`Logout
          `),r=$("img"),this.h()},l(c){e=g(c,"BUTTON",{class:!0});var o=E(e);t=z(o,`Logout
          `),r=g(o,"IMG",{src:!0,alt:!0,class:!0}),o.forEach(u),this.h()},h(){fe(r.src,n=a[2].picture)||m(r,"src",n),m(r,"alt","User Avatar"),m(r,"class","rounded-full h-6 w-6 ml-2.5"),m(e,"class","header-button min-w-min svelte-1wxl72y")},m(c,o){D(c,e,o),p(e,t),p(e,r),s||(l=oe(e,"click",a[3]),s=!0)},p(c,o){o&4&&!fe(r.src,n=c[2].picture)&&m(r,"src",n)},d(c){c&&u(e),s=!1,l()}}}function qt(a){var x,pe;let e,t,r,n,s,l,c,o,i,f,d,_,w,h,b,y,I,P,N,B,V;c=new vt({}),f=new je({props:{href:`/namespaces/${a[0]}/workflows`,$$slots:{default:[Bt]},$$scope:{ctx:a}}}),_=new je({props:{href:`/namespaces/${a[0]}/archival`,$$slots:{default:[Vt]},$$scope:{ctx:a}}}),y=new jt({});let L=((pe=(x=a[1])==null?void 0:x.auth)==null?void 0:pe.enabled)&&Se(a);return{c(){e=$("header"),t=$("div"),r=$("a"),n=$("img"),l=O(),T(c.$$.fragment),o=O(),i=$("div"),T(f.$$.fragment),d=O(),T(_.$$.fragment),w=O(),h=$("div"),b=$("div"),T(y.$$.fragment),I=O(),P=$("a"),N=F("Report Bug/Give Feedback"),B=O(),L&&L.c(),this.h()},l(A){e=g(A,"HEADER",{class:!0});var M=E(e);t=g(M,"DIV",{class:!0});var J=E(t);r=g(J,"A",{href:!0,class:!0});var Y=E(r);n=g(Y,"IMG",{src:!0,alt:!0,class:!0}),Y.forEach(u),l=q(J),j(c.$$.fragment,J),J.forEach(u),o=q(M),i=g(M,"DIV",{class:!0});var X=E(i);j(f.$$.fragment,X),d=q(X),j(_.$$.fragment,X),X.forEach(u),w=q(M),h=g(M,"DIV",{class:!0});var G=E(h);b=g(G,"DIV",{class:!0});var he=E(b);j(y.$$.fragment,he),he.forEach(u),I=q(G),P=g(G,"A",{class:!0,href:!0});var $e=E(P);N=z($e,"Report Bug/Give Feedback"),$e.forEach(u),B=q(G),L&&L.l(G),G.forEach(u),M.forEach(u),this.h()},h(){fe(n.src,s="/logo.svg")||m(n,"src",s),m(n,"alt","Temporal Logo"),m(n,"class","max-h-10"),m(r,"href","/"),m(r,"class","block"),m(t,"class","flex gap-4 col-span-3"),m(i,"class","flex gap-4 col-span-4"),m(b,"class","text-right"),m(P,"class","header-button svelte-1wxl72y"),m(P,"href","https://github.com/temporalio/ui/issues/new/choose"),m(h,"class","flex justify-end gap-4 col-span-5 col-end-13 items-center"),m(e,"class","grid grid-rows-1 grid-cols-12 px-10 items-center bg-gray-900 shadow-lg gap-6")},m(A,M){D(A,e,M),p(e,t),p(t,r),p(r,n),p(t,l),S(c,t,null),p(e,o),p(e,i),S(f,i,null),p(i,d),S(_,i,null),p(e,w),p(e,h),p(h,b),S(y,b,null),p(h,I),p(h,P),p(P,N),p(h,B),L&&L.m(h,null),V=!0},p(A,[M]){var X,G;const J={};M&1&&(J.href=`/namespaces/${A[0]}/workflows`),M&32&&(J.$$scope={dirty:M,ctx:A}),f.$set(J);const Y={};M&1&&(Y.href=`/namespaces/${A[0]}/archival`),M&32&&(Y.$$scope={dirty:M,ctx:A}),_.$set(Y),((G=(X=A[1])==null?void 0:X.auth)==null?void 0:G.enabled)?L?L.p(A,M):(L=Se(A),L.c(),L.m(h,null)):L&&(L.d(1),L=null)},i(A){V||(v(c.$$.fragment,A),v(f.$$.fragment,A),v(_.$$.fragment,A),v(y.$$.fragment,A),V=!0)},o(A){k(c.$$.fragment,A),k(f.$$.fragment,A),k(_.$$.fragment,A),k(y.$$.fragment,A),V=!1},d(A){A&&u(e),C(c),C(f),C(_),C(y),L&&L.d()}}}function Pt(a,e,t){let r,n,s;return U(a,we,o=>t(0,r=o)),U(a,et,o=>t(1,n=o)),U(a,Ie,o=>t(2,s=o)),[r,n,s,()=>window.location.assign("/auth/logout"),()=>window.location.assign("/auth/sso")]}class Rt extends H{constructor(e){super();K(this,e,Pt,qt,W,{})}}function Ce(a,e,t){const r=a.slice();return r[4]=e[t],r}function Le(a,e){let t,r,n=e[4].message+"",s,l,c,o,i,f,d=Q,_,w,h;function b(){return e[3](e[4])}return{key:a,first:null,c(){t=$("article"),r=$("p"),s=F(n),l=O(),this.h()},l(y){t=g(y,"ARTICLE",{class:!0});var I=E(t);r=g(I,"P",{});var P=E(r);s=z(P,n),P.forEach(u),l=q(I),I.forEach(u),this.h()},h(){m(t,"class",c="px-8 py-6 mb-4 opacity-90 shadow-lg "+e[4].type+" svelte-2zx94o"),this.first=t},m(y,I){D(y,t,I),p(t,r),p(r,s),p(t,l),_=!0,w||(h=oe(t,"click",b),w=!0)},p(y,I){e=y,(!_||I&1)&&n!==(n=e[4].message+"")&&re(s,n),(!_||I&1&&c!==(c="px-8 py-6 mb-4 opacity-90 shadow-lg "+e[4].type+" svelte-2zx94o"))&&m(t,"class",c)},r(){f=t.getBoundingClientRect()},f(){Re(t),d(),Ue(t,f)},a(){d(),d=Fe(t,f,Qe,{})},i(y){_||(ze(()=>{i&&i.end(1),o=Ge(t,e[2],{key:e[4].id}),o.start()}),_=!0)},o(y){o&&o.invalidate(),i=He(t,e[1],{key:e[4].id}),_=!1},d(y){y&&u(t),y&&i&&i.end(),w=!1,h()}}}function Ut(a){let e,t=[],r=new Map,n,s=a[0];const l=c=>c[4].id;for(let c=0;c<s.length;c+=1){let o=Ce(a,s,c),i=l(o);r.set(i,t[c]=Le(i,o))}return{c(){e=$("section");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=g(c,"SECTION",{class:!0});var o=E(e);for(let i=0;i<t.length;i+=1)t[i].l(o);o.forEach(u),this.h()},h(){m(e,"class","flex flex-col justify-right absolute w-1/3 top-4 right-4 z-40")},m(c,o){D(c,e,o);for(let i=0;i<t.length;i+=1)t[i].m(e,null);n=!0},p(c,[o]){if(o&1){s=c[0],ee();for(let i=0;i<t.length;i+=1)t[i].r();t=Ke(t,o,l,1,c,s,r,e,Je,Le,null,Ce);for(let i=0;i<t.length;i+=1)t[i].a();te()}},i(c){if(!n){for(let o=0;o<s.length;o+=1)v(t[o]);n=!0}},o(c){for(let o=0;o<t.length;o+=1)k(t[o]);n=!1},d(c){c&&u(e);for(let o=0;o<t.length;o+=1)t[o].d()}}}function Ft(a,e,t){let r;U(a,ye,c=>t(0,r=c));const[n,s]=We({duration:c=>Math.sqrt(c*100),fallback(c){const o=getComputedStyle(c),i=o.transform==="none"?"":o.transform;return{duration:600,easing:Xe,css:f=>`transform: ${i} scale(${f}); opacity: ${f}`}}});return[r,n,s,c=>ye.dismiss(c.id)]}class zt extends H{constructor(e){super();K(this,e,Ft,Ut,W,{})}}const Be=ct("closedBannerId",null),Gt=a=>{Be.set(a)};function Ve(a){let e,t,r,n,s,l,c,o,i,f;return{c(){e=$("section"),t=$("a"),r=F(a[3]),s=O(),l=$("button"),c=F("\u2715"),this.h()},l(d){e=g(d,"SECTION",{class:!0});var _=E(e);t=g(_,"A",{href:!0,target:!0});var w=E(t);r=z(w,a[3]),w.forEach(u),s=q(_),l=g(_,"BUTTON",{class:!0});var h=E(l);c=z(h,"\u2715"),h.forEach(u),_.forEach(u),this.h()},h(){m(t,"href",n="https://github.com/temporalio/temporal/releases/tag/v"+a[2].versionInfo.current.version),m(t,"target","_blank"),m(l,"class","absolute top-0 right-0 mr-5 text-black-600"),m(e,"class",o=""+(be(`block leading-10 text-center ${a[0]}`)+" svelte-1xgik0j"))},m(d,_){D(d,e,_),p(e,t),p(t,r),p(e,s),p(e,l),p(l,c),i||(f=oe(l,"click",a[12]),i=!0)},p(d,_){_&8&&re(r,d[3]),_&4&&n!==(n="https://github.com/temporalio/temporal/releases/tag/v"+d[2].versionInfo.current.version)&&m(t,"href",n),_&1&&o!==(o=""+(be(`block leading-10 text-center ${d[0]}`)+" svelte-1xgik0j"))&&m(e,"class",o)},d(d){d&&u(e),i=!1,f()}}}function Ht(a){let e,t=a[4]&&Ve(a);return{c(){t&&t.c(),e=R()},l(r){t&&t.l(r),e=R()},m(r,n){t&&t.m(r,n),D(r,e,n)},p(r,[n]){r[4]?t?t.p(r,n):(t=Ve(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Q,o:Q,d(r){t&&t.d(r),r&&u(e)}}}function Kt(a,e,t){let r,n,s,l,c,o,i,f;U(a,Be,I=>t(11,i=I)),U(a,Ee,I=>t(2,f=I));var d,_,w,h;const b={High:"high",Medium:"medium",Low:"low"},y=()=>Gt(n.version);return a.$$.update=()=>{a.$$.dirty&36&&t(10,r=t(5,d=f==null?void 0:f.versionInfo)===null||d===void 0?void 0:d.recommended),a.$$.dirty&68&&t(1,n=t(6,_=f==null?void 0:f.versionInfo)===null||_===void 0?void 0:_.current),a.$$.dirty&388&&t(9,s=t(8,h=t(7,w=f==null?void 0:f.versionInfo)===null||w===void 0?void 0:w.alerts)===null||h===void 0?void 0:h[0]),a.$$.dirty&512&&t(0,l=s?b[s.severity]:b.Low),a.$$.dirty&2050&&t(4,c=(n==null?void 0:n.version)&&n.version!=i),a.$$.dirty&1537&&t(3,o=l==b.Low?`\u{1F4E5} v${r==null?void 0:r.version} version is available`:`\u{1F4E5} ${s==null?void 0:s.message}`)},[l,n,f,o,c,d,_,w,h,s,r,i,y]}class Wt extends H{constructor(e){super();K(this,e,Kt,Ht,W,{})}}function Qt(a){let e;const t=a[7].default,r=ne(t,a,a[6],null);return{c(){r&&r.c()},l(n){r&&r.l(n)},m(n,s){r&&r.m(n,s),e=!0},p(n,s){r&&r.p&&(!e||s&64)&&se(r,t,n,n[6],e?ae(t,n[6],s,null):le(n[6]),null)},i(n){e||(v(r,n),e=!0)},o(n){k(r,n),e=!1},d(n){r&&r.d(n)}}}function Jt(a){let e,t;return e=new ft({props:{error:a[2]}}),{c(){T(e.$$.fragment)},l(r){j(e.$$.fragment,r)},m(r,n){S(e,r,n),t=!0},p(r,n){const s={};n&4&&(s.error=r[2]),e.$set(s)},i(r){t||(v(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){C(e,r)}}}function Xt(a){let e,t,r,n;const s=[Jt,Qt],l=[];function c(o,i){return o[2]?0:1}return e=c(a),t=l[e]=s[e](a),{c(){t.c(),r=R()},l(o){t.l(o),r=R()},m(o,i){l[e].m(o,i),D(o,r,i),n=!0},p(o,[i]){let f=e;e=c(o),e===f?l[e].p(o,i):(ee(),k(l[f],1,1,()=>{l[f]=null}),te(),t=l[e],t?t.p(o,i):(t=l[e]=s[e](o),t.c()),v(t,1),t.m(r.parentNode,r))},i(o){n||(v(t),n=!0)},o(o){k(t),n=!1},d(o){l[e].d(o),o&&u(r)}}}function Yt(a,e,t){let r,n,s=Q,l=()=>(s(),s=ke(_,b=>t(5,n=b)),_),c,o=Q,i=()=>(o(),o=ke(h,b=>t(2,c=b)),h);U(a,_e,b=>t(4,r=b)),a.$$.on_destroy.push(()=>s()),a.$$.on_destroy.push(()=>o());let{$$slots:f={},$$scope:d}=e,{error:_=null}=e;l();let{onError:w=null}=e,h;return a.$$set=b=>{"error"in b&&l(t(0,_=b.error)),"onError"in b&&t(3,w=b.onError),"$$scope"in b&&t(6,d=b.$$scope)},a.$$.update=()=>{a.$$.dirty&59&&(_&&n&&i(t(1,h=_)),_e&&r&&i(t(1,h=_e)),w&&h&&w(h))},[_,h,c,w,r,n,d,f]}class Zt extends H{constructor(e){super();K(this,e,Yt,Xt,W,{error:0,onError:3})}}const xt=Ye(Zt);function er(a){let e;const t=a[1].default,r=ne(t,a,a[2],null);return{c(){r&&r.c()},l(n){r&&r.l(n)},m(n,s){r&&r.m(n,s),e=!0},p(n,s){r&&r.p&&(!e||s&4)&&se(r,t,n,n[2],e?ae(t,n[2],s,null):le(n[2]),null)},i(n){e||(v(r,n),e=!0)},o(n){k(r,n),e=!1},d(n){r&&r.d(n)}}}function tr(a){let e,t,r,n,s,l,c,o,i,f,d,_,w,h,b,y,I,P;return i=new zt({}),d=new Wt({}),w=new Rt({}),I=new xt({props:{onError:rr,$$slots:{default:[er]},$$scope:{ctx:a}}}),{c(){e=$("link"),t=$("link"),r=$("meta"),n=$("meta"),s=$("meta"),l=$("meta"),c=O(),o=$("main"),T(i.$$.fragment),f=O(),T(d.$$.fragment),_=O(),T(w.$$.fragment),h=O(),b=$("section"),y=$("div"),T(I.$$.fragment),this.h()},l(N){const B=Ze('[data-svelte="svelte-15ltrtv"]',document.head);e=g(B,"LINK",{rel:!0,href:!0}),t=g(B,"LINK",{rel:!0,href:!0}),r=g(B,"META",{property:!0,content:!0}),n=g(B,"META",{property:!0,content:!0}),s=g(B,"META",{property:!0,content:!0}),l=g(B,"META",{property:!0,content:!0}),B.forEach(u),c=q(N),o=g(N,"MAIN",{class:!0});var V=E(o);j(i.$$.fragment,V),f=q(V),j(d.$$.fragment,V),_=q(V),j(w.$$.fragment,V),h=q(V),b=g(V,"SECTION",{id:!0,class:!0});var L=E(b);y=g(L,"DIV",{class:!0});var x=E(y);j(I.$$.fragment,x),x.forEach(u),L.forEach(u),V.forEach(u),this.h()},h(){document.title="Temporal",m(e,"rel","manifest"),m(e,"href","/site.webmanifest"),m(t,"rel","apple-touch-icon"),m(t,"href","/apple-touch-icon.png"),m(r,"property","og:title"),m(r,"content","Temporal"),m(n,"property","og:type"),m(n,"content","website"),m(s,"property","og:url"),m(s,"content","https://temporal.io"),m(l,"property","og:image"),m(l,"content","/banner.png"),m(y,"class","flex flex-col h-full gap-4"),m(b,"id","content"),m(b,"class","h-full mx-10 mb-10 mt-8"),m(o,"class","flex flex-col h-screen")},m(N,B){p(document.head,e),p(document.head,t),p(document.head,r),p(document.head,n),p(document.head,s),p(document.head,l),D(N,c,B),D(N,o,B),S(i,o,null),p(o,f),S(d,o,null),p(o,_),S(w,o,null),p(o,h),p(o,b),p(b,y),S(I,y,null),P=!0},p(N,[B]){const V={};B&4&&(V.$$scope={dirty:B,ctx:N}),I.$set(V)},i(N){P||(v(i.$$.fragment,N),v(d.$$.fragment,N),v(w.$$.fragment,N),v(I.$$.fragment,N),P=!0)},o(N){k(i.$$.fragment,N),k(d.$$.fragment,N),k(w.$$.fragment,N),k(I.$$.fragment,N),P=!1},d(N){u(e),u(t),u(r),u(n),u(s),u(l),N&&u(c),N&&u(o),C(i),C(d),C(w),C(I)}}}async function $r({fetch:a}){var e;const{namespaces:t}=(e=await ue(me("namespaces"),{request:a}))!==null&&e!==void 0?e:{namespaces:[]};return dt(),mt(),tt(),{props:{namespaces:t},stuff:{namespaces:t}}}const rr=()=>{};function nr(a,e,t){let{$$slots:r={},$$scope:n}=e,{namespaces:s}=e;return xe("namespaces",s),a.$$set=l=>{"namespaces"in l&&t(0,s=l.namespaces),"$$scope"in l&&t(2,n=l.$$scope)},[s,r,n]}class gr extends H{constructor(e){super();K(this,e,nr,tr,W,{namespaces:0})}}export{gr as default,$r as load};