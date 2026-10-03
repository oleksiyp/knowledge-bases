---
type: OSS Project
title: Agent2Agent (A2A) Protocol
description: Google-originated open protocol for agent-to-agent discovery and delegation; absorbed IBM's competing ACP, shipped v1.0 in March 2026 and joined MCP inside the Agentic AI Foundation in August 2026 — a successful consolidation, though real-world usage lags MCP.
resource: https://github.com/a2aproject/A2A
tags: [ai-agents, protocol, apache-2.0, foundation-hosted, linux-foundation, aaif]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2025-04-)"]
governance: foundation
steward: Agentic AI Foundation (Linux Foundation)
backing_orgs: [organizations/agentic-ai-foundation]
metrics:
  github_stars: { value: 25994, as_of: 2026-10-03 }
  backing_organizations: { value: 150, as_of: 2026-08-17 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: a2a-gh
    resource: https://github.com/a2aproject/A2A
    title: A2A GitHub repository (API stats 2026-10-03; created 2025-03-25)
  - id: aaif-a2a
    resource: https://aaif.io/blog/a2a-joins-aaif
    title: "AAIF: A2A joins AAIF's open agentic stack"
  - id: axios-a2a
    resource: https://www.axios.com/2026/08/17/a2a-agentic-ai-foundation-open-ai-standards
    title: "Axios: AI agents inch toward interoperability"
    author: org:axios
  - id: aimag-a2a
    resource: https://aimagazine.com/news/why-did-googles-a2a-join-the-agentic-ai-foundation
    title: "AI Magazine: Why did Google's A2A join the Agentic AI Foundation?"
---

# Summary
A2A was launched by Google in April 2025 with AWS, Cisco, Microsoft, Salesforce, SAP and ServiceNow among founding organizations, and first moved to the Linux Foundation; IBM's Agent Communication Protocol merged into it in August 2025[^aaif-a2a]. A2A v1.0 (stable spec, signed agent cards, multi-protocol bindings) shipped in March 2026, and on 2026-08-17 it joined the Agentic AI Foundation alongside MCP, AGENTS.md and goose[^aaif-a2a][^aimag-a2a]. Verdict: OSS **growing** — consolidation succeeded, with 150+ backing organizations — but it remains less used day-to-day by developers than MCP.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04 | Google launches A2A with major enterprise partners | OSS | + [^aaif-a2a] |
| W24 | 2025-08 | IBM's ACP merges into A2A | OSS/Gov | + [^aaif-a2a] |
| W9 | 2026-03 | A2A v1.0 stable spec | OSS | + [^aimag-a2a] |
| W3 | 2026-08-17 | A2A joins AAIF; 150+ backing orgs; production use cited at HarmonyOS, WeChat, Azure AI Foundry, AWS Bedrock | Gov | + [^aaif-a2a][^axios-a2a] |

# OSS successes
- Avoided a protocol war: absorbed ACP and consolidated under the same foundation as MCP[^aaif-a2a].
- 26k stars on the spec repo[^a2a-gh].

# OSS failures / risks
- Developer mindshare and tooling remain far behind MCP; most production "multi-agent" systems still run inside one framework.

# Business successes
- n/a (standard). Cloud vendors (Google, Microsoft, AWS) ship A2A support in their agent platforms[^aaif-a2a].

# Business failures / risks
- n/a.

# By window
## W3
- Joined AAIF (2026-08-17)[^aaif-a2a].
## W6
- No notable events found.
## W9
- v1.0 spec (Mar 2026)[^aimag-a2a].
## W12
- No notable events found.
## W24
- Launch (Apr 2025); ACP merger (Aug 2025)[^aaif-a2a].

# Lessons
- Merging competing specs early (ACP → A2A) and pooling them under one neutral foundation beats a standards war.

# Related
- [/events/2026-08-a2a-joins-aaif.md](/events/2026-08-a2a-joins-aaif.md)
- [/organizations/agentic-ai-foundation.md](/organizations/agentic-ai-foundation.md)
- [/projects/ai-agents/model-context-protocol.md](/projects/ai-agents/model-context-protocol.md)

[^a2a-gh]: https://github.com/a2aproject/A2A
[^aaif-a2a]: https://aaif.io/blog/a2a-joins-aaif
[^axios-a2a]: https://www.axios.com/2026/08/17/a2a-agentic-ai-foundation-open-ai-standards
[^aimag-a2a]: https://aimagazine.com/news/why-did-googles-a2a-join-the-agentic-ai-foundation
