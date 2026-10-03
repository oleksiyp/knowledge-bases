---
type: OSS Project
title: Dify
description: LLM-app/agentic-workflow platform from LangGenius under a modified Apache-2.0 (no multi-tenant use, logo retention); ~158k GitHub stars and a $30M Series Pre-A in March 2026 — big community, modest funding.
resource: https://github.com/langgenius/dify
tags: [ai-agents, low-code, workflow, source-available, company-led-open-core]
domain: ai-agents
license: "Dify Open Source License (modified Apache-2.0 with multi-tenant and branding restrictions)"
license_history: ["Modified Apache-2.0 (2024-03-)", "wording refinements (2024-09, 2024-10, 2025-02, 2025-03)"]
governance: company-led-open-core
steward: LangGenius Inc
backing_orgs: [organizations/langgenius]
metrics:
  github_stars: { value: 157736, as_of: 2026-10-03 }
  github_forks: { value: 24892, as_of: 2026-10-03 }
  machines_running: { value: 1400000, as_of: 2026-03-10 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dify-gh
    resource: https://github.com/langgenius/dify
    title: Dify GitHub repository (API stats 2026-10-03; LICENSE file and commit history)
  - id: dify-30m
    resource: https://dify.ai/blog/dify-raises-30m-tomorrow-s-organizations-will-be-built-by-people-and-agents
    title: "Dify raises $30M: Tomorrow's organizations will be built by people and agents"
    author: org:langgenius
  - id: yahoo-dify
    resource: https://finance.yahoo.com/news/dify-raises-30-million-series-150000863.html
    title: "Yahoo Finance: Dify raises $30 million Series Pre-A"
  - id: bw-dify
    resource: https://www.businesswire.com/news/home/20260309511426/en/Dify-Raises-$30-million-Series-Pre-A-to-Power-Enterprise-Grade-Agentic-Workflows
    title: "BusinessWire: Dify raises $30 million Series Pre-A (2026-03-09/10)"
  - id: infor-dify
    resource: https://inforcapital.com/news/difyai-raises-30m-series-pre-a-at-180m-valuation-for-enterprise-agentic-workflows/
    title: "Infor Capital: Dify.AI raises $30M Series Pre-A at $180M valuation"
---

# Summary
Dify is a visual platform for building, deploying and operating agentic workflows and RAG apps, with ~157.7k stars (one of GitHub's ~50 most-starred projects)[^dify-gh][^dify-30m]. Its license is Apache-2.0 plus conditions: no multi-tenant SaaS without a commercial license, and no removal of frontend branding; contributors grant LangGenius the right to change the license[^dify-gh]. On 2026-03-10 it raised a $30M Series Pre-A led by HSG (with GL Ventures, Alt-Alpha, 5Y Capital, Mizuho Leaguer, NYX), citing 1.4M+ machines running Dify, 175+ countries and 280 enterprises[^dify-30m][^bw-dify]; the $180M valuation is reported by secondary outlets, not the company release[^infor-dify][^yahoo-dify]. Verdict: OSS-community **thriving**; business **growing** (valuation modest relative to reach).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10 – 2025-03 | License wording refinements (multi-tenant/branding conditions) | OSS | ~ [^dify-gh] |
| W9 | 2026-03-10 | $30M Series Pre-A (HSG lead; GL Ventures, 5Y Capital…); reported $180M valuation | Business | + [^bw-dify][^infor-dify] |
| W3 | 2026-09-10 | v1.17.1 | OSS | + [^dify-gh] |

# OSS successes
- Massive self-hosted footprint (1.4M machines)[^dify-30m].
# OSS failures / risks
- Not OSI open source; contributor clause lets the company tighten the license unilaterally[^dify-gh].
- Same structural threat as Flowise from coding agents replacing low-code builders.
# Business successes
- $30M raise, enterprise traction (280 enterprises)[^dify-30m].
# Business failures / risks
- Reported $180M valuation is small vs n8n — suggests investors price low-code LLM builders conservatively[^yahoo-dify].

# By window
## W3
- Steady releases (1.17.x)[^dify-gh].
## W6
- No notable events found.
## W9
- $30M Series Pre-A[^dify-30m].
## W12
- No notable events found.
## W24
- License refinements[^dify-gh].

# Lessons
- "Apache-2.0 with conditions" licenses work commercially but invite confusion; scale of community ≠ valuation.

# Related
- [/organizations/langgenius.md](/organizations/langgenius.md)
- [/projects/ai-agents/n8n.md](/projects/ai-agents/n8n.md), [/projects/ai-agents/flowise.md](/projects/ai-agents/flowise.md), [/projects/ai-agents/langflow.md](/projects/ai-agents/langflow.md)

[^dify-gh]: https://github.com/langgenius/dify
[^dify-30m]: https://dify.ai/blog/dify-raises-30m-tomorrow-s-organizations-will-be-built-by-people-and-agents
[^yahoo-dify]: https://finance.yahoo.com/news/dify-raises-30-million-series-150000863.html
[^bw-dify]: BusinessWire, 2026-03-09.
[^infor-dify]: Infor Capital (valuation figure; not in company release).
