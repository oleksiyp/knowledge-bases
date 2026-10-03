---
type: OSS Project
title: "Podman (Podman Container Tools)"
description: "Red Hat-originated daemonless container engine (with Buildah and Skopeo); joined CNCF Sandbox in January 2025, moved to a neutral GitHub org and shipped Podman 6.0 (June 2026) — a growing Docker alternative now under foundation governance."
resource: https://github.com/podman-container-tools/podman
tags: [cloud-native, containers, apache-2.0, foundation-hosted, cncf-sandbox]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2017-)"]
governance: foundation
steward: Cloud Native Computing Foundation (Red Hat main contributor)
backing_orgs: [organizations/cncf]
metrics:
  github_stars: { value: 32988, as_of: 2026-10-03 }
  latest_minor: { value: "v6.1.0 (2026-08-12)", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: podman-cncf
    resource: https://www.cncf.io/projects/podman-container-tools/
    title: "CNCF: Podman Container Tools (Sandbox, accepted 2025-01-21)"
    author: org:cncf
  - id: podman-gh
    resource: https://github.com/podman-container-tools/podman
    title: "Podman GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
---

# Summary
Podman, Buildah and Skopeo — daemonless, rootless-capable container tools — were accepted into the CNCF Sandbox as "Podman Container Tools" on January 21, 2025[^podman-cncf], and the repository now lives in the neutral `podman-container-tools` GitHub organization[^podman-gh]. Releases kept a quarterly cadence (5.4 Feb 2025 → 5.8 Feb 2026), with major version 6.0 on June 24, 2026 and 6.1 on Aug 12, 2026[^podman-gh]. Verdict: **growing** — the move from Red Hat-controlled to foundation-hosted strengthens its position as the vendor-neutral Docker alternative.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-21 | Accepted into CNCF Sandbox[^podman-cncf] | OSS | + |
| W24 | 2025-02-11 → 2025-08-15 | Podman 5.4 – 5.6[^podman-gh] | OSS | + |
| W12 | 2025-11-11 | Podman 5.7[^podman-gh] | OSS | + |
| W9 | 2026-02-12 | Podman 5.8[^podman-gh] | OSS | + |
| W6 | 2026-06-24 | Podman 6.0[^podman-gh] | OSS | + |
| W3 | 2026-08-12 | Podman 6.1[^podman-gh] | OSS | + |

# OSS successes
- Foundation move and neutral org reduce single-vendor perception[^podman-cncf][^podman-gh].
- Major 6.0 release on schedule[^podman-gh].

# OSS failures / risks
- Still Red Hat-staffed in practice; Sandbox status is the lowest CNCF tier.

# Business successes
- n/a (monetized indirectly through RHEL/OpenShift).

# Business failures / risks
- n/a.

# By window
## W3
- Podman 6.1[^podman-gh].
## W6
- Podman 6.0[^podman-gh].
## W9
- Podman 5.8[^podman-gh].
## W12
- Podman 5.7[^podman-gh].
## W24
- CNCF Sandbox acceptance; 5.4-5.6[^podman-cncf][^podman-gh].

# Lessons
- Moving a vendor-led project into a foundation is a cheap way to expand contributor and adopter trust.

# Related
- [Docker](/projects/cloud-native/docker.md), [containerd](/projects/cloud-native/containerd.md), [CNCF](/organizations/cncf.md)

[^podman-cncf]: https://www.cncf.io/projects/podman-container-tools/
[^podman-gh]: https://github.com/podman-container-tools/podman
