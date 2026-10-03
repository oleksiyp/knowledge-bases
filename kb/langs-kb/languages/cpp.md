---
type: Language
title: C++
description: "Entrenched performance language that spent 2018–2026 defending itself against the memory-safety critique. It grew (TIOBE #2 for the first time in June 2024; #3 at 8.67% in Sept 2026) and shipped big features — concepts, coroutines, reflection, contracts, a hardened standard library in C++26 — but rejected a Rust-style safe subset (Safe C++, 2025), deferred profiles to C++29, and modules remained a slow-burning adoption failure."
tags: [systems, iso, committee, memory-safety, reflection, games, hpc, finance]
paradigms: [systems, multi-paradigm, generic, object-oriented]
typing: static
memory_model: manual
first_released: 1985
steward: ISO/IEC JTC1/SC22/WG21
governance: committee-standard
trajectory: stable
ideas:
  - ideas/memory-safety/safe-cpp-vs-profiles
  - ideas/memory-safety/cpp-successor-languages
  - ideas/memory-safety/bounds-safety-and-hardened-c
  - ideas/memory-safety/memory-safety-policy-push
  - ideas/metaprogramming/compile-time-reflection
  - ideas/metaprogramming/comptime-and-staged-compilation
  - ideas/concurrency/async-await-and-function-coloring
  - ideas/tooling-and-ecosystem/language-editions-and-evolution
runtimes: [runtimes/llvm, runtimes/gcc]
adoption_signals:
  tiobe_rank: { value: 3, as_of: 2026-09 }
  tiobe_rating_pct: { value: 8.67, as_of: 2026-09 }
