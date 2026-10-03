---
type: Language
title: Kotlin
description: "JetBrains' pragmatic JVM language won Android outright (Kotlin-first 2019, 92% of pro Android devs by 2026) and built a credible multiplatform story. Outside Android and Spring backends it stays mid-table (TIOBE #26), as Java absorbed many of its selling points."
tags: [jvm, android, multiplatform, jetbrains, coroutines, null-safety]
paradigms: [object-oriented, functional, multi-paradigm]
typing: static
memory_model: gc
first_released: 2016
steward: JetBrains (language and compiler); Kotlin Foundation (JetBrains + Google, trademark and grants)
governance: single-vendor
trajectory: growing
ideas:
  - ideas/types/null-safety
  - ideas/concurrency/structured-concurrency
  - ideas/platforms-and-portability/kotlin-multiplatform
  - ideas/runtime-performance/aot-native-images
  - ideas/metaprogramming/source-generators-and-annotation-processing
  - ideas/types/sum-types-and-pattern-matching
  - ideas/platforms-and-portability/ffi-modernization
runtimes: [runtimes/hotspot-openjdk, runtimes/android-art, runtimes/llvm]
adoption_signals:
  tiobe_rank: { value: 26, as_of: 2026-09 }
  so_survey_usage_pct: { value: 10.8, as_of: 2025 }
  android_pro_dev_usage_pct: { value: 92, as_of: 2026-05 }
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: kotlin-13
    resource: https://blog.jetbrains.com/kotlin/2018/10/kotlin-1-3/
    title: "JetBrains Blog: Kotlin 1.3 released — coroutines, Kotlin/Native beta, multiplatform"
    author: org:jetbrains
  - id: android-kotlin-first
    resource: https://developer.android.com/kotlin/first
    title: "Android Developers: Android's Kotlin-first approach"
  - id: reg-kotlin-first
    resource: https://www.theregister.com/software/2019/05/09/youre-not-still-writing-android-apps-in-oracles-java-are-you-google-tut-tuts-at-dev-conf/882039
    title: "The Register: Google tut-tuts Java at I/O 2019"
  - id: kn-mm
    resource: https://kotlinlang.org/docs/native-migration-guide.html
    title: "kotlinlang.org: Migrate to the new memory manager"
  - id: kotlin-1720
    resource: https://blog.jetbrains.com/kotlin/2022/09/kotlin-1-7-20-released/
    title: "JetBrains Blog: Kotlin 1.7.20 Released"
    author: org:jetbrains
  - id: kotlin-2
    resource: https://blog.jetbrains.com/kotlin/2024/05/celebrating-kotlin-2-0-fast-smart-and-multiplatform/
    title: "JetBrains Blog: Celebrating Kotlin 2.0 — Fast, Smart, and Multiplatform"
    author: org:jetbrains
  - id: infoworld-k2
    resource: https://www.infoworld.com/article/2337011/jetbrains-debuts-kotlin-200-with-k2-compiler-performance-boost.html
    title: "InfoWorld: JetBrains debuts Kotlin 2.0.0 with K2 compiler performance boost"
  - id: ctx-params
    resource: https://blog.jetbrains.com/kotlin/2025/04/update-on-context-parameters/
    title: "JetBrains Blog: Update on Context Parameters"
    author: org:jetbrains
  - id: whatsnew22
    resource: https://kotlinlang.org/docs/whatsnew22.html
    title: "kotlinlang.org: What's new in Kotlin 2.2.0"
  - id: whatsnew24
    resource: https://kotlinlang.org/docs/whatsnew24.html
    title: "kotlinlang.org: What's new in Kotlin 2.4.0"
  - id: cmp-ios
    resource: https://blog.jetbrains.com/kotlin/2025/05/compose-multiplatform-1-8-0-released-compose-multiplatform-for-ios-is-stable-and-production-ready/
    title: "JetBrains Blog: Compose Multiplatform 1.8.0 — iOS stable"
    author: org:jetbrains
  - id: spring-partner
    resource: https://blog.jetbrains.com/kotlin/2025/05/strategic-partnership-with-spring/
    title: "JetBrains Blog: Strengthening Kotlin for Backend Development — A Strategic Partnership With Spring"
    author: org:jetbrains
  - id: kotlinconf26
    resource: https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/
    title: "JetBrains Blog: KotlinConf'26 Keynote Highlights"
    author: org:jetbrains
  - id: kotlin-lsp
    resource: https://github.com/Kotlin/kotlin-lsp
    title: "GitHub: Kotlin/kotlin-lsp"
  - id: tiobe
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index, September 2026"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
---

