---
type: OSS Project
title: OpenTitan
description: "Open-source silicon root of trust (RISC-V based) led by lowRISC with Google. It reached commercial production in 2026: Nuvoton-made Earlgrey chips are shipping in Chromebooks, with Google datacenter deployment to follow. This is the strongest proof yet that open hardware can meet commercial security grades."
resource: https://opentitan.org
tags: [open-hardware, security, root-of-trust, risc-v, post-quantum, nonprofit]
domain: hardware-embedded
license: Apache-2.0
license_history: ["Apache-2.0 (2019-)"]
governance: foundation
steward: lowRISC C.I.C.
backing_orgs: [organizations/lowrisc]
metrics:
  github_stars: { value: 3674, as_of: 2026-10-03 }
  contributors: { value: "275+", as_of: 2026-03-04 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: google-ot-prod
    resource: https://opensource.googleblog.com/2026/03/opentitan-shipping-in-production.html
    title: "Google Open Source Blog: OpenTitan shipping in production (2026-03-04)"
    author: org:google
  - id: lowrisc-chromebooks
    resource: https://lowrisc.org/news/opentitan-ships-in-chromebooks-first-production-deployment/
    title: "lowRISC: OpenTitan ships in Chromebooks — first production deployment"
  - id: heise-ot
    resource: https://www.heise.de/en/news/Open-and-quantum-safe-RISC-V-security-chip-OpenTitan-for-Chromebooks-10274833.html
    title: "heise: Open and quantum-safe RISC-V security chip OpenTitan for Chromebooks"
  - id: hn-fab
    resource: https://news.ycombinator.com/item?id=42972625
    title: "HN: Fabrication begins for production OpenTitan silicon (Feb 2025)"
  - id: ot-gh
    resource: https://github.com/lowRISC/opentitan
    title: OpenTitan GitHub repository
---

# Summary
OpenTitan is open hardware's flagship **success** of the period. Google and lowRISC started it in 2018. In March 2026 Google announced that the first commercial OpenTitan part, made by Nuvoton, ships in commercially available Chromebooks, and that datacenter deployment would follow later in 2026.[^google-ot-prod][^lowrisc-chromebooks] The Earlgrey design uses SLH-DSA (SPHINCS+) for post-quantum secure boot, and Google reports >90% functional and code coverage with 40k+ nightly tests.[^google-ot-prod] The project has 275+ contributors, 29,200+ commits and ~3.7k GitHub stars.[^google-ot-prod][^ot-gh] There is no direct business. Value flows to silicon vendors (Nuvoton) and adopters (Google). Verdict: **thriving**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-17 | Earlgrey-PROD-M6 milestone tag[^ot-gh] | OSS | + |
| W24 | 2025-02 | Fabrication of production silicon begins (HN discussion)[^hn-fab] | OSS | + |
| W9 | 2026-03-04 | Google: OpenTitan shipping in commercial Chromebooks; Nuvoton is first producer[^google-ot-prod][^lowrisc-chromebooks] | OSS/Business | + |
| W6 | 2026-06-02 | devbundle-2026-06-02 release[^ot-gh] | OSS | + |

# OSS successes
- The first open-source secure chip with commercial-grade verification to ship in volume.[^google-ot-prod]
- Post-quantum ready: SLH-DSA secure boot now, with ML-DSA/ML-KEM in the second generation.[^google-ot-prod][^heise-ot]
- Its IP is reused in [Caliptra](/projects/hardware-embedded/caliptra.md), the datacenter RoT standard.

# OSS failures / risks
- Development is dominated by Google and lowRISC. Seven years from launch to product shows how slow open silicon is.[^google-ot-prod]

# Business successes
- Nuvoton commercialises the design, showing that a permissive license plus a shared verification investment can carry a design to market.[^lowrisc-chromebooks]

# Business failures / risks
- lowRISC is a nonprofit that relies on member and Google funding. No standalone revenue model has been disclosed.

# By window
## W3
- No notable events found (datacenter deployment, announced for "later in 2026", not yet confirmed).
## W6
- Routine dev bundle releases.[^ot-gh]
## W9
- Production shipping in Chromebooks announced (Mar 4).[^google-ot-prod]
## W12
- No notable events found.
## W24
- Production silicon fabrication begins (early 2025).[^hn-fab]

# Lessons
- Open hardware works when a hyperscaler pays for verification, the expensive part. The RTL itself is the cheap part.
- Security is the best wedge for open silicon, because transparency is itself the selling point.

# Related
- [lowRISC](/organizations/lowrisc.md), [Caliptra](/projects/hardware-embedded/caliptra.md), [RISC-V](/projects/hardware-embedded/risc-v.md)
- [Event: OpenTitan ships in Chromebooks](/events/2026-03-opentitan-ships-in-chromebooks.md)

[^google-ot-prod]: Google Open Source Blog, 2026-03-04.
[^lowrisc-chromebooks]: lowRISC news.
[^heise-ot]: heise online.
[^hn-fab]: Hacker News, Feb 2025.
[^ot-gh]: GitHub (stars/releases via API, 2026-10-03).
