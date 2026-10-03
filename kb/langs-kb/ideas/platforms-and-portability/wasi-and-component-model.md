---
type: Idea
title: WASI and the WebAssembly component model
description: A capability-based system interface for running Wasm outside the browser (WASI), plus a typed cross-language module system (components and WIT). It shipped as WASI 0.2 in Jan 2024 and 0.3 with native async in June 2026, about seven months behind its own roadmap. It is technically coherent but has not delivered the "Docker moment" promised in 2019.
area: platforms-and-portability
tags: [wasi, component-model, wit, bytecode-alliance, wasmtime, wasix, capability-security]
outcome: unproven
maturity_2026: niche
origin_year: 2019
mainstream_year: null
languages: [languages/rust, languages/go, languages/c, languages/javascript, languages/python, languages/csharp, languages/assemblyscript]
runtimes: [runtimes/wasmtime, runtimes/wasmer, runtimes/wasmedge, runtimes/workerd-isolates]
related_ideas: [ideas/platforms-and-portability/server-side-wasm, ideas/platforms-and-portability/webassembly-in-the-browser, ideas/platforms-and-portability/edge-isolates, ideas/platforms-and-portability/ffi-modernization, ideas/concurrency/async-await-and-function-coloring]
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: ba-founded
    resource: https://hacks.mozilla.org/2019/11/announcing-the-bytecode-alliance/
    title: "Mozilla Hacks: Announcing the Bytecode Alliance (2019-11-12)"
    author: org:mozilla
  - id: ba-retro
    resource: https://bytecodealliance.org/articles/ten-years-of-webassembly-a-retrospective
    title: "Bytecode Alliance: 10 Years of Wasm — A Retrospective (2026-01-22)"
    author: org:bytecode-alliance
  - id: wasi-02
    resource: https://bytecodealliance.org/articles/WASI-0.2
    title: "Bytecode Alliance: WASI 0.2 Launched (vote 2024-01-25)"
    author: org:bytecode-alliance
  - id: wasi-03
    resource: https://bytecodealliance.org/articles/WASI-0.3
    title: "Bytecode Alliance: WASI 0.3 Launched (2026-06-11)"
    author: org:bytecode-alliance
  - id: wasi-p3-page
    resource: https://wasi.dev/releases/wasi-p3
    title: "WASI.dev: WASI 0.3 release page (Wasmtime 46 first to implement final spec)"
    author: org:bytecode-alliance
  - id: wasi-roadmap
    resource: https://github.com/bytecodealliance/wasi.dev/blob/main/docs/roadmap.md
    title: "wasi.dev roadmap (earlier plan: 0.3 preview Aug 2025, final Nov 2025)"
    author: org:bytecode-alliance
  - id: infoworld-wasix
    resource: https://www.infoworld.com/article/2338660/wasix-undermines-webassembly-system-interface-spec-bytecode-alliance-says.html
    title: "InfoWorld: WASIX undermines WebAssembly System Interface spec, Bytecode Alliance says (2023)"
  - id: tns-wasm3
    resource: https://thenewstack.io/wasm-3-0-no-component-model-and-no-docker-moment/
    title: "The New Stack: Wasm 3.0 — No Component Model and No 'Docker Moment' (2025)"
  - id: hykes-tweet
    resource: https://x.com/solomonstre/status/1111004913222324225
    title: "Solomon Hykes on X: 'If WASM+WASI existed in 2008, we wouldn't have needed to create Docker' (2019-03-27)"
---

# Summary
**Unproven, roughly ten years in.** WASI was announced by Mozilla in March 2019, and the Bytecode Alliance (Mozilla, Fastly, Intel, Red Hat) was founded on 2019-11-12 to build it.[^ba-founded][^ba-retro] Docker co-founder Solomon Hykes famously said that "if WASM+WASI existed in 2008, we wouldn't have needed to create Docker".[^hykes-tweet] The design reset from POSIX-like "preview 1" to the **component model** shipped as **WASI 0.2 on 2024-01-25**, adding WIT interface types and `wasi-cli`/`wasi-http` worlds.[^wasi-02] **WASI 0.3**, which moves async into the component model with `stream<T>`, `future<T>` and `async func`, was planned for a preview in August 2025 and a final release in November 2025. It actually shipped on **2026-06-11**, with Wasmtime 46 as the first runtime to implement it and most guest toolchains still marked "in progress".[^wasi-roadmap][^wasi-03][^wasi-p3-page] The design is respected and runs in production at Fastly, Fermyon/Akamai, wasmCloud and Shopify-style plugin hosts, but browsers do not support components natively. Wasm 3.0 (2025) did not include the component model, and the Docker-scale shift Hykes described has not happened.[^tns-wasm3]

