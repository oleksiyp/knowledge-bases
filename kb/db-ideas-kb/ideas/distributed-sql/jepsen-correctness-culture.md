---
type: Idea
title: "Jepsen-driven correctness culture"
description: "Independent, black-box fault-injection testing of database consistency claims, published as detailed reports and often paid for by the vendor. Verdict: won. After 2018 a Jepsen report became an expected part of launching a serious distributed database, and the Elle checker (VLDB 2020) extended scrutiny to the isolation levels of single-node SQL databases. Whole categories of vague marketing claims stopped being credible."
tags: [jepsen, correctness, isolation, consistency, testing, elle, transparency]
area: distributed-sql
verdict: won
hype_peak: 2020
adoption_2026: common
origins: "Kyle Kingsbury's 'Call Me Maybe' series (2013–2016); Jepsen became a consultancy around 2016"
key_systems: [systems/jepsen, systems/tigerbeetle, systems/fauna, systems/tidb, systems/yugabytedb, systems/postgresql, systems/mysql]
related_ideas: [ideas/distributed-sql/deterministic-simulation-testing, ideas/distributed-sql/newsql-distributed-sql, ideas/distributed-sql/deterministic-transactions]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: jepsen-list
    resource: https://jepsen.io/analyses
    title: "Jepsen: Analyses index"
    author: person:kyle-kingsbury
  - id: elle
    resource: https://arxiv.org/abs/2003.10554
    title: "Kingsbury & Alvaro: Elle, Inferring Isolation Anomalies from Experimental Observations (PVLDB 14(3), 2020)"
  - id: j-pg12
    resource: https://jepsen.io/analyses/postgresql-12.3
    title: "Jepsen: PostgreSQL 12.3 (2020-06)"
  - id: j-tidb
    resource: https://jepsen.io/analyses/tidb-2.1.7
    title: "Jepsen: TiDB 2.1.7 (2019-06)"
  - id: j-yb131
    resource: https://jepsen.io/analyses/yugabyte-db-1.3.1
    title: "Jepsen: YugaByte DB 1.3.1 (2019-09)"
  - id: j-fauna
    resource: https://jepsen.io/analyses/faunadb-2.5.4
    title: "Jepsen: FaunaDB 2.5.4 (2019-03)"
  - id: j-mysql
    resource: https://jepsen.io/analyses/mysql-8.0.34
    title: "Jepsen: MySQL 8.0.34 (2023-12)"
  - id: j-rds
    resource: https://jepsen.io/analyses/amazon-rds-for-postgresql-17.4
    title: "Jepsen: Amazon RDS for PostgreSQL 17.4 (2025-04)"
  - id: j-tb
    resource: https://jepsen.io/analyses/tigerbeetle-0.16.11
    title: "Jepsen: TigerBeetle 0.16.11 (2025-06)"
---

# Summary
**Verdict: won.** In 2018–2026, Jepsen changed how database correctness claims are made and checked. Vendors from TiDB, YugabyteDB and Fauna (2019) to Redpanda (2022), Bufstream (2024) and TigerBeetle (2025) paid for public analyses[^jepsen-list]. The reports were frank. TiDB allowed lost updates by default[^j-tidb]. YugabyteDB's serializable mode had G2-item cycles during master failures[^j-yb131]. Fauna had 19 issues[^j-fauna]. Each vendor then fixed the bugs and cited the report. The Elle checker (VLDB 2020)[^elle] turned isolation testing into an efficient, general tool. Aimed at the "safe" incumbents, it found that PostgreSQL 12's SERIALIZABLE was not serializable (fixed in 12.4)[^j-pg12], that MySQL's REPEATABLE READ allows lost updates[^j-mysql], and that Amazon RDS for PostgreSQL multi-AZ clusters violate snapshot isolation[^j-rds]. The limit: it is one small consultancy, and much of the market never gets tested.

