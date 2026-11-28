# 文章发布

[English](README.md) · **简体中文**

## 从 Obsidian 发布

在 [Obsidian Postly](https://github.com/turlamai/obsidian-postly) 中设置所有者 `turlamai`、仓库 `turlamai.github.io`、分支 `articles-content` 和目标目录 `blog`，使用只对该仓库授予 Contents 读写权限的 token。这个分支存放公开 Markdown 和已选图片。从 Obsidian 发布或撤回，部署后到 [jrtx.site/articles/](https://jrtx.site/articles/) 核实。

## 预览和部署

按 [Postly 安装指南](https://github.com/turlamai/postly/blob/main/README.zh-CN.md#安装和运行)安装 Racket 依赖。将主站仓库的 `writing/postly.rkt` 复制到内容分支的本地副本，然后运行：

```sh
bash scripts/build-articles.sh /path/to/content /tmp/jrtx-articles-preview
bash scripts/assemble-portal.sh /tmp/jrtx-articles-preview /tmp/jrtx-portal-preview
python3 -m http.server 8000 --directory /tmp/jrtx-portal-preview
```

两个输出目录都须是新路径。整站产物以当前 Git 提交为底，只替换公开站点内由 Postly 生成的 Articles 目录。

工作流在 PR、`master` 更新、每小时两次定时运行及手动触发时构建整站。`portal-preview` 包含完整站点。Pages 来源设为 GitHub Actions 且 Actions 变量为 `POSTLY_PAGES_DEPLOY=true` 时，生产运行会部署组装好的整站。`articles-content` 的改动由定时或手动运行拾取。GitHub 的定时运行可能延迟。

新部署会从首页、永久链接、RSS 和站点地图移除撤回的文章。共享附件、Git 历史和缓存中可能仍有副本。

## 回退

清除 `POSTLY_PAGES_DEPLOY` 可停止后续自动部署，最后一版仍会在线。要恢复不含生成 Articles 的静态站点，将 Pages 来源切回 `master` 的 `/`，保持自定义域名 `jrtx.site`，并核查首页、产品路径和资源文件。
