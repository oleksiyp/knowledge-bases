---
type: Idea
title: General-purpose languages do not guarantee infrastructure product fit
description: Language ergonomics are useful, but a programming-language wrapper alone does not establish a sustainable
  infrastructure tool.
area: infrastructure-as-code
verdict: mixed
confidence: medium
tags:
- cloud-native
- devops
- infrastructure-as-code
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: cdktf
  resource: https://github.com/hashicorp/terraform-cdk
  title: CDK for Terraform archival notice, December 2025
- id: case-extension
  resource: /research/oso-pulumi.md
  title: Additional case evidence
---

# General-purpose languages do not guarantee infrastructure product fit

## Verdict

**MIXED — Language ergonomics are useful, but a programming-language wrapper alone does not establish a sustainable infrastructure tool.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

HashiCorp archived CDK for Terraform in December 2025 and stated that it had not found product-market fit at scale.[^cdktf] That is a concrete product failure, not evidence that all general-purpose-language IaC failed.

## What succeeded

Types, familiar testing tools and reusable functions can help teams express complex infrastructure. These advantages are plausible mechanisms and must be evaluated within the complete deployment lifecycle.

## What failed or remained difficult

Abstraction layers add debugging paths and version dependencies. Imperative-looking code can obscure when values become known and how the engine plans changes. A team may gain code reuse while making the resulting infrastructure harder to inspect.

## Why and when it fits

CDKTF shows that technical feasibility and product sustainability are separate outcomes. Competing approaches with different engines, support and ecosystems cannot be judged from this one retirement.

Compare reviewability of the generated plan, upgrade burden, state behavior and recovery against a simpler configuration approach. Require a migration strategy for wrappers that own important synthesis behavior.

## What would change the verdict

Independent adoption and maintenance evidence from other implementations would be needed for a category-wide verdict. One archived repository cannot supply it.

## Related

* [Area review](/areas/infrastructure-as-code.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

## Additional production and measurement evidence

Oso supplies a positive counterexample alongside CDKTF’s retirement. Language reuse helped in a real migration, but traffic control and resource identity were also necessary. The category verdict remains mixed.[^case-extension]

* [Read the case and limitations](/research/oso-pulumi.md)

[^cdktf]: [CDK for Terraform archival notice, December 2025](https://github.com/hashicorp/terraform-cdk)
[^case-extension]: [Additional case evidence](/research/oso-pulumi.md)
