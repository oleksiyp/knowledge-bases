---
type: Event
title: OpenTitan open-source root of trust ships in commercial Chromebooks
description: "On Mar 4, 2026 Google announced that OpenTitan, the open-source RISC-V silicon root of trust built with lowRISC, is shipping in commercially available Chromebooks via Nuvoton-made chips, the first production deployment of a commercial-grade open secure chip."
event_kind: release
date: 2026-03-04
window: W9
impact: positive
projects: [projects/hardware-embedded/opentitan]
organizations: [organizations/lowrisc]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: google-ot-prod
    resource: https://opensource.googleblog.com/2026/03/opentitan-shipping-in-production.html
    title: "Google Open Source Blog: OpenTitan shipping in production (2026-03-04)"
  - id: lowrisc-chromebooks
    resource: https://lowrisc.org/news/opentitan-ships-in-chromebooks-first-production-deployment/
    title: "lowRISC: OpenTitan ships in Chromebooks"
---

# What happened
Google announced that OpenTitan "Earlgrey" silicon, produced by Nuvoton, is in commercial Chromebooks, with datacenter deployment expected later in 2026.[^google-ot-prod][^lowrisc-chromebooks]

# Why it matters
It is proof that open-source hardware can reach commercial security grade: >90% coverage, 40k+ nightly tests, and post-quantum (SLH-DSA) secure boot.[^google-ot-prod]

# Outcome so far
Second-generation work with ML-DSA/ML-KEM is under way. The datacenter rollout was not yet confirmed as of Oct 2026.[^google-ot-prod]

# Related
- [OpenTitan](/projects/hardware-embedded/opentitan.md), [lowRISC](/organizations/lowrisc.md)

[^google-ot-prod]: Google Open Source Blog.
[^lowrisc-chromebooks]: lowRISC.
