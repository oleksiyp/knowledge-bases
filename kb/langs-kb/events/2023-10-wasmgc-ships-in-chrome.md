---
type: Event
title: WasmGC ships by default in Chrome 119
description: Chrome 119 enabled WebAssembly garbage collection by default, letting Kotlin, Dart, Java and OCaml target Wasm without bundling their own GC; Firefox followed in version 120 and Safari only in 18.2 (December 2024).
event_kind: release
date: 2023-10-31
era: E3
impact: positive
languages: [languages/kotlin, languages/dart, languages/java, languages/ocaml]
runtimes: [runtimes/v8, runtimes/spidermonkey, runtimes/javascriptcore]
ideas: [ideas/platforms-and-portability/webassembly-in-the-browser, ideas/platforms-and-portability/kotlin-multiplatform]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: webdev-oct23
    resource: https://web.dev/blog/web-platform-10-2023
    title: "web.dev: New to the web platform in October 2023 (Chrome 119 ships WasmGC)"
    author: org:google
  - id: v8-wasmgc
    resource: https://v8.dev/blog/wasm-gc-porting
    title: "V8 blog: A new way to bring garbage collected programming languages efficiently to WebAssembly (2023-11-01)"
    author: org:google
  - id: sheets-wasmgc
    resource: https://web.dev/case-studies/google-sheets-wasmgc
    title: "web.dev: Why Google Sheets ported its calculation worker from JavaScript to WasmGC (June 2024)"
    author: org:google
  - id: kotlin-wasm-cfg
    resource: https://kotlinlang.org/docs/wasm-configuration.html
    title: "Kotlin docs: Kotlin/Wasm supported browser versions (Chrome 119, Firefox 120, Safari 18.2)"
    author: org:jetbrains
---

# What happened
Chrome 119, released at the end of October 2023, enabled WasmGC by default after the proposal reached phase 4.[^webdev-oct23] WasmGC adds struct and array types managed by the host garbage collector. Managed languages no longer have to ship their own collector inside linear memory.[^v8-wasmgc] Firefox 120 followed in November 2023. Safari did not ship until 18.2 in December 2024, which Kotlin/Wasm lists as its minimum.[^kotlin-wasm-cfg]

# Why it matters
WasmGC changed which languages could realistically target the browser through Wasm. Before it, Wasm in practice meant C, C++ and Rust. The V8 team listed Dart/Flutter, Java (J2Wasm), Kotlin, OCaml (wasm_of_ocaml) and Scheme (Hoot) as targets.[^v8-wasmgc] Its headline production win is Google Sheets. Sheets compiled its Java calculation engine to WasmGC and reports it running about twice as fast as the JavaScript version.[^sheets-wasmgc] The 14-month Safari lag illustrates a recurring brake on Wasm: features only count once all three engines ship them. WasmGC was later folded into Wasm 3.0 (September 2025).

# Related
- [WebAssembly in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md), [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md)
- [V8](/runtimes/v8.md), [Dart](/languages/dart.md)
- [Wasm 3.0](/events/2025-09-webassembly-3-0.md)

[^webdev-oct23]: web.dev: New to the web platform in October 2023 — https://web.dev/blog/web-platform-10-2023
[^v8-wasmgc]: V8 blog: A new way to bring garbage collected programming languages efficiently to WebAssembly — https://v8.dev/blog/wasm-gc-porting
[^sheets-wasmgc]: web.dev: Why Google Sheets ported its calculation worker to WasmGC — https://web.dev/case-studies/google-sheets-wasmgc
[^kotlin-wasm-cfg]: Kotlin docs: Kotlin/Wasm configuration — https://kotlinlang.org/docs/wasm-configuration.html
