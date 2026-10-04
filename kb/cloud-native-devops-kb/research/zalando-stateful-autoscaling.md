---
type: Research
title: 'Zalando: stateful autoscaling stalled across overlapping control loops'
description: A scheduled scaling failure reveals why declarative state still needs interruptible reconciliation
  and cleanup.
area: orchestration
year: 2024
publication_date: '2024-06-21'
kind: postmortem
evidence_strength: situated-primary-account
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:55:22Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: zalandoscale
  resource: https://engineering.zalando.com/posts/2024/06/failing-to-auto-scale-elasticsearch-in-kubernetes.html
  title: Zalando Elasticsearch autoscaling failure account, June 2024
---

# Zalando: stateful autoscaling stalled across overlapping control loops

## Observed result

Zalando reported Elasticsearch scale-in blocking on zone-aware shard placement, a retry path that ignored cancellation, and stale node exclusions after interruption. An initial capacity adjustment was insufficient. The June 2024 account distinguishes a fixed cancellation defect from a harder cleanup problem still requiring manual handling at publication.[^zalandoscale]

## Method and limits

The article does not specify the incident’s exact calendar dates or establish a broad failure rate for Kubernetes databases. Its suggested link to an earlier cluster upgrade was not fully confirmed; this KB does not promote that hypothesis to a root cause.

## Decision implication

The inferred design requirement is resumable reconciliation: new desired state, cancellation and partially completed external changes must compose safely. “The controller will converge eventually” is not enough when demand has a deadline.

## Related assessments

* [Stateful Elasticity](/ideas/orchestration/stateful-elasticity.md)
* [Operators And Tenancy](/ideas/orchestration/operators-and-tenancy.md)
* [Area review](/areas/orchestration.md)

[^zalandoscale]: [Zalando Elasticsearch autoscaling failure account, June 2024](https://engineering.zalando.com/posts/2024/06/failing-to-auto-scale-elasticsearch-in-kubernetes.html)
