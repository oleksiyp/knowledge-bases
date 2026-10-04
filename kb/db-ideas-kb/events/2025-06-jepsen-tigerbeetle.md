---
type: Event
title: Jepsen publishes TigerBeetle correctness analysis
description: Jepsen publishes a TigerBeetle analysis that documents fixes and strong storage-fault resilience while illustrating
  the limits of simulation alone.
date: '2025-06-06'
year: 2025
kind: paper
signal: positive
ideas:
- ideas/distributed-sql/specialized-oltp-ledgers
- ideas/distributed-sql/jepsen-correctness-culture
- ideas/distributed-sql/deterministic-simulation-testing
systems:
- systems/tigerbeetle
- systems/jepsen
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: j-tb
  resource: https://jepsen.io/analyses/tigerbeetle-0.16.11
  title: 'Jepsen: TigerBeetle 0.16.11 (2025-06)'
  author: person:kyle-kingsbury
---

# What happened
On June 6, 2025, Jepsen published its TigerBeetle analysis. The tested versions exposed bugs and led to fixes; the report also documented strong resilience under storage faults.[^j-tb]

# Why it matters
The significance is methodological. A database with extensive internal simulation still benefited from an independently designed workload and a detailed model of its public API. Our assessment is that this supports combining testing approaches rather than treating either one as a certification. Simulation makes executions replayable and explores fault combinations quickly. External testing asks whether real client-visible behavior matches the promised contract. For a specialized ledger, that contract includes accounting operations, not merely generic read and write behavior. The report should therefore be read with its version, workload and unresolved-issue boundaries, rather than reduced to a permanent statement that the product passed Jepsen.

# Related
- [Tigerbeetle](/systems/tigerbeetle.md)
- [Jepsen](/systems/jepsen.md)
- [Specialized Oltp Ledgers](/ideas/distributed-sql/specialized-oltp-ledgers.md)
- [Jepsen Correctness Culture](/ideas/distributed-sql/jepsen-correctness-culture.md)
- [Deterministic Simulation Testing](/ideas/distributed-sql/deterministic-simulation-testing.md)

[^j-tb]: [Jepsen: TigerBeetle 0.16.11 (2025-06)](https://jepsen.io/analyses/tigerbeetle-0.16.11).
