# Publisher identity and distribution

**English** · [简体中文](DISTRIBUTION.zh-CN.md)

Decision revision: **2026-10-23-v1**. Adopted portfolio planning policy; no account, certificate, Store submission or production signing has been completed by this decision. Platform eligibility must be checked again before enrollment and submission. This document owns shared publisher/channel decisions; product release documents own executable procedures and evidence.

For the technical artifact naming, verification and GitHub Release gates of each supported distribution channel, follow the [release engineering standard](RELEASE-STANDARD.md) / [中文](RELEASE-STANDARD.zh-CN.md). That engineering contract does not relax publisher signing or Store admission conditions below.

## Decision and purchase timing

Do not purchase developer memberships or signing certificates during the current development stage. Continue local builds, domain tests, packaging, installation, backup/restore and update-protocol validation without production credentials. A development artifact is not evidence of publisher-trusted public distribution.

Before the first qualified public Mac release, budget for one Apple Developer Program membership, currently USD 99/year with regional pricing. The initial Mac channel candidate is direct website distribution using Developer ID signing, notarization and stapling. Membership does not require launching in the Mac App Store. Development can start with a free Apple account. [Apple program](https://developer.apple.com/programs/), [Developer ID](https://developer.apple.com/developer-id/).

Windows development and direct distribution do not require a Store developer account. The new Store onboarding provides free registration for individuals and companies; use the official entry point and verify eligibility instead of budgeting the old USD 19/99 registration fees. Identity verification and account type remain required. [Individual registration](https://learn.microsoft.com/en-us/windows/apps/publish/whats-new-individual-developer), [company registration](https://blogs.windows.com/windowsdeveloper/2026/05/07/publish-to-microsoft-store-as-a-company-now-with-free-registration-and-faster-onboarding/).

For a suitable first Windows consumer app, evaluate Store-hosted MSIX before buying a direct-download certificate. Store MSIX certification includes Microsoft signing; Store MSI/EXE submissions still require publisher signing. A Store account is not a certificate for arbitrary website downloads. Independently signed direct distribution remains a candidate where Store packaging or capabilities do not fit. Do not assume current Rivet/Glaze packaging already supports an accepted Store MSIX. [Signing options](https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/code-signing-options).

Azure Artifact Signing public-trust individual enrollment currently requires US/Canada residency. It is not the assumed path for a mainland-China individual; a future business must separately qualify. Do not change identity/address to bypass eligibility. Defer CA selection and quotation until a real direct Windows release needs it; do not buy EV merely to promise immediate SmartScreen reputation. [Artifact Signing eligibility](https://learn.microsoft.com/en-us/azure/artifact-signing/quickstart), [signing and reputation](https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/code-signing-options).

## Portfolio channel matrix

These are channel candidates, conditional on a product's actual supported platforms and readiness. They do not authorize a new port, restart paused development, promise a store listing or change free/paid classifications in [PORTFOLIO](../PORTFOLIO.md).

| Products | Initial route and next decision |
| --- | --- |
| Taskly, Fulcrum, Booklight | On supported macOS: signed/notarized website release first. On supported Windows: evaluate Store MSIX after the free pilot; keep direct delivery as the alternative. Paid Store rollout also requires the update-window compatibility gate below. |
| Payback, PodLens, RegexMate, MoveBit | Stay free. Evaluate Windows Store MSIX where supported; Mac public binaries still need the same publisher-trust gate. RegexMate is the proposed first low-complexity Store candidate after its existing delivery gates pass, not a commitment to resume it now. Payback's legacy paid/device gate must be removed first. |
| Keyward | Stay free. Direct signed desktop release first; separately review secret custody, permissions and Store account eligibility before any listing. A local key organizer is not automatically an approved signing service or a safe production private-key store. |
| gPTP Studio, Autarx, FlashPilot | Engineering-oriented direct/native distribution first, only on qualified platforms. Preserve Linux packages/CLI where supported; qualify hardware access, permissions and driver dependencies before proposing a Store channel. A simulator is not hardware acceptance. gPTP remains the commercial technical pilot, separate from the Windows Store pilot. |
| HackDigest | Local/BYOK desktop channel follows the Mac/Windows rules above. Hosted rights and service billing are a separate future readiness gate. No Store listing is required to validate the backend. |
| Publy | Free CLI/plugin/self-host route first; controlled hosted pilot before any public service offer. Web hosting needs no Apple/Windows developer account. Apply desktop rules only if an actual desktop distribution is introduced and qualified. |
| Threadly | Maintenance first; signed direct desktop builds on supported platforms. Store submission only after the existing sign-in/read/update loop is proven. No mobile expansion from this decision. |
| SyncPilot | Maintain the qualified Linux/Resilio integration; no new Apple/Windows account requirement or automatic cross-platform port. |
| RelayPilot | Architecture experiment; no production/Store availability claim before a useful executable product and its platform gates exist. |
| Rivet, Glaze, Keel, Permit, Commerce | Library/source packages retain existing licenses and release verification. Framework examples can use development signing. A future standalone distributed binary gets its own channel assessment; an SDK release does not require a store membership. |
| jrtx.site, Pitboard, Racket Programming, Yinwang Archive | Website/content delivery and publishing recovery; no desktop developer account requirement. Keep this maintainer policy out of customer homepage navigation. |

## Identity and channel boundaries

Maintain one coherent publisher identity per actual legal publisher across its products; do not create accounts per application or use borrowed identities. Product identifiers and certificates remain separately managed as platform rules require. Plan ownership/recovery, MFA, an account inventory and future entity changes before public release. A brand is not a legal company.

Apple lists an individual's legal name as the App Store seller; sole proprietors/single-person businesses normally enroll as individuals. Organization enrollment requires an eligible legal entity and D-U-N-S/authority verification. Do not assume obtaining a local business registration guarantees an Apple organization account. [Apple enrollment](https://developer.apple.com/help/account/membership/program-enrollment/).

Microsoft's account rules differ: current Store policy 10.14 addresses businesses/trade/profession and business-like publisher identity; 10.8.3 restricts primary financial-account functionality on individual accounts. Review the actual subject, name and functionality, and obtain platform clarification where needed. Do not assume a free app, BYOK app or key-management app necessarily qualifies for an individual account. Enrollment is not proof of product approval. [Store policies](https://learn.microsoft.com/en-us/windows/apps/publish/store-policies).

Platform identity, update-manifest signing, Permit issuer signing and payment-provider credentials are separate trust domains. Runtime consumers receive only required verification material. Production credentials stay outside repositories, ordinary PR jobs and diagnostics; use a protected release environment and a signer/HSM/keychain compatible with the actual credential. Do not promise that a new CA key is exportable as PFX because a framework supports a PFX input.

For Store-hosted MSIX, design updates to remain owned by Store/OS; in-app controls can hand off to Store. Direct packages use the verified product updater or explicit installer/package-manager handoff. Never silently convert a Store install into a portable/site install, self-replace its package, or change channel without a reviewed data/identity migration. Store availability and automatic-update settings are user/administrator controlled; test offline and disabled-Store cases. [Store updates](https://support.microsoft.com/en-us/windows/apps/turn-on-automatic-app-updates).

**Perpetual licenses must survive automatic updates.** A Store-managed update may arrive after `updates_through`. Before shipping a paid channel, prove that it preserves previously acquired features and data, or choose a channel/edition model that can enforce optional upgrade eligibility without bricking the installed app. Do not ship a new binary that rejects an existing perpetual right at startup. Feature eligibility must use authenticated immutable release metadata; do not invent a new Permit field in this document. Until a product proves this behavior, its paid Store route is deferred.

The initial commercial route remains approved website checkout plus the product's reviewed Permit profile. A Windows non-game PC Store app can use eligible secure third-party commerce under current 10.8, subject to disclosure and certification; that does not approve any provider or account. Mac App Store/iOS commerce requires a separate product/region policy review; Developer ID distribution does not automatically create an App Store offer. Keep Store receipts, when introduced, in a verified channel adapter rather than treating them as interchangeable Permit credentials. [Store commerce policy](https://learn.microsoft.com/en-us/windows/apps/publish/store-policies).

## Agent handoff and acceptance

At each release, packaging, update or commercial slice, read this policy through [PRODUCT-STANDARD](PRODUCT-STANDARD.md). Record actual source/policy SHAs, supported OS/architectures, proposed channel, account/identity eligibility, signing ownership, update owner, data migration and entitlement behavior in the product's existing release document or issue. An existing conversation does not receive this automatically; a policy link is not an acknowledgement. Do not duplicate shared rules into divergent per-product copies.

| Gate | Required evidence |
| --- | --- |
| Development now | Real package installs/launches with disposable data; domain/bridge tests, backup/restore and update protocol/corruption checks. Label ad-hoc/unsigned artifacts as development previews. |
| Credential-dependent gate | Explicitly pending until the owner obtains the account/certificate. Keep credential validation tests and mandatory release checks; absence is not a passed public-release check or reason to weaken CI. |
| Public channel | Exact source/dependency pins and final artifact digest; clean install/launch and permissions on supported systems; channel-specific verified signer/notarization/Store acceptance, N→N+1 update, failure recovery, data preservation and uninstall. Re-test final signed/Store artifact; earlier development evidence is not sufficient. |
| Paid offer | Approved merchant/subject and applicable hosting requirements; purchase/claim/import, outage/refund/recovery and perpetual-rights/update-window evidence. Free-product distribution does not depend on completing Commerce or paid-product filing. |

Rivet's documented direct production mechanism remains [production signing](https://github.com/turlamai/rivet/blob/main/docs/production-signing.md); do not remove its checks or claim the MSIX alternative is implemented. Glaze's library release remains [RELEASING](https://github.com/turlamai/glaze/blob/main/docs/RELEASING.md); that source-package workflow is not consumer app signing. Shared mechanism belongs in the frameworks only after the pilot demonstrates a reusable need. Product policy, account choice, store metadata and commercial terms remain product/publisher responsibilities.
