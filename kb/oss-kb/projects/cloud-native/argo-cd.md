---
type: OSS Project
title: "Argo CD"
description: "CNCF-graduated GitOps continuous-delivery tool; Argo CD 3.x shipped on schedule, it is the third-highest-velocity CNCF project, and commercial steward Akuity grew to 100+ customers — GitOps' clear winner over Flux in mindshare."
resource: https://github.com/argoproj/argo-cd
tags: [cloud-native, gitops, ci-cd, apache-2.0, foundation-hosted, cncf-graduated]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2018-)"]
governance: foundation
steward: Cloud Native Computing Foundation (Argo project)
backing_orgs: [organizations/akuity, organizations/cncf]
metrics:
  github_stars: { value: 24319, as_of: 2026-10-03 }
  latest_minor: { value: "v3.5.0 (2026-08-04)", as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: argocd-gh
    resource: https://github.com/argoproj/argo-cd
    title: "Argo CD GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: akuity-2025
    resource: https://finance.yahoo.com/sectors/technology/articles/gitops-leader-akuity-celebrates-5-153000818.html
    title: "Akuity celebrates 5 years with record 2025 results (Mar 19, 2026)"
    author: org:akuity
  - id: akuity-a
    resource: https://akuity.io/blog/announcing-series-a-funding
    title: "Akuity Series A announcement"
---

# Summary
Argo CD is the dominant GitOps tool for Kubernetes. The 3.x line (3.1 Aug 2025, 3.2 Nov 2025, 3.3 Feb 2026, 3.5 Aug 2026) shipped steadily[^argocd-gh], and Akuity — founded by Argo's creators — says Argo CD ranks just behind Kubernetes and OpenTelemetry in CNCF development velocity, with 97% of users running it in production[^akuity-2025]. Akuity reported FY2025 with 100+ customers (including CoreWeave and Thinking Machines Lab), 43M deployments (10x YoY), new ARR up 150% and 130% NRR[^akuity-2025]. Verdict: OSS **thriving**, business **growing** on a modest $20M Series A[^akuity-a].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-13 | Argo CD 3.1[^argocd-gh] | OSS | + |
| W12 | 2025-11-04 | Argo CD 3.2[^argocd-gh] | OSS | + |
| W9 | 2026-02-02 | Argo CD 3.3[^argocd-gh] | OSS | + |
| W9 | 2026-03-19 | Akuity FY2025: 100+ customers, 43M deployments, new ARR +150%[^akuity-2025] | Business | + |
| W3 | 2026-08-04 | Argo CD 3.5[^argocd-gh] | OSS | + |

# OSS successes
- Third-highest CNCF velocity; 24k+ stars; near-universal production use among adopters[^akuity-2025][^argocd-gh].
- Kargo (Akuity's promotion tool) tripled stars since early 2024[^akuity-2025].

# OSS failures / risks
- Security surface of a cluster-admin-level controller; Akuity markets a "security-hardened" distribution, implying upstream gaps.

# Business successes
- Capital-efficient growth with AI-infrastructure customers; "Akuity Intelligence" agentic features[^akuity-2025].

# Business failures / risks
- Competes with free upstream and with platform vendors (Red Hat OpenShift GitOps, cloud providers) bundling Argo CD.

# By window
## W3
- Argo CD 3.5 (Aug 4, 2026)[^argocd-gh].
## W6
- No notable events found.
## W9
- Argo CD 3.3; Akuity FY2025 results[^argocd-gh][^akuity-2025].
## W12
- Argo CD 3.2[^argocd-gh].
## W24
- Argo CD 3.1[^argocd-gh].

# Lessons
- A strong UI and multi-cluster story beat Flux's library-first design for mainstream adoption.
- Founders-led vendors can grow on a small raise when the project is foundation-neutral.

# Related
- [Akuity](/organizations/akuity.md), [Flux](/projects/cloud-native/flux.md), [Kubernetes](/projects/cloud-native/kubernetes.md)

[^argocd-gh]: https://github.com/argoproj/argo-cd
[^akuity-2025]: https://finance.yahoo.com/sectors/technology/articles/gitops-leader-akuity-celebrates-5-153000818.html
[^akuity-a]: https://akuity.io/blog/announcing-series-a-funding
