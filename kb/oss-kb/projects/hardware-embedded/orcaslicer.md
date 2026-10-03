---
type: OSS Project
title: OrcaSlicer
description: "Community AGPL-3.0 slicer forked from Bambu Studio (itself from PrusaSlicer), now the most popular multi-brand slicer. It refused Bambu's Jan 2025 'Bambu Connect' authorization middleware and became the centre of the May 2026 AGPL fight in which the SFC accused Bambu Lab of violations."
resource: https://github.com/OrcaSlicer/OrcaSlicer
tags: [3d-printing, slicer, agpl, fork, community, right-to-repair]
domain: hardware-embedded
license: AGPL-3.0
license_history: ["AGPL-3.0 (inherited from Bambu Studio/PrusaSlicer/Slic3r)"]
governance: community
steward: OrcaSlicer community (founded by SoftFever)
backing_orgs: []
metrics:
  github_stars: { value: 15838, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: orca-gh
    resource: https://github.com/OrcaSlicer/OrcaSlicer
    title: "OrcaSlicer GitHub (v2.4.0 2026-06-20; v2.4.2 2026-07-07)"
  - id: 3dpi-connect
    resource: https://3dprintingindustry.com/news/bambu-lab-controversy-continues-orca-slicer-rejects-new-bambu-connect-236023/
    title: "3D Printing Industry: Orca Slicer rejects new Bambu Connect (2025-01)"
  - id: 3dpi-backlash
    resource: https://3dprintingindustry.com/news/bambu-lab-responds-to-backlash-over-new-firmware-update-235771/
    title: "3D Printing Industry: Bambu Lab responds to backlash over new firmware update (2025-01)"
  - id: sfc-bambu
    resource: https://sfconservancy.org/news/2026/may/18/bambu-studio-3d-printer-agpl-violation-response/
    title: "SFC: Comprehensive response to Bambu's AGPLv3 violations (2026-05-18)"
  - id: geerling-bambu
    resource: https://www.jeffgeerling.com/blog/2026/bambu-lab-abusing-open-source-social-contract/
    title: "Jeff Geerling: Bambu Lab is abusing the open source social contract (2026-05-12)"
---

# Summary
OrcaSlicer is the **community counterweight** to closed 3D-printer ecosystems. In Jan 2025 Bambu Lab announced firmware that gated LAN and cloud printing, motion and AMS control behind Bambu authorisation, routed through a new "Bambu Connect" app. OrcaSlicer's developer **declined to adopt Bambu Connect**, calling it of no benefit to users.[^3dpi-backlash][^3dpi-connect] In May 2026 Bambu's legal threats against an OrcaSlicer fork that restored direct printer networking backfired. The SFC alleged Bambu Studio violates the AGPL and launched a programme to maintain the fork.[^geerling-bambu][^sfc-bambu] OrcaSlicer itself, now under an `OrcaSlicer` GitHub org, shipped v2.4.0 (Jun 2026) and v2.4.2 (Jul 2026) and has ~15.8k stars.[^orca-gh] Verdict: **thriving**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-16 | Bambu authorisation firmware announced; backlash[^3dpi-backlash] | OSS | − |
| W24 | 2025-01 | OrcaSlicer rejects Bambu Connect[^3dpi-connect] | OSS | + |
| W6 | 2026-05-12/18 | Bambu vs fork; SFC AGPL allegations[^geerling-bambu][^sfc-bambu] | OSS | + |
| W6 | 2026-06-20 | OrcaSlicer v2.4.0[^orca-gh] | OSS | + |
| W3 | 2026-07-07 | v2.4.2[^orca-gh] | OSS | + |

# OSS successes
- Multi-vendor slicer with large community; copyleft enforcement now backed by the SFC.[^sfc-bambu]

# OSS failures / risks
- Printer-side lock-down (authorisation firmware) can neuter the slicer's features regardless of its license.[^3dpi-backlash]

# Business successes
- n/a.

# Business failures / risks
- n/a.

# By window
## W3
- v2.4.2.[^orca-gh]
## W6
- AGPL dispute; v2.4.0.[^sfc-bambu][^orca-gh]
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Bambu Connect controversy.[^3dpi-connect]

# Lessons
- Copyleft on the desktop side does not guarantee device-side freedom. Firmware authorisation is the new lock-in.

# Related
- [Event: Bambu/OrcaSlicer AGPL dispute](/events/2026-05-bambu-orcaslicer-agpl-dispute.md), [PrusaSlicer](/projects/hardware-embedded/prusaslicer.md), [Klipper](/projects/hardware-embedded/klipper.md)

[^orca-gh]: GitHub releases API, 2026-10-03.
[^3dpi-connect]: 3D Printing Industry, Jan 2025.
[^3dpi-backlash]: 3D Printing Industry, Jan 2025.
[^sfc-bambu]: SFC, 2026-05-18.
[^geerling-bambu]: Jeff Geerling, 2026-05-12.
