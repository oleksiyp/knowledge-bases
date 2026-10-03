---
type: OSS Project
title: AGENTS.md
description: A plain-markdown convention for giving coding agents project instructions, published by OpenAI and collaborators in August 2025 and donated to the Agentic AI Foundation in December 2025; a lightweight, widely-adopted standard.
resource: https://github.com/agentsmd/agents.md
tags: [ai-agents, standard, coding-agents, mit, foundation-hosted, aaif]
domain: ai-agents
license: MIT
license_history: ["MIT (2025-08-)"]
governance: foundation
steward: Agentic AI Foundation (Linux Foundation)
backing_orgs: [organizations/agentic-ai-foundation]
metrics:
  github_stars: { value: 24739, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: agentsmd-gh
    resource: https://github.com/agentsmd/agents.md
    title: AGENTS.md GitHub repository (created 2025-08-19; API stats 2026-10-03)
  - id: lf-aaif-pr
    resource: https://www.prnewswire.com/news-releases/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation-aaif-anchored-by-new-project-contributions-including-model-context-protocol-mcp-goose-and-agentsmd-302636897.html
    title: "Linux Foundation: Formation of the Agentic AI Foundation (AAIF)"
  - id: siliconangle-aaif
    resource: https://siliconangle.com/2025/12/09/linux-foundation-announces-agentic-ai-foundation-joined-anthropic-openai-block/
    title: "SiliconANGLE: Linux Foundation announces Agentic AI Foundation joined by Anthropic, OpenAI, Block"
    author: org:siliconangle
---

# Summary
AGENTS.md is a "README for agents" convention: a markdown file at the repo root that coding agents (Codex, Cursor, Jules, Gemini CLI, goose, OpenCode and others) read for build/test/style instructions. The site/repo appeared on 2025-08-19 and OpenAI contributed it as a founding project of the Agentic AI Foundation on 2025-12-09[^agentsmd-gh][^lf-aaif-pr][^siliconangle-aaif]. Verdict: **growing** — tiny in scope, broad in adoption; no business dimension.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-19 | agents.md repo/site published | OSS | + [^agentsmd-gh] |
| W12 | 2025-12-09 | Contributed by OpenAI to AAIF as founding project | Gov | + [^lf-aaif-pr] |
| W3 | 2026-09 | Repo last updated 2026-09-10; 24.7k stars | OSS | ~ [^agentsmd-gh] |

# OSS successes
- Consolidated a mess of vendor-specific files (.cursorrules, CLAUDE.md, etc.) into one convention used by many tools.
- Neutral governance under AAIF[^lf-aaif-pr].

# OSS failures / risks
- Not universal: some vendors still prefer their own filenames; the spec is intentionally minimal, so semantics vary between agents.

# Business successes
- n/a.
# Business failures / risks
- n/a.

# By window
## W3
- No notable events found.
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- AAIF donation (2025-12-09)[^lf-aaif-pr].
## W24
- Launch (Aug 2025)[^agentsmd-gh].

# Lessons
- The cheapest standards (a filename + convention) can spread fastest when the biggest tool vendors agree.

# Related
- [/projects/ai-agents/model-context-protocol.md](/projects/ai-agents/model-context-protocol.md), [/projects/ai-agents/openai-codex-cli.md](/projects/ai-agents/openai-codex-cli.md)
- [/events/2025-12-agentic-ai-foundation-launch.md](/events/2025-12-agentic-ai-foundation-launch.md)

[^agentsmd-gh]: https://github.com/agentsmd/agents.md
[^lf-aaif-pr]: https://www.prnewswire.com/news-releases/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation-aaif-anchored-by-new-project-contributions-including-model-context-protocol-mcp-goose-and-agentsmd-302636897.html
[^siliconangle-aaif]: https://siliconangle.com/2025/12/09/linux-foundation-announces-agentic-ai-foundation-joined-anthropic-openai-block/
