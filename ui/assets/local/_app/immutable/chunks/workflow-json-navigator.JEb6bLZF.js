import{s as se,z as oe,h as D,t as le,b as z,j as H,k as O,l as ae,f as E,d as B,m,C as _e,I as K,F as be,i as J,n as p,X as te,p as M,q as re,ag as ue,H as Ne,E as ge,A as he,M as Te,a as Se,x as Q,T as Ve,u as Oe,g as Ue,e as je,c as We,v as Pe}from"./scheduler.1T9hOnFr.js";import{S as Ae,i as De,c as Y,a as Z,m as $,t as W,b as X,d as x,f as Xe,g as ie,e as fe}from"./index.cVovwi_s.js";import{C as He}from"./code-block.tqkDeQld.js";import{g as Ce}from"./spread.rEx3vLA9.js";import{L as ve}from"./label.lHeqfppI.js";import{o as ke}from"./omit.d6LgPome.js";import{t as F}from"./translate.HrioCK44.js";import{f as ne}from"./index.vo0GKLAV.js";import{d as Le}from"./events.OMbI40jI.js";import{s as ye}from"./parse-with-big-int.e3oI4SEy.js";import{P as Re}from"./payload-decoder.UCek-sEg.js";function ze(t){let s,n,e,l,a,d,c,g,y=(t[0]??"")+"",T,N,u,w,R,I,P,k,V,S,C,_,q,f,A,h,v,L,ee,o=[{id:w=t[6]+"-range"},{name:"range"},{type:"range"},{class:"surface-information h-0 w-full cursor-pointer appearance-none rounded border-y border-primary"},{min:t[3]},{max:t[4]},{step:t[5]},ke(t[14],"class")],b={};for(let r=0;r<o.length;r+=1)b=oe(b,o[r]);return I=new ve({props:{hidden:!0,label:t[1],for:t[6]+"-range"}}),A=new ve({props:{hidden:t[2],class:"shrink",label:t[1],for:t[6]}}),{c(){s=D("div"),n=D("div"),e=D("div"),l=D("span"),a=le(t[3]),d=z(),c=D("div"),g=D("output"),T=le(y),N=z(),u=D("input"),R=z(),Y(I.$$.fragment),P=z(),k=D("span"),V=le(t[4]),S=z(),C=D("div"),_=D("input"),f=z(),Y(A.$$.fragment),this.h()},l(r){s=H(r,"DIV",{class:!0});var i=O(s);n=H(i,"DIV",{class:!0});var j=O(n);e=H(j,"DIV",{class:!0});var U=O(e);l=H(U,"SPAN",{class:!0});var ce=O(l);a=ae(ce,t[3]),ce.forEach(E),d=B(U),c=H(U,"DIV",{class:!0});var G=O(c);g=H(G,"OUTPUT",{class:!0,style:!0,for:!0});var de=O(g);T=ae(de,y),de.forEach(E),N=B(G),u=H(G,"INPUT",{id:!0,name:!0,type:!0,class:!0,min:!0,max:!0,step:!0}),R=B(G),Z(I.$$.fragment,G),G.forEach(E),P=B(U),k=H(U,"SPAN",{class:!0});var me=O(k);V=ae(me,t[4]),me.forEach(E),U.forEach(E),S=B(j),C=H(j,"DIV",{class:!0});var pe=O(C);_=H(pe,"INPUT",{id:!0,class:!0,type:!0,inputmode:!0,min:!0,max:!0,step:!0}),pe.forEach(E),f=B(j),Z(A.$$.fragment,j),j.forEach(E),i.forEach(E),this.h()},h(){m(l,"class","absolute -bottom-6 left-0 text-xs font-normal"),m(g,"class","absolute -top-6 text-center text-xs font-normal"),_e(g,"left","calc("+t[8]+"% - ("+t[10]+"px))"),m(g,"for","range"),K(g,"hidden",!t[9]),be(u,b),K(u,"svelte-r8rutn",!0),m(c,"class","relative flex items-center"),m(k,"class","absolute -bottom-6 right-0 text-xs font-normal"),m(e,"class","relative w-auto grow"),m(_,"id",t[6]),m(_,"class","numeric-input svelte-r8rutn"),m(_,"type","number"),m(_,"inputmode","numeric"),m(_,"min",t[3]),m(_,"max",t[4]),m(_,"step",q=t[13].step),K(_,"invalid",!t[9]),m(C,"class","flex shrink"),m(n,"class","range-input-container svelte-r8rutn"),m(s,"class",h="w-full px-1 py-4 "+t[13].class+" svelte-r8rutn")},m(r,i){J(r,s,i),p(s,n),p(n,e),p(e,l),p(l,a),p(e,d),p(e,c),p(c,g),p(g,T),t[15](g),p(c,N),p(c,u),u.autofocus&&u.focus(),te(u,t[0]),p(c,R),$(I,c,null),p(e,P),p(e,k),p(k,V),p(n,S),p(n,C),p(C,_),te(_,t[0]),p(n,f),$(A,n,null),v=!0,L||(ee=[M(window,"resize",t[12]),M(u,"change",t[16]),M(u,"input",t[16]),M(u,"input",t[11]),M(_,"input",t[17]),M(_,"input",t[11])],L=!0)},p(r,[i]){(!v||i&8)&&re(a,r[3]),(!v||i&1)&&y!==(y=(r[0]??"")+"")&&re(T,y),(!v||i&1280)&&_e(g,"left","calc("+r[8]+"% - ("+r[10]+"px))"),(!v||i&512)&&K(g,"hidden",!r[9]),be(u,b=Ce(o,[(!v||i&64&&w!==(w=r[6]+"-range"))&&{id:w},{name:"range"},{type:"range"},{class:"surface-information h-0 w-full cursor-pointer appearance-none rounded border-y border-primary"},(!v||i&8)&&{min:r[3]},(!v||i&16)&&{max:r[4]},(!v||i&32)&&{step:r[5]},i&16384&&ke(r[14],"class")])),i&1&&te(u,r[0]),K(u,"svelte-r8rutn",!0);const j={};i&2&&(j.label=r[1]),i&64&&(j.for=r[6]+"-range"),I.$set(j),(!v||i&16)&&re(V,r[4]),(!v||i&64)&&m(_,"id",r[6]),(!v||i&8)&&m(_,"min",r[3]),(!v||i&16)&&m(_,"max",r[4]),(!v||i&8192&&q!==(q=r[13].step))&&m(_,"step",q),i&1&&ue(_.value)!==r[0]&&te(_,r[0]),(!v||i&512)&&K(_,"invalid",!r[9]);const U={};i&4&&(U.hidden=r[2]),i&2&&(U.label=r[1]),i&64&&(U.for=r[6]),A.$set(U),(!v||i&8192&&h!==(h="w-full px-1 py-4 "+r[13].class+" svelte-r8rutn"))&&m(s,"class",h)},i(r){v||(W(I.$$.fragment,r),W(A.$$.fragment,r),v=!0)},o(r){X(I.$$.fragment,r),X(A.$$.fragment,r),v=!1},d(r){r&&E(s),t[15](null),x(I),x(A),L=!1,Ne(ee)}}}function Be(t,s,n){let e,l;const a=["label","labelHidden","min","max","step","id","value"];let d=ge(s,a),{label:c}=s,{labelHidden:g=!1}=s,{min:y=void 0}=s,{max:T=void 0}=s,{step:N=void 0}=s,{id:u=void 0}=s,{value:w=Math.round((y+T)/2)}=s,R=!0,I;const P=f=>{if(Number.isNaN(f.currentTarget.valueAsNumber)){n(0,w=y);return}n(9,R=f.currentTarget.valueAsNumber>=y&&f.currentTarget.valueAsNumber<=T)},k=({value:f,min:A,max:h})=>(f-A)*100/(h-A),V=({outputElement:f,outputXPos:A})=>{var h;const v=(h=f==null?void 0:f.clientWidth)!==null&&h!==void 0?h:15;return Math.floor(A*v/100)},S=()=>{n(8,e=k({value:w,min:y,max:T})),n(10,l=V({outputElement:I,outputXPos:e}))};function C(f){Te[f?"unshift":"push"](()=>{I=f,n(7,I)})}function _(){w=ue(this.value),n(0,w)}function q(){w=ue(this.value),n(0,w)}return t.$$set=f=>{n(13,s=oe(oe({},s),he(f))),n(14,d=ge(s,a)),"label"in f&&n(1,c=f.label),"labelHidden"in f&&n(2,g=f.labelHidden),"min"in f&&n(3,y=f.min),"max"in f&&n(4,T=f.max),"step"in f&&n(5,N=f.step),"id"in f&&n(6,u=f.id),"value"in f&&n(0,w=f.value)},t.$$.update=()=>{t.$$.dirty&25&&n(8,e=k({value:w,min:y,max:T})),t.$$.dirty&409&&(w?(n(8,e=k({value:w,min:y,max:T})),n(10,l=V({outputElement:I,outputXPos:e}))):(n(8,e=0),n(10,l=0))),t.$$.dirty&384&&n(10,l=V({outputElement:I,outputXPos:e}))},s=he(s),[w,c,g,y,T,N,u,I,e,R,l,P,S,s,d,C,_,q]}class Ke extends Ae{constructor(s){super(),De(this,s,Be,ze,se,{label:1,labelHidden:2,min:3,max:4,step:5,id:6,value:0})}}const Me=t=>({}),we=t=>({});function qe(t){let s=t[1],n,e,l=Ee(t);return{c(){l.c(),n=Q()},l(a){l.l(a),n=Q()},m(a,d){l.m(a,d),J(a,n,d),e=!0},p(a,d){d&2&&se(s,s=a[1])?(ie(),X(l,1,1,Pe),fe(),l=Ee(a),l.c(),W(l,1),l.m(n.parentNode,n)):l.p(a,d)},i(a){e||(W(l),e=!0)},o(a){X(l),e=!1},d(a){a&&E(n),l.d(a)}}}function Fe(t){let s=[t[1],t[2]],n,e,l=Ie(t);return{c(){l.c(),n=Q()},l(a){l.l(a),n=Q()},m(a,d){l.m(a,d),J(a,n,d),e=!0},p(a,d){d&6&&se(s,s=[a[1],a[2]])?(ie(),X(l,1,1,Pe),fe(),l=Ie(a),l.c(),W(l,1),l.m(n.parentNode,n)):l.p(a,d)},i(a){e||(W(l),e=!0)},o(a){X(l),e=!1},d(a){a&&E(n),l.d(a)}}}function Ee(t){let s,n;return s=new He({props:{content:ye(ne(t[0][t[1]-1]),void 0,2),testId:"event-history-json",copyIconTitle:F("common.copy-icon-title"),copySuccessIconTitle:F("common.copy-success-icon-title")}}),{c(){Y(s.$$.fragment)},l(e){Z(s.$$.fragment,e)},m(e,l){$(s,e,l),n=!0},p(e,l){const a={};l&3&&(a.content=ye(ne(e[0][e[1]-1]),void 0,2)),s.$set(a)},i(e){n||(W(s.$$.fragment,e),n=!0)},o(e){X(s.$$.fragment,e),n=!1},d(e){x(s,e)}}}function Ge(t){let s,n;return s=new He({props:{content:t[9],testId:"event-history-json",copyIconTitle:F("common.copy-icon-title"),copySuccessIconTitle:F("common.copy-success-icon-title")}}),{c(){Y(s.$$.fragment)},l(e){Z(s.$$.fragment,e)},m(e,l){$(s,e,l),n=!0},p(e,l){const a={};l&512&&(a.content=e[9]),s.$set(a)},i(e){n||(W(s.$$.fragment,e),n=!0)},o(e){X(s.$$.fragment,e),n=!1},d(e){x(s,e)}}}function Ie(t){let s,n;return s=new Re({props:{value:ne(t[0][t[1]-1]),$$slots:{default:[Ge,({decodedValue:e})=>({9:e}),({decodedValue:e})=>e?512:0]},$$scope:{ctx:t}}}),{c(){Y(s.$$.fragment)},l(e){Z(s.$$.fragment,e)},m(e,l){$(s,e,l),n=!0},p(e,l){const a={};l&3&&(a.value=ne(e[0][e[1]-1])),l&768&&(a.$$scope={dirty:l,ctx:e}),s.$set(a)},i(e){n||(W(s.$$.fragment,e),n=!0)},o(e){X(s.$$.fragment,e),n=!1},d(e){x(s,e)}}}function Je(t){let s,n,e,l,a,d,c,g,y,T,N,u,w,R,I,P,k,V,S,C,_;function q(o){t[5](o)}let f={label:F("common.event"),labelHidden:!0,id:"range-input-event-history",min:1,max:t[0].length};t[1]!==void 0&&(f.value=t[1]),e=new Ke({props:f}),Te.push(()=>Xe(e,"value",q));const A=t[4].decode,h=Se(A,t,t[8],we),v=[Fe,qe],L=[];function ee(o,b){return o[2]?0:1}return P=ee(t),k=L[P]=v[P](t),{c(){s=D("div"),n=D("div"),Y(e.$$.fragment),a=z(),d=D("div"),c=D("button"),g=D("span"),T=z(),N=D("button"),u=D("span"),R=z(),h&&h.c(),I=z(),k.c(),V=Q(),this.h()},l(o){s=H(o,"DIV",{class:!0});var b=O(s);n=H(b,"DIV",{class:!0});var r=O(n);Z(e.$$.fragment,r),a=B(r),d=H(r,"DIV",{class:!0});var i=O(d);c=H(i,"BUTTON",{class:!0,"aria-label":!0});var j=O(c);g=H(j,"SPAN",{class:!0}),O(g).forEach(E),j.forEach(E),T=B(i),N=H(i,"BUTTON",{class:!0,"aria-label":!0});var U=O(N);u=H(U,"SPAN",{class:!0}),O(u).forEach(E),U.forEach(E),i.forEach(E),r.forEach(E),R=B(b),h&&h.l(b),b.forEach(E),I=B(o),k.l(o),V=Q(),this.h()},h(){m(g,"class","arrow arrow-left svelte-1ryp6u1"),K(g,"arrow-left-disabled",t[1]===1),m(c,"class","caret svelte-1ryp6u1"),c.disabled=y=t[1]===1,m(c,"aria-label",F("common.previous")),m(u,"class","arrow arrow-right svelte-1ryp6u1"),K(u,"arrow-right-disabled",t[1]===t[0].length),m(N,"class","caret svelte-1ryp6u1"),N.disabled=w=t[1]===t[0].length,m(N,"aria-label",F("common.next")),m(d,"class","flex items-center justify-center gap-3"),m(n,"class","bg-gray-100 flex w-full gap-4"),m(s,"class","flex gap-4 max-sm:flex-col")},m(o,b){J(o,s,b),p(s,n),$(e,n,null),p(n,a),p(n,d),p(d,c),p(c,g),p(d,T),p(d,N),p(N,u),p(s,R),h&&h.m(s,null),J(o,I,b),L[P].m(o,b),J(o,V,b),S=!0,C||(_=[M(window,"keydown",t[3]),M(c,"click",t[6]),M(N,"click",t[7])],C=!0)},p(o,[b]){const r={};b&1&&(r.max=o[0].length),!l&&b&2&&(l=!0,r.value=o[1],Ve(()=>l=!1)),e.$set(r),(!S||b&2)&&K(g,"arrow-left-disabled",o[1]===1),(!S||b&2&&y!==(y=o[1]===1))&&(c.disabled=y),(!S||b&3)&&K(u,"arrow-right-disabled",o[1]===o[0].length),(!S||b&3&&w!==(w=o[1]===o[0].length))&&(N.disabled=w),h&&h.p&&(!S||b&256)&&Oe(h,A,o,o[8],S?je(A,o[8],b,Me):Ue(o[8]),we);let i=P;P=ee(o),P===i?L[P].p(o,b):(ie(),X(L[i],1,1,()=>{L[i]=null}),fe(),k=L[P],k?k.p(o,b):(k=L[P]=v[P](o),k.c()),W(k,1),k.m(V.parentNode,V))},i(o){S||(W(e.$$.fragment,o),W(h,o),W(k),S=!0)},o(o){X(e.$$.fragment,o),X(h,o),X(k),S=!1},d(o){o&&(E(s),E(I),E(V)),x(e),h&&h.d(o),L[P].d(o),C=!1,Ne(_)}}}function Qe(t,s,n){let e;We(t,Le,u=>n(2,e=u));let{$$slots:l={},$$scope:a}=s,{events:d=[]}=s,c=1;function g(u){switch(u.code){case"ArrowRight":case"KeyL":u.preventDefault(),u.stopPropagation(),c<d.length&&n(1,c+=1);break;case"ArrowLeft":case"KeyH":u.preventDefault(),u.stopPropagation(),c>1&&n(1,c-=1);break}}function y(u){c=u,n(1,c)}const T=()=>{n(1,c-=1)},N=()=>{n(1,c+=1)};return t.$$set=u=>{"events"in u&&n(0,d=u.events),"$$scope"in u&&n(8,a=u.$$scope)},[d,c,e,g,l,y,T,N,a]}class ot extends Ae{constructor(s){super(),De(this,s,Qe,Je,se,{events:0})}}export{ot as W};