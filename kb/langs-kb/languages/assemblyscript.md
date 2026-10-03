---
type: Language
title: AssemblyScript
description: "TypeScript-like language that compiles directly to WebAssembly. It was the obvious on-ramp for web developers to Wasm, but it stayed at 0.x, broke with WASI and the Component Model in 2022, and lost its flagship platform slot (Shopify Functions) to Rust and JS-in-Wasm. It survives in niches such as The Graph's subgraph mappings."
tags: [webassembly, typescript-like, compile-to-wasm, wasi-dispute, standards-politics]
paradigms: [imperative, object-oriented]
typing: static
memory_model: gc
first_released: 2017
steward: AssemblyScript project (volunteer core team, Open Collective-funded)
governance: community
trajectory: niche
ideas:
  - ideas/platforms-and-portability/webassembly-in-the-browser
  - ideas/platforms-and-portability/wasi-and-component-model
  - ideas/platforms-and-portability/server-side-wasm
  - ideas/platforms-and-portability/smart-contract-languages
runtimes: [runtimes/wasmtime, runtimes/wasmer, runtimes/wasmedge, runtimes/v8]
adoption_signals:
  github_stars: { value: 18030, as_of: 2026-10-03, note: "AssemblyScript/assemblyscript" }
  npm_weekly_downloads: { value: 198584, as_of: 2026-10-01, note: "assemblyscript package" }
