---
type: Market Study
title: "COSS business models 2024-2026"
description: "How commercial open source companies made money 2024-2026: managed cloud consumption beat open core; the 2018-2024 source-available wave partially reversed (Elastic, Redis back to AGPL); fair source/fair-code matured; 'AI-native OSS' (usage by coding agents) became the dominant growth story while docs-funnel models (Tailwind) broke."
resource: https://fair.io/
tags: [coss, business-model, open-core, managed-cloud, fair-source, licensing, ai, market-study]
domain: coss-market
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T18:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: elastic-agpl
    resource: https://www.elastic.co/blog/elasticsearch-is-open-source-again
    title: "Elastic: Elasticsearch is open source. Again! (Shay Banon, 2024-08-29)"
  - id: redis-agpl
    resource: https://redis.io/blog/agplv3/
    title: "Redis: Redis is now available under the AGPLv3 (Rowan Trollope, 2025-05-01)"
  - id: fair-io
    resource: https://fair.io/
    title: "Fair Source (fair.io)"
  - id: mdb-q2fy27
    resource: https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-second-quarter-fiscal-2027-financial
    title: "MongoDB Q2 FY2027 results (Atlas 73.3% of subscription revenue)"
  - id: supabase-f
    resource: https://supabase.com/blog/supabase-series-f
    title: "Supabase Series F (60% of new databases launched by AI tools)"
  - id: turso-supabase
    resource: https://turso.tech/blog/turso-is-joining-supabase
    title: "Turso is joining Supabase"
  - id: n8n-sap
    resource: "https://blog.n8n.io/n8n-sap/"
    title: "n8n blog: Announcing SAP's strategic investment in n8n ($5.2B valuation, 2026-05-12)"
  - id: eweek-tw
    resource: "https://www.eweek.com/news/tailwind-labs-lays-off-engineers-due-to-ai/"
    title: "eWeek: Tailwind Labs lays off engineers, citing the 'brutal impact' of AI (2026-01-09; 3 of 4 engineers, revenue down ~80%)"
  - id: tailwind-shopify
    resource: https://tailwindcss.com/blog/tailwind-is-joining-shopify
    title: "Tailwind Labs is joining Shopify (2026-09-09)"
  - id: gitlab-q2fy27
    resource: https://ir.gitlab.com/news/news-details/2026/GitLab-Reports-Second-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx
    title: "GitLab Q2 FY2027 results"
  - id: tc-ibm-hashicorp
    resource: https://techcrunch.com/2025/02/27/ibm-closes-6-4b-hashicorp-acquisition/
    title: "TechCrunch: IBM closes $6.4B HashiCorp acquisition"
  - id: lf-coss-2025
    resource: https://www.linuxfoundation.org/press/linux-foundation-cossa-and-serena-report-shows-venture-investment-in-open-source-outperforms-proprietary-counterparts-and-benefits-communities
    title: "LF/COSSA/Serena: State of Commercial Open Source 2025"
  - id: bun-anthropic
    resource: https://bun.com/blog/bun-joins-anthropic
    title: "Bun is joining Anthropic"
  - id: astral-openai
    resource: https://astral.sh/blog/openai
    title: "Astral to join OpenAI"
  - id: nvidia-hf
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA to acquire Hugging Face"
---

# Summary

Between 2024 and 2026 the COSS model that won was **"OSS wedge + usage-priced managed cloud that machines (increasingly AI agents) consume"** — MongoDB Atlas is 73.3% of MongoDB's subscription revenue[^mdb-q2fy27]; Supabase says >60% of new databases are launched by AI tools[^supabase-f]. Classic **seat-based open core** (GitLab) grew but decelerated and was penalized. The **source-available wave partially reversed**: Elastic added AGPL (Aug 2024)[^elastic-agpl] and Redis added AGPL with Redis 8 (May 2025), admitting SSPL "hurt our relationship with the Redis community"[^redis-agpl]. **Fair source / fair-code** (delayed-open licenses like FSL; n8n's Sustainable Use License) matured into an accepted middle path that VCs fund at scale (n8n $5.2B)[^n8n-sap][^fair-io]. A new failure mode appeared: **documentation-funnel monetization** broke when AI assistants stopped sending developers to docs — Tailwind Labs laid off 75% of engineers in Jan 2026 and was absorbed by Shopify in Sept 2026[^eweek-tw][^tailwind-shopify].

# Model comparison

