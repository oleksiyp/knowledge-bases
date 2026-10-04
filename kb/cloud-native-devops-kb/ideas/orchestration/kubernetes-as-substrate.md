---
type: Idea
title: Kubernetes as a shared substrate, not a universal application requirement
description: Kubernetes won a durable infrastructure role; application suitability still depends on isolation, scale
  and operational capacity.
area: orchestration
verdict: winning
confidence: medium
tags:
- cloud-native
- devops
- orchestration
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: cncf25
  resource: https://www.cncf.io/reports/the-cncf-annual-cloud-native-survey/
  title: CNCF Annual Cloud Native Survey 2025, published January 2026
- id: gitpod
  resource: https://ona.com/stories/we-are-leaving-kubernetes
  title: Gitpod explains leaving Kubernetes, October 2024
- id: tenancy
  resource: https://kubernetes.io/docs/concepts/security/multi-tenancy/
  title: 'Kubernetes: multi-tenancy'
---

# Kubernetes as a shared substrate, not a universal application requirement

## Verdict

**WINNING — Kubernetes won a durable infrastructure role; application suitability still depends on isolation, scale and operational capacity.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

The CNCF 2025 survey reports production Kubernetes use by 82% of its container-using respondents. That is evidence inside a selected cloud-native population, not all companies.[^cncf25] Gitpod described leaving Kubernetes for its development-environment workload in October 2024.[^gitpod]

## What succeeded

A common workload and extension API makes it possible to reuse deployment, policy and instrumentation practices across many teams. The practical benefit is accumulated integration work, rather than identical underlying clouds. Managed offerings can reduce the amount of cluster machinery an application organization owns.

## What failed or remained difficult

“Every application needs a cluster” confuses an infrastructure ecosystem with a business requirement. Arbitrary customer code, strict isolation, very small fleets and unusual lifecycle requirements can make another substrate easier. Namespace separation alone is not a complete security boundary.[^tenancy]

## Why and when it fits

The causal interpretation is an ecosystem advantage with a complexity threshold. A large platform team can amortize controllers, upgrades and incident training; a small service may pay those costs without comparable reuse.

Use it when shared scheduling and repeated platform capabilities justify an explicit operating team. Compare a managed container service or VM deployment against the whole cluster lifecycle, including upgrades and recovery.

## What would change the verdict

Independent evidence of sustained migrations away across ordinary production workloads would weaken the ecosystem verdict; measured lower total effort at small scale would broaden the fit. Neither is established by the cases here.

## Related

* [Area review](/areas/orchestration.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

* [System profile: Kubernetes](/systems/kubernetes.md)

[^cncf25]: [CNCF Annual Cloud Native Survey 2025, published January 2026](https://www.cncf.io/reports/the-cncf-annual-cloud-native-survey/)
[^gitpod]: [Gitpod explains leaving Kubernetes, October 2024](https://ona.com/stories/we-are-leaving-kubernetes)
[^tenancy]: [Kubernetes: multi-tenancy](https://kubernetes.io/docs/concepts/security/multi-tenancy/)
