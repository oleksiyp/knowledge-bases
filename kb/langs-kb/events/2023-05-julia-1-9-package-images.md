---
type: Event
title: Julia 1.9 caches native code in package images
description: Julia 1.9 added native-code caching to reduce first-execution latency..
event_kind: release
date: '2023-05-09'
date_precision: day
era: E3
impact: positive
tags:
- release
languages: []
runtimes: []
ideas:
- ideas/runtime-performance/time-to-first-plot
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  title: Julia 1.9 caches native code in package images
  resource: https://julialang.org/blog/2023/04/julia-1.9-highlights/
---

# What happened
Julia 1.9 added native-code caching to reduce first-execution latency.[^announcement]

# Why it matters
**Interpretation:** cached work can improve interactive use while leaving package loading and uncached specializations as separate costs.

# Related
- [Time to first plot](/ideas/runtime-performance/time-to-first-plot.md)

[^announcement]: Julia 1.9 caches native code in package images — https://julialang.org/blog/2023/04/julia-1.9-highlights/
