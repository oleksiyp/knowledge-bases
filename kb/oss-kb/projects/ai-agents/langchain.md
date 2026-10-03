---
type: OSS Project
title: LangChain / LangGraph
description: The incumbent LLM-app and agent framework (LangChain + LangGraph, MIT); survived the 2024 "abstraction backlash" by shipping 1.0 releases and turning LangSmith into a commercial agent-engineering platform, making LangChain Inc an AI-tooling unicorn.
resource: https://github.com/langchain-ai/langchain
tags: [ai-agents, llm-framework, mit, company-led-open-core, unicorn]
domain: ai-agents
license: MIT
license_history: ["MIT (2022-)"]
governance: company-led-open-core
steward: LangChain Inc
backing_orgs: [organizations/langchain-inc]
metrics:
  github_stars: { value: 147391, as_of: 2026-10-03 }
  github_forks: { value: 24686, as_of: 2026-10-03 }
  langgraph_github_stars: { value: 42643, as_of: 2026-10-03 }
  combined_monthly_downloads: { value: 90000000, as_of: 2025-10-21 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lc-gh
    resource: https://github.com/langchain-ai/langchain
    title: LangChain GitHub repository (API stats 2026-10-03)
  - id: lg-gh
    resource: https://github.com/langchain-ai/langgraph
    title: LangGraph GitHub repository (API stats; 1.0.0 release 2025-10-17)
  - id: lc-releases
    resource: https://github.com/langchain-ai/langchain/releases
    title: "LangChain releases (langchain==1.0.0 and langchain-core==1.0.0 published 2025-10-17)"
  - id: lc-seriesb
    resource: https://www.langchain.com/blog/series-b
    title: "LangChain raises $125M to build the platform for agent engineering"
    author: org:langchain
  - id: lc-blog
    resource: https://www.langchain.com/blog
    title: LangChain blog index (2026 posts)
  - id: lc-wiki
    resource: https://en.wikipedia.org/wiki/LangChain
    title: "Wikipedia: LangChain"
---

# Summary
LangChain is the most-starred general LLM application framework (147k stars) and, with LangGraph (42.6k), remains the default reference stack for building agents in Python/TypeScript[^lc-gh][^lg-gh]. Verdict: **thriving** on both axes. After years of criticism for over-abstraction, the team re-centred on LangGraph's low-level graph runtime, shipped LangChain 1.0 and LangGraph 1.0 on 2025-10-17[^lc-releases], and raised a $125M Series B at a $1.25B valuation led by IVP[^lc-seriesb]. In 2026 the commercial focus is LangSmith (observability, evals, deployment, "Managed Deep Agents", fine-tuning)[^lc-blog]. The OSS library is the funnel; the closed LangSmith platform is the business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-14 | LangGraph Platform GA (managed infra for stateful agents) | Business | + [^lc-wiki] |
| W12 | 2025-10-17 | LangChain 1.0 and LangGraph 1.0 released | OSS | + [^lc-releases] |
| W12 | 2025-10 (Oct 21) | $125M Series B led by IVP, $1.25B valuation; 90M combined monthly downloads, 35% of Fortune 500 claimed | Business | + [^lc-seriesb] |
| W3 | 2026-07-25 | Harrison Chase "own your intelligence" positioning post | Business | ~ [^lc-blog] |
| W3 | 2026-09-24/25 | LangSmith Engine v2, Managed Deep Agents v0.8, LangSmith Fine-Tuning launched | Business | + [^lc-blog] |

# OSS successes
- Scale: 147k stars / 24.7k forks on LangChain, 42.6k on LangGraph as of 2026-10-03, both with commits within the last day[^lc-gh][^lg-gh].
- 1.0 stabilization (Oct 2025) addressed the long-running complaint about breaking changes[^lc-releases].
- "Deep Agents" harness and LangGraph became the company's agent story, keeping relevance as coding-agent harnesses grew[^lc-blog].

# OSS failures / risks
- Competition from lab-native SDKs (OpenAI Agents SDK, Google ADK, Microsoft Agent Framework) and lighter libraries (Pydantic AI, smolagents) erodes the "default framework" position (see [/projects/ai-agents/openai-agents-sdk.md](/projects/ai-agents/openai-agents-sdk.md)).
- Star growth has slowed relative to 2023–24; agent builders increasingly start from coding-agent harnesses rather than frameworks.

# Business successes
- Unicorn status: $125M Series B at $1.25B (Oct 2025), investors incl. Sequoia, Benchmark, CapitalG, Sapphire[^lc-seriesb].
- Monetization through proprietary LangSmith; LangSmith trace volume grew 12x YoY per the company[^lc-seriesb].

# Business failures / risks
- Revenue figures are not disclosed. Pass 2: no announced Series C found as of 2026-10-03; a secondary-market data provider (Forge) lists a ~$3B "Series C" valuation dated Sept 2026, unconfirmed by the company or press.
- Observability/evals is crowded (Logfire, Langfuse, Braintrust, cloud vendors).

# By window
## W3
- LangSmith Engine v2, Managed Deep Agents v0.8 and LangSmith Fine-Tuning (late Sep 2026)[^lc-blog].
- Vertical "Deep Life Sci" harness for life sciences (2026-09-17)[^lc-blog].
## W6
- No notable events found beyond steady releases.
## W9
- No notable events found.
## W12
- LangChain/LangGraph 1.0 (2025-10-17)[^lc-releases]; $125M Series B, $1.25B valuation[^lc-seriesb].
## W24
- LangGraph Platform GA (2025-05-14)[^lc-wiki].

# Lessons
- A permissive OSS framework can fund itself via a closed, adjacent ops platform (tracing/evals/deploy) rather than by restricting the library.
- Declaring API stability (1.0) is a business event: it unlocks enterprise adoption and fundraising.

# Related
- [/organizations/langchain-inc.md](/organizations/langchain-inc.md)
- [/events/2025-10-langchain-series-b-unicorn.md](/events/2025-10-langchain-series-b-unicorn.md)
- [/projects/ai-agents/llamaindex.md](/projects/ai-agents/llamaindex.md), [/projects/ai-agents/crewai.md](/projects/ai-agents/crewai.md), [/projects/ai-agents/langflow.md](/projects/ai-agents/langflow.md)

[^lc-gh]: https://github.com/langchain-ai/langchain
[^lg-gh]: https://github.com/langchain-ai/langgraph
[^lc-releases]: https://github.com/langchain-ai/langchain/releases
[^lc-seriesb]: https://www.langchain.com/blog/series-b
[^lc-blog]: https://www.langchain.com/blog
[^lc-wiki]: https://en.wikipedia.org/wiki/LangChain
