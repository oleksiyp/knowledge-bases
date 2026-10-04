---
type: Event
title: Python 3.14 moves free-threading to supported status
description: Python 3.14 moved free-threaded builds out of experimental status.
event_kind: release
date: '2025-10-07'
date_precision: day
era: E4
impact: positive
tags:
- release
languages: []
runtimes: []
ideas:
- ideas/concurrency/gil-removal-free-threading
- ideas/concurrency/subinterpreters
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  title: Python 3.14 moves free-threading to supported status
  resource: https://docs.python.org/3.14/whatsnew/3.14.html
---

# What happened
Python 3.14 moved free-threaded builds out of experimental status. Free-threading remained optional rather than becoming the default interpreter configuration.[^announcement]

# Why it matters
**Interpretation:** supported status is a stronger maintenance commitment. It does not erase extension compatibility requirements or guarantee speedups for sequential workloads.

# Related
- [Free-threading](/ideas/concurrency/gil-removal-free-threading.md)
- [Subinterpreters](/ideas/concurrency/subinterpreters.md)

[^announcement]: Python 3.14 moves free-threading to supported status — https://docs.python.org/3.14/whatsnew/3.14.html
