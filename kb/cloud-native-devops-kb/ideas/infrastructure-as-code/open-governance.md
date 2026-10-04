---
type: Idea
title: Infrastructure as code and the cost of governance changes
description: Declarative infrastructure remained durable, while licensing changes made governance and exit planning
  part of architecture.
area: infrastructure-as-code
verdict: winning
confidence: high
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
- id: bsl
  resource: https://www.hashicorp.com/ja/blog/hashicorp-adopts-business-source-license
  title: HashiCorp adopts Business Source License, August 2023
- id: tofu
  resource: https://opentofu.org/blog/opentofu-is-going-ga/
  title: OpenTofu reaches general availability, January 2024
---

# Infrastructure as code and the cost of governance changes

## Verdict

**WINNING — Declarative infrastructure remained durable, while licensing changes made governance and exit planning part of architecture.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

HashiCorp announced its Business Source License transition in August 2023. OpenTofu reached GA in January 2024 as an alternative fork.[^bsl][^tofu] These establish a governance discontinuity and a functioning response, not equal market share.

## What succeeded

Textual configuration, planning and state management remain reusable capabilities. A fork demonstrates that an ecosystem can preserve an open development path after a vendor changes terms. Users gained another stewardship choice.

## What failed or remained difficult

A familiar command syntax does not remove migration work. Providers, state compatibility, modules, hosted workflows and organizational policy can create dependencies outside the core language. License interpretation is separate from technical compatibility.

## Why and when it fits

The inference is that portability needs maintenance, even within a closely related tool family. Governance became an operational input because it can change upgrade and procurement decisions without changing the application workload.

Track the exact engine, provider and state versions you rely on. Rehearse a representative migration before making contractual or strategic commitments. Prefer a credible exit exercise to a generic claim that code is portable.

## What would change the verdict

Long-run evidence about contributor diversity, compatibility and migrations could distinguish durable plurality from temporary fragmentation. This KB does not make a legal determination about permitted use.

## Related

* [Area review](/areas/infrastructure-as-code.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

* [System profile: OpenTofu](/systems/opentofu.md)

* [System profile: Terraform](/systems/terraform.md)

[^bsl]: [HashiCorp adopts Business Source License, August 2023](https://www.hashicorp.com/ja/blog/hashicorp-adopts-business-source-license)
[^tofu]: [OpenTofu reaches general availability, January 2024](https://opentofu.org/blog/opentofu-is-going-ga/)
