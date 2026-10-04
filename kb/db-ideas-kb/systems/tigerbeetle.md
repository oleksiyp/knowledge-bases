---
type: System
title: TigerBeetle
description: A specialized account-and-transfer database whose narrow model enables efficient batching and extensive correctness
  testing; production adoption remains a narrower claim than benchmark throughput.
kind: oss
outcome: growing
ideas:
- ideas/distributed-sql/specialized-oltp-ledgers
- ideas/distributed-sql/deterministic-simulation-testing
- ideas/distributed-sql/jepsen-correctness-culture
resource: https://tigerbeetle.com
org: TigerBeetle
license: Apache-2.0
first_release: 2020
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: tb-company
  resource: https://tigerbeetle.com/company
  title: 'TigerBeetle: Company (milestones)'
  author: org:tigerbeetle
- id: j-tb
  resource: https://jepsen.io/analyses/tigerbeetle-0.16.11
  title: 'Jepsen: TigerBeetle 0.16.11 (2025-06)'
  author: person:kyle-kingsbury
- id: tb-gh
  resource: https://github.com/tigerbeetle/tigerbeetle
  title: 'GitHub: tigerbeetle/tigerbeetle'
---

# Summary
TigerBeetle is an open-source database for accounts and transfers, written in Zig. Its fixed model deliberately gives up general SQL to concentrate on the transaction path and accounting invariants. It reached a production release in March 2024 and subsequently underwent independent Jepsen testing.[^tb-company][^j-tb] This is a credible specialized engine, with a clear integration cost: an application generally needs another database for customers, documents and other business state.

# Timeline
| Date | Event |
|---|---|
| 2020-07 | Project begins.[^tb-company] |
| 2024-03 | Version 0.15.3 released for production.[^tb-company] |
| 2025-01 | Company reports 100 million monthly production transactions across customers.[^tb-company] |
| 2025-06-06 | Jepsen publishes its analysis.[^j-tb] |
| 2026-08-26 | Company timeline records TigerBeetle Cloud launch.[^tb-company] |

# What worked
The public repository makes the implementation and its simulation framework inspectable.[^tb-gh] A narrow state machine also supports unusually detailed external checking: Jepsen built a model of accounting operations rather than testing only generic registers. The report found strong disk-corruption resilience and judged version 0.16.30 consistent with the promised strong serializability in the tested histories.[^j-tb]

# What didn't
Jepsen still found crashes, incomplete query results and operational problems; its June 2025 report left indefinite retries as an unresolved concern.[^j-tb] Simulation therefore complements external testing rather than substituting for it. The fixed schema also makes adoption an architectural decision. A team must define which system owns each invariant and how it reconciles ledger results with its general database. Reported customer transaction volume establishes real use, but is neither a count of customers nor proof that the product has replaced incumbent banking databases.[^tb-company]

# Related
- [Specialized OLTP ledgers](/ideas/distributed-sql/specialized-oltp-ledgers.md), [Jepsen](/systems/jepsen.md)
- [Jepsen analysis event](/events/2025-06-jepsen-tigerbeetle.md)

[^tb-company]: [TigerBeetle: Company (milestones)](https://tigerbeetle.com/company).
[^j-tb]: [Jepsen: TigerBeetle 0.16.11 (2025-06)](https://jepsen.io/analyses/tigerbeetle-0.16.11).
[^tb-gh]: [GitHub: tigerbeetle/tigerbeetle](https://github.com/tigerbeetle/tigerbeetle).
