---
type: Area
title: Orchestration and workload placement
description: Kubernetes matured as shared infrastructure while selective alternatives remained rational.
area: orchestration
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: i1
  resource: /ideas/orchestration/kubernetes-as-substrate.md
  title: Kubernetes as a shared substrate, not a universal application requirement
- id: i2
  resource: /ideas/orchestration/elasticity-with-budgets.md
  title: Elastic scheduling with explicit disruption and resource budgets
- id: i3
  resource: /ideas/orchestration/operators-and-tenancy.md
  title: Operators and virtual tenancy as platform software
- id: case-zalando-stateful-autoscaling
  resource: /research/zalando-stateful-autoscaling.md
  title: 'Zalando: stateful autoscaling stalled across overlapping control loops'
---

# Orchestration and workload placement

Kubernetes matured as shared infrastructure while selective alternatives remained rational.

## Idea scorecard

Verdicts concern the stated idea and fit, not market share. “Winning” means a durable useful mechanism with the evidence limits described in the linked assessment. [^i1] [^i2] [^i3]

| Idea | Verdict | Assessment |
|---|---|---|
| [Kubernetes as a shared substrate, not a universal application requirement](/ideas/orchestration/kubernetes-as-substrate.md) | winning | Kubernetes won a durable infrastructure role; application suitability still depends on isolation, scale and operational capacity. |
| [Elastic scheduling with explicit disruption and resource budgets](/ideas/orchestration/elasticity-with-budgets.md) | winning | Autoscaling matured into useful capacity control, but cost optimization cannot ignore workload disruption. |
| [Operators and virtual tenancy as platform software](/ideas/orchestration/operators-and-tenancy.md) | mixed | Controllers and virtual control planes improve reuse but create software and security responsibilities of their own. |
| [Stateful elasticity needs resumable application-aware control](/ideas/orchestration/stateful-elasticity.md) | mixed | Stateful scaling is useful when data movement, placement and overlapping requests form a recoverable lifecycle. |

## What succeeded

The strongest success is reusable infrastructure capability. Capacity and device APIs became more expressive; the ecosystem has a substantial surveyed production base. The boundary is workload suitability: isolation, operational staffing and repeated platform demand determine whether that capability is worth its cost.

## What failed or remained unsettled

Gitpod is a useful counterexample to universal fit, while operator security research exposes a separate risk at extension boundaries. These are different failures: a poor substrate match is an architectural decision; an authorization flaw is a security defect. Neither warrants calling Kubernetes itself a failed idea.

## Decision implications

Begin with the workload, then choose managed containers, managed Kubernetes, a dedicated cluster or VMs. Make tenancy and interruption requirements explicit before selecting controllers. A platform needs an owner for upgrades and recovery, even when node management is outsourced.

## Evidence trail

* [Cncf Survey 2025](/research/cncf-survey-2025.md)
* [Operator Security 2025](/research/operator-security-2025.md)

The scorecard is a synthesis of the linked assessments. Release milestones establish availability; case studies establish situated experience; surveys establish associations. None alone establishes universal return on investment.

* [Executive summary](/executive-summary.md)
* [Cross-cutting lessons](/lessons/)

## Selected systems and standards

* [Karpenter](/systems/karpenter.md) — A capacity-provisioning controller with explicit disruption controls.
* [Kubernetes](/systems/kubernetes.md) — A common orchestration API and extension model with substantial ecosystem adoption.
* [Kueue](/systems/kueue.md) — A Kubernetes job-admission and resource-sharing layer.

## Additional evidence: Zalando: stateful autoscaling stalled across overlapping control loops

A scheduled scaling failure reveals why declarative state still needs interruptible reconciliation and cleanup.[^case-zalando-stateful-autoscaling]

* [Case details and limitations](/research/zalando-stateful-autoscaling.md)

[^i1]: [Kubernetes as a shared substrate, not a universal application requirement](/ideas/orchestration/kubernetes-as-substrate.md)
[^i2]: [Elastic scheduling with explicit disruption and resource budgets](/ideas/orchestration/elasticity-with-budgets.md)
[^i3]: [Operators and virtual tenancy as platform software](/ideas/orchestration/operators-and-tenancy.md)
[^case-zalando-stateful-autoscaling]: [Zalando: stateful autoscaling stalled across overlapping control loops](/research/zalando-stateful-autoscaling.md)
