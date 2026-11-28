# Articles publishing

**English** · [简体中文](README.zh-CN.md)

## Publish from Obsidian

In [Obsidian Postly](https://github.com/turlamai/obsidian-postly), set owner to `turlamai`, repository to `turlamai.github.io`, branch to `articles-content`, and target directory to `blog`. Use an existing token with Contents read/write limited to this repository. The branch contains public Markdown and staged images. Publish and withdraw from Obsidian, then verify the article at [jrtx.site/articles/](https://jrtx.site/articles/) after deployment.

## Preview and deploy

Install the Racket packages according to the [Postly setup guide](https://github.com/turlamai/postly#install-and-run). Put the trusted `writing/postly.rkt` into a local copy of the content branch, then run:

```sh
bash scripts/build-articles.sh /path/to/content /tmp/jrtx-articles-preview
bash scripts/assemble-portal.sh /tmp/jrtx-articles-preview /tmp/jrtx-portal-preview
python3 -m http.server 8000 --directory /tmp/jrtx-portal-preview
```

Both output paths must be new. The assembled portal uses the current Git commit and replaces only the generated Articles subtree of the public site.

The workflow builds the complete portal on pull requests, on `master` pushes, twice hourly and on manual dispatch. The `portal-preview` artifact includes the complete portal. With Pages set to GitHub Actions and the Actions variable `POSTLY_PAGES_DEPLOY=true`, production runs deploy that assembled portal. Changes to `articles-content` are picked up by the schedule or a manual run. GitHub can delay scheduled runs.

A fresh deployment removes a withdrawn article from the homepage, its permalink, RSS and sitemap. Shared attachments, Git history and caches can still retain copies.

## Rollback

Clear `POSTLY_PAGES_DEPLOY` to stop future automatic deployments. This leaves the last deployment live. To restore the static portal without the generated Articles, switch Pages back to `master` and `/` with the same custom domain `jrtx.site`, then verify the homepage, product routes and assets.
