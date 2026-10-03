---
type: Organization
title: Auterion
description: "Swiss-American drone autonomy company built on the open-source PX4 autopilot (largest Dronecode contributor, ~25%). It pivoted to defense: a $50M Pentagon strike-kit contract for Ukraine (Jul 2025), a $130M Series B (Sept 2025), and a reported $200M raise at >$1.2B (Mar 2026) while profitable."
resource: https://auterion.com
tags: [drones, defense, px4, coss-startup, dual-use]
org_kind: coss-startup
hq: Arlington, Virginia, USA / Zurich, Switzerland
funding: { total_usd: "unverified", last_round: "Series B $130M (Bessemer)", last_round_date: 2025-09-23, valuation_usd: "reported >$600M (Bloomberg); reported raising at >$1.2B (2026-03)" }
business_verdict: thriving
projects: [projects/hardware-embedded/px4]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: auterion-b
    resource: https://dronelife.com/2025/09/23/auterion-secures-130-million-series-b-to-scale-defense-software/
    title: "DroneLife: Auterion secures $130M Series B (2025-09-23)"
  - id: dronexl-b
    resource: https://dronexl.co/2025/09/24/auterion-ai-powered-drone-swarms/
    title: "DroneXL: Auterion raises $130M (valuation 'north of $600M' per Bloomberg)"
  - id: auterion-pentagon
    resource: https://dronelife.com/2025/07/29/auterion-wins-50m-pentagon-contract-to-deliver-33000-ai%E2%80%91driven-drone-strike-kits-to-ukraine/
    title: "DroneLife: Auterion wins $50M Pentagon contract (2025-07-29)"
  - id: resilience-auterion
    resource: https://resiliencemedia.co/weekly-digest-auterion-raising-200m-at-1-2b-valuation-uforces-unicorn-debut-and-anthropics-pentagon-standoff/
    title: "Resilience Media: Auterion raising $200M at $1.2B (2026-03-05)"
  - id: dronecode-2025
    resource: https://dronecode.org/the-2025-year-in-review/
    title: "Dronecode 2025 Year in Review"
---

# Summary
Auterion is open source's most striking **defense-tech business**. It contributes ~25% of Dronecode code[^dronecode-2025] and sells PX4-based autonomy (Skynode, strike kits). It won a $50M Pentagon contract for 33,000 AI strike kits for Ukraine (Jul 2025).[^auterion-pentagon] It raised a $130M Series B led by Bessemer (Sept 2025; Bloomberg-reported valuation "north of $600M").[^auterion-b][^dronexl-b] By March 2026 Resilience Media reported it profitable, on track for ~$200M revenue, and raising $200M at more than $1.2B.[^resilience-auterion]

# Business timeline
| Date | Event |
|---|---|
| 2025-07-29 | $50M Pentagon strike-kit contract[^auterion-pentagon] |
| 2025-09-23 | $130M Series B[^auterion-b] |
| 2026-03-05 | Reported $200M raise at >$1.2B; profitable[^resilience-auterion] |

# Monetization model
Proprietary autonomy hardware and software (Skynode, Nemyx swarm, strike kits) on top of open PX4. Open core in a defense setting.

# Successes
- Profitable growth and unicorn-track valuation.[^resilience-auterion]

# Failures / risks
- Dependence on wartime procurement; ethical scrutiny of open-source weapons use.

# Related
- [PX4](/projects/hardware-embedded/px4.md), [Event: Operation Spiderweb](/events/2025-06-ardupilot-operation-spiderweb.md)

[^auterion-b]: DroneLife.
[^dronexl-b]: DroneXL.
[^auterion-pentagon]: DroneLife.
[^resilience-auterion]: Resilience Media.
[^dronecode-2025]: Dronecode Foundation.
