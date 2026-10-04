---
type: Runtime
title: LLVM
description: Reusable compiler infrastructure succeeded across languages and hardware. Its broad reach comes with
  compilation cost, evolving interfaces and downstream migration work.
runtime_kind: compiler-backend
tags:
- compilers
- infrastructure
trajectory: stable
languages:
- languages/c
- languages/cpp
- languages/rust
- languages/swift
- languages/julia
ideas:
- ideas/runtime-performance/ml-compilers-and-mlir
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: orc
  title: 'LLVM: ORC Design and Implementation'
  resource: https://llvm.org/docs/ORCv2.html
- id: opaque
  title: 'LLVM: Opaque pointers migration'
  resource: https://llvm.org/docs/OpaquePointers.html
- id: mlir-paper
  title: 'MLIR: A Compiler Infrastructure for the End of Moores Law (2020)'
  resource: https://arxiv.org/abs/2002.11054
- id: flang
  title: 'LLVM: Goodbye flang-new, hello flang, 11 March 2025'
  resource: https://blog.llvm.org/posts/2025-03-11-flang-new/
- id: llvm-policy
  title: LLVM Developer Policy
  resource: https://llvm.org/docs/DeveloperPolicy.html
---

# Summary
**Verdict: durable shared infrastructure.** LLVM supplies compiler components rather than one universal managed runtime. ORC supports JIT embedding; frontends and optimizers can also produce ahead-of-time binaries. The 2018–2026 story includes continued expansion and deliberate internal compatibility breaks.[^orc][^opaque]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2–E3 | 2020 onward | MLIR describes infrastructure above low-level IR | expansion [^mlir-paper] |
| E2 | LLVM 15 | Opaque pointers become default | migration [^opaque] |
| E3 | LLVM 17 | Typed-pointer support removed | simplification / cost [^opaque] |
| E4 | 2025-03 | LLVM 20 ships the renamed Flang compiler | + [^flang] |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| Reusable compiler layers | Enables multiple frontends and targets [^llvm-policy] |
| Embedded JIT infrastructure | ORC provides linking and execution abstractions [^orc] |
| Evolving IR instead of freezing all internals | Simplifies implementation but imposes migration [^opaque] |

# What succeeded
ORC separates symbol management, linking and execution, and supports concurrent compilation and remote execution arrangements. It reduces the amount an embedding application must implement, without deciding that application's language semantics or runtime policy.[^orc]

Flang's LLVM 20 milestone demonstrates that old languages can acquire new implementations inside the shared infrastructure. It is not evidence that every Fortran feature or workload is equally mature.[^flang]

# What failed or stalled
Downstream integrations cannot assume a permanently stable C++ API. LLVM's developer policy describes compatibility expectations and the more limited role of the C API. Integrating a compiler library includes an upgrade-maintenance obligation.[^llvm-policy]

Opaque pointers are a concrete example: LLVM 15 made them default, LLVM 16 retained typed pointers only on a best-effort basis, and LLVM 17 removed them. Out-of-tree code that depended on the old representation needed changes.[^opaque]

# By era
- **E1:** a mature shared backend is the starting point, rather than a newly launched runtime.
- **E2:** higher-level compiler infrastructure expands the model.[^mlir-paper]
- **E3:** IR simplification moves through a staged compatibility transition.[^opaque]
- **E4:** Fortran tooling reaches a visible maturity milestone.[^flang]

# Lessons
**Synthesis:** reuse wins when maintainers can amortize backend engineering across projects. It does not erase compile-time budgets, language semantics or release-integration costs. Evaluate those explicitly before choosing LLVM for a latency-sensitive JIT.

# Related
- [MLIR](/runtimes/mlir.md)
- [Cranelift](/runtimes/cranelift.md)
- [GCC](/runtimes/gcc.md)

[^orc]: LLVM: ORC Design and Implementation — https://llvm.org/docs/ORCv2.html
[^opaque]: LLVM: Opaque pointers migration — https://llvm.org/docs/OpaquePointers.html
[^mlir-paper]: MLIR: A Compiler Infrastructure for the End of Moores Law (2020) — https://arxiv.org/abs/2002.11054
[^flang]: LLVM: Goodbye flang-new, hello flang, 11 March 2025 — https://blog.llvm.org/posts/2025-03-11-flang-new/
[^llvm-policy]: LLVM Developer Policy — https://llvm.org/docs/DeveloperPolicy.html
