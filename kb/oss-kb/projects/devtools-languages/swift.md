---
type: OSS Project
title: Swift
description: Apple-led open-source language that pushed well beyond Apple platforms in 2025–26 — Android SDK previews (Oct 2025) then the first official Swift SDK for Android in Swift 6.3 (Mar 2026), Java interop and new workgroups — with Swift 6.4 released in Sept 2026.
resource: https://github.com/swiftlang/swift
tags: [programming-language, apple, apache-2.0, cross-platform, android]
domain: devtools-languages
license: Apache-2.0 WITH Swift-exception
license_history: ["Apache-2.0 with Runtime Library Exception (2015-)"]
governance: single-vendor
steward: Apple (Swift Core Team and workgroups)
backing_orgs: []
metrics:
  github_stars: { value: 70450, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: swift-gh
    resource: https://github.com/swiftlang/swift
    title: Swift GitHub repository (stars via GitHub API, 2026-10-03)
  - id: swift-android
    resource: https://www.swift.org/blog/nightly-swift-sdk-for-android/
    title: "swift.org: Announcing the Swift SDK for Android (nightly previews)"
    author: org:apple
  - id: swift-android-wg
    resource: https://forums.swift.org/t/announcing-the-android-workgroup/80666
    title: "Swift Forums: Announcing the Android Workgroup (2025-06-25)"
  - id: swift-62
    resource: https://www.swift.org/blog/swift-6.2-released/
    title: "swift.org: Swift 6.2 Released (2025-09-15)"
  - id: swift-63
    resource: https://www.swift.org/blog/swift-6.3-released/
    title: "swift.org: Swift 6.3 Released (2026-03-24) — first official Swift SDK for Android"
  - id: swift-64
    resource: https://www.swift.org/blog/swift-6.4-released/
    title: "swift.org: Swift 6.4 Released (2026-09-15)"
  - id: ladybird-feb26
    resource: https://ladybird.org/newsletter/2026-02-28/
    title: "This Month in Ladybird — February 2026 (Swift code removed)"
  - id: swift-blog
    resource: https://www.swift.org/blog/
    title: "swift.org blog (Swift 6.4 released; Networking Workgroup)"
    author: org:apple
---

# Summary
Swift's open-source story in this period is about leaving Apple's garden. An Android Workgroup formed on 2025-06-25; Swift 6.2 (2025-09-15) added WebAssembly support; on 2025-10-24 the workgroup announced nightly previews of an Android SDK, with >25% of Swift Package Index packages already supporting Android and swift-java providing Java interop.[^swift-android-wg][^swift-62][^swift-android] **Swift 6.3 (2026-03-24) shipped the first official Swift SDK for Android**, making Swift available on every major consumer OS.[^swift-63] A Networking Workgroup followed (2026-06-04), and **Swift 6.4 shipped on 2026-09-15** with Swift Build as the default SwiftPM build system on all platforms and Android support in SwiftPM.[^swift-blog][^swift-64] A counter-signal: Ladybird, the highest-profile non-Apple adopter, removed all its Swift code in February 2026 in favour of Rust.[^ladybird-feb26] Governance remains Apple-led via core team and workgroups. Verdict: OSS growing (cross-platform credibility); no separate business. Governance remains Apple-led via core team and workgroups. Verdict: OSS growing (cross-platform credibility); no separate business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-25 | Android Workgroup announced [^swift-android-wg] | Governance | + |
| W24 | 2025-09-15 | Swift 6.2 (approachable concurrency, InlineArray/Span, Wasm) [^swift-62] | OSS | + |
| W12 | 2025-10-24 | Swift SDK for Android nightly previews [^swift-android] | OSS | + |
| W9 | 2026-02 | Ladybird removes all Swift code, moves to Rust [^ladybird-feb26] | OSS | − |
| W9 | 2026-03-24 | Swift 6.3 — first official Swift SDK for Android [^swift-63] | OSS | + |
| W6 | 2026-06-04 | Networking Workgroup announced [^swift-blog] | Governance | + |
| W3 | 2026-09-15 | Swift 6.4 released (Swift Build default; Android in SwiftPM; faster Wasm bridging) [^swift-64] | OSS | + |

# OSS successes
- Official Android target (6.3) plus Java interop opens Swift to cross-platform mobile code sharing.[^swift-63][^swift-android]
- Workgroup model (Android, Networking) broadens participation beyond Apple.[^swift-android][^swift-blog]

# OSS failures / risks
- Apple-centric governance; non-Apple adoption still small — and Ladybird's exit from Swift (Feb 2026) removed its most visible non-Apple showcase.[^ladybird-feb26]

# Business successes
- n/a.

# Business failures / risks
- n/a.

# By window
## W3
- Swift 6.4 (2026-09-15).[^swift-64]
## W6
- Networking Workgroup (2026-06-04).[^swift-blog]
## W9
- Swift 6.3 with first official Android SDK (2026-03-24); Ladybird drops Swift (Feb 2026).[^swift-63][^ladybird-feb26]
## W12
- Android SDK previews (2025-10-24).[^swift-android]
## W24
- Android Workgroup formed (2025-06-25); Swift 6.2 (2025-09-15).[^swift-android-wg][^swift-62]

# Lessons
- Vendor languages gain OSS legitimacy by creating community workgroups for platforms the vendor doesn't own.

# Related
- [Mojo](/projects/devtools-languages/mojo.md), [Rust](/projects/devtools-languages/rust.md), [Ladybird](/projects/devtools-languages/ladybird.md)

[^swift-gh]: Swift GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/swiftlang/swift
[^swift-android]: swift.org: Announcing the Swift SDK for Android (nightly previews) — https://www.swift.org/blog/nightly-swift-sdk-for-android/
[^swift-android-wg]: Swift Forums: Announcing the Android Workgroup — https://forums.swift.org/t/announcing-the-android-workgroup/80666
[^swift-62]: swift.org: Swift 6.2 Released — https://www.swift.org/blog/swift-6.2-released/
[^swift-63]: swift.org: Swift 6.3 Released — https://www.swift.org/blog/swift-6.3-released/
[^swift-64]: swift.org: Swift 6.4 Released — https://www.swift.org/blog/swift-6.4-released/
[^ladybird-feb26]: This Month in Ladybird — February 2026 — https://ladybird.org/newsletter/2026-02-28/
[^swift-blog]: swift.org blog (Swift 6.4 released; Networking Workgroup) — https://www.swift.org/blog/
