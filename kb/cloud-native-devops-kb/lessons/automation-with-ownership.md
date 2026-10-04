---
type: Lesson
title: Automation succeeds when authority and recovery have owners
description: Automation reduces repeated effort while increasing the importance of bounded actions and tested recovery.
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:15:14Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: gitops
  resource: /ideas/delivery/gitops-reconciliation.md
  title: GitOps reconciliation and auditable desired state
- id: scale
  resource: /ideas/orchestration/elasticity-with-budgets.md
  title: Elastic scheduling with explicit disruption and resource budgets
- id: agents
  resource: /ideas/ai-operations/bounded-incident-agents.md
  title: Incident agents with bounded authority and reproducible evaluations
- id: restore
  resource: /research/atlassian-2022.md
  title: 'Atlassian 2022: restore capacity was the limiting service'
---

# Automation succeeds when authority and recovery have owners

GitOps, autoscaling and incident agents automate different kinds of decisions. All need an explicit limit on what the controller may change and a way to determine whether the change helped.[^gitops][^scale][^agents]

Atlassian’s recovery case shows why review alone is not enough for a large destructive action. The boundary of the action and the capacity to undo it mattered. The inference for automation is to scale proof of safety with the potential impact, rather than equating a successful happy-path run with operational readiness.[^restore]

Assign owners to the policy, the controller and the affected service. Define acceptable interruption, emergency intervention and restoration. An automation that continually requires undocumented human repair may have moved toil rather than removed it.

Use a bounded experiment: observe an expected failure, verify detection, recover and inspect the resulting state. The result supports that specific operating envelope. Expand the envelope only with additional evidence.

* [Executive summary](/executive-summary.md)

[^gitops]: [GitOps reconciliation and auditable desired state](/ideas/delivery/gitops-reconciliation.md)
[^scale]: [Elastic scheduling with explicit disruption and resource budgets](/ideas/orchestration/elasticity-with-budgets.md)
[^agents]: [Incident agents with bounded authority and reproducible evaluations](/ideas/ai-operations/bounded-incident-agents.md)
[^restore]: [Atlassian 2022: restore capacity was the limiting service](/research/atlassian-2022.md)
