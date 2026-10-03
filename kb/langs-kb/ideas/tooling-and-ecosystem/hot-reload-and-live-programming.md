---
type: Idea
title: Hot reload and live programming
description: "Changing running code without restarting and losing state, from Smalltalk images and Erlang hot code loading to Flutter's stateful hot reload, React Fast Refresh, Vite HMR, .NET Hot Reload and Rust hot-patching. 2018–2026 verdict: succeeded for UI development (Flutter, the web, .NET) and spread to compiled languages by 2025. 'Live programming' in the strong research sense stayed niche."
area: tooling-and-ecosystem
tags: [hot-reload, hmr, flutter, dotnet, live-programming, developer-experience, erlang, rust]
outcome: succeeded
maturity_2026: mainstream
origin_year: 1980
mainstream_year: 2018
languages: [languages/dart, languages/javascript, languages/typescript, languages/csharp, languages/rust, languages/erlang, languages/elixir, languages/clojure, languages/swift]
runtimes: [runtimes/dotnet-clr, runtimes/beam, runtimes/v8]
related_ideas: [ideas/tooling-and-ecosystem/integrated-toolchains, ideas/concurrency/actor-model, ideas/runtime-performance/startup-snapshotting]
era_momentum: { E1: up, E2: up, E3: flat, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: reg-hotreload
    resource: https://www.theregister.com/software/2021/10/22/microsofts-hot-reload-decision-angers-open-source-net-devs/1049792
    title: "The Register: Microsoft's Hot Reload decision angers open-source .NET devs"
  - id: hr-revert
    resource: https://github.com/dotnet/sdk/pull/22262
    title: "GitHub dotnet/sdk PR #22262: Revert 'Remove Hot Reload support from dotnet watch'"
  - id: neowin-revert
    resource: https://www.neowin.net/news/after-community-outcry-microsoft-apologizes-and-restores-hot-reload-to-net-watch/
    title: "Neowin: After community outcry, Microsoft apologizes and restores Hot Reload to dotnet watch"
  - id: flutter-335
    resource: https://blog.flutter.dev/whats-new-in-flutter-3-35-c58ef72e3766
    title: "Flutter blog: What's new in Flutter 3.35 (web hot reload, widget previews)"
  - id: subsecond
    resource: https://dioxuslabs.com/blog/release-070/
    title: "Dioxus blog: Dioxus 0.7 (Subsecond hot-patching)"
  - id: subsecond-hn
    resource: https://news.ycombinator.com/item?id=44369642
    title: "Hacker News: Subsecond — a runtime hotpatching engine for Rust hot-reloading"
  - id: aspnet-hr
    resource: https://learn.microsoft.com/he-il/aspnet/core/test/hot-reload?view=aspnetcore-7.0
    title: "Microsoft Learn: .NET Hot Reload support for ASP.NET Core"
---

# Summary

**Succeeded where the feedback loop is visual. Partial elsewhere.** Flutter made *stateful* hot
reload (sub-second, app state kept) a selling point for a mainstream UI framework from its 1.0
release (December 2018). The web standardised it through React Fast Refresh and Vite's HMR.
Microsoft shipped .NET Hot Reload in .NET 6 (2021), and Flutter brought stateful hot reload to the
web by default in 3.35 (2025).[^flutter-335] In 2025 the idea reached Rust through Dioxus's
Subsecond runtime hot-patching engine.[^subsecond] The clearest lesson came from a failure of
stewardship. In October 2021 Microsoft removed hot reload from the open-source `dotnet watch` to
keep it exclusive to Visual Studio, and reversed the decision within days after a public outcry.[^reg-hotreload][^neowin-revert]
Live programming in the stronger sense, where the program's state stays continuously visible and
editable, stayed mostly in research and in REPL cultures (Clojure, Smalltalk, Lisp).

# The idea

Replace code in a running process (functions, classes, UI components) while keeping its heap state,
so the edit-run-navigate-back loop shrinks to an edit. Variants:

- **Code reload with state kept**: Smalltalk images, Erlang/BEAM hot code loading (two module
  versions coexist), Lisp and Clojure REPL redefinition.
- **UI hot reload**: Flutter's JIT-mode Dart VM, React Fast Refresh, SwiftUI previews.
- **Binary patching** for compiled languages: .NET Edit and Continue / Hot Reload, Unreal Live
  Coding, Rust Subsecond.

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-12 | Flutter 1.0 ships with stateful hot reload as a headline feature | + |
| E1 | 2019 | React Fast Refresh replaces react-hot-loader; Vite (2020) makes native-ESM HMR fast | + |
| E2 | 2021-10 | Microsoft removes Hot Reload from `dotnet watch` to favour Visual Studio, then reverts after backlash[^reg-hotreload][^hr-revert] | mixed |
| E2 | 2021-11 | .NET 6 GA with Hot Reload in VS and `dotnet watch`[^aspnet-hr] | + |
| E4 | 2025 | Flutter 3.32 adds experimental web hot reload; 3.35 makes it default[^flutter-335] | + |
| E4 | 2025 | Dioxus Subsecond brings runtime hot-patching to Rust (about 130 ms patches); Bevy integrates it[^subsecond][^subsecond-hn] | + |

# Where it succeeded

- **Flutter and Dart.** Dart was designed with both a JIT (development) and an AOT (release) mode,
  which made hot reload reliable. It became one of Flutter's most cited advantages over native
  toolkits.
- **Web front-ends.** Every major bundler ships HMR, and component-level reload with state kept is
  a baseline expectation.
- **.NET.** After the reversal, Hot Reload works in Visual Studio, Rider and `dotnet watch` for
  ASP.NET, MAUI and Blazor, with documented limits on "rude edits".[^aspnet-hr]
- **Rust (2025).** Subsecond showed that hot-patching a compiled, monomorphised language is
  practical for UI and game loops, with some code changes required.[^subsecond-hn]

# Where it failed or stalled

- **Fidelity limits.** Changes to types, struct layouts, generics or static initialisers usually
  force a restart ("hot restart" in Flutter, "rude edits" in .NET). Developers learn which edits
  are safe.
- **Vendor lock-in attempts.** The .NET 2021 episode showed that hot reload was valued enough to
  be used as an IDE upsell. It also showed that pulling an open-source feature costs trust.[^reg-hotreload]
- **Production hot code loading** (Erlang-style) did not spread beyond BEAM. Containers and
  rolling deploys made restarting cheap, so live upgrades of servers stayed rare.
- **Strong live programming** (Bret Victor-style environments, Light Table, Eve) did not reach
  mainstream use. Notebooks (Jupyter, Pluto.jl, Observable) captured part of the value instead.

# Why

1. **UI work depends on short feedback loops.** Navigating back to a screen after each restart is
   the dominant cost, so preserving state pays off most there.
2. **Runtime design decides feasibility.** Dart's JIT/AOT split, BEAM's module versioning and the
   CLR's metadata-update APIs made reload a runtime feature rather than a hack. Languages
   without such hooks needed heroics (Subsecond).
3. **Cloud deployment made restarts cheap**, which removed the production motivation behind
   Erlang-style upgrades.

# Lessons

- Design runtimes with a development mode that supports code replacement. It is very hard to add
  later.
- Developer-experience features are now community expectations. Gating them behind a paid IDE
  backfires.

# Related

- [Dart](/languages/dart.md), [C#](/languages/csharp.md), [Erlang](/languages/erlang.md), [Rust](/languages/rust.md)
- [Actor model](/ideas/concurrency/actor-model.md) (BEAM hot code loading)
- [Integrated toolchains](/ideas/tooling-and-ecosystem/integrated-toolchains.md)
- [.NET Hot Reload removal and reversal](/events/2021-10-dotnet-hot-reload-reversal.md)

[^reg-hotreload]: The Register on .NET Hot Reload — https://www.theregister.com/software/2021/10/22/microsofts-hot-reload-decision-angers-open-source-net-devs/1049792
[^hr-revert]: dotnet/sdk PR #22262 — https://github.com/dotnet/sdk/pull/22262
[^neowin-revert]: Neowin on Hot Reload restore — https://www.neowin.net/news/after-community-outcry-microsoft-apologizes-and-restores-hot-reload-to-net-watch/
[^flutter-335]: What's new in Flutter 3.35 — https://blog.flutter.dev/whats-new-in-flutter-3-35-c58ef72e3766
[^subsecond]: Dioxus 0.7 release — https://dioxuslabs.com/blog/release-070/
[^subsecond-hn]: HN on Subsecond — https://news.ycombinator.com/item?id=44369642
[^aspnet-hr]: .NET Hot Reload for ASP.NET Core — https://learn.microsoft.com/he-il/aspnet/core/test/hot-reload?view=aspnetcore-7.0
