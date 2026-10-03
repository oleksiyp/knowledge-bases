---
type: Event
title: "PostgreSQL 18 ships asynchronous I/O (with io_uring)"
description: "PostgreSQL 18, released 25 September 2025, added an asynchronous I/O subsystem with worker and io_uring backends, the first big step away from PostgreSQL's reliance on synchronous reads through the OS page cache."
date: 2025-09-25
year: 2025
kind: launch
signal: positive
ideas: [ideas/hardware-engines/io-uring-kernel-bypass, ideas/hardware-engines/ssd-optimized-buffer-managers]
systems: [systems/postgresql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pg18
    resource: https://www.postgresql.org/about/press/presskit18
    title: "PostgreSQL 18 press kit"
    author: org:postgresql
  - id: phoronix-pg18
    resource: https://www.phoronix.com/news/PostgreSQL-18-Released
    title: "Phoronix: PostgreSQL 18.0 Released With Async I/O"
  - id: pganalyze-aio
    resource: https://pganalyze.com/blog/postgres-18-async-io
    title: "pganalyze: Waiting for Postgres 18: Accelerating Disk Reads with Asynchronous I/O"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# What happened

PostgreSQL 18 was released on 25 September 2025 with a new asynchronous I/O subsystem controlled by the io_method setting: worker (background I/O processes, the default), io_uring (Linux) or sync (previous behaviour)[^pg18][^phoronix-pg18]. Early analyses reported up to 2–3x faster sequential scans and similar operations on cloud storage with high per-request latency[^pganalyze-aio].

# Why it matters

The most widely used open-source database started adopting the NVMe-era I/O model. Pavlo described it as putting PostgreSQL on the path to dropping its reliance on the OS page cache[^pavlo-2025]. The default is not io_uring, a reminder that io_uring's security and portability concerns still shape adoption.

# Related

- [io_uring and kernel bypass](/ideas/hardware-engines/io-uring-kernel-bypass.md)
- [PostgreSQL](/systems/postgresql.md)
