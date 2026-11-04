# Visual Showcase standard

**English** · [简体中文](VISUAL-SHOWCASE.zh-CN.md)

Status: adopted on 2026-11-04. This is a **product-site presentation and evidence** guideline, not proof that any product is released, qualified, or stable. The local product contract, acceptance reports, release assets and current user guide remain authoritative.

## Goal

A landing page must let a new visitor answer in the first one or two scrolls: *What is this? What does it look or feel like? What will I do with it? What can I actually use today?* Product websites may show imagery; detailed user manuals remain text-first and version resilient.

## Choose the visual based on evidence, not fashion

| Maturity | Preferred hero visual | Label |
| --- | --- | --- |
| Architecture / alpha | Diagram of real inputs, boundaries, outputs or components | “Conceptual workflow / architecture; not a screenshot.” |
| UI being redesigned | Real, stable partial UI only when version-qualified; otherwise honest scenario illustration | “Development preview. UI subject to change.” |
| Stable, packaged UI | Screenshot captured from a named build, with platform and version | “Captured on PLATFORM / VERSION.” |
| Interaction depends on motion | Short muted, captioned demo of a real packaged build, with a still-image fallback | “Recorded on PLATFORM / VERSION.” |

Never revive an older screenshot just because it is available in the repository. Never pretend a CSS mockup, concept image, simulated ECU/hardware trace, marketing render, generated text or planned animation is captured working software. A concept diagram should be visibly labeled beside the diagram, not hidden in alt text. Avoid invented throughput, accuracy, completion times, or customer testimonials.

## Suggested page sequence

1. Product name, one short human-readable result statement, the actual maturity/availability disclosure, and a truthful CTA.
2. **Product in context**: one large legible screenshot, demonstrable workflow, architecture image or before/after example, with a caption identifying its evidence level.
3. Three useful scenarios with outcome-specific copy and corresponding visuals, instead of decorative icon-only feature grids.
4. Supported platforms and limitations, a five-minute start, recovery/help/privacy, and a clear link to source or downloads.

Use a shared rhythm and spacing system, not identical diagrams for unrelated products. Consumer tools should focus on the user experience; engineering tools should prioritize real data, traceability and observable evidence; frameworks should show the architecture and a small running example.

## Source of truth and asset lifecycle

- Store original artwork or reproducible generation inputs in the owning repository; record a source commit, capture environment, license and owner where relevant.
- For release screenshots, use safe fixture data, clean first-run profiles, stable app state and a reproducible capture command. Remove personal files, tokens and machine identity.
- A capture becomes a **candidate**, not an automatically trusted publication. Review UI parity, correctness, language, platform limitations, legibility, accessibility and asset size before merging.
- On each materially changed UI or release, either recapture and update the version label or replace the image with a correctly labeled stable diagram. Do not silently keep a mismatched image.
- Prefer responsive images with explicit dimensions, modern compression, and lazy loading *below* the first viewport. The primary hero must not become a slow-loading, layout-shifting asset.
- Check both English and Chinese, both themes, mobile widths, keyboard focus, contrast, meaningful alt text, captions, reduced-motion behavior and a non-video fallback.

## Acceptance checklist

- [ ] A first-time visitor can describe the product and its primary action from the first two scrolls.
- [ ] Every visual is either verified against a named build or conspicuously labeled conceptual.
- [ ] The diagram does not imply unshipped platforms, live checkout, unsupported hardware claims or unverified external service behavior.
- [ ] No stale screenshot is silently reintroduced.
- [ ] English and Chinese captions/limits agree; image alt text is useful.
- [ ] Mobile, desktop, dark/light and reduced-motion states have been reviewed in a browser.
- [ ] The public URL, images and Pages deployment have been checked after merge.
- [ ] If a packaged screenshot is claimed, native product acceptance has passed for that platform/build.

## Public-browser audit evidence

The **Public product visual smoke** GitHub Actions workflow in this portfolio repository may be dispatched manually (optionally for one site), and runs weekly. It checks the 18 declared public product domains over 1440, 768, 375 and 320 px layouts, records HTTP status, heading presence, horizontal overflow, and broken images, and retains browser screenshots of the first viewport and the workflow illustration for review. The evidence ZIP and structured report are GitHub Actions artifacts, retained for 14 days; generated screenshots must **not** be committed into product documentation as supposedly durable UI captures.

The browser harness sets HTML `lang` to exercise the bilingual showcase CSS; **it does not prove the user-facing language-picker works**. Browser screenshots and a green geometry check do not replace manual visual/keyboard/contrast reviews, native app acceptance, real product screenshots, or product availability checks. Document any false positive with evidence rather than suppressing failed assertions.

## Initial rollout (2026-11-04)

The 18 initial product-site PRs cover Taskly, Booklight, Fulcrum, Movebit, Publy, PodLens, Autarx, FlashPilot, gPTP Studio, Rivet, Glaze, SyncPilot, Payback, RelayPilot, HackDigest, RegexMate, Keyward and Threadly. Their merge, CI, native acceptance and deployment states change independently; **[tracking Issue #18](https://github.com/turlamai/turlamai.github.io/issues/18)** is the status source of truth, not this permanent standard. Initial illustrations are intentionally conceptual and labeled, because old app screenshots were stale. Replace with versioned, verified app captures when the relevant interfaces stabilize.
