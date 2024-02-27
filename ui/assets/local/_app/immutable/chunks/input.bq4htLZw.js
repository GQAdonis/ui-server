import{s as Te,A as te,e as T,t as Q,a as z,b as D,d as V,f as Y,g as B,h as J,j as g,B as c,C as fe,V as se,k as O,l as E,W as ce,m as P,D as de,X as De,n as w,E as Fe,F as he,o as Ne,c as Re,G as Ve,H as K,v as Ae}from"./scheduler.1-F21fJx.js";import{S as He,i as Pe,t as R,g as ie,b as A,e as ue,c as x,a as $,m as ee,d as le}from"./index.biMfyfPX.js";import{t as me,g as Se}from"./tw-merge.k1eX69SP.js";import{I as ne}from"./icon.V_dxC4Sf.js";import{c as Ue}from"./copy-to-clipboard.HaFHipzR.js";import{I as je}from"./icon-button.Ev7OWlpO.js";function be(a){let e,l,t;return l=new ne({props:{name:a[5]}}),{c(){e=T("span"),x(l.$$.fragment),this.h()},l(i){e=D(i,"SPAN",{class:!0});var o=V(e);$(l.$$.fragment,o),o.forEach(B),this.h()},h(){g(e,"class","icon-container svelte-usoxfr")},m(i,o){O(i,e,o),ee(l,e,null),t=!0},p(i,o){const h={};o[0]&32&&(h.name=i[5]),l.$set(h)},i(i){t||(R(l.$$.fragment,i),t=!0)},o(i){A(l.$$.fragment,i),t=!1},d(i){i&&B(e),le(l)}}}function Ge(a){let e,l,t;return l=new je({props:{label:a[23],icon:"close"}}),l.$on("click",a[27]),{c(){e=T("div"),x(l.$$.fragment),this.h()},l(i){e=D(i,"DIV",{class:!0,"data-testid":!0});var o=V(e);$(l.$$.fragment,o),o.forEach(B),this.h()},h(){g(e,"class","clear-icon-container svelte-usoxfr"),g(e,"data-testid","clear-input")},m(i,o){O(i,e,o),ee(l,e,null),t=!0},p(i,o){const h={};o[0]&8388608&&(h.label=i[23]),l.$set(h)},i(i){t||(R(l.$$.fragment,i),t=!0)},o(i){A(l.$$.fragment,i),t=!1},d(i){i&&B(e),le(l)}}}function Me(a){let e,l,t;return l=new ne({props:{name:"lock"}}),{c(){e=T("div"),x(l.$$.fragment),this.h()},l(i){e=D(i,"DIV",{class:!0});var o=V(e);$(l.$$.fragment,o),o.forEach(B),this.h()},h(){g(e,"class","disabled-icon-container svelte-usoxfr")},m(i,o){O(i,e,o),ee(l,e,null),t=!0},p:Ae,i(i){t||(R(l.$$.fragment,i),t=!0)},o(i){A(l.$$.fragment,i),t=!1},d(i){i&&B(e),le(l)}}}function Oe(a){let e,l,t,i,o,h,r;const m=[Xe,We],I=[];function _(s,q){return s[25]?0:1}return t=_(a),i=I[t]=m[t](a),{c(){e=T("div"),l=T("button"),i.c(),this.h()},l(s){e=D(s,"DIV",{class:!0});var q=V(e);l=D(q,"BUTTON",{"aria-label":!0,class:!0});var C=V(l);i.l(C),C.forEach(B),q.forEach(B),this.h()},h(){g(l,"aria-label",a[22]),g(l,"class","svelte-usoxfr"),g(e,"class","copy-icon-container svelte-usoxfr")},m(s,q){O(s,e,q),E(e,l),I[t].m(l,null),o=!0,h||(r=P(l,"click",a[39]),h=!0)},p(s,q){let C=t;t=_(s),t!==C&&(ie(),A(I[C],1,1,()=>{I[C]=null}),ue(),i=I[t],i||(i=I[t]=m[t](s),i.c()),R(i,1),i.m(l,null)),(!o||q[0]&4194304)&&g(l,"aria-label",s[22])},i(s){o||(R(i),o=!0)},o(s){A(i),o=!1},d(s){s&&B(e),I[t].d(),h=!1,r()}}}function We(a){let e,l;return e=new ne({props:{name:"copy"}}),{c(){x(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){ee(e,t,i),l=!0},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function Xe(a){let e,l;return e=new ne({props:{name:"checkmark"}}),{c(){x(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,i){ee(e,t,i),l=!0},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function _e(a){let e,l,t=a[1].length+"",i,o,h;return{c(){e=T("span"),l=T("span"),i=Q(t),o=Q("/"),h=Q(a[14]),this.h()},l(r){e=D(r,"SPAN",{class:!0});var m=V(e);l=D(m,"SPAN",{class:!0});var I=V(l);i=Y(I,t),I.forEach(B),o=Y(m,"/"),h=Y(m,a[14]),m.forEach(B),this.h()},h(){g(l,"class","svelte-usoxfr"),c(l,"ok",a[14]-a[1].length>5),c(l,"warn",a[14]-a[1].length<=5),c(l,"error",a[14]===a[1].length),g(e,"class","count svelte-usoxfr")},m(r,m){O(r,e,m),E(e,l),E(l,i),E(e,o),E(e,h)},p(r,m){m[0]&2&&t!==(t=r[1].length+"")&&w(i,t),m[0]&16386&&c(l,"ok",r[14]-r[1].length>5),m[0]&16386&&c(l,"warn",r[14]-r[1].length<=5),m[0]&16386&&c(l,"error",r[14]===r[1].length),m[0]&16384&&w(h,r[14])},d(r){r&&B(e)}}}function ge(a){let e,l;return{c(){e=T("div"),l=Q(a[7]),this.h()},l(t){e=D(t,"DIV",{class:!0});var i=V(e);l=Y(i,a[7]),i.forEach(B),this.h()},h(){g(e,"class","suffix svelte-usoxfr")},m(t,i){O(t,e,i),E(e,l)},p(t,i){i[0]&128&&w(l,t[7])},d(t){t&&B(e)}}}function ze(a){let e,l,t,i,o,h,r,m,I,_,s,q,C,S,k,U,j,G,d,W,Z,b=a[5]&&be(a),X=[{class:"input"},{disabled:a[0]},{"data-lpignore":"true"},{maxlength:m=a[14]>0?a[14]:void 0},{placeholder:a[6]},{id:a[2]},{name:a[8]},{spellcheck:a[16]},{required:a[21]},{autocomplete:a[11]},a[30]],M={};for(let u=0;u<X.length;u+=1)M=te(M,X[u]);const y=[Oe,Me,Ge],F=[];function p(u,f){return u[9]?0:u[0]?1:u[10]&&u[1]?2:-1}~(_=p(a))&&(s=F[_]=y[_](a));let v=a[14]&&!a[0]&&!a[15]&&_e(a),L=a[7]&&ge(a);return{c(){e=T("div"),l=T("label"),t=Q(a[3]),i=z(),o=T("div"),b&&b.c(),h=z(),r=T("input"),I=z(),s&&s.c(),q=z(),v&&v.c(),C=z(),L&&L.c(),S=z(),k=T("span"),U=Q(a[13]),this.h()},l(u){e=D(u,"DIV",{class:!0});var f=V(e);l=D(f,"LABEL",{for:!0,class:!0});var H=V(l);t=Y(H,a[3]),H.forEach(B),i=J(f),o=D(f,"DIV",{class:!0});var N=V(o);b&&b.l(N),h=J(N),r=D(N,"INPUT",{class:!0,"data-lpignore":!0,maxlength:!0,placeholder:!0,id:!0,name:!0,spellcheck:!0,autocomplete:!0}),I=J(N),s&&s.l(N),q=J(N),v&&v.l(N),C=J(N),L&&L.l(N),N.forEach(B),S=J(f),k=D(f,"SPAN",{class:!0,role:!0});var ae=V(k);U=Y(ae,a[13]),ae.forEach(B),f.forEach(B),this.h()},h(){g(l,"for",a[2]),g(l,"class","svelte-usoxfr"),c(l,"required",a[21]),c(l,"sr-only",a[4]),fe(r,M),c(r,"disabled",a[0]),c(r,"svelte-usoxfr",!0),g(o,"class","input-container svelte-usoxfr"),c(o,"disabled",a[0]),c(o,"error",a[20]),c(o,"unroundRight",a[17]??a[7]),c(o,"unroundLeft",a[18]),c(o,"noBorder",a[19]),c(o,"invalid",!a[12]),g(k,"class","hint-text inline-block svelte-usoxfr"),g(k,"role",j=a[20]?"alert":null),c(k,"invalid",!a[12]),c(k,"error",a[20]),c(k,"hidden",!a[13]),g(e,"class",G=se(me("flex flex-col gap-1",a[24]))+" svelte-usoxfr")},m(u,f){O(u,e,f),E(e,l),E(l,t),E(e,i),E(e,o),b&&b.m(o,null),E(o,h),E(o,r),r.autofocus&&r.focus(),ce(r,a[1]),E(o,I),~_&&F[_].m(o,null),E(o,q),v&&v.m(o,null),E(o,C),L&&L.m(o,null),E(e,S),E(e,k),E(k,U),d=!0,W||(Z=[P(r,"input",a[38]),P(r,"click",de(a[32])),P(r,"input",a[33]),P(r,"keydown",de(a[34])),P(r,"change",a[35]),P(r,"focus",a[36]),P(r,"blur",a[37]),De(a[26].call(null,r))],W=!0)},p(u,f){(!d||f[0]&8)&&w(t,u[3]),(!d||f[0]&4)&&g(l,"for",u[2]),(!d||f[0]&2097152)&&c(l,"required",u[21]),(!d||f[0]&16)&&c(l,"sr-only",u[4]),u[5]?b?(b.p(u,f),f[0]&32&&R(b,1)):(b=be(u),b.c(),R(b,1),b.m(o,h)):b&&(ie(),A(b,1,1,()=>{b=null}),ue()),fe(r,M=Se(X,[{class:"input"},(!d||f[0]&1)&&{disabled:u[0]},{"data-lpignore":"true"},(!d||f[0]&16384&&m!==(m=u[14]>0?u[14]:void 0))&&{maxlength:m},(!d||f[0]&64)&&{placeholder:u[6]},(!d||f[0]&4)&&{id:u[2]},(!d||f[0]&256)&&{name:u[8]},(!d||f[0]&65536)&&{spellcheck:u[16]},(!d||f[0]&2097152)&&{required:u[21]},(!d||f[0]&2048)&&{autocomplete:u[11]},f[0]&1073741824&&u[30]])),f[0]&2&&r.value!==u[1]&&ce(r,u[1]),c(r,"disabled",u[0]),c(r,"svelte-usoxfr",!0);let H=_;_=p(u),_===H?~_&&F[_].p(u,f):(s&&(ie(),A(F[H],1,1,()=>{F[H]=null}),ue()),~_?(s=F[_],s?s.p(u,f):(s=F[_]=y[_](u),s.c()),R(s,1),s.m(o,q)):s=null),u[14]&&!u[0]&&!u[15]?v?v.p(u,f):(v=_e(u),v.c(),v.m(o,C)):v&&(v.d(1),v=null),u[7]?L?L.p(u,f):(L=ge(u),L.c(),L.m(o,null)):L&&(L.d(1),L=null),(!d||f[0]&1)&&c(o,"disabled",u[0]),(!d||f[0]&1048576)&&c(o,"error",u[20]),(!d||f[0]&131200)&&c(o,"unroundRight",u[17]??u[7]),(!d||f[0]&262144)&&c(o,"unroundLeft",u[18]),(!d||f[0]&524288)&&c(o,"noBorder",u[19]),(!d||f[0]&4096)&&c(o,"invalid",!u[12]),(!d||f[0]&8192)&&w(U,u[13]),(!d||f[0]&1048576&&j!==(j=u[20]?"alert":null))&&g(k,"role",j),(!d||f[0]&4096)&&c(k,"invalid",!u[12]),(!d||f[0]&1048576)&&c(k,"error",u[20]),(!d||f[0]&8192)&&c(k,"hidden",!u[13]),(!d||f[0]&16777216&&G!==(G=se(me("flex flex-col gap-1",u[24]))+" svelte-usoxfr"))&&g(e,"class",G)},i(u){d||(R(b),R(s),d=!0)},o(u){A(b),A(s),d=!1},d(u){u&&B(e),b&&b.d(),~_&&F[_].d(),v&&v.d(),L&&L.d(),W=!1,Fe(Z)}}}function Je(a,e,l){const t=["id","value","label","labelHidden","icon","placeholder","suffix","name","copyable","disabled","clearable","autocomplete","valid","hintText","maxLength","hideCount","spellcheck","unroundRight","unroundLeft","noBorder","autoFocus","error","required","copyButtonLabel","clearButtonLabel","class"];let i=he(e,t),o,{id:h}=e,{value:r}=e,{label:m}=e,{labelHidden:I=!1}=e,{icon:_=null}=e,{placeholder:s=""}=e,{suffix:q=""}=e,{name:C=h}=e,{copyable:S=!1}=e,{disabled:k=!1}=e,{clearable:U=!1}=e,{autocomplete:j="off"}=e,{valid:G=!0}=e,{hintText:d=""}=e,{maxLength:W=0}=e,{hideCount:Z=!1}=e,{spellcheck:b=null}=e,{unroundRight:X=!1}=e,{unroundLeft:M=!1}=e,{noBorder:y=!1}=e,{autoFocus:F=!1}=e,{error:p=!1}=e,{required:v=!1}=e,{copyButtonLabel:L=""}=e,{clearButtonLabel:u=""}=e,{class:f=""}=e;function H(n){F&&n&&n.focus()}const N=Ne();function ae(){l(1,r=""),N("clear",{})}const{copy:oe,copied:re}=Ue();Re(a,re,n=>l(25,o=n));function ke(n){K.call(this,a,n)}function ve(n){K.call(this,a,n)}function Le(n){K.call(this,a,n)}function Be(n){K.call(this,a,n)}function Ee(n){K.call(this,a,n)}function Ie(n){K.call(this,a,n)}function qe(){r=this.value,l(1,r)}const Ce=n=>oe(n,r);return a.$$set=n=>{e=te(te({},e),Ve(n)),l(30,i=he(e,t)),"id"in n&&l(2,h=n.id),"value"in n&&l(1,r=n.value),"label"in n&&l(3,m=n.label),"labelHidden"in n&&l(4,I=n.labelHidden),"icon"in n&&l(5,_=n.icon),"placeholder"in n&&l(6,s=n.placeholder),"suffix"in n&&l(7,q=n.suffix),"name"in n&&l(8,C=n.name),"copyable"in n&&l(9,S=n.copyable),"disabled"in n&&l(0,k=n.disabled),"clearable"in n&&l(10,U=n.clearable),"autocomplete"in n&&l(11,j=n.autocomplete),"valid"in n&&l(12,G=n.valid),"hintText"in n&&l(13,d=n.hintText),"maxLength"in n&&l(14,W=n.maxLength),"hideCount"in n&&l(15,Z=n.hideCount),"spellcheck"in n&&l(16,b=n.spellcheck),"unroundRight"in n&&l(17,X=n.unroundRight),"unroundLeft"in n&&l(18,M=n.unroundLeft),"noBorder"in n&&l(19,y=n.noBorder),"autoFocus"in n&&l(31,F=n.autoFocus),"error"in n&&l(20,p=n.error),"required"in n&&l(21,v=n.required),"copyButtonLabel"in n&&l(22,L=n.copyButtonLabel),"clearButtonLabel"in n&&l(23,u=n.clearButtonLabel),"class"in n&&l(24,f=n.class)},a.$$.update=()=>{a.$$.dirty[0]&513&&l(0,k=k||S)},[k,r,h,m,I,_,s,q,C,S,U,j,G,d,W,Z,b,X,M,y,p,v,L,u,f,o,H,ae,oe,re,i,F,ke,ve,Le,Be,Ee,Ie,qe,Ce]}class we extends He{constructor(e){super(),Pe(this,e,Je,ze,Te,{id:2,value:1,label:3,labelHidden:4,icon:5,placeholder:6,suffix:7,name:8,copyable:9,disabled:0,clearable:10,autocomplete:11,valid:12,hintText:13,maxLength:14,hideCount:15,spellcheck:16,unroundRight:17,unroundLeft:18,noBorder:19,autoFocus:31,error:20,required:21,copyButtonLabel:22,clearButtonLabel:23,class:24},null,[-1,-1])}}export{we as I};