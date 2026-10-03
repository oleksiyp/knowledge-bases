---
type: OSS Project
title: Tiny Tapeout
description: "Educational open-silicon programme that pools hundreds of small designs onto shared chips using open PDKs and the open EDA flow. Hit hard by Efabless's March 2025 shutdown (TT08–TT10 stranded), it recovered by shipping on IHP, ChipFoundry and wafer.space shuttles: a resilience success."
resource: https://tinytapeout.com
tags: [open-silicon, education, open-pdk, community]
domain: hardware-embedded
license: "Apache-2.0 (tooling/templates); designs under submitters' open licenses"
license_history: ["Open since launch (2022)"]
governance: community
steward: Tiny Tapeout (Matt Venn and team)
backing_orgs: [organizations/efabless]
metrics:
  designs_taped_out_2025: { value: "1000+ designs across 12 chips", as_of: 2025-12-31 }
oss_verdict: growing
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tt-efabless
    resource: https://tinytapeout.com/news/efabless-shutsdown/
    title: "Tiny Tapeout: Efabless shuts down — Tiny Tapeout will continue (2025-03-01)"
  - id: zta-2025
    resource: https://www.zerotoasiccourse.com/post/year_update_2025/
    title: "Zero to ASIC: Review of 2025 and goals for 2026"
  - id: tt-26a
    resource: https://tinytapeout.com/chips/ttsky26a/
    title: "Tiny Tapeout SKY 26a (submitted to ChipFoundry CI2605)"
  - id: tt-26b
    resource: https://tinytapeout.com/chips/ttsky26b/
    title: "Tiny Tapeout SKY 26b"
  - id: chipfoundry-assets
    resource: https://www.semiconductor-digest.com/chipfoundry-acquires-efabless-assets-to-propel-custom-silicon-innovation/
    title: "Semiconductor Digest: ChipFoundry acquires Efabless assets (2025-09)"
  - id: hackster-tt
    resource: https://www.hackster.io/news/open-source-silicon-project-tiny-tapeout-hits-trouble-as-efabless-shuts-its-doors-9ac7fab1649d
    title: "Hackster: Tiny Tapeout hits trouble as Efabless shuts its doors"
---

# Summary
Tiny Tapeout is the clearest **resilience story** in open hardware. When Efabless shut down on March 1, 2025, TT08 was awaiting packaging, TT09 was in fab and TT10 was paused. Refunds were promised if chips could not ship.[^tt-efabless][^hackster-tt] Within months the programme moved to IHP's 130nm process, ex-Efabless staff's new **ChipFoundry** SKY130 shuttle, and Tim Ansell's **wafer.space** GF180MCU run. By the end of 2025 it had sent over 1,000 designs across 12 chips to three fabs.[^zta-2025] ChipFoundry also bought Efabless's IP and patents (Sept 2025).[^chipfoundry-assets] In 2026 the TTSKY26a and 26b shuttles were submitted to ChipFoundry CI2605.[^tt-26a][^tt-26b] Verdict: **growing**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-01 | Efabless shuts down; TT08–TT10 stranded[^tt-efabless] | Business | − |
| W24 | 2025 | Moves to IHP, ChipFoundry, wafer.space; recovered designs packed onto TTIHP25a[^zta-2025] | OSS | + |
| W24 | 2025-09 | ChipFoundry acquires Efabless assets[^chipfoundry-assets] | Business | + |
| W9 | 2026-02-27 | TTSKY26a launched[^tt-26a] | OSS | + |
| W6 | 2026-04-25 | TTSKY26b launched; both to ChipFoundry CI2605[^tt-26b] | OSS | + |

# OSS successes
- Diversified away from a single fab partner, and now multi-foundry.[^zta-2025]
- "Cheap, NDA-free tapeouts" grew participation from high-schoolers to industry designers.[^zta-2025]

# OSS failures / risks
- Still dependent on a few small shuttle operators and on foundry goodwill.

# Business successes
- A self-funded, sustainable small business (sells tapeout slots and dev boards).

# Business failures / risks
- The Efabless dependency cost a year of delays and possible refunds.[^tt-efabless]

# By window
## W3
- No notable events found (shuttle results pending).
## W6
- TTSKY26b launch.[^tt-26b]
## W9
- TTSKY26a launch.[^tt-26a]
## W12
- No notable events found.
## W24
- Efabless collapse and recovery.[^tt-efabless][^zta-2025]

# Lessons
- Avoid single-vendor dependencies in open-hardware supply chains. Open PDKs made switching fabs possible.

# Related
- [OpenROAD](/projects/hardware-embedded/openroad.md), [Efabless](/organizations/efabless.md), [Event: Efabless shutdown](/events/2025-03-efabless-shuts-down.md)

[^tt-efabless]: Tiny Tapeout news, 2025-03-01.
[^zta-2025]: Zero to ASIC Course blog.
[^tt-26a]: Tiny Tapeout.
[^tt-26b]: Tiny Tapeout.
[^chipfoundry-assets]: Semiconductor Digest.
[^hackster-tt]: Hackster.io.
