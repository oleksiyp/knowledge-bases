---
type: System
title: Karpenter
description: A capacity-provisioning controller with explicit disruption controls.
area: orchestration
kind: controller
outcome: mature
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: source
  resource: https://aws.amazon.com/about-aws/whats-new/2024/08/karpenter-1-0/
  title: Karpenter 1.0 announcement, August 2024
---

# Karpenter

A capacity-provisioning controller with explicit disruption controls.[^source]

## Role and outcome

Version 1.0 arrived in 2024. The important operating interface includes both provisioning and the constraints on consolidation.

## Operating boundary

Accurate requests and acceptable interruption must be defined by workload owners.

The outcome label describes the reviewed project or product position, not a market-share ranking or an independent commercial audit.

## Related

* [Idea or case assessment](/ideas/orchestration/elasticity-with-budgets.md)
* [Area review](/areas/orchestration.md)

[^source]: [Karpenter 1.0 announcement, August 2024](https://aws.amazon.com/about-aws/whats-new/2024/08/karpenter-1-0/)
