const s=(t,r)=>{const o=t.charCodeAt(r);return o>=65&&o<=90},f=t=>t[0].toUpperCase()+t.slice(1),i=new Set(["workflowType"]),n={workflowExecutionWorkflowId:"workflowExecution",workflowExecutionRunId:"workflowExecution"},u=t=>t?i.has(t)?`${t}Name`:n[t]?t.replace(n[t],""):t:"",p=t=>{if(!t)return"";let r="",o=0;for(t=u(t);o<t.length;){const e=t[o],c=t[o+1];if(o===0){r+=t[o].toUpperCase(),o++;continue}if(e+c==="Id"){r+=" ID",o+=2;continue}if(s(t,o)){r+=" ",r+=e.toUpperCase(),o++;continue}r+=e,o++}return r};export{f as c,p as f};