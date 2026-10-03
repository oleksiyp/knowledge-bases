---
type: Idea
title: C++ successor languages (Carbon, cppfront, Hylo, Circle, Jakt…)
description: "New languages designed to inherit C++ codebases through deep interop or source compatibility, the way TypeScript inherited JavaScript or Kotlin inherited Java. 2018–2026 verdict: unproven — none of the explicit successors reached a usable 1.0; Carbon's 0.1 slid to 'end of 2026 at the soonest', cppfront's last release was v0.8.1 (Jan 2025), Hylo remained research, Circle's safety work was abandoned with Safe C++. The de facto 'successor' for new safety-critical code was Rust via interop, not a C++-compatible language."
area: memory-safety
tags: [cpp, successor-languages, carbon, cppfront, hylo, circle, jakt, interop, migration]
outcome: unproven
maturity_2026: experimental
origin_year: 2022
mainstream_year: null
languages: [languages/carbon, languages/cppfront, languages/hylo, languages/cpp, languages/rust, languages/swift, languages/vale, languages/zig]
runtimes: []
related_ideas:
  - ideas/memory-safety/safe-cpp-vs-profiles
  - ideas/memory-safety/ownership-and-borrowing
  - ideas/platforms-and-portability/ffi-modernization
  - ideas/tooling-and-ecosystem/language-editions-and-evolution
  - ideas/types/typescript-structural-typing-wins
