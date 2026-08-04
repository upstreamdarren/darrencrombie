import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports Darren Crombie's homepage for Cloudflare Pages", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Darren Crombie \| Founder, technologist &amp; human optimist<\/title>/i);
  assert.match(html, /Tech is the thread\./);
  assert.match(html, /Accenture/);
  assert.match(html, /DXC Technology/);
  assert.match(html, /£1m\+/);
  assert.match(html, /I have aphantasia\./);
  assert.match(html, /Keeping Care Human in a Digital World/);
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /https:\/\/darrencrombie\.com\/og-v2\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("includes the finished brand assets", async () => {
  await Promise.all([
    access(new URL("../out/og-v2.png", import.meta.url)),
    access(new URL("../out/favicon.svg", import.meta.url)),
    access(new URL("../out/images/darren-portrait.jpg", import.meta.url)),
    access(new URL("../out/images/family-hike.jpg", import.meta.url)),
  ]);
});
