---
type: OSS Project
title: PrusaSlicer (and Prusa open hardware)
description: "AGPL-3.0 slicer whose code lineage runs through Bambu Studio and OrcaSlicer, from Prusa Research, the original open-hardware 3D-printer company. Prusa kept software and firmware GPL but retreated on hardware: Josef Prusa declared open-hardware desktop 3D printing 'dead' (Aug 2025) and released Core One CAD under a non-OSI 'Open Community License' (Dec 2025)."
resource: https://github.com/prusa3d/PrusaSlicer
tags: [3d-printing, slicer, agpl, open-hardware, license-change, china-competition]
domain: hardware-embedded
license: AGPL-3.0
license_history: ["AGPL-3.0 (slicer)", "Hardware designs: GPL/CC historically → Open Community License (OCL, non-OSI) for CORE One (2025-12)"]
governance: single-vendor
steward: Prusa Research
backing_orgs: [organizations/prusa-research]
metrics:
  github_stars: { value: 9382, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: struggling
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: hackaday-dead
    resource: https://hackaday.com/2025/08/13/josef-prusa-warns-open-hardware-3d-printing-is-dead/
    title: "Hackaday: Josef Prusa warns open hardware 3D printing is dead (2025-08-13)"
  - id: toms-dead
    resource: https://www.tomshardware.com/3d-printing/prusa-ceo-declares-that-open-hardware-desktop-3d-printing-is-dead-cites-rise-of-chinas-government-subsidies-countrys-permissive-patent-system
    title: "Tom's Hardware: Prusa CEO declares open hardware desktop 3D printing is dead"
  - id: prusa-ocl
    resource: https://blog.prusa3d.com/core-one-cad-files-release-under-the-new-open-community-license-ocl_127290/
    title: "Prusa blog: Open-sourcing CORE One CAD files under the new Open Community License (2025-12-19)"
  - id: make-ocl
    resource: https://makezine.com/article/maker-news/maker-community-responds-to-prusas-new-open-community-license
    title: "Make: Maker community responds to Prusa's new Open Community License"
  - id: ps-gh
    resource: https://github.com/prusa3d/PrusaSlicer
    title: "PrusaSlicer GitHub (2.9.6 2026-06-25; 3.0.0-alpha12 2026-09-21)"
  - id: krasia-bambu
    resource: https://www.kr-asia.com/pulses/161999
    title: "KrASIA: Bambu Lab reaches RMB 10 billion in revenue (2025)"
  - id: sfc-bambu
    resource: https://sfconservancy.org/news/2026/may/18/bambu-studio-3d-printer-agpl-violation-response/
    title: "SFC: Comprehensive response to Bambu's AGPLv3 violations (2026-05-18)"
---

# Summary
Prusa is the domain's clearest **open-hardware retreat**. In Aug 2025 Josef Průša declared "open hardware desktop 3D printing is dead". He blamed Chinese "patent spam" (e.g. an Anycubic US patent resembling Prusa's MMU1) and state subsidies since 3D printing was labelled a strategic industry in 2020.[^hackaday-dead][^toms-dead] In Dec 2025 Prusa published CORE One CAD under a new **Open Community License**. OCL allows study, modification and spare-parts manufacturing but bans selling complete machines or remixes without a deal, and Prusa itself says it is not open source. **PrusaSlicer and the firmware stay GPL/AGPL**.[^prusa-ocl][^make-ocl] PrusaSlicer keeps shipping (2.9.6 in Jun 2026; 3.0 alphas since Sept 2026).[^ps-gh] Its AGPL lineage became leverage in 2026, when the SFC accused Bambu Studio, a PrusaSlicer fork, of AGPL violations.[^sfc-bambu] Meanwhile Bambu Lab reached ~RMB 10B in 2025 revenue.[^krasia-bambu] Verdict: OSS **contested**, business **struggling** relative to Chinese rivals (Prusa financials not verified).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-13 | Průša: "open hardware desktop 3D printing is dead"[^hackaday-dead] | OSS | − |
| W12 | 2025-12-19 | CORE One CAD released under non-OSI Open Community License[^prusa-ocl] | OSS | ± |
| W6 | 2026-05-18 | SFC alleges Bambu Studio (PrusaSlicer fork) violates AGPL[^sfc-bambu] | OSS | + |
| W6 | 2026-06-25 | PrusaSlicer 2.9.6[^ps-gh] | OSS | + |
| W3 | 2026-09-21 | PrusaSlicer 3.0.0-alpha12[^ps-gh] | OSS | + |

# OSS successes
- AGPL slicer lineage underpins the entire consumer 3D-printing market, including Bambu Studio and OrcaSlicer.[^sfc-bambu]

# OSS failures / risks
- Hardware openness abandoned in favour of a source-available license.[^prusa-ocl][^make-ocl]

# Business successes
- Still an independent European manufacturer with a loyal base (financials unverified).

# Business failures / risks
- Squeezed by Bambu's scale (RMB 10B revenue).[^krasia-bambu]

# By window
## W3
- PrusaSlicer 3.0 alphas.[^ps-gh]
## W6
- Bambu AGPL dispute; 2.9.6.[^sfc-bambu][^ps-gh]
## W9
- No notable events found.
## W12
- OCL release of CORE One.[^prusa-ocl]
## W24
- "Open hardware is dead" essay.[^hackaday-dead]

# Lessons
- Copyleft software lasted. Open hardware designs did not survive low-cost, patent-aggressive competition.

# Related
- [Prusa Research](/organizations/prusa-research.md), [OrcaSlicer](/projects/hardware-embedded/orcaslicer.md), [Klipper](/projects/hardware-embedded/klipper.md)
- [Event: Prusa Open Community License](/events/2025-12-prusa-open-community-license.md), [Event: Bambu/OrcaSlicer AGPL dispute](/events/2026-05-bambu-orcaslicer-agpl-dispute.md)

[^hackaday-dead]: Hackaday, 2025-08-13.
[^toms-dead]: Tom's Hardware.
[^prusa-ocl]: Prusa blog, 2025-12-19.
[^make-ocl]: Make: magazine.
[^ps-gh]: GitHub releases API.
[^krasia-bambu]: KrASIA.
[^sfc-bambu]: Software Freedom Conservancy, 2026-05-18.
