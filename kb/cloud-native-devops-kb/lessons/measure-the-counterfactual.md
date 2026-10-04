---
type: Lesson
title: Measure accepted outcomes and preserve the counterfactual
description: Activity, adoption and satisfaction are useful signals but cannot alone establish the value of an intervention.
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:15:14Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: metr
  resource: /research/metr-productivity.md
  title: METR productivity evidence and its 2026 revision
- id: cost
  resource: /ideas/cloud-economics/finops-unit-economics.md
  title: FinOps and cost per useful outcome
- id: platform
  resource: /ideas/platform-engineering/measurement-without-gaming.md
  title: Delivery and developer-experience metrics without ranking theater
---

# Measure accepted outcomes and preserve the counterfactual

AI productivity debates illustrate the danger clearly. METR’s first experiment supports a bounded causal finding; its later update explains why a changed sample and changed work patterns complicate the next estimate. Neither supplies a timeless number for every organization.[^metr]

The same caution applies to FinOps savings and developer-platform adoption. A lower bill can reflect less demand; a portal can have high usage because it is mandatory. Ask what would have happened without the intervention and which other changes occurred at the same time.[^cost][^platform]

Where randomization is impractical, record a baseline, use a stable workload boundary, include quality and operational effects, and document plausible alternative explanations. Prefer a modest claim with an inspectable denominator to a precise-looking number assembled from incomparable populations.

Repeat measurement after material changes in workload, team or tool. Treat a result as evidence for a particular context and operating envelope, not an eternal property of a product category.

* [Executive summary](/executive-summary.md)

[^metr]: [METR productivity evidence and its 2026 revision](/research/metr-productivity.md)
[^cost]: [FinOps and cost per useful outcome](/ideas/cloud-economics/finops-unit-economics.md)
[^platform]: [Delivery and developer-experience metrics without ranking theater](/ideas/platform-engineering/measurement-without-gaming.md)
