---
type: OSS Project
title: Roo Code
description: Popular Cline fork turned standalone VS Code coding agent; its company shut the extension down and archived the repo on 2026-05-15 to pivot to the cloud agent Roomote, declaring "IDEs are not the future of coding" — the period's starkest OSS shutdown-by-pivot.
resource: https://github.com/RooCodeInc/Roo-Code
tags: [ai-agents, coding-agent, vscode-extension, apache-2.0, archived, fork, pivot]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2024-, inherited from Cline)"]
governance: single-vendor
steward: Roo Code Inc
backing_orgs: [organizations/roo-code-inc]
metrics:
  github_stars: { value: 24288, as_of: 2026-10-03 }
  github_forks: { value: 3423, as_of: 2026-10-03 }
oss_verdict: dead
business_verdict: struggling
momentum_by_window: { W3: n/a, W6: down, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: roo-gh
    resource: https://github.com/RooCodeInc/Roo-Code
    title: Roo Code GitHub repository (archived; last push 2026-05-15)
  - id: tns-roo
    resource: https://thenewstack.io/roo-code-cloud-ides-ai-coding/
    title: "The New Stack: Roo Code pivots to cloud-based agent, says IDEs aren't the future of coding"
    author: org:thenewstack
  - id: roo-review
    resource: https://zynovix.github.io/roo-code-review-2026.html
    title: "Roo Code Review 2026: Shutdown, Alternatives & Verdict (secondary)"
  - id: kilo-roo-migration
    resource: https://kilo.ai/articles/roo-to-kilo-migration-guide
    title: "Kilo: Roo Code to Kilo Code Migration Guide (2026)"
---

# Summary
Roo Code began in late 2024 as a fork of Cline and became one of the most popular open-source VS Code agents (24k stars)[^roo-gh]. On 2026-04-20/21 the company announced it would shut down the VS Code extension, Roo Code Cloud and Router on 2026-05-15 to go all-in on **Roomote**, a cloud agent that works from Slack/GitHub/Linear, stating "we do not believe IDEs are the future of coding"[^tns-roo]. The repo was archived on 2026-05-15 with v3.54.0 as the final release; roocode.com redirects to roomote.dev; a community "Zoo Code" republish and competitor migration guides (Kilo, Cline) picked up users[^roo-review][^kilo-roo-migration]. Verdict: OSS **dead**; business pivoted (struggling/unproven).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024–2025 | Fork of Cline grows into a top VS Code agent | OSS | + [^roo-gh] |
| W6 | 2026-04-20 | Shutdown announced; pivot to Roomote | Business | − [^tns-roo] |
| W6 | 2026-05-15 | Extension, Cloud, Router shut down; repo archived; balances refunded | OSS/Business | − [^tns-roo][^roo-review] |
| W6 | 2026-05-16 | Community "Zoo Code" republishes v3.54.0 (reported) | OSS | ~ [^roo-review] |

# OSS successes
- Proved that a fork can out-iterate its parent for a time (custom modes, multi-agent "dev team" UX)[^roo-gh].
# OSS failures / risks
- Single-vendor control meant a business decision ended the project overnight; Apache-2.0 allows forks, but no major fork has inherited the community[^roo-review].
# Business successes
- Clean exit for users: refunds of unused balances[^tns-roo].
# Business failures / risks
- Pivot bets on cloud agents, a category crowded by OpenAI Codex, Devin, Jules, and others.

# By window
## W3
- n/a (archived). Kilo and Cline actively court former Roo users[^kilo-roo-migration].
## W6
- Shutdown announcement and archival[^tns-roo].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Rapid growth as a Cline fork[^roo-gh].

# Lessons
- VC-backed single-vendor OSS tools are only as durable as the company's strategy; a pivot can kill a 24k-star project.
- The "IDE vs. cloud agent" shift is real enough to cause shutdowns, not just new products.

# Related
- [/events/2026-04-roo-code-shutdown.md](/events/2026-04-roo-code-shutdown.md)
- [/organizations/roo-code-inc.md](/organizations/roo-code-inc.md)
- [/projects/ai-agents/cline.md](/projects/ai-agents/cline.md), [/projects/ai-agents/kilo-code.md](/projects/ai-agents/kilo-code.md)

[^roo-gh]: https://github.com/RooCodeInc/Roo-Code
[^tns-roo]: https://thenewstack.io/roo-code-cloud-ides-ai-coding/
[^roo-review]: https://zynovix.github.io/roo-code-review-2026.html
[^kilo-roo-migration]: https://kilo.ai/articles/roo-to-kilo-migration-guide
