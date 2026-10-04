---
type: Area
title: Delivery, GitOps and pipeline trust
description: GitOps became durable; the difficult work moved toward feedback, control-plane scale and trust.
area: delivery
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: i1
  resource: /ideas/delivery/gitops-reconciliation.md
  title: GitOps reconciliation and auditable desired state
- id: i2
  resource: /ideas/delivery/progressive-release.md
  title: Progressive release requires trustworthy feedback
- id: i3
  resource: /ideas/delivery/pipeline-trust.md
  title: CI pipelines as production trust boundaries
---

# Delivery, GitOps and pipeline trust

GitOps became durable; the difficult work moved toward feedback, control-plane scale and trust.

## Idea scorecard

Verdicts concern the stated idea and fit, not market share. “Winning” means a durable useful mechanism with the evidence limits described in the linked assessment. [^i1] [^i2] [^i3]

| Idea | Verdict | Assessment |
|---|---|---|
| [GitOps reconciliation and auditable desired state](/ideas/delivery/gitops-reconciliation.md) | winning | GitOps succeeded as a repeatable reconciliation pattern; it did not settle every deployment or business-model problem. |
| [Progressive release requires trustworthy feedback](/ideas/delivery/progressive-release.md) | mixed | Canaries and feature flags can limit exposure, but automation is only as reliable as its health signals and rollback boundaries. |
| [CI pipelines as production trust boundaries](/ideas/delivery/pipeline-trust.md) | mixed | Centralized CI improved repeatability while concentrating credentials and third-party execution risk. |

## What succeeded

Argo and Flux demonstrate project durability, and Adobe supplies a concrete production-scale case. Desired-state reconciliation can make changes reviewable and divergence visible. Those are specific capabilities; deployment frequency alone is not the outcome.

## What failed or remained unsettled

Adobe’s early control-plane problems show that the delivery platform can become a reliability dependency. Weaveworks demonstrates sponsor failure without project failure. The changed-files compromise illustrates the security cost of reusing executable dependencies in trusted CI.

## Decision implications

Design the release path around observable customer health, a bounded deployment scope and explicit artifact identity. Include the delivery system itself in scaling and disaster-recovery exercises. Distinguish build, promotion and deployment authority.

## Evidence trail

* [Adobe Flex](/research/adobe-flex.md)
* [2024 02 Weaveworks](/events/2024-02-weaveworks.md)
* [2025 03 Tj Actions](/events/2025-03-tj-actions.md)

The scorecard is a synthesis of the linked assessments. Release milestones establish availability; case studies establish situated experience; surveys establish associations. None alone establishes universal return on investment.

* [Executive summary](/executive-summary.md)
* [Cross-cutting lessons](/lessons/)

## Selected systems and standards

* [Argo](/systems/argo.md) — A family of delivery and workflow controllers with production-scale use.
* [Flux](/systems/flux.md) — A GitOps project whose governance outlived the closure of its original commercial sponsor.
* [GitHub Actions](/systems/github-actions.md) — A CI execution service where reusable workflows also create trust dependencies.

[^i1]: [GitOps reconciliation and auditable desired state](/ideas/delivery/gitops-reconciliation.md)
[^i2]: [Progressive release requires trustworthy feedback](/ideas/delivery/progressive-release.md)
[^i3]: [CI pipelines as production trust boundaries](/ideas/delivery/pipeline-trust.md)
