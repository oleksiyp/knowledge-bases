---
type: Idea
title: Dependency management built into the language toolchain
description: "Ship the package/dependency manager as part of the official language toolchain — one manifest format, one resolver, an official proxy/checksum service — rather than leaving it to competing third-party tools. Go modules (2018–2021) and Swift Package Manager (Xcode 11, 2019) displaced dep, Glide, CocoaPods and Carthage; .NET centralised versions in NuGet (2022). Java stayed with third-party Maven/Gradle. Verdict: succeeded — every language that went official converged within ~3–5 years, at the price of community conflict and lost features."
area: tooling-and-ecosystem
tags: [go-modules, swiftpm, nuget, central-package-management, cocoapods, maven, gradle, minimal-version-selection, checksum-database, supply-chain]
outcome: succeeded
maturity_2026: mainstream
origin_year: 2010
mainstream_year: 2019
languages: [languages/go, languages/swift, languages/csharp, languages/java, languages/kotlin, languages/objective-c]
runtimes: [runtimes/go-runtime, runtimes/dotnet-clr]
related_ideas: [ideas/tooling-and-ecosystem/integrated-toolchains, ideas/tooling-and-ecosystem/package-registry-supply-chain, ideas/tooling-and-ecosystem/packaging-revolution-python, ideas/tooling-and-ecosystem/reproducible-builds-and-nix]
era_momentum: { E1: up, E2: up, E3: flat, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: go-mvs
    resource: https://research.swtch.com/vgo-mvs.pdf
    title: "Russ Cox: Minimal Version Selection (Go & Versioning, Part 4, 2018-02-21)"
  - id: bourgon-dep
    resource: https://peter.bourgon.org/blog/2018/07/27/a-response-about-dep-and-vgo.html
    title: "Peter Bourgon: A response about dep and vgo (2018-07-27)"
  - id: dep-archived
    resource: https://github.com/golang/dep
    title: "GitHub golang/dep: Go dependency management tool experiment (deprecated; archived 2020-09-09)"
  - id: go-mirror
    resource: https://go.dev/blog/module-mirror-launch
    title: "Go Blog: Module Mirror and Checksum Database Launched (2019)"
    author: org:google
  - id: go116
    resource: https://go.dev/blog/go116-module-changes
    title: "Go Blog: New module changes in Go 1.16 (Feb 2021)"
    author: org:google
  - id: go-ref-mod
    resource: https://go.dev/ref/mod
    title: "Go Modules Reference"
    author: org:google
  - id: go124
    resource: https://go.dev/doc/go1.24
    title: "Go 1.24 Release Notes (tool directives in go.mod)"
    author: org:google
  - id: go-toolchain
    resource: https://alexbozhenko.github.io/posts/2024-12-19-understand-go-toolchain-directive-or-your-money-back/
    title: "Alex Bozhenko: Understand Go toolchain directive (Go 1.21 automatic toolchain downloads)"
  - id: xcode11-spm
    resource: https://developer.apple.com/videos/play/wwdc2019/408/
    title: "Apple WWDC19 session 408: Adopting Swift Packages in Xcode"
    author: org:apple
  - id: cocoapods-maint
    resource: https://blog.cocoapods.org/CocoaPods-Support-Plans/
    title: "CocoaPods Blog: CocoaPods Support & Maintenance Plans (2024-08-13)"
  - id: cocoapods-readonly
    resource: https://github.com/getsentry/sentry-cocoa/issues/5282
    title: "GitHub sentry-cocoa #5282: CocoaPods trunk read-only mode (read-only from 2026-12-02)"
  - id: se0292
    resource: https://forums.swift.org/t/accepted-with-modifications-se-0292-package-registry-service/49849
    title: "Swift Forums: [Accepted with Modifications] SE-0292 Package Registry Service"
  - id: nuget-cpm
    resource: https://devblogs.microsoft.com/dotnet/introducing-central-package-management/
    title: ".NET Blog: Introducing Central Package Management (NuGet 6.2, 2022)"
    author: org:microsoft
  - id: gradle-74
    resource: https://www.infoq.com/news/2022/03/gradle-7-4/
    title: "InfoQ: Gradle 7.4 (version catalogs stable)"
  - id: ossrh-sunset
    resource: https://central.sonatype.org/news/20250326_ossrh_sunset/
    title: "Sonatype: OSSRH Sunset Announcement (EOL 2025-06-30)"
    author: org:sonatype
  - id: kotlinconf26
    resource: https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/
    title: "JetBrains Blog: KotlinConf'26 Keynote Highlights (Kotlin Toolchain `kotlin` command)"
    author: org:jetbrains
---

# Summary
**Succeeded.** In 2018 Go had no official dependency manager (GOPATH plus dep, Glide, govendor), iOS developers split between CocoaPods and Carthage, and .NET solutions drifted package versions project by project. By 2026 each had converged on an official, toolchain-integrated answer: **Go modules** (introduced in Go 1.11, Aug 2018; default from Go 1.16, Feb 2021) with a Google-run module mirror and checksum database;[^go116][^go-mirror] **Swift Package Manager** integrated into Xcode 11 (2019), leaving CocoaPods in maintenance mode (Aug 2024) and its trunk going read-only on 2026-12-02;[^xcode11-spm][^cocoapods-maint][^cocoapods-readonly] and **NuGet Central Package Management** (NuGet 6.2, 2022).[^nuget-cpm] The contrast case is Java, which kept Maven and Gradle as de-facto but third-party standards and spent the period on incremental fixes (Gradle version catalogs, Maven Central's 2025 OSSRH migration).[^gradle-74][^ossrh-sunset] The costs of going official were real: Go's switch from dep was one of the community's most bitter episodes, and SwiftPM still has no default public registry.[^bourgon-dep][^se0292]

# The idea
Make dependency resolution, lockfiles/checksums, and fetching part of the language's own CLI (`go`, `swift`, `dotnet`, `cargo`), maintained by the language steward. Done well, this eliminates tool fragmentation, gives every project the same manifest, and lets the steward add ecosystem-wide security (checksum transparency logs, proxies). Prior art: Cargo (Rust, 2014) and npm (2010) bundled with Node; Go's distinctive contribution was **Minimal Version Selection** — pick the *oldest* version satisfying all requirements, avoiding SAT solving and making builds reproducible without a lockfile.[^go-mvs] The broader "one tool does everything" trend is covered in [integrated toolchains](/ideas/tooling-and-ecosystem/integrated-toolchains.md).

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-02 | Russ Cox proposes vgo and Minimal Version Selection, superseding the community `dep` effort[^go-mvs] | mixed |
| E1 | 2018-07 | Public dispute over the dep→vgo decision (Peter Bourgon, Sam Boyer)[^bourgon-dep] | − |
| E1 | 2018-08 | Go 1.11 ships modules (opt-in via GO111MODULE)[^go-ref-mod] | + |
| E1 | 2019-06 | WWDC19: Swift packages integrated into Xcode 11, including iOS apps[^xcode11-spm] | + |
| E1 | 2019-08 | Go 1.13: proxy.golang.org and sum.golang.org on by default[^go-mirror] | + |
| E1 | 2020-09 | `golang/dep` archived as deprecated[^dep-archived] | + |
| E2 | 2021-02 | Go 1.16: module mode on by default, GOPATH mode deprecated[^go116] | + |
| E2 | 2021 | SE-0292 package registry protocol accepted — but no default public registry follows[^se0292] | mixed |
| E2 | 2022-03 | Gradle 7.4: version catalogs stable (Java/Kotlin still rely on third-party build tools)[^gradle-74] | mixed |
| E2 | 2022 | NuGet 6.2: Central Package Management via `Directory.Packages.props`[^nuget-cpm] | + |
| E3 | 2023-08 | Go 1.21: `toolchain` directive and automatic toolchain downloads[^go-toolchain] | + |
| E4 | 2024-08 | CocoaPods enters maintenance mode[^cocoapods-maint] | + |
| E4 | 2025-02 | Go 1.24: `tool` directives in go.mod replace the `tools.go` hack[^go124] | + |
| E4 | 2025-06 | Sonatype shuts down OSSRH; Maven Central publishers migrate to Central Portal[^ossrh-sunset] | mixed |
| E4 | 2026-05 | KotlinConf'26: JetBrains announces a unified Kotlin Toolchain (`kotlin` command)[^kotlinconf26] | + |
| E4 | 2026-12 (scheduled) | CocoaPods trunk becomes read-only[^cocoapods-readonly] | + |

# Where it succeeded
- **Go** went from fragmentation to a single system in under three years; the module mirror and checksum database gave Go one of the strongest default supply-chain postures of any ecosystem.[^go-mirror] Later additions — toolchain pinning and tool dependencies — kept extending the same model rather than adding new tools.[^go-toolchain][^go124]
- **Swift/iOS**: once Apple put SwiftPM inside Xcode, CocoaPods' decline was inevitable; its maintainers chose an orderly wind-down.[^cocoapods-maint][^cocoapods-readonly]
- **.NET**: NuGet was already official; CPM fixed the remaining monorepo pain of version drift, with tooling support in Visual Studio, the .NET SDK and Rider.[^nuget-cpm]

# Where it failed or stalled
- **Process damage in Go.** The dep maintainers had been working with the Go team's blessing; the sudden vgo pivot was seen as disregarding community work, an episode Go governance discussions still cite.[^bourgon-dep]
- **SwiftPM's missing registry.** SE-0292 standardised a registry protocol, but Apple never ran a default public registry; packages are still fetched from Git URLs.[^se0292]
- **Java never got one.** No JEP addressed dependency management; the ecosystem relies on Maven Central (a Sonatype-run service) and two competing build tools, and the 2025 OSSRH shutdown forced every publisher to migrate on a vendor's timeline.[^ossrh-sunset] JetBrains' 2026 Kotlin Toolchain is a vendor attempt to fill that gap for Kotlin.[^kotlinconf26]
- **Hidden network calls.** Go 1.21's automatic toolchain downloads surprised distro packagers who had to set `GOTOOLCHAIN=local` — official tooling also centralises control.[^go-toolchain]

# Why
1. **Default wins.** When the tool ships in the language's own CLI or IDE (Go, Xcode), third-party alternatives lose their audience regardless of technical merit; CocoaPods' decline tracks Xcode's SwiftPM integration, not a feature gap.
2. **Simplicity of the resolver mattered.** MVS made Go's resolver predictable without lockfile semantics, and Go's import-path-based versioning (major versions in paths) made the system enforceable.[^go-mvs]
3. **Security became a steward responsibility.** Checksum databases and proxies only work if the steward runs them for everyone; this argument grew stronger as [registry supply-chain attacks](/ideas/tooling-and-ecosystem/package-registry-supply-chain.md) escalated.
4. **Java's governance model blocks it.** Java SE is a specification and OpenJDK a runtime; build tooling has always been outside scope, and Maven/Gradle are entrenched with millions of builds. No one actor could make the switch — the same reason Python needed a third party (uv) to unify its tooling (see [packaging revolution](/ideas/tooling-and-ecosystem/packaging-revolution-python.md)).

# Lessons
- Integrate early: retrofitting an official manager onto a fragmented ecosystem is possible (Go, Swift) but costs community goodwill; Rust shows the cheaper path of shipping Cargo at 1.0.
- An official manager is more than a CLI — the steward must also run the infrastructure (mirror, checksums, registry) or the job is half-done (SwiftPM).
- Languages without a single steward for tooling (Java, Python) consolidate only when a vendor tool becomes dominant.

# Related
- [Go](/languages/go.md), [Swift](/languages/swift.md), [C#](/languages/csharp.md), [Java](/languages/java.md), [Kotlin](/languages/kotlin.md), [Objective-C](/languages/objective-c.md)
- [Integrated toolchains](/ideas/tooling-and-ecosystem/integrated-toolchains.md), [Package registry supply chain](/ideas/tooling-and-ecosystem/package-registry-supply-chain.md), [Python packaging revolution](/ideas/tooling-and-ecosystem/packaging-revolution-python.md), [Reproducible builds and Nix](/ideas/tooling-and-ecosystem/reproducible-builds-and-nix.md)
- Events: [Go 1.16 modules default](/events/2021-02-go-1-16-modules-default.md)

[^go-mvs]: Russ Cox: Minimal Version Selection — https://research.swtch.com/vgo-mvs.pdf
[^bourgon-dep]: Peter Bourgon: A response about dep and vgo — https://peter.bourgon.org/blog/2018/07/27/a-response-about-dep-and-vgo.html
[^dep-archived]: golang/dep (archived) — https://github.com/golang/dep
[^go-mirror]: Go Blog: Module Mirror and Checksum Database Launched — https://go.dev/blog/module-mirror-launch
[^go116]: Go Blog: New module changes in Go 1.16 — https://go.dev/blog/go116-module-changes
[^go-ref-mod]: Go Modules Reference — https://go.dev/ref/mod
[^go124]: Go 1.24 Release Notes — https://go.dev/doc/go1.24
[^go-toolchain]: Understand Go toolchain directive — https://alexbozhenko.github.io/posts/2024-12-19-understand-go-toolchain-directive-or-your-money-back/
[^xcode11-spm]: WWDC19: Adopting Swift Packages in Xcode — https://developer.apple.com/videos/play/wwdc2019/408/
[^cocoapods-maint]: CocoaPods Support & Maintenance Plans — https://blog.cocoapods.org/CocoaPods-Support-Plans/
[^cocoapods-readonly]: sentry-cocoa #5282: CocoaPods trunk read-only — https://github.com/getsentry/sentry-cocoa/issues/5282
[^se0292]: SE-0292 accepted — https://forums.swift.org/t/accepted-with-modifications-se-0292-package-registry-service/49849
[^nuget-cpm]: .NET Blog: Introducing Central Package Management — https://devblogs.microsoft.com/dotnet/introducing-central-package-management/
[^gradle-74]: InfoQ: Gradle 7.4 — https://www.infoq.com/news/2022/03/gradle-7-4/
[^ossrh-sunset]: Sonatype: OSSRH Sunset — https://central.sonatype.org/news/20250326_ossrh_sunset/
[^kotlinconf26]: JetBrains: KotlinConf'26 Keynote Highlights — https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/
