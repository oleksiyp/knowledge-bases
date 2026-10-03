---
type: OSS Project
title: Servo
description: Rust browser engine originally from Mozilla, revived in 2023 under Linux Foundation Europe with Igalia doing most of the work; slow but real progress, culminating in a first versioned release (0.0.1, Oct 2025) and a first crates.io/LTS release for embedders (0.1.0, Apr 2026) followed by monthly releases.
resource: https://github.com/servo/servo
tags: [browser-engine, rust, mpl-2.0, foundation-hosted, linux-foundation-europe]
domain: devtools-languages
license: MPL-2.0
license_history: ["MPL-2.0 (2012-)"]
governance: foundation
steward: Linux Foundation Europe (with Igalia)
backing_orgs: []
metrics:
  github_stars: { value: 38065, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: servo-gh
    resource: https://github.com/servo/servo
    title: Servo GitHub repository (stars via GitHub API, 2026-10-03)
  - id: wiki-servo
    resource: https://en.wikipedia.org/wiki/Servo_(software)
    title: "Wikipedia: Servo (software) — background (2020 Mozilla layoffs, 2023 revival, LF Europe)"
  - id: servo-releases
    resource: https://github.com/servo/servo/releases
    title: "Servo GitHub releases (v0.0.1 Oct 2025; v0.1.0 2026-04-13; v0.2.0–v0.6.0 monthly to 2026-09-29; via GitHub API)"
  - id: heise-servo-001
    resource: https://www.heise.de/en/news/Browser-Engine-Servo-Releases-First-Official-Release-0-0-1-10792197.html
    title: "heise: Browser Engine Servo Releases First Official Release 0.0.1 (Oct 2025)"
  - id: servo-010
    resource: https://servo.org/blog/2026/04/13/servo-0.1.0-release/
    title: "Servo blog: Servo is now available on crates.io (0.1.0, first LTS; 2026-04-13)"
  - id: lwn-servo-crate
    resource: https://lwn.net/Articles/1067467/
    title: "LWN: Servo now on crates.io"
  - id: servo-blog
    resource: https://servo.org/blog/
    title: "Servo blog (monthly updates; 'Your Donations at Work: One Year of Sponsored Servo Development', Sept 2026)"
---

# Summary
Servo is a revival success at modest scale: after Mozilla's 2020 layoffs orphaned it, external funding reactivated a team in January 2023 under Linux Foundation Europe, with Igalia and volunteers doing development.[^wiki-servo] It shipped its first tagged release, **0.0.1, on 2025-10-20** (including Apple-silicon builds) and moved to monthly releases; on **2026-04-13 it published 0.1.0 as its first crates.io release and first LTS** (a new LTS every six months, nine months of support), explicitly targeting embedders — in a record month of 530 commits.[^heise-servo-001][^servo-010][^lwn-servo-crate] Monthly releases continued through 0.6.0 (2026-09-29), and in September 2026 the project marked one year of donation-funded developer roles.[^servo-releases][^servo-blog] It has 38k GitHub stars.[^servo-gh] Verdict: growing — an embeddable Rust engine niche rather than a consumer browser; Ladybird has more momentum as a full browser.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-20 | Servo 0.0.1 first versioned release; monthly release train begins [^heise-servo-001][^servo-releases] | OSS | + |
| W9 | 2026-03 | "Biggest month ever" (530 commits; keyboard navigation, FreeBSD support) [^servo-010][^servo-blog] | OSS | + |
| W6 | 2026-04-13 | Servo 0.1.0 on crates.io — first LTS for embedders [^servo-010][^lwn-servo-crate] | OSS | + |
| W6 | 2026-05-31 / 06-25 | 0.2.0 and 0.3.0 monthly releases [^servo-releases] | OSS | + |
| W3 | 2026-08-04 → 09-29 | 0.4.0, 0.5.0, 0.6.0; one year of sponsored development roles [^servo-releases][^servo-blog] | OSS | + |

# OSS successes
- Proof that an abandoned corporate OSS project can be revived via foundation hosting, consultancy work and donations.[^wiki-servo][^servo-blog]
- A real embedding story: crates.io distribution with an LTS track.[^servo-010]

# OSS failures / risks
- Small team; no commercial sponsor at Mozilla scale.

# Business successes
- n/a (donation- and grant-funded).

# Business failures / risks
- n/a.

# By window
## W3
- Monthly releases 0.4–0.6; one-year review of donation-funded roles (Sept 2026).[^servo-releases][^servo-blog]
## W6
- 0.1.0 / first LTS on crates.io (2026-04-13); 0.2.0, 0.3.0.[^servo-010][^servo-releases]
## W9
- Record development month (March 2026).[^servo-blog]
## W12
- 0.0.1 release (2025-10-20).[^heise-servo-001]
## W24
- Ongoing reboot work (no dated milestones verified in this window).

# Lessons
- Foundation hosting + a consultancy steward (Igalia) + small-donor funding is a viable rescue path for orphaned corporate OSS.
- Positioning as an embeddable library (with LTS) avoids competing head-on with full browsers.

# Related
- [Ladybird](/projects/devtools-languages/ladybird.md), [Rust](/projects/devtools-languages/rust.md)

[^servo-gh]: Servo GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/servo/servo
[^wiki-servo]: Wikipedia: Servo (software) — background (2020 Mozilla layoffs, 2023 revival, LF Europe) — https://en.wikipedia.org/wiki/Servo_(software)
[^servo-releases]: Servo GitHub releases (v0.0.1 Oct 2025; v0.1.0 2026-04-13; v0.2.0–v0.6.0 monthly to 2026-09-29; via GitHub API) — https://github.com/servo/servo/releases
[^heise-servo-001]: heise: Browser Engine Servo Releases First Official Release 0.0.1 (Oct 2025) — https://www.heise.de/en/news/Browser-Engine-Servo-Releases-First-Official-Release-0-0-1-10792197.html
[^servo-010]: Servo blog: Servo is now available on crates.io (0.1.0, first LTS; 2026-04-13) — https://servo.org/blog/2026/04/13/servo-0.1.0-release/
[^lwn-servo-crate]: LWN: Servo now on crates.io — https://lwn.net/Articles/1067467/
[^servo-blog]: Servo blog (monthly updates; 'Your Donations at Work: One Year of Sponsored Servo Development', Sept 2026) — https://servo.org/blog/
