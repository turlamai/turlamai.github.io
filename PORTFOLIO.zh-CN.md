# 产品组合与首发商业设计

[English](PORTFOLIO.md) · **简体中文**

版本：**2026-10-v2**，2026-10-23。用户确认：全部产品仍在开发，尚无实际用户；只有 Rivet、Payback、Taskly 正在持续修改。本文件取代之前的收费归属、固定节奏、早鸟与预售设想。定价可以基于证据迭代，不再遵循“推广前定死、以后不许调整”的旧规则。既已发布源码的许可继续有效。

这里决定组合角色、投入顺序与共用规则；各产品仓库的 `PRICING.md` 与完整中文版本 `PRICING.zh-CN.md` 共同陈述同一价格、权益和开卖门禁；行为以审查后的 offer/policy 为准，两种语言承诺必须一致。文档中的首发目标不是已上线商品，不将开发功能、支付部署或一张许可证等同于商业交付。

Taskly / Payback 的新文档先以独立 PR #60 / #21 交接，等待 CI 与合并；下表链接在合并前指向对应 PR。其他方案已直接写入停更仓库默认分支。

文档默认英文并提供完整中文公开用户路径；具体要求见[文档语言规范](docs/DOCUMENTATION-LANGUAGES.zh-CN.md)。

## 选择少数收入主力

