---
type: OSS Project
title: Microsoft AutoGen
description: Microsoft Research's pioneering multi-agent framework; split by the AG2 community fork in Nov 2024, then superseded by Microsoft Agent Framework and put into maintenance mode (community-managed, no new features) — a high-star project retired by its sponsor.
resource: https://github.com/microsoft/autogen
tags: [ai-agents, agent-framework, single-vendor, maintenance-mode, fork, big-tech]
domain: ai-agents
license: "MIT (code) / CC-BY-4.0 (docs); GitHub reports CC-BY-4.0"
license_history: ["MIT code + CC-BY-4.0 docs (2023-)"]
governance: single-vendor
steward: Microsoft (now community-managed, maintenance mode)
backing_orgs: []
metrics:
  github_stars: { value: 61249, as_of: 2026-10-03 }
  github_forks: { value: 9277, as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: n/a
momentum_by_window: { W3: down, W6: down, W9: down, W12: down, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: autogen-gh
    resource: https://github.com/microsoft/autogen
    title: AutoGen GitHub repository (README maintenance-mode notice; last push 2026-04-15)
  - id: ag2-gh
    resource: https://github.com/ag2ai/ag2
    title: AG2 (formerly AutoGen) GitHub repository (created 2024-11-11)
  - id: maf-releases
    resource: https://github.com/microsoft/agent-framework/releases
    title: Microsoft Agent Framework releases (python-1.0.0 and dotnet-1.0.0, 2026-04-02)
---

# Summary
AutoGen (61k stars) popularized conversational multi-agent programming in 2023–24[^autogen-gh]. In November 2024 several original creators forked the v0.2 line into **AG2** under a separate org[^ag2-gh], while Microsoft continued a ground-up v0.4 rewrite. Microsoft then built **Microsoft Agent Framework (MAF)** as the "enterprise-ready successor", releasing 1.0 for Python and .NET on 2026-04-02[^maf-releases]; AutoGen's README now says it is "in maintenance mode… will not receive new features or enhancements and is community managed going forward", and the last push was 2026-04-15[^autogen-gh]. Verdict: OSS **declining** (retired by sponsor), business n/a.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-11 | AG2 fork created by original contributors | OSS | − [^ag2-gh] |
| W24 | 2025 | AutoGen v0.4 rewrite (AgentChat/Core) becomes stable line | OSS | ~ [^autogen-gh] |
| W9 | 2026-04-02 | Microsoft Agent Framework 1.0 (Python & .NET) | OSS | − for AutoGen [^maf-releases] |
| W6 | 2026-04-15 | Last push; README declares maintenance mode | OSS | − [^autogen-gh] |

# OSS successes
- Defined the multi-agent conversation pattern; its ideas live on in MAF and AG2.
# OSS failures / risks
- Community split (AG2) plus incompatible rewrite (v0.2 → v0.4) plus replacement (MAF) — three migrations in ~18 months for users.
# Business successes
- n/a.
# Business failures / risks
- n/a.

# By window
## W3
- No activity; maintenance mode[^autogen-gh].
## W6
- Maintenance mode/last push (Apr 2026)[^autogen-gh].
## W9
- MAF 1.0 supersedes AutoGen[^maf-releases].
## W12
- No notable events found.
## W24
- AG2 fork (Nov 2024)[^ag2-gh].

# Lessons
- Research-lab projects inside big tech are vulnerable to re-platforming; stars don't protect against sponsor strategy.
- Forks by original authors fragment users when the sponsor rewrites the API.

# Related
- [/events/2024-11-ag2-forks-autogen.md](/events/2024-11-ag2-forks-autogen.md)
- [/events/2026-04-microsoft-agent-framework-1-0.md](/events/2026-04-microsoft-agent-framework-1-0.md)
- [/projects/ai-agents/ag2.md](/projects/ai-agents/ag2.md), [/projects/ai-agents/microsoft-agent-framework.md](/projects/ai-agents/microsoft-agent-framework.md)

[^autogen-gh]: https://github.com/microsoft/autogen
[^ag2-gh]: https://github.com/ag2ai/ag2
[^maf-releases]: https://github.com/microsoft/agent-framework/releases
