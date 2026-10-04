---
type: Idea
title: "NewSQL / Spanner-style distributed SQL"
description: "Horizontally scalable, strongly consistent SQL databases built on consensus-replicated ranges (Spanner, CockroachDB, YugabyteDB, TiDB). Verdict: mixed. The architecture won and hyperscalers now sell it (Spanner, Aurora DSQL), but the independent vendors never became the default OLTP database. They peaked on 2021 valuations, then retreated into enterprise niches and tighter licenses."
tags: [distributed-sql, newsql, oltp, consensus, raft, spanner, postgres-compatibility]
area: distributed-sql
verdict: mixed
hype_peak: 2021
adoption_2026: common
origins: "Google Spanner (OSDI 2012), F1 (VLDB 2013); the 'NewSQL' label was coined by 451 Research in 2011"
key_systems: [systems/spanner, systems/cockroachdb, systems/yugabytedb, systems/tidb, systems/aurora-dsql, systems/singlestore]
related_ideas: [ideas/distributed-sql/sharding-middleware, ideas/distributed-sql/geo-partitioning-data-residency, ideas/distributed-sql/htap, ideas/distributed-sql/deterministic-transactions, ideas/cloud-architecture/disaggregated-storage-compute-oltp, ideas/postgres-ecosystem/just-use-postgres]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: crdb-series-f
    resource: https://www.cnbc.com/2021/12/16/software-start-up-cockroach-labs-doubles-valuation-in-latest-funding.html
    title: "CNBC: Cockroach Labs doubles valuation in red hot market (2021-12-16)"
  - id: yb-series-c
    resource: https://www.theregister.com/2021/10/29/yugabyte_series_c/
    title: "The Register: Yugabyte raises $188m in Series C (2021-10-29)"
  - id: pingcap-d
    resource: https://www.pingcap.com/press-release/pingcap-the-company-behind-tidb-raises-270-million-in-series-d-funding/
    title: "PingCAP raises $270 million Series D (2020-11-17)"
    author: org:pingcap
  - id: crdb-2024
    resource: https://www.infoq.com/news/2024/09/cockroachdb-license-concerns/
    title: "InfoQ: Concerns rise as CockroachDB ends Core free edition (2024-09)"
  - id: crdb-private
    resource: https://www.cockroachlabs.com/blog/source-code-protection/
    title: "Cockroach Labs: moving CockroachDB and Pebble to private development (2026-09-15)"
    author: org:cockroach-labs
  - id: spanner-2024
    resource: https://cloud.google.com/blog/products/databases/spanner-innovations-in-2024
    title: "Google Cloud: Spanner innovations in 2024"
    author: org:google-cloud
  - id: spanner-gis
    resource: https://cloud.google.com/blog/products/databases/use-spanner-at-low-cost-with-granular-instance-sizing
    title: "Google Cloud: Use Spanner at low cost with granular instance sizing (2022)"
    author: org:google-cloud
  - id: dsql-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2025/05/amazon-aurora-dsql-generally-available
    title: "AWS: Amazon Aurora DSQL is now generally available (2025-05-27)"
    author: org:aws
  - id: dsql-compat
    resource: https://docs.aws.amazon.com/aurora-dsql/latest/userguide/working-with-postgresql-compatibility-unsupported-features.html
    title: "AWS docs: Aurora DSQL PostgreSQL compatibility and limits"
    author: org:aws
  - id: singlestore-bb
    resource: https://www.blocksandfiles.com/ai-ml/2025/09/17/singlestore-sidesteps-into-private-equity-ownership/1589537
    title: "Blocks and Files: SingleStore sidesteps into private equity ownership (2025-09-17)"
  - id: ibm-crdb
    resource: https://www.theregister.com/2025/10/08/ibm_cockroachdb_mainframe_postgres/
    title: "The Register: IBM and CockroachDB partner to bring PostgreSQL to mainframe (2025-10-08)"
  - id: tidbx
    resource: https://www.pingcap.com/blog/introducing-tidb-x-a-new-foundation-distributed-sql-ai-era/
    title: "PingCAP: TiDB X, a new foundation for distributed SQL (2025-10)"
    author: org:pingcap
  - id: oxide-rfd
    resource: https://rfd.shared.oxide.computer/rfd/0508
    title: "Oxide RFD 508: Whither CockroachDB?"
    author: org:oxide-computer
