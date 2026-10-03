---
type: Idea
title: Virtual threads (green threads, take two)
description: "Cheap, runtime-scheduled threads that let ordinary blocking code scale like async code. Java's Project Loom shipped them in JDK 21 (2023) and fixed the main production hazard (synchronized pinning) in JDK 24; .NET tried and shelved the same idea in favour of async/await. Verdict: succeeded on the JVM, rejected where async was already entrenched."
area: concurrency
tags: [virtual-threads, green-threads, project-loom, goroutines, m-n-scheduling, async-await, jvm]
outcome: succeeded
maturity_2026: mainstream
origin_year: 1997
mainstream_year: 2023
languages: [languages/java, languages/go, languages/kotlin, languages/csharp]
runtimes: [runtimes/hotspot-openjdk, runtimes/go-runtime, runtimes/dotnet-clr, runtimes/beam]
related_ideas: [ideas/concurrency/structured-concurrency, ideas/concurrency/async-await-and-function-coloring, ideas/concurrency/actor-model, ideas/concurrency/data-race-safety-in-types]
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: jep444
    resource: https://openjdk.org/jeps/444
    title: "OpenJDK: JEP 444 — Virtual Threads"
    author: org:openjdk
  - id: jep425
    resource: https://openjdk.org/jeps/425
    title: "OpenJDK: JEP 425 — Virtual Threads (Preview)"
    author: org:openjdk
  - id: jep491
    resource: https://inside.java/2024/11/15/jep491-target-jdk24/
    title: "Inside.java: JEP targeted to JDK 24 — 491: Synchronize Virtual Threads without Pinning"
    author: org:oracle
  - id: netflix-lock
    resource: https://netflixtechblog.com/java-21-virtual-threads-dude-wheres-my-lock-3052540e231d
    title: "Netflix TechBlog: Java 21 Virtual Threads — Dude, Where's My Lock? (July 2024)"
    author: org:netflix
  - id: infoq-vt-jdk24
    resource: https://www.infoq.com/articles/virtual-threads-after-jdk24/
    title: "InfoQ: Virtual Threads after JDK 24 — What Changed for Production Java"
  - id: spring-boot-vt
    resource: https://www.infoq.com/news/2023/12/spring-boot-virtual-threads/
    title: "InfoQ: Spring Boot 3.2 adds virtual-thread support"
  - id: dotnet-green
    resource: https://github.com/dotnet/runtimelab/issues/2398
    title: "dotnet/runtimelab #2398: Green Thread Experiment Results"
    author: org:microsoft
  - id: dotnet11-async
    resource: https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-11/runtime
    title: "Microsoft Learn: What's new in the .NET 11 runtime (runtime async)"
    author: org:microsoft
  - id: jep506
    resource: https://openjdk.org/jeps/506
    title: "OpenJDK: JEP 506 — Scoped Values"
    author: org:openjdk
  - id: rust-rfc230
    resource: https://rust-lang.github.io/rfcs/0230-remove-runtime.html
    title: "Rust RFC 230: Remove runtime (green threads removed from Rust)"
    author: org:rust-lang
---

# Summary
Virtual threads are the clearest *comeback* idea of 2018–2026. Java had green threads in the 1990s and dropped them; Rust removed its green-thread runtime in 2014;[^rust-rfc230] the industry then spent a decade on callbacks, reactive streams and async/await. Project Loom reversed that on the JVM: virtual threads previewed in JDK 19 (2022) and became final in JDK 21 LTS (September 2023).[^jep425][^jep444] The production hazard that slowed the rollout was "pinning": a virtual thread blocking inside a `synchronized` block held its carrier OS thread. Netflix hit full deadlocks from this in 2024.[^netflix-lock] JDK 24 (March 2025) fixed it with JEP 491.[^jep491] By JDK 25 LTS the remaining bottlenecks were in downstream resources, not in the runtime.[^infoq-vt-jdk24] **Verdict: succeeded on the JVM.** It was *rejected* in .NET, where Microsoft prototyped green threads, measured them as slower than async/await, and shelved them (2023). .NET then moved async into the runtime instead (.NET 11).[^dotnet-green][^dotnet11-async]

