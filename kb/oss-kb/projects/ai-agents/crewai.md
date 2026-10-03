---
type: OSS Project
title: CrewAI
description: MIT-licensed role-based multi-agent framework (~59k stars) that reached 1.0 in Oct 2025 and monetizes via the CrewAI AMP enterprise platform; one of the most adopted independent agent frameworks.
resource: https://github.com/crewAIInc/crewAI
tags: [ai-agents, agent-framework, multi-agent, mit, company-led-open-core]
domain: ai-agents
license: MIT
license_history: ["MIT (2023-)"]
governance: company-led-open-core
steward: CrewAI Inc
backing_orgs: []
metrics:
  github_stars: { value: 59295, as_of: 2026-10-03 }
  github_forks: { value: 8622, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: crew-gh
    resource: https://github.com/crewAIInc/crewAI
    title: CrewAI GitHub repository (1.0.0 2025-10-20; 1.15.23 2026-09-28)
  - id: crew-blog
    resource: https://www.crewai.com/blog
    title: CrewAI blog index (AMP, Crew Studio, partnerships)
  - id: forge-crewai
    resource: https://forgeglobal.com/crew-ai_ipo/
    title: "Forge Global: Crew AI pre-IPO data (Series B-1, Apr 2026; filings-based, not company-announced)"
---

# Summary
CrewAI is a Python framework for orchestrating role-playing agent "crews" (59.3k stars), independent of LangChain[^crew-gh]. It shipped 1.0.0 on 2025-10-20 and has released almost weekly since (1.15.23 on 2026-09-28)[^crew-gh]. The company sells CrewAI AMP (enterprise agent management), Crew Studio and partnerships with NVIDIA, PwC, HPE, Cloudera and Cerebras[^crew-blog]. Verdict: OSS **thriving**; business **growing** (funding figures not verified in this pass).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-20 | CrewAI 1.0.0 | OSS | + [^crew-gh] |
| W3 | 2026-09-28 | 1.15.23; 59k stars | OSS | + [^crew-gh] |

# OSS successes
- High release cadence; one of the top-3 independent frameworks by stars[^crew-gh].
# OSS failures / risks
- Telemetry and enterprise-feature gating have drawn criticism (not verified in this pass).
# Business successes
- Enterprise partnerships (NVIDIA, PwC, HPE)[^crew-blog].
# Business failures / risks
- Funding: Series A $18M (Insight Partners, Oct 2024); a ~$20M Series B-1 at ~$177M post-money dated 2026-04-15 appears only in filings-based secondary data (Forge), not a company announcement[^forge-crewai]. Revenue undisclosed; competition from lab SDKs.

# By window
## W3
- Frequent 1.15.x releases[^crew-gh].
## W6
- Reported (filings-based) ~$20M Series B-1 at ~$177M post-money (Apr 15) — unconfirmed by company[^forge-crewai].
## W9
- No notable events found.
## W12
- 1.0 release[^crew-gh].
## W24
- Growth phase (stats only).

# Lessons
- An opinionated mental model ("crews" of roles) can beat more general frameworks for adoption among non-specialists.

# Related
- [/projects/ai-agents/langchain.md](/projects/ai-agents/langchain.md), [/projects/ai-agents/autogen.md](/projects/ai-agents/autogen.md)

[^crew-gh]: https://github.com/crewAIInc/crewAI
[^crew-blog]: https://www.crewai.com/blog
[^forge-crewai]: Forge Global company page (accessed 2026-10-03); treat as unconfirmed.
