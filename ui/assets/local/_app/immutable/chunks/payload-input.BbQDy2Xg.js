import{s as F,h as S,b as V,j,k as q,f as k,d as A,m,i as D,p as J,t as M,l as O,H as N,n as y,v as z,q as G,M as K}from"./scheduler.C46pS-76.js";import{S as R,i as B,c as E,a as C,m as L,t as w,b as T,d as P,g as Q,e as W}from"./index.dOVbn71B.js";import{C as X}from"./code-block.BkCXXL0z.js";import{I as Y}from"./icon.CfkHLDdJ.js";import{t as I}from"./translate.BBe5dcco.js";import{t as Z,v as x}from"./toaster.D-OAJjvv.js";import{L as $}from"./label.BlTcUXFh.js";import{T as ee}from"./tooltip.D2lOlqUw.js";function te(a){let e,t,n,l,o,d,u;return t=new Y({props:{name:"upload"}}),{c(){e=S("label"),E(t.$$.fragment),n=V(),l=S("input"),this.h()},l(r){e=j(r,"LABEL",{for:!0,class:!0});var s=q(e);C(t.$$.fragment,s),s.forEach(k),n=A(r),l=j(r,"INPUT",{id:!0,class:!0,type:!0,accept:!0}),this.h()},h(){m(e,"for",a[0]),m(e,"class","file-upload-label svelte-nqh6y4"),m(l,"id",a[0]),m(l,"class","hidden"),m(l,"type","file"),m(l,"accept",a[1])},m(r,s){D(r,e,s),L(t,e,null),D(r,n,s),D(r,l,s),o=!0,d||(u=J(l,"change",a[2]),d=!0)},p(r,[s]){(!o||s&1)&&m(e,"for",r[0]),(!o||s&1)&&m(l,"id",r[0]),(!o||s&2)&&m(l,"accept",r[1])},i(r){o||(w(t.$$.fragment,r),o=!0)},o(r){T(t.$$.fragment,r),o=!1},d(r){r&&(k(e),k(n),k(l)),P(t),d=!1,u()}}}function ne(a,e,t){let{id:n}=e,{accept:l=".json"}=e,{onUpload:o}=e;const d=u=>{var r;const s=u.target,h=(r=s==null?void 0:s.files)===null||r===void 0?void 0:r[0],p=new FileReader;h&&(p.readAsText(h),p.onload=()=>{var b,i;try{const g=(i=(b=p==null?void 0:p.result)===null||b===void 0?void 0:b.toString())!==null&&i!==void 0?i:"";o(g)}catch{Z.push({variant:"error",message:I("common.upload-error")})}})};return a.$$set=u=>{"id"in u&&t(0,n=u.id),"accept"in u&&t(1,l=u.accept),"onUpload"in u&&t(3,o=u.onUpload)},[n,l,d,o]}class le extends R{constructor(e){super(),B(this,e,ne,te,F,{id:0,accept:1,onUpload:3})}}function H(a){let e,t;return e=new X({props:{id:a[3],maxHeight:320,content:a[0],editable:!0,copyable:!1}}),e.$on("change",a[6]),{c(){E(e.$$.fragment)},l(n){C(e.$$.fragment,n)},m(n,l){L(e,n,l),t=!0},p(n,l){const o={};l&8&&(o.id=n[3]),l&1&&(o.content=n[0]),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function ae(a){let e,t;return e=new le({props:{id:a[3]+"-input-file-upload",onUpload:a[7]}}),{c(){E(e.$$.fragment)},l(n){C(e.$$.fragment,n)},m(n,l){L(e,n,l),t=!0},p(n,l){const o={};l&8&&(o.id=n[3]+"-input-file-upload"),e.$set(o)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){T(e.$$.fragment,n),t=!1},d(n){P(e,n)}}}function oe(a){let e,t,n,l,o=a[2],d,u,r,s,h=(a[1]?I("common.input-valid-json"):a[5])+"",p,b,i,g;t=new $({props:{for:a[3],label:a[4]}});let _=H(a);return u=new ee({props:{text:I("common.upload-json"),topRight:!0,$$slots:{default:[ae]},$$scope:{ctx:a}}}),{c(){e=S("div"),E(t.$$.fragment),n=V(),l=S("div"),_.c(),d=V(),E(u.$$.fragment),r=V(),s=S("span"),p=M(h),this.h()},l(f){e=j(f,"DIV",{class:!0});var c=q(e);C(t.$$.fragment,c),n=A(c),l=j(c,"DIV",{class:!0});var v=q(l);_.l(v),d=A(v),C(u.$$.fragment,v),v.forEach(k),r=A(c),s=j(c,"SPAN",{class:!0,role:!0});var U=q(s);p=O(U,h),U.forEach(k),c.forEach(k),this.h()},h(){m(l,"class","flex gap-2"),m(s,"class",b="text-xs "+(a[1]?"text-danger":"text-primary")+" inline-block"),m(s,"role",i=a[1]?"alert":null),N(s,"hidden",!a[5]&&!a[1]),m(e,"class","flex flex-col gap-2")},m(f,c){D(f,e,c),L(t,e,null),y(e,n),y(e,l),_.m(l,null),y(l,d),L(u,l,null),y(e,r),y(e,s),y(s,p),g=!0},p(f,[c]){const v={};c&8&&(v.for=f[3]),c&16&&(v.label=f[4]),t.$set(v),c&4&&F(o,o=f[2])?(Q(),T(_,1,1,z),W(),_=H(f),_.c(),w(_,1),_.m(l,d)):_.p(f,c);const U={};c&1032&&(U.$$scope={dirty:c,ctx:f}),u.$set(U),(!g||c&34)&&h!==(h=(f[1]?I("common.input-valid-json"):f[5])+"")&&G(p,h),(!g||c&2&&b!==(b="text-xs "+(f[1]?"text-danger":"text-primary")+" inline-block"))&&m(s,"class",b),(!g||c&2&&i!==(i=f[1]?"alert":null))&&m(s,"role",i),(!g||c&34)&&N(s,"hidden",!f[5]&&!f[1])},i(f){g||(w(t.$$.fragment,f),w(_),w(u.$$.fragment,f),g=!0)},o(f){T(t.$$.fragment,f),T(_),T(u.$$.fragment,f),g=!1},d(f){f&&k(e),P(t),_.d(f),P(u)}}}function re(a,e,t){let{id:n=x()}=e,{error:l=!1}=e,{input:o}=e,{label:d=I("workflows.signal-payload-input-label")}=e,{loading:u=!1}=e,{hintText:r=I("workflows.signal-payload-input-label-hint")}=e;const s=i=>{if(!o)return!0;try{return JSON.parse(i),!0}catch{return!1}},h=i=>{t(0,o=i.detail)},p=()=>{t(0,o=""),t(2,u=!1)},b=i=>{t(0,o=i)};return K(p),a.$$set=i=>{"id"in i&&t(3,n=i.id),"error"in i&&t(1,l=i.error),"input"in i&&t(0,o=i.input),"label"in i&&t(4,d=i.label),"loading"in i&&t(2,u=i.loading),"hintText"in i&&t(5,r=i.hintText)},a.$$.update=()=>{a.$$.dirty&1&&t(1,l=!s(o))},[o,l,u,n,d,r,h,b]}class ge extends R{constructor(e){super(),B(this,e,re,oe,F,{id:3,error:1,input:0,label:4,loading:2,hintText:5})}}export{ge as P};