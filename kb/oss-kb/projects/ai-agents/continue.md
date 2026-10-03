---
type: OSS Project
title: Continue
description: Apache-2.0 open-source AI coding assistant for VS Code/JetBrains that pivoted messaging toward CLI agents, "Mission Control" and code-quality checks for AI-generated code; still active (v2.0 in June 2026) but losing relative mindshare.
resource: https://github.com/continuedev/continue
tags: [ai-agents, coding-assistant, vscode-extension, apache-2.0, company-led-open-core]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: company-led-open-core
steward: Continue Dev Inc
backing_orgs: []
metrics:
  github_stars: { value: 36090, as_of: 2026-10-03 }
  github_forks: { value: 5442, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cont-gh
    resource: https://github.com/continuedev/continue
    title: Continue GitHub repository (v2.0.0-vscode 2026-06-19; API stats 2026-10-03)
  - id: cont-blog
    resource: https://blog.continue.dev/
    title: Continue blog
---

# Summary
Continue is one of the earliest open-source IDE assistants (36k stars)[^cont-gh]. In 2025–26 it repositioned around CLI agents, "Mission Control" and process-level checks against "AI slop"[^cont-blog], and shipped its VS Code extension v2.0.0 on 2026-06-19[^cont-gh]. Verdict: OSS **stable**; business **stable** (no funding/revenue verified in this pass).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12-03 | "AI is Glue" — repositioning toward workflow automation | Business | ~ [^cont-blog] |
| W9 | 2026-02/03 | Posts on CLI + Mission Control, AI-code quality | Business | ~ [^cont-blog] |
| W6 | 2026-06-19 | VS Code extension v2.0.0 | OSS | + [^cont-gh] |

# OSS successes
- Durable Apache-2.0 alternative to Copilot with model choice.
# OSS failures / risks
- Star growth modest vs Cline/OpenCode; blog cadence slowed after Mar 2026[^cont-blog].
# Business successes
- Not verified.
# Business failures / risks
- Not verified.

# By window
## W3
- No notable events found.
## W6
- v2.0[^cont-gh].
## W9
- Repositioning posts[^cont-blog].
## W12
- Repositioning[^cont-blog].
## W24
- No notable events verified.

# Lessons
- Being early is not enough when agentic UX shifts; Continue survived by repositioning rather than shutting down.

# Related
- [/projects/ai-agents/cline.md](/projects/ai-agents/cline.md), [/projects/ai-agents/void-editor.md](/projects/ai-agents/void-editor.md)

[^cont-gh]: https://github.com/continuedev/continue
[^cont-blog]: https://blog.continue.dev/
