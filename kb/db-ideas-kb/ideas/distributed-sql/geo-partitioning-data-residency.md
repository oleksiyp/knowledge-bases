---
type: Idea
title: "Multi-region and geo-partitioned databases for latency and data residency"
description: "One logical database spread across continents. Each row is pinned to a home region for low latency and legal residency, while transactions stay strongly consistent. Verdict: niche. The features shipped and work (CockroachDB REGIONAL BY ROW, Spanner geo-partitioning, Aurora DSQL multi-region), but most companies meet residency rules with separate per-region deployments and use multi-region mainly for disaster recovery."
tags: [multi-region, geo-partitioning, data-residency, gdpr, latency, active-active]
area: distributed-sql
verdict: niche
hype_peak: 2021
adoption_2026: niche
origins: "Spanner's placement policies (2012); CockroachDB geo-partitioning (2018, enterprise feature)"
key_systems: [systems/cockroachdb, systems/spanner, systems/yugabytedb, systems/aurora-dsql, systems/fauna]
related_ideas: [ideas/distributed-sql/newsql-distributed-sql, ideas/edge-devx/edge-databases, ideas/cloud-architecture/byoc]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: crdb-211
    resource: https://www.cockroachlabs.com/blog/cockroachdb-21-1-release/
    title: "Cockroach Labs: CockroachDB 21.1, start small, scale fast, go global (2021-05)"
    author: org:cockroach-labs
  - id: tt-211
    resource: https://www.techtarget.com/searchdatamanagement/news/252501167/CockroachDB-version-211-simplifies-distributed-SQL-database
    title: "TechTarget: CockroachDB version 21.1 simplifies distributed SQL database"
  - id: crdb-vldb22
    resource: https://www.vldb.org/pvldb/vol15/p3610-taft.pdf
    title: "A Demonstration of Multi-Region CockroachDB (PVLDB 15, 2022)"
  - id: spanner-2024
    resource: https://cloud.google.com/blog/products/databases/spanner-innovations-in-2024
    title: "Google Cloud: Spanner innovations in 2024 (geo-partitioning, dual-region)"
    author: org:google-cloud
  - id: dsql-ga
    resource: https://press.aboutamazon.com/2025/5/aws-announces-the-general-availability-of-amazon-aurora-dsql-the-fastest-distributed-sql-database
    title: "Amazon: AWS announces GA of Aurora DSQL (2025-05-27)"
    author: org:aws
  - id: schrems2
    resource: https://en.wikipedia.org/wiki/Data_Protection_Commissioner_v_Facebook_Ireland_and_Maximillian_Schrems
    title: "Wikipedia: Schrems II (CJEU, 16 July 2020)"
  - id: crdb-2024
    resource: https://siliconangle.com/2024/08/15/cockroach-labs-changes-self-hosting-license-single-enterprise-model/
    title: "SiliconANGLE: Cockroach Labs changes its self-hosting license (2024-08-15)"
  - id: ibm-crdb
    resource: https://siliconangle.com/2025/10/07/exclusive-ibm-tightens-partnership-cockroach-labs-fuel-customer-modernization-initiatives/
    title: "SiliconANGLE: IBM tightens partnership with Cockroach Labs (2025-10-07)"
---

# Summary
**Verdict: niche.** Geo-partitioning means pinning rows to regions inside one strongly consistent database, so a German user's row lives in Frankfurt and an Indian user's row in Mumbai, while global queries and transactions still work. It was one of the most distinctive features of distributed SQL and a central part of the 2019–2021 pitch. It shipped and works. CockroachDB 21.1 (May 2021) reduced it to three declarative table localities[^crdb-211], and Spanner added row-level geo-partitioning in 2024[^spanner-2024]. AWS made multi-region strong consistency a headline feature of Aurora DSQL in 2025[^dsql-ga]. But we found no evidence that it became a common deployment pattern. Vendors' own messaging moved from "global data" to "resilience" and "zero RPO"[^ibm-crdb]. The common way to meet residency rules remains a separate stack per jurisdiction, which is simpler to explain to auditors.

