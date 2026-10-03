---
type: OSS Project
title: OpenHands (formerly OpenDevin)
description: MIT-licensed autonomous software-engineering agent platform from All Hands AI (now branded OpenHands); ~90k stars, 1.0 in Dec 2025 and a 2026 push into enterprise governance — a solid open alternative to Devin.
resource: https://github.com/OpenHands/OpenHands
tags: [ai-agents, coding-agent, mit, company-led-open-core]
domain: ai-agents
license: MIT
license_history: ["MIT (2024-)"]
governance: company-led-open-core
steward: All Hands AI (OpenHands)
backing_orgs: [organizations/all-hands-ai]
metrics:
  github_stars: { value: 89832, as_of: 2026-10-03 }
  github_forks: { value: 11864, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: oh-gh
    resource: https://github.com/OpenHands/OpenHands
    title: OpenHands GitHub repository (moved from All-Hands-AI/OpenHands; 1.0.0 2025-12-16; v1.24.0 2026-09-25)
  - id: oh-blog
    resource: https://www.openhands.dev/blog
    title: OpenHands blog (all-hands.dev redirects to openhands.dev)
---

# Summary
OpenHands (originally OpenDevin, created March 2024) is an open platform for autonomous coding agents with an SDK, CLI, GUI and cloud/enterprise offering; it has ~89.8k stars[^oh-gh]. The repo moved from the `All-Hands-AI` org to `OpenHands` and the company's site now redirects to openhands.dev[^oh-gh][^oh-blog]. It shipped 1.0.0 on 2025-12-16 and by Sep 2026 is emphasising OpenHands Enterprise (governance, Jira Cloud) and joined NVIDIA's Open Secure AI Alliance (2026-08-10)[^oh-gh][^oh-blog]. Verdict: OSS **thriving**; business **growing** (funding not verified in this pass).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12-16 | OpenHands 1.0.0 | OSS | + [^oh-gh] |
| W3 | 2026-08-10 | Joins Open Secure AI Alliance | Business | + [^oh-blog] |
| W3 | 2026-08-26 / 09-24 | Enterprise: Jira Cloud integration; governance/visibility features | Business | + [^oh-blog] |
| W3 | 2026-09-25 | v1.24.0 | OSS | + [^oh-gh] |

# OSS successes
- Large contributor community; frequent releases; reference platform in SWE-bench-style research.
# OSS failures / risks
- Crowded field (OpenCode, Codex CLI, Claude Code, Devin); brand migration All Hands → OpenHands.
# Business successes
- Enterprise product with governance features[^oh-blog].
# Business failures / risks
- Revenue/funding not disclosed in sources reviewed.

# By window
## W3
- Enterprise features; Open Secure AI Alliance[^oh-blog].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- 1.0 release[^oh-gh].
## W24
- Continued growth (stats only).

# Lessons
- Academic-origin agent projects can transition into enterprise products while staying MIT.

# Related
- [/organizations/all-hands-ai.md](/organizations/all-hands-ai.md)
- [/projects/ai-agents/swe-agent.md](/projects/ai-agents/swe-agent.md), [/projects/ai-agents/opencode.md](/projects/ai-agents/opencode.md)

[^oh-gh]: https://github.com/OpenHands/OpenHands
[^oh-blog]: https://www.openhands.dev/blog
