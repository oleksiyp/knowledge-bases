---
type: Event
title: Apple announces SwiftUI at WWDC 2019
description: "On 2019-06-03 Apple unveiled SwiftUI, a declarative UI framework usable only from Swift. It made Swift the required language for Apple's future UI work. Adoption was slow and partial: years later many teams still wrapped SwiftUI in UIKit shells."
event_kind: announcement
date: 2019-06-03
era: E1
impact: positive
languages: [languages/swift, languages/objective-c]
runtimes: []
ideas: [ideas/concurrency/signals-and-fine-grained-reactivity, ideas/tooling-and-ecosystem/hot-reload-and-live-programming]
tags: [swift, swiftui, apple, declarative-ui, wwdc]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: apple-newsroom
    resource: https://www.apple.com/in/newsroom/2019/06/apple-unveils-groundbreaking-new-technologies-for-app-development/
    title: "Apple Newsroom: Apple unveils groundbreaking new technologies for app development (2019-06-03)"
    author: org:apple
  - id: squires-ready
    resource: https://www.jessesquires.com/blog/2021/07/01/is-swiftui-ready/
    title: "Jesse Squires: Is SwiftUI ready? (2021-07-01)"
  - id: timac-ios18
    resource: https://blog.timac.org/2024/1208-state-of-swift-and-swiftui-ios18/
    title: "Timac: Apple's use of Swift and SwiftUI in iOS 18"
  - id: swift-5
    resource: https://www.swift.org/blog/swift-5-released/
    title: "Swift.org: Swift 5 Released! (ABI stability)"
    author: org:apple
---

# What happened
At WWDC on 2019-06-03 Apple introduced SwiftUI, "an innovative new way to build user interfaces across all Apple platforms" with live Xcode previews.[^apple-newsroom] It shipped with iOS 13 and macOS Catalina and depended on Swift 5.1 features (function builders, property wrappers, opaque return types). The framework came only three months after Swift 5 made the Swift runtime part of the OS.[^swift-5]

# Why it matters
SwiftUI settled the Objective-C → Swift question for UI code, because Apple's new UI framework could not be used from Objective-C. It also moved Apple to React/Flutter-style declarative UI. Its maturation was slow. In a 2021 developer poll by Jesse Squires, 45.7% said SwiftUI was not ready for production, and the recommended practice was a "UIKit shell" with SwiftUI views inside. The yearly OS-tied release cycle without back-deployment was a common complaint.[^squires-ready] Apple's own adoption grew steadily: 592 SwiftUI binaries in iOS 18, more than 50% growth year over year, and Calculator and Passwords rebuilt on it.[^timac-ios18] Verdict: succeeded strategically but adoption was gradual. Tying a UI framework to OS releases slows uptake compared with library-shipped frameworks like Flutter or Compose.

# Related
- [Swift](/languages/swift.md), [Objective-C](/languages/objective-c.md)
- [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md) (Compose as the Android counterpart)
- [Compose Multiplatform iOS stable](/events/2025-05-compose-multiplatform-ios-stable.md)

[^apple-newsroom]: Apple Newsroom, new technologies for app development — https://www.apple.com/in/newsroom/2019/06/apple-unveils-groundbreaking-new-technologies-for-app-development/
[^squires-ready]: Jesse Squires, Is SwiftUI ready? — https://www.jessesquires.com/blog/2021/07/01/is-swiftui-ready/
[^timac-ios18]: Timac, Swift and SwiftUI in iOS 18 — https://blog.timac.org/2024/1208-state-of-swift-and-swiftui-ios18/
[^swift-5]: Swift 5 Released! — https://www.swift.org/blog/swift-5-released/
