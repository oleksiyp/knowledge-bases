---
type: OSS Project
title: Bun
description: All-in-one JavaScript/TypeScript runtime, bundler, test runner and package manager; went from zero-revenue VC startup to Anthropic-owned infrastructure for Claude Code (Dec 2025) and was rewritten from Zig to Rust with AI in May 2026.
resource: https://github.com/oven-sh/bun
tags: [javascript-runtime, typescript, mit, acquired, ai-coding-infrastructure, zig, rust]
domain: devtools-languages
license: MIT
license_history: ["MIT (2021-) — core; bundled third-party components under other licenses (GitHub reports NOASSERTION)"]
governance: single-vendor
steward: Anthropic (via acquisition of Oven Inc.)
backing_orgs: [organizations/oven]
metrics:
  github_stars: { value: 96103, as_of: 2026-10-03 }
  monthly_downloads: { value: 7200000, as_of: 2025-10-31, note: "per Bun blog, +25% MoM at the time" }
oss_verdict: growing
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bun-gh
    resource: https://github.com/oven-sh/bun
    title: Bun GitHub repository (stars via GitHub API, 2026-10-03)
  - id: bun-joins-anthropic
    resource: https://bun.com/blog/bun-joins-anthropic
    title: "Bun blog: Bun is joining Anthropic"
    author: org:oven
  - id: devclass-acq
    resource: https://devclass.com/2025/12/03/bun-javascript-runtime-acquired-by-anthropic-tying-its-future-to-ai-coding/
    title: "DevClass: Bun JavaScript runtime acquired by Anthropic, tying its future to AI coding"
  - id: si-claude-code
    resource: https://www.streetinsider.com/Mergers+and+Acquisitions/Anthropic+acquires+JavaScript+runtime+Bun,+Claude+Code+hits+$1B+revenue/25688349.html
    title: "StreetInsider: Anthropic acquires JavaScript runtime Bun, Claude Code hits $1B revenue"
  - id: bun-releases
    resource: https://github.com/oven-sh/bun/releases
    title: Bun GitHub releases (dates via GitHub API, checked 2026-10-03)
  - id: bun-v14
    resource: https://bun.com/blog/bun-v1.4
    title: "Bun blog: Bun v1.4"
    author: org:oven
  - id: reg-rust
    resource: https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
    title: "The Register: Anthropic's Bun Rust rewrite merged at speed of AI"
  - id: devclass-rust
    resource: https://www.devclass.com/ai-ml/2026/05/15/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240541
    title: "DevClass: Anthropic's Bun Rust rewrite merged at speed of AI"
---

# Summary
Bun is the clearest "AI lab buys the runtime under its agent" story of the period. Oven Inc. raised ~$26M of VC (a $7M seed led by Kleiner Perkins and a $19M Series A led by Khosla Ventures) and, by its own admission, had **zero revenue** when Anthropic acquired it on 2 December 2025 — Anthropic's first-ever acquisition, announced alongside Claude Code reaching $1B run-rate revenue.[^bun-joins-anthropic][^si-claude-code] OSS health is strong: 96k GitHub stars, rapid releases (1.3 in Oct 2025, the Rust-based 1.4 on 2026-08-20, 1.4.2 by Sept 2026), and 7.2M monthly downloads at the time of the deal.[^bun-gh][^bun-releases][^bun-joins-anthropic] The project then did something no other major runtime has done: a >1M-line, AI-generated rewrite from Zig to Rust merged on 14 May 2026.[^reg-rust] Verdict: OSS growing, business "acquired" — a successful exit that converted a revenue-less VC bet into strategic infrastructure, at the cost of independence.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-10-10 | Bun 1.3 released (HMR / full-stack dev server) [^bun-releases] | OSS | + |
| W12 | 2025-12-02 | Anthropic acquires Bun; stays MIT, same team [^bun-joins-anthropic][^devclass-acq] | Business | + / mixed |
| W6 | 2026-05-13 | Bun 1.3.14 — last Zig-based release [^bun-releases][^reg-rust] | OSS | = |
| W6 | 2026-05-14 | Rust rewrite (>1M lines added, ~600k Zig lines removed) merged to main [^reg-rust] | OSS | mixed |
| W3 | 2026-08-20 | Bun 1.4 — first Rust-based release (Node.js-compat +1,517 tests, up to 35% less memory, 50% faster Linux startup, Bun.WebView/Bun.Image APIs) [^bun-v14] | OSS | + |
| W3 | 2026-09-05 | Bun 1.4.2 stable [^bun-releases] | OSS | + |

