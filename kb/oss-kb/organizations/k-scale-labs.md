---
type: Organization
title: K-Scale Labs
description: "Y Combinator-backed Palo Alto startup building 'America's first open-source humanoid' (K-Bot). It shut down in Nov 2025 after failing to find a lead investor against heavily funded Chinese rivals, refunding deposits and releasing its IP under open licenses."
resource: https://github.com/kscalelabs
tags: [robotics, humanoids, open-hardware, shutdown, yc]
org_kind: coss-startup
hq: Palo Alto, California, USA
funding: { total_usd: "unverified (small seed)", last_round: "unverified", valuation_usd: "n/a" }
business_verdict: failed
projects: [projects/hardware-embedded/lerobot]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: kalil-kscale
    resource: https://mikekalil.com/blog/k-scale-labs-shuts-down/
    title: "Mike Kalil: Palo Alto humanoid startup K-Scale Labs shuts down (2025-11)"
  - id: robotreport-kscale
    resource: https://www.therobotreport.com/6-lessons-learned-watching-a-robotics-startup-die-from-the-inside/
    title: "The Robot Report: 6 lessons I learned watching a robotics startup die from the inside"
  - id: caixin-unitree
    resource: https://www.caixinglobal.com/2026-07-03/unitree-robotics-wins-approval-for-618-million-star-market-ipo-102460136.html
    title: "Caixin: Unitree Robotics wins approval for $618M STAR Market IPO (2026-07-03)"
---

# Summary
K-Scale Labs tried to build affordable open-source humanoids (the K-Bot, starting under $10k). In **Nov 2025** founder Benjamin Bolte told customers he had "not been able to find a lead investor" and had laid off most of the team. Preorders were refunded, and the company released its IP: hardware under CERN-OHL-S-2.0 and software under MIT.[^kalil-kscale] Commentators tied its failure to Chinese competition (Unitree, Booster, EngineAI) and to actuator costs.[^robotreport-kscale] Unitree, by contrast, cleared its STAR Market IPO in July 2026.[^caixin-unitree]

# Business timeline
| Date | Event |
|---|---|
| 2025-11 | Layoffs, refunds, shutdown; IP open-sourced[^kalil-kscale] |

# Monetization model
Hardware preorders for open humanoids (failed before scale).

# Successes
- Left a fully open humanoid design to the community.[^kalil-kscale]

# Failures / risks
- Capital intensity of humanoids versus a seed-stage balance sheet; Chinese price war.[^robotreport-kscale]

# Related
- [LeRobot](/projects/hardware-embedded/lerobot.md), [Event: K-Scale shuts down](/events/2025-11-k-scale-labs-shuts-down.md)

[^kalil-kscale]: Mike Kalil.
[^robotreport-kscale]: The Robot Report.
[^caixin-unitree]: Caixin Global.
