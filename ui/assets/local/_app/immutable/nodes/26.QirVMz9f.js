import{s as Q,x as p,k as g,g as d,c as P,v as s,a as N,h as S}from"../chunks/scheduler.fjKs9yxd.js";import{S as T,i as v,t as c,b as i,c as _,a as k,m as $,d as b}from"../chunks/index.ZY3lhhrE.js";import{p as C}from"../chunks/stores.nkYSJCT5.js";import{P as B}from"../chunks/page-title.LKzdhMqo.js";import{h as W,u as I}from"../chunks/await_block.dPEMAImq.js";import{W as h}from"../chunks/workers-list.Vt0G7hD6.js";import{T as F}from"../chunks/table.puuXeXkY.js";import{g as H,a as R,b as U}from"../chunks/pollers-service.R7aVuAht.js";import{p as V,g as j}from"../chunks/task-queue-compatibility.52mtxoi2.js";function y(r){const t=V(r[4].pollers);r[5]=t}function q(r){r[7]=r[9][0],r[8]=r[9][1]}function z(r){const t=r.slice(),n=j(t[4].pollers);return t[6]=n,t}function A(r){return{c:s,l:s,m:s,p:s,i:s,o:s,d:s}}function D(r){y(r);let t,n,e,o;const l=[G,E],u=[];function m(a,f){return a[5]?0:1}function w(a,f){return f===0?z(a):a}return t=m(r),n=u[t]=l[t](w(r,t)),{c(){n.c(),e=p()},l(a){n.l(a),e=p()},m(a,f){u[t].m(a,f),g(a,e,f),o=!0},p(a,f){y(a),n.p(w(a,t),f)},i(a){o||(c(n),o=!0)},o(a){i(n),o=!1},d(a){a&&d(e),u[t].d(a)}}}function E(r){let t,n;return t=new h({props:{taskQueue:r[0],workers:r[4]}}),{c(){_(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,o){$(t,e,o),n=!0},p:s,i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){i(t.$$.fragment,e),n=!1},d(e){b(t,e)}}}function G(r){let t,n,e={ctx:r,current:null,token:null,hasCatch:!0,pending:L,then:K,catch:J,value:9,blocks:[,,,]};return W(Promise.all([R({queue:r[0],namespace:r[1]}),U({namespace:r[1],buildIds:r[6],taskQueue:r[2]})]),e),{c(){t=p(),e.block.c()},l(o){t=p(),e.block.l(o)},m(o,l){g(o,t,l),e.block.m(o,e.anchor=l),e.mount=()=>t.parentNode,e.anchor=t,n=!0},p(o,l){r=o,I(e,r,l)},i(o){n||(c(e.block),n=!0)},o(o){for(let l=0;l<3;l+=1){const u=e.blocks[l];i(u)}n=!1},d(o){o&&d(t),e.block.d(o),e.token=null,e=null}}}function J(r){let t,n;return t=new h({props:{taskQueue:r[0],workers:r[4]}}),{c(){_(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,o){$(t,e,o),n=!0},p:s,i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){i(t.$$.fragment,e),n=!1},d(e){b(t,e)}}}function K(r){q(r);let t,n;return t=new h({props:{taskQueue:r[0],workers:r[4],compatibility:r[7],reachability:r[8]}}),{c(){_(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,o){$(t,e,o),n=!0},p(e,o){q(e)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){i(t.$$.fragment,e),n=!1},d(e){b(t,e)}}}function L(r){let t,n;return t=new F({props:{rows:3}}),{c(){_(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,o){$(t,e,o),n=!0},p:s,i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){i(t.$$.fragment,e),n=!1},d(e){b(t,e)}}}function M(r){return{c:s,l:s,m:s,p:s,i:s,o:s,d:s}}function O(r){let t,n,e={ctx:r,current:null,token:null,hasCatch:!1,pending:M,then:D,catch:A,value:4,blocks:[,,,]};return W(H({queue:r[0],namespace:r[1]}),e),{c(){t=p(),e.block.c()},l(o){t=p(),e.block.l(o)},m(o,l){g(o,t,l),e.block.m(o,e.anchor=l),e.mount=()=>t.parentNode,e.anchor=t,n=!0},p(o,[l]){r=o,I(e,r,l)},i(o){n||(c(e.block),n=!0)},o(o){for(let l=0;l<3;l+=1){const u=e.blocks[l];i(u)}n=!1},d(o){o&&d(t),e.block.d(o),e.token=null,e=null}}}function X(r,t,n){let e;P(r,C,m=>n(3,e=m));let{queue:o,namespace:l,taskQueue:u}=e.params;return[o,l,u]}class Y extends T{constructor(t){super(),v(this,t,X,O,Q,{})}}function Z(r){let t,n,e,o;return t=new B({props:{title:`Task Queue | ${r[1]}`,url:r[0].url.href}}),e=new Y({}),{c(){_(t.$$.fragment),n=N(),_(e.$$.fragment)},l(l){k(t.$$.fragment,l),n=S(l),k(e.$$.fragment,l)},m(l,u){$(t,l,u),g(l,n,u),$(e,l,u),o=!0},p(l,[u]){const m={};u&1&&(m.url=l[0].url.href),t.$set(m)},i(l){o||(c(t.$$.fragment,l),c(e.$$.fragment,l),o=!0)},o(l){i(t.$$.fragment,l),i(e.$$.fragment,l),o=!1},d(l){l&&d(n),b(t,l),b(e,l)}}}function x(r,t,n){let e;P(r,C,l=>n(0,e=l));const o=e.params.queue;return[e,o]}class ce extends T{constructor(t){super(),v(this,t,x,Z,Q,{})}}export{ce as component};