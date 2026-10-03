---
type: OSS Project
title: Void (open-source Cursor alternative)
description: YC-backed open-source VS Code fork positioned as an open Cursor alternative; development paused after Aug 2025 and the repo was deprecated and archived in 2026 — a casualty of the AI-IDE fork economy.
resource: https://github.com/voideditor/void
tags: [ai-agents, ai-editor, vscode-fork, apache-2.0, archived]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2024-)"]
governance: single-vendor
steward: Void team (Glass Devtools)
backing_orgs: []
metrics:
  github_stars: { value: 28779, as_of: 2026-10-03 }
  github_forks: { value: 2657, as_of: 2026-10-03 }
oss_verdict: dead
business_verdict: failed
momentum_by_window: { W3: n/a, W6: down, W9: down, W12: down, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: void-gh
    resource: https://github.com/voideditor/void
    title: Void GitHub repository (README "Void is now deprecated"; archived; last push 2026-06-02)
  - id: void-status
    resource: https://cursor-alternatives.com/blog/void-editor-development-status-2026/
    title: "Void Editor 2026: Development paused (secondary)"
---

# Summary
Void was an open-source AI code editor forked from VS Code that let users bring any model (including local) without data retention[^void-gh]. The last meaningful code change landed in August 2025 (v1.4.9), the team paused to "explore new ideas", and in 2026 the README was changed to "Void is now deprecated… no longer accepting contributions", with the repo archived (last push 2026-06-02)[^void-gh][^void-status]. Verdict: OSS **dead**; business **failed/pivoted**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08 | Last meaningful code change (v1.4.9); work paused | OSS | − [^void-status] |
| W6 | 2026-06 | Deprecated and archived; points to community forks | OSS | − [^void-gh] |

# OSS successes
- Left a useful reference for VS Code forking (build pipeline, React/Tailwind mounting, diff streaming)[^void-gh].
# OSS failures / risks
- Maintaining a VS Code fork is expensive; open alternatives lost to Cursor/Windsurf and to agent extensions.
# Business successes
- None.
# Business failures / risks
- Project abandoned.

# By window
## W3
- n/a (archived).
## W6
- Deprecated/archived[^void-gh].
## W9
- Paused, no development[^void-status].
## W12
- Paused[^void-status].
## W24
- Development stops (Aug 2025)[^void-status].

# Lessons
- "Open-source clone of a funded proprietary IDE" is a weak strategy when the fork base (VS Code) moves fast and incumbents add AI natively.

# Related
- [/projects/ai-agents/zed.md](/projects/ai-agents/zed.md), [/projects/ai-agents/continue.md](/projects/ai-agents/continue.md), [/projects/ai-agents/roo-code.md](/projects/ai-agents/roo-code.md)

[^void-gh]: https://github.com/voideditor/void
[^void-status]: https://cursor-alternatives.com/blog/void-editor-development-status-2026/
