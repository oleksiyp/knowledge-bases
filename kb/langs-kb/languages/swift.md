---
type: Language
title: Swift
description: "Apple's successor to Objective-C won Apple-platform app development outright (ABI-stable 2019, SwiftUI, Swift-only frameworks) and pioneered compile-time data-race safety. The Swift 6 strict-concurrency migration (2024) proved so painful that 6.2 (2025) reversed defaults. Its bids beyond Apple (ML, server, Android, embedded) are real but small."
tags: [apple, ios, macos, arc, data-race-safety, swiftui, cross-platform, ownership]
paradigms: [multi-paradigm, protocol-oriented, object-oriented, functional]
typing: static
memory_model: rc
first_released: 2014
steward: Apple with the Swift Core Team and workgroups (swift.org, github.com/swiftlang)
governance: single-vendor
trajectory: stable
ideas:
  - ideas/concurrency/data-race-safety-in-types
  - ideas/concurrency/structured-concurrency
  - ideas/concurrency/async-await-and-function-coloring
  - ideas/concurrency/actor-model
  - ideas/types/null-safety
  - ideas/types/sum-types-and-pattern-matching
  - ideas/runtime-performance/value-types
  - ideas/platforms-and-portability/ffi-modernization
  - ideas/tooling-and-ecosystem/dependency-management-built-in
  - ideas/memory-safety/ownership-and-borrowing
  - ideas/metaprogramming/source-generators-and-annotation-processing
runtimes: []
adoption_signals:
  tiobe_rank: { value: 18, as_of: 2026-09 }
  so_survey_usage_pct: { value: 5.4, as_of: 2025 }
  ios18_binaries_with_swiftui: { value: 592, as_of: 2024-12 }
