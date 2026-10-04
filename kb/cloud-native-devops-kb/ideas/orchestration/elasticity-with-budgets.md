---
type: Idea
title: Elastic scheduling with explicit disruption and resource budgets
description: Autoscaling matured into useful capacity control, but cost optimization cannot ignore workload disruption.
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
- id: karpenter
  resource: https://aws.amazon.com/about-aws/whats-new/2024/08/karpenter-1-0/
  title: Karpenter 1.0 announcement, August 2024
- id: dra
  resource: https://kubernetes.io/blog/2025/09/01/kubernetes-v1-34-dra-updates/
  title: 'Kubernetes 1.34: DRA updates'
- id: resize
  resource: https://kubernetes.io/blog/2025/12/19/kubernetes-v1-35-in-place-pod-resize-ga/
  title: In-place Pod resize graduates to GA
- id: kueue
  resource: https://kubernetes.io/blog/2022/10/04/introducing-kueue/
  title: Introducing Kueue, October 2022
- id: disruption
  resource: https://karpenter.sh/docs/concepts/disruption/
  title: Karpenter disruption controls
- id: autopilot
  resource: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-resource-requests
  title: GKE Autopilot resource requests
- id: case-extension
  resource: /research/zalando-stateful-autoscaling.md
  title: Additional case evidence
---

# Elastic scheduling with explicit disruption and resource budgets

## Verdict

**WINNING — Autoscaling matured into useful capacity control, but cost optimization cannot ignore workload disruption.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

Karpenter 1.0 arrived in August 2024. Kubernetes added GA dynamic resource allocation in 1.34 and GA in-place Pod resource resizing in 1.35 during 2025.[^karpenter][^dra][^resize] Kueue, introduced in October 2022, addresses job admission and shared quotas rather than replacing Pod placement.[^kueue]

## What succeeded

These are specific improvements to provisioning, accelerator allocation and resizing. They make resource policies more expressible and allow more work to share infrastructure. This is stronger evidence of technical maturation than a generic claim that AI workloads are easy on Kubernetes.

## What failed or remained difficult

Consolidation can evict useful work; resource requests can be inaccurate; scarce accelerators can still be unavailable. Karpenter exposes disruption budgets because automatic optimization has availability consequences.[^disruption] Managed Autopilot imposes request rules and defaults, so removing node management does not remove workload sizing.[^autopilot]

## Why and when it fits

The useful abstraction is a control loop with constraints. It works when a team can describe acceptable interruption, headroom and scheduling delay. A utilization percentage by itself cannot express these business costs.

For queues and interruptible batch jobs, track cost per completed job and queue delay. For interactive services, add tail latency and disruption limits. Test the policy under a capacity shortage before expanding it.

## What would change the verdict

Comparable production studies showing lower total cost without unacceptable latency or interruption across workload classes would justify a stronger economic verdict.

## Related

* [Area review](/areas/orchestration.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

* [System profile: Karpenter](/systems/karpenter.md)

* [System profile: Kueue](/systems/kueue.md)

## Additional production and measurement evidence

Zalando adds direct evidence of scaling failure at the application/operator boundary. Replica-count policy alone does not express data movement or recovery from an interrupted transition.[^case-extension]

* [Read the case and limitations](/research/zalando-stateful-autoscaling.md)

[^karpenter]: [Karpenter 1.0 announcement, August 2024](https://aws.amazon.com/about-aws/whats-new/2024/08/karpenter-1-0/)
[^dra]: [Kubernetes 1.34: DRA updates](https://kubernetes.io/blog/2025/09/01/kubernetes-v1-34-dra-updates/)
[^resize]: [In-place Pod resize graduates to GA](https://kubernetes.io/blog/2025/12/19/kubernetes-v1-35-in-place-pod-resize-ga/)
[^kueue]: [Introducing Kueue, October 2022](https://kubernetes.io/blog/2022/10/04/introducing-kueue/)
[^disruption]: [Karpenter disruption controls](https://karpenter.sh/docs/concepts/disruption/)
[^autopilot]: [GKE Autopilot resource requests](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-resource-requests)
[^case-extension]: [Additional case evidence](/research/zalando-stateful-autoscaling.md)
