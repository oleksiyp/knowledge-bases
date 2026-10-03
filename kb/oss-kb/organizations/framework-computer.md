---
type: Organization
title: Framework Computer
description: "Repairable, modular laptop maker that publishes open designs and firmware for parts of its platform (Expansion Cards, EC). It expanded its line (Desktop, Laptop 12 in 2025; Laptop 13 Pro in Apr 2026), but was hit by the Oct 2025 Hyprland/Omarchy sponsorship backlash and by DRAM price spikes the CEO called a 'financial risk'."
resource: https://frame.work
tags: [hardware-startup, right-to-repair, linux, open-designs, dram-crisis]
org_kind: coss-startup
hq: San Francisco, California, USA
funding: { total_usd: "~$44M+ (seed $9M, Series A $18M, A-1 $17M; per Wikipedia/TechCrunch)", last_round: "Series A-1 $17M", last_round_date: 2024-04, valuation_usd: "unverified" }
business_verdict: stable
projects: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-framework
    resource: https://techcrunch.com/2024/04/23/frameworks-repairability-philosophy-is-set-to-expand-beyond-the-laptop
    title: "TechCrunch: Framework's repairability philosophy set to expand (2024-04-23; $17M A-1)"
  - id: wiki-framework
    resource: https://en.wikipedia.org/wiki/Framework_Computer
    title: "Wikipedia: Framework Computer"
  - id: toms-fw-2025
    resource: https://www.tomshardware.com/laptops/framework-moves-into-desktops-2-in-1-laptops-at-second-gen-event
    title: "Tom's Hardware: Framework moves into desktops, 2-in-1 laptops (2025-02)"
  - id: fw-13pro
    resource: https://www.phoronix.com/news/Framework-Laptop-13-Pro
    title: "Phoronix: Framework announces Laptop 13 Pro (2026-04-21)"
  - id: reg-fw-controversy
    resource: https://assets.theregister.com/2025/10/14/framework_linux_controversy/
    title: "The Register: Framework flame war erupts over Linux controversy (2025-10-14)"
  - id: toms-fw-ram
    resource: https://www.tomshardware.com/laptops/framework-nearly-doubles-memory-pricing-for-32gb-64gb-laptop-13-pro-overnight-ceo-says-absorbing-lpcamm2-supplier-hikes-would-put-our-ability-to-operate-at-real-financial-risk
    title: "Tom's Hardware: Framework nearly doubles memory pricing for Laptop 13 Pro; CEO cites financial risk (2026)"
  - id: fw-ec-gh
    resource: https://github.com/FrameworkComputer/EmbeddedController
    title: Framework EmbeddedController GitHub
---

# Summary
Framework is the leading **repairable-hardware** startup. It publishes the Expansion Card and other designs and its embedded-controller firmware on GitHub,[^fw-ec-gh] and has deliberately raised little capital ($17M Series A-1 in Apr 2024).[^tc-framework][^wiki-framework] In 2025 it launched the Framework Desktop (Ryzen AI Max) and the Laptop 12.[^toms-fw-2025] On Apr 21, 2026 it unveiled the redesigned **Laptop 13 Pro** (Intel Core Ultra Series 3, LPCAMM2, from $1,199 DIY).[^fw-13pro] Two hits followed. In Oct 2025, gold sponsorship of Hyprland and promotion of DHH's Omarchy triggered a 1,500+-reply community backlash.[^reg-fw-controversy] In 2026 LPCAMM2 supplier hikes forced Framework to nearly double 32/64GB memory prices, and CEO Nirav Patel warned that absorbing them would put the company's ability to operate at "real financial risk".[^toms-fw-ram]

# Business timeline
| Date | Event |
|---|---|
| 2024-04 | $17M Series A-1[^tc-framework] |
| 2025-02 | Desktop and Laptop 12 announced[^toms-fw-2025] |
| 2025-10 | Hyprland/Omarchy sponsorship backlash[^reg-fw-controversy] |
| 2026-04-21 | Laptop 13 Pro announced[^fw-13pro] |
| 2026 | Memory prices nearly doubled; CEO "financial risk" warning[^toms-fw-ram] |

# Monetization model
Hardware sales plus a parts/upgrade marketplace. Open designs drive the third-party module ecosystem.

# Successes
- Product-line expansion on minimal capital.[^tc-framework][^fw-13pro]

# Failures / risks
- DRAM-driven margin squeeze;[^toms-fw-ram] community trust damage over sponsorship choices.[^reg-fw-controversy]

# Related
- [Omarchy](/projects/end-user-apps/omarchy.md), [Raspberry Pi](/projects/hardware-embedded/raspberry-pi.md), [Domain review](/domains/hardware-embedded.md)

[^tc-framework]: TechCrunch.
[^wiki-framework]: Wikipedia.
[^toms-fw-2025]: Tom's Hardware.
[^fw-13pro]: Phoronix.
[^reg-fw-controversy]: The Register.
[^toms-fw-ram]: Tom's Hardware.
[^fw-ec-gh]: GitHub.
