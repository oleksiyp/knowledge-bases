---
type: OSS Project
title: "Linkerd"
description: "CNCF-graduated lightweight service mesh; after Buoyant moved stable release artifacts behind its commercial distribution in Feb 2024, the open project publishes only edge releases — Buoyant became profitable and doubled revenue, but the community trade-off remains contested."
resource: https://github.com/linkerd/linkerd2
tags: [cloud-native, service-mesh, apache-2.0, foundation-hosted, cncf-graduated, open-core]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2016-); stable binaries vendor-only since 2024-02"]
governance: foundation
steward: Cloud Native Computing Foundation (Buoyant main maintainer)
backing_orgs: [organizations/buoyant, organizations/cncf]
metrics:
  github_stars: { value: 11507, as_of: 2026-10-03 }
  latest_edge: { value: "edge-26.7.1 (2026-07-21) and later", as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: stable
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: linkerd-forever
    resource: https://www.buoyant.io/blog/linkerd-forever
    title: "Buoyant: Linkerd Forever (Oct 2024)"
    author: org:buoyant
  - id: buoyant-news
    resource: https://www.buoyant.io/newsroom
    title: "Buoyant newsroom"
  - id: infoq-mcp
    resource: https://www.infoq.com/news/2025/11/buoyant-linkerd-mcp-support/
    title: "InfoQ: Buoyant announces MCP support for Linkerd"
    author: org:infoq
  - id: bel-219
    resource: https://www.buoyant.io/blog/linkerd-enterprise-2-19-windows-service-mesh-post-quantum-cryptography-supply-chain-security-fips-140-3-and-a-new-on-cluster-dashboard
    title: "Buoyant: Announcing Linkerd Enterprise 2.19 (post-quantum crypto, Windows, FIPS 140-3; Oct 31, 2025)"
    author: org:buoyant
  - id: bel-220
    resource: https://www.buoyant.io/blog/bel-2-20-automated-trust-anchor-rotation-windows-vm-support-rate-limit-aware-load-balancing
    title: "Buoyant: Announcing Buoyant Enterprise for Linkerd 2.20 (Jun 23, 2026)"
    author: org:buoyant
  - id: linkerd-gh
    resource: https://github.com/linkerd/linkerd2
    title: "linkerd2 GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
---

# Summary
Linkerd is the "simple" Rust-proxy service mesh. Its two-year story is a business-model experiment: since February 2024, stable release packages are produced only in Buoyant Enterprise for Linkerd, while the open project ships edge releases[^linkerd-forever]. Buoyant reported in October 2024 that it had become profitable and doubled both recurring revenue and enterprise customers since that change[^linkerd-forever]. Product work continued — Linkerd 2.18 (Apr 2025, Windows preview), Linkerd 2.19 with post-quantum cryptography, Windows container support and FIPS 140-3 (Oct 31, 2025), MCP traffic support for AI agents (Nov 2025) and Linkerd 2.20 with automated trust-anchor rotation, Windows VMs outside Kubernetes and rate-limit-aware load balancing (Jun 23, 2026)[^bel-219][^infoq-mcp][^bel-220]. Buoyant Enterprise for Linkerd remains free for non-production use and for companies with fewer than 50 employees[^bel-220]. Verdict: OSS **contested** (open code, vendor-gated stable builds); business **stable**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-23 | "Linkerd Forever": Buoyant profitable, revenue and customers doubled since Feb 2024[^linkerd-forever] | Business | + |
| W24 | 2025-04 | Linkerd 2.18 with Windows support preview[^buoyant-news] | OSS | + |
| W24 | 2025-10-31 | Linkerd 2.19: post-quantum crypto, Windows containers, FIPS 140-3, new dashboard[^bel-219] | OSS | + |
| W12 | 2025-11-06 | MCP support for agentic AI traffic announced at KubeCon NA[^infoq-mcp] | Both | + |
| W9 | 2026-01 | FedRAMP partnerships (TestifySec) and IntelliGRC case study[^buoyant-news] | Business | + |
| W6 | 2026-06-23 | Linkerd 2.20 (trust-anchor rotation, Windows VMs, rate-limit-aware LB, ~85% less control-plane memory)[^bel-220] | OSS | + |
| W3 | 2026-07-21 | edge-26.7.1 quarterly-numbered edge release[^linkerd-gh] | OSS | flat |

# OSS successes
- Continuous edge releases and new features (Windows, MCP) despite small team[^linkerd-gh][^infoq-mcp].

# OSS failures / risks
- Community must build stable binaries themselves or pay; this soured some adopters and pushes them toward Istio ambient or Cilium.
- Small star count growth (11.5k) relative to Istio (38k)[^linkerd-gh].

# Business successes
- Profitability without new VC money claimed in 2024; public-sector/FedRAMP channel in 2026[^linkerd-forever][^buoyant-news].

# Business failures / risks
- Mesh market consolidation around Istio ambient and Cilium; no funding or revenue figures have been disclosed since 2024.

# By window
## W3
- Edge releases continue[^linkerd-gh].
## W6
- Linkerd 2.20 (Jun 23, 2026)[^bel-220].
## W9
- FedRAMP partnerships[^buoyant-news].
## W12
- MCP support (Nov 2025)[^infoq-mcp].
## W24
- Profitability claim (Oct 2024); Linkerd 2.18; Linkerd 2.19 (Oct 31, 2025)[^linkerd-forever][^buoyant-news][^bel-219].

# Lessons
- Gating stable artifacts (not code) is a lighter-weight alternative to relicensing that can produce profitability, at a community-goodwill cost.

# Related
- [Buoyant](/organizations/buoyant.md), [Istio](/projects/cloud-native/istio.md), [Cilium](/projects/cloud-native/cilium.md)

[^linkerd-forever]: https://www.buoyant.io/blog/linkerd-forever
[^buoyant-news]: https://www.buoyant.io/newsroom
[^infoq-mcp]: https://www.infoq.com/news/2025/11/buoyant-linkerd-mcp-support/
[^linkerd-gh]: https://github.com/linkerd/linkerd2
[^bel-219]: https://www.buoyant.io/blog/linkerd-enterprise-2-19-windows-service-mesh-post-quantum-cryptography-supply-chain-security-fips-140-3-and-a-new-on-cluster-dashboard
[^bel-220]: https://www.buoyant.io/blog/bel-2-20-automated-trust-anchor-rotation-windows-vm-support-rate-limit-aware-load-balancing
