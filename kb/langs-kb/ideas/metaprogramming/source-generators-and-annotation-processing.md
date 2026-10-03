---
type: Idea
title: Source generators and annotation processing
description: "Generate ordinary source code at compile time — instead of using runtime reflection or full macros — via plugins that inspect the program (Java annotation processors, C# Roslyn source generators, Kotlin KSP, Swift macros). In 2018–2026 the idea won in .NET, where it became the backbone of trimming and Native AOT, and steadily replaced kapt in Kotlin; Java's processors were tightened (off by default since JDK 23) and Lombok survives by hacking compiler internals; Dart abandoned its macro project in Jan 2025. Verdict: succeeded where the platform owner designed for it."
area: metaprogramming
tags: [source-generators, roslyn, annotation-processing, ksp, kapt, lombok, swift-macros, interceptors, aot, reflection-free]
outcome: succeeded
maturity_2026: mainstream
origin_year: 2004
mainstream_year: 2020
languages: [languages/csharp, languages/java, languages/kotlin, languages/swift, languages/dart, languages/go]
runtimes: [runtimes/dotnet-clr, runtimes/hotspot-openjdk, runtimes/graalvm]
related_ideas: [ideas/runtime-performance/aot-native-images, ideas/metaprogramming/compile-time-reflection, ideas/metaprogramming/comptime-and-staged-compilation, ideas/types/sum-types-and-pattern-matching]
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: incr-gen
    resource: https://andrewlock.net/exploring-dotnet-6-part-9-source-generator-updates-incremental-generators/
    title: "Andrew Lock: Source generator updates — incremental generators (Exploring .NET 6, Part 9)"
  - id: isg-deprecated
    resource: https://posts.specterops.io/dotnet-source-generators-in-2024-part-1-getting-started-76d619b633f5
    title: "SpecterOps: Dotnet Source Generators in 2024 Part 1 (ISourceGenerator deprecation)"
  - id: interceptors-aspnet
    resource: https://endjin.com/blog/2024/01/asp-dotnet-8-aot-csharp-12-interceptors
    title: "endjin: ASP.NET Core 8.0 uses C# 12.0's experimental interceptors to enable AOT"
  - id: interceptors-lock
    resource: https://andrewlock.net/creating-a-source-generator-part-11-implementing-an-interceptor-with-a-source-generator/
    title: "Andrew Lock: Implementing an interceptor with a source generator (Part 11; interceptors stable from 8.0.4xx/9.0 SDK)"
  - id: aspnet-aot
    resource: https://learn.microsoft.com/en-us/aspnet/core/fundamentals/native-aot?view=aspnetcore-10.0
    title: "Microsoft Learn: ASP.NET Core support for Native AOT (System.Text.Json source generator required)"
    author: org:microsoft
  - id: aot-libs
    resource: https://devblogs.microsoft.com/dotnet/creating-aot-compatible-libraries/
    title: ".NET Blog: How to make libraries compatible with native AOT"
    author: org:microsoft
  - id: ksp1
    resource: https://android-developers.googleblog.com/2021/09/accelerated-kotlin-build-times-with.html
    title: "Android Developers Blog: Accelerated Kotlin build times with Kotlin Symbol Processing 1.0 (Sept 2021)"
    author: org:google
  - id: ksp2-preview
    resource: https://android-developers.googleblog.com/2023/12/ksp2-preview-kotlin-k2-standalone.html
    title: "Android Developers Blog: KSP2 Preview — Kotlin K2 and Standalone Source Generator (Dec 2023)"
    author: org:google
  - id: ksp2-doc
    resource: https://github.com/google/ksp/blob/main/docs/ksp2.md
    title: "GitHub google/ksp: KSP2 docs"
  - id: kapt-k2
    resource: https://kotlinlang.org/docs/whatsnew2120.html
    title: "kotlinlang.org: What's new in Kotlin 2.1.20 (K2 kapt by default)"
    author: org:jetbrains
  - id: migrate-ksp
    resource: https://developer.android.com/build/migrate-to-ksp
    title: "Android Developers: Migrate from kapt to KSP (kapt in maintenance mode)"
    author: org:google
  - id: jdk23-proc
    resource: https://inside.java/2024/06/18/quality-heads-up/
    title: "Inside.java: Quality Outreach Heads-up — JDK 23 Changes Default Annotation Processing Policy (2024-06-18)"
    author: org:oracle
  - id: jep396
    resource: https://aredko.blogspot.com/2021/01/jep-396-and-you-strong-encapsulation-of.html
    title: "Andriy Redko: JEP-396 and You — strong encapsulation of the JDK internals is the default"
  - id: lombok-jdk16
    resource: https://github.com/projectlombok/lombok/issues/2790
    title: "GitHub projectlombok/lombok #2790: JDK 16 strong-encapsulation breakage"
  - id: jep395
    resource: https://openjdk.org/jeps/395
    title: "OpenJDK: JEP 395 — Records (JDK 16)"
    author: org:openjdk
  - id: swift59
    resource: https://www.swift.org/blog/swift-5.9-released/
    title: "Swift.org: Swift 5.9 Released (macros) (Sept 2023)"
    author: org:apple
  - id: swift-macro-slow
    resource: https://www.pointfree.co/blog/posts/171-mitigating-swiftsyntax-build-times
    title: "Point-Free: Mitigating SwiftSyntax build times"
  - id: swiftsyntax-prebuilt
    resource: https://fatbobman.com/en/snippet/speed-up-compilation-with-prebuilt-swift-syntax/
    title: "Fatbobman: Faster Swift 6 Builds — Enabling SwiftSyntax Prebuilts (Swift 6.1.1 / Xcode 16.4)"
  - id: dart-macros
    resource: https://medium.com/dartlang/an-update-on-dart-macros-data-serialization-06d3037d4f12
    title: "Dart Blog: An update on Dart macros & data serialization (2025-01-29)"
    author: org:google
