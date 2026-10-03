---
type: OSS Project
title: OpenAI Agents SDK
description: OpenAI's lightweight MIT-licensed multi-agent framework (successor to the experimental Swarm), launched March 2025; quickly became a top-tier framework (~30k stars) and a direct competitor to LangChain/CrewAI.
resource: https://github.com/openai/openai-agents-python
tags: [ai-agents, agent-framework, mit, single-vendor, big-tech]
domain: ai-agents
license: MIT
license_history: ["MIT (2025-03-)"]
governance: single-vendor
steward: OpenAI
backing_orgs: []
metrics:
  github_stars: { value: 29814, as_of: 2026-10-03 }
  github_forks: { value: 4839, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: oaa-gh
    resource: https://github.com/openai/openai-agents-python
    title: OpenAI Agents SDK (Python) GitHub repository (created 2025-03-11; API stats 2026-10-03)
---

# Summary
The OpenAI Agents SDK (Python repo created 2025-03-11) provides agents, handoffs, guardrails and tracing in a small MIT-licensed package, and supports non-OpenAI models[^oaa-gh]. At ~29.8k stars it sits among the leading frameworks, competing with lab rivals (Google ADK, Microsoft Agent Framework) and independents (LangGraph, CrewAI, Pydantic AI). Verdict: OSS **growing**; business n/a.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-11 | Released (Python) | OSS | + [^oaa-gh] |
| W3 | 2026-10-02 | Active development; 29.8k stars | OSS | + [^oaa-gh] |

# OSS successes
- Minimal API surface; fast adoption on the back of OpenAI's distribution.
# OSS failures / risks
- Single-vendor; tracing defaults to OpenAI's platform.
# Business successes
- n/a.
# Business failures / risks
- n/a.

# By window
## W3
- No notable events found beyond releases.
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Launch (Mar 2025)[^oaa-gh].

# Lessons
- Every major lab now ships its own permissive agent SDK, squeezing independent framework vendors toward ops platforms.

# Related
- [/projects/ai-agents/langchain.md](/projects/ai-agents/langchain.md), [/projects/ai-agents/gemini-cli.md](/projects/ai-agents/gemini-cli.md), [/projects/ai-agents/microsoft-agent-framework.md](/projects/ai-agents/microsoft-agent-framework.md)

[^oaa-gh]: https://github.com/openai/openai-agents-python
