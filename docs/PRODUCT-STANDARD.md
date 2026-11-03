# Product delivery standard / 产品交付标准

Status: adopted documentation and delivery baseline, 2026-10-23. This document owns portfolio-wide
delivery policy. It does not replace a library protocol, a product specification,
or an existing implementation handoff. Implementation remains tracked in the linked product issues; documentation adoption does not mean the required runtime gates have passed.

## Documentation languages

Follow the [English/Chinese language policy](DOCUMENTATION-LANGUAGES.md) / [中文规范](DOCUMENTATION-LANGUAGES.zh-CN.md). Default public entry points are English with complete Chinese user paths; paired product promises must agree. Library API/protocol semantics remain one normative English source. Keep code identifiers and examples unchanged, update both user-facing languages in the same change, and record missing translations honestly.

## Agent startup and policy acknowledgement

At every bounded slice boundary, safely refresh repository state, re-read the root AGENTS file and local implementation handoff, then read this standard, the [language policy](DOCUMENTATION-LANGUAGES.md) and [portfolio](../PORTFOLIO.md). Record the repository starting SHA and central-policy commit/revision actually read in the PR or handoff. A stale checkout or existing conversation does not automatically receive policy changes; a link alone is not an agent acknowledgement. Preserve another writer's dirty worktree and use isolation where needed. If policy inputs are offline or missing, mark them unverified rather than claiming current adoption. Keep product behavior, normative protocols and active implementation queues with their existing owners.

For exact GitHub Release asset inventories, versioned download links, checksums, signed feeds and native-package acceptance, also follow the [release engineering standard](RELEASE-STANDARD.md) / [中文版](RELEASE-STANDARD.zh-CN.md). A merged workflow is not an accepted tagged installer.

## Publisher identity and release-channel decisions

For every packaging, release, update or commercial slice, read the current
[distribution policy and whole-portfolio channel matrix](DISTRIBUTION.md) /
[中文规范与全产品渠道矩阵](DISTRIBUTION.zh-CN.md). Record its actual revision/SHA
and the product's channel decision in the existing release handoff. Account
purchase is deferred during development; missing production credentials remain
an explicit release gate. Library/source and website releases do not inherit
desktop Store-account requirements. Store-hosted MSIX is a candidate requiring
real qualification, not an implemented Rivet/Glaze capability. Preserve existing
production checks and permanent rights across automatic updates. A central link
does not prove that an already running agent has read or implemented the policy.

## Ownership and composition

