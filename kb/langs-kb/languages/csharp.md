---
type: Language
title: C#
description: Microsoft's flagship managed language; 2018–2026 was its most successful stretch since launch — the cross-platform, open-source .NET Core/.NET 5+ bet paid off (TIOBE Language of the Year 2023 and 2025), and a yearly release train delivered records, pattern matching, generic math and (in C# 15 preview) union types, while the mobile/UI story (Xamarin→MAUI) and the long wait for unions were the weak spots.
tags: [managed, dotnet, microsoft, enterprise, games, cross-platform]
paradigms: [object-oriented, functional, multi-paradigm]
typing: static
memory_model: gc
first_released: 2002
steward: Microsoft (.NET team, Roslyn / csharplang design team); .NET Foundation holds projects
governance: single-vendor
trajectory: growing
ideas:
  - ideas/types/null-safety
  - ideas/types/sum-types-and-pattern-matching
  - ideas/metaprogramming/source-generators-and-annotation-processing
  - ideas/runtime-performance/aot-native-images
  - ideas/runtime-performance/value-types
  - ideas/concurrency/async-await-and-function-coloring
  - ideas/tooling-and-ecosystem/hot-reload-and-live-programming
runtimes: [runtimes/dotnet-clr]
adoption_signals:
  tiobe_rank: { value: 5, as_of: 2026-09 }
  tiobe_language_of_year: { value: "2023, 2025", as_of: 2026-01 }
  so_survey_usage_pct: { value: 27.8, as_of: 2025 }
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: cs-history
    resource: https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history
    title: "Microsoft Learn: The history of C#"
    author: org:microsoft
  - id: cs15
    resource: https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-15
    title: "Microsoft Learn: What's new in C# 15"
    author: org:microsoft
  - id: tiobe-2025
    resource: https://www.infoworld.com/article/4112993/c-wins-tiobe-programming-language-of-the-year-honors-for-2025.html
    title: "InfoWorld: C# wins Tiobe Programming Language of the Year honors for 2025"
  - id: tiobe-index
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index (September 2026)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
  - id: lang-strategy
    resource: https://devblogs.microsoft.com/dotnet/update-to-the-dotnet-language-strategy/
    title: ".NET Blog: Update to the .NET language strategy (2023-02-06)"
    author: org:microsoft
  - id: net10
    resource: https://devblogs.microsoft.com/dotnet/announcing-dotnet-10/
    title: ".NET Blog: Announcing .NET 10"
    author: org:microsoft
  - id: net11-p1
    resource: https://www.infoq.com/news/2026/02/dotnet-11-preview1/
    title: "InfoQ: .NET 11 Preview 1 Arrives with Runtime Async, Zstandard Support, and C# 15 Features"
  - id: hot-reload
    resource: https://visualstudiomagazine.com/articles/2021/10/25/net-hot-reload.aspx
    title: "Visual Studio Magazine: Developer Feedback Makes Microsoft Reverse .NET 6 Hot Reload Decision"
  - id: xamarin-eos
    resource: https://dotnet.microsoft.com/en-us/platform/support/policy/xamarin
    title: "Microsoft: Xamarin support policy"
    author: org:microsoft
  - id: vsmac
    resource: https://learn.microsoft.com/en-us/lifecycle/announcements/visual-studio-mac-end-of-servicing
    title: "Microsoft Lifecycle: Visual Studio for Mac retired August 31, 2024"
    author: org:microsoft
  - id: unity-coreclr
    resource: https://discussions.unity.com/t/coreclr-scripting-and-serialization-update-june-2026/1723299
    title: "Unity Discussions: CoreCLR, Scripting, and Serialization Update — June 2026"
    author: org:unity
  - id: net8-aot
    resource: https://devblogs.microsoft.com/dotnet/announcing-asp-net-core-in-dotnet-8/
    title: ".NET Blog: Announcing ASP.NET Core in .NET 8"
    author: org:microsoft
---

