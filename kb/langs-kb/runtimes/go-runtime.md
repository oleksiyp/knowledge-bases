---
type: Runtime
title: Go runtime (gc toolchain scheduler and garbage collector)
description: "The runtime linked into every Go binary: an M:N goroutine scheduler plus a concurrent, non-moving, non-generational mark-sweep GC. In 2018–2026 it improved steadily without breaking users: async preemption (2020), a soft memory limit (2022), PGO (2023), Swiss-table maps (2025) and the Green Tea GC (default 2026). Manual-memory escape hatches (arenas) stalled."
runtime_kind: vm
tags: [go, gc, scheduler, goroutines, green-tea, pgo, swiss-tables]
languages: [languages/go]
ideas:
  - ideas/runtime-performance/low-pause-gc
  - ideas/concurrency/virtual-threads
  - ideas/runtime-performance/aot-native-images
  - ideas/runtime-performance/value-types
first_released: 2009
steward: Google Go team (Go core leads Austin Clements and Cherry Mui since Sept 2024)
governance: single-vendor
trajectory: stable
adoption_signals:
  green_tea_gc_overhead_reduction_pct: { value: "10-40", as_of: 2026-02 }
  pgo_typical_cpu_gain_pct: { value: "2-7", as_of: 2023-09 }
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: go-1-14
    resource: https://go.dev/blog/go1.14
    title: "Go Blog: Go 1.14 is released"
    author: org:google
  - id: go-1-19-notes
    resource: https://go.dev/doc/go1.19
    title: "Go 1.19 Release Notes (soft memory limit, GOMEMLIMIT)"
    author: org:google
  - id: go-pgo
    resource: https://go.dev/blog/pgo
    title: "Go Blog: Profile-guided optimization in Go 1.21"
    author: org:google
  - id: go-1-24
    resource: https://go.dev/blog/go1.24
    title: "Go Blog: Go 1.24 is released! (Swiss-table maps, 2–3% CPU reduction)"
    author: org:google
  - id: datadog-swiss
    resource: https://www.datadoghq.com/blog/engineering/go-swiss-tables/
    title: "Datadog Engineering: How Go 1.24's Swiss Tables saved us hundreds of gigabytes"
  - id: datadog-regression
    resource: https://www.datadoghq.com/blog/engineering/go-memory-regression/
    title: "Datadog Engineering: How we tracked down a Go 1.24 memory regression across hundreds of pods"
  - id: go-1-25
    resource: https://go.dev/blog/go1.25
    title: "Go Blog: Go 1.25 is released (container-aware GOMAXPROCS, experimental GC)"
    author: org:google
  - id: greentea-blog
    resource: https://go.dev/blog/greenteagc
    title: "Go Blog: The Green Tea Garbage Collector (Knyszek, Clements, 2025-10-29)"
    author: org:google
  - id: go-1-26
    resource: https://go.dev/blog/go1.26
    title: "Go Blog: Go 1.26 is released"
    author: org:google
  - id: go-1-27
    resource: https://go.dev/blog/go1.27
    title: "Go Blog: Go 1.27 is released"
    author: org:google
  - id: arena-proposal
    resource: https://github.com/golang/go/issues/51317
    title: "golang/go #51317: proposal: arena: new package providing memory arenas (on hold)"
  - id: regions-proposal
    resource: https://github.com/golang/go/discussions/70257
    title: "golang/go discussion #70257: memory regions"
  - id: planetscale-generics
    resource: https://planetscale.com/blog/generics-can-make-your-go-code-slower
    title: "PlanetScale: Generics can make your Go code slower"
  - id: ts-native
    resource: https://devblogs.microsoft.com/typescript/typescript-native-port/
    title: "TypeScript Blog: A 10x Faster TypeScript"
    author: org:microsoft
---

