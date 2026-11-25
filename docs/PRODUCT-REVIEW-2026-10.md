# 2026-10 产品与架构审查

> 后续状态（2026-10-23）：用户确认产品均在开发且没有实际用户，只有 Rivet / Payback / Taskly 仍活跃。本文件保留初始审查证据；收费角色、价格与执行顺序已由新版 [PORTFOLIO](../PORTFOLIO.md) 及各仓 PRICING 替代。主站分类、停更仓 agent 入口/反馈/路线已落地，HackDigest schema 基线已合并；Keyward 逐钥校验仍以对应 PR 的完整 CI 状态为准。不得把本文历史“未完成”或“已实现”直接当作本次实机验收结果。

审查日期：2026-10-23（Asia/Shanghai）。这是规划与证据索引，不是运行验收报告。
本轮检查主站的全部公开产品/内容入口、五个基础库、可访问的默认分支文档与主页源码、
公开发布资产、开放 issue/PR 和近期 Actions 状态；并查看主站实际浏览器页面。
未在三台系统逐一运行产品，未进行真实支付、硬件刷写或用户凭据测试。
页面搜索缓存与源代码不一致时以固定 SHA 源码作审查依据；部署验证仍需产品执行。

## 架构判断

五库边界总体合理，沿用 Keel 的 family-architecture。Keel 不是家族总基类；Permit
与 Commerce 不依赖 Keel；产品是组合根。Rivet/Glaze 不应内置商业权益或强制共用 UI。
先补交付与消费者证据、再扩平台，比继续加库/重写更有价值。

Rivet 的难点是三个宿主独立演进导致交互漂移，单一后端不自动解决。采用产品场景契约，
上收可重复的平台机制；不新增 UI DSL。Glaze 可以共享更多前端结构，但 WebView 的
输入法、焦点、缩放、取消和可访问性仍需按 OS 验证。Apple HIG 是设计原则来源，
不是三平台截图模板。细则见 [交付标准](PRODUCT-STANDARD.md)。

Agent 友好的目标是让不读源码的产品负责人通过可运行任务和可复现证据进行判断。
inspect/doctor/schema/acceptance 已是正确基础，下一步是干净环境演练与错误恢复，
不是把所有工程判断藏在一句提示词或另一个大编排系统里。

## 基础库现状

