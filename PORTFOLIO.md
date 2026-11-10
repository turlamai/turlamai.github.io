# Portfolio and launch business design

**English** · [简体中文](PORTFOLIO.zh-CN.md)

Version **2026-10-v2**, 2026-10-23. The owner confirmed that all products are still in development, with no actual users; only Rivet, Payback and Taskly are actively changing. This document replaces previous commercial classifications, fixed launch sequences, early-bird plans and presales. Prices can evolve with evidence; the previous rule of fixing the structure permanently before promotion no longer applies. Licenses already granted for released source remain effective.

This document owns portfolio roles, investment order and shared rules. Each product's `PRICING.md` and complete `PRICING.zh-CN.md` translation describe its prices, rights and launch gates. Launch targets are not live offers. Development features, a deployed payment service or a signed credential do not by themselves establish commercial delivery. Follow the [documentation language policy](docs/DOCUMENTATION-LANGUAGES.md).

Taskly and Payback documentation is handed off in separate PRs #60 and #21, awaiting CI and merge; the table links to those PRs until then. Other plans have been written to the default branches of repositories whose development has stopped.

## Concentrate revenue work on a few products

| Product | Decision | What a customer pays for | Execution order |
| --- | --- | --- | --- |
| [Taskly](https://github.com/turlamai/taskly/pull/60) | Purchase of the complete official desktop product; 14-day trial; reminders and natural-language entry are not separate extras | A dependable daily task system with good interaction and recovery | Consumer flagship 1; complete existing interaction/update/recovery work first |
| [Fulcrum](https://github.com/turlamai/fulcrum/blob/main/PRICING.md) | Existing launcher stays free; purchase of new workflow Pro | Multi-step automation authoring, debugging and failure recovery | Consumer flagship 2; demonstrate one new paid workflow first |
| [Booklight](https://github.com/turlamai/booklight/blob/main/PRICING.md) | Existing reader stays free; purchase of a new research workbench | Cross-book research with traceable citations | Second tier; stabilize reading and annotation recovery first |
| [gPTP Studio](https://github.com/turlamai/gptp-studio/blob/main/PRICING.md) | Linux official Pro purchase with optional update renewal | Real time-synchronization control, reference-hardware qualification and engineering evidence | Technical commerce pilot; this does not predict the earliest market revenue |
| [Autarx](https://github.com/turlamai/autarx/blob/main/PRICING.md) | Complete engineering workbench purchase with optional update renewal | Verifiable configuration/validation/generation | Long term; no rush to add platforms or sales channels |
| [FlashPilot](https://github.com/turlamai/flashpilot/blob/main/PRICING.md) | Free AGPL engine; purchase of official validation assets/distribution | Flashing, failure and recovery evidence for specific ECU/adapter combinations | Long term; real hardware-in-the-loop evidence before a paid offer |
| [HackDigest](https://github.com/turlamai/hackdigest/blob/main/PRICING.md) | Free BYOK; capped hosted translation/digest subscription | Ongoing compute without configuring a key | Verify transport, secret custody and costs first; no lifetime hosting |
| [Publy](https://github.com/turlamai/publy/blob/main/PRICING.md) | Free CLI/plugin/self-hosting; hosted publishing subscription | Stable egress, scheduling, credential custody and recovery | Small pilot after reliable internal use; no theme marketplace |

Taskly's complete-product model reduces an artificial Free/Pro feature matrix. Fulcrum and Booklight already have substantial free functionality: a new paid layer must deliver workflow outcomes rather than put BYOK, export or basic search behind a new wall. These are portfolio decisions, not validated demand or sales forecasts.

## Free entry points, maintenance and experiments

| Product | Decision and investment boundary |
| --- | --- |
| [Payback](https://github.com/turlamai/payback/pull/21) | Every delivered platform is free; no separate mobile sale is planned. Remove the existing ten-device/PB1 gate. Do not charge for backup, export or BYO sync |
| [PodLens](https://github.com/turlamai/podlens/blob/main/PRICING.md) | Free BYOK listening/reading tool. Do not build another hosted-audio billing service. Validate repeat listening first |
| [RegexMate](https://github.com/turlamai/regexmate/blob/main/PRICING.md) | Free CLI/GUI/MCP and internal production/CI/agent use. Cancel near-term team Pro; no corporate-identity fee. Existing BUSL grant stays in force |
| [MoveBit](https://github.com/turlamai/movebit/blob/main/PRICING.md) | Free community utility; finish updates, multi-display interaction and recovery, and keep it small |
| [Threadly](https://github.com/turlamai/threadly/blob/main/PRICING.md) | Free desktop community tool, in maintenance mode; sign-in, replies, notifications and BYOK stay free |
| [TermPilot](https://github.com/turlamai/termpilot/blob/main/PRICING.md) | Commercial consumer product in early development; one-purchase launch target (¥168 / US$24) with BYOK AI free of charge. No sales before the Permit/Commerce gates pass |
| [Keyward](https://github.com/turlamai/keyward/blob/main/PRICING.md) | Commercial product in early development (reclassified from free release infrastructure on 2026-11-10). Pricing model undecided; not a free community tool, and the portal no longer lists it under community |
| [SyncPilot](https://github.com/turlamai/syncpilot/blob/main/PRICING.md) | Free maintenance mode. No separate entitlement business for a shell controlling third-party Resilio |
| [RelayPilot](https://github.com/turlamai/relaypilot/blob/main/PRICING.md) | Architecture experiment; no VPN, node or traffic presales and no claim of an existing service |
| Pitboard | Free content entry point; maintain accuracy, sources and corrections, without a new subscription wall |
| Racket Programming / Yinwang Archive | Free content/community entry points; do not package third-party archived content as exclusive paid material |

Keepsake and Moonbeam were deleted and are outside the portfolio; do not restart them. Free roles reduce separate account, order, activation and support operations for every small product. Free pricing does not replace recovery, security updates or accessibility standards.

## Infrastructure and open source

Rivet, Glaze and Keel (MIT), Permit and Commerce (Apache-2.0), and the protocol-library family keep their current licenses. Add no commercial gates or paid SDK first. These libraries multiply delivery efficiency across the products. The only authoritative five-library dependency/ownership graph remains Keel's `docs/family-architecture.md`. Product business design must not inject prices, payment SDKs or product-specific policy into Rivet or Glaze.

Source rights and official service rights are different. License credentials cannot revoke AGPL/Apache/MIT rights already granted; free use does not relabel BUSL source as MIT. Any future separately licensed component needs a clear boundary before development, rather than an improvised license change used as a moat.

## Authorization integration map

Decision revision: `2026-10-auth-1`, 2026-10-23. This is a maintainer routing map, not customer pricing navigation or evidence of runtime completion. Each application's paired PRICING documents own its complete authorization decision and acceptance gates.

| Products | Chosen integration |
| --- | --- |
| Taskly, Fulcrum, Booklight, gPTP Studio, Autarx, FlashPilot | Offline Permit entitlement, perpetual eligible use plus a paid update/feature window; no activation lease, hardware binding or device cap. Five-seat offers use named assignments, not floating concurrency |
| HackDigest, Publy | Account-scoped hosted subscription right; server verifies signed rights, current revision/payment state and atomic quota. No offline hosted-service allowance or desktop activation lease |
| Keyward | Commercial direction decided (2026-11-10); no Permit/Commerce integration shipped yet — the entitlement mechanism is evaluated together with TermPilot's Permit/Commerce gates when pricing lands |
| Payback, PodLens, RegexMate, MoveBit, Threadly, SyncPilot, RelayPilot | No commercial Permit/Commerce integration, licensing accounts or paid device/seat gates; remove conflicting legacy restrictions before advertising an unrestricted build |
| Pitboard, Racket Programming, Yinwang Archive | Free content/community; no commercial credentials or paywall |
| Rivet, Glaze, Keel, Permit, Commerce | Infrastructure keeps existing source licenses. Product authorization profiles stay with products; no framework-owned paywall |

Before a licensing slice, read the local authorization decision, relevant implementation issue and current protocol contract, then record source/policy SHAs and the decision revision. A live agent has **not** acknowledged this merely because a file or issue was updated. Existing conversations must refresh at their next bounded slice. Taskly #60 and Payback #21 remain the policy handoff until merged; their default AGENTS route there. Other applications have the decision on their default branches.

## Shared commercial and technical rules

- **Local product purchases:** perpetual use with 12 months of new-version eligibility. Renewal is optional, does not charge automatically and does not back-bill gaps. Start a renewal from the later of payment time and the current expiry. Named users, devices and concurrent sessions are different concepts. No hardware fingerprints; no claim that fully offline credentials support prompt revocation.
- **Hosted subscriptions:** charge only for an actual continuous service. Specify accounts, periods, models/input lengths, quotas, failure accounting, exhaustion behavior, cancellation and data export. No unlimited AI, lifetime servers or hidden overage bills.
- **Free products stay outside the commercial chain:** do not add sign-in, activation or accounts merely to demonstrate Permit/Commerce. BYOK, update-signing, entitlement-signing and payment-provider keys are separate trust domains.
- **Commerce** owns offers/policies/payment evidence/issuance with versioned, immutable offers. **Permit** expresses product rights and update windows. Products use platform secure storage and domain code for local decisions. Hosted consumption is metered on the server; a copyable offline credential is not a concurrency counter.
- Do not sell undelivered platforms. CNY/USD prices are independent regional launch targets, not exchange-rate conversions. Real checkout must state taxes, support, refunds and the final total. There are no actual users, so do not invent an existing-customer migration exercise.
- Do not offer a lifetime whole-portfolio bundle, prolonged early-bird sale or bundled subscriptions. Maturity and costs differ; validate individual products first. A future bundle's refund/cancellation must not revoke unrelated product rights.

## How to test these decisions

The main risk is the absence of real usage feedback. Have a small number of trial users complete key tasks, then collect feedback they choose to provide: first success, repeat use at 7/30 days, failures that cause abandonment, support time and purchase intent. Do not imply that this evidence already exists or add telemetry by default.

Taskly/Fulcrum must demonstrate outcomes people will buy. Booklight must establish reading reliability before expanding research features. Automotive products demonstrate professional value with real reference combinations and bounded validation assets. Before either hosted service is sold, measure worst-case allowed-quota costs, availability, abuse and refund/cancellation behavior. Target variable costs for models, storage, egress and payment fees below 30% of revenue; HackDigest inference should be below 25% of its target price. These are launch gates, not present profitability claims.

Start one commercial implementation slice at a time: gPTP is the payment-to-rights/update technical pilot; Taskly is the first consumer product. Do not have agents install paywalls across the whole portfolio at once. Rivet, Taskly and Payback remain the active work. Other projects first get documentation and explicit gates, rather than automatically restarting every roadmap.

## Sources and judgment

Reviewed on 2026-10-23: the [official Alfred shop](https://www.alfredapp.com/shop/) offers version licenses/upgrades; [official Raycast pricing](https://www.raycast.com/pricing) combines a free core with continuing-service/AI subscriptions. These establish that different packages exist, not our conversion rate or price. A few paid flagships, free ecosystem tools and subscriptions only for hosting are decisions based on this portfolio's costs and solo-maintainer capacity.

Shared delivery rules: [PRODUCT-STANDARD](docs/PRODUCT-STANDARD.md). Initial evidence: [PRODUCT-REVIEW](docs/PRODUCT-REVIEW-2026-10.md). Website structure: [HOME-PAGE-PLAN](docs/HOME-PAGE-PLAN.md). Agents follow this policy and each product's pricing documents. Commercial categories in the dated initial review are historical evidence, not current pricing instructions.
