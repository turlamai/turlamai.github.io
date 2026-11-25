# TurLamAI 产品组合——先打磨交付，再考虑收费

[English](PORTFOLIO.md) · **简体中文**

**决策版本：2026-11-25-regexmate-delist。** 修订 2026-11-23-payback-delist 决策（该决策已将 Payback 移出产品组合）：维护者决定（2026-11-25）将 RegexMate 下架并删除其仓库——该项目不符合产品组合的目标。MoveBit 保留商业化及收窄后的 macOS + Windows 范围；Taskly、Booklight、PodLens 由 rivet 线改为 glaze 线；Fulcrum 保持 quality-first，定位三平台旗舰。

## 当前规则

**只有 Publy 与 MoveBit 保留商业化开发计划**（2026-11-23）。两者各自验证一条商业路径，且在各自的收费决策落地前均不上购买入口：

- **Publy** —— 托管发布服务，收费门禁已有定义。
- **MoveBit** —— 桌面商业产品，先跑通 macOS 桌面付费流程。

其余产品均处于“质量与交付优先”的开发阶段：不做购买入口、结账、试用到期限制、收费功能隔离、订阅计划或产品级 Permit/Commerce 集成；也不再把未来 Pro 作为当前功能或发布任务。先把可用性、安装更新、数据恢复、隐私和可访问性做好。

这**不表示承诺所有未来版本永久免费**。Publy、MoveBit 之外任何产品若未来要收费，必须在确实可用、经过验证之后，由维护者重新明确决定。旧目标价格、权益模型和收费任务均不再生效，不得向用户展示历史目标价格。

**法律边界：** 本决策不自动更改任何仓库的 `LICENSE` 或 BUSL 条款，也不撤回已授予的源码权利。更新签名、发行认证、发布者身份、自带模型密钥属于安全与发行范畴，不等同于商业权益，不得误删安全机制。

## 产品与公开展示

| 分类 | 产品 | 当前原则 |
| --- | --- | --- |
| 日常工具 | Taskly、Fulcrum、MoveBit、Keyward、TermPilot、RelayPilot、Layerly | 完成桌面交互、恢复与真实用户流程；MoveBit 正进入商业化且平台范围收窄，见下方「已发布的变更」 |
| 阅读学习 | Booklight、PodLens、HackDigest | 阅读/听读、BYOK 隐私、缓存与恢复，不做付费托管 Pro |
| 汽车工程 | Autarx、FlashPilot、gPTP Studio、Bitsmith | 正确性、真实环境/硬件验证、工程可靠性，不接商业授权 |
| 社区与免费工具 | Threadly、SyncPilot、Pitboard | 免费社区工具，真实标注状态，不设付费门禁 |
| 公众号发布 | **Publy** | 唯一商业化例外，保留其收费与托管交付门禁和事项 |
| 内容网站 | Racket 程序设计、王垠博客归档 | 聚焦内容、来源和维护，不将内容收费隔离 |

Bitsmith 和 Layerly 是**早期直接开发的产品**，尚无验证过的安装包，不能把设计稿当成已发布安装包。没有真实可验证发行资产的产品不能挂“立即下载”。各产品仓库负责平台、成熟度、隐私、反馈、发布证据；总主页只负责准确索引。

## 平台与线路变更——已发布（2026-11-19 决策，2026-11-23 落地）

- **MoveBit** 已收窄为 macOS + Windows（删 Linux，[movebit#169](https://github.com/turlamai/movebit/issues/169)），并进入商业化：桌面商业产品，先跑通 macOS 付费流程（自身收费决策待定）。重置版本 `v0.1.0` 仅含 macOS arm64/x64 + Windows x64 资产；门户卡片现声明 macOS + Windows。
- **Fulcrum** 保持 quality-first、三桌面平台（macOS / Windows / Linux）全支持——家族唯一三端同支持的产品，三端广度即其身份；稳定的三端体验仍是未解挑战。
- **Taskly / Booklight / PodLens** 已由 rivet 线改为 glaze 线：引擎、schema、数据格式保留，UI 为 glaze 载体上的单一 Web 实现（[taskly#141](https://github.com/turlamai/taskly/issues/141)、[booklight#75](https://github.com/turlamai/booklight/issues/75)、[podlens#63](https://github.com/turlamai/podlens/issues/63)）。三者均已发布重置版本：Taskly `v0.1.0`、Booklight `v0.1.0`、PodLens `v0.1.1`——均含 macOS arm64/x64、Windows x64、Linux x64/arm64 资产与签名更新 feed。
- 门户平台声明与「立即下载」CTA 仅在各自重置版本实际发布后更新（「没有真实可验证发行资产不能挂下载」全程生效）。门户卡片现将 Taskly / Booklight / PodLens 标为 Glaze，MoveBit 标为 macOS + Windows。

## 通用基础库

Rivet、Glaze、Keel 与协议库仍是基础设施；Permit、Commerce 保留为可复用开源库，也可服务 Publy，但停止向其他产品铺设商业授权。维护现有开源许可、加密验证、安全测试和兼容性，不得破坏 Publy 所依赖的实际接口。

## 全产品交付门禁

1. **首次成功：** 用户能够在真实产品中完成一个明确任务。
2. **交互质量：** 三平台声称支持的部分要验证键盘、可访问性、错误与取消。
3. **安全与数据：** 保存位置、备份恢复、密钥保护、隐私和非默认遥测。
4. **安装与更新：** 真实安装包、干净安装、验签、升级失败与回滚证据。
5. **公开页面：** 中英 README、产品主页、jrtx.site 总入口互相一致，不夸大、不断链。

相关规则见[产品交付标准](docs/PRODUCT-STANDARD.md)、[公开展示规范](docs/PUBLIC-PRESENTATION.zh-CN.md)和[产品目录](README.zh-CN.md)。文档采用不代表功能已经完成。

## 落地

- Publy、MoveBit 之外产品的纯商业化 Issue 按 **not planned** 关闭，保留历史审计记录。
- 同时含真实产品质量事项的 Issue 改成质量任务，不丢失有效技术工作。
- 移除 Publy、MoveBit 之外产品 README 和官网中的旧定价、试用、购买、Pro 宣传。
- 不删除实际的代码签名、源码许可条件或 Publy 依赖的基础库。
- Publy 商业实施以[自身收费决策](https://github.com/turlamai/publy/blob/main/PRICING.zh-CN.md)为准。

