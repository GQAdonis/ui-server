import{s as p,z as S,A as B,h as z,b as M,j as E,k as N,d as I,f as g,m as V,i as D,n as F,B as G,t as H,l as J,q as K,a as O,u as P,g as Q,e as R}from"./scheduler.BTg3iwM1.js";import{S as T,i as U,c as h,a as k,m as A,t as m,b as d,d as C,g as W,e as X}from"./index.64bqrcBm.js";import{B as Y}from"./button.EngHgjgv.js";import{I as Z}from"./icon.BfjNqDoE.js";import{M as v}from"./menu-button.W2Kq0Qhw.js";import{M as y,a as w}from"./menu.FtD1kcpN.js";function q(i){let e,a;return e=new Z({props:{name:i[2]}}),{c(){h(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,n){A(e,t,n),a=!0},p(t,n){const l={};n&4&&(l.name=t[2]),e.$set(l)},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){d(e.$$.fragment,t),a=!1},d(t){C(e,t)}}}function $(i){let e,a,t,n=i[2]&&q(i);return{c(){n&&n.c(),e=M(),a=H(i[0])},l(l){n&&n.l(l),e=I(l),a=J(l,i[0])},m(l,o){n&&n.m(l,o),D(l,e,o),D(l,a,o),t=!0},p(l,o){l[2]?n?(n.p(l,o),o&4&&m(n,1)):(n=q(l),n.c(),m(n,1),n.m(e.parentNode,e)):n&&(W(),d(n,1,1,()=>{n=null}),X()),(!t||o&1)&&K(a,l[0])},i(l){t||(m(n),t=!0)},o(l){d(n),t=!1},d(l){l&&(g(e),g(a)),n&&n.d(l)}}}function x(i){let e;const a=i[10].default,t=O(a,i,i[12],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,l){t&&t.m(n,l),e=!0},p(n,l){t&&t.p&&(!e||l&4096)&&P(t,a,n,n[12],e?R(a,n[12],l,null):Q(n[12]),null)},i(n){e||(m(t,n),e=!0)},o(n){d(t,n),e=!1},d(n){t&&t.d(n)}}}function ee(i){let e,a,t,n,l,o,_;return a=new Y({props:{disabled:i[4]||i[6],id:i[3]+"-primary-button",href:i[7],$$slots:{default:[$]},$$scope:{ctx:i}}}),a.$on("click",i[11]),n=new v({props:{class:"max-w-fit grow-0 px-3",id:i[3]+"-menu-button",label:i[1],controls:i[3]+"-menu",variant:"primary",disabled:i[4],hasIndicator:!0}}),o=new w({props:{id:i[3]+"-menu",position:i[5],class:i[8],$$slots:{default:[x]},$$scope:{ctx:i}}}),{c(){e=z("div"),h(a.$$.fragment),t=M(),h(n.$$.fragment),l=M(),h(o.$$.fragment),this.h()},l(s){e=E(s,"DIV",{class:!0});var f=N(e);k(a.$$.fragment,f),t=I(f),k(n.$$.fragment,f),f.forEach(g),l=I(s),k(o.$$.fragment,s),this.h()},h(){V(e,"class","button-group flex h-10 cursor-pointer flex-row gap-[1px]")},m(s,f){D(s,e,f),A(a,e,null),F(e,t),A(n,e,null),D(s,l,f),A(o,s,f),_=!0},p(s,f){const r={};f&80&&(r.disabled=s[4]||s[6]),f&8&&(r.id=s[3]+"-primary-button"),f&128&&(r.href=s[7]),f&4101&&(r.$$scope={dirty:f,ctx:s}),a.$set(r);const c={};f&8&&(c.id=s[3]+"-menu-button"),f&2&&(c.label=s[1]),f&8&&(c.controls=s[3]+"-menu"),f&16&&(c.disabled=s[4]),n.$set(c);const b={};f&8&&(b.id=s[3]+"-menu"),f&32&&(b.position=s[5]),f&256&&(b.class=s[8]),f&4096&&(b.$$scope={dirty:f,ctx:s}),o.$set(b)},i(s){_||(m(a.$$.fragment,s),m(n.$$.fragment,s),m(o.$$.fragment,s),_=!0)},o(s){d(a.$$.fragment,s),d(n.$$.fragment,s),d(o.$$.fragment,s),_=!1},d(s){s&&(g(e),g(l)),C(a),C(n),C(o,s)}}}function ne(i){let e,a;return e=new y({props:{class:i[9].class,$$slots:{default:[ee]},$$scope:{ctx:i}}}),{c(){h(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,n){A(e,t,n),a=!0},p(t,[n]){const l={};n&512&&(l.class=t[9].class),n&4607&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){d(e.$$.fragment,t),a=!1},d(t){C(e,t)}}}function te(i,e,a){let{$$slots:t={},$$scope:n}=e,{label:l}=e,{menuLabel:o}=e,{icon:_=void 0}=e,{id:s}=e,{disabled:f=!1}=e,{position:r="left"}=e,{primaryActionDisabled:c=!1}=e,{href:b=void 0}=e,{menuClass:L=void 0}=e;function j(u){G.call(this,i,u)}return i.$$set=u=>{a(9,e=S(S({},e),B(u))),"label"in u&&a(0,l=u.label),"menuLabel"in u&&a(1,o=u.menuLabel),"icon"in u&&a(2,_=u.icon),"id"in u&&a(3,s=u.id),"disabled"in u&&a(4,f=u.disabled),"position"in u&&a(5,r=u.position),"primaryActionDisabled"in u&&a(6,c=u.primaryActionDisabled),"href"in u&&a(7,b=u.href),"menuClass"in u&&a(8,L=u.menuClass),"$$scope"in u&&a(12,n=u.$$scope)},e=B(e),[l,o,_,s,f,r,c,b,L,e,t,j,n]}class oe extends T{constructor(e){super(),U(this,e,te,ne,p,{label:0,menuLabel:1,icon:2,id:3,disabled:4,position:5,primaryActionDisabled:6,href:7,menuClass:8})}}export{oe as S};