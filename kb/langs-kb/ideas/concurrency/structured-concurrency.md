---
type: Idea
title: Structured concurrency
description: "Concurrent tasks are scoped to a lexical block that cannot exit until its children finish, so errors and cancellation propagate like ordinary control flow. Popularised in 2018 by Trio and Kotlin coroutines, it became the default model in Kotlin, Swift and Python asyncio; Java's StructuredTaskScope previewed seven times (JDK 19–27) before a finalisation proposal for JDK 28."
area: concurrency
tags: [structured-concurrency, nursery, task-group, cancellation, kotlin-coroutines, swift-concurrency, project-loom, trio]
outcome: succeeding
maturity_2026: adopted
origin_year: 2016
mainstream_year: 2018
languages: [languages/kotlin, languages/swift, languages/python, languages/java, languages/go]
runtimes: [runtimes/hotspot-openjdk, runtimes/cpython]
related_ideas: [ideas/concurrency/virtual-threads, ideas/concurrency/async-await-and-function-coloring, ideas/concurrency/data-race-safety-in-types, ideas/types/algebraic-effects-and-handlers]
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: njs-go-harmful
    resource: https://vorpus.org/blog/notes-on-structured-concurrency-or-go-statement-considered-harmful/
    title: "Nathaniel J. Smith: Notes on structured concurrency, or: Go statement considered harmful (2018)"
  - id: elizarov-sc
    resource: https://elizarov.medium.com/structured-concurrency-722d765aa952
    title: "Roman Elizarov: Structured concurrency (kotlinx.coroutines 0.26.0, 2018-09-12)"
  - id: se0304
    resource: https://github.com/swiftlang/swift-evolution/blob/main/proposals/0304-structured-concurrency.md
    title: "Swift Evolution: SE-0304 Structured Concurrency"
    author: org:swift
  - id: wwdc21-sc
    resource: https://developer.apple.com/videos/play/wwdc2021/10134/
    title: "Apple WWDC21: Explore structured concurrency in Swift"
    author: org:apple
  - id: py311-taskgroup
    resource: https://docs.python.org/3/library/asyncio-task.html#task-groups
    title: "Python docs: asyncio Task Groups (added in 3.11)"
    author: org:python
  - id: jep453
    resource: https://openjdk.org/jeps/453
    title: "OpenJDK: JEP 453 — Structured Concurrency (Preview)"
    author: org:openjdk
  - id: infoq-jep505
    resource: https://www.infoq.com/news/2025/05/jep-505-concurrency-preview-5
    title: "InfoQ: JEP 505 — Structured Concurrency fifth preview reworks the API"
  - id: jep525
    resource: https://inside.java/2025/11/24/jep525-target-jdk26/
    title: "Inside.java: JEP 525 Structured Concurrency (6th Preview) targeted to JDK 26"
    author: org:oracle
  - id: infoq-jep533
    resource: https://www.infoq.com/news/2026/05/jep-533-jdk-27/
    title: "InfoQ: JEP 533 tightens exception handling in structured concurrency for JDK 27"
  - id: jep543
    resource: https://openjdk.org/jeps/543
    title: "OpenJDK: JEP 543 — Structured Concurrency (finalisation proposal for JDK 28)"
    author: org:openjdk
  - id: jdk27-ga
    resource: https://inside.java/2026/09/15/jdk-27-available/
    title: "Inside.java: The Arrival of Java 27 (2026-09-15)"
    author: org:oracle
  - id: errgroup
    resource: https://pkg.go.dev/golang.org/x/sync/errgroup
    title: "Go: golang.org/x/sync/errgroup package"
    author: org:google
---

