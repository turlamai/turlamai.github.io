# Release engineering standard

**English** · [简体中文](RELEASE-STANDARD.zh-CN.md)

Status: adopted family-wide **target contract** (2026-11-03), not evidence that any existing product or installer has passed it. Read [product delivery](PRODUCT-STANDARD.md), [distribution and signing](DISTRIBUTION.md), [portfolio decisions](../PORTFOLIO.md), and each repository's product-specific release and update contract before changing a pipeline. A shared rule must not override a shipped updater's signed-feed schema, a third-party marketplace convention, or a deliberately staged release gate.

## Classification and user-facing artifacts

| Type | Release surface | Do not publish |
| --- | --- | --- |
| Desktop application | **Only built and verified** native installers / portable packages for supported OS and CPU, one checked checksum inventory, needed signed update feeds, and necessary public legal/provenance metadata | Debug `.wixpdb`, staging directories, intermediate archives, duplicate versionless copies, per-file SHA sidecars when a complete `SHA256SUMS` is published |
| CLI tool | Verified, self-contained, architecture-specific archive or executable plus verification metadata | GUI installer matrices it does not ship |
| Racket package/framework | Catalog-installable or verified source package, changelog and appropriate source checksum/signature; examples/showcase binaries explicitly identified as demos | Imaginary desktop ports or identical desktop application matrices |
| Obsidian / other marketplace extension | Exactly the files, tag/version scheme, and layout its actual installer requires, plus its marketplace-compatible package | Arbitrary family renaming or deletion of mandatory runtime files |
| No qualified release | No artificial assets; explain missing build or acceptance evidence | “Latest” badges and download buttons that imply usable installers |

A project can publish several legitimate formats (DMG, MSI, DEB, RPM, AppImage, portable ZIP/tar.gz, Flatpak) **only where there is a supported installation channel and install/upgrade evidence for that specific format**. An `.rpm` with a packaging release revision and Linux architecture labels such as `amd64`/`arm64` (DEB), `x86_64`/`aarch64` (RPM/AppImage), or portable `x64`/`arm64` must retain the syntax expected by the actual build tool. Do not pretend these names are identical or rename package-internal metadata merely for appearance.

## File names, tags, and display names

- Preferred tag for first-party SemVer releases: `vMAJOR.MINOR.PATCH`, with reviewed prerelease identifiers where the product supports them. A marketplace-mandated tag pattern takes precedence. The tag, in-app version, package metadata and changelog section must agree.
- Versioned asset basename: `<product-slug>-<version>-<os>-<architecture>.<extension>`; retain legitimate packaging-specific release-revision fields and recognizable naming of separate CLI, GUI and update payloads. Use lowercase ASCII slugs; extensions are case-sensitive (`.AppImage`, etc.).
- Human title: `Product X.Y.Z` (and explicit preview/RC status), not a raw tag or a claim of production trust. Release notes must be nonempty and describe meaningful changes, supported platforms, known limitations and publisher-signing state when applicable. Do not repeat the changelog in an empty template.
- GitHub's automatically generated “Source code (zip/tar.gz)” is not a packaged, tested application installer.
- Canonical immutable, tag-pinned artifact URLs are used by signed updater feeds. A public page must not retain `releases/latest/download/<versionless-alias>` when the asset is no longer emitted. Prefer a verified latest-release asset lookup with an ordinary Releases-page fallback; do not direct users to nonexistent, wrong-arch or development-only assets.

## Release integrity and security

1. **Before publication:** Check the tag and commit SHA, complete expected asset inventory, unique file names, nonzero sizes, exact OS/CPU and format matrix, SHA-256 content, signed update-manifest schema/key identity when applicable, and versioned URL existence. Treat unexpected as well as missing assets as release blockers.
2. Generate a deterministic `SHA256SUMS` using sorted filenames, verify its contents *inside the final staged public directory*, and ensure every advertised payload can be verified from that directory alone. Keep per-asset SHA files as CI diagnostics unless a consumer genuinely depends on a public sidecar. Signatures (`.sig`), public verification certificates and required notices are not redundant checksum aliases.
3. Restrict uploads to a **curated, explicit allowlist** of public files. Keep debug symbols, signing secrets, WiX intermediate files, temporary binaries and internal build logs in private/retained CI artifacts. Preserve CycloneDX SBOMs and third-party notices when promised and verify their checksums too.
4. Upload idempotently to the intended tag/release identity. On retries, reconcile stale assets only on that exact draft or tag, never another published version. A published version's bytes are immutable for updater and rollback purposes: use a new version for changed payloads rather than silently replacing signed artifacts.
5. Treat channel selection and trust independently: prerelease/draft is not Latest; unnotarized macOS and unsigned Windows outputs remain clearly labeled development/evaluation builds. A signed update feed **does not** imply a platform-trusted executable. Do not bypass existing production-signing, notarization, Store or approval gates to make a Release appear complete.
6. Require clean install, first launch, upgrade N→N+1, cancel/interruption recovery, data preservation, signature/hash rejection and uninstall tests for each supported installer format and OS. Keep draft promotion blocked until these actually pass. A green build of the source tree is not proof of installed behavior.
7. Publish only after build, test, policy and platform-specific acceptance gates have passed; optionally attest the exact final staged public payload bytes with GitHub provenance. Never expose private signing keys, merchant secrets or user credentials through an artifact.
8. Verify every customer-facing web and documentation download entry against the actual release names, including Chinese and English variants. Run a link/asset inventory checker against the Release's own API response; no link to an alias that is missing from that Release.

## Review and adoption evidence

For each product PR, record: starting commit SHA, adopted central policy revision, release type, tag + inventory sampled, the changed naming/alias contract, updater and website-link dependencies, exact CI results, unresolved native-platform acceptance and the expected next qualifying tag. Separate **merged pipeline code** from **newly generated and tested release binaries**; a PR cannot claim the latter until a tag-driven run has produced them.

Do not rewrite every historical release to make the list look uniform. Existing downloads may be referenced by signed manifests, third-party registries and users. For an intentionally breaking migration with negligible usage, explicitly document what is broken and test the next release and updater transition first.

This document defines a goal, not a claim that Taskly, Fulcrum, or the full portfolio is already production-ready.
