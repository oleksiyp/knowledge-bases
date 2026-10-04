---
type: Idea
title: Stateful elasticity needs resumable application-aware control
description: Stateful scaling is useful when data movement, placement and overlapping requests form a recoverable
  lifecycle.
area: orchestration
verdict: mixed
confidence: medium
tags:
- cloud-native
- devops
- orchestration
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:55:22Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: case
  resource: /research/zalando-stateful-autoscaling.md
  title: Production account and evidence limits
---

# Stateful elasticity needs resumable application-aware control

## Verdict

**MIXED — Stateful scaling is useful when data movement, placement and overlapping requests form a recoverable lifecycle.**

The idea is to vary stateful capacity with demand while preserving data placement and application availability. Unlike a replaceable stateless replica, a stateful member may need to drain, move shards or change external membership before it can disappear.

## Evidence

Zalando’s scaling account demonstrates a concrete interaction between desired-state updates and unfinished application work.[^case] This strengthens the failure analysis beyond generic warnings about Kubernetes complexity.

## What succeeded and failed

The reported team could identify and mitigate the failure through detailed operator and application diagnosis. The failed expectation was that a newer desired state would promptly supersede a blocked operation and leave external state clean. Increasing the nominal replica floor did not address every lifecycle defect.

## Why and when it fits

The design inference is that reconciliation must model transitions as well as targets. A controller needs to detect what has already happened, resume or compensate interrupted work, and avoid interpreting its own stale exclusions as valid current policy.

Use elasticity when peak patterns and the economic benefit justify the data-movement cost. Measure time to useful capacity, not merely time to create a Pod. Test scale-in interrupted by scale-out, controller restart during a drain, and loss of an availability zone.

## What would change the verdict

Production evidence of reliable interrupted transitions and bounded recovery under realistic placement constraints would strengthen the verdict for a particular implementation. A successful steady-state demo or an operator installation count would not.

## Related

* [Production case](/research/zalando-stateful-autoscaling.md)
* [Area review](/areas/orchestration.md)
* [Executive summary](/executive-summary.md)

[^case]: [Production account and evidence limits](/research/zalando-stateful-autoscaling.md)
