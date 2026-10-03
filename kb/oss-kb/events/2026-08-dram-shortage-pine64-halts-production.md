---
type: Event
title: AI-driven DRAM shortage halts small open-hardware makers (Pine64 pauses until mid-2027)
description: "The 2025–26 DRAM/eMMC price spike, driven by AI datacenter demand, forced Raspberry Pi into three price hikes and Framework into 'financial risk' memory pricing. In Aug 2026 Pine64 suspended production of its SBCs, PinePhone, PineTab2 and PineNote until at least mid-2027."
event_kind: other
date: 2026-08-20
window: W3
impact: negative
projects: [projects/hardware-embedded/raspberry-pi]
organizations: [organizations/raspberry-pi-holdings, organizations/framework-computer]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: hwb-pine64
    resource: https://hwbusters.com/news/pine64-linux-devices-are-off-the-menu-until-at-least-mid-2027/
    title: "Hardware Busters: Pine64 Linux devices are off the menu until at least mid-2027 (2026-08-20)"
  - id: geerling-dram
    resource: https://www.jeffgeerling.com/blog/2026/dram-pricing-is-killing-the-hobbyist-sbc-market/
    title: "Jeff Geerling: DRAM pricing is killing the hobbyist SBC market (2026-04-01)"
  - id: reg-price
    resource: https://www.theregister.com/2026/02/02/raspberry_pi_ram_shortage_price_hike/
    title: "The Register: RAM shortage bumps Raspberry Pi prices (2026-02-02)"
  - id: toms-fw-ram
    resource: https://www.tomshardware.com/laptops/framework-nearly-doubles-memory-pricing-for-32gb-64gb-laptop-13-pro-overnight-ceo-says-absorbing-lpcamm2-supplier-hikes-would-put-our-ability-to-operate-at-real-financial-risk
    title: "Tom's Hardware: Framework nearly doubles memory pricing; CEO cites financial risk"
  - id: pine64-aug25
    resource: https://pine64.org/2025/08/14/august_2025_short_update/
    title: "PINE64: Community update on PinePhone Pro (2025-08-14; discontinued)"
  - id: tnw-h1
    resource: https://thenextweb.com/news/raspberry-pi-record-first-half-memory-stockpile
    title: "The Next Web: Raspberry Pi revenue jumps 90% as memory stockpile pays off"
---

# What happened
Pine64 announced via its Telegram channel, as reported by Hardware Busters on Aug 20, 2026, that DRAM and eMMC had become "impossible to buy at prices the project can live with". Production of Arm and RISC-V SBCs, the PinePhone family, PineTab2 and PineNote is paused until at least mid-2027.[^hwb-pine64] It had already discontinued the PinePhone Pro in Aug 2025 over poor sales.[^pine64-aug25] Earlier in 2026 Raspberry Pi raised prices three times,[^reg-price] Jeff Geerling described the hobbyist SBC market as "on life support",[^geerling-dram] and Framework's CEO warned that absorbing LPCAMM2 price rises would put the company at "real financial risk".[^toms-fw-ram]

# Why it matters
Open hardware's cost advantage collapsed when commodity memory was diverted to AI datacenters. Small community vendors that sell near cost had no buffer.

# Outcome so far
Winners are vendors with scale and inventory: Raspberry Pi's memory stockpile drove a record H1 2026.[^tnw-h1] Small Linux-phone and SBC projects are on hold.

# Related
- [Raspberry Pi](/projects/hardware-embedded/raspberry-pi.md), [Framework Computer](/organizations/framework-computer.md), [Raspberry Pi Holdings](/organizations/raspberry-pi-holdings.md)

[^hwb-pine64]: Hardware Busters.
[^geerling-dram]: Jeff Geerling.
[^reg-price]: The Register.
[^toms-fw-ram]: Tom's Hardware.
[^pine64-aug25]: PINE64 blog.
[^tnw-h1]: The Next Web.
