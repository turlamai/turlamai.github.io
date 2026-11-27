# Public presentation and documentation freshness

**English** · [简体中文](PUBLIC-PRESENTATION.zh-CN.md)

Status: initial review and change-control standard, 2026-10-27. This complements [PRODUCT-STANDARD](PRODUCT-STANDARD.md), [HOME-PAGE-PLAN](HOME-PAGE-PLAN.md) and [DOCUMENTATION-LANGUAGES](DOCUMENTATION-LANGUAGES.md). Product repositories continue to own their own tested functionality, guides, release artifacts and normative contracts. Adopting this standard does **not** certify a product, translate every old page, or prove that a deployed page is fresh.

## Concise product entry (owner decision 2026-11-27)

The landing page introduces and routes; the application performs the task; the guide explains it. Within the first viewport, communicate one outcome, the primary action and any applicable price or availability constraint. Use a short supporting sentence, not repeated feature inventories, slogans or architecture sections. Commercial products expose verified buy, setup and start paths directly; free apps prioritize verified downloads or honest preview status; libraries prioritize installation, a minimal example and documentation. Keep required purchase prerequisites visible before payment. Put advanced configuration, troubleshooting and developer commands in linked documentation or progressive disclosure. Preserve the family theme, bilingual equivalence, accessibility and genuine release evidence. Review mobile and desktop screenshots, CTA destinations and actual deployed pages. Do not add paid offers outside the current portfolio authorization. Website work must not displace active Publy client implementation.

## Presentation architecture

| Surface | Primary audience and job | Authoritative information |
| --- | --- | --- |
| `jrtx.site` | Find the right available product, with clear preview/experimental labels | Curated catalog; each product is the authority for its own capabilities |
| `<product>.jrtx.site` | Understand what the product solves; find a real first success, platform, privacy and download | Short, outcome-led copy backed by tagged release and user guide |
| Product `README.md` + `README.zh-CN.md` | Evaluate and start using/building the product | Current scope, tested minimal example, compatibility, guides, license and feedback |
| Product user guide | Finish a task, recover data, troubleshoot, upgrade safely | Reproducible text and tested commands; optional screenshots |
| Changelog / release page | Decide whether and how to upgrade | Exact version, platform-specific artifacts, known limitations, checksums/signing and migration |

Never make screenshots the primary explanation of a workflow: readers and agents need searchable instructions, copyable commands, keyboard alternatives, observable expected results and explicit failure/recovery steps. Use a task narrative (input → action → observable result) before a marketing feature list. A product's actual maturity matters more than its visual polish.

## Source-of-truth and editing rules

- **Single owner, many surfaces.** The product's tested source/specification and released artifacts determine actual features, supported OS/CPU, package names, first-run behavior and updater support. The user guide determines data paths and safe backup/recovery instructions. The product's signed-off current commercial terms determine any live offer. Copy only the small public summary needed by each surface; link to the owner for full details.
- **Separate available, experimental and planned.** A roadmap, CI-green backend or simulator is not proof of a packaged GUI, hardware accuracy, a supported OS, paid checkout or future update. Do not show numeric teaser prices, unverified direct-download links, fake usage/customer quotes or claims of universal privacy.
- **Separate source from deployment.** Search engines and caches can retain old content after the repository changes. At a content rollout, record the site repo source commit, the deployed content checked at the canonical URL, and the exact product release tag/asset. If the deployment cannot be verified, mark it *unverified*, not fixed.
- **English and Chinese move together.** Preserve identical current claims, examples, numbers, CTA intent, platform support, limitations, privacy and purchase state across the product page and paired README/guide. Keep API identifiers/commands identical. An untranslated page is a recorded gap, not an assumed translation.
- **Appropriate scope.** Commercial products need task + trust + install; developer libraries need runnable minimum example + precise API/compatibility references; content/archives need provenance, freshness and corrections. Do not rewrite archived/third-party forks into first-party sales pages.

## Screenshot, animation and demonstration contract

A screenshot is a **versioned piece of evidence**, not the design-system source or an evergreen API contract.

1. **Prefer live text/HTML** for feature summaries, pricing/status, CLI examples, shortcut tables, labels and navigation. Use images for visual composition, spatial steps and real product appearance only. Mark CSS/HTML mockups as **illustrations**, never as packaged-app screenshots.
2. **Use a real, reproducible state.** Capture from the release candidate or verified tagged build, with synthetic user data and no tokens, credentials, internal file names or private documents. Keep original capture and optional sanitized derivative.
3. **Record image provenance** next to the asset or in a small checked-in manifest; example (not a claim of an existing asset):

   ```yaml
   file: images/launcher-search-macos-light.webp
   product: fulcrum
   app_version: 0.x.y
   source_commit: <full-commit-sha>
   build_artifact: <verified-release-or-acceptance-reference>
   platform: macOS
   os_version: <tested-os-version>
   theme: light
   state: sample-app-search
   captured_at: YYYY-MM-DD
   kind: real-app-screenshot   # or illustration/mockup
   alt_en: Search results after typing a sample application name
   alt_zh: 输入示例应用名称后的搜索结果
   ```

4. **Images are optional and limited.** One strong, real hero image plus at most a few workflow-specific images is usually enough. Use responsive dimensions, compressed WebP/AVIF or appropriately sized PNG, lazy-load below the fold, descriptive alternative text and captions identifying platform/version where relevant. Do not embed full paragraphs, command lists or prices inside images.
5. **A UI change triggers review, not blind recapture.** On a change to layout, labels, first-run flow or platform host, flag the affected images. Compare them with the current build, either recapture, annotate as a historical version or remove them. Do not overwrite a previously tagged version's evidence with a newer UI.
6. **Respect independent platform UIs.** Do not imply a macOS screenshot is Windows UI; when behaviors differ, say so in text and show the affected host only where needed. Accessibility, focus state and keyboard route must remain usable without the image.

## A small release-bound checklist

For each affected product release or public-doc PR:

- [ ] Confirm exact base/source SHA, tested release tag and advertised downloadable artifacts; note unsupported targets.
- [ ] Verify the first useful workflow from a *fresh install or clean profile*; keep copied commands and expected results in text.
- [ ] Review canonical product site, README EN/ZH, guide EN/ZH, GitHub About and main-site card for factual drift (especially OS/CPU, updater, CLI distribution, data backup/sync, pricing and security).
- [ ] Check images against the build and record platform/version/source/alt and any intentionally historical content.
- [ ] Validate links, relative assets, language navigation, mobile/desktop widths, 200% zoom, keyboard focus, reduced motion and relevant alt text. A static check alone cannot validate product facts or visual appearance.
- [ ] Compare actual deployed URL with expected source SHA, preserve rollback revision, and update the product-specific issue with evidence and unresolved gaps.

## Rollout and ownership

The tracked cross-portfolio implementation is [issue #5](https://github.com/turlamai/turlamai.github.io/issues/5). Existing [homepage issue #2](https://github.com/turlamai/turlamai.github.io/issues/2) retains layout/featured-story ownership. Begin with consumer/professional products; then content sites and core libraries; handle archived/upstream repositories only after provenance review. This document is a repeatable quality contract, **not** a statement that 100 repositories are already upgraded.
