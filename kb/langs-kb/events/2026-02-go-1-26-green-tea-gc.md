---
type: Event
title: Go 1.26 makes the Green Tea garbage collector the default
description: "Go 1.26 (2026-02-10) enabled the page-oriented Green Tea GC by default. Typical workloads spend about 10% less time in GC and some up to 40% less. The release also cut cgo overhead by about 30%."
event_kind: release
date: 2026-02-10
era: E4
impact: positive
languages: [languages/go]
runtimes: [runtimes/go-runtime]
ideas: [ideas/runtime-performance/low-pause-gc]
tags: [go, gc, green-tea, memory-locality, performance]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: go-1-26
    resource: https://go.dev/blog/go1.26
    title: "Go Blog: Go 1.26 is released"
    author: org:google
  - id: greentea-blog
    resource: https://go.dev/blog/greenteagc
    title: "Go Blog: The Green Tea Garbage Collector (Michael Knyszek, Austin Clements, 2025-10-29)"
    author: org:google
  - id: infoworld-126
    resource: https://www.infoworld.com/article/4131097/go-1-26-unleashes-performance-boosting-green-tea-gc.html
    title: "InfoWorld: Go 1.26 unleashes performance-boosting Green Tea GC"
  - id: go-1-25
    resource: https://go.dev/blog/go1.25
    title: "Go Blog: Go 1.25 is released (Green Tea as GOEXPERIMENT)"
    author: org:google
---

# What happened
Go 1.25 (Aug 2025) shipped Green Tea as an opt-in experiment (`GOEXPERIMENT=greenteagc`).[^go-1-25] Go 1.26, released 2026-02-10, made it the default.[^go-1-26] Instead of tracing individual objects across the heap, Green Tea makes whole memory pages its unit of marking work. That improves cache locality and multicore scalability for small objects.[^greentea-blog] The Go team reports "many workloads spend around 10% less time in the garbage collector, but some workloads see a reduction of up to 40%". It had already been deployed at Google.[^greentea-blog] Opt-out (`GOEXPERIMENT=nogreenteagc`) is expected to be removed in Go 1.27.[^infoworld-126] The same release cut baseline cgo overhead by about 30% and added an experimental SIMD package.[^go-1-26]

# Why it matters
It shows that [low-pause GC](/ideas/runtime-performance/low-pause-gc.md) runtimes can recover throughput without the usual answer of generational or moving collection. Green Tea redesigned around the memory wall instead. Users got the gain without changing code, in line with Go's runtime-over-language strategy.

# Related
- [Go runtime](/runtimes/go-runtime.md), [Go](/languages/go.md)
- [HotSpot/OpenJDK](/runtimes/hotspot-openjdk.md) (generational ZGC as the contrasting design)

[^go-1-26]: Go 1.26 is released — https://go.dev/blog/go1.26
[^greentea-blog]: The Green Tea Garbage Collector — https://go.dev/blog/greenteagc
[^infoworld-126]: InfoWorld, Go 1.26 Green Tea GC — https://www.infoworld.com/article/4131097/go-1-26-unleashes-performance-boosting-green-tea-gc.html
[^go-1-25]: Go 1.25 is released — https://go.dev/blog/go1.25
