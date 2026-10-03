---
type: Event
title: WebAssembly becomes a W3C Recommendation
description: The W3C published WebAssembly Core 1.0 as an official web standard, the "fourth language of the web" after HTML, CSS and JavaScript.
event_kind: policy
date: 2019-12-05
era: E1
impact: positive
languages: [languages/javascript, languages/rust, languages/cpp, languages/assemblyscript]
runtimes: [runtimes/v8, runtimes/spidermonkey, runtimes/javascriptcore, runtimes/wasmtime]
ideas: [ideas/platforms-and-portability/webassembly-in-the-browser]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: w3c-pr
    resource: https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en
    title: "W3C press release: WebAssembly becomes a W3C Recommendation (2019-12-05)"
    author: org:w3c
  - id: w3c-history
    resource: https://www.w3.org/standards/history/wasm-core-1/
    title: "W3C: WebAssembly Core Specification publication history"
    author: org:w3c
  - id: wasm3
    resource: https://webassembly.org/news/2025-09-17-wasm-3.0/
    title: "WebAssembly.org: Wasm 3.0 Completed (2025-09-17)"
    author: org:w3c-wasm-cg
---

# What happened
On 2019-12-05 the W3C announced that the WebAssembly Core Specification was a Recommendation. It called Wasm the fourth language of the web, after HTML, CSS and JavaScript.[^w3c-pr][^w3c-history] The standardised feature set was essentially the 2017 "MVP" that all four major browsers already shipped. It had linear memory, numeric types only, no GC, no threads in core, no SIMD and no exceptions.

# Why it matters
Standardisation locked in a portable, sandboxed compile target, and the browser vendors kept implementing it in lockstep. Everything later was built on that base: SIMD and threads (2021), WasmGC (2023), and the large Wasm 3.0 bundle (September 2025).[^wasm3] Recommendation status did not make Wasm a replacement for JavaScript in ordinary web apps. The MVP could not touch the DOM or share the JS garbage collector, so Wasm settled into a role as an engine for compute-heavy parts (codecs, CAD, design tools, games, ports of desktop apps).

# Related
- [WebAssembly in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md)
- [WasmGC ships in Chrome](/events/2023-10-wasmgc-ships-in-chrome.md), [Wasm 3.0](/events/2025-09-webassembly-3-0.md)

[^w3c-pr]: W3C press release: WebAssembly becomes a W3C Recommendation — https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en
[^w3c-history]: W3C: WebAssembly Core Specification publication history — https://www.w3.org/standards/history/wasm-core-1/
[^wasm3]: WebAssembly.org: Wasm 3.0 Completed — https://webassembly.org/news/2025-09-17-wasm-3.0/
