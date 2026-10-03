---
type: OSS Project
title: Meshtastic
description: "GPL-3.0 off-grid LoRa mesh-messaging firmware for cheap ESP32/nRF52 radios. A grassroots hit with 2,000+ nodes at DEF CON events and a 2.7 UI overhaul, but in 2025–26 it faced a fast-growing rival, MeshCore, whose better routing displaced it in parts of Europe."
resource: https://meshtastic.org
tags: [lora, mesh, firmware, community, gpl, off-grid]
domain: hardware-embedded
license: GPL-3.0
license_history: ["GPL-3.0 (2020-)"]
governance: community
steward: "Meshtastic project (Meshtastic LLC holds trademark; Meshtastic Solutions commercial arm)"
backing_orgs: []
metrics:
  github_stars: { value: 8368, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mesh-gh
    resource: https://github.com/meshtastic/firmware
    title: "Meshtastic firmware GitHub (v2.7.26 stable 2026-06-24; 2.8.x pre-releases Aug–Oct 2026)"
  - id: mesh-27
    resource: https://meshtastic.org/blog/meshtastic-2-7-preview/
    title: "Meshtastic 2.7 Preview: UI overhaul (BaseUI)"
  - id: mesh-solutions
    resource: https://meshtastic.org/blog/introducing-meshtastic-solutions/
    title: "Meshtastic: Introducing Meshtastic Solutions (2024-10-23)"
  - id: mesh-oc
    resource: https://opencollective.com/meshtastic
    title: Meshtastic Open Collective
  - id: wiki-meshcore
    resource: https://en.wikipedia.org/wiki/MeshCore
    title: "Wikipedia: MeshCore"
  - id: hn-meshcore
    resource: https://news.ycombinator.com/item?id=48062296
    title: "HN thread linking MeshCore blog on why it forked (2026-04)"
---

# Summary
Meshtastic turned $20–40 LoRa boards into a global, off-grid text-messaging mesh. Its firmware has 8.4k stars,[^mesh-gh] its event firmware has connected 2,000+ nodes at DEF CON,[^mesh-27] and the 2.7 release brought the biggest UI overhaul in four years (BaseUI).[^mesh-27] Sustainability rests on a small Open Collective budget plus **Meshtastic Solutions** (Oct 2024), a commercial partner and certification arm kept separate from the project and from trademark holder Meshtastic LLC.[^mesh-solutions][^mesh-oc] The story of 2025–26 is **competition**. **MeshCore**, launched in 2025 with structured routing better suited to dense cities, grew fast, especially in the UK and the Netherlands.[^wiki-meshcore][^hn-meshcore] Verdict: **contested**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-23 | Meshtastic Solutions launched[^mesh-solutions] | Business | + |
| W24 | 2025 | MeshCore emerges as rival firmware on the same hardware[^wiki-meshcore] | OSS | − |
| W24 | 2025 | 2.7 preview with BaseUI; 2,000+ nodes at DEF CON[^mesh-27] | OSS | + |
| W6 | 2026-04 | MeshCore publishes its "why we forked" post; HN debate[^hn-meshcore] | OSS | − |
| W6 | 2026-06-24 | 2.7.26 stable; 2.8 pre-releases from Aug 2026[^mesh-gh] | OSS | + |

# OSS successes
- Huge hardware ecosystem (100+ devices) and broad grassroots adoption.[^mesh-oc]

# OSS failures / risks
- Flood routing scales poorly in dense areas, which is MeshCore's opening.[^wiki-meshcore]
- Supporting 100+ boards strains a volunteer team.[^mesh-oc]

# Business successes
- Certification and partner programmes give vendors a revenue-backed relationship.[^mesh-solutions]

# Business failures / risks
- Tiny project budget; reliance on hardware partners' goodwill.[^mesh-oc]

# By window
## W3
- 2.8.x pre-releases.[^mesh-gh]
## W6
- MeshCore fork debate; 2.7.26 stable.[^hn-meshcore][^mesh-gh]
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Meshtastic Solutions; MeshCore launch; 2.7 UI overhaul.[^mesh-solutions][^wiki-meshcore][^mesh-27]

# Lessons
- In firmware for commodity radios, switching costs are near zero, so a technically better rival can grow fast.

# Related
- [ESP-IDF](/projects/hardware-embedded/esp-idf.md), [Flipper Zero](/projects/hardware-embedded/flipper-zero.md)

[^mesh-gh]: GitHub releases API, 2026-10-03.
[^mesh-27]: Meshtastic blog.
[^mesh-solutions]: Meshtastic blog, 2024-10-23.
[^mesh-oc]: Open Collective.
[^wiki-meshcore]: Wikipedia.
[^hn-meshcore]: Hacker News.
