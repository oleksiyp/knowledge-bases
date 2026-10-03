---
type: OSS Project
title: Kotlin
description: JetBrains' Apache-2.0 JVM/multiplatform language; thriving in 2024–26 — Compose Multiplatform for iOS went stable (May 2025), Kotlin 2.2–2.4 stabilised context parameters, and JetBrains pushed Kotlin beyond IntelliJ with an Apache-2.0 Kotlin LSP while monetising a paid IntelliJ LSP for VS Code/Cursor (Aug 2026).
resource: https://github.com/JetBrains/kotlin
tags: [programming-language, jvm, multiplatform, apache-2.0, jetbrains, android]
domain: devtools-languages
license: Apache-2.0
license_history: ["Apache-2.0 (2012-)"]
governance: single-vendor
steward: JetBrains (language design and compiler), Kotlin Foundation (trademark, grants)
backing_orgs: []
metrics:
  github_stars: { value: 53468, as_of: 2026-10-03 }
  android_pro_dev_usage: { value: "92%", as_of: 2026-05-21, note: "JetBrains-reported share of professional Android developers using Kotlin" }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: kotlin-gh
    resource: https://github.com/JetBrains/kotlin
    title: Kotlin GitHub repository (stars via GitHub API, 2026-10-03)
  - id: jb-cmp-ios-stable
    resource: https://blog.jetbrains.com/kotlin/2025/05/compose-multiplatform-1-8-0-released-compose-multiplatform-for-ios-is-stable-and-production-ready/
    title: "JetBrains Blog: Compose Multiplatform 1.8.0 Released — Compose Multiplatform for iOS Is Stable and Production-Ready"
    author: org:jetbrains
  - id: devclass-kotlin-lsp
    resource: https://www.devclass.com/development/2025/05/23/jetbrains-previews-official-vs-code-language-server-for-kotlin-unveils-fresh-language-features-at-kotlinconf/1618596
    title: "DevClass: JetBrains previews official VS Code language server for Kotlin"
  - id: kotlin-lsp-gh
    resource: https://github.com/Kotlin/kotlin-lsp
    title: "GitHub: Kotlin/kotlin-lsp"
  - id: jb-kotlin-22
    resource: https://blog.jetbrains.com/kotlin/2025/06/kotlin-2-2-0-released/
    title: "JetBrains Blog: Kotlin 2.2.0 Released"
    author: org:jetbrains
  - id: jb-kotlin-23
    resource: https://blog.jetbrains.com/kotlin/2025/12/kotlin-2-3-0-released/
    title: "JetBrains Blog: Kotlin 2.3.0 Released"
    author: org:jetbrains
  - id: kotlin-whatsnew24
    resource: https://kotlinlang.org/docs/whatsnew24.html
    title: "kotlinlang.org: What's new in Kotlin 2.4.0"
  - id: kotlin-releases
    resource: https://kotlinlang.org/docs/releases.html
    title: "kotlinlang.org: Kotlin release process"
  - id: jb-kotlin-2420
    resource: https://blog.jetbrains.com/kotlin/2026/09/kotlin-2-4-20-released/
    title: "JetBrains Blog: Kotlin 2.4.20 Released"
    author: org:jetbrains
  - id: jb-kotlinconf26
    resource: https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/
    title: "JetBrains Blog: KotlinConf'26 Keynote Highlights"
    author: org:jetbrains
  - id: jb-idea-lsp
    resource: https://blog.jetbrains.com/idea/2026/08/intellij-idea-goes-lsp/
    title: "JetBrains Blog: IntelliJ IDEA Goes LSP — Java and Kotlin Intelligence Comes to VS Code, Cursor, and Agentic Flows"
    author: org:jetbrains
  - id: kf-grants-2026
    resource: https://kotlinfoundation.org/news/grant-program-for-library-authors-2026/
    title: "Kotlin Foundation: Apply for the 2026 Grant Program for Library Authors"
    author: org:kotlin-foundation
---

