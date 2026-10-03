---
type: OSS Project
title: OpenROAD (and the open EDA flow)
description: "DARPA-seeded open-source RTL-to-GDSII chip-design flow (OpenROAD, with Yosys and OpenLane/LibreLane). The open-silicon flow survived Efabless's March 2025 collapse via a FOSSi-hosted fork (LibreLane). In July 2026 Siemens agreed to buy Precision Innovations, OpenROAD's main commercial steward."
resource: https://github.com/The-OpenROAD-Project/OpenROAD
tags: [open-eda, chip-design, academic, open-silicon, acquisition]
domain: hardware-embedded
license: BSD-3-Clause
license_history: ["BSD-3-Clause (2019-)"]
governance: academic
steward: UC San Diego / Precision Innovations (Siemens, pending)
backing_orgs: [organizations/efabless]
metrics:
  github_stars: { value: 3148, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: acquired
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ew-siemens-pi
    resource: https://www.electronicsweekly.com/news/business/siemens-buys-precision-innovations-2026-07/
    title: "Electronics Weekly: Siemens buys Precision Innovations (2026-07)"
  - id: eng-siemens-pi
    resource: https://www.engineering.com/siemens-to-acquire-precision-innovations/
    title: "Engineering.com: Siemens to acquire Precision Innovations"
  - id: vlsi-kr
    resource: https://www.vlsi.kr/en/siemens-precision-innovations-openroad-ai-eda-2026-en/
    title: "vlsi.kr: Siemens to acquire Precision Innovations — not an OpenROAD takeover"
  - id: fossi-librelane
    resource: https://fossi-foundation.org/blog/2025-08-17-librelane
    title: "FOSSi Foundation: Announcing the release of LibreLane (2025-08-17)"
  - id: tt-efabless
    resource: https://tinytapeout.com/news/efabless-shutsdown/
    title: "Tiny Tapeout: Efabless shuts down (2025-03-01)"
  - id: zta-2025
    resource: https://www.zerotoasiccourse.com/post/year_update_2025/
    title: "Zero to ASIC: Review of 2025 and goals for 2026"
  - id: or-gh
    resource: https://github.com/The-OpenROAD-Project/OpenROAD
    title: OpenROAD GitHub
---

# Summary
OpenROAD is the backbone of the open chip-design flow. It began in 2018 at UC San Diego with $17.2M of DARPA funding, and since 2019 Precision Innovations has supplied most of its engineering and user support.[^eng-siemens-pi] The two years brought a shock and a buyout. **Efabless**, which ran the open-shuttle programme and maintained OpenLane, shut down on March 1, 2025.[^tt-efabless] The community re-hosted OpenLane 2 at the FOSSi Foundation as **LibreLane**.[^fossi-librelane][^zta-2025] On July 20, 2026 **Siemens** signed to acquire Precision Innovations, closing expected in calendar Q3 2026.[^eng-siemens-pi][^ew-siemens-pi] Analysts read it as buying AI-driven chip planning built on OpenROAD, "not an OpenROAD takeover".[^vlsi-kr] Verdict: OSS **stable**. The business steward is **acquired**, leaving OpenROAD's upstream funding the key open question.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-01 | Efabless shuts down; OpenLane maintainer gone[^tt-efabless] | Business | − |
| W24 | 2025-08-17 | LibreLane (OpenLane 2 successor) released under FOSSi[^fossi-librelane] | OSS | + |
| W3 | 2026-07-20 | Siemens signs agreement to acquire Precision Innovations[^eng-siemens-pi][^ew-siemens-pi] | Business | ± |

# OSS successes
- The flow survived its main commercial host failing: LibreLane plus new foundry shuttles (ChipFoundry, wafer.space, IHP) kept open tapeouts running.[^zta-2025]
- Open PDKs (SKY130, GF180MCU, IHP SG13G2) plus OpenROAD let thousands of students tape out (see [Tiny Tapeout](/projects/hardware-embedded/tiny-tapeout.md)).

# OSS failures / risks
- Concentration: one small company did most of the engineering, and it now belongs to a Big-3 EDA vendor.[^eng-siemens-pi]
- Advanced-node support depends on proprietary PDKs and closed extensions.

# Business successes
- Precision Innovations' exit to Siemens validates open-core EDA as an acquisition path.[^ew-siemens-pi]

# Business failures / risks
- Efabless (open-shuttle marketplace) failed to close a Series B and shut down.[^tt-efabless]

# By window
## W3
- Siemens–Precision Innovations deal (Jul 20, 2026).[^eng-siemens-pi]
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Efabless shutdown (Mar 2025); LibreLane launch (Aug 2025).[^tt-efabless][^fossi-librelane]

# Lessons
- Government-seeded open tooling needs a commercial steward. When that steward is acquired, upstream continuity has to be negotiated explicitly.
- Neutral foundations (FOSSi) are the fallback that keeps a project alive when a corporate host dies.

# Related
- [Efabless](/organizations/efabless.md), [Tiny Tapeout](/projects/hardware-embedded/tiny-tapeout.md)
- [Event: Efabless shutdown](/events/2025-03-efabless-shuts-down.md), [Event: Siemens buys Precision Innovations](/events/2026-07-siemens-acquires-precision-innovations.md)

[^ew-siemens-pi]: Electronics Weekly, July 2026.
[^eng-siemens-pi]: Engineering.com.
[^vlsi-kr]: vlsi.kr analysis.
[^fossi-librelane]: FOSSi Foundation, 2025-08-17.
[^tt-efabless]: Tiny Tapeout, 2025-03-01.
[^zta-2025]: Zero to ASIC Course blog.
[^or-gh]: GitHub.
