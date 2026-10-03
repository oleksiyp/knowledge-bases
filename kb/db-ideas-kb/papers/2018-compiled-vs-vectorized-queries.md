---
type: Paper
title: "Everything You Always Wanted to Know About Compiled and Vectorized Queries But Were Afraid to Ask"
description: "VLDB 2018 paper implementing both data-centric compilation (HyPer-style) and vectorization (VectorWise-style) in one test system to compare them fairly; found neither dominates."
year: 2018
venue: VLDB 2018 (PVLDB 11)
authors: [Timo Kersten, Viktor Leis, Alfons Kemper, Thomas Neumann, Andrew Pavlo, Peter Boncz]
resource: https://www.vldb.org/pvldb/vol11/p2209-kersten.pdf
impact: high
ideas: [ideas/hardware-engines/query-compilation-vs-vectorization]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: kersten-vldb18
    resource: https://www.vldb.org/pvldb/vol11/p2209-kersten.pdf
    title: "Paper PDF (PVLDB 11(13): 2209–2222)"
  - id: photon-paper
    resource: https://people.eecs.berkeley.edu/~matei/papers/2022/sigmod_photon.pdf
    title: "Behm et al.: Photon (SIGMOD 2022)"
---

# Claim

Implementing both execution paradigms in the same framework (Typer and Tectorwise), the authors found that both are efficient and the differences are moderate: data-centric compilation executes fewer instructions and wins on computation-heavy, cache-resident queries; vectorization hides cache-miss latency better and wins on memory-bound operations such as large hash joins[^kersten-vldb18]. Other factors (SIMD, parallelization, OLTP support, compile time, profiling) also differ.

# What happened next

The paper's authors come from both camps (TUM/HyPer, CWI/VectorWise, CMU), which gave it credibility. With performance roughly a tie, industry chose on engineering grounds: nearly all new engines (DuckDB, Velox, Photon, DataFusion) are vectorized, and Photon's paper explicitly cites ease of development and debugging as a reason[^photon-paper]. Compilation continued in Umbra and CedarDB. "High" impact: it is the standard reference for this design decision.

# Related

- [JIT compilation vs vectorization](/ideas/hardware-engines/query-compilation-vs-vectorization.md)
- [HyPer](/systems/hyper.md), [Photon](/systems/photon.md)