# Summary
Kotlin is the clearest example from 2018–2026 of a **platform-anointed language** succeeding. Kotlin 1.3 (Oct 2018) stabilised coroutines.[^kotlin-13] At Google I/O in May 2019 Android declared itself "Kotlin-first", when over 50% of professional Android developers already used Kotlin.[^reg-kotlin-first][^android-kotlin-first] By KotlinConf'26 JetBrains reported 92% of professional Android developers using it.[^kotlinconf26] Jetpack Compose, Android's modern UI toolkit, is Kotlin-only, which made the choice permanent.

The second bet, sharing code across platforms (Kotlin Multiplatform, KMP), took much longer. The original Kotlin/Native memory model, built on freezing objects shared between threads, was a design mistake. It blocked iOS adoption until a new memory manager became the default in 1.7.20 (2022).[^kn-mm][^kotlin-1720] KMP went stable in Nov 2023 and Compose Multiplatform for iOS in May 2025.[^cmp-ios] The K2 compiler rewrite shipped as Kotlin 2.0 in May 2024.[^kotlin-2] Context receivers were abandoned and replaced by context parameters, which became stable in 2.4 (2026).[^ctx-params][^whatsnew24]

Verdict: **succeeded on Android, succeeding on multiplatform, stable but not breaking out elsewhere**. It is TIOBE #26 and used by 10.8% of SO 2025 respondents, and Java's catch-up (records, sealed types, virtual threads) narrowed the gap on the server.[^tiobe][^so-2025]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-10-29 | Kotlin 1.3: coroutines stable, Kotlin/Native beta [^kotlin-13] | + |
| E1 | 2019-05-07 | Google I/O: Android goes Kotlin-first ([event](/events/2019-05-android-kotlin-first.md)) [^android-kotlin-first] | + |
| E2 | 2021-07 | Jetpack Compose 1.0 (Kotlin-only UI toolkit) | + |
| E2 | 2022-09 | Kotlin 1.7.20: new Kotlin/Native memory manager on by default; freezing deprecated [^kotlin-1720][^kn-mm] | mixed |
| E3 | 2023-11 | Kotlin Multiplatform declared stable ([event](/events/2023-11-kotlin-multiplatform-stable.md)) | + |
| E3 | 2024-05-21 | Kotlin 2.0 with the K2 compiler ([event](/events/2024-05-kotlin-2-0-k2-compiler.md)) [^kotlin-2] | + |
| E4 | 2025-04 | Context receivers deprecated in favour of context parameters [^ctx-params] | − |
| E4 | 2025-05 | Compose Multiplatform iOS stable ([event](/events/2025-05-compose-multiplatform-ios-stable.md)); Spring partnership; Kotlin LSP preview [^cmp-ios][^spring-partner] | + |
| E4 | 2026-05 | KotlinConf'26: Kotlin Toolchain, LSP Alpha; KMP adoption "more than doubled" in a year [^kotlinconf26] | + |
| E4 | 2026-06 | Kotlin 2.4: context parameters and explicit backing fields stable [^whatsnew24] | + |

# Ideas it bet on
| Idea | Outcome for Kotlin |
|---|---|
| [Null safety](/ideas/types/null-safety.md) | succeeded; it was the main reason Android teams switched |
| [Structured concurrency](/ideas/concurrency/structured-concurrency.md) | succeeded: kotlinx.coroutines made it mainstream on the JVM |
| [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md) | succeeding after a slow start |
| [AOT native images](/ideas/runtime-performance/aot-native-images.md) (Kotlin/Native) | mixed: viable for iOS, niche elsewhere |
| [Source generators / annotation processing](/ideas/metaprogramming/source-generators-and-annotation-processing.md) | succeeded: KSP replaced kapt |
| [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md) | adopted (sealed classes and `when`), later matched by Java |

# What succeeded
- **Android monopoly.** Kotlin-first (2019) plus Compose made Kotlin the default for Android, and 92% of professional Android developers use it.[^kotlinconf26][^android-kotlin-first]
- **Coroutines and structured concurrency.** Kotlin brought structured concurrency to millions of developers years before Java's API, which was still in preview in 2026.[^kotlin-13]
- **K2 compiler.** One frontend for JVM, JS, Wasm and Native, with compilation up to 94% faster on some projects. It was validated on 10M lines of code before release.[^infoworld-k2]
- **Multiplatform turnaround.** After the memory-model fix, KMP and Compose Multiplatform for iOS reached stable and gave Kotlin a "share logic, optionally share UI" story against Flutter and React Native.[^cmp-ios][^kotlinconf26]
- **Backend foothold.** Nearly half of Kotlin developers use it on the backend, and the 2025 Spring partnership committed to Kotlin-first null safety and documentation in Spring.[^spring-partner]

