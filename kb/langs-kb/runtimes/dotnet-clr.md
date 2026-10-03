---
type: Runtime
title: .NET runtime (CoreCLR, Mono, Native AOT)
description: Microsoft's open-source managed runtime; 2018–2026 saw the .NET Framework/Core/Mono split collapse into one .NET (5 in 2020, 6 LTS in 2021) with CoreCLR finally replacing Mono on mobile in .NET 11 (2026), plus a run of JIT/GC wins (tiered compilation, dynamic PGO, DATAS, Native AOT, runtime async) — a strong success with lingering gaps on WebAssembly and client UI.
tags: [managed, jit, aot, gc, microsoft, open-source, cross-platform]
runtime_kind: vm
languages: [languages/csharp, languages/fsharp, languages/visual-basic]
ideas:
  - ideas/runtime-performance/aot-native-images
  - ideas/runtime-performance/low-pause-gc
  - ideas/runtime-performance/value-types
  - ideas/concurrency/async-await-and-function-coloring
  - ideas/tooling-and-ecosystem/hot-reload-and-live-programming
  - ideas/runtime-performance/startup-snapshotting
steward: Microsoft (.NET team); .NET Foundation
governance: single-vendor
trajectory: growing
first_released: 2002
adoption_signals:
  so_survey_dotnet8plus_pct: { value: 19.2, as_of: 2025, note: "'.NET 8+' tag, all respondents" }
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: net5-ga
    resource: https://visualstudiomagazine.com/articles/2020/11/10/net-5-ga.aspx
    title: "Visual Studio Magazine: .NET 5 Arrives"
  - id: net7
    resource: https://devblogs.microsoft.com/dotnet/announcing-dotnet-7/
    title: ".NET Blog: Announcing .NET 7"
    author: org:microsoft
  - id: net8-aspnet
    resource: https://devblogs.microsoft.com/dotnet/announcing-asp-net-core-in-dotnet-8/
    title: ".NET Blog: Announcing ASP.NET Core in .NET 8"
    author: org:microsoft
  - id: net8-perf
    resource: https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-8/
    title: ".NET Blog: Performance Improvements in .NET 8 (Stephen Toub)"
    author: org:microsoft
  - id: devclass-pgo
    resource: https://devclass.com/2023/09/18/most-valuable-change-in-net-8-dynamic-optimization-on-by-default-says-microsoft/
    title: "DevClass: Most valuable change in .NET 8? Dynamic optimization on by default"
  - id: datas
    resource: https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/datas
    title: "Microsoft Learn: Dynamic adaptation to application sizes (DATAS)"
    author: org:microsoft
  - id: net10
    resource: https://devblogs.microsoft.com/dotnet/announcing-dotnet-10/
    title: ".NET Blog: Announcing .NET 10"
    author: org:microsoft
  - id: net11-p1
    resource: https://www.infoq.com/news/2026/02/dotnet-11-preview1/
    title: "InfoQ: .NET 11 Preview 1 Arrives with Runtime Async, Zstandard Support, and C# 15 Features"
  - id: net11-rc1
    resource: https://github.com/dotnet/core/discussions/10569
    title: "GitHub dotnet/core: .NET 11 Release Candidate 1 (2026-09-08)"
    author: org:microsoft
  - id: maui-coreclr
    resource: https://learn.microsoft.com/en-us/dotnet/maui/deployment/runtimes-compilation?view=net-maui-10.0
    title: "Microsoft Learn: Runtimes and compilation in .NET MAUI"
    author: org:microsoft
  - id: mono-wine
    resource: https://lwn.net/Articles/987465/
    title: "LWN: WineHQ to take over Mono"
  - id: sts-24
    resource: https://www.infoq.com/news/2025/09/microsoft-extends-dotnet-sts/
    title: "InfoQ: Microsoft Extends Support Period for .NET STS Releases from 18 to 24 Months"
  - id: maui-aot
    resource: https://learn.microsoft.com/en-us/dotnet/maui/deployment/nativeaot?view=net-maui-10.0
    title: "Microsoft Learn: Native AOT deployment on iOS and Mac Catalyst"
    author: org:microsoft
  - id: android-aot-issue
    resource: https://github.com/dotnet/runtime/issues/106748
    title: "GitHub dotnet/runtime #106748: NativeAOT status for Android"
  - id: unity-coreclr
    resource: https://discussions.unity.com/t/coreclr-scripting-and-serialization-update-june-2026/1723299
    title: "Unity Discussions: CoreCLR, Scripting, and Serialization Update — June 2026"
    author: org:unity
  - id: intro-net5
    resource: https://devblogs.microsoft.com/dotnet/introducing-net-5/
    title: ".NET Blog: Introducing .NET 5 (2019-05-06)"
    author: org:microsoft
  - id: core3
    resource: https://devblogs.microsoft.com/dotnet/announcing-net-core-3-0/
    title: ".NET Blog: Announcing .NET Core 3.0"
    author: org:microsoft
  - id: hot-reload
    resource: https://visualstudiomagazine.com/articles/2021/10/25/net-hot-reload.aspx
    title: "Visual Studio Magazine: Developer Feedback Makes Microsoft Reverse .NET 6 Hot Reload Decision"