| 产品 | 决策 | 用户为什么付钱 | 执行顺序 |
|---|---|---|---|
| [Taskly](https://github.com/turlamai/taskly/pull/60) | 完整官方桌面版买断，14 天试用；不把提醒/自然语言输入拆卖 | 稳定、顺手、可恢复的日常任务系统 | 消费主力 1；先完成现有交互/更新/恢复 |
| [Fulcrum](https://github.com/turlamai/fulcrum/blob/main/PRICING.zh-CN.md) | 免费现有启动器 + 新增工作流 Pro 买断 | 多步骤自动化的编辑、调试和失败恢复 | 消费主力 2；先证明一个新增付费闭环 |
| [Booklight](https://github.com/turlamai/booklight/blob/main/PRICING.zh-CN.md) | 免费现有阅读器 + 新增研究工作台 Pro 买断 | 有可追溯引用的跨书研究成果 | 第二梯队；先把阅读/批注恢复做稳 |
| [gPTP Studio](https://github.com/turlamai/gptp-studio/blob/main/PRICING.zh-CN.md) | Linux 官方 Pro 买断 + 可选更新续购 | 真实时间同步控制、参考硬件验证与工程证据 | 商业链技术试点；不等于最早能获得市场收入 |
| [Autarx](https://github.com/turlamai/autarx/blob/main/PRICING.zh-CN.md) | 完整工程工作台买断 + 可选更新续购 | 可验证的配置/校验/生成闭环 | 长线；不急于扩平台或销售渠道 |
| [FlashPilot](https://github.com/turlamai/flashpilot/blob/main/PRICING.zh-CN.md) | 免费 AGPL 引擎 + 官方验证资产/发行版买断 | 具体 ECU/适配器上的刷写、失败与恢复证据 | 长线；真实硬件在环通过才可立 offer |
| [HackDigest](https://github.com/turlamai/hackdigest/blob/main/PRICING.zh-CN.md) | 免费 BYOK；限额托管翻译/摘要订阅 | 不配置 key 的持续计算服务 | 先完成传输/密钥/成本验证；无终身托管 |
| [Publy](https://github.com/turlamai/publy/blob/main/PRICING.zh-CN.md) | 免费 CLI/插件/自托管；托管发布订阅 | 稳定出口、排程、凭据管理与恢复 | 自用可靠性通过后小规模试点；不开主题市场 |

Taskly 的完整商品形式可减少人为免费/Pro 矩阵。Fulcrum、Booklight 现有免费功能已多，新增付费层应交付工作流成果，不能把 BYOK、导出、基础搜索重新围起来。以上判断是本组合的产品决策，不是已验证的需求或销量预测。

## 免费入口、保活与实验

| 产品 | 决策与投入边界 |
|---|---|
| [Payback](https://github.com/turlamai/payback/pull/21) | 所有实际交付平台免费，不再计划手机单独收费。移除现存 10 台/PB1 门禁；不以备份、导出或 BYO 同步收费 |
| [PodLens](https://github.com/turlamai/podlens/blob/main/PRICING.zh-CN.md) | 免费 BYOK 听读工具；不建设另一套音频计费/托管服务；先验证重复收听 |
| [RegexMate](https://github.com/turlamai/regexmate/blob/main/PRICING.zh-CN.md) | 免费 CLI/GUI/MCP 和内部生产/CI/agent；取消近期待办中的团队 Pro，不因企业身份追收费；现有 BUSL grant 不变 |
| [MoveBit](https://github.com/turlamai/movebit/blob/main/PRICING.zh-CN.md) | 免费社区工具，完成更新/跨屏/恢复即可，保持小体量 |
| [Threadly](https://github.com/turlamai/threadly/blob/main/PRICING.zh-CN.md) | 免费桌面社区工具；登录、回帖、通知与 BYOK 免费，保活 |
| [TermPilot](https://github.com/turlamai/termpilot/blob/main/PRICING.zh-CN.md) | 商业消费产品（早期开发）；买断制上线目标 ¥168 / US$24，BYOK AI 免费。Permit/Commerce 门禁通过前不售票 |
| [Keyward](https://github.com/turlamai/keyward/blob/main/PRICING.zh-CN.md) | 商业产品（早期开发；2026-11-10 从免费发布基础设施改判）。定价未定；不再是免费社区工具，门户已移出社区分组 |
| [SyncPilot](https://github.com/turlamai/syncpilot/blob/main/PRICING.zh-CN.md) | 免费保活，不为第三方 Resilio 的控制壳再建立授权体系 |
| [RelayPilot](https://github.com/turlamai/relaypilot/blob/main/PRICING.zh-CN.md) | 架构实验，不预售 VPN、节点或流量，不宣称有现成服务 |
| Pitboard | 免费内容入口，维护事实、来源与勘误，不新建订阅墙 |
| Racket 程序设计 / Yinwang Archive | 免费内容与社区入口；不将第三方归档内容包装为独家付费资源 |

Keepsake / Moonbeam 已删除，退出组合；不恢复开发。免费角色减少每个小产品单独运营账号、订单、激活和客服的负担。免费不能替代数据恢复、安全更新与可访问性的交付标准。

## 基础设施与开源

Rivet / Glaze / Keel（MIT）、Permit / Commerce（Apache-2.0）及协议库族保持当前许可，不加入商业门禁，不先做付费 SDK。它们提高全部产品的交付效率。五库依赖和职责的唯一权威仍是 Keel 的 `docs/family-architecture.md`；产品商业设计不向 Rivet/Glaze 注入价格、支付 SDK 或产品专属规则。

源码许可不等于官方服务权益。AGPL/Apache/MIT 已授予的权利不能用许可证文件收回；BUSL 不因免费使用而改称 MIT。未来单独许可的组件须在开发前清楚划界，不能临时换照充当护城河。

## 收费与技术共用规则

- **本地产品买断**：永久使用资格 + 12 个月新版本资格；续购可选、不自动扣款、不补缴中断月份。续购从支付时间与现有截止时间的较晚者起算。命名用户与设备/并发是三回事，不采硬件指纹，不假装纯离线授权能实时撤销。
- **托管订阅**：仅为真实持续服务收费；明确账户、周期、模型/调用长度、配额、失败是否计数、超额停止、取消和数据出口。无无限 AI、终身服务器或隐性超额账单。
- **免费产品不接商业链**：不为了展示 Permit/Commerce 而增加登录、激活或账号。模型 key、发布签名 key、商业签发 key、支付渠道 key 分域管理。
- **Commerce** 管 offer/policy/payment evidence/issuance，使用版本化且不可变的 offer；**Permit** 表达产品权益/更新窗，平台安全存储和领域代码做本地判断。托管消耗必须由服务端计量，不能把可复制离线凭据当并发计数器。
- 不售未交付平台。当前价格是独立设定的人民币/美元首发目标，不是汇率换算；真实结账须明确税费、支持、退款与总价。没有实际用户，也不设计虚构“老用户迁移”。
- 不推出全家桶终身授权、长期早鸟或订阅捆绑：成熟度与成本不同，先用单品验证需求。未来组合优惠不能让一个退订/退款误伤其他产品权益。

## 如何判断方案是否成立

现在的主要风险是没有真实使用反馈。先让少量试用者完成关键任务，记录主动提供的反馈：首次成功、7/30 天重复使用、导致放弃的失败、支持时间与购买意愿；不声称已有这些数据，不默认添加遥测。

Taskly/Fulcrum 先证明愿意购买的成果；Booklight 不在阅读可靠性前扩研究功能；汽车产品用真实参考组合与有边界的验证资产证明专业价值。托管两项开卖前须实测最坏配额成本、可用性、滥用和退款/取消，目标可变成本（模型、存储、出口、支付费）低于收入 30%，其中 HackDigest 推理成本低于标价 25%。这是开卖门禁，不是当前盈利结论。

每次只启动一个商业实现切片：gPTP 先做支付到权益/更新的技术试点，Taskly 做首个消费商品；不让所有 agent 同时给所有产品装收费墙。现阶段仍以 Rivet、Taskly、Payback 活跃工作为主，停更项目先完成文档和明确门禁，不自动复活全部路线。

## 来源与判断

2026-10-23 查阅：[Alfred 官方商店](https://www.alfredapp.com/shop/) 展示版本许可和升级型产品；[Raycast 官方价格](https://www.raycast.com/pricing) 展示免费核心与持续服务/AI 订阅。这些只证明市场存在多种包装方式，不证明我们的转化率或定价。选择有限买断主力、免费生态工具、托管才订阅，是结合本组合成本与独立维护能力作出的判断。

共用交付要求见 [PRODUCT-STANDARD](docs/PRODUCT-STANDARD.md)，初始审查见 [PRODUCT-REVIEW](docs/PRODUCT-REVIEW-2026-10.md)，网站结构见 [HOME-PAGE-PLAN](docs/HOME-PAGE-PLAN.md)。代理开工以本文件和各仓 PRICING 为准；旧 dated review 中的商业分类只作审查历史，不再作为有效收费规则。

## 授权接入路由

决策修订：`2026-10-auth-1`，2026-10-23。这是维护者路由，不是用户收费导航，也不是运行时已经完成的证据。各应用中英文 PRICING 文档负责完整授权决定与验收门禁。

| 产品 | 选定接法 |
| --- | --- |
| Taskly、Fulcrum、Booklight、gPTP Studio、Autarx、FlashPilot | 离线 Permit 权益，已获资格版本永久使用，付费更新/功能窗口；不采用激活租约、硬件绑定或设备上限。五席方案为命名分配，不是浮动并发 |
| HackDigest、Publy | 账户绑定的托管订阅权益；服务端校验签名、当前修订/支付状态与原子配额。不提供离线托管额度，不使用桌面激活租约 |
| Keyward | 商业方向已定（2026-11-10）；尚未接入 Permit/Commerce——定价落地时随 TermPilot 的 Permit/Commerce 门禁一并评估授权机制 |
| Payback、PodLens、RegexMate、MoveBit、Threadly、SyncPilot、RelayPilot | 不接商业 Permit/Commerce，不加授权账户或收费设备/席位门禁；移除冲突的历史限制后才能宣传无限制安装包 |
| Pitboard、Racket 程序设计、Yinwang Archive | 免费内容/社区，不签发商业凭据，不加收费墙 |
| Rivet、Glaze、Keel、Permit、Commerce | 基础库保留现行源码许可。产品授权方案留在产品，不给框架加收费墙 |

授权实施切片开始前，读取本仓授权决定、对应 issue 与当前协议，记录源码/政策 SHA 和决策修订。文件或 issue 更新**不代表运行中的 agent 已确认阅读**；既有会话须在下一个切片边界刷新。Taskly #60 与 Payback #21 合并前仍是政策交接入口，默认 AGENTS 已指向；其余应用默认分支已落入本地决定。

