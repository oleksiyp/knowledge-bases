---
type: Area
title: Reliability, recovery and incident learning
description: The failures repeatedly involved recovery scope, shared dependencies and missing operational feedback.
area: reliability
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: i1
  resource: /ideas/reliability/recovery-is-a-product.md
  title: Recovery engineering beyond having backups
- id: i2
  resource: /ideas/reliability/dependency-aware-resilience.md
  title: Resilience follows dependencies, not region labels
- id: i3
  resource: /ideas/reliability/slo-and-learning-loops.md
  title: SLOs, incident learning and bounded experiments
---

# Reliability, recovery and incident learning

The failures repeatedly involved recovery scope, shared dependencies and missing operational feedback.

## Idea scorecard

Verdicts concern the stated idea and fit, not market share. “Winning” means a durable useful mechanism with the evidence limits described in the linked assessment. [^i1] [^i2] [^i3]

| Idea | Verdict | Assessment |
|---|---|---|
| [Recovery engineering beyond having backups](/ideas/reliability/recovery-is-a-product.md) | winning | Recovery readiness means restoring the required scope within a useful time, not merely possessing backup data. |
| [Resilience follows dependencies, not region labels](/ideas/reliability/dependency-aware-resilience.md) | mixed | Multiple regions or providers improve resilience only when the critical dependencies and recovery paths are genuinely independent. |
| [SLOs, incident learning and bounded experiments](/ideas/reliability/slo-and-learning-loops.md) | winning | Reliability practices work when they change operational decisions and recovery behavior, rather than merely produce reports. |

## What succeeded

Recovery engineering, meaningful SLOs and incident learning remain strong operating ideas. Their success is demonstrated locally through restored service and tested controls, not by adopting a title or a dashboard.

## What failed or remained unsettled

Atlassian illustrates restore throughput at unexpected scope. AWS illustrates control-plane dependencies. Cloudflare illustrates the tradeoff between simpler operations and provider concentration. These cases should not be averaged into a generic cloud failure rate.

## Decision implications

Prioritize a realistic restore exercise, a dependency map for critical journeys and a response loop with funded owners. Test what happens when deployment, identity or provisioning tools are unavailable. Add replication only where its operating cost buys a tested resilience benefit.

## Evidence trail

* [Atlassian 2022](/research/atlassian-2022.md)
* [Aws 2021](/research/aws-2021.md)
* [Cloudflare Kv 2025](/research/cloudflare-kv-2025.md)

The scorecard is a synthesis of the linked assessments. Release milestones establish availability; case studies establish situated experience; surveys establish associations. None alone establishes universal return on investment.

* [Executive summary](/executive-summary.md)
* [Cross-cutting lessons](/lessons/)

[^i1]: [Recovery engineering beyond having backups](/ideas/reliability/recovery-is-a-product.md)
[^i2]: [Resilience follows dependencies, not region labels](/ideas/reliability/dependency-aware-resilience.md)
[^i3]: [SLOs, incident learning and bounded experiments](/ideas/reliability/slo-and-learning-loops.md)
