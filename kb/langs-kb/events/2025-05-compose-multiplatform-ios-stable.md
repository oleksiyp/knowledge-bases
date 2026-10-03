---
type: Event
title: Compose Multiplatform for iOS reaches Stable
description: "Compose Multiplatform 1.8.0 (May 2025) declared JetBrains' shared Kotlin UI toolkit Stable on iOS, turning Kotlin Multiplatform into a full shared-UI competitor to Flutter and React Native; Compose for Web followed to Beta in Sept 2025."
event_kind: release
date: 2025-05-06
era: E4
impact: positive
languages: [languages/kotlin, languages/swift, languages/dart]
runtimes: [runtimes/android-art]
ideas: [ideas/platforms-and-portability/kotlin-multiplatform]
tags: [kotlin, compose-multiplatform, ios, ui, cross-platform, jetbrains, flutter]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: cmp-ios-stable
    resource: https://blog.jetbrains.com/kotlin/2025/05/compose-multiplatform-1-8-0-released-compose-multiplatform-for-ios-is-stable-and-production-ready/
    title: "JetBrains Blog: Compose Multiplatform 1.8.0 Released — Compose Multiplatform for iOS Is Stable and Production-Ready"
    author: org:jetbrains
  - id: kotlinconf26
    resource: https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/
    title: "JetBrains Blog: KotlinConf'26 Keynote Highlights"
    author: org:jetbrains
  - id: kmp-reasons
    resource: https://kotlinlang.org/docs/multiplatform/multiplatform-reasons-to-try.html
    title: "kotlinlang.org: Ten reasons to adopt Kotlin Multiplatform (usage 7% → 18%)"
    author: org:jetbrains
  - id: kmp-stable
    resource: https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable/
    title: "JetBrains Blog: Kotlin Multiplatform Is Stable and Production-Ready (Nov 2023)"
    author: org:jetbrains
---

# What happened
JetBrains released Compose Multiplatform 1.8.0 on 2025-05-06, bringing the iOS target to Stable with compatibility guarantees for its APIs.[^cmp-ios-stable] The release claimed startup comparable to native apps, scrolling on par with SwiftUI on high-refresh devices, an app-size overhead of roughly 9 MB versus a SwiftUI equivalent, accessibility support (VoiceOver, Full Keyboard Access), and type-safe navigation; it cited production apps such as Wrike and Physics Wallah.[^cmp-ios-stable] iOS had been Alpha when KMP itself went stable in Nov 2023.[^kmp-stable] Compose for Web reached Beta in September 2025.[^kotlinconf26]

# Why it matters
Until this release KMP's pitch was "share logic, write UI twice"; Stable Compose for iOS let teams share UI too, putting KMP in direct competition with Flutter and React Native. JetBrains' surveys show KMP usage rising from 7% to 18% between 2024 and 2025, and by KotlinConf'26 the number of top apps using KMP had "more than doubled" in a year.[^kmp-reasons][^kotlinconf26] Whether shared Compose UI on iOS (Skia-rendered, non-native widgets) wins over iOS teams long-term remains open.

# Related
- [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md), [Kotlin](/languages/kotlin.md), [Swift](/languages/swift.md), [Dart](/languages/dart.md)
- [Kotlin Multiplatform stable](/events/2023-11-kotlin-multiplatform-stable.md)

[^cmp-ios-stable]: JetBrains: Compose Multiplatform 1.8.0 — https://blog.jetbrains.com/kotlin/2025/05/compose-multiplatform-1-8-0-released-compose-multiplatform-for-ios-is-stable-and-production-ready/
[^kotlinconf26]: JetBrains: KotlinConf'26 Keynote Highlights — https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/
[^kmp-reasons]: kotlinlang.org: Ten reasons to adopt KMP — https://kotlinlang.org/docs/multiplatform/multiplatform-reasons-to-try.html
[^kmp-stable]: JetBrains: Kotlin Multiplatform Is Stable — https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable/
