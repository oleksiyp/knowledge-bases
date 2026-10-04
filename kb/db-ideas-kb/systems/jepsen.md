---
type: System
title: Jepsen
description: Public fault-injection analyses and open testing tools made consistency claims reproducible and contestable;
  findings apply to tested versions and workloads, not permanent product certifications.
kind: oss
outcome: stable
ideas:
- ideas/distributed-sql/jepsen-correctness-culture
resource: https://jepsen.io
org: Jepsen / Kyle Kingsbury
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: jepsen-list
  resource: https://jepsen.io/analyses
  title: 'Jepsen: Analyses index'
  author: person:kyle-kingsbury
- id: jepsen-ethics
  resource: https://jepsen.io/ethics
  title: Jepsen ethics policy
- id: elle-paper
  resource: https://arxiv.org/abs/2003.10554
  title: 'Elle: Inferring Isolation Anomalies from Experimental Observations'
- id: j-pg12
  resource: https://jepsen.io/analyses/postgresql-12.3
  title: 'Jepsen: PostgreSQL 12.3 (2020-06)'
- id: j-tb
  resource: https://jepsen.io/analyses/tigerbeetle-0.16.11
  title: 'Jepsen: TigerBeetle 0.16.11 (2025-06)'
  author: person:kyle-kingsbury
---

# Summary
Jepsen is both a testing consultancy and an open-source framework for examining distributed-system behavior under concurrency and faults. Its central contribution to database adoption is public evidence: a report states the tested versions, workloads, anomalies and vendor responses, so a consistency claim can be checked rather than accepted as branding.[^jepsen-list] Its ethics policy describes the relationship between paid engagements and publication.[^jepsen-ethics]

# Timeline
| Year | Event |
|---|---|
| 2019 | Public analyses cover Fauna, TiDB and YugabyteDB.[^jepsen-list] |
| 2020 | Elle presents inference of isolation anomalies from observed transactions.[^elle-paper] |
| 2020 | PostgreSQL 12.3 analysis identifies a serializable-isolation defect.[^j-pg12] |
| 2025 | TigerBeetle report evaluates accounting semantics and faults.[^j-tb] |

# What worked
Elle widened the practical reach of correctness testing. Instead of exploring every possible ordering of an arbitrary history, carefully chosen operations expose enough version information to build dependency graphs and find prohibited cycles.[^elle-paper] The PostgreSQL analysis also demonstrated that established single-node systems deserve scrutiny, not just ambitious distributed startups.[^j-pg12] Together, the tool and reports made defects easier to name, reproduce and fix.

# What didn't
A test observes finitely many executions. An absence of detected anomalies is conditional evidence, not a mathematical proof and not a certification of later releases. The public analyses are also a selected sample of products; the index should not be read as a market-wide ranking.[^jepsen-list] Payment and disclosure rules help readers evaluate that sample but do not make it exhaustive.[^jepsen-ethics] Our assessment is that the enduring success is the method and the public record of fixes, rather than a simple pass/fail seal.

# Related
- [Correctness culture](/ideas/distributed-sql/jepsen-correctness-culture.md), [TigerBeetle](/systems/tigerbeetle.md)
- [Elle paper](/papers/2020-elle-isolation-checker.md)

[^jepsen-list]: [Jepsen: Analyses index](https://jepsen.io/analyses).
[^jepsen-ethics]: [Jepsen ethics policy](https://jepsen.io/ethics).
[^elle-paper]: [Elle: Inferring Isolation Anomalies from Experimental Observations](https://arxiv.org/abs/2003.10554).
[^j-pg12]: [Jepsen: PostgreSQL 12.3 (2020-06)](https://jepsen.io/analyses/postgresql-12.3).
[^j-tb]: [Jepsen: TigerBeetle 0.16.11 (2025-06)](https://jepsen.io/analyses/tigerbeetle-0.16.11).
