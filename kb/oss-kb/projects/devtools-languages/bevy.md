---
type: OSS Project
title: Bevy
description: Data-driven Rust game engine (ECS) run by the nonprofit Bevy Foundation; shipped five releases (0.15–0.19) on a ~4–5-month cadence with 0.20 in RC, crates.io downloads rose to 6.6M+, but it remains "drastically underfunded" and still lacks an upstream editor.
resource: https://github.com/bevyengine/bevy
tags: [game-engine, rust, ecs, mit, apache-2.0, nonprofit, foundation-hosted]
domain: devtools-languages
license: "MIT OR Apache-2.0"
license_history: ["MIT OR Apache-2.0 (2020-)"]
governance: foundation
steward: Bevy Foundation (501(c)(3))
backing_orgs: []
metrics:
  github_stars: { value: 48559, as_of: 2026-10-03 }
  crates_io_downloads: { value: "6.6M+", as_of: 2026-08-10, note: "up from 2.7M a year earlier, per Bevy" }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bevy-gh
    resource: https://github.com/bevyengine/bevy
    title: "Bevy GitHub repository and releases (0.15 2024-11-29, 0.16 2025-04-24, 0.17 2025-09-30, 0.18 2026-01-13, 0.19 2026-06-18, 0.20-rc.1 2026-09-15; via GitHub API)"
  - id: bevy-019
    resource: https://bevy.org/news/bevy-0-19/
    title: "Bevy 0.19 release post"
    author: org:bevy
  - id: bevy-6th
    resource: https://bevy.org/news/bevys-sixth-birthday/
    title: "Bevy's Sixth Birthday (2026-08-10)"
    author: org:bevy
  - id: bevy-501c3
    resource: https://bevy.org/news/
    title: "Bevy News (Bevy Foundation is now a 501(c)(3) Public Charity, 2024-09-25)"
    author: org:bevy
  - id: bevy-donate
    resource: https://bevy.org/donate/
    title: "Bevy: Donate (monthly funding totals)"
    author: org:bevy
---

# Summary
Bevy is the leading Rust-native game engine and a good example of a donation-funded engine that grows technically while staying short of money. The Bevy Foundation became a US 501(c)(3) public charity in September 2024.[^bevy-501c3] The project then shipped 0.15 (2024-11-29), 0.16 (2025-04-24), 0.17 (2025-09-30), 0.18 (2026-01-13) and 0.19 (2026-06-18). 0.19 had 261 contributors and 1,185 PRs and added "Next Generation Scenes" (BSN), contact shadows and text input. 0.20 entered release candidates in September 2026.[^bevy-gh][^bevy-019] At its sixth birthday (2026-08-10) the project reported crates.io downloads of 6.6M+ (up from 2.7M), more commercial Steam releases, and an editor prototype (Jackdaw) that is "very, very close" to going upstream. Project lead Carter Anderson still called the foundation "drastically underfunded for our ambitions", paying around 54% below market. The post also described AI-policy enforcement that produced "toxic witch hunts".[^bevy-6th] Verdict: OSS growing. Funding is precarious.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-29 | Bevy 0.15 [^bevy-gh] | OSS | + |
| W24 | 2025-04-24 | Bevy 0.16 [^bevy-gh] | OSS | + |
| W24 | 2025-09-30 | Bevy 0.17 [^bevy-gh] | OSS | + |
| W9 | 2026-01-13 | Bevy 0.18 [^bevy-gh] | OSS | + |
| W6 | 2026-06-18 | Bevy 0.19: BSN scenes, contact shadows, text input; 261 contributors [^bevy-gh][^bevy-019] | OSS | + |
| W3 | 2026-08-10 | Sixth birthday: 6.6M+ downloads, editor close, "drastically underfunded", AI-policy friction [^bevy-6th] | OSS | mixed |
| W3 | 2026-09-15 | Bevy 0.20 release candidates begin [^bevy-gh] | OSS | + |

# OSS successes
- Steady, large community releases (more than 250 contributors per release).[^bevy-019]
- Adoption roughly doubled in a year by crates.io downloads.[^bevy-6th]

# OSS failures / risks
- Still no upstream editor after six years. Still pre-1.0 with breaking changes in every release.[^bevy-6th]
- AI-contribution policy enforcement caused community conflict.[^bevy-6th]

# Business successes
- Nonprofit structure with tax-deductible donations.[^bevy-501c3][^bevy-donate]

# Business failures / risks
- Chronic underfunding. Leadership pays below market and says funding is the main constraint.[^bevy-6th][^bevy-donate]

# By window
## W3
- Sixth-birthday report (2026-08-10); 0.20 RCs (from 2026-09-15).[^bevy-6th][^bevy-gh]
## W6
- Bevy 0.19 (2026-06-18).[^bevy-019]
## W9
- Bevy 0.18 (2026-01-13).[^bevy-gh]
## W12
- No notable events found.
## W24
- 0.15, 0.16, 0.17 releases.[^bevy-gh]

# Lessons
- Donation-funded engines can sustain contributor growth but struggle to fund big product work such as an editor. Godot's larger foundation and corporate donors are the counterexample.
- AI contribution policies are now a source of governance conflict even in small projects.

# Related
- [Godot Engine](/projects/devtools-languages/godot.md)
- [Rust](/projects/devtools-languages/rust.md)

[^bevy-501c3]: Bevy News (Bevy Foundation is now a 501(c)(3) Public Charity, 2024-09-25) — https://bevy.org/news/
[^bevy-gh]: Bevy GitHub repository and releases (0.15 2024-11-29, 0.16 2025-04-24, 0.17 2025-09-30, 0.18 2026-01-13, 0.19 2026-06-18, 0.20-rc.1 2026-09-15; via GitHub API) — https://github.com/bevyengine/bevy
[^bevy-019]: Bevy 0.19 release post — https://bevy.org/news/bevy-0-19/
[^bevy-6th]: Bevy's Sixth Birthday (2026-08-10) — https://bevy.org/news/bevys-sixth-birthday/
[^bevy-donate]: Bevy: Donate (monthly funding totals) — https://bevy.org/donate/
