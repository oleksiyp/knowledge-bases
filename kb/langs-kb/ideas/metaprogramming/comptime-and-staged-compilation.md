---
type: Idea
title: Comptime and staged compilation (running ordinary code at compile time)
description: "Use the same language, not a separate template or macro language, to compute types, generate code and validate invariants at compile time. 2018–2026 verdict: succeeding — Zig made comptime its single metaprogramming mechanism and the idea spread (C++ constexpr/consteval each standard up to C++26's expansion statements and constexpr exceptions, Mojo parameters, C23 constexpr), while Rust's const evaluation advanced slowly (const generics MVP 2021; const traits still unstable in 2026) and Jai's #run stayed in closed beta."
area: metaprogramming
tags: [comptime, constexpr, consteval, ctfe, zig, cpp, rust, mojo, jai, generics]
outcome: succeeding
maturity_2026: adopted
origin_year: 1960
mainstream_year: 2011
languages: [languages/zig, languages/cpp, languages/rust, languages/d-lang, languages/mojo, languages/c, languages/nim, languages/odin]
runtimes: []
related_ideas:
  - ideas/metaprogramming/compile-time-reflection
  - ideas/metaprogramming/source-generators-and-annotation-processing
  - ideas/types/late-generics
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: zig-docs
    resource: https://ziglang.org/documentation/master/#comptime
    title: "Zig Language Reference: comptime"
    author: org:ziglang
  - id: kristoff-io
    resource: https://kristoff.it/blog/zig-new-async-io/
    title: "Loris Cro: Zig's New Async I/O"
  - id: rust-151
    resource: https://blog.rust-lang.org/2021/03/25/Rust-1.51.0.html
    title: "Rust Blog: Announcing Rust 1.51.0 (const generics MVP, 2021-03-25)"
    author: org:rust-lang
  - id: rust-const-traits
    resource: https://rust-lang.github.io/rust-project-goals/2026/const-traits.html
    title: "Rust Project Goals 2026: Const Traits (no accepted RFC yet)"
    author: org:rust-lang
  - id: rust-reflection-goal
    resource: https://rust-lang.github.io/rust-project-goals/2026/reflection-and-comptime.html
    title: "Rust Project Goals 2026: reflection and comptime"
    author: org:rust-lang
  - id: p1306
    resource: https://isocpp.org/files/papers/P1306R5.html
    title: "WG21 P1306R5: Expansion statements (template for), C++26"
  - id: cppref-26
    resource: https://cppreference.com/cpp/26
    title: "cppreference: C++26 (constexpr exceptions P3068, expansion statements, reflection)"
  - id: cppref-c23
    resource: https://en.cppreference.com/c/23
    title: "cppreference: C23 (constexpr objects)"
  - id: mojo-params
    resource: https://docs.modular.com/mojo/manual/parameters/
    title: "Modular: Mojo manual — Parameterization: compile-time metaprogramming"
  - id: jai-2026
    resource: https://www.mrphilgames.com/blog/jai-in-2026
    title: "Mr. Phil Games: Jai in 2026 — the state of Jonathan Blow's programming language (closed beta)"
  - id: sutter-sofia
    resource: https://herbsutter.com/2025/06/
    title: "Herb Sutter: June 2025 Sofia trip report (reflection + constexpr in C++26)"
  - id: d-ctfe
    resource: https://dlang.org/spec/function.html#interpretation
    title: "D Language Specification: Compile Time Function Execution (CTFE)"
---

# Summary
**Succeeding.** The 2018–2026 trend in systems languages was to replace bespoke compile-time sublanguages (C preprocessor, C++ template metaprogramming, Rust declarative/procedural macros) with *ordinary code evaluated by the compiler*. [Zig](/languages/zig.md) made this its identity: `comptime` parameters give generics (types are values), conditional compilation, format-string checking and reflection via `@typeInfo`, with no macros and no templates.[^zig-docs] [C++](/languages/cpp.md) moved the same direction one standard at a time — `consteval` (C++20), constexpr containers, and in C++26 expansion statements (`template for`), constexpr exceptions and value-based reflection that makes constexpr code the metaprogramming language.[^p1306][^cppref-26][^sutter-sofia] C23 added `constexpr` objects,[^cppref-c23] Mojo built its generics on compile-time "parameters",[^mojo-params] and Rust explicitly named its 2025–26 reflection effort "reflection and comptime".[^rust-reflection-goal] The stall: Rust's const evaluation remains restricted — const generics MVP shipped in 2021, but calling trait methods in `const fn` (const traits) still had no accepted RFC in 2026.[^rust-151][^rust-const-traits] Jai, the language that popularised `#run` arbitrary compile-time execution, stayed in closed beta.[^jai-2026]

