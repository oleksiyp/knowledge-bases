---
type: System
title: Kueue
description: A Kubernetes job-admission and resource-sharing layer.
area: orchestration
kind: controller
outcome: developing
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: source
  resource: https://kubernetes.io/blog/2022/10/04/introducing-kueue/
  title: Introducing Kueue, October 2022
---

# Kueue

A Kubernetes job-admission and resource-sharing layer.[^source]

## Role and outcome

It addresses when jobs may enter execution under shared resource policies.

## Operating boundary

Job admission is distinct from placing Pods or delivering an entire AI platform.

The outcome label describes the reviewed project or product position, not a market-share ranking or an independent commercial audit.

## Related

* [Idea or case assessment](/ideas/orchestration/elasticity-with-budgets.md)
* [Area review](/areas/orchestration.md)

[^source]: [Introducing Kueue, October 2022](https://kubernetes.io/blog/2022/10/04/introducing-kueue/)