# The idea
Run the real database on a real (or containerized) cluster and drive concurrent client operations while injecting partitions, crashes, pauses and clock skew. Record the history of what clients saw, then check it against a formal consistency model (linearizability, serializability, snapshot isolation). Publish everything, including the vendor's own documentation errors. Elle's key insight is to use append-only list operations whose reads reveal version order, so a checker can infer Adya-style dependency graphs and name the exact anomaly[^elle].

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2019 | FaunaDB 2.5.4 (Mar), YugaByte DB 1.1.9 (Mar), TiDB 2.1.7 (Jun), YugaByte DB 1.3.1 (Sep). All found significant issues, and all vendors fixed and publicized them[^jepsen-list] | + |
| 2020 | Elle paper (arXiv Mar, PVLDB 14). PostgreSQL 12.3 serializability bug (Jun)[^elle][^j-pg12] | + (peak) |
| 2023 | MySQL 8.0.34: REPEATABLE READ allows lost update and violates Monotonic Atomic View. AWS RDS MySQL clusters violate serializability[^j-mysql] | + |
| 2025 | RDS for PostgreSQL 17.4 multi-AZ shows Long Fork, so snapshot isolation is not met (Apr)[^j-rds]. TigerBeetle (Jun)[^j-tb] | + |
| 2026 | MariaDB Galera Cluster 12.1.2 analysis (Mar)[^jepsen-list] | + |

# What succeeded
- **Fix-and-publish became normal.** TiDB 3.0 turned off the auto-retry that caused lost updates[^j-tidb]. Postgres patched SSI within two months[^j-pg12]. Fauna fixed almost everything by 2.6.0[^j-fauna]. Vendors began citing Jepsen reports in sales material.
- **Shared vocabulary.** G2-item, G-single, Long Fork and "strict serializable" moved from papers into vendor documentation and engineering discussion.
- **Scrutiny of incumbents.** Elle showed that "mature" does not mean "correct". Even single-node Postgres and MySQL, and managed services from AWS, had documented gaps between claimed and actual isolation[^j-pg12][^j-mysql][^j-rds].
- **Methods spread.** Elle and the Jepsen library are open source, so vendors can run the same checks themselves. DST teams pair simulation with Jepsen (see [DST](/ideas/distributed-sql/deterministic-simulation-testing.md)).

# What failed
- **Coverage.** Jepsen published only one to four analyses a year, and none for some of the most-used distributed SQL systems (CockroachDB's only public report covers a 2016 beta, and we found none for Spanner or Aurora), according to the analyses index[^jepsen-list].
- **Selection bias.** Most analyses are vendor-funded. Vendors who expect to look bad can simply not commission one, so a missing report says little.
- **Isolation semantics remain confusing.** After all the reports, ANSI SQL isolation names still mean different things across engines, and the RDS finding shows managed services adding their own subtleties[^j-rds].

# Why
1. **Trust is the bottleneck for new databases.** Buyers cannot verify consistency claims themselves. A credible third party with public methods filled that gap, and vendors paid because a good report shortens enterprise sales.
2. **Reproducibility.** Detailed, reproducible reports with open tooling are hard to dismiss, which made fixing the bugs cheaper than arguing.
3. **Tool leverage.** Elle made checking cheap enough to apply to SQL isolation in general, not just to exotic NoSQL claims[^elle].

# Lessons
- Publish the method and the raw anomalies. Credibility comes from being able to reproduce the result, not from the brand.
- Test the incumbents too. The biggest surprises came from the "boring" databases.
- Independent verification scales poorly. Its techniques need to move into vendors' own CI, which is happening through Elle and DST.

# Related
- Systems: [Jepsen](/systems/jepsen.md), [TigerBeetle](/systems/tigerbeetle.md), [TiDB](/systems/tidb.md), [YugabyteDB](/systems/yugabytedb.md), [Fauna](/systems/fauna.md), [PostgreSQL](/systems/postgresql.md), [MySQL](/systems/mysql.md)
- Papers: [Elle (VLDB 2020)](/papers/2020-elle-isolation-checker.md)
- Events: [Jepsen tests TigerBeetle](/events/2025-06-jepsen-tigerbeetle.md)

[^jepsen-list]: jepsen.io/analyses, checked 2026-10-03.
[^elle]: Kingsbury & Alvaro, PVLDB 14(3).
[^j-pg12]: Jepsen, June 2020.
[^j-tidb]: Jepsen, June 2019.
[^j-yb131]: Jepsen, Sept 2019.
[^j-fauna]: Jepsen, March 2019.
[^j-mysql]: Jepsen, Dec 2023.
[^j-rds]: Jepsen, April 2025.
[^j-tb]: Jepsen, June 2025.
