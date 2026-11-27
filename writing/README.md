# Articles publishing

The portal's static landing is in articles/index.html. The Postly build configuration lives in writing/postly.rkt.

For a local preview, install the obsidian and postly Racket packages from their repositories, then run:

    bash scripts/build-articles.sh writing /tmp/jrtx-articles-preview

Use a fresh output directory. The script deliberately does not replace the live portal or publish anything.

For integration, use a dedicated public content repository or branch with blog/ and assets/ at its root, because the Obsidian plugin stages images at root assets/. Copy writing/postly.rkt into that content root before building. Do not point the plugin at the main portal branch: its assets directory is shared by unrelated products. Do not commit an entire private vault.

Deployment remains a separate step: publish generated HTML under /articles/ together with the unchanged portal. Verify the preview and ensure withdrawn articles do not remain in the deployed output. The current static landing stays in place until this pipeline is enabled.
