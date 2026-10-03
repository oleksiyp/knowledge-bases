---
type: Domain Review
title: "Data Engineering (streaming, lakehouse, orchestration, transformation, analytics, BI): 2-year review"
description: "Oct 2024 – Oct 2026: Iceberg won the format war and the fight moved to catalogs; Kafka modernized while Confluent sold to IBM; Fivetran swallowed dbt Labs, SQLMesh and Great Expectations; Prefect bought Dagster; Databricks hit $190B; dbt reversed its ELv2 Fusion license."
domain: data-engineering
tags: [streaming, lakehouse, table-formats, catalogs, orchestration, transformation, dataframes, bi, consolidation, license]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ibm-confluent
    resource: https://newsroom.ibm.com/2025-12-08-ibm-to-acquire-confluent-to-create-smart-data-platform-for-enterprise-generative-ai
    title: "IBM to acquire Confluent (2025-12-08)"
  - id: ibm-close
    resource: https://www.hpcwire.com/bigdatawire/this-just-in/ibm-completes-acquisition-of-confluent/
    title: "BigDATAwire: IBM completes acquisition of Confluent"
  - id: aiven-kip1150
    resource: https://aiven.io/blog/kip-1150-accepted-and-the-road-ahead
    title: "Aiven: KIP-1150 accepted"
  - id: dbx-cnbc
    resource: https://www.cnbc.com/2026/08/13/databricks-funding-round-190-billion-valuation.html
    title: "CNBC: Databricks $5B at $190B (2026-08-13)"
  - id: dbx-tc-190
    resource: https://techcrunch.com/2026/08/13/databricks-wanted-to-raise-1b-investors-wanted-15b-it-settled-on-5b-at-a-190b-valuation/
    title: "TechCrunch: Databricks settled on $5B at a $190B valuation (2026-08-13)"
  - id: dbx-tn-190
    resource: https://technode.global/2026/08/14/databricks-closes-5b-funding-round-190b-valuation-revenue-run-rate-7b/
    title: "TNGlobal: Databricks closes $5B round at $190B as revenue run-rate tops $7B (2026-08-14)"
  - id: dbx-seriesl
    resource: https://www.prnewswire.com/news-releases/databricks-grows-55-yoy-surpasses-4-8b-revenue-run-rate-and-is-raising-4b-series-l-at-134b-valuation-302643445.html
    title: "Databricks: >$4B Series L at $134B; $4.8B run-rate (2025-12-16)"
  - id: dbx-seriesj
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-raising-10b-series-j-investment-62b-valuation
    title: "Databricks: Raising $10B Series J at $62B valuation (2024-12-17)"
  - id: dbx-neon
    resource: https://databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems
    title: "Databricks agrees to acquire Neon (2025-05-14; ~$1B per press reports)"
  - id: ibm-close-pr
    resource: https://newsroom.ibm.com/2026-03-17-ibm-completes-acquisition-of-confluent,-making-real-time-data-the-engine-of-enterprise-ai-and-agents
    title: "IBM: IBM Completes Acquisition of Confluent (2026-03-17)"
  - id: gx-update
    resource: https://greatexpectations.io/blog/an-update-from-great-expectations/
    title: "Great Expectations: An Update for the Great Expectations Community (2026-05-06; GX Cloud to FICO, GX Core to Fivetran)"
  - id: reg-sap-dremio
    resource: https://www.theregister.com/software/2026/05/05/sap-dives-deeper-into-iceberg-with-dremio-acquisition/5226560
    title: "The Register: SAP dives deeper into Iceberg with Dremio acquisition (2026-05-05)"
  - id: sap-dremio-close
    resource: https://news.sap.com/2026/07/sap-completes-dremio-acquisition/
    title: "SAP News: SAP Completes Dremio Acquisition (2026-07-06)"
  - id: starburst-arr
    resource: https://www.businesswire.com/news/home/20260218724496/en/Starburst-Crosses-$100M-ARR-as-their-Enterprise-AI-Solution-Takes-Aim-at-BI
    title: "Business Wire: Starburst crosses $100M ARR (2026-02-18)"
  - id: rp-q2
    resource: https://www.redpanda.com/press/redpanda-continues-strong-momentum-reports-record-q2-performance
    title: "Redpanda: Record Q2 performance, new ARR +100% YoY (2026-08-20)"
  - id: tc-census
    resource: https://techcrunch.com/2025/05/01/fivetran-acquires-census-to-become-end-to-end-data-movement-platform/
    title: "TechCrunch: Fivetran acquires Census (2025-05-01; terms undisclosed)"
  - id: redis-decodable
    resource: https://www.globenewswire.com/news-release/2025/09/04/3144606/0/en/Redis-to-Acquire-Real-Time-Data-Platform-Decodable-Expands-Redis-for-AI-to-Deliver-Context-and-Memory-for-AI-Agents-and-Agentic-Systems.html
    title: "Redis to acquire Decodable (2025-09-04)"
  - id: info-voltron
    resource: https://www.theinformation.com/briefings/ai-startup-voltron-data-switches-ceos-lays-off-staff
    title: "The Information: Voltron Data switches CEOs, lays off 50% of staff (Nov 2024)"
  - id: x-voltron-shutdown
    resource: https://x.com/tayloramurphy/status/2008214050899911039
    title: "Taylor Murphy on X: 'Voltron Data is shutting down' (2026-01-05; third-party)"
  - id: automq-relicense-pr
    resource: https://github.com/AutoMQ/automq/pull/2433
    title: "AutoMQ PR #2433: switch to Apache license (2025-04-18)"
  - id: preset-seriesc
    resource: https://preset.io/blog/preset-series-c/
    title: "Preset: Series C led by a16z ($7.27M, 2026-03-09)"
  - id: eventual-a
    resource: https://www.finsmes.com/2025/06/eventual-raises-20m-in-series-a-funding.html
    title: "FinSMEs: Eventual (Daft) raises $20M Series A (2025-06-24)"
  - id: airbyte-agents
    resource: https://airbyte.com/blog/airbyte-agents
    title: "Airbyte Agents launch (2026-05-04)"
  - id: dbx-tabular
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-tabular-company-founded-original-creators
    title: "Databricks agrees to acquire Tabular (2024-06-04)"
  - id: ice-gh
    resource: https://github.com/apache/iceberg
    title: Apache Iceberg GitHub releases
  - id: polaris-grad
    resource: https://polaris.apache.org/blog/2026/02/19/apache-polaris-graduates-to-top-level-project/
    title: Apache Polaris graduates to TLP
  - id: fusion-license
    resource: https://www.getdbt.com/blog/new-code-new-license-understanding-the-new-license-for-the-dbt-fusion-engine
    title: "dbt Labs: New code, new license (2025-05-28)"
  - id: dbt-core-v2
    resource: https://docs.getdbt.com/blog/dbt-core-v2-is-here
    title: "dbt Core v2 is here (2026-06-01)"
  - id: merger-close
    resource: https://www.getdbt.com/blog/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents
    title: "Fivetran + dbt Labs complete merger (2026-06-01)"
  - id: fivetran-tobiko
    resource: https://www.fivetran.com/blog/fivetran-acquires-tobiko-data-to-power-enterprise-grade-transformations
    title: "Fivetran acquires Tobiko Data (2025-09-03)"
  - id: fivetran-lf
    resource: https://www.fivetran.com/press/fivetran-contributes-sqlmesh-to-the-linux-foundation-to-advance-open-data-infrastructure
    title: "Fivetran contributes SQLMesh to the Linux Foundation (2026-03-25)"
  - id: fivetran-press
    resource: https://www.fivetran.com/press
    title: "Fivetran newsroom (GX stewardship, 2026-05-13)"
  - id: prefect-acq
    resource: https://www.prefect.io/prefect-acquires-dagster
    title: "Prefect acquires Dagster Labs (2026-07-13)"
  - id: astro-seriesd
    resource: https://www.astronomer.io/press-releases/astronomer-secures-93-million-series-d-funding/
    title: "Astronomer $93M Series D (2025-05-01)"
  - id: cnbc-byron
    resource: https://www.cnbc.com/2025/07/19/astronomer-ceo-andy-byron-resigns-after-viral-coldplay-kiss-cam-controversy.html
    title: "CNBC: Astronomer CEO resigns (2025-07-19)"
  - id: techeu-kestra
    resource: https://tech.eu/2026/03/31/kestra-raises-25m-series-a-to-build-the-enterprise-orchestration-standard/
    title: "Tech.eu: Kestra $25M Series A (2026-03-31)"
  - id: rp-seriesd
    resource: https://www.redpanda.com/press/redpanda-raises-100m-launches-enterprise-agentic-ai-platform
    title: "Redpanda $100M Series D"
  - id: polars-posts
    resource: https://pola.rs/posts/
    title: Polars blog (Series A, Cloud, 2.0)
  - id: conf-blog
    resource: https://www.confluent.io/blog/
    title: "Confluent blog: Streamhouse Working Group (2026-09-15)"
  - id: mb-adv
    resource: https://github.com/metabase/metabase/security/advisories
    title: Metabase security advisories
  - id: snow-osi
    resource: https://www.snowflake.com/en/blog/open-semantic-interchange-ai-standard/
    title: "Snowflake: Open Semantic Interchange (2025-09-23)"
  - id: fluss-blog
    resource: https://fluss.apache.org/blog/
    title: Apache Fluss blog
  - id: gh-metrics
    resource: https://docs.github.com/en/rest
    title: "GitHub REST API — stars, releases and default-branch commit counts collected 2026-10-03 for all projects in this domain"
