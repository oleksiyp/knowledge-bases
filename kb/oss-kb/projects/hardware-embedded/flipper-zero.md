---
type: OSS Project
title: Flipper Zero (firmware and Flipper One)
description: "Hacker multi-tool with GPL-3.0 firmware and a huge third-party firmware/app scene. A business success (1M+ units, $150M+ lifetime sales); in May 2026 Flipper Devices unveiled the Linux-based Flipper One as a community-built open project, with mainline-kernel work done with Collabora."
resource: https://flipper.net
tags: [security-tools, firmware, gpl, hardware-startup, linux]
domain: hardware-embedded
license: GPL-3.0
license_history: ["GPL-3.0 (2020-)"]
governance: company-led-open-core
steward: Flipper Devices Inc.
backing_orgs: []
metrics:
  github_stars: { value: 16664, as_of: 2026-10-03 }
  units_sold: { value: "1M+", as_of: 2026-05-21 }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-flipper-one
    resource: https://techcrunch.com/2026/05/21/flipper-unveils-a-linux-powered-networking-gadget-built-for-hackers-and-tinkerers/
    title: "TechCrunch: Flipper unveils a Linux-powered networking gadget (2026-05-21)"
  - id: hackaday-flipper-one
    resource: https://hackaday.com/2026/05/22/the-team-behind-the-flipper-one-needs-your-help/
    title: "Hackaday: The team behind the Flipper One needs your help (2026-05-22)"
  - id: xda-flipper-one
    resource: https://www.xda-developers.com/flipper-one-official-isnt-selling-asking-help-build/
    title: "XDA: Flipper One is official, but Flipper isn't selling it yet"
  - id: flipper-gh
    resource: https://github.com/flipperdevices/flipperzero-firmware
    title: "Flipper Zero firmware GitHub (1.4.3 2025-12-05; 1.5.0-rc 2026-09-11)"
  - id: tc-flipper-2023
    resource: https://techcrunch.com/2023/06/26/flipper-sales/
    title: "TechCrunch: Flipper on track for $80M in sales (2023-06-26)"
---

# Summary
Flipper is a hardware startup whose **GPL firmware plus custom-firmware culture** is its moat. It has sold more than 1M Flipper Zeros for $150M+ in lifetime sales, up from ~$80M a year in 2023.[^tc-flipper-one][^tc-flipper-2023] On **May 21, 2026** it unveiled **Flipper One**, a pocket Arm Linux computer (RK3576, 8GB RAM, dual GbE, Wi-Fi 6E, M.2, plus an RP2350 co-processor), targeting under $350. It is not yet for sale. Flipper is openly recruiting the community to help build the OS, and pushed RK3576 support into mainline Linux with Collabora.[^tc-flipper-one][^hackaday-flipper-one][^xda-flipper-one] Zero firmware kept shipping (1.4.x in late 2025, 1.5.0-rc in Sept 2026).[^flipper-gh] Verdict: OSS **stable**, business **growing**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12-05 | Firmware 1.4.3[^flipper-gh] | OSS | + |
| W6 | 2026-05-21 | Flipper One unveiled; community-built, mainline kernel[^tc-flipper-one][^hackaday-flipper-one] | OSS/Business | + |
| W3 | 2026-09-11 | Firmware 1.5.0-rc[^flipper-gh] | OSS | + |

# OSS successes
- An active fork and app ecosystem around GPL firmware; upstreaming SoC support to mainline Linux.[^tc-flipper-one]

# OSS failures / risks
- Flipper One's software stack is still at concept stage, and community-built hardware projects often slip.[^xda-flipper-one]

# Business successes
- $150M+ cumulative sales from a niche security tool.[^tc-flipper-one]

# Business failures / risks
- Regulatory and marketplace bans on "hacking tools" are a recurring risk (not newly verified in the window). DRAM costs threaten the One's price target.

# By window
## W3
- 1.5.0-rc firmware.[^flipper-gh]
## W6
- Flipper One unveiled.[^tc-flipper-one]
## W9
- No notable events found.
## W12
- 1.4.x firmware releases.[^flipper-gh]
## W24
- No notable events found.

# Lessons
- Open firmware turns users into a marketing and R&D force, so the product sells on its ecosystem as much as its specs.

# Related
- [Meshtastic](/projects/hardware-embedded/meshtastic.md), [OpenWrt](/projects/hardware-embedded/openwrt.md)

[^tc-flipper-one]: TechCrunch, 2026-05-21.
[^hackaday-flipper-one]: Hackaday, 2026-05-22.
[^xda-flipper-one]: XDA Developers.
[^flipper-gh]: GitHub releases API.
[^tc-flipper-2023]: TechCrunch, 2023-06-26.
