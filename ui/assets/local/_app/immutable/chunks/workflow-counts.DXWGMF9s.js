import{s as H,h as L,j as z,k as J,f as d,m as rt,i as W,c as h,a6 as at,w as S,x as v,v as ut,b as lt,d as ct,n as ft,p as it}from"./scheduler.BTg3iwM1.js";import{S as X,i as Z,c as Q,a as q,m as B,t as k,b as g,d as T,g as x,e as $}from"./index.64bqrcBm.js";import{e as N,u as mt,o as _t}from"./each.Db0yjMol.js";import{p as pt}from"./stores.BAyXaJ9F.js";import{S as wt}from"./index.4hJqXWM7.js";import{t as ht,c as dt,w as D}from"./translate.ClK4__KS.js";import{r as kt,w as I,d as gt,q as yt,b as G}from"./workflows.eU-zkjhH.js";import{w as K}from"./events.DFtY4d3B.js";import{c as bt}from"./pagination.CdkwsCGf.js";import{S as Ct}from"./time-picker.DrYzN9-Q.js";import{b as St}from"./decode-payload.Db4ShEKq.js";import{u as vt}from"./update-query-parameters.B83DVeME.js";import{W as It}from"./workflow-status.D8b-cYv0.js";const U=(n,e,t)=>{const r=Math.pow(3600/n,1/t),c=n*Math.pow(r,e);return Math.min(3600,Math.round(c))};function Wt(n){let e,t;return e=new It({props:{count:n[1],newCount:n[2],status:n[0],"test-id":"workflow-status-"+n[0]}}),{c(){Q(e.$$.fragment)},l(o){q(e.$$.fragment,o)},m(o,r){B(e,o,r),t=!0},p(o,[r]){const c={};r&2&&(c.count=o[1]),r&4&&(c.newCount=o[2]),r&1&&(c.status=o[0]),r&1&&(c["test-id"]="workflow-status-"+o[0]),e.$set(c)},i(o){t||(k(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){T(e,o)}}}function Et(n,e,t){let{status:o}=e,{count:r=0}=e,{newCount:c=0}=e;return n.$$set=f=>{"status"in f&&t(0,o=f.status),"count"in f&&t(1,r=f.count),"newCount"in f&&t(2,c=f.newCount)},[o,r,c]}class Ft extends X{constructor(e){super(),Z(this,e,Et,Wt,H,{status:0,count:1,newCount:2})}}function V(n,e,t){const o=n.slice();return o[23]=e[t].count,o[24]=e[t].status,o}function Pt(n){let e,t;return e=new wt({props:{class:"h-6 w-24 rounded"}}),{c(){Q(e.$$.fragment)},l(o){q(e.$$.fragment,o)},m(o,r){B(e,o,r),t=!0},p:ut,i(o){t||(k(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){T(e,o)}}}function Qt(n){let e,t,o,r,c,f;function u(...l){return n[10](n[24],...l)}function s(...l){return n[11](n[24],...l)}t=new Ft({props:{status:n[24],count:n[23],newCount:n[1].find(u)?n[1].find(s).count-n[23]:0}});function m(){return n[12](n[24])}return{c(){e=L("button"),Q(t.$$.fragment),o=lt()},l(l){e=z(l,"BUTTON",{});var i=J(e);q(t.$$.fragment,i),o=ct(i),i.forEach(d)},m(l,i){W(l,e,i),B(t,e,null),ft(e,o),r=!0,c||(f=it(e,"click",m),c=!0)},p(l,i){n=l;const p={};i&1&&(p.status=n[24]),i&1&&(p.count=n[23]),i&3&&(p.newCount=n[1].find(u)?n[1].find(s).count-n[23]:0),t.$set(p)},i(l){r||(k(t.$$.fragment,l),r=!0)},o(l){g(t.$$.fragment,l),r=!1},d(l){l&&d(e),T(t),c=!1,f()}}}function Y(n,e){let t,o,r,c,f;const u=[Qt,Pt],s=[];function m(l,i){return l[2]?1:0}return o=m(e),r=s[o]=u[o](e),{key:n,first:null,c(){t=v(),r.c(),c=v(),this.h()},l(l){t=v(),r.l(l),c=v(),this.h()},h(){this.first=t},m(l,i){W(l,t,i),s[o].m(l,i),W(l,c,i),f=!0},p(l,i){e=l;let p=o;o=m(e),o===p?s[o].p(e,i):(x(),g(s[p],1,1,()=>{s[p]=null}),$(),r=s[o],r?r.p(e,i):(r=s[o]=u[o](e),r.c()),k(r,1),r.m(c.parentNode,c))},i(l){f||(k(r),f=!0)},o(l){g(r),f=!1},d(l){l&&(d(t),d(c)),s[o].d(l)}}}function qt(n){let e,t=[],o=new Map,r,c=N(n[0]);const f=u=>u[24];for(let u=0;u<c.length;u+=1){let s=V(n,c,u),m=f(s);o.set(m,t[u]=Y(m,s))}return{c(){e=L("div");for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=z(u,"DIV",{class:!0});var s=J(e);for(let m=0;m<t.length;m+=1)t[m].l(s);s.forEach(d),this.h()},h(){rt(e,"class","flex min-h-[24px] flex-wrap items-center gap-2")},m(u,s){W(u,e,s);for(let m=0;m<t.length;m+=1)t[m]&&t[m].m(e,null);r=!0},p(u,[s]){s&15&&(c=N(u[0]),x(),t=mt(t,s,f,1,u,c,o,e,_t,Y,null,V),$())},i(u){if(!r){for(let s=0;s<c.length;s+=1)k(t[s]);r=!0}},o(u){for(let s=0;s<t.length;s+=1)g(t[s]);r=!1},d(u){u&&d(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}const j=5,P=100;function Bt(n,e,t){let o,r,c,f,u,s,m,l;h(n,kt,a=>t(7,c=a)),h(n,pt,a=>t(8,f=a)),h(n,K,a=>t(15,u=a)),h(n,I,a=>t(16,s=a)),h(n,gt,a=>t(17,m=a)),h(n,yt,a=>t(9,l=a));let{staticQuery:i=""}=e,p=[],E=[],b,y=1,C=!1;at(()=>{M()});const tt=()=>{if(y+=1,clearInterval(b),y<=P){const a=U(j,y,P)*1e3;b=setInterval(()=>R(),a)}},M=()=>{clearInterval(b),t(1,E=[]),S(I,s.newCount=0,s),y=1,t(2,C=!0)},O=(a=[])=>a.map(_=>{const w=St(_==null?void 0:_.groupValues[0]),F=parseInt(_.count);return{status:w,count:F}}).sort((_,w)=>D.indexOf(_.status)-D.indexOf(w.status)),R=async()=>{tt();try{const{count:a,groups:_}=await G({namespace:o,query:r});S(I,s.newCount=parseInt(a)-s.count,s),t(1,E=O(_))}catch(a){console.error("Fetching workflow counts failed: ",a==null?void 0:a.message)}finally{t(2,C=!1)}},et=async()=>{if(M(),!m){const a=U(j,y,P)*1e3;b=setInterval(()=>R(),a)}try{const{count:a,groups:_}=await G({namespace:o,query:r});S(I,s.count=parseInt(a),s),t(0,p=O(_))}catch(a){console.error("Fetching workflow counts failed: ",a==null?void 0:a.message)}finally{t(2,C=!1)}},A=a=>{if(!u.some(w=>w.attribute==="ExecutionStatus"&&w.value===a)){const w={attribute:"ExecutionStatus",type:Ct.KEYWORD,value:a,operator:"",conditional:"=",parenthesis:""};S(K,u=[...u,w],u);const F=ht(dt(u));vt({url:f.url,parameter:"query",value:F,clearParameters:[bt]})}},ot=(a,_)=>_.status===a,nt=(a,_)=>_.status===a,st=a=>A(a);return n.$$set=a=>{"staticQuery"in a&&t(4,i=a.staticQuery)},n.$$.update=()=>{n.$$.dirty&256&&t(5,o=f.params.namespace),n.$$.dirty&528&&t(6,r=i||l),n.$$.dirty&224&&et()},[p,E,C,A,i,o,r,c,f,l,ot,nt,st]}class Ht extends X{constructor(e){super(),Z(this,e,Bt,qt,H,{staticQuery:4})}}export{Ht as W};