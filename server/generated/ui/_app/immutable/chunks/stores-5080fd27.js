import{Q as t}from"./index-89809c17.js";const r=()=>{const e=t("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},i={subscribe(e){return r().page.subscribe(e)}},o=e=>{throw new Error(`Cannot ${e} session store before subscribing`)},n={subscribe(e){const s=r().updated;return n.check=s.check,s.subscribe(e)},check:()=>o("check")};export{i as p,n as u};