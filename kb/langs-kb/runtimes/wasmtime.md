---
type: Runtime
title: Wasmtime
description: The Bytecode Alliance's Rust-based, Cranelift-powered WebAssembly runtime and reference implementation of WASI and the Component Model; it became the de-facto standard server-side Wasm engine (Fastly, Shopify, Fermyon/Akamai, Microsoft) with monthly releases and LTS lines, even as the broader "Wasm replaces containers" thesis underdelivered.
tags: [webassembly, wasi, component-model, cranelift, rust, bytecode-alliance, sandboxing]
runtime_kind: wasm-runtime
languages: [languages/rust, languages/c, languages/cpp, languages/go, languages/python, languages/javascript, languages/assemblyscript]
ideas:
  - ideas/platforms-and-portability/wasi-and-component-model
  - ideas/platforms-and-portability/server-side-wasm
  - ideas/platforms-and-portability/edge-isolates
  - ideas/platforms-and-portability/webassembly-in-the-browser
  - ideas/memory-safety/ownership-and-borrowing
runtimes: [runtimes/cranelift]
first_released: 2019
steward: Bytecode Alliance
governance: foundation
trajectory: growing
adoption_signals:
  github_stars: { value: 18684, as_of: 2026-10-03 }
  latest_major: { value: 49, as_of: 2026-09 }
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: wt-gh
    resource: https://github.com/bytecodealliance/wasmtime
    title: "Wasmtime GitHub repository (stars via GitHub API, 2026-10-03)"
  - id: wt-releases
    resource: https://github.com/bytecodealliance/wasmtime/releases
    title: "Wasmtime GitHub releases (v36.0.0 2025-08-20; v37.0.0 2025-09-20; v49.0.2 2026-10-02)"
  - id: wt-10
    resource: https://bytecodealliance.org/articles/wasmtime-1-0-fast-safe-and-production-ready
    title: "Bytecode Alliance: Wasmtime Reaches 1.0 — Fast, Safe and Production Ready! (2022-09-20)"
    author: org:bytecode-alliance
  - id: wt-10-devclass
    resource: https://www.devclass.com/development/2022/09/21/wasmtime-10-released-webassembly-outside-the-browser-but-is-it-really-production-ready/1624155
    title: "DevClass: Wasmtime 1.0 released — but is it really production-ready? (2022-09-21)"
  - id: wt-security
    resource: https://bytecodealliance.org/articles/security-and-correctness-in-wasmtime
    title: "Bytecode Alliance: Security and Correctness in Wasmtime"
    author: org:bytecode-alliance
  - id: wt-lts
    resource: https://bytecodealliance.org/articles/wasmtime-lts
    title: "Bytecode Alliance: Wasmtime LTS Releases"
    author: org:bytecode-alliance
  - id: wt-lts-rfc
    resource: https://github.com/bytecodealliance/rfcs/blob/main/accepted/wasmtime-lts.md
    title: "Bytecode Alliance RFC: Wasmtime LTS (every 12th release, 24 months)"
  - id: ba-founded
    resource: https://hacks.mozilla.org/2019/11/announcing-the-bytecode-alliance/
    title: "Mozilla Hacks: Announcing the Bytecode Alliance (2019-11-12)"
    author: org:mozilla
  - id: wasi-030
    resource: https://github.com/WebAssembly/WASI/releases/tag/v0.3.0
    title: "WebAssembly/WASI: v0.3.0 release — native async (2026-06-11)"
  - id: wasi-03-wt37
    resource: https://progosling.com/en/dev-digest/2026-02/wasi-0-3-wasmtime-37-native-async
    title: "progosling: WASI 0.3 previews land in Wasmtime 37+"
  - id: infoworld-wasix
    resource: https://www.infoworld.com/article/2338660/wasix-undermines-webassembly-system-interface-spec-bytecode-alliance-says.html
    title: "InfoWorld: WASIX undermines WASI spec, Bytecode Alliance says (2023-06-21)"
  - id: nww-fermyon
    resource: https://www.networkworld.com/article/4099424/akamai-acquires-fermyon-for-edge-computing-as-webassembly-comes-of-age.html
    title: "Network World: Akamai acquires Fermyon (2025-12)"
