# TurLamAI

The front door of **TurLamAI** — live at **[jrtx.site](https://jrtx.site)**. It helps people find independent desktop tools, writing and reusable libraries, around one idea: make complex technology intuitive.

**English** · [中文](README.zh-CN.md)

---

## Product directory

Most applications remain development previews. Each page and paired user guide describes actual releases, installation, data and support.

| Product | Purpose |
|---|---|
| [Taskly](https://taskly.jrtx.site/) | A local task manager for lists, quick capture and scheduled reminders. |
| [Payback](https://payback.jrtx.site/) | Understand the daily cost of devices you own and the value you assign to using them. |
| [Fulcrum](https://fulcrum.jrtx.site/) | Launch apps, search and use keyboard tools from one native command window. |
| [Booklight](https://booklight.jrtx.site/) | Read PDF and EPUB files, annotate them and optionally ask your own AI provider about a document. |
| [gPTP Studio](https://gptp-studio.jrtx.site/) | Inspect and debug gPTP / IEEE 802.1AS behavior on a Linux workstation. |
| [Autarx](https://autarx.jrtx.site/) | Inspect, compare and trace AUTOSAR delivery data before making a reviewed change. |
| [FlashPilot](https://flashpilot.jrtx.site/) | Validate declarative ECU flash plans with a deterministic engine, CLI/MCP and native desktop hosts. |
| [HackDigest](https://hackdigest.jrtx.site/) | Read Hacker News with on-demand title translation, article digests and thread summaries. |
| [Publy](https://publy.jrtx.site/) | Turn Markdown into WeChat article drafts and image-post cards, with local preview and a self-hosted delivery server. |
| [PodLens](https://podlens.jrtx.site/) | Listen to podcasts and optionally create sentence-aligned transcripts, translations and summaries with your own model key. |
| [RegexMate](https://regexmate.jrtx.site/) | Validate, test, explain and lint regular expressions locally through a CLI, native GUI or MCP. |
| [MoveBit](https://movebit.jrtx.site/) | Configure work-break and water reminders with local activity history. |
| [Keyward](https://keyward.jrtx.site/) | Organize and check desktop release-signing keys in a local vault. |
| [Threadly](https://threadly.jrtx.site/) | Read and search the Racket community forum in a native desktop window. |
| [SyncPilot](https://syncpilot.jrtx.site/) | Manage the official Resilio Sync daemon from a Linux desktop window. |
| [RelayPilot](https://relaypilot.jrtx.site/) | Explore canonical network profiles, deterministic routing decisions and supervised engine adapters. |

[About and privacy](docs/ABOUT.md). Chinese books and third-party archives retain the original content language.

## Features

- **Bilingual** — full Chinese / English toggle with automatic browser-language detection
- **Light & dark themes** — follows the system preference, manually switchable, remembered across visits
- **Outcome-first catalog** — products by everyday tasks, reading, engineering and community; writing and developer libraries have separate sections
- **Shared design tokens** — consistent typography, spacing, and light/dark contrast without third-party styling services
- **Zero dependencies** — hand-written HTML/CSS with a small vanilla-JS i18n layer; no build step
- **Responsive** — lays out cleanly from desktop down to mobile

## Tech Stack

| Layer | Choice |
|-------|--------|
| Markup | Hand-written HTML5 |
| Styling | Plain CSS with custom properties (light / dark themes) |
| Scripting | Vanilla JS — i18n, theme toggle, localStorage persistence |
| Typography | Self-hosted variable font (Inter) — no Google Fonts |
| Hosting | GitHub Pages + custom domain (`jrtx.site`) |

## Quick Start

### 1. Clone

```bash
git clone https://github.com/turlamai/turlamai.github.io.git
cd turlamai.github.io
```

### 2. Run

There is no build step or dependency installation. Open `index.html` directly, or serve the directory using Python:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Project Structure

```
turlamai.github.io/
├── index.html              Homepage — markup, inline i18n strings, theme & language logic
├── CNAME                   Custom domain (jrtx.site) for GitHub Pages
├── README.md               English readme (this file)
├── README.zh-CN.md         Chinese readme
└── assets/
    ├── css/
    │   └── main.css        Design system: tokens, layout, components, themes
    └── img/
        └── wechat-qr.jpg   WeChat official-account QR (shown to zh visitors)
```

## Custom Domain

`CNAME` points GitHub Pages at `jrtx.site`. At your DNS provider, add A records pointing to the GitHub Pages IPs:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

## Maintainer map

Current product interaction findings and bounded implementation tasks:
[whole-portfolio design review](docs/INTERACTION-REVIEW-2026-10.md) ·
[中文审查](docs/INTERACTION-REVIEW-2026-10.zh-CN.md).

Product investment and commercial categories live in [PORTFOLIO.md](PORTFOLIO.md). The [delivery standard](docs/PRODUCT-STANDARD.md), [product review](docs/PRODUCT-REVIEW-2026-10.md), and [homepage brief](docs/HOME-PAGE-PLAN.md) route architecture and product work to its owning repository.

Publisher accounts, deferred purchase timing, signing boundaries and every product's initial channel candidate: [distribution policy](docs/DISTRIBUTION.md) · [中文规范](docs/DISTRIBUTION.zh-CN.md). These are maintainer decisions, not a claim of Store availability or verified production signatures.

Documentation languages: [English policy](docs/DOCUMENTATION-LANGUAGES.md) · [中文规范](docs/DOCUMENTATION-LANGUAGES.zh-CN.md). Portfolio: [English](PORTFOLIO.md) · [简体中文](PORTFOLIO.zh-CN.md).


## Public presentation and screenshot freshness

Our [public presentation standard](docs/PUBLIC-PRESENTATION.md) explains how to keep product pages, bilingual READMEs, user guides and release claims aligned without screenshot-only tutorials. It also defines screenshot provenance and the release-bound documentation review. [中文规范](docs/PUBLIC-PRESENTATION.zh-CN.md). Progress: [portfolio documentation issue #5](https://github.com/turlamai/turlamai.github.io/issues/5). This is a standard, not a claim that all sites have passed it.

Racket packages have a separate [package README / Scribble / tests standard](docs/RACKET-PACKAGE-STANDARD.md) ([简体中文](docs/RACKET-PACKAGE-STANDARD.zh-CN.md)) and [tracking issue #7](https://github.com/turlamai/turlamai.github.io/issues/7). Libraries do **not** need customer-facing product homepages.
