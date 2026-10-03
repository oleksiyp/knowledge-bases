---
type: Event
title: Mozilla, Fastly, Intel and Red Hat found the Bytecode Alliance
description: An industry alliance formed to build a secure-by-default WebAssembly runtime stack outside the browser (Wasmtime, Cranelift, WAMR, WASI); it became the steward of WASI and the component model.
event_kind: governance
date: 2019-11-12
era: E1
impact: positive
languages: [languages/javascript]
runtimes: [runtimes/wasmtime, runtimes/cranelift]
ideas: [ideas/platforms-and-portability/wasi-and-component-model, ideas/platforms-and-portability/server-side-wasm]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: hacks-ba
    resource: https://hacks.mozilla.org/2019/11/announcing-the-bytecode-alliance/
    title: "Mozilla Hacks: Announcing the Bytecode Alliance (2019-11-12)"
    author: org:mozilla
  - id: tc-ba
    resource: https://techcrunch.com/2019/11/12/mozilla-partners-with-intel-red-hat-and-fastly-to-take-webassembly-beyond-the-browser/
    title: "TechCrunch: Mozilla partners with Intel, Red Hat and Fastly to take WebAssembly beyond the browser"
  - id: ba-wasi02
    resource: https://bytecodealliance.org/articles/WASI-0.2
    title: "Bytecode Alliance: WASI 0.2 Launched (2024-01-25)"
    author: org:bytecode-alliance
  - id: iprog-layoffs
    resource: https://www.i-programmer.info/news/81-web-general/13941-mozilla-layoffs-the-fallout.html
    title: "I Programmer: Mozilla Layoffs - The Fallout (August 2020)"
  - id: hn-fastly
    resource: https://news.ycombinator.com/item?id=24897641
    title: "Hacker News: Fastly hires entire Wasmtime team from Mozilla (October 2020)"
---

# What happened
On 2019-11-12 Mozilla, Fastly, Intel and Red Hat announced the Bytecode Alliance. Its aim was a "secure by default" WebAssembly foundation that could run anywhere from browsers to servers to IoT devices.[^hacks-ba][^tc-ba] The founding projects were the Wasmtime runtime, the Cranelift code generator, the WebAssembly Micro Runtime (WAMR) for embedded use, and Rust/Cargo tooling.[^tc-ba] The alliance's pitch included a "nanoprocess" model: fine-grained isolation of dependencies to limit supply-chain attacks.[^hacks-ba]

# Why it matters
The alliance became the main home for out-of-browser Wasm. It shipped WASI 0.2 in January 2024 and WASI 0.3 in 2026.[^ba-wasi02] It shows that a standard pushed by a vendor consortium can produce mature runtimes and specs. It also shows the limits: the dependency-isolation vision for ordinary package ecosystems never reached npm or PyPI. Mozilla's August 2020 layoffs hit its Wasmtime/Cranelift/WASI team.[^iprog-layoffs] In October 2020 Fastly hired that team.[^hn-fastly] That gave the alliance a commercial anchor at an edge-computing company.

# Related
- [Wasmtime](/runtimes/wasmtime.md), [Cranelift](/runtimes/cranelift.md)
- [WASI and the component model](/ideas/platforms-and-portability/wasi-and-component-model.md), [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md)
- [WASI 0.2 launches](/events/2024-01-wasi-0-2.md)

[^hacks-ba]: Mozilla Hacks: Announcing the Bytecode Alliance — https://hacks.mozilla.org/2019/11/announcing-the-bytecode-alliance/
[^tc-ba]: TechCrunch: Mozilla partners with Intel, Red Hat and Fastly — https://techcrunch.com/2019/11/12/mozilla-partners-with-intel-red-hat-and-fastly-to-take-webassembly-beyond-the-browser/
[^ba-wasi02]: Bytecode Alliance: WASI 0.2 Launched — https://bytecodealliance.org/articles/WASI-0.2
[^iprog-layoffs]: I Programmer: Mozilla Layoffs - The Fallout — https://www.i-programmer.info/news/81-web-general/13941-mozilla-layoffs-the-fallout.html
[^hn-fastly]: Hacker News: Fastly hires entire Wasmtime team from Mozilla — https://news.ycombinator.com/item?id=24897641
