---
type: Runtime
title: WasmEdge
description: C++ WebAssembly runtime from Second State, the first Wasm runtime in the CNCF (2021); it rode the "Wasm containers" wave via the 2022 Docker+Wasm preview and then pivoted to portable LLM inference (wasi-nn, LlamaEdge), but remains pre-1.0 in 2026 and lost its Docker showcase when Docker deprecated Wasm workloads (Dec 2025).
tags: [webassembly, wasi, cncf, cloud-native, edge, llm-inference, docker]
runtime_kind: wasm-runtime
languages: [languages/rust, languages/c, languages/cpp, languages/javascript, languages/go]
ideas:
  - ideas/platforms-and-portability/server-side-wasm
  - ideas/platforms-and-portability/wasi-and-component-model
  - ideas/runtime-performance/aot-native-images
runtimes: [runtimes/llvm, runtimes/quickjs]
first_released: 2019
steward: Second State / CNCF (Sandbox)
governance: foundation
trajectory: niche
adoption_signals:
  github_stars: { value: 10812, as_of: 2026-10-03 }
  latest_version: { value: "0.17.2", as_of: 2026-10-02 }
era_momentum: { E1: up, E2: up, E3: up, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: we-gh
    resource: https://github.com/WasmEdge/WasmEdge
    title: "WasmEdge GitHub repository (stars via GitHub API, 2026-10-03; created 2019-11-29)"
  - id: we-releases
    resource: https://github.com/WasmEdge/WasmEdge/releases
    title: "WasmEdge GitHub releases (0.14.0 2024-05-23; 0.15.0 2025-08-04; 0.16.0 2025-12-30; 0.17.0 2026-05-18; 0.17.2 2026-10-02)"
  - id: we-cncf
    resource: https://www.secondstate.io/articles/wasmedge-joins-cncf/
    title: "Second State: WasmEdge (formerly SSVM) is now a CNCF project (2021)"
    author: org:second-state
  - id: we-cncf-page
    resource: https://presentations.cncf.io/projects/wasmedge-runtime/
    title: "CNCF: WasmEdge Runtime (Sandbox, accepted 2021-04-28)"
    author: org:cncf
  - id: docker-wasm
    resource: https://www.docker.com/blog/docker-wasm-technical-preview/
    title: "Docker blog: Introducing the Docker+Wasm Technical Preview (2022-10-24)"
    author: org:docker
  - id: tc-docker-wasm
    resource: https://techcrunch.com/2022/10/24/docker-launches-a-first-preview-of-its-webassembly-support/
    title: "TechCrunch: Docker launches a first preview of its WebAssembly support (2022-10-24)"
  - id: docker-wasm-deprecated
    resource: https://docs.docker.com/desktop/features/wasm/
    title: "Docker docs: Wasm workloads (deprecated, no longer actively maintained)"
    author: org:docker
  - id: docker-455
    resource: https://docs.docker.com/desktop/release-notes/
    title: "Docker Desktop release notes (4.55.0, 2025-12-16: Wasm workloads deprecation notice)"
    author: org:docker
  - id: we-llm-docs
    resource: https://wasmedge.org/docs/develop/rust/wasinn/llm_inference/
    title: "WasmEdge docs: LLM inference (wasi-nn, llama.cpp backend)"
  - id: llamaedge
    resource: https://www.secondstate.io/LlamaEdge/
    title: "Second State: LlamaEdge — run LLMs locally on Rust & WasmEdge"
    author: org:second-state
  - id: tns-llm
    resource: https://thenewstack.io/demo-use-webassembly-to-run-llms-on-your-own-device-with-wasmedge/
    title: "The New Stack: Use WebAssembly to run LLMs on your own device with WasmEdge"
---

# Summary
WasmEdge (originally SSVM, from Second State) was the CNCF's first WebAssembly runtime, accepted to the Sandbox on 2021-04-28.[^we-cncf][^we-cncf-page] It is written in C++ with an LLVM-based AOT compiler and positioned for "cloud native and edge" workloads. Its high point was October 2022, when Docker chose it as the runtime behind the Docker+Wasm technical preview: a containerd shim that runs Wasm modules from OCI images in place of runc.[^docker-wasm][^tc-docker-wasm] When the "Wasm replaces containers" narrative faded, WasmEdge pivoted to portable AI inference — wasi-nn with a llama.cpp backend and the LlamaEdge OpenAI-compatible server built on Rust and WasmEdge.[^we-llm-docs][^llamaedge] Docker deprecated Wasm workloads in Desktop 4.55 (2025-12-16), stating the feature "is no longer actively maintained."[^docker-455][^docker-wasm-deprecated] WasmEdge is still at 0.17.x/0.18-rc in October 2026 and has stayed in the CNCF Sandbox.[^we-releases] Verdict: **niche** — real engineering, but a runtime whose two big stories (Docker containers, then local LLMs) both moved on without it as the central player.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-11 | SSVM / WasmEdge repository created[^we-gh] | + |
| E2 | 2021-04-28 | Accepted to CNCF Sandbox (announced June 2021)[^we-cncf][^we-cncf-page] | + |
| E3 | 2022-10-24 | Docker+Wasm technical preview uses a WasmEdge containerd shim ([event](/events/2022-10-docker-wasm-preview.md))[^docker-wasm] | + |
| E3 | 2023 | Pivot narrative: run Llama-family LLMs in Wasm via wasi-nn[^tns-llm] | mixed |
| E3 | 2024-05-23 | WasmEdge 0.14.0[^we-releases] | + |
| E4 | 2025-08-04 | WasmEdge 0.15.0[^we-releases] | + |
| E4 | 2025-12-16 | Docker Desktop 4.55 deprecates Wasm workloads[^docker-455][^docker-wasm-deprecated] | − |
| E4 | 2025-12-30 | WasmEdge 0.16.0[^we-releases] | + |
| E4 | 2026-05-18 | WasmEdge 0.17.0; 0.17.2 and 0.18.0-rc.1 in early Oct 2026 with llama.cpp upgrades[^we-releases] | mixed |

# Ideas it bet on
| Idea | Outcome for WasmEdge |
|---|---|
| [Wasm as a container alternative](/ideas/platforms-and-portability/server-side-wasm.md) | Failed to go mainstream; Docker integration deprecated[^docker-wasm-deprecated] |
| [WASI / Component Model](/ideas/platforms-and-portability/wasi-and-component-model.md) | Followed rather than led (Wasmtime is the reference) |
| LLVM AOT compilation of Wasm | Succeeded technically (performance focus) |
| wasi-nn / portable LLM inference | Unproven — overtaken by native local-LLM tools; little public adoption data |
| JS via embedded QuickJS | Niche |

# What succeeded
- **First mover in cloud-native Wasm**: first Wasm runtime in CNCF, and the runtime Docker picked for its 2022 preview, which gave server-side Wasm its most mainstream moment.[^we-cncf][^docker-wasm]
- **Portability story for AI**: LlamaEdge apps run across Linux, macOS, x86, Arm and NVIDIA GPUs from one Wasm binary.[^llamaedge]
- **Sustained releases** through 2026.[^we-releases]

# What failed or stalled
- **Docker+Wasm** never left preview/beta status and was deprecated in December 2025; Docker shipped seven Wasm shims (WasmEdge, Wasmtime, Wasmer, Spin, Slight, Lunatic, WWS), so WasmEdge was not even exclusive.[^docker-wasm-deprecated]
- **No 1.0** seven years after the first release.[^we-releases]
- **LLM pivot vs. native tools**: local inference consolidated on native runtimes; there is no evidence (unverified) that Wasm-based inference won significant share.
- **CNCF maturity**: still listed at Sandbox level five years after acceptance.[^we-cncf-page]

# By era
## E1
SSVM created for blockchain/serverless use; Second State's commercial context.[^we-gh]
## E2
Renamed WasmEdge; CNCF Sandbox (2021).[^we-cncf]
## E3
Docker+Wasm preview (Oct 2022) — peak visibility; LLM-in-Wasm demos (2023).[^docker-wasm][^tns-llm]
## E4
Docker deprecation (Dec 2025); continued 0.x releases focused on AI plugins.[^docker-455][^we-releases]

# Lessons
- Being chosen for a big partner's preview is not adoption; when the partner loses interest the halo disappears.
- A runtime pivoting to each new hype wave (edge → containers → LLMs) without becoming the standard in any one of them stays niche.
- In the Wasm runtime market, the standards reference implementation (Wasmtime) captured the durable embedder base.

# Related
- [Wasmtime](/runtimes/wasmtime.md), [Wasmer](/runtimes/wasmer.md), [QuickJS](/runtimes/quickjs.md), [LLVM](/runtimes/llvm.md)
- [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md), [WASI and the Component Model](/ideas/platforms-and-portability/wasi-and-component-model.md)

[^we-gh]: WasmEdge GitHub repository — https://github.com/WasmEdge/WasmEdge
[^we-releases]: WasmEdge GitHub releases — https://github.com/WasmEdge/WasmEdge/releases
[^we-cncf]: Second State: WasmEdge is now a CNCF project — https://www.secondstate.io/articles/wasmedge-joins-cncf/
[^we-cncf-page]: CNCF: WasmEdge Runtime — https://presentations.cncf.io/projects/wasmedge-runtime/
[^docker-wasm]: Docker blog: Introducing the Docker+Wasm Technical Preview — https://www.docker.com/blog/docker-wasm-technical-preview/
[^tc-docker-wasm]: TechCrunch: Docker launches a first preview of its WebAssembly support — https://techcrunch.com/2022/10/24/docker-launches-a-first-preview-of-its-webassembly-support/
[^docker-wasm-deprecated]: Docker docs: Wasm workloads — https://docs.docker.com/desktop/features/wasm/
[^docker-455]: Docker Desktop release notes — https://docs.docker.com/desktop/release-notes/
[^we-llm-docs]: WasmEdge docs: LLM inference — https://wasmedge.org/docs/develop/rust/wasinn/llm_inference/
[^llamaedge]: Second State: LlamaEdge — https://www.secondstate.io/LlamaEdge/
[^tns-llm]: The New Stack: Use WebAssembly to run LLMs on your own device with WasmEdge — https://thenewstack.io/demo-use-webassembly-to-run-llms-on-your-own-device-with-wasmedge/
