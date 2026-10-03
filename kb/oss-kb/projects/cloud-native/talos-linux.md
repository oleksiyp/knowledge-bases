---
type: OSS Project
title: "Talos Linux (and lightweight Kubernetes distros k3s / Kairos)"
description: "Sidero Labs' immutable, API-managed Linux built only to run Kubernetes; steady releases (1.11 → 1.14), a growing on-prem/edge following, and Sidero's acquisition by Yardi (announced Sep 2026) with a Talos Hypervisor push; alongside SUSE's k3s and the immutable-OS project Kairos — a growing niche driven by the VMware exodus and edge."
resource: https://github.com/siderolabs/talos
tags: [cloud-native, kubernetes-distro, immutable-os, edge, mpl-2.0, company-led]
domain: cloud-native
license: MPL-2.0
license_history: ["MPL-2.0 (2018-)"]
governance: company-led-open-core
steward: Sidero Labs
backing_orgs: []
metrics:
  github_stars: { value: 11287, as_of: 2026-10-03 }
  k3s_github_stars: { value: 34112, as_of: 2026-10-03 }
  kairos_github_stars: { value: 1835, as_of: 2026-10-03 }
  latest_minor: { value: "v1.14.0 (2026-09-03)", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: talos-gh
    resource: https://github.com/siderolabs/talos
    title: "Talos GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: sidero-yardi
    resource: https://www.siderolabs.com/blog/sidero-labs-joins-yardi
    title: "Sidero Labs blog: Sidero Labs joins Yardi (Sep 14, 2026)"
    author: org:sidero-labs
  - id: pr-talos-hypervisor
    resource: https://www.prnewswire.com/news-releases/talos-linux-adds-native-hypervisor-and-edge-container-support--see-it-live-at-taloscon-2026-302877040.html
    title: "PR Newswire: Talos Linux adds native hypervisor and edge container support (Sep 14, 2026)"
  - id: rw-cupar
    resource: https://runtimewire.com/article/sidero-talos-private-ai-cupar
    title: "Runtime Wire: Sidero launches an immutable OS and console for private AI (Oct 1, 2026)"
  - id: talos-director
    resource: https://cloudnews.tech/sidero-labs-launches-talos-director-a-vmware-alternative-built-on-talos-linux/
    title: "CloudNews: Sidero Labs launches Talos Director, a VMware alternative (limited availability Sep 30, 2026)"
  - id: sa-sidero-2024
    resource: https://siliconangle.com/2024/10/23/sidero-labs-raises-4m-advance-kubernetes-bare-metal-cluster-management-solutions/
    title: "SiliconANGLE: Sidero Labs raises $4M led by Hiro Capital (Oct 23, 2024)"
    author: org:siliconangle
  - id: k3s-gh
    resource: https://github.com/k3s-io/k3s
    title: "k3s repository"
  - id: k3s-136
    resource: https://docs.k3s.io/blog/2026/05/27/K3s-1.36-release
    title: "K3s blog: Kubernetes v1.36 is out (k3s 1.36)"
  - id: kairos-gh
    resource: https://github.com/kairos-io/kairos
    title: "Kairos repository"
  - id: rancher-gh
    resource: https://github.com/rancher/rancher
    title: "Rancher repository"
---

# Summary
Talos Linux is a minimal, immutable OS with no shell or SSH, managed entirely via API, purpose-built for Kubernetes. Sidero Labs shipped Talos 1.11 (Sep 2025), 1.12 (Dec 2025), 1.13 (Apr 2026) and 1.14 (Sep 3, 2026)[^talos-gh], and monetizes via its Omni SaaS/management plane. Adjacent lightweight distributions also stayed healthy: SUSE's k3s (34k stars) tracked upstream with k3s 1.36 in May 2026[^k3s-gh][^k3s-136], Rancher shipped 2.15 (Jul 2026)[^rancher-gh], and the immutable edge OS Kairos remains actively developed (commits through Oct 2026)[^kairos-gh]. The business story changed in W3: after a modest $4M raise led by Hiro Capital (Oct 2024)[^sa-sidero-2024], Sidero announced on Sep 14, 2026 that it had been acquired by Yardi Systems (terms undisclosed; Talos stays MPL-2.0), alongside a Talos Hypervisor (GA planned Dec 2026), then launched Talos Director, a commercial VMware replacement (limited availability Sep 30, 2026), and a private-AI stack ("Talos Linux for AI", Talos Cupar; Oct 1, 2026)[^sidero-yardi][^pr-talos-hypervisor][^talos-director][^rw-cupar]. Verdict: OSS **growing** niche — on-prem Kubernetes demand (bare metal, edge, VMware replacement) favours appliance-like OSes; business **acquired**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-23 | Sidero Labs raises $4M (Hiro Capital lead, Sony Innovation Fund)[^sa-sidero-2024] | Business | + |
| W24 | 2025-09-01 | Talos 1.11[^talos-gh] | OSS | + |
| W12 | 2025-12-22 | Talos 1.12[^talos-gh] | OSS | + |
| W6 | 2026-04-27 | Talos 1.13[^talos-gh] | OSS | + |
| W6 | 2026-05-27 | k3s 1.36 release[^k3s-136] | OSS | + |
| W3 | 2026-07-30 | Rancher 2.15[^rancher-gh] | OSS | + |
| W3 | 2026-09-03 | Talos 1.14[^talos-gh] | OSS | + |
| W3 | 2026-09-14 | Yardi acquisition of Sidero Labs announced; Talos Hypervisor unveiled[^sidero-yardi][^pr-talos-hypervisor] | Business | + |
| W3 | 2026-09-30 | Talos Director (VMware alternative) enters limited availability[^talos-director] | Business | + |
| W3 | 2026-10-01 | Talos Linux for AI and Talos Cupar private-AI console[^rw-cupar] | Both | + |

# OSS successes
- Security-by-design (immutable, API-only) resonates with regulated and edge users.
- Regular release cadence aligned to Kubernetes minors[^talos-gh].

# OSS failures / risks
- Single-vendor (Sidero, now owned by Yardi) maintenance; MPL-2.0 rather than foundation hosting. The roadmap may now follow an end-user owner's priorities (virtualization, private AI)[^sidero-yardi].

# Business successes
- Omni management SaaS gives a clear upsell; acquisition by a profitable, bootstrapped owner removes vendor-viability concerns that had held back enterprise buyers[^sidero-yardi].
- Yardi reportedly migrated thousands of VMs and hundreds of clusters from VMware to Talos Director (company claim)[^talos-director].

# Business failures / risks
- Competes with free k3s/RKE2 (SUSE), Flatcar, and cloud-managed edge offerings.

# By window
## W3
- Talos 1.14; Rancher 2.15[^talos-gh][^rancher-gh].
- Yardi acquires Sidero Labs (announced Sep 14; one report dates the deal to July); Talos Hypervisor, Talos Director and Cupar launched[^sidero-yardi][^talos-director][^rw-cupar].
## W6
- Talos 1.13; k3s 1.36[^talos-gh][^k3s-136].
## W9
- No notable events found.
## W12
- Talos 1.12[^talos-gh].
## W24
- Sidero $4M raise (Oct 2024); Talos 1.11[^sa-sidero-2024][^talos-gh].

# Lessons
- Opinionated, appliance-style Kubernetes OSes win where operational simplicity beats flexibility.

# Related
- [Event: Yardi acquires Sidero Labs](/events/2026-09-yardi-acquires-sidero-labs.md), [KubeVirt](/projects/cloud-native/kubevirt.md), [Proxmox VE](/projects/cloud-native/proxmox-ve.md), [Kubernetes](/projects/cloud-native/kubernetes.md)

[^talos-gh]: https://github.com/siderolabs/talos
[^sidero-yardi]: https://www.siderolabs.com/blog/sidero-labs-joins-yardi
[^pr-talos-hypervisor]: https://www.prnewswire.com/news-releases/talos-linux-adds-native-hypervisor-and-edge-container-support--see-it-live-at-taloscon-2026-302877040.html
[^rw-cupar]: https://runtimewire.com/article/sidero-talos-private-ai-cupar
[^talos-director]: https://cloudnews.tech/sidero-labs-launches-talos-director-a-vmware-alternative-built-on-talos-linux/
[^sa-sidero-2024]: https://siliconangle.com/2024/10/23/sidero-labs-raises-4m-advance-kubernetes-bare-metal-cluster-management-solutions/
[^k3s-gh]: https://github.com/k3s-io/k3s
[^k3s-136]: https://docs.k3s.io/blog/2026/05/27/K3s-1.36-release
[^kairos-gh]: https://github.com/kairos-io/kairos
[^rancher-gh]: https://github.com/rancher/rancher
