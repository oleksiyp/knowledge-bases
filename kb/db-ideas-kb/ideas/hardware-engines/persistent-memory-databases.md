---
type: Idea
title: "Persistent memory (Optane) as a new tier for databases"
description: "Byte-addressable, non-volatile memory on the DIMM bus would let databases skip the log-to-disk path and blur memory and storage. It failed: Intel wrote off Optane in 2022 after Micron quit 3D XPoint, because it was too slow to replace DRAM and too expensive to beat NAND flash."
tags: [hardware, persistent-memory, optane, nvm, storage]
area: hardware-engines
verdict: failed
hype_peak: 2019
adoption_2026: abandoned
origins: "Intel/Micron 3D XPoint announced 2015; Optane SSDs 2017; Optane DC Persistent Memory DIMMs shipped with Cascade Lake Xeons in 2019. Decades of NVM-database research preceded it."
key_systems: [systems/intel-optane]
related_ideas: [ideas/hardware-engines/cxl-memory-disaggregation, ideas/hardware-engines/ssd-optimized-buffer-managers, ideas/hardware-engines/rdma-smartnic-fpga-offload]
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
    author: org:the-register
  - id: micron-exit
    resource: https://www.techtarget.com/searchstorage/news/252503484/Micron-3D-XPoint-supply-will-end-with-900M-fab-sale-to-TI
    title: "TechTarget: Micron 3D XPoint supply will end with $900M fab sale to TI"
  - id: toms-micron
    resource: https://www.tomshardware.com/news/micron-sell-3d-xpoint-fab-stop-development-intel
    title: "Tom's Hardware: Micron to Sell 3D XPoint Memory Fab and Cease Further Development"
  - id: fast20
    resource: https://www.usenix.org/conference/fast20/presentation/yang
    title: "Yang et al.: An Empirical Guide to the Behavior and Use of Scalable Persistent Memory (FAST 2020)"
  - id: post-optane
    resource: https://dl.acm.org/doi/10.1145/3609308.3625268
    title: "Desnoyers et al.: Persistent Memory Research in the Post-Optane Era (2023)"
  - id: sap-pmem
    resource: https://blogs.sap.com/2019/04/04/let-us-be-persistent-hana-adoption-of-non-volatile-memory/
    title: "SAP: Let Us Be Persistent – HANA Adoption of Non-Volatile Memory (2019)"
    author: org:sap
  - id: blocks-sap
    resource: https://blocksandfiles.com/2019/07/23/intel-optane-sap-support/
    title: "Blocks & Files: SAP joins Intel Optane love-in (2019)"
  - id: exadata-xrmem
    resource: https://docs.oracle.com/cd/F86788_01/dbmso/system-overview-exadata-database-machine-dbmso.pdf
    title: "Oracle Exadata Database Machine System Overview 23.1 (XRMEM)"
    author: org:oracle
---

# Summary

**Verdict: failed.** Persistent memory (PMem) was the most-researched database hardware idea of 2015–2021 and the clearest hardware failure of the period. Intel shipped Optane DC Persistent Memory DIMMs in 2019, SAP HANA and Oracle Exadata adopted them, and hundreds of papers designed PMem-native indexes, logs and engines. Then Micron left 3D XPoint in March 2021 and Intel announced the wind-down of the whole Optane business in July 2022, taking a $559 million inventory write-off[^intel-q222][^toms-optane]. The technology worked; the economics did not. It sat in an awkward middle: slower than DRAM, far more expensive than NAND flash, single-vendor, and tied to Intel CPUs.

# The idea

3D XPoint offered byte-addressable, persistent memory on the DIMM bus with latency a few times higher than DRAM and capacities well above it. For databases the promise was:

