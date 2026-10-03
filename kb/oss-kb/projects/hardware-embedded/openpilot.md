---
type: OSS Project
title: openpilot (comma.ai)
description: "MIT-licensed driver-assistance system from comma.ai, the most-starred open automotive project (~64k stars). It moved to end-to-end world-model training (0.10, Aug 2025; 0.11, Mar 2026, 'first robotics agent fully trained in a learned simulation') and launched the smaller $999 comma four (Nov 2025). Steady product success for a self-funded hardware company."
resource: https://github.com/commaai/openpilot
tags: [automotive, adas, end-to-end-ai, mit, hardware-startup]
domain: hardware-embedded
license: MIT
license_history: ["MIT"]
governance: single-vendor
steward: comma.ai
backing_orgs: [organizations/comma-ai]
metrics:
  github_stars: { value: 63798, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: stable
momentum_by_window: { W3: flat, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: comma-010
    resource: https://blog.comma.ai/010release/
    title: "comma.ai blog: openpilot 0.10 (2025-08-21)"
  - id: comma-011
    resource: https://blog.comma.ai/011release/
    title: "comma.ai blog: openpilot 0.11 (2026-03-17)"
  - id: comma-four
    resource: https://blog.comma.ai/comma-four/
    title: "comma.ai blog: Introducing the comma four (2025-11-25)"
  - id: op-gh
    resource: https://github.com/commaai/openpilot
    title: "openpilot GitHub (v0.11.1 2026-06-05)"
---

# Summary
openpilot is open source's **flagship in consumer automotive**. 0.10 (Aug 21, 2025) replaced the path-plus-MPC planner with an end-to-end architecture supervised by a learned world model ("Tomb Raider").[^comma-010] 0.11 (Mar 17, 2026) was billed as "the first robotics agent fully trained in a learned simulation", with better highway speed control and a 77% cut in comma four idle power.[^comma-011] The **comma four** (Nov 25, 2025) is a fifth the size of the 3X, costs $999, supports 300+ vehicles, and is made in San Diego.[^comma-four] The repo has ~64k stars, the most of any project in this domain.[^op-gh] comma remains private and self-sustaining from hardware sales; revenue is undisclosed. Verdict: OSS **thriving**, business **stable**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-21 | openpilot 0.10: end-to-end world-model training[^comma-010] | OSS | + |
| W12 | 2025-11-25 | comma four launched ($999)[^comma-four] | Business | + |
| W9 | 2026-03-17 | openpilot 0.11: trained in learned simulation[^comma-011] | OSS | + |
| W6 | 2026-06-05 | v0.11.1[^op-gh] | OSS | + |

# OSS successes
- Ships cutting-edge end-to-end driving research as open code.[^comma-011]

# OSS failures / risks
- Single-vendor control; regulatory exposure (driver-assist rules) on forks and ports.

# Business successes
- Domestic manufacturing plus new hardware generation.[^comma-four]

# Business failures / risks
- Revenue and profitability undisclosed (unverified estimates only).

# By window
## W3
- No notable events found.
## W6
- 0.11.1 release.[^op-gh]
## W9
- 0.11 release.[^comma-011]
## W12
- comma four launch.[^comma-four]
## W24
- 0.10 release.[^comma-010]

# Lessons
- Open-sourcing the software while selling the hardware turns users into fleet data contributors, a robotics-era version of open core.

# Related
- [comma.ai](/organizations/comma-ai.md), [tinygrad](/projects/ai-inference/tinygrad.md), [Autoware](/projects/hardware-embedded/autoware.md)

[^comma-010]: comma.ai blog, 2025-08-21.
[^comma-011]: comma.ai blog, 2026-03-17.
[^comma-four]: comma.ai blog, 2025-11-25.
[^op-gh]: GitHub API, 2026-10-03.
