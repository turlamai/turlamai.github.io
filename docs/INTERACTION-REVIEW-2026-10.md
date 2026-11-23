# Product interaction review — October 2026

**English** · [简体中文](INTERACTION-REVIEW-2026-10.zh-CN.md)

Reviewed 2026-10-23. This is a dated architecture/design review and implementation routing map, not a visual certification or a second product specification. Product contracts and linked issues remain the owners. Read this together with [PRODUCT-STANDARD](PRODUCT-STANDARD.md) and each repository's current AGENTS before the next relevant slice; do not overwrite later fixes with this snapshot.

> Status note (2026-11-23): Payback was delisted and its repository deleted by owner decision. Its rows and anchors below are historical review evidence only; do not route new work to them.

## Evidence and limits

All 25 repositories were exported from pinned default-branch commits into isolated review directories. Review covered product positioning, design/acceptance documents and representative native/shared-web interaction code, with 63 checked source anchors. It is not a line-by-line audit of every file. Existing open issues/PRs were inspected to retain active ownership and avoid duplicating existing queues.

The live Racket book preface was additionally inspected: desktop part-navigation buttons had no aria-expanded/aria-controls. A checked-in PodLens screenshot was viewed as historical reference only; it predates current markup. No application was run against real personal data, keys, payments, publishing accounts or hardware. No new three-desktop native validation or comprehensive screen-reader/visual audit was performed. Source-confirmed missing error paths and unguarded requests are distinguished from proposed failure-injection reproductions. No product is declared fully compliant from documentation or a green build alone.

## Decisions

- Retain the shared backend/native-host architecture. Do not approve portfolio-wide rewrites, framework migrations or matching pixels as a remedy for missing user workflows.
- FlashPilot needs a bounded bench/plan-verification workflow before a wider execution UI; Autarx needs reliable search/selection/reference navigation; MoveBit needs user control and recovery in its default interruption model.
- Retain the useful task/list, reader, launcher, podcast and regex structures. Fix draft lifetime, persisted results, asynchronous identity, keyboard reachability and failure recovery before expanding features.
- Publy and gPTP have misleading old implementation instructions. Correct those entry points while leaving runtime qualification pending.
- Paused products receive a clear recovery/implementation entry. This review does not restart all roadmaps or authorize new ports.

