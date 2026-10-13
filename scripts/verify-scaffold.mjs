import assert from "node:assert/strict";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
const walk=(root)=>readdirSync(root,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(join(root,x.name)):[join(root,x.name)]);
const files=walk("src/app");
const pages=files.filter(p=>p.endsWith("/page.tsx"));
const api=files.filter(p=>p.startsWith("src/app/api/")&&p.endsWith("/route.ts"));
const models=walk("src/models").filter(p=>p.endsWith(".ts")&&!p.endsWith("/index.ts"));
assert.equal(pages.length,29,"Expected 29 frontend pages");
assert.equal(api.length,32,"Expected 32 backend routes");
assert.equal(models.length,10,"Expected 10 data models");
assert.ok(existsSync("src/app/(marketing)/page.tsx"));
assert.ok(existsSync("src/app/(student)/dashboard/page.tsx"));
assert.ok(existsSync("src/app/(admin)/admin/page.tsx"));
assert.ok(existsSync(".env.example"));
for(const path of api.filter(x=>!x.includes("/health/"))){
 const content=readFileSync(path,"utf8");
 assert.ok(content.includes("notImplemented"),"Unsafe fake success or missing 501: "+path);
}
for(const name of ["PROJECT_OVERVIEW","ARCHITECTURE","FRONTEND_STRUCTURE","BACKEND_STRUCTURE","DATABASE_SCHEMA","API_ROUTES","AUTH_SECURITY","DEVELOPMENT_PHASES","DESIGN_SYSTEM","GIT_WORKFLOW"]){
 assert.ok(existsSync("docs/"+name+".md"),"Missing technical document: "+name);
}
console.log("Verified CampusCare Phase 0: "+pages.length+" frontend routes, "+api.length+" API endpoints, "+models.length+" Mongoose models, 10 docs.");
