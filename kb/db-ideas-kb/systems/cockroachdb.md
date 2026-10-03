---
type: System
title: CockroachDB
description: "Postgres-wire-compatible, Spanner-inspired distributed SQL database from Cockroach Labs (New York). It is technically mature and strong on resilience and multi-region. Commercially, it peaked at a $5B valuation in 2021, then went from Apache to BSL (2019), to paid licenses for companies above $10M revenue (2024), to private-source development (Sept 2026)."
resource: https://www.cockroachlabs.com
tags: [distributed-sql, newsql, postgres-compatible, multi-region, bsl, source-available]
kind: product
first_release: 2017
org: "Cockroach Labs"
license: "CockroachDB Software License (proprietary, source-available until 2026)"
outcome: struggling
ideas: [ideas/distributed-sql/newsql-distributed-sql, ideas/distributed-sql/geo-partitioning-data-residency, ideas/business-licensing/source-available-licenses, ideas/cloud-architecture/serverless-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: redmonk-bsl
    resource: https://redmonk.com/sogrady/2019/06/21/cockroach-source-available/
    title: "RedMonk: Cockroach and the Source Available Future (2019-06-21)"
  - id: crdb-211
    resource: https://www.cockroachlabs.com/blog/cockroachdb-21-1-release/
    title: "CockroachDB 21.1 release (2021-05)"
    author: org:cockroach-labs
  - id: cnbc-f
    resource: https://www.cnbc.com/2021/12/16/software-start-up-cockroach-labs-doubles-valuation-in-latest-funding.html
    title: "CNBC: Cockroach Labs doubles valuation (2021-12-16)"
  - id: alleywatch
    resource: https://www.alleywatch.com/2021/12/cockroach-labs-cloud-native-database-sql-peter-guagenti/
    title: "AlleyWatch: Cockroach Labs raises $278M at $5B valuation (total $633M)"
  - id: sa-2024
    resource: https://siliconangle.com/2024/08/15/cockroach-labs-changes-self-hosting-license-single-enterprise-model/
    title: "SiliconANGLE: Cockroach Labs changes its self-hosting license (2024-08-15)"
  - id: plans-2024
    resource: https://www.techtarget.com/searchdatamanagement/news/366611998/Cockroach-Labs-adds-vector-search-updates-pricing-options
    title: "TechTarget: Cockroach Labs adds vector search, updates pricing options (2024)"
  - id: oxide
    resource: https://rfd.shared.oxide.computer/rfd/0508
    title: "Oxide RFD 508: Whither CockroachDB?"
    author: org:oxide-computer
  - id: ibm
    resource: https://www.theregister.com/2025/10/08/ibm_cockroachdb_mainframe_postgres/
    title: "The Register: IBM and CockroachDB partner (2025-10-08)"
  - id: private
    resource: https://www.cockroachlabs.com/blog/source-code-protection/
    title: "Cockroach Labs: private source development (2026-09-15)"
    author: org:cockroach-labs
  - id: gh
    resource: https://github.com/cockroachdb/cockroach
    title: "GitHub: cockroachdb/cockroach"
---

# Summary
CockroachDB is the best-known open-core Spanner clone. It uses Raft-replicated ranges, hybrid logical clocks, serializable isolation by default and the Postgres wire protocol. On the technical side it delivered: declarative multi-region SQL in 21.1 (2021)[^crdb-211], its own Pebble storage engine, and an IBM OEM deal in 2025 that sells it for active-active continuity on IBM Z, LinuxONE and OpenShift[^ibm]. The business path has been rougher. It raised $633M in total, including $278M at a $5B valuation in Dec 2021[^cnbc-f][^alleywatch], and has announced no priced round since. Its license kept tightening: BSL in 2019[^redmonk-bsl], no free Core and paid licenses above $10M revenue in 2024[^sa-2024], and development moved to private repositories on 15 Sept 2026, citing AI-assisted code reproduction[^private]. The public repo, with about 32.5k stars, is no longer the development home[^gh].

# Timeline
| Date | Event |
|---|---|
| 2019-06 | Moves from Apache 2.0 to BSL plus CCL[^redmonk-bsl] |
| 2020 | Pebble replaces RocksDB as the default storage engine |
| 2021-05 | 21.1: REGIONAL BY ROW / GLOBAL tables[^crdb-211] |
| 2021-12 | $278M Series F at $5B[^cnbc-f] |
| 2024-08 | Core retired. Enterprise Free tier for companies under $10M revenue, effective with 24.3 (Nov 18)[^sa-2024]. Serverless/Dedicated renamed Basic/Advanced, Standard added[^plans-2024] |
| 2025-10 | IBM OEM partnership[^ibm] |
| 2026-09 | Development moves to private repos. License unchanged[^private] |

# What worked
- Resilience. Zero-RPO, survive-a-region deployments are the reason enterprises and IBM buy it[^ibm].
- Multi-region SQL abstractions that other vendors followed[^crdb-211].

# What didn't
- Bottom-up adoption: each license change pushed away embedders and hobbyists. Oxide froze on 22.x and plans to self-support it rather than accept annual per-core licensing[^oxide].
- Postgres compatibility gaps and the cost of consensus on every write limit its appeal for ordinary apps.
- Its valuation was set at the 2021 peak and the company has not raised since.

# Related
- [NewSQL](/ideas/distributed-sql/newsql-distributed-sql.md), [Geo-partitioning](/ideas/distributed-sql/geo-partitioning-data-residency.md), [Source-available licenses](/ideas/business-licensing/source-available-licenses.md), [Pebble](/systems/pebble.md), [Spanner](/systems/spanner.md), [YugabyteDB](/systems/yugabytedb.md)
- Events: [Series F](/events/2021-12-cockroach-labs-series-f.md), [Core retired](/events/2024-08-cockroachdb-retires-core.md), [Private source](/events/2026-09-cockroachdb-private-source.md), [Pebble default](/events/2020-11-cockroachdb-pebble-default.md)

[^redmonk-bsl]: RedMonk, 2019-06-21.
[^crdb-211]: Cockroach Labs blog, May 2021.
[^cnbc-f]: CNBC, 2021-12-16.
[^alleywatch]: AlleyWatch, Dec 2021.
[^sa-2024]: SiliconANGLE, 2024-08-15.
[^plans-2024]: TechTarget, 2024.
[^oxide]: Oxide RFD 508.
[^ibm]: The Register, 2025-10-08.
[^private]: Cockroach Labs blog, 2026-09-15.
[^gh]: GitHub, checked 2026-10-03.