# The idea
Data residency rules (GDPR transfer restrictions sharpened by the CJEU's Schrems II ruling in July 2020[^schrems2], plus data-localization laws in several countries) and user latency both argue for keeping data near its owner. Geo-partitioned SQL promised to satisfy both without application sharding. You declare a locality per table or row, and the database places replicas and leaseholders accordingly. Global reference tables are readable everywhere at local latency, at the cost of slower writes.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018–2019 | Geo-partitioning sold as an enterprise feature by CockroachDB and YugabyteDB | + |
| 2020 | Schrems II invalidates the EU–US Privacy Shield (Jul 16)[^schrems2] | + (demand) |
| 2021 | CockroachDB 21.1 adds REGIONAL BY TABLE, REGIONAL BY ROW and GLOBAL localities (May 20)[^crdb-211][^tt-211] | + (peak) |
| 2022 | Multi-region CockroachDB demonstrated at VLDB[^crdb-vldb22] | + |
| 2024 | Spanner adds geo-partitioning and dual-region configurations with zero RPO[^spanner-2024]. CockroachDB ends its free Core tier, putting these features behind a license for larger firms[^crdb-2024] | mixed |
| 2025 | Aurora DSQL GA with multi-region strong consistency and a 99.999% multi-region availability design[^dsql-ga]. IBM OEM deal pitches CockroachDB on active-active continuity[^ibm-crdb] | + |

# What succeeded
- **Developer experience.** CockroachDB's 2021 abstractions turned an expert-only feature (zone configs, replica constraints) into a few SQL statements[^crdb-211]. The design was published and demonstrated at VLDB[^crdb-vldb22].
- **Multi-region for availability.** Surviving the loss of an entire region with no data loss is a real and paid-for capability. Spanner sells it at five nines[^spanner-2024], and DSQL and CockroachDB lead with it[^dsql-ga][^ibm-crdb].
- **Hyperscalers adopted it.** Spanner's 2024 geo-partitioning and DSQL's multi-region clusters confirm the concept is sound.

# What failed
- **Residency as the killer app.** Residency demand was real, but buyers mostly answered it with separate regional deployments of ordinary databases, or with SaaS vendors' "EU region" offerings. A per-row legal boundary inside one global cluster is hard to certify, because metadata, logs, backups and global tables can still cross borders.
- **Latency for global writes.** Cross-region consensus costs tens to hundreds of milliseconds. GLOBAL tables make writes slower, and REGIONAL BY ROW helps only when a user stays near their home region. Edge-database startups that promised global low-latency writes also mostly retreated (see edge-devx).
- **Pricing.** Multi-region clusters multiply node count. These features were kept in enterprise tiers, which limited bottom-up adoption[^crdb-2024].

# Why
1. **Compliance teams prefer physical separation.** "This cluster never leaves the EU" is easier to audit than "these rows are constrained to EU replicas."
2. **The speed of light.** Strong consistency across continents cannot be made cheap. Most applications are fine with one home region plus async replicas.
3. **Few truly global OLTP workloads.** Most companies operate in one or two markets. The rare global ones (payments, games, identity) are exactly the niche that uses these features.

# Lessons
- Regulation creates demand for *provable* separation, not for clever placement inside one system.
- The resilience feature (regional failover) sold, while the global-data feature did not. Lead with what the buyer is afraid of.
- Physics limits even well-designed abstractions, and the abstraction should make the latency cost visible.

# Related
- Systems: [CockroachDB](/systems/cockroachdb.md), [Spanner](/systems/spanner.md), [YugabyteDB](/systems/yugabytedb.md), [Aurora DSQL](/systems/aurora-dsql.md)
- Ideas: [NewSQL](/ideas/distributed-sql/newsql-distributed-sql.md)
- Events: [Aurora DSQL GA](/events/2025-05-aurora-dsql-ga.md)

[^crdb-211]: Cockroach Labs blog, May 2021.
[^tt-211]: TechTarget, May 2021.
[^crdb-vldb22]: PVLDB 15, 2022.
[^spanner-2024]: Google Cloud blog, Dec 2024.
[^dsql-ga]: Amazon press release, 2025-05-27.
[^schrems2]: Wikipedia, Schrems II.
[^crdb-2024]: SiliconANGLE, 2024-08-15.
[^ibm-crdb]: SiliconANGLE, 2025-10-07.
