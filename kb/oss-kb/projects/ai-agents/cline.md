---
type: OSS Project
title: Cline
description: The original open-source autonomous coding agent for VS Code (Apache-2.0); outlived its own forks (Roo Code shut down), raised $32M in 2025 and reports 11M users in 2026 while expanding to CLI, SDK and a desktop app for open-weight models.
resource: https://github.com/cline/cline
tags: [ai-agents, coding-agent, vscode-extension, apache-2.0, company-led-open-core]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2024-)"]
governance: company-led-open-core
steward: Cline Bot Inc
backing_orgs: [organizations/cline-bot-inc]
metrics:
  github_stars: { value: 69746, as_of: 2026-10-03 }
  github_forks: { value: 7589, as_of: 2026-10-03 }
  installs: { value: 2700000, as_of: 2025-07-31 }
  users: { value: 11000000, as_of: 2026-09-02 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cline-gh
    resource: https://github.com/cline/cline
    title: Cline GitHub repository (API stats 2026-10-03)
  - id: cline-funding
    resource: https://cline.bot/blog/cline-raises-32m-series-a-and-seed-funding-building-the-open-source-ai-coding-agent-that-enterprises-trust
    title: "Cline raises $32M Series A and Seed funding"
    author: org:cline
  - id: cline-blog
    resource: https://cline.bot/blog
    title: Cline blog index (2026 posts incl. "How We Migrated 11 Million Users…", "Cline Desktop")
---

# Summary
Cline (Apache-2.0, created July 2024) is the root of the most important family of open-source IDE coding agents (Roo Code and Kilo Code are descendants)[^cline-gh]. It raised a combined $32M Seed + Series A led by Emergence Capital and Pace Capital on 2025-07-31, when it had 2.7M installs and 48k stars, and launched Cline Teams for enterprise[^cline-funding]. By Sept 2026 the company reports migrating "11 million users" to a new agent harness and has shipped a CLI/SDK and an open-source desktop app for open-weight models (2026-09-14)[^cline-blog]. Verdict: OSS **thriving** (69.7k stars), business **growing** (revenue undisclosed).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07-31 | $32M Seed+Series A (Emergence, Pace); Cline Teams; 2.7M installs | Business | + [^cline-funding] |
| W6 | 2026-05 | Roo Code (a Cline fork) shuts down; Cline listed as a default alternative | OSS | + [^cline-blog] |
| W3 | 2026-09-02 | "Migrated 11 million users" to new harness; claims 10x fewer agent failures | OSS | + [^cline-blog] |
| W3 | 2026-09-14 | Cline Desktop: open-source app for open-weight models | OSS | + [^cline-blog] |

# OSS successes
- Stars grew from 48k (Jul 2025) to 69.7k (Oct 2026)[^cline-funding][^cline-gh]; very active releases (desktop-v0.0.43 on 2026-10-02).
- Strong positioning on open-weight models (evals, Nemotron, DeepSeek posts)[^cline-blog].
# OSS failures / risks
- Permissive license made it trivially forkable — two VC-backed forks competed directly for its users.
- IDE-extension category under pressure from terminal and cloud agents (see Roo's pivot).
# Business successes
- $32M raised; enterprise Teams product[^cline-funding].
# Business failures / risks
- No disclosed revenue; competes with Cursor, Claude Code, Copilot, Codex.

# By window
## W3
- 11M-user harness migration; Cline Desktop[^cline-blog].
## W6
- Benefited from Roo Code shutdown.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- $32M funding (Jul 2025)[^cline-funding].

# Lessons
- Being the "upstream" in a fork family is durable when the upstream keeps shipping and owns the brand.

# Related
- [/organizations/cline-bot-inc.md](/organizations/cline-bot-inc.md)
- [/projects/ai-agents/roo-code.md](/projects/ai-agents/roo-code.md), [/projects/ai-agents/kilo-code.md](/projects/ai-agents/kilo-code.md)

[^cline-gh]: https://github.com/cline/cline
[^cline-funding]: https://cline.bot/blog/cline-raises-32m-series-a-and-seed-funding-building-the-open-source-ai-coding-agent-that-enterprises-trust
[^cline-blog]: https://cline.bot/blog
