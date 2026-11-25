# 全产品交互与设计审查 — 2026 年 10 月

[English](INTERACTION-REVIEW-2026-10.md) · **简体中文**

审查日期：2026-10-23。这是固定快照的架构/设计审查和实施路由，不是视觉认证或第二份产品规格。具体行为仍由各产品契约及 issue 负责。下个相关切片应结合 [PRODUCT-STANDARD](PRODUCT-STANDARD.md) 和本仓当前 AGENTS 读取，不能用本快照覆盖后续修复。

> 状态备注（2026-11-23）：Payback 已经维护者决定下架并删除仓库。下文相关表格与代码锚点仅作历史审查证据保留，不再据此派发新工作。
>
> 状态备注（2026-11-25）：RegexMate 已经维护者决定下架并删除仓库。下文相关表格与代码锚点仅作历史审查证据保留，不再据此派发新工作。

## 证据与边界

25 个仓库均按默认分支固定 commit 导出到独立目录，核对产品定位、设计/验收文档与代表性的原生/共享 Web 交互源码，形成 63 个已核对行号的证据锚点；不是逐行审核全部源码。已检查既有开放 issue/PR，保留活动作者和原队列。

另实查在线 Racket 书站前言：桌面目录分部按钮缺 aria-expanded/aria-controls。查看了仓库中的 PodLens 截图，但它早于当前界面源码，只作历史参考。未使用个人数据、真实密钥、支付、公众号或硬件，未完成新一轮三桌面原生、完整读屏或视觉验收。源码确认的缺失错误分支、请求身份保护缺口，与仍需故障注入复现的场景分别表述。没有产品因文档或构建通过而被判定为全面符合。

## 取舍

- 保留共享后端与原生宿主的架构，不批准全产品重写、换框架或用像素相同来替代用户任务闭环。
- FlashPilot 先建立台架/计划验证流程，再考虑更广的执行界面；Autarx 先补搜索、选择、引用跳转与返回；MoveBit 先纠正默认打断和用户退出/恢复方式。
- 保留任务清单、阅读器、启动器、播客、正则工具中已有的合理骨架，优先解决草稿、持久化、异步对象身份、键盘可达和失败恢复，再扩功能。
- Publy、gPTP 存在会误导后续 agent 的旧实施指令，先修入口；运行验收仍待完成。
- 停工产品保留明确恢复入口，本轮不同时重启全部路线，不新增移植义务。

