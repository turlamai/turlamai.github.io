# 发行者身份与分发渠道

[English](DISTRIBUTION.md) · **简体中文**

决策版本：**2026-10-23-v1**。这是已采用的产品组合规划，不代表已开户、购买证书、提交商店或完成生产签名。注册和提交前必须重新核实平台准入。本文件负责共用身份/渠道决策；各产品既有发行文档负责具体步骤与证据。

实际发布的文件命名、校验、官网直链和 GitHub Release 验收另见[发行工程规范](RELEASE-STANDARD.zh-CN.md) / [English](RELEASE-STANDARD.md)。该规范不降低下文的发行者签名、公证及应用商店门槛。

## 结论与采购时机

当前开发阶段不购买开发者会员和签名证书。继续本地构建、领域测试、打包、安装、备份恢复和更新协议验证；开发包不构成面向公众的发行者信任证明。

首个 Mac 产品达到公开发行条件前，安排一份 Apple Developer Program 会员预算，目前每年 99 美元，地区价格以结算为准。Mac 首发候选为官网分发、Developer ID 签名、公证和装订票据。买会员不要求先上 Mac App Store；免费 Apple 账号可用于开始开发。[会员说明](https://developer.apple.com/programs/)、[Developer ID](https://developer.apple.com/developer-id/)。

Windows 开发与官网分发不要求 Store 开发者账号。微软新开户流程对个人和公司均提供免费注册，不再按旧的 19/99 美元开户费预算；必须从官方入口核实适用性，仍需身份验证并正确选择账号类型。[个人新流程](https://learn.microsoft.com/en-us/windows/apps/publish/whats-new-individual-developer)、[公司新流程](https://blogs.windows.com/windowsdeveloper/2026/05/07/publish-to-microsoft-store-as-a-company-now-with-free-registration-and-faster-onboarding/)。

首个适合的 Windows 消费应用先评估 Store 托管 MSIX，再决定是否购买官网分发证书。Store MSIX 通过认证后由微软签名；Store 的 MSI/EXE 路径仍需发行者自行签名。Store 账号不是任意官网安装包的签名证书。商店打包或能力不适合时，保留独立签名官网发行候选；不能假定 Rivet/Glaze 当前已支持通过商店审核的 MSIX。[签名方式](https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/code-signing-options)。

Azure Artifact Signing 的公开信任个人开户目前要求居住于美国或加拿大，不能作为中国内地个人的默认方案；未来经营主体需另行确认资格。不得伪造地区或借用身份。确有 Windows 官网发行需求时再询价和选择 CA，不为承诺立即消除 SmartScreen 提示而购买 EV。[资格](https://learn.microsoft.com/en-us/azure/artifact-signing/quickstart)、[签名与信誉](https://learn.microsoft.com/en-us/windows/apps/package-and-deploy/code-signing-options)。

## 全产品渠道矩阵

以下均为以真实支持平台和产品成熟度为前提的候选，不代表启动新移植、重启暂停开发、承诺上架或修改 [PORTFOLIO](../PORTFOLIO.zh-CN.md) 的收费分类。

| 产品 | 初始渠道与下一步判断 |
| --- | --- |
| Taskly、Fulcrum、Booklight | 已支持的 macOS 优先签名/公证官网发行；已支持的 Windows 在免费试点之后评估 Store MSIX，保留官网替代渠道。付费商店版还必须通过下述更新窗口兼容门禁。 |
| Payback、PodLens、RegexMate、MoveBit | 保持免费。支持 Windows 的产品可评估 Store MSIX；Mac 公开包仍需同样的发行者信任门禁。RegexMate 通过既有交付门禁后，作为首个复杂度较低的 Store 候选，不意味着现在重启开发。Payback 必须先移除遗留收费/设备门禁。 |
| Keyward | 保持免费，优先独立签名桌面发行。上架前单独审核密钥保管、权限和账号资格；本地钥匙管理器不自动等于获准签名服务或安全的生产私钥存储。 |
| gPTP Studio、Autarx、FlashPilot | 优先工程用途的官网/系统原生发行，只提供已验证平台；保留已支持的 Linux 包/CLI。评估商店前核实硬件访问、权限和驱动依赖；模拟器不能代替硬件验收。gPTP 仍是商业技术试点，与 Windows 商店试点分开。 |
| HackDigest | 本地/BYOK 桌面渠道遵循上述 Mac/Windows 规则。托管权益与服务收费另过上线门禁；验证后端不要求先上商店。 |
| Publy | 优先免费 CLI/插件/自托管；先做受控托管试点，再考虑公开服务。Web 托管无需 Apple/Windows 开发者账号；确实增加并验证桌面发行时才应用桌面规则。 |
| Threadly | 优先维护和已支持平台的签名官网包；先证明现有登录、阅读和更新闭环再考虑商店。本次不扩展移动端。 |
| SyncPilot | 维护已验证的 Linux/Resilio 集成，不增加 Apple/Windows 账号要求或自动移植义务。 |
| RelayPilot | 架构实验，先有有用的可执行产品和平台证据，再谈生产/商店可用性。 |
| Rivet、Glaze、Keel、Permit、Commerce | 库/源码包保持原许可与发行验证；框架示例可用开发签名。未来独立发行的二进制另做渠道判断；SDK 发版不要求商店会员。 |
| jrtx.site、Pitboard、Racket Programming、Yinwang Archive | 网站/内容发布与故障恢复，不要求桌面开发者账号。本维护规范不进入面向用户的主页导航。 |

## 身份与渠道边界

同一真实法律发行者的产品共用一致的发行者身份，不为每个应用另开账号，不借用他人身份。产品标识和证书按平台要求分别管理。公开发行前规划所有权/恢复、MFA、账号清单与未来主体变化；品牌不等于法律上的公司。

Apple 的个人账号在 App Store 展示个人法定姓名；独资/单人经营通常以个人加入。组织账号要求合格法律实体、D-U-N-S 和授权核验，不能承诺取得本地营业执照就一定能开组织账号。[Apple 注册规则](https://developer.apple.com/help/account/membership/program-enrollment/)。

微软规则不同：当前 Store 10.14 涉及经营/职业用途与被合理视为企业的发行者身份；10.8.3 限制个人账号的主要金融账户功能。根据真实主体、名称和功能审核，存疑时取得平台确认。免费、BYOK 或密钥管理应用并不自动满足个人账号条件；开户不代表产品获准上架。[Store 规则](https://learn.microsoft.com/en-us/windows/apps/publish/store-policies)。

平台发行身份、更新清单签名、Permit 签发、支付渠道密钥是独立信任域。运行端仅取得所需验签材料；生产凭据不进仓库、普通 PR 任务或诊断。受保护的发行环境使用与实际证书兼容的签名器/HSM/钥匙串，不能因框架支持 PFX 就承诺新 CA 私钥可以导出为 PFX。

Store 托管 MSIX 的更新由 Store/系统负责，应用内检查可以跳转商店。官网包走已经验证的更新器或明确的安装器/包管理器交接。不能静默将商店安装变成便携/官网安装，不能自行替换商店包；更换渠道前审核数据和身份迁移。商店可用性与自动更新受用户/管理员控制，需验证离线和商店被禁用的情况。[商店更新](https://support.microsoft.com/en-us/windows/apps/turn-on-automatic-app-updates)。

**买断授权必须承受自动更新。**Store 可能在 `updates_through` 之后更新应用。付费渠道上线前，必须证明旧授权仍保有已购功能和数据，或选择能安全实现可选升级资格的渠道/版本模型；禁止新二进制因旧的永久授权过期而在启动时拒绝使用。功能资格依赖经过认证且不可变的发行元数据，本文件不另造 Permit 字段。未通过验证的产品暂缓付费商店渠道。

商业首发仍为已批准的官网收银台与产品既定 Permit 模式。当前微软 10.8 允许符合条件的非游戏 PC 应用使用安全第三方支付，但需披露并通过审核，不等于任意渠道或账号已获批。Mac App Store/iOS 收费需按产品和地区另审；Developer ID 官网分发不自动生成 App Store 商品。将来接入商店凭据时走受验证的渠道适配器，不能直接当成 Permit 凭据。[商店交易规则](https://learn.microsoft.com/en-us/windows/apps/publish/store-policies)。

## Agent 交接与验收

每次发行、打包、更新或商业切片，通过 [PRODUCT-STANDARD](PRODUCT-STANDARD.md) 读取本规范。在产品既有发行文档/issue 记录实际源码/政策 SHA、支持系统/架构、候选渠道、账号/身份资格、签名责任、更新归属、数据迁移和权益行为。现有会话不会自动接收；有链接不代表已阅读。不要在各产品复制会逐渐分叉的完整共用政策。

| 门禁 | 必须有的证据 |
| --- | --- |
| 当前开发 | 使用临时数据真实安装/启动；领域/桥接测试、备份恢复、更新协议与损坏校验。ad-hoc/未签名包标注开发预览。 |
| 依赖生产凭据 | 账号/证书取得前明确待验证。保留凭据校验与必需发行检查，缺凭据不是公开发行通过，也不是削弱 CI 的理由。 |
| 公开渠道 | 精确源码/依赖与最终产物摘要；支持系统上的全新安装、启动、权限；对应渠道的签名/公证/商店验收、N→N+1 更新、失败恢复、数据保留和卸载。须重验最终签名/商店产物，不能用先前开发包替代。 |
| 收费商品 | 获批商户/主体与适用托管条件；购买、领取/导入、停机/退款/恢复、永久权益与更新窗口证据。免费产品发行不依赖先完成 Commerce 或付费产品备案。 |

Rivet 既有官网生产机制仍由[生产签名文档](https://github.com/turlamai/rivet/blob/main/docs/production-signing.md)负责，不移除检查，不把 MSIX 候选说成已实现。Glaze 的[库发行流程](https://github.com/turlamai/glaze/blob/main/docs/RELEASING.md)不等于消费应用签名。试点证明可复用后，才将共用机制沉淀进框架；产品政策、账号选择、商店资料和商业条款由产品/发行者负责。
