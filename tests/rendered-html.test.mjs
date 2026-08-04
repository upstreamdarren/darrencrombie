import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports Darren Crombie's homepage for Cloudflare Pages", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Darren Crombie \| AI for health, care and public services<\/title>/i);
  assert.match(html, /Building technology/);
  assert.match(html, /Technology should make us feel more human, not less\./);
  assert.match(html, /Founder · Bridgit Care/);
  assert.match(html, /Making complex change feel possible\./);
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /https:\/\/darrencrombie\.com\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("includes the finished brand assets", async () => {
  await Promise.all([
    access(new URL("../out/og.png", import.meta.url)),
    access(new URL("../out/favicon.svg", import.meta.url)),
  ]);
});
