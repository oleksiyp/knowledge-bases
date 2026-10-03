---
type: Idea
title: Server-side WebAssembly (Wasm as the next container)
description: Running Wasm modules on servers and at the edge as a lighter, safer alternative to containers. It found real niches (CDN edge functions, plugin systems, sandboxed extensions), but the "containers killer" thesis failed. Krustlet went unmaintained, Docker deprecated its Wasm workloads, AKS retired WASI node pools, and the startups consolidated into CDNs.
area: platforms-and-portability
tags: [webassembly, wasi, serverless, edge, kubernetes, fermyon, spin, wasmcloud, docker, plugins]
outcome: mixed
maturity_2026: niche
origin_year: 2019
mainstream_year: null
languages: [languages/rust, languages/go, languages/javascript, languages/assemblyscript, languages/python]
runtimes: [runtimes/wasmtime, runtimes/wasmer, runtimes/wasmedge, runtimes/quickjs, runtimes/workerd-isolates]
related_ideas: [ideas/platforms-and-portability/wasi-and-component-model, ideas/platforms-and-portability/edge-isolates, ideas/platforms-and-portability/webassembly-in-the-browser, ideas/platforms-and-portability/ebpf-as-a-runtime]
era_momentum: { E1: up, E2: up, E3: flat, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: krustlet-intro
    resource: https://deislabs.io/posts/introducing-krustlet/
    title: "Deis Labs: Introducing Krustlet, the WebAssembly Kubelet (2020)"
    author: org:microsoft
  - id: krustlet-gh
    resource: https://github.com/krustlet/krustlet
    title: "Krustlet GitHub README: 'currently not actively maintained'"
  - id: docker-wasm-preview
    resource: https://www.docker.com/blog/docker-wasm-technical-preview/
    title: "Docker blog: Introducing the Docker+Wasm Technical Preview (2022-10-24)"
    author: org:docker
  - id: docker-wasm-deprecated
    resource: https://docs.docker.com/desktop/features/wasm/
    title: "Docker docs: Wasm workloads — 'deprecated and will be removed in a future Docker Desktop release'"
    author: org:docker
  - id: aks-wasi
    resource: https://github.com/Azure/AKS/issues/4770
    title: "Azure/AKS issue #4770: [Retirement] WASI node pools (preview) — no new pools from 2025-05-05"
    author: org:microsoft
  - id: f5-suborbital
    resource: https://www.linkedin.com/posts/connor-hicks-05044166_im-excited-to-share-that-suborbitals-team-activity-7090013360406040577-HiX4
    title: "Connor Hicks (LinkedIn): Suborbital's team & technology joining F5 (July 2023)"
  - id: devclass-fermyon
    resource: https://www.devclass.com/containers/2025/12/04/akamai-buys-fermyon-for-wasm-based-serverless-functions-a-possible-answer-to-cloudflare-workers/1732513
    title: "DevClass: Akamai buys Fermyon for Wasm-based serverless functions (2025-12-04)"
  - id: spin-cncf
    resource: https://www.cncf.io/projects/spin/
    title: "CNCF: Spin (Sandbox, accepted 2025-01-21)"
    author: org:cncf
  - id: wasmcloud-cncf
    resource: https://www.cncf.io/projects/wasmcloud/
    title: "CNCF: wasmCloud (Incubating since 2024-11)"
    author: org:cncf
  - id: shopify-javy
    resource: https://shopify.engineering/javascript-in-webassembly-for-shopify-functions
    title: "Shopify Engineering: Bringing JavaScript to WebAssembly for Shopify Functions"
  - id: fastly-compute
    resource: https://docs.fastly.com/products/compute
    title: "Fastly docs: Compute (Wasm at the edge, runs on Wasmtime)"
  - id: wasi-03
    resource: https://bytecodealliance.org/articles/WASI-0.3
    title: "Bytecode Alliance: WASI 0.3 Launched (2026-06-11)"
    author: org:bytecode-alliance
---

# Summary
**Mixed: a niche success and a failed revolution.** From 2019 to 2022, server-side Wasm was sold as the successor to containers. It offered microsecond cold starts, a capability sandbox and a polyglot build target, with WASI as its OS interface. Microsoft's Deis Labs built Krustlet (a Wasm kubelet, 2020), Docker shipped a Docker+Wasm technical preview (Oct 2022), and AKS offered WASI node pools. All three were later abandoned. Krustlet's README says it is "not actively maintained". Docker now says Wasm workloads are "deprecated and will be removed". AKS stopped allowing new WASI node pools on 2025-05-05 and pointed users to SpinKube.[^krustlet-gh][^docker-wasm-preview][^docker-wasm-deprecated][^aks-wasi] The startups consolidated into CDN and network vendors: Suborbital went to F5 (2023) and Fermyon to Akamai (Dec 2025).[^f5-suborbital][^devclass-fermyon] Where Wasm *did* stick is **edge functions** (Fastly Compute on Wasmtime, Akamai/Fermyon), **plugin and extension sandboxes** (Shopify Functions via Javy/QuickJS, Envoy filters, databases), and CNCF projects Spin and wasmCloud.[^fastly-compute][^shopify-javy][^spin-cncf][^wasmcloud-cncf]

# The idea
Compile any language to a WASI module, then run thousands of them per host with tiny memory footprints, near-instant startup and deny-by-default capabilities. Orchestrate them the way containers are orchestrated, through Kubernetes (Krustlet, runwasi/containerd shims, SpinKube) or through Wasm-native PaaS products (Fermyon Cloud, Wasmer Edge, Cosmonic). The selling points were density, security and portability across CPU architectures.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-11 | Bytecode Alliance founded ([event](/events/2019-11-bytecode-alliance-founded.md)) | + |
| E1 | 2020-04 | Deis Labs introduces Krustlet [^krustlet-intro] | + |
| E2 | 2021–2022 | Fermyon, Cosmonic, Suborbital and Second State raise venture rounds | + |
| E2/E3 | 2022-10-24 | Docker+Wasm technical preview ([event](/events/2022-10-docker-wasm-preview.md)) [^docker-wasm-preview] | + |
| E3 | 2023-07 | Suborbital team acquired by F5 [^f5-suborbital] | − |
| E3 | by 2024 | Krustlet unmaintained; maintainers move to SpinKube and others [^krustlet-gh] | − |
| E4 | 2025-01-21 | Spin accepted into CNCF Sandbox [^spin-cncf] | + |
| E4 | 2025-05-05 | AKS stops allowing new WASI node pools [^aks-wasi] | − |
| E4 | 2025-12 | Akamai acquires Fermyon ([event](/events/2025-12-akamai-acquires-fermyon.md)) [^devclass-fermyon] | mixed |
| E4 | 2025-12-16 | Docker Desktop 4.55 deprecates Wasm workloads [^docker-wasm-deprecated] | − |
| E4 | 2026-06-11 | WASI 0.3 adds native async, the missing piece for servers [^wasi-03] | + |

# Where it succeeded
- **CDN edge compute.** Fastly Compute runs customer Wasm on Wasmtime at scale.[^fastly-compute] Akamai bought Fermyon expressly to compete with Cloudflare Workers.[^devclass-fermyon]
- **Plugin sandboxes.** Shopify Functions run merchant logic as Wasm under strict limits. Javy (a QuickJS-based JS-to-Wasm toolchain) lets merchants write that logic in JavaScript.[^shopify-javy] Envoy/proxy-wasm, databases and editors use the same pattern of embedding untrusted extensions.
- **Foundation-hosted OSS outlived its companies.** Spin and wasmCloud kept shipping inside CNCF after vendor churn.[^spin-cncf][^wasmcloud-cncf]

# Where it failed or stalled
- **Kubernetes integration as a product**: Krustlet abandoned, AKS WASI pools retired, Docker+Wasm deprecated.[^krustlet-gh][^aks-wasi][^docker-wasm-deprecated]
- **Wasm-native PaaS as a business**: no independent server-side Wasm company reached scale. The exits went to F5 and Akamai on undisclosed terms.[^f5-suborbital][^devclass-fermyon]
- **Ecosystem gaps**: no threads, sockets or async in standard WASI until 0.2 and 0.3, so most server software could not be recompiled. That pushed vendors to non-standard extensions such as WASIX.[^wasi-03]

# Why
1. **Containers were "good enough" and kept improving.** For long-running services, cold start is irrelevant and Linux compatibility matters most. Wasm's advantages only pay off for short-lived, high-density, untrusted workloads.
2. **The standard arrived too late.** WASI 0.2 (2024) and 0.3 (2026) came after the 2021–2022 funding wave had to show revenue (see [WASI and the component model](/ideas/platforms-and-portability/wasi-and-component-model.md)).
3. **V8 isolates captured the JS-heavy edge.** Cloudflare Workers ran JS and TS natively with a similar density story, so Wasm was not needed for the most common edge language (see [edge isolates](/ideas/platforms-and-portability/edge-isolates.md)).
4. **Distribution beats technology.** CDNs already own the edge network and the customers, so Wasm became a *feature* of incumbents rather than a new platform.

# Lessons
- "X is the new containers" claims need a workload containers handle badly. Wasm found one in untrusted, short-lived code and plugins, not in general services.
- Donating the project to a foundation before an acquisition (Spin, wasmCloud) preserved the open-source value even when the business thesis failed.

# Related
- [WASI and the component model](/ideas/platforms-and-portability/wasi-and-component-model.md), [Edge isolates](/ideas/platforms-and-portability/edge-isolates.md), [WebAssembly in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md), [eBPF as a runtime](/ideas/platforms-and-portability/ebpf-as-a-runtime.md)
- [Wasmtime](/runtimes/wasmtime.md), [Wasmer](/runtimes/wasmer.md), [WasmEdge](/runtimes/wasmedge.md), [QuickJS](/runtimes/quickjs.md)

[^krustlet-intro]: Deis Labs: Introducing Krustlet — https://deislabs.io/posts/introducing-krustlet/
[^krustlet-gh]: Krustlet GitHub — https://github.com/krustlet/krustlet
[^docker-wasm-preview]: Docker blog: Introducing the Docker+Wasm Technical Preview — https://www.docker.com/blog/docker-wasm-technical-preview/
[^docker-wasm-deprecated]: Docker docs: Wasm workloads — https://docs.docker.com/desktop/features/wasm/
[^aks-wasi]: Azure/AKS issue #4770 — https://github.com/Azure/AKS/issues/4770
[^f5-suborbital]: Connor Hicks: Suborbital joining F5 — https://www.linkedin.com/posts/connor-hicks-05044166_im-excited-to-share-that-suborbitals-team-activity-7090013360406040577-HiX4
[^devclass-fermyon]: DevClass: Akamai buys Fermyon — https://www.devclass.com/containers/2025/12/04/akamai-buys-fermyon-for-wasm-based-serverless-functions-a-possible-answer-to-cloudflare-workers/1732513
[^spin-cncf]: CNCF: Spin — https://www.cncf.io/projects/spin/
[^wasmcloud-cncf]: CNCF: wasmCloud — https://www.cncf.io/projects/wasmcloud/
[^shopify-javy]: Shopify Engineering: Bringing JavaScript to WebAssembly for Shopify Functions — https://shopify.engineering/javascript-in-webassembly-for-shopify-functions
[^fastly-compute]: Fastly docs: Compute — https://docs.fastly.com/products/compute
[^wasi-03]: Bytecode Alliance: WASI 0.3 Launched — https://bytecodealliance.org/articles/WASI-0.3
