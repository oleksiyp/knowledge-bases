---
type: OSS Project
title: goose
description: Block's local-first, Rust-based general-purpose AI agent (desktop, CLI, API); donated to the Linux Foundation's Agentic AI Foundation in Dec 2025 and now lives at github.com/aaif-goose — a healthy corporate-to-foundation handoff.
resource: https://github.com/aaif-goose/goose
tags: [ai-agents, coding-agent, apache-2.0, foundation-hosted, aaif, rust]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2024-)"]
governance: foundation
steward: Agentic AI Foundation (Linux Foundation); originally Block Inc
backing_orgs: [organizations/agentic-ai-foundation]
metrics:
  github_stars: { value: 54883, as_of: 2026-10-03 }
  github_forks: { value: 6352, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: goose-gh
    resource: https://github.com/aaif-goose/goose
    title: goose GitHub repository (moved from block/goose; v1.0.0 2025-01-28; v1.53.0 2026-10-02)
  - id: lf-aaif-pr
    resource: https://www.prnewswire.com/news-releases/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation-aaif-anchored-by-new-project-contributions-including-model-context-protocol-mcp-goose-and-agentsmd-302636897.html
    title: "Linux Foundation: Formation of the Agentic AI Foundation (AAIF)"
---

# Summary
goose is an open-source, extensible AI agent built in Rust that runs locally as a desktop app, CLI and API, works with 15+ model providers and 70+ MCP extensions[^goose-gh]. Block released 1.0 on 2025-01-28 and contributed goose as a founding project of the Agentic AI Foundation on 2025-12-09; the repo now lives under the `aaif-goose` org[^goose-gh][^lf-aaif-pr]. Verdict: OSS **growing** (54.9k stars, releases every few days); no direct business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-28 | goose v1.0.0 | OSS | + [^goose-gh] |
| W12 | 2025-12-09 | Donated to AAIF by Block | Gov | + [^lf-aaif-pr] |
| W3 | 2026-10-02 | v1.53.0; 54.9k stars; repo under aaif-goose | OSS | + [^goose-gh] |

# OSS successes
- One of few corporate agent projects to move to neutral governance; supports ACP so users can drive it with existing Claude/ChatGPT/Gemini subscriptions[^goose-gh].
# OSS failures / risks
- Competes with very fast-moving terminal agents (OpenCode, Codex CLI, Gemini CLI, Claude Code); differentiation is mostly "general-purpose + local".
# Business successes
- n/a (Block uses it internally; no product revenue).
# Business failures / risks
- n/a.

# By window
## W3
- Rapid release cadence continues (v1.53.0)[^goose-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- AAIF donation[^lf-aaif-pr].
## W24
- 1.0 release (Jan 2025)[^goose-gh].

# Lessons
- Non-vendor companies (Block) can gain influence in AI tooling by open-sourcing and then donating.

# Related
- [/organizations/agentic-ai-foundation.md](/organizations/agentic-ai-foundation.md), [/events/2025-12-agentic-ai-foundation-launch.md](/events/2025-12-agentic-ai-foundation-launch.md)
- [/projects/ai-agents/opencode.md](/projects/ai-agents/opencode.md)

[^goose-gh]: https://github.com/aaif-goose/goose
[^lf-aaif-pr]: https://www.prnewswire.com/news-releases/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation-aaif-anchored-by-new-project-contributions-including-model-context-protocol-mcp-goose-and-agentsmd-302636897.html
