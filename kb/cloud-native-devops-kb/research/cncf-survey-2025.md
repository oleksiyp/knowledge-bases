---
type: Research
title: 'Cloud-native adoption: reading the CNCF 2025 survey'
description: The survey demonstrates substantial Kubernetes use among cloud-native respondents, not a census of
  the software industry.
kind: survey
year: 2025
area: orchestration
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:08:48Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: cncf25
  resource: https://www.cncf.io/reports/the-cncf-annual-cloud-native-survey/
  title: CNCF Annual Cloud Native Survey 2025, published January 2026
---

# Cloud-native adoption: reading the CNCF 2025 survey

## Finding

The report, published in January 2026, says 82% of container-using respondents run Kubernetes in production. Its AI questions use other denominators: organizations hosting generative models and respondents running AI workloads are not interchangeable populations.[^cncf25]

## Method and limitations

A community survey has selection effects. Changes across annual samples can reflect who answered as well as changing practices. Adoption does not independently measure application reliability, developer productivity or economic return.

## Interpretation for decisions

Use the result to support ecosystem relevance and to motivate further investigation. Do not translate it into “82% of all companies use Kubernetes.” A product team still needs workload-specific evidence.

## Related

* [Idea assessment](/ideas/orchestration/kubernetes-as-substrate.md)
* [Area review](/areas/orchestration.md)

[^cncf25]: [CNCF Annual Cloud Native Survey 2025, published January 2026](https://www.cncf.io/reports/the-cncf-annual-cloud-native-survey/)
