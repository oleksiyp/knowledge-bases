---
type: Event
title: Swift 6 ships an opt-in data-race-safe language mode
description: "Swift 6 (2024-09-17) turned compile-time data-race checking into errors under a new opt-in language mode. It was the first mainstream non-Rust language to do so. Migration friction was severe enough that Swift 6.2 (2025-09-15) reversed defaults with 'approachable concurrency'."
event_kind: release
date: 2024-09-17
era: E3
impact: mixed
languages: [languages/swift]
runtimes: []
ideas: [ideas/concurrency/data-race-safety-in-types, ideas/concurrency/structured-concurrency, ideas/concurrency/actor-model]
tags: [swift, concurrency, sendable, actors, data-race-safety, migration]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: swift-6
    resource: https://www.swift.org/blog/announcing-swift-6/
    title: "Swift.org: Announcing Swift 6"
    author: org:apple
  - id: swift-510
    resource: https://www.swift.org/blog/swift-5.10-released/
    title: "Swift.org: Swift 5.10 Released"
    author: org:apple
  - id: swift-62
    resource: https://www.swift.org/blog/swift-6.2-released/
    title: "Swift.org: Swift 6.2 Released"
    author: org:apple
  - id: spi-swift6
    resource: https://swiftpackageindex.com/ready-for-swift-6
    title: "Swift Package Index: Ready for Swift 6"
  - id: tsai-approachable
    resource: https://mjtsai.com/blog/2025/11/03/swift-6-2-approachable-concurrency/
    title: "Michael Tsai: Swift 6.2: Approachable Concurrency"
---

# What happened
Swift 5.5 (2021) had introduced async/await, actors and `Sendable`. Swift 5.10 (2024-03-05) completed "full data isolation" under `-strict-concurrency=complete`.[^swift-510] On 2024-09-17 Swift 6 shipped a new **opt-in** language mode in which potential data races are compile-time errors. Better `Sendable` inference and region-based isolation ("sending" values between actors) reduced false positives compared with the 5.10 warnings.[^swift-6] The Swift Package Index ran ecosystem-wide compatibility checks to track readiness.[^spi-swift6] One year later Swift 6.2 (2025-09-15) changed course with "approachable concurrency". Modules can now default to main-actor isolation, `nonisolated async` functions run on the caller's executor, and parallelism requires an explicit `@concurrent`.[^swift-62][^tsai-approachable]

# Why it matters
Swift is the main test of whether [data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md) can work in an app language with a large legacy (Objective-C/UIKit) API surface. The checker worked, but the defaults assumed developers wanted concurrency everywhere, while most app code is single-threaded UI code. The 6.2 reversal is a lesson for other languages: safety by default has to come with "single-threaded by default", or developers will stay in the old language mode.

# Related
- [Swift](/languages/swift.md)
- [Structured concurrency](/ideas/concurrency/structured-concurrency.md), [Actor model](/ideas/concurrency/actor-model.md)
- [Rust](/languages/rust.md) (Send/Sync as the precedent)

[^swift-6]: Announcing Swift 6 — https://www.swift.org/blog/announcing-swift-6/
[^swift-510]: Swift 5.10 Released — https://www.swift.org/blog/swift-5.10-released/
[^swift-62]: Swift 6.2 Released — https://www.swift.org/blog/swift-6.2-released/
[^spi-swift6]: Swift Package Index, Ready for Swift 6 — https://swiftpackageindex.com/ready-for-swift-6
[^tsai-approachable]: Michael Tsai, Swift 6.2 Approachable Concurrency — https://mjtsai.com/blog/2025/11/03/swift-6-2-approachable-concurrency/
