---
type: OSS Project
title: "Spin, SpinKube and wasmCloud (server-side WebAssembly)"
description: "Server-side Wasm frameworks; Spin moved to the CNCF Sandbox (Jan 2025) and its creator Fermyon was acquired by Akamai (Dec 2025), while wasmCloud (CNCF incubating) shipped 2.0 (Mar 2026) — OSS stable, business consolidated into a CDN rather than a container-killer."
resource: https://github.com/spinframework/spin
tags: [cloud-native, webassembly, serverless, edge, apache-2.0, foundation-hosted, cncf-sandbox]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2022-)"]
governance: foundation
steward: Cloud Native Computing Foundation (Spin sandbox; wasmCloud incubating)
backing_orgs: [organizations/fermyon, organizations/cncf]
metrics:
  spin_github_stars: { value: 6525, as_of: 2026-10-03 }
  wasmcloud_github_stars: { value: 2448, as_of: 2026-10-03 }
  spin_latest: { value: "v4.2.0 (2026-09-29)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: spin-cncf
    resource: https://www.cncf.io/projects/spin/
    title: "CNCF: Spin (Sandbox, accepted 2025-01-21)"
    author: org:cncf
  - id: spin-gh
    resource: https://github.com/spinframework/spin
    title: "Spin GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: devclass-fermyon
    resource: https://www.devclass.com/containers/2025/12/04/akamai-buys-fermyon-for-wasm-based-serverless-functions-a-possible-answer-to-cloudflare-workers/1732513
    title: "DevClass: Akamai buys Fermyon for Wasm-based serverless functions"
    author: org:devclass
  - id: nww-fermyon
    resource: https://www.networkworld.com/article/4099424/akamai-acquires-fermyon-for-edge-computing-as-webassembly-comes-of-age.html
    title: "Network World: Akamai acquires Fermyon"
    author: org:networkworld
  - id: wasmcloud-cncf
    resource: https://www.cncf.io/projects/wasmcloud/
    title: "CNCF: wasmCloud (Incubating since 2024-11-08)"
  - id: wasmcloud-gh
    resource: https://github.com/wasmCloud/wasmCloud
    title: "wasmCloud GitHub releases"
---

# Summary
Server-side WebAssembly was pitched as a lighter successor to containers; by 2026 it had settled into a narrower edge-functions role. Spin and SpinKube were contributed by Fermyon and Spin was accepted into the CNCF Sandbox on January 21, 2025[^spin-cncf]. Akamai announced its acquisition of Fermyon on December 1, 2025 (price undisclosed) after a year of reselling Fermyon Wasm Functions on its network, explicitly to answer Cloudflare Workers[^devclass-fermyon][^nww-fermyon]. Spin kept shipping after the deal (4.0 Apr 2026, 4.2 Sep 29, 2026)[^spin-gh], and wasmCloud, CNCF incubating since Nov 2024, shipped 2.0 on Mar 22, 2026 followed by biweekly 2.x releases[^wasmcloud-cncf][^wasmcloud-gh]. Verdict: OSS **stable**; business **acquired** (Fermyon).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-08 | Spin 3.0; wasmCloud moves to CNCF Incubating[^spin-gh][^wasmcloud-cncf] | OSS | + |
| W24 | 2025-01-21 | Spin accepted into CNCF Sandbox[^spin-cncf] | OSS | + |
| W24 | 2025-03 | Fermyon Wasm Functions launched on Akamai's network[^devclass-fermyon] | Business | + |
| W12 | 2025-12-01 | Akamai announces acquisition of Fermyon[^nww-fermyon][^devclass-fermyon] | Business | mixed |
| W9 | 2026-03-22 | wasmCloud 2.0[^wasmcloud-gh] | OSS | + |
| W6 | 2026-04-20 | Spin 4.0[^spin-gh] | OSS | + |
| W3 | 2026-08-26, 2026-09-29 | Spin 4.1, 4.2[^spin-gh] | OSS | + |

# OSS successes
- Foundation hosting of Spin before the acquisition protected the project; Fermyon pledged continued Spin/SpinKube/Wasmtime contributions[^devclass-fermyon].
- WASI component model maturing; both Spin and wasmCloud shipped major versions in 2026[^spin-gh][^wasmcloud-gh].

# OSS failures / risks
- Small communities (Spin ~6.5k stars, wasmCloud ~2.4k) relative to container tools[^spin-gh][^wasmcloud-gh].
- "Container killer" narrative did not materialize; Wasm is now mostly an edge/plugin runtime.

# Business successes
- Fermyon found an exit to a strategic buyer (Akamai)[^nww-fermyon].

# Business failures / risks
- Undisclosed price suggests a modest outcome relative to Fermyon's venture funding; standalone Wasm PaaS proved hard.

# By window
## W3
- Spin 4.1/4.2; wasmCloud 2.6-2.10[^spin-gh][^wasmcloud-gh].
## W6
- Spin 4.0[^spin-gh].
## W9
- wasmCloud 2.0[^wasmcloud-gh].
## W12
- Akamai acquires Fermyon[^nww-fermyon].
## W24
- Spin to CNCF Sandbox; Spin 3.0[^spin-cncf][^spin-gh].

# Lessons
- Platform-shift startups often end as features of incumbents with distribution (CDNs).
- Donate the OSS to a foundation before the exit.

# Related
- [Fermyon](/organizations/fermyon.md), [Event: Akamai acquires Fermyon](/events/2025-12-akamai-acquires-fermyon.md), [Envoy](/projects/cloud-native/envoy.md)

[^spin-cncf]: https://www.cncf.io/projects/spin/
[^spin-gh]: https://github.com/spinframework/spin
[^devclass-fermyon]: https://www.devclass.com/containers/2025/12/04/akamai-buys-fermyon-for-wasm-based-serverless-functions-a-possible-answer-to-cloudflare-workers/1732513
[^nww-fermyon]: https://www.networkworld.com/article/4099424/akamai-acquires-fermyon-for-edge-computing-as-webassembly-comes-of-age.html
[^wasmcloud-cncf]: https://www.cncf.io/projects/wasmcloud/
[^wasmcloud-gh]: https://github.com/wasmCloud/wasmCloud
