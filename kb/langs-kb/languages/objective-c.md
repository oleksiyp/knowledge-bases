---
type: Language
title: Objective-C
description: "The NeXT/Apple Smalltalk-on-C language spent 2018–2026 in managed decline. It got no meaningful language evolution after 2015, new Apple frameworks went Swift-only, and CocoaPods trunk freezes in 2026. Apple's system binaries still carry a huge Objective-C base that it keeps optimising at the runtime level."
tags: [apple, legacy, cocoa, message-passing, arc, swift-interop]
paradigms: [object-oriented, imperative, reflective]
typing: static
memory_model: rc
first_released: 1984
steward: Apple (Clang/LLVM front end, objc4 runtime); GNUstep for non-Apple platforms
governance: single-vendor
trajectory: declining
ideas:
  - ideas/types/null-safety
  - ideas/platforms-and-portability/ffi-modernization
  - ideas/tooling-and-ecosystem/dependency-management-built-in
runtimes: []
adoption_signals:
  tiobe_rank: { value: 19, as_of: 2026-09 }
era_momentum: { E1: down, E2: down, E3: down, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: tiobe
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index, September 2026 (Objective-C 19th, 0.81%)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology (Objective-C not among top-listed languages)"
  - id: wwdc15-interop
    resource: https://developer.apple.com/videos/play/wwdc2015/401/
    title: "Apple WWDC15: Swift and Objective-C Interoperability (nullability, lightweight generics)"
    author: org:apple
  - id: nshipster-direct
    resource: https://nshipster.com/direct/
    title: "NSHipster: Objective-C Direct Methods"
  - id: llvm-objc-direct
    resource: https://reviews.llvm.org/D69991
    title: "LLVM review D69991: Implement __attribute__((objc_direct))"
  - id: wwdc20-runtime
    resource: https://developer.apple.com/videos/play/wwdc2020/10163/
    title: "Apple WWDC20: Advancements in the Objective-C runtime"
    author: org:apple
  - id: timac-ios17
    resource: https://blog.timac.org/2023/1019-state-of-swift-and-swiftui-ios17/
    title: "Timac: Apple's use of Swift and SwiftUI in iOS 17"
  - id: timac-ios18
    resource: https://blog.timac.org/2024/1208-state-of-swift-and-swiftui-ios18/
    title: "Timac: Apple's use of Swift and SwiftUI in iOS 18"
  - id: cocoapods-readonly
    resource: https://blog.cocoapods.org/CocoaPods-Specs-Repo/
    title: "CocoaPods Blog: CocoaPods Trunk Read-only Plan (2024-11-30, updated 2025)"
  - id: app-intents
    resource: https://developer.apple.com/videos/play/tech-talks/10168/
    title: "Apple Tech Talk: Migrate custom intents to App Intents (Swift-native framework)"
    author: org:apple
  - id: swift-63
    resource: https://www.swift.org/blog/swift-6.3-released/
    title: "Swift.org: Swift 6.3 Released (@c attribute exports Swift to C)"
    author: org:apple
---

# Summary
Objective-C is this period's clearest example of an orderly, vendor-managed decline, with no dramatic end. Apple's last real language additions (nullability annotations, lightweight generics, `__kindof`) shipped in 2015, and their purpose was to make Objective-C APIs import cleanly into Swift.[^wwdc15-interop] Since then the language has only received small compiler conveniences such as `objc_direct` (2019–2020).[^llvm-objc-direct][^nshipster-direct] Apple's new frameworks were built Swift-first or Swift-only: SwiftUI (2019), WidgetKit (SwiftUI-only) and App Intents ("Swift-native").[^app-intents] The ecosystem's main dependency manager, CocoaPods, freezes its trunk on 2026-12-02.[^cocoapods-readonly] Yet the installed base is enormous. Analyses of iOS system binaries show Swift *growing* quickly (+50% binaries containing Swift in both iOS 17 and iOS 18), while the bulk of the OS is still Objective-C and C.[^timac-ios17][^timac-ios18] Apple kept investing in the objc4 *runtime*: relative method lists saved about 40 MB per iPhone (2020).[^wwdc20-runtime] Verdict: declining, legacy-maintained, not dead. TIOBE 19th (0.81%) in Sept 2026.[^tiobe]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-03 | Swift 5 ABI stability removes the last technical reason to start new Apple code in Objective-C ([Swift](/languages/swift.md)) | − |
| E1 | 2019-06-03 | SwiftUI announced, Swift-only ([event](/events/2019-06-swiftui-announced.md)) | − |
| E1 | 2019-11 | Clang `objc_direct` direct methods (no `objc_msgSend` dispatch) [^llvm-objc-direct] | + |
| E1 | 2020-06 | WWDC20: Objective-C runtime advancements, ~40 MB memory saved per device [^wwdc20-runtime] | + |
| E2 | 2020–2022 | WidgetKit and App Intents ship as Swift/SwiftUI-only APIs [^app-intents] | − |
| E3 | 2023-10 | iOS 17 analysis: binaries with Swift up 50% year over year; Objective-C still the majority [^timac-ios17] | mixed |
| E3 | 2024-11-30 | CocoaPods announces trunk read-only plan [^cocoapods-readonly] | − |
| E4 | 2024-12 | iOS 18 analysis: Swift binaries up another 50%; 592 SwiftUI binaries [^timac-ios18] | − |
| E4 | 2026-03-24 | Swift 6.3 `@c` lets Swift export C APIs directly, eroding Objective-C's role as the glue layer [^swift-63] | − |
| E4 | 2026-12-02 | (scheduled) CocoaPods trunk becomes read-only [^cocoapods-readonly] | − |

# Ideas it bet on
| Idea | Outcome for Objective-C |
|---|---|
| Dynamic message dispatch / runtime reflection | Survives as an interop substrate. Swift's `@objc` and KVO still rely on it. |
| [Null safety](/ideas/types/null-safety.md) (nullability annotations) | Partial. The annotations exist mainly so Swift can import APIs as optionals.[^wwdc15-interop] |
| [FFI modernisation](/ideas/platforms-and-portability/ffi-modernization.md) | Being superseded. Swift–C++ interop and Swift `@c` bypass the Objective-C bridge.[^swift-63] |
| [Built-in dependency management](/ideas/tooling-and-ecosystem/dependency-management-built-in.md) | Lost. CocoaPods (an Objective-C-era tool) gave way to SwiftPM.[^cocoapods-readonly] |

# What succeeded
- **Backward compatibility and interop.** Swift adoption in Apple's own OS ran through mixed Objective-C/Swift binaries, and the transition happened without a flag day.[^timac-ios18]
- **Runtime engineering.** Apple kept tuning the objc4 runtime: relative method lists, faster dispatch caches and direct methods. Billions of devices still run this code.[^wwdc20-runtime][^nshipster-direct]

# What failed or stalled
- **Language evolution stopped.** After 2015, no generics beyond erased "lightweight" ones, no modules redesign and no concurrency model. Swift absorbed all new design work.[^wwdc15-interop]
- **Shut out of new APIs.** Swift-only frameworks mean new platform features are unreachable from Objective-C without Swift wrappers.[^app-intents]
- **Ecosystem shrinking.** CocoaPods' freeze ends the package-manager era Objective-C grew up with.[^cocoapods-readonly] Objective-C is not among the top languages in the 2025 Stack Overflow usage list.[^so-2025]

# By era
## E1
Swift becomes ABI-stable and SwiftUI launches. Apple still adds `objc_direct` and runtime optimisations.[^llvm-objc-direct][^wwdc20-runtime]
## E2
Swift-only frameworks (WidgetKit, App Intents) mark the point where new platform features skip Objective-C.[^app-intents]
## E3
iOS 17 analysis shows Swift growing fast inside Apple. CocoaPods announces its freeze.[^timac-ios17][^cocoapods-readonly]
## E4
Swift `@c` export and C++ interop reduce the need for Objective-C as glue. CocoaPods trunk freezes in Dec 2026.[^swift-63][^cocoapods-readonly]

# Lessons
- A platform owner can retire a language gracefully if the successor has first-class bidirectional interop and the old runtime stays supported. Objective-C → Swift is the model that [Kotlin](/languages/kotlin.md) → Java and the [C++ successor languages](/ideas/memory-safety/cpp-successor-languages.md) aspire to.
- Freezing a language and adding only interop annotations is cheaper than evolving two languages. The annotations' real customer was the successor language.
- TIOBE-style indices lag badly for legacy languages. Search volume from maintenance work keeps Objective-C near the top 20 long after new development moved on.[^tiobe]

# Related
- [Swift](/languages/swift.md), [C](/languages/c.md), [C++](/languages/cpp.md)
- [FFI modernization](/ideas/platforms-and-portability/ffi-modernization.md)
- [Visual Basic](/languages/visual-basic.md) (another vendor-frozen language)

[^tiobe]: TIOBE Index, September 2026 — https://www.tiobe.com/tiobe-index/
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^wwdc15-interop]: WWDC15, Swift and Objective-C Interoperability — https://developer.apple.com/videos/play/wwdc2015/401/
[^nshipster-direct]: NSHipster, Objective-C Direct Methods — https://nshipster.com/direct/
[^llvm-objc-direct]: LLVM D69991, objc_direct — https://reviews.llvm.org/D69991
[^wwdc20-runtime]: WWDC20, Advancements in the Objective-C runtime — https://developer.apple.com/videos/play/wwdc2020/10163/
[^timac-ios17]: Timac, Swift and SwiftUI in iOS 17 — https://blog.timac.org/2023/1019-state-of-swift-and-swiftui-ios17/
[^timac-ios18]: Timac, Swift and SwiftUI in iOS 18 — https://blog.timac.org/2024/1208-state-of-swift-and-swiftui-ios18/
[^cocoapods-readonly]: CocoaPods Trunk Read-only Plan — https://blog.cocoapods.org/CocoaPods-Specs-Repo/
[^app-intents]: Apple Tech Talk, Migrate custom intents to App Intents — https://developer.apple.com/videos/play/tech-talks/10168/
[^swift-63]: Swift 6.3 Released — https://www.swift.org/blog/swift-6.3-released/
