import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports Darren Crombie's homepage for Cloudflare Pages", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Darren Crombie \| Founder, technologist &amp; builder<\/title>/i);
  assert.match(html, /Tech is the thread\./);
  assert.match(html, /Accenture/);
  assert.match(html, /DXC Technology/);
  assert.match(html, /£1m\+/);
  assert.match(html, /Grandad Doug/);
  assert.match(html, /SBRI Phase 2/);
  assert.match(html, /Inclusive Innovation Award/);
  assert.match(html, /My UK Life/);
  assert.match(html, /https:\/\/ai\.myuk\.life/);
  assert.match(html, /more than 30 regions/i);
  assert.match(html, /Any Guru/);
  assert.match(html, /Health Innovation Network/);
  assert.match(html, /Carers Trust/);
  assert.match(html, /180,000\+/);
  assert.match(html, /Grow the impact/);
  assert.match(html, /reduce delivery costs/i);
  assert.match(html, /carers-trust-report-accounts-2024-25\.pdf/);
  assert.doesNotMatch(html, /3,000\+|Dorset carers reached within months/);
  assert.match(html, /https:\/\/calendly\.com\/upstreamhealth\/30min/);
  assert.match(html, /Book a 30-minute conversation/);
  assert.doesNotMatch(html, /ANOTHER BUSINESS UNIT/);
  assert.match(html, /Brum Chat/);
  assert.match(html, /FROM CARERS TO COMMUNITY IMPACT/);
  assert.match(html, /Crisis and Resilience Fund/);
  assert.match(html, /gov\.uk\/government\/publications\/crisis-and-resilience-fund-guidance/);
  assert.match(html, /I have aphantasia\./);
  assert.doesNotMatch(html, /Jules|Frankie|William|AgeWell/);
  assert.doesNotMatch(html, /A rare night out together/);
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
    access(new URL("../out/images/family-adventure-line-art.webp", import.meta.url)),
    access(new URL("../out/images/couple-live-music-line-art.webp", import.meta.url)),
  ]);
});
