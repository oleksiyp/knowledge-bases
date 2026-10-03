---
type: OSS Project
title: Composio
description: MIT SDK and hosted platform giving agents authenticated access to hundreds of third-party tools (MCP-compatible); raised a $25M Lightspeed-led Series A in July 2025 ($29M total raised) and grew to ~30k stars.
resource: https://github.com/ComposioHQ/composio
tags: [ai-agents, tool-integration, mcp, mit, company-led-open-core]
domain: ai-agents
license: MIT
license_history: ["MIT (2024-)"]
governance: company-led-open-core
steward: Composio Inc
backing_orgs: []
metrics:
  github_stars: { value: 30405, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: comp-gh
    resource: https://github.com/ComposioHQ/composio
    title: Composio GitHub repository (API stats 2026-10-03)
  - id: comp-seriesa
    resource: https://composio.dev/blog/series-a
    title: "Composio Series A announcement"
    author: org:composio
  - id: sa-composio
    resource: https://siliconangle.com/2025/07/22/composio-raises-25m-funding-ease-ai-agent-development/
    title: "SiliconANGLE: Composio raises $25M in funding to ease AI agent development (2025-07-22)"
    author: org:siliconangle
  - id: prn-composio
    resource: https://www.prnewswire.com/news-releases/composio-raises-29m-to-solve-ais-learning-problem-building-skills-that-actually-improve-over-time-302510684.html
    title: "PR Newswire: Composio raises $29M (total incl. Series A)"
---

# Summary
Composio provides tool integrations and auth for agents across frameworks, with ~30.4k stars and active SDK releases (Sep 2026)[^comp-gh]. It announced a $25M Series A led by Lightspeed on 2025-07-22 (with Elevation Capital and Together Fund), bringing total funding to $29M — resolving the earlier $25M/$29M ambiguity[^sa-composio][^prn-composio][^comp-seriesa]. Verdict: OSS **growing**; business **growing**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07-22 | $25M Series A led by Lightspeed; $29M total raised | Business | + [^sa-composio][^prn-composio] |
| W3 | 2026-09-29 | Active SDK releases; 30.4k stars | OSS | + [^comp-gh] |

# OSS successes
- Became a common tool layer in agent tutorials and frameworks.
# OSS failures / risks
- MCP standardization reduces the uniqueness of proprietary integration catalogs.
# Business successes
- $25M Series A (Lightspeed)[^sa-composio].
# Business failures / risks
- Revenue undisclosed.

# By window
## W3
- Steady releases[^comp-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Series A[^comp-seriesa].

# Lessons
- "Managed auth + tools for agents" is a viable COSS wedge, but open protocols (MCP) compress its moat.

# Related
- [/projects/ai-agents/model-context-protocol.md](/projects/ai-agents/model-context-protocol.md)

[^comp-gh]: https://github.com/ComposioHQ/composio
[^comp-seriesa]: https://composio.dev/blog/series-a
[^sa-composio]: SiliconANGLE, 2025-07-22.
[^prn-composio]: PR Newswire, 2025-07-22. Corrected in pass 2: "$25–29M" → $25M Series A, $29M total.
