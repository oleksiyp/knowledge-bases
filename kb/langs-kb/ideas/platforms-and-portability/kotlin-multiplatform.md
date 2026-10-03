---
type: Idea
title: Kotlin Multiplatform (share logic natively, optionally share UI)
description: "Compile one Kotlin codebase to JVM, Android, native iOS/desktop binaries, JavaScript and Wasm, sharing business logic while keeping native UI — with Compose Multiplatform as an optional shared-UI layer. After a painful 2018–2022 (iOS memory model, alpha tooling), KMP went stable in Nov 2023, won Google's official backing in May 2024, and Compose for iOS went stable in May 2025; usage in JetBrains' survey rose from 7% to 18% in a year. Verdict: succeeding, but still third behind Flutter and React Native for shared UI."
area: platforms-and-portability
tags: [kotlin-multiplatform, kmp, kmm, compose-multiplatform, kotlin-native, cross-platform, mobile, ios, flutter, react-native]
outcome: succeeding
maturity_2026: adopted
origin_year: 2017
mainstream_year: 2023
languages: [languages/kotlin, languages/swift, languages/objective-c, languages/dart, languages/javascript]
runtimes: [runtimes/android-art, runtimes/hotspot-openjdk, runtimes/llvm, runtimes/hermes]
related_ideas: [ideas/runtime-performance/aot-native-images, ideas/platforms-and-portability/ffi-modernization, ideas/platforms-and-portability/webassembly-in-the-browser, ideas/tooling-and-ecosystem/hot-reload-and-live-programming]
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: kmm-alpha
    resource: https://blog.jetbrains.com/kotlin/2020/08/kotlin-multiplatform-mobile-goes-alpha/
    title: "JetBrains Blog: Kotlin Multiplatform Mobile Goes Alpha (Aug 2020)"
    author: org:jetbrains
  - id: kmm-beta
    resource: https://blog.jetbrains.com/kotlin/2022/10/kmm-beta/
    title: "JetBrains Blog: Kotlin Multiplatform Mobile Is in Beta (Oct 2022)"
    author: org:jetbrains
  - id: kn-mm
    resource: https://kotlinlang.org/docs/whatsnew1720.html
    title: "kotlinlang.org: What's new in Kotlin 1.7.20 (new memory manager by default)"
    author: org:jetbrains
  - id: kn-migration
    resource: https://kotlinlang.org/docs/native-migration-guide.html
    title: "kotlinlang.org: Migrate to the new memory manager"
    author: org:jetbrains
  - id: kmp-name
    resource: https://blog.jetbrains.com/kotlin/2023/07/update-on-the-name-of-kotlin-multiplatform/
    title: "JetBrains Blog: Update on the Name of Kotlin Multiplatform (July 2023)"
    author: org:jetbrains
  - id: kmp-stable
    resource: https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable/
    title: "JetBrains Blog: Kotlin Multiplatform Is Stable and Production-Ready (Nov 2023)"
    author: org:jetbrains
  - id: google-kmp
    resource: https://android-developers.googleblog.com/2024/05/android-support-for-kotlin-multiplatform-to-share-business-logic-across-mobile-web-server-desktop.html
    title: "Android Developers Blog: Android Support for Kotlin Multiplatform (2024-05-14)"
    author: org:google
  - id: cmp-ios-stable
    resource: https://blog.jetbrains.com/kotlin/2025/05/compose-multiplatform-1-8-0-released-compose-multiplatform-for-ios-is-stable-and-production-ready/
    title: "JetBrains Blog: Compose Multiplatform 1.8.0 — Compose for iOS Is Stable and Production-Ready (May 2025)"
    author: org:jetbrains
  - id: kotlinconf26
    resource: https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/
    title: "JetBrains Blog: KotlinConf'26 Keynote Highlights (May 2026)"
    author: org:jetbrains
  - id: kmp-reasons
    resource: https://kotlinlang.org/docs/multiplatform/multiplatform-reasons-to-try.html
    title: "kotlinlang.org: Ten reasons to adopt Kotlin Multiplatform (7% → 18% usage, Developer Ecosystem surveys)"
    author: org:jetbrains
  - id: so-flutter-rn
    resource: https://quashbugs.com/blog/flutter-vs-react-native-statistics
    title: "Quash: Flutter vs React Native statistics (Stack Overflow survey usage 2021–2024)"
  - id: rn-076
    resource: https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture
    title: "React Native Blog: 0.76 — New Architecture by default (2024-10-23)"
    author: org:meta
  - id: flutter-layoffs
    resource: https://www.theregister.com/2024/04/29/google_python_flutter_layoffs/
    title: "The Register: Google layoffs hit Python and Flutter teams (2024-04-29)"
---

