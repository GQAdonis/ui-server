import{w as P,g as A}from"./entry.DtEKrYPD.js";import{t as $}from"./translate.BBe5dcco.js";import"./i18next.DhwiOCyc.js";import{s as k}from"./parse-with-big-int.BKSBwM2t.js";import{r as p,a as m}from"./route-for-api.K_pk2_QP.js";import{v as b}from"./toaster.Cg2h7FIT.js";import{s as _}from"./workflows.DbENHBD9.js";import{e as O}from"./encode-payload.CjVlNX7E.js";import{l as C,m as D}from"./route-for.B0LT_kdl.js";const Y=async(e,o,t,s=fetch)=>(n=100,i="")=>{const a=p("schedules",{namespace:e});return m(a,{params:{maximumPageSize:String(n),nextPageToken:i,...o?{query:o}:{}},request:s,onError:t}).then(({schedules:r,nextPageToken:c})=>({items:r,nextPageToken:c?String(c):""}))};async function Z(e,o=fetch){const t=p("schedule",e);return m(t,{request:o})}async function ee(e,o=fetch){const t=p("schedule",e);return m(t,{request:o,options:{method:"DELETE"}})}async function Q({namespace:e,scheduleId:o,body:t}){let s="";const n=r=>{var c;return s=((c=r==null?void 0:r.body)==null?void 0:c.message)??`Error creating schedule: ${r.status}: ${r.statusText}`},i=p("schedule",{namespace:e,scheduleId:o}),{conflictToken:a}=await m(i,{options:{method:"POST",body:k({request_id:b(),...t})},onError:n});return{conflictToken:a,error:s}}async function z({namespace:e,scheduleId:o,body:t}){let s="";const n=a=>{var r;return s=((r=a==null?void 0:a.body)==null?void 0:r.message)??`Error editing schedule: ${a.status}: ${a.statusText}`},i=p("schedule.edit",{namespace:e,scheduleId:o});return await m(i,{options:{method:"POST",body:k({request_id:b(),...t})},onError:n}),{error:s}}async function te({namespace:e,scheduleId:o,reason:t}){const s={patch:{pause:t}},n=p("schedule.patch",{namespace:e,scheduleId:o});return await m(n,{options:{method:"POST",body:k({...s,request_id:b()})},onError:i=>console.error(i)})}async function se({namespace:e,scheduleId:o,reason:t}){const s={patch:{unpause:t}},n=p("schedule.patch",{namespace:e,scheduleId:o});return await m(n,{options:{method:"POST",body:k({...s,request_id:b()})}})}async function oe({namespace:e,scheduleId:o,overlapPolicy:t}){const s={patch:{triggerImmediately:{overlapPolicy:t}}},n=p("schedule.patch",{namespace:e,scheduleId:o});return await m(n,{options:{method:"POST",body:k({...s,request_id:b()})}})}async function ne({namespace:e,scheduleId:o,overlapPolicy:t,startTime:s,endTime:n}){const i={patch:{backfillRequest:[{overlapPolicy:t,startTime:s,endTime:n}]}},a=p("schedule.patch",{namespace:e,scheduleId:o});return await m(a,{options:{method:"POST",body:k({...i,request_id:b()})}})}const I=e=>e?parseInt(e):0,B=(e,o,t,s)=>`${I(e)*60*60*24+I(o)*60*60+I(t)*60+I(s)}s`,R=({months:e=[],daysOfMonth:o=[],daysOfWeek:t=[]})=>{var r,c;const s=e.sort((d,u)=>parseInt(d)-parseInt(u)).join(","),n=o.sort((d,u)=>d-u).join(","),a=(((c=(r=t==null?void 0:t[0])==null?void 0:r.split(","))==null?void 0:c.length)>1?t[0].split(","):t).sort((d,u)=>parseInt(d)-parseInt(u)).join(",");return{month:s,dayOfMonth:n,dayOfWeek:a}},j=(e,o,t)=>{const{hour:s,minute:n,second:i,phase:a,cronString:r}=o,{preset:c,months:d,days:u,daysOfMonth:f,daysOfWeek:g}=t;if(c==="string"){const l=`${r}#${r}`;e.schedule.spec.cronString=[l],e.schedule.spec.calendar=[],e.schedule.spec.interval=[]}else if(c==="interval"){const l=B(u,s,n,i);e.schedule.spec.interval=[{interval:l,phase:a||"0s"}],e.schedule.spec.cronString=[],e.schedule.spec.calendar=[]}else{const{month:l,dayOfMonth:y,dayOfWeek:w}=R({months:d,daysOfMonth:f,daysOfWeek:g});e.schedule.spec.calendar=[{year:"*",month:c==="month"?l:"",dayOfMonth:c==="month"?y:"",dayOfWeek:c==="week"?w:"",hour:s,minute:n,second:i}],e.schedule.spec.interval=[],e.schedule.spec.cronString=[]}},re=async({action:e,spec:o,presets:t})=>{const{namespace:s,name:n,workflowId:i,workflowType:a,taskQueue:r,input:c,encoding:d,searchAttributes:u}=e;let f;if(c)try{f=await O(c,d)}catch(y){S.set(`${$("data-encoder.encode-error")}: ${y==null?void 0:y.message}`);return}const g={schedule_id:n.trim(),searchAttributes:u.length===0?null:{indexedFields:{..._(u)}},schedule:{spec:{calendar:[],interval:[],cronString:[]},action:{startWorkflow:{workflowId:i,workflowType:{name:a},taskQueue:{name:r},input:f?{payloads:f}:null}}}};j(g,o,t),T.set(!0);const{error:l}=await Q({scheduleId:n,namespace:s,body:g});l?(S.set(l),T.set(!1)):setTimeout(()=>{S.set(""),T.set(!1),A(C({namespace:s}))},2e3)},ae=async({action:e,spec:o,presets:t},s,n)=>{var q,x;const{namespace:i,name:a,workflowId:r,workflowType:c,taskQueue:d,input:u,encoding:f,searchAttributes:g}=e;let l;if(u)try{l=await O(u,f)}catch(h){S.set(`${$("data-encoder.encode-error")}: ${h==null?void 0:h.message}`);return}const{preset:y}=t,w={schedule_id:n,searchAttributes:g.length===0?null:{indexedFields:{..._(g)}},schedule:{...s,action:{startWorkflow:{...s.action.startWorkflow,workflowId:r,workflowType:{name:c},taskQueue:{name:d},...u!==void 0&&{input:l?{payloads:l}:null}}}}},v=(x=(q=w.schedule.action.startWorkflow)==null?void 0:q.header)==null?void 0:x.fields;if(v&&Object.keys(v).length>0)try{const h=Object.entries(v);for(const[F,W]of h){const M=await O(k(W),"json/plain");v[F]=M[0]}}catch(h){S.set(`${$("data-encoder.encode-error")}: ${h==null?void 0:h.message}`);return}y==="existing"?w.schedule.spec=s.spec:(j(w,o,t),w.schedule.spec.structuredCalendar=[]),T.set(!0);const{error:E}=await z({namespace:i,scheduleId:n,body:w});E?(S.set(E),T.set(!1)):setTimeout(()=>{A(D({namespace:i,scheduleId:a})),S.set(""),T.set(!1)},2e3)},T=P(!1),S=P(""),ce=P("0");export{re as a,ce as b,Y as c,ee as d,S as e,Z as f,ne as g,T as l,te as p,ae as s,oe as t,se as u};