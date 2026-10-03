---
type: OSS Project
title: Tabby (TabbyML)
description: "Self-hosted Copilot alternative (~34k stars, Apache-2.0 core + ee/) whose development stalled in 2026 — last release v0.32.0 (Jan 2026), one commit since April, last push June 30 — declining as agentic coding tools took over."
resource: https://github.com/TabbyML/tabby
tags: [ai-apps, coding-assistant, self-hosted, apache-2.0, open-core]
domain: ai-apps
license: "Apache-2.0 (core) + ee/ licence"
license_history: ["Apache-2.0 core + ee directory (current)"]
governance: company-led-open-core
steward: TabbyML, Inc.
backing_orgs: []
metrics:
  github_stars: { value: 33888, as_of: 2026-10-03 }
  latest_release: { value: "v0.32.0 (2026-01-25)", as_of: 2026-10-03 }
  last_commit: { value: "2026-06-30", as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: struggling
momentum_by_window: { W3: down, W6: down, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tabby-gh
    resource: https://github.com/TabbyML/tabby
    title: TabbyML/tabby GitHub repository and LICENSE (GitHub API, 2026-10-03)
  - id: tabby-seed
    resource: https://www.toolify.ai/ai-news/tabbyml-raises-32-million-open-source-challenger-to-github-copilot-1551051
    title: "TabbyML raises $3.2M seed (2023)"
  - id: tabby-docs
    resource: https://tabby.tabbyml.com/docs/welcome/
    title: "Tabby docs: What's Tabby"
---

# Summary
Tabby was the leading self-hosted, open-source GitHub Copilot alternative (code completion + chat on consumer GPUs), ~34k stars[^tabby-gh][^tabby-docs]. TabbyML raised a $3.2M seed in 2023 (Yunqi Partners lead)[^tabby-seed]; no later round is verified. In 2026 activity collapsed: v0.32.0 (2026-01-25) is the last release, only one commit landed after 2026-04-03, and the last push was 2026-06-30[^tabby-gh]. The market moved from autocomplete to agentic coding (Claude Code, Codex, Cline, OpenHands). Verdict: declining; business struggling.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-01-25 | v0.32.0 (last release)[^tabby-gh] | OSS | ± |
| W6 | 2026-06-30 | Last push; ~1 commit in six months[^tabby-gh] | OSS | − |

# OSS successes
- Proved demand for on-prem code AI in regulated orgs[^tabby-docs].
# OSS failures / risks
- Stalled development; product category superseded.
# Business successes
- None verified in the period.
# Business failures / risks
- Small seed; autocomplete commoditised by IDE vendors.

# By window
## W3
- No commits[^tabby-gh].
## W6
- Last push 2026-06-30[^tabby-gh].
## W9
- v0.32.0[^tabby-gh].
## W12
- 0.31.x maintenance.
## W24
- No notable events found.

# Lessons
- "Self-hosted Copilot" was a feature-level wedge; agentic workflows reset the category faster than a small team could follow.

# Related
- [Continue](/projects/ai-agents/continue.md), [Cline](/projects/ai-agents/cline.md), [OpenHands](/projects/ai-agents/openhands.md), [Aider](/projects/ai-agents/aider.md)

[^tabby-gh]: GitHub API and LICENSE, TabbyML/tabby — https://github.com/TabbyML/tabby
[^tabby-seed]: Toolify news — https://www.toolify.ai/ai-news/tabbyml-raises-32-million-open-source-challenger-to-github-copilot-1551051
[^tabby-docs]: Tabby docs — https://tabby.tabbyml.com/docs/welcome/
