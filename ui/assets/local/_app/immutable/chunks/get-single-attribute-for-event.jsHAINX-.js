import{i as E}from"./index.7JO8TAz4.js";import{c as b}from"./format-camel-case.vK8efAX-.js";import{b as h,i as T}from"./decode-payload.NYsLjwkk.js";import{h as o,i as k}from"./has.BboW8cQC.js";import{f as I}from"./get-event-categorization.FG0XopMQ.js";const x=t=>t===null||typeof t!="object"||Array.isArray(t)?!1:!!o(t,"activityType"),S=t=>t===null||typeof t!="object"||Array.isArray(t)?!1:!!(o(t,"operation")&&o(t,"endpoint")),u={key:"",value:""},A=new Set(["suggestContinueAsNew","historySizeBytes"]),c=(t,r)=>!(r===null||r===void 0||r===""||r==="0s"||t==="type"||(!r||r==="0")&&A.has(t)),R=["attempt","maximumAttempts","heartbeatDetails","lastHeartbeatTime","lastFailure","lastStartedTime","scheduledTime","expirationTime","lastWorkerIdentity"],H=t=>R.includes(t),J=(t,r)=>!(r===null||r===void 0||r===""||r==="0s"||t==="type"||t==="workflowId"||t==="initiatedEventId"||t==="startedEventId"||t==="scheduledEventId"||t==="activityId"||t==="namespace"||t==="namespaceId"||t==="workflowTaskCompletedEventId"||t==="taskQueueKind"||(!r||r==="0")&&A.has(t)),M=t=>!(t===null||t===void 0||t===""||Array.isArray(t)&&!t.length),q=t=>typeof t=="string"?t:[t==null?void 0:t.payloads,t==null?void 0:t.indexedFields,t==null?void 0:t.points,t].find(r=>r!==void 0),D=t=>{if(k(t)){if(o(t,"stackTrace")&&t.stackTrace)return t.stackTrace;for(const r in t)if(k(t[r]))return D(t[r])}},K=["baseRunId","continuedExecutionRunId","firstExecutionRunId","newExecutionRunId","newRunId","originalExecutionRunId"],U=t=>{for(const r of K)if(t===r)return!0;return!1},j=["taskQueueName"],X=t=>{for(const r of j)if(t===r)return!0;return!1},L=["workflowExecutionWorkflowId","workflowExecutionRunId"],Y=(t,r)=>{const e=!!(r!=null&&r.workflowExecutionWorkflowId&&(r!=null&&r.workflowExecutionRunId));for(const i of L)if(t===i&&e)return!0;return!1},a=(t,r)=>{if(typeof r=="object"){if(T(r))return{key:t,value:r};const[e]=Object.keys(r);return e?e==="payloads"?{key:t,value:r}:{key:t+b(e),value:r[e]}:{key:t,value:{}}}else return{key:t,value:r.toString()}},w=["activityType","signalName","workflowType","result","failure","input","outcome","workflowExecution","taskQueue","startToFireTimeout","attempt","historySizeBytes","identity","parentInitiatedEventId"],O=({attributes:t})=>{for(const[r,e]of Object.entries(t))if(c(r,e))return a(r,e)},N=t=>{if(o(t,"ActivityType"))return t.ActivityType;if(o(t,"activity_type"))return t.activity_type},P=t=>{var r,e,i;return!!((i=(e=(r=t.markerRecordedEventAttributes)==null?void 0:r.details)==null?void 0:e.type)!=null&&i.payloads)},W=t=>{var e,i,f,d,l,y;const r=O(t);if(I(t)){const s=(((f=(i=(e=t.markerRecordedEventAttributes)==null?void 0:e.details)==null?void 0:i.data)==null?void 0:f.payloads)||((y=(l=(d=t.markerRecordedEventAttributes)==null?void 0:d.details)==null?void 0:l.type)==null?void 0:y.payloads)||[]).map(g=>h(g)),n=s==null?void 0:s[0];if(P(t)&&n)return a("ActivityType",n);const m=N(n);if(m)return a("ActivityType",m)}for(const p of w)for(const[s,n]of Object.entries(t.attributes))if(s===p&&c(s,n))return a(s,n);return r},F=t=>({key:"attempt",value:t.attempt.toString()}),Q=t=>t.attempt?{key:"attempt",value:t.attempt.toString()}:u,C=t=>E(t)?W(t):x(t)?F(t):S(t)?Q(t):u,Z=t=>t?C(t):u,$=(t,r)=>{if(!t||!(t!=null&&t.attributes))return u;for(const e of w)for(const[i,f]of Object.entries(t.attributes))if(i===e&&i!==r&&c(i,f))return a(i,f);return u};export{J as a,M as b,H as c,S as d,q as e,U as f,C as g,Y as h,x as i,X as j,D as k,Z as l,$ as m,R as p,c as s};