---

# Summary
In October 2018 ".NET" meant three runtimes — Windows-only .NET Framework, cross-platform .NET Core 2.x (CoreCLR), and Mono/Xamarin for mobile, WebAssembly and Unity. By 2026 they are effectively one: .NET 5 (2020-11-10) dropped "Core" and the 4.x number, .NET 6 LTS (2021) completed most of the unification, Microsoft handed the original Mono project to WineHQ (2024-08-27), and in .NET 11 (RC1 2026-09-08) CoreCLR becomes the default and then only runtime for .NET MAUI on Android, iOS and Mac Catalyst, ending two decades of Mono on mobile.[^net5-ga][^mono-wine][^maui-coreclr][^net11-rc1] Along the way the runtime shipped a steady run of performance ideas — dynamic PGO on by default (.NET 8), DATAS adaptive server GC (default in .NET 9), Native AOT (.NET 7+, ASP.NET Core in .NET 8) and "runtime async", the first change to async execution since C# 5 (.NET 11).[^devclass-pgo][^datas][^net8-aspnet][^net11-p1] Remaining gaps: WebAssembly (Blazor) still runs on Mono, Native AOT on Android is experimental, and reflection-heavy libraries resist AOT.[^net11-p1][^android-aot-issue] Verdict: a successful consolidation and performance story.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-05 | Plan announced to unify Framework/Core/Mono as ".NET 5"[^intro-net5] | + |
| E1 | 2019-09 | .NET Core 3.0: tiered compilation on by default, WinForms/WPF on Core (Windows), `Span`-based BCL[^core3] | + |
| E2 | 2020-11-10 | [.NET 5 ships](/events/2020-11-dotnet-5-unification.md); full unification deferred to .NET 6[^net5-ga] | mixed |
| E2 | 2021-10 | Hot Reload removed from open-source `dotnet watch`, restored after backlash[^hot-reload] | − |
| E2 | 2021-11 | .NET 6 LTS; MAUI slips to May 2022 | mixed |
| E3 | 2022-11-08 | .NET 7: Native AOT for console apps[^net7] | + |
| E3 | 2023-11 | .NET 8 LTS: dynamic PGO default ("most valuable PR in .NET 8"), Native AOT for ASP.NET Core minimal APIs/gRPC, DATAS opt-in[^devclass-pgo][^net8-aspnet][^datas] | + |
| E3 | 2024-08-27 | Microsoft transfers the original Mono project to WineHQ[^mono-wine] | mixed |
| E4 | 2024-11 | .NET 9: DATAS on by default for Server GC; NativeAOT supported on iOS/Mac Catalyst[^datas][^maui-aot] | + |
| E4 | 2025-09 | STS support extended from 18 to 24 months, starting with .NET 9[^sts-24] | + |
| E4 | 2025-11-11 | [.NET 10 LTS](/events/2025-11-dotnet-10-lts.md): JIT inlining/devirtualization, AVX10.2, Arm64 GC pause reductions[^net10] | + |
| E4 | 2026-02 | .NET 11 Preview 1: runtime async; CoreCLR-on-WebAssembly work begins[^net11-p1] | + |
| E4 | 2026-09-08 | .NET 11 RC1 (go-live); CoreCLR is the only MAUI runtime on Android/iOS/Mac Catalyst[^net11-rc1][^maui-coreclr] | + |

