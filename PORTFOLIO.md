# TurLamAI product portfolio — delivery before monetization

**English** · [简体中文](PORTFOLIO.zh-CN.md)

**Decision revision: 2026-11-18-quality-first.** This replaces the 2026-10 pricing, Free/Pro, presale and product-wide Permit/Commerce integration plans.

## Current rule

**Publy is the only product with an active commercialization workstream.** Every other product is in quality-first development: no purchase prompts, checkout, trial expiry, paid feature restrictions, subscriptions, monetization tasks or app-level Permit/Commerce integrations. Do not plan a future paid tier as part of a current feature or release task. Improve a real user journey and verify installation, recovery, privacy and accessibility first.

This is **not** a promise that every future edition will be free forever. Any future non-Publy monetization needs a new explicit owner decision after the product is useful and tested. No previous target price or entitlement policy remains approved. Do not present historical prices as offers.

**Legal boundary:** This decision does not retroactively change any repository's `LICENSE`, BUSL terms or previously granted source rights. Update-signing, release authenticity, publisher accounts and user-provided AI API keys are security/distribution concerns, not commercial entitlements. Do not remove those safeguards.

## Products and publication status

| Group | Products | Current scope |
| --- | --- | --- |
| Everyday tools | Taskly, Fulcrum, RegexMate, MoveBit, Payback, Keyward, TermPilot | Product polish and verified desktop workflows; no paid editions |
| Reading | Booklight, PodLens, HackDigest | Reading/listening quality, BYOK privacy and recovery; no hosted paid Pro plans |
| Automotive | Autarx, FlashPilot, gPTP Studio, Ingot | Semantic correctness, device/hardware evidence and secure engineering tools; no commercial licensing |
| Community and experiments | Threadly, SyncPilot, Pitboard, RelayPilot, Layerly | Useful, accurately labeled previews or maintenance; no paywalls |
| Publishing | **Publy** | The only active commercial exception; preserve its current pricing/hosted service gates and open work |
| Content | Racket Programming, Yinwang Blog Archive | Publication and attribution, not products to paywall |

Ingot and Layerly are **early prototypes**, not verified packaged installers. Never use a "Download" CTA for a product without a real tested artifact. Each product owns its accurate maturity, platform, privacy, feedback and release details; the portal is an index, not runtime acceptance evidence.

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

- Close non-Publy monetization-only issues as **not planned**, leaving the issue history auditable.
- Rescope mixed quality/monetization issues to the quality work instead of discarding valuable engineering tasks.
- Remove stale customer-facing pricing and purchase copy in non-Publy READMEs and sites. Do not claim a paid tier is about to launch.
- Do not delete security signing, existing source license conditions, or the shared libraries Publy uses.
- Keep Publy billing and commercial readiness under [Publy's own decision](https://github.com/turlamai/publy/blob/main/PRICING.md).