判断借鉴 [Apple 的目的、用户自主权与适应性](https://developer.apple.com/design/human-interface-guidelines/design-principles)、[Windows 原生与辅助功能指导](https://learn.microsoft.com/en-us/windows/apps/design/)及 [GNOME 的简洁、降低用户负担原则](https://developer.gnome.org/hig/principles.html)。各产品仍需作自己的取舍，不将 Mac 窗口装饰、模糊、字体或固定三栏作为家族强制模板。

## 全产品矩阵

P1 应先于相关功能扩张或公开就绪承诺，P2 是有界维护/开发体验后续；不代表每个产品当前都有开发者。每个 issue 中记录观察与运行证明的区别、产品决定和具体验收；深层实施内容使用英文，以便全球参与者接续。

| 产品 | 判断与下一个有界成果 | 优先级 | 归属 |
| --- | --- | --- | --- |
| FlashPilot | 桌面仍是 RPC 演示面板，应先形成台架与计划验证流程，暂不扩大刷写操作面。 | P1 | [#7](https://github.com/turlamai/flashpilot/issues/7) |
| Autarx | 工作台方向成立，但对象浏览仍缺可靠的选择、引用跳转和恢复闭环。 | P1 | [#23](https://github.com/turlamai/autarx/issues/23) |
| MoveBit | 默认强制遮罩的方向需要纠正，先尊重用户控制权再完善健康提醒。 | P1 | [#49](https://github.com/turlamai/movebit/issues/49) |
| Payback | 主界面方向保留；先修保存失败丢草稿与错误归属。 | P1 | [#24](https://github.com/turlamai/payback/issues/24) |
| HackDigest | 阅读结构可保留；详情失败会困在加载态，主要导航存在鼠标专用入口。 | P1 | [#4](https://github.com/turlamai/hackdigest/issues/4) |
| Threadly | 保留论坛阅读器结构；补主题切换时的内容身份、加载状态与失败恢复。 | P1 | [#2](https://github.com/turlamai/threadly/issues/2) |
| Keyward | 密钥工具必须先讲清明文保管、每项用途与复制后果，视觉整齐不能替代安全。 | P1 | [#3](https://github.com/turlamai/keyward/issues/3) |
| Taskly | 保留清单/快速录入骨架；先清理互相冲突的编辑、撤销和同步约束。 | P1 | [#58](https://github.com/turlamai/taskly/issues/58) |
| Booklight | 书架与阅读结构保留；批注保存失败不能被“已操作成功”的界面掩盖。 | P1 | [#20](https://github.com/turlamai/booklight/issues/20) |
| Fulcrum | 启动器方向合理，继续收敛现有交互契约，暂停外围能力扩张。 | P1 | [#36](https://github.com/turlamai/fulcrum/issues/36) |
| PodLens | 听懂一集的定位正确；需摆脱永久三栏和拥挤播放器，补逐句跳播的键盘语义。 | P1 | [#14](https://github.com/turlamai/podlens/issues/14) |
| RegexMate | 正则输入与结果的结构合理，但匹配结果的可操作性在三端不一致。 | P1 | [#5](https://github.com/turlamai/regexmate/issues/5) |
| gPTP Studio | 专业工具方向成立，但现有验收仍指向旧界面，不能据此宣布新版 GTK 体验完成。 | P1 | [#40](https://github.com/turlamai/gptp-studio/issues/40) |
| Publy | 保留写作现场的预览与草稿投递；旧设计和路线中的群发、商店与开卖指令需要收敛。 | P1 | [#7](https://github.com/turlamai/publy/issues/7) |
| SyncPilot | 两态启动/官方 Web UI 的边界合理；优先补失效时可理解的恢复入口。 | P2 | [#10](https://github.com/turlamai/syncpilot/issues/10) |
| RelayPilot | 目前没有原生产品界面可评为好坏；第一版应聚焦导入、连接状态与决策解释。 | P2 | [#1](https://github.com/turlamai/relaypilot/issues/1) |
| Rivet | 已有指导方向正确；需要用真实产品的失败场景验证手册和脚手架。 | P1 | [#314](https://github.com/turlamai/rivet/issues/314) |
| Glaze | 共享页面能改善结构一致性，但不能自动解决键盘可达和错误恢复。 | P1 | [#76](https://github.com/turlamai/glaze/issues/76) |
| Keel | 无消费界面可评；现有小契约库边界合理，本轮不为凑数量新建 issue。 | P2 | [existing #6](https://github.com/turlamai/keel/issues/6) |
| Permit | 无消费界面可评；授权解释和恢复应在产品落地，不扩成账号系统。 | P2 | No new issue / 不新增 |
| Commerce | 保持无界面商业编排库；支付与领取体验要由实际商品验证。 | P1 | [#4](https://github.com/turlamai/commerce/issues/4) |
| jrtx.site | 主站的产品发现方向保留，展示权重应跟随真实可用性。 | P2 | [#2](https://github.com/turlamai/turlamai.github.io/issues/2) |
| Pitboard | 阅读卡片结构可保留；搜索索引失败不能表现为毫无反应。 | P2 | [#1](https://github.com/turlamai/pitboard/issues/1) |
| Racket Programming | 章节阅读结构合理；目录抽屉与折叠状态缺辅助技术契约。 | P2 | [#8](https://github.com/turlamai/racket-programming/issues/8) |
| Yinwang Archive | 保留档案阅读体验；搜索与图片灯箱需要键盘可达、关闭和焦点恢复。 | P2 | [#5](https://github.com/turlamai/yinwang-archive/issues/5) |

## 实施顺序

1. 保留活动作者。Payback 在当前切片释放后，先修保存失败的草稿保留；日期/币种正确性、旧门禁移除仍沿原归属。Taskly 先统一编辑/撤销契约，再扩任务分类。Rivet 用 taskboard 和一个真实产品验证交付旅程。
2. 停工产品恢复时，优先修 MoveBit 的强制模式默认/退出、HackDigest 的失败恢复与键盘闭环，完成 Booklight 批注可靠性、Keyward 密钥复制解释。Autarx/Threadly 先保证异步详情不串对象，再谈更多导航层。
3. FlashPilot 桌面在首个计划流程和操作边界验证前保持明确的验证预览；gPTP 保持 Linux-only 与真实硬件门禁；Publy 保持草稿优先，托管另走受控试点。
4. 至少两个真实消费者证明需要后才上收共用机制。草稿保留、请求/选择身份是候选 recipe，不预先引入 Rivet 表单引擎、selector 语言或 Glaze 工作流框架。

## 具体文档修正

- [publy 文档 PR](https://github.com/turlamai/publy/pull/9)：已提出的修正，运行缺陷与验收仍未完成。
- [gptp-studio 文档 PR](https://github.com/turlamai/gptp-studio/pull/41)：已提出的修正，运行缺陷与验收仍未完成。

本轮的实质审查形成 9 条新 UX issue、14 条既有 issue 补充；另在 8 个产品原交接 issue 中链接新任务。RegexMate 原授权问题已关闭，没有为交互工作重开，由本矩阵路由新的 issue。不能因设计文档合并而关闭运行缺陷；现有会话需在下一切片刷新，链接不代表已阅读或已完成。

## 源码快照与证据

以下链接固定到实际审阅 commit。实施前重查更新后的默认分支和开放 PR；本审查不需要个人基础设施或身份资料。

| 仓库 | 源码 commit | 代表证据 |
| --- | --- | --- |
| flashpilot | [`1a1dd5f`](https://github.com/turlamai/flashpilot/tree/1a1dd5fcea127a6f3dbaaa52aa87d5809945bc62) | [macos-host/Sources/RivetHost/ContentView.swift:9](https://github.com/turlamai/flashpilot/blob/1a1dd5fcea127a6f3dbaaa52aa87d5809945bc62/macos-host/Sources/RivetHost/ContentView.swift#L9) |
| autarx | [`adba6f3`](https://github.com/turlamai/autarx/tree/adba6f310471a39747977e0d54549acb79f3a962) | [macos-host/Sources/RivetHost/MainWindowView.swift:92](https://github.com/turlamai/autarx/blob/adba6f310471a39747977e0d54549acb79f3a962/macos-host/Sources/RivetHost/MainWindowView.swift#L92) |
| movebit | [`d8501f6`](https://github.com/turlamai/movebit/tree/d8501f6e360511edcd5db2f8962267f75968f71e) | [racket/movebit/config.rkt:42](https://github.com/turlamai/movebit/blob/d8501f6e360511edcd5db2f8962267f75968f71e/racket/movebit/config.rkt#L42) |
| payback | [`8eeef0a`](https://github.com/turlamai/payback/tree/8eeef0a2f8a3ed1021d1be603ec3b9982a54071b) | [macos-host/Sources/RivetHost/DeviceForm.swift:320](https://github.com/turlamai/payback/blob/8eeef0a2f8a3ed1021d1be603ec3b9982a54071b/macos-host/Sources/RivetHost/DeviceForm.swift#L320) |
| hackdigest | [`c5912a5`](https://github.com/turlamai/hackdigest/tree/c5912a5efd774b2891e3ef5d69d44765751850bf) | [apps/desktop/src/components/StoryDetail.tsx:62](https://github.com/turlamai/hackdigest/blob/c5912a5efd774b2891e3ef5d69d44765751850bf/apps/desktop/src/components/StoryDetail.tsx#L62) |
| threadly | [`c866ccf`](https://github.com/turlamai/threadly/tree/c866ccf490c818a8324a1d832b3d104c605e8375) | [macos-host/Sources/RivetHost/ThreadlyStore.swift:353](https://github.com/turlamai/threadly/blob/c866ccf490c818a8324a1d832b3d104c605e8375/macos-host/Sources/RivetHost/ThreadlyStore.swift#L353) |
| keyward | [`185637d`](https://github.com/turlamai/keyward/tree/185637d052d6f3544b7d4989f13b93fb3503c706) | [macos-host/Sources/RivetHost/ContentView.swift:63](https://github.com/turlamai/keyward/blob/185637d052d6f3544b7d4989f13b93fb3503c706/macos-host/Sources/RivetHost/ContentView.swift#L63) |
| taskly | [`bf5b942`](https://github.com/turlamai/taskly/tree/bf5b942cfa95c52860a499c8c2dd7054bcef27a8) | [shared/spec/PRODUCT-SPEC.md:102](https://github.com/turlamai/taskly/blob/bf5b942cfa95c52860a499c8c2dd7054bcef27a8/shared/spec/PRODUCT-SPEC.md#L102) |
| booklight | [`3b016a5`](https://github.com/turlamai/booklight/tree/3b016a510fc564fa7017401f3e20d487f553b607) | [macos-host/Sources/RivetHost/ReaderModel.swift:346](https://github.com/turlamai/booklight/blob/3b016a510fc564fa7017401f3e20d487f553b607/macos-host/Sources/RivetHost/ReaderModel.swift#L346) |
| fulcrum | [`bdc5ca6`](https://github.com/turlamai/fulcrum/tree/bdc5ca68b4611840a48bb6f666fef92ea8f0228b) | [docs/cross-platform-interaction.md:7](https://github.com/turlamai/fulcrum/blob/bdc5ca68b4611840a48bb6f666fef92ea8f0228b/docs/cross-platform-interaction.md#L7) |
| podlens | [`670d265`](https://github.com/turlamai/podlens/tree/670d2659d179036bc1aa47e6ddd4751621ee9976) | [docs/DESIGN-ROADMAP.md:55](https://github.com/turlamai/podlens/blob/670d2659d179036bc1aa47e6ddd4751621ee9976/docs/DESIGN-ROADMAP.md#L55) |
| regexmate | [`6b15629`](https://github.com/turlamai/regexmate/tree/6b15629e0a4a08c1254a187e2c74bf3124aaa3b4) | [macos-host/Sources/RivetHost/ContentView.swift:127](https://github.com/turlamai/regexmate/blob/6b15629e0a4a08c1254a187e2c74bf3124aaa3b4/macos-host/Sources/RivetHost/ContentView.swift#L127) |
| gptp-studio | [`ba499fd`](https://github.com/turlamai/gptp-studio/tree/ba499fd55029d91ccbfbb5b2a7cc8941964fb9d5) | [docs/ux-acceptance.md:3](https://github.com/turlamai/gptp-studio/blob/ba499fd55029d91ccbfbb5b2a7cc8941964fb9d5/docs/ux-acceptance.md#L3) |
| publy | [`01143ce`](https://github.com/turlamai/publy/tree/01143ce5740b8c2c08503c8161e7a2c307e5e324) | [docs/design.md:3](https://github.com/turlamai/publy/blob/01143ce5740b8c2c08503c8161e7a2c307e5e324/docs/design.md#L3) |
| syncpilot | [`ec72a25`](https://github.com/turlamai/syncpilot/tree/ec72a251b1650fd37839de4e5577d55d2cb9ded8) | [linux/src/main.cpp:459](https://github.com/turlamai/syncpilot/blob/ec72a251b1650fd37839de4e5577d55d2cb9ded8/linux/src/main.cpp#L459) |
| relaypilot | [`1e96d78`](https://github.com/turlamai/relaypilot/tree/1e96d78ebb3a82f3d73f05767d4cce46538c0b5e) | [PRODUCT.md:11](https://github.com/turlamai/relaypilot/blob/1e96d78ebb3a82f3d73f05767d4cce46538c0b5e/PRODUCT.md#L11) |
| rivet | [`1ced9e9`](https://github.com/turlamai/rivet/tree/1ced9e9e898173d9b95a9fdd0e746ef822b6c51a) | [docs/agent-native.md:227](https://github.com/turlamai/rivet/blob/1ced9e9e898173d9b95a9fdd0e746ef822b6c51a/docs/agent-native.md#L227) |
| glaze | [`4156dca`](https://github.com/turlamai/glaze/tree/4156dca8bff865159c4801756c48ef23bca1e4d5) | [docs/USING.md:5](https://github.com/turlamai/glaze/blob/4156dca8bff865159c4801756c48ef23bca1e4d5/docs/USING.md#L5) |
| keel | [`6fc1ba5`](https://github.com/turlamai/keel/tree/6fc1ba5e0ab9fead489a95f3e78472cecfcf1670) | [docs/USING.md:7](https://github.com/turlamai/keel/blob/6fc1ba5e0ab9fead489a95f3e78472cecfcf1670/docs/USING.md#L7) |
| permit | [`ed32d0e`](https://github.com/turlamai/permit/tree/ed32d0eec463665e470657e54d222a1b98148a1e) | [docs/USING.md:15](https://github.com/turlamai/permit/blob/ed32d0eec463665e470657e54d222a1b98148a1e/docs/USING.md#L15) |
| commerce | [`11fd533`](https://github.com/turlamai/commerce/tree/11fd53391b8039ef82639d59800d309728b1d6a5) | [docs/USING.md:7](https://github.com/turlamai/commerce/blob/11fd53391b8039ef82639d59800d309728b1d6a5/docs/USING.md#L7) |
| turinglambdaai.github.io | [`d32f840`](https://github.com/turlamai/turlamai.github.io/tree/d32f8400264c3b6dddd613d207331934e2d7694e) | [index.html:143](https://github.com/turlamai/turlamai.github.io/blob/d32f8400264c3b6dddd613d207331934e2d7694e/index.html#L143) |
| pitboard | [`5797032`](https://github.com/turlamai/pitboard/tree/579703298d6fdc1ef9ecabccdeed4fa2a98cc41d) | [assets/app.js:313](https://github.com/turlamai/pitboard/blob/579703298d6fdc1ef9ecabccdeed4fa2a98cc41d/assets/app.js#L313) |
| racket-programming | [`9949185`](https://github.com/turlamai/racket-programming/tree/9949185583cdbd19252d4b0424f84fc1607cbc6a) | [components/BookHeader.tsx:15](https://github.com/turlamai/racket-programming/blob/9949185583cdbd19252d4b0424f84fc1607cbc6a/components/BookHeader.tsx#L15) |
| yinwang-archive | [`1fc6bd7`](https://github.com/turlamai/yinwang-archive/tree/1fc6bd740202bb12e15e10dae80aa1b07be7c9d1) | [yinwang-archive/site.rkt:130](https://github.com/turlamai/yinwang-archive/blob/1fc6bd740202bb12e15e10dae80aa1b07be7c9d1/yinwang-archive/site.rkt#L130) |