---

# Executive summary
- **Iceberg won the open table format war; the battle moved to catalogs.** After Databricks bought Tabular (June 2024)[^dbx-tabular], Iceberg 1.10 made the V3 spec GA (Sept 2025) and every major vendor converged on it[^ice-gh]. Catalogs — [Apache Polaris](/projects/data-engineering/apache-polaris.md) (TLP Feb 2026)[^polaris-grad], [Unity Catalog](/projects/data-engineering/unity-catalog.md), [Gravitino](/projects/data-engineering/apache-gravitino.md) — are now the control point. [Hudi](/projects/data-engineering/apache-hudi.md) and [XTable](/projects/data-engineering/apache-xtable.md) lost relevance.
- **Kafka thrived as a protocol while its vendor was absorbed.** Kafka 4.0 dropped ZooKeeper, queues went GA (4.2), and KIP-1150 diskless topics were accepted (Mar 2026)[^aiven-kip1150]; Confluent sold to IBM for ~$11B enterprise value ($31/share; announced Dec 2025, closed 2026-03-17)[^ibm-confluent][^ibm-close-pr].
- **Fivetran became the modern-data-stack consolidator**: Census/reverse ETL (May 2025)[^tc-census], Tobiko/SQLMesh (Sept 2025), dbt Labs merger (announced Oct 2025, closed June 2026, ~$600M ARR), SQLMesh to the Linux Foundation, and stewardship of GX Core after FICO bought GX Cloud (May 2026)[^fivetran-tobiko][^merger-close][^fivetran-lf][^fivetran-press][^gx-update].
- **The biggest license story reversed itself.** dbt Fusion launched with ELv2 components (May 2025)[^fusion-license]; on merger close dbt Labs relicensed the Fusion runtime as Apache-2.0 dbt Core v2 (June 2026; GA Sept 2026)[^dbt-core-v2].
- **Orchestration consolidated and diversified at once**: Airflow 3 shipped (Apr 2025) and Astronomer raised $93M but endured a viral CEO scandal[^astro-seriesd][^cnbc-byron]; Prefect bought Dagster Labs (July 2026)[^prefect-acq]; Kestra broke out with a $25M Series A and 28.8k stars[^techeu-kestra].
- **Databricks is the business winner by far** — $62B (Dec 2024) → $134B (Dec 2025) → $190B valuation with a ~$7B revenue run-rate (Aug 2026)[^dbx-seriesj][^dbx-seriesl][^dbx-cnbc][^dbx-tc-190][^dbx-tn-190].
- **Rust/Arrow-native engines kept gaining**: DataFusion commits ~+77% YoY, Polars raised a Series A and is shipping 2.0; Ibis activity collapsed ~82% after sponsor Voltron Data halved staff (Nov 2024) and reportedly shut down (Jan 2026)[^gh-metrics][^polars-posts][^info-voltron][^x-voltron-shutdown].
- **"AI agents" became every vendor's narrative** — Redpanda's Agentic Data Plane, Materialize's context graphs, Airbyte Agents, Cube/Preset/Metabase MCP integrations, and the Open Semantic Interchange[^rp-seriesd][^snow-osi].