# OSS successes
- Became the distribution substrate for AI coding CLIs: Claude Code, FactoryAI and OpenCode ship as Bun single-file executables.[^bun-joins-anthropic]
- Download growth of ~25% month-over-month in late 2025.[^bun-joins-anthropic]
- Rust rewrite reportedly passes 99.8% of the pre-existing test suite on Linux x64 glibc and shrinks the binary by 3–8 MB.[^devclass-rust][^reg-rust]

# OSS failures / risks
- Single-vendor governance: roadmap now explicitly aligned with Claude Code and the Agent SDK.[^devclass-acq]
- The Rust port landed as a single unreviewable mega-commit; community skepticism about hidden bugs and the "AI writes all the code" workflow.[^reg-rust][^devclass-rust]
- Break with the Zig ecosystem: Bun had needed a Zig fork carrying AI-assisted changes Zig's no-AI policy would not accept.[^devclass-rust]

# Business successes
- Exit for investors despite no revenue; acquirer has a direct incentive ("if Bun breaks, Claude Code breaks").[^bun-joins-anthropic]

# Business failures / risks
- Never found a standalone business model (hosting was planned but never shipped as revenue).[^bun-joins-anthropic]
- Deal price not disclosed.[^bun-joins-anthropic]

# By window
## W3
- Bun 1.4 (2026-08-20), the first Rust-based release, after a 99-day gap since 1.3.14; Bun says Claude Code had already run on the Rust port for months.[^bun-v14][^bun-releases]
- 1.4.1/1.4.2 follow-ups on 2026-09-04/05.[^bun-releases]
## W6
- Zig→Rust rewrite merged 2026-05-14; final Zig release 1.3.14 (2026-05-13).[^reg-rust][^bun-releases]
## W9
- No notable events found beyond routine releases.
## W12
- Anthropic acquisition (2025-12-02).[^bun-joins-anthropic]
## W24
- Bun 1.3 (2025-10-10).[^bun-releases]

# Lessons
- Infrastructure that becomes load-bearing for an AI agent is an acquisition target even with zero revenue.
- Permissive license + acquirer dependency can be a stronger continuity guarantee than an unproven business model — but it trades away neutrality.
- AI-scale rewrites are now feasible; reviewability and trust become the bottleneck, not effort.

# Related
- [Oven (Bun)](/organizations/oven.md)
- [Anthropic acquires Bun](/events/2025-12-anthropic-acquires-bun.md)
- [Bun's Zig-to-Rust rewrite](/events/2026-05-bun-rust-rewrite.md)
- [Zig](/projects/devtools-languages/zig.md), [Deno](/projects/devtools-languages/deno.md), [Node.js](/projects/devtools-languages/nodejs.md), [uv / Astral](/projects/devtools-languages/uv.md)

[^bun-gh]: Bun GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/oven-sh/bun
[^bun-joins-anthropic]: Bun blog: Bun is joining Anthropic — https://bun.com/blog/bun-joins-anthropic
[^devclass-acq]: DevClass: Bun JavaScript runtime acquired by Anthropic, tying its future to AI coding — https://devclass.com/2025/12/03/bun-javascript-runtime-acquired-by-anthropic-tying-its-future-to-ai-coding/
[^si-claude-code]: StreetInsider: Anthropic acquires JavaScript runtime Bun, Claude Code hits $1B revenue — https://www.streetinsider.com/Mergers+and+Acquisitions/Anthropic+acquires+JavaScript+runtime+Bun,+Claude+Code+hits+$1B+revenue/25688349.html
[^bun-releases]: Bun GitHub releases — https://github.com/oven-sh/bun/releases
[^bun-v14]: Bun blog: Bun v1.4 — https://bun.com/blog/bun-v1.4
[^reg-rust]: The Register: Anthropic's Bun Rust rewrite merged at speed of AI — https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
[^devclass-rust]: DevClass: Anthropic's Bun Rust rewrite merged at speed of AI — https://www.devclass.com/ai-ml/2026/05/15/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240541
