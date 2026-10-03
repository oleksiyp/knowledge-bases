---
type: OSS Project
title: "Pulumi"
description: "Apache-2.0 infrastructure-as-code in general-purpose languages; very high release cadence (v3.26x by Oct 2026), added full Terraform state/HCL support (Aug 2026) and AI agent \"Neo\", but no new funding since its 2023 $41M Series C — OSS stable, business stable."
resource: https://github.com/pulumi/pulumi
tags: [cloud-native, iac, apache-2.0, company-led, open-core]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2018-)"]
governance: company-led-open-core
steward: Pulumi Corp.
backing_orgs: []
metrics:
  github_stars: { value: 25763, as_of: 2026-10-03 }
  latest_release: { value: "v3.267.0 (2026-10-01)", as_of: 2026-10-03 }
  total_funding_usd: { value: "~99M (through Series C, Oct 2023)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pulumi-gh
    resource: https://github.com/pulumi/pulumi
    title: "Pulumi GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: pulumi-blog
    resource: https://www.pulumi.com/blog/
    title: "Pulumi blog"
    author: org:pulumi
  - id: pulumi-tf-release
    resource: https://www.pulumi.com/releases/terraform-state-backend-modules-hcl/
    title: "Pulumi release: Full support for Terraform state, cross-language modules, and HCL (Aug 2026)"
    author: org:pulumi
  - id: sa-pulumi-neo
    resource: https://siliconangle.com/2025/09/16/pulumi-debuts-first-ai-agents-take-cloud-platform-engineering/
    title: "SiliconANGLE: Pulumi debuts its first AI agents (Neo) (Sep 16, 2025)"
    author: org:siliconangle
  - id: pr-pulumi-may26
    resource: https://www.prnewswire.com/news-releases/pulumi-closes-the-ai-deployment-gap-with-agent-native-infrastructure-and-superintelligence-partnerships-302776114.html
    title: "PR Newswire: Pulumi closes the AI deployment gap with agent-native infrastructure (May 19, 2026)"
    author: org:pulumi
  - id: pulumi-c
    resource: https://www.pulumi.com/blog/series-c/
    title: "Pulumi: $41M Series C"
    author: org:pulumi
---

# Summary
Pulumi is the leading "IaC in real languages" tool and stayed Apache-2.0 while HashiCorp moved Terraform to BSL (see [Terraform](/projects/licensing-forks/terraform.md) and [OpenTofu](/projects/licensing-forks/opentofu.md)). It ships near-weekly (v3.260 Aug 28 → v3.267 Oct 1, 2026)[^pulumi-gh]. In 2025-2026 it repositioned around AI agents (Pulumi Neo launched Sep 16, 2025; NVIDIA/CoreWeave/Weights & Biases integrations and Neo in CLI/GitHub/Slack on May 19, 2026; "Neo Security" Aug 2026)[^sa-pulumi-neo][^pr-pulumi-may26] and, notably, announced full support for Terraform state, cross-language modules and HCL (GA Aug 4, 2026; HCL support is OpenTofu-compatible and Pulumi Cloud now implements Terraform's remote-backend API) — a direct play for Terraform migrants[^pulumi-tf-release][^pulumi-blog]. Its last disclosed round was a $41M Series C in October 2023[^pulumi-c]. Verdict: OSS **stable**, business **stable** (no public revenue data).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-16 | Pulumi Neo, a "platform engineering AI agent", launched[^sa-pulumi-neo] | Business | + |
| W6 | 2026-05-19 | NVIDIA/CoreWeave providers, MCP integration catalog, Neo in CLI/GitHub/Slack[^pr-pulumi-may26] | Business | + |
| W3 | 2026-08-04 | Full support for Terraform state, cross-language modules and HCL[^pulumi-tf-release] | Both | + |
| W3 | 2026-08-26 | Pulumi Context API (infra as a queryable graph)[^pulumi-blog] | OSS | + |
| W3 | 2026-08-28 | "Neo Security" for agentic-era infrastructure[^pulumi-blog] | Business | + |
| W3 | 2026-08-28 → 2026-10-01 | v3.260 – v3.267[^pulumi-gh] | OSS | + |

# OSS successes
- Permissive license maintained; extremely frequent releases[^pulumi-gh].
- Terraform/HCL interoperability lowers migration barriers[^pulumi-blog].

# OSS failures / risks
- Provider ecosystem partly bridges Terraform providers, tying it to the HashiCorp/OpenTofu provider supply chain.

# Business successes
- Product expansion into AI agents (Neo) and IDP features[^pulumi-blog].

# Business failures / risks
- No new funding found since 2023[^pulumi-c]; competes with free OpenTofu and IBM-owned Terraform.

# By window
## W3
- Terraform state/HCL support; Neo Security; Context API[^pulumi-blog].
## W6
- AI-infrastructure partnerships (NVIDIA, CoreWeave, W&B) and Neo everywhere (May 19)[^pr-pulumi-may26].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Pulumi Neo AI agent launched (Sep 16, 2025)[^sa-pulumi-neo].

# Lessons
- In the post-BSL IaC market, interoperability with the incumbent's formats is a stronger wedge than license purity alone.

# Related
- [Crossplane](/projects/cloud-native/crossplane.md), [Terraform](/projects/licensing-forks/terraform.md), [OpenTofu](/projects/licensing-forks/opentofu.md)

[^pulumi-gh]: https://github.com/pulumi/pulumi
[^pulumi-blog]: https://www.pulumi.com/blog/
[^pulumi-tf-release]: https://www.pulumi.com/releases/terraform-state-backend-modules-hcl/
[^sa-pulumi-neo]: https://siliconangle.com/2025/09/16/pulumi-debuts-first-ai-agents-take-cloud-platform-engineering/
[^pr-pulumi-may26]: https://www.prnewswire.com/news-releases/pulumi-closes-the-ai-deployment-gap-with-agent-native-infrastructure-and-superintelligence-partnerships-302776114.html
[^pulumi-c]: https://www.pulumi.com/blog/series-c/
