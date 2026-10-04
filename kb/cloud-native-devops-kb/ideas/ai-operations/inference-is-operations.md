---
type: Idea
title: Inference operations are still capacity, reliability and cost engineering
description: AI serving creates new workload characteristics but still depends on explicit scheduling, service objectives
  and unit economics.
area: ai-operations
verdict: winning
confidence: medium
tags:
- cloud-native
- devops
- ai-operations
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: dra
  resource: https://kubernetes.io/blog/2025/09/01/kubernetes-v1-34-dra-updates/
  title: 'Kubernetes 1.34: DRA updates'
- id: gpu
  resource: https://docs.cloud.google.com/run/docs/configuring/services/gpu
  title: Cloud Run GPU configuration and constraints
- id: finops26
  resource: https://data.finops.org/
  title: State of FinOps 2026
- id: case-extension
  resource: /research/opencost-inference.md
  title: Additional case evidence
---

# Inference operations are still capacity, reliability and cost engineering

## Verdict

**WINNING — AI serving creates new workload characteristics but still depends on explicit scheduling, service objectives and unit economics.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

Kubernetes 1.34’s DRA work added stable device-allocation building blocks in 2025.[^dra] Cloud Run’s GPU capability offers another managed execution path.[^gpu] The 2026 FinOps community survey puts AI cost management high on its agenda.[^finops26]

## What succeeded

Existing cloud-native mechanisms can be extended to admission, accelerator allocation, scaling and serving. Managed and self-operated options provide different ways to distribute responsibility.

## What failed or remained difficult

A device allocator does not solve model loading, response quality or end-to-end latency. GPU utilization can improve while user latency worsens. Cost per token alone can reward a cheaper but unsuccessful response.

## Why and when it fits

The practical inference is to combine infrastructure and application outcomes. An AI platform is more than a scheduler, and a model quality metric is more than an availability metric.

Track cost per successful task, latency distributions, queue delay and quality regressions. Select a serving model according to workload predictability, accelerator availability and the team’s operating capacity.

## What would change the verdict

Comparable production studies including quality, latency and fully allocated cost would clarify which operating models fit which workloads. Hardware allocation maturity does not settle the entire AI stack.

## Related

* [Area review](/areas/ai-operations.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

## Additional production and measurement evidence

OpenCost’s implementation makes allocation-versus-active-usage accounting concrete. It is progress in measurement, not independent evidence that self-hosting is cheaper.[^case-extension]

* [Read the case and limitations](/research/opencost-inference.md)

[^dra]: [Kubernetes 1.34: DRA updates](https://kubernetes.io/blog/2025/09/01/kubernetes-v1-34-dra-updates/)
[^gpu]: [Cloud Run GPU configuration and constraints](https://docs.cloud.google.com/run/docs/configuring/services/gpu)
[^finops26]: [State of FinOps 2026](https://data.finops.org/)
[^case-extension]: [Additional case evidence](/research/opencost-inference.md)
