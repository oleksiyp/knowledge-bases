---
type: OSS Project
title: "Kubernetes"
description: "The container orchestration standard; 2024-2026 was a \"boring\", stability-first era with steady thrice-yearly releases (1.32-1.37), DRA and in-place resize going GA, but chronic maintainer shortages in ecosystem sub-projects (ingress-nginx retired March 2026)."
resource: https://github.com/kubernetes/kubernetes
tags: [cloud-native, orchestration, apache-2.0, foundation-hosted, cncf-graduated]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2014-)"]
governance: foundation
steward: Cloud Native Computing Foundation (Linux Foundation)
backing_orgs: [organizations/cncf]
metrics:
  github_stars: { value: 128168, as_of: 2026-10-03 }
  enhancements_v1_37: { value: 67, as_of: 2026-08-26 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: k8s-gh
    resource: https://github.com/kubernetes/kubernetes
    title: "Kubernetes GitHub repository"
    last_modified: 2026-10-03T00:00:00Z
  - id: k8s-releases
    resource: https://kubernetes.io/releases/
    title: "Kubernetes releases and support windows"
  - id: k8s-134
    resource: https://kubernetes.io/blog/2025/08/27/kubernetes-v1-34-release/
    title: "Kubernetes v1.34: Of Wind & Will"
    author: org:kubernetes
  - id: k8s-135
    resource: https://kubernetes.io/blog/2025/12/17/kubernetes-v1-35-release/
    title: "Kubernetes v1.35: Timbernetes"
    author: org:kubernetes
  - id: k8s-136
    resource: https://kubernetes.io/blog/2026/04/22/kubernetes-v1-36-release/
    title: "Kubernetes v1.36: Haru"
    author: org:kubernetes
  - id: k8s-137
    resource: https://kubernetes.io/blog/2026/08/26/kubernetes-v1-37-release/
    title: "Kubernetes v1.37: Garhwal"
    author: org:kubernetes
  - id: ingn-retire
    resource: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
    title: "Ingress NGINX Retirement: What You Need to Know"
    author: org:kubernetes
  - id: ingn-statement
    resource: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
    title: "Ingress NGINX: Statement from the Kubernetes Steering and Security Response Committees"
    author: org:kubernetes
  - id: eso-issue
    resource: https://github.com/external-secrets/external-secrets/issues/5084
    title: "External Secrets Operator: pausing releases (maintainer shortage)"
  - id: bex-boring
    resource: https://bex.co/blog/2026/09/25/kubernetes-boring-era-stability-releases-upgrade-season
    title: "Kubernetes Enters Its Boring Era"
---

# Summary
Kubernetes is the uncontested control plane of cloud-native infrastructure, and over the last two years it behaved like mature infrastructure: three on-schedule minor releases a year (v1.35 Dec 2025, v1.36 Apr 2026, v1.37 Aug 2026), each with 58-70 tracked enhancements[^k8s-134][^k8s-135][^k8s-136][^k8s-137]. Headline features matured rather than appeared: Dynamic Resource Allocation (GPU/accelerator scheduling) went GA in v1.34 and in-place Pod resize went GA in v1.35[^k8s-134][^k8s-135]. The core project is healthy (128k stars, daily commits[^k8s-gh]); the risk is at the edges, where widely deployed sub-projects ran on one or two volunteers — the retirement of ingress-nginx in March 2026 is the defining governance story[^ingn-retire][^ingn-statement]. OSS verdict: **stable**; there is no direct business, but it underpins the Kubernetes vendor economy.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-24 | IngressNightmare CVEs in ingress-nginx expose ~43% of cloud environments | OSS | − |
| W24 | 2025-07 | External Secrets Operator pauses releases for lack of maintainers[^eso-issue] | OSS | − |
| W24 | 2025-08-27 | v1.34 "Of Wind & Will": 58 enhancements, DRA GA[^k8s-134] | OSS | + |
| W12 | 2025-11-11 | SIG Network/SRC announce ingress-nginx retirement for March 2026[^ingn-retire] | OSS | − |
| W12 | 2025-12-17 | v1.35 "Timbernetes": 60 enhancements, in-place Pod resize GA[^k8s-135] | OSS | + |
| W9 | 2026-01-29 | Steering + Security Response Committee joint statement urging migration[^ingn-statement] | OSS | − |
| W9 | 2026-03 | ingress-nginx retired and repository archived | OSS | − |
| W6 | 2026-04-22 | v1.36 "Haru": 70 enhancements (18 GA)[^k8s-136] | OSS | + |
| W3 | 2026-08-26 | v1.37 "Garhwal": 67 enhancements, Metrics API stable, HPA scale-to-zero beta[^k8s-137] | OSS | + |

# OSS successes
- Predictable cadence: every release in the window shipped on schedule with ~1 year of patch support per minor[^k8s-releases].
- AI/accelerator readiness: DRA GA (v1.34) made Kubernetes the default substrate for GPU clusters[^k8s-134]; workload-aware scheduling arrived in v1.35/1.37[^k8s-135][^k8s-137].
- Long-standing gaps closed: in-place Pod resize GA (v1.35)[^k8s-135]; metrics.k8s.io went stable in v1.37 after years in beta[^k8s-137][^bex-boring].

# OSS failures / risks
- Sub-project maintainer fatigue: ingress-nginx, used by about half of cloud-native environments, was retired because only 1-2 people maintained it[^ingn-statement]; External Secrets Operator froze releases in 2025 for the same reason[^eso-issue].
- Upgrade burden: v1.37 makes cgroup v1 nodes a hard kubelet failure by default and starts IPVS deprecation, pushing work onto part-time platform teams[^bex-boring].

# Business successes
- n/a for the project itself; the managed-Kubernetes market (EKS/GKE/AKS) and vendor ecosystem (Cilium, Argo, Flux, observability) continue to grow on top of it.

# Business failures / risks
- Vendors capture value while volunteer-maintained components (ingress, secrets) starve — the tragedy-of-the-commons pattern made explicit in the January 2026 Steering statement[^ingn-statement].

# By window
## W3
- v1.37 "Garhwal" released Aug 26, 2026 with 67 enhancements; cgroup v1 enforcement and IPVS deprecation are the main upgrade blockers[^k8s-137][^bex-boring].
## W6
- v1.36 "Haru" (Apr 22, 2026): 70 enhancements, 18 to stable[^k8s-136].
## W9
- Steering/SRC statement (Jan 29) and ingress-nginx end-of-life (March 2026)[^ingn-statement].
## W12
- Retirement of ingress-nginx announced (Nov 11, 2025)[^ingn-retire]; v1.35 ships with in-place Pod resize GA[^k8s-135].
## W24
- v1.32-v1.34 releases; DRA GA in v1.34[^k8s-134]; IngressNightmare and ESO maintainer crisis expose sub-project fragility[^eso-issue].

# Lessons
- A foundation-hosted core can be healthy while its most-used add-ons are critically under-maintained; adoption numbers are not maintainer numbers.
- Formal "retire with notice" (four months plus a Steering statement) is a better failure mode than silent abandonment.
- Maturity shifts the cost centre from features to upgrades and migrations.

# Related
- [ingress-nginx](/projects/cloud-native/ingress-nginx.md), [Gateway API](/projects/cloud-native/gateway-api.md), [External Secrets Operator](/projects/cloud-native/external-secrets-operator.md)
- [Event: ingress-nginx retirement](/events/2025-11-ingress-nginx-retirement.md), [Event: IngressNightmare](/events/2025-03-ingressnightmare-cves.md)
- [CNCF](/organizations/cncf.md), [Domain review](/domains/cloud-native.md)

[^k8s-gh]: https://github.com/kubernetes/kubernetes
[^k8s-releases]: https://kubernetes.io/releases/
[^k8s-134]: https://kubernetes.io/blog/2025/08/27/kubernetes-v1-34-release/
[^k8s-135]: https://kubernetes.io/blog/2025/12/17/kubernetes-v1-35-release/
[^k8s-136]: https://kubernetes.io/blog/2026/04/22/kubernetes-v1-36-release/
[^k8s-137]: https://kubernetes.io/blog/2026/08/26/kubernetes-v1-37-release/
[^ingn-retire]: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
[^ingn-statement]: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
[^eso-issue]: https://github.com/external-secrets/external-secrets/issues/5084
[^bex-boring]: https://bex.co/blog/2026/09/25/kubernetes-boring-era-stability-releases-upgrade-season
