# TurLamAI product portfolio — delivery before monetization

**English** · [简体中文](PORTFOLIO.zh-CN.md)

**Decision revision: 2026-11-19-platform-line-commercial.** Amends the 2026-11-18-quality-first decision (which replaced the 2026-10 pricing, Free/Pro, presale and product-wide Permit/Commerce integration plans): MoveBit and Payback join Publy as active commercialization products; platform scopes narrow (MoveBit → macOS + Windows, Payback → macOS + Windows + iOS); Taskly, Booklight and PodLens re-line from rivet to glaze; Fulcrum stays quality-first as the three-platform flagship.

## Current rule

**Publy, MoveBit and Payback are the only products with active commercialization workstreams** (2026-11-19). Each validates a distinct commercial path, and none ships a purchase flow until its own PRICING decision lands:

- **Publy** — hosted publishing service; its pricing gates are already defined.
- **MoveBit** — desktop commercial product; validates the macOS desktop payment flow first.
- **Payback** — validates the full-platform payment flow (macOS, Windows, iOS, iPadOS); deliberately simple feature surface, the family's commercialization pathfinder.

Every other product is in quality-first development: no purchase prompts, checkout, trial expiry, paid feature restrictions, subscriptions, monetization tasks or app-level Permit/Commerce integrations. Do not plan a future paid tier as part of a current feature or release task. Improve a real user journey and verify installation, recovery, privacy and accessibility first.

This is **not** a promise that every future edition will be free forever. Any future monetization beyond Publy, MoveBit and Payback needs a new explicit owner decision after the product is useful and tested. No previous target price or entitlement policy remains approved. Do not present historical prices as offers.

**Legal boundary:** This decision does not retroactively change any repository's `LICENSE`, BUSL terms or previously granted source rights. Update-signing, release authenticity, publisher accounts and user-provided AI API keys are security/distribution concerns, not commercial entitlements. Do not remove those safeguards.

## Products and publication status

| Group | Products | Current scope |
| --- | --- | --- |
| Everyday tools | Taskly, Fulcrum, RegexMate, MoveBit, Payback, Keyward, TermPilot, RelayPilot, Layerly | Product polish and verified desktop workflows; MoveBit and Payback are entering commercialization with narrowed platform scopes — see the in-flight changes below |
| Reading | Booklight, PodLens, HackDigest | Reading/listening quality, BYOK privacy and recovery; no hosted paid Pro plans |
| Automotive | Autarx, FlashPilot, gPTP Studio, Bitsmith | Semantic correctness, device/hardware evidence and secure engineering tools; no commercial licensing |
| Community and free tools | Threadly, SyncPilot, Pitboard | Free community tools, accurately labeled; no paywalls |
| Publishing | **Publy** | The only active commercial exception; preserve its current pricing/hosted service gates and open work |
| Content | Racket Programming, Yinwang Blog Archive | Publication and attribution, not products to paywall |

Bitsmith and Layerly are **early-stage products in direct development**, not verified packaged installers. Never use a "Download" CTA for a product without a real tested artifact. Each product owns its accurate maturity, platform, privacy, feedback and release details; the portal is an index, not runtime acceptance evidence.

## In-flight platform and line changes (2026-11-19)

- **MoveBit** narrows to macOS + Windows (Linux dropped, [movebit#169](https://github.com/turlamai/movebit/issues/169)) and enters commercialization as the desktop commercial product, validating the macOS payment flow first (its own PRICING decision pending).
- **Payback** narrows to macOS + Windows + iOS (Linux dropped, [payback#66](https://github.com/turlamai/payback/issues/66)) and enters commercialization as the full-platform payment-flow validation product (macOS / Windows / iOS / iPadOS; its own PRICING decision pending).
- **Fulcrum** stays quality-first on all three desktop platforms (macOS / Windows / Linux) — the family's only product supporting all three simultaneously, and that breadth is its identity. Reaching a stable three-platform experience remains its open challenge.
- **Taskly / Booklight / PodLens** re-line from rivet to glaze: engines, schemas and data formats survive; the UI is rebuilt as a single web implementation ([taskly#141](https://github.com/turlamai/taskly/issues/141), [booklight#75](https://github.com/turlamai/booklight/issues/75), [podlens#63](https://github.com/turlamai/podlens/issues/63)). Each rewrite ships a version reset per the family stack-change rule.
- Per-product portal platform claims update only when each reset release actually ships — never before. The "no Download CTA without a real tested artifact" rule stays in force throughout.

## Shared libraries

Rivet, Glaze, Keel and protocol/tool libraries remain infrastructure. Permit and Commerce remain valid general-purpose libraries and may support Publy; halt product-family licensing rollouts to other apps. Preserve the libraries' licenses, security fixtures, cryptographic verification and compatibility tests. Do not delete legitimate Publy dependencies or confuse source licensing with commercial access gates.

## Delivery gates across all products

1. **First success:** documented user task completed without speculative functionality.
2. **Product quality:** keyboard/accessibility, interaction consistency, errors and cancellation across claimed platforms.
3. **Trust:** local data location, backup/restore, API-key security, privacy, no unrequested telemetry.
4. **Distribution:** exact published artifacts, clean install, signed/update verification and rollback/recovery evidence.
5. **Public presence:** matching English/Chinese README, accurate landing page and jrtx.site entry; avoid stale screenshots, dead links and sales copy.

See the [product delivery standard](docs/PRODUCT-STANDARD.md), [public presentation standard](docs/PUBLIC-PRESENTATION.md), and [site catalog](README.md). Product implementation details and test evidence stay in their repositories. This policy does not imply the listed work is already complete.

## How to apply this decision

- Close monetization-only issues on non-commercial products (anything outside Publy, MoveBit, Payback) as **not planned**, leaving the issue history auditable.
- Rescope mixed quality/monetization issues to the quality work instead of discarding valuable engineering tasks.
- Remove stale customer-facing pricing and purchase copy in non-commercial READMEs and sites (anything outside Publy, MoveBit, Payback). Do not claim a paid tier is about to launch.
- Do not delete security signing, existing source license conditions, or the shared libraries Publy uses.
- Keep Publy billing and commercial readiness under [Publy's own decision](https://github.com/turlamai/publy/blob/main/PRICING.md).