# Summary
C# is the clearest **success story of a vendor re-platforming a language** in 2018–2026. The bet made in 2014–2016 — open-source the compiler (Roslyn) and runtime, go cross-platform with .NET Core — matured into the unified .NET 5+ line (2020) and a strict yearly November release train, each paired with a C# version (C# 8 in 2019 through C# 14 in 2025, C# 15 in preview for .NET 11).[^cs-history][^net11-p1] TIOBE named C# Language of the Year for 2023 and again for 2025 (+2.94 points in 2025), citing exactly that transition from a Windows-only proprietary language to a cross-platform open one;[^tiobe-2025] the Stack Overflow 2025 survey shows 27.8% of all respondents use it.[^so-2025] The language absorbed functional ideas aggressively — nullable reference types, records, switch expressions and list patterns, generic math — and is finally shipping native **union types** and `closed` hierarchies in C# 15.[^cs15] Weak spots: the decade-long wait for discriminated unions, nullable reference types that are warnings rather than guarantees, a mobile/desktop UI story that went from Xamarin to a struggling MAUI, and a few self-inflicted trust incidents (the 2021 Hot Reload removal).[^hot-reload][^xamarin-eos]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-09 | C# 8 with .NET Core 3.0: nullable reference types, async streams, default interface members, switch expressions[^cs-history] | + |
| E1 | 2020-03 | Microsoft freezes [Visual Basic](/languages/visual-basic.md) evolution, leaving C# as the sole evolving mainstream .NET language ([event](/events/2020-03-visual-basic-language-frozen.md)) | + |
| E2 | 2020-11 | C# 9 + [.NET 5](/events/2020-11-dotnet-5-unification.md): records, init-only setters, top-level statements, source generators[^cs-history] | + |
| E2 | 2021-10 | Hot Reload pulled from `dotnet watch` then restored after community backlash[^hot-reload] | − |
| E2 | 2021-11 | C# 10 / .NET 6 LTS: record structs, global usings, file-scoped namespaces[^cs-history] | + |
| E3 | 2022-11 | C# 11: generic math (static abstract interface members), list patterns, raw strings, required members[^cs-history] | + |
| E3 | 2023-02 | .NET language strategy: "aggressive language evolution for C#"; VB consumption-only[^lang-strategy] | + |
| E3 | 2023-11 | C# 12 / .NET 8 LTS: primary constructors, collection expressions; Native AOT for ASP.NET Core minimal APIs[^cs-history][^net8-aot] | + |
| E3 | 2024-05 | Xamarin end of support; mobile developers pushed to MAUI[^xamarin-eos] | − |
| E3 | 2024-08 | Visual Studio for Mac retired[^vsmac] | − |
| E4 | 2024-11 | C# 13: `params` collections, new `Lock` type, `ref struct` in generics[^cs-history] | + |
| E4 | 2025-11 | C# 14 / [.NET 10 LTS](/events/2025-11-dotnet-10-lts.md): extension members, `field` keyword, implicit Span conversions[^cs-history][^net10] | + |
| E4 | 2026-01 | TIOBE Language of the Year 2025 (second time in three years)[^tiobe-2025] | + |
| E4 | 2026 | C# 15 previews: `union` types, `closed` hierarchies, labeled break/continue, new `unsafe` memory-safety model[^cs15] | + |