# Summary
The Go runtime is the part of Go that changed the most while users noticed the least. Every Go binary statically links an M:N scheduler and a concurrent tri-color mark-sweep collector that is non-moving and, by design, non-generational. Between 2018 and 2026 the team tackled its known weak spots one by one. Tight loops could starve the scheduler and GC until async preemption arrived in 1.14 (Feb 2020).[^go-1-14] Containers OOM-killed Go programs until the GOMEMLIMIT soft limit arrived in 1.19 (Aug 2022).[^go-1-19-notes] There was no feedback-directed optimisation until PGO went GA in 1.21, typically worth 2–7% CPU.[^go-pgo] Maps were slow until Swiss tables arrived in 1.24.[^go-1-24] GOMAXPROCS ignored cgroup CPU limits until 1.25.[^go-1-25] Pointer-chasing GC marking was inefficient until the page-oriented Green Tea GC became default in 1.26, cutting GC time by about 10% typically and up to 40%.[^greentea-blog][^go-1-26] Verdict: succeeding, through incremental runtime engineering rather than any big redesign. Its one clear stall is the attempt to give users manual memory control: arenas are on hold and the memory-regions design is unshipped.[^arena-proposal][^regions-proposal]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-02-25 | Go 1.14: asynchronous goroutine preemption via signals [^go-1-14] | + |
| E2 | 2022-03-15 | Go 1.18 generics implemented with GC-shape stenciling + dictionaries; GC pacer redesign | mixed |
| E2 | 2022-08 | Go 1.19: soft memory limit (`GOMEMLIMIT`) [^go-1-19-notes] | + |
| E3 | 2023-02 | Go 1.20: experimental `arena` package (GOEXPERIMENT) [^arena-proposal] | mixed |
| E3 | 2023-08 | Go 1.21: PGO generally available (2–7% CPU typical); `wasip1` port [^go-pgo] | + |
| E3 | 2024 | Arena proposal put on hold; "memory regions" proposed as replacement [^regions-proposal] | − |
| E4 | 2025-02-11 | Go 1.24: Swiss-table maps, new small-object allocation, new mutex; `go:wasmexport` [^go-1-24] | + |
| E4 | 2025-08-12 | Go 1.25: container-aware GOMAXPROCS; Green Tea GC as experiment [^go-1-25] | + |
| E4 | 2026-02-10 | Go 1.26: Green Tea GC default; cgo overhead −30%; experimental SIMD and goroutine-leak profile [^go-1-26] | + |
| E4 | 2026-08-19 | Go 1.27: size-specialised allocation (up to 30% cheaper small allocs); goroutine-leak profile GA [^go-1-27] | + |

# Ideas it bet on
| Idea | Outcome for the Go runtime |
|---|---|
| [Low-pause GC](/ideas/runtime-performance/low-pause-gc.md) | Succeeded. It traded throughput and memory for latency in the 2010s, then won the throughput back with Green Tea (2025–26).[^greentea-blog] |
| [Green threads](/ideas/concurrency/virtual-threads.md) | Succeeded. Growable stacks and M:N scheduling became the reference design, and async preemption closed the last big gap.[^go-1-14] |
| [AOT native binaries](/ideas/runtime-performance/aot-native-images.md) | Succeeded. Static single-binary deployment is a core reason Go won cloud tooling. |
| Manual memory regions / arenas | Stalled. On hold for API and composability reasons.[^arena-proposal] |
| Generational/moving GC | Deliberately not pursued. Green Tea improved locality without moving objects.[^greentea-blog] |

# What succeeded
- **Latency-first GC held up.** Sub-millisecond pauses stayed standard, and GOMEMLIMIT gave operators a knob that matched container memory limits.[^go-1-19-notes]
- **Green Tea GC.** It scans whole memory pages (spans) instead of chasing individual objects, which suits modern cache hierarchies. Google ran it in production before it became the default.[^greentea-blog]
- **Free speedups without code changes.** Swiss tables cut CPU 2–3% on average and, at Datadog, saved roughly 70% of map memory in large services.[^go-1-24][^datadog-swiss] PGO gave another 2–7%.[^go-pgo]
- **Fit for compilers and tools.** Microsoft picked Go for the TypeScript compiler port, partly because a GC'd language with good native performance matched the existing JS code's data structures.[^ts-native]

