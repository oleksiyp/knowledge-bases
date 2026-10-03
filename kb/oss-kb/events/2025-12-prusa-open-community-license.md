---
type: Event
title: Prusa releases CORE One CAD under a non-OSI 'Open Community License'
description: "On Dec 19, 2025 Prusa Research published CORE One CAD files under its new OCL, which allows study, modification and spare parts but bans selling machines or remixes. It followed Josef Průša's Aug 2025 declaration that open-hardware desktop 3D printing is 'dead'."
event_kind: license-change
date: 2025-12-19
window: W12
impact: mixed
projects: [projects/hardware-embedded/prusaslicer]
organizations: [organizations/prusa-research]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: prusa-ocl
    resource: https://blog.prusa3d.com/core-one-cad-files-release-under-the-new-open-community-license-ocl_127290/
    title: "Prusa blog: CORE One CAD under OCL (2025-12-19)"
  - id: toms-ocl
    resource: https://www.tomshardware.com/3d-printing/prusa-research-introduces-the-open-community-license-to-protect-open-source-3d-printing-hardware-new-rules-aimed-at-addressing-industry-abuses
    title: "Tom's Hardware: Prusa introduces the Open Community License"
  - id: make-ocl
    resource: https://makezine.com/article/maker-news/maker-community-responds-to-prusas-new-open-community-license
    title: "Make: Maker community responds to Prusa's OCL"
  - id: hackaday-dead
    resource: https://hackaday.com/2025/08/13/josef-prusa-warns-open-hardware-3d-printing-is-dead/
    title: "Hackaday: Josef Prusa warns open hardware 3D printing is dead (2025-08-13)"
---

# What happened
Prusa released the complete CORE One / CORE One L frame CAD under the Open Community License. OCL includes an explicit patent grant, an anti-AI-data-mining clause and a right-to-repair clause, and forbids commercial sale of complete machines without a separate agreement.[^prusa-ocl][^toms-ocl]

# Why it matters
The company that defined open-hardware 3D printing moved to source-available hardware, citing Chinese patent abuse and cloning.[^hackaday-dead] PrusaSlicer and the firmware remain GPL/AGPL.[^prusa-ocl]

# Outcome so far
Makers split. Some welcomed the transparency; others criticised the use of "open" for a non-OSI license.[^make-ocl]

# Related
- [Prusa Research](/organizations/prusa-research.md), [PrusaSlicer](/projects/hardware-embedded/prusaslicer.md)

[^prusa-ocl]: Prusa blog.
[^toms-ocl]: Tom's Hardware.
[^make-ocl]: Make: magazine.
[^hackaday-dead]: Hackaday.
