---
type: Idea
title: "Deterministic / Calvin-style transactions"
description: "Order transactions up front through a replicated log, then execute them deterministically on every replica, with no two-phase commit. Verdict: failed commercially. Its prominent commercial example, Fauna, shut down in May 2025. That is evidence of Fauna's product failure, not a proof that deterministic transaction processing is commercially impossible."
tags: [transactions, calvin, determinism, consensus, serializability, research-to-product]
area: distributed-sql
verdict: failed
hype_peak: 2020
adoption_2026: rare
origins: "Calvin (Thomson, Abadi et al., SIGMOD 2012); FaunaDB built on it from 2016"
key_systems: [systems/fauna]
related_ideas: [ideas/distributed-sql/newsql-distributed-sql, ideas/distributed-sql/jepsen-correctness-culture, ideas/edge-devx/edge-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: abadi-cacm
    resource: https://cacm.acm.org/magazines/2018/9/230601-an-overview-of-deterministic-database-systems/fulltext
    title: "Abadi & Faleiro: An Overview of Deterministic Database Systems (CACM, Sept 2018)"
    author: person:daniel-abadi
  - id: slog
    resource: https://dl.acm.org/doi/10.14778/3342263.3342647
    title: "SLOG: serializable, low-latency, geo-replicated transactions (PVLDB 12(11), 2019)"
  - id: aria
    resource: https://dlnext.acm.org/doi/10.14778/3407790.3407808
    title: "Aria: a fast and practical deterministic OLTP database (PVLDB 13(12), 2020)"
  - id: workloads
    resource: http://www.cs.umd.edu/~abadi/papers/database-workloads.pdf
    title: "Are Database System Researchers Making Correct Assumptions about Transaction Workloads? (SIGMOD 2025)"
  - id: jepsen-fauna
    resource: https://jepsen.io/analyses/faunadb-2.5.4
    title: "Jepsen: FaunaDB 2.5.4 (2019-03)"
    author: person:kyle-kingsbury
  - id: fauna-27m
    resource: https://techcrunch.com/2020/07/01/fauna-raises-an-additional-27m-to-turn-databases-into-a-simple-api-call/
    title: "TechCrunch: Fauna raises an additional $27M (2020-07-01)"
  - id: fauna-graphql-eol
    resource: https://news.ycombinator.com/item?id=37438785
    title: "HN: End-of-Life of Fauna's GraphQL API (2023)"
  - id: fql10
    resource: https://www.theregister.com/2023/08/22/fauna_query_language/
    title: "The Register: Fauna Query Language tamed to appeal to developers (2023-08-22)"
  - id: fauna-future
    resource: https://fauna.com/blog/the-future-of-fauna
    title: "Fauna: The Future of Fauna (2025-03)"
    author: org:fauna
  - id: infoq-fauna
    resource: https://www.infoq.com/news/2025/03/fauna-shuts-down/
    title: "InfoQ: Fauna Shutting Down: Is the Future Open Source? (2025-03)"
  - id: fauna-gh
    resource: https://github.com/fauna/faunadb
    title: "GitHub: fauna/faunadb (Apache-2.0 core release, Apr 2025)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary
**Verdict: failed for the Fauna-led commercial bet examined here; still influential as research.** Deterministic databases agree on a global order of transactions *before* executing them. Every replica then runs the same input in the same order and reaches the same state, with no two-phase commit and no aborts caused by replication. The research line was strong: Calvin (2012), a CACM overview in 2018[^abadi-cacm], SLOG for geo-replication (2019)[^slog], and Aria (2020)[^aria]. Fauna was the prominent commercial bet examined here. It raised about $57M[^fauna-27m], completed a demanding Jepsen analysis with documented fixes and remaining qualifications[^jepsen-fauna], and shut down its service on 30 May 2025, saying it could not raise the capital to keep going[^fauna-future][^infoq-fauna]. The collected evidence does not establish another mainstream Calvin-style replacement for general-purpose SQL databases. The failure was mostly about product (a proprietary query language, a GraphQL bet, serverless-only delivery), not about the protocol.

# The idea
In conventional distributed databases, each node executes transactions concurrently and the nodes then *agree* on outcomes using locks, 2PC and consensus per commit. Calvin reverses the order. A sequencing layer batches incoming transactions into a replicated log every few milliseconds, and schedulers acquire locks in log order. Because execution is deterministic, replicas never diverge and no commit protocol is needed. The costs are that transactions must be submitted whole ("one-shot", not interactive) and that their read/write sets must be known or discovered in advance[^abadi-cacm].

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018 | Abadi & Faleiro's CACM overview presents determinism as a general design principle[^abadi-cacm] | + |
| 2019 | Jepsen finds 19 issues in FaunaDB 2.5.4. Nearly all were fixed by 2.6.0, and core key-value operations held up[^jepsen-fauna]. SLOG at VLDB[^slog] | + |
| 2020 | Fauna raises $27M (about $57M total), with Bob Muglia as chairman[^fauna-27m]. Aria at VLDB[^aria] | + (peak) |
| 2023 | Fauna ends its GraphQL API and relaunches FQL v10, a TypeScript-like query language[^fauna-graphql-eol][^fql10] | − |
| 2025 | Fauna announces wind-down (Mar 21). Service off May 30. Core code released under Apache-2.0[^fauna-future][^fauna-gh]. A SIGMOD paper finds that real web apps mostly *do* fit the one-shot assumption[^workloads] | − |
| 2026 | The open-source FaunaDB repo has had no commits since May 2025[^fauna-gh] | − |

# What succeeded
- **Correctness.** Fauna and Jepsen worked together for three months. Basic key-value operations ranged from snapshot isolation up to strict serializability depending on the workload, and Fauna fixed almost all 19 issues found[^jepsen-fauna]. Determinism did make strong guarantees easier to provide.
- **Academic influence.** The model shaped later research on geo-replication (SLOG), batching (Aria) and queue-oriented execution, and sharpened thinking about how to avoid 2PC.
- **The workload assumption mostly holds.** A 2025 study of 111 open-source web applications found that 39% have no interactive transactions at all, and that most transactions' read/write sets can be inferred[^workloads]. The technical objection most often raised against determinism was weaker than people assumed.

# What failed
- **Fauna as a business.** It offered serverless-only access, its own query language (FQL), and a large bet on GraphQL that it abandoned in 2023[^fauna-graphql-eol]. Pavlo's summary: Fauna provided strong transactions just as "Spanner made transactions cool again", "but they had a proprietary query language and made big bets on GraphQL"[^pavlo-2025].
- **No second adopter.** None of the major distributed SQL vendors (Spanner, CockroachDB, YugabyteDB, TiDB, DSQL) adopted Calvin-style ordering. They all kept interactive SQL transactions with per-commit consensus.
- **The open-source release was a burial, not a relaunch.** The code was published under Apache-2.0 in April 2025 and has had essentially no activity since[^fauna-gh].

# Why
1. **SQL clients are interactive by default.** Every ORM and driver assumes it can open a transaction, read, think and write. Determinism requires stored procedures or one-shot programs. Even if most transactions *could* be one-shot[^workloads], the tooling does not express them that way, so adopting the model meant leaving SQL. Fauna did leave it, and that cost it most developers.
2. **The cost being removed got cheaper.** Within one region, Raft round trips are sub-millisecond, and Spanner-style systems hide 2PC well enough. Determinism's advantage is largest across regions, which is a small market.
3. **Capital intensity of a global serverless DBaaS.** Fauna said building a new operational database that runs as a global service is "very capital intensive" and that its board could not raise more money in the 2025 market[^fauna-future].
4. **Product bets stacked on top of the protocol.** A new protocol, a new query language, a new data model (document-relational) and a new delivery model (serverless-only) were each a source of adoption friction, and Fauna took all four at once.

# Lessons
- A strong protocol does not carry a product that also asks users to learn a new language and API.
- Removing a cost (2PC) only matters if that cost is what blocks buyers.
- Releasing source at shutdown keeps the code available but does not build a community.

# Related
- Systems: [Fauna](/systems/fauna.md), [Spanner](/systems/spanner.md)
- Ideas: [NewSQL / distributed SQL](/ideas/distributed-sql/newsql-distributed-sql.md), [Jepsen culture](/ideas/distributed-sql/jepsen-correctness-culture.md)
- Events: [Fauna shuts down](/events/2025-03-fauna-shuts-down.md)

[^abadi-cacm]: CACM 61(9), 2018.
[^slog]: PVLDB 12(11), 2019.
[^aria]: PVLDB 13(12), 2020.
[^workloads]: Abadi et al., SIGMOD 2025 (PACMMOD).
[^jepsen-fauna]: Jepsen, March 2019.
[^fauna-27m]: TechCrunch, 2020-07-01.
[^fauna-graphql-eol]: Hacker News thread on Fauna's GraphQL end-of-life notice, Sept 2023.
[^fql10]: The Register, 2023-08-22.
[^fauna-future]: Fauna blog, March 2025.
[^infoq-fauna]: InfoQ, March 2025.
[^fauna-gh]: GitHub fauna/faunadb, created 2025-04-29, last push 2025-05-03 (checked 2026-10-03).
[^pavlo-2025]: Pavlo, Databases in 2025.
