import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { existsSync, readFileSync } from "node:fs";
const port = 3187;
const pages = ["/","/features","/about","/contact","/auth/login","/auth/signup","/auth/forgot-password","/auth/reset-password"];
const requiredFiles = ["src/app/phase1.css","src/app/phase1-auth.css","src/components/marketing/campus-scene.tsx","src/components/marketing/product-preview.tsx","src/components/marketing/contact-form.tsx","src/components/auth/auth-preview.tsx"];
for (const f of requiredFiles) assert.ok(existsSync(f), "Missing Phase 1 file: "+f);
const root = readFileSync("src/app/layout.tsx","utf8");
assert.ok(root.includes('"./phase1.css"') && root.includes('"./phase1-auth.css"'),"Phase 1 stylesheets must be imported");
const auth = readFileSync("src/components/auth/auth-preview.tsx","utf8");
assert.ok(auth.includes("Frontend preview only."),"Authentication UI must not imply live signup or password reset");
const processInfo = spawn(process.execPath,["node_modules/next/dist/bin/next","start","-p",String(port),"--hostname","127.0.0.1"],{stdio:["ignore","pipe","pipe"],env:{...process.env,NODE_ENV:"production"}});
let output = "";
for (const channel of [processInfo.stdout, processInfo.stderr]) channel.on("data",chunk => { output += chunk.toString();if(output.length>12000)output=output.slice(-12000);});
const base = "http://127.0.0.1:"+port;
try {
 let ready = false;
 for(let i=0;i<45;i++){
  if(processInfo.exitCode!==null)throw new Error("Next.js exited early: "+output);
  try{const response=await fetch(base+"/",{signal:AbortSignal.timeout(2500)});if(response.status===200){ready=true;break;}}catch{}
  await delay(700);
 }
 assert.ok(ready,"Next.js did not start: "+output);
 for(const page of pages){
  const response=await fetch(base+page,{signal:AbortSignal.timeout(14000)});
  const html=await response.text();
  assert.equal(response.status,200,"Route failed "+page+": "+html.slice(0,400));
  assert.ok(html.toLowerCase().includes("campuscare"),"Brand missing on "+page);
  assert.ok(html.includes('name="robots"') || html.includes("robots"),"robots metadata expected on "+page);
  console.log("PASS "+page);
 }
 const health=await fetch(base+"/api/health");
 assert.equal(health.status,200);
 const authProbe=await fetch(base+"/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"});
 assert.equal(authProbe.status,501,"Auth must remain disabled in Phase 1");
 console.log("Phase 1 smoke test complete: 8 frontend pages + safe API boundaries.");
} finally {
 processInfo.kill("SIGTERM");
 await delay(350);
 if(processInfo.exitCode===null)processInfo.kill("SIGKILL");
}
