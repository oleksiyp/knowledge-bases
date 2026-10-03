---
type: OSS Project
title: Model Context Protocol (MCP)
description: Anthropic's open protocol for connecting models to tools and data; went from launch (Nov 2024) to universal industry standard adopted by OpenAI, Google and Microsoft, and was donated to the Linux Foundation's Agentic AI Foundation in Dec 2025 — the clearest protocol success of the period, shadowed by a steady stream of security issues.
resource: https://github.com/modelcontextprotocol/modelcontextprotocol
tags: [ai-agents, protocol, foundation-hosted, linux-foundation, aaif]
domain: ai-agents
license: "MIT (spec/SDKs; repo license reported by GitHub as NOASSERTION)"
license_history: ["MIT (2024-11-)"]
governance: foundation
steward: Agentic AI Foundation (Linux Foundation)
backing_orgs: [organizations/agentic-ai-foundation]
metrics:
  spec_repo_github_stars: { value: 9367, as_of: 2026-10-03 }
  monthly_sdk_downloads: { value: 97000000, as_of: 2025-12-09 }
  active_servers: { value: 10000, as_of: 2025-12-09 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mcp-gh
    resource: https://github.com/modelcontextprotocol/modelcontextprotocol
    title: MCP specification repository (API stats 2026-10-03)
  - id: mcp-wiki
    resource: https://en.wikipedia.org/wiki/Model_Context_Protocol
    title: "Wikipedia: Model Context Protocol"
  - id: mcp-aaif-blog
    resource: https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/
    title: "MCP blog: MCP joins the Agentic AI Foundation"
  - id: lf-aaif-pr
    resource: https://www.prnewswire.com/news-releases/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation-aaif-anchored-by-new-project-contributions-including-model-context-protocol-mcp-goose-and-agentsmd-302636897.html
    title: "Linux Foundation: Formation of the Agentic AI Foundation (AAIF)"
  - id: mcp-spec-0728
    resource: https://blog.modelcontextprotocol.io/posts/2026-07-28/
    title: "MCP blog: The 2026-07-28 Specification"
  - id: google-mcp-stateless
    resource: https://developers.googleblog.com/scaling-ai-agent-infrastructure-with-the-mcp-stateless-updates/
    title: "Google Developers Blog: Scaling AI agent infrastructure with the MCP stateless updates"
    author: org:google
---

# Summary
MCP is the protocol success story of the period. Announced by Anthropic on 2024-11-25, it was adopted by OpenAI (Mar 2025) and Google DeepMind (Apr 2025), reached ~97M monthly SDK downloads and ~10,000 active servers, and was donated to the Linux Foundation's new Agentic AI Foundation on 2025-12-09[^mcp-wiki][^mcp-aaif-blog]. In 2026 it gained a conference circuit (MCP Dev Summit NA, ~1,200 attendees, Apr 2026) and a major stateless spec revision (2026-07-28)[^mcp-wiki]. Verdict: OSS **thriving**; business n/a (it is a standard, though it powers many businesses). The persistent weakness is security (tool poisoning, mcp-remote RCE).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-25 | Anthropic launches MCP | OSS | + [^mcp-wiki] |
| W24 | 2025-03 | OpenAI adopts MCP across products | OSS | + [^mcp-wiki] |
| W24 | 2025-04 | Google DeepMind adopts; Invariant Labs discloses "tool poisoning" | OSS | +/− [^mcp-wiki] |
| W24 | 2025-07 | CVE-2025-6514 (CVSS 9.6) in mcp-remote | OSS | − [^mcp-wiki] |
| W24 | 2025-09 | ChatGPT apps get MCP support | OSS | + [^mcp-wiki] |
| W12 | 2025-12-09 | Donated to AAIF (Linux Foundation); 97M monthly SDK downloads, 10k servers | Gov | + [^mcp-aaif-blog][^lf-aaif-pr] |
| W6 | 2026-04 | MCP Dev Summit North America, ~1,200 attendees | OSS | + [^mcp-wiki] |
| W6 | 2026-05 | Salesforce reports 4.5M MCP calls via Headless 360 | Adoption | + [^mcp-wiki] |
| W3 | 2026-07-28 | Spec revision makes MCP stateless at protocol layer (initialize handshake removed; multi-round-trip requests, extensions framework, auth hardening); sampling and roots deprecated | OSS | ~ [^mcp-spec-0728][^google-mcp-stateless][^mcp-wiki] |

# OSS successes
- Cross-vendor adoption: ChatGPT, Claude, Cursor, Gemini, Microsoft Copilot, VS Code[^mcp-aaif-blog].
- Neutral governance under AAIF with existing maintainer/SEP process intact[^mcp-aaif-blog].
- Became the substrate for frameworks, coding agents and enterprise "headless" platforms[^mcp-wiki].

# OSS failures / risks
- Security track record: tool-poisoning class of attacks (Apr 2025), CVE-2025-6514 RCE in mcp-remote (Jul 2025)[^mcp-wiki].
- The 2026 stateless rewrite deprecated features (sampling, roots) — churn for implementers[^mcp-wiki].

# Business successes
- n/a directly; spawned a cottage industry of MCP gateways, registries and hosting (e.g., Composio, agentgateway).

# Business failures / risks
- n/a.

# By window
## W3
- Stateless spec revision (2026-07-28)[^mcp-spec-0728]; A2A joins MCP inside AAIF (Aug 2026) — see [/events/2026-08-a2a-joins-aaif.md](/events/2026-08-a2a-joins-aaif.md).
## W6
- MCP Dev Summit NA (~1,200 attendees); Salesforce 4.5M MCP calls[^mcp-wiki].
## W9
- No single notable event verified; continued adoption.
## W12
- Donation to AAIF (2025-12-09)[^mcp-aaif-blog].
## W24
- Launch, OpenAI/Google adoption, first serious CVEs[^mcp-wiki].

# Lessons
- A vendor-originated standard can win if it is simple, permissively licensed and handed to neutral governance before competitors fork it.
- Protocols that grant tool access need a security story from day one.

# Related
- [/organizations/agentic-ai-foundation.md](/organizations/agentic-ai-foundation.md)
- [/events/2025-12-agentic-ai-foundation-launch.md](/events/2025-12-agentic-ai-foundation-launch.md)
- [/projects/ai-agents/a2a-protocol.md](/projects/ai-agents/a2a-protocol.md), [/projects/ai-agents/agents-md.md](/projects/ai-agents/agents-md.md), [/projects/ai-agents/goose.md](/projects/ai-agents/goose.md)

[^mcp-gh]: https://github.com/modelcontextprotocol/modelcontextprotocol
[^mcp-wiki]: https://en.wikipedia.org/wiki/Model_Context_Protocol
[^mcp-aaif-blog]: https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/
[^lf-aaif-pr]: https://www.prnewswire.com/news-releases/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation-aaif-anchored-by-new-project-contributions-including-model-context-protocol-mcp-goose-and-agentsmd-302636897.html
[^mcp-spec-0728]: MCP blog, 2026-07-28.
[^google-mcp-stateless]: Google Developers Blog, 2026.
