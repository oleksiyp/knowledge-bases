---
type: OSS Project
title: "KubeVirt (and Harvester)"
description: "Runs VMs on Kubernetes; a main open-source landing zone for the Broadcom/VMware licensing exodus, with steady releases (1.4 → 1.9) and SUSE's KubeVirt-based Harvester HCI (1.7 → 1.9) — growing, though still CNCF incubating."
resource: https://github.com/kubevirt/kubevirt
tags: [cloud-native, virtualization, vmware-alternative, apache-2.0, foundation-hosted, cncf-incubating]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2016-)"]
governance: foundation
steward: Cloud Native Computing Foundation (Red Hat main contributor)
backing_orgs: [organizations/cncf]
metrics:
  github_stars: { value: 7098, as_of: 2026-10-03 }
  harvester_github_stars: { value: 5194, as_of: 2026-10-03 }
  latest_minor: { value: "v1.9.0 (2026-07-30)", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: kv-gh
    resource: https://github.com/kubevirt/kubevirt
    title: "KubeVirt GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: kv-cncf
    resource: https://www.cncf.io/projects/kubevirt/
    title: "CNCF: KubeVirt (Incubating since 2022-04-19)"
  - id: harv-gh
    resource: https://github.com/harvester/harvester
    title: "Harvester GitHub releases"
  - id: openinfra-blog
    resource: https://openinfra.org/blog/
    title: "OpenInfra Foundation blog (VMware migration working group)"
---

# Summary
KubeVirt lets Kubernetes schedule full virtual machines, and Broadcom's VMware licensing changes (from November 2023) created sustained demand for open alternatives — the OpenInfra community even formed a dedicated VMware-migration working group[^openinfra-blog]. KubeVirt shipped twice-yearly-plus releases: 1.4 (Nov 2024), 1.5 (Mar 2025), 1.6 (Jul 2025), 1.7 (Nov 2025), 1.8 (Mar 2026), 1.9 (Jul 30, 2026)[^kv-gh]. SUSE's Harvester HCI, built on KubeVirt, released 1.7 (Dec 2025), 1.8 (Apr 2026) and 1.9 (Sep 16, 2026)[^harv-gh]. It remains CNCF incubating (since 2022)[^kv-cncf]. Verdict: **growing**; it monetizes through Red Hat OpenShift Virtualization and SUSE rather than a dedicated vendor.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-13 | KubeVirt 1.4[^kv-gh] | OSS | + |
| W24 | 2025-03-13 | KubeVirt 1.5[^kv-gh] | OSS | + |
| W24 | 2025-07-31 | KubeVirt 1.6[^kv-gh] | OSS | + |
| W12 | 2025-11-27 | KubeVirt 1.7[^kv-gh] | OSS | + |
| W12 | 2025-12-23 | Harvester 1.7[^harv-gh] | OSS | + |
| W9 | 2026-03-24 | KubeVirt 1.8[^kv-gh] | OSS | + |
| W6 | 2026-04-24 | Harvester 1.8[^harv-gh] | OSS | + |
| W3 | 2026-07-30 | KubeVirt 1.9[^kv-gh] | OSS | + |
| W3 | 2026-09-16 | Harvester 1.9[^harv-gh] | OSS | + |

# OSS successes
- Converged VM + container platform story resonates with VMware leavers[^openinfra-blog].
- Consistent release cadence[^kv-gh].

# OSS failures / risks
- Not yet graduated; operational complexity compared with Proxmox for small shops[^kv-cncf].

# Business successes
- Indirect: Red Hat OpenShift Virtualization and SUSE Harvester sales (figures not public).

# Business failures / risks
- Competes with Proxmox VE, OpenStack and Nutanix for the same migrations.

# By window
## W3
- KubeVirt 1.9; Harvester 1.9[^kv-gh][^harv-gh].
## W6
- Harvester 1.8[^harv-gh].
## W9
- KubeVirt 1.8[^kv-gh].
## W12
- KubeVirt 1.7; Harvester 1.7[^kv-gh][^harv-gh].
## W24
- KubeVirt 1.4-1.6[^kv-gh].

# Lessons
- A competitor's pricing shock (Broadcom) can be the strongest growth driver for open alternatives.

# Related
- [Proxmox VE](/projects/cloud-native/proxmox-ve.md), [Talos Linux](/projects/cloud-native/talos-linux.md), [Kubernetes](/projects/cloud-native/kubernetes.md)

[^kv-gh]: https://github.com/kubevirt/kubevirt
[^kv-cncf]: https://www.cncf.io/projects/kubevirt/
[^harv-gh]: https://github.com/harvester/harvester
[^openinfra-blog]: https://openinfra.org/blog/
