---
type: Event
title: Docker+Wasm technical preview
description: Docker shipped a technical preview that ran WebAssembly modules through containerd with a WasmEdge shim, the peak of the "Wasm will replace containers" narrative; by Docker Desktop 4.55 the feature was deprecated.
event_kind: release
date: 2022-10-24
era: E3
impact: mixed
languages: [languages/rust]
runtimes: [runtimes/wasmedge, runtimes/wasmtime]
ideas: [ideas/platforms-and-portability/server-side-wasm, ideas/platforms-and-portability/wasi-and-component-model]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: docker-wasm
    resource: https://www.docker.com/blog/docker-wasm-technical-preview/
    title: "Docker blog: Introducing the Docker+Wasm Technical Preview (2022-10-24)"
    author: org:docker
  - id: tc-docker-wasm
    resource: https://techcrunch.com/2022/10/24/docker-launches-a-first-preview-of-its-webassembly-support/
    title: "TechCrunch: Docker launches a first preview of its WebAssembly tooling (2022-10-24)"
  - id: hykes-tweet
    resource: https://twitter.com/solomonstre/status/1111004913222324225
    title: "Solomon Hykes on Twitter: 'If WASM+WASI existed in 2008, we wouldn't have needed to created Docker' (2019-03-27)"
  - id: docker-wasm-docs
    resource: https://docs.docker.com/desktop/features/wasm/
    title: "Docker docs: Wasm workloads (deprecated, no longer actively maintained)"
    author: org:docker
---

# What happened
On 2022-10-24 Docker released a technical preview of Docker Desktop that could run Wasm/WASI modules packaged as OCI artifacts. It used containerd with a WasmEdge shim in place of `runc`, selected with `--runtime=io.containerd.wasmedge.v1 --platform=wasi/wasm32`. Docker joined the Bytecode Alliance as a voting member at the same time.[^docker-wasm][^tc-docker-wasm] Docker co-founder Solomon Hykes had framed the excitement in 2019: if WASM+WASI had existed in 2008, Docker would not have been needed.[^hykes-tweet]

# Why it matters
This was the high-water mark of the "Wasm as the next container" thesis. More shims followed (Spin, Slight, Wasmtime), and the feature reached beta in Desktop 4.15.[^docker-wasm] Adoption never followed. WASI preview 1 lacked sockets and threads. Mainstream languages compiled poorly to WASI. Containers were already good enough. Docker's documentation now marks Wasm workloads deprecated, says they will be removed in a future release, and notes that they are no longer actively maintained (deprecation noted in the Desktop 4.55 release notes).[^docker-wasm-docs] Server-side Wasm moved toward edge functions and plugin hosting instead.

# Related
- [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md), [WASI and the component model](/ideas/platforms-and-portability/wasi-and-component-model.md)
- [WasmEdge](/runtimes/wasmedge.md), [Wasmtime](/runtimes/wasmtime.md)
- [Akamai acquires Fermyon](/events/2025-12-akamai-acquires-fermyon.md)

[^docker-wasm]: Docker blog: Introducing the Docker+Wasm Technical Preview — https://www.docker.com/blog/docker-wasm-technical-preview/
[^tc-docker-wasm]: TechCrunch: Docker launches a first preview of its WebAssembly tooling — https://techcrunch.com/2022/10/24/docker-launches-a-first-preview-of-its-webassembly-support/
[^hykes-tweet]: Solomon Hykes on Twitter (2019-03-27) — https://twitter.com/solomonstre/status/1111004913222324225
[^docker-wasm-docs]: Docker docs: Wasm workloads — https://docs.docker.com/desktop/features/wasm/
