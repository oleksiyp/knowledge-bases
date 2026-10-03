---
type: Idea
title: WebAssembly in the browser
description: A portable, sandboxed bytecode as the web's "fourth language". It became a W3C Recommendation in 2019 and grew into Wasm 3.0 (GC, exceptions, memory64) in 2025, powering heavy apps such as Photoshop, Figma and Google Sheets. It never replaced JavaScript and appears on only about 0.35% of sites.
area: platforms-and-portability
tags: [webassembly, wasm, wasmgc, emscripten, blazor, browser, simd, threads]
outcome: mixed
maturity_2026: adopted
origin_year: 2015
mainstream_year: 2017
languages: [languages/cpp, languages/rust, languages/csharp, languages/kotlin, languages/dart, languages/assemblyscript, languages/javascript, languages/go]
runtimes: [runtimes/v8, runtimes/spidermonkey, runtimes/javascriptcore]
related_ideas: [ideas/platforms-and-portability/wasi-and-component-model, ideas/platforms-and-portability/server-side-wasm, ideas/runtime-performance/js-engine-tiering, ideas/platforms-and-portability/kotlin-multiplatform]
era_momentum: { E1: up, E2: flat, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: w3c-rec
    resource: https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en
    title: "W3C press release: WebAssembly becomes a W3C Recommendation (2019-12-05)"
    author: org:w3c
  - id: wasm3
    resource: https://webassembly.org/news/2025-09-17-wasm-3.0/
    title: "webassembly.org: Wasm 3.0 Completed (2025-09-17)"
    author: org:w3c-wasm-cg
  - id: almanac-2025
    resource: https://almanac.httparchive.org/en/2025/webassembly
    title: "HTTP Archive Web Almanac 2025: WebAssembly chapter"
  - id: states-2026
    resource: https://webassembly.org/news/2026-01-21-states-of-webassembly/
    title: "webassembly.org: The States of WebAssembly (2026-01-21)"
  - id: chrome-wasmgc
    resource: https://developer.chrome.com/blog/wasmgc
    title: "Chrome for Developers: WebAssembly Garbage Collection (WasmGC) now enabled by default in Chrome (Chrome 119)"
    author: org:google
  - id: webdev-dec-2024
    resource: https://web.dev/blog/web-platform-12-2024?hl=en
    title: "web.dev: New to the web platform in December 2024 (Safari 18.2 WasmGC, tail calls → Baseline)"
    author: org:google
  - id: sheets-wasmgc
    resource: https://www.heise.de/en/news/Google-Sheets-Calculations-twice-as-fast-9786990.html
    title: "heise: Google Sheets — calculations twice as fast (WasmGC port of Java calc engine, June 2024)"
  - id: ps-web
    resource: https://web.dev/articles/ps-on-the-web
    title: "web.dev: Photoshop's journey to the web"
    author: org:google
  - id: flutter-wasm
    resource: https://docs.flutter.dev/platform-integration/web/wasm
    title: "Flutter docs: Support for WebAssembly (Wasm) — stable since Flutter 3.22 (May 2024)"
    author: org:google
  - id: kotlin-wasm-beta
    resource: https://blog.jetbrains.com/kotlin/2025/09/compose-multiplatform-1-9-0-compose-for-web-beta/
    title: "JetBrains blog: Compose Multiplatform 1.9.0 — Compose for Web goes Beta (Sept 2025)"
    author: org:jetbrains
  - id: rustwasm-sunset
    resource: https://blog.rust-lang.org/inside-rust/2025/07/21/sunsetting-the-rustwasm-github-org
    title: "Inside Rust blog: Sunsetting the rustwasm GitHub org (2025-07-21)"
    author: org:rust-lang
---

# Summary
**Mixed: a durable success as a *complement* to JavaScript, a failure as a *replacement*.** The W3C made WebAssembly the web's "fourth language" on 2019-12-05.[^w3c-rec] Over the period it gained threads, SIMD, exceptions and, most importantly, garbage-collected types (WasmGC). WasmGC shipped in Chrome 119 (Oct 2023) and reached all engines with Safari 18.2 (Dec 2024), and these features were rolled into **Wasm 3.0** on 2025-09-17.[^chrome-wasmgc][^webdev-dec-2024][^wasm3] It enabled flagship ports such as Photoshop on the web and Google Sheets' Java calculation engine, which runs about twice as fast as the JavaScript version it replaced.[^ps-web][^sheets-wasmgc] Its reach is narrow, though. The Web Almanac finds Wasm on only **0.35% of desktop and 0.28% of mobile sites in 2025**, flat to slightly down from 2024, and Microsoft's Blazor/.NET stack accounts for about 40% of detected modules.[^almanac-2025] Predictions around 2018–2019 that Rust or C# in Wasm would displace JS-based front ends did not come true.

# The idea
Wasm is a compact, validated stack-machine bytecode that browsers compile ahead of time and run in the JavaScript sandbox at near-native speed. It succeeded asm.js and PNaCl. The MVP (2017) offered linear memory and numeric types only, with everything else, including the DOM, reached through JavaScript glue. Post-MVP work added bulk memory, SIMD, threads (SharedArrayBuffer), exception handling, tail calls, reference types, WasmGC, memory64 and JS string builtins, which let GC languages such as Java, Kotlin, Dart, Scala and OCaml compile without shipping their own collector.[^wasm3]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-12-05 | Wasm 1.0 becomes a W3C Recommendation ([event](/events/2019-12-webassembly-w3c-recommendation.md)) [^w3c-rec] | + |
| E1–E2 | 2019–2021 | Rust/Wasm working group active, then goes dormant "after 2019" [^rustwasm-sunset] | − |
| E3 | 2023 | Photoshop on the web reaches general availability, built on Emscripten, Wasm threads and exceptions [^ps-web] | + |
| E3 | 2023-10 | WasmGC on by default in Chrome 119 ([event](/events/2023-10-wasmgc-ships-in-chrome.md)) [^chrome-wasmgc] | + |
| E3 | 2024-05 | Flutter 3.22: Wasm (dart2wasm + WasmGC) stable for Flutter web [^flutter-wasm] | + |
| E3 | 2024-06 | Google Sheets calc engine moves to WasmGC, about 2x faster than JS [^sheets-wasmgc] | + |
| E4 | 2024-12 | Safari 18.2 ships WasmGC and tail calls; Baseline across engines [^webdev-dec-2024] | + |
| E4 | 2025-07/08 | rustwasm GitHub org archived; wasm-bindgen moves to a new org [^rustwasm-sunset] | − |
| E4 | 2025-09-17 | Wasm 3.0 completed ([event](/events/2025-09-webassembly-3-0.md)) [^wasm3] | + |
| E4 | 2025-09 | Kotlin/Wasm and Compose for Web reach Beta [^kotlin-wasm-beta] | + |
| E4 | 2025 | Web Almanac: Wasm on 0.35% of desktop sites, flat [^almanac-2025] | − |

# Where it succeeded
- **Porting large native codebases**: Photoshop, Google Earth, Figma's C++ renderer, AutoCAD-class tools and game engines. Emscripten let Adobe reuse its C++ instead of rewriting it, and Adobe pushed threads and exceptions through the standards process.[^ps-web]
- **GC languages in the browser.** WasmGC made Java (Sheets), Dart (Flutter), Kotlin and Scala viable without shipping their own collector.[^sheets-wasmgc][^flutter-wasm][^wasm3]
- **Small hot kernels** such as codecs, crypto, compression, SQLite and image processing. The median module is about 14 KB.[^almanac-2025]
- **Standards process worked.** Four engines shipped every feature that became Wasm 3.0.[^wasm3]

# Where it failed or stalled
- **"Replace JavaScript" did not happen.** Wasm cannot touch the DOM directly. All UI calls cross a JS boundary, so frameworks written in Rust or C# (Yew, Blazor WebAssembly) pay download and interop costs and remained niches. Blazor dominates the measured modules mainly because each .NET app ships many of them.[^almanac-2025]
- **Usage plateaued.** Wasm was found on 0.04% of sites in 2021 and 0.35% in 2025, with no growth between 2024 and 2025.[^almanac-2025]
- **Community tooling eroded.** The Rust/Wasm working group was inactive from about 2020 and its GitHub org was archived in 2025.[^rustwasm-sunset]
- **Slow feature cadence.** GC took roughly six years from proposal to Baseline. Stack switching and JSPI were still landing in 2026.[^states-2026]

# Why
1. **JavaScript engines kept getting faster** (see [JS engine tiering](/ideas/runtime-performance/js-engine-tiering.md)), so most UI code had no performance reason to leave JS. Wasm wins when there is an *existing* non-JS codebase or a compute kernel, not for new UI work.
2. **The DOM is a JS object graph.** Without direct host bindings (the old "interface types" idea was redirected into the component model for non-web hosts), every Wasm UI framework pays glue costs.
3. **Payload size.** Shipping a language runtime (Mono, Go's runtime before WasmGC) hurt load times. WasmGC fixed this for GC languages only late in the period.
4. **Steward commitment.** Google (Sheets, Flutter, V8), Adobe and Microsoft (Blazor) funded the features they needed, while volunteer efforts such as rustwasm faded.[^rustwasm-sunset]

# Lessons
- A new runtime target succeeds by *coexisting* with the incumbent language, not by displacing it.
- Infrastructure features (GC, threads, exceptions) mattered more than raw speed. Each one unlocked a new class of languages or ports.
- Low site counts understate impact: a handful of very large apps carry most of the value.

# Related
- [WASI and the component model](/ideas/platforms-and-portability/wasi-and-component-model.md), [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md)
- [AssemblyScript](/languages/assemblyscript.md), [Dart](/languages/dart.md), [Kotlin](/languages/kotlin.md), [C#](/languages/csharp.md), [Rust](/languages/rust.md), [C++](/languages/cpp.md)
- [V8](/runtimes/v8.md), [SpiderMonkey](/runtimes/spidermonkey.md), [JavaScriptCore](/runtimes/javascriptcore.md)
- [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md)

[^w3c-rec]: W3C: WebAssembly becomes a W3C Recommendation — https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en
[^wasm3]: webassembly.org: Wasm 3.0 Completed — https://webassembly.org/news/2025-09-17-wasm-3.0/
[^almanac-2025]: HTTP Archive Web Almanac 2025: WebAssembly — https://almanac.httparchive.org/en/2025/webassembly
[^states-2026]: webassembly.org: The States of WebAssembly — https://webassembly.org/news/2026-01-21-states-of-webassembly/
[^chrome-wasmgc]: Chrome for Developers: WasmGC now enabled by default in Chrome — https://developer.chrome.com/blog/wasmgc
[^webdev-dec-2024]: web.dev: New to the web platform in December 2024 — https://web.dev/blog/web-platform-12-2024?hl=en
[^sheets-wasmgc]: heise: Google Sheets calculations twice as fast — https://www.heise.de/en/news/Google-Sheets-Calculations-twice-as-fast-9786990.html
[^ps-web]: web.dev: Photoshop's journey to the web — https://web.dev/articles/ps-on-the-web
[^flutter-wasm]: Flutter docs: Support for WebAssembly — https://docs.flutter.dev/platform-integration/web/wasm
[^kotlin-wasm-beta]: JetBrains blog: Compose Multiplatform 1.9.0 — Compose for Web Beta — https://blog.jetbrains.com/kotlin/2025/09/compose-multiplatform-1-9-0-compose-for-web-beta/
[^rustwasm-sunset]: Inside Rust blog: Sunsetting the rustwasm GitHub org — https://blog.rust-lang.org/inside-rust/2025/07/21/sunsetting-the-rustwasm-github-org
