---
type: Event
title: FCC adds all foreign-made drones and critical components to the Covered List
description: "In Dec 2025, following a national-security determination, the FCC barred new equipment authorisations for foreign-produced drones and UAS critical components (including DJI). This opened the US market to domestic stacks built on open autopilots (PX4/ArduPilot)."
event_kind: other
date: 2025-12-22
window: W12
impact: mixed
projects: [projects/hardware-embedded/px4, projects/hardware-embedded/ardupilot]
organizations: [organizations/auterion]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: fcc-drones
    resource: https://dronelife.com/2025/12/22/fcc-adds-foreign-made-drones-and-components-to-covered-list-citing-national-security-risks/
    title: "DroneLife: FCC adds foreign-made drones and components to Covered List (2025-12-22)"
  - id: wiley-drones
    resource: https://www.wiley.law/alert-FCC-Issues-Exemptions-Clarifications-for-Sweeping-Prohibition-of-Foreign-Made-Drones
    title: "Wiley: FCC issues exemptions, clarifications for prohibition of foreign-made drones"
---

# What happened
The FCC added foreign-produced UAS and UAS critical components to its Covered List, blocking new equipment authorisations. Previously authorised models can still be used and sold.[^fcc-drones][^wiley-drones]

# Why it matters
US drone makers now need non-Chinese hardware and software. Open, auditable autopilots (PX4 in particular, BSD-licensed and Dronecode-governed) are the natural base.

# Outcome so far
Exemptions and conditional approvals followed.[^wiley-drones] The same template was applied to routers in March 2026 (see related event).

# Related
- [PX4](/projects/hardware-embedded/px4.md), [Event: FCC foreign routers](/events/2026-03-fcc-foreign-routers-covered-list.md)

[^fcc-drones]: DroneLife.
[^wiley-drones]: Wiley Rein.
