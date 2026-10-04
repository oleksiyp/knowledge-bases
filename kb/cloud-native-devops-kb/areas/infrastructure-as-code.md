---
type: Area
title: Infrastructure as code and control planes
description: Declarative infrastructure survived commercial changes; wrappers and abstractions needed their own
  product justification.
area: infrastructure-as-code
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: i1
  resource: /ideas/infrastructure-as-code/open-governance.md
  title: Infrastructure as code and the cost of governance changes
- id: i2
  resource: /ideas/infrastructure-as-code/general-purpose-iac.md
  title: General-purpose languages do not guarantee infrastructure product fit
- id: i3
  resource: /ideas/infrastructure-as-code/control-plane-composition.md
  title: Composable control planes for internal APIs
- id: case-oso-pulumi
  resource: /research/oso-pulumi.md
  title: 'Oso: infrastructure migration benefited from code reuse and traffic control'
---

# Infrastructure as code and control planes

Declarative infrastructure survived commercial changes; wrappers and abstractions needed their own product justification.

## Idea scorecard

Verdicts concern the stated idea and fit, not market share. “Winning” means a durable useful mechanism with the evidence limits described in the linked assessment. [^i1] [^i2] [^i3]

| Idea | Verdict | Assessment |
|---|---|---|
| [Infrastructure as code and the cost of governance changes](/ideas/infrastructure-as-code/open-governance.md) | winning | Declarative infrastructure remained durable, while licensing changes made governance and exit planning part of architecture. |
| [General-purpose languages do not guarantee infrastructure product fit](/ideas/infrastructure-as-code/general-purpose-iac.md) | mixed | Language ergonomics are useful, but a programming-language wrapper alone does not establish a sustainable infrastructure tool. |
| [Composable control planes for internal APIs](/ideas/infrastructure-as-code/control-plane-composition.md) | mixed | Crossplane-style composition can make infrastructure self-service, but the platform team still owns API design and lifecycle behavior. |
| [Migration-safe infrastructure refactoring](/ideas/infrastructure-as-code/migration-safe-refactoring.md) | winning | Code reuse is most useful when resource identity and traffic movement remain explicit during a migration. |

## What succeeded

OpenTofu is evidence that an ecosystem can create an alternative stewardship path. Crossplane shows continued development of infrastructure-facing internal APIs. These are distinct successes: one is governance continuity, the other is a composition mechanism.

## What failed or remained unsettled

CDKTF is the clearest product-retirement case. It does not invalidate other general-purpose-language approaches. Licensing changes also demonstrate that technical familiarity cannot substitute for an exit plan across providers, state and hosted workflows.

## Decision implications

Choose an engine and operating model before a language fashion. Evaluate plans, drift, imports, failed updates and deletion. Treat an internal infrastructure API as a versioned product, and rehearse a representative provider or engine migration.

## Evidence trail

* [2023 08 10 Hashicorp](/events/2023-08-10-hashicorp.md)
* [2024 01 10 Opentofu](/events/2024-01-10-opentofu.md)
* [2025 12 10 Cdktf](/events/2025-12-10-cdktf.md)

The scorecard is a synthesis of the linked assessments. Release milestones establish availability; case studies establish situated experience; surveys establish associations. None alone establishes universal return on investment.

* [Executive summary](/executive-summary.md)
* [Cross-cutting lessons](/lessons/)

## Selected systems and standards

* [CDK for Terraform](/systems/cdktf.md) — An infrastructure programming wrapper archived after failing to reach product-market fit at scale.
* [Crossplane](/systems/crossplane.md) — A framework for composing infrastructure-facing APIs through Kubernetes reconciliation.
* [OpenTofu](/systems/opentofu.md) — An alternative infrastructure-as-code stewardship path that reached GA in 2024.
* [Terraform](/systems/terraform.md) — An infrastructure-as-code engine at the center of the 2023 licensing change.

## Additional evidence: Oso: infrastructure migration benefited from code reuse and traffic control

A difficult infrastructure migration provides a positive counterexample to category-wide pessimism about language-based IaC.[^case-oso-pulumi]

* [Case details and limitations](/research/oso-pulumi.md)

## Selected implementation: Pulumi

* [Pulumi](/systems/pulumi.md) — Language-based infrastructure tooling with a concrete migration case in this review.

[^i1]: [Infrastructure as code and the cost of governance changes](/ideas/infrastructure-as-code/open-governance.md)
[^i2]: [General-purpose languages do not guarantee infrastructure product fit](/ideas/infrastructure-as-code/general-purpose-iac.md)
[^i3]: [Composable control planes for internal APIs](/ideas/infrastructure-as-code/control-plane-composition.md)
[^case-oso-pulumi]: [Oso: infrastructure migration benefited from code reuse and traffic control](/research/oso-pulumi.md)
