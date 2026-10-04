---
type: Event
title: Python 3.13 ships experimental free-threading and JIT builds
description: Python 3.13 introduced experimental free-threaded execution and an experimental JIT.
event_kind: release
date: '2024-10-07'
date_precision: day
era: E4
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
  title: Python 3.13 ships experimental free-threading and JIT builds
  resource: https://docs.python.org/3.13/whatsnew/3.13.html
---

# What happened
Python 3.13 introduced experimental free-threaded execution and an experimental JIT. Both required opting into the relevant build or configuration; the ordinary interpreter remained available.[^announcement]

# Why it matters
**Interpretation:** parallel execution and compilation are separate changes with distinct compatibility and performance tradeoffs. Their inclusion does not establish either as Python’s default.

# Related
- [CPython](/runtimes/cpython.md)

[^announcement]: Python 3.13 ships experimental free-threading and JIT builds — https://docs.python.org/3.13/whatsnew/3.13.html
