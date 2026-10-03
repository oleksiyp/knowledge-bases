---
type: Event
title: "Micron exits 3D XPoint and sells its Lehi fab"
description: "Micron, Intel's 3D XPoint partner and manufacturer, quit the technology in March 2021 citing insufficient market validation, and sold the Lehi, Utah fab to Texas Instruments, cutting Optane's supply chain."
date: 2021-03-16
year: 2021
kind: discontinuation
signal: negative
ideas: [ideas/hardware-engines/persistent-memory-databases, ideas/hardware-engines/cxl-memory-disaggregation]
systems: [systems/intel-optane]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: toms-micron
    resource: https://www.tomshardware.com/news/micron-sell-3d-xpoint-fab-stop-development-intel
    title: "Tom's Hardware: Micron to Sell 3D XPoint Memory Fab and Cease Further Development"
  - id: micron-exit
    resource: https://www.techtarget.com/searchstorage/news/252503484/Micron-3D-XPoint-supply-will-end-with-900M-fab-sale-to-TI
    title: "TechTarget: Micron 3D XPoint supply will end with $900M fab sale to TI"
  - id: micron-lehi
    resource: https://www.micron.com/about/blog/company/partners/sale-of-lehi-fab
    title: "Micron: Completes sale of Lehi fab to Texas Instruments"
    author: org:micron
---

# What happened

In March 2021 Micron announced it would stop 3D XPoint development and sell its Lehi, Utah fab, saying the technology had "insufficient market validation" to justify continued high investment[^toms-micron]. It agreed to sell the fab to Texas Instruments for $900M in cash (about $1.5B total value including tool sales) in June 2021 and closed the sale in October 2021[^micron-exit][^micron-lehi]. Micron said it would focus on memory products enabled by CXL instead[^micron-exit].

# Why it matters

Without a fab, Intel's Optane business had a fixed inventory and no future supply; the 2022 shutdown followed. It also marked the point where the memory industry redirected from new persistent media toward CXL-attached DRAM.

# Related

- [Intel discontinues Optane (2022)](/events/2022-07-intel-optane-discontinued.md)
- [Persistent memory for databases](/ideas/hardware-engines/persistent-memory-databases.md)
- [CXL memory disaggregation](/ideas/hardware-engines/cxl-memory-disaggregation.md)