# Summary
Structured concurrency is one of the 2018–2026 ideas that moved fastest from blog post to standard library. Nathaniel J. Smith's 2018 essay "Go statement considered harmful" (the idea behind Trio's *nurseries*) and Kotlin's kotlinx.coroutines 0.26.0 (September 2018) popularised it at about the same time.[^njs-go-harmful][^elizarov-sc] It became the default model of Swift concurrency (Swift 5.5, 2021) and entered Python's standard library as `asyncio.TaskGroup` in 3.11 (October 2022).[^se0304][^py311-taskgroup] **Java is the cautionary tale.** `StructuredTaskScope` incubated in JDK 19, then previewed in every release through JDK 27 (September 2026: seventh preview, JEP 533), with two major API redesigns along the way. JEP 543 now proposes finalising it unchanged in JDK 28.[^jep453][^infoq-jep505][^infoq-jep533][^jep543] Go, whose `go` statement was the essay's target, never adopted it at the language level. **Verdict: succeeding.** It is the consensus design for new async APIs, but the two biggest server runtimes (JVM and Go) still do not ship it as a final, built-in default.

# The idea
- **What:** every concurrent task has a parent scope. The scope cannot exit until all children have completed. If one child fails, its siblings are cancelled and the error propagates to the parent. Concurrency gets the same "single entry, single exit" guarantee that structured programming gave to `goto`.[^njs-go-harmful]
- **Prior art:** Martin Sústrik's libdill (2016) coined the term. Erlang supervision trees, Cilk `spawn/sync` and OpenMP parallel regions are cousins.
- **Problem solved:** fire-and-forget tasks (`go f()`, `GlobalScope.launch`, `Task.Run`, `asyncio.create_task`) leak. They outlive their caller, swallow exceptions and ignore cancellation. Structured concurrency makes leaks a compile-time or API-shape impossibility and gives observability tools a task tree to show.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-04 | Smith's "Go statement considered harmful"; Trio nurseries[^njs-go-harmful] | + |
| E1 | 2018-09-12 | kotlinx.coroutines 0.26.0: `CoroutineScope` required; structured by default[^elizarov-sc] | + |
| E2 | 2021-06/09 | SE-0304 accepted; Swift 5.5 ships `async let` and task groups[^se0304][^wwdc21-sc] | + |
| E2 | 2022-09 | JDK 19: incubator `StructuredTaskScope` (JEP 428)[^jep453] | + |
| E3 | 2022-10-24 | Python 3.11 adds `asyncio.TaskGroup`, modelled on Trio nurseries[^py311-taskgroup] | + |
| E3 | 2023-09 | JDK 21: becomes a preview API (JEP 453)[^jep453] | mixed |
| E4 | 2025-09 | JDK 25: fifth preview (JEP 505) replaces subclassing with `open()` + `Joiner` policies, a substantial redesign[^infoq-jep505] | mixed |
| E4 | 2026-03 | JDK 26: sixth preview (JEP 525), with timeout hooks and renames[^jep525] | − |
| E4 | 2026-09-15 | JDK 27: seventh preview (JEP 533) reworks exception flow; JEP 543 proposes final in JDK 28[^infoq-jep533][^jdk27-ga][^jep543] | mixed |

