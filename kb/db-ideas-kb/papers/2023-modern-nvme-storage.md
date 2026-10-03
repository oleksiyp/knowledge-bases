---
type: Paper
title: "What Modern NVMe Storage Can Do, And How To Exploit It: High-Performance I/O for High-Performance Storage Engines"
description: "PVLDB 2023 paper measuring a 4.7x gap between NVMe array capability and existing systems on TPC-C, and showing an I/O-optimized engine reaching over 1M TPC-C transactions/s out of memory."
year: 2023
venue: VLDB 2023 (PVLDB 16)
authors: [Gabriel Haas, Viktor Leis]
resource: https://www.vldb.org/pvldb/vol16/p2090-haas.pdf
impact: medium
ideas: [ideas/hardware-engines/ssd-optimized-buffer-managers, ideas/hardware-engines/io-uring-kernel-bypass]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: nvme-vldb23
    resource: https://www.vldb.org/pvldb/vol16/p2090-haas.pdf
    title: "Paper PDF"
  - id: pg18
    resource: https://www.postgresql.org/about/press/presskit18
    title: "PostgreSQL 18 press kit"
    author: org:postgresql
---

# Claim

Arrays of modern NVMe SSDs deliver tens of millions of IOPS, but database storage engines leave most of it unused; on write-heavy TPC-C the authors measured a 4.7x gap. They compare I/O interfaces (libaio, io_uring, SPDK), discuss the need for many outstanding I/Os via lightweight threads/coroutines, and show an engine design reaching more than 1 million TPC-C transactions per second with a dataset 10x larger than main memory[^nvme-vldb23].

# What happened next

The paper is a key reference for the NVMe-era engine design and the io_uring vs SPDK choice. Mainstream systems move slowly: PostgreSQL 18's asynchronous I/O (2025) is a first step in that direction[^pg18]. "Medium" impact: influential in research and new engines, not yet reflected in most production systems.

# Related

- [io_uring and kernel bypass](/ideas/hardware-engines/io-uring-kernel-bypass.md)
- [LeanStore](/systems/leanstore.md), [SPDK](/systems/spdk.md)
