---
type: Idea
title: Sum types and pattern matching in mainstream languages
description: "Closed sets of alternatives (sealed hierarchies, discriminated unions, records) plus exhaustive structural matching, imported from ML into Java, C#, Python, Dart and Kotlin between 2019 and 2026. Verdict: succeeded broadly; Java 21 and Dart 3 shipped complete versions, C# finally previews unions in C# 15, while Go and C++26 still have none."
area: types
tags: [sum-types, algebraic-data-types, pattern-matching, sealed-classes, records, discriminated-unions, exhaustiveness]
outcome: succeeded
maturity_2026: mainstream
origin_year: 1973
mainstream_year: 2019
languages: [languages/java, languages/csharp, languages/kotlin, languages/swift, languages/python, languages/dart, languages/typescript, languages/rust, languages/go, languages/cpp, languages/scala]
runtimes: [runtimes/hotspot-openjdk, runtimes/dotnet-clr]
related_ideas: [ideas/types/null-safety, ideas/types/late-generics, ideas/runtime-performance/value-types, ideas/types/scala-3-and-language-redesigns, ideas/types/typescript-structural-typing-wins]
era_momentum: { E1: up, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: jep395
    resource: https://openjdk.org/jeps/395
    title: "OpenJDK: JEP 395 — Records (JDK 16)"
    author: org:openjdk
  - id: jep409
    resource: https://openjdk.org/jeps/409
    title: "OpenJDK: JEP 409 — Sealed Classes (JDK 17)"
    author: org:openjdk
  - id: jep441
    resource: https://openjdk.org/jeps/441
    title: "OpenJDK: JEP 441 — Pattern Matching for switch (JDK 21)"
    author: org:openjdk
  - id: jep440
    resource: https://openjdk.org/jeps/440
    title: "OpenJDK: JEP 440 — Record Patterns (JDK 21)"
    author: org:openjdk
  - id: jep530
    resource: https://inside.java/2025/12/06/jep530-target-jdk26/
    title: "Inside.java: JEP 530 — Primitive Types in Patterns, instanceof, and switch (4th Preview) targeted to JDK 26"
    author: org:oracle
  - id: cs-history
    resource: https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history
    title: "Microsoft Learn: The history of C# (C# 7–13 pattern features, records)"
    author: org:microsoft
  - id: cs-unions-ballliauw
    resource: https://blog.maartenballiauw.be/posts/2026-06-16-discriminated-unions-in-csharp-for-real-this-time/
    title: "Maarten Balliauw: Discriminated unions in C# and .NET 11 (for real this time), 2026-06-16"
  - id: cs-unions-abt
    resource: https://benjamin-abt.com/blog/2026/03/09/csharp-15-unions-and-unio/
    title: "Benjamin Abt: C# 15 Unions — Unions are finally in .NET (2026-03-09)"
  - id: pep634
    resource: https://peps.python.org/pep-0634/
    title: "PEP 634: Structural Pattern Matching — Specification"
    author: org:python
  - id: py-spm-study
    resource: https://ieeexplore.ieee.org/iel8/10589599/10589610/10589769.pdf
    title: "IEEE (SANER 2024): On the Usefulness of Python Structural Pattern Matching — An Empirical Study"
  - id: dart3
    resource: https://dart.dev/resources/language/evolution
    title: "dart.dev: Language evolution — Dart 3.0 (patterns, records, sealed classes)"
    author: org:google
  - id: go-57644
    resource: https://github.com/golang/go/issues/57644
    title: "golang/go #57644: proposal — sum types based on general interfaces"
    author: org:golang
  - id: go-survey-2025
    resource: https://go.dev/blog/survey2025
    title: "Go Blog: Results from the 2025 Go Developer Survey (2026-01-21)"
    author: org:golang
  - id: cpp-pm-29
    resource: https://wrocpp.github.io/posts/pattern-matching-cpp29/
    title: "wroc++: Pattern matching did not make C++26"
  - id: p2688
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2026/p2688r6.html
    title: "WG21 P2688R6: Pattern Matching with match and case"
  - id: kotlin-rich-errors
    resource: https://github.com/Kotlin/KEEP/discussions/447
    title: "Kotlin KEEP discussion #447: Rich Errors — Motivation and Rationale"
    author: org:jetbrains
  - id: rich-errors-16mo
    resource: https://universitasscholarium.substack.com/p/the-question-mark-stays-where-it
    title: "The Question Mark Stays Where It Is: Kotlin's Rich Errors, Sixteen Months After the Announcement"
---

# Summary
Sum types (a value is exactly one of a closed set of cases) and exhaustive pattern matching over them were the most widely adopted "functional" idea of 2018–2026. Every major managed language added them, mostly as a combination of **records + sealed hierarchies + `switch`/`match` patterns**. Java delivered the whole package in stages: records (JDK 16), sealed classes (JDK 17) and pattern matching for `switch` plus record patterns (JDK 21, September 2023).[^jep395][^jep409][^jep441][^jep440] Dart 3 (May 2023) shipped records, patterns and sealed classes in one release.[^dart3] Python 3.10 (October 2021) added `match`.[^pep634] C# accumulated patterns from C# 7 to 13 and finally previews true `union` types in C# 15 / .NET 11 (2026).[^cs-history][^cs-unions-ballliauw] **Verdict: succeeded.** The holdouts are telling. Go has no sum types; it is one of its developers' top three gaps in 2025.[^go-survey-2025] C++26 rejected pattern matching (February 2025, no consensus), pushing it to C++29.[^cpp-pm-29]

# The idea
- **What:** a type is a tagged union of cases. Pattern matching destructures a value by shape, binds variables, and the compiler checks that every case is handled (exhaustiveness). Adding a case turns every non-exhaustive match into a compile error.
- **Prior art:** ML (1973), Hope, Haskell, OCaml; later Scala case classes, Rust `enum`, Swift `enum` with associated values (2014), Kotlin `sealed class` + `when` (2016), TypeScript discriminated unions (2016).
- **Problem solved:** the "visitor pattern" boilerplate and `instanceof` chains of OO languages; modelling results/errors/messages/ASTs without null and without open inheritance. It also suits data-oriented programming ("make illegal states unrepresentable"). Later, LLM tool-calling and JSON schema work made closed tagged types common in everyday APIs.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-09 | C# 8: switch expressions, property/tuple/positional patterns[^cs-history] | + |
| E1 | 2020-11 | C# 9: records, relational and logical patterns[^cs-history] | + |
| E2 | 2021-03-16 | JDK 16: records final (JEP 395)[^jep395] | + |
| E2 | 2021-09-14 | JDK 17 LTS: sealed classes final (JEP 409)[^jep409] | + |
| E2 | 2021-10-04 | Python 3.10 ships structural pattern matching (PEP 634)[^pep634] | + |
| E2 | 2022-11 | C# 11: list patterns[^cs-history] | + |
| E3 | 2023-01-05 | Go sum-types proposal #57644 opened; it stays a parked discussion[^go-57644] | − |
| E3 | 2023-05 | Dart 3: records, patterns, sealed classes, exhaustive switch[^dart3] | + |
| E3 | 2023-09-19 | JDK 21 LTS: pattern matching for switch (JEP 441) and record patterns (JEP 440) final[^jep441][^jep440] | + |
| E4 | 2025-02 | WG21 Hagenberg: P2688 pattern matching fails to reach consensus for C++26 (poll 31 for / 18 against)[^cpp-pm-29] | − |
| E4 | 2025-05 | Kotlin announces "rich errors" (error union types); still a design discussion 16 months later[^kotlin-rich-errors][^rich-errors-16mo] | mixed |
| E4 | 2026-02 | .NET 11 Preview 2: C# 15 `union` types behind preview flag[^cs-unions-ballliauw][^cs-unions-abt] | + |
| E4 | 2026-03 | JDK 26: primitive types in patterns still in preview (4th preview, JEP 530; 5th targeted to JDK 27)[^jep530] | mixed |

# Where it succeeded
- **Java** changed most. "Data-oriented programming" with records + sealed interfaces + pattern `switch` is now idiomatic Java 21+. Brian Goetz's Amber team delivered it in small JEPs, each previewed, so no single release carried the risk.[^jep441]
- **Dart 3** shows that a language with a single owner can ship the entire feature at once. It coupled patterns with its sound-null-safety migration and made `switch` exhaustive over `sealed` types.[^dart3]
- **C#** shows steady demand. Developers lived on the OneOf NuGet package and ASP.NET Core's `Results<T1,T2>` until `union` arrived in the C# 15 previews.[^cs-unions-abt]
- **Kotlin, Swift, Rust, TypeScript** already had the feature. Their popularity in 2018–2024 (Android, iOS, systems, web) taught a generation of developers to expect it, and that pressure drove the Java and C# work.
- **Python** `match` landed despite controversy. In one empirical study (65 developers) participants preferred the `match` version in most snippets, though not universally.[^py-spm-study]

# Where it failed or stalled
- **Go**: no sum types, no exhaustive switch, no enums. In the 2025 survey "error handling, sum types and nil pointers" were the top language gaps; 65% of respondents' other favourite language had type-safe enums.[^go-survey-2025] Proposal #57644 (sum types via interface unions) remains a parked discussion.[^go-57644]
- **C++**: `std::variant` + `std::visit` is the workaround. P2688 (`match`) was polled at Hagenberg (February 2025) with 31 for and 18 against, short of consensus, and now targets C++29.[^cpp-pm-29][^p2688]
- **Python**: `match` is not a sum type. Python has no closed type, so exhaustiveness relies on type checkers (`assert_never`), and the syntax's capture-vs-constant pitfalls kept usage niche (adoption numbers unverified).
- **Kotlin rich errors**: error union types were announced at KotlinConf 2025 but are still in KEEP discussion with no compiler flag as of August 2026.[^rich-errors-16mo]
- **Java** still has unfinished edges: primitive patterns were in their fourth preview in JDK 26.[^jep530]

# Why
1. **Low migration cost, high local value.** Unlike null safety or ownership, sum types are additive. Existing code keeps compiling, and a team can adopt `sealed` + `switch` in one module. That made it easy for committees to approve and for teams to adopt.
2. **Competitive pressure from Kotlin/Swift/Rust/TypeScript.** Java's Amber and C#'s pattern work were explicitly about not looking dated next to Kotlin and F#/TypeScript. Dart 3 had the same motive against Kotlin and Swift.
3. **Fit with the type system decides the shape.** Nominal OO languages (Java, C#, Kotlin, Dart) reached sum types through *sealed inheritance*, which reuses the class model. That is why they shipped. Go's interfaces are structural and open, and every design for closed unions clashes with zero values and `nil`. That explains Go's stall more than ideology does.
4. **Committee consensus is the bottleneck for C++.** Pattern matching competed with reflection and contracts for C++26 bandwidth. A split vote is enough to defer a feature by three years.[^cpp-pm-29]
5. **Incremental previews de-risked Java.** Each piece (records, sealed, patterns) went through one or more previews. The order was deliberate: data carriers first, then closedness, then deconstruction.

# Lessons
- Ship sum types as compositions of things the language already has (classes, interfaces, switch). C# 15's `union` arrived ~6 years after its patterns because a truly new kind of type is harder to fit.
- Exhaustiveness checking is the payoff; pattern syntax without closed types (Python) delivers much less.
- A language that refuses sum types pays for it in developer surveys and in a cottage industry of workarounds.

# Related
- [Null safety](/ideas/types/null-safety.md) — Option/Maybe is the canonical sum type
- [Late generics](/ideas/types/late-generics.md) — Go's other long-deferred type feature
- [Value types](/ideas/runtime-performance/value-types.md) — records and value classes converge in Valhalla
- [Scala 3 and language redesigns](/ideas/types/scala-3-and-language-redesigns.md)
- Languages: [Java](/languages/java.md), [C#](/languages/csharp.md), [Kotlin](/languages/kotlin.md), [Go](/languages/go.md), [Dart](/languages/dart.md), [Python](/languages/python.md), [C++](/languages/cpp.md)

[^jep395]: OpenJDK: JEP 395 — Records — https://openjdk.org/jeps/395
[^jep409]: OpenJDK: JEP 409 — Sealed Classes — https://openjdk.org/jeps/409
[^jep441]: OpenJDK: JEP 441 — Pattern Matching for switch — https://openjdk.org/jeps/441
[^jep440]: OpenJDK: JEP 440 — Record Patterns — https://openjdk.org/jeps/440
[^jep530]: Inside.java: JEP 530 targeted to JDK 26 — https://inside.java/2025/12/06/jep530-target-jdk26/
[^cs-history]: Microsoft Learn: The history of C# — https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history
[^cs-unions-ballliauw]: Maarten Balliauw: Discriminated unions in C# and .NET 11 — https://blog.maartenballiauw.be/posts/2026-06-16-discriminated-unions-in-csharp-for-real-this-time/
[^cs-unions-abt]: Benjamin Abt: C# 15 Unions — https://benjamin-abt.com/blog/2026/03/09/csharp-15-unions-and-unio/
[^pep634]: PEP 634: Structural Pattern Matching — https://peps.python.org/pep-0634/
[^py-spm-study]: On the Usefulness of Python Structural Pattern Matching (IEEE) — https://ieeexplore.ieee.org/iel8/10589599/10589610/10589769.pdf
[^dart3]: dart.dev: Language evolution — https://dart.dev/resources/language/evolution
[^go-57644]: golang/go #57644 — https://github.com/golang/go/issues/57644
[^go-survey-2025]: Go Blog: Results from the 2025 Go Developer Survey — https://go.dev/blog/survey2025
[^cpp-pm-29]: wroc++: Pattern matching did not make C++26 — https://wrocpp.github.io/posts/pattern-matching-cpp29/
[^p2688]: WG21 P2688R6 — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2026/p2688r6.html
[^kotlin-rich-errors]: Kotlin KEEP discussion #447: Rich Errors — https://github.com/Kotlin/KEEP/discussions/447
[^rich-errors-16mo]: The Question Mark Stays Where It Is — https://universitasscholarium.substack.com/p/the-question-mark-stays-where-it