---

# Summary
Wasmtime is the success story inside the mixed story of server-side WebAssembly. Started at Mozilla and moved under the Bytecode Alliance when that was founded in November 2019 (Mozilla, Fastly, Intel, Red Hat), it reached 1.0 on 2022-09-20 with production users including Shopify, Fastly, DFINITY, Fermyon, Embark, SingleStore and Microsoft, and per-module instantiation for SpiderMonkey.wasm cut from ~2 ms to 5 µs.[^ba-founded][^wt-10] It has since shipped a major version every month (v49 by September 2026), added an LTS channel (every 12th release, supported 24 months; v36 is current LTS), and serves as the reference implementation for WASI 0.2 (2024) and WASI 0.3's native async (previews from Wasmtime 37 in Sept 2025; WASI 0.3.0 released 2026-06-11).[^wt-releases][^wt-lts][^wasi-03-wt37][^wasi-030] Verdict: **succeeding as infrastructure**; its ceiling is set by how much the market wants server-side Wasm, which by 2026 means plugins, edge functions and sandboxes rather than replacing containers.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-03 | WASI announced with Wasmtime as the first implementation | + |
| E1 | 2019-11-12 | Bytecode Alliance founded ([event](/events/2019-11-bytecode-alliance-founded.md))[^ba-founded] | + |
| E2 | 2021–2022 | Cranelift regalloc2 and new backend: ~5% and ~22% runtime gains[^wt-10] | + |
| E3 | 2022-09-20 | Wasmtime 1.0; monthly major releases thereafter[^wt-10] | + |
| E3 | 2023-06 | Bytecode Alliance rejects Wasmer's WASIX as "a fork of WASI"[^infoworld-wasix] | mixed |
| E3 | 2024-01 | WASI 0.2 / Component Model stable; Wasmtime implements it ([event](/events/2024-01-wasi-0-2.md)) | + |
| E4 | 2025 | LTS channel adopted, 24.0 retroactively LTS; 36.0 (2025-08-20) next LTS[^wt-lts][^wt-releases] | + |
| E4 | 2025-09-20 | Wasmtime 37 with WASI 0.3 previews (native async `stream`/`future`)[^wasi-03-wt37][^wt-releases] | + |
| E4 | 2025-12 | Akamai acquires Fermyon, a major Wasmtime user/contributor ([event](/events/2025-12-akamai-acquires-fermyon.md))[^nww-fermyon] | mixed |
| E4 | 2026-06-11 | WASI 0.3.0 released[^wasi-030] | + |
| E4 | 2026-10-02 | v49.0.2 / LTS v36.0.17 fix eight security advisories[^wt-releases] | mixed |

# Ideas it bet on
| Idea | Outcome for Wasmtime |
|---|---|
| [WASI and the Component Model](/ideas/platforms-and-portability/wasi-and-component-model.md) | Shipped (0.2, 0.3); adoption outside the Alliance's own circle still modest |
| [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md) | Mixed — strong in plugins/edge, weak as container replacement |
| Cranelift (fast, verifiable codegen) instead of LLVM | Succeeded — fast compile, formal-verification work on lowering rules[^wt-security] |
| Standards-only, no proprietary extensions | Succeeded in keeping the spec unified; cost speed of POSIX-style features (see WASIX)[^infoworld-wasix] |
| Rust for a security-critical runtime | Succeeded; fuzzing and verification emphasised[^wt-security] |

# What succeeded
- **Production credibility.** At 1.0 Shopify reported ~50% better execution performance and Fastly a 72–163% requests-per-second increase after moving to Wasmtime.[^wt-10]
- **Security engineering.** Continuous fuzzing, Cranelift ISLE lowering rules amenable to verification, and a published security process made it the conservative choice for multi-tenant hosts.[^wt-security]
- **Predictable cadence.** Monthly majors plus an LTS line answered the "is it really production-ready?" question raised at 1.0.[^wt-10-devclass][^wt-lts-rfc]
- **Reference role.** Every WASI milestone (0.2 in 2024, 0.3 in 2025–26) landed in Wasmtime first.[^wasi-03-wt37]