---

# Summary
**Verdict: mixed.** The core technical claim of NewSQL held up. A SQL database can shard itself into consensus-replicated ranges, keep serializable or snapshot-isolated transactions across nodes and regions, and survive the loss of a zone or a region with no data loss. Spanner showed this at Google scale (4 billion queries per second at peak, more than 15 EB managed)[^spanner-2024], and by 2025 AWS was selling a separate distributed SQL implementation as Aurora DSQL[^dsql-ga]. The business claim did not hold. Distributed SQL was supposed to replace Postgres and MySQL as the default OLTP database, and it did not. The independent vendors raised at peak valuations in 2020–2021[^crdb-series-f][^yb-series-c][^pingcap-d] and then spent 2023–2026 narrowing into enterprise niches. Cockroach Labs repeatedly tightened its license[^crdb-2024][^crdb-private], and SingleStore agreed to a private-equity buyout at a press-reported price below its prior valuation; official terms were not disclosed[^singlestore-bb]. Our assessment is that ordinary Postgres deployments and sharding middleware remain strong alternatives; the collected sources do not quantify their share of the addressable market.

# The idea
Spanner (2012) showed that you could combine the relational model and ACID transactions with automatic sharding and synchronous replication across data centers. It used Paxos groups per data range and TrueTime clocks to order commits. The open-source "Spanner clones" replaced TrueTime with hybrid logical clocks (CockroachDB, YugabyteDB) or a central timestamp oracle (TiDB, after Percolator), and replaced Paxos with Raft. They put a Postgres-compatible (CockroachDB, YugabyteDB) or MySQL-compatible (TiDB) SQL layer on top. The promise was to never shard by hand again, never lose data to a node failure, run active-active across regions, and keep using SQL.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2019 | CockroachDB moves from Apache 2.0 to BSL (Jun). Yugabyte goes the other way and makes everything Apache 2.0 (Jul) | +/− |
| 2020 | PingCAP raises $270M Series D[^pingcap-d]. TiDB HTAP paper at VLDB | + |
| 2021 | Cockroach raises $160M and then $278M at a $5B valuation. Yugabyte raises $188M at $1.3B[^pavlo-2021][^crdb-series-f][^yb-series-c]. Spanner announces a PostgreSQL interface (Oct)[^pavlo-2021] | + (peak) |
| 2022 | Spanner granular instances bring the entry price down to about $40/month[^spanner-gis] | + |
| 2024 | CockroachDB retires free Core and requires paid licenses above $10M revenue (Aug, effective Nov)[^crdb-2024]. Spanner adds graph, full-text and vector search, and geo-partitioning[^spanner-2024] | − / + |
| 2025 | Aurora DSQL GA (May 27)[^dsql-ga]. SingleStore buyout by Vector Capital (Sept)[^singlestore-bb]. IBM OEMs CockroachDB for Z/LinuxONE (Oct)[^ibm-crdb]. TiDB X moves TiDB onto object storage (Oct)[^tidbx] | mixed |
| 2026 | Cockroach Labs moves CockroachDB development to private repositories, citing AI (Sept 15)[^crdb-private] | − |

# What succeeded
- **The architecture.** Range-sharded, Raft/Paxos-replicated storage with MVCC and a SQL layer is now a standard design. Google, AWS (DSQL, and Limitless for sharded Aurora) and Microsoft (via Citus) all ship a version of it.
- **Resilience as the selling point.** The pitch that actually sold was surviving region and zone failures with zero RPO, not scale. IBM's 2025 OEM deal sells CockroachDB to mainframe customers on exactly that point[^ibm-crdb].
- **Spanner as a product.** Google made Spanner cheaper to enter ($40/month)[^spanner-gis], added a Postgres dialect and multi-model features, and claims 4B QPS at peak[^spanner-2024]. This establishes a continuing hyperscaler offering; the cited source does not disclose product-level profitability.
- **TiDB in large Chinese and Asian internet companies.** TiDB became the most-starred project in the category (about 40k GitHub stars) and is still developed in the open under Apache 2.0.

