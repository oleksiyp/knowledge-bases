---
type: Idea
title: "NVMe-era storage engines: 'SSD is the new RAM' and the return of the buffer manager"
description: "Instead of pure in-memory databases, design engines whose buffer manager costs almost nothing when data is cached and which saturate NVMe arrays when it is not. Winning: LeanStore and Umbra proved it in research, CedarDB commercialized it, and PostgreSQL 18 started moving off the OS page cache, but most production engines still leave much of NVMe performance unused."
tags: [hardware, storage-engine, buffer-manager, nvme, ssd, in-memory]
area: hardware-engines
verdict: winning
hype_peak: 2023
adoption_2026: niche
origins: "Main-memory DBMSs (HyPer, VoltDB, SAP HANA, Hekaton) dominated research 2008–2016 on the assumption that RAM would hold everything. LeanStore (ICDE 2018) and Umbra (CIDR 2020) at TUM reversed that."
key_systems: [systems/leanstore, systems/umbra, systems/cedardb, systems/hyper, systems/postgresql]
related_ideas: [ideas/hardware-engines/io-uring-kernel-bypass, ideas/hardware-engines/mmap-in-dbms, ideas/hardware-engines/persistent-memory-databases, ideas/hardware-engines/query-compilation-vs-vectorization]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: leanstore-icde
    resource: https://dblp.org/rec/conf/icde/LeisHK018.html
    title: "Leis, Haubenschild, Kemper, Neumann: LeanStore: In-Memory Data Management beyond Main Memory (ICDE 2018)"
  - id: umbra-cidr
    resource: https://vldb.org/cidrdb/2020/umbra-a-disk-based-system-with-in-memory-performance.html
    title: "Neumann, Freitag: Umbra: A Disk-Based System with In-Memory Performance (CIDR 2020)"
  - id: nvme-vldb23
    resource: https://www.vldb.org/pvldb/vol16/p2090-haas.pdf
    title: "Haas, Leis: What Modern NVMe Storage Can Do, And How To Exploit It (PVLDB 16, 2023)"
  - id: leanstore-vldb24
    resource: https://www.vldb.org/pvldb/vol17/p4536-leis.pdf
    title: "Leis: LeanStore: A High-Performance Storage Engine for NVMe SSDs (PVLDB 17, 2024)"
  - id: cedardb-about
    resource: https://cedardb.com/about/
    title: "CedarDB: About us"
    author: org:cedardb
  - id: cedardb-ce
    resource: https://cedardb.com/blog/launch/
    title: "CedarDB: Announcing the CedarDB Community Edition (2025)"
    author: org:cedardb
  - id: pg18
    resource: https://www.postgresql.org/about/press/presskit18
    title: "PostgreSQL 18 press kit"
    author: org:postgresql
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: hyper-journey
    resource: https://tableau.github.io/hyper-db/journey/
    title: "Hyper API: Our Journey"
    author: org:tableau
---

# Summary

**Verdict: winning (in research and new engines; slow in incumbents).** The 2010s bet was that RAM would grow faster than data, so databases should be purely in-memory. By 2018 that bet was failing on cost: DRAM prices flattened while NVMe SSDs became cheap, fast (millions of IOPS per server) and parallel. The response, led by Viktor Leis and Thomas Neumann's groups at TUM, was a new generation of buffer managers (pointer swizzling, optimistic latching, variable-size pages) that give in-memory speed for cached data and graceful degradation beyond it[^leanstore-icde][^umbra-cidr]. The design is now the basis of CedarDB (2024) and is shaping how other systems are rebuilt. The weak spot is adoption: most deployed engines still run far below what NVMe hardware can deliver[^nvme-vldb23].

# The idea