- **No write-ahead-log fsync to flash.** Commit by flushing a cache line instead of an I/O.
- **Instant restart.** Large in-memory databases would not need to reload from disk after a crash.
- **Cheaper big memory.** More capacity per socket than DRAM for in-memory systems such as SAP HANA.
- **New data structures.** Persistent B-trees, hash tables and logs that live directly in memory.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | SAP HANA 2.0 SPS03 adds persistent-memory support ahead of hardware GA[^sap-pmem] | + |
| 2019 | Optane DC PMem DIMMs ship with Cascade Lake; SAP and Intel sign a multi-year deal; SAP reports a 6 TB HANA restart in ~4 min vs ~50 min[^blocks-sap] | + |
| 2019 | Oracle Exadata X8M uses PMem as a data and commit accelerator[^exadata-xrmem] | + |
| 2020 | FAST 2020 "Empirical Guide" shows Optane behaves very differently from DRAM (e.g. avoid random accesses under 256 B)[^fast20] | − |
| 2021 | Micron exits 3D XPoint and sells the Lehi fab to Texas Instruments[^micron-exit] | − |
| 2022 | Intel winds down Optane, $559M inventory impairment[^intel-q222] | − |
| 2023 | Exadata X10M moves to AMD CPUs and replaces PMem with DRAM-based XRMEM over RDMA[^exadata-xrmem]; researchers publish "Persistent Memory Research in the Post-Optane Era"[^post-optane] | − |
| 2024–26 | PMem ideas migrate to CXL-attached memory research | mixed |

# What succeeded

- **Niche production wins.** SAP HANA got real restart-time and capacity benefits; Oracle Exadata used PMem as a shared, RDMA-accessed cache tier with low read latency. Both vendors controlled the whole stack and could hide the device behind their own software.
- **Research value.** The PMem wave produced a careful understanding of persistence ordering (cache-line flushes, fences, failure atomicity) and of tiered memory. That knowledge carries over to CXL memory tiers.
- **Exadata's graceful exit.** Oracle kept the user-facing feature (remote memory cache) and swapped the medium (DRAM via RDMA), which shows the architecture was more valuable than the device.

# What failed

- **The general-purpose database story.** Mainstream engines (PostgreSQL, MySQL, MongoDB, the cloud warehouses) never built PMem-native storage. Cloud providers offered few PMem instances.
- **Performance expectations.** Measured Optane bandwidth, especially for writes, was well below DRAM, and performance depended heavily on access size and thread count[^fast20]. Many PMem-native designs that looked good in emulation did worse on real hardware.
- **The supply chain.** Micron said there was "insufficient market validation" to justify investment and lost money on the product before quitting[^toms-micron]. Intel was left with an inventory glut and no fab[^reg-optane].

# Why

1. **Squeezed from both sides.** NAND SSDs kept getting faster and cheaper (NVMe, 4–5 GB/s per drive, falling $/GB), while DRAM remained the latency tier. Optane's latency advantage over flash mattered only for workloads bottlenecked on commit latency, which group commit and battery-backed caches already mitigated[^reg-optane].
2. **Single-vendor, CPU-locked hardware.** Optane DIMMs only worked with specific Intel Xeons. When AMD EPYC gained share in servers and clouds, PMem could not follow; Exadata's AMD move is the clearest example[^exadata-xrmem].
3. **Software rewrite cost.** Exploiting PMem required new persistence protocols, new allocators and new recovery code. Vendors will not rewrite a storage engine for a device sold by one supplier with uncertain volume.
4. **Volume economics of memory.** Memory technologies need very high volume to get cheap. 3D XPoint never got there, so it stayed expensive, so volume stayed low.
5. **A better abstraction arrived.** CXL promised memory expansion and pooling with ordinary DRAM behind a standard interconnect, which removed much of the reason to bet on a proprietary medium[^reg-optane].

# Lessons

- Database architectures should not depend on a single vendor's device. Ideas that survive are the ones that can swap the medium (Exadata XRMEM).
- A new tier must beat the incumbent tiers on cost per performance, not just fill a latency gap on a chart.
- Emulated-hardware research is risky: real devices behave differently, and many PMem papers had to be revisited once Optane shipped.
- Research can still pay off indirectly; persistence-ordering and tiering work transfers to CXL.

# Related

- [Intel Optane](/systems/intel-optane.md)
- [Intel discontinues Optane (2022)](/events/2022-07-intel-optane-discontinued.md)
- [Micron exits 3D XPoint (2021)](/events/2021-03-micron-exits-3d-xpoint.md)
- [CXL memory disaggregation](/ideas/hardware-engines/cxl-memory-disaggregation.md)
- [SSD-optimized buffer managers](/ideas/hardware-engines/ssd-optimized-buffer-managers.md)
