---
type: Idea
title: Right-sized services and modular simplicity
description: Service decomposition is valuable when boundaries justify it; simpler deployment can win when coordination
  and operations dominate.
area: application-architecture
verdict: mixed
confidence: medium
tags:
- cloud-native
- devops
- application-architecture
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: kamal
  resource: https://world.hey.com/dhh/our-switch-to-kamal-is-complete-8e0de22e
  title: 37signals completes Kamal migration, March 2025
- id: gitpod
  resource: https://ona.com/stories/we-are-leaving-kubernetes
  title: Gitpod explains leaving Kubernetes, October 2024
---

# Right-sized services and modular simplicity

## Verdict

**MIXED — Service decomposition is valuable when boundaries justify it; simpler deployment can win when coordination and operations dominate.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

37signals’ March 2025 Kamal account and Gitpod’s October 2024 infrastructure account document operators choosing simpler or differently isolated execution models.[^kamal][^gitpod] Neither establishes that all microservices failed or that the whole industry returned to monoliths.

## What succeeded

Independently deployable services can fit independently changing domains, scaling needs and teams. A modular application can preserve clear internal boundaries without paying a network and deployment cost for each boundary.

## What failed or remained difficult

Premature decomposition creates remote calls, data coordination and distributed debugging before organizational independence exists. Conversely, collapsing a system without preserving module ownership can create a difficult shared release bottleneck.

## Why and when it fits

The decision depends on change boundaries, not on the number of containers. The cited cases challenge universal infrastructure prescriptions; the architectural recommendation here is an inference rather than a controlled comparison.

Use business ownership, failure isolation and scaling requirements to justify a service boundary. For a new or small product, compare a well-structured single deployable against a distributed alternative before adding orchestration.

## What would change the verdict

Longitudinal evidence with matched organizational context could establish where decomposition pays off. Isolated cost-reduction anecdotes cannot settle the category.

## Related

* [Area review](/areas/application-architecture.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

[^kamal]: [37signals completes Kamal migration, March 2025](https://world.hey.com/dhh/our-switch-to-kamal-is-complete-8e0de22e)
[^gitpod]: [Gitpod explains leaving Kubernetes, October 2024](https://ona.com/stories/we-are-leaving-kubernetes)
