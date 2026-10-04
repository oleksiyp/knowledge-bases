---
type: Event
title: Python 3.11 ships specializing-interpreter improvements
description: Python 3.11 delivered performance improvements including a specializing adaptive interpreter.
event_kind: release
date: '2022-10-24'
date_precision: day
era: E3
impact: positive
tags:
- release
languages: []
runtimes:
- runtimes/cpython
ideas: []
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  title: Python 3.11 ships specializing-interpreter improvements
  resource: https://docs.python.org/3/whatsnew/3.11.html
---

# What happened
Python 3.11 delivered performance improvements including a specializing adaptive interpreter. The project reported workload-dependent gains over Python 3.10, rather than one speedup guaranteed for all programs.[^announcement]

# Why it matters
**Interpretation:** faster execution can arrive through the incumbent interpreter without requiring users to adopt another language. Benchmark results remain dependent on the program and environment.

# Related
- [CPython](/runtimes/cpython.md)

[^announcement]: Python 3.11 ships specializing-interpreter improvements — https://docs.python.org/3/whatsnew/3.11.html
