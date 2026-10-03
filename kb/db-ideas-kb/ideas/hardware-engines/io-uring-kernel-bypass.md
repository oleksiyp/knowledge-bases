---
type: Idea
title: "io_uring and kernel-bypass I/O in databases"
description: "Replace synchronous read/write calls and the OS page cache with batched asynchronous I/O (io_uring) or full user-space drivers (SPDK) to keep up with NVMe. Winning: io_uring reached PostgreSQL 18, TigerBeetle and ScyllaDB; full kernel bypass with SPDK stayed niche because it gives up the OS, and io_uring's security record slowed its use in locked-down environments."
tags: [hardware, io, io-uring, spdk, nvme, linux, storage-engine]
area: hardware-engines
verdict: winning
hype_peak: 2022
adoption_2026: common
origins: "Linux AIO (libaio) was limited to O_DIRECT and often blocked. io_uring was merged in Linux 5.1 (2019). Intel's SPDK (user-space NVMe driver) was open-sourced in 2015."
key_systems: [systems/spdk, systems/postgresql, systems/tigerbeetle, systems/scylladb, systems/turso, systems/leanstore]
related_ideas: [ideas/hardware-engines/ssd-optimized-buffer-managers, ideas/hardware-engines/mmap-in-dbms, ideas/hardware-engines/rust-database-rewrites]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: nvme-vldb23
    resource: https://www.vldb.org/pvldb/vol16/p2090-haas.pdf
    title: "Haas, Leis: What Modern NVMe Storage Can Do, And How To Exploit It (PVLDB 16, 2023)"
  - id: iouring-dbms
    resource: https://arxiv.org/abs/2512.04859
    title: "High-Performance DBMSs with io_uring: When and How to use it (arXiv 2025)"
  - id: pg18
    resource: https://www.postgresql.org/about/press/presskit18
    title: "PostgreSQL 18 press kit"
    author: org:postgresql
  - id: pganalyze-aio
    resource: https://pganalyze.com/blog/postgres-18-async-io
    title: "pganalyze: Waiting for Postgres 18: Accelerating Disk Reads with Asynchronous I/O"
  - id: tb-arch
    resource: https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/ARCHITECTURE.md
    title: "TigerBeetle ARCHITECTURE.md"
    author: org:tigerbeetle
  - id: scylla-iouring
    resource: https://www.scylladb.com/2026/07/22/asymmetric-io_uring-backend-seastar/
    title: "ScyllaDB: An Asymmetric io_uring Backend for Seastar and ScyllaDB (2026)"
    author: org:scylladb
  - id: google-iouring
    resource: https://www.openwall.com/lists/oss-security/2023/06/17/2
    title: "oss-security: Our learnings from 42 Linux kernel exploits, we are limiting io_uring (Google, 2023)"
  - id: phoronix-google
    resource: https://www.phoronix.com/news/Google-Restricting-IO_uring
    title: "Phoronix: Google Limiting IO_uring Use Due To Security Vulnerabilities"
  - id: limbo
    resource: https://turso.tech/blog/introducing-limbo-a-complete-rewrite-of-sqlite-in-rust
    title: "Turso: Introducing Limbo: A complete rewrite of SQLite in Rust (2024)"
    author: org:turso
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary

**Verdict: winning for io_uring, niche for full kernel bypass.** A single modern NVMe SSD can do roughly a million random reads per second; a server with several of them, many millions. Classic database I/O paths (one synchronous syscall per page, plus copies through the OS page cache) cannot drive that. io_uring, a shared-ring asynchronous interface added in Linux 5.1 (2019), became the practical answer: TigerBeetle was designed around it, ScyllaDB's Seastar uses it, and PostgreSQL 18 (September 2025) shipped an asynchronous I/O subsystem with an io_uring backend[^tb-arch][^scylla-iouring][^pg18]. Full kernel bypass via SPDK delivers the highest raw numbers but remains rare in databases. io_uring's own problem has been security: Google restricted it on production servers in 2023 after many kernel exploits targeted it[^google-iouring].

# The idea