# Scorecard
| Project | OSS verdict | Business verdict | 2y trajectory | One-line why |
|---|---|---|---|---|
| [Apache Kafka](/projects/data-engineering/apache-kafka.md) | thriving | acquired | up | ZooKeeper gone, queues GA, diskless accepted; Confluent → IBM |
| [Redpanda](/projects/data-engineering/redpanda.md) | stable | growing | up | $100M at ~$1B; BSL; agentic repositioning |
| [AutoMQ](/projects/data-engineering/automq.md) | growing | n/a | up | BSL → Apache-2.0 (Apr 2025) diskless Kafka; upstream may commoditize it |
| [Apache Flink](/projects/data-engineering/apache-flink.md) | thriving | stable | up | 2.0→2.3 delivered; value accrues to Confluent/Alibaba |
| [Apache Fluss](/projects/data-engineering/apache-fluss.md) | growing | n/a | up | Incubator → TLP (Aug 2026) → 1.0 |
| [RisingWave](/projects/data-engineering/risingwave.md) | growing | n/a | flat-up | 3.0/3.1, agent "context layer" |
| [Materialize](/projects/data-engineering/materialize.md) | stable | n/a | flat | BSL; MCP / context graphs |
| [Apache Iceberg](/projects/data-engineering/apache-iceberg.md) | thriving | n/a | up | Won the format war; V3 GA |
| [Delta Lake](/projects/data-engineering/delta-lake.md) | stable | n/a | flat | Healthy inside Databricks, lost standard status |
| [Apache Hudi](/projects/data-engineering/apache-hudi.md) | stable | struggling | down | #3 format; Onehouse pivots |
| [Apache XTable](/projects/data-engineering/apache-xtable.md) | declining | n/a | down | Bridge without a war |
| [Apache Polaris](/projects/data-engineering/apache-polaris.md) | growing | n/a | up | Neutral Iceberg catalog, TLP Feb 2026 |
| [Unity Catalog](/projects/data-engineering/unity-catalog.md) | stable | n/a | flat | Still 0.x; Databricks-led |
| [Apache Gravitino](/projects/data-engineering/apache-gravitino.md) | growing | n/a | up | TLP June 2025; federation |
| [Apache Spark](/projects/data-engineering/apache-spark.md) | thriving | thriving | up | Spark 4.x; Databricks $190B |
| [dbt Core](/projects/data-engineering/dbt-core.md) | contested | acquired | down→up | ELv2 Fusion backlash, then Apache-2.0 v2 |
| [SQLMesh](/projects/data-engineering/sqlmesh.md) | contested | acquired | flat | Fivetran-owned, LF-hosted, momentum capped |
| [Airbyte](/projects/data-engineering/airbyte.md) | stable | struggling | down | ELv2; no new round since 2021; headcount down |
| [Great Expectations](/projects/data-engineering/great-expectations.md) | contested | acquired | down | GX Cloud → FICO; GX Core stewardship → Fivetran |
| [Apache Airflow](/projects/data-engineering/apache-airflow.md) | thriving | stable | up | Airflow 3; ASF insulated it from vendor scandal |
| [Dagster](/projects/data-engineering/dagster.md) | stable | acquired | flat | Bought by Prefect |
| [Prefect](/projects/data-engineering/prefect.md) | growing | growing | up | Layoffs → profitability → consolidator |
| [Kestra](/projects/data-engineering/kestra.md) | thriving | growing | up | Breakout: $25M A, 2.0, 28.8k stars |
| [Apache Arrow](/projects/data-engineering/apache-arrow.md) | thriving | n/a | flat-up | Infrastructure standard; ADBC adoption |
| [Apache DataFusion](/projects/data-engineering/apache-datafusion.md) | thriving | n/a | up | Commits +77% YoY; Comet 1.0 |
| [Polars](/projects/data-engineering/polars.md) | thriving | growing | up | €18M A; Cloud; 2.0 RC |
| [pandas](/projects/data-engineering/pandas.md) | stable | n/a | flat-up | 3.0 finally shipped (Jan 2026) |
| [Ibis](/projects/data-engineering/ibis.md) | declining | n/a | down | Commits −82% YoY; sponsor Voltron Data reportedly shut down |
| [Daft](/projects/data-engineering/daft.md) | stable | growing | flat | $20M Series A (2025); pivot to multimodal/physical-AI data |
| [Apache Superset](/projects/data-engineering/apache-superset.md) | thriving | growing | up | 6.0/6.1; commits ~4.5x YoY |
| [Metabase](/projects/data-engineering/metabase.md) | stable | stable | flat-down | Critical CVE cluster in W3 |
| [Cube](/projects/data-engineering/cube.md) | growing | n/a | up | Semantic layer revival via AI agents |
| [Trino](/projects/data-engineering/trino.md) | stable | n/a | flat | Commits up, releases slower; Starburst passed $100M ARR |
| [Apache Druid](/projects/data-engineering/apache-druid.md) (+Pinot) | stable | n/a | flat-down | Quarterly releases; ClickHouse took the growth; Imply pivoted to observability |

