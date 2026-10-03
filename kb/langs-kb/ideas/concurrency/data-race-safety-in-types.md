---
type: Idea
title: Data-race safety in the type system
description: "Using the type checker (Send/Sync, Sendable, actor isolation, reference capabilities) to reject data races at compile time. Rust proved it works; Swift 6 (2024) brought it to a mainstream app language and hit a wall of migration pain that Swift 6.2's 'approachable concurrency' (2025) had to soften; Kotlin/Native abandoned its freeze-based model. Verdict: mixed."
area: concurrency
tags: [data-races, send-sync, sendable, actors, swift-6, strict-concurrency, reference-capabilities, kotlin-native]
outcome: mixed
maturity_2026: adopted
origin_year: 2015
mainstream_year: 2020
languages: [languages/rust, languages/swift, languages/pony, languages/kotlin, languages/go]
runtimes: []
related_ideas: [ideas/memory-safety/ownership-and-borrowing, ideas/concurrency/structured-concurrency, ideas/concurrency/actor-model, ideas/concurrency/async-await-and-function-coloring, ideas/types/linear-and-affine-types]
era_momentum: { E1: flat, E2: up, E3: up, E4: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: rust-book-send-sync
    resource: https://doc.rust-lang.org/book/ch16-04-extensible-concurrency-sync-and-send.html
    title: "The Rust Programming Language: Extensible Concurrency with Send and Sync"
    author: org:rust-lang
  - id: pony-deny
    resource: https://www.ponylang.io/media/papers/fast-cheap.pdf
    title: "Clebsch et al.: Deny Capabilities for Safe, Fast Actors (AGERE 2015)"
  - id: swift6-announce
    resource: https://www.swift.org/blog/announcing-swift-6/
    title: "Swift.org: Announcing Swift 6 (2024-09-17)"
    author: org:swift
  - id: swift-ready6
    resource: https://www.swift.org/blog/ready-for-swift-6/
    title: "Swift.org: Plotting a Path to a Package Ecosystem without Data Race Errors"
    author: org:swift
  - id: swift-vision
    resource: https://forums.swift.org/t/accepted-vision-improving-the-approachability-of-data-race-safety/77953
    title: "Swift Forums: [Accepted] Vision — Improving the approachability of data-race safety (Feb 2025)"
    author: org:swift
  - id: se0466
    resource: https://github.com/swiftlang/swift-evolution/blob/main/proposals/0466-control-default-actor-isolation.md
    title: "Swift Evolution: SE-0466 Control default actor isolation inference"
    author: org:swift
  - id: swift62
    resource: https://www.swift.org/blog/swift-6.2-released/
    title: "Swift.org: Swift 6.2 Released (2025-09-15)"
    author: org:swift
  - id: donnywals-xcode26
    resource: https://www.donnywals.com/what-is-approachable-concurrency-in-xcode-26/
    title: "Donny Wals: What is Approachable Concurrency in Xcode 26?"
  - id: donnywals-2025
    resource: https://www.donnywals.com/is-2025-the-year-to-fully-adopt-swift-6/
    title: "Donny Wals: Is 2025 the year to fully adopt Swift 6?"
  - id: rentamac
    resource: https://rentamac.io/ios-app-development-statistics/
    title: "Rentamac: iOS App Development Statistics — 2026 developer survey (n=404, vendor survey)"
  - id: kn-1720
    resource: https://kotlinlang.org/docs/whatsnew1720.html
    title: "kotlinlang.org: What's new in Kotlin 1.7.20 (new memory manager default)"
    author: org:jetbrains
  - id: kn-migration
    resource: https://kotlinlang.org/docs/native-migration-guide.html
    title: "kotlinlang.org: Migrate to the new memory manager"
    author: org:jetbrains
  - id: go-race
    resource: https://go.dev/doc/articles/race_detector
    title: "Go: Data Race Detector"
    author: org:google
---

# Summary
Rust showed in 2015 that two auto-derived marker traits (`Send`, `Sync`) layered on ownership can make safe code data-race-free with little ceremony.[^rust-book-send-sync] Pony did the same with six reference capabilities.[^pony-deny] In 2018–2026 the question was whether the idea could be *retrofitted* onto a mainstream language with an existing ecosystem. Swift answered "yes, painfully". Swift 6 (September 2024) turned data-race diagnostics into errors in its opt-in Swift 6 language mode.[^swift6-announce] The resulting flood of `Sendable`/isolation errors led to an accepted 2025 vision to make the model "approachable". Swift 6.2 (September 2025) then let whole modules default to `@MainActor`, effectively "single-threaded unless you say otherwise", and Xcode 26 turned that on for new projects.[^swift-vision][^se0466][^swift62][^donnywals-xcode26] Kotlin/Native went the other way: it abandoned its compile-and-runtime "freeze" model for a conventional shared-memory GC in 2022.[^kn-1720] **Verdict: mixed.** The idea works when it is designed in (Rust, Pony). Retrofitting it costs years, and mainstream languages had to dial the strictness down to keep users.

# The idea
- **What:** types encode which values can cross concurrency domains (threads, actors, tasks). The compiler rejects shared mutable access unless it goes through a synchronised type or an isolation domain. Rust: `Send`/`Sync` plus the borrow checker. Swift: `Sendable`, actors, global actors, region-based isolation. Pony: `iso`/`val`/`ref`/`tag` capabilities.[^rust-book-send-sync][^pony-deny]
- **Prior art:** ownership types (1990s research), Cyclone, Singularity's Sing#, Rust and Pony (both 2015).
- **Problem solved:** data races are undefined behaviour in C/C++/Swift and silent corruption elsewhere. They are rare, timing-dependent and expensive to debug. The dynamic alternative, race detectors such as Go's `-race` and ThreadSanitizer, finds only races that execute during tests.[^go-race]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018–2020 | Rust's "fearless concurrency" becomes a top adoption argument; Kotlin/Native ships a strict "frozen objects" model | + |
| E2 | 2021-09 | Swift 5.5: actors, `Sendable`, async/await; checks mostly off by default | + |
| E2 | 2022-09 | Kotlin 1.7.20: new memory manager on by default; freezing deprecated; legacy model removed in 1.9.20[^kn-1720][^kn-migration] | − |
| E3 | 2024-05/06 | Swift Package Index "Ready for Swift 6" tracker; about 43% of packages had zero data-race errors at launch[^swift-ready6] | mixed |
| E3 | 2024-09-17 | Swift 6: complete data-race checking as errors in the opt-in Swift 6 language mode[^swift6-announce] | + |
| E4 | 2025-02 | Language Steering Group accepts "Improving the approachability of data-race safety" vision[^swift-vision] | mixed |
| E4 | 2025-09-15 | Swift 6.2: default `@MainActor` isolation (SE-0466) and nonisolated-nonsending async; Xcode 26 enables both for new projects[^swift62][^se0466][^donnywals-xcode26] | mixed |
| E4 | 2026-06 | Vendor survey: 38% of 404 iOS devs say they have moved to Swift 6 language mode[^rentamac] | mixed |

# Where it succeeded
- **Rust.** `Send`/`Sync` are invisible in most code (auto traits) and catch real bugs at compile time. They are a major reason Rust is chosen for concurrent infrastructure. The model has stayed essentially unchanged since 1.0.[^rust-book-send-sync] See [ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md).
- **Swift at the package level.** The Swift Package Index tracked ecosystem readiness publicly and shows a "Safe from data races" badge. The share of packages with zero diagnostics rose steadily from about 43% in 2024.[^swift-ready6]
- **Swift as the first mainstream app language with compile-time race checking.** Swift 6 extended memory-safety guarantees to data races for the iOS/macOS ecosystem.[^swift6-announce]

# Where it failed or stalled
- **Swift 6 migration pain.** Turning on Swift 6 mode produced cascades of `Sendable`, capture and isolation errors. Fixing them often meant converting synchronous code to `async` and refactoring across modules. Practitioners advised staying on Swift 5 mode through 2025.[^donnywals-2025] A June 2026 vendor survey reported only 38% of respondents on Swift 6 language mode. It is a low-rigour source, but it agrees with community reports.[^rentamac]
- **The model had to be softened.** The 2025 vision explicitly aims to "drastically reduce the number of explicit concurrency annotations" for code that does not want parallelism. It makes main-actor isolation the default for app modules, which concedes that the original default was too strict for UI code.[^swift-vision][^se0466]
- **Kotlin/Native freezing failed.** Objects shared across threads had to be frozen (deep-immutable), or the program crashed at runtime with `InvalidMutabilityException`. Library authors and KMP users found it unworkable. JetBrains replaced it with a tracing GC and ordinary JVM-like shared memory: default in 1.7.20, legacy removed in 1.9.20.[^kn-1720][^kn-migration]
- **Go, Java, C# and Kotlin/JVM chose not to.** Go relies on a dynamic race detector and "share memory by communicating" guidance.[^go-race] Java and .NET give races defined (if surprising) semantics rather than type-level prevention.

# Why
1. **Designed-in versus retrofitted.** In Rust, ownership already tracks aliasing, so `Send`/`Sync` add little. Swift had a decade of shared-mutable class code and Objective-C APIs with no isolation annotations, so every un-annotated type was a potential error.[^swift6-announce][^swift-ready6]
2. **Defaults decide adoption.** Swift's original default ("nonisolated unless annotated") flagged false positives in sequential UI code. Flipping the default to main actor (SE-0466) fixed most of the pain without weakening guarantees for code that opts into parallelism.[^se0466][^donnywals-xcode26]
3. **Runtime-checked safety (Kotlin/Native freeze) is the worst of both worlds.** It gave annotation burden without compile-time proof, and crashes in production. It could not interoperate with JVM-style Kotlin libraries that assume shared mutability.[^kn-migration]
4. **Ecosystem coordination is the long pole.** A module cannot be fully checked until its dependencies (including Apple SDK headers) are annotated. That is why Swift needed opt-in language modes per module and a public readiness tracker.[^swift-ready6]

# Lessons
- Compile-time race freedom is achievable in a mainstream language, but the migration must be incremental per module, and the *default* isolation must match what most code does (single-threaded UI).
- Don't ship runtime enforcement dressed as a type discipline.
- Publish ecosystem-readiness metrics: they turn a scary migration into a visible, shared goal.

# Related
- [Rust](/languages/rust.md), [Swift](/languages/swift.md), [Pony](/languages/pony.md), [Kotlin](/languages/kotlin.md), [Go](/languages/go.md)
- [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md), [Actor model](/ideas/concurrency/actor-model.md), [Structured concurrency](/ideas/concurrency/structured-concurrency.md), [Linear and affine types](/ideas/types/linear-and-affine-types.md), [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md)
- Events: [Swift 6 strict concurrency](/events/2024-09-swift-6-strict-concurrency.md)

[^rust-book-send-sync]: The Rust Programming Language: Send and Sync — https://doc.rust-lang.org/book/ch16-04-extensible-concurrency-sync-and-send.html
[^pony-deny]: Deny Capabilities for Safe, Fast Actors — https://www.ponylang.io/media/papers/fast-cheap.pdf
[^swift6-announce]: Swift.org: Announcing Swift 6 — https://www.swift.org/blog/announcing-swift-6/
[^swift-ready6]: Swift.org: Ready for Swift 6 — https://www.swift.org/blog/ready-for-swift-6/
[^swift-vision]: Swift Forums: Approachability of data-race safety vision — https://forums.swift.org/t/accepted-vision-improving-the-approachability-of-data-race-safety/77953
[^se0466]: SE-0466 — https://github.com/swiftlang/swift-evolution/blob/main/proposals/0466-control-default-actor-isolation.md
[^swift62]: Swift.org: Swift 6.2 Released — https://www.swift.org/blog/swift-6.2-released/
[^donnywals-xcode26]: Donny Wals: Approachable Concurrency in Xcode 26 — https://www.donnywals.com/what-is-approachable-concurrency-in-xcode-26/
[^donnywals-2025]: Donny Wals: Is 2025 the year to fully adopt Swift 6? — https://www.donnywals.com/is-2025-the-year-to-fully-adopt-swift-6/
[^rentamac]: Rentamac iOS developer survey (vendor, n=404) — https://rentamac.io/ios-app-development-statistics/
[^kn-1720]: What's new in Kotlin 1.7.20 — https://kotlinlang.org/docs/whatsnew1720.html
[^kn-migration]: Migrate to the new memory manager — https://kotlinlang.org/docs/native-migration-guide.html
[^go-race]: Go: Data Race Detector — https://go.dev/doc/articles/race_detector
