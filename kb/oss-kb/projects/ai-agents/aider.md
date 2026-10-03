---
type: OSS Project
title: Aider
description: Pioneering terminal AI pair-programmer (Apache-2.0, ~49k stars) that effectively stalled — last release v0.86.0 in Aug 2025 and last commit May 2026 — as funded terminal agents (Claude Code, Codex CLI, Gemini CLI, OpenCode) overtook it.
resource: https://github.com/Aider-AI/aider
tags: [ai-agents, coding-agent, terminal, apache-2.0, community, stalled]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: community
steward: Paul Gauthier (maintainer)
backing_orgs: []
metrics:
  github_stars: { value: 49341, as_of: 2026-10-03 }
  github_forks: { value: 5021, as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: n/a
momentum_by_window: { W3: down, W6: down, W9: down, W12: down, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: aider-gh
    resource: https://github.com/Aider-AI/aider
    title: Aider GitHub repository (latest release v0.86.0 2025-08-09; last push 2026-05-22; commit-activity API)
---

# Summary
Aider defined the terminal AI pair-programming pattern in 2023 and still has ~49.3k stars, but development has largely stopped: the latest release is v0.86.0 (2025-08-09) and the last commits were on 2026-05-22 (a model-list update), with zero commits in the final ~20 weeks of GitHub's weekly activity series[^aider-gh]. Verdict: OSS **declining** (stalled, not archived); business n/a (single maintainer, no company).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-09 | v0.86.0 — last tagged release | OSS | − [^aider-gh] |
| W6 | 2026-05-22 | Last commits (Anthropic model list) | OSS | − [^aider-gh] |
| W3 | 2026-07 – 10 | No commits | OSS | − [^aider-gh] |

# OSS successes
- Influential design (repo map, edit formats, leaderboards) copied by successors.
# OSS failures / risks
- Single-maintainer bus factor; no funded company to compete with lab-backed agents.
# Business successes
- n/a.
# Business failures / risks
- n/a.

# By window
## W3
- No activity[^aider-gh].
## W6
- Last commits (May 2026)[^aider-gh].
## W9
- Sporadic commits only[^aider-gh].
## W12
- No releases[^aider-gh].
## W24
- Last release (Aug 2025)[^aider-gh].

# Lessons
- Solo-maintained OSS tools in a category where labs give away competing agents with subsidized inference struggle to keep pace.

# Related
- [/projects/ai-agents/opencode.md](/projects/ai-agents/opencode.md), [/projects/ai-agents/openai-codex-cli.md](/projects/ai-agents/openai-codex-cli.md), [/projects/ai-agents/gemini-cli.md](/projects/ai-agents/gemini-cli.md)

[^aider-gh]: https://github.com/Aider-AI/aider
