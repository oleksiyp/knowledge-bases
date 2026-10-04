---
type: Idea
title: Subinterpreters and isolated parallelism
description: CPython shipped a supported Python-level multiple-interpreter API in 3.14. Isolation enables parallelism
  but imposes explicit data-transfer and extension-compatibility costs.
area: concurrency
tags:
- concurrency
outcome: succeeding
maturity_2026: adopted
languages:
- languages/python
- languages/ruby
runtimes:
- runtimes/cpython
- runtimes/cruby-yjit
origin_year: 1997
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: pep684
  title: 'PEP 684: A Per-Interpreter GIL'
  resource: https://peps.python.org/pep-0684/
- id: pep734
  title: 'PEP 734: Multiple Interpreters in the Stdlib'
  resource: https://peps.python.org/pep-0734/
- id: ruby3
  title: Ruby 3.0.0 release, 25 December 2020
  resource: https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/
- id: executor
  title: 'Python 3.14: InterpreterPoolExecutor'
  resource: https://docs.python.org/3.14/library/concurrent.futures.html#interpreterpoolexecutor
---

# Summary
**Verdict: delivered, but broad application adoption is not established here.** PEP 684 isolated the GIL per interpreter; PEP 734 brought multiple interpreters into Python 3.14's standard library. The latter replaced PEP 554 after years of discussion. Its accepted module name is `concurrent.interpreters`.[^pep684][^pep734]

# The idea
Create several interpreter states inside one process. Separate state limits implicit sharing; separate GILs let different interpreters execute on different cores. This is a different programming model from removing the GIL from a single shared interpreter.[^pep684]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2020-12-25 | Ruby 3 introduces experimental Ractors | + / experimental [^ruby3] |
| E3 | Python 3.12 | Per-interpreter GIL work lands | + [^pep684] |
| E4 | 2025-06-05 | PEP 734 accepted, replacing PEP 554 | + [^pep734] |
| E4 | Python 3.14 | InterpreterPoolExecutor exposes isolated workers | + [^executor] |

# Where it succeeded
A standard-library executor offers familiar `submit`/future-style scheduling with workers that each have their own interpreter. This makes the feature usable from Python rather than restricting it to embedding applications using the C API.[^executor][^pep734]

Ruby Ractors explore the same broad isolation approach through message passing and restrictions on shared objects. They are not CPython subinterpreters and should not be counted as the same implementation.[^ruby3]

# Where it failed or stalled
Worker interpreters have separate module state. Imports and configuration must be repeated; mutable objects cannot simply be shared as if these were ordinary threads. The executor serializes callables, arguments and results using pickle, so fine-grained tasks can spend substantial time transferring data.[^executor]

Extension modules must respect interpreter isolation. A C extension with process-global mutable state can require adaptation or exclusion; an isolated Python namespace does not automatically isolate native state.[^pep684]

# Why
**Synthesis:** isolation makes parallel execution easier to reason about, but moves costs into boundaries. Coarse tasks with limited communication are better candidates than workloads exchanging a large mutable object graph. Benchmark complete worker setup, imports, transfer and execution, not merely the parallel loop.[^executor]

# Lessons
- API availability is a milestone, not an adoption metric.
- Assess extension compatibility before selecting the concurrency model.
- Compare against processes and free-threaded Python on the same workload.

# Related
- [GIL removal](/ideas/concurrency/gil-removal-free-threading.md)
- [Actor model](/ideas/concurrency/actor-model.md)
- [CPython](/runtimes/cpython.md)

[^pep684]: PEP 684: A Per-Interpreter GIL — https://peps.python.org/pep-0684/
[^pep734]: PEP 734: Multiple Interpreters in the Stdlib — https://peps.python.org/pep-0734/
[^ruby3]: Ruby 3.0.0 release, 25 December 2020 — https://www.ruby-lang.org/en/news/2020/12/25/ruby-3-0-0-released/
[^executor]: Python 3.14: InterpreterPoolExecutor — https://docs.python.org/3.14/library/concurrent.futures.html#interpreterpoolexecutor