# What failed
- **Becoming the default.** By 2025 Pavlo's review describes the Postgres world mostly in terms of single-node Postgres and sharding layers. YugabyteDB is "a hard fork, so it is only compatible with PostgreSQL v15"[^pavlo-2025]. "Postgres-compatible" turned out to mean the wire protocol plus a subset of the semantics. Extensions, triggers, stored procedures and large transactions are the usual gaps. Aurora DSQL in 2026 still caps a transaction at 3,000 modified rows, fixes isolation at Repeatable Read and has no PL/pgSQL[^dsql-compat].
- **Venture economics.** The 2021 rounds priced these companies like future Oracles. By 2025, SingleStore (peak valuation $1.3B, $464M raised) sold for a reported ~$500M[^singlestore-bb]. The latest priced Cockroach round identified in this research is December 2021; absence from this source set is not proof that no later financing occurred.
- **Openness.** CockroachDB went from Apache to BSL (2019), then ended the free tier for companies above $10M revenue (2024)[^crdb-2024], then moved to private source (2026)[^crdb-private]. Oxide, which embeds CockroachDB, froze on the 22.x line rather than accept the new terms[^oxide-rfd].

# Why
1. **Most OLTP workloads fit on one machine.** NVMe SSDs, machines with hundreds of cores and terabytes of RAM, and Aurora-style disaggregated storage pushed the "must shard" point far past what most companies reach. Distributed SQL pays a consensus round trip on every write and a coordination cost on cross-range transactions, so on small workloads it is slower and more expensive than Postgres.
2. **Compatibility is a moving target.** Re-implementing Postgres semantics on a new storage engine (CockroachDB, Spanner, DSQL) or forking Postgres (YugabyteDB) means always trailing upstream. The Postgres extension ecosystem, which became the main reason to choose Postgres after 2020, mostly does not carry over.
3. **Hyperscalers own the managed-service margin.** Spanner and DSQL run inside the cloud bill, with no egress or procurement friction. Independent vendors had to sell multi-cloud and on-prem portability, which is a smaller enterprise market.
4. **The money was raised for a bigger market.** 2021 valuations needed mass adoption. When growth fell short, the companies tightened licenses to push large users toward paying, which reduced community adoption further.

# Lessons
- An architecture can win while its startups lose. Hyperscalers adopt the proven design and bundle it.
- "Wire-compatible" is not "compatible". Migration cost lives in semantics, extensions and tooling.
- Sell what buyers fear losing (availability, RPO) rather than scale they may never need.
- Hardware growth keeps moving the threshold at which distribution pays off.

# Related
- Systems: [Spanner](/systems/spanner.md), [CockroachDB](/systems/cockroachdb.md), [YugabyteDB](/systems/yugabytedb.md), [TiDB](/systems/tidb.md), [Aurora DSQL](/systems/aurora-dsql.md), [SingleStore](/systems/singlestore.md)
- Ideas: [Sharding middleware](/ideas/distributed-sql/sharding-middleware.md), [Geo-partitioning](/ideas/distributed-sql/geo-partitioning-data-residency.md), [HTAP](/ideas/distributed-sql/htap.md), [Just use Postgres](/ideas/postgres-ecosystem/just-use-postgres.md), [Disaggregated storage](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md)
- Events: [Cockroach Series F](/events/2021-12-cockroach-labs-series-f.md), [CockroachDB retires Core](/events/2024-08-cockroachdb-retires-core.md), [Aurora DSQL GA](/events/2025-05-aurora-dsql-ga.md), [SingleStore buyout](/events/2025-09-singlestore-vector-capital-buyout.md), [CockroachDB private source](/events/2026-09-cockroachdb-private-source.md)

[^pavlo-2021]: Pavlo, Databases in 2021.
[^pavlo-2025]: Pavlo, Databases in 2025.
[^crdb-series-f]: CNBC, 2021-12-16.
[^yb-series-c]: The Register, 2021-10-29.
[^pingcap-d]: PingCAP press release, 2020-11-17.
[^crdb-2024]: InfoQ, Sept 2024.
[^crdb-private]: Cockroach Labs blog, 2026-09-15.
[^spanner-2024]: Google Cloud blog, Dec 2024.
[^spanner-gis]: Google Cloud blog, 2022.
[^dsql-ga]: AWS What's New, 2025-05-27.
[^dsql-compat]: AWS Aurora DSQL documentation, accessed 2026-10.
[^singlestore-bb]: Blocks and Files, 2025-09-17.
[^ibm-crdb]: The Register, 2025-10-08.
[^tidbx]: PingCAP blog, Oct 2025.
[^oxide-rfd]: Oxide RFD 508.
