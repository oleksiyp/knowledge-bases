---
type: OSS Project
title: Gemini CLI (and Google ADK)
description: Google's Apache-2.0 terminal agent (launched June 2025 with a generous free tier) and its Agent Development Kit (April 2025); both grew fast on Google's distribution — Gemini CLI to ~107k stars, ADK to ~22k.
resource: https://github.com/google-gemini/gemini-cli
tags: [ai-agents, coding-agent, agent-framework, apache-2.0, single-vendor, big-tech]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2025-)"]
governance: single-vendor
steward: Google
backing_orgs: []
metrics:
  github_stars: { value: 107218, as_of: 2026-10-03 }
  github_forks: { value: 14683, as_of: 2026-10-03 }
  adk_python_github_stars: { value: 21695, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gcli-gh
    resource: https://github.com/google-gemini/gemini-cli
    title: Gemini CLI GitHub repository (created 2025-04-17; API stats 2026-10-03)
  - id: gcli-blog
    resource: https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/
    title: "Google: Introducing Gemini CLI, an open-source AI agent"
    author: org:google
  - id: adk-gh
    resource: https://github.com/google/adk-python
    title: Google ADK (Python) GitHub repository (created 2025-04-01; API stats 2026-10-03)
---

# Summary
Gemini CLI was announced on 2025-06-25 under Apache-2.0 with a free tier of 60 requests/minute and 1,000/day on Gemini 2.5 Pro, plus MCP support and Google Search grounding[^gcli-blog]. It reached ~107k stars by Oct 2026[^gcli-gh]. Google's code-first Agent Development Kit (ADK, repo created 2025-04-01) reached ~21.7k stars[^adk-gh]. Verdict: OSS **thriving** (single-vendor); business n/a.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04 | Google ADK (Python) released | OSS | + [^adk-gh] |
| W24 | 2025-06-25 | Gemini CLI launched (Apache-2.0, free tier) | OSS | + [^gcli-blog] |
| W3 | 2026-10-03 | Gemini CLI ~107k stars; ADK ~21.7k | OSS | + [^gcli-gh][^adk-gh] |

# OSS successes
- Free tier drove extremely fast adoption; very active contribution (14.7k forks)[^gcli-gh].
# OSS failures / risks
- Single-vendor; tied to Gemini models.
# Business successes
- n/a (drives Gemini / Code Assist usage)[^gcli-blog].
# Business failures / risks
- n/a.

# By window
## W3
- No notable governance events; steady releases[^gcli-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- ADK and Gemini CLI launches[^adk-gh][^gcli-blog].

# Lessons
- Free inference + open-source client is the most effective distribution tactic for labs.

# Related
- [/projects/ai-agents/openai-codex-cli.md](/projects/ai-agents/openai-codex-cli.md), [/projects/ai-agents/a2a-protocol.md](/projects/ai-agents/a2a-protocol.md)

[^gcli-gh]: https://github.com/google-gemini/gemini-cli
[^gcli-blog]: https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/
[^adk-gh]: https://github.com/google/adk-python
