---
type: Idea
title: Async/await and the function-colouring problem
description: "Async/await turns callback-based non-blocking I/O into sequential-looking code, at the price of splitting functions into sync and async 'colours'. 2018–2026 verdict: mixed — async/await became universal (Rust, Swift, C++ coroutines, Python, JS, C#) and powers most high-scale servers, but the colouring cost drove a counter-movement: Java chose virtual threads, OCaml 5 chose effects, Zig removed its async in 2023 and re-founded it as a passed-in Io interface in 2026, and Rust spent 2019–2025 completing async traits and closures."
area: concurrency
tags: [async, await, coroutines, function-coloring, rust, zig, tokio, virtual-threads, effects]
outcome: mixed
maturity_2026: mainstream
origin_year: 2007
mainstream_year: 2012
languages: [languages/rust, languages/zig, languages/cpp, languages/python, languages/javascript, languages/csharp, languages/swift, languages/kotlin, languages/java, languages/go, languages/ocaml]
runtimes: [runtimes/hotspot-openjdk, runtimes/go-runtime, runtimes/ocaml-5-runtime]
related_ideas:
  - ideas/concurrency/virtual-threads
  - ideas/concurrency/structured-concurrency
  - ideas/types/algebraic-effects-and-handlers
  - ideas/concurrency/data-race-safety-in-types