The five-library graph and release order remain in
[Keel's family architecture](https://github.com/turlamai/keel/blob/main/docs/family-architecture.md).
[PORTFOLIO.md](../PORTFOLIO.md) owns investment and commercial classification.
Each product owns its domain, interaction contract, data format, release
channels and commercial promise. Rivet and Glaze are alternative presentation
and runtime choices; a website or publishing pipeline need not use either.

Use the smallest composition that works: a free app needs no Permit or
Commerce; offline commercial fulfilment can add Permit alone; online checkout
adds Commerce. Keep user BYOK credentials, provider secrets, Permit issuer keys,
update keys and platform publisher identities separate. A desktop verifier
never receives an issuer private key or provider merchant secret.

Shared meaning belongs upstream only after two real consumers demonstrate the
same need. Keel owns transport-neutral values, not a UI system. Frameworks own
platform mechanisms and tooling, not feature paywalls, prices or account policy.
Do not create a sixth all-purpose platform to coordinate these five libraries.

## Minimum user promise

Every published product must make these facts discoverable in its README,
landing page and native Help/About (or equivalent CLI/web surface):

| Area | Required result | Evidence |
| --- | --- | --- |
| Availability | Supported OS, architecture, minimum version and actual maturity; Download only for a usable published asset | Release tag and exact assets, plus clean install/launch result |
| First success | One small useful result without reading architecture documentation | Packaged first-run scenario with a disposable profile |
| Updates | Check, verified download, apply or explicit package-manager/manual handoff, restart and recovery semantics | N→N+1 test for every supported installation shape; invalid signature/hash rejected |
| Feedback | Working issue/report entry; preview redacted diagnostics before sharing; private route for security findings | Entry exercised in app, README and site; no automatic upload |
| Data | Storage location, backup/export, restore, migration and deletion behavior | Restore and migration against real files/DB fixtures |
| Secrets and AI | Where keys live, destination of documents/audio/prompts, whether content syncs, usage/cost controls | Redaction tests and denied/unavailable secure-storage path |
| Accessibility | Keyboard reachability, focus, names/roles, large text, contrast and reduced motion | Native accessibility trace plus representative screenshots |
| Commercial terms | Current free scope, paid scope when available, offline behavior, expiry, recovery and support | Permit policy fixtures and checkout/claim evidence if applicable |

These are outcomes, not a demand that every product self-replaces its own
binary. A deb/rpm package-manager handoff can be correct. An updater must not
silently replace an MSI installation with a portable archive. Checksums alone
do not authenticate a download; a manifest's existence does not prove an
installed application can consume it. OS publisher trust is a separate gate.

For a hosted service replace desktop installation/update checks with deployment,
rollback, backup/restore, queue recovery and public health evidence. For a
content site use publishing freshness, source attribution, broken-link checks,
correction reporting and recovery from a failed scheduled publication.

## Public website boundary

User-facing navigation and footers route to products, downloads, user documentation, feedback and actual commercial terms. Portfolio investment decisions, draft prices, authorization implementation plans and agent handoffs belong in repository maintainer maps and AGENTS. Keep launch hypotheses out of customer pricing navigation. A product may publish an outcome-oriented roadmap that clearly distinguishes plans from delivered behavior; this is separate from its internal execution queue.

## Product experience contract

Before a design/interaction slice, consult the dated
[whole-portfolio interaction review](INTERACTION-REVIEW-2026-10.md) /
[中文审查](INTERACTION-REVIEW-2026-10.zh-CN.md), then refresh the product's linked
issue, canonical contract and active PRs. The review owns findings/routing, not
a second product specification. Distinguish source observations from native
runtime proof, preserve later fixes and record policy/source SHAs in the
existing handoff. Do not expand features ahead of the product's identified
draft, persistence, user-control, keyboard or recovery gaps.

Reuse an existing canonical product/design document. Do not add another one
when it can hold the following table:

`scenario → initial state → action → visible result → persisted effect →
failure/recovery → per-platform presentation → evidence`.

Define navigation hierarchy, selection versus activation, keyboard and Escape
order, focus restoration, destructive actions/undo, draft preservation,
loading/empty/error/offline states, cancellation and language switching. Equal
semantics do not require equal pixels. A platform exception names its reason,
user-visible fallback and a test; an empty host implementation is not an
exception. Keep translated strings and brand tokens in a product-owned source.

Borrow clarity, hierarchy, feedback and inclusive design from
[Apple HIG](https://developer.apple.com/design/human-interface-guidelines/design-principles).
Choose native keyboard and focus behavior using
[Windows guidance](https://learn.microsoft.com/en-us/windows/apps/develop/input/keyboard-interactions)
and [GNOME accessibility guidance](https://developer.gnome.org/hig/guidelines/accessibility.html).
Do not impose macOS window chrome, fonts, blur or menu placement on other OSes.
Glaze products may share frontend structure across desktops but must still test
WebView, IME, focus, file dialogs, scaling and accessibility on each supported OS.

## Release evidence and agent handoff

Taskly's executable product contract is a useful reference, not a permanent
claim that Taskly is fully mature. Rivet products use their existing
`rivet-acceptance.rktd` and platform workflow; Glaze products use their existing
native bridge and packaged frontend suites. Web/CLI products use their own
delivery suites. Do not import Rivet into Glaze to obtain a test runner.

A small change need not run unrelated expensive suites. Domain changes need
their focused behavior evidence; guaranteed cross-platform interaction,
embedding, packaging or update changes need all affected platform/installation
legs before release. Each result identifies product, source SHA, dependency
pins, OS/architecture, artifact digest, scenario and command/run URL. A green
build, a process-survival smoke or an available archive cannot substitute for
the corresponding user workflow. Cancelled, skipped, queued and unrun are not
passes. Evidence contract changes receive the same review as behavior changes.

Before implementation an agent reads AGENTS, the documentation map, the active
plan, relevant issue/PR and the current git state. It records:

1. One bounded outcome and its observable acceptance scenario.
2. The owning files, upstream contract dependencies and active writers.
3. Starting SHA, isolated branch/worktree, validation commands and rollback.

Never stash/reset another agent's work. Shared schema/i18n/release files have
one writer during an integration slice; platform legs can proceed independently
against the committed shared contract. Finish with code where needed, tests,
the canonical document, concise changelog and the next remaining slice. Runtime
work is complete only with evidence; a plan or issue is a planning deliverable.

## Documentation and repository fitness

AGENTS is a short router with invariants, edit points and commands. README is a
user entry. A documentation map identifies each canonical owner. Active plans
contain status, evidence and one next handoff. ADRs explain durable decisions;
CHANGELOG records shipped outcomes. Delete a completed plan after moving lasting
rules to their owners. Do not preserve chat transcripts as architecture.

Simplification is evidence-led: inventory old stacks, generated files, scripts,
assets and branches; classify active/runtime, tests, distribution, historical
and dead; prove reference/build reachability before removal. Large host files
are a signal for boundary review, not grounds for another rewrite.

Never delete a branch merely because it is old or its tip is not an ancestor of
main (squash merges break that test). Record branch tip, linked PR, merge or
patch-equivalence evidence, unique commits, active worktree/release references,
owner and recovery ref. Keep open PRs and unmerged work. Prune only individually
proven, recoverable candidates in a separate housekeeping change. Never rewrite
published tags/history or remove an old installer needed for update testing.

## Authorization decision before implementation

Before changing trials, paid gates, credential import, renewal or update eligibility, read the product's complete authorization decision in its paired PRICING documents and the linked implementation issue. Explicitly select no commercial integration, offline perpetual entitlement, or server-verified hosted rights; activation leases are opt-in and need a named business reason. Record decision revision and actual source/policy SHAs, plus offline/outage/expiry/recovery evidence. No policy-file or issue update proves a running agent has acknowledged it. Keep these maintainer decisions outside customer website navigation.

## Commercial readiness

Product features remain useful offline after an update window closes. Explicitly
distinguish `use_expires_at`, `updates_through` and `features_through`. Eligibility
to obtain/use a build must use immutable authenticated build metadata, not the
download date or a client-controlled version string. Decide whether a maintenance
renewal extends from payment or the previous paid-through date, and test it.
Do not turn a permanent purchase into a subscription by expiring the whole app.

An offer design records edition/features, duration basis, named seats versus
devices, trial, renewal, refund/chargeback treatment, recovery and support.
Commerce consumes that reviewed product policy through its issuer adapter.
Deployment alone does not make every product payment-ready: each product needs
verification UI, trust data, claim/import/recovery and release eligibility tests.
Offline credentials cannot promise immediate remote revocation.

Source rights, paid official distribution/support, and hosted services are
different promises. Never narrow rights already granted by a released license,
make backup/export a hostage feature, or remove an existing free capability to
manufacture a Pro tier. Hosted plans need explicit quota, overage/stop behavior,
cost ceiling, cancellation and export. Do not advertise unlimited service
without a defined enforceable usage model. No fabricated retention/conversion
metrics or telemetry may be introduced to justify an offer.

## Adoption order

P0: fix false claims, licensing conflicts, secret/authorization failures and
release-blocking evidence. P1: complete the primary user loop, update/recovery,
feedback and cross-platform contract. P2: add paid convenience once the free
baseline is stable. P3: mobile and speculative expansion follow proven need.

Keep at most one shared integration slice per product active. Use gPTP Studio
for the first commercial canary, Fulcrum for consumer monetization, Taskly for
the interaction/release reference and HackDigest for the Glaze consumer canary.
Maintenance products receive compatibility, security and truthfulness fixes;
they do not inherit an automatic mobile or feature-expansion obligation.
