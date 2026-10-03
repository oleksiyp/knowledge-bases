---
type: Trend
title: The license pendulum swung back, and the fight moved to distribution
description: "Source-available relicensing (SSPL, BSL, ELv2) lost ground. Elastic, Redis and dbt moved back to OSI licenses, and foundation forks won the community. Vendors then turned to gating binaries, images and repos, and a few went fully closed citing AI. Open-weight model licenses moved the other way in 2026."
tags: [licensing, agpl, sspl, bsl, fair-source, forks, open-weights, cross-domain]
strength: strong
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
domains: [licensing-forks, databases, data-engineering, cloud-native, ai-models, end-user-apps]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: redis-agpl
    resource: https://redis.io/blog/agplv3/
    title: "Redis: AGPLv3 (2025-05-01)"
  - id: redmonk-valkey
    resource: https://redmonk.com/sogrady/2026/04/06/valkey-at-two/
    title: "RedMonk: Two Years of Valkey"
  - id: crdb-private
    resource: https://www.cockroachlabs.com/blog/source-code-protection/
    title: "Cockroach Labs: Protecting source code in the age of AI (2026-09-15)"
  - id: minio-gh
    resource: https://github.com/minio/minio
    title: "MinIO repository (archived 2026-04-25)"
  - id: fair-companies
    resource: https://fair.io/companies/
    title: "fair.io: Fair Source companies"
  - id: k3-license
    resource: https://huggingface.co/moonshotai/Kimi-K3/blob/main/LICENSE
    title: Kimi K3 License
  - id: chardet-willison
    resource: https://simonwillison.net/2026/Mar/5/chardet/
    title: "Simon Willison: chardet AI clean-room relicensing (2026-03-05)"
---

# Summary

The 2018–2023 wave of defensive relicensing (SSPL, BSL, ELv2) **did not achieve its stated goal**. Every relicensing aimed at hyperscalers produced a durable, hyperscaler-funded foundation fork. Valkey, OpenTofu, OpenSearch and OpenBao all outgrew their parents on community metrics.[^redmonk-valkey] The license did not decide revenue: Redis passed $300M ARR, Elastic grew 17% and HashiCorp sold for $6.4B. See [Did relicensing work?](/domains/licensing-forks.md).

Since then, four sub-trends have emerged.

# Four sub-trends

| # | Sub-trend | Evidence |
|---|---|---|
| 1 | **Reversal to AGPL.** AGPL replaced SSPL as the place vendors settle | Redis (May 2025)[^redis-agpl], Elastic (Aug 2024), dbt Fusion runtime reversed to Apache-2.0 (Jun 2026). See [Redis AGPL](/events/2025-05-redis-agplv3-relicense.md) and [dbt Core v2](/events/2026-06-dbt-core-v2-fusion-runtime-apache-2.md) |
| 2 | **Gating distribution instead of licenses.** Code stays OSI-licensed while binaries, images, consoles or repos disappear | Bitnami ([event](/events/2025-08-bitnami-free-catalog-ends.md)), MinIO ([event](/events/2025-12-minio-maintenance-mode.md))[^minio-gh], Linkerd stable builds, Crossplane providers, Mattermost history caps |
| 3 | **Going fully closed, citing AI.** The new escalation | CockroachDB moved to private development ([event](/events/2026-09-cockroachdb-source-goes-private.md))[^crdb-private]; Cal.com went closed ([event](/events/2026-04-cal-com-goes-closed-source.md)) |
| 4 | **Open-weight licenses tightened** while US big tech liberalised | Kimi K3 and Qwen3.8 revenue gates[^k3-license] versus Gemma 4 and Muse Glimmer on Apache-2.0. See [license tightening](/events/2026-07-kimi-k3-and-flagship-license-tightening.md) and [Gemma 4](/events/2026-04-gemma-4-apache-relicense.md) |
| 5 | **App-layer relicensing, now happening even at seed stage** (found in pass 2). Products with custom "Apache-plus-conditions" or revenue/headcount-threshold licenses. The infrastructure-layer fights of 2018–2023 are repeating in apps | [Open WebUI branding clause](/events/2025-04-open-webui-branding-license.md); [NocoDB to the Sustainable Use License](/events/2026-01-nocodb-sustainable-use-license.md); [Directus own-license v12](/events/2026-04-directus-mscl-relicense.md); [Screenpipe MIT to source-available](/events/2026-06-screenpipe-source-available-relicense.md); Medusa Enterprise Edition; [Prusa's non-OSS license](/events/2025-12-prusa-open-community-license.md). Counter-moves to OSI licenses: [Zitadel to AGPL](/events/2025-03-zitadel-agpl-relicense.md), Jan to Apache-2.0, Langfuse open-sourcing its paid features |

None of the app-layer relicensings has produced a successful fork yet. Unlike Redis or Terraform, these projects have no hyperscaler-funded party with a motive to fork them. This supports the rule of thumb below.

Fair Source / FSL **stalled at about 13 adopters**.[^fair-companies] Fair-code n8n nonetheless became one of the most valuable companies in the AI agents domain ($5.2B). See [n8n](/projects/ai-agents/n8n.md).

# AI is now a pressure on licenses

- **AI clean-room rewrites.** chardet was rewritten with AI and relicensed from LGPL to MIT.[^chardet-willison] See [event](/events/2026-03-chardet-ai-rewrite-relicense.md).
- **AI given as the reason to close source.** CockroachDB.[^crdb-private]
- **AI-generated pull requests leading to contribution lockdowns.** Ladybird, Zig and Codeberg.

# Rule of thumb from the evidence

The license matters less than (a) who owns the trademark and distribution, (b) whether a funded party exists that could fork, and (c) whether the vendor's revenue comes from a managed service.

# Related

- [Domain review: licensing and forks](/domains/licensing-forks.md)
- [Foundations as insurance](/trends/foundations-as-insurance.md)
- [Business models (market study)](/projects/coss-market/business-models.md)

[^redis-agpl]: Redis blog.
[^redmonk-valkey]: RedMonk.
[^crdb-private]: Cockroach Labs blog.
[^minio-gh]: MinIO GitHub.
[^fair-companies]: fair.io.
[^k3-license]: Kimi K3 License on Hugging Face.
[^chardet-willison]: Simon Willison's blog.