# What failed or stalled
- **Slow standards.** WASI took from 2019 to 2024 to reach a stable 0.2 and until mid-2026 for native async; meanwhile Wasmer shipped WASIX and many developers chose containers.[^infoworld-wasix][^wasi-030]
- **Narrow market.** The major commercial Wasm platform built on Wasmtime (Fermyon) ended as an acquisition by Akamai rather than an independent success.[^nww-fermyon]
- **Monthly majors** mean frequent API breaks for embedders; the LTS channel was added in response.[^wt-lts-rfc]
- **Security advisories** keep appearing (eight fixed on 2026-10-02), a reminder that sandboxing runtimes are high-value targets.[^wt-releases]

# By era
## E1
WASI announced; Bytecode Alliance founded around Wasmtime, Cranelift, Lucet and WAMR.[^ba-founded]
## E2
Lucet folded into Wasmtime; Cranelift backend rewrite; Component Model design begins.
## E3
1.0 (Sept 2022), WASIX dispute (2023), WASI 0.2 (Jan 2024).[^wt-10][^infoworld-wasix]
## E4
LTS policy, WASI 0.3 previews (Wasmtime 37) and WASI 0.3.0 (June 2026), Winch baseline compiler gaining features (exception handling in v49).[^wt-lts][^wasi-030][^wt-releases]

# Lessons
- A foundation-owned reference runtime is a strong way to keep a standard unified, but it ties the runtime's pace to standards politics.
- Security and predictability, not raw speed, won embedders such as CDNs and SaaS plugin hosts.
- Infrastructure success does not guarantee category success: Wasmtime thrived while "Wasm instead of containers" did not.

# Related
- [Wasmer](/runtimes/wasmer.md), [WasmEdge](/runtimes/wasmedge.md), [Cranelift](/runtimes/cranelift.md), [workerd](/runtimes/workerd-isolates.md)
- [Rust](/languages/rust.md)
- [WASI and the Component Model](/ideas/platforms-and-portability/wasi-and-component-model.md), [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md)

[^wt-gh]: Wasmtime GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/bytecodealliance/wasmtime
[^wt-releases]: Wasmtime GitHub releases — https://github.com/bytecodealliance/wasmtime/releases
[^wt-10]: Bytecode Alliance: Wasmtime Reaches 1.0 — https://bytecodealliance.org/articles/wasmtime-1-0-fast-safe-and-production-ready
[^wt-10-devclass]: DevClass: Wasmtime 1.0 released, but is it really production-ready? — https://www.devclass.com/development/2022/09/21/wasmtime-10-released-webassembly-outside-the-browser-but-is-it-really-production-ready/1624155
[^wt-security]: Bytecode Alliance: Security and Correctness in Wasmtime — https://bytecodealliance.org/articles/security-and-correctness-in-wasmtime
[^wt-lts]: Bytecode Alliance: Wasmtime LTS Releases — https://bytecodealliance.org/articles/wasmtime-lts
[^wt-lts-rfc]: Bytecode Alliance RFC: Wasmtime LTS — https://github.com/bytecodealliance/rfcs/blob/main/accepted/wasmtime-lts.md
[^ba-founded]: Mozilla Hacks: Announcing the Bytecode Alliance — https://hacks.mozilla.org/2019/11/announcing-the-bytecode-alliance/
[^wasi-030]: WebAssembly/WASI v0.3.0 release — https://github.com/WebAssembly/WASI/releases/tag/v0.3.0
[^wasi-03-wt37]: progosling: WASI 0.3 previews land in Wasmtime 37+ — https://progosling.com/en/dev-digest/2026-02/wasi-0-3-wasmtime-37-native-async
[^infoworld-wasix]: InfoWorld: WASIX undermines WASI spec, Bytecode Alliance says — https://www.infoworld.com/article/2338660/wasix-undermines-webassembly-system-interface-spec-bytecode-alliance-says.html
[^nww-fermyon]: Network World: Akamai acquires Fermyon — https://www.networkworld.com/article/4099424/akamai-acquires-fermyon-for-edge-computing-as-webassembly-comes-of-age.html
