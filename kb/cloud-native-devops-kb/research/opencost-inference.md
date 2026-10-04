---
type: Research
title: 'OpenCost inference accounting: allocation and active usage answer different questions'
description: A concrete cost-accounting implementation distinguishes model availability cost from active inference
  work.
area: cloud-economics
year: 2026
publication_date: '2026-08-05'
kind: technical-report
evidence_strength: implementation-evidence
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:55:22Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: opencostai
  resource: https://www.cncf.io/blog/2026/08/05/opencost-1-121-0-first-of-a-kind-kubernetes-inference-cost-tracking/
  title: OpenCost inference allocation report, August 2026
---

# OpenCost inference accounting: allocation and active usage answer different questions

## Observed result

OpenCost maintainers’ August 2026 report describes vLLM/llm-d integration with model and token cost metrics, separating allocated infrastructure cost from active usage. It explains that idle reserved capacity affects the comparison with an external API price.[^opencostai]

## Method and limits

This is an implementation report, not a production savings study. Its numeric examples are illustrative assumptions. This KB does not infer a universal break-even utilization or accept that active-token cost is invariant under every hardware and batching regime.

## Decision implication

The decision implication is to reconcile the full hosting bill before comparing self-hosting to a service. Add labor, availability and output quality to the infrastructure accounting. Better measurement is a useful capability even when it does not yet prove an optimization outcome.

## Related assessments

* [Inference Is Operations](/ideas/ai-operations/inference-is-operations.md)
* [Finops Unit Economics](/ideas/cloud-economics/finops-unit-economics.md)
* [Area review](/areas/cloud-economics.md)

## System profile

* [OpenCost](/systems/opencost.md)

[^opencostai]: [OpenCost inference allocation report, August 2026](https://www.cncf.io/blog/2026/08/05/opencost-1-121-0-first-of-a-kind-kubernetes-inference-cost-tracking/)
