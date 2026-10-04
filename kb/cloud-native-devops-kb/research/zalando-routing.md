---
type: Research
title: 'Zalando: a routing optimization succeeded while zone affinity remained unresolved'
description: One production account separates realized routing gains from an unfinished locality-cost hypothesis.
area: networking
year: 2026
publication_date: '2026-06-23'
kind: case-study
evidence_strength: situated-primary-account
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:55:22Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: zalandoroute
  resource: https://engineering.zalando.com/posts/2026/06/client-side-load-balancing.html
  title: Zalando client-side routing account, June 2026
---

# Zalando: a routing optimization succeeded while zone affinity remained unresolved

## Observed result

Zalando reports more than 25% fewer application Pods after load-distribution and autoscaling changes. Its separate availability-zone-affinity trial remained paused: improved network locality increased cache misses and database reads. The account also describes faster delivery through pipeline changes.[^zalandoroute]

## Method and limits

This is an engineer’s before-and-after report with multiple simultaneous interventions. It does not isolate a single algorithm’s causal contribution or independently audit savings. The paused trial is evidence of unresolved fit, not permanent abandonment.

## Decision implication

The inference is to optimize the complete request path. Network transfer, cache locality, backend load and application latency belong in one comparison. A favorable compute result does not settle a distinct data-locality experiment.

## Related assessments

* [Locality And Routing](/ideas/networking/locality-and-routing.md)
* [Progressive Release](/ideas/delivery/progressive-release.md)
* [Finops Unit Economics](/ideas/cloud-economics/finops-unit-economics.md)
* [Area review](/areas/networking.md)

[^zalandoroute]: [Zalando client-side routing account, June 2026](https://engineering.zalando.com/posts/2026/06/client-side-load-balancing.html)
