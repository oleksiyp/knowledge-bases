---
type: Runtime
title: SpiderMonkey
description: Mozilla's JavaScript and WebAssembly engine; technically strong (Warp in 2020, first to ship Temporal in 2025) and given a second life inside Wasm as StarlingMonkey, but tied to a browser whose share fell below 3% and a steward that cut a quarter of its staff in 2020.
tags: [javascript, webassembly, jit, mozilla, firefox, browser-engine, starlingmonkey]
runtime_kind: js-runtime
languages: [languages/javascript, languages/typescript]
steward: Mozilla Corporation
governance: single-vendor
first_released: 1996
trajectory: declining
ideas: [ideas/runtime-performance/js-engine-tiering, ideas/platforms-and-portability/webassembly-in-the-browser, ideas/platforms-and-portability/wasi-and-component-model, ideas/platforms-and-portability/server-side-wasm, ideas/tooling-and-ecosystem/tc39-proposal-outcomes]
adoption_signals:
  firefox_browser_share_pct: { value: 2.8, as_of: 2026-09, note: "StatCounter worldwide, all platforms" }
era_momentum: { E1: down, E2: down, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: warp
    resource: https://hacks.mozilla.org/2020/11/warp-improved-js-performance-in-firefox-83/
    title: "Mozilla Hacks: Warp — Improved JS performance in Firefox 83 (Nov 2020)"
    author: org:mozilla
  - id: layoffs
    resource: https://www.ghacks.net/2020/08/11/mozilla-lays-off-250-employees-in-massive-company-reorganization/
    title: "gHacks: Mozilla lays off 250 employees in massive company reorganization (2020-08-11)"
  - id: statcounter
    resource: https://gs.statcounter.com/browser-market-share
    title: "StatCounter: Browser market share worldwide (September 2026)"
  - id: sm-newsletter
    resource: https://spidermonkey.dev/blog/2024/03/20/newletter-firefox-124-125.html
    title: "SpiderMonkey Newsletter (Firefox 124–125), March 2024"
    author: org:mozilla
  - id: temporal-s4
    resource: https://www.igalia.com/2026/03/13/Temporal-Reaches-Stage-4.html
    title: "Igalia: Temporal Reaches Stage 4 (2026-03-13; Firefox 139 shipped Temporal 2025-05-27)"
  - id: starlingmonkey
    resource: https://github.com/bytecodealliance/StarlingMonkey
    title: "Bytecode Alliance: StarlingMonkey — SpiderMonkey-based JS runtime for Wasm components"
    author: org:bytecode-alliance
  - id: tns-starling
    resource: https://thenewstack.io/spin-starlingmonkey-equals-javascript-for-webassembly/
    title: "The New Stack: Spin + StarlingMonkey equals JavaScript for WebAssembly"
  - id: mehta
    resource: https://blog.mozilla.org/en/mozilla/internet-policy/defending-an-open-web/
    title: "Mozilla blog: Defending an open web — what the Google search ruling means (Sept 2025)"
    author: org:mozilla
  - id: omg-ruling
    resource: https://www.omgubuntu.co.uk/2025/09/google-antitrust-ruling-firefox-search-deal
    title: "OMG! Ubuntu: Google can keep paying for Firefox search deal, judge rules (Sept 2025)"
  - id: i-prog
    resource: https://www.i-programmer.info/news/81-web-general/13941-mozilla-layoffs-the-fallout.html
    title: "I Programmer: Mozilla Layoffs — The Fallout (Aug 2020)"
---

# Summary
SpiderMonkey is the clearest case in this KB of a technically healthy runtime whose fate is set by its host product's economics. The engine kept improving — Warp (Firefox 83, November 2020) rebuilt the optimizing JIT on CacheIR and cut Google Docs load time by ~20%; Speedometer 3 work brought parallel GC marking (20–30% less GC time); and Firefox 139 was the first browser to ship Temporal (May 2025), ahead of Chrome.[^warp][^sm-newsletter][^temporal-s4] But Firefox's worldwide share was 2.8% in September 2026, Mozilla laid off 250 people (a quarter of staff) in August 2020, and the engine's funding depends on Google search payments that a US court allowed to continue in September 2025.[^statcounter][^layoffs][^omg-ruling] Its most interesting new role is outside the browser: StarlingMonkey, a SpiderMonkey build compiled to WebAssembly components, powers Fastly Compute's JS and Fermyon Spin's JS SDK.[^starlingmonkey][^tns-starling] Verdict: declining reach, steady engineering.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-08-11 | Mozilla lays off 250 staff (~25%); Servo team cut, Wasmtime/Rust contributors hit [^layoffs][^i-prog] | − |
| E2 | 2020-11 | Warp enabled in Firefox 83; Type Inference removed; 5–15% typical speedups [^warp] | + |
| E3 | 2024-03 | Speedometer 3 work: Proxy JIT specialisation, parallel marking (20–30% less GC time), faster small WasmGC arrays [^sm-newsletter] | + |
| E3 | 2024 | StarlingMonkey (Bytecode Alliance) targets WASI 0.2; used by Fastly Compute and Spin JS [^starlingmonkey][^tns-starling] | + |
| E4 | 2025-05-27 | Firefox 139 ships Temporal, the first engine to do so [^temporal-s4] | + |
| E4 | 2025-09 | US court remedy lets Google keep paying Mozilla for search default [^mehta][^omg-ruling] | + |
| E4 | 2026-03 | Temporal reaches TC39 Stage 4, validating SpiderMonkey's early implementation [^temporal-s4] | + |
| E4 | 2026-09 | Firefox at 2.8% worldwide page views [^statcounter] | − |

# Ideas it bet on
| Idea | Outcome for SpiderMonkey |
|---|---|
| CacheIR-driven optimizing JIT (Warp) — see [JS engine tiering](/ideas/runtime-performance/js-engine-tiering.md) | succeeded; simpler and faster than Ion+Type Inference |
| [WebAssembly in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md) (Mozilla co-created asm.js/Wasm) | succeeded as a standard, little benefit to Firefox share |
| JS engine compiled to Wasm components ([WASI and the component model](/ideas/platforms-and-portability/wasi-and-component-model.md)) | succeeding in niche (Fastly, Spin) |
| Early implementation of large TC39 proposals ([TC39 outcomes](/ideas/tooling-and-ecosystem/tc39-proposal-outcomes.md)) | succeeded (Temporal first) |

# What succeeded
- **Simplification over cleverness.** Warp dropped the speculative Type Inference system and built MIR from CacheIR collected by baseline tiers, improving responsiveness and memory usage at once.[^warp]
- **Standards leadership.** Shipping Temporal first (with Igalia and Bloomberg contributors across engines) showed a small engine team can still lead language evolution.[^temporal-s4]
- **Portability.** SpiderMonkey's C++ codebase compiled to Wasm became the basis of StarlingMonkey/ComponentizeJS, the main way to run JavaScript in WASI 0.2 components.[^starlingmonkey]

# What failed or stalled
- **Market share.** Engine quality did not translate into browser share; Firefox fell to 2.8% worldwide in September 2026 as Chromium-based browsers multiplied.[^statcounter]
- **Steward capacity.** The 2020 layoffs removed the Servo team and many Rust/Wasmtime contributors; Mozilla also cut MDN writing and developer outreach.[^layoffs][^i-prog]
- **Funding fragility.** Mozilla publicly warned that a ban on Google search payments would threaten Firefox; the September 2025 remedy averted that, but the decision was under appeal.[^mehta][^omg-ruling]
- **No server or embedded foothold** comparable to V8 (Node/Deno/Workers) or JSC (Bun) outside the Wasm niche.

# By era
## E1
- August 2020 layoffs; Firefox already losing share to Chromium browsers.[^layoffs]
## E2
- Warp ships (Firefox 83).[^warp]
## E3
- Speedometer 3 optimisations; StarlingMonkey for WASI 0.2.[^sm-newsletter][^starlingmonkey]
## E4
- Temporal first in Firefox 139 (May 2025); Google remedy keeps Mozilla's funding; Temporal Stage 4 (March 2026).[^temporal-s4][^omg-ruling]

# Lessons
- An engine's survival depends on its host product's distribution and business model more than on its technical merit.
- Engines written in portable C++ can find new life as Wasm guest runtimes.
- Engine teams that do the hard standards work first (Temporal) shape the language even with small market share.

# Related
- [V8](/runtimes/v8.md), [JavaScriptCore](/runtimes/javascriptcore.md), [QuickJS](/runtimes/quickjs.md), [Wasmtime](/runtimes/wasmtime.md)
- [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md), [WASI and the component model](/ideas/platforms-and-portability/wasi-and-component-model.md)
- [Temporal reaches Stage 4](/events/2026-03-temporal-reaches-stage-4.md), [Bytecode Alliance founded](/events/2019-11-bytecode-alliance-founded.md)

[^warp]: Mozilla Hacks: Warp — Improved JS performance in Firefox 83 — https://hacks.mozilla.org/2020/11/warp-improved-js-performance-in-firefox-83/
[^layoffs]: gHacks: Mozilla lays off 250 employees — https://www.ghacks.net/2020/08/11/mozilla-lays-off-250-employees-in-massive-company-reorganization/
[^statcounter]: StatCounter: Browser market share worldwide — https://gs.statcounter.com/browser-market-share
[^sm-newsletter]: SpiderMonkey Newsletter (Firefox 124–125) — https://spidermonkey.dev/blog/2024/03/20/newletter-firefox-124-125.html
[^temporal-s4]: Igalia: Temporal Reaches Stage 4 — https://www.igalia.com/2026/03/13/Temporal-Reaches-Stage-4.html
[^starlingmonkey]: Bytecode Alliance: StarlingMonkey — https://github.com/bytecodealliance/StarlingMonkey
[^tns-starling]: The New Stack: Spin + StarlingMonkey equals JavaScript for WebAssembly — https://thenewstack.io/spin-starlingmonkey-equals-javascript-for-webassembly/
[^mehta]: Mozilla blog: Defending an open web — https://blog.mozilla.org/en/mozilla/internet-policy/defending-an-open-web/
[^omg-ruling]: OMG! Ubuntu: Google can keep paying for Firefox search deal — https://www.omgubuntu.co.uk/2025/09/google-antitrust-ruling-firefox-search-deal
[^i-prog]: I Programmer: Mozilla Layoffs — The Fallout — https://www.i-programmer.info/news/81-web-general/13941-mozilla-layoffs-the-fallout.html
