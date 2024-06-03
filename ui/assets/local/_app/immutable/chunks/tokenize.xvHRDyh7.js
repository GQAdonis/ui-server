import{s as H,x as O,k as w,g as h,c as R,e as S,a as X,b as j,d as C,h as Z,j as b,Y as Q,l as x,m as k,F as y,a0 as p,v as T,G as $,H as E,a1 as ee}from"./scheduler.AWtTlMeO.js";import{S as te,i as le,t as m,g as I,b as _,e as g,c as M,a as W,m as Y,d as J}from"./index.91lpp7Ff.js";import{I as K}from"./icon.hlu3-iXK.js";import{c as ie}from"./copy-to-clipboard.DsLGuhkA.js";import{t as P}from"./tw-merge.NbP7EmZe.js";import{b as U,c as ne,d,e as oe,f as V,g as ce}from"./has.-dFYEuQV.js";function z(s){let e,n,t,l,a,o,i=s[1]&&A(s),c=s[2]&&G(s);return{c(){e=S("div"),i&&i.c(),n=X(),c&&c.c(),this.h()},l(r){e=j(r,"DIV",{class:!0});var u=C(e);i&&i.l(u),n=Z(u),c&&c.l(u),u.forEach(h),this.h()},h(){b(e,"class",t=Q(P("copy-or-filter",s[9]))+" svelte-qwjj97")},m(r,u){w(r,e,u),i&&i.m(e,null),x(e,n),c&&c.m(e,null),l=!0,a||(o=[k(e,"click",y(p(T))),k(e,"keyup",y(p(T)))],a=!0)},p(r,u){r[1]?i?(i.p(r,u),u&2&&m(i,1)):(i=A(r),i.c(),m(i,1),i.m(e,n)):i&&(I(),_(i,1,1,()=>{i=null}),g()),r[2]?c?(c.p(r,u),u&4&&m(c,1)):(c=G(r),c.c(),m(c,1),c.m(e,null)):c&&(I(),_(c,1,1,()=>{c=null}),g()),(!l||u&512&&t!==(t=Q(P("copy-or-filter",r[9]))+" svelte-qwjj97"))&&b(e,"class",t)},i(r){l||(m(i),m(c),l=!0)},o(r){_(i),_(c),l=!1},d(r){r&&h(e),i&&i.d(),c&&c.d(),a=!1,$(o)}}}function A(s){let e,n=s[5],t,l,a,o=D(s);return{c(){e=S("button"),o.c(),this.h()},l(i){e=j(i,"BUTTON",{class:!0,id:!0});var c=C(e);o.l(c),c.forEach(h),this.h()},h(){b(e,"class","copy-or-filter-button svelte-qwjj97"),b(e,"id","filter-button"),E(e,"filtered",s[5])},m(i,c){w(i,e,c),o.m(e,null),t=!0,l||(a=k(e,"click",y(p(function(){ee(s[4])&&s[4].apply(this,arguments)}))),l=!0)},p(i,c){s=i,c&32&&H(n,n=s[5])?(I(),_(o,1,1,T),g(),o=D(s),o.c(),m(o,1),o.m(e,null)):o.p(s,c),(!t||c&32)&&E(e,"filtered",s[5])},i(i){t||(m(o),t=!0)},o(i){_(o),t=!1},d(i){i&&h(e),o.d(i),l=!1,a()}}}function D(s){let e,n;return e=new K({props:{title:s[8],name:"filter",class:"m-1"}}),{c(){M(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,l){Y(e,t,l),n=!0},p(t,l){const a={};l&256&&(a.title=t[8]),e.$set(a)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function G(s){let e,n,t,l,a;return n=new K({props:{title:s[10]?s[7]:s[6],name:s[10]?"checkmark":"copy",class:"m-1"}}),{c(){e=S("button"),M(n.$$.fragment),this.h()},l(o){e=j(o,"BUTTON",{class:!0,id:!0});var i=C(e);W(n.$$.fragment,i),i.forEach(h),this.h()},h(){b(e,"class","copy-or-filter-button svelte-qwjj97"),b(e,"id","copy-button")},m(o,i){w(o,e,i),Y(n,e,null),t=!0,l||(a=k(e,"click",y(p(s[13]))),l=!0)},p(o,i){const c={};i&1216&&(c.title=o[10]?o[7]:o[6]),i&1024&&(c.name=o[10]?"checkmark":"copy"),n.$set(c)},i(o){t||(m(n.$$.fragment,o),t=!0)},o(o){_(n.$$.fragment,o),t=!1},d(o){o&&h(e),J(n),l=!1,a()}}}function se(s){let e,n,t=s[0]&&z(s);return{c(){t&&t.c(),e=O()},l(l){t&&t.l(l),e=O()},m(l,a){t&&t.m(l,a),w(l,e,a),n=!0},p(l,[a]){l[0]?t?(t.p(l,a),a&1&&m(t,1)):(t=z(l),t.c(),m(t,1),t.m(e.parentNode,e)):t&&(I(),_(t,1,1,()=>{t=null}),g())},i(l){n||(m(t),n=!0)},o(l){_(t),n=!1},d(l){l&&h(e),t&&t.d(l)}}}function ae(s,e,n){let t,{show:l=!1}=e,{filterable:a=!0}=e,{copyable:o=!0}=e,{content:i}=e,{onFilter:c=T}=e,{filtered:r=!1}=e,{copyIconTitle:u}=e,{copySuccessIconTitle:F}=e,{filterIconTitle:v}=e,{class:q=""}=e;const{copy:B,copied:N}=ie();R(s,N,f=>n(10,t=f));const L=f=>B(f,i);return s.$$set=f=>{"show"in f&&n(0,l=f.show),"filterable"in f&&n(1,a=f.filterable),"copyable"in f&&n(2,o=f.copyable),"content"in f&&n(3,i=f.content),"onFilter"in f&&n(4,c=f.onFilter),"filtered"in f&&n(5,r=f.filtered),"copyIconTitle"in f&&n(6,u=f.copyIconTitle),"copySuccessIconTitle"in f&&n(7,F=f.copySuccessIconTitle),"filterIconTitle"in f&&n(8,v=f.filterIconTitle),"class"in f&&n(9,q=f.class)},[l,a,o,i,c,r,u,F,v,q,t,B,N,L]}class be extends te{constructor(e){super(),le(this,e,ae,se,H,{show:0,filterable:1,copyable:2,content:3,onFilter:4,filtered:5,copyIconTitle:6,copySuccessIconTitle:7,filterIconTitle:8,class:9})}}const de=s=>{const e=[],n=()=>{t&&(e.push(t),t="")};let t="",l=0;const a=o=>{for(let i=l+1;i<s.length;i++){const c=s[i];if(o(c)){n(),l=i+1;return}t+=c}l++};for(;l<s.length;){const o=s[l];if(U(o)){const i=l===0||V(s[l-1])&&ce(e[e.length-1]),c=s.slice(l+1).includes(o);if(i&&c){n(),a(U);continue}}if(ne(o)){t+=o,n(),l++;continue}if(d(o)){const i=`${s[l]}${s[l+1]}`,c=`${s[l]}${s[l+1]}${s[l+2]}`;if(d(c)){n(),t+=c,l+=3;continue}else if(d(i)){n(),t+=i,l+=2;continue}else{n(),t+=o,l++;continue}}if(oe(o)){n();const i=d(s[l-1]),c=s.slice(l+1).includes(o);if(i&&c){a(u=>u===o);continue}l++;continue}if(V(o)){n(),l++;continue}t+=o,l++}return n(),e};export{be as F,de as t};