# The idea
- **WASI**: an OS-independent system API with **capability-based security**. A module only gets the files, sockets and clocks it is explicitly handed.
- **Component model + WIT**: an IDL and canonical ABI so that components written in Rust, Go, JS, Python or C# can call each other with rich types (strings, records, variants, resources). The retrospective calls this "idiomatic bindings for any target language".[^ba-retro]
- Prior art includes CORBA/COM, the JVM, and the never-shipped "interface types" proposal for browsers.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-03 | Mozilla announces WASI; Hykes "no need for Docker" remark [^ba-retro][^hykes-tweet] | + |
| E1 | 2019-11-12 | Bytecode Alliance founded ([event](/events/2019-11-bytecode-alliance-founded.md)) [^ba-founded] | + |
| E2 | 2021–2022 | Preview 1 used widely; design pivots to the component model | mixed |
| E3 | 2023-05/06 | Wasmer launches WASIX (POSIX superset with `fork`, sockets, threads); Bytecode Alliance calls it non-standard [^infoworld-wasix] | − |
| E3 | 2024-01-25 | WASI 0.2 (Preview 2) adopted ([event](/events/2024-01-wasi-0-2.md)) [^wasi-02] | + |
| E4 | 2025-09 | Wasm 3.0 published without the component model [^tns-wasm3] | − |
| E4 | 2025-11 | Original target date for final WASI 0.3, missed [^wasi-roadmap] | − |
| E4 | 2026-06-11 | WASI 0.3 launched with native async; WASI 1.0 is the next milestone [^wasi-03][^wasi-p3-page] | + |

# Where it succeeded
- **Coherent design that actually shipped**: WIT, the canonical ABI, resources and async, with a reference runtime ([Wasmtime](/runtimes/wasmtime.md)) and a JS toolchain (Jco).[^wasi-03]
- **Edge and plugin hosts**: Fastly Compute, Spin (now under Akamai), wasmCloud and other plugin systems use components or Preview 2 in production (see [server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md)).
- **The security model**: capability-based sandboxing turned out to be a good fit for running untrusted and AI-generated code, a use case that grew in 2025–2026.

# Where it failed or stalled
- **Schedule**: about seven years from announcement to async I/O, and 0.3 arrived roughly seven months after its own target date.[^wasi-roadmap][^wasi-03]
- **Fragmentation**: Wasmer's WASIX and WasmEdge's own extensions targeted POSIX compatibility that the Bytecode Alliance declined to standardise.[^infoworld-wasix]
- **Guest language support lags**: async support in Rust, Go, Python, C# and C toolchains was still "in progress" at the 0.3 launch.[^wasi-03]
- **No browser adoption** of components, and not part of Wasm 3.0.[^tns-wasm3]
- **No Docker moment**: containers kept getting lighter and better supported (gVisor, Firecracker, Kubernetes), while WASI was still missing basic POSIX features.

# Why
1. **Scope problem.** One designer said of WASI: "Name an API in the world and it's in scope." Without asm.js-style scaffolding the design space was enormous.[^ba-retro]
2. **Purity versus compatibility.** The Bytecode Alliance chose capability-safe, language-neutral interfaces over POSIX emulation. That is better long term, but it meant existing software could not simply be recompiled, which created the opening for WASIX.[^infoworld-wasix]
3. **Async is hard.** Getting composable async right across languages with different coroutine models (see [async/await and function colouring](/ideas/concurrency/async-await-and-function-coloring.md)) pushed out the most important feature for servers.
4. **Funding concentration.** Fastly, Fermyon, Microsoft and Intel carried most of the work, and vendor consolidation (Fermyon acquired by Akamai in Dec 2025) thinned the field ([event](/events/2025-12-akamai-acquires-fermyon.md)).

# Lessons
- Getting a cross-language ABI right is a decade-scale project. Early hype ("replaces Docker") damaged credibility when timelines slipped.
- Standards bodies that refuse a pragmatic compatibility layer invite forks. WASIX is the price of WASI's purity.

# Related
- [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md), [WebAssembly in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md), [Edge isolates](/ideas/platforms-and-portability/edge-isolates.md)
- [Wasmtime](/runtimes/wasmtime.md), [Wasmer](/runtimes/wasmer.md), [WasmEdge](/runtimes/wasmedge.md), [Cranelift](/runtimes/cranelift.md)
- [FFI modernization](/ideas/platforms-and-portability/ffi-modernization.md)

[^ba-founded]: Mozilla Hacks: Announcing the Bytecode Alliance — https://hacks.mozilla.org/2019/11/announcing-the-bytecode-alliance/
[^ba-retro]: Bytecode Alliance: 10 Years of Wasm — A Retrospective — https://bytecodealliance.org/articles/ten-years-of-webassembly-a-retrospective
[^wasi-02]: Bytecode Alliance: WASI 0.2 Launched — https://bytecodealliance.org/articles/WASI-0.2
[^wasi-03]: Bytecode Alliance: WASI 0.3 Launched — https://bytecodealliance.org/articles/WASI-0.3
[^wasi-p3-page]: WASI.dev: WASI 0.3 — https://wasi.dev/releases/wasi-p3
[^wasi-roadmap]: wasi.dev roadmap — https://github.com/bytecodealliance/wasi.dev/blob/main/docs/roadmap.md
[^infoworld-wasix]: InfoWorld: WASIX undermines WASI spec, Bytecode Alliance says — https://www.infoworld.com/article/2338660/wasix-undermines-webassembly-system-interface-spec-bytecode-alliance-says.html
[^tns-wasm3]: The New Stack: Wasm 3.0 — No Component Model and No 'Docker Moment' — https://thenewstack.io/wasm-3-0-no-component-model-and-no-docker-moment/
[^hykes-tweet]: Solomon Hykes on X (2019-03-27) — https://x.com/solomonstre/status/1111004913222324225
