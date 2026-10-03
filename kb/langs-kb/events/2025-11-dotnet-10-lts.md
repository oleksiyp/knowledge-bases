---
type: Event
title: .NET 10 LTS and C# 14 released
description: Released 2025-11-11 with three years of support, .NET 10 brought C# 14 extension members and the `field` keyword, JIT devirtualization/inlining gains and AVX10.2, capping a year in which C# was named TIOBE Language of the Year 2025.
event_kind: release
date: 2025-11-11
era: E4
impact: positive
languages: [languages/csharp, languages/fsharp]
runtimes: [runtimes/dotnet-clr]
ideas: [ideas/runtime-performance/aot-native-images, ideas/types/sum-types-and-pattern-matching]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: net10
    resource: https://devblogs.microsoft.com/dotnet/announcing-dotnet-10/
    title: ".NET Blog: Announcing .NET 10"
    author: org:microsoft
  - id: cs-history
    resource: https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history
    title: "Microsoft Learn: The history of C#"
    author: org:microsoft
  - id: tiobe-2025
    resource: https://www.infoworld.com/article/4112993/c-wins-tiobe-programming-language-of-the-year-honors-for-2025.html
    title: "InfoWorld: C# wins Tiobe Programming Language of the Year honors for 2025"
  - id: sts-24
    resource: https://www.infoq.com/news/2025/09/microsoft-extends-dotnet-sts/
    title: "InfoQ: Microsoft Extends Support Period for .NET STS Releases from 18 to 24 Months"
  - id: cs15
    resource: https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-15
    title: "Microsoft Learn: What's new in C# 15"
    author: org:microsoft
---

# What happened
.NET 10 shipped on 2025-11-11 as a Long Term Support release supported until November 2028.[^net10] Runtime work focused on the JIT (better inlining and method devirtualization), AVX10.2, and Arm64 changes that reduce GC pauses by 8–20%; it also added the Microsoft Agent Framework, post-quantum ML-DSA/ML-KEM and OpenAPI 3.1 in ASP.NET Core.[^net10] C# 14 delivered extension members (extension properties, not just methods), the `field` keyword for field-backed properties, null-conditional assignment and implicit `Span` conversions.[^cs-history] Two months earlier Microsoft had extended STS releases to 24 months, so .NET 8, 9 and 10 overlapped in support.[^sts-24]

# Why it matters
It is the third LTS of the unified .NET and a marker of C#'s E4 momentum: TIOBE named C# Language of the Year 2025, citing its cross-platform, open-source evolution.[^tiobe-2025] It also shows the cost of a fixed train — the `field` keyword had slipped from C# 13, and union types were left to C# 15 (.NET 11, previews in 2026).[^cs15]

# Related
- [C#](/languages/csharp.md), [.NET CLR](/runtimes/dotnet-clr.md)
- [.NET 5 unification](/events/2020-11-dotnet-5-unification.md)
- [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md), [AOT native images](/ideas/runtime-performance/aot-native-images.md)

[^net10]: .NET Blog: Announcing .NET 10 — https://devblogs.microsoft.com/dotnet/announcing-dotnet-10/
[^cs-history]: Microsoft Learn: The history of C# — https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history
[^tiobe-2025]: InfoWorld: C# wins Tiobe Language of the Year 2025 — https://www.infoworld.com/article/4112993/c-wins-tiobe-programming-language-of-the-year-honors-for-2025.html
[^sts-24]: InfoQ: .NET STS support extended — https://www.infoq.com/news/2025/09/microsoft-extends-dotnet-sts/
[^cs15]: Microsoft Learn: What's new in C# 15 — https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-15