# Summary
**Succeeding.** Kotlin Multiplatform (KMP) bet on a different cross-platform philosophy from Flutter and React Native: compile *the same language natively* for each platform, share business logic, and let teams keep native UI (or opt into shared UI via Compose Multiplatform). The first five years were rough — an alpha SDK (Aug 2020), a Kotlin/Native memory model that required "freezing" objects across threads and broke coroutines, and constant Gradle churn.[^kmm-alpha][^kn-migration] Fixing the memory model (default in 1.7.20, Sept 2022) unlocked everything that followed: Stable in Kotlin 1.9.20 (Nov 2023), official Android/Google support with Google Docs shipping on it (May 2024), Compose Multiplatform for iOS Stable (May 2025) and Compose Web Beta (Sept 2025).[^kn-mm][^kmp-stable][^google-kmp][^cmp-ios-stable][^kotlinconf26] JetBrains reports usage rising from 7% to 18% of surveyed developers between its 2024 and 2025 surveys and "top apps using KMP more than doubled" by 2026.[^kmp-reasons][^kotlinconf26] It remains behind Flutter and React Native for full shared-UI apps.

# The idea
Kotlin has three backends — JVM, JavaScript/Wasm, and Kotlin/Native (LLVM-based AOT) — and a source-set model (`commonMain`, `iosMain`, …) with `expect`/`actual` declarations for platform-specific APIs. On iOS, the shared module compiles to a native framework consumed from Swift/Objective-C. Unlike Flutter (own renderer, Dart VM/AOT) or React Native (JS engine plus native views), KMP adds no runtime layer on Android and an AOT-compiled library on iOS. Prior art: Xamarin (C#/Mono, 2011), J2ObjC (Google, 2014), Kotlin multiplatform projects (Kotlin 1.2, 2017).

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018–2020 | Kotlin/Native strict memory model: objects must be frozen to cross threads; coroutines limited on iOS[^kn-migration] | − |
| E1 | 2020-08 | Kotlin Multiplatform Mobile (KMM) goes Alpha with Android Studio plugin[^kmm-alpha] | + |
| E2 | 2022-09 | Kotlin 1.7.20: new memory manager on by default; freezing deprecated (legacy MM removed in 1.9.20)[^kn-mm] | + |
| E2 | 2022-10 | KMM Beta[^kmm-beta] | + |
| E3 | 2023-07 | "KMM" name retired; everything is "Kotlin Multiplatform"[^kmp-name] | mixed |
| E3 | 2023-11 | KMP Stable in Kotlin 1.9.20 (Netflix, McDonald's, Philips, Baidu cited); Compose for iOS still Alpha[^kmp-stable] | + |
| E3 | 2024-05 | Google I/O: official Android support for KMP for business logic; Google Docs ships shared logic; Room/DataStore go multiplatform[^google-kmp] | + |
| E4 | 2024-10 | React Native 0.76 makes its New Architecture default — competitor strengthens[^rn-076] | − |
| E4 | 2025-05 | Compose Multiplatform 1.8.0: iOS Stable (≈9 MB size overhead vs SwiftUI)[^cmp-ios-stable] | + |
| E4 | 2025-09 | Compose Multiplatform for Web reaches Beta[^kotlinconf26] | + |
| E4 | 2026-05 | KotlinConf'26: top apps using KMP "more than doubled"; 3,500+ libraries on klibs.io; Swift export Alpha in Kotlin 2.4; Kotlin/Native builds 25% faster[^kotlinconf26] | + |

# Where it succeeded
- **Logic sharing in large native apps.** The "share the boring parts" pitch fits companies with strong native iOS and Android teams that won't rewrite UI: Netflix, McDonald's, Philips, Google Docs, plus (by 2026) PayPal, Booking.com, Sony and Duolingo.[^kmp-stable][^google-kmp][^kotlinconf26]
- **Google's endorsement** turned KMP from a JetBrains bet into an Android-platform direction: Jetpack libraries (Room, DataStore, Lifecycle, ViewModel) became multiplatform.[^google-kmp]
- **Incremental adoption.** A team can add one shared module to an existing app — far lower migration risk than a Flutter or React Native rewrite.
- **Survey momentum:** 7% → 18% usage in JetBrains' Developer Ecosystem surveys (2024→2025).[^kmp-reasons]

# Where it failed or stalled
- **The lost years (2018–2022).** The original Kotlin/Native memory model was a self-inflicted wound: JetBrains itself says it "blocked the adoption" of KMM because concurrency on iOS was so hard.[^kn-migration] Flutter used that window to win mindshare.
- **iOS developer experience.** Swift sees shared Kotlin through an Objective-C header; idiomatic Swift export only reached Alpha in 2026, and third-party tools (e.g. Touchlab's SKIE) filled the gap.[^kotlinconf26]
- **Shared UI is late.** Compose for iOS took until May 2025 to stabilise and Web is only Beta, so for "one UI everywhere" Flutter and React Native remain the defaults; Stack Overflow usage for Flutter and React Native was 9.4% and 8.4% respectively in 2024 (KMP is not listed separately in that survey).[^so-flutter-rn][^cmp-ios-stable]
- **Kotlin/JS** remained marginal next to TypeScript; JetBrains' web bet shifted to Kotlin/Wasm.

# Why
1. **It aligns with incentives of native teams.** KMP does not ask iOS engineers to abandon Swift/SwiftUI; it asks them to consume a library. This lowers organisational resistance, which is what usually kills cross-platform rewrites.
2. **Two corporate stewards with aligned interests.** JetBrains monetises IDEs and needs Kotlin to grow beyond Android; Google needs Android developers to stay productive without forcing Dart. Google's own 2024 Flutter/Dart layoffs (alongside Python) fuelled doubts about Flutter's priority, even though Google denied a strategic retreat.[^flutter-layoffs]
3. **Technical debt had to be repaid first.** The memory-model rewrite (2020–2022) and Gradle/K2 compiler work are why stable status came 6 years after the first multiplatform release.[^kn-mm]
4. **Network effects favour incumbents for shared UI.** Flutter (2018) and React Native (2015) had years of widgets, plugins and hiring pools; Compose Multiplatform must re-create that on iOS, where its rendering is non-native (Skia), the same trade-off that critics raise with Flutter.

# Lessons
- "Share logic, not UI" is the lowest-risk cross-platform idea; it wins enterprise adoption even when it loses developer-hype contests.
- A broken concurrency/memory model can freeze an otherwise promising platform for years; fixing it is a prerequisite, not a feature.
- Endorsement by the platform owner (Google for Android) matters more than any language feature.

# Related
- [Kotlin](/languages/kotlin.md), [Swift](/languages/swift.md), [Dart](/languages/dart.md), [Android ART](/runtimes/android-art.md)
- [AOT native images](/ideas/runtime-performance/aot-native-images.md), [FFI modernization](/ideas/platforms-and-portability/ffi-modernization.md), [WebAssembly in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md), [Hot reload](/ideas/tooling-and-ecosystem/hot-reload-and-live-programming.md)
- Events: [KMP stable](/events/2023-11-kotlin-multiplatform-stable.md), [Compose Multiplatform iOS stable](/events/2025-05-compose-multiplatform-ios-stable.md), [Android Kotlin-first](/events/2019-05-android-kotlin-first.md), [Kotlin 2.0 K2](/events/2024-05-kotlin-2-0-k2-compiler.md)

[^kmm-alpha]: JetBrains: Kotlin Multiplatform Mobile Goes Alpha — https://blog.jetbrains.com/kotlin/2020/08/kotlin-multiplatform-mobile-goes-alpha/
[^kmm-beta]: JetBrains: Kotlin Multiplatform Mobile Is in Beta — https://blog.jetbrains.com/kotlin/2022/10/kmm-beta/
[^kn-mm]: What's new in Kotlin 1.7.20 — https://kotlinlang.org/docs/whatsnew1720.html
[^kn-migration]: Migrate to the new memory manager — https://kotlinlang.org/docs/native-migration-guide.html
[^kmp-name]: JetBrains: Update on the Name of Kotlin Multiplatform — https://blog.jetbrains.com/kotlin/2023/07/update-on-the-name-of-kotlin-multiplatform/
[^kmp-stable]: JetBrains: Kotlin Multiplatform Is Stable and Production-Ready — https://blog.jetbrains.com/kotlin/2023/11/kotlin-multiplatform-stable/
[^google-kmp]: Android Developers Blog: Android Support for KMP — https://android-developers.googleblog.com/2024/05/android-support-for-kotlin-multiplatform-to-share-business-logic-across-mobile-web-server-desktop.html
[^cmp-ios-stable]: JetBrains: Compose Multiplatform 1.8.0 — https://blog.jetbrains.com/kotlin/2025/05/compose-multiplatform-1-8-0-released-compose-multiplatform-for-ios-is-stable-and-production-ready/
[^kotlinconf26]: JetBrains: KotlinConf'26 Keynote Highlights — https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/
[^kmp-reasons]: kotlinlang.org: Ten reasons to adopt KMP — https://kotlinlang.org/docs/multiplatform/multiplatform-reasons-to-try.html
[^so-flutter-rn]: Quash: Flutter vs React Native statistics — https://quashbugs.com/blog/flutter-vs-react-native-statistics
[^rn-076]: React Native 0.76 — https://reactnative.dev/blog/2024/10/23/release-0.76-new-architecture
[^flutter-layoffs]: The Register: Google layoffs hit Python and Flutter teams — https://www.theregister.com/2024/04/29/google_python_flutter_layoffs/
