---
type: OSS Project
title: Autoware
description: "Apache-2.0 open-source autonomous-driving stack on ROS 2, governed by the Autoware Foundation. It passed 100 member organisations in June 2025 ('Autoware Foundation 2.0'), added members such as Renesas (top tier) and NATIX in 2026, and ships roughly quarterly releases (1.9.0, Jul 2026)."
resource: https://autoware.org
tags: [automotive, autonomous-driving, ros2, foundation-hosted, apache-2.0]
domain: hardware-embedded
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Autoware Foundation
backing_orgs: []
metrics:
  github_stars: { value: 12138, as_of: 2026-10-03 }
  members: { value: "100+", as_of: 2025-06-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: awf-100
    resource: https://www.einpresswire.com/article/816832041/autoware-foundation-surpasses-100-members-announces-real-world-e2e-autonomous-driving-demonstrations
    title: "EIN Presswire: Autoware Foundation surpasses 100 members (2025-06-03)"
  - id: awf-20
    resource: https://autoware.org/autoware-foundation-2-0-growing-together-toward-scalable-autonomy/
    title: "Autoware: Autoware Foundation 2.0"
  - id: awf-neolix
    resource: https://www.prnewswire.com/news-releases/neolix-technologies-joins-autoware-foundation-as-premium-member-to-deliver-fully-commercialized-autonomous-driving-solutions-to-the-ecosystem-302654988.html
    title: "PR Newswire: Neolix joins Autoware Foundation as premium member (2026-01)"
  - id: awf-news
    resource: https://autoware.org/category/announcements/
    title: "Autoware announcements (Renesas top-tier membership Sept 2026; NATIX Apr 2026; CADA Dec 2025)"
  - id: osra-awf
    resource: https://autoware.org/open-source-robotics-alliance-joins-the-autoware-foundation/
    title: "Autoware: Open Source Robotics Alliance joins the Autoware Foundation"
  - id: aw-gh
    resource: https://github.com/autowarefoundation/autoware
    title: "Autoware GitHub (1.7.0 Feb 2026; 1.8.0 May 2026; 1.9.0 Jul 2026)"
---

# Summary
Autoware is the leading **foundation-governed** open AV stack and is **growing**. In June 2025 the Foundation announced it had passed **100 member organisations**, with 50+ university centres of excellence, under an "Autoware Foundation 2.0" restructuring with more full-time contributors.[^awf-100][^awf-20] New members followed: Neolix as premium member (Jan 2026), NATIX (Apr 2026), and Renesas at the highest tier (Sept 2026).[^awf-neolix][^awf-news] The OSRA (ROS steward) also joined.[^osra-awf] The repo shipped 1.7 (Feb 2026), 1.8 (May 2026) and 1.9 (Jul 2026).[^aw-gh] Verdict: **growing**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-03 | 100+ members; E2E demos announced[^awf-100] | OSS | + |
| W9 | 2026-01 | Neolix joins as premium member[^awf-neolix] | OSS | + |
| W6 | 2026-05-04 | Autoware 1.8.0[^aw-gh] | OSS | + |
| W3 | 2026-07-16 | Autoware 1.9.0[^aw-gh] | OSS | + |
| W3 | 2026-09 | Renesas joins at highest tier[^awf-news] | OSS | + |

# OSS successes
- Neutral governance attracts chipmakers and Chinese and Japanese AV firms alike.[^awf-news]

# OSS failures / risks
- Production deployments are mostly low-speed or geofenced, and the stack competes with end-to-end learned approaches (openpilot, Tesla).

# Business successes
- n/a (member-funded; Tier IV is the main commercial user).

# Business failures / risks
- n/a.

# By window
## W3
- 1.9.0; Renesas membership.[^aw-gh][^awf-news]
## W6
- 1.8.0; NATIX joins.[^aw-gh][^awf-news]
## W9
- 1.7.0; Neolix joins.[^aw-gh][^awf-neolix]
## W12
- CADA joins (Dec 2025).[^awf-news]
## W24
- 100-member milestone.[^awf-100]

# Lessons
- Automotive OSS grows through consortia and membership tiers, not through stars.

# Related
- [ROS 2](/projects/hardware-embedded/ros-2.md), [Eclipse S-CORE](/projects/hardware-embedded/eclipse-s-core.md), [openpilot](/projects/hardware-embedded/openpilot.md)

[^awf-100]: EIN Presswire, 2025-06-03.
[^awf-20]: Autoware Foundation.
[^awf-neolix]: PR Newswire.
[^awf-news]: Autoware announcements.
[^osra-awf]: Autoware Foundation.
[^aw-gh]: GitHub releases API.
