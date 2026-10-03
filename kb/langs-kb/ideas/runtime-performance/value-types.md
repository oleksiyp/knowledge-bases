---
type: Idea
title: Value types and flat memory layout in managed languages
description: "User-defined types without object identity that the runtime can store flat (inline in arrays and fields) instead of behind pointers: Java's Project Valhalla, C# structs/Span/ref structs, Swift structs and InlineArray, Kotlin value classes. Verdict: mixed. It succeeded in .NET and Swift, which designed for it early. On the JVM it is the decade's most famous stall: Valhalla began in 2014 and only reached a first preview (JEP 401, JDK 28) in 2026."
area: runtime-performance
tags: [value-types, valhalla, structs, span, flattening, memory-layout, identity, jvm, dotnet, swift]
outcome: mixed
maturity_2026: adopted
origin_year: 1970
mainstream_year: 2002
languages: [languages/java, languages/csharp, languages/swift, languages/kotlin, languages/go, languages/rust]
runtimes: [runtimes/hotspot-openjdk, runtimes/dotnet-clr, runtimes/graalvm]
related_ideas: [ideas/types/null-safety, ideas/types/late-generics, ideas/types/sum-types-and-pattern-matching, ideas/runtime-performance/low-pause-gc, ideas/platforms-and-portability/ffi-modernization]
era_momentum: { E1: flat, E2: flat, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: valhalla
    resource: https://openjdk.org/projects/valhalla/
    title: "OpenJDK: Project Valhalla"
    author: org:openjdk
  - id: jep401
    resource: https://openjdk.org/jeps/401
    title: "OpenJDK: JEP 401 — Value Classes and Objects (Preview)"
    author: org:openjdk
  - id: foltan-mail
    resource: https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/message/AIA3O3LHFZ6T7TIPH7KZT4WS4B6U72U5/
    title: "jdk-dev (Lois Foltan, 2026-06-08): JEP 401 JDK 28 July integration"
    author: org:oracle
  - id: infoq-jep401
    resource: https://www.infoq.com/news/2026/08/jep401-value-objects-preview/
    title: "InfoQ: Project Valhalla's First Preview — JEP 401 Redefines == for Java Objects (Aug 2026)"
  - id: jvmweekly-valhalla
    resource: https://www.jvm-weekly.com/p/project-valhalla-explained-how-a
    title: "JVM Weekly vol. 180: Project Valhalla, Explained — How a Decade of Work Arrives in JDK 28"
  - id: jep529
    resource: https://openjdk.org/jeps/529
    title: "OpenJDK: JEP 529 — Vector API (Eleventh Incubator)"
    author: org:openjdk
  - id: cs13
    resource: https://learn.microsoft.com/en-gb/dotnet/csharp/whats-new/csharp-13
    title: "Microsoft Learn: What's new in C# 13 (allows ref struct, ref struct interfaces)"
    author: org:microsoft
  - id: cs-history
    resource: https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history
    title: "Microsoft Learn: The history of C# (Span/ref struct in 7.2, ref fields in 11, inline arrays in 12)"
    author: org:microsoft
  - id: swift62
    resource: https://www.swift.org/blog/swift-6.2-released/
    title: "Swift.org: Swift 6.2 Released (InlineArray, Span)"
    author: org:apple
  - id: se0390
    resource: https://github.com/swiftlang/swift-evolution/blob/main/proposals/0390-noncopyable-structs-and-enums.md
    title: "Swift Evolution SE-0390: Noncopyable structs and enums (Swift 5.9)"
    author: org:apple
  - id: kotlin-value
    resource: https://kotlinlang.org/docs/inline-classes.html
    title: "kotlinlang.org: Inline value classes"
    author: org:jetbrains
---

# Summary
"Codes like a class, works like an int": value types are aggregates without identity that the runtime can copy, flatten into arrays and fields, and keep in registers. That removes pointer chasing, object headers and GC pressure.[^valhalla] The 2018–2026 story splits by runtime. **.NET** had structs from day one. It spent the period extending them for safe high-performance code: `Span<T>`/`ref struct` (C# 7.2), ref fields (C# 11), inline arrays (C# 12), and `allows ref struct` generics plus ref-struct interfaces (C# 13, .NET 9).[^cs-history][^cs13] **Swift** built on value semantics and added noncopyable types (5.9), then `InlineArray` and `Span` (6.2, September 2025).[^se0390][^swift62] **Java** is the stall. Project Valhalla started in 2014 and went through five prototypes and several renamings (value types → inline classes → primitive classes → value classes). Its first preview, JEP 401, was integrated for **JDK 28** in summer 2026 and is due to ship in March 2027, without null-restricted types or specialized generics.[^jvmweekly-valhalla][^foltan-mail][^infoq-jep401] **Verdict: mixed** — a success where it was in the runtime from the start, and a 12-year retrofit on the JVM.

# The idea
- **What:** types whose instances have no identity (no meaningful `==` on references, no locking, no mutation after construction in Java's design). The VM can then *scalarize* them (keep fields in registers) and *flatten* them (store fields inline in containing arrays/objects).[^jep401]
- **Prior art:** C structs; Pascal records; C# structs (2002); Go structs (2009, value-by-default); Swift structs and enums (2014); Rust (everything is a value unless boxed).
- **Problem solved:** in Java, `Point[]` is an array of pointers to individually allocated objects, each with a 12–16-byte header. Numeric, financial, game and ML-adjacent code was forced into parallel primitive arrays or off-heap memory, and `List<Integer>` boxes every element.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018–2019 | Valhalla "L-World" prototypes (LW1/LW2) replace the earlier "Q-World" split type system[^jvmweekly-valhalla] | mixed |
| E2 | 2021-05 | Kotlin 1.5: `value class` stable — but only single-field wrappers, pending Valhalla[^kotlin-value] | mixed |
| E2 | 2021–2022 | Valhalla rebrands to "primitive classes" (JEP 402 draft), then retreats again to value classes[^jvmweekly-valhalla] | − |
| E3 | 2022-11 | C# 11: ref fields and `scoped`, enabling safer Span-style types[^cs-history] | + |
| E3 | 2023-09 | Swift 5.9: noncopyable structs/enums (SE-0390)[^se0390] | + |
| E3 | 2023-11 | C# 12: inline arrays (fixed-size buffers as safe structs)[^cs-history] | + |
| E4 | 2024-11 | C# 13 / .NET 9: `allows ref struct` anti-constraint; ref structs implement interfaces[^cs13] | + |
| E4 | 2025-09 | Swift 6.2: `InlineArray` and `Span`[^swift62] | + |
| E4 | 2025-12 | Vector API enters its 11th incubation (JDK 26), still waiting for Valhalla[^jep529] | − |
| E4 | 2026-06-08 | Valhalla team announces JEP 401 code freeze; mainline integration in July for JDK 28[^foltan-mail] | + |
| E4 | 2026-08 | JEP 401 (with JEP 539 strict field init) integrated into JDK 28 as preview: 197,000+ lines over 1,816 files[^infoq-jep401][^jvmweekly-valhalla] | + |

# Where it succeeded
- **.NET** turned value types into a performance platform. `Span<T>` and `ref struct` gave allocation-free parsing, slicing and interop, and ASP.NET Core and the BCL were rewritten around them. C# 11–13 kept closing the gaps so that Spans can be used generically.[^cs-history][^cs13]
- **Swift** combined value semantics with ownership (noncopyable types, borrowing/consuming) and in 6.2 added fixed-size `InlineArray` and the compile-time-checked `Span`, aiming at C/C++-class performance without unsafe pointers.[^se0390][^swift62]
- **Go and Rust** never had the problem: structs are values and arrays of structs are flat. This was one reason teams rewrote performance-sensitive JVM services in Go/Rust in the 2010s–2020s.
- **Java (finally)**: JEP 401's preview migrates `Integer`, `LocalDate` and other value-based classes, and redefines `==` for value objects as field-wise comparison.[^infoq-jep401]

# Where it failed or stalled
- **Valhalla's timeline.** Announced 2014; prototypes LW1–LW5; names changed repeatedly; JEP 402 ("primitive classes") was dropped. The first shipping artifact is a *preview* in JDK 28 (March 2027), more than 12 years in.[^jvmweekly-valhalla]
- **What JDK 28 still lacks:** null-restricted (`!`) types, full specialized generics (`List<int>`), and atomicity relaxations. So flattening is constrained by atomicity and nullability, and many of the promised density gains are still in the future.[^jvmweekly-valhalla][^infoq-jep401]
- **Dependent features held hostage.** The Vector API has incubated eleven times (JDK 16–26) because it will not leave incubation until Valhalla features are in preview.[^jep529] Kotlin's multi-field value classes also wait on Valhalla.[^kotlin-value]
- **Complexity tax in C#.** `ref struct`, `scoped`, `ref readonly` and `allows ref struct` add a mini ownership system that most application developers never learn. The power is concentrated in library authors.[^cs13]

# Why
1. **Designing it in beats retrofitting it.** C#, Go and Swift had value types before their ecosystems formed, so libraries assumed them. Java had 25 years of code that relies on every object having identity (`==`, `synchronized`, `System.identityHashCode`, nullable references). Valhalla's work was mostly about *removing identity without breaking that code*. This explains the five prototypes.[^jvmweekly-valhalla]
2. **The JVM's compatibility promise is absolute.** Oracle would not ship a design that split the type system (the Q-World) or forced re-compilation. The "L-World" unification was the breakthrough, but it took years to find.[^jvmweekly-valhalla]
3. **Escape analysis was "good enough" for many cases.** HotSpot and GraalVM already scalarized many short-lived objects, which reduced urgency for typical enterprise code. The pain was concentrated in numeric and data-heavy niches, which often left the JVM.
4. **.NET's success came from steward incentive.** Microsoft's own performance push (TechEmpower benchmarks, Kestrel, cloud costs) made Span-based APIs a first-party priority. The language team shipped features the runtime team needed.
5. **Swift's driver was systems-level ambition.** Embedded Swift and C++ interop required predictable layout and no-ARC paths, so value-type features served Apple's own goals.

# Lessons
- Memory layout is a foundational decision. Adding value types after an ecosystem assumes identity takes a decade, and the result arrives in stages (preview, then nullness, then specialization).
- Keep the user model simple: Valhalla repeatedly chose programmer simplicity over maximal performance, which is why it took longer but may be adoptable.[^jvmweekly-valhalla]
- Value types plus safe views (Span) are what deliver the wins. Flat storage alone is not enough without zero-copy slicing.

# Related
- [Null safety](/ideas/types/null-safety.md) — Valhalla's null-restricted types are the next step
- [Late generics](/ideas/types/late-generics.md) — specialized generics depend on value types
- [Low-pause GC](/ideas/runtime-performance/low-pause-gc.md) — fewer objects, less GC work
- [FFI modernization](/ideas/platforms-and-portability/ffi-modernization.md) — FFM memory segments and the Vector API
- Languages and runtimes: [Java](/languages/java.md), [C#](/languages/csharp.md), [Swift](/languages/swift.md), [Kotlin](/languages/kotlin.md), [HotSpot/OpenJDK](/runtimes/hotspot-openjdk.md), [.NET CLR](/runtimes/dotnet-clr.md)

[^valhalla]: OpenJDK: Project Valhalla — https://openjdk.org/projects/valhalla/
[^jep401]: OpenJDK: JEP 401 — https://openjdk.org/jeps/401
[^foltan-mail]: jdk-dev: JEP 401 JDK 28 July integration — https://mail.openjdk.org/archives/list/jdk-dev@openjdk.org/message/AIA3O3LHFZ6T7TIPH7KZT4WS4B6U72U5/
[^infoq-jep401]: InfoQ: Project Valhalla's First Preview — https://www.infoq.com/news/2026/08/jep401-value-objects-preview/
[^jvmweekly-valhalla]: JVM Weekly: Project Valhalla, Explained — https://www.jvm-weekly.com/p/project-valhalla-explained-how-a
[^jep529]: OpenJDK: JEP 529 — Vector API (Eleventh Incubator) — https://openjdk.org/jeps/529
[^cs13]: Microsoft Learn: What's new in C# 13 — https://learn.microsoft.com/en-gb/dotnet/csharp/whats-new/csharp-13
[^cs-history]: Microsoft Learn: The history of C# — https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history
[^swift62]: Swift.org: Swift 6.2 Released — https://www.swift.org/blog/swift-6.2-released/
[^se0390]: SE-0390: Noncopyable structs and enums — https://github.com/swiftlang/swift-evolution/blob/main/proposals/0390-noncopyable-structs-and-enums.md
[^kotlin-value]: kotlinlang.org: Inline value classes — https://kotlinlang.org/docs/inline-classes.html
