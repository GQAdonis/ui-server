import{s as ne,z as oe,h as A,t as le,b as B,j as H,k as O,l as ae,f as E,d as C,m,S as _e,H as K,E as be,i as J,n as p,X as te,p as q,q as re,ag as ue,G as Ne,D as ge,A as he,L as Te,a as Se,x as Q,T as Ve,u as Oe,g as Ue,e as je,c as Le,v as Pe}from"./scheduler.tl3rb73C.js";import{S as De,i as Ae,c as Y,a as Z,m as $,t as L,b as W,d as x,f as We,g as ie,e as fe}from"./index.iYEhKDTv.js";import{C as He}from"./code-block.txDu-CUx.js";import{g as Xe}from"./spread.rEx3vLA9.js";import{L as ve}from"./label.z-mga6zl.js";import{o as ke}from"./omit.d6LgPome.js";import{t as G}from"./translate.HrioCK44.js";import{f as se}from"./index.a9tr67AN.js";import{d as Re}from"./events.MpbhIRse.js";import{s as ye}from"./parse-with-big-int.e3oI4SEy.js";import{P as ze}from"./payload-decoder.2reAs9MJ.js";function Be(t){let n,s,e,l,a,d,c,g,y=(t[0]??"")+"",T,N,u,w,z,I,P,k,V,S,X,_,M,f,D,h,v,R,ee,o=[{id:w=t[6]+"-range"},{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y border-primary"},{min:t[3]},{max:t[4]},{step:t[5]},ke(t[14],"class")],b={};for(let r=0;r<o.length;r+=1)b=oe(b,o[r]);return I=new ve({props:{hidden:!0,label:t[1],for:t[6]+"-range"}}),D=new ve({props:{hidden:t[2],class:"shrink",label:t[1],for:t[6]}}),{c(){n=A("div"),s=A("div"),e=A("div"),l=A("span"),a=le(t[3]),d=B(),c=A("div"),g=A("output"),T=le(y),N=B(),u=A("input"),z=B(),Y(I.$$.fragment),P=B(),k=A("span"),V=le(t[4]),S=B(),X=A("div"),_=A("input"),f=B(),Y(D.$$.fragment),this.h()},l(r){n=H(r,"DIV",{class:!0});var i=O(n);s=H(i,"DIV",{class:!0});var j=O(s);e=H(j,"DIV",{class:!0});var U=O(e);l=H(U,"SPAN",{class:!0});var ce=O(l);a=ae(ce,t[3]),ce.forEach(E),d=C(U),c=H(U,"DIV",{class:!0});var F=O(c);g=H(F,"OUTPUT",{class:!0,style:!0,for:!0});var de=O(g);T=ae(de,y),de.forEach(E),N=C(F),u=H(F,"INPUT",{id:!0,name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),z=C(F),Z(I.$$.fragment,F),F.forEach(E),P=C(U),k=H(U,"SPAN",{class:!0});var me=O(k);V=ae(me,t[4]),me.forEach(E),U.forEach(E),S=C(j),X=H(j,"DIV",{class:!0});var pe=O(X);_=H(pe,"INPUT",{id:!0,class:!0,type:!0,inputmode:!0,min:!0,max:!0,step:!0}),pe.forEach(E),f=C(j),Z(D.$$.fragment,j),j.forEach(E),i.forEach(E),this.h()},h(){m(l,"class","absolute -bottom-6 left-0 text-xs font-normal"),m(g,"class","absolute -top-6 text-center text-xs font-normal"),_e(g,"left","calc("+t[8]+"% - ("+t[10]+"px))"),m(g,"for","range"),K(g,"hidden",!t[9]),be(u,b),K(u,"svelte-r8rutn",!0),m(c,"class","relative flex items-center"),m(k,"class","absolute -bottom-6 right-0 text-xs font-normal"),m(e,"class","relative w-auto grow"),m(_,"id",t[6]),m(_,"class","numeric-input svelte-r8rutn"),m(_,"type","number"),m(_,"inputmode","numeric"),m(_,"min",t[3]),m(_,"max",t[4]),m(_,"step",M=t[13].step),K(_,"invalid",!t[9]),m(X,"class","flex shrink"),m(s,"class","range-input-container svelte-r8rutn"),m(n,"class",h="w-full px-1 py-4 "+t[13].class+" svelte-r8rutn")},m(r,i){J(r,n,i),p(n,s),p(s,e),p(e,l),p(l,a),p(e,d),p(e,c),p(c,g),p(g,T),t[15](g),p(c,N),p(c,u),u.autofocus&&u.focus(),te(u,t[0]),p(c,z),$(I,c,null),p(e,P),p(e,k),p(k,V),p(s,S),p(s,X),p(X,_),te(_,t[0]),p(s,f),$(D,s,null),v=!0,R||(ee=[q(window,"resize",t[12]),q(u,"change",t[16]),q(u,"input",t[16]),q(u,"input",t[11]),q(_,"input",t[17]),q(_,"input",t[11])],R=!0)},p(r,[i]){(!v||i&8)&&re(a,r[3]),(!v||i&1)&&y!==(y=(r[0]??"")+"")&&re(T,y),(!v||i&1280)&&_e(g,"left","calc("+r[8]+"% - ("+r[10]+"px))"),(!v||i&512)&&K(g,"hidden",!r[9]),be(u,b=Xe(o,[(!v||i&64&&w!==(w=r[6]+"-range"))&&{id:w},{name:"range"},{type:"range"},{class:"h-0 w-full cursor-pointer appearance-none rounded border-y border-primary"},(!v||i&8)&&{min:r[3]},(!v||i&16)&&{max:r[4]},(!v||i&32)&&{step:r[5]},i&16384&&ke(r[14],"class")])),i&1&&te(u,r[0]),K(u,"svelte-r8rutn",!0);const j={};i&2&&(j.label=r[1]),i&64&&(j.for=r[6]+"-range"),I.$set(j),(!v||i&16)&&re(V,r[4]),(!v||i&64)&&m(_,"id",r[6]),(!v||i&8)&&m(_,"min",r[3]),(!v||i&16)&&m(_,"max",r[4]),(!v||i&8192&&M!==(M=r[13].step))&&m(_,"step",M),i&1&&ue(_.value)!==r[0]&&te(_,r[0]),(!v||i&512)&&K(_,"invalid",!r[9]);const U={};i&4&&(U.hidden=r[2]),i&2&&(U.label=r[1]),i&64&&(U.for=r[6]),D.$set(U),(!v||i&8192&&h!==(h="w-full px-1 py-4 "+r[13].class+" svelte-r8rutn"))&&m(n,"class",h)},i(r){v||(L(I.$$.fragment,r),L(D.$$.fragment,r),v=!0)},o(r){W(I.$$.fragment,r),W(D.$$.fragment,r),v=!1},d(r){r&&E(n),t[15](null),x(I),x(D),R=!1,Ne(ee)}}}function Ce(t,n,s){let e,l;const a=["label","labelHidden","min","max","step","id","value"];let d=ge(n,a),{label:c}=n,{labelHidden:g=!1}=n,{min:y=void 0}=n,{max:T=void 0}=n,{step:N=void 0}=n,{id:u=void 0}=n,{value:w=Math.round((y+T)/2)}=n,z=!0,I;const P=f=>{if(Number.isNaN(f.currentTarget.valueAsNumber)){s(0,w=y);return}s(9,z=f.currentTarget.valueAsNumber>=y&&f.currentTarget.valueAsNumber<=T)},k=({value:f,min:D,max:h})=>(f-D)*100/(h-D),V=({outputElement:f,outputXPos:D})=>{var h;const v=(h=f==null?void 0:f.clientWidth)!==null&&h!==void 0?h:15;return Math.floor(D*v/100)},S=()=>{s(8,e=k({value:w,min:y,max:T})),s(10,l=V({outputElement:I,outputXPos:e}))};function X(f){Te[f?"unshift":"push"](()=>{I=f,s(7,I)})}function _(){w=ue(this.value),s(0,w)}function M(){w=ue(this.value),s(0,w)}return t.$$set=f=>{s(13,n=oe(oe({},n),he(f))),s(14,d=ge(n,a)),"label"in f&&s(1,c=f.label),"labelHidden"in f&&s(2,g=f.labelHidden),"min"in f&&s(3,y=f.min),"max"in f&&s(4,T=f.max),"step"in f&&s(5,N=f.step),"id"in f&&s(6,u=f.id),"value"in f&&s(0,w=f.value)},t.$$.update=()=>{t.$$.dirty&25&&s(8,e=k({value:w,min:y,max:T})),t.$$.dirty&409&&(w?(s(8,e=k({value:w,min:y,max:T})),s(10,l=V({outputElement:I,outputXPos:e}))):(s(8,e=0),s(10,l=0))),t.$$.dirty&384&&s(10,l=V({outputElement:I,outputXPos:e}))},n=he(n),[w,c,g,y,T,N,u,I,e,z,l,P,S,n,d,X,_,M]}class Ke extends De{constructor(n){super(),Ae(this,n,Ce,Be,ne,{label:1,labelHidden:2,min:3,max:4,step:5,id:6,value:0})}}const qe=t=>({}),we=t=>({});function Me(t){let n=t[1],s,e,l=Ee(t);return{c(){l.c(),s=Q()},l(a){l.l(a),s=Q()},m(a,d){l.m(a,d),J(a,s,d),e=!0},p(a,d){d&2&&ne(n,n=a[1])?(ie(),W(l,1,1,Pe),fe(),l=Ee(a),l.c(),L(l,1),l.m(s.parentNode,s)):l.p(a,d)},i(a){e||(L(l),e=!0)},o(a){W(l),e=!1},d(a){a&&E(s),l.d(a)}}}function Ge(t){let n=[t[1],t[2]],s,e,l=Ie(t);return{c(){l.c(),s=Q()},l(a){l.l(a),s=Q()},m(a,d){l.m(a,d),J(a,s,d),e=!0},p(a,d){d&6&&ne(n,n=[a[1],a[2]])?(ie(),W(l,1,1,Pe),fe(),l=Ie(a),l.c(),L(l,1),l.m(s.parentNode,s)):l.p(a,d)},i(a){e||(L(l),e=!0)},o(a){W(l),e=!1},d(a){a&&E(s),l.d(a)}}}function Ee(t){let n,s;return n=new He({props:{content:ye(se(t[0][t[1]-1]),void 0,2),testId:"event-history-json",copyIconTitle:G("common.copy-icon-title"),copySuccessIconTitle:G("common.copy-success-icon-title")}}),{c(){Y(n.$$.fragment)},l(e){Z(n.$$.fragment,e)},m(e,l){$(n,e,l),s=!0},p(e,l){const a={};l&3&&(a.content=ye(se(e[0][e[1]-1]),void 0,2)),n.$set(a)},i(e){s||(L(n.$$.fragment,e),s=!0)},o(e){W(n.$$.fragment,e),s=!1},d(e){x(n,e)}}}function Fe(t){let n,s;return n=new He({props:{content:t[9],testId:"event-history-json",copyIconTitle:G("common.copy-icon-title"),copySuccessIconTitle:G("common.copy-success-icon-title")}}),{c(){Y(n.$$.fragment)},l(e){Z(n.$$.fragment,e)},m(e,l){$(n,e,l),s=!0},p(e,l){const a={};l&512&&(a.content=e[9]),n.$set(a)},i(e){s||(L(n.$$.fragment,e),s=!0)},o(e){W(n.$$.fragment,e),s=!1},d(e){x(n,e)}}}function Ie(t){let n,s;return n=new ze({props:{value:se(t[0][t[1]-1]),$$slots:{default:[Fe,({decodedValue:e})=>({9:e}),({decodedValue:e})=>e?512:0]},$$scope:{ctx:t}}}),{c(){Y(n.$$.fragment)},l(e){Z(n.$$.fragment,e)},m(e,l){$(n,e,l),s=!0},p(e,l){const a={};l&3&&(a.value=se(e[0][e[1]-1])),l&768&&(a.$$scope={dirty:l,ctx:e}),n.$set(a)},i(e){s||(L(n.$$.fragment,e),s=!0)},o(e){W(n.$$.fragment,e),s=!1},d(e){x(n,e)}}}function Je(t){let n,s,e,l,a,d,c,g,y,T,N,u,w,z,I,P,k,V,S,X,_;function M(o){t[5](o)}let f={label:G("common.event"),labelHidden:!0,id:"range-input-event-history",min:1,max:t[0].length};t[1]!==void 0&&(f.value=t[1]),e=new Ke({props:f}),Te.push(()=>We(e,"value",M));const D=t[4].decode,h=Se(D,t,t[8],we),v=[Ge,Me],R=[];function ee(o,b){return o[2]?0:1}return P=ee(t),k=R[P]=v[P](t),{c(){n=A("div"),s=A("div"),Y(e.$$.fragment),a=B(),d=A("div"),c=A("button"),g=A("span"),T=B(),N=A("button"),u=A("span"),z=B(),h&&h.c(),I=B(),k.c(),V=Q(),this.h()},l(o){n=H(o,"DIV",{class:!0});var b=O(n);s=H(b,"DIV",{class:!0});var r=O(s);Z(e.$$.fragment,r),a=C(r),d=H(r,"DIV",{class:!0});var i=O(d);c=H(i,"BUTTON",{class:!0,"aria-label":!0});var j=O(c);g=H(j,"SPAN",{class:!0}),O(g).forEach(E),j.forEach(E),T=C(i),N=H(i,"BUTTON",{class:!0,"aria-label":!0});var U=O(N);u=H(U,"SPAN",{class:!0}),O(u).forEach(E),U.forEach(E),i.forEach(E),r.forEach(E),z=C(b),h&&h.l(b),b.forEach(E),I=C(o),k.l(o),V=Q(),this.h()},h(){m(g,"class","arrow arrow-left svelte-1ryp6u1"),K(g,"arrow-left-disabled",t[1]===1),m(c,"class","caret svelte-1ryp6u1"),c.disabled=y=t[1]===1,m(c,"aria-label",G("common.previous")),m(u,"class","arrow arrow-right svelte-1ryp6u1"),K(u,"arrow-right-disabled",t[1]===t[0].length),m(N,"class","caret svelte-1ryp6u1"),N.disabled=w=t[1]===t[0].length,m(N,"aria-label",G("common.next")),m(d,"class","flex items-center justify-center gap-3"),m(s,"class","bg-gray-100 flex w-full gap-4"),m(n,"class","flex gap-4 max-sm:flex-col")},m(o,b){J(o,n,b),p(n,s),$(e,s,null),p(s,a),p(s,d),p(d,c),p(c,g),p(d,T),p(d,N),p(N,u),p(n,z),h&&h.m(n,null),J(o,I,b),R[P].m(o,b),J(o,V,b),S=!0,X||(_=[q(window,"keydown",t[3]),q(c,"click",t[6]),q(N,"click",t[7])],X=!0)},p(o,[b]){const r={};b&1&&(r.max=o[0].length),!l&&b&2&&(l=!0,r.value=o[1],Ve(()=>l=!1)),e.$set(r),(!S||b&2)&&K(g,"arrow-left-disabled",o[1]===1),(!S||b&2&&y!==(y=o[1]===1))&&(c.disabled=y),(!S||b&3)&&K(u,"arrow-right-disabled",o[1]===o[0].length),(!S||b&3&&w!==(w=o[1]===o[0].length))&&(N.disabled=w),h&&h.p&&(!S||b&256)&&Oe(h,D,o,o[8],S?je(D,o[8],b,qe):Ue(o[8]),we);let i=P;P=ee(o),P===i?R[P].p(o,b):(ie(),W(R[i],1,1,()=>{R[i]=null}),fe(),k=R[P],k?k.p(o,b):(k=R[P]=v[P](o),k.c()),L(k,1),k.m(V.parentNode,V))},i(o){S||(L(e.$$.fragment,o),L(h,o),L(k),S=!0)},o(o){W(e.$$.fragment,o),W(h,o),W(k),S=!1},d(o){o&&(E(n),E(I),E(V)),x(e),h&&h.d(o),R[P].d(o),X=!1,Ne(_)}}}function Qe(t,n,s){let e;Le(t,Re,u=>s(2,e=u));let{$$slots:l={},$$scope:a}=n,{events:d=[]}=n,c=1;function g(u){switch(u.code){case"ArrowRight":case"KeyL":u.preventDefault(),u.stopPropagation(),c<d.length&&s(1,c+=1);break;case"ArrowLeft":case"KeyH":u.preventDefault(),u.stopPropagation(),c>1&&s(1,c-=1);break}}function y(u){c=u,s(1,c)}const T=()=>{s(1,c-=1)},N=()=>{s(1,c+=1)};return t.$$set=u=>{"events"in u&&s(0,d=u.events),"$$scope"in u&&s(8,a=u.$$scope)},[d,c,e,g,l,y,T,N,a]}class ot extends De{constructor(n){super(),Ae(this,n,Qe,Je,ne,{events:0})}}export{ot as W};