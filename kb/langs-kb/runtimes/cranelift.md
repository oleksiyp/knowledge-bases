---
type: Runtime
title: Cranelift
description: A compiler backend optimized for fast compilation and Wasm embedding. Production use and verification
  work are successes; security advisories show the limits of partial proofs.
runtime_kind: compiler-backend
tags:
- compilers
- infrastructure
trajectory: growing
languages:
- languages/rust
ideas:
- ideas/platforms-and-portability/server-side-wasm
- ideas/ai-and-languages/ai-and-formal-verification
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: cranelift
  title: Cranelift project README
  resource: https://github.com/bytecodealliance/wasmtime/tree/main/cranelift
- id: cranelift2022
  title: 'Bytecode Alliance: Cranelift Progress in 2022'
  resource: https://bytecodealliance.org/articles/cranelift-progress-2022
- id: advisories
  title: 'Bytecode Alliance: Wasmtime security advisories, 9 April 2026'
  resource: https://bytecodealliance.org/articles/wasmtime-security-advisories
---

# Summary
**Verdict: successful focused alternative.** Cranelift provides native code generation for Wasmtime and other embedders. Its purpose includes compilation speed, making the relevant tradeoff different from maximizing every program's ahead-of-time optimization.[^cranelift]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E3 | 2022-12 | Project reports regalloc2 and ISLE in production | + [^cranelift2022] |
| E3 | 2022 | RISC-V joins supported targets; incremental compilation work lands | + [^cranelift2022] |
| E4 | 2026-04-09 | Wasmtime discloses compiler and runtime security issues | mixed [^advisories] |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| Fast native-code generation | Useful for JIT and Wasm deployment [^cranelift] |
| Declarative instruction lowering | ISLE improves structure and enables verification [^cranelift2022] |
| Testing plus scoped formal verification | Valuable, but not a proof of whole-runtime safety [^advisories] |

# What succeeded
The 2022 progress report describes replacing the register allocator, moving backend instruction selection to ISLE, and adding incremental compilation. The allocator transition reported 10–20% lower compile time and runtime gains up to 7% in the project's evaluation; these are not universal comparisons with LLVM.[^cranelift2022]

Cranelift's integration with Wasmtime gives it an actual deployment context rather than only a compiler microbenchmark. The project also exposes components for other embedders.[^cranelift]

# What failed or stalled
The April 2026 security disclosure includes issues in both Cranelift and the separate Winch backend. Its discussion of verified instruction lowering illustrates a critical boundary: proving selected translations does not prove register allocation, runtime state, every backend, or the whole sandbox.[^advisories]

The 2022 allocator replacement required substantial migration work despite a clear performance goal. Even a focused compiler accumulates interface and correctness obligations.[^cranelift2022]

# By era
- **E1–E2:** the fast-compilation design establishes a distinct goal from broad AOT optimization.[^cranelift]
- **E3:** new infrastructure improves both code generation and maintainability.[^cranelift2022]
- **E4:** security work makes the trusted compiler boundary more explicit.[^advisories]

# Lessons
**Synthesis:** a smaller optimization budget is a legitimate product choice. Compare time-to-ready, steady-state execution and security maintenance together. Describe the scope of formal verification precisely instead of applying a verified label to an entire runtime.

# Related
- [Wasmtime](/runtimes/wasmtime.md)
- [LLVM](/runtimes/llvm.md)
- [Formal verification](/ideas/ai-and-languages/ai-and-formal-verification.md)

[^cranelift]: Cranelift project README — https://github.com/bytecodealliance/wasmtime/tree/main/cranelift
[^cranelift2022]: Bytecode Alliance: Cranelift Progress in 2022 — https://bytecodealliance.org/articles/cranelift-progress-2022
[^advisories]: Bytecode Alliance: Wasmtime security advisories, 9 April 2026 — https://bytecodealliance.org/articles/wasmtime-security-advisories