era_momentum: { E1: flat, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: tiobe-jun24
    resource: https://www.techrepublic.com/article/tiobe-index-june-2024/
    title: "TechRepublic: TIOBE Index June 2024 — C++ rises to second place"
  - id: tiobe-sep26
    resource: https://www.techrepublic.com/article/news-tiobe-september-2026-julia-nears-top-20/
    title: "TechRepublic: TIOBE Index September 2026 (C++ #3, 8.67%)"
  - id: p3390
    resource: https://isocpp.org/files/papers/P3390R0.html
    title: "WG21 P3390R0: Safe C++ (Baxter, Mazakas, 2024-09-11)"
  - id: reg-safecpp
    resource: https://www.theregister.com/2025/09/16/safe_c_proposal_ditched/
    title: "The Register: Safe C++ proposal all but abandoned in favor of profiles (2025-09-16)"
  - id: p3651
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3651r0.pdf
    title: "WG21 P3651R0: Stroustrup, 'Profiles are essential' (2025-03-06)"
  - id: p3608
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3608r0.html
    title: "WG21 P3608R0: Contracts and profiles — what can we reasonably ship in C++26"
  - id: sutter-sofia
    resource: https://herbsutter.com/2025/06/
    title: "Herb Sutter: Trip report June 2025, Sofia — reflection voted into C++26, feature freeze"
  - id: infoq-cpp26
    resource: https://www.infoq.com/news/2026/04/cpp-26-reflection-safety-async/
    title: "InfoQ: C++26 — Reflection, Memory Safety, Contracts, and a New Async Model (2026-04)"
  - id: wrocpp-safety
    resource: https://wrocpp.github.io/toolset/memory-safety-cpp26-and-beyond/
    title: "wro.cpp: Memory safety in C++26 and beyond — what shipped, what's deferred to C++29"
  - id: google-libcxx
    resource: https://security.googleblog.com/2024/11/retrofitting-spatial-safety-to-hundreds.html
    title: "Google Security Blog: Retrofitting spatial safety to hundreds of millions of lines of C++ (2024-11-15)"
  - id: sutter-leaves-ms
    resource: https://herbsutter.com/2024/11/11/a-new-chapter-and-a-pivotal-year-for-cpp/
    title: "Herb Sutter: A new chapter, and thoughts on a pivotal year for C++ (2024-11-11)"
  - id: sutter-kona
    resource: https://herbsutter.com/2025/11/10/trip-report-november-2025-iso-c-standards-meeting-kona-usa/
    title: "Herb Sutter: Trip report November 2025, Kona (Guy Davidson named next convenor)"
  - id: modules-report
    resource: https://chuanqixu9.github.io/c++/2025/08/14/C++20-Modules.en.html
    title: "Chuanqi Xu (Clang modules maintainer): C++20 Modules — Practical Insights, Status and TODOs (2025-08)"
  - id: epochs
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2020/p1881r1.html
    title: "WG21 P1881R1: Epochs — a backward-compatible language evolution mechanism (2020)"
  - id: carbon-roadmap
    resource: https://docs.carbon-lang.dev/docs/project/roadmap.html
    title: "Carbon Language: Roadmap"
  - id: ladybird-rust
    resource: https://www.theregister.com/2026/02/23/ladybird_goes_rusty/
    title: "The Register: Ladybird indie web browser flutters toward Rust (2026-02-23)"
---

# Summary
C++ is the most important "defender" in this knowledge base. Usage held up and even grew — C++ passed C on TIOBE for the first time in June 2024[^tiobe-jun24] and sat at #3 (8.67%) in September 2026[^tiobe-sep26] — because nothing else covers its niche (games, HPC, finance, browsers, compilers, ML runtimes) at its scale. The committee shipped ambitious features: C++20 (concepts, coroutines, ranges, modules) and C++26 (static reflection, contracts, a hardened standard library, erroneous behaviour for uninitialised reads, `std::execution`).[^infoq-cpp26][^sutter-sofia] But on the defining question of the era — memory safety — WG21 chose *incremental hardening* over a sound safe subset: Safe C++ (P3390, a borrow-checked dialect) lost to profiles in 2025 and was abandoned,[^reg-safecpp] and the profiles framework itself missed C++26 and was deferred to C++29.[^wrocpp-safety] Hardening is genuinely effective (Google: >1,000 bugs found, ~0.3% overhead, 30% fewer segfaults)[^google-libcxx] but does not satisfy regulators asking for memory-*safe* languages. Verdict: **stable/entrenched**, with a **failed** bid for a guaranteed-safe subset and **mixed** success for modules.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-02 | C++20 finalised (Prague): concepts, coroutines, modules, ranges | + |
| E1 | 2020 | P1881 "Epochs" (Rust-style editions) meets heavy resistance; not adopted [^epochs] | − |
| E2 | 2022-07 | Google announces [Carbon](/languages/carbon.md); Sutter shows cppfront (Sept) [^carbon-roadmap] | mixed |
| E3 | 2022-11 | NSA guidance names "C/C++" as memory-unsafe ([event](/events/2022-11-nsa-memory-safety-guidance.md)) | − |
| E3 | 2024-06 | C++ overtakes C on TIOBE for the first time [^tiobe-jun24] | + |
| E3 | 2024-09-11 | Safe C++ (P3390) proposed, backed by Circle implementation [^p3390] | + |
| E4 | 2024-11 | Google: hardened libc++ across hundreds of millions of lines, ~0.3% cost [^google-libcxx] | + |
| E4 | 2024-11-11 | Herb Sutter leaves Microsoft for Citadel Securities [^sutter-leaves-ms] | mixed |
| E4 | 2025-02 | Hagenberg: SG23 prioritises profiles over Safe C++ [^reg-safecpp] | − |
| E4 | 2025-03-06 | Stroustrup's "Profiles are essential" call to arms (P3651) [^p3651] | mixed |
| E4 | 2025-06 | Sofia: reflection (P2996 et al.) voted into C++26; feature freeze [^sutter-sofia] | + |
| E4 | 2025-09 | Safe C++ declared no longer pursued [^reg-safecpp] | − |
| E4 | 2025-11 | Kona: Guy Davidson named convenor from 2026 [^sutter-kona] | mixed |
| E4 | 2026-02 | Ladybird abandons Swift, ports LibJS from C++ to Rust [^ladybird-rust] | − |
| E4 | 2026-03 | C++26 finalised: reflection, contracts, hardened stdlib; profiles → C++29 [^infoq-cpp26][^wrocpp-safety] | mixed |

# Ideas it bet on
| Idea | Outcome for C++ |
|---|---|
| [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md) | Safe C++ abandoned; profiles deferred — **stalled** |
| [Bounds safety / hardened libraries](/ideas/memory-safety/bounds-safety-and-hardened-c.md) | **Succeeded** — standardised in C++26 |
| [Compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md) | **Succeeded** on paper (C++26); real-world uptake pending |
| [Comptime / constexpr](/ideas/metaprogramming/comptime-and-staged-compilation.md) | Succeeding — constexpr steadily expanded each standard |
| [Successor languages](/ideas/memory-safety/cpp-successor-languages.md) | None has displaced C++ yet |
| [Editions/epochs](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md) | **Rejected** (P1881) |
| [Async/coroutines](/ideas/concurrency/async-await-and-function-coloring.md) | Mixed — C++20 coroutines are low-level; `std::execution` arrives in C++26 |

# What succeeded
- **Staying power.** No credible replacement emerged for large C++ codebases; the successor languages remained experimental ([Carbon](/languages/carbon.md), [cppfront](/languages/cppfront.md), [Hylo](/languages/hylo.md)).[^carbon-roadmap]
- **Hardening at scale.** Libc++ hardening (deployed at Google and Apple) became standardised hardened-library mode in C++26.[^google-libcxx][^infoq-cpp26]
- **Reflection.** After ~a decade of SG7 work, static reflection landed — called by Sutter the most transformative feature in the language's history.[^sutter-sofia]
- **Steady cadence.** C++20, C++23, C++26 all shipped on the three-year train.

# What failed or stalled
- **Sound safety.** The committee voted for profiles (≈30/45 encouragement) over Safe C++ (≈20/45); Baxter: "The Rust safety model is unpopular with the committee… Profiles won the argument."[^reg-safecpp] Profiles then missed C++26.[^wrocpp-safety][^p3608]
- **Modules.** Six years after C++20, modules were still described as "not widely adopted", with patchy GCC/Clang support and build-system friction.[^modules-report]
- **Evolution mechanism.** The committee rejected epochs, so breaking changes remain nearly impossible.[^epochs]
- **Mindshare in new projects.** Security-sensitive new components increasingly started in Rust (Android, Chromium fonts, Windows kernel pieces, Ladybird).[^ladybird-rust]

# By era
## E1
C++20 completed; Microsoft/Chromium "70% memory-safety bugs" data set the agenda.
## E2
Successor-language experiments (Carbon, cppfront, Val/Hylo) appeared — a sign of frustration with committee-speed evolution.[^carbon-roadmap]
## E3
Policy (NSA, White House) turned "C/C++" into a liability; Safe C++ was the boldest internal response.[^p3390] C++ rose to TIOBE #2.[^tiobe-jun24]
## E4
WG21 chose profiles and hardening; Safe C++ died; C++26 shipped reflection, contracts and hardening while profiles slipped to C++29.[^reg-safecpp][^infoq-cpp26] Leadership transition: Sutter left Microsoft and handed the convenorship to Guy Davidson.[^sutter-leaves-ms][^sutter-kona]

# Lessons
- Committees optimise for compatibility and consensus; a feature requiring a new reference type and a new standard library (Safe C++) could not get consensus, even under regulatory pressure.
- Cheap, recompile-only hardening wins adoption faster than sound-but-invasive safety — but leaves temporal safety (use-after-free) largely unsolved.
- A language can grow in usage while losing the argument for new code in a specific domain.

# Related
- [C](/languages/c.md), [Rust](/languages/rust.md), [Carbon](/languages/carbon.md), [cppfront](/languages/cppfront.md), [Hylo](/languages/hylo.md), [Swift](/languages/swift.md)
- [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md), [C++ successor languages](/ideas/memory-safety/cpp-successor-languages.md), [Compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md)
- Events: [Safe C++ abandoned](/events/2025-09-safe-cpp-abandoned.md), [C++26 reflection adopted](/events/2025-06-cpp26-reflection-adopted.md), [C++26 finalised](/events/2026-03-cpp26-finalized.md), [Google hardened libc++](/events/2024-11-google-hardened-libcxx-results.md)

[^tiobe-jun24]: TechRepublic: TIOBE Index June 2024 — https://www.techrepublic.com/article/tiobe-index-june-2024/
[^tiobe-sep26]: TechRepublic: TIOBE Index September 2026 — https://www.techrepublic.com/article/news-tiobe-september-2026-julia-nears-top-20/
[^p3390]: WG21 P3390R0: Safe C++ — https://isocpp.org/files/papers/P3390R0.html
[^reg-safecpp]: The Register: Safe C++ proposal all but abandoned in favor of profiles — https://www.theregister.com/2025/09/16/safe_c_proposal_ditched/
[^p3651]: WG21 P3651R0: Profiles are essential — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3651r0.pdf
[^p3608]: WG21 P3608R0: Contracts and profiles — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3608r0.html
[^sutter-sofia]: Herb Sutter: June 2025 posts (Sofia trip report) — https://herbsutter.com/2025/06/
[^infoq-cpp26]: InfoQ: C++26 — Reflection, Memory Safety, Contracts, and a New Async Model — https://www.infoq.com/news/2026/04/cpp-26-reflection-safety-async/
[^wrocpp-safety]: wro.cpp: Memory safety in C++26 and beyond — https://wrocpp.github.io/toolset/memory-safety-cpp26-and-beyond/
[^google-libcxx]: Google Security Blog: Retrofitting spatial safety — https://security.googleblog.com/2024/11/retrofitting-spatial-safety-to-hundreds.html
[^sutter-leaves-ms]: Herb Sutter: A new chapter — https://herbsutter.com/2024/11/11/a-new-chapter-and-a-pivotal-year-for-cpp/
[^sutter-kona]: Herb Sutter: Trip report November 2025 Kona — https://herbsutter.com/2025/11/10/trip-report-november-2025-iso-c-standards-meeting-kona-usa/
[^modules-report]: Chuanqi Xu: C++20 Modules — Practical Insights, Status and TODOs — https://chuanqixu9.github.io/c++/2025/08/14/C++20-Modules.en.html
[^epochs]: WG21 P1881R1: Epochs — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2020/p1881r1.html
[^carbon-roadmap]: Carbon Language: Roadmap — https://docs.carbon-lang.dev/docs/project/roadmap.html
[^ladybird-rust]: The Register: Ladybird flutters toward Rust — https://www.theregister.com/2026/02/23/ladybird_goes_rusty/