era_momentum: { E1: up, E2: up, E3: flat, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: tiobe
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index, September 2026 (Swift 18th, 0.83%, up from 25th)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
  - id: swift-5
    resource: https://www.swift.org/blog/swift-5-released/
    title: "Swift.org: Swift 5 Released! (ABI stability, 2019-03-25)"
    author: org:apple
  - id: swift-55
    resource: https://www.theregister.com/2021/09/22/swift_5_5_released_with_async/
    title: "The Register: Apple releases Swift 5.5 with async keyword"
  - id: s4tf
    resource: https://github.com/tensorflow/swift
    title: "GitHub: tensorflow/swift — Swift for TensorFlow (Archived)"
  - id: swift-59
    resource: https://www.swift.org/blog/swift-5.9-released/
    title: "Swift.org: Swift 5.9 Released (macros, parameter packs, ownership, C++ interop)"
    author: org:apple
  - id: swift-510
    resource: https://www.swift.org/blog/swift-5.10-released/
    title: "Swift.org: Swift 5.10 Released (full data isolation)"
    author: org:apple
  - id: swift-6
    resource: https://www.swift.org/blog/announcing-swift-6/
    title: "Swift.org: Announcing Swift 6 (2024-09-17)"
    author: org:apple
  - id: swift-62
    resource: https://www.swift.org/blog/swift-6.2-released/
    title: "Swift.org: Swift 6.2 Released (2025-09-15)"
    author: org:apple
  - id: swift-63
    resource: https://www.swift.org/blog/swift-6.3-released/
    title: "Swift.org: Swift 6.3 Released (2026-03-24, official Android SDK)"
    author: org:apple
  - id: swift-64-register
    resource: https://www.theregister.com/devops/2026/09/17/swift-64-unifies-building-across-linux-macos-windows/5297006
    title: "The Register: Swift 6.4 unifies building across Linux, macOS, Windows"
  - id: swift-64
    resource: https://www.swift.org/blog/swift-6.4-released/
    title: "Swift.org: Swift 6.4 Released (2026-09-15)"
    author: org:apple
  - id: swiftlang-org
    resource: https://www.swift.org/blog/swiftlang-github/
    title: "Swift.org: New GitHub Organization for the Swift Project (2024-06-10)"
    author: org:apple
  - id: swift-build
    resource: https://www.swift.org/blog/the-next-chapter-in-swift-build-technologies/
    title: "Swift.org: The Next Chapter in Swift Build Technologies (2025-02-01)"
    author: org:apple
  - id: password-monitoring
    resource: https://www.swift.org/blog/swift-at-apple-migrating-the-password-monitoring-service-from-java/
    title: "Swift.org: Swift at Apple — Migrating the Password Monitoring service from Java"
    author: org:apple
  - id: android-wg
    resource: https://forums.swift.org/t/announcing-the-android-workgroup/80666
    title: "Swift Forums: Announcing the Android Workgroup (2025-06-25)"
  - id: timac-ios18
    resource: https://blog.timac.org/2024/1208-state-of-swift-and-swiftui-ios18/
    title: "Timac: Apple's use of Swift and SwiftUI in iOS 18"
  - id: lattner-2024
    resource: https://mikekreuzer.com/blog/2024/7/chris-lattner-on-swift.html
    title: "Mike Kreuzer: Chris Lattner on Swift (July 2024, quoting a podcast interview)"
  - id: spi-swift6
    resource: https://swiftpackageindex.com/ready-for-swift-6
    title: "Swift Package Index: Ready for Swift 6"
  - id: cocoapods-readonly
    resource: https://blog.cocoapods.org/CocoaPods-Specs-Repo/
    title: "CocoaPods Blog: CocoaPods Trunk Read-only Plan (Orta Therox, 2024-11-30)"
  - id: embedded-wwdc24
    resource: https://developer.apple.com/videos/play/wwdc2024/10197/
    title: "Apple WWDC24: Go small with Embedded Swift"
    author: org:apple
  - id: swift-java-wwdc25
    resource: https://developer.apple.com/videos/play/wwdc2025/307/
    title: "Apple WWDC25: Explore Swift and Java interoperability"
    author: org:apple
---

# Summary
Swift completed its takeover of Apple-platform development in this period. ABI stability in Swift 5 (Mar 2019) put the runtime into the OS.[^swift-5] SwiftUI (2019) and later frameworks were designed Swift-first. In iOS 18, the number of system binaries containing Swift grew another 50%, and 592 used SwiftUI.[^timac-ios18] Swift also became the first mainstream language to attempt **compile-time data-race safety** with actors and `Sendable`: async/await and actors in 5.5 (2021), full isolation checking in 5.10 (Mar 2024) and an opt-in Swift 6 language mode (Sept 2024).[^swift-55][^swift-510][^swift-6] That bet is **mixed**. Many teams stayed in Swift 5 mode (no official adoption figures are published), and Swift 6.2 (Sept 2025) reversed defaults with "approachable concurrency", running code on the main actor by default.[^swift-62] Outside Apple, Swift for TensorFlow died (archived Feb 2021).[^s4tf] Then Apple's own investment grew: a server case study (Password Monitoring: +40% throughput, ~50% Kubernetes capacity freed), the open-sourced Swift Build, an official Android SDK in Swift 6.3 (Mar 2026) and Java interop.[^password-monitoring][^swift-build][^swift-63] Verdict: dominant in its home market; elsewhere still niche (5.4% usage in SO 2025, TIOBE 18th).[^so-2025][^tiobe] Its creator says it got too complex.[^lattner-2024]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-03-25 | Swift 5.0: ABI stability on Apple platforms [^swift-5] | + |
| E1 | 2019-06-03 | SwiftUI announced at WWDC ([event](/events/2019-06-swiftui-announced.md)) | + |
| E2 | 2021-02 | Swift for TensorFlow archived [^s4tf] | − |
| E2 | 2021-09 | Swift 5.5: async/await, structured concurrency, actors [^swift-55] | + |
| E3 | 2023-09-18 | Swift 5.9: macros, parameter packs, noncopyable types, C++ interop [^swift-59] | + |
| E3 | 2024-03-05 | Swift 5.10: full data isolation under `-strict-concurrency=complete` [^swift-510] | + |
| E3 | 2024-06 | Embedded Swift introduced; repos move to github.com/swiftlang [^embedded-wwdc24][^swiftlang-org] | + |
| E3 | 2024-09-17 | Swift 6: opt-in data-race-safe language mode ([event](/events/2024-09-swift-6-strict-concurrency.md)) [^swift-6] | mixed |
| E4 | 2025-02-01 | Swift Build (Xcode's build engine) open-sourced [^swift-build] | + |
| E4 | 2025-06 | Password Monitoring service migrated from Java; swift-java interop; Android workgroup [^password-monitoring][^swift-java-wwdc25][^android-wg] | + |
| E4 | 2025-09-15 | Swift 6.2: approachable concurrency, `InlineArray`, `Span`, Wasm [^swift-62] | + |
| E4 | 2026-03-24 | Swift 6.3: official Swift SDK for Android, `@c` export [^swift-63] | + |
| E4 | 2026-09-15 | Swift 6.4: Swift Build default in SwiftPM, Subprocess 1.0, Span↔`std::span` [^swift-64][^swift-64-register] | + |

# Ideas it bet on
| Idea | Outcome for Swift |
|---|---|
| [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md) | Mixed. Technically delivered, but migration cost forced the 6.2 reversal of defaults.[^swift-62] |
| [Structured concurrency](/ideas/concurrency/structured-concurrency.md) | Succeeded. Task groups and `async let` shipped in 5.5 and are idiomatic.[^swift-55] |
| [Actors](/ideas/concurrency/actor-model.md) | Mixed. Widely used via `@MainActor`, custom actors less so. |
| [Null safety (optionals)](/ideas/types/null-safety.md) | Succeeded since 2014, and the reference model for others. |
| [Value types](/ideas/runtime-performance/value-types.md) | Succeeded. Structs/enums with copy-on-write, now `~Copyable`, `InlineArray` and `Span`.[^swift-62] |
| [Ownership](/ideas/memory-safety/ownership-and-borrowing.md) | Emerging. Noncopyable types (5.9) and borrow/mutate accessors (6.4) are opt-in.[^swift-59] |
| [FFI modernisation](/ideas/platforms-and-portability/ffi-modernization.md) | Succeeding. C++ interop (5.9), Java interop (2025), `@c` (6.3).[^swift-59][^swift-63] |
| [Built-in dependency management](/ideas/tooling-and-ecosystem/dependency-management-built-in.md) | Succeeded. SwiftPM displaced CocoaPods, whose trunk goes read-only on 2026-12-02.[^cocoapods-readonly] |
| Differentiable programming (S4TF) | Abandoned in 2021.[^s4tf] |

# What succeeded
- **Apple-platform default.** ABI stability let Apple ship Swift in its own OS frameworks. In iOS 18, Apple Intelligence components were written in Swift and SwiftUI use in system apps grew more than 50% year over year.[^swift-5][^timac-ios18]
- **Language-level concurrency.** async/await and actors arrived in one coherent release, and by 2024 the compiler could prove data-race freedom. No other mainstream GC/RC language has that guarantee.[^swift-510][^swift-6]
- **Performance tools without unsafe code.** Noncopyable types, `Span` and `InlineArray` give C-like control while staying safe.[^swift-62]
- **Opening up (E4).** The swiftlang GitHub org, Swift Build, VS Code tooling, Android and Wasm SDKs and Java interop moved Swift toward a credible multi-platform project.[^swiftlang-org][^swift-build][^swift-63]
- **Server proof point.** Apple's Password Monitoring rewrite handles billions of requests per day. It cut memory from tens of GB to hundreds of MB and code by ~85% compared with the Java service.[^password-monitoring]

# What failed or stalled
- **Swift 6 migration.** Strict checking produced so many diagnostics, especially around legacy UIKit/Objective-C APIs, that many apps stayed in Swift 5 language mode (widely reported; no official figures). The Swift Package Index tracked ecosystem readiness for years.[^spi-swift6] Swift 6.2 changed defaults (main actor by default, async functions run on the caller's executor), effectively admitting the original model was too hard.[^swift-62]
- **Swift for TensorFlow.** Google's flagship non-Apple bet, with language-integrated autodiff, was archived in 2021. Python won ML, and Chris Lattner later built Mojo instead.[^s4tf]
- **Complexity.** Lattner in 2024: Swift "has turned into a gigantic, super complicated bag of special cases, special syntax, special stuff".[^lattner-2024]
- **Reach beyond Apple.** Android went official only in 2026, a decade after Kotlin took that platform. Server-side Swift remains a niche next to Go/Java/Kotlin.[^swift-63][^so-2025]

# By era
## E1
Swift 5 ABI stability and SwiftUI. Swift becomes the only sensible choice for new Apple apps.[^swift-5]
## E2
Swift for TensorFlow cancelled.[^s4tf] Swift 5.5 delivers async/await and actors.[^swift-55]
## E3
Macros, C++ interop, full data isolation. Swift 6 ships opt-in strict concurrency; Embedded Swift starts.[^swift-59][^swift-510][^swift-6]
## E4
Course correction (6.2 approachable concurrency) plus a broad push beyond Apple: Swift Build, Android SDK, Java interop, Wasm.[^swift-62][^swift-63][^swift-64] See [Swift Android workgroup](/events/2025-06-swift-android-workgroup.md).

# Lessons
- Proving safety at compile time is only half the job. Without migration ergonomics and sensible defaults, developers opt out. Swift needed a second release cycle to make data-race safety usable.
- A platform owner can make a language win in its home market but cannot make it win elsewhere, as S4TF and the late Android effort show.
- Swift's evolution process kept adding features, and its creator calls the result over-complex. Ergonomics and simplicity pull against each other.

# Related
- [Objective-C](/languages/objective-c.md), [Kotlin](/languages/kotlin.md), [Rust](/languages/rust.md), [Mojo](/languages/mojo.md)
- [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md), [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md)
- [Swift 6 strict concurrency](/events/2024-09-swift-6-strict-concurrency.md)

[^tiobe]: TIOBE Index, September 2026 — https://www.tiobe.com/tiobe-index/
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^swift-5]: Swift 5 Released! — https://www.swift.org/blog/swift-5-released/
[^swift-55]: The Register, Swift 5.5 — https://www.theregister.com/2021/09/22/swift_5_5_released_with_async/
[^s4tf]: Swift for TensorFlow (Archived) — https://github.com/tensorflow/swift
[^swift-59]: Swift 5.9 Released — https://www.swift.org/blog/swift-5.9-released/
[^swift-510]: Swift 5.10 Released — https://www.swift.org/blog/swift-5.10-released/
[^swift-6]: Announcing Swift 6 — https://www.swift.org/blog/announcing-swift-6/
[^swift-62]: Swift 6.2 Released — https://www.swift.org/blog/swift-6.2-released/
[^swift-63]: Swift 6.3 Released — https://www.swift.org/blog/swift-6.3-released/
[^swift-64]: Swift 6.4 Released — https://www.swift.org/blog/swift-6.4-released/
[^swift-64-register]: The Register, Swift 6.4 — https://www.theregister.com/devops/2026/09/17/swift-64-unifies-building-across-linux-macos-windows/5297006
[^swiftlang-org]: New GitHub Organization for the Swift Project — https://www.swift.org/blog/swiftlang-github/
[^swift-build]: The Next Chapter in Swift Build Technologies — https://www.swift.org/blog/the-next-chapter-in-swift-build-technologies/
[^password-monitoring]: Swift at Apple, Password Monitoring — https://www.swift.org/blog/swift-at-apple-migrating-the-password-monitoring-service-from-java/
[^android-wg]: Announcing the Android Workgroup — https://forums.swift.org/t/announcing-the-android-workgroup/80666
[^timac-ios18]: Timac, Swift and SwiftUI in iOS 18 — https://blog.timac.org/2024/1208-state-of-swift-and-swiftui-ios18/
[^lattner-2024]: Mike Kreuzer, Chris Lattner on Swift — https://mikekreuzer.com/blog/2024/7/chris-lattner-on-swift.html
[^spi-swift6]: Swift Package Index, Ready for Swift 6 — https://swiftpackageindex.com/ready-for-swift-6
[^embedded-wwdc24]: WWDC24, Go small with Embedded Swift — https://developer.apple.com/videos/play/wwdc2024/10197/
[^swift-java-wwdc25]: WWDC25, Explore Swift and Java interoperability — https://developer.apple.com/videos/play/wwdc2025/307/
[^cocoapods-readonly]: CocoaPods Trunk Read-only Plan — https://blog.cocoapods.org/CocoaPods-Specs-Repo/