era_momentum: { E1: n/a, E2: up, E3: up, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: carbon-wiki
    resource: https://en.wikipedia.org/wiki/Carbon_(programming_language)
    title: "Wikipedia: Carbon (programming language) — unveiled at CppNorth, 2022-07-19"
  - id: carbon-roadmap
    resource: https://docs.carbon-lang.dev/docs/project/roadmap.html
    title: "Carbon Language: Roadmap (0.1 no sooner than end of 2026)"
  - id: carbon-safety-pr
    resource: https://github.com/carbon-language/carbon-lang/pull/4880/files
    title: "carbon-lang PR #4880: Safety milestones and a 2025 roadmap (Chandler Carruth)"
  - id: cppfront
    resource: https://github.com/hsutter/cppfront
    title: "GitHub: hsutter/cppfront — personal experimental C++ Syntax 2 → Syntax 1 compiler"
  - id: sutter-leaves-ms
    resource: https://herbsutter.com/2024/11/11/a-new-chapter-and-a-pivotal-year-for-cpp/
    title: "Herb Sutter: A new chapter, and thoughts on a pivotal year for C++ (2024-11-11)"
  - id: hylo
    resource: https://hylo-lang.org/
    title: "Hylo: the safe systems and generic-programming language built on value semantics"
  - id: circle
    resource: https://www.circle-lang.org/site/index.html
    title: "Circle C++ with Memory Safety (Sean Baxter)"
  - id: reg-safecpp-2025
    resource: https://www.theregister.com/2025/09/16/safe_c_proposal_ditched/
    title: "The Register: Safe C++ proposal all but abandoned in favor of profiles (2025-09-16)"
  - id: ladybird-rust
    resource: https://www.theregister.com/2026/02/23/ladybird_goes_rusty/
    title: "The Register: Ladybird indie web browser flutters toward Rust (2026-02-23; Swift adoption abandoned)"
  - id: swift-cxx
    resource: https://www.swift.org/documentation/cxx-interop/
    title: "Swift.org: Mixing Swift and C++ (bidirectional interop since Swift 5.9)"
  - id: chromium-rust
    resource: https://security.googleblog.com/2023/01/supporting-use-of-rust-in-chromium.html
    title: "Google Security Blog: Supporting the Use of Rust in the Chromium Project (2023-01)"
  - id: valen-reg
    resource: https://www.theregister.com/devops/2026/09/25/valen-creator-drives-golden-spike-to-connect-new-languages-with-rust/5299273
    title: "The Register: Valen creator drives 'Golden Spike' to connect new languages with Rust (2026-09-25)"
  - id: ms-tier1
    resource: https://www.theregister.com/devops/2026/09/11/microsoft-anoints-rust-as-a-tier-1-internal-language/5295732
    title: "The Register: Microsoft anoints Rust as a 'Tier 1' internal language (2026-09-11)"
---

# Summary
**Unproven, trending towards failure for the explicit successors.** 2022 was the year of C++ successors: Google unveiled [Carbon](/languages/carbon.md) at CppNorth (19 July 2022), Herb Sutter presented [cppfront](/languages/cppfront.md)/Cpp2 at CppCon (Sept 2022), Dave Abrahams and Dimi Racordon pushed Val (renamed [Hylo](/languages/hylo.md) in 2023), Sean Baxter's Circle grew extensions, and SerenityOS built Jakt.[^carbon-wiki][^cppfront][^hylo][^circle] The thesis was the "TypeScript for C++": keep the codebase, change the language around it. Four years later none had shipped a usable 1.0. Carbon added memory safety to its 0.1 milestone and pushed it to "the end of 2026 at the *soonest*";[^carbon-roadmap] cppfront remained a personal experiment (last release v0.8.1, January 2025) whose ideas fed C++26 reflection;[^cppfront] Circle's borrow checker died with Safe C++;[^reg-safecpp-2025] Ladybird tried Swift as its C++ successor and abandoned it for Rust in 2026.[^ladybird-rust] Meanwhile Rust became the practical successor for *new components* via C++ interop (Android, Chromium, Windows, Microsoft Tier 1).[^chromium-rust][^ms-tier1]

# The idea
A successor language differs from a *replacement*: it promises bidirectional, fine-grained interop (call C++ templates, inherit classes, share types) or even source-level compatibility, plus automated migration, so a 100M-line codebase can move file by file. Models: TypeScript→JS, Kotlin→Java, Swift→Objective-C. The problem: C++ cannot break compatibility (see [epochs rejection](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md)) and cannot become memory-safe ([Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md)), but rewriting in Rust loses template-heavy interop.

| Candidate | Approach | Status (2026) |
|---|---|---|
| [Carbon](/languages/carbon.md) (Google) | New syntax, deep C++ interop, planned safe dialect | Experimental; 0.1 ≥ end-2026 [^carbon-roadmap] |
| [cppfront/Cpp2](/languages/cppfront.md) (Sutter) | Alternative syntax compiling to C++; safety-by-default rules | Personal experiment; ideas absorbed into ISO C++ [^cppfront] |
| [Hylo](/languages/hylo.md) (Val) | Mutable value semantics, no references | Research; "not ready to be used" [^hylo] |
| Circle (Baxter) | C++ superset with borrow checking | Single-author; Safe C++ abandoned 2025 [^circle][^reg-safecpp-2025] |
| Swift (Apple) | Bidirectional C++ interop since 5.9 | Used in Apple stacks; Ladybird abandoned it [^swift-cxx][^ladybird-rust] |
| Jakt (SerenityOS) | Memory-safe language transpiling to C++ | Stalled as Ladybird left SerenityOS |
| [Rust](/languages/rust.md) | Not a successor — FFI via cxx/bindgen/Crubit | The de facto choice for new safe components [^chromium-rust] |

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022-07-19 | Carbon unveiled at CppNorth ([event](/events/2022-07-carbon-announced.md)) [^carbon-wiki] | + |
| E2 | 2022-09 | Sutter presents cppfront at CppCon [^cppfront] | + |
| E3 | 2023 | Val renamed Hylo; design papers continue [^hylo] | flat |
| E3 | 2023-09 | Swift 5.9 ships bidirectional C++ interop [^swift-cxx] | + |
| E3 | 2024-08 | Ladybird picks Swift as its C++ successor [^ladybird-rust] | + |
| E4 | 2024-11 | Sutter leaves Microsoft; cppfront remains a side project [^sutter-leaves-ms] | − |
| E4 | 2025-01 | Carbon adds memory safety to 0.1; timeline slips [^carbon-safety-pr][^carbon-roadmap] | mixed |
| E4 | 2025-09 | Safe C++ (Circle) abandoned [^reg-safecpp-2025] | − |
| E4 | 2026-02 | Ladybird drops Swift, ports LibJS to Rust with AI [^ladybird-rust] | − |
| E4 | 2026-09 | Microsoft makes Rust Tier 1 alongside C++ [^ms-tier1] | − |

# Where it succeeded
- **As idea incubators.** cppfront's metafunctions and reflection examples fed C++26 reflection; Carbon's safety design work is the most detailed public plan for migrating C++ to safety.[^cppfront][^carbon-safety-pr]
- **Swift–C++ interop** works in production at Apple and showed that template-aware interop is feasible.[^swift-cxx]
- **A telling inversion:** by 2026 new experimental languages (e.g. Valen, the successor to [Vale](/languages/vale.md)) designed deep interop with *Rust* generics rather than with C++ — Rust had become the ecosystem to inherit.[^valen-reg]

# Where it failed or stalled
- **No shippable successor after four years.** Carbon is pre-0.1; Hylo is research; cppfront is one person's experiment.[^carbon-roadmap][^hylo][^cppfront]
- **Early adopters bailed.** Ladybird spent roughly a year on Swift before abandoning it, citing poor C++ interop and non-Apple platform support.[^ladybird-rust]
- **Rust ate the use case.** Organisations needing safety now (Android, Chromium, Microsoft) chose Rust plus interop tooling rather than waiting.[^chromium-rust][^ms-tier1]

# Why
1. **The interop problem is the hard part.** Interoperating with templates, overloading and ADL essentially requires embedding a C++ compiler (Carbon uses Clang); this takes years before any user value appears.[^carbon-roadmap]
2. **Memory safety moved the goalposts.** In 2022 Carbon was "modern C++"; by 2025 regulators demanded memory safety, and a successor without it had no story — so Carbon pushed safety into 0.1 and delayed.[^carbon-safety-pr]
3. **Time-to-value favoured Rust.** Rust was already 1.0, had an ecosystem and qualified toolchains; "good enough" interop beat "perfect" interop that does not exist yet.
4. **Single-champion projects are fragile.** Circle and cppfront depended on one person each; when the champion's priorities shifted, momentum stopped.[^reg-safecpp-2025][^sutter-leaves-ms]
5. **TypeScript's conditions are absent.** TS succeeded because JS had no compile step and no types to conflict with; C++ already has a sophisticated type system and toolchain, so a successor adds less marginal value per migration cost.

# Lessons
- A successor language's value only appears after interop is complete; plan for a decade, or pick a narrower wedge.
- When the dominant requirement changes mid-project (here: memory safety), early-stage languages must re-scope or lose relevance.
- Incumbent-compatible "successors" compete not just with the incumbent but with a mature alternative (Rust) that is already shipping.

# Related
- Languages: [Carbon](/languages/carbon.md), [cppfront](/languages/cppfront.md), [Hylo](/languages/hylo.md), [C++](/languages/cpp.md), [Rust](/languages/rust.md), [Swift](/languages/swift.md), [Vale](/languages/vale.md), [Zig](/languages/zig.md)
- Ideas: [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md), [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md), [FFI modernization](/ideas/platforms-and-portability/ffi-modernization.md), [TypeScript structural typing wins](/ideas/types/typescript-structural-typing-wins.md)
- Events: [Carbon announced](/events/2022-07-carbon-announced.md), [Safe C++ abandoned](/events/2025-09-safe-cpp-abandoned.md)

[^carbon-wiki]: Wikipedia: Carbon (programming language) — https://en.wikipedia.org/wiki/Carbon_(programming_language)
[^carbon-roadmap]: Carbon Language: Roadmap — https://docs.carbon-lang.dev/docs/project/roadmap.html
[^carbon-safety-pr]: carbon-lang PR #4880: Safety milestones and a 2025 roadmap — https://github.com/carbon-language/carbon-lang/pull/4880/files
[^cppfront]: GitHub: hsutter/cppfront — https://github.com/hsutter/cppfront
[^sutter-leaves-ms]: Herb Sutter: A new chapter — https://herbsutter.com/2024/11/11/a-new-chapter-and-a-pivotal-year-for-cpp/
[^hylo]: Hylo — https://hylo-lang.org/
[^circle]: Circle C++ with Memory Safety — https://www.circle-lang.org/site/index.html
[^reg-safecpp-2025]: The Register: Safe C++ proposal all but abandoned — https://www.theregister.com/2025/09/16/safe_c_proposal_ditched/
[^ladybird-rust]: The Register: Ladybird flutters toward Rust — https://www.theregister.com/2026/02/23/ladybird_goes_rusty/
[^swift-cxx]: Swift.org: Mixing Swift and C++ — https://www.swift.org/documentation/cxx-interop/
[^chromium-rust]: Google Security Blog: Supporting the Use of Rust in Chromium — https://security.googleblog.com/2023/01/supporting-use-of-rust-in-chromium.html
[^valen-reg]: The Register: Valen creator drives 'Golden Spike' — https://www.theregister.com/devops/2026/09/25/valen-creator-drives-golden-spike-to-connect-new-languages-with-rust/5299273
[^ms-tier1]: The Register: Microsoft anoints Rust as Tier 1 — https://www.theregister.com/devops/2026/09/11/microsoft-anoints-rust-as-a-tier-1-internal-language/5295732
