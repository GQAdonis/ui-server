import{s as K,a as M,z as q,h as N,b as C,j as P,k as B,d as D,f as A,E,H as k,i as H,n as I,p as G,F as J,u as O,g as Q,e as R,D as S,A as U,t as V,l as W,q as X}from"./scheduler.DugrFyli.js";import{S as Y,i as Z,t as v,g as y,b as L,e as p,c as w,a as x,m as $,d as ee}from"./index.CckufFjv.js";import{g as le}from"./spread.CgU5AtxT.js";import{g as te}from"./entry.QkZ30Ipd.js";import{I as ae}from"./icon.D3cq7Qro.js";import{t as j}from"./tw-merge.Ds6tgvmq.js";function z(a){let e,t;return e=new ae({props:{class:"mt-0.5",name:a[4]}}),{c(){w(e.$$.fragment)},l(n){x(e.$$.fragment,n)},m(n,c){$(e,n,c),t=!0},p(n,c){const m={};c&16&&(m.name=n[4]),e.$set(m)},i(n){t||(v(e.$$.fragment,n),t=!0)},o(n){L(e.$$.fragment,n),t=!1},d(n){ee(e,n)}}}function F(a){let e;return{c(){e=V(a[5])},l(t){e=W(t,a[5])},m(t,n){H(t,e,n)},p(t,n){n&32&&X(e,t[5])},d(t){t&&A(e)}}}function se(a){let e,t,n,c,m,_,g,o,h,b,i=a[4]&&z(a),r=a[5]&&F(a);const d=a[10].default,u=M(d,a,a[9],null);let s=[{href:a[1]},{target:c=a[3]?"_blank":null},{rel:m=a[3]?"noreferrer":null},{class:_=j("link",a[4]?"inline-flex":"inline",a[0])},{tabindex:g=a[1]?null:0},a[8]],T={};for(let l=0;l<s.length;l+=1)T=q(T,s[l]);return{c(){e=N("a"),i&&i.c(),t=C(),r&&r.c(),n=C(),u&&u.c(),this.h()},l(l){e=P(l,"A",{href:!0,target:!0,rel:!0,class:!0,tabindex:!0});var f=B(e);i&&i.l(f),t=D(f),r&&r.l(f),n=D(f),u&&u.l(f),f.forEach(A),this.h()},h(){E(e,T),k(e,"active",a[2]),k(e,"light",a[6]),k(e,"svelte-99rel4",!0)},m(l,f){H(l,e,f),i&&i.m(e,null),I(e,t),r&&r.m(e,null),I(e,n),u&&u.m(e,null),o=!0,h||(b=G(e,"click",J(a[7])),h=!0)},p(l,[f]){l[4]?i?(i.p(l,f),f&16&&v(i,1)):(i=z(l),i.c(),v(i,1),i.m(e,t)):i&&(y(),L(i,1,1,()=>{i=null}),p()),l[5]?r?r.p(l,f):(r=F(l),r.c(),r.m(e,n)):r&&(r.d(1),r=null),u&&u.p&&(!o||f&512)&&O(u,d,l,l[9],o?R(d,l[9],f,null):Q(l[9]),null),E(e,T=le(s,[(!o||f&2)&&{href:l[1]},(!o||f&8&&c!==(c=l[3]?"_blank":null))&&{target:c},(!o||f&8&&m!==(m=l[3]?"noreferrer":null))&&{rel:m},(!o||f&17&&_!==(_=j("link",l[4]?"inline-flex":"inline",l[0])))&&{class:_},(!o||f&2&&g!==(g=l[1]?null:0))&&{tabindex:g},f&256&&l[8]])),k(e,"active",l[2]),k(e,"light",l[6]),k(e,"svelte-99rel4",!0)},i(l){o||(v(i),v(u,l),o=!0)},o(l){L(i),L(u,l),o=!1},d(l){l&&A(e),i&&i.d(),r&&r.d(),u&&u.d(l),h=!1,b()}}}function ne(a,e,t){const n=["class","href","active","newTab","icon","text","light"];let c=S(e,n),{$$slots:m={},$$scope:_}=e,{class:g=""}=e,{href:o}=e,{active:h=!1}=e,{newTab:b=!1}=e,{icon:i=null}=e,{text:r=""}=e,{light:d=!1}=e;const u=s=>{s.button===1||b||s.metaKey||(s.preventDefault(),te(o))};return a.$$set=s=>{e=q(q({},e),U(s)),t(8,c=S(e,n)),"class"in s&&t(0,g=s.class),"href"in s&&t(1,o=s.href),"active"in s&&t(2,h=s.active),"newTab"in s&&t(3,b=s.newTab),"icon"in s&&t(4,i=s.icon),"text"in s&&t(5,r=s.text),"light"in s&&t(6,d=s.light),"$$scope"in s&&t(9,_=s.$$scope)},[g,o,h,b,i,r,d,u,c,_,m]}class me extends Y{constructor(e){super(),Z(this,e,ne,se,K,{class:0,href:1,active:2,newTab:3,icon:4,text:5,light:6})}}export{me as L};