---
type: Event
title: .NET 5 ships, starting the merger of .NET Framework, .NET Core and Mono
description: Released 2020-11-10, .NET 5 dropped "Core" and skipped version 4 to signal one .NET going forward; the full unification (including Xamarin/Mono and MAUI) slipped to .NET 6 and was only completed on mobile in .NET 11 (2026).
event_kind: release
date: 2020-11-10
era: E2
impact: positive
languages: [languages/csharp, languages/fsharp, languages/visual-basic]
runtimes: [runtimes/dotnet-clr]
ideas: [ideas/metaprogramming/source-generators-and-annotation-processing]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: intro-net5
    resource: https://devblogs.microsoft.com/dotnet/introducing-net-5/
    title: ".NET Blog: Introducing .NET 5 (2019-05-06)"
    author: org:microsoft
  - id: net5-ga
    resource: https://visualstudiomagazine.com/articles/2020/11/10/net-5-ga.aspx
    title: "Visual Studio Magazine: .NET 5 Arrives"
  - id: cs-history
    resource: https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history
    title: "Microsoft Learn: The history of C#"
    author: org:microsoft
  - id: maui-coreclr
    resource: https://learn.microsoft.com/en-us/dotnet/maui/deployment/runtimes-compilation?view=net-maui-10.0
    title: "Microsoft Learn: Runtimes and compilation in .NET MAUI"
    author: org:microsoft
---

# What happened
Announced at Build in May 2019 as "one .NET going forward" targeting Windows, Linux, macOS, iOS, Android, tvOS, watchOS and WebAssembly, .NET 5 shipped on 2020-11-10.[^intro-net5][^net5-ga] It skipped version 4 to avoid confusion with .NET Framework 4.x and dropped "Core" from the name. At Build 2020 Microsoft had already deferred full unification — notably Xamarin's move to the shared libraries and MAUI — to .NET 6 LTS (Nov 2021), blaming the pandemic.[^net5-ga] C# 9 shipped alongside, with records, init-only setters, top-level statements and source generators.[^cs-history]

# Why it matters
.NET 5 ended the Framework/Core/Standard confusion and established the yearly November release train with LTS every second year that drove C#'s 2020s revival. The slip also showed how hard runtime consolidation is: Mono remained the mobile runtime until .NET 11 made CoreCLR the only MAUI runtime on Android, iOS and Mac Catalyst in 2026.[^maui-coreclr]

# Related
- [.NET CLR](/runtimes/dotnet-clr.md), [C#](/languages/csharp.md), [Visual Basic](/languages/visual-basic.md)
- [VB language frozen](/events/2020-03-visual-basic-language-frozen.md), [.NET 10 LTS](/events/2025-11-dotnet-10-lts.md)
- [Source generators](/ideas/metaprogramming/source-generators-and-annotation-processing.md)

[^intro-net5]: .NET Blog: Introducing .NET 5 — https://devblogs.microsoft.com/dotnet/introducing-net-5/
[^net5-ga]: Visual Studio Magazine: .NET 5 Arrives — https://visualstudiomagazine.com/articles/2020/11/10/net-5-ga.aspx
[^cs-history]: Microsoft Learn: The history of C# — https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history
[^maui-coreclr]: Microsoft Learn: Runtimes and compilation in .NET MAUI — https://learn.microsoft.com/en-us/dotnet/maui/deployment/runtimes-compilation?view=net-maui-10.0
