import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const base = "http://127.0.0.1:3197";
const server = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "start",
    "-p",
    "3197",
    "--hostname",
    "127.0.0.1",
  ],
  { stdio: ["ignore", "pipe", "pipe"] },
);
let logs = "";
for (const stream of [server.stdout, server.stderr])
  stream.on("data", (chunk) => {
    logs = (logs + chunk).slice(-8000);
  });
const cache = new Map();
async function htmlFor(path) {
  if (!cache.has(path)) {
    const response = await fetch(base + path, {
      signal: AbortSignal.timeout(15000),
    });
    assert.equal(response.status, 200, path);
    cache.set(path, await response.text());
  }
  return cache.get(path);
}
try {
  let ready = false;
  for (let i = 0; i < 45; i++) {
    if (server.exitCode !== null) throw new Error(logs);
    try {
      if ((await fetch(base, { signal: AbortSignal.timeout(2000) })).ok) {
        ready = true;
        break;
      }
    } catch {}
    await delay(500);
  }
  assert.ok(ready, logs);
  for (const path of ["/", "/features", "/about", "/contact"]) {
    const html = await htmlFor(path);
    assert.equal(
      (html.match(/<h1[ >]/g) ?? []).length,
      1,
      `${path}: expected one page heading`,
    );
    assert.ok(html.includes("CampusCare"), path);
    for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
      const href = match[1];
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      const url = new URL(href, base + path);
      assert.ok(
        !/^\/(admin|dashboard|report-issue|my-reports|services|appointments|emergency|notifications|profile|settings)(\/|$)/.test(
          url.pathname,
        ),
        `${path}: operational link ${href}`,
      );
      const target = await htmlFor(url.pathname);
      if (url.hash)
        assert.ok(
          target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
          `${path}: broken anchor ${href}`,
        );
    }
    console.log(`PASS public content and links: ${path}`);
  }
  const home = await htmlFor("/");
  for (const id of [
    "the-problem",
    "our-solution",
    "features",
    "how-it-works",
    "for-students",
    "for-teams",
    "product-tour",
    "our-vision",
    "trust",
    "faq",
    "get-started",
  ])
    assert.ok(home.includes(`id="${id}"`), `Missing section: ${id}`);
  assert.equal(
    (home.match(/<details\b/g) ?? []).length,
    8,
    "Eight native FAQs expected",
  );
  assert.ok(home.includes("Hiding links does not secure them"));
  console.log(
    "Marketing V2 content, routing, anchor and preview-boundary smoke checks passed.",
  );
} finally {
  server.kill("SIGTERM");
  await delay(250);
  if (server.exitCode === null) server.kill("SIGKILL");
}
