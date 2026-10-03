---
type: Language
title: F#
description: Microsoft's ML-family functional-first language for .NET. It has been stable and well loved but small through 2018–2026. Microsoft kept shipping a release each November (F# 5–10, F# 11 in preview), but releases shifted from new features to consolidation, while C# absorbed F#'s signature features (records, pattern matching, nullability).
tags: [functional, ml-family, dotnet, microsoft, fable]
paradigms: [functional, object-oriented, multi-paradigm]
typing: static
memory_model: gc
first_released: 2005
steward: Microsoft (F# team, Don Syme as language-design BDFL) / F# Software Foundation
governance: single-vendor
trajectory: stable
ideas: [ideas/types/sum-types-and-pattern-matching, ideas/types/null-safety, ideas/types/algebraic-effects-and-handlers]
runtimes: [runtimes/dotnet-clr]
adoption_signals:
  so_survey_usage_pct: { value: 1.3, as_of: 2025 }
  so_survey_usage_pct_prev: { value: 0.9, as_of: 2024 }
era_momentum: { E1: flat, E2: flat, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: so-2024
    resource: https://survey.stackoverflow.co/2024/technology
    title: "Stack Overflow Developer Survey 2024: Technology"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
  - id: tiobe
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index (September 2026)"
  - id: fs-wiki
    resource: https://en.wikipedia.org/wiki/F_Sharp_(programming_language)
    title: "Wikipedia: F Sharp (programming language)"
  - id: fs6
    resource: https://devblogs.microsoft.com/dotnet/whats-new-in-fsharp-6/
    title: ".NET Blog: What's new in F# 6"
  - id: fs9-null
    resource: https://devblogs.microsoft.com/dotnet/nullable-reference-types-in-fsharp-9/
    title: ".NET Blog: Nullable Reference Types in F# 9"
  - id: fs10
    resource: https://devblogs.microsoft.com/dotnet/introducing-fsharp-10/
    title: ".NET Blog: Introducing F# 10"
  - id: infoq-fs10
    resource: https://www.infoq.com/news/2025/11/fsharp-10-performance/
    title: "InfoQ: F# 10 Brings Performance Improvements"
  - id: net11-p1
    resource: https://devblogs.microsoft.com/dotnet/dotnet-11-preview-1/
    title: ".NET Blog: .NET 11 Preview 1 is now available (F# 11)"
  - id: fable4
    resource: https://fable.io/blog/2022/2022-06-06-Snake_Island_alpha.html
    title: "Fable: Announcing Snake Island (Fable 4) Alpha Release"
  - id: fssf
    resource: https://en.wikipedia.org/wiki/F_Sharp_Software_Foundation
    title: "Wikipedia: F Sharp Software Foundation"
---

# Summary
F# is the main example of a functional language that survives on a mainstream VM with a mainstream vendor behind it, yet never grows beyond a niche. Microsoft shipped a release every November with .NET: F# 6 added `task {}` (2021), F# 9 added nullable reference types (2024), and F# 10 (2025-11-11) was framed as a "refinement release focused on clarity, consistency, and performance".[^fs6][^fs9-null][^fs10][^infoq-fs10] F# 11 (.NET 11, previews through 2026) enables parallel compilation by default and removes ML-compatibility keywords.[^net11-p1] Usage is small but not shrinking: 0.9% (2024) and 1.3% (2025) on Stack Overflow. It does not appear in TIOBE's top 50.[^so-2024][^so-2025][^tiobe] **Verdict: stable niche.** Its biggest influence is indirect. C# picked up records, pattern matching, async and nullability, many of them first proven in F#, which reduced the reasons for .NET teams to switch.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2020-11 | F# 5 with .NET 5 (string interpolation, nameof, Jupyter) [^fs-wiki] | + |
| E2 | 2021-11 | F# 6: native `task {}` computation expression, perf work [^fs6] | + |
| E2 | 2022-06 | Fable 4 "Snake Island" alpha: Python, Rust, Dart targets [^fable4] | + |
| E3 | 2023-11 | F# 8 [^fs-wiki] | flat |
| E4 | 2024-11-12 | F# 9: nullable reference types (opt-in) [^fs9-null] | + |
| E4 | 2025-11-11 | F# 10: consolidation and compile-speed release [^fs10][^infoq-fs10] | flat |
| E4 | 2026 | F# 11 previews: parallel compilation default, ML-compat removed [^net11-p1] | flat |

# Ideas it bet on
| Idea | Outcome for F# |
|---|---|
| [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md) | Succeeded, and C# copied it |
| Computation expressions (monadic syntax) | Succeeded locally; C# async/await is the mainstream descendant |
| [Null safety](/ideas/types/null-safety.md) | Arrived late (F# 9) and mainly for C# interop [^fs9-null] |
| Type providers | Stalled; little uptake beyond data science demos |
| Multi-target compilation (Fable) | Mixed: JS is solid, the Python/Rust/Dart targets are experimental [^fable4] |

# What succeeded
- **Longevity on .NET.** F# ships every year with Visual Studio and has full access to NuGet. That makes it a low-risk functional option for .NET shops, especially in finance and analytics.[^fs10]
- **Exporting ideas to C#.** Records, pattern matching, tuples, async workflows and immutability defaults show F# as Microsoft's internal design lab.
- **Fable** gave F# a credible front-end story (Elmish) and later experimental targets beyond JS.[^fable4]

# What failed or stalled
- **No growth flywheel.** Microsoft marketing and tooling prioritise C#. Releases since F# 8 have focused on compiler speed and consistency rather than features that would attract new users.[^infoq-fs10]
- **Tooling lag.** IDE support and compile times have long been the top complaints, which is why F# 10 and 11 focus on caching and parallel compilation.[^fs10][^net11-p1]
- **A small community foundation.** The F# Software Foundation has about 1,800 members and no large budget.[^fssf]

# By era
## E1
F# 4.5–4.7 shipped on .NET Core. The community grew around SAFE Stack and Fable.
## E2
F# 5 and F# 6 brought `task {}`, closing the performance gap with C# async, and Fable 4 started on multiple targets.[^fs6][^fable4]
## E3
F# 7 and F# 8 were incremental. C# 11–12 had absorbed most of F#'s distinctive features.
## E4
F# 9 (nullness), F# 10 (consolidation) and the F# 11 previews.[^fs9-null][^fs10][^net11-p1]

# Lessons
- Vendor backing keeps a language alive, but it does not make it grow when the vendor's flagship language copies its best features.
- Having the same runtime and libraries reduces the switching cost to F#, and also reduces the reason to switch.

# Related
- [C#](/languages/csharp.md), [.NET CLR](/runtimes/dotnet-clr.md), [OCaml](/languages/ocaml.md), [Haskell](/languages/haskell.md)
- [Null safety](/ideas/types/null-safety.md), [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md)

[^so-2024]: Stack Overflow Developer Survey 2024 — https://survey.stackoverflow.co/2024/technology
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^tiobe]: TIOBE Index — https://www.tiobe.com/tiobe-index/
[^fs-wiki]: Wikipedia: F Sharp — https://en.wikipedia.org/wiki/F_Sharp_(programming_language)
[^fs6]: What's new in F# 6 — https://devblogs.microsoft.com/dotnet/whats-new-in-fsharp-6/
[^fs9-null]: Nullable Reference Types in F# 9 — https://devblogs.microsoft.com/dotnet/nullable-reference-types-in-fsharp-9/
[^fs10]: Introducing F# 10 — https://devblogs.microsoft.com/dotnet/introducing-fsharp-10/
[^infoq-fs10]: InfoQ: F# 10 Brings Performance Improvements — https://www.infoq.com/news/2025/11/fsharp-10-performance/
[^net11-p1]: .NET 11 Preview 1 — https://devblogs.microsoft.com/dotnet/dotnet-11-preview-1/
[^fable4]: Fable 4 Snake Island alpha — https://fable.io/blog/2022/2022-06-06-Snake_Island_alpha.html
[^fssf]: Wikipedia: F Sharp Software Foundation — https://en.wikipedia.org/wiki/F_Sharp_Software_Foundation