# What failed or stalled
- **Arenas.** The 1.20 experiment showed real speedups for allocation-heavy servers, but the team judged it unsafe and non-composable and put it on hold indefinitely. The regions follow-up has not shipped.[^arena-proposal][^regions-proposal]
- **Generics runtime cost.** Dictionary-passing stenciling put indirect calls on hot paths, so early generic code could be slower than interface or hand-specialised code.[^planetscale-generics]
- **Upgrade regressions.** The 1.24 allocator changes caused memory regressions that Datadog had to track across hundreds of pods. Runtime churn is not free.[^datadog-regression]
- **cgo and FFI cost.** cgo calls stayed expensive for years. The 30% cut in 1.26 is welcome but late.[^go-1-26]

# By era
## E1
Async preemption (1.14) fixed long-standing scheduler and GC starvation from tight loops.[^go-1-14]
## E2
Generics landed in the compiler and runtime with a compile-speed-first design. GOMEMLIMIT (1.19) addressed container OOMs.[^go-1-19-notes]
## E3
PGO went GA and a WASI port appeared. Arenas were tried and then shelved.[^go-pgo][^arena-proposal]
## E4
The most productive era for the runtime: Swiss tables, container-aware GOMAXPROCS, Green Tea GC default, cheaper cgo, SIMD experiment and size-specialised allocation.[^go-1-24][^go-1-25][^go-1-26][^go-1-27] See [Go 1.26 Green Tea GC](/events/2026-02-go-1-26-green-tea-gc.md).

# Lessons
- A GC'd runtime can keep getting faster for a decade without asking users to change code, if it has a strict compatibility policy and production-scale testing (here, Google).
- Hardware trends change GC design. The memory wall made the locality-oriented Green Tea worthwhile, where the earlier answer would have been generational collection.
- Manual memory escape hatches clash with a safe language's core promise. Go's arenas and Java's off-heap history both show it.

# Related
- [Go](/languages/go.md)
- [Low-pause GC](/ideas/runtime-performance/low-pause-gc.md), [Virtual threads](/ideas/concurrency/virtual-threads.md)
- [HotSpot/OpenJDK](/runtimes/hotspot-openjdk.md), [.NET CLR](/runtimes/dotnet-clr.md)

[^go-1-14]: Go 1.14 is released — https://go.dev/blog/go1.14
[^go-1-19-notes]: Go 1.19 Release Notes — https://go.dev/doc/go1.19
[^go-pgo]: Profile-guided optimization in Go 1.21 — https://go.dev/blog/pgo
[^go-1-24]: Go 1.24 is released — https://go.dev/blog/go1.24
[^datadog-swiss]: Datadog, Go 1.24 Swiss Tables — https://www.datadoghq.com/blog/engineering/go-swiss-tables/
[^datadog-regression]: Datadog, Go 1.24 memory regression — https://www.datadoghq.com/blog/engineering/go-memory-regression/
[^go-1-25]: Go 1.25 is released — https://go.dev/blog/go1.25
[^greentea-blog]: The Green Tea Garbage Collector — https://go.dev/blog/greenteagc
[^go-1-26]: Go 1.26 is released — https://go.dev/blog/go1.26
[^go-1-27]: Go 1.27 is released — https://go.dev/blog/go1.27
[^arena-proposal]: golang/go #51317 arena proposal — https://github.com/golang/go/issues/51317
[^regions-proposal]: golang/go discussion #70257 memory regions — https://github.com/golang/go/discussions/70257
[^planetscale-generics]: PlanetScale, Generics can make your Go code slower — https://planetscale.com/blog/generics-can-make-your-go-code-slower
[^ts-native]: A 10x Faster TypeScript — https://devblogs.microsoft.com/typescript/typescript-native-port/
