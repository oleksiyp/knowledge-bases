---
type: OSS Project
title: KiCad
description: "Leading open-source PCB/schematic EDA suite (GPL-3.0) under the Linux Foundation with KiCad Services Corp support. It kept an annual major-release cadence (v9 Feb 2025, v10 Mar 2026) and has become the de facto default for open hardware and many professional teams."
resource: https://www.kicad.org
tags: [eda, pcb, gpl, community, open-hardware-tooling]
domain: hardware-embedded
license: GPL-3.0-or-later
license_history: ["GPL (since 1992 origin)"]
governance: community
steward: KiCad project (Linux Foundation-hosted; KiCad Services Corporation provides commercial support)
backing_orgs: [organizations/linux-foundation]
metrics:
  github_stars_mirror: { value: 3003, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: kicad-rc10
    resource: https://www.kicad.org/blog/2026/02/KiCad-Version-10.0.0-Release-Candidate-1-Available/
    title: "KiCad: Version 10.0.0 RC1 available (2026-02)"
  - id: kicad-906
    resource: https://www.kicad.org/blog/2025/10/KiCad-9.0.6-Release/
    title: "KiCad 9.0.6 release (2025-10)"
  - id: kicad-gh
    resource: https://github.com/KiCad/kicad-source-mirror
    title: KiCad source mirror (10.0.0 tagged 2026-03-20; 10.0.6 on 2026-08-29)
  - id: te-kicad10
    resource: https://techexplorations.com/kicad/kicad-10-review-new-features-high-speed-tuning-variants-and-more/
    title: "Tech Explorations: KiCad 10 review"
  - id: kicad-lf
    resource: https://www.kicad.org/blog/2019/11/KiCad-Joins-the-Linux-Foundation/
    title: "KiCad joins the Linux Foundation (2019-11)"
  - id: wiki-kicad
    resource: https://en.wikipedia.org/wiki/KiCad
    title: "Wikipedia: KiCad (v9 released 2025-02-20)"
---

# Summary
KiCad is a quiet, consistent **success**. It shipped v9 on Feb 20, 2025[^wiki-kicad] and v10.0.0 on Mar 20, 2026 after an RC in February,[^kicad-rc10][^kicad-gh] with point releases roughly monthly through Aug 2026 (10.0.6).[^kicad-gh] v10 added time-domain length tuning, design variants, pin/gate swap and a graphical DRC rule editor, closing gaps with commercial tools for high-speed work.[^te-kicad10] There is no business drama: development is funded by donations (via the Linux Foundation, which has hosted KiCad since 2019, and CERN) and corporate sponsors, with KiCad Services Corporation offering paid support.[^kicad-lf] Verdict: **thriving**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-20 | KiCad 9.0 released[^wiki-kicad] | OSS | + |
| W12 | 2025-10 | 9.0.5/9.0.6 maintenance releases[^kicad-906] | OSS | + |
| W9 | 2026-03-20 | KiCad 10.0.0 released[^kicad-gh][^te-kicad10] | OSS | + |
| W3 | 2026-08-29 | 10.0.6 point release[^kicad-gh] | OSS | + |

# OSS successes
- A predictable annual major-release cadence and professional-grade features.[^te-kicad10]

# OSS failures / risks
- Small core team. Funding is donation-based.

# Business successes
- n/a. Hardware startups (Framework, Pine64-style boards, Meshtastic node makers) build on it, lowering the cost of open hardware.

# Business failures / risks
- None notable.

# By window
## W3
- 10.0.5 (Jul) and 10.0.6 (Aug) releases.[^kicad-gh]
## W6
- 10.0.3/10.0.4 releases.[^kicad-gh]
## W9
- KiCad 10 released.[^kicad-gh]
## W12
- 9.0.x maintenance.[^kicad-906]
## W24
- KiCad 9 released.[^wiki-kicad]

# Lessons
- Mature tooling with a neutral host and a steady cadence is the unglamorous foundation that open hardware depends on.

# Related
- [Domain review](/domains/hardware-embedded.md)

[^kicad-rc10]: KiCad blog.
[^kicad-906]: KiCad blog.
[^kicad-gh]: GitHub releases API, 2026-10-03.
[^te-kicad10]: Tech Explorations.
[^wiki-kicad]: Wikipedia.
[^kicad-lf]: KiCad blog, 2019-11.
