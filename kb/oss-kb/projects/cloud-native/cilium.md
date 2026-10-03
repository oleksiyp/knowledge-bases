---
type: OSS Project
title: "Cilium (and Tetragon / eBPF)"
description: "eBPF-based Kubernetes networking, security and observability; CNCF-graduated, default CNI across major clouds, steady semiannual releases (1.17-1.20) while steward Isovalent was absorbed into Cisco's networking/security portfolio."
resource: https://github.com/cilium/cilium
tags: [cloud-native, networking, ebpf, apache-2.0, foundation-hosted, cncf-graduated]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2015-)"]
governance: foundation
steward: Cloud Native Computing Foundation (Isovalent/Cisco main contributor)
backing_orgs: [organizations/isovalent, organizations/cncf]
metrics:
  github_stars: { value: 25592, as_of: 2026-10-03 }
  latest_minor: { value: "v1.20.0 (2026-07-29)", as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cilium-gh
    resource: https://github.com/cilium/cilium
    title: "Cilium GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: cisco-close
    resource: https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2024/m04/cisco-completes-acquisition-of-isovalent-to-define-the-future-of-multicloud-networking-and-security.html
    title: "Cisco completes acquisition of Isovalent"
    author: org:cisco
  - id: cisco-blog-26
    resource: https://blogs.cisco.com/?p=486429
    title: "Cisco Blogs: Extending Infrastructure Fabric — the journey to cloud-native Isovalent networking (Feb 2026)"
    author: org:cisco
  - id: cisco-offer
    resource: https://www.cisco.com/c/dam/en_us/about/doing_business/legal/OfferDescriptions/Isovalent-Enterprise-for-Cilium.pdf
    title: "Cisco offer description — Isovalent Enterprise Platform"
  - id: google-oss
    resource: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
    title: "Google OSS blog: transitioning away from Ingress NGINX"
---

# Summary
Cilium is the leading eBPF-based CNI, with Tetragon for runtime security; Cisco says it is used by the Kubernetes offerings of Google, AWS and Azure and by some of the largest AI/LLM providers[^cisco-blog-26]. The project kept a six-month cadence — v1.17 (Feb 2025), v1.18 (Jul 2025), v1.19 (Feb 2026), v1.20 (Jul 29, 2026)[^cilium-gh] — and is a cited conformant Gateway API implementation for ingress-nginx refugees[^google-oss]. Its steward Isovalent was acquired by Cisco (closed April 12, 2024) and is now sold as the Isovalent Enterprise Platform and integrated with Cisco Nexus One / Hypershield[^cisco-close][^cisco-offer][^cisco-blog-26]. Verdict: OSS **thriving**; business **acquired** (operating as a Cisco product line).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-04 | Cilium 1.17[^cilium-gh] | OSS | + |
| W24 | 2025-07-29 | Cilium 1.18[^cilium-gh] | OSS | + |
| W12 | 2025-12-01/12 | Cisco updates Isovalent Enterprise support terms/promotions[^cisco-offer] | Business | flat |
| W9 | 2026-02-04 | Cilium 1.19[^cilium-gh] | OSS | + |
| W9 | 2026-02-12 | Named as conformant Gateway API implementation in ingress-nginx migration guidance[^google-oss] | OSS | + |
| W9 | 2026-02-23 | Cisco positions Isovalent with Nexus One for AI networking[^cisco-blog-26] | Business | + |
| W3 | 2026-07-29 | Cilium 1.20[^cilium-gh] | OSS | + |

# OSS successes
- De facto standard CNI on managed Kubernetes; CNCF graduated[^cisco-blog-26].
- Gateway API and service-mesh features capture ingress-nginx migrations[^google-oss].

# OSS failures / risks
- Heavy reliance on one corporate employer (Cisco/Isovalent) for core maintainers; corporate priorities may drift toward Cisco hardware integration.

# Business successes
- Cisco acquisition (closed 2024) gave Isovalent enterprise distribution; Cisco markets it for AI data-center networking[^cisco-close][^cisco-blog-26].

# Business failures / risks
- Standalone revenue no longer disclosed; inside a large hardware vendor, community perception risk persists.

# By window
## W3
- Cilium 1.20 (Jul 29, 2026)[^cilium-gh].
## W6
- No notable events found.
## W9
- Cilium 1.19; Gateway API role in ingress-nginx migrations; Cisco AI networking positioning[^cilium-gh][^google-oss][^cisco-blog-26].
## W12
- Cisco Isovalent Enterprise commercial-term updates (Dec 2025)[^cisco-offer].
## W24
- Cilium 1.17 and 1.18[^cilium-gh].

# Lessons
- Donating the core to a foundation before an acquisition (Cilium was already CNCF) insulates the community from the acquirer.
- eBPF moved from niche to default kernel-level substrate for networking and security.

# Related
- [Isovalent](/organizations/isovalent.md), [Gateway API](/projects/cloud-native/gateway-api.md), [Istio](/projects/cloud-native/istio.md), [OpenTelemetry (OBI eBPF)](/projects/cloud-native/opentelemetry.md)

[^cilium-gh]: https://github.com/cilium/cilium
[^cisco-close]: https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2024/m04/cisco-completes-acquisition-of-isovalent-to-define-the-future-of-multicloud-networking-and-security.html
[^cisco-blog-26]: https://blogs.cisco.com/?p=486429
[^cisco-offer]: https://www.cisco.com/c/dam/en_us/about/doing_business/legal/OfferDescriptions/Isovalent-Enterprise-for-Cilium.pdf
[^google-oss]: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
