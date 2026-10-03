---
type: OSS Project
title: Eclipse S-CORE (Safe Open Vehicle Core) / Eclipse SDV
description: "Eclipse Foundation project building a shared, safety-certifiable open-source core stack for software-defined vehicles. Europe's automakers and suppliers (BMW, Mercedes, VW, Bosch, ZF and more) signed a June 2025 MoU around it to answer Chinese software speed; 0.5 shipped late 2025, 0.8 in Sept 2026, with 1.0 targeted for end-2026."
resource: https://eclipse.dev/score/
tags: [automotive, software-defined-vehicle, safety, foundation-hosted, europe, apache-2.0]
domain: hardware-embedded
license: Apache-2.0
license_history: ["Apache-2.0 (2024-)"]
governance: foundation
steward: Eclipse Foundation (Eclipse SDV Working Group)
backing_orgs: [organizations/eclipse-foundation, organizations/qualcomm]
metrics:
  github_stars: { value: 110, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: vda-mou
    resource: https://www.vda.de/en/press/press-releases/2025/250624_PM_Automotive_industry_signs_Memorandum_of_Understanding
    title: "VDA: Automotive industry signs MoU for joint open-source software development (2025-06-23/24)"
  - id: gnw-score
    resource: https://www.globenewswire.com/news-release/2025/06/12/3098131/0/en/The-Eclipse-Foundation-Launches-the-S-CORE-Project-The-Automotive-Industry-s-First-Open-Source-Core-Stack-for-Software-Defined-Vehicles.html
    title: "Eclipse Foundation launches the S-CORE project (2025-06-12)"
  - id: sdv-ces
    resource: https://eclipsesdv.org/blogs/open-source-automotive-reaches-critical-mass-32-companies-unite-at-ces-and-traton-joins-eclipse-sdv/
    title: "Eclipse SDV: CES 2026 — 32 companies unite; Traton joins (2026-01)"
  - id: score-articles
    resource: https://eclipse.dev/score/articles.html
    title: "Eclipse S-CORE articles (0.9 milestone; release gates)"
  - id: score-qcom
    resource: https://newsroom.eclipse.org/news/community-news/eclipse-s-core-eclipse-safe-open-vehicle-core-project-unites-qualcomm-advance
    title: "Eclipse newsroom: S-CORE unites with Qualcomm"
  - id: newatlas-score
    resource: https://newatlas.com/automotive/eclipse-s-core-shared-car-operating-platform/
    title: "New Atlas: Fierce automotive rivals unite to battle China's rapidly maturing tech"
---

# Summary
S-CORE is European automotive's bet that **pre-competitive open source** can close the software-speed gap with Chinese EV makers. Eclipse launched it in June 2025.[^gnw-score] On June 23–24, 2025, eleven companies signed a VDA MoU to co-develop open SDV software through S-CORE: BMW, Continental, ETAS, HELLA, Mercedes-Benz, Qorix, Bosch, Valeo, Vector, Volkswagen and ZF.[^vda-mou] At CES 2026, 32 executives joined the expanded MoU circle, Traton (VW trucks) joined Eclipse SDV as a strategic member, and partners claimed development could become "up to 30% faster" with up to 40% less effort.[^sdv-ces] Qualcomm joined the project.[^score-qcom] The 0.5 beta came out around the turn of 2025/26, and the project has since passed further release gates (0.8/0.9) on the way to a safety-certifiable **1.0 targeted for end-2026**.[^sdv-ces][^score-articles] Verdict: **growing**, but it is unproven until it ships in cars (BMW and Mercedes plan use from roughly 2030 programmes).[^newatlas-score]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-12 | S-CORE project launched[^gnw-score] | OSS | + |
| W24 | 2025-06-23 | 11-company VDA MoU[^vda-mou] | OSS | + |
| W12/W9 | 2025-12/2026-01 | S-CORE 0.5 beta; CES: 32 companies, Traton joins[^sdv-ces] | OSS | + |
| W3 | 2026 | 0.8/0.9 milestones; 1.0 targeted end-2026[^score-articles] | OSS | + |

# OSS successes
- Rival OEMs and Tier-1s co-own one safety-oriented stack under neutral governance.[^vda-mou]

# OSS failures / risks
- Tiny public community (110 stars). Pace is set by consortium politics, and 1.0 could slip.[^score-articles]

# Business successes
- n/a. The goal is cost avoidance (claimed up to 40% effort reduction).[^sdv-ces]

# Business failures / risks
- Benefits land only with ~2030 vehicle programmes.[^newatlas-score]

# By window
## W3
- Release-gate progress toward 1.0.[^score-articles]
## W6
- No notable events found.
## W9
- CES 2026 momentum; Traton joins.[^sdv-ces]
## W12
- 0.5 beta.[^sdv-ces]
## W24
- Launch and MoU.[^gnw-score][^vda-mou]

# Lessons
- Industrial OSS is often a defensive industrial policy: competitors share the commodity layer to keep pace with a common rival.

# Related
- [Eclipse Foundation](/organizations/eclipse-foundation.md), [Autoware](/projects/hardware-embedded/autoware.md), [Event: S-CORE MoU](/events/2025-06-automakers-sign-eclipse-s-core-mou.md)

[^vda-mou]: VDA, June 2025.
[^gnw-score]: GlobeNewswire, 2025-06-12.
[^sdv-ces]: Eclipse SDV blog, Jan 2026.
[^score-articles]: eclipse.dev/score.
[^score-qcom]: Eclipse newsroom.
[^newatlas-score]: New Atlas.