# The idea
Stage the program: some code runs in the compiler (with access to types as values), producing constants, types or code consumed by the runtime stage. Prior art: Lisp macros and `eval-when`, MetaML/MetaOCaml staging, D's CTFE (2007),[^d-ctfe] C++11 `constexpr`, Terra. The problem it solves: templates and macros are separate, hard-to-debug languages with poor error messages; comptime unifies them with the host language.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-02 | C++20: `consteval`, `constinit`, constexpr `std::vector`/`std::string` | + |
| E2 | 2021-03-25 | Rust 1.51: const generics MVP [^rust-151] | + |
| E2 | 2022 | Zig's comptime-based generics gain mainstream attention through Bun and TigerBeetle [^zig-docs] | + |
| E3 | 2023 | Mojo launches with compile-time parameterisation as its generics model [^mojo-params] | + |
| E4 | 2024-10 | C23 published with `constexpr` objects [^cppref-c23] | + |
| E4 | 2025-06 | C++26 feature freeze: reflection, expansion statements, constexpr exceptions [^sutter-sofia][^p1306] | + |
| E4 | 2025-H2 | Rust project goal "reflection and comptime" [^rust-reflection-goal] | + |
| E4 | 2026 | Rust const traits still pre-RFC [^rust-const-traits] | − |
| E4 | 2026 | Jai still closed beta, public release tied to Blow's game [^jai-2026] | − |

# Where it succeeded
- **Zig**: comptime is the most-cited reason developers admire Zig; it subsumes generics, reflection and code generation in one rule set, and even the 2026 `Io` design is idiomatic comptime-generic code.[^zig-docs][^kristoff-io]
- **C++**: constexpr evolved from a curiosity into the backbone of C++26 reflection; the committee chose *value-based* reflection precisely because constexpr evaluation had matured.[^sutter-sofia]
- **New languages default to it**: Mojo, Odin (parametric polymorphism + `#run`-like features), Nim's static/compile-time VM.[^mojo-params]

# Where it failed or stalled
- **Rust**: soundness and trait-system complexity make const evaluation of generic code hard; const traits have been "experimental" for years, so Rust still leans on proc macros, which slow compiles.[^rust-const-traits]
- **Compile-time cost**: unbounded compile-time execution makes builds slower and harder to cache — a recurring complaint in Zig and C++ alike.
- **Jai**: a decade of influence without a public release limited its direct impact.[^jai-2026]

# Why
1. **Templates/macros had hit an ergonomic wall.** C++ TMP and Rust proc macros are powerful but alien; reusing the host language lowers the barrier and improves error messages.
2. **Compilers got interpreters.** Mature constant evaluators (Clang's constexpr interpreter, Zig's Sema, Rust's Miri-derived CTFE) made it feasible to run real code at compile time.
3. **Type-system interactions decide pace.** Zig has no traits or lifetimes to reconcile, so comptime is simple; Rust must keep const evaluation sound under traits and lifetimes, so progress is slow.[^rust-const-traits]
4. **Reflection pulls comptime along.** Once code can inspect types, it needs a way to compute with them — C++26 and Rust both bundled the two.[^sutter-sofia][^rust-reflection-goal]

# Lessons
- One general compile-time mechanism beats several specialised ones, if the language's type system is simple enough to allow it.
- Languages with rich trait systems should expect comptime features to arrive late and piecemeal.

# Related
- Languages: [Zig](/languages/zig.md), [C++](/languages/cpp.md), [Rust](/languages/rust.md), [D](/languages/d-lang.md), [Mojo](/languages/mojo.md), [Nim](/languages/nim.md), [Odin](/languages/odin.md)
- Ideas: [Compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md), [Source generators and annotation processing](/ideas/metaprogramming/source-generators-and-annotation-processing.md), [Late generics](/ideas/types/late-generics.md)
- Events: [C++26 reflection adopted](/events/2025-06-cpp26-reflection-adopted.md), [C++26 finalised](/events/2026-03-cpp26-finalized.md)

[^zig-docs]: Zig Language Reference: comptime — https://ziglang.org/documentation/master/#comptime
[^kristoff-io]: Loris Cro: Zig's New Async I/O — https://kristoff.it/blog/zig-new-async-io/
[^rust-151]: Rust Blog: Announcing Rust 1.51.0 — https://blog.rust-lang.org/2021/03/25/Rust-1.51.0.html
[^rust-const-traits]: Rust Project Goals 2026: Const Traits — https://rust-lang.github.io/rust-project-goals/2026/const-traits.html
[^rust-reflection-goal]: Rust Project Goals 2026: reflection and comptime — https://rust-lang.github.io/rust-project-goals/2026/reflection-and-comptime.html
[^p1306]: WG21 P1306R5: Expansion statements — https://isocpp.org/files/papers/P1306R5.html
[^cppref-26]: cppreference: C++26 — https://cppreference.com/cpp/26
[^cppref-c23]: cppreference: C23 — https://en.cppreference.com/c/23
[^mojo-params]: Modular: Mojo parameters — https://docs.modular.com/mojo/manual/parameters/
[^jai-2026]: Mr. Phil Games: Jai in 2026 — https://www.mrphilgames.com/blog/jai-in-2026
[^sutter-sofia]: Herb Sutter: June 2025 — https://herbsutter.com/2025/06/
[^d-ctfe]: D Language Specification: CTFE — https://dlang.org/spec/function.html#interpretation
