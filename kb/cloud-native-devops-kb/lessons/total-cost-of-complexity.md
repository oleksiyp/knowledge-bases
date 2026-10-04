---
type: Lesson
title: Count the cost of operating the abstraction
description: An abstraction is valuable when the complexity it removes exceeds the complexity the organization must
  maintain.
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:15:14Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: platform
  resource: /ideas/platform-engineering/platform-as-product.md
  title: Internal platforms as products with measurable users
- id: control
  resource: /ideas/infrastructure-as-code/control-plane-composition.md
  title: Composable control planes for internal APIs
- id: mesh
  resource: /ideas/networking/mesh-simplification.md
  title: Service mesh simplification through ambient architecture
- id: adobe
  resource: /research/adobe-flex.md
  title: 'Adobe Flex: GitOps scale required control-plane engineering'
---

# Count the cost of operating the abstraction

A portal, a control plane and a service mesh can each hide repeated decisions from application teams. They also create software, support and recovery responsibilities. Their value should be measured across both sides of that boundary.[^platform][^control][^mesh]

Adobe’s platform case makes the trade visible: production-scale delivery demanded engineering of the delivery infrastructure itself. A platform team’s work is not evidence that the platform failed; omitting that work from the business case is the mistake.[^adobe]

Compare at least three alternatives: improve the current workflow, buy a managed capability, or build a reusable internal service. Include migration, upgrades, support, exceptions and retirement. The cheapest infrastructure unit can produce the most expensive service when labor and incident exposure are ignored.

This principle favors narrow starting scopes and measured expansion. It does not imply that simplicity always beats capability. Additional machinery can be worthwhile when it buys a required property and the organization can operate it.

* [Executive summary](/executive-summary.md)

[^platform]: [Internal platforms as products with measurable users](/ideas/platform-engineering/platform-as-product.md)
[^control]: [Composable control planes for internal APIs](/ideas/infrastructure-as-code/control-plane-composition.md)
[^mesh]: [Service mesh simplification through ambient architecture](/ideas/networking/mesh-simplification.md)
[^adobe]: [Adobe Flex: GitOps scale required control-plane engineering](/research/adobe-flex.md)
