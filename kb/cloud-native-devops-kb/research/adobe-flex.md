---
type: Research
title: 'Adobe Flex: GitOps scale required control-plane engineering'
description: Adobe’s platform account combines substantial production use with explicit scaling failures and recovery
  work.
kind: case-study
year: 2024
area: delivery
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:08:48Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: adobe
  resource: https://architecture.cncf.io/architectures/adobe/
  title: Adobe Flex cell-based delivery architecture, October 2024
---

# Adobe Flex: GitOps scale required control-plane engineering

## Finding

Adobe reports more than 22,000 Argo CD applications and 30,000 monthly deployments as of October 2024. Its original shared control plane experienced performance and recovery problems; a cell-like Flexbox design added replication and relocation capability.[^adobe]

## Method and limitations

This is a practitioner-submitted account, not an independent productivity experiment. It also acknowledges extra infrastructure, support complexity and a shared redirector risk.

## Interpretation for decisions

The inference is that adoption success can create the next reliability problem. A platform should have a scaling and recovery model before a single control plane becomes essential to every team. This supports GitOps feasibility at scale while refuting the idea that installing controllers completes platform engineering.

## Related

* [Idea assessment](/ideas/delivery/gitops-reconciliation.md)
* [Area review](/areas/delivery.md)

* [System profile: Argo](/systems/argo.md)

[^adobe]: [Adobe Flex cell-based delivery architecture, October 2024](https://architecture.cncf.io/architectures/adobe/)
