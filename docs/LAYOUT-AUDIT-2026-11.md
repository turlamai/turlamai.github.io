# Repository layout audit — 2026-11

Status: dated findings map from the 2026-11-12 portfolio-wide layout/naming
audit of all repositories in `~/Codes`. Findings feed the migration queue for
[REPOSITORY-LAYOUT-STANDARD.md](REPOSITORY-LAYOUT-STANDARD.md). Each item
becomes its own housekeeping slice, one repository per change. Fixed items get
struck through or removed. This file is an internal maintainer map (English
only per the internal-docs exemption).

Already conforming / no action: fulcrum, flashpilot (near-canonical), glaze
(family-library template reference), hackdigest (glaze-line reference),
site-kit, proxy-rules (add CI), foreman, graft.

## P0 — correctness

- [ ] publy: `package.json` version `0.1.0` conflicts with shipped
  `manifest.json`/`versions.json` `0.8.7` — align package.json (done in this
  slice) and pick one version source going forward.
- [ ] regexmate: `.rivet/generated/kotlin/.../GeneratedBackend.kt` is tracked
  while `.rivet/` is ignored and no script names the file — annotate
  generator+consumer or relocate and untrack.
- [ ] payback: local root contains untracked `payback-1.12.0-macos-arm64.*`
  build artifacts silently swallowed by `/*.dmg`-style ignores — move to
  `dist/` or delete locally; keep release artifacts out of the repository root
  (done locally in this slice).
- [ ] relaypilot: root inventory gap (no `VERSION`; identity delegated to
  `rivet.rktd` without the enforcing check wiring being obvious to newcomers —
  wire `check-release-version.sh` into CI or add `VERSION`).
- [ ] turlamai.github.io: delete duplicate `assets/fonts/inter-latin-var.woff2`
  (only `fonts/` is referenced).

## P1 — template alignment (rivet line)

- [ ] keyward, podlens, threadly, relaypilot: move engine code from `app/` to
  `racket/` (`app/` keeps shell/host only).
- [ ] autarx, booklight, gptp-studio, movebit, regexmate, syncpilot, taskly,
  hackdigest: move website kit out of `docs/` into `site/`.
- [ ] movebit: `Assets/` → `assets/` (two-step rename on case-insensitive FS);
  fold `integration-tests/` into `tests/`, `packaging/` into `linux/`+`scripts/`.
- [ ] regexmate: rename or fold `output/` (source modules, misleading name)
  into `racket/`; gather root `main.rkt`/`version.rkt`/`run-tests.rkt`/
  `info.rkt` under `racket/`.
- [ ] gptp-studio: fold `engine/`+`capture/`+`data/`+`proto/`+`support/` under
  `racket/` or rename `engine/` → `racket/` and keep domain splits inside it.
- [ ] threadly: add package identity (`racket/info.rkt`), flatten
  `design/reader/` nesting decision, add `rivet-acceptance.rktd`/schema per
  standard.
- [ ] taskly: remove stray `.gitignore.rivet` root file; split website from
  `docs/`.
- [ ] keyward: resolve `docs/GUIDE.zh-CN.md` vs `docs/USER-GUIDE.zh-CN.md`
  duplication; add missing `rivet-acceptance.rktd`.
- [ ] keyward, taskly, threadly, podlens: add `rivet-schema.json` (tracked) or
  document generated status.
- [ ] syncpilot: move root `app-icon.png` into `assets/`; confirm the
  Linux-only platform posture is stated in AGENTS.md.

## P1 — template alignment (glaze line / free-form)

- [ ] termpilot: move root `cli.rkt`/`mcp.rkt` into `packages/` or a `bin/`
  convention; flesh out `docs/` beyond one file.
- [ ] publy: fold root `manifest.json`/`versions.json` into
  `packages/obsidian-plugin/`; unify `@publy/*` vs `@turlamai/publy` prefix.
- [ ] pitboard: rename `skill/` → `skills/`; decide Chinese topic-slug policy
  for `site/topic/` (URL/SEO trade-off) and record it.
- [ ] racket-programming: `package.json` name `racket-book` → align with repo
  name or document the book identity.

## P1 — family libraries

- [ ] keel: `tests/` → `keel-test/`.
- [ ] ed25519: `tests/` → `ed25519-test/`.
- [ ] commerce, foreman, graft, permit, sonar, switchboard: add
  `(define name "<repo>")` to `info.rkt`.
- [ ] sonar, switchboard: pin downstream deps with `#:version`; add `docs/` +
  `examples/` or record why not.
- [ ] permit, keel: plan `site/` extraction; commerce: plan `deploy/`
  extraction.
- [ ] obsidian, postly, someip: add `(define name)` + `test-omit-paths`;
  postly: add scribblings or record README-only doc policy.
- [ ] someip: move `rackunit-lib` from deps to build-deps.
- [ ] obsidian/postly vs family: license divergence MIT vs Apache-2.0 — pick
  one and align.

## P1 — naming sweeps (cross-repo)

- [ ] `icon_512.png` → `icon-512.png` in taskly, threadly, autarx, flashpilot,
  keyward, movebit (`shared/assets/` too in taskly).
- [ ] `docs/` mixed-case dirs converge at next content touch per standard
  (flashpilot, gptp-studio, payback, podlens, regexmate, relaypilot,
  syncpilot, publy, rivet, glaze, permit, commerce, keel — no bulk rename).
- [ ] yinwang-archive: rename 51 `Pasted image *.png` files (spaces) to
  kebab-case semantic names with reference updates; decide whether the 10
  Chinese-named `posts/` files are faithful-archive exceptions (record
  decision); rename 6 underscore files; rename `src/` (static site assets) →
  `assets/`.

## Declined / no action (documented decisions)

- syncpilot `macos-host/`+`windows/` gitignored: intentional — Linux-only
  product, residue is generated files only.
- autarx `rivet-schema.json` gitignored: documented generated-artifact
  precedent, allowed by the standard.
- Swift/XAML/C++ PascalCase and Python snake_case: language-conventional,
  exempt in the standard.
- payback `keys/`: public update key only, private keys gitignored — keep.
