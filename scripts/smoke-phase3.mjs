import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const features=[
 ["src/components/appointments/appointment-directory.tsx","Search appointments"],
 ["src/components/appointments/appointment-draft-form.tsx","Preview only"],
 ["src/components/emergency/emergency-directory.tsx","NUMBER NOT VERIFIED"],
 ["src/components/notifications/notification-preview.tsx","Mark all as read"],
 ["src/components/profile/profile-preview.tsx","No account is signed in"],
 ["src/components/settings/student-settings.tsx","Reset demo preferences"]
];
for(const [path,token] of features)assert.ok(readFileSync(path,"utf8").includes(token),"Missing Phase 3 feature: "+path);
const pages=["appointments/page.tsx","appointments/new/page.tsx","emergency/page.tsx","notifications/page.tsx","profile/page.tsx","settings/page.tsx"];
for(const page of pages)assert.ok(readFileSync("src/app/(student)/"+page,"utf8").includes("StudentPreviewPage"),"Missing route: "+page);
const routes=readFileSync("src/components/dashboard/student-pages.tsx","utf8");
for(const page of ["appointments","appointments-new","emergency","notifications","profile","settings"])assert.ok(routes.includes('page==="'+page+'"'),"Missing page integration: "+page);
console.log("Phase 3: six student routes and interactive preview components verified.");
