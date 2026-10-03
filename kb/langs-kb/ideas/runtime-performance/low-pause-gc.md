---
type: Idea
title: Low-pause and generational concurrent garbage collection
description: "Concurrent, compacting collectors that keep stop-the-world pauses under a millisecond regardless of heap size (ZGC, Shenandoah), later made generational. Go's GC took a parallel path, adding memory limits and the cache-friendly Green Tea collector. Verdict: succeeded technically and removed the 'GC pauses' argument against managed languages, but adoption of the ultra-low-pause collectors stayed a minority choice; G1 and Go's default GC carry most workloads."
area: runtime-performance
tags: [garbage-collection, zgc, shenandoah, g1, generational-gc, go-gc, green-tea, latency, jvm, dotnet]
outcome: succeeded
maturity_2026: adopted
origin_year: 1978
mainstream_year: 2020
languages: [languages/java, languages/kotlin, languages/go, languages/csharp, languages/scala]
runtimes: [runtimes/hotspot-openjdk, runtimes/go-runtime, runtimes/dotnet-clr, runtimes/android-art, runtimes/graalvm]
related_ideas: [ideas/runtime-performance/value-types, ideas/memory-safety/ownership-and-borrowing, ideas/concurrency/virtual-threads, ideas/runtime-performance/aot-native-images]
era_momentum: { E1: up, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: jep333
    resource: https://openjdk.org/jeps/333
    title: "OpenJDK: JEP 333 — ZGC: A Scalable Low-Latency Garbage Collector (Experimental), JDK 11"
    author: org:openjdk
  - id: jep189
    resource: https://openjdk.org/jeps/189
    title: "OpenJDK: JEP 189 — Shenandoah: A Low-Pause-Time Garbage Collector (Experimental), JDK 12"
    author: org:openjdk
  - id: jep377
    resource: https://openjdk.org/jeps/377
    title: "OpenJDK: JEP 377 — ZGC: A Scalable Low-Latency Garbage Collector (Production), JDK 15"
    author: org:openjdk
  - id: jep379
    resource: https://openjdk.org/jeps/379
    title: "OpenJDK: JEP 379 — Shenandoah (Production), JDK 15"
    author: org:openjdk
  - id: jep363
    resource: https://openjdk.org/jeps/363
    title: "OpenJDK: JEP 363 — Remove the Concurrent Mark Sweep (CMS) Garbage Collector, JDK 14"
    author: org:openjdk
  - id: jep439
    resource: https://openjdk.org/jeps/439
    title: "OpenJDK: JEP 439 — Generational ZGC, JDK 21"
    author: org:openjdk
  - id: jep474
    resource: https://bugs.openjdk.org/browse/JDK-8326958
    title: "OpenJDK: JEP 474 — ZGC: Generational Mode by Default, JDK 23"
    author: org:openjdk
  - id: jep490
    resource: https://inside.java/2024/11/01/jep490-target-jdk24/
    title: "Inside.java: JEP 490 — ZGC: Remove the Non-Generational Mode, targeted to JDK 24"
    author: org:oracle
  - id: jep521
    resource: https://openjdk.org/jeps/521
    title: "OpenJDK: JEP 521 — Generational Shenandoah (product), JDK 25"
    author: org:openjdk
  - id: netflix-zgc
    resource: https://netflixtechblog.com/bending-pause-times-to-your-will-with-generational-zgc-256629c9386b
    title: "Netflix TechBlog: Bending pause times to your will with Generational ZGC (2024-03-06)"
    author: org:netflix
  - id: newrelic-2024
    resource: https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
    title: "New Relic: 2024 State of the Java Ecosystem"
    author: org:new-relic
  - id: discord
    resource: https://discord.com/blog/why-discord-is-switching-from-go-to-rust
    title: "Discord: Why Discord is switching from Go to Rust (2020-02-04)"
    author: org:discord
  - id: go-gc-guide
    resource: https://go.dev/doc/gc-guide
    title: "Go: A Guide to the Go Garbage Collector (GOGC, GOMEMLIMIT)"
    author: org:golang
  - id: go-memlimit-design
    resource: https://github.com/golang/proposal/blob/master/design/48409-soft-memory-limit.md
    title: "Go proposal 48409: Soft memory limit (Go 1.19)"
    author: org:golang
  - id: greentea
    resource: https://go.dev/blog/greenteagc
    title: "Go Blog: The Green Tea Garbage Collector (2025-10-29)"
    author: org:golang
  - id: go126
    resource: https://go.dev/doc/go1.26
    title: "Go 1.26 Release Notes (Green Tea GC on by default)"
    author: org:golang
  - id: dotnet-datas
    resource: https://learn.microsoft.com/en-us/dotnet/core/runtime-config/garbage-collector
    title: "Microsoft Learn: Runtime configuration options for garbage collection (DATAS)"
    author: org:microsoft
  - id: maoni-datas
    resource: https://maoni0.medium.com/dynamically-adapting-to-application-sizes-2d72fcb6f1ea
    title: "Maoni Stephens: Dynamically Adapting To Application Sizes (DATAS)"
---

# Summary
In 2018 "GC pauses" was still a standard argument against managed languages for latency-sensitive services. By 2026 it mostly wasn't. OpenJDK shipped two concurrent compacting collectors: **ZGC** (experimental JDK 11, production JDK 15) and **Shenandoah** (experimental JDK 12, production JDK 15).[^jep333][^jep377][^jep189][^jep379] Both deliver sub-millisecond pauses independent of heap size. Both were then made *generational* to recover throughput: Generational ZGC in JDK 21, the default ZGC mode in JDK 23 and the only one in JDK 24; generational Shenandoah became a product feature in JDK 25.[^jep439][^jep474][^jep490][^jep521] Netflix switched its default from G1 to Generational ZGC on JDK 21.[^netflix-zgc] Go took a different path. Its non-moving concurrent collector gained a soft memory limit (Go 1.19) and the cache-aware **Green Tea** collector, which is the default since Go 1.26 (February 2026) and cuts GC time by ~10%, up to 40% on some workloads.[^go-memlimit-design][^greentea][^go126] **Verdict: succeeded technically.** In practice most JVMs still run G1 or Serial, and the low-pause collectors remain an opt-in tool for tail-latency-critical services.[^newrelic-2024]

# The idea
- **What:** do marking *and compaction/relocation* concurrently with the application, using load barriers (ZGC: coloured pointers) or forwarding pointers/barriers (Shenandoah). Stop-the-world pauses then shrink to root scanning, which does not grow with heap size. Generational variants collect young objects more often to cut CPU and allocation-stall costs.
- **Prior art:** Baker's incremental copying (1978), Azul's commercial C4/Zing (2000s), IBM Metronome, CMS (concurrent but non-compacting, removed in JDK 14[^jep363]), Go's concurrent tri-colour mark-sweep (2015).
- **Problem solved:** multi-second pauses on large heaps that pushed latency-critical systems (trading, databases, game backends, RPC fan-out) to C++/Rust or to off-heap memory tricks.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-09-25 | JDK 11: ZGC experimental (JEP 333)[^jep333] | + |
| E1 | 2019-03-19 | JDK 12: Shenandoah experimental (JEP 189)[^jep189] | + |
| E1 | 2020-02-04 | Discord rewrites its Read States service from Go to Rust, citing GC latency spikes every two minutes[^discord] | − |
| E1 | 2020-03 | JDK 14 removes CMS[^jep363] | + |
| E1 | 2020-09-15 | JDK 15: ZGC and Shenandoah become production features[^jep377][^jep379] | + |
| E2 | 2022-08 | Go 1.19: soft memory limit (`GOMEMLIMIT`)[^go-memlimit-design][^go-gc-guide] | + |
| E3 | 2023-09-19 | JDK 21: Generational ZGC (JEP 439)[^jep439] | + |
| E3 | 2023-11 | .NET 8: DATAS (dynamic adaptation of server-GC heap count) opt-in; default in .NET 9[^dotnet-datas][^maoni-datas] | + |
| E3 | 2024-03-06 | Netflix: G1 → Generational ZGC by default on JDK 21+[^netflix-zgc] | + |
| E4 | 2024-09 | JDK 23: generational mode becomes ZGC's default (JEP 474)[^jep474] | + |
| E4 | 2025-03 | JDK 24: non-generational ZGC removed (JEP 490)[^jep490] | + |
| E4 | 2025-08 | Go 1.25: Green Tea GC as `GOEXPERIMENT`[^greentea] | + |
| E4 | 2025-09-16 | JDK 25: generational Shenandoah is a product feature (JEP 521)[^jep521] | + |
| E4 | 2026-02 | Go 1.26: Green Tea on by default (opt-out until 1.27)[^go126] | + |

# Where it succeeded
- **Pause times are a solved problem on the JVM.** ZGC pauses are usually below one millisecond. At Netflix, ZGC improved average and P99 latency at equal or better CPU than G1 for gRPC and DGS services.[^netflix-zgc]
- **Generational designs fixed the throughput objection.** Single-generation ZGC needed heap headroom and could suffer allocation stalls. Generational ZGC fixed enough of that for OpenJDK to delete the old mode within two releases.[^jep474][^jep490]
- **Go kept its "no tuning knobs" philosophy and still improved.** `GOMEMLIMIT` made Go safe in memory-limited containers.[^go-gc-guide] Green Tea treats the "memory wall" (≈35% of marking time spent stalled on memory) by scanning whole 8 KiB spans and using vector instructions.[^greentea]
- **.NET** focused on container density (DATAS) rather than pause times, matching where its users actually hurt.[^maoni-datas]

# Where it failed or stalled
- **Low adoption of the low-pause collectors.** New Relic's 2024 data (≈500,000 production apps) shows G1 at 43% and Serial at 37%. Serial dominates because many containers have one CPU. ZGC and Shenandoah were too small to report separately.[^newrelic-2024] Most Java teams never change the default.
- **GC still loses some workloads.** Discord's 2020 move from Go to Rust for a large in-memory LRU cache is the standard counterexample. A forced GC every two minutes scanned the entire cache and caused latency spikes that tuning could not remove.[^discord] That pattern fed the 2020s move of infrastructure code to Rust.
- **Costs move rather than vanish.** Concurrent collectors need barriers (CPU overhead) and headroom (memory). For batch/throughput jobs Parallel or G1 still win, and for tiny containers Serial does.
- **Shenandoah's Oracle-build gap.** Shenandoah was developed by Red Hat and not shipped in Oracle's own JDK builds, which split the low-pause story across vendors (Oracle-build status: unverified for 2026).

# Why
1. **Hardware and heap growth forced it.** Multi-hundred-GB heaps made pause time proportional to heap size untenable. Concurrent compaction is the only general fix, and multi-core machines made spare GC threads cheap.
2. **Corporate stewards with clear motives.** Oracle (ZGC) and Red Hat (Shenandoah) competed on JVM quality; Google needed Go to run efficiently on its fleet (Green Tea was deployed at Google before going default).[^greentea]
3. **Defaults decide adoption.** G1 is the default from JDK 9 and the JVM falls back to Serial on small containers, so most applications never touch ZGC.[^newrelic-2024] The low-pause collectors win only where someone measures tail latency, as Netflix did.
4. **Generational hypothesis re-learned.** Both ZGC and Shenandoah launched non-generational for simplicity, then went generational. Throughput and allocation stalls, not pauses, became the binding constraint.[^jep439][^jep521]
5. **Hardware-aware design is the new frontier.** Go's Green Tea is notable because it optimizes for cache locality and SIMD, not for pause time. Its lesson: GC cost on modern CPUs is mostly memory stalls.[^greentea]

# Lessons
- Managed runtimes can close the latency gap with manual memory management for most services, but defaults, not capabilities, decide what production actually runs.
- Ship simple (non-generational) first, then add generations once the barrier design is proven — both OpenJDK collectors followed this path.
- Workloads holding huge, long-lived object graphs (caches) remain a GC weak spot; these are where rewrites to Rust pay off.

# Related
- [Value types](/ideas/runtime-performance/value-types.md) — fewer objects to trace
- [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md) — the no-GC alternative
- [Virtual threads](/ideas/concurrency/virtual-threads.md) — millions of heap-allocated stacks stress the GC
- [AOT native images](/ideas/runtime-performance/aot-native-images.md) — native images use simpler GCs
- Runtimes: [HotSpot/OpenJDK](/runtimes/hotspot-openjdk.md), [Go runtime](/runtimes/go-runtime.md), [.NET CLR](/runtimes/dotnet-clr.md), [Android ART](/runtimes/android-art.md)
- Event: [Go 1.26 Green Tea GC](/events/2026-02-go-1-26-green-tea-gc.md)

[^jep333]: OpenJDK: JEP 333 — https://openjdk.org/jeps/333
[^jep189]: OpenJDK: JEP 189 — https://openjdk.org/jeps/189
[^jep377]: OpenJDK: JEP 377 — https://openjdk.org/jeps/377
[^jep379]: OpenJDK: JEP 379 — https://openjdk.org/jeps/379
[^jep363]: OpenJDK: JEP 363 — https://openjdk.org/jeps/363
[^jep439]: OpenJDK: JEP 439 — https://openjdk.org/jeps/439
[^jep474]: OpenJDK: JEP 474 — https://bugs.openjdk.org/browse/JDK-8326958
[^jep490]: Inside.java: JEP 490 targeted to JDK 24 — https://inside.java/2024/11/01/jep490-target-jdk24/
[^jep521]: OpenJDK: JEP 521 — https://openjdk.org/jeps/521
[^netflix-zgc]: Netflix TechBlog: Bending pause times to your will with Generational ZGC — https://netflixtechblog.com/bending-pause-times-to-your-will-with-generational-zgc-256629c9386b
[^newrelic-2024]: New Relic: 2024 State of the Java Ecosystem — https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
[^discord]: Discord: Why Discord is switching from Go to Rust — https://discord.com/blog/why-discord-is-switching-from-go-to-rust
[^go-gc-guide]: Go: A Guide to the Go Garbage Collector — https://go.dev/doc/gc-guide
[^go-memlimit-design]: Go proposal 48409: Soft memory limit — https://github.com/golang/proposal/blob/master/design/48409-soft-memory-limit.md
[^greentea]: Go Blog: The Green Tea Garbage Collector — https://go.dev/blog/greenteagc
[^go126]: Go 1.26 Release Notes — https://go.dev/doc/go1.26
[^dotnet-datas]: Microsoft Learn: GC configuration (DATAS) — https://learn.microsoft.com/en-us/dotnet/core/runtime-config/garbage-collector
[^maoni-datas]: Maoni Stephens: Dynamically Adapting To Application Sizes — https://maoni0.medium.com/dynamically-adapting-to-application-sizes-2d72fcb6f1ea
