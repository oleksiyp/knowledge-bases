---
type: System
title: LeanStore
description: "Research storage engine from TUM (later also TU Darmstadt/TUM groups) showing that a well-designed buffer manager gives in-memory performance on cached data and near-hardware throughput on NVMe SSDs."
resource: https://github.com/leanstore/leanstore
tags: [research, storage-engine, buffer-manager, nvme, oltp]
kind: research
first_release: 2018
org: "Technical University of Munich (Viktor Leis and collaborators)"
license: MIT
outcome: stable
ideas: [ideas/hardware-engines/ssd-optimized-buffer-managers, ideas/hardware-engines/io-uring-kernel-bypass, ideas/hardware-engines/mmap-in-dbms]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: leanstore-icde
    resource: https://dblp.org/rec/conf/icde/LeisHK018.html
    title: "LeanStore: In-Memory Data Management beyond Main Memory (ICDE 2018)"
  - id: leanstore-vldb24
    resource: https://www.vldb.org/pvldb/vol17/p4536-leis.pdf
    title: "Leis: LeanStore: A High-Performance Storage Engine for NVMe SSDs (PVLDB 17, 2024)"
  - id: nvme-vldb23
    resource: https://www.vldb.org/pvldb/vol16/p2090-haas.pdf
    title: "Haas, Leis: What Modern NVMe Storage Can Do, And How To Exploit It (PVLDB 16, 2023)"
  - id: vmcache
    resource: https://dlnext.acm.org/doi/abs/10.1145/3588687
    title: "Leis et al.: Virtual-Memory Assisted Buffer Management (SIGMOD 2023)"
---

# Summary

LeanStore is a research key-value/OLTP storage engine introduced at ICDE 2018 by Viktor Leis, Michael Haubenschild, Alfons Kemper and Thomas Neumann[^leanstore-icde]. It showed that pointer swizzling, optimistic latching and a lightweight replacement strategy make a buffer manager almost free when data is cached, reversing the 2010s consensus that high performance required pure in-memory designs. Follow-up work drove it toward saturating arrays of NVMe SSDs[^nvme-vldb23][^leanstore-vldb24] and produced related designs such as vmcache[^vmcache]. The code is MIT-licensed on GitHub and still receiving commits in 2026.

# Timeline

| Year | Event |
|---|---|
| 2018 | ICDE paper: in-memory performance beyond main memory[^leanstore-icde] |
| 2023 | NVMe I/O study: over 1M TPC-C txn/s with data 10x larger than RAM[^nvme-vldb23]; vmcache at SIGMOD[^vmcache] |
| 2024 | PVLDB retrospective on LeanStore as an NVMe storage engine[^leanstore-vldb24] |

# What worked

- Influential: its techniques shaped Umbra, CedarDB and a generation of storage-engine research.
- Clear benchmarks against both in-memory systems and traditional buffer pools.

# What didn't

- Remains a research system; no direct commercial product carries the LeanStore name.
- Its best results assume local NVMe, while most cloud databases run on network storage.

# Related

- [NVMe-era storage engines](/ideas/hardware-engines/ssd-optimized-buffer-managers.md)
- [Umbra](/systems/umbra.md), [CedarDB](/systems/cedardb.md)
- [Paper: What Modern NVMe Storage Can Do](/papers/2023-modern-nvme-storage.md)
