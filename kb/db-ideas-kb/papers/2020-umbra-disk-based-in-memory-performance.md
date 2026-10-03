---
type: Paper
title: "Umbra: A Disk-Based System with In-Memory Performance"
description: "CIDR 2020 paper introducing Umbra, HyPer's SSD-based successor, whose variable-size-page buffer manager delivers in-memory performance on cached data while scaling beyond RAM."
year: 2020
venue: CIDR 2020
authors: [Thomas Neumann, Michael J. Freitag]
resource: https://vldb.org/cidrdb/2020/umbra-a-disk-based-system-with-in-memory-performance.html
impact: medium
ideas: [ideas/hardware-engines/ssd-optimized-buffer-managers, ideas/hardware-engines/query-compilation-vs-vectorization]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: umbra-cidr
    resource: https://vldb.org/cidrdb/2020/umbra-a-disk-based-system-with-in-memory-performance.html
    title: "CIDR 2020 paper page"
  - id: cedardb-about
    resource: https://cedardb.com/about/
    title: "CedarDB: About us"
---

# Claim

Pure in-memory systems are too expensive as DRAM prices stagnate while SSDs get fast and cheap. A buffer manager with low-overhead page access (building on LeanStore) and variable-size pages, so large objects and dictionaries need no special handling, achieves performance comparable to an in-memory DBMS for the cached working set and handles uncached data gracefully[^umbra-cidr].

# What happened next

Umbra became TUM's main research platform for years of work on query optimization and execution, and in 2024 was spun out as CedarDB[^cedardb-about]. The paper is an influential statement of the "SSD is the new RAM" position; its industry impact is so far mostly indirect, hence "medium".

# Related

- [Umbra](/systems/umbra.md), [CedarDB](/systems/cedardb.md)
- [NVMe-era storage engines](/ideas/hardware-engines/ssd-optimized-buffer-managers.md)
