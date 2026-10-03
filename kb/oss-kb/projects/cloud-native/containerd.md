---
type: OSS Project
title: "containerd"
description: "CNCF-graduated container runtime used by most Kubernetes distributions; the 2.x line (2.2 Nov 2025, 2.3 Apr 2026, 2.4 Sep 2026) proceeded smoothly — quiet, stable plumbing."
resource: https://github.com/containerd/containerd
tags: [cloud-native, containers, runtime, apache-2.0, foundation-hosted, cncf-graduated]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2015-)"]
governance: foundation
steward: Cloud Native Computing Foundation
backing_orgs: [organizations/cncf]
metrics:
  github_stars: { value: 21377, as_of: 2026-10-03 }
  latest_minor: { value: "v2.4.0 (2026-09-16)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ctrd-gh
    resource: https://github.com/containerd/containerd
    title: "containerd GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: k8s-137
    resource: https://kubernetes.io/blog/2026/08/26/kubernetes-v1-37-release/
    title: "Kubernetes v1.37 release"
---

# Summary
containerd is the default CRI runtime underneath most managed Kubernetes services and Docker Engine. After the 2.0 major (late 2024), it shipped 2.2 (Nov 6, 2025), 2.3 (Apr 30, 2026) and 2.4 (Sep 16, 2026)[^ctrd-gh], tracking Kubernetes features such as user namespaces and rootless kubelet work[^k8s-137]. Verdict: **stable** — invisible infrastructure with multi-vendor maintainers and no business drama.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-11-06 | containerd 2.2[^ctrd-gh] | OSS | + |
| W6 | 2026-04-30 | containerd 2.3[^ctrd-gh] | OSS | + |
| W3 | 2026-09-16 | containerd 2.4[^ctrd-gh] | OSS | + |

# OSS successes
- Smooth 2.x evolution; ubiquitous adoption.

# OSS failures / risks
- 1.x → 2.x config migrations created upgrade friction for some distros.

# Business successes
- n/a.

# Business failures / risks
- n/a.

# By window
## W3
- containerd 2.4[^ctrd-gh].
## W6
- containerd 2.3[^ctrd-gh].
## W9
- No notable events found.
## W12
- containerd 2.2[^ctrd-gh].
## W24
- No notable events found beyond 2.0/2.1 adoption.

# Lessons
- Donating the boring core (Docker → containerd, 2017) produced long-term neutral plumbing that outlived its donor's strategic relevance.

# Related
- [Docker](/projects/cloud-native/docker.md), [Podman](/projects/cloud-native/podman.md), [Kubernetes](/projects/cloud-native/kubernetes.md)

[^ctrd-gh]: https://github.com/containerd/containerd
[^k8s-137]: https://kubernetes.io/blog/2026/08/26/kubernetes-v1-37-release/
