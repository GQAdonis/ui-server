import{S as A,i as D,s as F,w as C,a as _,l as h,r as P,x as N,c as d,m as b,n as v,u as L,h as c,p as x,y as B,b as y,M as l,f as H,t as I,B as O,N as M}from"../../chunks/index-f283717a.js";import{f as T}from"../../chunks/settings-service-10fe1310.js";import{p as U}from"../../chunks/route-for-b2ab8caf.js";import{B as V}from"../../chunks/button-397b3a8c.js";import{p as j}from"../../chunks/stores-62bcca1c.js";import{g as z}from"../../chunks/navigation-fbe70647.js";import{N as G,H as J}from"../../chunks/hamburger-header-898507f5.js";import"../../chunks/settings-16907be6.js";import"../../chunks/index-5dff130b.js";import"../../chunks/get-api-origin-8c29353d.js";import"../../chunks/route-for-api-b2e8e01b.js";import"../../chunks/notifications-dddf88f8.js";import"../../chunks/is-network-error-5f9e2367.js";import"../../chunks/is-function-45497f08.js";import"../../chunks/get-public-path-76d5b50d.js";import"../../chunks/icon-c6a60499.js";import"../../chunks/badge-46845e47.js";/* empty css                                                        */import"../../chunks/singletons-eca981c1.js";import"../../chunks/has-ae9b6b71.js";import"../../chunks/is-6159121b.js";import"../../chunks/data-encoder-status-f4dae9cc.js";import"../../chunks/data-converter-config-49e426af.js";import"../../chunks/persist-store-c4deb1a0.js";import"../../chunks/is-http-d28111f6.js";import"../../chunks/tooltip-558f0bf8.js";import"../../chunks/copyable-ddc34383.js";import"../../chunks/copy-to-clipboard-c6080acc.js";import"../../chunks/modal-90d17380.js";import"../../chunks/index-cf7c7b94.js";function K(i){let e;return{c(){e=P("Continue to SSO")},l(o){e=L(o,"Continue to SSO")},m(o,s){y(o,e,s)},d(o){o&&c(e)}}}function Q(i){let e,o,s,p,n,a,S,k,f,w,E,u,m,g;return e=new G({props:{href:"/",user:{}}}),s=new J({props:{href:"/",user:{}}}),m=new V({props:{variant:"login",icon:"lock",$$slots:{default:[K]},$$scope:{ctx:i}}}),m.$on("click",i[2]),{c(){C(e.$$.fragment),o=_(),C(s.$$.fragment),p=_(),n=h("section"),a=h("h1"),S=P("Welcome back."),k=_(),f=h("p"),w=P("Let's get you signed in."),E=_(),u=h("div"),C(m.$$.fragment),this.h()},l(t){N(e.$$.fragment,t),o=d(t),N(s.$$.fragment,t),p=d(t),n=b(t,"SECTION",{class:!0});var r=v(n);a=b(r,"H1",{class:!0});var $=v(a);S=L($,"Welcome back."),$.forEach(c),k=d(r),f=b(r,"P",{class:!0});var W=v(f);w=L(W,"Let's get you signed in."),W.forEach(c),E=d(r),u=b(r,"DIV",{class:!0});var q=v(u);N(m.$$.fragment,q),q.forEach(c),r.forEach(c),this.h()},h(){x(a,"class","text-8xl font-semibold"),x(f,"class","my-7"),x(u,"class","mx-auto"),x(n,"class","my-[20vh] text-center")},m(t,r){B(e,t,r),y(t,o,r),B(s,t,r),y(t,p,r),y(t,n,r),l(n,a),l(a,S),l(n,k),l(n,f),l(f,w),l(n,E),l(n,u),B(m,u,null),g=!0},p(t,[r]){const $={};r&8&&($.$$scope={dirty:r,ctx:t}),m.$set($)},i(t){g||(H(e.$$.fragment,t),H(s.$$.fragment,t),H(m.$$.fragment,t),g=!0)},o(t){I(e.$$.fragment,t),I(s.$$.fragment,t),I(m.$$.fragment,t),g=!1},d(t){O(e,t),t&&c(o),O(s,t),t&&c(p),t&&c(n),O(m)}}}const Ct=async function({fetch:i}){const e=await T(i);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function R(i,e,o){let s;M(i,j,a=>o(1,s=a));let{settings:p}=e;const n=()=>{z(U({settings:p,searchParams:s.url.searchParams,originUrl:s.url.origin}))};return i.$$set=a=>{"settings"in a&&o(0,p=a.settings)},[p,s,n]}class Nt extends A{constructor(e){super(),D(this,e,R,Q,F,{settings:0})}}export{Nt as default,Ct as load};