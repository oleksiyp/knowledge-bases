---
type: OSS Project
title: Zig
description: Systems language run by the nonprofit Zig Software Foundation; left GitHub for Codeberg in Nov 2025 citing decline and AI pushes, holds a strict no-LLM contribution policy, shipped 0.15/0.16 — and lost its flagship user Bun to Rust in 2026.
resource: https://codeberg.org/ziglang/zig
tags: [programming-language, systems, mit, nonprofit, codeberg, no-ai-policy]
domain: devtools-languages
license: MIT
license_history: ["MIT (2015-)"]
governance: foundation
steward: Zig Software Foundation
backing_orgs: [organizations/zig-software-foundation]
metrics:
  github_stars_mirror: { value: 43311, as_of: 2026-10-03, note: "read-only GitHub repo; last push 2025-11-27" }
oss_verdict: contested
business_verdict: n/a
momentum_by_window: { W3: up, W6: down, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: zig-gh
    resource: https://github.com/ziglang/zig
    title: Zig GitHub repository (read-only; stars/last push via GitHub API, 2026-10-03)
  - id: zig-codeberg
    resource: https://ziglang.org/news/migrating-from-github-to-codeberg/
    title: "ziglang.org: Migrating from GitHub to Codeberg"
    author: org:zig-software-foundation
  - id: zig-download
    resource: https://ziglang.org/download/
    title: "ziglang.org downloads (0.15.1 2025-08-19, 0.15.2 2025-10-11, 0.16.0 2026-04-13, 0.17.0 2026-10-01)"
    author: org:zig-software-foundation
  - id: zig-016
    resource: https://ziglang.org/download/0.16.0/release-notes.html
    title: "Zig 0.16.0 release notes (I/O as an interface; @cImport deprecated; 244 contributors)"
    author: org:zig-software-foundation
  - id: zig-017
    resource: https://ziglang.org/download/0.17.0/release-notes.html
    title: "Zig 0.17.0 release notes (build system rework, incremental compilation on x86_64-linux; 206 contributors)"
    author: org:zig-software-foundation
  - id: mitchellh-zig
    resource: https://mitchellh.com/writing/zig-donation-2026
    title: "Mitchell Hashimoto: Pledging Another $400,000 to the Zig Software Foundation (2026-06-21)"
  - id: reg-codeberg-ai
    resource: https://www.theregister.com/ai-and-ml/2026/07/23/codeberg-gives-vibe-coded-projects-the-toss-promotes-human-floss/5277717
    title: "The Register: Codeberg gives vibe-coded projects the toss (2026-07-23)"
  - id: devclass-bun-rust
    resource: https://www.devclass.com/ai-ml/2026/05/15/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240541
    title: "DevClass: Anthropic's Bun Rust rewrite merged at speed of AI"
---

# Summary
Zig is the purest example of a values-driven language project in this period. On 2025-11-26 it moved its canonical repository to Codeberg, with Andrew Kelley citing GitHub's engineering decline, unreliable GitHub Actions, aggressive Copilot promotion clashing with Zig's no-LLM policy, and neglect of GitHub Sponsors (donors asked to move to Every.org).[^zig-codeberg] Technically it kept moving — 0.15.1 (2025-08-19), 0.16.0 (2026-04-13; I/O as an explicit interface, `@cImport` deprecated; 244 contributors) and 0.17.0 (2026-10-01; build-system rework, incremental compilation usable on x86_64-linux; 206 contributors) — and Mitchell Hashimoto pledged another $400,000 to the ZSF on 2026-06-21 ($700k total).[^zig-download][^zig-016][^zig-017][^mitchellh-zig] But its highest-profile production user, Bun, rewrote itself in Rust in May 2026 after needing a Zig fork carrying AI-assisted changes that upstream would not accept.[^devclass-bun-rust] Verdict: OSS contested — principled and well-funded for its size, but still pre-1.0 and losing a marquee adopter.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-19 | Zig 0.15.1 [^zig-download] | OSS | + |
| W24 | 2025-10-11 | Zig 0.15.2 [^zig-download] | OSS | = |
| W12 | 2025-11-26 | Moves from GitHub to Codeberg; GitHub repo read-only; Sponsors deprecated [^zig-codeberg][^zig-gh] | Governance | mixed |
| W6 | 2026-04-13 | Zig 0.16.0 (I/O interface) [^zig-download][^zig-016] | OSS | + |
| W6 | 2026-05-14 | Bun leaves Zig for Rust (last Zig Bun = 1.3.14) [^devclass-bun-rust] | OSS | − |
| W6 | 2026-06-21 | Mitchell Hashimoto pledges additional $400k to ZSF [^mitchellh-zig] | Business | + |
| W3 | 2026-07-22 | Codeberg (Zig's forge) votes to bar mostly-AI-generated projects [^reg-codeberg-ai] | Governance | = |
| W3 | 2026-10-01 | Zig 0.17.0 (925 commits, 206 contributors) [^zig-download][^zig-017] | OSS | + |

# OSS successes
- Independence from GitHub/Microsoft; triggered a broader Codeberg migration wave (Dillo, Gentoo).[^zig-codeberg]
- Steady language evolution toward 1.0 with ambitious compiler backends and incremental compilation.[^zig-016][^zig-017]

# OSS failures / risks
- Loss of Bun, the most-cited "Zig in production" success story.[^devclass-bun-rust]
- Pre-1.0 breaking changes each release; no-AI policy may narrow contributor pool as AI tooling spreads.

# Business successes
- Nonprofit funding sustained by donations and large individual pledges.[^mitchellh-zig]

# Business failures / risks
- Leaving GitHub Sponsors risks donor churn during transition.[^zig-codeberg]

# By window
## W3
- Codeberg (Zig's new home) amends its terms in July 2026 to bar vibe-coded projects, aligning the forge with Zig's anti-AI stance.[^reg-codeberg-ai]
- Zig 0.17.0 released 2026-10-01.[^zig-017]
## W6
- 0.16.0; Bun departure; $400k Hashimoto pledge.[^zig-016][^devclass-bun-rust][^mitchellh-zig]
## W9
- No notable events found.
## W12
- GitHub → Codeberg (2025-11-26).[^zig-codeberg]
## W24
- 0.15.1 / 0.15.2.[^zig-download]

# Lessons
- Platform choice (forge) has become a values statement; AI policy is now a fault line between projects.
- A language's flagship adopter can leave quickly when AI-driven workflows conflict with upstream policy.

# Related
- [Zig Software Foundation](/organizations/zig-software-foundation.md)
- [Zig moves to Codeberg](/events/2025-11-zig-moves-to-codeberg.md), [Bun's Rust rewrite](/events/2026-05-bun-rust-rewrite.md)
- [Forgejo / Codeberg](/projects/devtools-languages/forgejo.md), [Bun](/projects/devtools-languages/bun.md), [Ghostty](/projects/devtools-languages/ghostty.md)

[^zig-gh]: Zig GitHub repository (read-only; stars/last push via GitHub API, 2026-10-03) — https://github.com/ziglang/zig
[^zig-codeberg]: ziglang.org: Migrating from GitHub to Codeberg — https://ziglang.org/news/migrating-from-github-to-codeberg/
[^zig-download]: ziglang.org downloads — https://ziglang.org/download/
[^zig-016]: Zig 0.16.0 release notes — https://ziglang.org/download/0.16.0/release-notes.html
[^zig-017]: Zig 0.17.0 release notes — https://ziglang.org/download/0.17.0/release-notes.html
[^mitchellh-zig]: Mitchell Hashimoto: Pledging Another $400,000 to the ZSF — https://mitchellh.com/writing/zig-donation-2026
[^reg-codeberg-ai]: The Register: Codeberg gives vibe-coded projects the toss — https://www.theregister.com/ai-and-ml/2026/07/23/codeberg-gives-vibe-coded-projects-the-toss-promotes-human-floss/5277717
[^devclass-bun-rust]: DevClass: Anthropic's Bun Rust rewrite merged at speed of AI — https://www.devclass.com/ai-ml/2026/05/15/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240541
