---
type: Event
title: Kotlin 2.0 ships the K2 compiler
description: "Kotlin 2.0.0 (2024-05-21) made the rewritten K2 compiler frontend stable. One frontend now serves JVM, JS, Wasm and Native, with up to 94% faster compilation on some projects. It was the foundation for Kotlin's 2025–2026 language features."
event_kind: release
date: 2024-05-21
era: E3
impact: positive
languages: [languages/kotlin]
runtimes: [runtimes/hotspot-openjdk, runtimes/android-art]
ideas: [ideas/platforms-and-portability/kotlin-multiplatform]
tags: [kotlin, compiler, k2, jetbrains, multiplatform]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: jb
    resource: https://blog.jetbrains.com/kotlin/2024/05/celebrating-kotlin-2-0-fast-smart-and-multiplatform/
    title: "JetBrains Blog: Celebrating Kotlin 2.0 — Fast, Smart, and Multiplatform"
    author: org:jetbrains
  - id: infoworld
    resource: https://www.infoworld.com/article/2337011/jetbrains-debuts-kotlin-200-with-k2-compiler-performance-boost.html
    title: "InfoWorld: JetBrains debuts Kotlin 2.0.0 with K2 compiler performance boost"
  - id: bumpy
    resource: https://medium.com/digitalfrontiers/migrating-to-kotlin-2-0-a-slightly-bumpy-journey-33f688a0a86a
    title: "Digital Frontiers: Migrating to Kotlin 2.0 — a slightly bumpy journey"
  - id: ctx
    resource: https://blog.jetbrains.com/kotlin/2025/04/update-on-context-parameters/
    title: "JetBrains Blog: Update on Context Parameters"
    author: org:jetbrains
---

# What happened
JetBrains released Kotlin 2.0.0 on 2024-05-21, just before KotlinConf 2024. Its centrepiece was the stable **K2 compiler**, a full rewrite of the frontend. It unifies the JVM, JS, WebAssembly and Native targets in one pipeline and makes smart casts more consistent.[^jb][^infoworld] JetBrains reported compilation-speed gains of up to 94% on some projects and an analysis phase up to 376% faster. K2 was validated on 10 million lines of code across 80,000 projects before release.[^infoworld]

# Why it matters
K2 was multi-year infrastructure work, not a feature release, and paid off later. Kotlin 2.2–2.4 shipped guard conditions, context parameters and explicit backing fields on top of it, and the IDE plugin moved to a shared analysis API. It also gave [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md) one consistent frontend across targets. The costs were real. Compiler plugins and kapt-based annotation processors needed porting, and teams reported a "slightly bumpy" migration.[^bumpy] The experimental context-receivers feature was not carried forward as-is and was redesigned as context parameters.[^ctx]

# Related
- [Kotlin](/languages/kotlin.md)
- [Source generators and annotation processing](/ideas/metaprogramming/source-generators-and-annotation-processing.md)

[^jb]: Celebrating Kotlin 2.0 — https://blog.jetbrains.com/kotlin/2024/05/celebrating-kotlin-2-0-fast-smart-and-multiplatform/
[^infoworld]: InfoWorld — https://www.infoworld.com/article/2337011/jetbrains-debuts-kotlin-200-with-k2-compiler-performance-boost.html
[^bumpy]: Migrating to Kotlin 2.0 — https://medium.com/digitalfrontiers/migrating-to-kotlin-2-0-a-slightly-bumpy-journey-33f688a0a86a
[^ctx]: Update on Context Parameters — https://blog.jetbrains.com/kotlin/2025/04/update-on-context-parameters/
