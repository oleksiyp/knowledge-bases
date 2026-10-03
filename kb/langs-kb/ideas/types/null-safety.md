---
type: Idea
title: Null safety in the type system
description: "Making 'may be null' part of a type (T vs T?) so the compiler rejects unchecked dereferences. Between 2018 and 2026 it became table stakes: Kotlin-first Android, C# 8 nullable reference types (2019), Dart's sound null safety (2021, mandatory in Dart 3) and TypeScript 6 making strict the default (2026). Java is the big holdout: annotations (JSpecify 1.0, Spring 7) only, with language-level null-restricted types split out of Valhalla's JDK 28 work. Verdict: succeeded."
area: types
tags: [null-safety, optionals, nullable-reference-types, kotlin, csharp, dart, swift, jspecify, valhalla, billion-dollar-mistake]
outcome: succeeded
maturity_2026: mainstream
origin_year: 1973
mainstream_year: 2014
languages: [languages/kotlin, languages/csharp, languages/swift, languages/dart, languages/typescript, languages/java, languages/rust, languages/go]
runtimes: [runtimes/hotspot-openjdk, runtimes/dotnet-clr]
related_ideas: [ideas/types/sum-types-and-pattern-matching, ideas/runtime-performance/value-types, ideas/types/gradual-typing-for-dynamic-languages, ideas/types/typescript-structural-typing-wins]
era_momentum: { E1: up, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: android-kotlin-crash
    resource: https://developer.android.com/kotlin/build-better-apps
    title: "Android Developers: Build better apps with Kotlin (apps using Kotlin 20% less likely to crash)"
    author: org:google
  - id: android-kotlin-first
    resource: https://developer.android.com/kotlin/first
    title: "Android Developers: Android's Kotlin-first approach"
    author: org:google
  - id: netcore3
    resource: https://devblogs.microsoft.com/dotnet/announcing-net-core-3-0/
    title: ".NET Blog: Announcing .NET Core 3.0 (2019-09-23)"
    author: org:microsoft
  - id: cs-nrt-docs
    resource: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types
    title: "Microsoft Learn: Nullable reference types (C# reference)"
    author: org:microsoft
  - id: runtime-41720
    resource: https://github.com/dotnet/runtime/issues/41720
    title: "dotnet/runtime #41720: nullable annotations throughout netcoreapp libraries (94% annotated by .NET 5)"
    author: org:microsoft
  - id: dart-sound
    resource: https://dart.dev/blog/announcing-sound-null-safety
    title: "Dart blog: Announcing sound null safety (Dart 2.12, March 2021)"
    author: org:google
  - id: dart3
    resource: https://dart.dev/blog/announcing-dart-3
    title: "Dart blog: Announcing Dart 3 (100% sound null safety)"
    author: org:google
  - id: ts6-strict
    resource: https://dev.to/davekurian/typescript-60-launches-strict-mode-by-default-and-drops-es5-support-n31
    title: "DEV: TypeScript 6.0 launches strict mode by default"
  - id: jspecify-1
    resource: https://jspecify.dev/blog/release-1.0.0/
    title: "JSpecify: Release 1.0.0 (2024-07-17)"
    author: org:jspecify
  - id: spring7-null
    resource: https://docs.spring.io/spring-framework/reference/core/null-safety.html
    title: "Spring Framework reference: Null-safety (JSpecify + NullAway in Spring 7)"
    author: org:broadcom
  - id: jdk-null-jep
    resource: https://bugs.openjdk.org/browse/JDK-8303099
    title: "OpenJDK JDK-8303099: JEP draft — Null-Restricted and Nullable Types (Preview)"
    author: org:openjdk
  - id: jvmweekly-valhalla
    resource: https://www.jvm-weekly.com/p/project-valhalla-explained-how-a
    title: "JVM Weekly vol. 180: Project Valhalla — how a decade of work arrives in JDK 28 (2026-06-18)"
---

# Summary
Tony Hoare's "billion-dollar mistake" was largely corrected in mainstream *application* languages during 2018–2026. Kotlin's `T?` became the default for Android after Google's 2019 "Kotlin-first" announcement. Google later reported that apps using Kotlin are 20% less likely to crash, citing null-pointer exceptions as the #1 crash cause on Play.[^android-kotlin-first][^android-kotlin-crash] C# 8 (September 2019) added *nullable reference types* as an opt-in warning layer, and .NET 6 templates enabled them by default.[^netcore3][^cs-nrt-docs] Dart went further: *sound* null safety in 2.12 (March 2021) and mandatory in Dart 3 (May 2023).[^dart-sound][^dart3] TypeScript 6.0 (2026) made `strict` (including `strictNullChecks`) the default.[^ts6-strict] **Java** still has no language-level null types. The ecosystem converged on JSpecify 1.0 annotations (2024), adopted by Spring Framework 7 in November 2025. The `Foo!`/`Foo?` syntax remains a draft JEP that was *split out* of Valhalla's JDK 28 delivery.[^jspecify-1][^spring7-null][^jdk-null-jep][^jvmweekly-valhalla] **Verdict: succeeded.** Null safety is now a baseline expectation, and the remaining debate is about soundness and migration strategy.

# The idea
- **What:** distinguish non-nullable `T` from nullable `T?` (or `Option<T>`/`Optional<T>`) in the type system, and require a check, safe-call (`?.`), default (`??`/`?:`) or explicit assertion (`!!`, `!`) before dereferencing a nullable value.
- **Prior art:** ML/Haskell `option`/`Maybe` (1970s–80s), Eiffel void safety (2005), Ceylon, Kotlin (1.0 in 2016), Swift optionals (2014), Rust `Option<T>` (no null at all).
- **Problem solved:** NPEs are the most common runtime failure in Java/C#/JS apps. Google identified them as the #1 crash cause on Google Play.[^android-kotlin-crash]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-05 | Google I/O: Android becomes Kotlin-first[^android-kotlin-first] | + |
| E1 | 2019-09-23 | C# 8 / .NET Core 3.0 ship nullable reference types (opt-in)[^netcore3] | + |
| E2 | 2020-11 | .NET 5: about 94% of core library assemblies annotated for nullability[^runtime-41720] | + |
| E2 | 2021-03 | Dart 2.12: sound null safety (opt-in per package)[^dart-sound] | + |
| E2 | 2021-11 | .NET 6: `<Nullable>enable</Nullable>` in all new-project templates[^cs-nrt-docs] | + |
| E3 | 2023-05 | Dart 3: null safety mandatory; legacy mode removed; 99% of top-1000 pub packages ready[^dart3] | + |
| E3 | 2024-07-17 | JSpecify 1.0: Java ecosystem agrees on `@Nullable`/`@NullMarked`[^jspecify-1] | + |
| E4 | 2025-11 | Spring Framework 7 / Boot 4 switch to JSpecify, checked with NullAway[^spring7-null] | + |
| E4 | 2026-03 | TypeScript 6.0 makes `strict` the default[^ts6-strict] | + |
| E4 | 2026-06 | JEP 401 (value classes) targets JDK 28; null-restricted types left for a future JEP[^jvmweekly-valhalla] | − |

# Where it succeeded
- **Kotlin on Android and server.** The headline adoption driver. Measured crash reductions (20% fewer crashes across top apps; Google Home cut NPE crashes by 33%) gave managers a business case.[^android-kotlin-crash]
- **Dart/Flutter.** A coordinated, tool-assisted migration (automated migrator, mixed-mode period, ecosystem tracking) achieved *sound* null safety across a whole package ecosystem in about two years, and then removed the unsound mode.[^dart-sound][^dart3]
- **C#.** Annotating the BCL first, then flipping template defaults in .NET 6, made NRTs the norm for new code without breaking old code.[^runtime-41720][^cs-nrt-docs]
- **Swift and Rust** never had the problem; their optionals were a core selling point.

# Where it failed or stalled
- **Java.** `Optional<T>` (2014) was intended only for return values and did not fix fields or parameters. Competing annotation sets (JSR-305, Checker Framework, JetBrains, Android, Spring) fragmented the ecosystem for a decade. JSpecify fixes the vocabulary, but checking still needs external tools (NullAway, IntelliJ, Kotlin interop).[^jspecify-1][^spring7-null] The language-level `!`/`?` proposal is still a draft and was decoupled from Valhalla's first delivery.[^jdk-null-jep][^jvmweekly-valhalla]
- **Unsoundness by design in C# and Kotlin interop.** C# NRTs are warnings only, erased at runtime, and easily suppressed with `!`. Kotlin's "platform types" for unannotated Java APIs let NPEs leak back in. These were pragmatic choices for incremental migration, but they leave holes.[^cs-nrt-docs]
- **Go** kept `nil` (including the typed-nil-in-interface trap) and added nothing comparable. Its 2022 generics work did not bring an `Option` type into the standard library.

# Why
1. **Interop budget decides soundness.** Dart controlled its whole ecosystem and could force soundness. C# and Kotlin had to interoperate with billions of lines of unannotated code, so they chose warnings and platform types: less safe, but adoptable.[^dart3][^cs-nrt-docs]
2. **Defaults flip adoption.** C# NRT usage took off when .NET 6 templates enabled them, and TypeScript's `strictNullChecks` became universal when TS 6.0 made strict the default.[^cs-nrt-docs][^ts6-strict]
3. **Platform-owner endorsement.** Google's Kotlin-first decision and its crash statistics gave null safety a measurable ROI, which few type-system features ever get.[^android-kotlin-crash]
4. **Java's compatibility constraints and priorities.** Adding nullness to every reference type affects generics, serialization and the JVM's type system. OpenJDK prioritised value classes (performance) and let annotations plus tools carry the near-term load.[^jvmweekly-valhalla]

# Lessons
- Annotate the standard library first, then flip defaults for new projects, then (if you can) remove the unsafe mode. Dart ran the full playbook; C# and TypeScript stopped at step two.
- Measured crash data is the strongest argument for a type-system feature.
- When a language moves too slowly, the ecosystem standardises around annotations (JSpecify), which reduces pressure on, and increases the compatibility burden of, a later language feature.

# Related
- [Kotlin](/languages/kotlin.md), [C#](/languages/csharp.md), [Swift](/languages/swift.md), [Dart](/languages/dart.md), [TypeScript](/languages/typescript.md), [Java](/languages/java.md), [Go](/languages/go.md), [Rust](/languages/rust.md)
- [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md), [Value types](/ideas/runtime-performance/value-types.md), [Gradual typing for dynamic languages](/ideas/types/gradual-typing-for-dynamic-languages.md)
- Events: [C# 8 nullable reference types](/events/2019-09-csharp-8-nullable-reference-types.md), [Android goes Kotlin-first](/events/2019-05-android-kotlin-first.md)

[^android-kotlin-crash]: Android Developers: Build better apps with Kotlin — https://developer.android.com/kotlin/build-better-apps
[^android-kotlin-first]: Android Developers: Kotlin-first — https://developer.android.com/kotlin/first
[^netcore3]: .NET Blog: Announcing .NET Core 3.0 — https://devblogs.microsoft.com/dotnet/announcing-net-core-3-0/
[^cs-nrt-docs]: Microsoft Learn: Nullable reference types — https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/nullable-reference-types
[^runtime-41720]: dotnet/runtime #41720 — https://github.com/dotnet/runtime/issues/41720
[^dart-sound]: Dart blog: Announcing sound null safety — https://dart.dev/blog/announcing-sound-null-safety
[^dart3]: Dart blog: Announcing Dart 3 — https://dart.dev/blog/announcing-dart-3
[^ts6-strict]: DEV: TypeScript 6.0 strict by default — https://dev.to/davekurian/typescript-60-launches-strict-mode-by-default-and-drops-es5-support-n31
[^jspecify-1]: JSpecify 1.0.0 — https://jspecify.dev/blog/release-1.0.0/
[^spring7-null]: Spring Framework: Null-safety — https://docs.spring.io/spring-framework/reference/core/null-safety.html
[^jdk-null-jep]: JDK-8303099 Null-Restricted and Nullable Types — https://bugs.openjdk.org/browse/JDK-8303099
[^jvmweekly-valhalla]: JVM Weekly vol. 180 — https://www.jvm-weekly.com/p/project-valhalla-explained-how-a
