---
type: OSS Project
title: Zed
description: GPU-accelerated Rust code editor from the Atom creators; raised a $32M Sequoia-led Series B (Aug 2025), shipped Windows (Oct 2025) and 1.0 (Apr 2026), and is building a business on AI usage billing, Zed for Business and DeltaDB — while a no-AI fork (Gram) appeared.
resource: https://github.com/zed-industries/zed
tags: [code-editor, rust, gpl-3.0, agpl-3.0, apache-2.0, vc-backed, collaborative]
domain: devtools-languages
license: "GPL-3.0 (editor), AGPL-3.0 (server), Apache-2.0 (GPUI)"
license_history: ["Proprietary (2021-2023)", "GPL/AGPL/Apache-2.0 (open-sourced Jan 2024)"]
governance: company-led-open-core
steward: Zed Industries
backing_orgs: [organizations/zed-industries]
metrics:
  github_stars: { value: 91218, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: zed-gh
    resource: https://github.com/zed-industries/zed
    title: Zed GitHub repository (stars via GitHub API, 2026-10-03)
  - id: zed-sequoia
    resource: https://zed.dev/blog/sequoia-backs-zed
    title: "Zed blog: Sequoia Backs Zed's Vision for Collaborative Coding"
    author: org:zed-industries
  - id: zed-blog
    resource: https://zed.dev/blog
    title: "Zed blog index (Windows, 1.0, pricing, ACP, Zed for Business, DeltaDB/Delta posts)"
    author: org:zed-industries
  - id: zed-1-0
    resource: https://zed.dev/blog/zed-1-0
    title: "Zed blog: Zed is 1.0 (2026-04-29)"
    author: org:zed-industries
  - id: zed-business
    resource: https://zed.dev/blog/zed-for-business
    title: "Zed blog: Introducing Zed for Business (2026-05-06)"
    author: org:zed-industries
  - id: zed-delta
    resource: https://zed.dev/blog/introducing-delta
    title: "Zed blog: Introducing Delta (2026-08-12)"
    author: org:zed-industries
  - id: zed-delta-beta
    resource: https://zed.dev/blog/delta-public-beta
    title: "Zed blog: Replace PRs with Delta – Now in Public Beta (2026-09-16)"
    author: org:zed-industries
  - id: lwn-gram
    resource: https://lwn.net/Articles/1060912/
    title: "LWN: Gram 1.0 released (2026-03-02)"
---

# Summary
Zed is the most successful new VC-backed editor of the period. It raised a $32M Series B led by Sequoia on 2025-08-20 (over $42M total), launched Windows support on 2025-10-15, and declared **Zed 1.0 on 2026-04-29**.[^zed-sequoia][^zed-blog][^zed-1-0] It championed the Agent Client Protocol (ACP) — JetBrains joined in Oct 2025, an ACP registry launched in Jan 2026 — letting third-party coding agents plug into the editor.[^zed-blog] Monetization: token-based LLM billing (Sept 2025), Zed for Education (Mar 2026), Zed for Business (May 2026), and DeltaDB/"Delta" — an operation-based, CRDT version-control layer pitched as replacing PRs, introduced 2026-08-12 and in public beta since 2026-09-16 with an open-source core and optional paid service.[^zed-delta][^zed-delta-beta][^zed-sequoia] A GPLv3 fork, Gram (by SUSE's Kristoffer Grönlund, hosted on Codeberg), shipped 1.0 on 2026-03-02, stripping AI, telemetry and collaboration features.[^lwn-gram] Verdict: OSS growing (91k stars), business growing but unproven at scale. (AI-agent aspects are covered in [/projects/ai-agents/zed.md](/projects/ai-agents/zed.md).)

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-20 | $32M Series B led by Sequoia [^zed-sequoia] | Business | + |
| W24 | 2025-09-24 | Pricing moves to token-based LLM usage [^zed-blog] | Business | = |
| W12 | 2025-10-06 | JetBrains adopts Agent Client Protocol [^zed-blog] | OSS | + |
| W12 | 2025-10-15 | Zed for Windows GA [^zed-blog] | OSS | + |
| W9 | 2026-01-28 | ACP Registry live [^zed-blog] | OSS | + |
| W9 | 2026-03-02 | Gram 1.0 — AI-/telemetry-free fork [^lwn-gram] | OSS | − |
| W6 | 2026-04-29 | Zed 1.0 [^zed-1-0] | OSS | + |
| W6 | 2026-05-06 | Zed for Business launched [^zed-business] | Business | + |
| W6 | 2026-06-11 | DeltaDB introduced [^zed-blog] | Business | + |
| W3 | 2026-08-12 | Delta introduced [^zed-delta] | Business | + |
| W3 | 2026-09-16 | Delta (PR replacement) public beta [^zed-delta-beta] | Business | + |

# OSS successes
- 1.0 milestone and all three desktop platforms.[^zed-blog]
- ACP became a cross-editor standard for embedding agents.[^zed-blog]

# OSS failures / risks
- Copyleft (GPL/AGPL) plus CLA-style company control; a fork over AI features and telemetry signals community friction.[^lwn-gram]

# Business successes
- Tier-1 VC backing and multiple paid offerings launched within a year.[^zed-sequoia][^zed-blog]

# Business failures / risks
- Competes with free VS Code and well-funded AI-first forks (Cursor); revenue undisclosed.

# By window
## W3
- Delta introduced (2026-08-12) and public beta (2026-09-16).[^zed-delta][^zed-delta-beta]
## W6
- 1.0; Zed for Business; DeltaDB.[^zed-1-0][^zed-business][^zed-blog]
## W9
- ACP registry; Zed for Education (2026-03-09); Gram 1.0 fork.[^zed-blog][^lwn-gram]
## W12
- Windows GA; ACP with JetBrains; Agent Extensions.[^zed-blog]
## W24
- Sequoia Series B; pricing change.[^zed-sequoia][^zed-blog]

# Lessons
- Editors monetize via collaboration and AI usage, not the editor itself; open protocols (ACP) can be a strategic moat.

# Related
- [Zed Industries](/organizations/zed-industries.md)
- [Zed (AI-agent view)](/projects/ai-agents/zed.md), [Neovim](/projects/devtools-languages/neovim.md), [Open VSX](/projects/devtools-languages/open-vsx.md), [Ghostty](/projects/devtools-languages/ghostty.md)

[^zed-gh]: Zed GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/zed-industries/zed
[^zed-sequoia]: Zed blog: Sequoia Backs Zed's Vision for Collaborative Coding — https://zed.dev/blog/sequoia-backs-zed
[^zed-blog]: Zed blog index (Windows, 1.0, pricing, ACP, Zed for Business, DeltaDB/Delta posts) — https://zed.dev/blog
[^zed-1-0]: Zed blog: Zed is 1.0 — https://zed.dev/blog/zed-1-0
[^zed-business]: Zed blog: Introducing Zed for Business — https://zed.dev/blog/zed-for-business
[^zed-delta]: Zed blog: Introducing Delta — https://zed.dev/blog/introducing-delta
[^zed-delta-beta]: Zed blog: Delta public beta — https://zed.dev/blog/delta-public-beta
[^lwn-gram]: LWN: Gram 1.0 released — https://lwn.net/Articles/1060912/
