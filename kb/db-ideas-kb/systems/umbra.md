---
type: System
title: Umbra
description: "TUM research DBMS (Thomas Neumann's group), successor to HyPer: an SSD-based system with in-memory performance via a variable-page-size buffer manager and compiled query execution. Commercialized as CedarDB in 2024."
resource: https://umbra-db.com/
tags: [research, htap, buffer-manager, query-compilation, tum]
kind: research
first_release: 2020
org: "Technical University of Munich"
outcome: pivoted
ideas: [ideas/hardware-engines/ssd-optimized-buffer-managers, ideas/hardware-engines/query-compilation-vs-vectorization]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: umbra-cidr
    resource: https://vldb.org/cidrdb/2020/umbra-a-disk-based-system-with-in-memory-performance.html
    title: "Neumann, Freitag: Umbra: A Disk-Based System with In-Memory Performance (CIDR 2020)"
  - id: umbra-site
    resource: https://umbra-db.com/
    title: "The Umbra Database System"
  - id: cedardb-about
    resource: https://cedardb.com/about/
    title: "CedarDB: About us"
---

# Summary

Umbra is the research system that followed HyPer at TUM. Its CIDR 2020 paper argued that with a low-overhead buffer manager using variable-size pages, a disk/SSD-based system can match an in-memory system on its cached working set while handling larger data gracefully[^umbra-cidr]. Umbra keeps HyPer's data-centric query compilation but uses its own low-latency compilation backend. In 2024 the team spun out CedarDB to commercialize it[^cedardb-about][^umbra-site].

# Timeline

| Year | Event |
|---|---|
| 2020 | CIDR paper[^umbra-cidr] |
| 2020–23 | Many follow-up papers (query optimization, compilation, string compression) |
| 2024 | Spun out as CedarDB[^cedardb-about] |

# What worked

- Strong benchmark performance on both analytics and transactions.
- Showed that the in-memory vs disk-based dichotomy was a false choice on NVMe hardware.

# What didn't

- As a research system it was never broadly available for production; the commercial path runs through CedarDB, which is young.

# Related

- [HyPer](/systems/hyper.md), [CedarDB](/systems/cedardb.md), [LeanStore](/systems/leanstore.md)
- [Paper: Umbra (CIDR 2020)](/papers/2020-umbra-disk-based-in-memory-performance.md)
