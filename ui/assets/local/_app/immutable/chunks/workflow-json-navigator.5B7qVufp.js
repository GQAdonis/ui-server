import{s as ne,z as ue,h as D,t as ae,b as B,j as A,k as S,l as re,f as y,d as C,m,a1 as _e,H as K,E as be,i as F,n as p,Z as te,p as M,q as oe,a2 as ie,G as Ne,D as ge,A as he,M as Pe,a as Ve,N as Se,u as Oe,g as Ue,e as je,c as We,x as se,v as Te}from"./scheduler.BTg3iwM1.js";import{S as De,i as Ae,c as J,a as Q,m as Y,t as W,b as L,d as $,f as Le,g as fe,e as ce}from"./index.64bqrcBm.js";import{C as He}from"./code-block.VFTaBjTW.js";import{g as Re}from"./spread.CgU5AtxT.js";import{L as ve}from"./label.B_QjmRc-.js";import{o as ke}from"./omit.C8ejR22J.js";import{t as G}from"./translate.BBe5dcco.js";import{f as le}from"./index.Czu2qhlN.js";import{d as Xe}from"./events.DFtY4d3B.js";import{s as ye}from"./parse-with-big-int.BKSBwM2t.js";import{P as ze}from"./payload-decoder.BGUU-W5I.js";function Be(t){let l,s,e,n,a,d,c,b,E=(t[0]??"")+"",T,P,u,w,z,N,O,k,I,V,R,_,q,f,H,h,v,X,x,o=[{id:w=t[6]+"-range"},{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y border-primary"},{min:t[3]},{max:t[4]},{step:t[5]},ke(t[14],"class")],g={};for(let r=0;r<o.length;r+=1)g=ue(g,o[r]);return N=new ve({props:{hidden:!0,label:t[1],for:t[6]+"-range"}}),H=new ve({props:{hidden:t[2],class:"shrink",label:t[1],for:t[6]}}),{c(){l=D("div"),s=D("div"),e=D("div"),n=D("span"),a=ae(t[3]),d=B(),c=D("div"),b=D("output"),T=ae(E),P=B(),u=D("input"),z=B(),J(N.$$.fragment),O=B(),k=D("span"),I=ae(t[4]),V=B(),R=D("div"),_=D("input"),f=B(),J(H.$$.fragment),this.h()},l(r){l=A(r,"DIV",{class:!0});var i=S(l);s=A(i,"DIV",{class:!0});var j=S(s);e=A(j,"DIV",{class:!0});var U=S(e);n=A(U,"SPAN",{class:!0});var ee=S(n);a=re(ee,t[3]),ee.forEach(y),d=C(U),c=A(U,"DIV",{class:!0});var Z=S(c);b=A(Z,"OUTPUT",{class:!0,style:!0,for:!0});var de=S(b);T=re(de,E),de.forEach(y),P=C(Z),u=A(Z,"INPUT",{id:!0,name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),z=C(Z),Q(N.$$.fragment,Z),Z.forEach(y),O=C(U),k=A(U,"SPAN",{class:!0});var me=S(k);I=re(me,t[4]),me.forEach(y),U.forEach(y),V=C(j),R=A(j,"DIV",{class:!0});var pe=S(R);_=A(pe,"INPUT",{id:!0,class:!0,type:!0,inputmode:!0,min:!0,max:!0,step:!0}),pe.forEach(y),f=C(j),Q(H.$$.fragment,j),j.forEach(y),i.forEach(y),this.h()},h(){m(n,"class","absolute -bottom-6 left-0 text-xs font-normal"),m(b,"class","absolute -top-6 text-center text-xs font-normal"),_e(b,"left","calc("+t[8]+"% - ("+t[10]+"px))"),m(b,"for","range"),K(b,"hidden",!t[9]),be(u,g),K(u,"svelte-r8rutn",!0),m(c,"class","relative flex items-center"),m(k,"class","absolute -bottom-6 right-0 text-xs font-normal"),m(e,"class","relative w-auto grow"),m(_,"id",t[6]),m(_,"class","numeric-input svelte-r8rutn"),m(_,"type","number"),m(_,"inputmode","numeric"),m(_,"min",t[3]),m(_,"max",t[4]),m(_,"step",q=t[13].step),K(_,"invalid",!t[9]),m(R,"class","flex shrink"),m(s,"class","range-input-container svelte-r8rutn"),m(l,"class",h="w-full px-1 py-4 "+t[13].class+" svelte-r8rutn")},m(r,i){F(r,l,i),p(l,s),p(s,e),p(e,n),p(n,a),p(e,d),p(e,c),p(c,b),p(b,T),t[15](b),p(c,P),p(c,u),u.autofocus&&u.focus(),te(u,t[0]),p(c,z),Y(N,c,null),p(e,O),p(e,k),p(k,I),p(s,V),p(s,R),p(R,_),te(_,t[0]),p(s,f),Y(H,s,null),v=!0,X||(x=[M(window,"resize",t[12]),M(u,"change",t[16]),M(u,"input",t[16]),M(u,"input",t[11]),M(_,"input",t[17]),M(_,"input",t[11])],X=!0)},p(r,[i]){(!v||i&8)&&oe(a,r[3]),(!v||i&1)&&E!==(E=(r[0]??"")+"")&&oe(T,E),(!v||i&1280)&&_e(b,"left","calc("+r[8]+"% - ("+r[10]+"px))"),(!v||i&512)&&K(b,"hidden",!r[9]),be(u,g=Re(o,[(!v||i&64&&w!==(w=r[6]+"-range"))&&{id:w},{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y border-primary"},(!v||i&8)&&{min:r[3]},(!v||i&16)&&{max:r[4]},(!v||i&32)&&{step:r[5]},i&16384&&ke(r[14],"class")])),i&1&&te(u,r[0]),K(u,"svelte-r8rutn",!0);const j={};i&2&&(j.label=r[1]),i&64&&(j.for=r[6]+"-range"),N.$set(j),(!v||i&16)&&oe(I,r[4]),(!v||i&64)&&m(_,"id",r[6]),(!v||i&8)&&m(_,"min",r[3]),(!v||i&16)&&m(_,"max",r[4]),(!v||i&8192&&q!==(q=r[13].step))&&m(_,"step",q),i&1&&ie(_.value)!==r[0]&&te(_,r[0]),(!v||i&512)&&K(_,"invalid",!r[9]);const U={};i&4&&(U.hidden=r[2]),i&2&&(U.label=r[1]),i&64&&(U.for=r[6]),H.$set(U),(!v||i&8192&&h!==(h="w-full px-1 py-4 "+r[13].class+" svelte-r8rutn"))&&m(l,"class",h)},i(r){v||(W(N.$$.fragment,r),W(H.$$.fragment,r),v=!0)},o(r){L(N.$$.fragment,r),L(H.$$.fragment,r),v=!1},d(r){r&&y(l),t[15](null),$(N),$(H),X=!1,Ne(x)}}}function Ce(t,l,s){let e,n;const a=["label","labelHidden","min","max","step","id","value"];let d=ge(l,a),{label:c}=l,{labelHidden:b=!1}=l,{min:E=void 0}=l,{max:T=void 0}=l,{step:P=void 0}=l,{id:u=void 0}=l,{value:w=Math.round((E+T)/2)}=l,z=!0,N;const O=f=>{if(Number.isNaN(f.currentTarget.valueAsNumber)){s(0,w=E);return}s(9,z=f.currentTarget.valueAsNumber>=E&&f.currentTarget.valueAsNumber<=T)},k=({value:f,min:H,max:h})=>(f-H)*100/(h-H),I=({outputElement:f,outputXPos:H})=>{var h;const v=(h=f==null?void 0:f.clientWidth)!==null&&h!==void 0?h:15;return Math.floor(H*v/100)},V=()=>{s(8,e=k({value:w,min:E,max:T})),s(10,n=I({outputElement:N,outputXPos:e}))};function R(f){Pe[f?"unshift":"push"](()=>{N=f,s(7,N)})}function _(){w=ie(this.value),s(0,w)}function q(){w=ie(this.value),s(0,w)}return t.$$set=f=>{s(13,l=ue(ue({},l),he(f))),s(14,d=ge(l,a)),"label"in f&&s(1,c=f.label),"labelHidden"in f&&s(2,b=f.labelHidden),"min"in f&&s(3,E=f.min),"max"in f&&s(4,T=f.max),"step"in f&&s(5,P=f.step),"id"in f&&s(6,u=f.id),"value"in f&&s(0,w=f.value)},t.$$.update=()=>{t.$$.dirty&25&&s(8,e=k({value:w,min:E,max:T})),t.$$.dirty&409&&(w?(s(8,e=k({value:w,min:E,max:T})),s(10,n=I({outputElement:N,outputXPos:e}))):(s(8,e=0),s(10,n=0))),t.$$.dirty&384&&s(10,n=I({outputElement:N,outputXPos:e}))},l=he(l),[w,c,b,E,T,P,u,N,e,z,n,O,V,l,d,R,_,q]}class Ke extends De{constructor(l){super(),Ae(this,l,Ce,Be,ne,{label:1,labelHidden:2,min:3,max:4,step:5,id:6,value:0})}}const Me=t=>({}),Ee=t=>({});function qe(t){let l=t[1],s,e,n=we(t);return{c(){n.c(),s=se()},l(a){n.l(a),s=se()},m(a,d){n.m(a,d),F(a,s,d),e=!0},p(a,d){d&2&&ne(l,l=a[1])?(fe(),L(n,1,1,Te),ce(),n=we(a),n.c(),W(n,1),n.m(s.parentNode,s)):n.p(a,d)},i(a){e||(W(n),e=!0)},o(a){L(n),e=!1},d(a){a&&y(s),n.d(a)}}}function Ge(t){let l=[t[1],t[2]],s,e,n=Ie(t);return{c(){n.c(),s=se()},l(a){n.l(a),s=se()},m(a,d){n.m(a,d),F(a,s,d),e=!0},p(a,d){d&6&&ne(l,l=[a[1],a[2]])?(fe(),L(n,1,1,Te),ce(),n=Ie(a),n.c(),W(n,1),n.m(s.parentNode,s)):n.p(a,d)},i(a){e||(W(n),e=!0)},o(a){L(n),e=!1},d(a){a&&y(s),n.d(a)}}}function we(t){let l,s;return l=new He({props:{content:ye(le(t[0][t[1]-1]),void 0,2),testId:"event-history-json",copyIconTitle:G("common.copy-icon-title"),copySuccessIconTitle:G("common.copy-success-icon-title")}}),{c(){J(l.$$.fragment)},l(e){Q(l.$$.fragment,e)},m(e,n){Y(l,e,n),s=!0},p(e,n){const a={};n&3&&(a.content=ye(le(e[0][e[1]-1]),void 0,2)),l.$set(a)},i(e){s||(W(l.$$.fragment,e),s=!0)},o(e){L(l.$$.fragment,e),s=!1},d(e){$(l,e)}}}function Ze(t){let l,s;return l=new He({props:{content:t[9],testId:"event-history-json",copyIconTitle:G("common.copy-icon-title"),copySuccessIconTitle:G("common.copy-success-icon-title")}}),{c(){J(l.$$.fragment)},l(e){Q(l.$$.fragment,e)},m(e,n){Y(l,e,n),s=!0},p(e,n){const a={};n&512&&(a.content=e[9]),l.$set(a)},i(e){s||(W(l.$$.fragment,e),s=!0)},o(e){L(l.$$.fragment,e),s=!1},d(e){$(l,e)}}}function Ie(t){let l,s;return l=new ze({props:{value:le(t[0][t[1]-1]),$$slots:{default:[Ze,({decodedValue:e})=>({9:e}),({decodedValue:e})=>e?512:0]},$$scope:{ctx:t}}}),{c(){J(l.$$.fragment)},l(e){Q(l.$$.fragment,e)},m(e,n){Y(l,e,n),s=!0},p(e,n){const a={};n&3&&(a.value=le(e[0][e[1]-1])),n&768&&(a.$$scope={dirty:n,ctx:e}),l.$set(a)},i(e){s||(W(l.$$.fragment,e),s=!0)},o(e){L(l.$$.fragment,e),s=!1},d(e){$(l,e)}}}function Fe(t){let l,s,e,n,a,d,c,b,E,T,P,u,w,z,N,O,k,I,V,R,_;function q(o){t[5](o)}let f={label:G("common.event"),labelHidden:!0,id:"range-input-event-history",min:1,max:t[0].length};t[1]!==void 0&&(f.value=t[1]),e=new Ke({props:f}),Pe.push(()=>Le(e,"value",q));const H=t[4].decode,h=Ve(H,t,t[8],Ee),v=[Ge,qe],X=[];function x(o,g){return o[2]?0:1}return k=x(t),I=X[k]=v[k](t),{c(){l=D("div"),s=D("div"),J(e.$$.fragment),a=B(),d=D("div"),c=D("button"),b=D("span"),T=B(),P=D("button"),u=D("span"),z=B(),h&&h.c(),N=B(),O=D("div"),I.c(),this.h()},l(o){l=A(o,"DIV",{class:!0});var g=S(l);s=A(g,"DIV",{class:!0});var r=S(s);Q(e.$$.fragment,r),a=C(r),d=A(r,"DIV",{class:!0});var i=S(d);c=A(i,"BUTTON",{class:!0,"aria-label":!0});var j=S(c);b=A(j,"SPAN",{class:!0}),S(b).forEach(y),j.forEach(y),T=C(i),P=A(i,"BUTTON",{class:!0,"aria-label":!0});var U=S(P);u=A(U,"SPAN",{class:!0}),S(u).forEach(y),U.forEach(y),i.forEach(y),r.forEach(y),z=C(g),h&&h.l(g),g.forEach(y),N=C(o),O=A(o,"DIV",{class:!0});var ee=S(O);I.l(ee),ee.forEach(y),this.h()},h(){m(b,"class","arrow arrow-left svelte-1ryp6u1"),K(b,"arrow-left-disabled",t[1]===1),m(c,"class","caret svelte-1ryp6u1"),c.disabled=E=t[1]===1,m(c,"aria-label",G("common.previous")),m(u,"class","arrow arrow-right svelte-1ryp6u1"),K(u,"arrow-right-disabled",t[1]===t[0].length),m(P,"class","caret svelte-1ryp6u1"),P.disabled=w=t[1]===t[0].length,m(P,"aria-label",G("common.next")),m(d,"class","flex items-center justify-center gap-3"),m(s,"class","bg-gray-100 flex w-full gap-4"),m(l,"class","flex gap-4 max-sm:flex-col"),m(O,"class","py-4")},m(o,g){F(o,l,g),p(l,s),Y(e,s,null),p(s,a),p(s,d),p(d,c),p(c,b),p(d,T),p(d,P),p(P,u),p(l,z),h&&h.m(l,null),F(o,N,g),F(o,O,g),X[k].m(O,null),V=!0,R||(_=[M(window,"keydown",t[3]),M(c,"click",t[6]),M(P,"click",t[7])],R=!0)},p(o,[g]){const r={};g&1&&(r.max=o[0].length),!n&&g&2&&(n=!0,r.value=o[1],Se(()=>n=!1)),e.$set(r),(!V||g&2)&&K(b,"arrow-left-disabled",o[1]===1),(!V||g&2&&E!==(E=o[1]===1))&&(c.disabled=E),(!V||g&3)&&K(u,"arrow-right-disabled",o[1]===o[0].length),(!V||g&3&&w!==(w=o[1]===o[0].length))&&(P.disabled=w),h&&h.p&&(!V||g&256)&&Oe(h,H,o,o[8],V?je(H,o[8],g,Me):Ue(o[8]),Ee);let i=k;k=x(o),k===i?X[k].p(o,g):(fe(),L(X[i],1,1,()=>{X[i]=null}),ce(),I=X[k],I?I.p(o,g):(I=X[k]=v[k](o),I.c()),W(I,1),I.m(O,null))},i(o){V||(W(e.$$.fragment,o),W(h,o),W(I),V=!0)},o(o){L(e.$$.fragment,o),L(h,o),L(I),V=!1},d(o){o&&(y(l),y(N),y(O)),$(e),h&&h.d(o),X[k].d(),R=!1,Ne(_)}}}function Je(t,l,s){let e;We(t,Xe,u=>s(2,e=u));let{$$slots:n={},$$scope:a}=l,{events:d=[]}=l,c=1;function b(u){switch(u.code){case"ArrowRight":case"KeyL":u.preventDefault(),u.stopPropagation(),c<d.length&&s(1,c+=1);break;case"ArrowLeft":case"KeyH":u.preventDefault(),u.stopPropagation(),c>1&&s(1,c-=1);break}}function E(u){c=u,s(1,c)}const T=()=>{s(1,c-=1)},P=()=>{s(1,c+=1)};return t.$$set=u=>{"events"in u&&s(0,d=u.events),"$$scope"in u&&s(8,a=u.$$scope)},[d,c,e,b,n,E,T,P,a]}class ot extends De{constructor(l){super(),Ae(this,l,Je,Fe,ne,{events:0})}}export{ot as W};