---
type: OSS Project
title: "Crossplane"
description: "Kubernetes-based control-plane framework for infrastructure (IaC alternative); Crossplane 2.0 (Aug 2025) and CNCF graduation (Nov 2025) were OSS wins, but Upbound's move to make new Official Providers run only on its UXP distribution split the ecosystem — OSS growing, business contested."
resource: https://github.com/crossplane/crossplane
tags: [cloud-native, iac, platform-engineering, apache-2.0, foundation-hosted, cncf-graduated, open-core]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2018-)"]
governance: foundation
steward: Cloud Native Computing Foundation (Upbound main contributor)
backing_orgs: [organizations/upbound, organizations/cncf]
metrics:
  github_stars: { value: 12131, as_of: 2026-10-03 }
  contributors: { value: "3,000+ from 450+ orgs", as_of: 2025-11-06 }
  downloads: { value: "100M+", as_of: 2025-11-06 }
oss_verdict: growing
business_verdict: struggling
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: xp-gh
    resource: https://github.com/crossplane/crossplane
    title: "Crossplane GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: xp-grad
    resource: https://www.upbound.io/blog/crossplane-graduates-from-cncf-upbound-redefines-ai-native-infrastructure
    title: "Upbound: Crossplane graduates from CNCF"
    author: org:upbound
  - id: uxp2
    resource: https://blog.upbound.io/introducing-upbound-crossplane-2-0
    title: "Introducing Upbound Crossplane 2.0"
    author: org:upbound
  - id: uxp2-clarify
    resource: https://www.upbound.io/blog/uxp-2-0-and-crossplane
    title: "UXP 2.0 and Crossplane: Clarifying the Relationship (Aug 19, 2025)"
    author: org:upbound
  - id: cncf-xp-grad
    resource: https://www.cncf.io/announcements/2025/11/06/cloud-native-computing-foundation-announces-graduation-of-crossplane/
    title: "CNCF announces graduation of Crossplane (Nov 6, 2025)"
    author: org:cncf
  - id: upbound-pkg-changes
    resource: https://www.upbound.io/blog/upbound-official-packages-changes
    title: "Upbound: Upcoming changes to Upbound Official Packages (Jan 15, 2025; enforced Mar 25, 2025)"
    author: org:upbound
  - id: upbound-providers-update
    resource: https://www.upbound.io/blog/an-update-on-upbounds-official-providers
    title: "Upbound: An update on Upbound's Official Providers (free community builds in crossplane-contrib)"
    author: org:upbound
  - id: upbound-v3
    resource: https://www.globenewswire.com/news-release/2026/08/19/3347812/0/en/upbound-launches-platform-to-unify-cloud-and-ai-infrastructure-operations.html
    title: "GlobeNewswire: Upbound launches platform to unify cloud and AI infrastructure operations (Upbound V3, Aug 19, 2026)"
    author: org:upbound
  - id: intel-upbound
    resource: https://www.intelcapital.com/upbound-raises-60m-in-funding-from-altimeter-capital-gv-intel-capital-and-others-to-advance-its-universal-cloud-management-platform/
    title: "Intel Capital: Upbound raises $60M (Series B, 2021)"
---

# Summary
Crossplane lets platform teams expose cloud infrastructure as Kubernetes APIs. Technically, 2025 was its best year: Crossplane 2.0 shipped Aug 14, 2025 and CNCF graduation followed on Nov 6, 2025, with 3,000+ contributors from 450+ organizations, 100M+ downloads and adopters including Nike, Autodesk, SAP, Elastic and NASA Science Cloud[^xp-gh][^cncf-xp-grad][^xp-grad]. Minor releases continued quarterly (v2.1 Nov 2025 → v2.4 Aug 2026)[^xp-gh]. The friction came from its steward: from Mar 25, 2025 free users could pull only the latest version of Upbound's Official Providers[^upbound-pkg-changes], and with v2.0 Upbound's Official Providers run only on its UXP distribution, leaving upstream users with old provider versions or community providers[^uxp2-clarify]. Upbound's last disclosed funding is a $60M Series B (2021; ~$69M total)[^intel-upbound]; its 2026 answer is Upbound V3 (Aug 19, 2026), a fleet-management platform for "cloud and AI infrastructure" claiming production adoption of Crossplane at 1,000+ organizations[^upbound-v3]. Verdict: OSS **growing**; business **struggling** (provider gating suggests monetization pressure; no new funding found).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-25 | Free tier limited to latest Official Provider version; older versions require paid subscription[^upbound-pkg-changes] | Business | − |
| W24 | 2025-05-21 | Crossplane v1.20, last 1.x minor[^xp-gh] | OSS | + |
| W24 | 2025-08-14 | Crossplane 2.0 and Upbound Crossplane (UXP) 2.0 "AI-native" distribution[^xp-gh][^uxp2] | Both | + |
| W24 | 2025-08-19 | Upbound: Official Providers v2+ run only on UXP (free Community Edition)[^uxp2-clarify] | Business | − |
| W12 | 2025-11-05 | Crossplane v2.1[^xp-gh] | OSS | + |
| W12 | 2025-11-06 | CNCF graduation[^cncf-xp-grad] | OSS | + |
| W9 | 2026-02-17 | v2.2[^xp-gh] | OSS | flat |
| W6 | 2026-05-21 | v2.3[^xp-gh] | OSS | flat |
| W3 | 2026-08-19 | Upbound V3 platform (SSO/fleet RBAC, cross-region DR, SBOM marketplace)[^upbound-v3] | Business | + |
| W3 | 2026-08-20 | v2.4[^xp-gh] | OSS | flat |

