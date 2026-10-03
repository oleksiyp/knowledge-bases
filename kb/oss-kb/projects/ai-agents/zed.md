---
type: OSS Project
title: Zed
description: Rust-built, GPL/AGPL/Apache-licensed code editor from Atom's creators that bet on AI agents and real-time collaboration; raised a $32M Sequoia-led Series B (Aug 2025), shipped Windows (Oct 2025) and 1.0 (Apr 2026), while its AI push spawned a no-AI fork (Gram).
resource: https://github.com/zed-industries/zed
tags: [ai-agents, ai-editor, gpl-3.0, agpl-3.0, company-led-open-core, rust]
domain: ai-agents
license: "GPL-3.0 (editor) / AGPL-3.0 (server) / Apache-2.0 (gpui)"
license_history: ["GPL/AGPL/Apache multi-license (2024-01-)"]
governance: company-led-open-core
steward: Zed Industries
backing_orgs: [organizations/zed-industries]
metrics:
  github_stars: { value: 91218, as_of: 2026-10-03 }
  github_forks: { value: 10882, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: zed-gh
    resource: https://github.com/zed-industries/zed
    title: Zed GitHub repository (v1.0.0 2026-04-29; v1.22.0 2026-09-30)
  - id: zed-seriesb
    resource: https://zed.dev/blog/sequoia-backs-zed
    title: "Zed blog: Sequoia backs Zed ($32M Series B)"
    author: org:zed-industries
  - id: zed-wiki
    resource: https://en.wikipedia.org/wiki/Zed_(text_editor)
    title: "Wikipedia: Zed (text editor)"
  - id: lwn-gram
    resource: https://lwn.net/Articles/1060912/
    title: "LWN: Gram 1.0 released (2026-03-02)"
    author: org:lwn
---

# Summary
Zed is a high-performance Rust editor (91k stars) whose company raised a $32M Series B led by Sequoia on 2025-08-20 (>$42M total), to build DeltaDB — CRDT-based, operation-level version control for human-AI collaboration[^zed-seriesb]. Windows support shipped in October 2025 and v1.0.0 on 2026-04-29[^zed-wiki][^zed-gh]. Its AI-agent features (with paid tiers) were contentious enough that a fork called **Gram** removing AI/chat appeared in March 2026[^zed-wiki]. Verdict: OSS **thriving**; business **growing**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-20 | $32M Series B (Sequoia) | Business | + [^zed-seriesb] |
| W12 | 2025-10 | Windows release | OSS | + [^zed-wiki] |
| W9 | 2026-03-02 | "Gram" 1.0 (GPLv3 fork) strips AI, collaboration and telemetry, partly over Zed's ToS changes | OSS | − [^lwn-gram] |
| W6 | 2026-04-29 | Zed 1.0 | OSS | + [^zed-gh] |
| W3 | 2026-09-30 | v1.22.0 | OSS | + [^zed-gh] |

# OSS successes
- Copyleft licensing protects against proprietary forks while allowing community forks; fast release cadence[^zed-gh].
# OSS failures / risks
- AI direction alienated some users (Gram fork)[^zed-wiki].
# Business successes
- Sequoia-led Series B; freemium AI monetization[^zed-seriesb][^zed-wiki].
# Business failures / risks
- Competes with Cursor and VS Code+Copilot, both far larger.

# By window
## W3
- Steady 1.x releases[^zed-gh].
## W6
- 1.0 release[^zed-gh].
## W9
- Gram 1.0 fork (Mar 2)[^lwn-gram].
## W12
- Windows support[^zed-wiki].
## W24
- Series B[^zed-seriesb].

# Lessons
- Native (non-VS Code fork) editors can survive the AI-IDE shakeout with strong performance differentiation and copyleft licensing.

# Related
- [/organizations/zed-industries.md](/organizations/zed-industries.md)
- [/projects/ai-agents/void-editor.md](/projects/ai-agents/void-editor.md)

[^zed-gh]: https://github.com/zed-industries/zed
[^zed-seriesb]: https://zed.dev/blog/sequoia-backs-zed
[^zed-wiki]: https://en.wikipedia.org/wiki/Zed_(text_editor)
[^lwn-gram]: LWN.net, 2026-03-02.
