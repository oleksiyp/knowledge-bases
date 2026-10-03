---
type: Idea
title: "Using mmap instead of a buffer manager"
description: "Let the OS manage database pages via memory-mapped files instead of writing a buffer pool. Fading: easy to start with, but the CIDR 2022 paper by Crotty, Leis and Pavlo documented correctness and performance problems; MongoDB removed MMAPv1 in 2019, InfluxDB dropped mmap in its rewrite, and new engines avoid it, though LMDB-style designs persist for read-mostly workloads."
tags: [storage-engine, mmap, buffer-manager, os, page-cache]
area: hardware-engines
verdict: fading
hype_peak: 2015
adoption_2026: rare
origins: "mmap-based storage was common before 2018: LMDB, MongoDB MMAPv1 (its original engine), InfluxDB TSM, and Lucene index access."
key_systems: [systems/mongodb, systems/influxdb, systems/leanstore, systems/postgresql]
related_ideas: [ideas/hardware-engines/ssd-optimized-buffer-managers, ideas/hardware-engines/io-uring-kernel-bypass]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: mmap-cidr
    resource: https://vldb.org/cidrdb/2022/are-you-sure-you-want-to-use-mmap-in-your-database-management-system.html
    title: "Crotty, Leis, Pavlo: Are You Sure You Want to Use MMAP in Your Database Management System? (CIDR 2022)"
  - id: mmap-pdf
    resource: https://cs.brown.edu/people/acrotty/pubs/p13-crotty.pdf
    title: "CIDR 2022 mmap paper (PDF)"
  - id: mmapbench
    resource: https://github.com/viktorleis/mmapbench
    title: "viktorleis/mmapbench: benchmark scripts"
  - id: pavlo-2022
    resource: https://www.cs.cmu.edu/~pavlo/blog/2022/12/2022-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2022: A Year in Review"
    author: person:andy-pavlo
  - id: mongo-42
    resource: https://www.alibabacloud.com/help/en/mongodb/user-guide/compatibility-changes-in-mongodb-4-2
    title: "Alibaba Cloud docs: MongoDB 4.2 compatibility changes (MMAPv1 removed)"
  - id: vmcache
    resource: https://dlnext.acm.org/doi/abs/10.1145/3588687
    title: "Leis et al.: Virtual-Memory Assisted Buffer Management (SIGMOD 2023)"
---

# Summary

**Verdict: fading.** mmap is attractive because the OS does caching and eviction for free and the engine accesses data through pointers. The CIDR 2022 paper "Are You Sure You Want to Use MMAP in Your Database Management System?" argued it is a trap: the DBMS loses control over when dirty pages are written (breaking transactional guarantees unless worked around), I/O errors arrive as signals, page-table and TLB-shootdown overheads cap throughput on fast NVMe, and the OS's eviction is not workload-aware[^mmap-cidr][^mmap-pdf]. Practice agreed: MongoDB removed MMAPv1 in 4.2 (2019)[^mongo-42]; InfluxDB's Rust rewrite dropped mmap, which Pavlo noted with approval[^pavlo-2022]; new engines use their own buffer managers, sometimes using virtual-memory tricks inside a DBMS-controlled design (vmcache)[^vmcache]. mmap persists in read-mostly embedded stores (LMDB) and index files.

# The idea

Map the database file into virtual memory. Reads become pointer dereferences; the kernel loads pages on demand and evicts them when memory is tight. No buffer pool code, no double copy, easy zero-copy reads.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | MongoDB 4.0 deprecates MMAPv1 | − |
| 2019 | MongoDB 4.2 removes MMAPv1; WiredTiger only[^mongo-42] | − |
| 2020–23 | InfluxDB IOx/3.0 rewrite moves away from mmap-based TSM[^pavlo-2022] | − |
| 2022 | CIDR paper with benchmarks: mmap throughput collapses on fast NVMe once data exceeds memory[^mmap-cidr][^mmapbench] | − |
| 2023 | vmcache (SIGMOD) shows how to use virtual memory under DBMS control instead[^vmcache] | + (alternative) |
| 2025 | PostgreSQL 18 AIO begins moving PostgreSQL away from reliance on the OS page cache (a related, not mmap-specific, shift) | − |

# What succeeded

- **Read-mostly embedded stores.** LMDB-style copy-on-write B-trees still use mmap productively; for small, read-heavy datasets it is simple and fast.
- **The paper as a reference.** The CIDR paper became the standard citation in design discussions (often in Hacker News debates), shifting new projects away from mmap early.

# What failed

- **mmap for transactional engines.** Write ordering, error handling and eviction control require so many workarounds that the simplicity disappears[^mmap-pdf].
- **mmap on modern NVMe.** The paper's benchmarks showed mmap-based reads failing to saturate fast SSD arrays because of kernel page-table and TLB-shootdown overheads[^mmap-cidr].

# Why

1. **The OS does not know transaction semantics.** It may flush dirty pages at any time, which breaks write-ahead logging unless the engine uses shadow copies or other workarounds.
2. **Hardware got faster than the kernel's paging path.** On HDDs the overhead was hidden; on multi-million-IOPS NVMe it dominates.
3. **Early simplicity becomes late lock-in.** Systems that started with mmap needed full storage-engine rewrites to escape (MongoDB, InfluxDB).

# Lessons

- "Let the OS do it" is fine for prototypes; production engines need control over I/O, eviction and durability.
- Choose storage architecture for the hardware of the next decade, not the last.
- Strong, opinionated, benchmark-backed papers can change practice quickly.

# Related

- [Paper: Are You Sure You Want to Use MMAP? (CIDR 2022)](/papers/2022-mmap-in-dbms.md)
- [NVMe-era storage engines](/ideas/hardware-engines/ssd-optimized-buffer-managers.md)
- [MongoDB](/systems/mongodb.md), [InfluxDB](/systems/influxdb.md)