- **Batching and asynchrony.** Submit many reads and writes at once through shared memory rings, reap completions later, avoid a syscall per I/O.
- **Direct I/O plus own buffer pool.** Bypass the OS page cache (O_DIRECT) to avoid double-buffering and to control eviction and flushing.
- **Kernel bypass (SPDK).** Map the NVMe device into user space and poll it directly; no syscalls, no interrupts, no kernel file system.

Research quantified the gap: an I/O-optimized engine reached over 1M TPC-C transactions per second out of memory, and the authors measured a 4.7x gap between what NVMe arrays can do and what existing systems achieve[^nvme-vldb23].

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019 | io_uring merged in Linux 5.1 | + |
| 2020–21 | TigerBeetle built on io_uring with O_DIRECT and its own cache[^tb-arch] | + |
| 2023 | Google limits io_uring (ChromeOS, Android apps, production servers) citing exploit share in its kernel bug bounty[^google-iouring][^phoronix-google] | − |
| 2023 | "What Modern NVMe Storage Can Do" compares io_uring, libaio and SPDK for storage engines[^nvme-vldb23] | + |
| 2024 | Turso's Limbo SQLite rewrite cites asynchronous I/O (io_uring) as a reason to rewrite rather than fork[^limbo] | + |
| 2025 | PostgreSQL 18 released 2025-09-25 with `io_method` = worker / io_uring / sync[^pg18][^pganalyze-aio] | + |
| 2025 | Paper on when and how DBMSs should use io_uring[^iouring-dbms] | + |
| 2026 | ScyllaDB describes an asymmetric io_uring backend that moves I/O to dedicated cores[^scylla-iouring] | + |

# What succeeded

- **io_uring as the default async interface on Linux** for new engines and for retrofits. It works for buffered I/O, direct I/O and networking, which libaio did not.
- **PostgreSQL's AIO** is a large architectural change; early write-ups report 2–3x faster sequential scans on cloud storage where per-request latency is high[^pganalyze-aio]. Pavlo described it as putting PostgreSQL on the path to dropping its reliance on the OS page cache[^pavlo-2025].
- **Purpose-built engines** (TigerBeetle, ScyllaDB/Seastar, LeanStore) show the performance is real when the engine owns its cache and scheduling.

# What failed

- **SPDK in mainstream databases.** Polling cores, exclusive device ownership, no file system, root privileges and poor fit with containers and cloud block storage made it unattractive outside storage appliances and research systems.
- **Security and operations.** Google reported that about 60% of submissions to its kCTF kernel-exploit reward program involved io_uring, and disabled or restricted it in several environments[^google-iouring]. Container runtimes and hardened kernels sometimes block it, so databases must keep a fallback path (PostgreSQL's default `io_method` is `worker`, not `io_uring`[^pg18]).
- **Cloud network storage limits the win.** On EBS-style volumes the bottleneck is the network device's IOPS budget, not syscalls.

# Why

1. **Hardware outran the OS interface.** NVMe made the CPU cost per I/O matter; io_uring fixed that inside the kernel, so it kept file systems, permissions and tooling. That compromise is why it spread and SPDK did not.
2. **Async I/O requires engine redesign.** Benefits only appear when the engine issues many I/Os concurrently (prefetching, batched flushing). That is why PostgreSQL needed years of work and why rewrites (Limbo/Turso) used it as justification[^limbo].
3. **A large new kernel attack surface** collided with multi-tenant cloud security priorities[^phoronix-google].

# Lessons

- The interface that keeps the OS in the loop (io_uring) beat the one that removes it (SPDK): operability beats peak speed.
- Performance features in the kernel can be vetoed by security teams; design a fallback.
- I/O interfaces only pay off with an engine designed for many outstanding requests.

# Related

- [SPDK](/systems/spdk.md), [PostgreSQL](/systems/postgresql.md), [TigerBeetle](/systems/tigerbeetle.md), [ScyllaDB](/systems/scylladb.md)
- [NVMe-era storage engines](/ideas/hardware-engines/ssd-optimized-buffer-managers.md)
- [Google restricts io_uring (2023)](/events/2023-06-google-restricts-io-uring.md)
- [PostgreSQL 18 ships async I/O (2025)](/events/2025-09-postgresql-18-async-io.md)
- [Paper: What Modern NVMe Storage Can Do (2023)](/papers/2023-modern-nvme-storage.md)