# Where it succeeded
- **Kotlin.** Structured scopes became the norm across Android (`viewModelScope`, `lifecycleScope`) and server Kotlin. `GlobalScope` is discouraged.[^elizarov-sc]
- **Swift.** `async let` and `withTaskGroup` are the only *structured* spawning primitives. Cancellation and task-local values flow down the tree.[^se0304][^wwdc21-sc]
- **Python.** `TaskGroup` and `asyncio.timeout()` turned Trio's ideas into the stdlib default and replaced most uses of the error-prone `gather`.[^py311-taskgroup]
- **Design influence.** Every new async API discussion (Rust's scoped tasks, C++ `std::execution`/P2300, JS AbortSignal composition) now treats "who owns this task?" as a first-class question.

# Where it failed or stalled
- **Java's preview treadmill.** Four years of previews and two API rewrites (subclass-based `ShutdownOnFailure` → `Joiner` policies → reworked exception types in JDK 27) mean most production Java still uses `ExecutorService` and `CompletableFuture`.[^infoq-jep505][^infoq-jep533] Preview APIs need `--enable-preview` and cannot be relied on by libraries, which kills ecosystem adoption until final.
- **Go never made it structural.** `errgroup` lives in `golang.org/x/sync`, outside the standard library, and is opt-in. The unstructured `go` statement remains the primitive.[^errgroup]
- **Escape hatches are pervasive.** Swift's `Task {}` and `Task.detached`, Kotlin's `GlobalScope`, and Python's `create_task` all remain. UI code (bridging callbacks into async) often needs unstructured tasks, so the guarantee is a convention, not a law.

# Why
1. **Async/await made it nearly free for Kotlin, Swift and Python.** These languages were *introducing* coroutine APIs in 2018–2022 and could make scoping the default from day one, with no large legacy of unstructured tasks to migrate.[^elizarov-sc][^se0304]
2. **Java's steward chose perfectionism over speed.** OpenJDK's preview mechanism lets Oracle iterate on API shape with real users. Loom's team used it to rethink failure policies, timeouts and exception types, at the cost of years of non-adoption. The approach suits a platform with strict backward-compatibility promises, and frustrates users.[^infoq-jep505][^infoq-jep533]
3. **Virtual threads changed the economics.** Once threads are cheap, wrapping each subtask in a thread is natural, and structured scopes become the obvious way to manage them. That is why Java pursued it at all ([virtual threads](/ideas/concurrency/virtual-threads.md)).
4. **Go's simplicity ethos and compatibility promise** rule out changing `go` semantics. The community answered with libraries and the `context` cancellation convention instead.[^errgroup]

# Lessons
- Structure is easiest to impose when a concurrency API is new. Retrofitting it onto an existing unstructured primitive leaves it opt-in forever.
- Long preview cycles produce better APIs and no adoption. Teams should weigh "right" against "available".
- Escape hatches for UI and callback bridging are unavoidable. Design them to be visible and lintable.

# Related
- [Kotlin](/languages/kotlin.md), [Swift](/languages/swift.md), [Python](/languages/python.md), [Java](/languages/java.md), [Go](/languages/go.md)
- [Virtual threads](/ideas/concurrency/virtual-threads.md), [Async/await and function colouring](/ideas/concurrency/async-await-and-function-coloring.md), [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md), [Algebraic effects](/ideas/types/algebraic-effects-and-handlers.md)
- Events: [Java 25 LTS](/events/2025-09-java-25-lts.md)

[^njs-go-harmful]: Nathaniel J. Smith: Go statement considered harmful — https://vorpus.org/blog/notes-on-structured-concurrency-or-go-statement-considered-harmful/
[^elizarov-sc]: Roman Elizarov: Structured concurrency — https://elizarov.medium.com/structured-concurrency-722d765aa952
[^se0304]: SE-0304 Structured Concurrency — https://github.com/swiftlang/swift-evolution/blob/main/proposals/0304-structured-concurrency.md
[^wwdc21-sc]: WWDC21: Explore structured concurrency in Swift — https://developer.apple.com/videos/play/wwdc2021/10134/
[^py311-taskgroup]: Python docs: asyncio Task Groups — https://docs.python.org/3/library/asyncio-task.html#task-groups
[^jep453]: OpenJDK: JEP 453 — https://openjdk.org/jeps/453
[^infoq-jep505]: InfoQ: JEP 505 fifth preview — https://www.infoq.com/news/2025/05/jep-505-concurrency-preview-5
[^jep525]: Inside.java: JEP 525 targeted to JDK 26 — https://inside.java/2025/11/24/jep525-target-jdk26/
[^infoq-jep533]: InfoQ: JEP 533 for JDK 27 — https://www.infoq.com/news/2026/05/jep-533-jdk-27/
[^jep543]: OpenJDK: JEP 543 — https://openjdk.org/jeps/543
[^jdk27-ga]: Inside.java: The Arrival of Java 27 — https://inside.java/2026/09/15/jdk-27-available/
[^errgroup]: Go errgroup package — https://pkg.go.dev/golang.org/x/sync/errgroup