执行入口：[Rivet #314](https://github.com/turlamai/rivet/issues/314)、
[Glaze #76](https://github.com/turlamai/glaze/issues/76)、
[Keel #6](https://github.com/turlamai/keel/issues/6)、
[Commerce #4](https://github.com/turlamai/commerce/issues/4)。
文档修正：[Rivet #313](https://github.com/turlamai/rivet/pull/313)、
[Permit #8](https://github.com/turlamai/permit/pull/8)、
[Commerce #3](https://github.com/turlamai/commerce/pull/3)。

| 库 | 已有基础 | 本轮判断与下一步 |
| --- | --- | --- |
| Rivet | v0.12.0；原生宿主、类型化客户端、schema/acceptance/matrix；多条 companion PR | 继续原 desktop/mobile handoff；修 #310/#311 诊断体验；手机 companion 与独立移动应用分别表述；补交互契约与新手验收旅程 |
| Glaze | v0.16.0；G0–G5 计划；#75 native shutdown 在途 | 保留原单写窗口；补 HackDigest 消费者 native/schema/package 证据后再收敛 1.0 公开面 |
| Keel | v0.3.1；family architecture、规范字节编码与schema | 继续小而稳定；#5 模块路径冲突虽已见重命名，仍须 catalog/下游证据和状态闭环 |
| Permit | v0.2.0，已发布签名源包；安全 review、独立 C corpus、gptp 集成记录 | ROADMAP 仍写争取 0.2，需校正；下一步第二个真实产品的独立时间窗与轮换证据，不加支付/账号 |
| Commerce | journal/outbox/issuer/claim/operator/订阅投影实现；#1/#2 更新窗在途；无 published release | README 的已实现/未实现冲突；local fixture 与 live sandbox 分开；gptp 为首个 live canary，部署不等于产品接入完成 |

## 优先顺序与活动工作

P0 是公开承诺/许可与权益失败，P1 是关键用户闭环，P2 是保活。先接续已有 PR，
不另启动同一共享层写入。当前可见的活动工作包括 Rivet #305–#309、Glaze #75、
Commerce #2、Taskly #56/#57、gptp #34、PodLens #12、Payback #17–#19、
Booklight #17/#19，以及 Fulcrum 的交互/发布与功能切片。开放 PR 不等于已发布。
本机也有未提交实现，审查未改动任何现有工作区；其他设备 agent 的实时状态不可见。

## 逐产品处置

每条执行 issue 包含具体范围、证据、前置工作和验收。它们是路线图入口，执行时每次
仅认领其中一个有边界的切片；不要求所有产品同时扩张。

| 产品 | 优先级 | 已核验差距 / 首要动作 | 执行入口 |
| --- | --- | --- | --- |
| taskly | P1 | Taskly 是较好的交付样板，但 main 的 rivet-acceptance requirements 没有 release kind；反馈 #55/#56 与 Windows 快捷键 #57 仍在推进。AGENTS/CLI 有些断言和计数是历史快照。 | [审查 issue](https://github.com/turlamai/taskly/issues/58) |
| autarx | P1 | docs/ROADMAP.md 的 M9 仍列 licensing、大 OEM 性能与签名/公证；早期 M0 还把 Avalonia 写成当前基础。三平台 native 和 acceptance 已存在，应在现有路径收尾。 | [审查 issue](https://github.com/turlamai/autarx/issues/22) |
| flashpilot | P1 | main 已声明 AGPL、Rivet GUI 和模拟 ECU acceptance；v0.1.0 发布资产是独立 zip，未见 update manifest。README 的 license-free 定位需与官方 Pro 计划解释一致；#3 正在新增 ODX/MCP，当前共享层有写入者。 | [审查 issue](https://github.com/turlamai/flashpilot/issues/4) |
| gptp-studio | P0 | 默认分支 docs/index.html 仍写 GTK3+WebKitGTK4.1，与 Rivet/GTK4 当前架构冲突。PRICING 的“5席”解释为5台设备，named seats/devices 语义未分清；#33/#34 正在补分发产物，不能重复。 | [审查 issue](https://github.com/turlamai/gptp-studio/issues/35) |
| movebit | P1 | main README 仍把 native in-app update 列为待办，而本地/远端提交标题和 CHANGELOG 已描述0.5.0更新适配。快照最新 published release 仍为0.4.0；main、tag、published 必须分别表述。 | [审查 issue](https://github.com/turlamai/movebit/issues/48) |
| hackdigest | P1 | backend/main.rkt 仅 macOS 默认 native，Windows/Linux 默认 HTTP；框架1.0计划已把该差距列为 gate。README 的 fair-use unlimited 没有可核验预算，AGENTS 很短，缺完整入口。 当前默认分支树未见 glaze.rktd/schema baseline，与框架计划中的消费者进度叙述不符，须复核。 | [审查 issue](https://github.com/turlamai/hackdigest/issues/2) |
| threadly | P1 | README 仍称 read-only/no credentials/macOS shell，同时 M1–M3 勾选三端登录回帖、通知与AI；仓库没有 rivet-acceptance.rktd。维护产品需要真实交付证据，无需自动扩展移动端。 | [审查 issue](https://github.com/turlamai/threadly/issues/1) |
| regexmate | P0 | LICENSE Additional Use Grant 明确允许 internal production、CI 与 agents；主站 PORTFOLIO 却把团队/商业 CI 作为收费边界。已有 #3 记录换照，不能把现行许可描述成企业内部使用需付费。 | [审查 issue](https://github.com/turlamai/regexmate/issues/4) |
| fulcrum | P1 | 已有 cross-platform-interaction.md 与 #36 收敛交互，#72/#73 是公证/真实更新门禁，多条新功能PR正在推进。未来 Pro 若直接收费既有剪贴板/快捷键会破坏免费基线。 | [审查 issue](https://github.com/turlamai/fulcrum/issues/88) |
| publy | P1 | README/AGENTS 的 M0 design 标记与0.8.3发布/日常dogfooding冲突。AGENTS 记录 WebSocket query key，需要审计URL/代理日志泄漏；它是TypeScript发布服务加Racket旁路，不应为统一技术栈重写。 | [审查 issue](https://github.com/turlamai/publy/issues/7) |
| syncpilot | P2 | README诚实说明更新只下载验签tar.gz、应用需手动解压；已有0.8.4分发和acceptance。该产品被组合列为保活，不应再扩大重写或跨端工作。 | [审查 issue](https://github.com/turlamai/syncpilot/issues/10) |
| relaypilot | P2 | 源码仓库可访问、README明确无可运行VPN/TUN/UI，而PORTFOLIO仍写无公开仓库。许可是专有，源码可访问不等于开源。 | [审查 issue](https://github.com/turlamai/relaypilot/issues/1) |
| podlens | P1 | README与app/core/config.rkt明确将api-key存本地JSON；现有#11/#12补Linux功能和试听，不能重写活动共享层。平台图仍只有macOS/Windows，当前有Linux宿主。 | [审查 issue](https://github.com/turlamai/podlens/issues/13) |
| payback | P0 | PRICING仍规划桌面10设备限制/付费导出/全平台包与早鸟，site/index.html也预告桌面Pro；与PORTFOLIO的MIT桌面永久免费相冲突。#17/#18/#19正在统一同步与三端布局。 | [审查 issue](https://github.com/turlamai/payback/issues/20) |
| booklight | P1 | README把三端阅读/主题/批注统称完成，#17/#19仍在做PDF night/EPUB annotations；必须区分main功能与已发布包。reader有数据/编辑风险，不宜直接扩手机端。 | [审查 issue](https://github.com/turlamai/booklight/issues/20) |
| keyward | P1 | #1/#2分别记录多私钥只校验首项及缺少用途说明；README宣称Deep check较宽。快照0.2.0有hash sidecars但无update manifest，且没有rivet-acceptance契约。 | [审查 issue](https://github.com/turlamai/keyward/issues/3) |
| pitboard | P2 | PORTFOLIO把产品列为保活，docs/ROADMAP仍有实体扩张、读者BYOK、移动端等长队列。内容站的基线应是稳定出刊、来源透明和更正，非桌面安装器。 | [审查 issue](https://github.com/turlamai/pitboard/issues/1) |
| yinwang-archive | P2 | 这是内容归档项目，不应用桌面更新/收费基线；最新master与gh-pages分支均需保留其部署用途。 | [审查 issue](https://github.com/turlamai/yinwang-archive/issues/5) |
| racket-programming | P2 | 在线书属于免费社区内容，需用示例可运行、导航和勘误作为交付标准。代码书不应继承桌面产品的移动/许可队列。 | [审查 issue](https://github.com/turlamai/racket-programming/issues/8) |

用户已确认 Keepsake / Moonbeam 等本轮找不到的仓库已删除；Payback 于 2026-11-23、
RegexMate 于 2026-11-25 经维护者决定下架并删除仓库。Keepsake / Moonbeam / Payback / RegexMate
退出当前产品组合，不再作为来源待补、待恢复或待收费项目。主站残留产品卡、进度入口、
导航、双语文案与文档引用应清理；历史审查记录保留删除事实，不据此重建仓库。

## 收费模式与投入

保持 [PORTFOLIO](../PORTFOLIO.md) 的轨道。gptp 是首个商业闭环，Fulcrum 是首个
消费商业验证；Taskly/Booklight/PodLens 在基本体验成熟后接续，不同时扩张收费面。
Autarx/FlashPilot 需要真实工程规模和硬件可靠性证据。

本地产品：永久使用 + 明确的 365 天更新窗，新增便利形成 Pro，不追收既有免费能力。
BYOK 模型费用属于用户选定服务商，不能藏进软件权益。HackDigest/Publy 仅为真实托管
价值收有界订阅，先量测成本再定公开套餐。Payback 桌面永久免费，未来移动商店分发
另行验证，不预售多平台包。RegexMate 既有 internal production/CI/agent grant
必须保留，Pro 是新增协作与支持，不是企业身份税。

价格数字只在准备收费的产品 PRICING 中发布；不在主站预告。gptp 现有公开价格先
保持不变。源码许可、官方产品权益、托管服务三者不混写。团队 named seats、设备数、
并发数分别定义；离线授权不能声称实时撤销。售后/退款/恢复与支持能力先形成可执行
流程再承诺。未经实际验证不宣传无限用量或保证响应 SLA。

## 瘦身与文档

分支数量只是盘点线索：快照 Rivet 27、Glaze 11、Taskly 35、Fulcrum 42、MoveBit 28，
包含开放 PR、平台腿和历史合并分支。先建立 tip→PR→独有提交→活跃worktree/发布引用→
恢复点的表，再单独清理已证明可恢复的候选；不批量按年龄删除，不改写发布历史。
yinwang-archive 的 gh-pages 是部署分支，不是无用分支。

先删无引用旧栈/脚本，再按真实责任拆大型宿主；不以文件行数触发重写。README、AGENTS、
架构图、用户手册和活跃路线图职责分明，已完成计划迁移稳定规则后删除。不要每个产品
复制一份家族架构。产品标准、主页简报和各库规范互相链接。

## 主页

主页实施沿 [#2](https://github.com/turlamai/turlamai.github.io/issues/2)，
分支盘点与已删除项目引用清理沿 [#3](https://github.com/turlamai/turlamai.github.io/issues/3)。

[HOME-PAGE-PLAN](HOME-PAGE-PLAN.md) 规定主站的精选故事、完整目录、实验区、builder区，
以及产品页统一的任务/下载/隐私/收费/支持结构。保留双语、静态和自托管字体。
优先纠正 gptp 的旧 WebView 栈描述、Payback Pro 预告、许可矛盾，再做视觉改版。
每次核对主站卡片、产品页、README、GitHub About 和实际发布资产；审核 mobile/dark/
keyboard/200% zoom。真实截图替代无证据功能陈列。

## 固定审查快照

下表默认分支 SHA 代表取证起点，不表示所有检查在该 SHA 已绿。release 是公开资产
快照；main 上的版本号、tag 和 published release 可能不同。近期 run 的 queued、
cancelled 与 skipped 均未当作通过。执行前重新检查当前状态。

| 仓库 | 默认分支 | SHA | 最新 published release |
| --- | --- | --- | --- |
| rivet | main | [5b1f346](https://github.com/turlamai/rivet/tree/5b1f3466a6030592d63cec2d7f17f33ac9e1a76a) | v0.12.0 |
| glaze | main | [2a16c66](https://github.com/turlamai/glaze/tree/2a16c6689dcfe03e0a4e6a1db89589728e3ff7e9) | v0.16.0 |
| keel | main | [6f6f6c9](https://github.com/turlamai/keel/tree/6f6f6c9bcf7ffda506f555007cf9f623dc435ae5) | v0.3.1 |
| permit | main | [7a52054](https://github.com/turlamai/permit/tree/7a5205416562347130014e9075c2d17d5fdbf087) | v0.2.0 |
| commerce | main | [8d46091](https://github.com/turlamai/commerce/tree/8d4609170d0720e1c028c53875332997f6ba01ee) | 无可核验发布 |
| taskly | main | [ed3ec26](https://github.com/turlamai/taskly/tree/ed3ec2650b493a0cc46f80d5edb160ccf93b0432) | v0.2.3 |
| autarx | main | [1b51cbc](https://github.com/turlamai/autarx/tree/1b51cbc2790006ee1765a6df390e59e02a627573) | v0.5.0 |
| flashpilot | main | [2b1cf76](https://github.com/turlamai/flashpilot/tree/2b1cf76e6a44ccc52c8b6a2a0a39dd1280d7aee2) | v0.1.0 |
| gptp-studio | main | [728c776](https://github.com/turlamai/gptp-studio/tree/728c77646031d790b68e5b6f9257e8480382e669) | v0.3.0 |
| movebit | main | [9be4869](https://github.com/turlamai/movebit/tree/9be48696e2a2a5cf82d31cba1d2b8c2246b7c870) | v0.4.0 |
| hackdigest | main | [fb5dc6b](https://github.com/turlamai/hackdigest/tree/fb5dc6b28de7a73149017d5201c0ec7e40932951) | v0.3.1 |
| threadly | main | [f305dbb](https://github.com/turlamai/threadly/tree/f305dbbe9fa53703ca13d856aaf36eda590556dd) | v0.13.0 |
| regexmate | — | 用户确认已删除（2026-11-25） | 退出当前组合 |
| fulcrum | main | [f9b01e2](https://github.com/turlamai/fulcrum/tree/f9b01e2be6b7d28f081aac8ee7b47979944d1c46) | v0.13.2 |
| publy | main | [4be6099](https://github.com/turlamai/publy/tree/4be60990cf6cb1a5ace08fe6278fdb7f4e917838) | 0.8.3 |
| syncpilot | main | [1e485e1](https://github.com/turlamai/syncpilot/tree/1e485e17599833fb0e31eba341fbedd59ab5b903) | v0.8.4 |
| relaypilot | main | [a16463f](https://github.com/turlamai/relaypilot/tree/a16463f68d275aa3aad7514a090e68cd61677bd5) | 无可核验发布 |
| podlens | main | [40acec2](https://github.com/turlamai/podlens/tree/40acec2cbdd22097ae7fdf26b023ceb57085aee5) | v0.3.0 |
| payback | — | 用户确认已删除（2026-11-23） | 退出当前组合 |
| booklight | main | [06e0331](https://github.com/turlamai/booklight/tree/06e033192be4bbce3ad6e4781291c372af728a6d) | v0.7.0 |
| keepsake | — | 用户确认已删除 | 退出当前组合 |
| moonbeam | — | 用户确认已删除 | 退出当前组合 |
| keyward | main | [24ce217](https://github.com/turlamai/keyward/tree/24ce2178449d9ac06ad067f57b8ee360ce33b6cd) | v0.2.0 |
| pitboard | main | [e9eb0e4](https://github.com/turlamai/pitboard/tree/e9eb0e4f3d8a8c00de2c8540c1dbdc8e7f7f0aa9) | 无可核验发布 |
| yinwang-archive | master | [06b9ed9](https://github.com/turlamai/yinwang-archive/tree/06b9ed9eb0cf7ad6717f1f7df6598cb2f110593d) | 无可核验发布 |
| racket-programming | master | [16d0781](https://github.com/turlamai/racket-programming/tree/16d078146a649e4c2d1375debdfce764db9534c4) | 无可核验发布 |
| turinglambdaai.github.io | master | [3599df0](https://github.com/turlamai/turlamai.github.io/tree/3599df03fd75229bc6e966982d33d17ad52fcc04) | 无可核验发布 |

## 执行纪律

每个 issue 开工先核对原有活动切片、工作树与 source SHA，写 owned files / acceptance /
rollback；共享文件一次一个写入者。产品实施不依赖本聊天。更新 canonical 文档、证据
和下一步；不要为通过验收而删 requirements、重录未知差异、用CLI代替GUI或把未跑写成绿。

本文在后续审查时更新或归档为历史快照；实际队列以各仓原活跃计划和对应 issue 为准。