# By window
## W3 (2026-07-03 → 2026-10-03)
**Successes**
- Prefect acquires Dagster Labs (07-13) — consolidation with license preserved[^prefect-acq] ([event](/events/2026-07-prefect-acquires-dagster.md)).
- Databricks closes $5B at $190B (08-13)[^dbx-cnbc][^dbx-tc-190] ([event](/events/2026-08-databricks-190b-valuation.md)).
- SAP completes Dremio acquisition (07-06), pledging to build on Iceberg and Polaris[^sap-dremio-close][^reg-sap-dremio].
- Redpanda reports record fiscal Q2, new ARR +100% YoY (08-20)[^rp-q2].
- dbt Core v2.0.0 GA (09-14), Kestra 2.0 (09-07), Iceberg 1.12 (09-30), Fluss TLP (08-06) and 1.0 (09-21), Polars 2.0 RC[^gh-metrics][^fluss-blog].
- Streamhouse Working Group formed by Aiven, Confluent, Redpanda, StreamNative, Ververica (09-15)[^conf-blog] ([event](/events/2026-09-streamhouse-working-group.md)).
**Failures**
- Metabase critical SQL-injection/admin-takeover CVEs (07-12 → 08-11)[^mb-adv] ([event](/events/2026-08-metabase-critical-sql-injection-cves.md)).
- Ibis activity near-stalled; Redpanda's public repo has had no commits since 08-20 and no release since 08-22, with no explanation published (re-checked in pass 2)[^gh-metrics].

