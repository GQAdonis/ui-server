import{h as g,b as C}from"./has.iatLMeUG.js";import{j as k,k as F,l as O,m as H,n as V,o as v,p as _,c as L,e as R,q as J,r as $,s as G,t as D,u as X,d as j,v as Y,f as K,w as Z,x as tt,y as it,z as rt,b as et,A as st,B as nt,C as ot,D as at,E as dt,F as ut,i as p,G as w,H as I,I as b,J as x,K as T,L as m,M as ct}from"./is-event-type._gd1DXTE.js";import{b as ft}from"./format-time.wvxl6IWV.js";import{c as lt}from"./format-camel-case.z6e2GZpK.js";import{h as Et}from"./decode-payload.MXqmunW8.js";const kt=(t,i)=>{let r;return k(t)&&(r=i.find(e=>e.activityId===t.attributes.activityId)),r},Kt=(t,i)=>k(t)&&i?i.activityId===t.attributes.activityId:!1,N=t=>F(t)||O(t)||H(t)||V(t)||v(t)||_(t)||L(t)||R(t)||J(t)||$(t),Nt=t=>A(t)?t.isFailureOrTimedOut:N(t),q=t=>G(t)||D(t)||X(t)||j(t),qt=t=>A(t)?t.isCanceled:q(t),B=t=>Y(t)||K(t),Bt=t=>A(t)?t.isTerminated:B(t),S=t=>Z(t)?String(t.activityTaskStartedEventAttributes.scheduledEventId):G(t)?String(t.activityTaskCanceledEventAttributes.scheduledEventId):tt(t)?String(t.activityTaskCancelRequestedEventAttributes.scheduledEventId):O(t)?String(t.activityTaskFailedEventAttributes.scheduledEventId):F(t)?String(t.activityTaskTimedOutEventAttributes.scheduledEventId):it(t)?String(t.activityTaskCompletedEventAttributes.scheduledEventId):rt(t)?String(t.childWorkflowExecutionStartedEventAttributes.initiatedEventId):K(t)?String(t.childWorkflowExecutionTerminatedEventAttributes.initiatedEventId):et(t)?String(t.childWorkflowExecutionCompletedEventAttributes.initiatedEventId):j(t)?String(t.childWorkflowExecutionCanceledEventAttributes.initiatedEventId):L(t)?String(t.childWorkflowExecutionFailedEventAttributes.initiatedEventId):R(t)?String(t.childWorkflowExecutionTimedOutEventAttributes.initiatedEventId):st(t)?String(t.timerFiredEventAttributes.startedEventId):D(t)?String(t.timerCanceledEventAttributes.startedEventId):nt(t)?String(t.workflowExecutionUpdateCompletedEventAttributes.acceptedEventId):ot(t)?String(t.externalWorkflowExecutionSignaledEventAttributes.initiatedEventId):at(t)?String(t.workflowTaskStartedEventAttributes.scheduledEventId):dt(t)?String(t.workflowTaskCompletedEventAttributes.scheduledEventId):ut(t)?String(t.workflowTaskFailedEventAttributes.scheduledEventId):v(t)?String(t.workflowTaskTimedOutEventAttributes.scheduledEventId):t.id,pt={key:"",value:""},mt=new Set(["activityId","attempt","binaryChecksum","identity","parentInitiatedEventId","requestId","scheduledEventId","startedEventId","lastHeartbeatTime","scheduledTime","expirationTime"]),Pt=t=>mt.has(t),P=new Set(["suggestContinueAsNew","historySizeBytes"]),Q=(t,i)=>!(i===null||i===void 0||i===""||i==="0s"||t==="type"||(!i||i==="0")&&P.has(t)),yt=["attempt","maximumAttempts","heartbeatDetails","lastHeartbeatTime","lastFailure","lastStartedTime","scheduledTime","expirationTime","lastWorkerIdentity"],Qt=t=>yt.includes(t),Ut=(t,i)=>!(i===null||i===void 0||i===""||i==="0s"||t==="type"||t==="workflowId"||t==="initiatedEventId"||t==="startedEventId"||t==="scheduledEventId"||t==="activityId"||t==="namespace"||t==="namespaceId"||t==="workflowTaskCompletedEventId"||t==="taskQueueKind"||(!i||i==="0")&&P.has(t)),Mt=t=>!(t===null||t===void 0||t===""||Array.isArray(t)&&!t.length),zt=t=>typeof t=="string"?t:[t==null?void 0:t.payloads,t==null?void 0:t.indexedFields,t==null?void 0:t.points,t].find(i=>i!==void 0),gt=t=>{if(C(t)){if(g(t,"stackTrace")&&t.stackTrace)return t.stackTrace;for(const i in t)if(C(t[i]))return gt(t[i])}},wt=["baseRunId","continuedExecutionRunId","firstExecutionRunId","newExecutionRunId","newRunId","originalExecutionRunId"],Ht=t=>{for(const i of wt)if(t===i)return!0;return!1},Tt=["taskQueueName"],Vt=t=>{for(const i of Tt)if(t===i)return!0;return!1},At=["workflowExecutionWorkflowId","workflowExecutionRunId"],_t=(t,i)=>{const r=!!(i!=null&&i.workflowExecutionWorkflowId&&(i!=null&&i.workflowExecutionRunId));for(const e of At)if(t===e&&r)return!0;return!1},y=(t,i)=>{if(typeof i=="object"){const[r]=Object.keys(i);return r?r==="payloads"?{key:t,value:i}:{key:t+lt(r),value:i[r]}:{key:t,value:{}}}else return{key:t,value:i.toString()}},ht=["failure","input","activityType","parentInitiatedEventId","workflowExecution","workflowType","taskQueue"],It=({attributes:t})=>{for(const[i,r]of Object.entries(t))if(Q(i,r))return y(i,r)},bt=t=>{if(g(t,"ActivityType"))return t.ActivityType;if(g(t,"activity_type"))return t.activity_type},xt=t=>{var i,r,e;return!!((e=(r=(i=t.markerRecordedEventAttributes)==null?void 0:i.details)==null?void 0:r.type)!=null&&e.payloads)},W=t=>{var r,e,s,n,a,c;const i=It(t);if(p(t)){const o=(((s=(e=(r=t.markerRecordedEventAttributes)==null?void 0:r.details)==null?void 0:e.data)==null?void 0:s.payloads)||((c=(a=(n=t.markerRecordedEventAttributes)==null?void 0:n.details)==null?void 0:a.type)==null?void 0:c.payloads)||[]).map(f=>Et(f)),u=o==null?void 0:o[0];if(xt(t)&&u)return y("ActivityType",u);const l=bt(u);if(l)return y("ActivityType",l)}for(const[d,o]of Object.entries(t.attributes))for(const u of ht)if(d===u&&Q(d,o))return y(d,o);return i},St=({lastEvent:t})=>W(t),Jt=t=>t?A(t)?St(t):W(t):pt,U=t=>{var i,r,e,s,n,a,c,d,o,u,l,f;if(!t)return"";if(k(t))return(r=(i=t.activityTaskScheduledEventAttributes)==null?void 0:i.activityType)==null?void 0:r.name;if(w(t))return`${(e=t.timerStartedEventAttributes)==null?void 0:e.timerId} (${ft((s=t.timerStartedEventAttributes)==null?void 0:s.startToFireTimeout)})`;if(I(t))return(n=t.signalExternalWorkflowExecutionInitiatedEventAttributes)==null?void 0:n.signalName;if(b(t))return(a=t.workflowExecutionSignaledEventAttributes)==null?void 0:a.signalName;if(x(t))return p(t)?"Local Activity":(c=t.markerRecordedEventAttributes)==null?void 0:c.markerName;if(T(t))return(o=(d=t.startChildWorkflowExecutionInitiatedEventAttributes)==null?void 0:d.workflowType)==null?void 0:o.name;if(m(t))return(f=(l=(u=t.workflowExecutionUpdateAcceptedEventAttributes)==null?void 0:u.acceptedRequest)==null?void 0:l.input)==null?void 0:f.name},Wt=t=>{if(!t||k(t))return"";if(w(t))return"Timer";if(I(t))return"Signal";if(b(t))return"Signal received";if(x(t))return"Marker";if(T(t))return"Child Workflow";if(m(t))return""},Ct=t=>{var i,r;return t?p(t)?((r=(i=W(t))==null?void 0:i.value)==null?void 0:r.toString())??"Local Activity":U(t):""},h=({events:t})=>{let i=0,r;for(const e of t.values()){const s=Number(e.id);s>=i&&(i=s,r=e)}return r},Ft=(t,i)=>i!=null&&i.length&&m(t)?i.find(r=>{var e;return r.id===((e=t.workflowExecutionUpdateAcceptedEventAttributes)==null?void 0:e.acceptedRequestSequencingEventId.toString())}):t,E=(t,i)=>{const r=S(t),e=U(t),s=Wt(t),n=Ct(t),{timestamp:a,category:c,classification:d}=t,o=Ft(t,i),u=new Map,l=new Set;return o&&m(t)?(u.set(o.id,o),u.set(t.id,t),l.add(o.id),l.add(t.id)):(u.set(t.id,t),l.add(t.id)),{id:r,name:e,label:s,displayName:n,events:u,eventIds:l,initialEvent:o,timestamp:a,category:p(t)?"local-activity":c,classification:d,level:void 0,pendingActivity:void 0,get eventTime(){var f;return(f=this.lastEvent)==null?void 0:f.eventTime},get attributes(){var f;return(f=h(this))==null?void 0:f.attributes},get eventList(){return Array.from(this.events,([f,z])=>z)},get lastEvent(){return h(this)},get finalClassification(){return h(this).classification},get isPending(){return this.pendingActivity||w(this.initialEvent)&&this.eventList.length===1||T(this.initialEvent)&&this.eventList.length===2},get isFailureOrTimedOut(){return!!this.eventList.find(N)},get isCanceled(){return!!this.eventList.find(q)},get isTerminated(){return!!this.eventList.find(B)}}},Ot=(t,i)=>{if(k(t)||T(t)||w(t)||I(t)||b(t))return E(t);if(x(t))return p(t),E(t);if(m(t))return E(t,i)},vt=(t,i)=>{if(ct(t))return E(t,i)},M=(t,i,r=void 0)=>{t&&(t.events.set(i.id,i),t.eventIds.add(i.id),t.timestamp=i.timestamp,r&&(t.pendingActivity=r),t.pendingActivity&&t.eventList.length===3&&delete t.pendingActivity)},$t=(t,i="ascending",r=[])=>{const e={},s=n=>{const a=S(n),c=Ot(n,t),d=kt(n,r);c?(e[c.id]=c,d&&(c.pendingActivity=d)):M(e[a],n,d)};if(i==="ascending")for(const n of t)s(n);else for(let n=t.length-1;n>=0;n--)s(t[n]);return i==="descending"?Object.values(e).reverse():Object.values(e)},A=t=>t==null?!1:g(t,"events"),Xt=(t,i="ascending")=>{const r={},e=s=>{const n=S(s),a=vt(s,t);a?r[a.id]=a:M(r[n],s)};if(i==="ascending")for(const s of t)e(s);else for(let s=t.length-1;s>=0;s--)e(t[s]);return i==="descending"?Object.values(r).reverse():Object.values(r)};export{Mt as a,Ut as b,Qt as c,zt as d,gt as e,Ht as f,$t as g,_t as h,Vt as i,Pt as j,Nt as k,qt as l,Bt as m,A as n,Jt as o,yt as p,Kt as q,Xt as r,Q as s,W as t};