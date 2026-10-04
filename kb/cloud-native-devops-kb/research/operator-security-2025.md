---
type: Research
title: 'Operator cross-namespace references: an extension-boundary study'
description: A focused security study demonstrates that controller privilege can cross an apparently local resource
  boundary.
kind: paper
year: 2025
area: orchestration
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:08:48Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: operator
  resource: https://arxiv.org/abs/2507.03387
  title: 'Breaking the Bulkhead: operator cross-namespace vulnerabilities, 2025'
---

# Operator cross-namespace references: an extension-boundary study

## Finding

The 2025 “Breaking the Bulkhead” paper reports vendor-confirmed vulnerabilities involving cross-namespace references in Kubernetes operators.[^operator]

## Method and limitations

A discovered-vulnerability sample is not a random sample of all operators. Findings support the existence and mechanism of the vulnerability class; they do not provide a general incidence rate or show that all operators are unsafe.

## Interpretation for decisions

The practical inference is to review authorization where a custom resource becomes a privileged action. Platform API design should include negative tests for references to resources outside the requester’s intended authority.

## Related

* [Idea assessment](/ideas/orchestration/operators-and-tenancy.md)
* [Area review](/areas/orchestration.md)

[^operator]: [Breaking the Bulkhead: operator cross-namespace vulnerabilities, 2025](https://arxiv.org/abs/2507.03387)
