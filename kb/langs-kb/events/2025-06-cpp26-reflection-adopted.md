---
type: Event
title: WG21 votes static reflection into C++26
description: At the Sofia meeting (June 2025) the ISO C++ committee adopted P2996 and companion papers, putting compile-time reflection into C++26 at feature freeze. It was the language's biggest metaprogramming change since templates, after roughly a decade of study-group work.
event_kind: proposal-accepted
date: 2025-06-21
era: E4
impact: positive
languages: [languages/cpp]
runtimes: []
ideas: [ideas/metaprogramming/compile-time-reflection, ideas/metaprogramming/comptime-and-staged-compilation]
tags: [cpp, cpp26, reflection, wg21, metaprogramming]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: sutter-sofia
    resource: https://herbsutter.com/2025/06/21/trip-report-june-2025-iso-c-standards-meeting-sofia-bulgaria/
    title: "Herb Sutter: Trip report — June 2025 ISO C++ standards meeting (Sofia, Bulgaria)"
  - id: isocpp-refl
    resource: https://isocpp.org/blog/2025/06/reflection-voted-into-cpp26-whole-new-language-herb-sutter
    title: "isocpp.org: Reflection voted into C++26 — 'Whole new language'"
  - id: p2996
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p2996r13.html
    title: "WG21 P2996R13: Reflection for C++26 (2025-06-20)"
  - id: gcc16
    resource: https://gcc.gnu.org/gcc-16/changes.html
    title: "GNU: GCC 16 Release Series — Changes (P2996R13 reflection, -freflection)"
---

# What happened
At the June 2025 meeting in Sofia, Bulgaria, which was also C++26's feature freeze, WG21 voted "the first seven papers for compile-time reflection" into the C++26 working draft. These were led by P2996 "Reflection for C++26" (Childers, Dimov, Katz, Revzin, Sutton, Vali, Vandevoorde), with companion papers for expansion statements (`template for`), annotations and `define_aggregate`.[^sutter-sofia][^p2996] The design is value-based: `^^T` yields a `std::meta::info` value, `consteval` functions query it, and splicers `[: … :]` turn it back into code. Herb Sutter called it more transformational than "any 10 other major features" combined, and the start of a "whole new language".[^sutter-sofia][^isocpp-refl]

# Why it matters
[Compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md) had been C++'s white whale since the Reflection TS (2018–2019), whose template-metaprogramming design was abandoned for the constexpr-value design. Shipping it on time for C++26 makes C++ the first top-five language with full static reflection integrated with its [constant-evaluation machinery](/ideas/metaprogramming/comptime-and-staged-compilation.md). Rust's effort had collapsed in 2023 ([RustConf incident](/events/2023-05-rustconf-reflection-keynote-incident.md)), and Zig's comptime covers part of the space. Implementation followed quickly: GCC 16.1 (April 2026) shipped P2996R13 behind `-std=c++26 -freflection`.[^gcc16] The open question is uptake. The payoff depends on library authors replacing macros and code generators, and on MSVC and mainline Clang catching up.

# Related
- [Compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md)
- [C++26 finalized](/events/2026-03-cpp26-finalized.md)
- [C++](/languages/cpp.md), [cppfront](/languages/cppfront.md)

[^sutter-sofia]: Herb Sutter: Trip report — June 2025 ISO C++ standards meeting (Sofia) — https://herbsutter.com/2025/06/21/trip-report-june-2025-iso-c-standards-meeting-sofia-bulgaria/
[^isocpp-refl]: isocpp.org: Reflection voted into C++26 — https://isocpp.org/blog/2025/06/reflection-voted-into-cpp26-whole-new-language-herb-sutter
[^p2996]: WG21 P2996: Reflection for C++26 — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p2996r13.html
[^gcc16]: GNU: GCC 16 Release Series — Changes — https://gcc.gnu.org/gcc-16/changes.html