era_momentum: { E1: up, E2: down, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: as-objections
    resource: https://www.assemblyscript.org/standards-objections.html
    title: "AssemblyScript: Standards objections (WASI, Component Model)"
    author: org:assemblyscript
  - id: devclass-wasi
    resource: https://www.devclass.com/development/2022/09/08/assemblyscript-project-wasi-damages-open-standards-and-the-web/1630815
    title: "DevClass: AssemblyScript project — WASI damages open standards and the web (2022-09-08)"
  - id: hn-wasi
    resource: https://news.ycombinator.com/item?id=32562230
    title: "Hacker News: AssemblyScript removes WASI support (2022-08)"
  - id: wasi-shim
    resource: https://github.com/AssemblyScript/wasi-shim
    title: "AssemblyScript/wasi-shim: patches the compiler to use WASI imports"
    author: org:assemblyscript
  - id: as-releases
    resource: https://github.com/AssemblyScript/assemblyscript/releases
    title: "AssemblyScript GitHub releases (v0.28.20 2026-07-22; via GitHub API)"
  - id: shopify-wasm
    resource: https://shopify.engineering/shopify-webassembly
    title: "Shopify Engineering: How Shopify Uses WebAssembly Outside of the Browser (2020)"
    author: org:shopify
  - id: shopify-langs
    resource: https://shopify.dev/docs/apps/build/functions/programming-languages
    title: "Shopify.dev: Functions language considerations (Rust and JavaScript first-party)"
    author: org:shopify
  - id: shopify-js
    resource: https://shopify.engineering/javascript-in-webassembly-for-shopify-functions
    title: "Shopify Engineering: Bringing JavaScript to WebAssembly for Shopify Functions (Javy)"
    author: org:shopify
  - id: graph-as
    resource: https://thegraph.com/docs/en/subgraphs/developing/creating/graph-ts/api/
    title: "The Graph docs: AssemblyScript API for subgraph mappings"
  - id: npm-as
    resource: https://api.npmjs.org/downloads/point/last-week/assemblyscript
    title: "npm API: assemblyscript weekly downloads (week ending 2026-10-01)"
---

# Summary
AssemblyScript (AS) offered web developers WebAssembly without learning Rust or C++: a strict TypeScript subset compiled ahead of time to Wasm via Binaryen. In E1 it looked like the natural "JS developer's Wasm language". Shopify initially chose it for its WebAssembly-based extensibility platform precisely because its developers knew JavaScript.[^shopify-wasm] Three things limited it. First, it stayed 0.x (v0.28.20 in July 2026) with repeated breaking changes.[^as-releases] Second, in 2022 the project **removed built-in WASI support** (from 0.20) and published formal objections to WASI and the Component Model. It argued that they "compete with" rather than integrate with the web platform, and that the Component Model displaced JS/DOM-oriented proposals.[^as-objections][^devclass-wasi][^hn-wasi] That put AS against the Bytecode Alliance direction just as server-side Wasm was consolidating around WASI 0.2 and components. Third, platform owners chose other routes: Shopify Functions now lists only Rust and JavaScript (compiled to Wasm via Javy) as first-party languages.[^shopify-langs][^shopify-js] AS remains the mapping language for The Graph's subgraphs and has ~200k weekly npm downloads.[^graph-as][^npm-as] Verdict: niche. A good idea outmanoeuvred by the incumbents (Rust for performance, JS engines inside Wasm for familiarity) and isolated by standards politics.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-12 | Wasm becomes a W3C Recommendation ([event](/events/2019-12-webassembly-w3c-recommendation.md)) | + |
| E1 | 2020 | Shopify describes its AssemblyScript-based extensibility (Scripts → Functions)[^shopify-wasm] | + |
| E2 | 2022-08 | AS removes built-in WASI support (0.20+); wasi-shim offered instead[^hn-wasi][^wasi-shim] | − |
| E2 | 2022-09-08 | Public "standards objections" statement against WASI and the Component Model[^devclass-wasi][^as-objections] | − |
| E3 | 2023 | Shopify adds JavaScript Functions via Javy (QuickJS compiled to Wasm)[^shopify-js] | − (for AS) |
| E3 | 2024-01 | WASI 0.2 / Component Model launch, which AS opposes ([event](/events/2024-01-wasi-0-2.md)) | − |
| E4 | 2026-07-22 | v0.28.20; still pre-1.0[^as-releases] | flat |

# Ideas it bet on
| Idea | Outcome for AssemblyScript |
|---|---|
| [Wasm as a compile target for web devs](/ideas/platforms-and-portability/webassembly-in-the-browser.md) | Mixed: worked technically; most web devs never needed Wasm directly |
| Web-first Wasm (oppose [WASI/components](/ideas/platforms-and-portability/wasi-and-component-model.md)) | Failed: isolated AS from the [server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md) ecosystem |
| TypeScript-like syntax with different semantics | Mixed: familiar look, but TS libraries and idioms don't port |
| Blockchain data indexing (The Graph) | Succeeded as a niche ([smart-contract languages](/ideas/platforms-and-portability/smart-contract-languages.md) adjacent) |

# What succeeded
- **Low-friction Wasm for JS developers.** Small binaries, Binaryen optimisation, and an approachable language.
- **Durable niches.** The Graph's subgraph mappings and assorted plugin systems; ~198k weekly npm downloads.[^graph-as][^npm-as]
- **Active maintenance.** Regular 0.28.x releases through 2026.[^as-releases]

# What failed or stalled
- **Standards break.** Dropping WASI and opposing the Component Model put AS outside the Bytecode Alliance toolchain; WASI use now needs a shim.[^as-objections][^wasi-shim]
- **Platform displacement.** Shopify, its showcase, standardised on Rust plus JS-in-Wasm.[^shopify-langs][^shopify-js]
- **No 1.0.** Nine years of 0.x versions signal instability to enterprise users.[^as-releases]
- **Competition from JS engines in Wasm.** Embedding QuickJS-style engines lets developers run *real* JS in Wasm, which removes the main reason for a TS-lookalike.[^shopify-js]

# By era
## E1
Peak promise: Shopify adoption and Wasm 1.0 standardisation.[^shopify-wasm]
## E2
The WASI break and the public objections.[^devclass-wasi]
## E3
Shopify adds JS via Javy. WASI 0.2 ships without AS.[^shopify-js]
## E4
Maintenance-mode niche around The Graph and small embedders.[^graph-as]

# Lessons
- In an ecosystem defined by a standards body, opposing the dominant standard isolates a small project more than it changes the standard.
- A "familiar syntax, different semantics" language competes with the real thing once the real thing can run in the target (JS engines compiled to Wasm).

# Related
- [TypeScript](/languages/typescript.md), [Rust](/languages/rust.md), [JavaScript](/languages/javascript.md)
- [Wasmtime](/runtimes/wasmtime.md), [Wasmer](/runtimes/wasmer.md), [QuickJS](/runtimes/quickjs.md)
- [WASI and the Component Model](/ideas/platforms-and-portability/wasi-and-component-model.md), [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md)

[^as-objections]: AssemblyScript: Standards objections — https://www.assemblyscript.org/standards-objections.html
[^devclass-wasi]: DevClass: AssemblyScript project — WASI damages open standards and the web — https://www.devclass.com/development/2022/09/08/assemblyscript-project-wasi-damages-open-standards-and-the-web/1630815
[^hn-wasi]: Hacker News: AssemblyScript removes WASI support — https://news.ycombinator.com/item?id=32562230
[^wasi-shim]: AssemblyScript/wasi-shim — https://github.com/AssemblyScript/wasi-shim
[^as-releases]: AssemblyScript GitHub releases — https://github.com/AssemblyScript/assemblyscript/releases
[^shopify-wasm]: Shopify Engineering: How Shopify Uses WebAssembly Outside of the Browser — https://shopify.engineering/shopify-webassembly
[^shopify-langs]: Shopify.dev: Functions language considerations — https://shopify.dev/docs/apps/build/functions/programming-languages
[^shopify-js]: Shopify Engineering: Bringing JavaScript to WebAssembly for Shopify Functions — https://shopify.engineering/javascript-in-webassembly-for-shopify-functions
[^graph-as]: The Graph docs: AssemblyScript API — https://thegraph.com/docs/en/subgraphs/developing/creating/graph-ts/api/
[^npm-as]: npm API: assemblyscript weekly downloads — https://api.npmjs.org/downloads/point/last-week/assemblyscript
