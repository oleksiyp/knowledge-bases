---
type: Event
title: "CedarDB comes out of stealth"
description: "The TUM Umbra team launched CedarDB, a PostgreSQL-compatible commercial database built on Umbra's SSD-speed buffer manager and compiled execution."
date: 2024-05-28
year: 2024
kind: launch
signal: positive
ideas: [ideas/hardware-engines/ssd-optimized-buffer-managers, ideas/hardware-engines/query-compilation-vs-vectorization]
systems: [systems/cedardb, systems/umbra]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-x
    resource: https://x.com/andy_pavlo/status/1795487996717981914
    title: "Andy Pavlo on X: CedarDB is out of stealth (2024-05-28)"
    author: person:andy-pavlo
  - id: cedardb-about
    resource: https://cedardb.com/about/
    title: "CedarDB: About us"
    author: org:cedardb
  - id: cedardb-ce
    resource: https://cedardb.com/blog/launch/
    title: "CedarDB: Announcing the CedarDB Community Edition"
    author: org:cedardb
---

# What happened

In late May 2024 CedarDB, a spin-off from the Technical University of Munich led by the team behind Umbra (and earlier HyPer), came out of stealth with a PostgreSQL-compatible system[^pavlo-x][^cedardb-about]. A free Community Edition followed in May 2025[^cedardb-ce].

# Why it matters

It is the main commercial test of a decade of TUM research arguing that NVMe-aware buffer management plus compiled execution can match in-memory systems while handling larger-than-memory data. Whether it gains adoption will show if top-tier engine research can still create a company in a market dominated by PostgreSQL and cloud warehouses.

# Related

- [CedarDB](/systems/cedardb.md), [Umbra](/systems/umbra.md)
- [NVMe-era storage engines](/ideas/hardware-engines/ssd-optimized-buffer-managers.md)
