---
type: OSS Project
title: Caliptra
description: "Open-source silicon root-of-trust IP block for datacenter SoCs (CPUs, GPUs, SSD controllers) under the CHIPS Alliance (Linux Foundation). Backed by Microsoft, Google, AMD, NVIDIA and Samsung, it reached 2.0 (Jul 2025) and 2.1 (Oct 2025) with post-quantum crypto, a steady standards success."
resource: https://github.com/chipsalliance/Caliptra
tags: [open-hardware, security, root-of-trust, datacenter, ocp, post-quantum, foundation-hosted]
domain: hardware-embedded
license: Apache-2.0
license_history: ["Apache-2.0 (2022-)"]
governance: foundation
steward: CHIPS Alliance (Linux Foundation)
backing_orgs: [organizations/linux-foundation]
metrics:
  github_stars_rtl: { value: 155, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: chips-21
    resource: https://www.chipsalliance.org/news/caliptra2-1/
    title: "CHIPS Alliance: Caliptra launches 2.1 RTL release (2025-10-15)"
  - id: ms-21
    resource: https://techcommunity.microsoft.com/blog/azureinfrastructureblog/caliptra-2-1-an-open-source-silicon-root-of-trust-with-enhanced-protection-of-da/4460758
    title: "Microsoft Azure Infrastructure blog: Caliptra 2.1"
  - id: caliptra-gh
    resource: https://github.com/chipsalliance/Caliptra
    title: Caliptra spec repository (2.0 released July 2025)
  - id: chips-ocp-2026
    resource: https://www.chipsalliance.org/news/ocp-global-2026/
    title: "CHIPS Alliance at 2026 OCP Global Summit (Oct 12–15, 2026)"
  - id: rvi-annual-2025
    resource: https://riscv.org/wp-content/uploads/2026/01/RISC-V-Annual-Report-2025.pdf
    title: RISC-V International Annual Report 2025
  - id: google-ot-prod
    resource: https://opensource.googleblog.com/2026/03/opentitan-shipping-in-production.html
    title: "Google: OpenTitan shipping in production (2026-03-04)"
---

# Summary
Caliptra is the hyperscalers' shared, open root-of-trust block, built to be embedded *inside* datacenter SoCs. The repo describes 2.0 (July 2025) as adding a full subsystem with quantum-resilient DICE, OCP recovery boot and post-quantum crypto APIs.[^caliptra-gh] 2.1, released 2025-10-15, integrates the Adams Bridge 2.0 ML-DSA/ML-KEM accelerator and OCP L.O.C.K. key management for self-encrypting SSDs. Microsoft, Google, NVIDIA, AMD, Samsung, Kioxia and Solidigm are named contributors.[^chips-21][^ms-21] The RISC-V annual report says Google, Microsoft, AMD and others have standardised on it.[^rvi-annual-2025] Caliptra reuses OpenTitan IP.[^google-ot-prod] Verdict: **growing**. Its value is in buyer-side standardisation, not community size, so it has few GitHub stars.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07 | Caliptra 2.0 with subsystem, PQC, OCP recovery[^caliptra-gh] | OSS | + |
| W12 | 2025-10-15 | Caliptra 2.1 (Adams Bridge 2.0, OCP L.O.C.K.)[^chips-21][^ms-21] | OSS | + |
| W3 | 2026-10 | Multiple Caliptra sessions scheduled for OCP Global Summit (Oct 12–15)[^chips-ocp-2026] | OSS | + |

# OSS successes
- Competing hyperscalers and chipmakers co-develop one RoT block, the purest "open standard as shared cost" case in hardware.[^chips-21]
- Post-quantum readiness arrived ahead of most proprietary RoTs.[^ms-21]

# OSS failures / risks
- The community is small and corporate (155 stars on the RTL repo). Outside contributors are rare by design.

# Business successes
- Not monetised directly. It cuts every adopter's security-certification cost.

# Business failures / risks
- Its value depends on SoC vendors actually taping out Caliptra. Public confirmation of shipping silicon is sparse (unverified).

# By window
## W3
- OCP Global Summit 2026 sessions announced.[^chips-ocp-2026]
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- Caliptra 2.1 released.[^chips-21]
## W24
- Caliptra 2.0 released (July 2025).[^caliptra-gh]

# Lessons
- In hardware, "open source" often means a consortium standard among buyers. Health is measured by adopters, not stars.

# Related
- [OpenTitan](/projects/hardware-embedded/opentitan.md), [OpenBMC](/projects/hardware-embedded/openbmc.md), [Linux Foundation](/organizations/linux-foundation.md)

[^chips-21]: CHIPS Alliance, 2025-10-15.
[^ms-21]: Microsoft Tech Community.
[^caliptra-gh]: GitHub chipsalliance/Caliptra.
[^chips-ocp-2026]: CHIPS Alliance.
[^rvi-annual-2025]: RISC-V International Annual Report 2025.
[^google-ot-prod]: Google Open Source Blog, 2026-03-04.
