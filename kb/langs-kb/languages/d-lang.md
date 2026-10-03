---
type: Language
title: D
description: The original "better C++" (2001) spent 2018–2026 adding pieces of the ideas that won elsewhere — ownership/borrowing (@live), scope checking (DIP1000), ImportC, editions — without making any of them default, while a prominent contributor forked it as OpenD (Jan 2024) and release cadence slipped. Stagnating.
tags: [systems, better-cpp, gc, importc, fork, governance]
paradigms: [systems, multi-paradigm, generic]
typing: static
memory_model: gc
first_released: 2001
steward: D Language Foundation (Walter Bright, Atila Neves et al.)
governance: foundation
trajectory: declining
ideas: [ideas/memory-safety/ownership-and-borrowing, ideas/metaprogramming/comptime-and-staged-compilation, ideas/metaprogramming/compile-time-reflection, ideas/tooling-and-ecosystem/language-editions-and-evolution]
runtimes: []
adoption_signals:
  latest_release: { value: "DMD 2.113.0", as_of: 2026-08-17 }
era_momentum: { E1: flat, E2: down, E3: down, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: d-ob-blog
    resource: https://dlang.org/blog/2019/07/15/ownership-and-borrowing-in-d/
    title: "D Blog: Ownership and Borrowing in D (Walter Bright, 2019-07-15)"
  - id: d-dip1000-woes
    resource: https://forum.dlang.org/thread/xvzzmgwibbjhuvmnhrgi@forum.dlang.org
    title: "D Forum: Tell us your DIP1000 woes"
  - id: d-ob-lifetimes
    resource: https://forum.dlang.org/thread/qssaruktegnbtsdjeyri@forum.dlang.org
    title: "D Forum: D needs first-class lifetimes before it can get ownership and borrowing"
  - id: dlf-apr-2024
    resource: https://www.mail-archive.com/digitalmars-d-announce@puremagic.com/msg50226.html
    title: "D Language Foundation April 2024 Monthly Meeting Summary (@live gaps, defaults discussion)"
  - id: opend-announce
    resource: https://dpldocs.info/this-week-in-d/Blog.Posted_2024_01_01.html
    title: "Adam D. Ruppe: A ship carrying silverware has sailed — OpenD fork announcement (2024-01-01)"
  - id: opend-site
    resource: https://opendlang.org/index.html
    title: "The OpenD Programming Language"
  - id: d-forking-thread
    resource: https://forum.dlang.org/thread/beykokfitddfdsjyqjjy@forum.dlang.org
    title: "D Forum: We are forking D (January 2024)"
  - id: d-changelog
    resource: https://dlang.org/changelog/
    title: "D Change Log: list of all versions (2.109.1 Jul 2024; 2.110.0 Mar 2025; 2.111.0 Apr 2025; 2.112.0 Jan 2026; 2.113.0 Aug 2026)"
  - id: d-2111
    resource: https://forum.dlang.org/thread/mvmwwwkdyjgtocnvlbra@forum.dlang.org
    title: "D Forum: DMD 2.111.0 — Now with more ImportC!"
  - id: d-editions
    resource: https://forum.dlang.org/thread/epzrvlljudykzhgwrpku@forum.dlang.org
    title: "D Forum: Editions (Atila Neves' Editions DIP, April 2025)"
  - id: dlf-may-2025
    resource: https://forum.dlang.org/thread/wklpzuehqguydmhccjxj@forum.dlang.org
    title: "D Language Foundation May 2025 Monthly Meeting Summary (Editions DIP review)"
---

# Summary
D pioneered several ideas that later became mainstream — compile-time function execution, `static if`, mixins and introspection long before C++ `constexpr`/reflection or Zig `comptime` — but in 2018–2026 it mostly reacted to other languages' successes. Walter Bright prototyped Rust-style **ownership and borrowing** as the opt-in `@live` attribute (2019), on top of DIP1000 `scope` checking; neither became default, and heavy DIP1000 users reported scope-level problems they could not fix.[^d-ob-blog][^d-dip1000-woes][^d-ob-lifetimes][^dlf-apr-2024] **ImportC** (compiling C headers/sources directly) reached what the release notes called production quality in DMD 2.111 (April 2025).[^d-2111] Governance frustrations surfaced publicly when long-time contributor Adam D. Ruppe launched the **OpenD** fork on 2024-01-01, citing a closed decision process.[^opend-announce][^d-forking-thread] Release cadence, monthly in early 2024, slipped to gaps of eight and nine months (2.109.1 Jul 2024 → 2.110.0 Mar 2025; 2.111.0 Apr 2025 → 2.112.0 Jan 2026).[^d-changelog] An **Editions** DIP (April 2025) aims to let D finally flip defaults.[^d-editions][^dlf-may-2025] Verdict: **stagnating** — technically capable, but out-maneuvered by Rust for safety and by Zig/Odin for "better C".

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-07-15 | "Ownership and Borrowing in D": @live prototype plan (DIP1021) [^d-ob-blog] | + |
| E2 | 2020–2022 | DIP1000 remains preview-only; users report deep design issues [^d-dip1000-woes] | − |
| E3 | 2024-01-01 | OpenD fork launched by Adam D. Ruppe [^opend-announce][^opend-site] | − |
| E3 | 2024-04 | DLF meeting: @live gaps found; making it default deferred [^dlf-apr-2024] | − |
| E3 | 2024-07-01 | DMD 2.109.1, then an eight-month release gap [^d-changelog] | − |
| E4 | 2025-04-01 | DMD 2.111.0: ImportC "production-grade" [^d-2111] | + |
| E4 | 2025-04/05 | Editions DIP drafted and reviewed [^d-editions][^dlf-may-2025] | + |
| E4 | 2026-01-07 / 2026-08-17 | DMD 2.112.0 and 2.113.0 [^d-changelog] | = |

# Ideas it bet on
| Idea | Outcome for D |
|---|---|
| [Comptime / CTFE](/ideas/metaprogramming/comptime-and-staged-compilation.md) and [compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md) | succeeded technically years early; credit went to others |
| [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md) bolted on (@live, DIP1000) | stalled — opt-in, never default [^dlf-apr-2024] |
| Optional GC (`@nogc`, BetterC) | mixed — GC reputation persisted |
| [Editions](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md) to change defaults | in progress (2025 DIP) |
| C interop by compiling C (ImportC) | succeeded (2025) [^d-2111] |

# What succeeded
- **ImportC** is a genuinely useful, rare feature (Zig's `@cImport` is the closest analog).[^d-2111]
- **Metaprogramming lineage**: D's CTFE/introspection demonstrated what C++26 reflection and Zig comptime later popularized.

# What failed or stalled
- **Borrowing retrofitted to a GC'd language without lifetimes in the type system** never reached the point of being default; contributors argued D "needs first-class lifetimes" first.[^d-ob-lifetimes]
- **Governance and community**: OpenD fork; perception of BDFL-style decisions despite a foundation.[^opend-announce]
- **Release engineering** slowed in 2024–2025.[^d-changelog]

# By era
## E1
- @live/O-B prototype announced; D still had a visible community.[^d-ob-blog]
## E2
- Safety features remain previews; momentum shifts to Rust.
## E3
- OpenD fork; release gaps.[^opend-announce][^d-changelog]
## E4
- ImportC matures; Editions DIP as the path to changing defaults.[^d-2111][^d-editions]

# Lessons
- Being first with an idea (CTFE, introspection) does not confer the win; ecosystem and timing do.
- Safety bolted on as opt-in attributes does not change a language's safety profile — defaults matter, which is why D now needs editions.

# Related
- [C++](/languages/cpp.md), [Rust](/languages/rust.md), [Zig](/languages/zig.md), [Nim](/languages/nim.md)
- [Language editions and evolution](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md), [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md)

[^d-ob-blog]: D Blog: Ownership and Borrowing in D — https://dlang.org/blog/2019/07/15/ownership-and-borrowing-in-d/
[^d-dip1000-woes]: D Forum: Tell us your DIP1000 woes — https://forum.dlang.org/thread/xvzzmgwibbjhuvmnhrgi@forum.dlang.org
[^d-ob-lifetimes]: D Forum: D needs first-class lifetimes before it can get ownership and borrowing — https://forum.dlang.org/thread/qssaruktegnbtsdjeyri@forum.dlang.org
[^dlf-apr-2024]: D Language Foundation April 2024 Monthly Meeting Summary — https://www.mail-archive.com/digitalmars-d-announce@puremagic.com/msg50226.html
[^opend-announce]: Adam D. Ruppe: OpenD fork announcement — https://dpldocs.info/this-week-in-d/Blog.Posted_2024_01_01.html
[^opend-site]: The OpenD Programming Language — https://opendlang.org/index.html
[^d-forking-thread]: D Forum: We are forking D — https://forum.dlang.org/thread/beykokfitddfdsjyqjjy@forum.dlang.org
[^d-changelog]: D Change Log — https://dlang.org/changelog/
[^d-2111]: D Forum: DMD 2.111.0 — Now with more ImportC! — https://forum.dlang.org/thread/mvmwwwkdyjgtocnvlbra@forum.dlang.org
[^d-editions]: D Forum: Editions — https://forum.dlang.org/thread/epzrvlljudykzhgwrpku@forum.dlang.org
[^dlf-may-2025]: D Language Foundation May 2025 Monthly Meeting Summary — https://forum.dlang.org/thread/wklpzuehqguydmhccjxj@forum.dlang.org
