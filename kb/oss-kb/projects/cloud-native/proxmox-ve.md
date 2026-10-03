---
type: OSS Project
title: "Proxmox Virtual Environment"
description: "AGPL-licensed Debian-based virtualization platform (KVM + LXC); the biggest open-source beneficiary of the Broadcom/VMware exodus — PVE 9.0 (Aug 2025), Datacenter Manager 1.0 (Dec 2025), PVE 9.2 with a dynamic load balancer (May 2026) and a new North American subsidiary (Sep 2026)."
resource: https://www.proxmox.com/en/products/proxmox-virtual-environment/overview
tags: [cloud-native, virtualization, vmware-alternative, agpl-3.0, company-led]
domain: cloud-native
license: AGPL-3.0
license_history: ["AGPL-3.0 (2008-)"]
governance: company-led-open-core
steward: Proxmox Server Solutions GmbH
backing_orgs: [organizations/proxmox-server-solutions]
metrics:
  latest_release: { value: "PVE 9.2 (2026-05-21)", as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pmx-press
    resource: https://www.proxmox.com/en/about/company-details/press-releases
    title: "Proxmox press releases"
    author: org:proxmox
  - id: openinfra-blog
    resource: https://openinfra.org/blog/
    title: "OpenInfra Foundation blog (VMware migration)"
---

# Summary
Proxmox VE is the go-to open-source hypervisor for organizations leaving VMware after Broadcom's licensing changes[^openinfra-blog]. Its Vienna-based steward sells subscriptions (enterprise repository plus support) while all code is AGPL-3.0. Releases in the window: PVE 9.0 on Debian 13 (Aug 5, 2025), 9.1 (Nov 19, 2025), Proxmox Datacenter Manager 1.0 for multi-cluster management (Dec 4, 2025), PVE 9.2 with a Dynamic Load Balancer (May 21, 2026) and PDM 1.1 (May 28, 2026)[^pmx-press]. Enterprise signals multiplied in 2026: Omnissa Horizon certification, NVIDIA Mission Control integration, StorPool storage, and the launch of Proxmox North America Inc. with 24/7 support (Sep 2, 2026)[^pmx-press]. Verdict: OSS **thriving**, business **growing** (no revenue disclosed).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-29 | 20-year company anniversary[^pmx-press] | Business | + |
| W24 | 2025-08-05 | PVE 9.0 (Debian 13)[^pmx-press] | OSS | + |
| W12 | 2025-11-19 | PVE 9.1[^pmx-press] | OSS | + |
| W12 | 2025-12-04 | Proxmox Datacenter Manager 1.0[^pmx-press] | OSS | + |
| W6 | 2026-04-20/27 | Kasm VDI partnership; StorPool integration[^pmx-press] | Business | + |
| W6 | 2026-05-21 | PVE 9.2 with Dynamic Load Balancer[^pmx-press] | OSS | + |
| W6 | 2026-05-28 | PDM 1.1[^pmx-press] | OSS | + |
| W3 | 2026-07-28 | NVIDIA Mission Control integration[^pmx-press] | Business | + |
| W3 | 2026-09-02 | Proxmox North America Inc. and 24/7 enterprise support[^pmx-press] | Business | + |
| W3 | 2026-09-04 | Omnissa Horizon Ready certification[^pmx-press] | Business | + |

# OSS successes
- Closing enterprise feature gaps vs vSphere: multi-cluster management (PDM), DRS-like load balancing[^pmx-press].

# OSS failures / risks
- Small core team; development stays in-house rather than community-governed.

# Business successes
- Ecosystem certifications and a US subsidiary show enterprise expansion[^pmx-press].

# Business failures / risks
- No public revenue data; enterprise-support scale-up is a new competency.

# By window
## W3
- NVIDIA integration, Proxmox North America, Omnissa certification[^pmx-press].
## W6
- PVE 9.2, PDM 1.1, storage/VDI partnerships[^pmx-press].
## W9
- No notable events found.
## W12
- PVE 9.1; PDM 1.0[^pmx-press].
## W24
- PVE 9.0[^pmx-press].

# Lessons
- Bootstrapped, AGPL-licensed, subscription-funded vendors can capture a market dislocation without VC.

# Related
- [Proxmox Server Solutions](/organizations/proxmox-server-solutions.md), [KubeVirt](/projects/cloud-native/kubevirt.md), [Event: OpenInfra joins Linux Foundation](/events/2025-06-openinfra-joins-linux-foundation.md)

[^pmx-press]: https://www.proxmox.com/en/about/company-details/press-releases
[^openinfra-blog]: https://openinfra.org/blog/
