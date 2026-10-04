---
type: Idea
title: Python supersets, subsets and compiled extensions
description: Cython, mypyc, Codon and Mojo gained performance by making different compatibility tradeoffs. Familiar
  syntax did not make them interchangeable replacements for CPython.
area: types
tags:
- types
outcome: mixed
maturity_2026: adopted
languages:
- languages/python
- languages/mojo
runtimes:
- runtimes/cpython
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: cython
  title: Cython changelog
  resource: https://docs.cython.org/en/latest/src/changes.html
- id: mypyc
  title: 'mypyc: Differences from Python'
  resource: https://mypyc.readthedocs.io/en/stable/differences_from_python.html
- id: codon
  title: Codon language overview and Python differences
  resource: https://docs.exaloop.io/language/overview/
- id: mojoroad
  title: 'Modular: Mojo roadmap'
  resource: https://docs.modular.com/mojo/roadmap/
- id: mojobeta
  title: 'Modular 26.3: Mojo 1.0 Beta, 7 May 2026'
  resource: https://www.modular.com/blog/modular-26-3-mojo-1-0-beta-max-video-gen-and-more
- id: mojo1
  title: 'Modular 26.5: Mojo 1.0, 11 August 2026'
  resource: https://www.modular.com/blog/modular-26-5-mojo-1-0-is-here
- id: mojo-open
  title: Mojo compiler open source, 18 August 2026
  resource: https://www.modular.com/blog/mojo-open-source
---

# Summary
**Verdict: successful constrained approaches; a universal drop-in fast Python remains unproven by this evidence.** Cython and mypyc integrate compiled code into Python. Codon defines a Python-like compiled language with documented differences. Mojo's roadmap explicitly leaves full Python-superset compatibility uncertain.[^cython][^mypyc][^codon][^mojoroad]

# The idea
Keep Python's accessibility while providing the compiler with stronger guarantees about types, representation or effects. There are several distinct contracts: compiling an extension, compiling a typed subset, creating a compatible runtime, or designing a new systems language. Calling all of these supersets obscures the migration work.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E3 | 2023-07-17 | Cython 3.0 released | + [^cython] |
| E4 | 2025 | Cython 3.1 adds initial free-threading support | + / qualified [^cython] |
| E4 | 2026-05-07 | Modular announces Mojo 1.0 beta | language milestone [^mojobeta] |
| E4 | 2026-08-11 / 18 | Mojo 1.0 ships; compiler and tooling open-sourced | + [^mojo1][^mojo-open] |
| E4 | cutoff review | Compatibility restrictions remain explicit in project documentation | mixed [^mypyc][^codon][^mojoroad] |

# Where it succeeded
Cython's continued releases demonstrate a durable extension-building path. Its free-threading work also shows that matching an evolving CPython runtime requires ongoing adaptation.[^cython]

mypyc reuses Python type annotations to compile selected modules. It enforces non-erased types at runtime, which gives the compiler stronger assumptions than ordinary interpreted Python provides.[^mypyc]

Codon's documentation describes Python-like syntax alongside native compilation and explicit semantic differences. This is a viable specialized contract; its utility does not require pretending every Python program is accepted unchanged.[^codon]

# Where it failed or stalled
mypyc rejects code with type errors and restricts how compiled modules are invoked. Casts and annotated parameters can raise runtime type errors where interpreted Python would not. Compilation therefore changes observable behavior in some cases.[^mypyc]

Mojo's roadmap prioritizes heterogeneous systems programming and does not guarantee becoming a complete Python superset. Mojo 1.0 shipped in August 2026, followed by the compiler and tooling under Apache 2.0 with LLVM exceptions. Those milestones establish a stability commitment and implementation access, not complete Python compatibility.[^mojoroad][^mojo1][^mojo-open]

# Why
**Synthesis:** the best boundary is often a compute-heavy component with a clear interface. Restricting dynamic behavior there can be affordable; applying the same restrictions to a whole application may not be. Syntax familiarity lowers learning cost but says little about object models, imports, native extensions or runtime reflection.

# Lessons
- State the exact compatibility contract before comparing benchmarks.
- Include extension packaging and data-transfer costs in performance tests.
- Track language maturity separately from Python-compatibility promises.

# Related
- [Mojo](/languages/mojo.md)
- [Gradual typing](/ideas/types/gradual-typing-for-dynamic-languages.md)
- [Dynamic-language JITs](/ideas/runtime-performance/jit-for-dynamic-languages.md)

[^cython]: Cython changelog — https://docs.cython.org/en/latest/src/changes.html
[^mypyc]: mypyc: Differences from Python — https://mypyc.readthedocs.io/en/stable/differences_from_python.html
[^codon]: Codon language overview and Python differences — https://docs.exaloop.io/language/overview/
[^mojoroad]: Modular: Mojo roadmap — https://docs.modular.com/mojo/roadmap/
[^mojobeta]: Modular 26.3: Mojo 1.0 Beta, 7 May 2026 — https://www.modular.com/blog/modular-26-3-mojo-1-0-beta-max-video-gen-and-more
[^mojo1]: Modular 26.5: Mojo 1.0, 11 August 2026 — https://www.modular.com/blog/modular-26-5-mojo-1-0-is-here
[^mojo-open]: Mojo compiler open source, 18 August 2026 — https://www.modular.com/blog/mojo-open-source
