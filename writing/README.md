# Articles publishing

The portal's static landing is in articles/index.html. The Postly build configuration lives in writing/postly.rkt.

For a local preview, install the obsidian and postly Racket packages from their repositories, then run:

    bash scripts/build-articles.sh writing /tmp/jrtx-articles-preview

Use a fresh output directory. The script deliberately does not replace the live portal or publish anything.

The dedicated public content branch is `articles-content` in `turlamai/turlamai.github.io`, with `blog/` and `assets/` at its root. Configure Obsidian Postly with owner `turlamai`, repository `turlamai.github.io`, branch `articles-content`, and target directory `blog`. CI checks out this branch and copies the trusted `writing/postly.rkt` into it before building. Do not point the plugin at the main portal branch: its assets directory is shared by unrelated products. Do not commit an entire private vault.

Deployment remains a separate step: publish generated HTML under /articles/ together with the unchanged portal. Verify the preview and ensure withdrawn articles do not remain in the deployed output. The current static landing stays in place until this pipeline is enabled.

## Production deployment (opt-in)

The articles-build workflow builds on master pushes, twice hourly, and manual dispatch. Pull requests only build previews. The deploy job is disabled unless repository Actions variable POSTLY_PAGES_DEPLOY is exactly true. Before enabling it, inspect the full portal artifact and switch the repository Pages source to GitHub Actions. Preserve the existing jrtx.site custom domain and HTTPS. The deployment job replaces articles/ only in a fresh archive of the master tree, never in the source branch. It excludes .github/, writing/ and scripts/ from the artifact. A fresh deployment removes withdrawn article HTML and feed entries, but does not erase Git history, shared assets, or cached copies. To disable automated deployment, clear POSTLY_PAGES_DEPLOY; this does not roll back the live deployment.

The articles-content branch contains no executable workflow. Its pushes are picked up by the scheduled workflow on master, rather than an immediate push trigger. Scheduled runs may be delayed by GitHub. Verify the generated article and the existing portal routes before enabling the deployment switch.
