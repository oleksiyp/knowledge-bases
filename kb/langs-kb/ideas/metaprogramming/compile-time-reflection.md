---
type: Idea
title: Compile-time (static) reflection
description: "Let programs inspect types, members and annotations at compile time and generate code from them, replacing macros, code generators and hand-written boilerplate (serialization, bindings, enum-to-string). 2018–2026 verdict: succeeding in C++ (P2996 voted into C++26 in June 2025, shipped in GCC 16), stalled-then-restarted in Rust (a 2023 governance incident killed the leading design; a minimal nightly MVP landed in 2026), and native in Zig via comptime."
area: metaprogramming
tags: [reflection, cpp26, p2996, rust, zig, serialization, macros, code-generation]
outcome: succeeding
maturity_2026: adopted
origin_year: 2014
mainstream_year: 2026
languages: [languages/cpp, languages/rust, languages/zig, languages/d-lang, languages/cppfront, languages/swift]
runtimes: [runtimes/gcc, runtimes/llvm]
related_ideas:
  - ideas/metaprogramming/comptime-and-staged-compilation
  - ideas/metaprogramming/source-generators-and-annotation-processing
  - ideas/tooling-and-ecosystem/language-editions-and-evolution
era_momentum: { E1: flat, E2: flat, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: p2996
    resource: https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p2996r13.html
    title: "WG21 P2996R13: Reflection for C++26"
  - id: sutter-sofia
    resource: https://herbsutter.com/2025/06/21/trip-report-june-2025-iso-c-standards-meeting-sofia-bulgaria/
    title: "Herb Sutter: Trip report — June 2025 ISO C++ standards meeting (Sofia, Bulgaria)"
  - id: gcc16
    resource: https://gcc.gnu.org/gcc-16/changes.html
    title: "GNU: GCC 16 Release Series — Changes (P2996R13 reflection, -freflection)"
  - id: lemire
    resource: https://lemire.me/blog/2025/06/22/c26-will-include-compile-time-reflection-why-should-you-care/
    title: "Daniel Lemire: C++26 will include compile-time reflection — why should you care? (2025-06-22)"
  - id: cppcon-2025
    resource: https://isocpp.org/blog/2025/08/cppcon-2025-keynote-herb-sutter-reflection-cpps-decade-defining-rocket-engi
    title: "isocpp.org: CppCon 2025 keynote — Reflection: C++'s Decade-Defining Rocket Engine (Herb Sutter)"
  - id: thephd-rustconf
    resource: https://thephd.dev/i-am-no-longer-speaking-at-rustconf-2023
    title: "JeanHeyd Meneide: I Am No Longer Speaking at RustConf 2023 (2023-05)"
  - id: soasis
    resource: https://soasis.org/posts/statement-on-rustconf-compile-time-introspection/
    title: "Shepherd's Oasis: Statement on RustConf & Introspection (withdrawal from Rust Foundation grant)"
  - id: lwn-rustconf
    resource: https://lwn.net/Articles/933276/
    title: "LWN: A post on the RustConf keynote fiasco (2023-05)"
  - id: rust-goal-2025
    resource: https://rust-lang.github.io/rust-project-goals/2025h2/reflection-and-comptime.html
    title: "Rust Project Goals 2025H2: reflection and comptime (Oli Scherer)"
    author: org:rust-lang
  - id: rust-goal-2026
    resource: https://rust-lang.github.io/rust-project-goals/2026/reflection-and-comptime.html
    title: "Rust Project Goals 2026: reflection and comptime"
    author: org:rust-lang
  - id: rust-type-info
    resource: https://weeklyrust.substack.com/p/compile-time-reflection-is-finally
    title: "Rust Bytes: Compile-Time Reflection Is Finally Here (nightly type_info, 2026-01-18)"
  - id: zig-typeinfo
    resource: https://ziglang.org/documentation/master/#typeInfo
    title: "Zig Language Reference: @typeInfo"
    author: org:ziglang
  - id: swift-macros
    resource: https://github.com/swiftlang/swift-evolution/blob/main/proposals/0389-attached-macros.md
    title: "Swift Evolution SE-0389: Attached macros (Swift 5.9)"
---

# Summary
**Succeeding (led by C++), with Rust as the cautionary tale.** Static reflection — iterate over a struct's members, read annotations, synthesise code — is the feature that eliminates whole categories of boilerplate and code generators. After a decade of study-group work (the template-based Reflection TS was abandoned for a value-based design), WG21 voted the first seven reflection papers (P2996 and companions) into C++26 at Sofia in June 2025; Herb Sutter called it more transformative than any ten other features combined.[^sutter-sofia][^p2996][^cppcon-2025] GCC 16 shipped it behind `-freflection` in 2026.[^gcc16] Rust, by contrast, *lost* three years: in May 2023 the project downgraded JeanHeyd Meneide's RustConf keynote on compile-time introspection, he withdrew, and his Foundation-funded reflection work was abandoned.[^thephd-rustconf][^soasis][^lwn-rustconf] Rust restarted with a 2025H2 project goal ("reflection and comptime") and a nightly-only MVP (`type_info`) in January 2026 that handles little beyond tuples.[^rust-goal-2025][^rust-type-info][^rust-goal-2026] Zig had reflection all along via `@typeInfo` at comptime;[^zig-typeinfo] Swift chose macros (5.9) instead.[^swift-macros]

# The idea
Expose the compiler's knowledge of types as compile-time values (`^^T` in C++26 yields a `std::meta::info`), queryable with ordinary constexpr functions, and allow splicing generated declarations back into the program. Prior art: Java/C# runtime reflection (dynamic, costly), D's `__traits`, Boost.Hana tricks, code generators (protobuf, Qt moc). The problem: serialization, ORMs, bindings and enum utilities required macros or external generators that are slow, opaque and error-prone.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018–2019 | C++ Reflection TS (template-based) published, then superseded by value-based design | mixed |
| E3 | 2023-05 | RustConf keynote downgrade; Rust reflection work abandoned ([event](/events/2023-05-rustconf-reflection-keynote-incident.md)) [^thephd-rustconf][^soasis] | − |
| E3 | 2023-09 | Swift 5.9 ships macros instead of reflection [^swift-macros] | mixed |
| E4 | 2025-06 | C++26: reflection voted in at Sofia ([event](/events/2025-06-cpp26-reflection-adopted.md)) [^sutter-sofia] | + |
| E4 | 2025-H2 | Rust project goal "reflection and comptime" [^rust-goal-2025] | + |
| E4 | 2026-01 | Rust nightly `type_info` MVP (tuples only) [^rust-type-info] | + |
| E4 | 2026-03 | C++26 finalised with reflection ([event](/events/2026-03-cpp26-finalized.md)) | + |
| E4 | 2026 | GCC 16 implements P2996R13 [^gcc16] | + |

# Where it succeeded
- **C++26**: a coherent, constexpr-based design, quickly implemented in GCC; early demos replace enum-to-string macros, serialization libraries and Qt-style generators.[^lemire][^gcc16]
- **Zig**: reflection is just comptime code over `@typeInfo`, used widely in std (formatting, serialization).[^zig-typeinfo]
- **cppfront** prototypes (metafunctions) helped persuade the committee by showing practical generated interfaces.[^cppcon-2025]

# Where it failed or stalled
- **Rust**: a governance failure, not a technical one, halted the most advanced design; the restart is years behind and the MVP is minimal.[^lwn-rustconf][^rust-type-info]
- **C++ uptake is pending**: MSVC and mainline Clang support lagged GCC, and library ecosystems will take years to replace macros.[^gcc16]
- **Swift** sidestepped reflection with macros, which run as separate compiler plugins — powerful but slower and more complex.[^swift-macros]

# Why
1. **Constexpr maturity enabled C++.** Value-based reflection rides on a decade of constexpr investment, so it fits existing compile-time evaluation instead of extending template metaprogramming.[^sutter-sofia]
2. **Champions and process.** C++ had sustained authors (Revzin, Childers, Sutton, Vandevoorde and others) and a committee calendar; Rust's effort depended on one funded contributor whose relationship with the project broke down.[^soasis]
3. **Rust's macro escape hatch reduced urgency.** `derive` and proc macros already solved serialization (serde), so reflection was "nice to have" until compile-time costs of macros became painful.[^rust-goal-2025]
4. **Trait systems complicate reflection.** Reflecting on generic Rust types requires answering trait questions at compile time, intertwining reflection with [const traits and comptime](/ideas/metaprogramming/comptime-and-staged-compilation.md).[^rust-goal-2026]

# Lessons
- A single community incident can cost a language years on a strategic feature; contributor relations are part of language design capacity.
- Build reflection on top of mature compile-time evaluation; bolting it onto template or macro systems produces unusable designs (the Reflection TS fate).
- Macros are a substitute for reflection, but at a compile-time and tooling cost that eventually forces the issue.

# Related
- Languages: [C++](/languages/cpp.md), [Rust](/languages/rust.md), [Zig](/languages/zig.md), [D](/languages/d-lang.md), [cppfront](/languages/cppfront.md), [Swift](/languages/swift.md)
- Ideas: [Comptime and staged compilation](/ideas/metaprogramming/comptime-and-staged-compilation.md), [Source generators and annotation processing](/ideas/metaprogramming/source-generators-and-annotation-processing.md)
- Events: [RustConf 2023 reflection incident](/events/2023-05-rustconf-reflection-keynote-incident.md), [C++26 reflection adopted](/events/2025-06-cpp26-reflection-adopted.md)

[^p2996]: WG21 P2996R13: Reflection for C++26 — https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p2996r13.html
[^sutter-sofia]: Herb Sutter: Trip report June 2025 Sofia — https://herbsutter.com/2025/06/21/trip-report-june-2025-iso-c-standards-meeting-sofia-bulgaria/
[^gcc16]: GNU: GCC 16 Release Series — Changes — https://gcc.gnu.org/gcc-16/changes.html
[^lemire]: Daniel Lemire: C++26 will include compile-time reflection — https://lemire.me/blog/2025/06/22/c26-will-include-compile-time-reflection-why-should-you-care/
[^cppcon-2025]: isocpp.org: CppCon 2025 keynote (Sutter) — https://isocpp.org/blog/2025/08/cppcon-2025-keynote-herb-sutter-reflection-cpps-decade-defining-rocket-engi
[^thephd-rustconf]: JeanHeyd Meneide: I Am No Longer Speaking at RustConf 2023 — https://thephd.dev/i-am-no-longer-speaking-at-rustconf-2023
[^soasis]: Shepherd's Oasis: Statement on RustConf & Introspection — https://soasis.org/posts/statement-on-rustconf-compile-time-introspection/
[^lwn-rustconf]: LWN: A post on the RustConf keynote fiasco — https://lwn.net/Articles/933276/
[^rust-goal-2025]: Rust Project Goals 2025H2: reflection and comptime — https://rust-lang.github.io/rust-project-goals/2025h2/reflection-and-comptime.html
[^rust-goal-2026]: Rust Project Goals 2026: reflection and comptime — https://rust-lang.github.io/rust-project-goals/2026/reflection-and-comptime.html
[^rust-type-info]: Rust Bytes: Compile-Time Reflection Is Finally Here — https://weeklyrust.substack.com/p/compile-time-reflection-is-finally
[^zig-typeinfo]: Zig Language Reference: @typeInfo — https://ziglang.org/documentation/master/#typeInfo
[^swift-macros]: Swift Evolution SE-0389: Attached macros — https://github.com/swiftlang/swift-evolution/blob/main/proposals/0389-attached-macros.md
