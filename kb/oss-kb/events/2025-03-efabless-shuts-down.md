---
type: Event
title: Efabless shuts down, stranding open-silicon shuttles
description: "Open-silicon platform Efabless ceased operations on March 1, 2025 after failing to close a Series B, stranding Tiny Tapeout chips; the community recovered via ChipFoundry, wafer.space, IHP and the FOSSi-hosted LibreLane."
event_kind: shutdown
date: 2025-03-01
window: W24
impact: negative
projects: [projects/hardware-embedded/openroad, projects/hardware-embedded/tiny-tapeout]
organizations: [organizations/efabless]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tt-efabless
    resource: https://tinytapeout.com/news/efabless-shutsdown/
    title: "Tiny Tapeout: Efabless shuts down (2025-03-01)"
  - id: hackster-tt
    resource: https://www.hackster.io/news/open-source-silicon-project-tiny-tapeout-hits-trouble-as-efabless-shuts-its-doors-9ac7fab1649d
    title: "Hackster: Tiny Tapeout hits trouble as Efabless shuts its doors"
  - id: zta-2025
    resource: https://www.zerotoasiccourse.com/post/year_update_2025/
    title: "Zero to ASIC: Review of 2025"
  - id: fossi-librelane
    resource: https://fossi-foundation.org/blog/2025-08-17-librelane
    title: "FOSSi: LibreLane released (2025-08-17)"
  - id: chipfoundry-assets
    resource: https://www.semiconductor-digest.com/chipfoundry-acquires-efabless-assets-to-propel-custom-silicon-innovation/
    title: "Semiconductor Digest: ChipFoundry acquires Efabless assets"
---

# What happened
Efabless, which ran chipIgnite and the open-MPW shuttles and maintained OpenLane, shut down "until further notice" on March 1, 2025 after a failed Series B.[^tt-efabless][^hackster-tt] Tiny Tapeout's TT08, TT09 and TT10 were stranded at various stages.[^tt-efabless]

# Why it matters
It showed that the open-silicon movement depended on a single, sponsor-fed company.

# Outcome so far
The movement recovered. Ex-staff founded ChipFoundry, which bought Efabless's IP in Sept 2025.[^chipfoundry-assets] wafer.space launched GF180MCU runs, OpenLane 2 continued as LibreLane under FOSSi, and Tiny Tapeout shipped 1,000+ designs on 12 chips across 3 fabs in 2025.[^fossi-librelane][^zta-2025]

# Related
- [Efabless](/organizations/efabless.md), [Tiny Tapeout](/projects/hardware-embedded/tiny-tapeout.md), [OpenROAD](/projects/hardware-embedded/openroad.md)

[^tt-efabless]: Tiny Tapeout.
[^hackster-tt]: Hackster.io.
[^zta-2025]: Zero to ASIC.
[^fossi-librelane]: FOSSi Foundation.
[^chipfoundry-assets]: Semiconductor Digest.
