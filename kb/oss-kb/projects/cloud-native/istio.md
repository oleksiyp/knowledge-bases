---
type: OSS Project
title: "Istio"
description: "CNCF-graduated service mesh; ambient (sidecar-less) mode went GA in Istio 1.24 (Nov 2024) and the project kept a quarterly release train to 1.31 (Aug 2026) — the mesh that won the \"sidecar tax\" debate."
resource: https://github.com/istio/istio
tags: [cloud-native, service-mesh, networking, apache-2.0, foundation-hosted, cncf-graduated]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2017-)"]
governance: foundation
steward: Cloud Native Computing Foundation
backing_orgs: [organizations/cncf]
metrics:
  github_stars: { value: 38426, as_of: 2026-10-03 }
  latest_minor: { value: "1.31.0 (2026-08-31)", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: istio-ambient-ga
    resource: https://istio.io/latest/blog/2024/ambient-reaches-ga/
    title: "Istio: Ambient mode reaches General Availability (1.24)"
    author: org:istio
  - id: istio-gh
    resource: https://github.com/istio/istio
    title: "Istio GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
---

# Summary
Istio's defining move of the period was ambient mode: announced in September 2022, it reached GA in Istio 1.24 on November 7, 2024, splitting L4 (per-node ztunnel) from optional L7 waypoint proxies and eliminating per-pod sidecars[^istio-ambient-ga]. Users reported up to 90% overhead reductions and one cited cutting 45% of running containers[^istio-ambient-ga]. Releases continued quarterly — 1.28 (Nov 2025), 1.29 (Feb 2026), 1.30 (May 2026), 1.31 (Aug 31, 2026)[^istio-gh]. Verdict: **growing** — sidecar-less won the mesh architecture debate and Istio leads it; commercial value flows to Solo.io, Google, Red Hat and others.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-07 | Ambient mode GA in Istio 1.24[^istio-ambient-ga] | OSS | + |
| W12 | 2025-11-05 | Istio 1.28[^istio-gh] | OSS | + |
| W9 | 2026-02-16 | Istio 1.29[^istio-gh] | OSS | + |
| W6 | 2026-05-18 | Istio 1.30[^istio-gh] | OSS | + |
| W3 | 2026-08-31 | Istio 1.31[^istio-gh] | OSS | + |

# OSS successes
- Ambient GA with ztunnel image passing 1M downloads at GA time[^istio-ambient-ga].
- Gateway API-native ingress implementation, relevant to ingress-nginx migrations.

# OSS failures / risks
- At GA, multi-cluster, multi-network and VM support for ambient were still in development[^istio-ambient-ga].
- Mesh complexity still deters smaller teams.

# Business successes
- n/a for the project; vendors (Solo.io, Google Cloud Service Mesh, Red Hat OpenShift Service Mesh) build on it.

# Business failures / risks
- Mesh as a standalone commercial category remains small; value is captured inside cloud platforms.

# By window
## W3
- Istio 1.31 (Aug 31, 2026)[^istio-gh].
## W6
- Istio 1.30 (May 18, 2026)[^istio-gh].
## W9
- Istio 1.29 (Feb 16, 2026)[^istio-gh].
## W12
- Istio 1.28 (Nov 5, 2025)[^istio-gh].
## W24
- Ambient mode GA (Nov 7, 2024)[^istio-ambient-ga].

# Lessons
- Re-architecting to remove a widely resented cost (the sidecar) can revive a project's narrative even in a mature category.

# Related
- [Linkerd](/projects/cloud-native/linkerd.md), [Envoy](/projects/cloud-native/envoy.md), [Cilium](/projects/cloud-native/cilium.md), [Gateway API](/projects/cloud-native/gateway-api.md)

[^istio-ambient-ga]: https://istio.io/latest/blog/2024/ambient-reaches-ga/
[^istio-gh]: https://github.com/istio/istio
