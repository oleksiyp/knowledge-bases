---
type: Organization
title: Efabless
description: "Open-silicon platform company (chipIgnite shuttles, OpenLane maintenance, Google-sponsored Open MPW). It shut down on March 1, 2025 after failing to close a Series B, stranding Tiny Tapeout shuttles; ChipFoundry later bought its IP (Sept 2025)."
resource: https://efabless.com
tags: [open-silicon, shutdown, eda, foundry-services]
org_kind: coss-startup
hq: USA
funding: { total_usd: "unverified", last_round: "Series B (failed to close)", last_round_date: 2025-02, valuation_usd: "n/a" }
business_verdict: failed
projects: [projects/hardware-embedded/openroad, projects/hardware-embedded/tiny-tapeout]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tt-efabless
    resource: https://tinytapeout.com/news/efabless-shutsdown/
    title: "Tiny Tapeout: Efabless shuts down (2025-03-01)"
  - id: hackster-tt
    resource: https://www.hackster.io/news/open-source-silicon-project-tiny-tapeout-hits-trouble-as-efabless-shuts-its-doors-9ac7fab1649d
    title: "Hackster: Tiny Tapeout hits trouble as Efabless shuts its doors"
  - id: chipfoundry-assets
    resource: https://www.semiconductor-digest.com/chipfoundry-acquires-efabless-assets-to-propel-custom-silicon-innovation/
    title: "Semiconductor Digest: ChipFoundry acquires Efabless assets"
  - id: fossi-librelane
    resource: https://fossi-foundation.org/blog/2025-08-17-librelane
    title: "FOSSi Foundation: LibreLane released (2025-08-17)"
---

# Summary
Efabless ran the first open-source silicon shuttles, hosted community channels, maintained OpenLane, and sold chipIgnite multi-project-wafer runs.[^tt-efabless] It **shut down on March 1, 2025** after failing to close a Series B.[^tt-efabless][^hackster-tt] In September 2025 ChipFoundry (Umbralogic Technologies), started by ex-Efabless staff, acquired its IP, including 15 issued patents.[^chipfoundry-assets] OpenLane 2 continues as LibreLane at the FOSSi Foundation.[^fossi-librelane]

# Business timeline
| Date | Event |
|---|---|
| 2025-03-01 | Shuts down operations[^tt-efabless] |
| 2025-08-17 | OpenLane 2 continues as LibreLane (FOSSi)[^fossi-librelane] |
| 2025-09 | ChipFoundry acquires Efabless IP and assets[^chipfoundry-assets] |

# Monetization model
Paid MPW shuttles (chipIgnite), design marketplace; subsidised Open MPW (Google).

# Successes
- Seeded the open-PDK/open-shuttle ecosystem that outlived it.[^fossi-librelane]

# Failures / risks
- Thin-margin services business that depended on sponsors and VC. It failed when funding dried up.[^hackster-tt]

# Related
- [OpenROAD](/projects/hardware-embedded/openroad.md), [Tiny Tapeout](/projects/hardware-embedded/tiny-tapeout.md), [Event: Efabless shuts down](/events/2025-03-efabless-shuts-down.md)

[^tt-efabless]: Tiny Tapeout, 2025-03-01.
[^hackster-tt]: Hackster.io.
[^chipfoundry-assets]: Semiconductor Digest.
[^fossi-librelane]: FOSSi Foundation.