---

# Summary
**Succeeded — where the platform owner built it in.** The most consequential metaprogramming shift in managed languages from 2018 to 2026 was not macros but *compile-time source generation*: tools that read the typed program and emit plain code that the compiler then checks. In **.NET**, Roslyn source generators (C# 9 / .NET 5, Nov 2020), rebuilt as incremental generators in .NET 6, became load-bearing: System.Text.Json, Regex, logging, P/Invoke and ASP.NET's minimal-API binding all generate code so apps can trim and run under Native AOT.[^incr-gen][^aspnet-aot][^aot-libs] In **Kotlin**, KSP (1.0 in Sept 2021, up to 2x faster than kapt) replaced Java-stub-based kapt, which is now in maintenance mode; KSP2 became the default in 2025.[^ksp1][^migrate-ksp][^ksp2-doc] **Java's** annotation processors were tightened instead: disabled by default unless configured since JDK 23, while Lombok keeps working only via a workaround for JDK 16+ strong encapsulation.[^jdk23-proc][^lombok-jdk16] **Swift** chose real macros (5.9, 2023) and paid a build-time price;[^swift59][^swift-macro-slow] **Dart** abandoned macros entirely in January 2025.[^dart-macros]

# The idea
Java's JSR 269 (2006) let processors read annotations and emit new source files but not modify existing ones; Lombok broke that rule by mutating javac's AST. Roslyn generators (2020) formalised the "additive only" model on a full semantic model; incremental generators added caching so IDEs stay responsive. C# **interceptors** (experimental in C# 12/.NET 8; stable from the 8.0.4xx/9.0 SDKs) let generated code replace specific call sites, which ASP.NET uses to bind minimal APIs without reflection.[^interceptors-aspnet][^interceptors-lock] KSP gives a Kotlin-native symbol API that works for multiplatform targets. The design point is *between* runtime reflection (slow, AOT-hostile) and full macros (powerful, hard to tool) — see [compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md).

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2020-11 | C# 9 / .NET 5 ship Roslyn source generators (`ISourceGenerator`)[^incr-gen] | + |
| E2 | 2021-03 | JDK 16: strong encapsulation by default (JEP 396) breaks tools using javac internals; Lombok ships a workaround[^jep396][^lombok-jdk16] | − |
| E2 | 2021-03 | JDK 16 records (JEP 395) remove a big share of Lombok's boilerplate use case[^jep395] | mixed |
| E2 | 2021-09 | KSP 1.0 stable; up to 2x faster than kapt, multiplatform-capable[^ksp1] | + |
| E2 | 2021-11 | .NET 6 incremental generators (`IIncrementalGenerator`)[^incr-gen] | + |
| E3 | 2023-09 | Swift 5.9 ships macros built on SwiftSyntax[^swift59] | + |
| E3 | 2023-11 | .NET 8: interceptors (experimental) power ASP.NET Core's Request Delegate Generator for Native AOT[^interceptors-aspnet] | + |
| E3 | 2023-12 | KSP2 preview: standalone, built on K2 compiler APIs[^ksp2-preview] | + |
| E3 | 2024 | Swift community reports macro builds several-fold slower due to compiling SwiftSyntax[^swift-macro-slow] | − |
| E3 | 2024-09 | JDK 23 stops running class-path annotation processors by default (needs `-proc:full` or explicit config)[^jdk23-proc] | mixed |
| E3 | 2024 | Roslyn deprecates non-incremental `ISourceGenerator`[^isg-deprecated] | + |
| E4 | 2025-01 | Dart team stops work on macros; pivots to better data-class/serialization support[^dart-macros] | − |
| E4 | 2025 | KSP2 default; KSP1 incompatible with Kotlin 2.3+ and AGP 9; K2 kapt default from Kotlin 2.1.20[^ksp2-doc][^kapt-k2] | + |
| E4 | 2025 | Swift 6.1.1 / Xcode 16.4 add prebuilt SwiftSyntax to cut macro build costs[^swiftsyntax-prebuilt] | + |

# Where it succeeded
- **.NET as a whole.** Generators turned trimming and Native AOT from "rewrite your app" into "use the generator overloads"; Microsoft's AOT library guidance explicitly tells authors to replace reflection with source generators.[^aot-libs] The ASP.NET AOT template requires the System.Text.Json generator.[^aspnet-aot]
- **Kotlin/Android.** Room, Moshi, Hilt/Dagger and others moved to KSP; Google's own migration guide calls kapt "in maintenance mode".[^migrate-ksp]
- **Debuggability.** Generated code is real code — you can step into it, read it and get compiler errors in it, unlike runtime proxies or bytecode weaving.

# Where it failed or stalled
- **Java's ecosystem tension.** The most popular Java "generator", Lombok, depends on unsupported javac internals; JDK 16's encapsulation broke it and only a workaround keeps it alive.[^lombok-jdk16] OpenJDK's response was language features (records) and a security-motivated default-off for implicit processors (JDK 23), not a better generator API.[^jep395][^jdk23-proc]
- **Dart macros cancelled** (Jan 2025): semantic introspection made compile times and stateful hot reload unacceptably slow; the team said it would "not be shipping macros in the foreseeable future".[^dart-macros]
- **Swift macro build cost.** Every third-party macro package pulled in SwiftSyntax from source, multiplying clean-build times until prebuilts arrived in 2025.[^swift-macro-slow][^swiftsyntax-prebuilt]
- **First-generation APIs aged fast.** Both .NET (`ISourceGenerator`) and Kotlin (KSP1, kapt) forced authors through a second migration within ~4 years.[^isg-deprecated][^ksp2-doc]

# Why
1. **AOT and trimming created a hard requirement.** In .NET the generator story was pulled by Native AOT, Blazor WASM size and mobile (MAUI): reflection was the obstacle, generators the fix. A concrete platform need beats abstract metaprogramming appeal.
2. **Additive-only, compiler-hosted design scales in IDEs.** Roslyn and KSP2 run on the compiler's own semantic model with caching; Lombok-style AST mutation and full macros fight the IDE. Dart's experience shows the cost of macros that need deep semantic introspection — tooling latency, not expressiveness, was the deciding factor.[^dart-macros]
3. **Steward philosophy.** OpenJDK prefers to absorb boilerplate into the language (records, pattern matching — see [sum types](/ideas/types/sum-types-and-pattern-matching.md)) and keep the compiler surface small; Microsoft prefers extensible compilers. Both strategies "work", but only the latter grew a generator ecosystem.
4. **Compiler rewrites force re-platforming.** Kotlin's K2 compiler made the kapt/KSP1 architecture obsolete; generator APIs coupled to compiler internals inherit every compiler rewrite.[^ksp2-preview]

# Lessons
- Generate code, don't mutate it: additive, inspectable generators are the sweet spot for mainstream managed languages.
- Metaprogramming features are judged on IDE and incremental-build latency at least as much as on power.
- When a runtime goal (AOT, trimming) needs reflection-free code, provide the generator infrastructure first — it then pays off for everyone.

# Related
- [C#](/languages/csharp.md), [Java](/languages/java.md), [Kotlin](/languages/kotlin.md), [Swift](/languages/swift.md), [Dart](/languages/dart.md)
- [.NET CLR](/runtimes/dotnet-clr.md), [GraalVM](/runtimes/graalvm.md)
- [AOT native images](/ideas/runtime-performance/aot-native-images.md), [Compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md), [Comptime and staged compilation](/ideas/metaprogramming/comptime-and-staged-compilation.md)
- Events: [Kotlin 2.0 K2 compiler](/events/2024-05-kotlin-2-0-k2-compiler.md)

[^incr-gen]: Andrew Lock: incremental generators — https://andrewlock.net/exploring-dotnet-6-part-9-source-generator-updates-incremental-generators/
[^isg-deprecated]: SpecterOps: Dotnet Source Generators in 2024 — https://posts.specterops.io/dotnet-source-generators-in-2024-part-1-getting-started-76d619b633f5
[^interceptors-aspnet]: endjin: ASP.NET Core 8 interceptors for AOT — https://endjin.com/blog/2024/01/asp-dotnet-8-aot-csharp-12-interceptors
[^interceptors-lock]: Andrew Lock: interceptors with a source generator — https://andrewlock.net/creating-a-source-generator-part-11-implementing-an-interceptor-with-a-source-generator/
[^aspnet-aot]: Microsoft Learn: ASP.NET Core Native AOT — https://learn.microsoft.com/en-us/aspnet/core/fundamentals/native-aot?view=aspnetcore-10.0
[^aot-libs]: .NET Blog: AOT-compatible libraries — https://devblogs.microsoft.com/dotnet/creating-aot-compatible-libraries/
[^ksp1]: Android Developers Blog: KSP 1.0 — https://android-developers.googleblog.com/2021/09/accelerated-kotlin-build-times-with.html
[^ksp2-preview]: Android Developers Blog: KSP2 Preview — https://android-developers.googleblog.com/2023/12/ksp2-preview-kotlin-k2-standalone.html
[^ksp2-doc]: google/ksp KSP2 docs — https://github.com/google/ksp/blob/main/docs/ksp2.md
[^kapt-k2]: What's new in Kotlin 2.1.20 — https://kotlinlang.org/docs/whatsnew2120.html
[^migrate-ksp]: Android Developers: Migrate from kapt to KSP — https://developer.android.com/build/migrate-to-ksp
[^jdk23-proc]: Inside.java: JDK 23 default annotation processing policy — https://inside.java/2024/06/18/quality-heads-up/
[^jep396]: JEP-396 and You — https://aredko.blogspot.com/2021/01/jep-396-and-you-strong-encapsulation-of.html
[^lombok-jdk16]: Lombok issue #2790 — https://github.com/projectlombok/lombok/issues/2790
[^jep395]: JEP 395: Records — https://openjdk.org/jeps/395
[^swift59]: Swift 5.9 Released — https://www.swift.org/blog/swift-5.9-released/
[^swift-macro-slow]: Point-Free: Mitigating SwiftSyntax build times — https://www.pointfree.co/blog/posts/171-mitigating-swiftsyntax-build-times
[^swiftsyntax-prebuilt]: Fatbobman: SwiftSyntax prebuilts — https://fatbobman.com/en/snippet/speed-up-compilation-with-prebuilt-swift-syntax/
[^dart-macros]: Dart Blog: An update on Dart macros & data serialization — https://medium.com/dartlang/an-update-on-dart-macros-data-serialization-06d3037d4f12
