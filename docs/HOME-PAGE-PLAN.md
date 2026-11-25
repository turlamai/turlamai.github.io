# Portfolio and product front doors / 主站与产品主页规划

Status: implementation brief, 2026-10-23. Preserve the static, bilingual,
self-hosted-font architecture. Implement separately from active product work.

## jrtx.site information architecture

The current page leads with the author and then presents a long technical
catalog. Keep the writing/community identity, but give a visitor a faster route
to a useful product. First screen: a concrete independent-software promise,
one short author sentence, primary “Explore tools / 寻找工具” and secondary
“Read the writing / 阅读文章”. Keep the Chinese WeChat path and English GitHub
path as secondary community choices.

Below it, show at most three featured product stories, initially Taskly,
Fulcrum and Booklight when their linked release and primary flow are verified.
Choose the actual featured set from readiness, not this list alone. Each story
contains one user outcome, a real product screenshot, availability, current
business model in words and one primary CTA. Automotive tools get a separate
professional section. The complete catalog follows in compact categories:
Productivity, Reading & Learning, Automotive, Community & Writing. Put
experimental/unreleased products in a clearly labelled “In the lab” group.

Do not give Alpha, maintenance, and released products identical “Download”
weight. Released products link to their product site; unreleased products use
“View progress”. Frameworks live in a separate “For builders” section, with the
Rivet/Glaze choice and Keel/Permit/Commerce roles stated briefly. Framework
names become secondary metadata on product cards, not the sales argument.


## Customer information versus maintainer decisions

jrtx.site is the user-facing directory of the whole product family. Its navigation and footer must not link to PORTFOLIO, draft PRICING policies, agent handoffs or internal implementation plans. Keep those discoverable through the repository's maintainer map and AGENTS. A public repository does not make every document a customer journey.

The main site answers what a product does, who it serves, what is available and where to try it. Each product site owns the actual public offer: price, included rights, trial, renewal/cancellation and support when ready for sale. Before then, state current free/development availability and honest maturity. Do not add a portfolio-wide pricing center while product offers remain hypotheses. A public roadmap is optional and explains user outcomes rather than internal tasks.

## Product page template

1. Hero: audience + job + outcome, real screenshot, platform/maturity line,
   primary download/try CTA and secondary documentation/demo.
2. Three short task stories with real inputs/results; show the core workflow.
3. Platform and installation matrix: OS minimums, architecture, update behavior,
   first-launch trust status, current verified release link.
4. Privacy and AI: local data, what is transmitted, BYOK versus hosted, provider
   choice, key storage and estimated usage controls.
5. Commercial model: available Free/Pro differences, license/source link,
   trial/update-window/renewal/refund/support terms when actually offered.
   Before sales begin use current free availability and an honest roadmap;
   no numeric teaser prices or dead Buy buttons.
6. Trust footer: changelog, user guide, feedback, private security route,
   backup/export help and source/license as applicable.

Do not promise a support SLA without operational capacity. Do not copy
competitor claims, old stack descriptions, platform counts or feature lists
from previous rewrites. Every material claim has a source file/release/test
owner and last-checked SHA in the implementation issue.

## Visual and interaction rules

Retain the warm editorial identity and generous spacing. Use a strong type
hierarchy, concise labels, restrained motion and product-specific imagery.
Reduce dense paragraphs in cards. Support light/dark mode, visible keyboard
focus, semantic headings, meaningful image text, reduced motion, long Chinese
and English labels, 320/375/768/1440 px widths and 200% zoom. No external fonts,
analytics SDK, carousel, fake testimonial, fake usage counter or new framework
is needed. The maintainer documents are not navigation for ordinary customers.

## Release and verification

Compare four surfaces: main-site card, product page, product README and GitHub
About; current public release is the evidence anchor. Check both languages,
all CTA targets, asset/OS mapping, empty/latest-release failure, HTML balance,
keyboard navigation, overflow and image loading. Review representative mobile
and desktop screenshots, including dark mode. A successful Pages deployment
does not prove the content is correct; compare deployed HTML to the intended
source SHA. Preserve the last deployed commit for rollback.

First fix the observed gPTP Studio old GTK/WebView claims and source/license
wording conflicts. Then ship the main-site hierarchy,
then the commercial/consumer canary product pages, then the remaining catalog.
Keepsake and Moonbeam were confirmed deleted by the owner; Payback and RegexMate
were delisted and their repositories deleted by owner decision on 2026-11-23
and 2026-11-25. Remove their
remaining cards, progress CTAs, navigation and bilingual text from the main
site and current product catalog. Do not retain them as upcoming products or
create source-recovery work for them.
