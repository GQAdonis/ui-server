import"./entry.YErSoCvS.js";import"./i18next.dQ3wfJvm.js";import"./auth-user.dBDEkN_G.js";import"./is-http.s0kYI6St.js";import{h as l}from"./has.BboW8cQC.js";import"./parse-with-big-int.jPY5aC0s.js";import{f as r}from"./time-format.bJYEj6sz.js";import{j as m,k as c}from"./get-event-categorization.FG0XopMQ.js";import{e as u}from"./screaming-enums.6mdiatB1.js";import{a as T}from"./format-time.8UcGlNKX.js";const d=["Unspecified","Scheduled","Open","New","Started","Initiated","Running","Completed","Fired","CancelRequested","TimedOut","Signaled","Canceled","Failed","Terminated"],p=e=>{if(e.includes("RequestCancel"))return"CancelRequested";for(const t of d)if(e.includes(t))return t},k=["closeTime","createTime","currentAttemptScheduledTime","earliestTime","eventTime","executionTime","expirationTime","expireTime","lastAccessTime","lastHeartbeatTime","lastStartedTime","lastUpdateTime","latestTime","releaseTime","scheduledTime","startedTime","startTime","workflowExecutionExpirationTime"],y=["backoffStartInterval","defaultWorkflowTaskTimeout","firstWorkflowTaskBackoff","heartbeatTimeout","initialInterval","maximumInterval","scheduleToCloseTimeout","scheduleToStartTimeout","startToCloseTimeout","startToFireTimeout","workflowExecutionRetentionPeriod","workflowExecutionRetentionTtl","workflowExecutionTimeout","workflowRunTimeout","workflowTaskTimeout"],w=e=>{for(const t of k)if(t===e)return!0;return!1},g=e=>{for(const t of y)if(t===e)return!0;return!1},v=e=>{if(e===null||e===void 0||typeof e!="object")return!1;const t=Object.keys(e),[i]=t;return!(t.length!==1||typeof e[i]!="string")},b=e=>{for(const t of Object.values(e))return t};function x(e,t=!1){for(const[i,o]of Object.entries(e))v(o)&&(e[i]=b(o)),w(i)&&!t&&(e[i]=r(o)),g(i)&&(e[i]=T(o));return e}const C=e=>{const t=String(e.eventId),i=u(e.eventType),o=r(String(e.eventTime)),n=p(i),s=c(i),{key:a,attributes:f}=m(e);return{...e,name:i,id:t,eventType:i,timestamp:o,classification:n,category:s,attributes:x({type:a,...f})}},D=e=>e.map(C),K=e=>e===null||typeof e!="object"||Array.isArray(e)?!1:!!l(e,"eventType"),q=e=>{const t={...e};return delete t.name,delete t.id,delete t.timestamp,delete t.classification,delete t.category,delete t.attributes,t};export{q as f,K as i,x as s,D as t};