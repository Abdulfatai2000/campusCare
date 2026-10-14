import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { readFileSync } from "node:fs";
const required=[
 ["src/components/dashboard/student-dashboard.tsx","Example reports"],
 ["src/components/issues/issue-draft-form.tsx","Preview validated"],
 ["src/components/issues/issue-directory.tsx","matching example"],
 ["src/components/issues/issue-detail-view.tsx","Illustrative progress"],
 ["src/components/services/service-directory.tsx","example"],
 ["src/components/services/service-detail-view.tsx","Other example services"]
];
for(const [path,needle] of required)assert.ok(readFileSync(path,"utf8").includes(needle),"Missing Phase 2 feature in "+path);
const port=3191,base="http://127.0.0.1:"+port;
const child=spawn(process.execPath,["node_modules/next/dist/bin/next","start","-p",String(port),"--hostname","127.0.0.1"],{stdio:"ignore",env:{...process.env,NODE_ENV:"production"}});
try{
 let ready=false;
 for(let i=0;i<50;i++){
  if(child.exitCode!==null)throw new Error("Next server exited unexpectedly");
  try{if((await fetch(base+"/dashboard",{signal:AbortSignal.timeout(2500)})).status===200){ready=true;break;}}catch{}
  await delay(650);
 }
 assert.ok(ready,"Server did not start");
 const pages=["/dashboard","/report-issue","/my-reports","/my-reports/DEMO-CC-001","/my-reports/unknown","/services","/services/health","/services/unknown"];
 for(const path of pages){const response=await fetch(base+path,{signal:AbortSignal.timeout(14000)});const html=await response.text();assert.equal(response.status,200,path+" failed");assert.ok(html.includes("CampusCare")||html.toLowerCase().includes("campuscare"),"Missing brand: "+path);console.log("PASS "+path);}
 const api=await fetch(base+"/api/issues",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"});
 assert.equal(api.status,501,"Preview must not accept issue submissions");
 console.log("Phase 2 route smoke tests passed.");
}finally{child.kill("SIGTERM");await delay(250);if(child.exitCode===null)child.kill("SIGKILL");}
