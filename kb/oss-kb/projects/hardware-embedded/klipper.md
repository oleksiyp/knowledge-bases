---
type: OSS Project
title: Klipper (and Marlin)
description: "GPL-3.0 3D-printer firmware that offloads motion planning to a Linux host; with the older Marlin, it is the open firmware layer of the hobby and many commercial printers. Klipper 0.13 (Apr 2025) added eddy-current probing and load cells, and the risk-tolerant Kalico fork emerged; Marlin continues as maintenance-mode stable."
resource: https://www.klipper3d.org
tags: [3d-printing, firmware, gpl, community, fork]
domain: hardware-embedded
license: GPL-3.0
license_history: ["GPL-3.0"]
governance: community
steward: Klipper project (Kevin O'Connor)
backing_orgs: []
metrics:
  github_stars: { value: 11924, as_of: 2026-10-03 }
  marlin_github_stars: { value: 17613, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: klipper-013
    resource: https://klipper.discourse.group/t/klipper-v0-13-0-release/22958
    title: "Klipper Discourse: Klipper v0.13.0 release (2025-04)"
  - id: klipper-releases
    resource: https://www.klipper3d.org/Releases.html
    title: Klipper release notes
  - id: kalico
    resource: https://github.com/KalicoCrew/kalico
    title: "Kalico (formerly Danger-Klipper) GitHub"
  - id: marlin-gh
    resource: https://github.com/MarlinFirmware/Marlin
    title: "Marlin GitHub (2.1.2.7 Jan 2026; 2.1.2.8 Jun 2026)"
  - id: klipper-gh
    resource: https://github.com/Klipper3d/klipper
    title: Klipper GitHub
---

# Summary
Klipper is the **stable** open firmware layer for hobby and prosumer 3D printing. **v0.13.0** (Apr 2025) added "sweeping" resonance testing, adaptive bed mesh, eddy-current probes, load-cell support and RP2350 support.[^klipper-013][^klipper-releases] The community-run **Kalico** fork (formerly Danger-Klipper) serves users who want riskier features the upstream won't merge, a healthy release valve rather than a schism.[^kalico] **Marlin** (17.6k stars) is in maintenance mode, with 2.1.2.x point releases in Jan and Jun 2026.[^marlin-gh] Verdict: **stable**. The strategic threat is closed authorisation firmware on market-leading printers (Bambu), not rival open firmware.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04 | Klipper v0.13.0[^klipper-013] | OSS | + |
| W9 | 2026-01-24 | Marlin 2.1.2.7[^marlin-gh] | OSS | + |
| W6 | 2026-06-24 | Marlin 2.1.2.8[^marlin-gh] | OSS | + |

# OSS successes
- Rapid hardware-feature support (probes, sensors, new MCUs).[^klipper-013]

# OSS failures / risks
- Single-maintainer leadership at the top; the fork exists partly because of a conservative merge policy.[^kalico]

# Business successes
- n/a.

# Business failures / risks
- n/a.

# By window
## W3
- No notable events found.
## W6
- Marlin 2.1.2.8.[^marlin-gh]
## W9
- Marlin 2.1.2.7.[^marlin-gh]
## W12
- No notable events found.
## W24
- Klipper 0.13.[^klipper-013]

# Lessons
- Friendly forks (Kalico) can relieve governance tension without splitting the user base.

# Related
- [PrusaSlicer](/projects/hardware-embedded/prusaslicer.md), [OrcaSlicer](/projects/hardware-embedded/orcaslicer.md)

[^klipper-013]: Klipper Discourse.
[^klipper-releases]: klipper3d.org.
[^kalico]: GitHub.
[^marlin-gh]: GitHub releases API.
[^klipper-gh]: GitHub.