# The idea
- **What:** threads that the language runtime multiplexes M:N onto a small pool of OS "carrier" threads. A blocking call parks the virtual thread (its stack is saved to the heap) instead of blocking the OS thread. Code stays sequential and blocking-style, with no `async` colouring, but scales to millions of concurrent tasks.[^jep444]
- **Prior art:** Erlang processes (BEAM), Java 1.1 "green threads" (1997, dropped in 1.3), GHC threads, and above all Go goroutines (2009). Go proved that one-thread-per-request scales when the runtime owns the scheduler.
- **Problem solved:** thread-per-request servers ran out of OS threads. The alternatives (reactive libraries, CompletableFuture chains, async/await) scale, but they split the ecosystem into blocking and non-blocking APIs. They also wreck stack traces and debuggers, and colour every function ([function colouring](/ideas/concurrency/async-await-and-function-coloring.md)).

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-10 | Kotlin 1.3 ships stable coroutines, the JVM's library-level answer; Loom is still a prototype | mixed |
| E2 | 2022-09-20 | JDK 19: virtual threads preview (JEP 425)[^jep425] | + |
| E3 | 2023-09-19 | JDK 21 LTS: virtual threads final (JEP 444)[^jep444] | + |
| E3 | 2023-09 | .NET team publishes green-thread experiment results and puts the idea on hold[^dotnet-green] | − |
| E3 | 2023-11 | Spring Boot 3.2: `spring.threads.virtual.enabled=true`, a one-line opt-in for the biggest Java framework[^spring-boot-vt] | + |
| E3 | 2024-07 | Netflix reports deadlocks from pinning in `synchronized` code under Java 21[^netflix-lock] | − |
| E4 | 2025-03-18 | JDK 24: JEP 491 lets virtual threads unmount while holding monitors[^jep491] | + |
| E4 | 2025-09-16 | JDK 25 LTS: scoped values final (JEP 506), the ThreadLocal replacement designed for virtual threads[^jep506] | + |
| E4 | 2025–26 | .NET 11 previews "runtime async": .NET doubles down on async/await implemented by the runtime[^dotnet11-async] | mixed |

# Where it succeeded
- **Java servers.** Virtual threads fit blocking JDBC, servlet and HTTP-client code without rewrites. Spring Boot, Quarkus and Helidon 4 all adopted them. Spring's opt-in is a single property.[^spring-boot-vt] InfoQ's 2025–26 production review recommends "Spring MVC plus virtual threads" as a strong default for blocking I/O services and keeps WebFlux only for streaming and backpressure-sensitive work.[^infoq-vt-jdk24]
- **Erosion of reactive Java.** The main argument for Project Reactor/RxJava, scalability, no longer depends on giving up imperative code.
- **Go** (goroutines) continued as the existence proof; see [Go runtime](/runtimes/go-runtime.md).
- **Companion APIs.** Scoped values (final in JDK 25) and [structured concurrency](/ideas/concurrency/structured-concurrency.md) (still preview) were designed around cheap threads.[^jep506]

