---
type: Runtime
title: Wasmer
description: VC-backed WebAssembly runtime (Rust, pluggable Cranelift/LLVM/Singlepass backends) that chose speed and POSIX pragmatism (WASIX, Wasmer Edge) over the Bytecode Alliance's standards track; technically prolific (v7 in 2026) but commercially niche, and by 2026 repositioned as "universal compute built for AI" sandboxes.
tags: [webassembly, wasi, wasix, rust, edge, vc-backed, standards-conflict]
runtime_kind: wasm-runtime
languages: [languages/rust, languages/c, languages/cpp, languages/python, languages/javascript, languages/php, languages/go]
ideas:
  - ideas/platforms-and-portability/server-side-wasm
  - ideas/platforms-and-portability/wasi-and-component-model
  - ideas/platforms-and-portability/edge-isolates
  - ideas/platforms-and-portability/js-runtime-competition
runtimes: [runtimes/cranelift, runtimes/llvm, runtimes/quickjs]
first_released: 2019
steward: Wasmer Inc.
governance: single-vendor
trajectory: niche
adoption_signals:
  github_stars: { value: 21122, as_of: 2026-10-03 }
era_momentum: { E1: up, E2: up, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: wasmer-gh
    resource: https://github.com/wasmerio/wasmer
    title: "Wasmer GitHub repository (stars via GitHub API, 2026-10-03; created 2018-10-11)"
  - id: wasmer-releases
    resource: https://github.com/wasmerio/wasmer/releases
    title: "Wasmer GitHub releases (1.0 2021-01-05; 2.0 2021-06-16; 5.0 2024-10-29; 6.0 2025-04-24; 7.0 2026-01-28; 7.5 2026-10-01)"
  - id: devclass-30
    resource: https://devclass.com/2022/11/25/wasmer-3-0-released/
    title: "DevClass: Wasmer 3.0 released, now with native executables (2022-11-25)"
  - id: infoworld-wasix
    resource: https://www.infoworld.com/article/2338660/wasix-undermines-webassembly-system-interface-spec-bytecode-alliance-says.html
    title: "InfoWorld: WASIX undermines WebAssembly System Interface spec, Bytecode Alliance says (2023-06-21)"
  - id: hn-wasix
    resource: https://news.ycombinator.com/item?id=36447301
    title: "Hacker News: WASIX undermines WASI spec discussion (2023-06)"
  - id: edge-ga
    resource: https://wasmer.io/posts/wasmer-edge-beta-is-ga
    title: "Wasmer blog: Wasmer Edge (Beta) is now Generally Available (2023-10-05)"
    author: org:wasmer
  - id: edge-node
    resource: https://wasmer.io/posts/nodejs-support-in-wasmer-edge-beta
    title: "Wasmer blog: Announcing Node.js support on Wasmer Edge, powered by QuickJS (2026-08-31)"
    author: org:wasmer
  - id: wasmer-posts
    resource: https://wasmer.io/posts
    title: "Wasmer blog index (Edge.js 2026-03-17; Wasmer SDK local sandboxes for AI agents 2026-09-01)"
    author: org:wasmer
  - id: wasmer-home
    resource: https://wasmer.io/
    title: "Wasmer homepage: 'Universal compute. Built for AI' (checked 2026-10-03)"
    author: org:wasmer
  - id: wasmer-tm
    resource: https://wasmer.io/posts/wasmer-and-trademarks-extended
    title: "Wasmer blog: Wasmer and Trademarks (extended)"
    author: org:wasmer
  - id: yc-wasmer
    resource: https://www.ycombinator.com/companies/wasmer
    title: "Y Combinator: Wasmer company profile"
---

# Summary
Wasmer is the "move fast, ship POSIX" counterpart to [Wasmtime](/runtimes/wasmtime.md). Founded by Syrus Akbary (repository created October 2018, Y Combinator-backed), it shipped 1.0 in January 2021, pluggable compiler backends (Singlepass, Cranelift, LLVM), native-executable generation in 3.0 (Nov 2022), and majors 5.0 (Oct 2024), 6.0 (Apr 2025) and 7.0 (Jan 2026).[^wasmer-gh][^wasmer-releases][^devclass-30][^yc-wasmer] Its defining bet was WASIX (announced May 2023): a POSIX-like superset of WASI preview 1 with fork, threads and sockets, so Bash, Nginx or Redis could run unmodified. The Bytecode Alliance publicly called it "a fork of WASI" and the community feared fragmentation; WASIX was never adopted by the standards process, which went to the Component Model instead.[^infoworld-wasix][^hn-wasix] Wasmer's cloud, Wasmer Edge, went GA-as-beta in October 2023 and by 2026 the company was pitching "universal compute built for AI" — sandboxes for agents and Node.js apps via QuickJS.[^edge-ga][^wasmer-home][^edge-node] Verdict: **niche** — high engineering velocity and 21k stars, but on the losing side of the standards split and without evidence of a large commercial platform.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-10 | Wasmer repository created[^wasmer-gh] | + |
| E2 | 2021-01-05 | Wasmer 1.0[^wasmer-releases] | + |
| E2 | 2021-06-16 | Wasmer 2.0[^wasmer-releases] | + |
| E2 | 2022-03-21 | Controversy over Wasmer's earlier application to trademark "WebAssembly" (abandoned Sept 2020); Wasmer publishes an explanation[^wasmer-tm] | − |
| E3 | 2022-11 | Wasmer 3.0: `wasmer create-exe` native executables, WAPM integration[^devclass-30] | + |
| E3 | 2023-05-30 | WASIX announced as a WASI superset[^infoworld-wasix] | mixed |
| E3 | 2023-06-21 | Bytecode Alliance: WASIX is non-standard, "a fork of WASI"[^infoworld-wasix] | − |
| E3 | 2023-10-05 | Wasmer Edge (Beta) GA; 3 → 7 regions, free during beta[^edge-ga] | + |
| E4 | 2024-10-29 | Wasmer 5.0[^wasmer-releases] | + |
| E4 | 2025-04-24 | Wasmer 6.0[^wasmer-releases] | + |
| E4 | 2026-01-28 | Wasmer 7.0; later drops WAMR/Wasmi backends and Intel-macOS target[^wasmer-releases] | mixed |
| E4 | 2026-03-17 | Edge.js: running Node apps inside a Wasm sandbox[^wasmer-posts] | + |
| E4 | 2026-08-31 | Node.js support on Wasmer Edge via QuickJS (V8 "coming soon")[^edge-node] | mixed |

# Ideas it bet on
| Idea | Outcome for Wasmer |
|---|---|
| [WASIX / POSIX in Wasm](/ideas/platforms-and-portability/wasi-and-component-model.md) | Stalled — works in Wasmer's own stack, rejected by the standards track |
| [Server-side Wasm as container replacement](/ideas/platforms-and-portability/server-side-wasm.md) | Not realised; homepage still claims 107x faster startup than Docker[^wasmer-home] |
| [Wasm edge hosting (Wasmer Edge)](/ideas/platforms-and-portability/edge-isolates.md) | Small; still labelled Beta in 2026[^edge-node] |
| Pluggable backends (Singlepass/Cranelift/LLVM) | Succeeded technically |
| AI-agent sandboxes | Unproven (2026 pivot)[^wasmer-posts] |

# What succeeded
- **Breadth.** Wasmer runs Python, PHP/WordPress, Django and (via WASIX) unmodified POSIX programs that the standard WASI could not host for years.[^wasmer-home][^infoworld-wasix]
- **Velocity and embedding.** Many language SDKs and a long major-release cadence (1.0 → 7.5 in under six years).[^wasmer-releases]
- **Packaging ideas** — native executables from Wasm (3.0) and a package registry — anticipated later "single binary" fashions.[^devclass-30]

# What failed or stalled
- **Standards conflict.** Shipping WASIX outside the W3C/Bytecode Alliance process made Wasmer an outlier just as the ecosystem consolidated around WASI 0.2 and the Component Model.[^infoworld-wasix]
- **Community trust.** The resurfaced attempt to trademark "WebAssembly" (filed for a planned "WebAssembly Foundation", abandoned 2020) and the WASIX fight gave it a reputation for unilateral moves (see HN threads).[^wasmer-tm][^hn-wasix]
- **Commercial traction.** No public revenue or customer numbers for Wasmer Edge; even its Node.js support relies on QuickJS because V8-in-Wasm was not ready.[^edge-node]
- **Funding transparency.** Database figures for total funding conflict and no recent round could be confirmed (unverified).

# By era
## E1
Founded; early releases; positioned as "run any Wasm anywhere."[^wasmer-gh]
## E2
1.0 and 2.0 (2021); trademark controversy (2022).[^wasmer-releases][^wasmer-tm]
## E3
3.0 native executables, WASIX (May 2023) and the Bytecode Alliance rebuke, Wasmer Edge beta GA.[^devclass-30][^infoworld-wasix][^edge-ga]
## E4
Majors 5–7, Edge.js and Node.js on Edge, AI-sandbox repositioning.[^wasmer-releases][^wasmer-posts][^edge-node]

# Lessons
- In a standards-driven platform, a single vendor shipping a superset can win users short-term but isolates itself long-term.
- POSIX compatibility was the real user demand; the standards process was slow to provide it, which created the opening WASIX exploited.
- When the "replace containers" market fails to appear, Wasm vendors pivot to sandboxes for AI-generated code.

# Related
- [Wasmtime](/runtimes/wasmtime.md), [WasmEdge](/runtimes/wasmedge.md), [QuickJS](/runtimes/quickjs.md), [Cranelift](/runtimes/cranelift.md), [LLVM](/runtimes/llvm.md)
- [WASI and the Component Model](/ideas/platforms-and-portability/wasi-and-component-model.md), [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md)

[^wasmer-gh]: Wasmer GitHub repository — https://github.com/wasmerio/wasmer
[^wasmer-releases]: Wasmer GitHub releases — https://github.com/wasmerio/wasmer/releases
[^devclass-30]: DevClass: Wasmer 3.0 released — https://devclass.com/2022/11/25/wasmer-3-0-released/
[^infoworld-wasix]: InfoWorld: WASIX undermines WebAssembly System Interface spec, Bytecode Alliance says — https://www.infoworld.com/article/2338660/wasix-undermines-webassembly-system-interface-spec-bytecode-alliance-says.html
[^hn-wasix]: Hacker News: WASIX undermines WASI spec discussion — https://news.ycombinator.com/item?id=36447301
[^edge-ga]: Wasmer blog: Wasmer Edge (Beta) is now Generally Available — https://wasmer.io/posts/wasmer-edge-beta-is-ga
[^edge-node]: Wasmer blog: Node.js support on Wasmer Edge, powered by QuickJS — https://wasmer.io/posts/nodejs-support-in-wasmer-edge-beta
[^wasmer-posts]: Wasmer blog index — https://wasmer.io/posts
[^wasmer-home]: Wasmer homepage — https://wasmer.io/
[^wasmer-tm]: Wasmer blog: Wasmer and Trademarks (extended) — https://wasmer.io/posts/wasmer-and-trademarks-extended
[^yc-wasmer]: Y Combinator: Wasmer — https://www.ycombinator.com/companies/wasmer
