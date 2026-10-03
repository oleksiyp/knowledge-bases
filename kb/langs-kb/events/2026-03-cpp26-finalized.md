---
type: Event
title: C++26 technically complete; profiles deferred to C++29
description: At the London Croydon meeting (March 2026) WG21 finished C++26. Reflection, contracts, std::execution, a hardened standard library and erroneous behaviour for uninitialised reads shipped. The profiles safety framework did not, and moved to C++29.
event_kind: release
date: 2026-03-28
era: E4
impact: mixed
languages: [languages/cpp]
runtimes: []
ideas: [ideas/memory-safety/safe-cpp-vs-profiles, ideas/memory-safety/bounds-safety-and-hardened-c, ideas/metaprogramming/compile-time-reflection]
tags: [cpp, cpp26, wg21, contracts, reflection, hardening, profiles]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: sutter-croydon
    resource: https://herbsutter.com/2026/03/29/c26-is-done-trip-report-march-2026-iso-c-standards-meeting-london-croydon-uk/
    title: "Herb Sutter: C++26 is done! — Trip report, March 2026 ISO C++ meeting (London Croydon, UK)"
  - id: infoq-cpp26
    resource: https://www.infoq.com/news/2026/04/cpp-26-reflection-safety-async/
    title: "InfoQ: C++26 — Reflection, Memory Safety, Contracts, and a New Async Model (April 2026)"
  - id: p3608
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3608r0.html
    title: "WG21 P3608: Contracts and profiles — what can we reasonably ship in C++26"
  - id: sutter-kona
    resource: https://herbsutter.com/2025/11/10/trip-report-november-2025-iso-c-standards-meeting-kona-usa/
    title: "Herb Sutter: Trip report — November 2025 ISO C++ meeting (Kona, USA)"
---

# What happened
At its March 2026 meeting in London Croydon (about 210 attendees from 24 nations), WG21 resolved the remaining 411 national-body comments from the 2025 ballot. It added and removed no features, and sent C++26 for its final Draft International Standard ballot.[^sutter-croydon] Sutter listed four headline features:[^sutter-croydon][^infoq-cpp26]
1. Compile-time **reflection** ([adopted June 2025](/events/2025-06-cpp26-reflection-adopted.md)).
2. **Memory-safety improvements**: no more undefined behaviour for reading uninitialised locals ("erroneous behaviour"), and a **hardened standard library** with bounds checks.
3. **Contracts** (`pre`, `post`, `contract_assert`).
4. **std::execution**, a unified async/concurrency framework.

The **profiles** framework that Stroustrup had pushed as C++'s answer to regulators did *not* ship. Its enforcement attribute moved to C++29.[^infoq-cpp26][^p3608] Sutter's term as convenor ended on 2025-12-31, so Croydon was the first meeting under new convenor Guy Davidson.[^sutter-kona]

# Why it matters
C++26 is the committee's actual answer to the [memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md). It delivers [spatial hardening](/ideas/memory-safety/bounds-safety-and-hardened-c.md) that Google had shown costs about 0.3%, plus removal of one UB class, but no temporal-safety guarantee. Having [rejected Safe C++](/events/2025-09-safe-cpp-abandoned.md) and then missed the deadline for profiles, WG21 left a gap: C++ in 2026 can be made *safer* but cannot be proven *memory-safe*. That is the gap Rust, Carbon and hardware tagging are trying to fill.

# Related
- [Safe C++ vs profiles](/ideas/memory-safety/safe-cpp-vs-profiles.md)
- [C++](/languages/cpp.md)
- [Google hardened libc++ results](/events/2024-11-google-hardened-libcxx-results.md)

[^sutter-croydon]: Herb Sutter: C++26 is done! — https://herbsutter.com/2026/03/29/c26-is-done-trip-report-march-2026-iso-c-standards-meeting-london-croydon-uk/
[^infoq-cpp26]: InfoQ: C++26 — Reflection, Memory Safety, Contracts, and a New Async Model — https://www.infoq.com/news/2026/04/cpp-26-reflection-safety-async/
[^p3608]: WG21 P3608: Contracts and profiles: what can we reasonably ship in C++26 — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3608r0.html
[^sutter-kona]: Herb Sutter: Trip report — November 2025 ISO C++ meeting (Kona) — https://herbsutter.com/2025/11/10/trip-report-november-2025-iso-c-standards-meeting-kona-usa/
