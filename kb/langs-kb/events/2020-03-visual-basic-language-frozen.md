---
type: Event
title: Microsoft stops evolving Visual Basic .NET
description: On 2020-03-11 Microsoft said VB would run on .NET 5 but "we do not plan to evolve Visual Basic as a language", ending two decades of C#/VB co-evolution; the 2023 language strategy made VB "consumption-only".
event_kind: deprecation
date: 2020-03-11
era: E1
impact: negative
languages: [languages/visual-basic, languages/csharp]
runtimes: [runtimes/dotnet-clr]
ideas: [ideas/tooling-and-ecosystem/language-editions-and-evolution]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: vb-net5
    resource: https://devblogs.microsoft.com/vbteam/visual-basic-support-planned-for-net-5-0/
    title: "Visual Basic Blog: Visual Basic support planned for .NET 5.0"
    author: org:microsoft
  - id: register
    resource: https://www.theregister.com/software/2020/03/12/microsoft-throws-a-bone-to-those-unable-to-leave-the-past-behind-net-5-support-on-the-way-for-visual-basic/700284
    title: "The Register: .NET 5 support on the way for Visual Basic"
  - id: lang-strategy
    resource: https://devblogs.microsoft.com/dotnet/update-to-the-dotnet-language-strategy/
    title: ".NET Blog: Update to the .NET language strategy (2023-02-06)"
    author: org:microsoft
  - id: tiobe-index
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index (September 2026)"
---

# What happened
In a 2020-03-11 post, Microsoft announced that Visual Basic would support more application types on .NET 5 — Windows Forms, WPF, Worker Service and ASP.NET Core Web API in addition to console and class libraries — but that "going forward, we do not plan to evolve Visual Basic as a language," citing stability and compatibility between the .NET Framework and .NET Core versions of VB.[^vb-net5] It also warned that future .NET features requiring language changes "may not be supported in Visual Basic".[^register] In February 2023 the .NET language strategy formalised this as a "consumption-only" approach with no extension to new workloads.[^lang-strategy]

# Why it matters
It is the cleanest example in 2018–2026 of a vendor ending a mainstream language's evolution without ending its support. Microsoft stopped paying the cost of mirroring every C# feature (records, pattern matching, nullable reference types) in a second syntax, concentrating design effort on [C#](/languages/csharp.md). Customers kept a migration path to modern [.NET](/runtimes/dotnet-clr.md) instead of a forced rewrite. The VB code base did not vanish: TIOBE still ranked "Visual Basic" 7th in September 2026.[^tiobe-index]

# Related
- [Visual Basic](/languages/visual-basic.md), [C#](/languages/csharp.md), [.NET CLR](/runtimes/dotnet-clr.md)
- [.NET 5 unification](/events/2020-11-dotnet-5-unification.md)
- [Language editions and evolution](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md)

[^vb-net5]: Visual Basic Blog: Visual Basic support planned for .NET 5.0 — https://devblogs.microsoft.com/vbteam/visual-basic-support-planned-for-net-5-0/
[^register]: The Register: .NET 5 support on the way for Visual Basic — https://www.theregister.com/software/2020/03/12/microsoft-throws-a-bone-to-those-unable-to-leave-the-past-behind-net-5-support-on-the-way-for-visual-basic/700284
[^lang-strategy]: .NET Blog: Update to the .NET language strategy — https://devblogs.microsoft.com/dotnet/update-to-the-dotnet-language-strategy/
[^tiobe-index]: TIOBE Index — https://www.tiobe.com/tiobe-index/
