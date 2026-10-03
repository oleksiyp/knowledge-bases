---
type: Language
title: Visual Basic (VB.NET, VB6, VBA, VBScript)
description: Microsoft froze Visual Basic .NET as a language in March 2020 and moved it to "consumption-only" in 2023, and began removing VBScript from Windows in 2024; yet a huge installed base of VB.NET, VB6 and VBA code keeps "Visual Basic" in TIOBE's top 10 — the canonical example of a language that is managed into maintenance rather than killed.
tags: [managed, dotnet, microsoft, legacy, office, maintenance-mode]
paradigms: [object-oriented, imperative, event-driven]
typing: static
memory_model: gc
first_released: 1991
steward: Microsoft (.NET team; Office for VBA; Windows for VBScript)
governance: single-vendor
trajectory: declining
ideas:
  - ideas/tooling-and-ecosystem/language-editions-and-evolution
  - ideas/metaprogramming/source-generators-and-annotation-processing
runtimes: [runtimes/dotnet-clr]
adoption_signals:
  tiobe_rank: { value: 7, as_of: 2026-09 }
  so_survey_usage_pct: { value: 4.4, as_of: 2025, note: "Visual Basic (.Net); VBA separately 4.2%" }
era_momentum: { E1: down, E2: down, E3: flat, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: vb-net5
    resource: https://devblogs.microsoft.com/vbteam/visual-basic-support-planned-for-net-5-0/
    title: "Visual Basic Blog: Visual Basic support planned for .NET 5.0 (2020-03-11)"
    author: org:microsoft
  - id: vsm-2020
    resource: https://visualstudiomagazine.com/articles/2020/03/12/vb-in-net-5.aspx
    title: "Visual Studio Magazine: Microsoft: 'We Do Not Plan to Evolve Visual Basic as a Language'"
  - id: lang-strategy
    resource: https://devblogs.microsoft.com/dotnet/update-to-the-dotnet-language-strategy/
    title: ".NET Blog: Update to the .NET language strategy (2023-02-06)"
    author: org:microsoft
  - id: devclass-2023
    resource: https://devclass.com/2023/02/07/microsoft-updates-its-net-language-strategy-keeps-visual-basic-alive-but-near-frozen/
    title: "DevClass: Microsoft updates its .NET language strategy, keeps Visual Basic alive but near-frozen"
  - id: vb169
    resource: https://www.infoq.com/news/2021/03/VB-16-9/
    title: "InfoQ: Visual Basic 16.9 (consumption of init-only properties, source generators)"
  - id: vbscript
    resource: https://visualstudiomagazine.com/articles/2024/05/30/vbscript-deprecation.aspx
    title: "Visual Studio Magazine: Microsoft Axing VBScript in Favor of JavaScript/PowerShell: Here's the Timeline"
  - id: vba-vbscript
    resource: https://devblogs.microsoft.com/microsoft365dev/how-to-prepare-vba-projects-for-vbscript-deprecation/
    title: "Microsoft 365 Developer Blog: Prepare your VBA projects for VBScript deprecation in Windows"
    author: org:microsoft
  - id: tiobe-index
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index (September 2026)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
---

# Summary
Visual Basic is the clearest case in this KB of a **language deliberately put into maintenance mode by its own vendor**. On 2020-03-11 Microsoft announced VB would run on .NET 5 (WinForms, WPF, console, libraries, Worker Service, Web API) but "going forward, we do not plan to evolve Visual Basic as a language."[^vb-net5] The February 2023 .NET language strategy formalised a "consumption-only" approach: VB may consume new C#/runtime features but gets no new syntax and will not be extended to new workloads.[^lang-strategy][^devclass-2023] In parallel, Windows began a three-phase removal of VBScript (announced May 2024; Feature-on-Demand in Windows 11 24H2, disabled by default ~2026–27, removed later).[^vbscript] Yet the code base is enormous: TIOBE ranked "Visual Basic" (a bucket that includes VB.NET, VB6 and VBA) 7th in September 2026, and 4.4% of Stack Overflow's 2025 respondents use VB.NET, 4.2% VBA.[^tiobe-index][^so-2025] Verdict: commercially alive, linguistically dead — a managed decline rather than a failure.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-09 | .NET Core 3.0 adds VB support for console/class libraries only | mixed |
| E1 | 2020-03-11 | "We do not plan to evolve Visual Basic as a language" — VB gets .NET 5 app models but no new language work[^vb-net5][^vsm-2020] ([event](/events/2020-03-visual-basic-language-frozen.md)) | − |
| E2 | 2021-03 | VB 16.9: consume init-only properties, source generators, default interface methods — no authoring[^vb169] | mixed |
| E3 | 2023-02-06 | .NET language strategy: VB "consumption-only", no new workloads[^lang-strategy][^devclass-2023] | − |
| E3 | 2024-05 | VBScript deprecation timeline published (three phases)[^vbscript] | − |
| E4 | 2024-10 | Windows 11 24H2 ships VBScript as Feature on Demand (phase 1)[^vbscript] | − |
| E4 | 2025 | Office guidance: VBA projects calling VBScript (e.g. RegExp) must migrate[^vba-vbscript] | − |
| E4 | 2026-09 | Still #7 on TIOBE at 2.55%[^tiobe-index] | mixed |

# Ideas it bet on
| Idea | Outcome for VB |
|---|---|
| Language parity with C# on .NET (2002–2017 co-evolution) | Abandoned — the cost of mirroring every C# feature (pattern matching, records, NRT) was judged not worth it[^vb-net5] |
| [Source generators](/ideas/metaprogramming/source-generators-and-annotation-processing.md) | Consumption-only: VB can use generators written in C#[^vb169] |
| [Language evolution strategy](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md) | Explicit freeze as a stability promise — a rare, honest end-of-evolution statement |

# What succeeded
- **Stability as a feature.** The freeze let Microsoft promise that VB.NET code would keep running on modern .NET, which carried WinForms and line-of-business apps from .NET Framework to .NET 5+.[^vb-net5]
- **Installed base.** VBA remains the automation language of Excel/Access; TIOBE and Stack Overflow numbers show sustained use far exceeding mindshare.[^tiobe-index][^so-2025]
- **Interop rather than isolation.** Consumption-only means VB can still call modern libraries that use init-only properties, generators and default interface methods.[^vb169]

# What failed or stalled
- **Language evolution ended.** No pattern matching, records, nullable reference types or unions; VB cannot author many APIs that modern .NET libraries assume.[^lang-strategy]
- **New workloads closed.** No official Blazor, MAUI or ASP.NET Core MVC-template investment; new developers are steered to C#.[^devclass-2023]
- **VBScript removal.** The scripting branch is being removed from Windows entirely, breaking legacy admin scripts and Office macros that call it.[^vbscript][^vba-vbscript]
- **TIOBE overstates health.** High search-engine hit counts reflect legacy questions and VBA, not new projects; survey usage is ~4%.[^so-2025]

# By era
## E1
.NET Core 3.0 offered VB only for libraries and console apps; the March 2020 announcement set the end of language evolution.[^vb-net5]
## E2
VB 16.9 (2021) was a tidy-up release focused on consuming C# features; the VB GitHub language repo went quiet.[^vb169]
## E3
The 2023 strategy update made consumption-only official; VBScript deprecation announced.[^lang-strategy][^vbscript]
## E4
VBScript becomes optional in Windows 11 24H2; VB.NET continues on .NET 10 LTS with no new syntax; TIOBE ranks it 7th.[^vbscript][^tiobe-index]

# Lessons
- Vendors can freeze a language without killing its users if the runtime keeps supporting it — far cheaper for customers than a Python-2-style forced migration.
- Popularity indices lag reality badly for legacy languages; usage surveys and new-project signals are more honest.
- Parallel "twin" languages on one runtime (C#/VB) are expensive; when the vendor must choose, the larger community wins.

# Related
- [C#](/languages/csharp.md), [.NET CLR](/runtimes/dotnet-clr.md), [COBOL and Fortran](/languages/cobol-fortran-legacy.md)
- [VB language frozen (2020)](/events/2020-03-visual-basic-language-frozen.md)

[^vb-net5]: Visual Basic Blog: Visual Basic support planned for .NET 5.0 — https://devblogs.microsoft.com/vbteam/visual-basic-support-planned-for-net-5-0/
[^vsm-2020]: Visual Studio Magazine: 'We Do Not Plan to Evolve Visual Basic as a Language' — https://visualstudiomagazine.com/articles/2020/03/12/vb-in-net-5.aspx
[^lang-strategy]: .NET Blog: Update to the .NET language strategy — https://devblogs.microsoft.com/dotnet/update-to-the-dotnet-language-strategy/
[^devclass-2023]: DevClass: Microsoft keeps Visual Basic alive but near-frozen — https://devclass.com/2023/02/07/microsoft-updates-its-net-language-strategy-keeps-visual-basic-alive-but-near-frozen/
[^vb169]: InfoQ: Visual Basic 16.9 — https://www.infoq.com/news/2021/03/VB-16-9/
[^vbscript]: Visual Studio Magazine: VBScript deprecation timeline — https://visualstudiomagazine.com/articles/2024/05/30/vbscript-deprecation.aspx
[^vba-vbscript]: Microsoft 365 Developer Blog: Prepare your VBA projects for VBScript deprecation — https://devblogs.microsoft.com/microsoft365dev/how-to-prepare-vba-projects-for-vbscript-deprecation/
[^tiobe-index]: TIOBE Index (September 2026) — https://www.tiobe.com/tiobe-index/
[^so-2025]: Stack Overflow Developer Survey 2025: Technology — https://survey.stackoverflow.co/2025/technology
