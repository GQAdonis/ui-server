import{d as r}from"./index-c9e619a8.js";import{p as a}from"./stores-810822a9.js";import{p as s}from"./persist-store-e5ba5089.js";import{s as i}from"./settings-0aa2906c.js";import{c,i as o}from"./version-check-9d9f9783.js";const p=r([c],([e])=>e.serverVersion),w=r([i],([e])=>e.version),E=s("eventView","feed"),V=s("expandAllEvents","false"),u=s("eventFilterSort","descending"),h=s("eventShowElapsed","false"),x=r([a],([e])=>e.url.searchParams.get("category")),l=r([a],([e])=>e.url.searchParams.get("sort")),v=r([p,i],([e,t])=>t.runtimeEnvironment.isCloud?!0:(console.log("supports reverse",o(e,"1.16.0")),o(e,"1.16.0"))),y=r([u,v,l],([e,t,n])=>t?n||e:"ascending");export{y as a,x as b,h as c,u as d,E as e,V as f,v as s,p as t,w as u};