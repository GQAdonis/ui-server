import{S as q,i as z,s as A,x as O,a as y,l as _,r as E,y as H,c as x,m as $,n as b,u as C,h as l,p as d,z as B,b as S,N as c,f as D,t as F,C as L,O as T,F as U}from"../../chunks/index-89809c17.js";import{f as G}from"../../chunks/settings-service-c12ec577.js";import{p as j,s as J}from"../../chunks/route-for-06e4a074.js";import{B as K}from"../../chunks/button-9debcf20.js";import{p as M}from"../../chunks/stores-5080fd27.js";import{g as Q}from"../../chunks/navigation-fbe70647.js";import{N as R,H as X}from"../../chunks/hamburger-header-83f43014.js";import"../../chunks/settings-82191e74.js";import"../../chunks/index-850385bc.js";import"../../chunks/route-for-api-94236392.js";import"../../chunks/auth-user-33df49d8.js";import"../../chunks/persist-store-154b32b6.js";import"../../chunks/parse-with-big-int-561ccb8b.js";import"../../chunks/notifications-db2d60e4.js";import"../../chunks/is-network-error-5f9e2367.js";import"../../chunks/icon-356cfdd5.js";import"../../chunks/badge-6c7ef4f8.js";import"../../chunks/singletons-eca981c1.js";import"../../chunks/has-c7a26a56.js";import"../../chunks/is-44021919.js";import"../../chunks/data-encoder-status-1667a092.js";import"../../chunks/data-converter-config-5900b361.js";import"../../chunks/is-http-438aed2e.js";import"../../chunks/tooltip-dce2bbb6.js";import"../../chunks/copy-to-clipboard-90539b90.js";import"../../chunks/modal-3804484b.js";import"../../chunks/checkbox-dd0154c5.js";import"../../chunks/index-2cacf65d.js";function Y(n){let e;return{c(){e=E("Continue to SSO")},l(s){e=C(s,"Continue to SSO")},m(s,a){S(s,e,a)},d(s){s&&l(e)}}}function Z(n){let e,s,a;return{c(){e=_("div"),s=_("p"),a=E(n[2]),this.h()},l(i){e=$(i,"DIV",{class:!0});var r=b(e);s=$(r,"P",{class:!0});var m=b(s);a=C(m,n[2]),m.forEach(l),r.forEach(l),this.h()},h(){d(s,"class","rounded-md border-2 border-orange-500 bg-orange-100 p-5 text-center"),d(e,"class","my-12 flex flex-col items-center justify-start gap-2")},m(i,r){S(i,e,r),c(e,s),c(s,a)},p:U,d(i){i&&l(e)}}}function tt(n){let e,s,a,i,r,m,u,P,g,w,I,h,p,N,k;e=new R({props:{href:j+"/",user:void 0}}),a=new X({props:{href:j+"/",user:void 0}}),p=new K({props:{dataCy:"login-button",variant:"login",icon:"lock",$$slots:{default:[Y]},$$scope:{ctx:n}}}),p.$on("click",n[3]);let f=n[2]&&Z(n);return{c(){O(e.$$.fragment),s=y(),O(a.$$.fragment),i=y(),r=_("section"),m=_("h1"),u=E("Welcome back."),P=y(),g=_("p"),w=E("Let's get you signed in."),I=y(),h=_("div"),O(p.$$.fragment),N=y(),f&&f.c(),this.h()},l(t){H(e.$$.fragment,t),s=x(t),H(a.$$.fragment,t),i=x(t),r=$(t,"SECTION",{class:!0});var o=b(r);m=$(o,"H1",{class:!0,"data-cy":!0});var v=b(m);u=C(v,"Welcome back."),v.forEach(l),P=x(o),g=$(o,"P",{class:!0,"data-cy":!0});var V=b(g);w=C(V,"Let's get you signed in."),V.forEach(l),I=x(o),h=$(o,"DIV",{class:!0});var W=b(h);H(p.$$.fragment,W),W.forEach(l),N=x(o),f&&f.l(o),o.forEach(l),this.h()},h(){d(m,"class","text-8xl font-semibold"),d(m,"data-cy","login-title"),d(g,"class","my-7"),d(g,"data-cy","login-info"),d(h,"class","mx-auto"),d(r,"class","my-[20vh] text-center")},m(t,o){B(e,t,o),S(t,s,o),B(a,t,o),S(t,i,o),S(t,r,o),c(r,m),c(m,u),c(r,P),c(r,g),c(g,w),c(r,I),c(r,h),B(p,h,null),c(r,N),f&&f.m(r,null),k=!0},p(t,[o]){const v={};o&16&&(v.$$scope={dirty:o,ctx:t}),p.$set(v),t[2]&&f.p(t,o)},i(t){k||(D(e.$$.fragment,t),D(a.$$.fragment,t),D(p.$$.fragment,t),k=!0)},o(t){F(e.$$.fragment,t),F(a.$$.fragment,t),F(p.$$.fragment,t),k=!1},d(t){L(e,t),t&&l(s),L(a,t),t&&l(i),t&&l(r),L(p),f&&f.d()}}}const Nt=async function({fetch:n}){const e=await G(n);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function et(n,e,s){let a;T(n,M,u=>s(1,a=u));const i=a.url.searchParams.get("error");let{settings:r}=e;const m=()=>{Q(J({settings:r,searchParams:a.url.searchParams,originUrl:a.url.origin}))};return n.$$set=u=>{"settings"in u&&s(0,r=u.settings)},[r,a,i,m]}class Ot extends q{constructor(e){super(),z(this,e,et,tt,A,{settings:0})}}export{Ot as default,Nt as load};