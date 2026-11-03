# TurLamAI

**TurLamAI** 的门面主页 — 上线于 **[jrtx.site](https://jrtx.site)**。帮助用户找到独立开发的桌面工具、技术写作与可复用基础库，围绕同一个理念：把复杂技术做直观。

[English](README.md) · **中文**

---

## 产品入口

多数应用仍为开发预览；实际发布平台、安装、数据与帮助见各自主页和中英文使用指南。

| 产品 | 用途 |
|---|---|
| [Taskly](https://taskly.jrtx.site/) | 用清单、快速录入和定时提醒管理本地待办。 |
| [Payback](https://payback.jrtx.site/) | 记录已有设备的每日成本，以及你赋予使用它们的价值。 |
| [Fulcrum](https://fulcrum.jrtx.site/) | 在一个原生命令窗口中启动应用、搜索并使用键盘工具。 |
| [Booklight](https://booklight.jrtx.site/) | 阅读 PDF 和 EPUB、添加批注，并可选使用自己的 AI 服务处理文档。 |
| [gPTP Studio](https://gptp-studio.jrtx.site/) | 在 Linux 工作站上观察和调试 gPTP / IEEE 802.1AS。 |
| [Autarx](https://autarx.jrtx.site/) | 在实施经审阅的变更前，检查、比较并追踪 AUTOSAR 交付数据。 |
| [FlashPilot](https://flashpilot.jrtx.site/) | 用确定性引擎、CLI/MCP 和原生桌面宿主验证声明式 ECU 烧录计划。 |
| [HackDigest](https://hackdigest.jrtx.site/) | 通过按需标题翻译、文章摘要和讨论总结阅读 Hacker News。 |
| [Publy](https://publy.jrtx.site/) | 将 Markdown 转为微信公众号文章草稿与图片卡片，提供本地预览和自托管投递服务。 |
| [PodLens](https://podlens.jrtx.site/) | 收听播客，并可用自己的模型密钥生成逐句转写、翻译和总结。 |
| [RegexMate](https://regexmate.jrtx.site/) | 通过 CLI、原生 GUI 或 MCP 在本地验证、测试、解释和检查正则。 |
| [MoveBit](https://movebit.jrtx.site/) | 配置工作休息与喝水提醒，并查看本地活动历史。 |
| [Keyward](https://keyward.jrtx.site/) | 在本地密钥库中整理和检查桌面软件发布签名密钥。 |
| [Threadly](https://threadly.jrtx.site/) | 在原生桌面窗口中阅读和搜索 Racket 社区论坛。 |
| [SyncPilot](https://syncpilot.jrtx.site/) | 在 Linux 桌面窗口中管理官方 Resilio Sync 守护进程。 |
| [RelayPilot](https://relaypilot.jrtx.site/) | 探索统一网络配置、确定性路由决策和受监督的引擎适配器。 |

[关于与隐私](docs/ABOUT.zh-CN.md)。中文书站和第三方归档保留原文语言。

## 特性

- **中英双语** — 完整的中 / 英文切换，自动识别浏览器语言
- **明暗主题** — 跟随系统偏好，可手动切换，跨次访问保持记忆
- **按用途展示产品** — 日常效率、阅读、工程与社区分别组织，写作和开发基础库独立分区
- **统一设计变量** — 字体、间距、明暗对比一致，无需引入第三方样式服务
- **零依赖** — 纯手写 HTML/CSS 加一层极简 vanilla-JS 国际化，无需构建
- **响应式** — 从桌面到移动端布局自适应

## 技术栈

| 层 | 选型 |
|----|------|
| 结构 | 手写 HTML5 |
| 样式 | 原生 CSS，基于 CSS 自定义属性（明 / 暗主题） |
| 脚本 | 原生 JS — 国际化、主题切换、localStorage 持久化 |
| 字体 | 自托管可变字体（Inter）——不用 Google Fonts |
| 托管 | GitHub Pages + 自定义域名（`jrtx.site`） |

## 快速开始

### 1. 克隆

```bash
git clone https://github.com/turlamai/turlamai.github.io.git
cd turlamai.github.io
```

### 2. 运行

无需构建或安装依赖。直接打开 `index.html`，或用 Python 启动本地静态服务：

```bash
python -m http.server 8000
```

然后访问 http://localhost:8000。

## 项目结构

```
turlamai.github.io/
├── index.html              主页 — 标记、内联 i18n 文案、主题与语言逻辑
├── CNAME                   GitHub Pages 自定义域名（jrtx.site）
├── README.md               英文说明
├── README.zh-CN.md         中文说明（本文件）
└── assets/
    ├── css/
    │   └── main.css        设计系统：变量、布局、组件、主题
    └── img/
        └── wechat-qr.jpg   微信公众号二维码（向中文访客展示）
```

## 自定义域名

`CNAME` 将 GitHub Pages 指向 `jrtx.site`。需在 DNS 服务商添加指向 GitHub Pages IP 的 A 记录：

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

## 维护导航

当前产品交互问题与有界实施任务见[全产品设计审查](docs/INTERACTION-REVIEW-2026-10.zh-CN.md) · [English review](docs/INTERACTION-REVIEW-2026-10.md)。

产品投入和商业分类以 [PORTFOLIO.md](PORTFOLIO.zh-CN.md) 为准。[交付标准](docs/PRODUCT-STANDARD.md)、[逐产品审查](docs/PRODUCT-REVIEW-2026-10.md)和[主页规划](docs/HOME-PAGE-PLAN.md)将架构与产品工作路由到实际负责的仓库。

发行账号、暂缓采购时机、签名边界与每个产品的初始渠道候选见[发行规范](docs/DISTRIBUTION.zh-CN.md) · [English policy](docs/DISTRIBUTION.md)。这是维护决策，不表示已经上架商店或完成生产签名验证。

文档语言：[中文规范](docs/DOCUMENTATION-LANGUAGES.zh-CN.md) · [English policy](docs/DOCUMENTATION-LANGUAGES.md)。组合策略：[简体中文](PORTFOLIO.zh-CN.md) · [English](PORTFOLIO.md)。


## 官网、文档与截图保鲜

[公开展示规范](docs/PUBLIC-PRESENTATION.zh-CN.md)定义了产品主页、中英文 README、用户手册与真实发布信息的统一核对方式，避免依赖截图教程，并规定截图来源、版本和随软件更新的复查规则。[English](docs/PUBLIC-PRESENTATION.md)。进度由[全产品文档 Issue #5](https://github.com/turlamai/turlamai.github.io/issues/5)追踪；规范落地不代表全部站点已验收。

Racket 基础库采用独立的[包 README / Scribble / 测试规范](docs/RACKET-PACKAGE-STANDARD.zh-CN.md)（[English](docs/RACKET-PACKAGE-STANDARD.md)），由 [Issue #7](https://github.com/turlamai/turlamai.github.io/issues/7) 跟踪；基础库**不需要产品式官网**。