- Traditional buffer pools (hash table lookup on every page access, global latches) cost a lot even when everything is cached. That is why in-memory systems dropped them.
- LeanStore showed that with **pointer swizzling** (in-memory pointers replace page IDs for hot pages), **optimistic/epoch-based synchronization** and a cheap replacement strategy, a buffer manager adds little overhead over a pure in-memory system on TPC-C while still handling data larger than RAM[^leanstore-icde].
- Umbra added **variable-size pages** so large objects and dictionaries fit naturally, giving an SSD-based successor to the in-memory HyPer with comparable performance on cached working sets[^umbra-cidr].
- Later work on I/O showed what a fully NVMe-aware engine can reach: more than 1 million TPC-C transactions per second with data 10x larger than RAM, and a 4.7x gap between existing systems and the hardware[^nvme-vldb23].

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | LeanStore paper at ICDE[^leanstore-icde] | + |
| 2018 | Tableau ships HyPer as its data engine (10.5), the in-memory design's commercial peak[^hyper-journey] | mixed |
| 2020 | Umbra paper at CIDR: "disk-based system with in-memory performance"[^umbra-cidr] | + |
| 2022 | CIDR paper argues against mmap-based storage (see [mmap in DBMS](/ideas/hardware-engines/mmap-in-dbms.md)) | + |
| 2023 | "What Modern NVMe Storage Can Do" quantifies the gap[^nvme-vldb23] | + |
| 2024 | CedarDB spins out of TUM with Umbra technology[^cedardb-about]; LeanStore NVMe retrospective in PVLDB[^leanstore-vldb24] | + |
| 2025 | CedarDB Community Edition and seed round[^cedardb-ce][^pavlo-2025]; PostgreSQL 18 ships an async I/O subsystem, a step away from relying on the OS page cache[^pg18][^pavlo-2025] | + |

# What succeeded

- **The argument.** Few database researchers in 2026 propose new pure in-memory OLTP engines; the default research target is "fast when cached, NVMe-scale when not".
- **A commercial carrier.** CedarDB packages Umbra's buffer manager, compiled execution and PostgreSQL wire compatibility in a single product[^cedardb-about].
- **Influence on incumbents.** PostgreSQL's asynchronous I/O work (v18) is the first step of a long plan to use direct I/O and its own buffer management rather than double-caching through the kernel[^pavlo-2025].

# What failed

- **Mainstream adoption is thin.** CedarDB is small and early; LeanStore is a research codebase. The big engines (InnoDB, PostgreSQL, SQL Server, Oracle) keep their older buffer pools with incremental changes.
- **Cloud storage changed the target.** Many cloud databases run on network block storage (EBS) or object storage, where per-I/O latency is 10–100x worse than local NVMe. Techniques tuned for local NVMe help less there, and cloud providers often discourage local instance storage for durable data.
- **In-memory companies did not convert.** VoltDB and MemSQL/SingleStore evolved in other directions rather than adopting this design.

# Why

1. **DRAM stopped getting cheaper per GB** while flash kept getting cheaper; the cost ratio decides architecture, and it moved toward flash.
2. **NVMe exposed software overhead.** Once a device does 1M+ IOPS, buffer-manager latching, syscalls and page-cache copies become the bottleneck, which made the old design visibly wasteful[^nvme-vldb23].
3. **Rewriting a storage engine is a decade-long project** for an incumbent, so new ideas arrive first in new systems (CedarDB) and only slowly as retrofits (PostgreSQL AIO).
4. **Cloud economics cut both ways**: local NVMe is the cheapest fast storage, but durability and elasticity push systems to remote storage, limiting the payoff.

# Lessons

- Hardware cost curves, not peak speeds, decide which architecture wins. "Everything fits in RAM" lost to "flash is cheap".
- Research ideas from a strong academic group can become a company, but adoption lags the papers by 5–8 years.
- Avoid paying for abstractions you do not use: a buffer manager can be nearly free when data is hot.

# Related

- [LeanStore](/systems/leanstore.md), [Umbra](/systems/umbra.md), [CedarDB](/systems/cedardb.md), [HyPer](/systems/hyper.md)
- [io_uring and kernel bypass](/ideas/hardware-engines/io-uring-kernel-bypass.md)
- [mmap in DBMS](/ideas/hardware-engines/mmap-in-dbms.md)
- [Paper: Umbra (CIDR 2020)](/papers/2020-umbra-disk-based-in-memory-performance.md)
- [Paper: What Modern NVMe Storage Can Do (2023)](/papers/2023-modern-nvme-storage.md)
- [CedarDB launch (2024)](/events/2024-05-cedardb-launch.md)
