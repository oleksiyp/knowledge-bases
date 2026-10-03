---
type: Event
title: Yardi acquires Sidero Labs, steward of Talos Linux
description: "On Sep 14, 2026 Sidero Labs (Talos Linux, Omni) announced it had been acquired by Yardi Systems, a profitable 10,000+ employee private software company and Talos user; Talos stays MPL-2.0 and Sidero adds a Talos Hypervisor (alpha Oct 2026, GA planned Dec 2026)."
event_kind: acquisition
date: 2026-09-14
window: W3
impact: mixed
projects: [projects/cloud-native/talos-linux]
organizations: []
tags: [cloud-native, kubernetes, acquisition, talos, mpl-2.0]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sidero-yardi
    resource: https://www.siderolabs.com/blog/sidero-labs-joins-yardi
    title: "Sidero Labs blog: Sidero Labs joins Yardi: what it means for Talos (Sep 14, 2026)"
    author: org:sidero-labs
  - id: pr-talos-hypervisor
    resource: https://www.prnewswire.com/news-releases/talos-linux-adds-native-hypervisor-and-edge-container-support--see-it-live-at-taloscon-2026-302877040.html
    title: "PR Newswire: Talos Linux adds native hypervisor and edge container support (Sep 14, 2026)"
  - id: rw-yardi
    resource: https://runtimewire.com/article/yardi-buys-sidero-labs-talos-linux-hypervisor
    title: "Runtime Wire: Yardi buys Sidero Labs as Talos Linux adds a native hypervisor"
  - id: rw-cupar
    resource: https://runtimewire.com/article/sidero-talos-private-ai-cupar
    title: "Runtime Wire: Sidero launches an immutable OS and console for private AI (Oct 1, 2026)"
  - id: sa-sidero-2024
    resource: https://siliconangle.com/2024/10/23/sidero-labs-raises-4m-advance-kubernetes-bare-metal-cluster-management-solutions/
    title: "SiliconANGLE: Sidero Labs raises $4M (Oct 23, 2024)"
    author: org:siliconangle
---

# What happened
On September 14, 2026 Sidero Labs, maker of the immutable Kubernetes OS Talos Linux and the Omni management plane, announced it had joined Yardi Systems, a privately held property-management software company with more than 10,000 employees that was already running Talos in production[^sidero-yardi]. Financial terms were not disclosed[^rw-yardi]; one later report says the deal was done in July 2026 and only announced in September, which is not confirmed by the company[^rw-cupar]. At the same time Sidero announced Talos Hypervisor, which runs VMs and standalone containers on Talos without Kubernetes; the alpha was due at TalosCon (Amsterdam, Oct 15-16, 2026) and GA is planned for December 2026[^pr-talos-hypervisor].

# Why it matters
Sidero was a small venture-backed vendor (its last disclosed raise was $4M led by Hiro Capital in Oct 2024)[^sa-sidero-2024], and buyers worried about whether it would last. A profitable, bootstrapped owner that does not need a quick return removes that risk. Talos stays MPL-2.0, and its repositories and contribution process do not change[^sidero-yardi]. It is an unusual exit: the buyer is a large end-user, not an infrastructure vendor or a hyperscaler.

# Outcome so far
- On Oct 1, 2026 Sidero launched "Talos Linux for AI" (open source, NVIDIA/AMD GPU support) and Talos Cupar, a commercial private-AI console (limited availability, GA planned for March 2027). Yardi's Virtuoso AI platform is its first named customer[^rw-cupar].
- No license change. Watch whether Sidero's roadmap now follows Yardi's needs (private AI, virtualization).

# Related
- [Talos Linux](/projects/cloud-native/talos-linux.md), [Proxmox VE](/projects/cloud-native/proxmox-ve.md), [KubeVirt](/projects/cloud-native/kubevirt.md)

[^sidero-yardi]: https://www.siderolabs.com/blog/sidero-labs-joins-yardi
[^pr-talos-hypervisor]: https://www.prnewswire.com/news-releases/talos-linux-adds-native-hypervisor-and-edge-container-support--see-it-live-at-taloscon-2026-302877040.html
[^rw-yardi]: https://runtimewire.com/article/yardi-buys-sidero-labs-talos-linux-hypervisor
[^rw-cupar]: https://runtimewire.com/article/sidero-talos-private-ai-cupar
[^sa-sidero-2024]: https://siliconangle.com/2024/10/23/sidero-labs-raises-4m-advance-kubernetes-bare-metal-cluster-management-solutions/