# Ideas it bet on
| Idea | Outcome for .NET |
|---|---|
| [AOT native images](/ideas/runtime-performance/aot-native-images.md) | Succeeding — Native AOT production-ready for console/cloud APIs (87% smaller, 80% faster startup in Microsoft's ASP.NET test); Android still experimental[^net8-aspnet][^android-aot-issue] |
| Profile-guided JIT (tiering + dynamic PGO) | Succeeded — default since .NET 8, broad free speedups[^net8-perf] |
| [Low-pause / adaptive GC](/ideas/runtime-performance/low-pause-gc.md) | Succeeded incrementally — regions (.NET 7), DATAS (.NET 9 default)[^datas] |
| [Value types](/ideas/runtime-performance/value-types.md) | Succeeded — structs, `Span<T>`, ref fields were in the runtime from day one; the JVM is still catching up via Valhalla |
| [Async/await](/ideas/concurrency/async-await-and-function-coloring.md) in the runtime | Promising — runtime async in .NET 11 moves state machines from compiler to VM[^net11-p1] |
| [Hot reload](/ideas/tooling-and-ecosystem/hot-reload-and-live-programming.md) | Mixed — shipped, but with a governance stumble[^hot-reload] |
| Single runtime everywhere (replace Mono) | Mostly succeeded by 2026; WebAssembly remaining[^maui-coreclr][^net11-p1] |

# What succeeded
- **Consolidation.** Moving everyone to one runtime, one BCL and a yearly November cadence with alternating LTS removed the Framework/Core/Standard confusion of 2016–2019.[^net5-ga]
- **Performance culture.** Annual "Performance Improvements in .NET N" posts document hundreds of JIT/GC/BCL changes; dynamic PGO on by default delivered speedups (e.g. ~40% on an `IList` microbenchmark) without code changes.[^devclass-pgo][^net8-perf]
- **Cloud-native footprint.** Native AOT plus source generators make small, fast-starting containers and Lambda functions viable; DATAS lets Server GC run in memory-constrained containers.[^net8-aspnet][^datas]
- **Ecosystem pull.** Unity is replacing its Mono fork with CoreCLR (Unity 7.0 targets .NET 10/C# 14), a strong vote for the runtime even if delayed.[^unity-coreclr]
- **Support policy.** Extending STS releases to 24 months (2025) acknowledged real enterprise pain.[^sts-24]

# What failed or stalled
- **Unification took two extra years.** .NET 5 promised one .NET; the pandemic pushed full unification and MAUI to .NET 6 and beyond, and mobile still ran on Mono until .NET 11 (2026).[^net5-ga][^maui-coreclr]
- **WebAssembly lags.** Blazor WebAssembly still uses Mono; CoreCLR-on-Wasm is only beginning in .NET 11.[^net11-p1]
- **Native AOT limits.** Reflection, dynamic code generation and many ORMs/serialisers needed rewrites to source generators; Android Native AOT remained experimental through .NET 10.[^android-aot-issue]
- **Unity's migration is slow.** Unity's CoreCLR switch, discussed since 2018, is scheduled for Unity 7.0 with performance work deferred to 2027.[^unity-coreclr]

# By era
## E1
.NET Core 3.0 (2019) made tiered compilation default and brought desktop app models to Core; .NET Framework 4.8 became the last major Framework.
## E2
.NET 5 (Nov 2020) and .NET 6 LTS (Nov 2021) unified branding and most APIs; Hot Reload controversy.[^net5-ga][^hot-reload]
## E3
.NET 7 Native AOT; .NET 8 dynamic PGO default and AOT for web APIs; Mono handed to WineHQ.[^net7][^devclass-pgo][^mono-wine]
## E4
.NET 9 DATAS default, .NET 10 LTS JIT gains, .NET 11 runtime async and CoreCLR-only mobile.[^datas][^net10][^net11-p1][^maui-coreclr]

# Lessons
- Consolidating runtimes is a multi-year job; promise dates conservatively (.NET 5 → 6 → 11).
- Performance improvements delivered "for free" via the runtime (PGO, GC adaptivity) win more goodwill than opt-in APIs.
- AOT forces a metaprogramming shift from runtime reflection to compile-time generation.

# Related
- [C#](/languages/csharp.md), [Visual Basic](/languages/visual-basic.md), [F#](/languages/fsharp.md)
- [HotSpot/OpenJDK](/runtimes/hotspot-openjdk.md), [GraalVM](/runtimes/graalvm.md), [Android ART](/runtimes/android-art.md)
- [.NET 5 unification](/events/2020-11-dotnet-5-unification.md), [.NET 10 LTS](/events/2025-11-dotnet-10-lts.md)

[^net5-ga]: Visual Studio Magazine: .NET 5 Arrives — https://visualstudiomagazine.com/articles/2020/11/10/net-5-ga.aspx
[^net7]: .NET Blog: Announcing .NET 7 — https://devblogs.microsoft.com/dotnet/announcing-dotnet-7/
[^net8-aspnet]: .NET Blog: Announcing ASP.NET Core in .NET 8 — https://devblogs.microsoft.com/dotnet/announcing-asp-net-core-in-dotnet-8/
[^net8-perf]: .NET Blog: Performance Improvements in .NET 8 — https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-8/
[^devclass-pgo]: DevClass: Dynamic optimization on by default in .NET 8 — https://devclass.com/2023/09/18/most-valuable-change-in-net-8-dynamic-optimization-on-by-default-says-microsoft/
[^datas]: Microsoft Learn: DATAS — https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/datas
[^net10]: .NET Blog: Announcing .NET 10 — https://devblogs.microsoft.com/dotnet/announcing-dotnet-10/
[^net11-p1]: InfoQ: .NET 11 Preview 1 — https://www.infoq.com/news/2026/02/dotnet-11-preview1/
[^net11-rc1]: GitHub dotnet/core: .NET 11 RC1 — https://github.com/dotnet/core/discussions/10569
[^maui-coreclr]: Microsoft Learn: Runtimes and compilation in .NET MAUI — https://learn.microsoft.com/en-us/dotnet/maui/deployment/runtimes-compilation?view=net-maui-10.0
[^mono-wine]: LWN: WineHQ to take over Mono — https://lwn.net/Articles/987465/
[^sts-24]: InfoQ: .NET STS support extended to 24 months — https://www.infoq.com/news/2025/09/microsoft-extends-dotnet-sts/
[^maui-aot]: Microsoft Learn: Native AOT on iOS and Mac Catalyst — https://learn.microsoft.com/en-us/dotnet/maui/deployment/nativeaot?view=net-maui-10.0
[^android-aot-issue]: GitHub dotnet/runtime #106748: NativeAOT status for Android — https://github.com/dotnet/runtime/issues/106748
[^unity-coreclr]: Unity Discussions: CoreCLR update, June 2026 — https://discussions.unity.com/t/coreclr-scripting-and-serialization-update-june-2026/1723299
[^hot-reload]: Visual Studio Magazine: .NET 6 Hot Reload reversal — https://visualstudiomagazine.com/articles/2021/10/25/net-hot-reload.aspx
[^intro-net5]: .NET Blog: Introducing .NET 5 — https://devblogs.microsoft.com/dotnet/introducing-net-5/
[^core3]: .NET Blog: Announcing .NET Core 3.0 — https://devblogs.microsoft.com/dotnet/announcing-net-core-3-0/
