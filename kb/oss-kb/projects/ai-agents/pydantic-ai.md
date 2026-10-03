---
type: OSS Project
title: Pydantic AI (and Logfire)
description: Type-safe MIT agent framework from the Pydantic team (v1 Sep 2025, ~20k stars) paired with the commercial Logfire observability platform — a "validation library to agent platform" open-core playbook backed by a $12.5M Sequoia-led Series A (Oct 2024).
resource: https://github.com/pydantic/pydantic-ai
tags: [ai-agents, agent-framework, mit, company-led-open-core, observability]
domain: ai-agents
license: MIT
license_history: ["MIT (2024-)"]
governance: company-led-open-core
steward: Pydantic Services Inc
backing_orgs: []
metrics:
  github_stars: { value: 20371, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pai-gh
    resource: https://github.com/pydantic/pydantic-ai
    title: Pydantic AI GitHub repository (v1.0.0 2025-09-05; v2.54.0 2026-10-03)
  - id: pyd-articles
    resource: https://pydantic.dev/articles
    title: Pydantic articles index (Series A, Pydantic AI v1, Logfire)
---

# Summary
Pydantic AI launched in late 2024 and reached v1.0.0 on 2025-09-04/05; by Oct 2026 it is on v2.54 with ~20.4k stars and near-daily releases[^pai-gh][^pyd-articles]. Pydantic raised a $12.5M Series A led by Sequoia in October 2024 and monetizes via Logfire, an observability/evals platform for agents[^pyd-articles]. Verdict: OSS **growing**; business **growing**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10 | $12.5M Series A (Sequoia) | Business | + [^pyd-articles] |
| W24 | 2025-09-04 | Pydantic AI v1 | OSS | + [^pai-gh] |
| W3 | 2026-10-03 | v2.54.0 | OSS | + [^pai-gh] |

# OSS successes
- Rapid version cadence; leverages Pydantic's ubiquity in Python[^pai-gh].
# OSS failures / risks
- Fast major-version churn (v1 → v2 within a year).
# Business successes
- Logfire positioned as agent observability[^pyd-articles].
# Business failures / risks
- Later funding not verified.

# By window
## W3
- v2.5x releases[^pai-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Series A; v1[^pyd-articles][^pai-gh].

# Lessons
- Owning a ubiquitous dependency gives distribution for a new agent framework and an adjacent paid ops product.

# Related
- [/projects/ai-agents/langchain.md](/projects/ai-agents/langchain.md), [/projects/ai-agents/smolagents.md](/projects/ai-agents/smolagents.md)

[^pai-gh]: https://github.com/pydantic/pydantic-ai
[^pyd-articles]: https://pydantic.dev/articles
