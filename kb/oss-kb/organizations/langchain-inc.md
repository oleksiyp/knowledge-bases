---
type: Organization
title: LangChain Inc
description: Company behind the MIT-licensed LangChain and LangGraph frameworks; monetizes through the proprietary LangSmith agent-engineering platform and became a unicorn in Oct 2025.
resource: https://www.langchain.com
tags: [commercial-open-source, ai-agents, llm-framework, unicorn]
org_kind: coss-startup
hq: San Francisco, USA
funding: { total_usd: "~260M through Series B (Sacra; not company-confirmed)", last_round: "Series B, $125M (IVP) — last announced round; Forge lists an unannounced Series C at ~$3.01B (Sept 2026)", last_round_date: 2025-10-21, valuation_usd: "1.25B (announced); ~3.01B per Forge secondary data (unconfirmed)" }
business_verdict: thriving
projects: [projects/ai-agents/langchain]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lc-seriesb
    resource: https://www.langchain.com/blog/series-b
    title: "LangChain raises $125M to build the platform for agent engineering"
  - id: lc-wiki
    resource: https://en.wikipedia.org/wiki/LangChain
    title: "Wikipedia: LangChain"
  - id: lc-blog
    resource: https://www.langchain.com/blog
    title: LangChain blog index
  - id: sacra-lc
    resource: https://sacra.com/c/langchain/
    title: "Sacra: LangChain valuation, funding & news"
  - id: forge-lc
    resource: https://forgeglobal.com/langchain_ipo/
    title: "Forge Global: LangChain IPO timeline and financing details (lists Series C at $3.01B, Sept 2026)"
    author: org:forge-global
  - id: aiinsider-lc-b
    resource: https://theaiinsider.tech/2025/10/24/langchain-closes-125m-at-1-25b-valuation-to-expand-its-open-source-ai-agent-platform/
    title: "AI Insider: LangChain closes $125M at $1.25B valuation (2025-10-24)"
---

# Summary
LangChain Inc (CEO Harrison Chase) raised a $10M Benchmark seed and a Sequoia-led round in 2023, a $25M Sequoia Series A with LangSmith GA in Feb 2024[^lc-wiki], and a $125M IVP-led Series B at $1.25B in Oct 2025 alongside LangChain/LangGraph 1.0[^lc-seriesb]. Total funding is reported at ~$260M[^sacra-lc]. In 2026 it expanded LangSmith with Managed Deep Agents, Engine v2 and fine-tuning[^lc-blog]. Verdict: **thriving**.

# Business timeline
| Date | Event |
|---|---|
| 2024-02 | $25M Series A (Sequoia); LangSmith GA[^lc-wiki] |
| 2025-05-14 | LangGraph Platform GA[^lc-wiki] |
| 2025-10 | $125M Series B (IVP), $1.25B; 90M monthly downloads; 35% of Fortune 500 claimed[^lc-seriesb] |
| 2026-09 | LangSmith Engine v2, Managed Deep Agents v0.8, LangSmith Fine-Tuning[^lc-blog] |

# Monetization model
Permissive MIT frameworks as funnel; proprietary SaaS/self-hosted LangSmith (tracing, evals, deployment, agent builder) as product[^lc-seriesb].

# Successes
- Turned a criticized framework into a platform business with unicorn valuation[^lc-seriesb].

# Failures / risks
- Revenue undisclosed; lab SDKs and observability competitors squeeze both layers. Forge Global lists a Series C at ~$3.01B dated Sept 2026 based on filings it collects, but LangChain has not announced such a round (unconfirmed as of 2026-10-03)[^forge-lc].

# Related
- [/projects/ai-agents/langchain.md](/projects/ai-agents/langchain.md), [/events/2025-10-langchain-series-b-unicorn.md](/events/2025-10-langchain-series-b-unicorn.md)

[^lc-seriesb]: https://www.langchain.com/blog/series-b
[^lc-wiki]: https://en.wikipedia.org/wiki/LangChain
[^lc-blog]: https://www.langchain.com/blog
[^sacra-lc]: https://sacra.com/c/langchain/
[^forge-lc]: Forge Global, accessed 2026-10-03.
