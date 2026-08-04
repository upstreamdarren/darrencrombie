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
  assert.match(html, /Grandad Doug/);
  assert.match(html, /SBRI Phase 2/);
  assert.match(html, /Inclusive Innovation Award/);
  assert.match(html, /AgeWell/);
  assert.match(html, /Any Guru/);
  assert.match(html, /Health Innovation Network/);
  assert.match(html, /Dorset Council/);
  assert.match(html, /Carers Trust/);
  assert.match(html, /https:\/\/calendly\.com\/upstreamhealth\/30min/);
  assert.match(html, /Book a 30-minute conversation/);
  assert.match(html, /ANOTHER BUSINESS UNIT/);
  assert.match(html, /Visit any\.guru/);
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
