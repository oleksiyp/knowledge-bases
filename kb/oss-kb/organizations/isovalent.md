---
type: Organization
title: "Isovalent (Cisco)"
description: "Creator of Cilium and Tetragon and the main eBPF company; acquired by Cisco (closed April 12, 2024) and now sold as Cisco's Isovalent Enterprise Platform integrated with Nexus One and Hypershield."
resource: https://isovalent.com
tags: [commercial-open-source, ebpf, networking, security, acquired]
org_kind: coss-startup
hq: Cupertino, USA (Cisco subsidiary)
funding: { total_usd: "unverified", last_round: "Acquired by Cisco", last_round_date: 2024-04-12, valuation_usd: "undisclosed" }
business_verdict: acquired
projects: [projects/cloud-native/cilium]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cisco-close
    resource: https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2024/m04/cisco-completes-acquisition-of-isovalent-to-define-the-future-of-multicloud-networking-and-security.html
    title: "Cisco completes acquisition of Isovalent"
    author: org:cisco
  - id: cisco-blog-26
    resource: https://blogs.cisco.com/?p=486429
    title: "Cisco Blogs: the journey to cloud-native Isovalent networking (Feb 23, 2026)"
    author: org:cisco
  - id: cisco-offer
    resource: https://www.cisco.com/c/dam/en_us/about/doing_business/legal/OfferDescriptions/Isovalent-Enterprise-for-Cilium.pdf
    title: "Cisco offer description — Isovalent Enterprise Platform"
---

# Summary
Isovalent created Cilium and Tetragon and was acquired by Cisco, closing April 12, 2024 (just before this KB's window)[^cisco-close]. Within the window it operated as a Cisco product line: Cisco updated Isovalent Enterprise support terms in December 2025 and in February 2026 positioned Isovalent with Nexus One for AI data-center networking, noting Cilium's use by Google, AWS and Azure Kubernetes offerings and major LLM providers[^cisco-offer][^cisco-blog-26]. Business verdict: **acquired**.

# Business timeline
| Window | Date | Event |
|---|---|---|
| (pre-window) | 2024-04-12 | Cisco completes acquisition[^cisco-close] |
| W12 | 2025-12-01/12 | Isovalent Enterprise support/promotion changes[^cisco-offer] |
| W9 | 2026-02-23 | Cisco Nexus One + Isovalent AI networking positioning[^cisco-blog-26] |

# Monetization model
Enterprise distribution of Cilium/Tetragon with support, sold through Cisco's enterprise and security channels[^cisco-offer].

# Successes
- Cilium's ubiquity gives Cisco a cloud-native foothold beyond hardware[^cisco-blog-26].

# Failures / risks
- Community worries about Cisco priorities; standalone metrics no longer reported.

# Related
- [Cilium](/projects/cloud-native/cilium.md), [Gateway API](/projects/cloud-native/gateway-api.md)

[^cisco-close]: https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2024/m04/cisco-completes-acquisition-of-isovalent-to-define-the-future-of-multicloud-networking-and-security.html
[^cisco-blog-26]: https://blogs.cisco.com/?p=486429
[^cisco-offer]: https://www.cisco.com/c/dam/en_us/about/doing_business/legal/OfferDescriptions/Isovalent-Enterprise-for-Cilium.pdf
