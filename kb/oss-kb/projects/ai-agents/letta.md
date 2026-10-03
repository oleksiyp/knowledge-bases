---
type: OSS Project
title: Letta (formerly MemGPT)
description: Apache-2.0 stateful-agent platform from the MemGPT researchers; repositioned in 2025–26 around "Letta Code" (a memory-first coding agent) as the core server's release cadence slowed (last tagged server release May 2026).
resource: https://github.com/letta-ai/letta
tags: [ai-agents, memory, stateful-agents, apache-2.0, company-led-open-core]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: company-led-open-core
steward: Letta Inc
backing_orgs: []
metrics:
  github_stars: { value: 25008, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: letta-gh
    resource: https://github.com/letta-ai/letta
    title: Letta GitHub repository (0.16.8 2026-05-14; last push 2026-09-10)
  - id: letta-blog
    resource: https://www.letta.com/blog
    title: Letta blog index
---

# Summary
Letta (the company behind MemGPT) builds stateful agents with long-term memory (25k stars)[^letta-gh]. It launched Letta Code, a memory-first coding agent, in Dec 2025, a Letta Code App (Apr 2026), "Mods" (Jun 2026) and a Letta Agents SDK (Aug 2026)[^letta-blog]. The main server repo's last tagged release was 0.16.8 on 2026-05-14[^letta-gh]. Verdict: OSS **stable**; business **stable** (funding not verified in this pass).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12 | Letta Code launched | OSS | + [^letta-blog] |
| W6 | 2026-04 | Letta Code App | OSS | + [^letta-blog] |
| W6 | 2026-05-14 | Server 0.16.8 (latest tagged release) | OSS | ~ [^letta-gh] |
| W3 | 2026-08 | Letta Agents SDK | OSS | + [^letta-blog] |

# OSS successes
- Thought leadership on memory/context engineering[^letta-blog].
# OSS failures / risks
- Main server cadence slowed while focus moved to coding agent products[^letta-gh].
# Business successes
- Not verified.
# Business failures / risks
- Competes with Mem0 on memory and with every coding agent on Letta Code.

# By window
## W3
- Agents SDK; dynamic workflows[^letta-blog].
## W6
- Letta Code App; Mods[^letta-blog].
## W9
- Orchestrating Claude Code & Codex agents (Mar 2026)[^letta-blog].
## W12
- Letta Code launch[^letta-blog].
## W24
- Agent File format, client SDKs (2025)[^letta-blog].

# Lessons
- Even infrastructure-layer agent startups are gravitating to coding agents, the category with proven willingness to pay.

# Related
- [/projects/ai-agents/mem0.md](/projects/ai-agents/mem0.md)

[^letta-gh]: https://github.com/letta-ai/letta
[^letta-blog]: https://www.letta.com/blog
