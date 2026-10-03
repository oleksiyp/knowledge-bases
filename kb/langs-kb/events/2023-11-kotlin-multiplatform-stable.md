---
type: Event
title: Kotlin Multiplatform declared Stable
description: "With Kotlin 1.9.20 (2023-11-01) JetBrains declared Kotlin Multiplatform Stable and production-ready, three years after the Alpha and one year after the Kotlin/Native memory-model rewrite. Compose Multiplatform for iOS was still Alpha."
event_kind: release
date: 2023-11-01
era: E3
impact: positive
languages: [languages/kotlin, languages/swift]
runtimes: [runtimes/android-art, runtimes/hotspot-openjdk]
ideas: [ideas/platforms-and-portability/kotlin-multiplatform, ideas/runtime-performance/aot-native-images]
tags: [kotlin, kmp, multiplatform, jetbrains, ios, android]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: kmp-stable
    resource: https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable/
    title: "JetBrains Blog: Kotlin Multiplatform Is Stable and Production-Ready"
    author: org:jetbrains
  - id: whatsnew1920
    resource: https://kotlinlang.org/docs/whatsnew1920.html
    title: "kotlinlang.org: What's new in Kotlin 1.9.20"
    author: org:jetbrains
  - id: kn-mm
    resource: https://kotlinlang.org/docs/whatsnew1720.html
    title: "kotlinlang.org: What's new in Kotlin 1.7.20 (new memory manager by default)"
    author: org:jetbrains
  - id: google-kmp
    resource: https://android-developers.googleblog.com/2024/05/android-support-for-kotlin-multiplatform-to-share-business-logic-across-mobile-web-server-desktop.html
    title: "Android Developers Blog: Android Support for Kotlin Multiplatform (2024-05-14)"
    author: org:google
---

# What happened
Kotlin 1.9.20 shipped on 1 November 2023 and JetBrains announced that Kotlin Multiplatform's core — compiler support, language features, library APIs, IDE and build tooling — was Stable and "100% ready for use in production".[^kmp-stable] The release added a default hierarchy template to cut Gradle boilerplate and removed the legacy Kotlin/Native memory manager, whose replacement had become default in 1.7.20.[^whatsnew1920][^kn-mm] JetBrains cited Netflix, Philips, McDonald's, 9GAG and Baidu as production users. Compose Multiplatform was Stable only for Android and desktop; iOS was Alpha and web experimental.[^kmp-stable]

# Why it matters
Stability guarantees were the gating factor for enterprise adoption of the "share business logic, keep native UI" model. Within six months Google announced official Android support for KMP and shipped Google Docs on it, and multiplatform Jetpack libraries followed.[^google-kmp] The milestone also marks the end of the Kotlin/Native memory-model era that had stalled KMP for years.

# Related
- [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md), [Kotlin](/languages/kotlin.md), [AOT native images](/ideas/runtime-performance/aot-native-images.md)
- [Compose Multiplatform for iOS stable](/events/2025-05-compose-multiplatform-ios-stable.md), [Kotlin 2.0 K2 compiler](/events/2024-05-kotlin-2-0-k2-compiler.md)

[^kmp-stable]: JetBrains: Kotlin Multiplatform Is Stable and Production-Ready — https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable/
[^whatsnew1920]: What's new in Kotlin 1.9.20 — https://kotlinlang.org/docs/whatsnew1920.html
[^kn-mm]: What's new in Kotlin 1.7.20 — https://kotlinlang.org/docs/whatsnew1720.html
[^google-kmp]: Android Developers Blog: Android Support for KMP — https://android-developers.googleblog.com/2024/05/android-support-for-kotlin-multiplatform-to-share-business-logic-across-mobile-web-server-desktop.html
