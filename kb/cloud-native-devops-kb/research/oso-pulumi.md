---
type: Research
title: 'Oso: infrastructure migration benefited from code reuse and traffic control'
description: A difficult infrastructure migration provides a positive counterexample to category-wide pessimism
  about language-based IaC.
area: infrastructure-as-code
year: 2025
publication_date: '2025-05-05'
kind: case-study
evidence_strength: situated-primary-account
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:55:22Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: osopulumi
  resource: https://www.pulumi.com/blog/how-we-used-pulumi-to-safely-migrate-osos-global-infrastructure/
  title: Oso infrastructure migration account, May 2025
---

# Oso: infrastructure migration benefited from code reuse and traffic control

## Observed result

Oso’s practitioner account describes moving from ECS Fargate to self-managed EC2-backed ECS across twelve regions. It combined reusable Pulumi components, previews of refactoring changes and gradual traffic transfer. The author reports internal migration problems without customer-visible impact.[^osopulumi]

## Method and limits

This is a customer-authored account hosted by the tool vendor, not an independent comparative trial. The article’s absolute confidence language about unchanged previews should not be treated as a guarantee against provider drift, races or runtime failures.

## Decision implication

The interpretation is that language reuse helped inside a broader migration design. Traffic control and explicit resource identity were essential complements. This establishes one successful application, not universal superiority over declarative configuration languages.

## Related assessments

* [General Purpose Iac](/ideas/infrastructure-as-code/general-purpose-iac.md)
* [Migration Safe Refactoring](/ideas/infrastructure-as-code/migration-safe-refactoring.md)
* [Area review](/areas/infrastructure-as-code.md)

## System profile

* [Pulumi](/systems/pulumi.md)

[^osopulumi]: [Oso infrastructure migration account, May 2025](https://www.pulumi.com/blog/how-we-used-pulumi-to-safely-migrate-osos-global-infrastructure/)