# OSS successes
- Graduation and 2.0 rearchitecture (namespaced resources, operations) delivered on schedule[^xp-grad][^xp-gh].
- Broad enterprise adoption list[^xp-grad].

# OSS failures / risks
- Provider ecosystem split: the most-used AWS/GCP/Azure providers are now vendor-gated for new versions, with free Apache-2.0 builds published monthly under crossplane-contrib as the community path[^uxp2-clarify][^upbound-providers-update].
- Competes with Terraform/OpenTofu and Pulumi, which have larger user bases.

# Business successes
- UXP Community Edition is free "forever" with enterprise upsell; AI integrations (Claude/OpenAI) marketed[^uxp2-clarify][^uxp2].

# Business failures / risks
- No new funding since the 2021 Series B found[^intel-upbound]; pivot to "AI-native control plane" messaging resembles a repositioning under pressure. Layoff reports were searched for but not verified.

# By window
## W3
- Upbound V3 (Aug 19, 2026); v2.4 (Aug 20, 2026)[^upbound-v3][^xp-gh].
## W6
- v2.3 (May 21, 2026)[^xp-gh].
## W9
- v2.2 (Feb 17, 2026)[^xp-gh].
## W12
- CNCF graduation (Nov 6, 2025); v2.1[^cncf-xp-grad][^xp-gh].
## W24
- Official Provider version access restricted for free users (Mar 25, 2025)[^upbound-pkg-changes]; Crossplane 2.0 and UXP 2.0; Official Providers gated to UXP[^uxp2][^uxp2-clarify].

# Lessons
- Vendors can keep the core neutral yet still re-centralize value by gating the most-used extensions (providers).
- Graduation signals community maturity, not vendor health.

# Related
- [Upbound](/organizations/upbound.md), [Pulumi](/projects/cloud-native/pulumi.md), license story in [OpenTofu](/projects/licensing-forks/opentofu.md) and [Terraform](/projects/licensing-forks/terraform.md)
- [Event: Crossplane 2.0 provider split](/events/2025-08-crossplane-2-uxp-official-providers.md)

[^xp-gh]: https://github.com/crossplane/crossplane
[^xp-grad]: https://www.upbound.io/blog/crossplane-graduates-from-cncf-upbound-redefines-ai-native-infrastructure
[^uxp2]: https://blog.upbound.io/introducing-upbound-crossplane-2-0
[^uxp2-clarify]: https://www.upbound.io/blog/uxp-2-0-and-crossplane
[^cncf-xp-grad]: https://www.cncf.io/announcements/2025/11/06/cloud-native-computing-foundation-announces-graduation-of-crossplane/
[^upbound-pkg-changes]: https://www.upbound.io/blog/upbound-official-packages-changes
[^upbound-providers-update]: https://www.upbound.io/blog/an-update-on-upbounds-official-providers
[^upbound-v3]: https://www.globenewswire.com/news-release/2026/08/19/3347812/0/en/upbound-launches-platform-to-unify-cloud-and-ai-infrastructure-operations.html
[^intel-upbound]: https://www.intelcapital.com/upbound-raises-60m-in-funding-from-altimeter-capital-gv-intel-capital-and-others-to-advance-its-universal-cloud-management-platform/
