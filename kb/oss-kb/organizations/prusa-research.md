---
type: Organization
title: Prusa Research
description: "Czech 3D-printer maker that popularised open-hardware RepRap-derived printers and the AGPL PrusaSlicer. In 2025 it declared open-hardware 3D printing 'dead' amid Chinese patent and price pressure and moved new hardware designs to a non-OSI 'Open Community License', keeping software and firmware GPL."
resource: https://www.prusa3d.com
tags: [3d-printing, open-hardware, agpl, europe, license-change]
org_kind: coss-startup
hq: Prague, Czech Republic
funding: { total_usd: "bootstrapped (no VC disclosed)", last_round: "n/a", valuation_usd: "n/a" }
business_verdict: struggling
projects: [projects/hardware-embedded/prusaslicer]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: hackaday-dead
    resource: https://hackaday.com/2025/08/13/josef-prusa-warns-open-hardware-3d-printing-is-dead/
    title: "Hackaday: Josef Prusa warns open hardware 3D printing is dead (2025-08-13)"
  - id: prusa-ocl
    resource: https://blog.prusa3d.com/core-one-cad-files-release-under-the-new-open-community-license-ocl_127290/
    title: "Prusa blog: CORE One CAD under the Open Community License (2025-12-19)"
  - id: krasia-bambu
    resource: https://www.kr-asia.com/pulses/161999
    title: "KrASIA: Bambu Lab reaches RMB 10 billion in revenue"
  - id: wiki-prusa
    resource: https://en.wikipedia.org/wiki/Prusa_Research
    title: "Wikipedia: Prusa Research (FY2023 revenue Kč2.81B)"
---

# Summary
Prusa Research is the emblem of open hardware's commercial retreat. Its FY2023 revenue was ~Kč2.81B per Wikipedia (more recent financials unverified).[^wiki-prusa] Josef Průša's Aug 2025 essay blamed Chinese state subsidies and cheap "patent spam" for making open hardware untenable.[^hackaday-dead] In Dec 2025 Prusa released CORE One CAD under its new **OCL**, which permits study, modification and spare parts but not sales of complete machines. Prusa itself says OCL is not open source, while PrusaSlicer and firmware stay GPL.[^prusa-ocl] Its competitor Bambu Lab reportedly hit RMB 10B revenue in 2025.[^krasia-bambu] We class the business as **struggling** relative to rivals. No layoffs or losses were verified, so this is a relative, not absolute, verdict.

# Business timeline
| Date | Event |
|---|---|
| 2025-08 | "Open hardware desktop 3D printing is dead" essay[^hackaday-dead] |
| 2025-12-19 | CORE One CAD released under OCL[^prusa-ocl] |
| 2026-05 | Josef Prusa publicly backs AGPL claims against Bambu Studio (see event) |

# Monetization model
Printer and filament sales; Printables community; software free (GPL/AGPL).

# Successes
- Keeping software copyleft created leverage over forks (Bambu Studio).[^prusa-ocl]

# Failures / risks
- Loss of open-hardware identity; scale disadvantage versus Shenzhen OEMs.[^krasia-bambu]

# Related
- [PrusaSlicer](/projects/hardware-embedded/prusaslicer.md), [Event: Prusa OCL](/events/2025-12-prusa-open-community-license.md), [Event: Bambu/OrcaSlicer AGPL dispute](/events/2026-05-bambu-orcaslicer-agpl-dispute.md)

[^hackaday-dead]: Hackaday.
[^prusa-ocl]: Prusa blog.
[^krasia-bambu]: KrASIA.
[^wiki-prusa]: Wikipedia.