## W6 (2026-04-03 → 2026-07-03)
**Successes**
- Fivetran–dbt Labs merger closes and dbt Core v2 relicenses Fusion runtime to Apache-2.0 (06-01)[^merger-close][^dbt-core-v2] ([event](/events/2026-06-dbt-core-v2-fusion-runtime-apache-2.md)).
- Kafka 4.3 (05-20), Iceberg 1.11 (05-20), Flink 2.3 (06-25), RisingWave 3.0 (06-11), Airflow 3.2 (04-07)[^gh-metrics].
- SAP agrees to buy Dremio (May 2026)[^reg-sap-dremio]; Airbyte Agents launch (05-04)[^airbyte-agents].
**Failures**
- Great Expectations splits up: FICO buys GX Cloud (public service ends 06-01) and Fivetran becomes GX Core steward (05-06/05-13)[^gx-update][^fivetran-press].

## W9 (2026-01-03 → 2026-04-03)
**Successes**
- Polaris graduates to TLP (02-18)[^polaris-grad] ([event](/events/2026-02-apache-polaris-graduates.md)); pandas 3.0 (01-21); Kafka 4.2 queues GA (02-16).
- KIP-1150 diskless topics accepted (03-02)[^aiven-kip1150] ([event](/events/2026-03-kafka-kip-1150-diskless-topics-accepted.md)).
- Kestra $25M Series A (03-31)[^techeu-kestra]; SQLMesh to Linux Foundation (03-25)[^fivetran-lf] ([event](/events/2026-03-sqlmesh-linux-foundation.md)).
- Starburst passes $100M ARR (02-18)[^starburst-arr]; Preset raises a small ($7.27M) a16z-led Series C (03-09)[^preset-seriesc].
**Failures**
- Confluent's independence ends as IBM closes the deal (03-17)[^ibm-close-pr].
- Voltron Data (Arrow/Ibis sponsor) reported shutting down (01-05; third-party post)[^x-voltron-shutdown].

