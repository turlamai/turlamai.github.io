# Main-site maintainer contract

## Required policy discovery at each slice

Before starting the next bounded slice, refresh remote state safely and re-read
this root AGENTS file, the repository's canonical implementation handoff, and
the current [family delivery standard](https://github.com/turlamai/turlamai.github.io/blob/master/docs/PRODUCT-STANDARD.md),
[documentation language policy](https://github.com/turlamai/turlamai.github.io/blob/master/docs/DOCUMENTATION-LANGUAGES.md)
and [portfolio decisions](https://github.com/turlamai/turlamai.github.io/blob/master/PORTFOLIO.md).
Follow the corresponding Chinese links when preferred; both public user paths
must express the same promises. Product-specific plans and technical protocol
owners remain in their owning repositories.

Record the repository starting SHA and the central-policy commit/revision
actually read in the PR or handoff. A link's presence is not an acknowledgement
that an agent has read it. Existing conversations and stale checkouts do not
receive policy updates automatically: refresh these inputs at slice boundaries.
Preserve other agents' dirty worktrees; use an isolated checkout when needed,
without stashing, resetting or overwriting their work. Missing/offline policy
inputs must be reported as unverified, not silently claimed current.


**English** · [简体中文](AGENTS.zh-CN.md)

This repository is the TurLamAI family front door at jrtx.site: hand-written static HTML/CSS, no dependencies or build step, served by GitHub Pages.

## Source map and local preview

- `index.html`: page structure, product cards and the Chinese/English i18n dictionaries.
- `assets/`: self-hosted variable fonts and images.
- `CNAME`: custom-domain binding.
- `README.md` / `README.zh-CN.md`: paired public introductions.

Open the HTML locally or use a static server such as `python3 -m http.server`.

## Verification and release

Pushing the default branch `master` deploys GitHub Pages: a push is a publication action. Check tag balance after every HTML edit; a missing closing paragraph previously broke product cards. For broad changes, preview every affected card. Check homepage cards, the corresponding product site, GitHub About and relevant Rivet documentation when product claims change.

Do not add external JS/CSS frameworks. Fonts stay self-hosted; external Google Fonts can block the first render in mainland China. Keep versions out of the main header; version details belong to product repositories/About. Update Chinese/English `data-i18n` content together.

## Portfolio and delivery ownership

`PORTFOLIO.md` and `PORTFOLIO.zh-CN.md` describe the same portfolio decisions. Delivery rules live in `docs/PRODUCT-STANDARD.md`, repository structure and naming rules in `docs/REPOSITORY-LAYOUT-STANDARD.md` ([中文](docs/REPOSITORY-LAYOUT-STANDARD.zh-CN.md)) with the dated migration queue in `docs/LAYOUT-AUDIT-2026-11.md`, the dated product evidence/issue map in `docs/PRODUCT-REVIEW-2026-10.md`, and the website brief in `docs/HOME-PAGE-PLAN.md`. The dependency graph remains owned by Keel's `docs/family-architecture.md`; do not duplicate protocols or product implementation queues here.

For packaging, updates, public distribution or commerce, also read
[publisher identity and the portfolio channel matrix](docs/DISTRIBUTION.md)
([中文](docs/DISTRIBUTION.zh-CN.md)). Account/certificate purchase is deferred;
credential-dependent gates remain pending, and Store MSIX is a proposed pilot,
not an existing framework capability. Record the policy SHA and local channel
decision in the product's existing handoff. Keep this maintainer policy outside
customer website navigation.

## Documentation languages

Follow [the language policy](docs/DOCUMENTATION-LANGUAGES.md). Default public docs are English with complete Chinese entry paths, reciprocal links and the same user promises. API/protocol references have one normative English meaning; localized guides must preserve commands, identifiers and limits. Prices, quotas, expiry, cancellation, support scope, privacy and platform maturity must agree in both languages. Historical internal notes are not automatically a translation obligation.

## Customer navigation boundary

The main site is a product discovery front door. Keep portfolio strategy, draft pricing, authorization implementation plans and agent handoffs in repository maintainer documentation, outside customer navigation and footers. Product sites explain current availability and link to public prices/terms only when the offer is ready; a future price is not a live offer. Public progress pages, when useful, describe user outcomes and distinguish shipped work from plans without exposing internal execution queues.
