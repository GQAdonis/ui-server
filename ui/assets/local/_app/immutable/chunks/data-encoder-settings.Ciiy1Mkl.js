import{s as pe,h as N,b as O,j as R,k as B,d as M,f as C,m as k,W as le,H as re,i as G,n as E,$ as ve,p as se,F as Fe,G as Ge,t as Q,l as U,q as fe,a as Xe,u as ze,g as Je,e as Ke,B as de,N as ie,O as ae,v as ce,x as be,c as y,a9 as Qe,w as $}from"./scheduler.C46pS-76.js";import{S as ge,i as he,c as X,a as z,m as J,t as H,g as Be,b as P,e as Pe,d as K,f as oe,h as Ue}from"./index.dOVbn71B.js";import{L as Ye}from"./label.BlTcUXFh.js";import{t as x}from"./tw-merge.Ds6tgvmq.js";import{T as we}from"./toggle-switch.C9lxIG0w.js";import{t as A}from"./translate.BBe5dcco.js";import{o as ke,i as Ee,p as Ce,c as Te,v as Ze,b as ye}from"./data-encoder-config.M65brFkq.js";import{r as De}from"./workflow-run.BA0M4j61.js";import{L as $e}from"./link.DeoIHi52.js";import{B as Ve}from"./button.BZDNZ8ZV.js";import{A as xe}from"./accordion.BeFzQDzj.js";import{p as et}from"./stores.cOnxd292.js";import{a as tt}from"./index.mPGqfhEB.js";import{w as je}from"./entry.D1PUVimy.js";import{R as nt,a as Ae}from"./radio-input.Dwx-NGvl.js";const lt=l=>({}),Ie=l=>({});function Le(l){let n,e;return{c(){n=N("p"),e=Q(l[11]),this.h()},l(t){n=R(t,"P",{class:!0});var r=B(n);e=U(r,l[11]),r.forEach(C),this.h()},h(){k(n,"class","-mt-1 text-sm")},m(t,r){G(t,n,r),E(n,e)},p(t,r){r&2048&&fe(e,t[11])},d(t){t&&C(n)}}}function Se(l){let n,e,t=l[2]&&He(l);const r=l[15].error,i=Xe(r,l,l[14],Ie);return{c(){t&&t.c(),n=O(),i&&i.c()},l(s){t&&t.l(s),n=M(s),i&&i.l(s)},m(s,h){t&&t.m(s,h),G(s,n,h),i&&i.m(s,h),e=!0},p(s,h){s[2]?t?t.p(s,h):(t=He(s),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null),i&&i.p&&(!e||h&16384)&&ze(i,r,s,s[14],e?Ke(r,s[14],h,lt):Je(s[14]),Ie)},i(s){e||(H(i,s),e=!0)},o(s){P(i,s),e=!1},d(s){s&&C(n),t&&t.d(s),i&&i.d(s)}}}function He(l){let n,e;return{c(){n=N("p"),e=Q(l[2])},l(t){n=R(t,"P",{});var r=B(n);e=U(r,l[2]),r.forEach(C)},m(t,r){G(t,n,r),E(n,e)},p(t,r){r&4&&fe(e,t[2])},d(t){t&&C(n)}}}function qe(l){var h;let n,e,t=(((h=l[0])==null?void 0:h.length)??0)+"",r,i,s;return{c(){n=N("span"),e=N("span"),r=Q(t),i=Q(" / "),s=Q(l[12]),this.h()},l(f){n=R(f,"SPAN",{class:!0});var _=B(n);e=R(_,"SPAN",{class:!0});var v=B(e);r=U(v,t),v.forEach(C),i=U(_," / "),s=U(_,l[12]),_.forEach(C),this.h()},h(){var f,_;k(e,"class","text-information svelte-1ps5vu5"),re(e,"warn",l[12]-((f=l[0])==null?void 0:f.length)<=5),re(e,"error",l[12]===((_=l[0])==null?void 0:_.length)),k(n,"class","count svelte-1ps5vu5")},m(f,_){G(f,n,_),E(n,e),E(e,r),E(n,i),E(n,s)},p(f,_){var v,p,w;_&1&&t!==(t=(((v=f[0])==null?void 0:v.length)??0)+"")&&fe(r,t),_&4097&&re(e,"warn",f[12]-((p=f[0])==null?void 0:p.length)<=5),_&4097&&re(e,"error",f[12]===((w=f[0])==null?void 0:w.length)),_&4096&&fe(s,f[12])},d(f){f&&C(n)}}}function st(l){let n,e,t,r,i,s,h,f,_,v,p,w,I,S,q,b,j,T;e=new Ye({props:{required:l[10],hidden:l[8],label:l[7],for:l[9]}});let u=l[11]&&Le(l),o=!l[3]&&Se(l),g=l[12]&&!l[1]&&qe(l);return{c(){n=N("div"),X(e.$$.fragment),t=O(),u&&u.c(),r=O(),i=N("div"),s=N("textarea"),v=O(),p=N("div"),w=N("div"),o&&o.c(),S=O(),g&&g.c(),this.h()},l(a){n=R(a,"DIV",{class:!0});var c=B(n);z(e.$$.fragment,c),t=M(c),u&&u.l(c),r=M(c),i=R(c,"DIV",{class:!0});var V=B(i);s=R(V,"TEXTAREA",{class:!0,id:!0,placeholder:!0,rows:!0,spellcheck:!0,maxlength:!0}),B(s).forEach(C),V.forEach(C),v=M(c),p=R(c,"DIV",{class:!0});var d=B(p);w=R(d,"DIV",{class:!0,"aria-live":!0});var W=B(w);o&&o.l(W),W.forEach(C),S=M(d),g&&g.l(d),d.forEach(C),c.forEach(C),this.h()},h(){k(s,"class",h=le(x("surface-primary min-h-fit w-full rounded-lg px-3 py-2 text-sm focus-visible:outline-none",l[1]&&"cursor-not-allowed opacity-50"))+" svelte-1ps5vu5"),k(s,"id",l[9]),s.disabled=l[1],k(s,"placeholder",l[4]),k(s,"rows",l[5]),k(s,"spellcheck",l[6]),k(s,"maxlength",f=l[12]>0?l[12]:void 0),k(i,"class",_=le(x("relative box-border inline-flex w-full rounded-lg border-2 border-subtle focus-within:border-information focus-within:ring-4 focus-within:ring-primary/70",!l[3]&&"error",!l[1]&&"hover:border-information"))+" svelte-1ps5vu5"),k(w,"class","error-msg svelte-1ps5vu5"),k(w,"aria-live",I=l[3]?"off":"assertive"),re(w,"min-width",l[12]),k(p,"class","flex justify-between gap-2"),k(n,"class",q=le(x("group flex flex-col gap-1",l[13]))+" svelte-1ps5vu5")},m(a,c){G(a,n,c),J(e,n,null),E(n,t),u&&u.m(n,null),E(n,r),E(n,i),E(i,s),ve(s,l[0]),E(n,v),E(n,p),E(p,w),o&&o.m(w,null),E(p,S),g&&g.m(p,null),b=!0,j||(T=[se(s,"input",l[21]),se(s,"input",l[16]),se(s,"change",l[17]),se(s,"focus",l[18]),se(s,"blur",l[19]),se(s,"keydown",Fe(l[20]))],j=!0)},p(a,[c]){const V={};c&1024&&(V.required=a[10]),c&256&&(V.hidden=a[8]),c&128&&(V.label=a[7]),c&512&&(V.for=a[9]),e.$set(V),a[11]?u?u.p(a,c):(u=Le(a),u.c(),u.m(n,r)):u&&(u.d(1),u=null),(!b||c&2&&h!==(h=le(x("surface-primary min-h-fit w-full rounded-lg px-3 py-2 text-sm focus-visible:outline-none",a[1]&&"cursor-not-allowed opacity-50"))+" svelte-1ps5vu5"))&&k(s,"class",h),(!b||c&512)&&k(s,"id",a[9]),(!b||c&2)&&(s.disabled=a[1]),(!b||c&16)&&k(s,"placeholder",a[4]),(!b||c&32)&&k(s,"rows",a[5]),(!b||c&64)&&k(s,"spellcheck",a[6]),(!b||c&4096&&f!==(f=a[12]>0?a[12]:void 0))&&k(s,"maxlength",f),c&1&&ve(s,a[0]),(!b||c&10&&_!==(_=le(x("relative box-border inline-flex w-full rounded-lg border-2 border-subtle focus-within:border-information focus-within:ring-4 focus-within:ring-primary/70",!a[3]&&"error",!a[1]&&"hover:border-information"))+" svelte-1ps5vu5"))&&k(i,"class",_),a[3]?o&&(Be(),P(o,1,1,()=>{o=null}),Pe()):o?(o.p(a,c),c&8&&H(o,1)):(o=Se(a),o.c(),H(o,1),o.m(w,null)),(!b||c&8&&I!==(I=a[3]?"off":"assertive"))&&k(w,"aria-live",I),(!b||c&4096)&&re(w,"min-width",a[12]),a[12]&&!a[1]?g?g.p(a,c):(g=qe(a),g.c(),g.m(p,null)):g&&(g.d(1),g=null),(!b||c&8192&&q!==(q=le(x("group flex flex-col gap-1",a[13]))+" svelte-1ps5vu5"))&&k(n,"class",q)},i(a){b||(H(e.$$.fragment,a),H(o),b=!0)},o(a){P(e.$$.fragment,a),P(o),b=!1},d(a){a&&C(n),K(e),u&&u.d(),o&&o.d(),g&&g.d(),j=!1,Ge(T)}}}function rt(l,n,e){let{$$slots:t={},$$scope:r}=n,{disabled:i=!1}=n,{error:s=""}=n,{isValid:h=!0}=n,{placeholder:f=""}=n,{rows:_=5}=n,{spellcheck:v=null}=n,{value:p}=n,{label:w}=n,{labelHidden:I=!1}=n,{id:S}=n,{required:q=!1}=n,{description:b=""}=n,{maxLength:j=0}=n,{class:T="text-primary"}=n;function u(d){de.call(this,l,d)}function o(d){de.call(this,l,d)}function g(d){de.call(this,l,d)}function a(d){de.call(this,l,d)}function c(d){de.call(this,l,d)}function V(){p=this.value,e(0,p)}return l.$$set=d=>{"disabled"in d&&e(1,i=d.disabled),"error"in d&&e(2,s=d.error),"isValid"in d&&e(3,h=d.isValid),"placeholder"in d&&e(4,f=d.placeholder),"rows"in d&&e(5,_=d.rows),"spellcheck"in d&&e(6,v=d.spellcheck),"value"in d&&e(0,p=d.value),"label"in d&&e(7,w=d.label),"labelHidden"in d&&e(8,I=d.labelHidden),"id"in d&&e(9,S=d.id),"required"in d&&e(10,q=d.required),"description"in d&&e(11,b=d.description),"maxLength"in d&&e(12,j=d.maxLength),"class"in d&&e(13,T=d.class),"$$scope"in d&&e(14,r=d.$$scope)},[p,i,s,h,f,_,v,w,I,S,q,b,j,T,r,t,u,o,g,a,c,V]}class it extends ge{constructor(n){super(),he(this,n,rt,st,pe,{disabled:1,error:2,isValid:3,placeholder:4,rows:5,spellcheck:6,value:0,label:7,labelHidden:8,id:9,required:10,description:11,maxLength:12,class:13})}}function Ne(l){let n,e=A("data-encoder.include-cross-origin-credentials-warning")+"",t;return{c(){n=N("small"),t=Q(e),this.h()},l(r){n=R(r,"SMALL",{"data-testid":!0});var i=B(n);t=U(i,e),i.forEach(C),this.h()},h(){k(n,"data-testid","data-encoder-cross-origin-credentials")},m(r,i){G(r,n,i),E(n,t)},p:ce,d(r){r&&C(n)}}}function at(l){let n,e,t,r,i,s,h,f,_,v,p,w;function I(o){l[4](o)}let S={id:"data-encoder-endpoint-input",rows:3,placeholder:A("data-encoder.endpoint-placeholder"),error:l[3],isValid:!l[3],label:A("data-encoder.endpoint-title"),description:A("data-encoder.endpoint-description")};l[0]!==void 0&&(S.value=l[0]),t=new it({props:S}),ie.push(()=>oe(t,"value",I));function q(o){l[5](o)}let b={label:A("data-encoder.pass-access-token-label"),id:"pass-access-token","data-testid":"data-encoder-pass-access-token"};l[1]!==void 0&&(b.checked=l[1]),s=new we({props:b}),ie.push(()=>oe(s,"checked",q));function j(o){l[6](o)}let T={label:A("data-encoder.include-cross-origin-credentials-label"),id:"pass-access-credentials","data-testid":"data-encoder-include-credentials"};l[2]!==void 0&&(T.checked=l[2]),_=new we({props:T}),ie.push(()=>oe(_,"checked",j));let u=l[2]&&Ne();return{c(){n=N("div"),e=N("div"),X(t.$$.fragment),i=O(),X(s.$$.fragment),f=O(),X(_.$$.fragment),p=O(),u&&u.c(),this.h()},l(o){n=R(o,"DIV",{class:!0});var g=B(n);e=R(g,"DIV",{class:!0});var a=B(e);z(t.$$.fragment,a),i=M(a),z(s.$$.fragment,a),f=M(a),z(_.$$.fragment,a),p=M(a),u&&u.l(a),a.forEach(C),g.forEach(C),this.h()},h(){k(e,"class","flex flex-col gap-2"),k(n,"class","flex flex-col gap-4")},m(o,g){G(o,n,g),E(n,e),J(t,e,null),E(e,i),J(s,e,null),E(e,f),J(_,e,null),E(e,p),u&&u.m(e,null),w=!0},p(o,[g]){const a={};g&8&&(a.error=o[3]),g&8&&(a.isValid=!o[3]),!r&&g&1&&(r=!0,a.value=o[0],ae(()=>r=!1)),t.$set(a);const c={};!h&&g&2&&(h=!0,c.checked=o[1],ae(()=>h=!1)),s.$set(c);const V={};!v&&g&4&&(v=!0,V.checked=o[2],ae(()=>v=!1)),_.$set(V),o[2]?u?u.p(o,g):(u=Ne(),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(o){w||(H(t.$$.fragment,o),H(s.$$.fragment,o),H(_.$$.fragment,o),w=!0)},o(o){P(t.$$.fragment,o),P(s.$$.fragment,o),P(_.$$.fragment,o),w=!1},d(o){o&&C(n),K(t),K(s),K(_),u&&u.d()}}}function ot(l,n,e){let{endpoint:t=""}=n,{passToken:r=!1}=n,{includeCreds:i=!1}=n,{error:s=""}=n;function h(v){t=v,e(0,t)}function f(v){r=v,e(1,r)}function _(v){i=v,e(2,i)}return l.$$set=v=>{"endpoint"in v&&e(0,t=v.endpoint),"passToken"in v&&e(1,r=v.passToken),"includeCreds"in v&&e(2,i=v.includeCreds),"error"in v&&e(3,s=v.error)},[t,r,i,s,h,f,_]}class dt extends ge{constructor(n){super(),he(this,n,ot,at,pe,{endpoint:0,passToken:1,includeCreds:2,error:3})}}const ft=l=>l.replace(/\/+$/,"");function Re(l){let n,e,t,r,i=A("common.codec-server")+"",s,h,f,_=A("data-encoder.codec-server-description-prefix")+"",v,p,w,I=A("data-encoder.codec-server-description-suffix",{level:l[6]})+"",S,q,b,j,T,u,o,g,a,c,V,d,W,D,_e,te;p=new $e({props:{href:"https://docs.temporal.io/dataconversion#codec-server",newTab:!0,$$slots:{default:[ct]},$$scope:{ctx:l}}}),b=new xe({props:{"data-testid":"override-accordion",title:l[7]?A("data-encoder.browser-override-description",{level:l[6]}):A("data-encoder.no-browser-override-description",{level:l[6]}),$$slots:{default:[_t]},$$scope:{ctx:l}}});function Oe(m){l[15](m)}function Me(m){l[16](m)}function We(m){l[17](m)}let ue={error:l[5]};return l[1]!==void 0&&(ue.endpoint=l[1]),l[2]!==void 0&&(ue.passToken=l[2]),l[4]!==void 0&&(ue.includeCreds=l[4]),T=new dt({props:ue}),ie.push(()=>oe(T,"endpoint",Oe)),ie.push(()=>oe(T,"passToken",Me)),ie.push(()=>oe(T,"includeCreds",We)),V=new Ve({props:{disabled:!!l[5],"data-testid":"confirm-data-encoder-button",type:"submit",$$slots:{default:[mt]},$$scope:{ctx:l}}}),V.$on("click",l[10]),W=new Ve({props:{variant:"ghost","data-testid":"cancel-data-encoder-button",$$slots:{default:[pt]},$$scope:{ctx:l}}}),W.$on("click",l[9]),{c(){n=N("aside"),e=N("div"),t=N("div"),r=N("h3"),s=Q(i),h=O(),f=N("p"),v=Q(_),X(p.$$.fragment),w=O(),S=Q(I),q=O(),X(b.$$.fragment),j=O(),X(T.$$.fragment),a=O(),c=N("div"),X(V.$$.fragment),d=O(),X(W.$$.fragment),this.h()},l(m){n=R(m,"ASIDE",{class:!0});var L=B(n);e=R(L,"DIV",{class:!0});var F=B(e);t=R(F,"DIV",{class:!0});var ne=B(t);r=R(ne,"H3",{"data-testid":!0});var Z=B(r);s=U(Z,i),Z.forEach(C),ne.forEach(C),h=M(F),f=R(F,"P",{class:!0});var Y=B(f);v=U(Y,_),z(p.$$.fragment,Y),w=M(Y),S=U(Y,I),Y.forEach(C),q=M(F),z(b.$$.fragment,F),j=M(F),z(T.$$.fragment,F),a=M(F),c=R(F,"DIV",{class:!0});var ee=B(c);z(V.$$.fragment,ee),d=M(ee),z(W.$$.fragment,ee),ee.forEach(C),F.forEach(C),L.forEach(C),this.h()},h(){k(r,"data-testid","data-encoder-title"),k(t,"class","flex items-center justify-between space-x-2"),k(f,"class","text-sm"),k(c,"class","flex items-center gap-4"),k(e,"class","flex w-full flex-col gap-4 xl:w-1/2"),k(n,"class",D=x("surface-primary relative flex h-[540px] w-full flex-col gap-6 overflow-auto border-b border-subtle p-4 md:p-12",l[0]))},m(m,L){G(m,n,L),E(n,e),E(e,t),E(t,r),E(r,s),E(e,h),E(e,f),E(f,v),J(p,f,null),E(f,w),E(f,S),E(e,q),J(b,e,null),E(e,j),J(T,e,null),E(e,a),E(e,c),J(V,c,null),E(c,d),J(W,c,null),te=!0},p(m,L){const F={};L&8388608&&(F.$$scope={dirty:L,ctx:m}),p.$set(F),(!te||L&64)&&I!==(I=A("data-encoder.codec-server-description-suffix",{level:m[6]})+"")&&fe(S,I);const ne={};L&192&&(ne.title=m[7]?A("data-encoder.browser-override-description",{level:m[6]}):A("data-encoder.no-browser-override-description",{level:m[6]})),L&8388672&&(ne.$$scope={dirty:L,ctx:m}),b.$set(ne);const Z={};L&32&&(Z.error=m[5]),!u&&L&2&&(u=!0,Z.endpoint=m[1],ae(()=>u=!1)),!o&&L&4&&(o=!0,Z.passToken=m[2],ae(()=>o=!1)),!g&&L&16&&(g=!0,Z.includeCreds=m[4],ae(()=>g=!1)),T.$set(Z);const Y={};L&32&&(Y.disabled=!!m[5]),L&8388608&&(Y.$$scope={dirty:L,ctx:m}),V.$set(Y);const ee={};L&8388608&&(ee.$$scope={dirty:L,ctx:m}),W.$set(ee),(!te||L&1&&D!==(D=x("surface-primary relative flex h-[540px] w-full flex-col gap-6 overflow-auto border-b border-subtle p-4 md:p-12",m[0])))&&k(n,"class",D)},i(m){te||(H(p.$$.fragment,m),H(b.$$.fragment,m),H(T.$$.fragment,m),H(V.$$.fragment,m),H(W.$$.fragment,m),m&&(_e||Qe(()=>{_e=Ue(n,tt,{y:-50,delay:0,duration:500}),_e.start()})),te=!0)},o(m){P(p.$$.fragment,m),P(b.$$.fragment,m),P(T.$$.fragment,m),P(V.$$.fragment,m),P(W.$$.fragment,m),te=!1},d(m){m&&C(n),K(p),K(b),K(T),K(V),K(W)}}}function ct(l){let n=A("common.codec-server")+"",e;return{c(){e=Q(n)},l(t){e=U(t,n)},m(t,r){G(t,e,r)},p:ce,d(t){t&&C(e)}}}function ut(l){let n,e,t,r;return n=new Ae({props:{id:"use-configuration-endpoint-radio","data-testid":"use-configuration-endpoint-input",value:!1,label:A("data-encoder.no-browser-override-description",{level:l[6]})}}),t=new Ae({props:{id:"use-local-endpoint-radio","data-testid":"use-local-endpoint-input",value:!0,label:A("data-encoder.browser-override-description",{level:l[6]})}}),{c(){X(n.$$.fragment),e=O(),X(t.$$.fragment)},l(i){z(n.$$.fragment,i),e=M(i),z(t.$$.fragment,i)},m(i,s){J(n,i,s),G(i,e,s),J(t,i,s),r=!0},p(i,s){const h={};s&64&&(h.label=A("data-encoder.no-browser-override-description",{level:i[6]})),n.$set(h);const f={};s&64&&(f.label=A("data-encoder.browser-override-description",{level:i[6]})),t.$set(f)},i(i){r||(H(n.$$.fragment,i),H(t.$$.fragment,i),r=!0)},o(i){P(n.$$.fragment,i),P(t.$$.fragment,i),r=!1},d(i){i&&C(e),K(n,i),K(t,i)}}}function _t(l){let n,e;return n=new nt({props:{name:"override",group:l[8],$$slots:{default:[ut]},$$scope:{ctx:l}}}),{c(){X(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,r){J(n,t,r),e=!0},p(t,r){const i={};r&8388672&&(i.$$scope={dirty:r,ctx:t}),n.$set(i)},i(t){e||(H(n.$$.fragment,t),e=!0)},o(t){P(n.$$.fragment,t),e=!1},d(t){K(n,t)}}}function mt(l){let n=A("common.apply")+"",e;return{c(){e=Q(n)},l(t){e=U(t,n)},m(t,r){G(t,e,r)},p:ce,d(t){t&&C(e)}}}function pt(l){let n=A("common.cancel")+"",e;return{c(){e=Q(n)},l(t){e=U(t,n)},m(t,r){G(t,e,r)},p:ce,d(t){t&&C(e)}}}function gt(l){let n,e,t=l[3]&&Re(l);return{c(){t&&t.c(),n=be()},l(r){t&&t.l(r),n=be()},m(r,i){t&&t.m(r,i),G(r,n,i),e=!0},p(r,[i]){r[3]?t?(t.p(r,i),i&8&&H(t,1)):(t=Re(r),t.c(),H(t,1),t.m(n.parentNode,n)):t&&(Be(),P(t,1,1,()=>{t=null}),Pe())},i(r){e||(H(t),e=!0)},o(r){P(t),e=!1},d(r){r&&C(n),t&&t.d(r)}}}const me=je(!1);function ht(l,n,e){let t,r,i,s,h,f,_,v=ce,p,w,I;y(l,De,D=>e(18,i=D)),y(l,et,D=>e(14,s=D)),y(l,ke,D=>e(19,f=D)),y(l,me,D=>e(3,_=D)),y(l,Ee,D=>e(20,p=D)),y(l,Ce,D=>e(21,w=D)),y(l,Te,D=>e(22,I=D)),l.$$.on_destroy.push(()=>v());var S,q,b;let{class:j=""}=n,T=I??"",u=w??!1,o=p??!1,g=je(f);y(l,g,D=>e(7,h=D));const a=()=>{e(1,T=I),e(2,u=w),e(4,o=p),$(g,h=f,h),$(me,_=!1,_)},c=()=>{e(5,t=""),$(Te,I=ft(T),I),$(Ce,w=u,w),$(Ee,p=o,p),$(me,_=!1,_),$(ke,f=h,f),s.url.pathname.endsWith("history")&&$(De,i=Date.now(),i)};function V(D){T=D,e(1,T)}function d(D){u=D,e(2,u)}function W(D){o=D,e(4,o)}return l.$$set=D=>{"class"in D&&e(0,j=D.class)},l.$$.update=()=>{l.$$.dirty&30720&&e(6,r=!(e(13,b=e(12,q=e(11,S=s.data)===null||S===void 0?void 0:S.settings)===null||q===void 0?void 0:q.runtimeEnvironment)===null||b===void 0)&&b.isCloud?A("common.namespaces"):A("common.cluster")),l.$$.dirty&6&&(u&&!Ze(T)?e(5,t=A("data-encoder.access-token-https-error")):T&&!ye(T)?e(5,t=A("data-encoder.prefix-error")):e(5,t="")),l.$$.dirty&8&&(_||a())},e(5,t=""),[j,T,u,_,o,t,r,h,g,a,c,S,q,b,s,V,d,W]}class Nt extends ge{constructor(n){super(),he(this,n,ht,gt,pe,{class:0})}}export{Nt as D,me as v};