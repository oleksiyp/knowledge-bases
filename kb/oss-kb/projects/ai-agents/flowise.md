---
type: OSS Project
title: Flowise
description: Visual low-code LLM/agent builder (Apache-2.0, ~55k stars) acquired by Workday in Aug 2025 and then sunset — code freeze 2026-07-29, repo archived Aug 2026, end of life 2026-08-31 — with the team blaming coding agents for making rigid low-code workflows obsolete.
resource: https://github.com/FlowiseAI/Flowise
tags: [ai-agents, low-code, apache-2.0, acquired, archived, shutdown]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: single-vendor
steward: Workday (acquired FlowiseAI, Aug 2025)
backing_orgs: []
metrics:
  github_stars: { value: 55485, as_of: 2026-10-03 }
  github_forks: { value: 25056, as_of: 2026-10-03 }
oss_verdict: dead
business_verdict: acquired
momentum_by_window: { W3: down, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: flowise-gh
    resource: https://github.com/FlowiseAI/Flowise
    title: Flowise GitHub repository (archived; README "Flowise has been archived")
  - id: flowise-sunset
    resource: https://flowiseai.com/sunset
    title: The Future of Flowise (sunset notice)
  - id: flowise-disc
    resource: https://github.com/FlowiseAI/Flowise/discussions/6727
    title: "GitHub discussion #6727: The Future of Flowise"
  - id: wiki-workday
    resource: https://en.wikipedia.org/wiki/Workday,_Inc.
    title: "Wikipedia: Workday, Inc. (acquisitions table)"
  - id: workday-bridge
    resource: https://github.com/Workday/ai-conversation-bridge
    title: Workday ai-conversation-bridge (Flowise orchestrator deprecated)
  - id: workday-pr
    resource: https://newsroom.workday.com/2025-08-14-Workday-Acquires-Flowise,-Bringing-Powerful-AI-Agent-Builder-Capabilities-to-the-Workday-Platform
    title: "Workday newsroom: Workday acquires Flowise (2025-08-14)"
    author: org:workday
---

# Summary
Flowise was one of the most popular open-source drag-and-drop builders for LLM apps and agents (55k stars, 25k forks)[^flowise-gh]. Workday announced the acquisition on 2025-08-14 (terms undisclosed; 42k+ stars at the time)[^workday-pr]. Less than a year later the team announced a sunset: code freeze on 2026-07-29, repository archived (2026-08-10/13), npm/Docker deprecated, and core-team end of life on 2026-08-31[^flowise-sunset][^flowise-disc]. The stated reason: developers "are increasingly relying on new coding agents such as Claude Code/OpenClaw," and "the typical rigid workflow low-code approach quickly hits the limit"[^flowise-sunset][^flowise-disc]. Verdict: OSS **dead**; business **acquired** (then wound down).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-14 | Acquired by Workday (terms undisclosed) | Business | + [^workday-pr] |
| W3 | 2026-07-29 | Sunset announced; code freeze | OSS | − [^flowise-sunset] |
| W3 | 2026-08-10/13 | Repo archived; packages deprecated | OSS | − [^flowise-sunset][^flowise-disc] |
| W3 | 2026-08-31 | End of life; core team leaves Discord/GitHub | OSS | − [^flowise-disc] |

# OSS successes
- Apache-2.0 means the code remains forkable; the team explicitly encouraged forks[^flowise-disc].
# OSS failures / risks
- Archived ~1 year after acquisition; Workday's own Flowise integration marked deprecated[^workday-bridge].
# Business successes
- Founders exited to Workday (terms undisclosed)[^wiki-workday].
# Business failures / risks
- Product category (low-code LLM chains) judged obsolete by its own makers[^flowise-sunset].

# By window
## W3
- Sunset, archive, EOL[^flowise-sunset][^flowise-disc].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Workday acquisition (Aug 14, 2025)[^workday-pr].

# Lessons
- Acqui-hires of OSS tools by enterprise SaaS companies frequently end in sunsets of the public project.
- Low-code LLM builders face category risk from general-purpose coding agents.

# Related
- [/events/2025-08-workday-acquires-flowise.md](/events/2025-08-workday-acquires-flowise.md), [/events/2026-07-flowise-sunset.md](/events/2026-07-flowise-sunset.md)
- [/projects/ai-agents/langflow.md](/projects/ai-agents/langflow.md), [/projects/ai-agents/dify.md](/projects/ai-agents/dify.md), [/projects/ai-agents/openclaw.md](/projects/ai-agents/openclaw.md)

[^flowise-gh]: https://github.com/FlowiseAI/Flowise
[^flowise-sunset]: https://flowiseai.com/sunset
[^flowise-disc]: https://github.com/FlowiseAI/Flowise/discussions/6727
[^wiki-workday]: https://en.wikipedia.org/wiki/Workday,_Inc.
[^workday-bridge]: https://github.com/Workday/ai-conversation-bridge
[^workday-pr]: Workday newsroom, 2025-08-14.
