---
type: Event
title: Akamai acquires Fermyon
description: Akamai bought Fermyon, the best-known server-side WebAssembly startup (Spin, SpinKube), to compete with Cloudflare Workers; the "Wasm replaces containers" thesis ended as an edge-functions feature of a CDN.
event_kind: acquisition
date: 2025-12-01
era: E4
impact: mixed
languages: [languages/rust]
runtimes: [runtimes/wasmtime]
ideas: [ideas/platforms-and-portability/server-side-wasm, ideas/platforms-and-portability/edge-isolates, ideas/platforms-and-portability/wasi-and-component-model]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: nww-fermyon
    resource: https://www.networkworld.com/article/4099424/akamai-acquires-fermyon-for-edge-computing-as-webassembly-comes-of-age.html
    title: "Network World: Akamai acquires Fermyon for edge computing as WebAssembly comes of age (Dec 2025)"
  - id: devclass-fermyon
    resource: https://www.devclass.com/containers/2025/12/04/akamai-buys-fermyon-for-wasm-based-serverless-functions-a-possible-answer-to-cloudflare-workers/1732513
    title: "DevClass: Akamai buys Fermyon for Wasm-based serverless functions — a possible answer to Cloudflare Workers (2025-12-04)"
  - id: spin-cncf
    resource: https://www.cncf.io/projects/spin/
    title: "CNCF: Spin (Sandbox, accepted 2025-01-21)"
    author: org:cncf
---

# What happened
On 2025-12-01 Akamai announced it had acquired Fermyon. The price was not disclosed.[^nww-fermyon][^devclass-fermyon] Fermyon was founded in 2021 by Matt Butcher and Radu Matei. It built Spin, a developer framework for WASI-based serverless functions, and had already been running "Fermyon Wasm Functions" on Akamai's network since March 2025.[^devclass-fermyon] Spin had been contributed to the CNCF Sandbox in January 2025, so the open-source project was protected before the exit.[^spin-cncf] Fermyon staff joined Akamai and committed to continue Spin, SpinKube and Wasmtime work.[^nww-fermyon]

# Why it matters
Fermyon was the flagship startup for "WebAssembly is the next cloud compute primitive". It ended up as a CDN's answer to Cloudflare Workers, which confirms that server-side Wasm's product-market fit is edge functions and plugin sandboxes, not replacing containers. Docker's Wasm feature was deprecated at around the same time. The pattern resembles JS runtimes: technically strong platform-shift startups get absorbed by incumbents with distribution.

# Related
- [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md), [Edge isolates](/ideas/platforms-and-portability/edge-isolates.md)
- [Wasmtime](/runtimes/wasmtime.md)
- [Docker+Wasm preview](/events/2022-10-docker-wasm-preview.md)

[^nww-fermyon]: Network World: Akamai acquires Fermyon — https://www.networkworld.com/article/4099424/akamai-acquires-fermyon-for-edge-computing-as-webassembly-comes-of-age.html
[^devclass-fermyon]: DevClass: Akamai buys Fermyon — https://www.devclass.com/containers/2025/12/04/akamai-buys-fermyon-for-wasm-based-serverless-functions-a-possible-answer-to-cloudflare-workers/1732513
[^spin-cncf]: CNCF: Spin — https://www.cncf.io/projects/spin/
