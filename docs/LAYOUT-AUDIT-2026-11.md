# Repository layout audit — 2026-11

Status: dated findings map from the 2026-11-12 portfolio-wide layout/naming
audit of all repositories in `~/Codes`. Findings feed the migration queue for
[REPOSITORY-LAYOUT-STANDARD.md](REPOSITORY-LAYOUT-STANDARD.md). Migration of
the queue happened in the same slice batch on 2026-11-12; items below record
the outcome per repository. This file is an internal maintainer map (English
only per the internal-docs exemption).

## Completed migrations (one housekeeping slice per repo, CI green at close)

- keel, ed25519: `tests/` → private `<name>-test/` collection (removes the
  shared-`tests`-collection namespace hazard); `rackunit-lib` (+`net-lib` for
  ed25519) declared as runtime deps per the shipped-test rule.
- commerce, foreman, graft, permit, sonar, switchboard, obsidian, postly,
  someip: `(define name)` added; someip `test-omit-paths` + commerce
  `source-omit-files '("deploy")'` + keel `source-omit-files '("site")'`;
  sonar pins `switchboard #:version "0.1"`.
- keyward, podlens, threadly, relaypilot: engine moved from `app/` to
  `racket/` (rivet.rktd backend paths, scripts, CI, hosts, docs updated;
  `app/` keeps shell meaning). keyward acceptance manifest added (honest
  two-suite list); threadly got package identity (`racket/info.rkt`),
  schema, acceptance manifest, `docs/reader-design.md` move.
- autarx, booklight, gptp-studio, movebit, regexmate, syncpilot, taskly,
  hackdigest, termpilot(n/a): website kits moved `docs/` → `site/`; Pages
  deployments switched to the workflow build type with `pages.yml`
  (legacy `main:/docs` cannot serve `site/`). regexmate needed a follow-up
  commit to finish this — check pages deploy went green.
- movebit: `Assets/` → `assets/`, `integration-tests/` folded, `packaging/`
  folded into `linux/`.
- regexmate: engine grouped under `racket/` (core → racket/core,
  output → racket/output-format, server, root entry modules); committed
  generated Kotlin annotated via `.rivet/generated/README.md`.
- gptp-studio: `engine/`+`capture/`+`data/`+`proto/`+`support/` folded under
  `racket/`.
- icon_512.png → icon-512.png everywhere (flashpilot, keyward, taskly ×2,
  threadly, autarx, movebit, syncpilot app-icon → assets/).
- yinwang-archive: 51 crawl-residue space filenames → `<slug>-NN`, 6
  underscore files → kebab, `src/` → `assets/` (12 reference updates),
  Chinese-titled posts recorded as faithful-archive exception; lint clean,
  76 tests pass, 311 dist image references verified.
- Small fixes: turlamai.github.io duplicate font removed; taskly stray
  `.gitignore.rivet` deleted; payback `docs/UPDATE.md` → `update.md` with all
  stale `updates.md` references fixed; publy versions aligned (0.1.0 → 0.8.7)
  and scope unified (`@publy/cli`); racket-programming package name aligned;
  obsidian-postly identity divergence documented; termpilot CLI/MCP entries
  moved to `backend/`; sonar/switchboard records: docs/examples absent is a
  recorded decision (thin protocol libs, README+scribblings are the docs).
- publy: root `manifest.json`/`versions.json` kept — they are CI-guarded
  mirrors of `packages/obsidian-plugin/*` (check-plugin-metadata.mjs).

## Declined / documented decisions

- syncpilot `macos-host/`+`windows/` gitignored: intentional — Linux-only
  product (README + AGENTS.md state it), residue is generated files only.
- autarx `rivet-schema.json` gitignored: documented generated-artifact
  precedent, allowed by the standard.
- pitboard `skill/` (singular): the directory mirrors the served site URL
  `/skill/pitboard/SKILL.md`; authority lives in turlamai/pitboard-skill with
  a CI consistency guard. Renaming would break a published URL.
- pitboard Chinese topic slugs in `site/topic/`: Chinese SEO/content choice
  for a Chinese-automotive audience; keep, site-internal URLs only.
- License two camps: MIT core infrastructure (rivet, glaze, keel, obsidian,
  postly) vs Apache-2.0 commercial-adjacent libraries (permit, commerce,
  foreman, graft, sonar, switchboard, ed25519, someip), BUSL/AGPL products.
  Deliberate split; no alignment change.
- relaypilot root identity: delegated to `rivet.rktd` with
  `scripts/check-release-version.sh` already wired into ci.yml — no VERSION
  file added (a third version copy would be a defect).
- relaypilot `apple/`+`android/` placeholder dirs: kept for the mobile
  roadmap; do not delete.
- obsidian-postly manifest id `postly-publisher` ≠ repo name: first-public
  id, changing it orphans installs; divergence documented in README.
- yinwang-archive Chinese post filenames: faithful archive (original titles
  on disk), recorded exception in AGENTS.md.
- Swift/XAML/C++ PascalCase and Python snake_case: language-conventional,
  exempt in the standard.
- payback `keys/`: public update key only, private keys gitignored — keep.
- yinwang-archive known content gap: `posts/computer-science.md` references
  10 `/images/computer-science/*` files that were never captured (missing
  before this migration too). Recorded, not fixed — stripping archive
  content is a content decision, not a layout fix.
- fulcrum, flashpilot, glaze, hackdigest, site-kit, proxy-rules, foreman,
  graft: no structural migration needed; proxy-rules CI remains a noted gap
  (no workflows yet).
