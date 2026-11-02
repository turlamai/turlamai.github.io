# AGENTS.md

## 每个切片开始前必须读取政策

安全刷新远端后，重新读取本仓根 AGENTS、既有实施 handoff，以及[家族交付标准](docs/PRODUCT-STANDARD.md)、[文档语言规范](docs/DOCUMENTATION-LANGUAGES.zh-CN.md)和[产品组合](PORTFOLIO.zh-CN.md)。PR/handoff 记录本仓起始 SHA 与实际阅读的中央政策 commit/revision；不能把“有链接”当作“agent 已阅读”。运行中的会话和旧 checkout 不会自动接收政策，下一切片边界需重新读取。保留其他 agent 的脏工作树，必要时用独立 checkout，不 stash/reset/覆盖现场。离线或缺失政策时明确未验证，不能假称最新。产品规格、协议和实施队列仍由各自仓库负责。


[English](AGENTS.md) · **简体中文**

TurLamAI 家族主站（jrtx.site）——纯静态 HTML/CSS 单页，零依赖零构建，GitHub Pages 直出。

## 结构

- `index.html` — 主页全部内容（产品卡片、i18n 文案都在这一个文件）
- `assets/` — 字体（自托管可变字体）与图片
- `CNAME` — jrtx.site 域名绑定
- `README.md` / `README.zh-CN.md` — 双语说明

## 常用命令

无构建系统：本机直接开 `index.html` 或起任意静态服务器预览（如 `python3 -m http.server`）。

## 验证与发版

- push master（默认分支）即部署 GitHub Pages，**推送即发布**。
- 改 HTML 后必须跑标签配平检查——历史上丢 `</p>` 导致产品卡渲染成空壳的事故发生过，改动大时逐卡预览。
- 产品卡与 GitHub About/产品站是三个检查面：改文案时核对主站卡片、对应产品站、rivet docs 是否同步。

## 仓库特定规矩

- 零依赖：不引外部 JS/CSS 框架；字体只走自托管（禁 Google Fonts，大陆阻塞首屏）。
- 页面含 data-i18n 双语文案，改动须中英同步。
- 头部不放版本号（版本信息只在各产品仓库/About 承载）。

## 产品组合与交付治理

组合归属以 `PORTFOLIO.md` 为准；交付基线见 `docs/PRODUCT-STANDARD.md`，本轮逐产品证据与 issue 入口见 `docs/PRODUCT-REVIEW-2026-10.md`，主页改版执行简报见 `docs/HOME-PAGE-PLAN.md`。库间依赖图仍以 Keel 的 `docs/family-architecture.md` 为准，不在主站另造协议或复制各仓实施队列。

涉及打包、更新、公开发行或收费时，还需读取[发行者身份与全产品渠道矩阵](docs/DISTRIBUTION.zh-CN.md)（[English](docs/DISTRIBUTION.md)）。当前暂缓账号/证书采购，依赖凭据的门禁明确待验证；Store MSIX 仅是试点规划，不是框架已实现能力。产品既有 handoff 记录政策 SHA 与本地渠道决定。此维护规范不进入面向用户的网页导航。

## 文档语言

遵循[文档语言规范](docs/DOCUMENTATION-LANGUAGES.zh-CN.md)：公开默认英文、完整中文用户入口，双向链接与承诺一致。技术协议只维护一个英文规范含义；译文保持命令、标识和限制。价格、配额、到期、取消、支持、隐私和平台状态中英一致；历史内部记录不必全部翻译。

## 用户导航边界

主站负责产品发现。组合策略、试拟收费、授权实施规划和 agent 交接留在仓库维护文档，不放入用户导航或页脚。产品站解释当前可用范围，只在方案具备交付条件时链接公开价格与条款；未来试拟价格不是当前报价。确有需要的公开进展页以用户成果为中心，区分已交付与计划，不向用户展示内部实施队列。
