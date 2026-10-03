---
type: System
title: Intel Optane
description: "Intel's 3D XPoint-based SSDs and persistent-memory DIMMs (2017–2022). Database vendors such as SAP HANA and Oracle Exadata adopted the DIMMs, but Intel shut the business down in 2022 with a $559M write-off."
resource: https://en.wikipedia.org/wiki/3D_XPoint
tags: [hardware, persistent-memory, optane, 3d-xpoint, intel]
kind: product
first_release: 2017
org: "Intel (3D XPoint co-developed with Micron)"
outcome: dead
ideas: [ideas/hardware-engines/persistent-memory-databases, ideas/hardware-engines/cxl-memory-disaggregation]
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
  - id: fast20
    resource: https://www.usenix.org/conference/fast20/presentation/yang
    title: "Yang et al.: An Empirical Guide to the Behavior and Use of Scalable Persistent Memory (FAST 2020)"
  - id: blocks-sap
    resource: https://blocksandfiles.com/2019/07/23/intel-optane-sap-support/
    title: "Blocks & Files: SAP joins Intel Optane love-in"
  - id: micron-exit
    resource: https://www.techtarget.com/searchstorage/news/252503484/Micron-3D-XPoint-supply-will-end-with-900M-fab-sale-to-TI
    title: "TechTarget: Micron 3D XPoint supply will end with $900M fab sale to TI"
---

# Summary

Optane was Intel's brand for products built on 3D XPoint, a non-volatile memory developed with Micron. Optane SSDs (2017) offered very low latency and high endurance; Optane DC Persistent Memory DIMMs (2019, with Cascade Lake Xeons) offered byte-addressable persistent memory at larger capacity than DRAM. For databases it was the hardware behind the persistent-memory research wave. Micron left 3D XPoint in 2021 and Intel announced the wind-down of the Optane business in its Q2 2022 results, recording a $559M inventory impairment[^intel-q222][^toms-optane].

# Timeline

| Year | Event |
|---|---|
| 2015 | 3D XPoint announced by Intel and Micron |
| 2017 | First Optane SSDs |
| 2019 | Optane DC PMem DIMMs ship; SAP HANA and Intel sign a multi-year deal[^blocks-sap] |
| 2020 | FAST paper characterizes real Optane performance, very different from emulations[^fast20] |
| 2021 | Micron exits 3D XPoint and sells its Lehi fab[^micron-exit] |
| 2022 | Intel winds down Optane; $559M write-off[^intel-q222] |

# What worked

- Real benefits for specific database uses: faster restart of very large SAP HANA instances and low-latency commit/caching tiers in Oracle Exadata X8M/X9M[^blocks-sap].
- Optane SSDs were well regarded for latency-sensitive logs and caches.

# What didn't

- Performance sat well below DRAM (especially write bandwidth) and depended heavily on access patterns[^fast20].
- It worked only with Intel Xeons, so AMD-based servers and clouds could not use it.
- It never reached the volume needed to get cheap; NAND flash prices kept falling, and Micron's exit left Intel with excess inventory and no fab[^reg-optane].

# Related

- [Persistent memory for databases](/ideas/hardware-engines/persistent-memory-databases.md)
- [Intel discontinues Optane](/events/2022-07-intel-optane-discontinued.md)
- [Micron exits 3D XPoint](/events/2021-03-micron-exits-3d-xpoint.md)
