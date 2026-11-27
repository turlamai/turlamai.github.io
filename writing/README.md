# Articles publishing

The portal's static landing is in articles/index.html. The Postly build configuration lives in writing/postly.rkt.

For a local preview, install the obsidian and postly Racket packages from their repositories, then run:

    bash scripts/build-articles.sh writing /tmp/jrtx-articles-preview

Use a fresh output directory. The script deliberately does not replace the live portal or publish anything.

The dedicated public content branch is `articles-content` in `turlamai/turlamai.github.io`, with `blog/` and `assets/` at its root. Configure Obsidian Postly with owner `turlamai`, repository `turlamai.github.io`, branch `articles-content`, and target directory `blog`. CI checks out this branch and copies the trusted `writing/postly.rkt` into it before building. Do not point the plugin at the main portal branch: its assets directory is shared by unrelated products. Do not commit an entire private vault.

Deployment remains a separate step: publish generated HTML under /articles/ together with the unchanged portal. Verify the preview and ensure withdrawn articles do not remain in the deployed output. The current static landing stays in place until this pipeline is enabled.