# What failed or stalled
- **Kotlin/Native's first memory model.** Freezing and strict object-sharing rules made concurrent iOS code painful and held back KMP for about four years. The legacy memory manager was removed in 1.9.20.[^kn-mm]
- **Context receivers.** Shipped as experimental in 2022, then deprecated and redesigned as context parameters with mandatory names. Early adopters such as Arrow had to migrate.[^ctx-params][^whatsnew22]
- **No breakout beyond the JVM and Android.** It is TIOBE #26; 68% of Kotlin users also write Java (SO 2025, unverified), so most teams are bilingual rather than Kotlin-only.[^tiobe][^so-2025]
- **Tooling lock-in.** Good tooling was IntelliJ-only until a partly closed-source LSP previewed in 2025.[^kotlin-lsp]
- **Java's catch-up.** Records, sealed types, pattern matching and virtual threads removed several of Kotlin's server-side arguments (see [Java](/languages/java.md)).

# By era
## E1
Coroutines went stable and Google endorsed Kotlin-first. Kotlin/Native and "KMM" stayed experimental.
## E2
Jetpack Compose 1.0 tied Android's UI future to Kotlin. The new Kotlin/Native memory manager finally removed the iOS concurrency blocker.
## E3
KMP stable (Nov 2023) and K2 / Kotlin 2.0 (May 2024) were the main engineering milestones.
## E4
Compose Multiplatform for iOS went stable, along with the Spring partnership, the LSP and context parameters. Growth now comes mainly from multiplatform and backend use, not Android.

# Lessons
- A platform owner's endorsement (Google) is the strongest adoption lever for a new language. Kotlin also had seamless Java interop, so it could be adopted one file at a time.
- Getting the concurrency/memory model wrong on a new target can cost years. KMP waited on a runtime fix, not on features.
- When the host language catches up, a "better Java" has to find new ground. Kotlin found it in multiplatform and in tooling and AI integration.

# Related
- [Java](/languages/java.md), [Swift](/languages/swift.md), [Scala](/languages/scala.md), [Dart](/languages/dart.md)
- [HotSpot / OpenJDK](/runtimes/hotspot-openjdk.md), [Android ART](/runtimes/android-art.md)
- [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md)

[^kotlin-13]: JetBrains: Kotlin 1.3 — https://blog.jetbrains.com/kotlin/2018/10/kotlin-1-3/
[^android-kotlin-first]: Android's Kotlin-first approach — https://developer.android.com/kotlin/first
[^reg-kotlin-first]: The Register, 2019-05-09 — https://www.theregister.com/software/2019/05/09/youre-not-still-writing-android-apps-in-oracles-java-are-you-google-tut-tuts-at-dev-conf/882039
[^kn-mm]: Migrate to the new memory manager — https://kotlinlang.org/docs/native-migration-guide.html
[^kotlin-1720]: Kotlin 1.7.20 Released — https://blog.jetbrains.com/kotlin/2022/09/kotlin-1-7-20-released/
[^kotlin-2]: Celebrating Kotlin 2.0 — https://blog.jetbrains.com/kotlin/2024/05/celebrating-kotlin-2-0-fast-smart-and-multiplatform/
[^infoworld-k2]: InfoWorld on Kotlin 2.0 — https://www.infoworld.com/article/2337011/jetbrains-debuts-kotlin-200-with-k2-compiler-performance-boost.html
[^ctx-params]: Update on Context Parameters — https://blog.jetbrains.com/kotlin/2025/04/update-on-context-parameters/
[^whatsnew22]: What's new in Kotlin 2.2.0 — https://kotlinlang.org/docs/whatsnew22.html
[^whatsnew24]: What's new in Kotlin 2.4.0 — https://kotlinlang.org/docs/whatsnew24.html
[^cmp-ios]: Compose Multiplatform 1.8.0 — https://blog.jetbrains.com/kotlin/2025/05/compose-multiplatform-1-8-0-released-compose-multiplatform-for-ios-is-stable-and-production-ready/
[^spring-partner]: Kotlin and Spring partnership — https://blog.jetbrains.com/kotlin/2025/05/strategic-partnership-with-spring/
[^kotlinconf26]: KotlinConf'26 Keynote Highlights — https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/
[^kotlin-lsp]: Kotlin LSP — https://github.com/Kotlin/kotlin-lsp
[^tiobe]: TIOBE Index — https://www.tiobe.com/tiobe-index/
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
