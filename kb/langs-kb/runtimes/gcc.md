---
type: Runtime
title: GCC
description: GCC remained a broad compiler platform, adding language frontends and new standards support. Inclusion
  of experimental frontends did not imply production parity with incumbent compilers.
runtime_kind: compiler-backend
tags:
- compilers
- infrastructure
trajectory: stable
languages:
- languages/c
- languages/cpp
- languages/rust
- languages/d-lang
- languages/ada-spark
- languages/cobol-fortran-legacy
ideas:
- ideas/metaprogramming/compile-time-reflection
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: gcc
  title: GNU Compiler Collection project and releases
  resource: https://gcc.gnu.org/
- id: gcc15
  title: GCC 15 changes
  resource: https://gcc.gnu.org/gcc-15/changes.html
- id: gcc16
  title: GCC 16 changes
  resource: https://gcc.gnu.org/gcc-16/changes.html
- id: gccrs
  title: 'GCC Rust project: purpose and status'
  resource: https://github.com/Rust-GCC/gccrs
---

# Summary
**Verdict: sustained breadth and standards implementation.** GCC continued evolving as a compiler collection across the period. New language frontends and C++ features counter the idea that an established toolchain must be static; each frontend nevertheless needs its own maturity assessment.[^gcc][^gcc15][^gcc16]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1–E3 | annual releases | Existing language and target support continues evolving | continuity [^gcc] |
| E4 | GCC 15, 2025 | COBOL frontend added; C default moves to GNU C23 | + [^gcc15] |
| E4 | GCC 15, 2025 | Rust frontend documents progress against core 1.49 | experimental [^gcc15] |
| E4 | GCC 16, 2026 | C++26 reflection available with explicit flags | + [^gcc16] |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| Shared optimizers and targets for several frontends | Durable compiler-collection model [^gcc] |
| Incremental standards implementation | C23 and C++26 work lands in released toolchains [^gcc15][^gcc16] |
| Alternative Rust frontend | Progress, but release inclusion is not parity [^gcc15] |

# What succeeded
GCC 16 documents reflection support under `-std=c++26 -freflection`, alongside related reflection facilities. This supplies concrete implementation evidence for compile-time metaprogramming rather than only a standards proposal.[^gcc16]

GCC 15's COBOL frontend and GNU C23 default show investment in both old languages and recent standards. The COBOL implementation notes describe tested targets and omitted features, making the scope assessable.[^gcc15]

# What failed or stalled
The GCC 15 Rust notes discuss work required for `core 1.49`, including language items, macro expansion and type-system behavior. That milestone must not be presented as compatibility with arbitrary current Rust applications. `gccrs` is also distinct from using GCC as a backend for the existing Rust compiler.[^gcc15][^gccrs]

The COBOL frontend initially supports a limited set of 64-bit targets and does not implement every feature in its reference standard. A new frontend is a beginning, not universal legacy application compatibility.[^gcc15]

# By era
- **E1–E3:** continuity of the multi-language compiler project provides the baseline.[^gcc]
- **E4:** frontend expansion and new standard features provide concrete recent outcomes.[^gcc15][^gcc16]

# Lessons
**Synthesis:** compiler diversity is valuable even when alternatives advance unevenly. Evaluate support at the level of the required language version, library, target and workload; a frontend name in a release announcement is too coarse a metric.

# Related
- [LLVM](/runtimes/llvm.md)
- [Compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md)
- [COBOL and Fortran](/languages/cobol-fortran-legacy.md)

[^gcc]: GNU Compiler Collection project and releases — https://gcc.gnu.org/
[^gcc15]: GCC 15 changes — https://gcc.gnu.org/gcc-15/changes.html
[^gcc16]: GCC 16 changes — https://gcc.gnu.org/gcc-16/changes.html
[^gccrs]: GCC Rust project: purpose and status — https://github.com/Rust-GCC/gccrs
