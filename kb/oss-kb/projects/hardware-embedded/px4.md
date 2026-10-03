---
type: OSS Project
title: PX4 Autopilot
description: "BSD-licensed drone flight stack under the Linux Foundation's Dronecode. In 2025–26 open autopilots became dual-use defense infrastructure: Auterion (top PX4 contributor) raised $130M, became profitable on Ukraine strike-kit contracts, and is reportedly raising at $1.2B+. US bans on foreign drones (Dec 2025) also favour open, domestic stacks."
resource: https://px4.io
tags: [drones, autopilot, bsd, foundation-hosted, defense, dual-use]
domain: hardware-embedded
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: foundation
steward: Dronecode Foundation (Linux Foundation)
backing_orgs: [organizations/auterion, organizations/linux-foundation]
metrics:
  github_stars: { value: 12733, as_of: 2026-10-03 }
  contributors_2025: { value: 418, as_of: 2025-12-31 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dronecode-2025
    resource: https://dronecode.org/the-2025-year-in-review/
    title: "Dronecode Foundation: The 2025 Year in Review"
  - id: px4-117
    resource: https://px4.io/px4-autopilot-release-v1-17-what-you-need-to-know/
    title: "PX4: Release v1.17 — what you need to know (2026-05-18)"
  - id: px4-gh
    resource: https://github.com/PX4/PX4-Autopilot
    title: "PX4 GitHub (v1.18.0-rc1 2026-09-10)"
  - id: auterion-b
    resource: https://dronelife.com/2025/09/23/auterion-secures-130-million-series-b-to-scale-defense-software/
    title: "DroneLife: Auterion secures $130M Series B (2025-09-23)"
  - id: auterion-pentagon
    resource: https://dronelife.com/2025/07/29/auterion-wins-50m-pentagon-contract-to-deliver-33000-ai%E2%80%91driven-drone-strike-kits-to-ukraine/
    title: "DroneLife: Auterion wins $50M Pentagon contract for 33,000 strike kits (2025-07-29)"
  - id: resilience-auterion
    resource: https://resiliencemedia.co/weekly-digest-auterion-raising-200m-at-1-2b-valuation-uforces-unicorn-debut-and-anthropics-pentagon-standoff/
    title: "Resilience Media: Auterion raising $200M at $1.2B valuation (2026-03-05)"
  - id: fcc-drones
    resource: https://dronelife.com/2025/12/22/fcc-adds-foreign-made-drones-and-components-to-covered-list-citing-national-security-risks/
    title: "DroneLife: FCC adds foreign-made drones and components to Covered List (2025-12-22)"
---

# Summary
PX4 is **thriving** as open-source infrastructure, with a sharp turn toward **defense**. Dronecode's 2025 review counts 11,426 PX4 commits from 418 contributors across 72 organisations. **Auterion** wrote ~25% of Dronecode contributions, ARK Electronics 11%.[^dronecode-2025] PX4 **v1.16** (2025) and **v1.17** (May 18, 2026) added rover support, Zenoh/ROS 2 integration, on-device TFLM neural controllers and GNSS anti-jamming reporting. v1.18 reached RC in Sept 2026.[^px4-117][^px4-gh] On the business side, Auterion, built on PX4, won a **$50M Pentagon contract for 33,000 AI strike kits for Ukraine** (Jul 2025)[^auterion-pentagon] and raised a **$130M Series B** at a reported "north of $600M" (Sept 2025).[^auterion-b] By March 2026 it was reported profitable, heading to ~$200M revenue, and raising $200M at $1.2B+.[^resilience-auterion] The FCC's **Dec 2025** Covered-List entry for all foreign-made drones and critical components opened room for US and allied stacks.[^fcc-drones] Verdict: OSS **thriving**, business (ecosystem) **thriving**, with growing **dual-use governance risk**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07-29 | Auterion $50M Pentagon strike-kit contract (Ukraine)[^auterion-pentagon] | Business | + |
| W24 | 2025-09-23 | Auterion $130M Series B (Bessemer)[^auterion-b] | Business | + |
| W12 | 2025-12-22 | FCC puts foreign-made drones and components on Covered List[^fcc-drones] | Business | + |
| W9 | 2026-03-05 | Auterion reportedly raising $200M at >$1.2B; profitable[^resilience-auterion] | Business | + |
| W6 | 2026-05-18 | PX4 v1.17 stable[^px4-117] | OSS | + |
| W3 | 2026-09-10 | PX4 v1.18.0-rc1[^px4-gh] | OSS | + |

# OSS successes
- Broad multi-org contributor base (72 orgs) and 110+ hardware targets.[^dronecode-2025]

# OSS failures / risks
- Contributor concentration in Auterion (~25%).[^dronecode-2025]
- Dual-use: weaponised forks are legal under BSD, and export-control or ethics pressure on maintainers may grow.

# Business successes
- Auterion's growth to a reported unicorn-scale valuation on PX4-based defense software.[^resilience-auterion]

# Business failures / risks
- Defense dependence ties the commercial ecosystem to war budgets.

# By window
## W3
- v1.18 RC.[^px4-gh]
## W6
- v1.17 release.[^px4-117]
## W9
- Auterion $200M/$1.2B raise reported.[^resilience-auterion]
## W12
- FCC foreign-drone covered list.[^fcc-drones]
## W24
- Auterion Pentagon contract and Series B; PX4 v1.16.[^auterion-pentagon][^auterion-b][^dronecode-2025]

# Lessons
- Permissive licensing plus a strong foundation lets a commercial champion (Auterion) scale on shared code. War made the use case, and the money, abruptly real.

# Related
- [ArduPilot](/projects/hardware-embedded/ardupilot.md), [Auterion](/organizations/auterion.md), [NuttX](/projects/hardware-embedded/nuttx.md)
- [Event: Operation Spiderweb](/events/2025-06-ardupilot-operation-spiderweb.md), [Event: FCC foreign-drone covered list](/events/2025-12-fcc-foreign-drones-covered-list.md)

[^dronecode-2025]: Dronecode Foundation.
[^px4-117]: PX4, 2026-05-18.
[^px4-gh]: GitHub releases API.
[^auterion-b]: DroneLife, 2025-09-23.
[^auterion-pentagon]: DroneLife, 2025-07-29.
[^resilience-auterion]: Resilience Media, 2026-03-05.
[^fcc-drones]: DroneLife, 2025-12-22.