era_momentum: { E1: up, E2: up, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: nystrom
    resource: https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/
    title: "Bob Nystrom: What Color is Your Function? (2015-02-01)"
  - id: rust-139
    resource: https://blog.rust-lang.org/2019/11/07/Rust-1.39.0/
    title: "Rust Blog: Announcing Rust 1.39.0 (async/await stable, 2019-11-07)"
    author: org:rust-lang
  - id: rust-afit
    resource: https://blog.rust-lang.org/2023/12/21/async-fn-rpit-in-traits/
    title: "Rust Blog: Announcing async fn and return-position impl Trait in traits (Rust 1.75, 2023-12)"
    author: org:rust-lang
  - id: rust-185
    resource: https://blog.rust-lang.org/2025/02/20/Rust-1.85.0/
    title: "Rust Blog: Announcing Rust 1.85.0 and Rust 2024 (async closures, 2025-02-20)"
    author: org:rust-lang
  - id: async-std-eol
    resource: https://rustsec.org/advisories/RUSTSEC-2025-0052.html
    title: "RustSec: RUSTSEC-2025-0052 async-std has been discontinued (as of 2025-03-01)"
  - id: corrode-async
    resource: https://corrode.dev/blog/async/
    title: "corrode.dev: The State of Async Rust — Runtimes"
  - id: keyword-generics
    resource: https://blog.rust-lang.org/inside-rust/2022/07/27/keyword-generics/
    title: "Inside Rust: Announcing the Keyword Generics Initiative (2022-07-27)"
    author: org:rust-lang
  - id: zig-011
    resource: https://ziglang.org/download/0.11.0/release-notes.html
    title: "Zig 0.11.0 Release Notes (async not available in self-hosted compiler)"
    author: org:ziglang
  - id: kristoff-io
    resource: https://kristoff.it/blog/zig-new-async-io/
    title: "Loris Cro: Zig's New Async I/O (Io interface; 'function colouring' addressed)"
  - id: lwn-zig016
    resource: https://lwn.net/Articles/1067634/
    title: "LWN: Zig 0.16.0 released (2026-04-14)"
  - id: jep444
    resource: https://openjdk.org/jeps/444
    title: "OpenJDK JEP 444: Virtual Threads (final in JDK 21, 2023-09)"
  - id: swift-55
    resource: https://www.swift.org/blog/swift-5.5-released/
    title: "Swift.org: Swift 5.5 Released! (async/await, actors, 2021-09)"
  - id: ocaml5
    resource: https://ocaml.org/releases/5.0.0
    title: "OCaml 5.0.0 release (effects and multicore, 2022-12)"
  - id: infoq-cpp26
    resource: https://www.infoq.com/news/2026/04/cpp-26-reflection-safety-async/
    title: "InfoQ: C++26 — Reflection, Memory Safety, Contracts, and a New Async Model (std::execution, 2026-04)"
---

# Summary
**Mixed.** Async/await won the *syntax* war: by 2021 it existed in C#, JavaScript, Python, Rust (2019), Swift (2021), Kotlin (as `suspend`) and C++20 (coroutines).[^rust-139][^swift-55] It made high-concurrency servers tractable without callbacks, and Rust's zero-allocation futures power much of the cloud's network edge. But Bob Nystrom's 2015 critique — async functions form a second "colour" that infects every caller — became the period's central design argument.[^nystrom] The colour cost showed up concretely in Rust: async fn in traits took until December 2023 (still without `dyn`),[^rust-afit] async closures until February 2025,[^rust-185] the "keyword generics" effort to write colour-agnostic code never stabilised,[^keyword-generics] and the runtime ecosystem only consolidated when async-std was discontinued in 2025.[^async-std-eol][^corrode-async] Meanwhile other languages chose *colourless* designs: Java's virtual threads (JDK 21),[^jep444] OCaml 5's effect handlers,[^ocaml5] and Zig, which removed its first async design in 0.11 (2023) and in 0.16 (2026) made concurrency an `Io` parameter passed like an allocator, so the same code runs blocking or evented.[^zig-011][^kristoff-io][^lwn-zig016]

# The idea
Mark functions `async`; calling one returns a future/promise; `await` suspends until it completes; the compiler rewrites the function into a state machine. Benefits: no thread per connection, explicit suspension points, composable with cancellation. Cost: sync code cannot call async code without blocking a runtime; libraries split into sync/async variants; generic code must be duplicated or abstracted over the colour. Prior art: F# async workflows (2007), C# 5 (2012), JS ES2017, Python 3.5.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-11-07 | Rust 1.39 stabilises async/await (zero-cost futures, runtime-agnostic) [^rust-139] | + |
| E1 | 2020-02 | C++20 finalised with stackless coroutines (no library executors) | mixed |
| E2 | 2021-09 | Swift 5.5: async/await + actors [^swift-55] | + |
| E2 | 2022-07 | Rust Keyword Generics Initiative to abstract over async-ness [^keyword-generics] | + |
| E3 | 2022-12 | OCaml 5.0: effect handlers enable direct-style concurrency [^ocaml5] | + |
| E3 | 2023-08 | Zig 0.11 drops its colourless async design (self-hosted compiler) [^zig-011] | − |
| E3 | 2023-09 | Java 21 virtual threads: blocking code scales, no colouring [^jep444] | + |
| E3 | 2023-12-28 | Rust 1.75: async fn in traits (no dyn support) [^rust-afit] | + |
| E4 | 2025-02-20 | Rust 1.85: async closures [^rust-185] | + |
| E4 | 2025-03 | async-std discontinued; Tokio de facto standard, smol alternative [^async-std-eol] | mixed |
| E4 | 2026-03 | C++26 adds `std::execution` (senders/receivers) [^infoq-cpp26] | + |
| E4 | 2026-04-14 | Zig 0.16: `std.Io` — async without function colouring [^lwn-zig016][^kristoff-io] | + |

# Where it succeeded
- **High-scale I/O servers** in Rust (Tokio-based proxies, databases), C#, Node.js and Python (FastAPI) — async/await made them readable.
- **UI and mobile** (Swift, Kotlin coroutines, C#/WinUI): structured async replaced callback pyramids; see [structured concurrency](/ideas/concurrency/structured-concurrency.md).
- **Rust's model** delivered allocation-free futures usable in embedded (Embassy) as well as servers.[^corrode-async]

# Where it failed or stalled
- **Ergonomics completion in Rust** took six years after stabilisation and is still incomplete (dyn async traits, async drop, generators).[^rust-afit][^rust-185]
- **Ecosystem split**: libraries tied to a runtime; async-std's end stranded ~1,750 dependent crates.[^async-std-eol]
- **Colour-polymorphism** (keyword generics/effects) remained research.[^keyword-generics]
- **Zig's first design** (colourless via frame suspension) was abandoned rather than shipped.[^zig-011]

# Why
1. **Zero-cost constraints force colouring.** Without a GC or growable stacks, stackless state machines are the only zero-overhead implementation — so Rust and C++ accepted colouring as the price; languages with a managed runtime (Java, Go, OCaml) could hide it with cheap threads/fibers or effects.[^jep444][^ocaml5]
2. **Borrowing across await points is hard.** In Rust, futures that hold references interact with lifetimes and `Send`, multiplying the complexity of traits and closures — why each piece took years.[^rust-afit]
3. **Runtime-agnostic design traded unity for flexibility.** Rust deliberately left the executor out of std; the market picked Tokio, but only after years of fragmentation.[^corrode-async]
4. **Late movers learned.** Zig and Java could observe the colouring cost and pick designs (Io-as-parameter, virtual threads) that keep one function colour.[^kristoff-io][^jep444]

# Lessons
- Choose concurrency primitives together with the memory model: GC'd runtimes should prefer lightweight threads; GC-free languages pay for async in type-system complexity.
- Shipping syntax early (Rust 2019) captured the server market, but left a decade of ergonomic debt.
- Passing capabilities explicitly (Zig's Io, effect handlers) is the emerging way to avoid colouring without a runtime.

# Related
- Languages: [Rust](/languages/rust.md), [Zig](/languages/zig.md), [C++](/languages/cpp.md), [Java](/languages/java.md), [Swift](/languages/swift.md), [Python](/languages/python.md), [JavaScript](/languages/javascript.md), [Go](/languages/go.md), [OCaml](/languages/ocaml.md)
- Ideas: [Virtual threads](/ideas/concurrency/virtual-threads.md), [Structured concurrency](/ideas/concurrency/structured-concurrency.md), [Algebraic effects](/ideas/types/algebraic-effects-and-handlers.md), [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md)

[^nystrom]: Bob Nystrom: What Color is Your Function? — https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/
[^rust-139]: Rust Blog: Announcing Rust 1.39.0 — https://blog.rust-lang.org/2019/11/07/Rust-1.39.0/
[^rust-afit]: Rust Blog: async fn and RPIT in traits — https://blog.rust-lang.org/2023/12/21/async-fn-rpit-in-traits/
[^rust-185]: Rust Blog: Announcing Rust 1.85.0 and Rust 2024 — https://blog.rust-lang.org/2025/02/20/Rust-1.85.0/
[^async-std-eol]: RustSec: async-std discontinued — https://rustsec.org/advisories/RUSTSEC-2025-0052.html
[^corrode-async]: corrode.dev: The State of Async Rust — https://corrode.dev/blog/async/
[^keyword-generics]: Inside Rust: Announcing the Keyword Generics Initiative — https://blog.rust-lang.org/inside-rust/2022/07/27/keyword-generics/
[^zig-011]: Zig 0.11.0 Release Notes — https://ziglang.org/download/0.11.0/release-notes.html
[^kristoff-io]: Loris Cro: Zig's New Async I/O — https://kristoff.it/blog/zig-new-async-io/
[^lwn-zig016]: LWN: Zig 0.16.0 released — https://lwn.net/Articles/1067634/
[^jep444]: OpenJDK JEP 444: Virtual Threads — https://openjdk.org/jeps/444
[^swift-55]: Swift.org: Swift 5.5 Released — https://www.swift.org/blog/swift-5.5-released/
[^ocaml5]: OCaml 5.0.0 release — https://ocaml.org/releases/5.0.0
[^infoq-cpp26]: InfoQ: C++26 — https://www.infoq.com/news/2026/04/cpp-26-reflection-safety-async/
