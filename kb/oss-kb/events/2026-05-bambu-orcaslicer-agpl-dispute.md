---
type: Event
title: Bambu Lab's legal threat against an OrcaSlicer fork triggers AGPL backlash
description: "In May 2026 Bambu Lab pressured developer Paweł Jarczak to take down an OrcaSlicer fork restoring direct printer networking; the Streisand effect, Josef Prusa's AGPL-violation claims and a Software Freedom Conservancy response (May 18) followed."
event_kind: lawsuit
date: 2026-05-12
window: W6
impact: negative
projects: []
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: geerling-bambu
    resource: https://www.jeffgeerling.com/blog/2026/bambu-lab-abusing-open-source-social-contract/
    title: "Jeff Geerling: Bambu Lab is abusing the open source social contract (2026-05-12)"
  - id: sfc-bambu
    resource: https://sfconservancy.org/news/2026/may/18/bambu-studio-3d-printer-agpl-violation-response/
    title: "Software Freedom Conservancy: Comprehensive response to Bambu's AGPLv3 violations (2026-05-18)"
  - id: verge-bambu
    resource: https://www.theverge.com/tech/931532/bambu-agpl-pawel-jarczak-open-source-threat-dmca-github
    title: "The Verge: 'F*** you, Bambu': How one private message could change 3D printing (2026-05)"
  - id: nbc-backtrack
    resource: https://www.notebookcheck.net/Bambu-Lab-backtracks-after-SFC-accuses-company-of-AGPL-violations-and-legal-threats.1303904.0.html
    title: "Notebookcheck: Bambu Lab backtracks after SFC accuses company of AGPL violations and legal threats (2026-05-23)"
  - id: fulu-fork
    resource: https://github.com/FULU-Foundation/OrcaSlicer-bambulab
    title: "FULU Foundation: OrcaSlicer-bambulab fork mirror"
  - id: hw-3dpi-connect
    resource: https://3dprintingindustry.com/news/bambu-lab-controversy-continues-orca-slicer-rejects-new-bambu-connect-236023/
    title: "3D Printing Industry: Orca Slicer rejects new Bambu Connect (2025-01)"
  - id: hw-hackaday-dead
    resource: https://hackaday.com/2025/08/13/josef-prusa-warns-open-hardware-3d-printing-is-dead/
    title: "Hackaday: Josef Prusa warns open hardware 3D printing is dead (2025-08-13)"
---

# What happened
Bambu Lab issued legal threats against Paweł Jarczak over OrcaSlicer-bambulab. Bambu accused the fork of impersonation because it let Bambu printers work without routing jobs through Bambu Connect, even though it reused Bambu Studio's own AGPL code.[^geerling-bambu] The takedown backfired. Mirrors appeared (FULU Foundation), and Josef Prusa and others argued that Bambu Studio, itself a fork of AGPL PrusaSlicer, violated the AGPL.[^fulu-fork][^verge-bambu] On May 18, 2026 the SFC alleged two violations: missing corresponding source for the proprietary networking library, and imposing further restrictions on users. It launched a programme to reverse-engineer the library, maintain the fork, and build a replacement slicer.[^sfc-bambu]

# Why it matters
It shows copyleft being enforced in the hardware world. AGPL lineage is turning into leverage for communities against companies that build on forks.

# Outcome so far
Notebookcheck reported on May 23 that Bambu was backtracking, though other coverage said it stood by its position.[^nbc-backtrack] The SFC programme is fundraising ($250,007 target).[^sfc-bambu]

# Related
- [Licensing & forks domain review](/domains/licensing-forks.md)

[^geerling-bambu]: Jeff Geerling — https://www.jeffgeerling.com/blog/2026/bambu-lab-abusing-open-source-social-contract/
[^sfc-bambu]: SFC — https://sfconservancy.org/news/2026/may/18/bambu-studio-3d-printer-agpl-violation-response/
[^verge-bambu]: The Verge — https://www.theverge.com/tech/931532/bambu-agpl-pawel-jarczak-open-source-threat-dmca-github
[^nbc-backtrack]: Notebookcheck — https://www.notebookcheck.net/Bambu-Lab-backtracks-after-SFC-accuses-company-of-AGPL-violations-and-legal-threats.1303904.0.html
[^fulu-fork]: GitHub — https://github.com/FULU-Foundation/OrcaSlicer-bambulab

## Additional notes (hardware-embedded)
- Background: the dispute goes back to January 2025, when Bambu introduced authorisation firmware and the "Bambu Connect" middleware and OrcaSlicer declined to adopt it.[^hw-3dpi-connect] Josef Průša's August 2025 "open hardware desktop 3D printing is dead" essay framed the wider fight between Chinese OEMs and the open-hardware tradition.[^hw-hackaday-dead]
- Domain files: [OrcaSlicer](/projects/hardware-embedded/orcaslicer.md), [PrusaSlicer](/projects/hardware-embedded/prusaslicer.md), [Prusa Research](/organizations/prusa-research.md), [Domain review](/domains/hardware-embedded.md).

[^hw-3dpi-connect]: 3D Printing Industry, Jan 2025.
[^hw-hackaday-dead]: Hackaday, 2025-08-13.
