import{S as be,b as Ee,a as Ie,m as k,w as V,c as M,p as w,q as b,x as W,k as i,d as H,u as D,f as v,L as p,y as Q,n as G,C,D as F,E as N,j as P,g as S,F as L,G as Ql,P as kl,H as Zl,I as Xl,J as Yl,N as wl,U as bl,K as ce,e as te,z as He,aa as yl,ab as xl,h as qe,ar as Oe,as as Fl,a7 as Nl,a5 as Je,V as es,A as Ce,Z as Fe,_ as Ne,a0 as El,Q as Il,a1 as ts,r as ls}from"../chunks/index.6779d4e2.js";import{p as Ll}from"../chunks/stores.16743cdc.js";import{P as ss}from"../chunks/page-title.990af218.js";import{w as rs}from"../chunks/index.1302fd9b.js";import{g as Le}from"../chunks/navigation.f48fc852.js";import{A as ns}from"../chunks/accordion.6253b32e.js";import{t as h}from"../chunks/translate.64137fbc.js";import{S as as,a as Ke,d as os,u as us,p as is,t as fs}from"../chunks/schedule-service.d822f86a.js";import{E as cs}from"../chunks/empty-state.c8d40bbf.js";import{L as Be}from"../chunks/link.8030aa06.js";import{i as Tl}from"../chunks/workflow-service.14e38b95.js";import{t as Ye,r as ye,b as he}from"../chunks/format-date.79dd40f6.js";import{l as Xe,g as Dl,c as Ue,u as ds}from"../chunks/route-for.6d22e52a.js";import{W as Ul}from"../chunks/workflow-status.e9cc3c02.js";import{L as jl}from"../chunks/loading.f0ef345a.js";import{d as Qe}from"../chunks/menu.7e3d54af.js";import{M as Ze}from"../chunks/modal.118648f9.js";import{R as ms,a as ps}from"../chunks/radio-input.fea9b4f9.js";import{S as hs}from"../chunks/split-button.9aad1ebf.js";import{c as _s}from"../chunks/core-user.1973d180.js";import{l as je}from"../chunks/schedules.a6a1335a.js";function $s(s){let e,l,t=h("notes")+"",n,r,a,o;return{c(){e=k("div"),l=k("h2"),n=V(t),r=M(),a=k("p"),o=V(s[0]),this.h()},l(u){e=w(u,"DIV",{});var f=b(e);l=w(f,"H2",{class:!0});var d=b(l);n=W(d,t),d.forEach(i),r=H(f),a=w(f,"P",{});var E=b(a);o=W(E,s[0]),E.forEach(i),f.forEach(i),this.h()},h(){D(l,"class","mb-4 text-2xl")},m(u,f){v(u,e,f),p(e,l),p(l,n),p(e,r),p(e,a),p(a,o)},p(u,[f]){f&1&&Q(o,u[0])},i:G,o:G,d(u){u&&i(e)}}}function vs(s,e,l){let{notes:t=""}=e;return s.$$set=n=>{"notes"in n&&l(0,t=n.notes)},[t]}class gs extends be{constructor(e){super(),Ee(this,e,vs,$s,Ie,{notes:0})}}function Rl(s){var a;let e,l=h("schedules","remaining-actions")+"",t,n=(((a=s[1])==null?void 0:a.remainingActions)??h("none"))+"",r;return{c(){e=k("p"),t=V(l),r=V(n)},l(o){e=w(o,"P",{});var u=b(e);t=W(u,l),r=W(u,n),u.forEach(i)},m(o,u){v(o,e,u),p(e,t),p(e,r)},p(o,u){var f;u&2&&n!==(n=(((f=o[1])==null?void 0:f.remainingActions)??h("none"))+"")&&Q(r,n)},d(o){o&&i(e)}}}function ks(s){var Te,ie,re,ve,y,De,ge;let e,l=h("schedules","start-time")+"",t,n,r=(((Te=s[0])==null?void 0:Te.startTime)??h("none"))+"",a,o,u,f=h("schedules","end-time")+"",d,E=(((ie=s[0])==null?void 0:ie.endTime)??h("none"))+"",$,c,m,_=h("schedules","jitter")+"",T,q=(((re=s[0])==null?void 0:re.jitter)??h("none"))+"",U,ae,le,_e=h("schedules","exclusion-calendar")+"",x,oe=(((y=(ve=s[0])==null?void 0:ve.excludeCalendar)==null?void 0:y[0])??h("none"))+"",Z,ue,X,J,se=h("schedules","overlap-policy")+"",$e,Y=(((De=s[2])==null?void 0:De.overlapPolicy)??h("none"))+"",de,O=((ge=s[1])==null?void 0:ge.limitedActions)&&Rl(s);return{c(){e=k("p"),t=V(l),n=M(),a=V(r),o=M(),u=k("p"),d=V(f),$=V(E),c=M(),m=k("p"),T=V(_),U=V(q),ae=M(),le=k("p"),x=V(_e),Z=V(oe),ue=M(),O&&O.c(),X=M(),J=k("p"),$e=V(se),de=V(Y)},l(I){e=w(I,"P",{});var j=b(e);t=W(j,l),n=H(j),a=W(j,r),j.forEach(i),o=H(I),u=w(I,"P",{});var A=b(u);d=W(A,f),$=W(A,E),A.forEach(i),c=H(I),m=w(I,"P",{});var B=b(m);T=W(B,_),U=W(B,q),B.forEach(i),ae=H(I),le=w(I,"P",{});var ee=b(le);x=W(ee,_e),Z=W(ee,oe),ee.forEach(i),ue=H(I),O&&O.l(I),X=H(I),J=w(I,"P",{});var me=b(J);$e=W(me,se),de=W(me,Y),me.forEach(i)},m(I,j){v(I,e,j),p(e,t),p(e,n),p(e,a),v(I,o,j),v(I,u,j),p(u,d),p(u,$),v(I,c,j),v(I,m,j),p(m,T),p(m,U),v(I,ae,j),v(I,le,j),p(le,x),p(le,Z),v(I,ue,j),O&&O.m(I,j),v(I,X,j),v(I,J,j),p(J,$e),p(J,de)},p(I,j){var A,B,ee,me,ke,K,z;j&1&&r!==(r=(((A=I[0])==null?void 0:A.startTime)??h("none"))+"")&&Q(a,r),j&1&&E!==(E=(((B=I[0])==null?void 0:B.endTime)??h("none"))+"")&&Q($,E),j&1&&q!==(q=(((ee=I[0])==null?void 0:ee.jitter)??h("none"))+"")&&Q(U,q),j&1&&oe!==(oe=(((ke=(me=I[0])==null?void 0:me.excludeCalendar)==null?void 0:ke[0])??h("none"))+"")&&Q(Z,oe),(K=I[1])!=null&&K.limitedActions?O?O.p(I,j):(O=Rl(I),O.c(),O.m(X.parentNode,X)):O&&(O.d(1),O=null),j&4&&Y!==(Y=(((z=I[2])==null?void 0:z.overlapPolicy)??h("none"))+"")&&Q(de,Y)},d(I){I&&i(e),I&&i(o),I&&i(u),I&&i(c),I&&i(m),I&&i(ae),I&&i(le),I&&i(ue),O&&O.d(I),I&&i(X),I&&i(J)}}}function ws(s){let e,l,t,n;return e=new gs({props:{notes:s[3]}}),t=new ns({props:{title:h("schedules","advanced-settings"),$$slots:{default:[ks]},$$scope:{ctx:s}}}),{c(){C(e.$$.fragment),l=M(),C(t.$$.fragment)},l(r){F(e.$$.fragment,r),l=H(r),F(t.$$.fragment,r)},m(r,a){N(e,r,a),v(r,l,a),N(t,r,a),n=!0},p(r,[a]){const o={};a&8&&(o.notes=r[3]),e.$set(o);const u={};a&23&&(u.$$scope={dirty:a,ctx:r}),t.$set(u)},i(r){n||(P(e.$$.fragment,r),P(t.$$.fragment,r),n=!0)},o(r){S(e.$$.fragment,r),S(t.$$.fragment,r),n=!1},d(r){L(e,r),r&&i(l),L(t,r)}}}function bs(s,e,l){let{spec:t}=e,{state:n}=e,{policies:r}=e,{notes:a=""}=e;return s.$$set=o=>{"spec"in o&&l(0,t=o.spec),"state"in o&&l(1,n=o.state),"policies"in o&&l(2,r=o.policies),"notes"in o&&l(3,a=o.notes)},[t,n,r,a]}class Es extends be{constructor(e){super(),Ee(this,e,bs,ws,Ie,{spec:0,state:1,policies:2,notes:3})}}function Is(s){let e,l,t;const n=s[3].default,r=Ql(n,s,s[2],null);return{c(){e=k("div"),r&&r.c(),this.h()},l(a){e=w(a,"DIV",{class:!0});var o=b(e);r&&r.l(o),o.forEach(i),this.h()},h(){D(e,"class",l="panel bg-white "+s[1].class+" svelte-11fqqfg"),kl(e,"error",s[0])},m(a,o){v(a,e,o),r&&r.m(e,null),t=!0},p(a,[o]){r&&r.p&&(!t||o&4)&&Zl(r,n,a,a[2],t?Yl(n,a[2],o,null):Xl(a[2]),null),(!t||o&2&&l!==(l="panel bg-white "+a[1].class+" svelte-11fqqfg"))&&D(e,"class",l),(!t||o&3)&&kl(e,"error",a[0])},i(a){t||(P(r,a),t=!0)},o(a){S(r,a),t=!1},d(a){a&&i(e),r&&r.d(a)}}}function Ts(s,e,l){let{$$slots:t={},$$scope:n}=e,{error:r=!1}=e;return s.$$set=a=>{l(1,e=wl(wl({},e),bl(a))),"error"in a&&l(0,r=a.error),"$$scope"in a&&l(2,n=a.$$scope)},e=bl(e),[r,e,n,t]}class ze extends be{constructor(e){super(),Ee(this,e,Ts,Is,Ie,{error:0})}}function Ds(s){let e,l=h("schedules","error-title")+"",t,n,r,a;return{c(){e=k("p"),t=V(l),n=M(),r=k("p"),a=V(s[0]),this.h()},l(o){e=w(o,"P",{class:!0});var u=b(e);t=W(u,l),u.forEach(i),n=H(o),r=w(o,"P",{class:!0});var f=b(r);a=W(f,s[0]),f.forEach(i),this.h()},h(){D(e,"class","error-text svelte-1lke5yx"),D(r,"class","error-text svelte-1lke5yx")},m(o,u){v(o,e,u),p(e,t),v(o,n,u),v(o,r,u),p(r,a)},p(o,u){u&1&&Q(a,o[0])},d(o){o&&i(e),o&&i(n),o&&i(r)}}}function Rs(s){let e,l;return e=new ze({props:{error:!0,$$slots:{default:[Ds]},$$scope:{ctx:s}}}),{c(){C(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,[n]){const r={};n&3&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Ps(s,e,l){let{error:t=""}=e;return s.$$set=n=>{"error"in n&&l(0,t=n.error)},[t]}class Ol extends be{constructor(e){super(),Ee(this,e,Ps,Rs,Ie,{error:0})}}function Ss(s){let e,l=h("schedules","schedule-spec")+"",t,n,r,a,o;return a=new as({props:{calendar:s[0],interval:s[1],class:"text-base"}}),{c(){e=k("h2"),t=V(l),n=M(),r=k("div"),C(a.$$.fragment),this.h()},l(u){e=w(u,"H2",{class:!0});var f=b(e);t=W(f,l),f.forEach(i),n=H(u),r=w(u,"DIV",{class:!0});var d=b(r);F(a.$$.fragment,d),d.forEach(i),this.h()},h(){D(e,"class","mb-4 text-2xl"),D(r,"class","pr-2")},m(u,f){v(u,e,f),p(e,t),v(u,n,f),v(u,r,f),N(a,r,null),o=!0},p(u,f){const d={};f&1&&(d.calendar=u[0]),f&2&&(d.interval=u[1]),a.$set(d)},i(u){o||(P(a.$$.fragment,u),o=!0)},o(u){S(a.$$.fragment,u),o=!1},d(u){u&&i(e),u&&i(n),u&&i(r),L(a)}}}function Vs(s){let e,l;return e=new ze({props:{$$slots:{default:[Ss]},$$scope:{ctx:s}}}),{c(){C(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,[n]){const r={};n&7&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Ws(s,e,l){let{calendar:t=void 0}=e,{interval:n=void 0}=e;return s.$$set=r=>{"calendar"in r&&l(0,t=r.calendar),"interval"in r&&l(1,n=r.interval)},[t,n]}class As extends be{constructor(e){super(),Ee(this,e,Ws,Vs,Ie,{calendar:0,interval:1})}}function Pl(s,e,l){const t=s.slice();return t[5]=e[l],t}function Ms(s){let e,l,t,n,r=s[5].startWorkflowResult.workflowId+"",a,o,u,f,d=he(s[5].actualTime,s[2],{relative:s[3]})+"",E;return{c(){e=k("div"),l=k("div"),t=M(),n=k("div"),a=V(r),o=M(),u=k("div"),f=k("p"),E=V(d),this.h()},l($){e=w($,"DIV",{class:!0});var c=b(e);l=w(c,"DIV",{class:!0}),b(l).forEach(i),t=H(c),n=w(c,"DIV",{class:!0});var m=b(n);a=W(m,r),m.forEach(i),o=H(c),u=w(c,"DIV",{class:!0});var _=b(u);f=w(_,"P",{});var T=b(f);E=W(T,d),T.forEach(i),_.forEach(i),c.forEach(i),this.h()},h(){D(l,"class","w-28"),D(n,"class","w-96"),D(u,"class","ml-auto"),D(e,"class","row svelte-lqpjgu")},m($,c){v($,e,c),p(e,l),p(e,t),p(e,n),p(n,a),p(e,o),p(e,u),p(u,f),p(f,E)},p($,c){c&1&&r!==(r=$[5].startWorkflowResult.workflowId+"")&&Q(a,r),c&13&&d!==(d=he($[5].actualTime,$[2],{relative:$[3]})+"")&&Q(E,d)},i:G,o:G,d($){$&&i(e)}}}function Hs(s){let e,l,t,n,r,a,o,u,f,d=he(s[5].actualTime,s[2],{relative:s[3]})+"",E,$;return t=new Ul({props:{status:s[8].status}}),a=new Be({props:{newTab:!0,href:Dl({workflow:s[5].startWorkflowResult.workflowId,run:s[5].startWorkflowResult.runId,namespace:s[1]}),$$slots:{default:[qs]},$$scope:{ctx:s}}}),{c(){e=k("div"),l=k("div"),C(t.$$.fragment),n=M(),r=k("div"),C(a.$$.fragment),o=M(),u=k("div"),f=k("p"),E=V(d),this.h()},l(c){e=w(c,"DIV",{class:!0});var m=b(e);l=w(m,"DIV",{class:!0});var _=b(l);F(t.$$.fragment,_),_.forEach(i),n=H(m),r=w(m,"DIV",{class:!0});var T=b(r);F(a.$$.fragment,T),T.forEach(i),o=H(m),u=w(m,"DIV",{class:!0});var q=b(u);f=w(q,"P",{});var U=b(f);E=W(U,d),U.forEach(i),q.forEach(i),m.forEach(i),this.h()},h(){D(l,"class","w-28"),D(r,"class","mx-2 w-auto break-words"),D(u,"class","ml-auto"),D(e,"class","row svelte-lqpjgu")},m(c,m){v(c,e,m),p(e,l),N(t,l,null),p(e,n),p(e,r),N(a,r,null),p(e,o),p(e,u),p(u,f),p(f,E),$=!0},p(c,m){const _={};m&3&&(_.status=c[8].status),t.$set(_);const T={};m&3&&(T.href=Dl({workflow:c[5].startWorkflowResult.workflowId,run:c[5].startWorkflowResult.runId,namespace:c[1]})),m&513&&(T.$$scope={dirty:m,ctx:c}),a.$set(T),(!$||m&13)&&d!==(d=he(c[5].actualTime,c[2],{relative:c[3]})+"")&&Q(E,d)},i(c){$||(P(t.$$.fragment,c),P(a.$$.fragment,c),$=!0)},o(c){S(t.$$.fragment,c),S(a.$$.fragment,c),$=!1},d(c){c&&i(e),L(t),L(a)}}}function qs(s){let e=s[5].startWorkflowResult.workflowId+"",l;return{c(){l=V(e)},l(t){l=W(t,e)},m(t,n){v(t,l,n)},p(t,n){n&1&&e!==(e=t[5].startWorkflowResult.workflowId+"")&&Q(l,e)},d(t){t&&i(l)}}}function Cs(s){return{c:G,l:G,m:G,p:G,i:G,o:G,d:G}}function Sl(s,e){let l,t,n,r,a={ctx:e,current:null,token:null,hasCatch:!0,pending:Cs,then:Hs,catch:Ms,value:8,blocks:[,,,]};return Oe(n=Tl({namespace:e[1],workflowId:Xe(e[5].startWorkflowResult.workflowId),runId:e[5].startWorkflowResult.runId},fetch),a),{key:s,first:null,c(){l=te(),t=te(),a.block.c(),this.h()},l(o){l=te(),t=te(),a.block.l(o),this.h()},h(){this.first=l},m(o,u){v(o,l,u),v(o,t,u),a.block.m(o,a.anchor=u),a.mount=()=>t.parentNode,a.anchor=t,r=!0},p(o,u){e=o,a.ctx=e,u&3&&n!==(n=Tl({namespace:e[1],workflowId:Xe(e[5].startWorkflowResult.workflowId),runId:e[5].startWorkflowResult.runId},fetch))&&Oe(n,a)||Fl(a,e,u)},i(o){r||(P(a.block),r=!0)},o(o){for(let u=0;u<3;u+=1){const f=a.blocks[u];S(f)}r=!1},d(o){o&&i(l),o&&i(t),a.block.d(o),a.token=null,a=null}}}function Vl(s){let e,l;return e=new cs({props:{title:h("schedules","recent-runs-empty-state-title")}}),{c(){C(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p:G,i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Fs(s){let e,l=h("schedules","recent-runs")+"",t,n,r=[],a=new Map,o,u,f,d=s[4](s[0]);const E=c=>{var m,_;return(_=(m=c[5])==null?void 0:m.startWorkflowResult)==null?void 0:_.workflowId};for(let c=0;c<d.length;c+=1){let m=Pl(s,d,c),_=E(m);a.set(_,r[c]=Sl(_,m))}let $=!s[0].length&&Vl();return{c(){e=k("h2"),t=V(l),n=M();for(let c=0;c<r.length;c+=1)r[c].c();o=M(),$&&$.c(),u=te(),this.h()},l(c){e=w(c,"H2",{class:!0});var m=b(e);t=W(m,l),m.forEach(i),n=H(c);for(let _=0;_<r.length;_+=1)r[_].l(c);o=H(c),$&&$.l(c),u=te(),this.h()},h(){D(e,"class","mb-4 text-2xl")},m(c,m){v(c,e,m),p(e,t),v(c,n,m);for(let _=0;_<r.length;_+=1)r[_].m(c,m);v(c,o,m),$&&$.m(c,m),v(c,u,m),f=!0},p(c,m){m&31&&(d=c[4](c[0]),He(),r=yl(r,m,E,1,c,d,a,o.parentNode,xl,Sl,o,Pl),qe()),c[0].length?$&&(He(),S($,1,1,()=>{$=null}),qe()):$?($.p(c,m),m&1&&P($,1)):($=Vl(),$.c(),P($,1),$.m(u.parentNode,u))},i(c){if(!f){for(let m=0;m<d.length;m+=1)P(r[m]);P($),f=!0}},o(c){for(let m=0;m<r.length;m+=1)S(r[m]);S($),f=!1},d(c){c&&i(e),c&&i(n);for(let m=0;m<r.length;m+=1)r[m].d(c);c&&i(o),$&&$.d(c),c&&i(u)}}}function Ns(s){let e,l;return e=new ze({props:{class:"w-full",$$slots:{default:[Fs]},$$scope:{ctx:s}}}),{c(){C(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,[n]){const r={};n&527&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Ls(s,e,l){let t,n;ce(s,Ye,u=>l(2,t=u)),ce(s,ye,u=>l(3,n=u));let{recentRuns:r=[]}=e,{namespace:a}=e;const o=u=>{var f,d;return(d=(f=u==null?void 0:u.sort((E,$)=>new Date($.actualTime).getTime()-new Date(E.actualTime).getTime()))===null||f===void 0?void 0:f.slice(0,5))!==null&&d!==void 0?d:[]};return s.$$set=u=>{"recentRuns"in u&&l(0,r=u.recentRuns),"namespace"in u&&l(1,a=u.namespace)},[r,a,t,n,o]}class Us extends be{constructor(e){super(),Ee(this,e,Ls,Ns,Ie,{recentRuns:0,namespace:1})}}function Wl(s,e,l){const t=s.slice();return t[3]=e[l],t}function Al(s){let e,l,t=he(s[3],s[1],{relative:s[2],relativeLabel:h("from-now")})+"",n,r;return{c(){e=k("div"),l=k("p"),n=V(t),r=M(),this.h()},l(a){e=w(a,"DIV",{class:!0});var o=b(e);l=w(o,"P",{});var u=b(l);n=W(u,t),u.forEach(i),r=H(o),o.forEach(i),this.h()},h(){D(e,"class","row svelte-kbuuws")},m(a,o){v(a,e,o),p(e,l),p(l,n),p(e,r)},p(a,o){o&7&&t!==(t=he(a[3],a[1],{relative:a[2],relativeLabel:h("from-now")})+"")&&Q(n,t)},d(a){a&&i(e)}}}function js(s){let e,l=h("schedules","upcoming-runs")+"",t,n,r,a=s[0].slice(0,5),o=[];for(let u=0;u<a.length;u+=1)o[u]=Al(Wl(s,a,u));return{c(){e=k("h2"),t=V(l),n=M();for(let u=0;u<o.length;u+=1)o[u].c();r=te(),this.h()},l(u){e=w(u,"H2",{class:!0});var f=b(e);t=W(f,l),f.forEach(i),n=H(u);for(let d=0;d<o.length;d+=1)o[d].l(u);r=te(),this.h()},h(){D(e,"class","mb-4 text-2xl")},m(u,f){v(u,e,f),p(e,t),v(u,n,f);for(let d=0;d<o.length;d+=1)o[d].m(u,f);v(u,r,f)},p(u,f){if(f&7){a=u[0].slice(0,5);let d;for(d=0;d<a.length;d+=1){const E=Wl(u,a,d);o[d]?o[d].p(E,f):(o[d]=Al(E),o[d].c(),o[d].m(r.parentNode,r))}for(;d<o.length;d+=1)o[d].d(1);o.length=a.length}},d(u){u&&i(e),u&&i(n),Nl(o,u),u&&i(r)}}}function Os(s){let e,l;return e=new ze({props:{$$slots:{default:[js]},$$scope:{ctx:s}}}),{c(){C(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,[n]){const r={};n&71&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Bs(s,e,l){let t,n;ce(s,Ye,a=>l(1,t=a)),ce(s,ye,a=>l(2,n=a));let{futureRuns:r=[]}=e;return s.$$set=a=>{"futureRuns"in a&&l(0,r=a.futureRuns)},[r,t,n]}class zs extends be{constructor(e){super(),Ee(this,e,Bs,Os,Ie,{futureRuns:0})}}function Ml(s,e,l){const t=s.slice();return t[40]=e[l],t}function Gs(s){var c;let e,l,t,n,r,a,o,u,f,d,E,$;return t=new Be({props:{icon:"chevron-left",$$slots:{default:[Js]},$$scope:{ctx:s}}}),t.$on("click",s[34]),E=new Ol({props:{error:(c=s[9])==null?void 0:c.message}}),{c(){e=k("header"),l=k("div"),C(t.$$.fragment),n=M(),r=k("h1"),a=V(s[11]),o=M(),u=k("p"),f=V(s[10]),d=M(),C(E.$$.fragment),this.h()},l(m){e=w(m,"HEADER",{class:!0});var _=b(e);l=w(_,"DIV",{class:!0});var T=b(l);F(t.$$.fragment,T),n=H(T),r=w(T,"H1",{class:!0,"data-testid":!0});var q=b(r);a=W(q,s[11]),q.forEach(i),o=H(T),u=w(T,"P",{class:!0});var U=b(u);f=W(U,s[10]),U.forEach(i),T.forEach(i),_.forEach(i),d=H(m),F(E.$$.fragment,m),this.h()},h(){D(r,"class","mt-8 select-all text-2xl font-medium"),D(r,"data-testid","schedule-name"),D(u,"class","text-sm"),D(l,"class","relative flex flex-col gap-1"),D(e,"class","mb-8")},m(m,_){v(m,e,_),p(e,l),N(t,l,null),p(l,n),p(l,r),p(r,a),p(l,o),p(l,u),p(u,f),v(m,d,_),N(E,m,_),$=!0},p(m,_){var U;const T={};_[1]&4096&&(T.$$scope={dirty:_,ctx:m}),t.$set(T);const q={};_[0]&1&&(q.error=(U=m[9])==null?void 0:U.message),E.$set(q)},i(m){$||(P(t.$$.fragment,m),P(E.$$.fragment,m),$=!0)},o(m){S(t.$$.fragment,m),S(E.$$.fragment,m),$=!1},d(m){m&&i(e),L(t),m&&i(d),L(E,m)}}}function Js(s){let e=h("schedules","back-to-schedules")+"",l;return{c(){l=V(e)},l(t){l=W(t,e)},m(t,n){v(t,l,n)},p:G,d(t){t&&i(l)}}}function Ks(s){let e,l,t,n;const r=[Zs,Qs],a=[];function o(u,f){return u[6]?0:1}return e=o(s),l=a[e]=r[e](s),{c(){l.c(),t=te()},l(u){l.l(u),t=te()},m(u,f){a[e].m(u,f),v(u,t,f),n=!0},p(u,f){let d=e;e=o(u),e===d?a[e].p(u,f):(He(),S(a[d],1,1,()=>{a[d]=null}),qe(),l=a[e],l?l.p(u,f):(l=a[e]=r[e](u),l.c()),P(l,1),l.m(t.parentNode,t))},i(u){n||(P(l),n=!0)},o(u){S(l),n=!1},d(u){a[e].d(u),u&&i(t)}}}function Qs(s){var tt,lt,st,rt,nt,at,ot,ut,it,ft,ct,dt,mt,pt,ht,_t,$t,vt,gt,kt,wt,bt,Et,It,Tt,Dt,Rt,Pt,St,Vt,Wt,At,Mt,Ht,qt,Ct,Ft;let e,l,t,n,r,a,o,u,f,d,E,$,c=((nt=(rt=(st=(lt=(tt=s[39])==null?void 0:tt.schedule)==null?void 0:lt.action)==null?void 0:st.startWorkflow)==null?void 0:rt.workflowType)==null?void 0:nt.name)+"",m,_,T,q,U=h("created",{created:he((ot=(at=s[39])==null?void 0:at.info)==null?void 0:ot.createTime,s[7],{relative:s[8]})})+"",ae,le,_e,x,oe,Z,ue,X,J,se,$e,Y,de,O,Te,ie,re,ve,y,De,ge,I,j,A,B,ee,me,ke;t=new Be({props:{icon:"chevron-left",$$slots:{default:[Xs]},$$scope:{ctx:s}}}),t.$on("click",s[22]),d=new Ul({props:{status:(ut=s[39])!=null&&ut.schedule.state.paused?"Paused":"Running"}});let K=((ft=(it=s[39])==null?void 0:it.info)==null?void 0:ft.updateTime)&&Hl(s);x=new hs({props:{position:"right",label:(mt=(dt=(ct=s[39])==null?void 0:ct.schedule)==null?void 0:dt.state)!=null&&mt.paused?h("schedules","unpause"):h("schedules","pause"),menuLabel:h("schedules","schedule-actions"),id:"schedule-actions",disabled:s[15],$$slots:{default:[er]},$$scope:{ctx:s}}}),x.$on("click",s[25]);let z=((ht=(pt=s[39])==null?void 0:pt.info)==null?void 0:ht.invalidScheduleError)&&ql(s);se=new Us({props:{namespace:s[10],recentRuns:($t=(_t=s[39])==null?void 0:_t.info)==null?void 0:$t.recentActions}}),Y=new zs({props:{futureRuns:(gt=(vt=s[39])==null?void 0:vt.info)==null?void 0:gt.futureActionTimes}}),O=new Es({props:{spec:(wt=(kt=s[39])==null?void 0:kt.schedule)==null?void 0:wt.spec,state:(Et=(bt=s[39])==null?void 0:bt.schedule)==null?void 0:Et.state,policies:(Tt=(It=s[39])==null?void 0:It.schedule)==null?void 0:Tt.policies,notes:(Pt=(Rt=(Dt=s[39])==null?void 0:Dt.schedule)==null?void 0:Rt.state)==null?void 0:Pt.notes}}),re=new As({props:{calendar:(At=(Wt=(Vt=(St=s[39])==null?void 0:St.schedule)==null?void 0:Vt.spec)==null?void 0:Wt.structuredCalendar)==null?void 0:At[0],interval:(Ct=(qt=(Ht=(Mt=s[39])==null?void 0:Mt.schedule)==null?void 0:Ht.spec)==null?void 0:qt.interval)==null?void 0:Ct[0]}});function Bl(g){s[27](g)}function zl(){return s[28](s[39])}let xe={id:"pause-schedule-modal",confirmType:"primary",confirmText:(Ft=s[39])!=null&&Ft.schedule.state.paused?h("schedules","unpause"):h("schedules","pause"),cancelText:h("cancel"),confirmDisabled:!s[4],$$slots:{content:[lr],title:[tr]},$$scope:{ctx:s}};s[1]!==void 0&&(xe.open=s[1]),y=new Ze({props:xe}),Ce.push(()=>Fe(y,"open",Bl)),y.$on("confirmModal",zl),y.$on("cancelModal",s[19]);function Gl(g){s[29](g)}let et={id:"trigger-schedule-modal",large:!0,confirmType:"primary",confirmText:h("schedules","trigger"),cancelText:h("cancel"),loading:s[5],$$slots:{content:[nr],title:[sr]},$$scope:{ctx:s}};s[2]!==void 0&&(et.open=s[2]),I=new Ze({props:et}),Ce.push(()=>Fe(I,"open",Gl)),I.$on("confirmModal",s[30]),I.$on("cancelModal",s[31]);function Jl(g){s[32](g)}function Kl(g){s[33](g)}let Ge={id:"delete-schedule-modal",confirmType:"destructive",confirmText:h("delete"),cancelText:h("cancel"),$$slots:{content:[or],title:[ar]},$$scope:{ctx:s}};return s[3]!==void 0&&(Ge.open=s[3]),s[9]!==void 0&&(Ge.error=s[9]),B=new Ze({props:Ge}),Ce.push(()=>Fe(B,"open",Jl)),Ce.push(()=>Fe(B,"error",Kl)),B.$on("confirmModal",s[16]),B.$on("cancelModal",s[19]),{c(){e=k("header"),l=k("div"),C(t.$$.fragment),n=M(),r=k("h1"),a=k("span"),o=V(s[11]),u=M(),f=k("div"),C(d.$$.fragment),E=M(),$=k("p"),m=V(c),_=M(),T=k("div"),q=k("p"),ae=V(U),le=M(),K&&K.c(),_e=M(),C(x.$$.fragment),oe=M(),Z=k("div"),z&&z.c(),ue=M(),X=k("div"),J=k("div"),C(se.$$.fragment),$e=M(),C(Y.$$.fragment),de=M(),C(O.$$.fragment),Te=M(),ie=k("div"),C(re.$$.fragment),ve=M(),C(y.$$.fragment),ge=M(),C(I.$$.fragment),A=M(),C(B.$$.fragment),this.h()},l(g){e=w(g,"HEADER",{class:!0});var R=b(e);l=w(R,"DIV",{class:!0});var ne=b(l);F(t.$$.fragment,ne),n=H(ne),r=w(ne,"H1",{class:!0});var We=b(r);a=w(We,"SPAN",{class:!0,"data-testid":!0});var Se=b(a);o=W(Se,s[11]),Se.forEach(i),We.forEach(i),u=H(ne),f=w(ne,"DIV",{class:!0});var Pe=b(f);F(d.$$.fragment,Pe),E=H(Pe),$=w(Pe,"P",{});var Ae=b($);m=W(Ae,c),Ae.forEach(i),Pe.forEach(i),_=H(ne),T=w(ne,"DIV",{class:!0});var Re=b(T);q=w(Re,"P",{});var Ve=b(q);ae=W(Ve,U),Ve.forEach(i),Re.forEach(i),le=H(ne),K&&K.l(ne),ne.forEach(i),_e=H(R),F(x.$$.fragment,R),R.forEach(i),oe=H(g),Z=w(g,"DIV",{class:!0});var pe=b(Z);z&&z.l(pe),ue=H(pe),X=w(pe,"DIV",{class:!0});var we=b(X);J=w(we,"DIV",{class:!0});var fe=b(J);F(se.$$.fragment,fe),$e=H(fe),F(Y.$$.fragment,fe),de=H(fe),F(O.$$.fragment,fe),fe.forEach(i),Te=H(we),ie=w(we,"DIV",{class:!0});var Me=b(ie);F(re.$$.fragment,Me),Me.forEach(i),we.forEach(i),pe.forEach(i),ve=H(g),F(y.$$.fragment,g),ge=H(g),F(I.$$.fragment,g),A=H(g),F(B.$$.fragment,g),this.h()},h(){D(a,"class","select-all font-medium"),D(a,"data-testid","schedule-name"),D(r,"class","relative mt-4 flex items-center text-2xl"),D(f,"class","flex items-center gap-2 text-lg"),D(T,"class","flex items-center gap-2 text-sm"),D(l,"class","relative flex flex-col gap-4"),D(e,"class","mb-8 flex flex-row justify-between gap-4"),D(J,"class","flex w-full flex-col items-start gap-4 xl:w-2/3"),D(ie,"class","w-full xl:w-1/3"),D(X,"class","flex flex-col gap-4 xl:flex-row"),D(Z,"class","flex flex-col gap-4 pb-24")},m(g,R){v(g,e,R),p(e,l),N(t,l,null),p(l,n),p(l,r),p(r,a),p(a,o),p(l,u),p(l,f),N(d,f,null),p(f,E),p(f,$),p($,m),p(l,_),p(l,T),p(T,q),p(q,ae),p(l,le),K&&K.m(l,null),p(e,_e),N(x,e,null),v(g,oe,R),v(g,Z,R),z&&z.m(Z,null),p(Z,ue),p(Z,X),p(X,J),N(se,J,null),p(J,$e),N(Y,J,null),p(J,de),N(O,J,null),p(X,Te),p(X,ie),N(re,ie,null),v(g,ve,R),N(y,g,R),v(g,ge,R),N(I,g,R),v(g,A,R),N(B,g,R),ke=!0},p(g,R){var Me,Nt,Lt,Ut,jt,Ot,Bt,zt,Gt,Jt,Kt,Qt,Zt,Xt,Yt,yt,xt,el,tl,ll,sl,rl,nl,al,ol,ul,il,fl,cl,dl,ml,pl,hl,_l,$l,vl,gl;s=g;const ne={};R[1]&4096&&(ne.$$scope={dirty:R,ctx:s}),t.$set(ne);const We={};R[0]&1&&(We.status=(Me=s[39])!=null&&Me.schedule.state.paused?"Paused":"Running"),d.$set(We),(!ke||R[0]&1)&&c!==(c=((Ot=(jt=(Ut=(Lt=(Nt=s[39])==null?void 0:Nt.schedule)==null?void 0:Lt.action)==null?void 0:Ut.startWorkflow)==null?void 0:jt.workflowType)==null?void 0:Ot.name)+"")&&Q(m,c),(!ke||R[0]&385)&&U!==(U=h("created",{created:he((zt=(Bt=s[39])==null?void 0:Bt.info)==null?void 0:zt.createTime,s[7],{relative:s[8]})})+"")&&Q(ae,U),(Jt=(Gt=s[39])==null?void 0:Gt.info)!=null&&Jt.updateTime?K?K.p(s,R):(K=Hl(s),K.c(),K.m(l,null)):K&&(K.d(1),K=null);const Se={};R[0]&1&&(Se.label=(Zt=(Qt=(Kt=s[39])==null?void 0:Kt.schedule)==null?void 0:Qt.state)!=null&&Zt.paused?h("schedules","unpause"):h("schedules","pause")),R[0]&12|R[1]&4096&&(Se.$$scope={dirty:R,ctx:s}),x.$set(Se),(Yt=(Xt=s[39])==null?void 0:Xt.info)!=null&&Yt.invalidScheduleError?z?(z.p(s,R),R[0]&1&&P(z,1)):(z=ql(s),z.c(),P(z,1),z.m(Z,ue)):z&&(He(),S(z,1,1,()=>{z=null}),qe());const Pe={};R[0]&1&&(Pe.recentRuns=(xt=(yt=s[39])==null?void 0:yt.info)==null?void 0:xt.recentActions),se.$set(Pe);const Ae={};R[0]&1&&(Ae.futureRuns=(tl=(el=s[39])==null?void 0:el.info)==null?void 0:tl.futureActionTimes),Y.$set(Ae);const Re={};R[0]&1&&(Re.spec=(sl=(ll=s[39])==null?void 0:ll.schedule)==null?void 0:sl.spec),R[0]&1&&(Re.state=(nl=(rl=s[39])==null?void 0:rl.schedule)==null?void 0:nl.state),R[0]&1&&(Re.policies=(ol=(al=s[39])==null?void 0:al.schedule)==null?void 0:ol.policies),R[0]&1&&(Re.notes=(fl=(il=(ul=s[39])==null?void 0:ul.schedule)==null?void 0:il.state)==null?void 0:fl.notes),O.$set(Re);const Ve={};R[0]&1&&(Ve.calendar=(pl=(ml=(dl=(cl=s[39])==null?void 0:cl.schedule)==null?void 0:dl.spec)==null?void 0:ml.structuredCalendar)==null?void 0:pl[0]),R[0]&1&&(Ve.interval=(vl=($l=(_l=(hl=s[39])==null?void 0:hl.schedule)==null?void 0:_l.spec)==null?void 0:$l.interval)==null?void 0:vl[0]),re.$set(Ve);const pe={};R[0]&1&&(pe.confirmText=(gl=s[39])!=null&&gl.schedule.state.paused?h("schedules","unpause"):h("schedules","pause")),R[0]&16&&(pe.confirmDisabled=!s[4]),R[0]&17|R[1]&4096&&(pe.$$scope={dirty:R,ctx:s}),!De&&R[0]&2&&(De=!0,pe.open=s[1],Ne(()=>De=!1)),y.$set(pe);const we={};R[0]&32&&(we.loading=s[5]),R[1]&4096&&(we.$$scope={dirty:R,ctx:s}),!j&&R[0]&4&&(j=!0,we.open=s[2],Ne(()=>j=!1)),I.$set(we);const fe={};R[1]&4096&&(fe.$$scope={dirty:R,ctx:s}),!ee&&R[0]&8&&(ee=!0,fe.open=s[3],Ne(()=>ee=!1)),!me&&R[0]&512&&(me=!0,fe.error=s[9],Ne(()=>me=!1)),B.$set(fe)},i(g){ke||(P(t.$$.fragment,g),P(d.$$.fragment,g),P(x.$$.fragment,g),P(z),P(se.$$.fragment,g),P(Y.$$.fragment,g),P(O.$$.fragment,g),P(re.$$.fragment,g),P(y.$$.fragment,g),P(I.$$.fragment,g),P(B.$$.fragment,g),ke=!0)},o(g){S(t.$$.fragment,g),S(d.$$.fragment,g),S(x.$$.fragment,g),S(z),S(se.$$.fragment,g),S(Y.$$.fragment,g),S(O.$$.fragment,g),S(re.$$.fragment,g),S(y.$$.fragment,g),S(I.$$.fragment,g),S(B.$$.fragment,g),ke=!1},d(g){g&&i(e),L(t),L(d),K&&K.d(),L(x),g&&i(oe),g&&i(Z),z&&z.d(),L(se),L(Y),L(O),L(re),g&&i(ve),L(y,g),g&&i(ge),L(I,g),g&&i(A),L(B,g)}}}function Zs(s){let e,l;return e=new jl({props:{title:h("schedules","deleting"),class:"my-2"}}),{c(){C(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p:G,i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Xs(s){let e=h("schedules","back-to-schedules")+"",l;return{c(){l=V(e)},l(t){l=W(t,e)},m(t,n){v(t,l,n)},p:G,d(t){t&&i(l)}}}function Hl(s){var r,a;let e,l,t=h("last-updated",{updated:he((a=(r=s[39])==null?void 0:r.info)==null?void 0:a.updateTime,s[7],{relative:s[8]})})+"",n;return{c(){e=k("div"),l=k("p"),n=V(t),this.h()},l(o){e=w(o,"DIV",{class:!0});var u=b(e);l=w(u,"P",{});var f=b(l);n=W(f,t),f.forEach(i),u.forEach(i),this.h()},h(){D(e,"class","flex items-center gap-2 text-sm")},m(o,u){v(o,e,u),p(e,l),p(l,n)},p(o,u){var f,d;u[0]&385&&t!==(t=h("last-updated",{updated:he((d=(f=o[39])==null?void 0:f.info)==null?void 0:d.updateTime,o[7],{relative:o[8]})})+"")&&Q(n,t)},d(o){o&&i(e)}}}function Ys(s){let e=h("schedules","trigger")+"",l;return{c(){l=V(e)},l(t){l=W(t,e)},m(t,n){v(t,l,n)},p:G,d(t){t&&i(l)}}}function ys(s){let e=h("edit")+"",l;return{c(){l=V(e)},l(t){l=W(t,e)},m(t,n){v(t,l,n)},p:G,d(t){t&&i(l)}}}function xs(s){let e=h("delete")+"",l;return{c(){l=V(e)},l(t){l=W(t,e)},m(t,n){v(t,l,n)},p:G,d(t){t&&i(l)}}}function er(s){let e,l,t,n,r,a;return e=new Qe({props:{"data-testid":"trigger-schedule",$$slots:{default:[Ys]},$$scope:{ctx:s}}}),e.$on("click",s[23]),t=new Qe({props:{"data-testid":"edit-schedule",href:ds({namespace:s[10],scheduleId:s[11]}),$$slots:{default:[ys]},$$scope:{ctx:s}}}),r=new Qe({props:{"data-testid":"delete-schedule",destructive:!0,$$slots:{default:[xs]},$$scope:{ctx:s}}}),r.$on("click",s[24]),{c(){C(e.$$.fragment),l=M(),C(t.$$.fragment),n=M(),C(r.$$.fragment)},l(o){F(e.$$.fragment,o),l=H(o),F(t.$$.fragment,o),n=H(o),F(r.$$.fragment,o)},m(o,u){N(e,o,u),v(o,l,u),N(t,o,u),v(o,n,u),N(r,o,u),a=!0},p(o,u){const f={};u[1]&4096&&(f.$$scope={dirty:u,ctx:o}),e.$set(f);const d={};u[1]&4096&&(d.$$scope={dirty:u,ctx:o}),t.$set(d);const E={};u[1]&4096&&(E.$$scope={dirty:u,ctx:o}),r.$set(E)},i(o){a||(P(e.$$.fragment,o),P(t.$$.fragment,o),P(r.$$.fragment,o),a=!0)},o(o){S(e.$$.fragment,o),S(t.$$.fragment,o),S(r.$$.fragment,o),a=!1},d(o){L(e,o),o&&i(l),L(t,o),o&&i(n),L(r,o)}}}function ql(s){var n,r;let e,l,t;return l=new Ol({props:{error:(r=(n=s[39])==null?void 0:n.info)==null?void 0:r.invalidScheduleError}}),{c(){e=k("div"),C(l.$$.fragment),this.h()},l(a){e=w(a,"DIV",{class:!0});var o=b(e);F(l.$$.fragment,o),o.forEach(i),this.h()},h(){D(e,"class","w-full xl:w-1/2")},m(a,o){v(a,e,o),N(l,e,null),t=!0},p(a,o){var f,d;const u={};o[0]&1&&(u.error=(d=(f=a[39])==null?void 0:f.info)==null?void 0:d.invalidScheduleError),l.$set(u)},i(a){t||(P(l.$$.fragment,a),t=!0)},o(a){S(l.$$.fragment,a),t=!1},d(a){a&&i(e),L(l)}}}function tr(s){var n;let e,l=((n=s[39])!=null&&n.schedule.state.paused?h("schedules","unpause-modal-title"):h("schedules","pause-modal-title"))+"",t;return{c(){e=k("h3"),t=V(l),this.h()},l(r){e=w(r,"H3",{slot:!0});var a=b(e);t=W(a,l),a.forEach(i),this.h()},h(){D(e,"slot","title")},m(r,a){v(r,e,a),p(e,t)},p(r,a){var o;a[0]&1&&l!==(l=((o=r[39])!=null&&o.schedule.state.paused?h("schedules","unpause-modal-title"):h("schedules","pause-modal-title"))+"")&&Q(t,l)},d(r){r&&i(e)}}}function lr(s){var c,m;let e,l,t=((c=s[39])!=null&&c.schedule.state.paused?h("schedules","unpause-modal-confirmation",{schedule:s[11]}):h("schedules","pause-modal-confirmation",{schedule:s[11]}))+"",n,r,a,o=((m=s[39])!=null&&m.schedule.state.paused?h("schedules","unpause-reason"):h("schedules","pause-reason"))+"",u,f,d,E,$;return{c(){e=k("div"),l=k("p"),n=V(t),r=M(),a=k("p"),u=V(o),f=M(),d=k("input"),this.h()},l(_){e=w(_,"DIV",{slot:!0});var T=b(e);l=w(T,"P",{});var q=b(l);n=W(q,t),q.forEach(i),r=H(T),a=w(T,"P",{class:!0});var U=b(a);u=W(U,o),U.forEach(i),f=H(T),d=w(T,"INPUT",{class:!0,placeholder:!0}),T.forEach(i),this.h()},h(){D(a,"class","my-4"),D(d,"class","mt-4 block w-full rounded-md border border-gray-200 p-2"),D(d,"placeholder",h("reason")),D(e,"slot","content")},m(_,T){v(_,e,T),p(e,l),p(l,n),p(e,r),p(e,a),p(a,u),p(e,f),p(e,d),El(d,s[4]),E||($=[Il(d,"input",s[26]),Il(d,"keydown",ts(s[20]))],E=!0)},p(_,T){var q,U;T[0]&1&&t!==(t=((q=_[39])!=null&&q.schedule.state.paused?h("schedules","unpause-modal-confirmation",{schedule:_[11]}):h("schedules","pause-modal-confirmation",{schedule:_[11]}))+"")&&Q(n,t),T[0]&1&&o!==(o=((U=_[39])!=null&&U.schedule.state.paused?h("schedules","unpause-reason"):h("schedules","pause-reason"))+"")&&Q(u,o),T[0]&16&&d.value!==_[4]&&El(d,_[4])},d(_){_&&i(e),E=!1,ls($)}}}function sr(s){let e,l=h("schedules","trigger-modal-title")+"",t;return{c(){e=k("h3"),t=V(l),this.h()},l(n){e=w(n,"H3",{slot:!0});var r=b(e);t=W(r,l),r.forEach(i),this.h()},h(){D(e,"slot","title")},m(n,r){v(n,e,r),p(e,t)},p:G,d(n){n&&i(e)}}}function Cl(s){let e,l;return e=new ps({props:{id:s[40].value,value:s[40].value,label:s[40].label,description:s[40].description}}),{c(){C(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p:G,i(t){l||(P(e.$$.fragment,t),l=!0)},o(t){S(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function rr(s){let e,l,t=s[13],n=[];for(let a=0;a<t.length;a+=1)n[a]=Cl(Ml(s,t,a));const r=a=>S(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=te()},l(a){for(let o=0;o<n.length;o+=1)n[o].l(a);e=te()},m(a,o){for(let u=0;u<n.length;u+=1)n[u].m(a,o);v(a,e,o),l=!0},p(a,o){if(o[0]&8192){t=a[13];let u;for(u=0;u<t.length;u+=1){const f=Ml(a,t,u);n[u]?(n[u].p(f,o),P(n[u],1)):(n[u]=Cl(f),n[u].c(),P(n[u],1),n[u].m(e.parentNode,e))}for(He(),u=t.length;u<n.length;u+=1)r(u);qe()}},i(a){if(!l){for(let o=0;o<t.length;o+=1)P(n[o]);l=!0}},o(a){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)S(n[o]);l=!1},d(a){Nl(n,a),a&&i(e)}}}function nr(s){let e,l,t;return l=new ms({props:{group:s[12],name:"trigger-event-id",class:"h-auto overflow-auto",$$slots:{default:[rr]},$$scope:{ctx:s}}}),{c(){e=k("div"),C(l.$$.fragment),this.h()},l(n){e=w(n,"DIV",{slot:!0});var r=b(e);F(l.$$.fragment,r),r.forEach(i),this.h()},h(){D(e,"slot","content")},m(n,r){v(n,e,r),N(l,e,null),t=!0},p(n,r){const a={};r[1]&4096&&(a.$$scope={dirty:r,ctx:n}),l.$set(a)},i(n){t||(P(l.$$.fragment,n),t=!0)},o(n){S(l.$$.fragment,n),t=!1},d(n){n&&i(e),L(l)}}}function ar(s){let e,l=h("schedules","delete-modal-title")+"",t;return{c(){e=k("h3"),t=V(l),this.h()},l(n){e=w(n,"H3",{slot:!0});var r=b(e);t=W(r,l),r.forEach(i),this.h()},h(){D(e,"slot","title")},m(n,r){v(n,e,r),p(e,t)},p:G,d(n){n&&i(e)}}}function or(s){let e,l,t=h("schedules","delete-modal-confirmation",{schedule:s[11]})+"",n;return{c(){e=k("div"),l=k("p"),n=V(t),this.h()},l(r){e=w(r,"DIV",{slot:!0});var a=b(e);l=w(a,"P",{});var o=b(l);n=W(o,t),o.forEach(i),a.forEach(i),this.h()},h(){D(e,"slot","content")},m(r,a){v(r,e,a),p(e,l),p(l,n)},p:G,d(r){r&&i(e)}}}function ur(s){let e,l,t,n,r,a,o,u,f,d,E,$;return t=new Be({props:{icon:"chevron-left",$$slots:{default:[ir]},$$scope:{ctx:s}}}),t.$on("click",s[21]),E=new jl({}),{c(){e=k("header"),l=k("div"),C(t.$$.fragment),n=M(),r=k("h1"),a=V(s[11]),o=M(),u=k("p"),f=V(s[10]),d=M(),C(E.$$.fragment),this.h()},l(c){e=w(c,"HEADER",{class:!0});var m=b(e);l=w(m,"DIV",{class:!0});var _=b(l);F(t.$$.fragment,_),n=H(_),r=w(_,"H1",{class:!0,"data-testid":!0});var T=b(r);a=W(T,s[11]),T.forEach(i),o=H(_),u=w(_,"P",{class:!0});var q=b(u);f=W(q,s[10]),q.forEach(i),_.forEach(i),m.forEach(i),d=H(c),F(E.$$.fragment,c),this.h()},h(){D(r,"class","mt-8 select-all text-2xl font-medium"),D(r,"data-testid","schedule-name"),D(u,"class","text-sm"),D(l,"class","relative flex flex-col gap-1"),D(e,"class","mb-8")},m(c,m){v(c,e,m),p(e,l),N(t,l,null),p(l,n),p(l,r),p(r,a),p(l,o),p(l,u),p(u,f),v(c,d,m),N(E,c,m),$=!0},p(c,m){const _={};m[1]&4096&&(_.$$scope={dirty:m,ctx:c}),t.$set(_)},i(c){$||(P(t.$$.fragment,c),P(E.$$.fragment,c),$=!0)},o(c){S(t.$$.fragment,c),S(E.$$.fragment,c),$=!1},d(c){c&&i(e),L(t),c&&i(d),L(E,c)}}}function ir(s){let e=h("schedules","back-to-schedules")+"",l;return{c(){l=V(e)},l(t){l=W(t,e)},m(t,n){v(t,l,n)},p:G,d(t){t&&i(l)}}}function fr(s){let e,l,t,n={ctx:s,current:null,token:null,hasCatch:!0,pending:ur,then:Ks,catch:Gs,value:39,error:9,blocks:[,,,]};return Oe(l=s[0],n),{c(){e=te(),n.block.c()},l(r){e=te(),n.block.l(r)},m(r,a){v(r,e,a),n.block.m(r,n.anchor=a),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(r,a){s=r,n.ctx=s,a[0]&1&&l!==(l=s[0])&&Oe(l,n)||Fl(n,s,a)},i(r){t||(P(n.block),t=!0)},o(r){for(let a=0;a<3;a+=1){const o=n.blocks[a];S(o)}t=!1},d(r){r&&i(e),n.block.d(r),n.token=null,n=null}}}function cr(s,e,l){let t,n,r,a,o,u;ce(s,je,A=>l(6,n=A)),ce(s,Ll,A=>l(37,a=A)),ce(s,Ye,A=>l(7,o=A)),ce(s,ye,A=>l(8,u=A));let f=a.params.namespace,d=a.params.schedule;const E={namespace:f,scheduleId:Xe(d)};let $=Ke(E),c=!1,m=!1,_=!1,T="",q="",U=!1,ae=rs("Unspecified");ce(s,ae,A=>l(35,t=A));let le=[{description:h("schedules","trigger-unspecified-description"),label:h("schedules","trigger-unspecified-title"),value:"Unspecified"},{description:h("schedules","trigger-allow-all-description"),label:h("schedules","trigger-allow-all-title"),value:"AllowAll"},{description:h("schedules","trigger-skip-description"),label:h("schedules","trigger-skip-title"),value:"Skip"},{description:h("schedules","trigger-buffer-one-description"),label:h("schedules","trigger-buffer-one-title"),value:"BufferOne"},{description:h("schedules","trigger-buffer-all-description"),label:h("schedules","trigger-buffer-all-title"),value:"BufferAll"},{description:h("schedules","trigger-cancel-other-description"),label:h("schedules","trigger-cancel-other-title"),value:"CancelOther"},{description:h("schedules","trigger-terminate-other-description"),label:h("schedules","trigger-terminate-other-title"),value:"TerminateOther"}],_e=_s();ce(s,_e,A=>l(36,r=A));let x=r.namespaceWriteDisabled(f);const oe=async()=>{l(9,q="");try{Je(je,n=!0,n),await os({namespace:f,scheduleId:d}),l(3,_=!1),setTimeout(()=>{Je(je,n=!1,n),Le(Ue({namespace:f}))},2e3),l(4,T="")}catch(A){l(9,q=h("schedules","delete-schedule-error",{error:A==null?void 0:A.message})),Je(je,n=!1,n)}},Z=async A=>{var B,ee;!((ee=(B=A==null?void 0:A.schedule)===null||B===void 0?void 0:B.state)===null||ee===void 0)&&ee.paused?await us({namespace:f,scheduleId:d,reason:T}):await is({namespace:f,scheduleId:d,reason:T}),l(0,$=Ke(E,fetch)),l(4,T=""),l(1,c=!1)},ue=async()=>{l(5,U=!0),await fs({namespace:f,scheduleId:d,overlapPolicy:t}),setTimeout(()=>{l(0,$=Ke(E,fetch)),l(2,m=!1),l(5,U=!1)},1e3)},X=()=>{l(4,T="")};function J(A){es.call(this,s,A)}const se=()=>{Le(Ue({namespace:f}))},$e=()=>{Le(Ue({namespace:f}))},Y=()=>l(2,m=!0),de=()=>l(3,_=!0),O=()=>l(1,c=!0);function Te(){T=this.value,l(4,T)}function ie(A){c=A,l(1,c)}const re=A=>Z(A);function ve(A){m=A,l(2,m)}const y=()=>ue(),De=()=>l(2,m=!1);function ge(A){_=A,l(3,_)}function I(A){q=A,l(9,q)}return[$,c,m,_,T,U,n,o,u,q,f,d,ae,le,_e,x,oe,Z,ue,X,J,se,$e,Y,de,O,Te,ie,re,ve,y,De,ge,I,()=>{Le(Ue({namespace:f}))}]}class dr extends be{constructor(e){super(),Ee(this,e,cr,fr,Ie,{},null,[-1,-1])}}function mr(s){let e,l,t,n;return e=new ss({props:{title:`Schedule | ${s[1]}`,url:s[0].url.href}}),t=new dr({}),{c(){C(e.$$.fragment),l=M(),C(t.$$.fragment)},l(r){F(e.$$.fragment,r),l=H(r),F(t.$$.fragment,r)},m(r,a){N(e,r,a),v(r,l,a),N(t,r,a),n=!0},p(r,[a]){const o={};a&1&&(o.url=r[0].url.href),e.$set(o)},i(r){n||(P(e.$$.fragment,r),P(t.$$.fragment,r),n=!0)},o(r){S(e.$$.fragment,r),S(t.$$.fragment,r),n=!1},d(r){L(e,r),r&&i(l),L(t,r)}}}function pr(s,e,l){let t;ce(s,Ll,r=>l(0,t=r));const n=t.params.schedule;return[t,n]}class Cr extends be{constructor(e){super(),Ee(this,e,pr,mr,Ie,{})}}export{Cr as default};