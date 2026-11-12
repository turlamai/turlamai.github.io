# 仓库布局与命名规范

**简体中文** · [English](REPOSITORY-LAYOUT-STANDARD.md)

状态：2026-11-12 依据同日全家族布局审计（见 [LAYOUT-AUDIT-2026-11.md](LAYOUT-AUDIT-2026-11.md)）确立。本文件掌管仓库结构、目录语义与命名政策，是目标基线：存量仓库在专属整理切片中迁移，每次只动一个仓库，main 保持绿。交付政策仍在[产品交付标准](PRODUCT-STANDARD.zh-CN.md)；Racket 包质量规则仍在 [RACKET-PACKAGE-STANDARD.zh-CN.md](RACKET-PACKAGE-STANDARD.zh-CN.md)。

## 仓库类别

| 类别 | 例 | 布局归属 |
| --- | --- | --- |
| 家族库（多 collection Racket 包） | rivet、glaze、permit、commerce、keel、foreman、graft、sonar、switchboard、ed25519 | § 家族库 |
| rivet 线桌面产品 | taskly、fulcrum、payback 等 | § rivet 产品 |
| glaze 线桌面产品 | hackdigest、termpilot | § glaze 产品 |
| 自由体（插件、内容站、存档、工具） | obsidian-postly、publy、pitboard、yinwang-archive、site-kit、proxy-rules、racket-programming | 自定布局，命名规则仍适用 |

自由体仓库在 README 里说清自己是什么；不冒充没用到的产品模板。

## 家族库（多 collection）

```text
info.rkt          # (define collection 'multi) + (define name "<仓库名>") + version
                  # deps 对下游家族库用 #:version 钉版本
<name>/           # 运行时 collection
<name>-doc/       # scribble 源
<name>-test/      # rackunit 测试
docs/  examples/  # 可选
```

- 必须有 `(define name)`，与仓库名一致。
- 包根的 `tests/` 与嵌在主 collection 里的 scribblings 属旧形态——迁移到 `<name>-test/` 与 `<name>-doc/`（待办：keel、ed25519；rivet 的内嵌 scribblings 留到它下一次布局切片）。
- 库仓库不带产品资产：静态站（`site/`）与服务部署物（`deploy/`）移到消费方产品或基建仓库。迁移完成前至少用 `source-omit-files` 排除并在 README 说明。
- 单 collection 包：根级模块 + `scribblings/` + `test/`；同样要有 `name` 与 `test-omit-paths`，并 ignore `compiled/` 与生成物 `doc/`。
- 随包发布的测试模块（`<name>-test/` 或 `test/`）使 `rackunit-lib` 成为**运行时**依赖而非构建依赖：`raco setup --check-pkg-deps` 按运行模式归类其 require（目录名豁免只认 `tests/` 字面名）。glaze 与 foreman 均如此声明并附同样理由注释。

## rivet 线桌面产品

```text
app/              # 只放原生壳 / 宿主胶水
racket/           # Racket 引擎（引擎代码唯一去处）
shared/           # 跨平台腿共享的 i18n、fixtures、规格
design/           # 原型 + DESIGN.md 设计契约
site/             # 产品官网根（site-kit 目标）
docs/ scripts/ tests/ assets/          # 文档、工具、测试、品牌资产
linux/ windows/ macos-host/ flatpak/   # 平台腿，支持的每个平台一个
rivet.rktd  rivet-schema.json  rivet-acceptance.rktd  VERSION
```

- `racket/` 是引擎，`app/` 是壳。引擎住进 `app/` 属命名缺陷（待办：keyward、podlens、threadly、relaypilot）。
- `site/` 是官网根；`docs/` 只放文档。塞在 `docs/` 里的官网 kit 迁到 `site/`（待办：autarx、booklight、gptp-studio、movebit、regexmate、syncpilot、taskly、hackdigest）。迁移完成前 site-kit 的路径回退保其可用。
- Linux-only 产品可省略 `macos-host/` 与 `windows/`，其本地生成物残渣保持 gitignore（syncpilot 先例）。
- 根级清单：`rivet.rktd` 与 `VERSION` 必备。`rivet-schema.json` 默认入库，除非仓库声明它是 `raco rivet build` 重新生成的构建产物（autarx 先例）。有了验收场景后 `rivet-acceptance.rktd` 必备——绝不入库一份宣称了未运行场景的验收文件。
- `VERSION` 是纯文本 `X.Y.Z`，是唯一发行身份。仓库可以把身份委托给 `rivet.rktd`，但必须有校验脚本强制一致（relaypilot 先例）。一个仓库出现两个互不隶属的版本号即是缺陷。

## glaze 线桌面产品

```text
apps/desktop/  packages/  backend/       # 前端壳、共享包、Racket 引擎
backend/tests/                            # 引擎测试（唯一去处）
site/  design/  docs/  flatpak/  assets/  scripts/  VERSION
glaze.rktd  glaze-schema.json
```

无 `linux/`/`windows/`/`macos-host/` 平台腿：WebView 壳就是平台故事，除非日后加原生宿主。

## 命名规则

- 目录与文件用小写 kebab-case（`assets/`、`icon-512.png`）。
- 语言惯例源文件豁免：Swift/Kotlin/C++/C#/XAML 的 PascalCase、Python snake_case、React/TSX 组件 PascalCase、`Makefile`、`Dockerfile`、`CMakeLists.txt`、`*.vcxproj`、上游原样的 vendor 文件。
- 根级标准文档豁免：`README*`、`LICENSE*`、`CHANGELOG*`、`CONTRIBUTING*`、`SECURITY*`、`AGENTS*`、`VERSION`、`NOTICE`、`EULA*`、`PRICING*`、`THIRD_PARTY_NOTICES.md`、`SKILL.md`，以及作为设计契约真源的 `design/DESIGN.md`。
- `docs/` 命名：固定入口白名单保持大写——`README.md`、`USING.md`、`USER-GUIDE.md`、`DESIGN.md`、`CHANGELOG.md` 及其 `.zh-CN.md` 对；其余一律小写 kebab（`getting-started.zh-CN.md`）。存量混用目录在该文件下次内容改动时收敛，不要求批量重命名。
- 包身份：`package.json` 的 `name` 等于仓库名；scoped 包每仓一个前缀（如 `@publy/*`）；一个仓库只有一个版本号真源。插件仓的 Obsidian id、显示名与仓库名对齐，或在文档里说明为何不同。
- agent 技能目录统一 `skills/`（复数），每个技能一个子目录含 `SKILL.md`。
- 生成物一律 gitignore。生成文件要入库，必须在旁边注释写明生成者与消费方（regexmate 的 `.rivet/generated/**` 目前缺——在其下次布局切片中补注释或挪位）。

## 迁移纪律

- 每次改动集只动一个仓库；main 保持绿；迁移是[产品交付标准](PRODUCT-STANDARD.zh-CN.md)定义的整理切片，绝不与功能开发捆绑。
- 大小写不敏感文件系统（macOS/Windows）上仅改大小写的重命名，经临时名两步走。
- 重命名在同一改动里更新全部引用：脚本、CI workflow、site-kit `family.json` 路径与文档链接。
