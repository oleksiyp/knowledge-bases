---
type: Event
title: WebAssembly 3.0 completed
description: The Wasm CG declared Wasm 3.0 complete, the largest update since the MVP, folding GC, 64-bit memory, multiple memories, exception handling, tail calls, typed references, relaxed SIMD and JS string builtins into the standard.
event_kind: release
date: 2025-09-17
era: E4
impact: positive
languages: [languages/kotlin, languages/dart, languages/java, languages/ocaml, languages/rust, languages/cpp]
runtimes: [runtimes/v8, runtimes/spidermonkey, runtimes/javascriptcore, runtimes/wasmtime]
ideas: [ideas/platforms-and-portability/webassembly-in-the-browser]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: wasm3
    resource: https://webassembly.org/news/2025-09-17-wasm-3.0/
    title: "WebAssembly.org: Wasm 3.0 Completed (Andreas Rossberg, 2025-09-17)"
    author: org:w3c-wasm-cg
  - id: w3c-pr
    resource: https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en
    title: "W3C press release: WebAssembly becomes a W3C Recommendation (2019-12-05)"
    author: org:w3c
---

# What happened
On 2025-09-17 Andreas Rossberg announced that Wasm 3.0 was complete.[^wasm3] The release bundles ten features, several of which had been in development for six to eight years:[^wasm3]
- 64-bit address space (memory64)
- multiple memories
- garbage collection
- typed function references
- tail calls
- exception handling
- relaxed SIMD
- a deterministic profile
- custom annotation syntax
- JS string builtins

The post noted new language targets using GC (Java, OCaml, Scala, Kotlin, Scheme, Dart). It said 3.0 was "already shipping in most major web browsers", with stand-alone engines such as Wasmtime catching up.[^wasm3]

# Why it matters
Wasm 3.0 closes most of the gaps that made the 2019 MVP a C/C++/Rust-only target.[^w3c-pr] With GC and exceptions, managed languages can compile efficiently, and memory64 lifts the 4 GB ceiling for large desktop-class apps. It took six years to get from the first Recommendation to here. Proposals moved only when all major engines agreed, which made progress slow but kept it interoperable. What 3.0 still lacks is the thing the 2017 "replace JavaScript" hype assumed: direct DOM access. Wasm in the browser remains a co-processor for JavaScript, not a replacement.

# Related
- [WebAssembly in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md)
- [WebAssembly becomes a W3C Recommendation](/events/2019-12-webassembly-w3c-recommendation.md), [WasmGC ships in Chrome](/events/2023-10-wasmgc-ships-in-chrome.md)

[^wasm3]: WebAssembly.org: Wasm 3.0 Completed — https://webassembly.org/news/2025-09-17-wasm-3.0/
[^w3c-pr]: W3C press release: WebAssembly becomes a W3C Recommendation — https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en