# Ideas it bet on
| Idea | Outcome for C# |
|---|---|
| [Null safety](/ideas/types/null-safety.md) | Mixed — NRT (C# 8, 2019) became default-on in templates but is advisory (warnings), with library-annotation lag |
| [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md) | Succeeding late — rich patterns since C# 7–11; real unions only in C# 15 (2026 preview)[^cs15] |
| [Source generators](/ideas/metaprogramming/source-generators-and-annotation-processing.md) | Succeeded — shipped with C# 9/.NET 5; became the backbone of AOT-friendly JSON, regex, logging, minimal APIs |
| [AOT native images](/ideas/runtime-performance/aot-native-images.md) | Succeeding — Native AOT from .NET 7, ASP.NET Core support in .NET 8[^net8-aot] |
| [Value types](/ideas/runtime-performance/value-types.md) | Succeeded — `Span<T>`, `ref struct`, ref fields, inline arrays make zero-allocation code idiomatic |
| [Async/await](/ideas/concurrency/async-await-and-function-coloring.md) | Succeeded (C# invented the mainstream form) — now moving into the runtime ("runtime async" in .NET 11)[^net11-p1] |
| [Hot reload](/ideas/tooling-and-ecosystem/hot-reload-and-live-programming.md) | Mixed — shipped in .NET 6 but with a governance stumble[^hot-reload] |

# What succeeded
- **Cross-platform, open-source re-platforming.** TIOBE explicitly attributes C#'s 2025 rise to "breaking free from its exclusive Windows binding" and becoming open source.[^tiobe-2025] Linux containers and cloud APIs, not WinForms, became the growth engine.
- **Predictable cadence.** Every November since 2020 a new .NET and C# version; LTS every two years (6, 8, 10). Enterprises could plan upgrades, which Java's six-month train also showed works.[^cs-history]
- **Absorbing functional ideas without breaking code.** Records, `with`, switch expressions, list patterns, and now unions were added additively; old code keeps compiling.[^cs15]
- **Performance as a language feature.** `Span<T>`, ref fields, generic math and source generators let the BCL and ASP.NET Core be written in safe-ish C# and compete on TechEmpower-style benchmarks, and made Native AOT possible.[^net8-aot]
- **Games.** Unity (and Godot 4's C# support) keep C# the dominant scripting language in game engines; Unity is migrating from Mono to CoreCLR, targeting Unity 7.0 with .NET 10/C# 14.[^unity-coreclr]

# What failed or stalled
- **Discriminated unions took ~a decade.** Requested since the Roslyn-on-GitHub days and repeatedly deferred; they arrive only in C# 15 previews in 2026, years after Kotlin sealed classes, Java sealed interfaces (Java 17) and TypeScript unions.[^cs15]
- **Nullable reference types are not sound.** They are compile-time warnings, opt-in per project, and depend on library annotations — the "billion-dollar mistake" is mitigated, not fixed (see [null safety](/ideas/types/null-safety.md)).
- **Client UI fragmentation.** WinForms, WPF, UWP, WinUI 3, Xamarin.Forms, MAUI, Blazor Hybrid — Xamarin's end of support (2024-05-01) forced migrations to a MAUI that many found immature, and Microsoft retired Visual Studio for Mac (2024-08-31).[^xamarin-eos][^vsmac]
- **Trust incidents.** Removing Hot Reload from the open-source CLI to favour Visual Studio (Oct 2021) was reversed within days after backlash, reinforcing perceptions of single-vendor control.[^hot-reload]
- **Feature slippage.** The `field` keyword slipped from C# 13 to C# 14 and "extension everything" was talked about since the C# 8 era before landing as extension members in C# 14.[^cs-history]

# By era
## E1
C# 8 (Sept 2019) was the first C# version targeting .NET Core specifically, bringing NRT and async streams; .NET Framework was frozen at 4.8 as Microsoft committed to Core as the future.[^cs-history]
## E2
.NET 5 unified the platform name; C# 9 brought records and source generators; .NET 6 LTS (Nov 2021) completed most of the unification but the Hot Reload episode dented trust.[^cs-history][^hot-reload]
## E3
C# 11 generic math and C# 12 collection expressions; .NET 8 LTS made Native AOT practical for web APIs; Xamarin ended and VS for Mac was retired.[^net8-aot][^xamarin-eos][^vsmac] TIOBE Language of the Year 2023.[^tiobe-2025]
## E4
C# 13 and 14 (extension members, `field`), .NET 10 LTS (Nov 2025), TIOBE Language of the Year 2025, and C# 15 previews with unions and a redefined `unsafe` model framed as a memory-safety effort.[^net10][^tiobe-2025][^cs15] TIOBE's September 2026 index still lists C# 5th, though at 4.22%, well below its January peak — TIOBE numbers are volatile.[^tiobe-index]

# Lessons
- A language can be "rescued" from platform lock-in if the vendor open-sources the toolchain early and keeps shipping on a schedule; the payoff took ~8 years.
- Additive evolution (patterns → records → unions) avoids Python-3-style splits but leaves warnings-only safety features like NRT.
- Single-vendor stewardship is efficient but every misstep (Hot Reload, UI churn) is read as a governance problem.

# Related
- [.NET CLR](/runtimes/dotnet-clr.md), [Visual Basic](/languages/visual-basic.md), [F#](/languages/fsharp.md), [Java](/languages/java.md), [Kotlin](/languages/kotlin.md), [TypeScript](/languages/typescript.md)
- [.NET 5 unification](/events/2020-11-dotnet-5-unification.md), [.NET 10 LTS](/events/2025-11-dotnet-10-lts.md), [C# 8 nullable reference types](/events/2019-09-csharp-8-nullable-reference-types.md)

[^cs-history]: Microsoft Learn: The history of C# — https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history
[^cs15]: Microsoft Learn: What's new in C# 15 — https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-15
[^tiobe-2025]: InfoWorld: C# wins Tiobe Programming Language of the Year honors for 2025 — https://www.infoworld.com/article/4112993/c-wins-tiobe-programming-language-of-the-year-honors-for-2025.html
[^tiobe-index]: TIOBE Index (September 2026) — https://www.tiobe.com/tiobe-index/
[^so-2025]: Stack Overflow Developer Survey 2025: Technology — https://survey.stackoverflow.co/2025/technology
[^lang-strategy]: .NET Blog: Update to the .NET language strategy — https://devblogs.microsoft.com/dotnet/update-to-the-dotnet-language-strategy/
[^net10]: .NET Blog: Announcing .NET 10 — https://devblogs.microsoft.com/dotnet/announcing-dotnet-10/
[^net11-p1]: InfoQ: .NET 11 Preview 1 — https://www.infoq.com/news/2026/02/dotnet-11-preview1/
[^hot-reload]: Visual Studio Magazine: Microsoft reverses .NET 6 Hot Reload decision — https://visualstudiomagazine.com/articles/2021/10/25/net-hot-reload.aspx
[^xamarin-eos]: Microsoft: Xamarin support policy — https://dotnet.microsoft.com/en-us/platform/support/policy/xamarin
[^vsmac]: Microsoft Lifecycle: Visual Studio for Mac retirement — https://learn.microsoft.com/en-us/lifecycle/announcements/visual-studio-mac-end-of-servicing
[^unity-coreclr]: Unity Discussions: CoreCLR update, June 2026 — https://discussions.unity.com/t/coreclr-scripting-and-serialization-update-june-2026/1723299
[^net8-aot]: .NET Blog: Announcing ASP.NET Core in .NET 8 — https://devblogs.microsoft.com/dotnet/announcing-asp-net-core-in-dotnet-8/