| Model | Exemplars (2024–26) | How it monetizes | 2y verdict | Evidence |
|---|---|---|---|---|
| Managed cloud / consumption | MongoDB Atlas, Supabase, ClickHouse Cloud, Databricks, Grafana Cloud, Temporal Cloud | Usage-priced hosted service of the OSS engine | **Winner** — fastest growth, highest valuations | [^mdb-q2fy27][^supabase-f] |
| Open core (seat-based) | GitLab, Elastic (partly) | Proprietary enterprise tiers per seat | **Under pressure** — AI agents threaten seat counts | [^gitlab-q2fy27] |
| Source-available (BSL/SSPL/ELv2) | HashiCorp (BSL), Redis (SSPL 2024–25), Elastic (2021–24) | Block cloud resellers | **Partially reversed**; triggered forks (OpenTofu, Valkey); HashiCorp sold | [^redis-agpl][^elastic-agpl][^tc-ibm-hashicorp] |
| AGPL return | Elastic (2024), Redis 8 (2025) | OSI-approved copyleft + commercial license | **Stabilizing** — regains "open source" label, keeps cloud deterrence | [^elastic-agpl][^redis-agpl] |
| Fair source / fair-code | n8n (SUL), Sentry-style FSL | Source-available, converts to OSS after delay | **Growing**, VC-fundable | [^n8n-sap][^fair-io] |
| Docs/templates funnel (OSS + paid UI kits) | Tailwind Labs (Tailwind Plus) | Developers visit docs → buy templates | **Broken by AI** | [^eweek-tw][^tailwind-shopify] |
| "Strategic OSS" inside an AI lab | Bun (Anthropic), uv/Ruff (OpenAI), Hugging Face (Nvidia) | None directly; funded as strategic infrastructure | **New** — kept permissive, controlled by platform | [^bun-anthropic][^astral-openai][^nvidia-hf] |

# Analysis
- **AI-native OSS** = projects whose primary *user* is now an AI coding agent (Supabase, Neon, Turso, Bun, uv). The model rewards products that are easy for agents to provision programmatically — Turso's pitch is "give every agent its own database"[^turso-supabase].
- **Zero-revenue OSS can still be worth an acquisition** if an AI product ships on it: Bun had $0 revenue when Anthropic bought it[^bun-anthropic].
- **The cloud-provider threat that drove relicensing has been partly replaced by an AI threat**: the risk is no longer AWS reselling your engine, but AI assistants answering questions that used to drive docs traffic and upsell.
- LF data still shows COSS outperforming closed source on valuation and exits[^lf-coss-2025] — the model works, but the moat moved from license to hosted service + community.

# By window
## W3
- Shopify absorbs Tailwind Labs; Tailwind Plus closed to new signups, MIT retained[^tailwind-shopify]. Supabase–Turso agent-database thesis[^turso-supabase].
## W6
- SAP invests in fair-code n8n at $5.2B[^n8n-sap]; Supabase: 60% of new DBs created by AI tools[^supabase-f].
## W9
- OpenAI–Astral: permissive tools kept open inside an AI lab[^astral-openai]; Tailwind layoffs (Jan 2026)[^eweek-tw].
## W12
- Anthropic–Bun (Dec 2025)[^bun-anthropic].
## W24
- Redis adds AGPL (May 2025)[^redis-agpl]; IBM closes HashiCorp (BSL) (Feb 2025)[^tc-ibm-hashicorp].

# Lessons
- License changes are a weak moat; operational excellence of a managed service is a strong one.
- Any OSS business whose funnel relies on humans reading docs must re-plan for agent-mediated usage.
- Fair source is now a legitimate, fundable alternative to both BSL relicensing and pure OSS.

# Related
- [AI disruption of OSS monetization](/projects/coss-market/ai-disruption-of-oss-monetization.md)
- [COSS funding](/projects/coss-market/coss-funding-2024-2026.md)
- Licensing domain: [/domains/licensing-forks.md](/domains/licensing-forks.md)

[^elastic-agpl]: Elastic blog, 2024-08-29.
[^redis-agpl]: Redis blog, 2025-05-01.
[^fair-io]: fair.io.
[^mdb-q2fy27]: MongoDB IR, 2026-09-01.
[^supabase-f]: Supabase blog, 2026-06-04.
[^turso-supabase]: Turso blog, 2026-10-02.
[^n8n-sap]: n8n blog: Announcing SAP's strategic investment in n8n ($5.2B valuation, 2026-05-12).
[^eweek-tw]: eWeek: Tailwind Labs lays off engineers, citing the 'brutal impact' of AI (2026-01-09; 3 of 4 engineers, revenue down ~80%).
[^tailwind-shopify]: Tailwind blog, 2026-09-09.
[^gitlab-q2fy27]: GitLab IR, 2026-09-01.
[^tc-ibm-hashicorp]: TechCrunch, 2025-02-27.
[^lf-coss-2025]: LF/COSSA/Serena, 2025-08-25.
[^bun-anthropic]: Bun blog, 2025-12-02.
[^astral-openai]: Astral blog, 2026-03-19.
[^nvidia-hf]: NVIDIA blog, 2026-09-03.
