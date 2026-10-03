---
type: Language
title: cppfront (Cpp2)
description: Herb Sutter's personal experiment in a "syntax 2" for C++ that compiles to today's C++; it never aimed at adoption and its last release was v0.8.1 (Jan 2025), but its real product — metafunctions as a use case for reflection, safety-by-default ideas — fed into C++26. Stalled as a language, mixed as an idea lab.
tags: [systems, cpp-successor, experimental, transpiler, reflection, metafunctions]
paradigms: [systems, multi-paradigm]
typing: static
memory_model: manual
first_released: 2022
steward: Herb Sutter (personal project)
governance: bdfl
trajectory: stalled
ideas: [ideas/memory-safety/cpp-successor-languages, ideas/metaprogramming/compile-time-reflection, ideas/memory-safety/safe-cpp-vs-profiles]
runtimes: []
adoption_signals:
  latest_release: { value: "v0.8.1", as_of: 2025-01-31 }
era_momentum: { E1: n/a, E2: up, E3: up, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: cppfront-gh
    resource: https://github.com/hsutter/cppfront
    title: "GitHub: hsutter/cppfront — A personal experimental C++ Syntax 2 -> Syntax 1 compiler"
  - id: cppfront-releases
    resource: https://github.com/hsutter/cppfront/releases
    title: "GitHub: cppfront releases (v0.7.0 2024-03-17 … v0.8.1 2025-01-31)"
  - id: sutter-yearend-2022
    resource: https://herbsutter.com/2022/12/31/cpp2-and-cppfront-year-end-mini-update/
    title: "Herb Sutter: Cpp2 and cppfront: Year-end mini-update (2022-12-31)"
  - id: sutter-midsummer-2024
    resource: https://herbsutter.com/2024/07/28/cppfront-midsummer-update/
    title: "Herb Sutter: cppfront: Midsummer update (2024-07-28)"
  - id: sutter-new-chapter
    resource: https://herbsutter.com/2024/11/11/a-new-chapter-and-a-pivotal-year-for-cpp/
    title: "Herb Sutter: A new chapter, and thoughts on a pivotal year for C++ (2024-11-11)"
  - id: devclass-sutter
    resource: https://devclass.com/2024/11/12/iso-c-chair-herb-sutter-leaves-microsoft-declares-forthcoming-c-26-most-impactful-release-since-c11/
    title: "DevClass: ISO C++ chair Herb Sutter leaves Microsoft (2024-11-12)"
  - id: sutter-kona-2025
    resource: https://herbsutter.com/2025/11/10/trip-report-november-2025-iso-c-standards-meeting-kona-usa/
    title: "Herb Sutter: Trip report, November 2025 ISO C++ meeting (Kona) — Guy Davidson to succeed as convenor"
  - id: sutter-sofia-2025
    resource: https://herbsutter.com/2025/06/
    title: "Herb Sutter: June 2025 posts — Sofia trip report, reflection voted into C++26"
  - id: cppfront-roadmap-disc
    resource: https://github.com/hsutter/cppfront/discussions/1414
    title: "cppfront Discussion #1414: Roadmap updates for 2025+?"
---

# Summary
cppfront, presented by Herb Sutter at CppCon 2022, compiles an experimental, simpler "Cpp2" syntax down to ordinary C++ ("Cpp1"), so Cpp2 and Cpp1 code mix freely in one build.[^cppfront-gh][^sutter-yearend-2022] Sutter positioned it explicitly as a *personal experiment* to prove out ideas for ISO C++ — safety by default (bounds and null checks, initialization rules), a unified `is`/`as`, and **metafunctions** (Cpp2's take on his long-running metaclasses proposal) — not as a competing language. Releases ran from v0.7.0 (March 2024) to v0.8.1 (January 2025); there has been no tagged release since.[^cppfront-releases] Sutter left Microsoft for Citadel Securities in November 2024 and handed the WG21 convenorship to Guy Davidson at the end of 2025.[^sutter-new-chapter][^sutter-kona-2025] Verdict: **stalled as a language, mixed-positive as a lab** — its signature idea, code generation driven by compile-time reflection, arrived in standard C++26 via P2996, and the hardening work it advocated shipped as the C++26 hardened standard library.[^sutter-sofia-2025]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022-09 | cppfront unveiled at CppCon 2022 ("C++ syntax 2") [^cppfront-gh] | + |
| E3 | 2022-12-31 | Year-end update: experiment continues; not intended as a fork of C++ [^sutter-yearend-2022] | + |
| E3 | 2024-03-17 | First numbered release v0.7.0 [^cppfront-releases] | + |
| E3 | 2024-07-28 | Midsummer update: compile-time `@regex` metafunction built via reflection + codegen [^sutter-midsummer-2024] | + |
| E4 | 2024-10-31 | v0.8.0 [^cppfront-releases] | = |
| E4 | 2024-11-11 | Sutter leaves Microsoft for Citadel Securities; calls C++26 the most impactful release since C++11 [^sutter-new-chapter][^devclass-sutter] | mixed |
| E4 | 2025-01-31 | v0.8.1 — last tagged release (as of 2026-10) [^cppfront-releases] | − |
| E4 | 2025-06 | Reflection (P2996) voted into C++26 at Sofia [^sutter-sofia-2025] | + (for the idea) |
| E4 | 2025-12-31 | Sutter's convenor term ends; Guy Davidson takes over WG21 [^sutter-kona-2025] | = |

# Ideas it bet on
| Idea | Outcome for cppfront |
|---|---|
| [C++ successor languages](/ideas/memory-safety/cpp-successor-languages.md) via "same semantics, new syntax" | stalled — no user base, by design |
| [Compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md) + metafunctions generating code | succeeded via standardization (C++26 reflection) |
| Safety-by-default checks (bounds, null, init) | partly absorbed: C++26 hardened library and erroneous behaviour; profiles deferred (see [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md)) |
| Zero-cost interop by compiling to C++ | succeeded technically (trivially, by construction) |

# What succeeded
- **Proof-of-concept for standards work.** Metafunctions such as `@enum`, `@union` (safe tagged union) and `@regex` showed what reflection-driven codegen could do, a use case Sutter promoted heavily while P2996 moved through WG21.[^sutter-midsummer-2024][^sutter-sofia-2025]
- **Perfect interop by construction**: because it emits C++, every Cpp2 file links against any C++ library, avoiding the interop wall that [Carbon](/languages/carbon.md) has spent four years climbing.

# What failed or stalled
- **No community or adoption path.** It remained a one-person project; even the 2025+ roadmap was something users had to ask about in a GitHub discussion.[^cppfront-roadmap-disc]
- **Release cadence stopped** after January 2025 as Sutter's focus moved to C++26 reflection and his new employer.[^cppfront-releases]
- **Syntax alone did not address memory safety's hard part** (temporal safety / lifetimes); Cpp2 relied on checks and guidance rather than a borrow checker, so it never offered the guarantees regulators asked for (see [memory safety policy push](/ideas/memory-safety/memory-safety-policy-push.md)).

# By era
## E1
- Not public. Sutter's metaclasses (P0707) and lifetime work were the precursors.
## E2
- CppCon 2022 debut; enormous attention as "TypeScript for C++".[^cppfront-gh]
## E3
- Numbered releases; metafunctions; regex-by-reflection demo.[^cppfront-releases][^sutter-midsummer-2024]
## E4
- Last release Jan 2025; author changes employer and steps down as convenor; ideas land in C++26.[^sutter-new-chapter][^sutter-kona-2025]

# Lessons
- A "successor" that keeps C++ semantics exactly can be a superb research vehicle and a poor product: the value flows back into the standard, not into a user base.
- Personal experiments by influential standards people are effective at moving WG21, but are fragile to the author's career changes.

# Related
- [C++](/languages/cpp.md), [Carbon](/languages/carbon.md), [Hylo](/languages/hylo.md)
- [Compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md), [C++ successor languages](/ideas/memory-safety/cpp-successor-languages.md)
- [C++26 finalized (event)](/events/2026-03-cpp26-finalized.md)

[^cppfront-gh]: GitHub: hsutter/cppfront — https://github.com/hsutter/cppfront
[^cppfront-releases]: GitHub: cppfront releases — https://github.com/hsutter/cppfront/releases
[^sutter-yearend-2022]: Herb Sutter: Cpp2 and cppfront: Year-end mini-update — https://herbsutter.com/2022/12/31/cpp2-and-cppfront-year-end-mini-update/
[^sutter-midsummer-2024]: Herb Sutter: cppfront: Midsummer update — https://herbsutter.com/2024/07/28/cppfront-midsummer-update/
[^sutter-new-chapter]: Herb Sutter: A new chapter, and thoughts on a pivotal year for C++ — https://herbsutter.com/2024/11/11/a-new-chapter-and-a-pivotal-year-for-cpp/
[^devclass-sutter]: DevClass: ISO C++ chair Herb Sutter leaves Microsoft — https://devclass.com/2024/11/12/iso-c-chair-herb-sutter-leaves-microsoft-declares-forthcoming-c-26-most-impactful-release-since-c11/
[^sutter-kona-2025]: Herb Sutter: Trip report, November 2025 (Kona) — https://herbsutter.com/2025/11/10/trip-report-november-2025-iso-c-standards-meeting-kona-usa/
[^sutter-sofia-2025]: Herb Sutter: June 2025 (Sofia trip report) — https://herbsutter.com/2025/06/
[^cppfront-roadmap-disc]: cppfront Discussion #1414: Roadmap updates for 2025+? — https://github.com/hsutter/cppfront/discussions/1414
