import{C as h}from"./scheduler.C46pS-76.js";import{p as u}from"./stores.cOnxd292.js";import{g as C,d as p}from"./data-encoder.YHE3mkGS.js";import{a as W}from"./auth-user.DiCjbj0-.js";import{a as w}from"./atob.ODDrCDK_.js";import{f as g,h as i}from"./has.BWrERxPV.js";import{p as x}from"./parse-with-big-int.BKSBwM2t.js";const P=e=>Array.isArray(e)?e:[e];function l(e,o=!0){var c;if(e===null)return e;try{const r=x(w(String((e==null?void 0:e.data)??"")));return o?r:{...e,data:r}}catch(r){console.warn("Could not parse payload: ",r)}return w(String(((c=e==null?void 0:e.metadata)==null?void 0:c.encoding)??""))==="binary/null"?o?null:{...e,data:null}:e}const J=(e,o=!0)=>{if(i(e,"searchAttributes")&&i(e.searchAttributes,"indexedFields")){const s=e.searchAttributes.indexedFields;Object.entries(s).forEach(([c,r])=>{s[c]=l(r,o)})}else if(i(e,"searchAttributes")){const s=e.searchAttributes;Object.entries(s).forEach(([c,r])=>{s[c]=l(r,o)})}if(i(e,"memo")&&i(e.memo,"fields")){const s=e.memo.fields;Object.entries(s).forEach(([c,r])=>{s[c]=l(r,o)})}if(i(e,"header")&&i(e.header,"fields")){const s=e.header.fields;Object.entries(s).forEach(([c,r])=>{s[c]=l(r,o)})}if(i(e,"queryResult")){const s=e==null?void 0:e.queryResult;Object.entries(s).forEach(([c,r])=>{s[c]=l(r,o)})}return e},j=e=>async(o,s=!0)=>{if(C(e)){const c=await p({payloads:{payloads:o},settings:e});return((c==null?void 0:c.payloads)??[]).map(r=>l(r,s))}else return o.map(c=>l(c,s))},R=e=>async o=>{if(C(e)){const s=await p({payloads:{payloads:o},settings:e});return(s==null?void 0:s.payloads)??[]}else return o},m=(e,...o)=>{for(const s of o)if(e===s)return!0;return!1},K=async(e,o=h(u).data.settings)=>{try{return(await j(o)([e]))[0]||""}catch{return""}},E=async(e,o=h(u).params.namespace,s=h(u).data.settings,c=h(W).accessToken)=>{const r=j(s);if(e)for(const d of Object.keys(e))if(m(d,"payloads","encodedAttributes")&&e[d]){const f=P(e[d]),a=await r(f);e[d]=m(d,"encodedAttributes")?a[0]:a}else{const f=e[d];g(f)&&(e[d]=await E(f,o,s,c))}return e},b=e=>{if(!g(e))return!1;const o=Object.keys(e);return o.length===2&&o.includes("metadata")&&o.includes("data")},q=async(e,o,s,c,r="readable",d=!0)=>{if(!e)return e;const f=r==="readable"?j(s):R(s),a={...e};if(e){if(b(a)){const n=P(a),t=await f(n,d);return(t==null?void 0:t[0])||a}for(const n of Object.keys(a))if(m(n,"payloads","encodedAttributes")&&a[n]){const t=P(a[n]),k=await f(t,d);a[n]=m(n,"encodedAttributes")?k[0]:k}else{const t=a[n];g(t)&&(a[n]=await q(t,o,s,c,r,d))}}return a},O=async({attributes:e,namespace:o,settings:s,accessToken:c})=>await E(e,o,s,c);export{K as a,l as b,q as c,J as d,O as e,b as i};