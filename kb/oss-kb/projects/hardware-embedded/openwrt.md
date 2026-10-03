---
type: OSS Project
title: OpenWrt
description: "The dominant open-source router/embedded-Linux firmware. A strong two years: its own OpenWrt One hardware (Nov 2024), 25.12 with the apk package manager (Mar 2026), the EU's January 2026 decision not to activate the RED 'radio lockdown' clause, and new relevance after the US FCC's Mar 2026 ban on new foreign-made routers."
resource: https://openwrt.org
tags: [router, firmware, embedded-linux, gpl, regulation, right-to-repair]
domain: hardware-embedded
license: GPL-2.0
license_history: ["GPL-2.0 (2004-)"]
governance: community
steward: OpenWrt project (Software Freedom Conservancy member project)
backing_orgs: []
metrics:
  github_stars: { value: 28616, as_of: 2026-10-03 }
  supported_devices: { value: "2200+", as_of: 2026-03-09 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sfc-one
    resource: https://sfconservancy.org/news/2024/nov/29/openwrt-one-wireless-router-now-ships-black-friday/
    title: "SFC: First router designed specifically for OpenWrt released (2024-11-29)"
  - id: hns-2512
    resource: https://www.helpnetsecurity.com/2026/03/09/openwrt-25-12-0-released/
    title: "Help Net Security: OpenWrt 25.12.0 ships with new package manager (2026-03-09)"
  - id: lwn-2512
    resource: https://lwn.net/Articles/1061746/
    title: "LWN: OpenWrt 25.12.0 released"
  - id: fsfe-red
    resource: https://fsfe.org/activities/radiodirective/
    title: "FSFE: EU Radio Lockdown Directive (Commission abandons delegated act, Jan 2026)"
  - id: bm-fcc-routers
    resource: https://www.bakermckenzie.com/en/insight/publications/2026/04/united-states-fcc-adds-foreign-made-routers-to-covered-list
    title: "Baker McKenzie: FCC adds foreign-made routers to Covered List (2026-04)"
  - id: ada-fcc
    resource: https://blog.adafruit.com/2026/03/24/fcc-just-banned-the-import-of-all-new-foreign-made-routers-heres-what-you-can-do-about-it/
    title: "Adafruit blog: FCC just banned new foreign-made routers — here's what you can do (2026-03-24)"
  - id: heise-two
    resource: https://www.heise.de/en/news/OpenWrt-Two-egg-laying-wool-milk-sow-router-for-OpenWrt-fans-10337428.html
    title: "heise: OpenWrt Two router announced (2025)"
---

# Summary
OpenWrt had a **thriving** two years in both product and policy. For its 20th anniversary it shipped the **OpenWrt One** (Nov 2024, $89.99, Banana Pi-built, unbrickable, with $10 per unit to the SFC),[^sfc-one] and announced a pricier, GL.iNet-made **OpenWrt Two** (10GbE, Wi-Fi 7).[^heise-two] **OpenWrt 25.12.0** (Mar 9, 2026) replaced the unmaintained opkg with Alpine's **apk**, built in attended sysupgrade, and covers 2,200+ devices (180+ new), with 4,700+ commits.[^hns-2512][^lwn-2512] Regulation turned in its favour. In **January 2026 the European Commission abandoned the delegated act** that would have activated RED Art. 3(3)(i), which could have forced router makers to block third-party firmware.[^fsfe-red] In the US, the FCC's **Mar 23, 2026** decision to put *all* new foreign-made consumer routers on the Covered List limits firmware updates for covered devices to Mar 1, 2027. That makes community firmware a long-term maintenance path for existing hardware.[^bm-fcc-routers][^ada-fcc] Verdict: **thriving**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-29 | OpenWrt One ships[^sfc-one] | OSS | + |
| W24 | 2025 | OpenWrt Two (GL.iNet) announced[^heise-two] | OSS | + |
| W9 | 2026-01 | EU drops RED Art. 3(3)(i) delegated act ("radio lockdown")[^fsfe-red] | OSS | + |
| W9 | 2026-03-09 | OpenWrt 25.12.0: apk, 2,200+ devices[^hns-2512] | OSS | + |
| W9 | 2026-03-23 | FCC adds foreign-made consumer routers to Covered List[^bm-fcc-routers] | OSS | ± |
| W3 | 2026-09 | 24.10 security support ends (six-month wind-down)[^hns-2512] | OSS | ± |

# OSS successes
- First-party reference hardware, a modern package manager and policy wins.[^sfc-one][^hns-2512][^fsfe-red]

# OSS failures / risks
- US policy may eventually restrict *new* hardware availability, and Wi-Fi 7 driver support depends on vendor blobs.[^bm-fcc-routers]

# Business successes
- n/a. Partners (Banana Pi, GL.iNet) sell the hardware; the SFC gets per-unit donations.[^sfc-one]

# Business failures / risks
- n/a.

# By window
## W3
- 24.10 end-of-support; no other notable events found.[^hns-2512]
## W6
- No notable events found.
## W9
- 25.12.0 release; EU RED win; FCC router decision.[^hns-2512][^fsfe-red][^bm-fcc-routers]
## W12
- No notable events found.
## W24
- OpenWrt One ships; Two announced.[^sfc-one][^heise-two]

# Lessons
- Owning a reference device gives an open firmware project a voice in hardware design and a revenue trickle.
- Ten years of advocacy (FSFE et al.) stopped an EU-wide lockdown of user-installed firmware.[^fsfe-red]

# Related
- [Event: EU drops radio lockdown](/events/2026-01-eu-drops-radio-lockdown-delegated-act.md), [Event: FCC foreign router ban](/events/2026-03-fcc-foreign-routers-covered-list.md)

[^sfc-one]: Software Freedom Conservancy, 2024-11-29.
[^hns-2512]: Help Net Security, 2026-03-09.
[^lwn-2512]: LWN.
[^fsfe-red]: FSFE.
[^bm-fcc-routers]: Baker McKenzie, April 2026.
[^ada-fcc]: Adafruit blog, 2026-03-24.
[^heise-two]: heise online.
