# Repository layout and naming standard

**English** · [简体中文](REPOSITORY-LAYOUT-STANDARD.zh-CN.md)

Status: adopted 2026-11-12 from the portfolio-wide layout audit of the same date
(see [LAYOUT-AUDIT-2026-11.md](LAYOUT-AUDIT-2026-11.md)). This document owns
repository structure, directory semantics and naming policy. It is the target
baseline: existing repositories migrate in dedicated housekeeping slices, one
repository per change, main stays green. Delivery policy remains in
[PRODUCT-STANDARD.md](PRODUCT-STANDARD.md); Racket package quality rules remain
in [RACKET-PACKAGE-STANDARD.md](RACKET-PACKAGE-STANDARD.md).

## Repository classes

| Class | Examples | Layout owner |
| --- | --- | --- |
| Family library (multi-collection Racket package) | rivet, glaze, permit, commerce, keel, foreman, graft, sonar, switchboard, ed25519 | § Library |
| Rivet-line desktop product | taskly, fulcrum, payback, … | § Rivet product |
| Glaze-line desktop product | hackdigest, termpilot | § Glaze product |
| Free-form (plugins, content sites, archives, tools) | obsidian-postly, publy, pitboard, yinwang-archive, site-kit, proxy-rules, racket-programming | own layout, naming rules still apply |

A free-form repository declares what it is in its README; it does not pretend
to follow a product template it does not use.

## Family library (multi-collection)

```text
info.rkt          # (define collection 'multi) + (define name "<repo>") + version
                  # deps pin downstream family libraries with #:version
<name>/           # runtime collections
<name>-doc/       # scribble sources
<name>-test/      # rackunit tests
docs/  examples/  # optional
```

- `(define name)` equal to the repository name is required.
- `tests/` at the package root and scribblings embedded in the main collection
  are legacy forms — migrate to `<name>-test/` and `<name>-doc/` (pending:
  keel, ed25519; rivet's scribblings stay embedded until its next layout slice).
- A library repository does not carry product assets: static sites (`site/`)
  and service deployment units (`deploy/`) move to the consuming product or
  infrastructure repository. During migration they must at least be excluded
  via `source-omit-files` and named in the README.
- Single-collection packages keep root modules plus `scribblings/` and `test/`;
  they still define `name` and `test-omit-paths`, and ignore `compiled/` and
  the generated `doc/`.

## Rivet-line desktop product

```text
app/              # native shell / host glue only
racket/           # Racket engine (the only place engine code lives)
shared/           # i18n, fixtures, specs shared across platform legs
design/           # prototype + DESIGN.md design contract
site/             # product website root (site-kit target)
docs/ scripts/ tests/ assets/          # documentation, tooling, tests, brand assets
linux/ windows/ macos-host/ flatpak/   # platform legs, one per supported platform
rivet.rktd  rivet-schema.json  rivet-acceptance.rktd  VERSION
```

- `racket/` is the engine; `app/` is the shell. An engine living inside `app/`
  is a naming defect (pending: keyward, podlens, threadly, relaypilot).
- `site/` is the website root; `docs/` holds documents only. Website kits
  inside `docs/` migrate to `site/` (pending: autarx, booklight, gptp-studio,
  movebit, regexmate, syncpilot, taskly, hackdigest). Until migrated, the
  site-kit path fallback keeps them working.
- A Linux-only product may omit `macos-host/` and `windows/` and keeps their
  local generated residue gitignored (syncpilot precedent).
- Root inventory: `rivet.rktd` and `VERSION` are required. `rivet-schema.json`
  is tracked unless the repository documents it as a build artifact regenerated
  by `raco rivet build` (autarx precedent). `rivet-acceptance.rktd` is required
  once acceptance scenarios exist — never commit an acceptance file claiming
  scenarios that have not run.
- `VERSION` is plain `X.Y.Z` text and the single release identity. A repository
  may delegate identity to `rivet.rktd` only when a check script enforces the
  equivalence (relaypilot precedent). Two independent version strings in one
  repository are a defect.

## Glaze-line desktop product

```text
apps/desktop/  packages/  backend/       # frontend shell, shared packages, Racket engine
backend/tests/                            # engine tests (one place)
site/  design/  docs/  flatpak/  assets/  scripts/  VERSION
glaze.rktd  glaze-schema.json
```

No `linux/`/`windows/`/`macos-host/` legs: the WebView shell is the platform
story, unless a native host is added later.

## Naming rules

- Directories and files are lowercase kebab-case (`assets/`, `icon-512.png`).
- Language-conventional sources are exempt: Swift/Kotlin/C++/C#/XAML
  PascalCase, Python snake_case, React/TSX component PascalCase, `Makefile`,
  `Dockerfile`, `CMakeLists.txt`, `*.vcxproj`, vendor files unchanged from
  upstream.
- Root-level standard documents are exempt: `README*`, `LICENSE*`, `CHANGELOG*`,
  `CONTRIBUTING*`, `SECURITY*`, `AGENTS*`, `VERSION`, `NOTICE`, `EULA*`,
  `PRICING*`, `THIRD_PARTY_NOTICES.md`, `SKILL.md`, plus `design/DESIGN.md`
  as the canonical design contract.
- `docs/` naming: a fixed entry whitelist stays uppercase — `README.md`,
  `USING.md`, `USER-GUIDE.md`, `DESIGN.md`, `CHANGELOG.md` and their
  `.zh-CN.md` pairs. Everything else in `docs/` is lowercase-kebab
  (`getting-started.zh-CN.md`). Existing mixed directories converge at the
  next content touch of each file; no bulk rename is required.
- Package identity: `package.json` `name` equals the repository name; scoped
  packages use one prefix (`@turlamai/<name>`); a repository has exactly one
  version source. A plugin keeps its Obsidian id, display name and repository
  name aligned or documents why they differ.
- Agent-skill directories are `skills/` (plural), one subdirectory per skill
  with its `SKILL.md`.
- Generated artifacts are gitignored. A generated file may be committed only
  with an adjacent comment naming its generator and consumer
  (`regexmate` `.rivet/generated/**` currently lacks this — annotate or
  relocate in its next layout slice).

## Migration discipline

- One repository per change set; main stays green; migrations are housekeeping
  slices per [PRODUCT-STANDARD.md](PRODUCT-STANDARD.md), never bundled with
  feature work.
- Renaming only by case on case-insensitive filesystems (macOS/Windows) is
  done in two steps through a temporary name.
- Renames update every reference in the same change: scripts, CI workflows,
  site-kit `family.json` paths and documentation links.