The review uses purpose, user agency, familiar native behavior and adaptability as decision tools, drawing on [Apple design principles](https://developer.apple.com/design/human-interface-guidelines/design-principles), [Windows design/accessibility guidance](https://learn.microsoft.com/en-us/windows/apps/design/) and [GNOME simplicity and user-effort principles](https://developer.gnome.org/hig/principles.html). Each product must decide its actual tradeoffs; Mac chrome, blur, fonts or permanent three-column layouts are not mandatory portfolio patterns.

## Whole-portfolio matrix

P1 means the issue should precede related feature expansion or public-readiness claims; P2 is a bounded maintenance/developer-experience follow-up. It does not imply that every product is currently staffed. See each linked issue for observation versus runtime-proof status, decisions and exact acceptance tasks.

| Product | Review judgment / next bounded outcome | Priority | Owner |
| --- | --- | --- | --- |
| FlashPilot | turn the desktop RPC probe into a bounded bench and plan-verification workflow | P1 | [#7](https://github.com/turlamai/flashpilot/issues/7) |
| Autarx | complete the inspect-and-trace loop with keyboard selection and stable inspector identity | P1 | [#23](https://github.com/turlamai/autarx/issues/23) |
| MoveBit | make forced breaks opt-in and provide immediate accessible recovery | P1 | [#49](https://github.com/turlamai/movebit/issues/49) |
| Payback | preserve the device draft until asynchronous save succeeds | P1 | [#24](https://github.com/turlamai/payback/issues/24) |
| HackDigest | make story failures recoverable and primary navigation keyboard accessible | P1 | [#4](https://github.com/turlamai/hackdigest/issues/4) |
| Threadly | bind topic loading and recovery to the selected thread identity | P1 | [#2](https://github.com/turlamai/threadly/issues/2) |
| Keyward | make storage and copy consequences visible at the point of action | P1 | [#3](https://github.com/turlamai/keyward/issues/3) |
| Taskly | reconcile the product contract before adding interaction features | P1 | [#58](https://github.com/turlamai/taskly/issues/58) |
| Booklight | expose annotation persistence failures and preserve recovery | P1 | [#20](https://github.com/turlamai/booklight/issues/20) |
| Fulcrum | retain the interaction grammar and qualify compact/native behavior | P1 | [#36](https://github.com/turlamai/fulcrum/issues/36) |
| PodLens | define a compact listening layout and an operable transcript seek path | P1 | [#14](https://github.com/turlamai/podlens/issues/14) |
| RegexMate | give match inspection one keyboard-accessible cross-platform meaning | P1 | [#5](https://github.com/turlamai/regexmate/issues/5) |
| gPTP Studio | align the GTK session workflow and acceptance checklist with the actual product | P1 | [#40](https://github.com/turlamai/gptp-studio/issues/40) |
| Publy | make preview, draft delivery and public publishing distinct product states | P1 | [#7](https://github.com/turlamai/publy/issues/7) |
| SyncPilot | preserve the small daemon handoff and verify escape/recovery paths | P2 | [#10](https://github.com/turlamai/syncpilot/issues/10) |
| RelayPilot | keep the first desktop decision task bounded | P2 | [#1](https://github.com/turlamai/relaypilot/issues/1) |
| Rivet | validate native interaction recipes using the audited consumer failures | P1 | [#314](https://github.com/turlamai/rivet/issues/314) |
| Glaze | qualify shared-web interaction through a real consumer recovery task | P1 | [#76](https://github.com/turlamai/glaze/issues/76) |
| Keel | retain the small contract library and validate developer onboarding | P2 | [existing #6](https://github.com/turlamai/keel/issues/6) |
| Permit | retain the verifier/policy boundary and test explanation in real products | P2 | No new issue / 不新增 |
| Commerce | prove the user-facing unknown-payment and claim-recovery contract in the consumer | P1 | [#4](https://github.com/turlamai/commerce/issues/4) |
| jrtx.site | keep product discovery grounded in a verified user outcome | P2 | [#2](https://github.com/turlamai/turlamai.github.io/issues/2) |
| Pitboard | make search-index failure distinct from no results | P2 | [#1](https://github.com/turlamai/pitboard/issues/1) |
| Racket Programming | make the table of contents accessible across viewport changes | P2 | [#8](https://github.com/turlamai/racket-programming/issues/8) |
| Yinwang Archive | finish search and image-overlay focus semantics | P2 | [#5](https://github.com/turlamai/yinwang-archive/issues/5) |

## First implementation slices

1. Preserve active writers. Payback's save-failure/draft case is a focused first fix after its current slice; keep date/currency correctness and legacy-gate removal in their existing owners. Taskly reconciles its current edit/undo contract before adding task taxonomy. Rivet validates the taskboard and one consumer journey.
2. On resuming paused work, correct MoveBit's strong-mode default/escape and HackDigest's failure/keyboard loop; finish Booklight annotation durability and Keyward secret-copy clarity. Autarx/Threadly need identity-safe details rather than another navigation layer.
3. FlashPilot desktop remains a labelled validation preview until its first plan workflow and operation boundaries are qualified. gPTP stays Linux-only and preserves real hardware gates. Publy stays draft-first with a separate controlled hosted pilot.
4. Use at least two real consumers to justify upstream mechanisms. Draft retention and request/selection identity are candidate recipes, not a mandate for a new Rivet form engine, selector language or Glaze workflow framework.

## Concrete document corrections

- [publy documentation PR](https://github.com/turlamai/publy/pull/9): proposed correction; runtime defects and acceptance remain open.
- [gptp-studio documentation PR](https://github.com/turlamai/gptp-studio/pull/41): proposed correction; runtime defects and acceptance remain open.

Nine new UX issues and fourteen existing issue updates carry the substantive review. Eight existing product handoff issues additionally link to the new UX task. RegexMate's prior licensing issue is closed and was not reopened; its new interaction issue is routed here. Do not close implementation issues just because their design documentation was merged. Existing conversations must refresh at the next slice; links are not acknowledgement or completion.

## Source snapshots and evidence

Each source link pins the reviewed commit. Newer default branches and open PRs must be checked before implementation. No user-specific infrastructure/identity information is required by this review.

| Repository | Source commit | Representative evidence |
| --- | --- | --- |
| flashpilot | [`1a1dd5f`](https://github.com/turlamai/flashpilot/tree/1a1dd5fcea127a6f3dbaaa52aa87d5809945bc62) | [macos-host/Sources/RivetHost/ContentView.swift:9](https://github.com/turlamai/flashpilot/blob/1a1dd5fcea127a6f3dbaaa52aa87d5809945bc62/macos-host/Sources/RivetHost/ContentView.swift#L9) |
| autarx | [`adba6f3`](https://github.com/turlamai/autarx/tree/adba6f310471a39747977e0d54549acb79f3a962) | [macos-host/Sources/RivetHost/MainWindowView.swift:92](https://github.com/turlamai/autarx/blob/adba6f310471a39747977e0d54549acb79f3a962/macos-host/Sources/RivetHost/MainWindowView.swift#L92) |
| movebit | [`d8501f6`](https://github.com/turlamai/movebit/tree/d8501f6e360511edcd5db2f8962267f75968f71e) | [racket/movebit/config.rkt:42](https://github.com/turlamai/movebit/blob/d8501f6e360511edcd5db2f8962267f75968f71e/racket/movebit/config.rkt#L42) |
| payback | [`8eeef0a`](https://github.com/turlamai/payback/tree/8eeef0a2f8a3ed1021d1be603ec3b9982a54071b) | [macos-host/Sources/RivetHost/DeviceForm.swift:320](https://github.com/turlamai/payback/blob/8eeef0a2f8a3ed1021d1be603ec3b9982a54071b/macos-host/Sources/RivetHost/DeviceForm.swift#L320) |
| hackdigest | [`c5912a5`](https://github.com/turlamai/hackdigest/tree/c5912a5efd774b2891e3ef5d69d44765751850bf) | [apps/desktop/src/components/StoryDetail.tsx:62](https://github.com/turlamai/hackdigest/blob/c5912a5efd774b2891e3ef5d69d44765751850bf/apps/desktop/src/components/StoryDetail.tsx#L62) |
| threadly | [`c866ccf`](https://github.com/turlamai/threadly/tree/c866ccf490c818a8324a1d832b3d104c605e8375) | [macos-host/Sources/RivetHost/ThreadlyStore.swift:353](https://github.com/turlamai/threadly/blob/c866ccf490c818a8324a1d832b3d104c605e8375/macos-host/Sources/RivetHost/ThreadlyStore.swift#L353) |
| keyward | [`185637d`](https://github.com/turlamai/keyward/tree/185637d052d6f3544b7d4989f13b93fb3503c706) | [macos-host/Sources/RivetHost/ContentView.swift:63](https://github.com/turlamai/keyward/blob/185637d052d6f3544b7d4989f13b93fb3503c706/macos-host/Sources/RivetHost/ContentView.swift#L63) |
| taskly | [`bf5b942`](https://github.com/turlamai/taskly/tree/bf5b942cfa95c52860a499c8c2dd7054bcef27a8) | [shared/spec/PRODUCT-SPEC.md:102](https://github.com/turlamai/taskly/blob/bf5b942cfa95c52860a499c8c2dd7054bcef27a8/shared/spec/PRODUCT-SPEC.md#L102) |
| booklight | [`3b016a5`](https://github.com/turlamai/booklight/tree/3b016a510fc564fa7017401f3e20d487f553b607) | [macos-host/Sources/RivetHost/ReaderModel.swift:346](https://github.com/turlamai/booklight/blob/3b016a510fc564fa7017401f3e20d487f553b607/macos-host/Sources/RivetHost/ReaderModel.swift#L346) |
| fulcrum | [`bdc5ca6`](https://github.com/turlamai/fulcrum/tree/bdc5ca68b4611840a48bb6f666fef92ea8f0228b) | [docs/cross-platform-interaction.md:7](https://github.com/turlamai/fulcrum/blob/bdc5ca68b4611840a48bb6f666fef92ea8f0228b/docs/cross-platform-interaction.md#L7) |
| podlens | [`670d265`](https://github.com/turlamai/podlens/tree/670d2659d179036bc1aa47e6ddd4751621ee9976) | [docs/DESIGN-ROADMAP.md:55](https://github.com/turlamai/podlens/blob/670d2659d179036bc1aa47e6ddd4751621ee9976/docs/DESIGN-ROADMAP.md#L55) |
| regexmate | [`6b15629`](https://github.com/turlamai/regexmate/tree/6b15629e0a4a08c1254a187e2c74bf3124aaa3b4) | [macos-host/Sources/RivetHost/ContentView.swift:127](https://github.com/turlamai/regexmate/blob/6b15629e0a4a08c1254a187e2c74bf3124aaa3b4/macos-host/Sources/RivetHost/ContentView.swift#L127) |
| gptp-studio | [`ba499fd`](https://github.com/turlamai/gptp-studio/tree/ba499fd55029d91ccbfbb5b2a7cc8941964fb9d5) | [docs/ux-acceptance.md:3](https://github.com/turlamai/gptp-studio/blob/ba499fd55029d91ccbfbb5b2a7cc8941964fb9d5/docs/ux-acceptance.md#L3) |
| publy | [`01143ce`](https://github.com/turlamai/publy/tree/01143ce5740b8c2c08503c8161e7a2c307e5e324) | [docs/design.md:3](https://github.com/turlamai/publy/blob/01143ce5740b8c2c08503c8161e7a2c307e5e324/docs/design.md#L3) |
| syncpilot | [`ec72a25`](https://github.com/turlamai/syncpilot/tree/ec72a251b1650fd37839de4e5577d55d2cb9ded8) | [linux/src/main.cpp:459](https://github.com/turlamai/syncpilot/blob/ec72a251b1650fd37839de4e5577d55d2cb9ded8/linux/src/main.cpp#L459) |
| relaypilot | [`1e96d78`](https://github.com/turlamai/relaypilot/tree/1e96d78ebb3a82f3d73f05767d4cce46538c0b5e) | [PRODUCT.md:11](https://github.com/turlamai/relaypilot/blob/1e96d78ebb3a82f3d73f05767d4cce46538c0b5e/PRODUCT.md#L11) |
| rivet | [`1ced9e9`](https://github.com/turlamai/rivet/tree/1ced9e9e898173d9b95a9fdd0e746ef822b6c51a) | [docs/agent-native.md:227](https://github.com/turlamai/rivet/blob/1ced9e9e898173d9b95a9fdd0e746ef822b6c51a/docs/agent-native.md#L227) |
| glaze | [`4156dca`](https://github.com/turlamai/glaze/tree/4156dca8bff865159c4801756c48ef23bca1e4d5) | [docs/USING.md:5](https://github.com/turlamai/glaze/blob/4156dca8bff865159c4801756c48ef23bca1e4d5/docs/USING.md#L5) |
| keel | [`6fc1ba5`](https://github.com/turlamai/keel/tree/6fc1ba5e0ab9fead489a95f3e78472cecfcf1670) | [docs/USING.md:7](https://github.com/turlamai/keel/blob/6fc1ba5e0ab9fead489a95f3e78472cecfcf1670/docs/USING.md#L7) |
| permit | [`ed32d0e`](https://github.com/turlamai/permit/tree/ed32d0eec463665e470657e54d222a1b98148a1e) | [docs/USING.md:15](https://github.com/turlamai/permit/blob/ed32d0eec463665e470657e54d222a1b98148a1e/docs/USING.md#L15) |
| commerce | [`11fd533`](https://github.com/turlamai/commerce/tree/11fd53391b8039ef82639d59800d309728b1d6a5) | [docs/USING.md:7](https://github.com/turlamai/commerce/blob/11fd53391b8039ef82639d59800d309728b1d6a5/docs/USING.md#L7) |
| turinglambdaai.github.io | [`d32f840`](https://github.com/turlamai/turlamai.github.io/tree/d32f8400264c3b6dddd613d207331934e2d7694e) | [index.html:143](https://github.com/turlamai/turlamai.github.io/blob/d32f8400264c3b6dddd613d207331934e2d7694e/index.html#L143) |
| pitboard | [`5797032`](https://github.com/turlamai/pitboard/tree/579703298d6fdc1ef9ecabccdeed4fa2a98cc41d) | [assets/app.js:313](https://github.com/turlamai/pitboard/blob/579703298d6fdc1ef9ecabccdeed4fa2a98cc41d/assets/app.js#L313) |
| racket-programming | [`9949185`](https://github.com/turlamai/racket-programming/tree/9949185583cdbd19252d4b0424f84fc1607cbc6a) | [components/BookHeader.tsx:15](https://github.com/turlamai/racket-programming/blob/9949185583cdbd19252d4b0424f84fc1607cbc6a/components/BookHeader.tsx#L15) |
| yinwang-archive | [`1fc6bd7`](https://github.com/turlamai/yinwang-archive/tree/1fc6bd740202bb12e15e10dae80aa1b07be7c9d1) | [yinwang-archive/site.rkt:130](https://github.com/turlamai/yinwang-archive/blob/1fc6bd740202bb12e15e10dae80aa1b07be7c9d1/yinwang-archive/site.rkt#L130) |
