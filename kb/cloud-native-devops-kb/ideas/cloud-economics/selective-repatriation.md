---
type: Idea
title: Selective cloud repatriation and simpler deployment
description: Repatriation can fit stable workloads and capable teams; a successful exit is not a general case against
  public cloud.
area: cloud-economics
verdict: niche
confidence: medium
tags:
- cloud-native
- devops
- cloud-economics
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: '37'
  resource: https://world.hey.com/dhh/keeping-the-lights-on-while-leaving-the-cloud-be7c2d67
  title: '37signals: operating during cloud exit, January 2024'
- id: kamal
  resource: https://world.hey.com/dhh/our-switch-to-kamal-is-complete-8e0de22e
  title: 37signals completes Kamal migration, March 2025
---

# Selective cloud repatriation and simpler deployment

## Verdict

**NICHE — Repatriation can fit stable workloads and capable teams; a successful exit is not a general case against public cloud.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

37signals reported running seven applications outside the cloud in 2023 while maintaining high availability, in a January 2024 account. It described completing a move to Kamal in March 2025.[^37][^kamal] These are the operator’s own accounts, without an independently audited counterfactual.

## What succeeded

The cases establish that a real SaaS operator can choose a simpler deployment stack and owned capacity. Stable demand and willingness to own operations can make this a coherent strategy.

## What failed or remained difficult

Copying a headline savings claim without matching staffing, workload variability, procurement and recovery requirements is poor economic reasoning. Owned capacity also has idle capacity, replacement and incident responsibilities.

## Why and when it fits

The inference is workload placement by total cost and capability, not a cyclical slogan that everyone should leave or enter the cloud. A different organization may rationally pay more per compute unit for elasticity or managed services.

Compare a representative workload across a full replacement cycle and include labor, redundancy, networking and migration. Repatriate only when the organization wants the resulting operating responsibilities.

## What would change the verdict

Independent multi-company results with comparable accounting could broaden the verdict. One company’s successful migration supports feasibility, not population-wide superiority.

## Related

* [Area review](/areas/cloud-economics.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

* [System profile: Kamal](/systems/kamal.md)

[^37]: [37signals: operating during cloud exit, January 2024](https://world.hey.com/dhh/keeping-the-lights-on-while-leaving-the-cloud-be7c2d67)
[^kamal]: [37signals completes Kamal migration, March 2025](https://world.hey.com/dhh/our-switch-to-kamal-is-complete-8e0de22e)