## W12 (2025-10-03 → 2026-01-03)
**Successes**
- Databricks Series L >$4B at $134B (2025-12-16)[^dbx-seriesl]; Spark 4.1, Flink 2.2, Superset 6.0.
**Failures / mixed**
- IBM agrees to buy Confluent (12-08)[^ibm-confluent] ([event](/events/2025-12-ibm-acquires-confluent.md)).
- dbt Labs agrees to merge into Fivetran (10-13) — end of independent dbt Labs[^merger-close] ([event](/events/2025-10-dbt-labs-fivetran-merger.md)).

## W24 (2024-10-03 → 2025-10-03)
**Successes**
- Kafka 4.0 removes ZooKeeper (2025-03-18) ([event](/events/2025-03-kafka-4-removes-zookeeper.md)); Flink 2.0 (2025-03-24); Spark 4.0 (May 2025); Airflow 3.0 (2025-04-22) ([event](/events/2025-04-apache-airflow-3-release.md)); Iceberg 1.10 V3 GA (2025-09-11)[^ice-gh].
- Funding: Databricks $10B Series J (Dec 2024), Redpanda $100M (Apr 2025), Astronomer $93M (May 2025), Eventual/Daft $20M (June 2025), Polars €18M (Sept 2025)[^dbx-seriesj][^rp-seriesd][^astro-seriesd][^eventual-a][^polars-posts].
- AutoMQ relicenses BSL → Apache-2.0 (2025-04-18)[^automq-relicense-pr]; Databricks agrees to buy Neon (2025-05-14)[^dbx-neon].
**Failures**
- dbt Fusion ELv2 license backlash (2025-05-28)[^fusion-license] ([event](/events/2025-05-dbt-fusion-elv2-license.md)).
- Astronomer CEO resigns after viral scandal (2025-07-19)[^cnbc-byron] ([event](/events/2025-07-astronomer-ceo-resigns.md)).
- Tobiko Data (SQLMesh) sold to Fivetran (2025-09-03)[^fivetran-tobiko] ([event](/events/2025-09-fivetran-acquires-tobiko-data.md)); Census sold to Fivetran (2025-05-01)[^tc-census]; Decodable sold to Redis (2025-09-04)[^redis-decodable].
- Voltron Data halves staff and changes CEO (Nov 2024)[^info-voltron].

# Trends
1. **Standard won → value migrates up a layer.** Iceberg's victory turned catalogs (Polaris, Unity, Gravitino) and semantic layers (OSI, Cube, dbt) into the new battlegrounds[^polaris-grad][^snow-osi].
2. **Consolidation of the modern data stack.** Fivetran (Census, Tobiko, dbt Labs, GX Core), Prefect (Dagster), IBM (Confluent), SAP (Dremio), Redis (Decodable), Databricks (Tabular, Neon) — point tools became features[^tc-census][^merger-close][^prefect-acq][^ibm-confluent][^sap-dremio-close][^redis-decodable][^dbx-neon].
3. **Acquirers park OSS at foundations or promise license continuity.** SQLMesh → LF; Dagster keeps its license; Polaris/Fluss/Gravitino graduate at ASF[^fivetran-lf][^prefect-acq].
4. **License experiments got punished, then reversed.** dbt's ELv2 Fusion was walked back to Apache-2.0 within ~12 months; ELv2/BSL holders (Airbyte, Redpanda, Materialize) face Apache-2.0 alternatives — notably AutoMQ, which itself moved from BSL to Apache-2.0 in 2025 — plus RisingWave and upstream Kafka[^dbt-core-v2][^automq-relicense-pr].
5. **Object storage everywhere.** Diskless Kafka (KIP-1150, WarpStream, AutoMQ), Flink's native S3 FS, Fluss tiering, Iceberg as streaming sink[^aiven-kip1150].
6. **Rust/Arrow-native compute.** DataFusion, Polars, Comet, dbt Core v2 (Rust + ADBC) rising; JVM-heavy and single-sponsor projects (Ibis) fading[^gh-metrics].
7. **AI-agent repositioning.** Streaming DBs as "context layers", MCP servers in BI, agent connectors in ELT; Databricks' growth narrative tied to AI[^dbx-cnbc].
8. **Security exposure of BI.** Metabase's CVE cluster shows self-hosted BI is a prime target[^mb-adv].

