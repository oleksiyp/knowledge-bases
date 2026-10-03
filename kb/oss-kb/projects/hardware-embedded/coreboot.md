---
type: OSS Project
title: coreboot (and Dasharo)
description: "GPL-2.0 open-source boot firmware, commercialised by 3mdeb's Dasharo distribution and used by System76, NovaCustom and Chromebooks. Niche but advancing: AMD's openSIL enabled the first open firmware for modern AMD server (Turin, May 2026) and AM5 desktop (Jul 2026) boards."
resource: https://www.coreboot.org
tags: [firmware, boot, gpl, open-firmware, amd-opensil]
domain: hardware-embedded
license: GPL-2.0
license_history: ["GPL-2.0"]
governance: community
steward: coreboot project (Dasharo by 3mdeb)
backing_orgs: []
metrics:
  github_stars_mirror: { value: 2798, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: osfy-dasharo
    resource: https://www.opensourceforu.com/2026/08/3mdeb-open-sourced-dasharo-firmware/
    title: "Open Source For You: 3mdeb open-sourced Dasharo firmware for AMD desktop platform (2026-08)"
  - id: toms-am5
    resource: https://www.tomshardware.com/pc-components/motherboards/first-open-source-firmware-for-am5-officially-launches-dasharo-v0-9-0-brings-coreboot-and-opensil-to-zen-4-apus-on-msi-b850
    title: "Tom's Hardware: First open-source firmware for AM5 launches — Dasharo v0.9.0 (2026)"
  - id: phx-mz33
    resource: https://www.phoronix.com/news/Dasharo-Firmware-MZ33-AR1
    title: "Phoronix: coreboot + AMD openSIL firmware published for Gigabyte MZ33-AR1"
  - id: 3mdeb-hsi3
    resource: https://blog.3mdeb.com/2025/2025-11-27-path-to-hsi3/
    title: "3mdeb: Path to HSI-3 (2025-11-27)"
  - id: system76-pop
    resource: https://blog.system76.com/post/pop-os-letter-from-our-founder/
    title: "System76: Pop!_OS 24.04 LTS released — a letter from our founder (2025-12)"
---

# Summary
coreboot is **stable** and slowly expanding into new platforms through **Dasharo**. 3mdeb brought NovaCustom MeteorLake laptops to HSI-3 firmware security in Nov 2025.[^3mdeb-hsi3] It then used **AMD openSIL** to ship the first open-source firmware for a Turin server board (Gigabyte MZ33-AR1, May 2026), funded by selling pre-loaded servers, and for a modern AM5 desktop board (MSI PRO B850-P, Dasharo v0.9.0, Jul 2026).[^phx-mz33][^toms-am5][^osfy-dasharo] Open-firmware PC vendors such as System76 continue (Pop!_OS 24.04 with COSMIC shipped Dec 2025).[^system76-pop] Verdict: **stable**, and its prospects improve as AMD opens more of its firmware via openSIL.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-11-27 | Dasharo NovaCustom MeteorLake reaches HSI-3[^3mdeb-hsi3] | OSS | + |
| W12 | 2025-12-11 | System76 ships Pop!_OS 24.04 / COSMIC (open-firmware laptop vendor)[^system76-pop] | Business | + |
| W6 | 2026-05 | Dasharo for Gigabyte MZ33-AR1 (AMD Turin, openSIL)[^phx-mz33] | OSS | + |
| W3 | 2026-07-31 | Dasharo v0.9.0 for MSI B850 (first open AM5 firmware)[^toms-am5][^osfy-dasharo] | OSS | + |

# OSS successes
- AMD openSIL plus coreboot breaks the x86 closed-firmware lock on new platforms.[^toms-am5]

# OSS failures / risks
- Intel FSP and ME blobs remain; platform coverage is a handful of boards.

# Business successes
- 3mdeb funds work via hardware sales and subscriptions.[^phx-mz33]

# Business failures / risks
- Tiny market; depends on vendor cooperation.

# By window
## W3
- First open AM5 firmware.[^toms-am5]
## W6
- Turin server firmware.[^phx-mz33]
## W9
- No notable events found.
## W12
- HSI-3; Pop!_OS 24.04.[^3mdeb-hsi3][^system76-pop]
## W24
- No notable events found.

# Lessons
- Open firmware advances only when a silicon vendor opens its init code (openSIL). Community effort alone cannot.

# Related
- [OpenBMC](/projects/hardware-embedded/openbmc.md), [Domain review](/domains/hardware-embedded.md)

[^osfy-dasharo]: Open Source For You, Aug 2026.
[^toms-am5]: Tom's Hardware.
[^phx-mz33]: Phoronix.
[^3mdeb-hsi3]: 3mdeb blog.
[^system76-pop]: System76 blog.
