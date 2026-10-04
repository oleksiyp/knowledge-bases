---
type: Runtime
title: MLIR
description: Extensible intermediate representations succeeded as compiler infrastructure, especially for ML and
  accelerators; reusable dialect machinery does not provide automatic interoperability or optimal lowering.
runtime_kind: compiler-backend
tags:
- compilers
- infrastructure
trajectory: growing
languages:
- languages/mojo
- languages/triton
ideas:
- ideas/runtime-performance/ml-compilers-and-mlir
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: mlir-paper
  title: 'MLIR: A Compiler Infrastructure for the End of Moores Law (2020)'
  resource: https://arxiv.org/abs/2002.11054
- id: mlir-rationale
  title: MLIR design rationale
  resource: https://mlir.llvm.org/docs/Rationale/Rationale/
- id: mlir-lang
  title: MLIR language reference
  resource: https://mlir.llvm.org/docs/LangRef/
- id: stablehlo
  title: 'OpenXLA: StableHLO'
  resource: https://openxla.org/stablehlo
- id: mlir-deprecation
  title: MLIR deprecations and refactoring
  resource: https://mlir.llvm.org/deprecation/
- id: mlir-launch
  title: TensorFlow announces MLIR, 8 April 2019
  resource: https://blog.tensorflow.org/2019/04/mlir-new-intermediate-representation.html
---

# Summary
**Verdict: succeeding as infrastructure.** MLIR preserves several levels of abstraction inside one compiler framework. It is not a VM that executes every language, and it does not replace LLVM machine-code generation. Its research design addresses the loss of domain information caused by lowering too early.[^mlir-paper][^mlir-rationale]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-04-08 | MLIR publicly announced | + [^mlir-launch] |
| E1 | 2020-02 | MLIR design paper published | framework articulated [^mlir-paper] |
| E2–E3 | development period | Extensible dialects and conversion infrastructure develop | + [^mlir-lang] |
| E3–E4 | OpenXLA ecosystem | StableHLO builds a compatibility contract for ML operations | + [^stablehlo] |
| E4 | cutoff review | Public deprecation log records continuing migrations | cost [^mlir-deprecation] |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| Domain-specific operations survive until useful lowering points | Supports specialized optimization [^mlir-rationale] |
| Dialects coexist in a module | Enables incremental conversion [^mlir-lang] |
| Shared representation means automatic compatibility | Not guaranteed; StableHLO adds its own contract [^stablehlo] |

# What succeeded
Dialects define operations, types and attributes. Multiple dialects can coexist, letting a compiler gradually replace high-level operations with lower-level ones. Common infrastructure handles representation and transformation machinery instead of requiring every project to build it again.[^mlir-lang]

StableHLO demonstrates practical reuse for an ML operation set with explicit compatibility goals. That additional contract is valuable because a shared compiler framework alone is not a model-exchange standard.[^stablehlo]

# What failed or stalled
A custom dialect still needs semantics, transformations and target mappings. MLIR supplies tools for building a compiler; it does not automatically discover an efficient schedule for new hardware.[^mlir-rationale]

The project's deprecation record shows that downstream integrations must track changes. The presence of dialects in the same framework does not promise stable APIs, arbitrary round trips, or lossless conversion between every pair.[^mlir-deprecation][^mlir-lang]

# By era
- **E1:** a multi-level design is publicly documented.[^mlir-paper]
- **E2:** the reusable-dialect approach expands the compiler design space.[^mlir-rationale]
- **E3:** interchange and deployment needs motivate more explicit contracts.[^stablehlo]
- **E4:** adoption and downstream maintenance coexist.[^mlir-deprecation]

# Lessons
**Synthesis:** sharing infrastructure can succeed even when one universal IR does not. Choose where to preserve information, where to lower it, and which compatibility guarantees belong outside the compiler's internal APIs.

# Related
- [LLVM](/runtimes/llvm.md)
- [ML compilers and MLIR](/ideas/runtime-performance/ml-compilers-and-mlir.md)
- [GPU runtimes](/runtimes/ptx-and-gpu-runtimes.md)

[^mlir-paper]: MLIR: A Compiler Infrastructure for the End of Moores Law (2020) — https://arxiv.org/abs/2002.11054
[^mlir-rationale]: MLIR design rationale — https://mlir.llvm.org/docs/Rationale/Rationale/
[^mlir-lang]: MLIR language reference — https://mlir.llvm.org/docs/LangRef/
[^stablehlo]: OpenXLA: StableHLO — https://openxla.org/stablehlo
[^mlir-deprecation]: MLIR deprecations and refactoring — https://mlir.llvm.org/deprecation/
[^mlir-launch]: TensorFlow announces MLIR, 8 April 2019 — https://blog.tensorflow.org/2019/04/mlir-new-intermediate-representation.html
