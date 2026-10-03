---
type: System
title: HyPer / Tableau Hyper
description: "TUM's main-memory HTAP research database (2010) that pioneered data-centric query compilation; acquired by Tableau in 2016 and shipped as Tableau's data engine in 2018, now part of Salesforce. A commercial success for compiled execution, though within a single vendor's product."
resource: https://tableau.github.io/hyper-db/
tags: [query-compilation, in-memory, htap, tableau, salesforce]
kind: product
first_release: 2018
org: "Tableau / Salesforce (originally Technical University of Munich)"
license: proprietary
outcome: acquired
ideas: [ideas/hardware-engines/query-compilation-vs-vectorization, ideas/hardware-engines/ssd-optimized-buffer-managers]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: hyper-acq
    resource: https://www.geekwire.com/2016/tableau-makes-another-acquisition-swoops-hyper-improve-database-computing/
    title: "GeekWire: Tableau acquires HyPer (2016)"
  - id: hyper-journey
    resource: https://tableau.github.io/hyper-db/journey/
    title: "Hyper API: Our Journey"
    author: org:tableau
  - id: tableau-10k
    resource: https://www.sec.gov/Archives/edgar/data/0001303652/000130365217000008/a10k2016.htm
    title: "Tableau Software Form 10-K FY2016"
    author: org:tableau
---

# Summary

HyPer ("Hybrid High Performance") was created at TUM by Alfons Kemper and Thomas Neumann around 2010 as a main-memory system for simultaneous OLTP and OLAP, best known for compiling queries to LLVM machine code. Tableau acquired it in March 2016[^hyper-acq] (the FY2016 10-K reports the purchase[^tableau-10k]) and in January 2018 shipped Tableau 10.5 with Hyper as its data engine, citing up to 5x faster queries and 3x faster extract creation[^hyper-journey]. It is now also exposed as the Hyper API and used within Salesforce. The TUM team moved on to Umbra and later CedarDB.

# Timeline

| Year | Event |
|---|---|
| 2016 | Acquired by Tableau[^hyper-acq] |
| 2018 | Ships in Tableau 10.5[^hyper-journey] |
| 2019 | Salesforce acquires Tableau |

# What worked

- One of the best academic-to-product transfers in databases: research code became the engine behind a widely used BI product.
- Proved compiled execution in production.

# What didn't

- As an embedded engine inside BI software, it did not compete as a general-purpose database; the compiled-execution model did not spread to most other vendors.
- The original pure in-memory design was later reconsidered by its own authors (Umbra moved to SSD-based storage).

# Related

- [Umbra](/systems/umbra.md), [CedarDB](/systems/cedardb.md)
- [JIT compilation vs vectorization](/ideas/hardware-engines/query-compilation-vs-vectorization.md)
- [Tableau ships Hyper (2018)](/events/2018-01-tableau-ships-hyper.md)