# Success patterns
- **Neutral foundation + multi-vendor contributors** (Iceberg, Kafka, Flink, Airflow, Polaris) — survived vendor crises and acquisitions.
- **Permissive license with a clearly separate paid cloud** (Polars, Kestra, Prefect) — avoided license backlash while monetizing.
- **Platform breadth with an OSS core** (Databricks) — owning the compute while embracing open formats.
- **Profitability discipline** (Prefect) turned a cost-cutting company into the acquirer.

# Failure patterns
- **Being #2/#3 in a standards war** (Hudi, Delta as cross-vendor standard, XTable).
- **Single-sponsor dependency** (Ibis/Voltron Data; Great Expectations)[^x-voltron-shutdown][^gx-update].
- **Point-tool businesses without a platform** (dbt Labs, Tobiko, Dagster Labs, Airbyte) ended up merged, sold or stalled.
- **Moving the next-gen engine to source-available** (dbt Fusion) eroded trust until reversed.

# Open questions / watchlist for next 6 months
- Will IBM keep funding upstream Kafka/Flink committers at Confluent's previous level?
- KIP-1163/1164: when do diskless topics actually ship in Apache Kafka, and what happens to AutoMQ/WarpStream?
- Fivetran + dbt Labs: does SQLMesh retain momentum under LF, and does dbt Core v2 adoption outpace Fusion?
- Prefect: sustained dual investment in Prefect and Dagster, or slow convergence?
- Catalog war: Polaris vs Unity Catalog OSS vs Gravitino vs vendor catalogs — any consolidation or spec convergence?
- Databricks IPO timing; Airbyte's funding/strategic outcome; whether Redpanda's public repo resumes (no commits since 2026-08-20).
- Dremio inside SAP: does SAP keep funding Polaris/Arrow/Iceberg committers at the same level?
- Streamhouse Working Group: spec/foundation home, or marketing coalition?

[^ibm-confluent]: IBM newsroom, 2025-12-08.
[^ibm-close]: BigDATAwire.
[^aiven-kip1150]: Aiven blog.
[^dbx-cnbc]: CNBC, 2026-08-13.
[^dbx-tabular]: Databricks press release, 2024-06-04.
[^ice-gh]: Apache Iceberg GitHub.
[^polaris-grad]: Apache Polaris blog.
[^fusion-license]: dbt Labs blog, 2025-05-28.
[^dbt-core-v2]: dbt docs blog, 2026-06-01.
[^merger-close]: dbt Labs blog, 2026-06-01.
[^fivetran-tobiko]: Fivetran blog.
[^fivetran-lf]: Fivetran press release.
[^fivetran-press]: Fivetran newsroom.
[^prefect-acq]: Prefect announcement.
[^astro-seriesd]: Astronomer press release.
[^cnbc-byron]: CNBC.
[^techeu-kestra]: Tech.eu.
[^rp-seriesd]: Redpanda press release.
[^polars-posts]: Polars blog.
[^conf-blog]: Confluent blog.
[^mb-adv]: Metabase advisories.
[^snow-osi]: Snowflake blog.
[^fluss-blog]: Apache Fluss blog.
[^gh-metrics]: GitHub API data collected 2026-10-03.
[^dbx-tc-190]: TechCrunch, 2026-08-13.
[^dbx-tn-190]: TNGlobal, 2026-08-14.
[^dbx-seriesl]: Databricks press release (PR Newswire), 2025-12-16.
[^dbx-seriesj]: Databricks press release, 2024-12-17.
[^dbx-neon]: Databricks press release, 2025-05-14.
[^ibm-close-pr]: IBM newsroom, 2026-03-17.
[^gx-update]: Great Expectations blog, 2026-05-06.
[^reg-sap-dremio]: The Register, 2026-05-05.
[^sap-dremio-close]: SAP News, 2026-07-06.
[^starburst-arr]: Business Wire, 2026-02-18.
[^rp-q2]: Redpanda press release, 2026-08-20.
[^tc-census]: TechCrunch, 2025-05-01.
[^redis-decodable]: GlobeNewswire, 2025-09-04.
[^info-voltron]: The Information, Nov 2024.
[^x-voltron-shutdown]: X post, 2026-01-05 (third-party).
[^automq-relicense-pr]: GitHub PR #2433.
[^preset-seriesc]: Preset blog, 2026-03-09.
[^eventual-a]: FinSMEs, 2025-06-24.
[^airbyte-agents]: Airbyte blog, 2026-05-04.
