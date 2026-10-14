import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const port = 3194;
const base = `http://127.0.0.1:${port}`;
const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(port), "--hostname", "127.0.0.1"], { stdio: ["ignore", "pipe", "pipe"], env: { ...process.env, NODE_ENV: "production" } });
let output = "";
for (const stream of [child.stdout, child.stderr]) stream.on("data", chunk => { output = (output + chunk).slice(-8000); });
const pages = [
  ["/admin", "A little care. A better campus."],
  ["/admin/reports", "Search reports"],
  ["/admin/reports/DEMO-CC-001", "Status timeline"],
  ["/admin/reports/unknown", "Sample report not found"],
  ["/admin/appointments", "Illustrative availability"],
  ["/admin/services", "Add service preview"],
  ["/admin/users", "Search users"],
  ["/admin/analytics", "Issue categories"],
  ["/admin/emergency-contacts", "Unverified placeholder"],
  ["/admin/notifications", "Mark all as read"],
  ["/admin/settings", "Security and privacy"],
];
try {
  let ready = false;
  for (let i = 0; i < 50; i++) {
    if (child.exitCode !== null) throw new Error(`Next exited: ${output}`);
    try { if ((await fetch(base + "/admin", { signal: AbortSignal.timeout(2000) })).ok) { ready = true; break; } } catch {}
    await delay(500);
  }
  assert.ok(ready, `Production server did not start: ${output}`);
  for (const [path, marker] of pages) {
    const response = await fetch(base + path, { signal: AbortSignal.timeout(15000) });
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.ok(html.includes(marker), `${path}: missing ${marker}`);
    assert.ok(html.includes("Local preview only"), `${path}: missing preview boundary`);
    assert.ok(html.includes('id="admin-main"'), `${path}: missing main landmark`);
    console.log(`PASS ${path}`);
  }
  for (const [path, method] of [["/api/admin/stats", "GET"], ["/api/admin/reports/DEMO-CC-001/status", "PATCH"], ["/api/admin/users/DEMO-USER-01", "PATCH"], ["/api/admin/services", "POST"], ["/api/admin/appointments/DEMO-APT-001", "PATCH"]]) {
    const response = await fetch(base + path, { method, ...(method !== "GET" ? { headers: { "Content-Type": "application/json" }, body: "{}" } : {}) });
    assert.equal(response.status, 501, `Privileged API must remain disabled: ${path}`);
  }
  console.log("Phase 4 production route and privileged API smoke checks passed.");
} finally {
  child.kill("SIGTERM");
  await delay(250);
  if (child.exitCode === null) child.kill("SIGKILL");
}
