import{s as $,a as q,z as A,h as U,j as H,k as V,f as T,E as S,i as X,_ as ve,u as K,g as R,e as B,D as G,r as me,a7 as pe,A as ee,v as Ee,L as Le,w as j,x as ae,a0 as _e,c as J,b as Y,d as Z,m as x,H as k,n as P,p as Q,F as te,G as he,t as Me,l as Oe,q as Te,a8 as ie,ac as Ie,B as ye,M as Ce}from"./scheduler.BTg3iwM1.js";import{S as le,i as se,t as I,b as y,g as be,e as ge,c as Ae,a as De,m as Se,d as Ne,h as ze}from"./index.64bqrcBm.js";import{g as w}from"./spread.CgU5AtxT.js";import{I as Pe}from"./icon.BfjNqDoE.js";import{t as N}from"./tw-merge.Ds6tgvmq.js";import{a as Ue}from"./index.C6Q9K7cv.js";import{w as F}from"./entry.6TwJlv05.js";const He=(t,e)=>{const l=n=>{t&&!t.contains(n.target)&&!n.defaultPrevented&&e(n)};return document.addEventListener("click",l,!0),{destroy(){document.removeEventListener("click",l,!0)}}},Ve=t=>({open:t&2}),re=t=>({open:t[1]});function je(t){let e,l,n,u,h;const _=t[5].default,r=q(_,t,t[4],re);let d=[{class:l=N("relative",t[0])},t[3]],m={};for(let o=0;o<d.length;o+=1)m=A(m,d[o]);return{c(){e=U("div"),r&&r.c(),this.h()},l(o){e=H(o,"DIV",{class:!0});var i=V(e);r&&r.l(i),i.forEach(T),this.h()},h(){S(e,m)},m(o,i){X(o,e,i),r&&r.m(e,null),n=!0,u||(h=ve(He.call(null,e,t[2])),u=!0)},p(o,[i]){r&&r.p&&(!n||i&18)&&K(r,_,o,o[4],n?B(_,o[4],i,Ve):R(o[4]),re),S(e,m=w(d,[(!n||i&1&&l!==(l=N("relative",o[0])))&&{class:l},i&8&&o[3]]))},i(o){n||(I(r,o),n=!0)},o(o){y(r,o),n=!1},d(o){o&&T(e),r&&r.d(o),u=!1,h()}}}const ne="menu-context";function qe(t,e,l){const n=["class","open"];let u=G(e,n),h,_=Ee,r=()=>(_(),_=Le(i,M=>l(6,h=M)),i);t.$$.on_destroy.push(()=>_());let{$$slots:d={},$$scope:m}=e,{class:o=""}=e,{open:i=F(!1)}=e;r();const L=F(!1),p=F(null),a=me(),f=()=>{h&&(a("close"),j(i,h=!1,h))};return pe(ne,{open:i,keepOpen:L,menuElement:p}),t.$$set=M=>{e=A(A({},e),ee(M)),l(3,u=G(e,n)),"class"in M&&l(0,o=M.class),"open"in M&&r(l(1,i=M.open)),"$$scope"in M&&l(4,m=M.$$scope)},[o,i,f,u,m,d]}class tt extends le{constructor(e){super(),se(this,e,qe,je,$,{class:0,open:1})}}const Ke=t=>({}),ue=t=>({}),Re=t=>({}),oe=t=>({});function Be(t){let e,l,n,u,h,_,r,d,m,o,i,L,p;const a=t[15].leading,f=q(a,t,t[14],oe),M=t[15].default,v=q(M,t,t[14],null);let b=t[1]&&fe(),g=t[5]&&ce(t);const C=t[15].trailing,O=q(C,t,t[14],ue);let z=[{role:"menuitem"},{class:d=N("menu-item","m-1 px-3 py-2","flex items-center gap-2",t[0])},{"aria-hidden":m=t[3]?"true":"false"},{"aria-disabled":t[3]},{tabindex:o=t[3]?-1:0},t[13]],D={};for(let c=0;c<z.length;c+=1)D=A(D,z[c]);return{c(){e=U("li"),f&&f.c(),l=Y(),n=U("div"),u=U("div"),v&&v.c(),h=Y(),b&&b.c(),_=Y(),g&&g.c(),r=Y(),O&&O.c(),this.h()},l(c){e=H(c,"LI",{role:!0,class:!0,"aria-hidden":!0,"aria-disabled":!0,tabindex:!0});var s=V(e);f&&f.l(s),l=Z(s),n=H(s,"DIV",{class:!0});var E=V(n);u=H(E,"DIV",{class:!0});var W=V(u);v&&v.l(W),h=Z(W),b&&b.l(W),W.forEach(T),_=Z(E),g&&g.l(E),E.forEach(T),r=Z(s),O&&O.l(s),s.forEach(T),this.h()},h(){x(u,"class","menu-item-wrapper svelte-123wmc7"),k(u,"centered",t[6]),x(n,"class","grow"),S(e,D),k(e,"destructive",t[2]),k(e,"disabled",t[3]),k(e,"selected",t[1]),k(e,"hoverable",t[7]),k(e,"svelte-123wmc7",!0)},m(c,s){X(c,e,s),f&&f.m(e,null),P(e,l),P(e,n),P(n,u),v&&v.m(u,null),P(u,h),b&&b.m(u,null),P(n,_),g&&g.m(n,null),P(e,r),O&&O.m(e,null),i=!0,L||(p=[Q(e,"click",t[12]),Q(e,"keydown",te(t[11]))],L=!0)},p(c,s){f&&f.p&&(!i||s&16384)&&K(f,a,c,c[14],i?B(a,c[14],s,Re):R(c[14]),oe),v&&v.p&&(!i||s&16384)&&K(v,M,c,c[14],i?B(M,c[14],s,null):R(c[14]),null),c[1]?b?s&2&&I(b,1):(b=fe(),b.c(),I(b,1),b.m(u,null)):b&&(be(),y(b,1,1,()=>{b=null}),ge()),(!i||s&64)&&k(u,"centered",c[6]),c[5]?g?g.p(c,s):(g=ce(c),g.c(),g.m(n,null)):g&&(g.d(1),g=null),O&&O.p&&(!i||s&16384)&&K(O,C,c,c[14],i?B(C,c[14],s,Ke):R(c[14]),ue),S(e,D=w(z,[{role:"menuitem"},(!i||s&1&&d!==(d=N("menu-item","m-1 px-3 py-2","flex items-center gap-2",c[0])))&&{class:d},(!i||s&8&&m!==(m=c[3]?"true":"false"))&&{"aria-hidden":m},(!i||s&8)&&{"aria-disabled":c[3]},(!i||s&8&&o!==(o=c[3]?-1:0))&&{tabindex:o},s&8192&&c[13]])),k(e,"destructive",c[2]),k(e,"disabled",c[3]),k(e,"selected",c[1]),k(e,"hoverable",c[7]),k(e,"svelte-123wmc7",!0)},i(c){i||(I(f,c),I(v,c),I(b),I(O,c),i=!0)},o(c){y(f,c),y(v,c),y(b),y(O,c),i=!1},d(c){c&&T(e),f&&f.d(c),v&&v.d(c),b&&b.d(),g&&g.d(),O&&O.d(c),L=!1,he(p)}}}function Ge(t){let e,l,n,u,h,_,r,d,m;const o=t[15].default,i=q(o,t,t[14],null);let L=[{href:t[4]},{target:l=t[8]?"_blank":null},{rel:n=t[8]?"noreferrer":null},{role:"menuitem"},{class:u=N("menu-item","m-1 px-3 py-2","flex items-center gap-2",t[0])},{"aria-hidden":h=t[3]?"true":"false"},{"aria-disabled":t[3]},{tabindex:_=t[3]?-1:0},t[13]],p={};for(let a=0;a<L.length;a+=1)p=A(p,L[a]);return{c(){e=U("a"),i&&i.c(),this.h()},l(a){e=H(a,"A",{href:!0,target:!0,rel:!0,role:!0,class:!0,"aria-hidden":!0,"aria-disabled":!0,tabindex:!0});var f=V(e);i&&i.l(f),f.forEach(T),this.h()},h(){S(e,p),k(e,"disabled",t[3]),k(e,"hoverable",t[7]),k(e,"justify-center",t[6]),k(e,"svelte-123wmc7",!0)},m(a,f){X(a,e,f),i&&i.m(e,null),r=!0,d||(m=Q(e,"keydown",te(t[11])),d=!0)},p(a,f){i&&i.p&&(!r||f&16384)&&K(i,o,a,a[14],r?B(o,a[14],f,null):R(a[14]),null),S(e,p=w(L,[(!r||f&16)&&{href:a[4]},(!r||f&256&&l!==(l=a[8]?"_blank":null))&&{target:l},(!r||f&256&&n!==(n=a[8]?"noreferrer":null))&&{rel:n},{role:"menuitem"},(!r||f&1&&u!==(u=N("menu-item","m-1 px-3 py-2","flex items-center gap-2",a[0])))&&{class:u},(!r||f&8&&h!==(h=a[3]?"true":"false"))&&{"aria-hidden":h},(!r||f&8)&&{"aria-disabled":a[3]},(!r||f&8&&_!==(_=a[3]?-1:0))&&{tabindex:_},f&8192&&a[13]])),k(e,"disabled",a[3]),k(e,"hoverable",a[7]),k(e,"justify-center",a[6]),k(e,"svelte-123wmc7",!0)},i(a){r||(I(i,a),r=!0)},o(a){y(i,a),r=!1},d(a){a&&T(e),i&&i.d(a),d=!1,m()}}}function fe(t){let e,l;return e=new Pe({props:{name:"checkmark",class:"shrink-0"}}),{c(){Ae(e.$$.fragment)},l(n){De(e.$$.fragment,n)},m(n,u){Se(e,n,u),l=!0},i(n){l||(I(e.$$.fragment,n),l=!0)},o(n){y(e.$$.fragment,n),l=!1},d(n){Ne(e,n)}}}function ce(t){let e,l;return{c(){e=U("div"),l=Me(t[5]),this.h()},l(n){e=H(n,"DIV",{class:!0});var u=V(e);l=Oe(u,t[5]),u.forEach(T),this.h()},h(){x(e,"class","menu-item-description svelte-123wmc7"),k(e,"text-center",t[6])},m(n,u){X(n,e,u),P(e,l)},p(n,u){u&32&&Te(l,n[5]),u&64&&k(e,"text-center",n[6])},d(n){n&&T(e)}}}function Xe(t){let e,l,n,u;const h=[Ge,Be],_=[];function r(d,m){return d[4]?0:1}return e=r(t),l=_[e]=h[e](t),{c(){l.c(),n=ae()},l(d){l.l(d),n=ae()},m(d,m){_[e].m(d,m),X(d,n,m),u=!0},p(d,[m]){let o=e;e=r(d),e===o?_[e].p(d,m):(be(),y(_[o],1,1,()=>{_[o]=null}),ge(),l=_[e],l?l.p(d,m):(l=_[e]=h[e](d),l.c()),I(l,1),l.m(n.parentNode,n))},i(d){u||(I(l),u=!0)},o(d){y(l),u=!1},d(d){d&&T(n),_[e].d(d)}}}const de='input, li[role="option"]:not([aria-disabled="true"]), li[role="menuitem"]:not([aria-disabled="true"])';function Je(t,e,l){const n=["class","selected","destructive","disabled","href","description","centered","hoverable","newTab"];let u=G(e,n),h,_,{$$slots:r={},$$scope:d}=e,{class:m=""}=e,{selected:o=void 0}=e,{destructive:i=!1}=e,{disabled:L=!1}=e,{href:p=null}=e,{description:a=null}=e,{centered:f=!1}=e,{hoverable:M=!0}=e,{newTab:v=!1}=e;const{keepOpen:b,open:g}=_e(ne);J(t,b,s=>l(17,_=s)),J(t,g,s=>l(16,h=s));const C=me(),O=s=>{switch(s.key){case"Escape":j(g,h=!1,h);break;case"ArrowDown":case"ArrowRight":z(s.currentTarget);break;case"ArrowUp":case"ArrowLeft":D(s.currentTarget);break;case" ":case"Enter":C("click"),_||j(g,h=!1,h);break}},z=s=>{let E=s.nextElementSibling;for(;E&&!E.matches(de);)E=E.nextElementSibling;E&&E instanceof HTMLLIElement&&E.focus()},D=s=>{let E=s.previousElementSibling;for(;E&&!E.matches(de);)E=E.previousElementSibling;E&&E instanceof HTMLLIElement&&E.focus()},c=()=>{_||j(g,h=!1,h),C("click")};return t.$$set=s=>{e=A(A({},e),ee(s)),l(13,u=G(e,n)),"class"in s&&l(0,m=s.class),"selected"in s&&l(1,o=s.selected),"destructive"in s&&l(2,i=s.destructive),"disabled"in s&&l(3,L=s.disabled),"href"in s&&l(4,p=s.href),"description"in s&&l(5,a=s.description),"centered"in s&&l(6,f=s.centered),"hoverable"in s&&l(7,M=s.hoverable),"newTab"in s&&l(8,v=s.newTab),"$$scope"in s&&l(14,d=s.$$scope)},[m,o,i,L,p,a,f,M,v,b,g,O,c,u,d,r]}class lt extends le{constructor(e){super(),se(this,e,Je,Xe,$,{class:0,selected:1,destructive:2,disabled:3,href:4,description:5,centered:6,hoverable:7,newTab:8})}}const ke=t=>Array.from(t.querySelectorAll('[href], button, textarea, input, div[contentEditable="true"], select, [tabindex][tabindex="0"]')).filter(e=>!e.hasAttribute("disabled")&&e.getAttribute("tabindex")!=="-1"),st=(t,e)=>{let l,n;const u=m=>{m.key==="Tab"&&(m.shiftKey?document.activeElement===l&&(n.focus(),m.preventDefault()):document.activeElement===n&&(l.focus(),m.preventDefault()))},h=(m=!1)=>{if(e===!1)return;const o=ke(t);l=o[0],n=o[o.length-1],m||l==null||l.focus(),l==null||l.addEventListener("keydown",u),n==null||n.addEventListener("keydown",u)},_=()=>{l==null||l.removeEventListener("keydown",u),n==null||n.removeEventListener("keydown",u)},r=(m,o)=>(m.length&&(_(),h(!0)),o);return new MutationObserver(r).observe(t,{childList:!0,subtree:!0}),h(),{update(m){e=m,m?h():_()},destroy(){_()}}};function Qe(t){let e,l,n,u,h,_,r,d,m;const o=t[14].default,i=q(o,t,t[13],null);let L=[{role:"menu"},{class:l=N("menu","max-h-[20rem]",t[3],t[1])},{"aria-labelledby":t[2]},{tabindex:n=-1},{style:u=t[3]==="top-right"||t[3]==="top-left"?`top: -${t[4]+16}px;`:""},{id:t[2]},t[10]],p={};for(let a=0;a<L.length;a+=1)p=A(p,L[a]);return{c(){e=U("ul"),i&&i.c(),this.h()},l(a){e=H(a,"UL",{role:!0,class:!0,"aria-labelledby":!0,tabindex:!0,style:!0,id:!0});var f=V(e);i&&i.l(f),f.forEach(T),this.h()},h(){S(e,p),ie(()=>t[17].call(e)),k(e,"hidden",!t[5]),k(e,"svelte-1xapi5z",!0)},m(a,f){X(a,e,f),i&&i.m(e,null),t[16](e),h=Ie(e,t[17].bind(e)),r=!0,d||(m=[Q(e,"focusout",t[9]),Q(e,"click",te(t[15]))],d=!0)},p(a,[f]){i&&i.p&&(!r||f&8192)&&K(i,o,a,a[13],r?B(o,a[13],f,null):R(a[13]),null),S(e,p=w(L,[{role:"menu"},(!r||f&10&&l!==(l=N("menu","max-h-[20rem]",a[3],a[1])))&&{class:l},(!r||f&4)&&{"aria-labelledby":a[2]},{tabindex:n},(!r||f&24&&u!==(u=a[3]==="top-right"||a[3]==="top-left"?`top: -${a[4]+16}px;`:""))&&{style:u},(!r||f&4)&&{id:a[2]},f&1024&&a[10]])),k(e,"hidden",!a[5]),k(e,"svelte-1xapi5z",!0)},i(a){r||(I(i,a),a&&(_||ie(()=>{_=ze(e,Ue,{duration:100}),_.start()})),r=!0)},o(a){y(i,a),r=!1},d(a){a&&T(e),i&&i.d(a),t[16](null),h(),d=!1,he(m)}}}function We(t,e,l){let n,u;const h=["class","id","keepOpen","position","menuElement"];let _=G(e,h),r,d,m,{$$slots:o={},$$scope:i}=e,{class:L=""}=e,p=0,{id:a}=e,{keepOpen:f=!1}=e,{position:M="left"}=e,{menuElement:v=null}=e;const{keepOpen:b,menuElement:g,open:C}=_e(ne);J(t,b,s=>l(19,d=s)),J(t,g,s=>l(20,m=s)),J(t,C,s=>l(5,r=s));const O=s=>{!d&&s.target===u&&j(C,r=!1,r)};function z(s){ye.call(this,t,s)}function D(s){Ce[s?"unshift":"push"](()=>{v=s,l(0,v)})}function c(){p=this.clientHeight,l(4,p)}return t.$$set=s=>{e=A(A({},e),ee(s)),l(10,_=G(e,h)),"class"in s&&l(1,L=s.class),"id"in s&&l(2,a=s.id),"keepOpen"in s&&l(11,f=s.keepOpen),"position"in s&&l(3,M=s.position),"menuElement"in s&&l(0,v=s.menuElement),"$$scope"in s&&l(13,i=s.$$scope)},t.$$.update=()=>{t.$$.dirty&2048&&j(b,d=f,d),t.$$.dirty&1&&j(g,m=v,m),t.$$.dirty&1&&l(12,n=v?ke(v):[]),t.$$.dirty&4096&&(u=n[n.length-1])},[v,L,a,M,p,r,b,g,C,O,_,f,n,i,o,z,D,c]}class nt extends le{constructor(e){super(),se(this,e,We,Qe,$,{class:1,id:2,keepOpen:11,position:3,menuElement:0})}}export{tt as M,nt as a,lt as b,ne as c,de as d,He as e,st as f};