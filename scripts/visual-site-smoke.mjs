#!/usr/bin/env node
// Public product-site visual smoke. Artifacts contain rendered pages, not product UI captures.
// Usage: AUDIT_SITE=taskly node scripts/visual-site-smoke.mjs
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const sites = [
  "taskly", "booklight", "fulcrum", "movebit", "publy", "podlens",
  "autarx", "flashpilot", "gptp-studio", "rivet", "glaze", "syncpilot",
  "payback", "relaypilot", "hackdigest", "regexmate", "keyward", "threadly"
];
const selection = (process.env.AUDIT_SITE || "").trim();
if (selection && !sites.includes(selection)) {
  throw new Error("AUDIT_SITE must be one of: " + sites.join(", "));
}
const targetSites = selection ? [selection] : sites;
const variants = [
  { name: "desktop-en-light", width: 1440, height: 900, lang: "en", theme: "light", capture: true },
  { name: "tablet-zh-light", width: 768, height: 1024, lang: "zh-CN", theme: "light", capture: false },
  { name: "mobile-en-dark", width: 375, height: 812, lang: "en", theme: "dark", capture: true },
  { name: "narrow-zh-dark", width: 320, height: 700, lang: "zh-CN", theme: "dark", capture: true }
];

const outDir = "visual-audit";
const imageDir = join(outDir, "screenshots");
await mkdir(imageDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
try {
  for (const name of targetSites) {
    const url = "https://" + name + ".jrtx.site/";
    const result = { name, url, responseStatus: null, variants: [], errors: [], warnings: [] };
    results.push(result);
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      colorScheme: "light",
      reducedMotion: "reduce"
    });
    const page = await context.newPage();
    try {
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 35000 });
      result.responseStatus = response?.status() ?? null;
      if (!response || !response.ok()) {
        throw new Error("HTTP response " + (response?.status() ?? "missing"));
      }
      // Prefer determinism, but do not wait forever for unrelated analytics or feeds.
      await page.waitForLoadState("load", { timeout: 12000 }).catch(() => {});
      await page.evaluate(async () => { await document.fonts.ready; });

      const showcase = page.locator("#visual-showcase");
      const showcaseCount = await showcase.count();
      result.showcasePresent = showcaseCount === 1;
      if (showcaseCount !== 1) {
        result.warnings.push("Expected one #visual-showcase element; found " + showcaseCount + ". It may not be merged yet.");
      }

      for (const v of variants) {
        await page.setViewportSize({ width: v.width, height: v.height });
        await page.emulateMedia({ colorScheme: v.theme, reducedMotion: "reduce" });
        // Exercises the existing bilingual CSS (vs-en/vs-zh), not the product's
        // language-picker interaction. Manual language-toggle acceptance remains required.
        await page.evaluate((lang) => { document.documentElement.lang = lang; }, v.lang);
        await page.waitForTimeout(220);
        const dimensions = await page.evaluate(() => ({
          viewport: window.innerWidth,
          documentWidth: Math.max(document.documentElement.scrollWidth, document.body?.scrollWidth || 0),
          heading: (document.querySelector("h1")?.textContent || "").trim(),
          showcaseVisible: !!document.querySelector("#visual-showcase") &&
            getComputedStyle(document.querySelector("#visual-showcase")).display !== "none",
          brokenImages: [...document.images].filter(i => i.complete && i.naturalWidth === 0)
            .map(i => i.currentSrc || i.src).slice(0, 8),
          // Diagnose concrete overflowing DOM elements; do not mask overflow
          // with an overflow-x:hidden band-aid that hides controls.
          overflowElements: [...document.querySelectorAll("body *")].filter(el => {
            const style = getComputedStyle(el);
            if (style.display === "none" || style.visibility === "hidden") return false;
            const rect = el.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0 &&
              (rect.right > window.innerWidth + 2 || rect.left < -2);
          }).map(el => {
            const rect = el.getBoundingClientRect();
            return {
              element: el.localName + (el.id ? "#" + el.id : "") +
                [...el.classList].slice(0, 3).map(cls => "." + cls).join(""),
              x: Math.round(rect.x), right: Math.round(rect.right),
              width: Math.round(rect.width), text: (el.textContent || "").replace(/\s+/g, " ").slice(0, 64)
            };
          }).sort((a, b) => b.right - a.right).slice(0, 18),
          lang: document.documentElement.lang
        }));
        const record = { variant: v.name, ...dimensions, errors: [] };
        if (!dimensions.heading) record.errors.push("missing nonempty h1");
        if (dimensions.documentWidth > dimensions.viewport + 2) {
          record.errors.push("horizontal overflow: " + dimensions.documentWidth + "px vs " + dimensions.viewport + "px viewport; first offenders: " +
            JSON.stringify(dimensions.overflowElements.slice(0, 8)));
        }
        if (dimensions.brokenImages.length) {
          record.errors.push("broken images: " + dimensions.brokenImages.join(", "));
        }
        if (v.capture) {
          const prefix = name + "-" + v.name;
          const viewportPath = join(imageDir, prefix + "-viewport.png");
          await page.screenshot({ path: viewportPath, animations: "disabled", timeout: 18000 });
          record.viewportScreenshot = viewportPath;
          if (showcaseCount === 1 && await showcase.isVisible()) {
            const showcasePath = join(imageDir, prefix + "-showcase.png");
            await showcase.screenshot({ path: showcasePath, animations: "disabled", timeout: 18000 });
            record.showcaseScreenshot = showcasePath;
          }
        }
        result.variants.push(record);
      }
    } catch (error) {
      result.errors.push(String(error?.stack || error));
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}

const failed = results.filter(r => r.errors.length ||
  r.variants.some(v => v.errors.length));
const summary = [
  "# Public site visual smoke",
  "",
  "Captured against the deployed public domains; does not verify packaged app UI.",
  "Language states are exercised via HTML lang; the site's language switch still requires manual testing.",
  "This checks geometry, image load, heading, HTTP status and stores three combined theme/locale screenshot sets.",
  "It does not establish usability or visual approval; review the screenshot artifact.",
  "",
  "| Site | HTTP | Showcase | Checks |",
  "| --- | --- | --- | --- |",
  ...results.map(r => "| " + r.name + " | " + (r.responseStatus ?? "n/a") +
    " | " + (r.showcasePresent ? "yes" : "not yet") + " | " +
    (r.errors.length || r.variants.some(v => v.errors.length) ? "FAIL" : "pass") + " |"),
  "",
  "Failures:",
  ...failed.flatMap(r => [
    "### " + r.name,
    ...r.errors.map(e => "- " + e),
    ...r.variants.flatMap(v => v.errors.map(e => "- " + v.variant + ": " + e))
  ]),
  failed.length ? "" : "- None found by these automated checks.",
  ""
];
await writeFile(join(outDir, "results.json"), JSON.stringify({
  checkedAt: new Date().toISOString(), results
}, null, 2) + "\n");
await writeFile(join(outDir, "summary.md"), summary.join("\n"));
console.log(summary.join("\n"));
if (failed.length) process.exitCode = 1;
