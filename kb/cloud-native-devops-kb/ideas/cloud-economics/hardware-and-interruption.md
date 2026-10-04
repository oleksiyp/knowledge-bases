---
type: Idea
title: Hardware choice and interruption-aware capacity
description: ARM and interruptible capacity are useful optimization options, but headline price-performance claims
  require workload-level validation.
area: cloud-economics
verdict: mixed
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
- id: arm
  resource: https://aws.amazon.com/ec2/graviton/customers/
  title: AWS Graviton customer accounts
- id: armtest
  resource: https://docs.aws.amazon.com/compute-optimizer/latest/ug/graviton-recommendations.html
  title: 'AWS Compute Optimizer: Graviton recommendations'
- id: disruption
  resource: https://karpenter.sh/docs/concepts/disruption/
  title: Karpenter disruption controls
---

# Hardware choice and interruption-aware capacity

## Verdict

**MIXED — ARM and interruptible capacity are useful optimization options, but headline price-performance claims require workload-level validation.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

AWS publishes Graviton customer accounts and Compute Optimizer guidance for considering Graviton recommendations.[^arm][^armtest] Karpenter’s disruption model makes explicit that capacity optimization can affect running workloads.[^disruption]

## What succeeded

Multi-architecture builds can create more hardware choices. Queued, retryable work can tolerate capacity changes better than a tightly provisioned interactive service. These provide concrete opportunities for experimentation.

## What failed or remained difficult

Native dependencies, memory bandwidth and application behavior can change the result. Interruptions consume retry work and may increase completion time. A cheaper instance-hour is not necessarily a cheaper completed task.

## Why and when it fits

The verdict is deliberately conditional because the cited performance accounts come from a vendor. The transferable idea is to compare complete workload outcomes rather than adopt a fixed savings percentage.

Benchmark representative load and include migration effort, fallback capacity and failed work. Separate architecture compatibility from observed performance. Keep disruption within explicit service objectives.

## What would change the verdict

Independent benchmarks and sustained production accounting could support stronger workload-specific recommendations. Published customer testimonials cannot establish a universal gain.

## Related

* [Area review](/areas/cloud-economics.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

[^arm]: [AWS Graviton customer accounts](https://aws.amazon.com/ec2/graviton/customers/)
[^armtest]: [AWS Compute Optimizer: Graviton recommendations](https://docs.aws.amazon.com/compute-optimizer/latest/ug/graviton-recommendations.html)
[^disruption]: [Karpenter disruption controls](https://karpenter.sh/docs/concepts/disruption/)
