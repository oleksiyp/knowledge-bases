---
type: Idea
title: Copy-and-patch JIT compilation
description: Precompiled machine-code templates made a small portable JIT backend feasible in CPython; whole-program
  speedups still depended on the surrounding optimizer.
area: runtime-performance
tags:
- runtime-performance
outcome: succeeding
maturity_2026: experimental
languages:
- languages/python
runtimes:
- runtimes/cpython
origin_year: 2021
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: pep744
  title: 'PEP 744: JIT Compilation (informational draft)'
  resource: https://peps.python.org/pep-0744/
- id: copy-paper
  title: 'Xu and Kjolstad: Copy-and-Patch Compilation (2021)'
  resource: https://arxiv.org/abs/2011.13127
- id: jit2026
  title: 'Ken Jin: Python 3.15 JIT progress, 23 March 2026'
  resource: https://blog.python.org/2026/03/jit-on-track/
- id: pep836
  title: 'PEP 836: Draft path to a supported CPython JIT'
  resource: https://peps.python.org/pep-0836/
---

# Summary
**Verdict: a useful implementation technique, with experimental end-to-end results.** Copy-and-patch moves expensive code generation into the interpreter build. At runtime, the JIT assembles machine-code fragments and fills in values and addresses. CPython adopted it to keep runtime dependencies and backend maintenance small.[^pep744]

# The idea
The backend is not a full optimizing compiler running inside every Python process. Templates are produced ahead of time using an external compiler; the executing runtime copies and patches them. The surrounding JIT still needs to identify useful execution paths and optimize their operations. Removing compilation expense does not by itself remove dynamic-language overhead.[^pep744]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2021 | Copy-and-patch research published | research [^copy-paper] |
| E3 | 2024 | Experimental backend merged into CPython | + [^pep744] |
| E4 | 2024–2025 | Early CPython releases show limited or negative gains | mixed [^jit2026] |
| E4 | 2026-03 | Improved trace selection and optimization yield preliminary gains | + [^jit2026] |

# Where it succeeded
The original research demonstrated rapid code generation using prebuilt binary fragments. Its benchmark results belong to the evaluated systems; they do not transfer directly to CPython applications.[^copy-paper]

CPython can derive backend templates from the instruction definitions used for its interpreter. This reduces the burden of maintaining separate instruction implementations across architectures. PEP 744 describes LLVM as a build dependency rather than a runtime requirement.[^pep744]

# Where it failed or stalled
The first CPython implementation did not deliver the speedup users might infer from the word JIT. Later progress required changes to trace recording and reference-count optimization. That is a limitation of treating a backend technique as a complete performance strategy.[^jit2026]

The paper establishes feasibility, not dominance over every optimizing JIT. Code quality, compilation latency and implementation complexity are distinct axes; the best tradeoff depends on how long the generated code will execute.[^copy-paper]

# Why
**Synthesis:** the technique is attractive when maintainers can reuse a build-time compiler but cannot afford its runtime footprint. Its strongest success is reducing the cost of experimenting with native execution. The evidence still requires separate measurement of startup, steady-state throughput and memory.

# Lessons
- Distinguish code-generation speed from generated-code speed.
- Do not attribute all later optimizer gains to the backend.
- Keep the research implementation and CPython's adaptation separate.

# Cutoff update
PEP 836, created on 2 July 2026, proposes a path toward a supported JIT for Python 3.16. It remains a draft as of this review; it is not evidence that the experimental JIT has already been promoted.[^pep836]

# Related
- [Dynamic-language JITs](/ideas/runtime-performance/jit-for-dynamic-languages.md)
- [LLVM](/runtimes/llvm.md)
- [CPython](/runtimes/cpython.md)

[^pep744]: PEP 744: JIT Compilation (informational draft) — https://peps.python.org/pep-0744/
[^copy-paper]: Xu and Kjolstad: Copy-and-Patch Compilation (2021) — https://arxiv.org/abs/2011.13127
[^jit2026]: Ken Jin: Python 3.15 JIT progress, 23 March 2026 — https://blog.python.org/2026/03/jit-on-track/
[^pep836]: PEP 836: Draft path to a supported CPython JIT — https://peps.python.org/pep-0836/
