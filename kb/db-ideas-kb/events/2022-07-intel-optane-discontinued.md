---
type: Event
title: "Intel discontinues Optane"
description: "In its Q2 2022 results Intel announced it would wind down the Optane business and took a $559M inventory impairment, ending the persistent-memory hardware that a generation of database research had targeted."
date: 2022-07-28
year: 2022
kind: discontinuation
signal: negative
ideas: [ideas/hardware-engines/persistent-memory-databases, ideas/hardware-engines/cxl-memory-disaggregation]
systems: [systems/intel-optane]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: intel-q222
    resource: https://www.sec.gov/Archives/edgar/data/50863/000005086322000029/q222_earningsrelease.htm
    title: "Intel Q2 2022 earnings release (Form 8-K)"
    author: org:intel
  - id: toms-optane
    resource: https://www.tomshardware.com/news/intel-kills-optane-memory-business-for-good
    title: "Tom's Hardware: Intel Kills Optane Memory Business, Pays $559 Million Inventory Write-Off"
  - id: reg-optane
    resource: https://www.theregister.com/on-prem/2022/07/29/why-intel-killed-its-optane-memory-business/1422037
    title: "The Register: Why Intel killed its Optane memory business"
---

# What happened

On 28 July 2022 Intel reported Q2 2022 results and confirmed it was winding down Optane, recognizing a $559M inventory impairment in cost of sales[^intel-q222][^toms-optane]. Intel had lost its only 3D XPoint fab when Micron exited the technology in 2021, and analysts pointed to excess inventory, falling NAND prices and the rise of CXL as reasons[^reg-optane].

# Why it matters

It ended the persistent-memory database era. Products that used Optane DIMMs (SAP HANA, Oracle Exadata X8M/X9M) had to move to other media, and researchers shifted to CXL-attached memory. It is the period's clearest example of a database idea killed by hardware economics rather than by technical failure.

# Related

- [Persistent memory for databases](/ideas/hardware-engines/persistent-memory-databases.md)
- [Intel Optane](/systems/intel-optane.md)
- [Micron exits 3D XPoint (2021)](/events/2021-03-micron-exits-3d-xpoint.md)
