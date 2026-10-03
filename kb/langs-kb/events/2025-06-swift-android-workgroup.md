---
type: Event
title: Swift forms an Android workgroup; official Android SDK follows in Swift 6.3
description: "On 2025-06-25 the Swift project announced an Android Workgroup to make Android an officially supported platform. Nightly SDK previews followed in Oct 2025, and the first official Swift SDK for Android shipped with Swift 6.3 on 2026-03-24."
event_kind: announcement
date: 2025-06-25
era: E4
impact: positive
languages: [languages/swift, languages/kotlin, languages/java]
runtimes: [runtimes/android-art]
ideas: [ideas/platforms-and-portability/kotlin-multiplatform, ideas/platforms-and-portability/ffi-modernization]
tags: [swift, android, cross-platform, swift-java, workgroup]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: android-wg
    resource: https://forums.swift.org/t/announcing-the-android-workgroup/80666
    title: "Swift Forums: Announcing the Android Workgroup"
  - id: appleinsider-sdk
    resource: https://appleinsider.com/articles/25/10/27/android-developers-can-now-make-apps-using-apples-swift
    title: "AppleInsider: Android developers can now make apps using Apple's Swift (2025-10-27)"
  - id: swift-63
    resource: https://www.swift.org/blog/swift-6.3-released/
    title: "Swift.org: Swift 6.3 Released"
    author: org:apple
  - id: swift-java-wwdc25
    resource: https://developer.apple.com/videos/play/wwdc2025/307/
    title: "Apple WWDC25: Explore Swift and Java interoperability"
    author: org:apple
---

# What happened
On 2025-06-25 Swift core team members announced the Swift on Android Workgroup. Its goals: "establish and maintain Android as an officially supported platform for Swift", adapt Foundation and Dispatch to Android, define supported API levels and architectures, and add Android to the project's CI.[^android-wg] In October 2025 the workgroup published nightly preview builds of a Swift SDK for Android.[^appleinsider-sdk] On 2026-03-24 Swift 6.3 included "the first official release of the Swift SDK for Android". It works with the swift-java interop tooling (introduced at WWDC25) so Swift code can be embedded in Kotlin/Java apps.[^swift-63][^swift-java-wwdc25]

# Why it matters
It made official what community projects (Skip, Readdle, Flowkey and others) had been doing for years. It also gives Apple-centric teams a code-sharing route that mirrors [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md) in the other direction: shared business logic in Swift, native UI on each side. It arrives late. KMP went stable in 2023 and Compose Multiplatform for iOS in 2025, and Flutter and React Native already hold the cross-platform UI market. The SDK targets logic sharing, not UI. Adoption is unproven as of Oct 2026.

# Related
- [Swift](/languages/swift.md), [Kotlin](/languages/kotlin.md), [Android ART](/runtimes/android-art.md)
- [KMP stable](/events/2023-11-kotlin-multiplatform-stable.md)

[^android-wg]: Announcing the Android Workgroup — https://forums.swift.org/t/announcing-the-android-workgroup/80666
[^appleinsider-sdk]: AppleInsider, Swift for Android developers — https://appleinsider.com/articles/25/10/27/android-developers-can-now-make-apps-using-apples-swift
[^swift-63]: Swift 6.3 Released — https://www.swift.org/blog/swift-6.3-released/
[^swift-java-wwdc25]: WWDC25, Swift and Java interoperability — https://developer.apple.com/videos/play/wwdc2025/307/