# Summary
Kotlin had a strong two years: Compose Multiplatform for iOS reached Stable on 2025-05-06, turning Kotlin Multiplatform (KMP) into a credible Flutter/React Native alternative for shared UI,[^jb-cmp-ios-stable] and the language shipped on a steady cadence (2.2.0 on 2025-06-23, 2.3.0 on 2025-12-16, 2.4.0 on 2026-06-03, 2.4.20 on 2026-09-07), stabilising context parameters and explicit backing fields.[^jb-kotlin-22][^jb-kotlin-23][^kotlin-releases][^jb-kotlin-2420] JetBrains reports 92% of professional Android developers use Kotlin and KMP adoption "more than doubled" in the year to KotlinConf'26 (Munich, May 2026).[^jb-kotlinconf26] Its biggest strategic shift is breaking the IntelliJ lock-in: an Apache-2.0 Kotlin LSP for VS Code (pre-alpha May 2025, Alpha May 2026) plus a paid "IntelliJ IDEA goes LSP" extension for VS Code/Cursor (Aug 2026).[^devclass-kotlin-lsp][^jb-idea-lsp] Verdict: OSS thriving; no separate business (JetBrains monetises IDEs around it), but tooling openness remains partial.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-06 | Compose Multiplatform 1.8.0: iOS target Stable [^jb-cmp-ios-stable] | OSS | + |
| W24 | 2025-05-23 | Official Kotlin LSP + VS Code extension previewed at KotlinConf 2025 (partially closed-source) [^devclass-kotlin-lsp] | OSS | + |
| W24 | 2025-06-23 | Kotlin 2.2.0 (guard conditions, non-local break/continue stable; context parameters preview) [^jb-kotlin-22] | OSS | + |
| W12 | 2025-12-16 | Kotlin 2.3.0 (unused-return-value checker, Java 25 support, Swift export) [^jb-kotlin-23] | OSS | + |
| W6 | 2026-05-20/22 | KotlinConf'26: Kotlin Toolchain (`kotlin` command), Kotlin LSP Alpha, Koog 1.0 agent framework, 18-month stdlib security support [^jb-kotlinconf26] | OSS | + |
| W6 | 2026-06-03 | Kotlin 2.4.0: stable context parameters and explicit backing fields; Java 26 support [^kotlin-whatsnew24][^kotlin-releases] | OSS | + |
| W3 | 2026-07-14 | Kotlin Foundation 2026 library grant applications close [^kf-grants-2026] | OSS | + |
| W3 | 2026-08 | IntelliJ IDEA LSP extension for VS Code/Cursor (preview; will require IDEA Ultimate) [^jb-idea-lsp] | Business | mixed |
| W3 | 2026-09-07 | Kotlin 2.4.20 tooling release [^jb-kotlin-2420] | OSS | + |

# OSS successes
- Compose Multiplatform for iOS stable; KMP adoption more than doubled in a year and 3,500+ libraries indexed on klibs.io.[^jb-cmp-ios-stable][^jb-kotlinconf26]
- Predictable release train and long-requested features (context parameters) finally stable in 2.4.[^kotlin-whatsnew24]
- AI positioning: Koog 1.0 agent framework, Agent Client Protocol co-led by JetBrains.[^jb-kotlinconf26]
- Kotlin Foundation runs annual library grants (117 applications in 2025).[^kf-grants-2026]

# OSS failures / risks
- The Kotlin LSP was announced as "partially closed-source"; the richer IntelliJ-powered LSP is commercial — editor-neutrality is incomplete.[^kotlin-lsp-gh][^jb-idea-lsp]
- Dependence on JetBrains (design) and Google (Android) — Kotlin outside Android/server-JVM is still niche.

# Business successes
- JetBrains turns Kotlin into IDE and AI demand; the IntelliJ LSP extension extends paid Ultimate reach into VS Code and Cursor users.[^jb-idea-lsp]

# Business failures / risks
- No independent business; Kotlin's health is coupled to JetBrains' IDE business, which faces AI-native editor competition.

# By window
## W3
- IntelliJ IDEA LSP extension for VS Code/Cursor (Aug 2026); Kotlin 2.4.20 (2026-09-07).[^jb-idea-lsp][^jb-kotlin-2420]
## W6
- KotlinConf'26 (Munich): Kotlin Toolchain, LSP Alpha, Koog 1.0; Kotlin 2.4.0 (2026-06-03).[^jb-kotlinconf26][^kotlin-releases]
## W9
- No notable events found (2.3.20 point release in March 2026).
## W12
- Kotlin 2.3.0 (2025-12-16).[^jb-kotlin-23]
## W24
- Compose Multiplatform iOS stable; Kotlin LSP preview; Kotlin 2.2.0.[^jb-cmp-ios-stable][^devclass-kotlin-lsp][^jb-kotlin-22]

# Lessons
- Vendor-led languages can thrive when the vendor's business (IDEs) benefits from adoption, but the vendor will keep the best tooling proprietary.
- Cross-platform UI is now contested between Flutter, React Native and KMP; stability milestones (iOS stable) drive the adoption inflection.

# Related
- [Swift](/projects/devtools-languages/swift.md)
- [OpenJDK](/projects/devtools-languages/openjdk.md)
- [TypeScript](/projects/devtools-languages/typescript.md)
