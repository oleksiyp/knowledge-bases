---
type: OSS Project
title: ArduPilot
description: "GPL-3.0 autopilot for copters, planes, rovers and boats, maintained by a nonprofit community. It became famous outside hobby circles when Ukraine's June 2025 Operation Spiderweb used ArduPilot-guided drones to strike Russian strategic bombers; development continued with the 4.6 series (May 2025)."
resource: https://ardupilot.org
tags: [drones, autopilot, gpl, community, defense, dual-use]
domain: hardware-embedded
license: GPL-3.0
license_history: ["GPL-3.0"]
governance: community
steward: ArduPilot non-profit (ArduPilot.org, with partner companies)
backing_orgs: []
metrics:
  github_stars: { value: 15976, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ap-46
    resource: https://discuss.ardupilot.org/t/copter-4-6-0-released/134617
    title: "ArduPilot Discourse: Copter-4.6.0 released (2025-05-22)"
  - id: ap-463
    resource: https://discuss.ardupilot.org/t/copter-4-6-3-released/140596/4
    title: "ArduPilot Discourse: Copter-4.6.3 released (2025-11)"
  - id: 404-spiderweb
    resource: https://www.404media.co/ukraines-massive-drone-attack-was-powered-by-open-source-software/
    title: "404 Media: Ukraine's massive drone attack was powered by open source software (2025-06)"
  - id: chatham-spiderweb
    resource: https://www.chathamhouse.org/2025/06/ukraines-operation-spiders-web-game-changer-modern-drone-warfare-nato-should-pay-attention
    title: "Chatham House: Ukraine's Operation Spider's Web is a game-changer (2025-06)"
  - id: ap-gh
    resource: https://github.com/ArduPilot/ardupilot
    title: ArduPilot GitHub
---

# Summary
ArduPilot is a mature, **thriving** community autopilot. The 4.6.0 stable release covered all vehicle types on May 22, 2025, followed by 4.6.1–4.6.3 through Nov 2025.[^ap-46][^ap-463] Its defining moment of the window was not technical. In **Operation Spiderweb (June 1, 2025)** Ukraine's SBU launched improvised quadcopters from trucks deep inside Russia. 404 Media reported they ran **ArduPilot** for autonomous waypoint flight when links dropped, and the strike damaged a large share of Russia's strategic bomber fleet.[^404-spiderweb][^chatham-spiderweb] It became the emblem of open-source software as a military enabler. Verdict: OSS **thriving**. There is no single business, and dual-use risk is now front-page.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-22 | ArduPilot 4.6.0 stable[^ap-46] | OSS | + |
| W24 | 2025-06-01 | Operation Spiderweb uses ArduPilot-guided drones[^404-spiderweb][^chatham-spiderweb] | OSS | ± |
| W12 | 2025-11 | Copter 4.6.3[^ap-463] | OSS | + |

# OSS successes
- Proven, flexible and widely deployed; ~16k stars.[^ap-gh]

# OSS failures / risks
- Weaponisation draws scrutiny. GPL obligations on military forks are rarely enforceable, and maintainers face ethical and legal pressure.

# Business successes
- n/a (partner ecosystem).

# Business failures / risks
- n/a.

# By window
## W3
- No notable events found.
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- 4.6.3 release.[^ap-463]
## W24
- 4.6 series; Operation Spiderweb.[^ap-46][^404-spiderweb]

# Lessons
- "Open" plus "cheap hardware" equals strategic capability. Open-source maintainers in robotics are now de facto defense suppliers whether they like it or not.

# Related
- [PX4](/projects/hardware-embedded/px4.md), [Event: Operation Spiderweb](/events/2025-06-ardupilot-operation-spiderweb.md)

[^ap-46]: ArduPilot Discourse.
[^ap-463]: ArduPilot Discourse.
[^404-spiderweb]: 404 Media.
[^chatham-spiderweb]: Chatham House.
[^ap-gh]: GitHub.