# Where it failed or stalled
- **Pinning (JDK 21–23).** A virtual thread blocked inside `synchronized` or native frames stayed pinned to its carrier. Netflix saw hung instances with thousands of sockets in CLOSE_WAIT: all carriers were pinned by a tracing library's `synchronized` blocks, and the threads that would release them could not get a carrier.[^netflix-lock] Many teams waited for JDK 24. Residual pinning remains around native frames and class loading.[^jep491][^infoq-vt-jdk24]
- **.NET rejected it.** The runtimelab prototype served about 162k req/s against about 178k for async/await. It ran into problems with native interop, shadow-stack security mitigations and two coexisting models, and was "put on hold" in favour of improving async.[^dotnet-green]
- **Not a free lunch.** Virtual threads move the bottleneck to connection pools and downstream services. Teams must bound concurrency explicitly and expect more GC pressure.[^infoq-vt-jdk24]
- **Kotlin and Rust stayed with coroutines/async**, because their compile-to-many-targets strategy (Kotlin/JS, Native, Wasm; Rust's no-runtime embedded story) cannot assume a runtime-owned stack switcher.[^rust-rfc230]

# Why
1. **The runtime owned the whole stack.** HotSpot controls the JIT, GC and the entire JDK I/O library, so Loom could make every blocking JDK call park cheaply. That is why it worked transparently. Rust (no runtime, FFI-first) and .NET (heavy P/Invoke, an existing async ecosystem) lacked that leverage or had different priorities.[^rust-rfc230][^dotnet-green]
2. **Timing and incumbency.** Java had *no* language-level async/await, so virtual threads competed only with library-level reactive frameworks, which developers disliked. .NET had shipped async/await in 2012 and had a decade of APIs built on `Task`. A second model would have split the ecosystem, and .NET's own analysis said exactly that.[^dotnet-green]
3. **Backward compatibility as a feature.** `java.lang.Thread` stayed the abstraction, so existing libraries "just worked", apart from pinning. When Netflix's incident showed the cost of that gap, the fix landed within a year (JEP 491). That steward responsiveness turned a near-miss into a success.[^netflix-lock][^jep491]
4. **LTS cadence.** Final in JDK 21 LTS and fixed in JDK 25 LTS, so enterprises met the feature on the releases they actually deploy.

# Lessons
- Coloured async is the right answer when you have no runtime (Rust, embedded) or when async is already entrenched (.NET, JS). Uncoloured threads win when the runtime controls I/O and nothing has entrenched yet (Go, Java).
- A concurrency feature is only as good as its worst interaction with legacy constructs (`synchronized`). Ship, measure in production, fix fast.
- Ideas the industry abandoned can return when the implementation substrate changes (heap-allocated stack chunks, modern GCs).

# Related
- [Java](/languages/java.md), [Go](/languages/go.md), [Kotlin](/languages/kotlin.md), [C#](/languages/csharp.md)
- [HotSpot/OpenJDK](/runtimes/hotspot-openjdk.md), [.NET CLR](/runtimes/dotnet-clr.md), [Go runtime](/runtimes/go-runtime.md), [BEAM](/runtimes/beam.md)
- [Structured concurrency](/ideas/concurrency/structured-concurrency.md), [Async/await and function colouring](/ideas/concurrency/async-await-and-function-coloring.md), [Actor model](/ideas/concurrency/actor-model.md)
- Events: [Java 21 ships virtual threads](/events/2023-09-java-21-virtual-threads.md), [Java 25 LTS](/events/2025-09-java-25-lts.md)

[^jep444]: OpenJDK: JEP 444 — Virtual Threads — https://openjdk.org/jeps/444
[^jep425]: OpenJDK: JEP 425 — Virtual Threads (Preview) — https://openjdk.org/jeps/425
[^jep491]: Inside.java: JEP 491 targeted to JDK 24 — https://inside.java/2024/11/15/jep491-target-jdk24/
[^netflix-lock]: Netflix TechBlog: Java 21 Virtual Threads — Dude, Where's My Lock? — https://netflixtechblog.com/java-21-virtual-threads-dude-wheres-my-lock-3052540e231d
[^infoq-vt-jdk24]: InfoQ: Virtual Threads after JDK 24 — https://www.infoq.com/articles/virtual-threads-after-jdk24/
[^spring-boot-vt]: InfoQ: Spring Boot 3.2 virtual threads — https://www.infoq.com/news/2023/12/spring-boot-virtual-threads/
[^dotnet-green]: dotnet/runtimelab #2398: Green Thread Experiment Results — https://github.com/dotnet/runtimelab/issues/2398
[^dotnet11-async]: Microsoft Learn: What's new in .NET 11 runtime — https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-11/runtime
[^jep506]: OpenJDK: JEP 506 — Scoped Values — https://openjdk.org/jeps/506
[^rust-rfc230]: Rust RFC 230: Remove runtime — https://rust-lang.github.io/rfcs/0230-remove-runtime.html
