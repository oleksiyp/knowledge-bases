---
type: Runtime
title: QuickJS
description: Fabrice Bellard's tiny embeddable JavaScript interpreter (2019); it became the default way to run JavaScript inside WebAssembly (Shopify's Javy) and in embedded hosts, survived a 2021–2023 maintenance gap through the QuickJS-ng fork, and was revived by Bellard in 2024 — a quiet success for the "small interpreter, no JIT" design.
tags: [javascript, interpreter, embedded, webassembly, javy, quickjs-ng, bellard]
runtime_kind: interpreter
languages: [languages/javascript, languages/typescript]
steward: Fabrice Bellard and Charlie Gordon (upstream); QuickJS-ng community fork
governance: bdfl
first_released: 2019
trajectory: growing
ideas: [ideas/runtime-performance/js-engine-tiering, ideas/platforms-and-portability/server-side-wasm, ideas/platforms-and-portability/wasi-and-component-model, ideas/platforms-and-portability/edge-isolates]
adoption_signals:
  upstream_release: { value: "2025-04-26", as_of: 2025-04, note: "first releases since 2021 were 2024-01-13 and 2025-04-26" }
era_momentum: { E1: up, E2: flat, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: bellard
    resource: https://bellard.org/quickjs/
    title: "bellard.org: QuickJS JavaScript Engine (release history, ES2023 support)"
  - id: changelog
    resource: https://github.com/quickjs-zh/QuickJS/blob/master/Changelog
    title: "QuickJS Changelog mirror (2024-01-13 and 2025-04-26 entries)"
  - id: hn-2024
    resource: https://news.ycombinator.com/item?id=39308730
    title: "Hacker News: QuickJS 2024-01-13 (first upstream release since 2021)"
  - id: ng-discussion
    resource: https://github.com/quickjs-ng/quickjs/discussions/258
    title: "quickjs-ng GitHub discussion #258: quickjs vs quickjs-ng"
  - id: ng-site
    resource: https://quickjs-ng.github.io/quickjs/
    title: "QuickJS-NG: Welcome to QuickJS-NG (fork started Oct 2023)"
  - id: shopify
    resource: https://shopify.engineering/javascript-in-webassembly-for-shopify-functions
    title: "Shopify Engineering: Bringing JavaScript to WebAssembly for Shopify Functions (2023-02-09)"
    author: org:shopify
  - id: javy-ba
    resource: https://bytecodealliance.org/articles/javy-hosted-project
    title: "Bytecode Alliance: Welcoming Javy — a new hosted project (2023)"
    author: org:bytecode-alliance
  - id: igalia-javy
    resource: https://blogs.igalia.com/compilers/2026/05/25/five-years-of-javascript-on-webassembly/
    title: "Igalia: Five years of JavaScript on WebAssembly (2026-05-25)"
  - id: mquickjs
    resource: https://github.com/bellard/mquickjs
    title: "GitHub: bellard/mquickjs — Micro QuickJS JavaScript engine (Dec 2025)"
  - id: phoronix-mqjs
    resource: https://www.phoronix.com/news/Micro-QuickJS
    title: "Phoronix: Micro QuickJS engine compiles and runs JavaScript with as little as 10kB of RAM"
---

# Summary
QuickJS is the small-interpreter counterpart to the JIT arms race. Released by Fabrice Bellard in 2019, it is a single C codebase with no JIT that passes most of the ECMAScript test suite, which makes it trivially embeddable and — crucially — compilable to WebAssembly, where JITs cannot run.[^bellard][^shopify] Shopify built Javy on it to let merchants write Shopify Functions in JavaScript; Javy moved to the Bytecode Alliance in 2023 and, five years on, remains the leading JS-to-Wasm toolchain, producing 1–16 KB modules via dynamic linking.[^shopify][^javy-ba][^igalia-javy] The project's weak point was its bus factor: upstream went silent between March 2021 and January 2024, prompting Ben Noordhuis and Saúl Ibarra Corretgé to start the QuickJS-ng fork (October 2023); Bellard then resumed with releases on 2024-01-13 (ES2023) and 2025-04-26, and both lines now coexist.[^hn-2024][^ng-site][^ng-discussion][^changelog] In December 2025 Bellard added MicroQuickJS, an ES5-subset engine running in ~10 KB of RAM for microcontrollers.[^mquickjs][^phoronix-mqjs] Verdict: growing quietly, as infrastructure rather than as a headline runtime.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-07 | QuickJS first released by Bellard and Charlie Gordon [^bellard] | + |
| E2 | 2021-03-27 | Last upstream release before a ~3-year gap [^changelog] | − |
| E2 | 2021-04 | Shopify starts Javy (QuickJS compiled to Wasm) [^igalia-javy] | + |
| E3 | 2023-02-09 | Shopify details JS in Shopify Functions: 256 KB module cap, 5 ms limit, JS ~3x slower than Rust-Wasm [^shopify] | + |
| E3 | 2023 | Javy becomes a Bytecode Alliance hosted project [^javy-ba] | + |
| E3 | 2023-10 | QuickJS-ng fork launched to "reignite" the stalled project [^ng-site][^ng-discussion] | mixed |
| E3 | 2024-01-13 | Bellard's first release since 2021: ES2023, top-level await, new array methods [^changelog][^hn-2024] | + |
| E4 | 2025-04-26 | New upstream release: new BigInt implementation, WeakRef/FinalizationRegistry [^changelog] | + |
| E4 | 2025-12 | MicroQuickJS: JS in ~10 KB RAM / ~100 KB ROM for embedded systems [^mquickjs][^phoronix-mqjs] | + |
| E4 | 2026-05-25 | Igalia reports QuickJS-bytecode-to-Wasm compiler experiments (1.2x–3.5x on microbenchmarks) [^igalia-javy] | + |

# Ideas it bet on
| Idea | Outcome for QuickJS |
|---|---|
| Small portable interpreter, no JIT (opposite pole of [JS engine tiering](/ideas/runtime-performance/js-engine-tiering.md)) | succeeded for embedding and Wasm |
| JS as a guest inside Wasm sandboxes ([server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md)) | succeeded in plugin/function niches (Shopify Functions) |
| Single-maintainer stewardship | stalled 2021–2023; recovered after a fork |

# What succeeded
- **Fits where JITs cannot.** WebAssembly forbids generating and executing new code at runtime, so a JS engine inside Wasm must be an interpreter; QuickJS's small C codebase made it the natural choice.[^shopify]
- **Tiny modules via dynamic linking.** Javy shrank per-function modules from ~800 KB to "220 bytes plus the size of the bytecode" by linking a shared engine, fitting Shopify's 256 KB cap.[^shopify]
- **Embedding breadth.** Modern standard coverage (ES2023 by 2024) in a dependency-free C library made it a default for hosts that want scripting without V8's size and complexity.[^bellard][^changelog]

# What failed or stalled
- **Bus factor.** Nearly three years without an upstream release (2021–2024) pushed users to forks; the QuickJS-ng maintainers say both projects intended to merge but have since diverged.[^ng-discussion]
- **Performance ceiling.** Without a JIT, CPU-bound JS runs well below V8; Shopify measured JS-in-Wasm at about 3x slower than Rust-in-Wasm, acceptable only because functions are short.[^shopify]
- **Competition inside Wasm.** For full web-API runtimes in WASI 0.2 components, the Bytecode Alliance ecosystem also backs SpiderMonkey-based StarlingMonkey, which is larger but more complete (see [SpiderMonkey](/runtimes/spidermonkey.md)).

# By era
## E1
- Initial release (2019).[^bellard]
## E2
- Upstream pause after March 2021; Javy started for Shopify Functions.[^changelog][^igalia-javy]
## E3
- Javy production use and move to Bytecode Alliance; QuickJS-ng fork; Bellard's 2024-01-13 release.[^shopify][^javy-ba][^ng-site][^changelog]
## E4
- 2025-04-26 release; MicroQuickJS (December 2025); bytecode-to-Wasm research (2026).[^changelog][^mquickjs][^igalia-javy]

# Lessons
- Constraint-driven platforms (Wasm, microcontrollers) reward small interpreters over fast JITs.
- Single-author infrastructure needs a fork path; QuickJS-ng kept dependents moving during the pause.
- "Fast enough within a hard time budget" (5 ms) is a different success criterion from benchmark peak speed.

# Related
- [Hermes](/runtimes/hermes.md), [SpiderMonkey](/runtimes/spidermonkey.md), [Wasmtime](/runtimes/wasmtime.md), [V8](/runtimes/v8.md)
- [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md), [WASI and the component model](/ideas/platforms-and-portability/wasi-and-component-model.md)
- [Bytecode Alliance founded](/events/2019-11-bytecode-alliance-founded.md)

[^bellard]: bellard.org: QuickJS JavaScript Engine — https://bellard.org/quickjs/
[^changelog]: QuickJS Changelog mirror — https://github.com/quickjs-zh/QuickJS/blob/master/Changelog
[^hn-2024]: Hacker News: QuickJS 2024-01-13 — https://news.ycombinator.com/item?id=39308730
[^ng-discussion]: quickjs-ng discussion #258: quickjs vs quickjs-ng — https://github.com/quickjs-ng/quickjs/discussions/258
[^ng-site]: QuickJS-NG — https://quickjs-ng.github.io/quickjs/
[^shopify]: Shopify Engineering: Bringing JavaScript to WebAssembly for Shopify Functions — https://shopify.engineering/javascript-in-webassembly-for-shopify-functions
[^javy-ba]: Bytecode Alliance: Welcoming Javy — https://bytecodealliance.org/articles/javy-hosted-project
[^igalia-javy]: Igalia: Five years of JavaScript on WebAssembly — https://blogs.igalia.com/compilers/2026/05/25/five-years-of-javascript-on-webassembly/
[^mquickjs]: GitHub: bellard/mquickjs — https://github.com/bellard/mquickjs
[^phoronix-mqjs]: Phoronix: Micro QuickJS — https://www.phoronix.com/news/Micro-QuickJS
