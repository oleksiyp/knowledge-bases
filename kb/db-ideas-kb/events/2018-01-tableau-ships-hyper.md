---
type: Event
title: "Tableau 10.5 ships HyPer as its data engine"
description: "Tableau released 10.5 on 10 January 2018 with Hyper, the TUM research database it acquired in 2016, replacing its previous data engine: a rare academic compiled-query engine in mass production."
date: 2018-01-10
year: 2018
kind: launch
signal: positive
ideas: [ideas/hardware-engines/query-compilation-vs-vectorization]
systems: [systems/hyper]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tableau-blog
    resource: https://www.tableau.com/about/blog/2018/1/hyper-and-linux-arrive-tableau-105-80538
    title: "Tableau blog: Hyper and Linux arrive in Tableau 10.5!"
    author: org:tableau
  - id: hyper-journey
    resource: https://tableau.github.io/hyper-db/journey/
    title: "Hyper API: Our Journey"
    author: org:tableau
---

# What happened

On 10 January 2018 Tableau released version 10.5 with Hyper as its new data engine, after about 18 months of integration following the 2016 acquisition of HyPer from TUM[^tableau-blog][^hyper-journey]. Tableau cited up to 5x faster queries and up to 3x faster extract creation[^hyper-journey].

# Why it matters

It put data-centric query compilation into a product used by many thousands of organizations, the best evidence that compiled execution works in production. The same research group then moved from in-memory HyPer to SSD-based Umbra, and later to CedarDB.

# Related

- [HyPer](/systems/hyper.md)
- [JIT compilation vs vectorization](/ideas/hardware-engines/query-compilation-vs-vectorization.md)
