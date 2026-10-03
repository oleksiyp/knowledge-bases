---
type: OSS Project
title: n8n
description: Fair-code (Sustainable Use License) workflow-automation platform that reinvented itself as an AI-agent orchestrator; the biggest business winner in the domain — valuation went from ~€250M (Mar 2025) to $2.5B (Oct 2025) to $5.2B (SAP, May 2026) with ~206k GitHub stars.
resource: https://github.com/n8n-io/n8n
tags: [ai-agents, workflow-automation, fair-code, source-available, company-led-open-core]
domain: ai-agents
license: Sustainable Use License (source-available, fair-code)
license_history: ["Apache-2.0 + Commons Clause (2019-2022)", "Sustainable Use License (2022-03-)"]
governance: company-led-open-core
steward: n8n GmbH
backing_orgs: [organizations/n8n]
metrics:
  github_stars: { value: 206531, as_of: 2026-10-03 }
  github_forks: { value: 60978, as_of: 2026-10-03 }
  arr_usd: { value: "40M+", as_of: 2025-10-09 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: n8n-gh
    resource: https://github.com/n8n-io/n8n
    title: n8n GitHub repository (API stats 2026-10-03; n8n@2.0.0 released 2025-12-08)
  - id: n8n-seriesc
    resource: https://blog.n8n.io/series-c/
    title: "n8n raises $180m to get AI closer to value with orchestration"
    author: org:n8n
  - id: n8n-wiki
    resource: https://en.wikipedia.org/wiki/N8n
    title: "Wikipedia: n8n"
  - id: tfn-n8n
    resource: https://techfundingnews.com/n8n-raises-180m-series-c-2-5-billion-valuation-automation-ai/
    title: "Tech Funding News: n8n hits $2.5B valuation after $180M Series C"
  - id: n8n-sap
    resource: https://blog.n8n.io/n8n-sap/
    title: "n8n blog: Announcing SAP's strategic investment in n8n (2026-05-12)"
    author: org:n8n
  - id: bbg-n8n-sap
    resource: https://www.bloomberg.com/news/articles/2026-05-12/sap-invests-in-ai-automation-startup-n8n-at-5-2-billion-value
    title: "Bloomberg: SAP invests in AI startup n8n, doubling valuation to $5.2 billion (2026-05-12)"
    author: org:bloomberg
---

# Summary
n8n is the standout commercial success of the AI-agent wave: a Berlin workflow-automation tool that repositioned around AI agents and saw ~6x user growth and ~10x revenue growth in a year[^n8n-seriesc]. It raised a €55M Series B (Highland Europe, ~€250M valuation) in March 2025, a $180M Series C led by Accel at $2.5B on 2025-10-09, and an SAP strategic investment of €60M+ in May 2026 valuing it at $5.2B, with n8n embedded in SAP Joule Studio[^n8n-wiki][^n8n-seriesc]. ARR was reported above $40M in 2025[^n8n-wiki]. It is source-available ("fair-code", Sustainable Use License), not OSI open source[^n8n-wiki]. Verdict: OSS-community **thriving** (206k stars, among the top repos on GitHub)[^n8n-gh]; business **thriving**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03 | €55M Series B, Highland Europe, ~€250M valuation | Business | + [^n8n-wiki] |
| W12 | 2025-10-09 | $180M Series C, Accel lead, $2.5B valuation; NVentures participates | Business | + [^n8n-seriesc][^tfn-n8n] |
| W12 | 2025-12-08 | n8n 2.0 released | OSS | + [^n8n-gh] |
| W6 | 2026-05-12 | SAP strategic investment at $5.2B (amount reported ~€60M); n8n to be embedded natively in SAP Joule Studio (GA targeted Q3 2026); 1.7M monthly active builders, 1,400+ enterprise customers | Business | + [^n8n-sap][^bbg-n8n-sap] |
| W9/W6 | 2026 | Deutsche Telekom certified-partner deal | Business | + [^n8n-wiki] |
| W3 | 2026-10-02 | n8n@2.41.6; 206k stars | OSS | + [^n8n-gh] |

# OSS successes
- 206.5k stars and 61k forks — one of the most-starred projects on GitHub[^n8n-gh].
- Large template/community-node ecosystem; self-hosting on anything from Raspberry Pi to bare metal[^n8n-seriesc].
# OSS failures / risks
- Not OSI-approved: the Sustainable Use License restricts offering n8n as a competing service; some contributors/distributors object to "fair-code" branding[^n8n-wiki].
# Business successes
- Valuation ~20x in ~14 months (€250M → $5.2B)[^n8n-wiki]; strategic distribution via SAP[^n8n-sap].
# Business failures / risks
- Agentic coding tools (Claude Code, OpenClaw) threaten visual-workflow builders — the reason Flowise gave for its sunset (see [/projects/ai-agents/flowise.md](/projects/ai-agents/flowise.md)).

# By window
## W3
- Continued rapid releases (2.4x line)[^n8n-gh].
## W6
- SAP strategic investment at $5.2B (May 12, 2026)[^n8n-sap][^bbg-n8n-sap].
## W9
- Deutsche Telekom partnership (2026, exact date unverified)[^n8n-wiki].
## W12
- $180M Series C at $2.5B; n8n 2.0[^n8n-seriesc][^n8n-gh].
## W24
- €55M Series B (Mar 2025)[^n8n-wiki].

# Lessons
- Source-available licenses did not hinder community growth or fundraising when the product is self-hostable and genuinely useful.
- Re-positioning an existing integration catalog as "agent tools" captured the AI wave better than starting from scratch.

# Related
- [/organizations/n8n.md](/organizations/n8n.md)
- [/events/2025-10-n8n-series-c.md](/events/2025-10-n8n-series-c.md), [/events/2026-05-sap-invests-in-n8n.md](/events/2026-05-sap-invests-in-n8n.md)
- [/projects/ai-agents/dify.md](/projects/ai-agents/dify.md), [/projects/ai-agents/flowise.md](/projects/ai-agents/flowise.md), [/projects/ai-agents/langflow.md](/projects/ai-agents/langflow.md)

[^n8n-gh]: https://github.com/n8n-io/n8n
[^n8n-seriesc]: https://blog.n8n.io/series-c/
[^n8n-wiki]: https://en.wikipedia.org/wiki/N8n
[^tfn-n8n]: https://techfundingnews.com/n8n-raises-180m-series-c-2-5-billion-valuation-automation-ai/
[^n8n-sap]: n8n blog, 2026-05-12 (company does not state the amount).
[^bbg-n8n-sap]: Bloomberg, 2026-05-12.
