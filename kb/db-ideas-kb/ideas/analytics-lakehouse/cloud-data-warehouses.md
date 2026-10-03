---
type: Idea
title: "Cloud data warehouses with separated storage and compute (Snowflake, BigQuery, Redshift, Synapse → Fabric)"
description: "Elastic, consumption-priced SQL warehouses with storage and compute separated replaced on-prem MPP appliances. Won decisively by 2020–2022. Since 2023 the category has been squeezed by the lakehouse and open formats, and growth has slowed from hypergrowth to roughly 25–30% a year at Snowflake."
tags: [olap, cloud, data-warehouse, snowflake, bigquery, redshift, fabric]
area: analytics-lakehouse
verdict: won
hype_peak: 2020
adoption_2026: mainstream
origins: "BigQuery (2010, from Dremel), Redshift (2012, from ParAccel), Snowflake (founded 2012, GA 2014–2015); Snowflake SIGMOD 2016 paper"
key_systems: [systems/snowflake, systems/bigquery, systems/redshift, systems/microsoft-fabric, systems/databricks, systems/firebolt]
related_ideas: [ideas/analytics-lakehouse/lakehouse, ideas/cloud-architecture/serverless-databases, ideas/analytics-lakehouse/single-node-analytics]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: snow-ipo
    resource: https://www.cnn.com/2020/09/16/investing/snowflake-ipo/
    title: "CNN: Snowflake shares more than double. It's the biggest software IPO ever (2020-09-16)"
  - id: snow-fy25
    resource: https://www.businesswire.com/news/home/20250226670487/en/Snowflake-Reports-Financial-Results-for-the-Fourth-Quarter-and-Full-Year-of-Fiscal-2025
    title: "Snowflake FY2025 results (2025-02-26)"
  - id: snow-wiki
    resource: https://en.wikipedia.org/wiki/Snowflake_Inc.
    title: "Wikipedia: Snowflake Inc. (FY2026 revenue)"
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021: A Year in Review"
    author: person:andy-pavlo
  - id: redshift-serverless
    resource: https://www.infoq.com/news/2022/07/amazon-redshift-serverless/
    title: "InfoQ: Amazon Redshift Serverless generally available (July 2022)"
  - id: fabric-ga
    resource: https://www.jamesserra.com/archive/2023/11/microsoft-fabric-is-now-ga/
    title: "James Serra: Microsoft Fabric is now GA (Nov 2023)"
  - id: msft-fy26q3
    resource: https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3
    title: "Microsoft FY26 Q3 earnings call (2026-04-29)"
  - id: dbx-sql-bbg
    resource: https://www.bloomberg.com/news/articles/2025-06-11/databricks-eyes-1-billion-in-sales-for-product-competing-with-snowflake
    title: "Bloomberg: Databricks eyes $1B in sales for product competing with Snowflake (2025-06-11)"
  - id: biglake-paper
    resource: https://research.google/pubs/biglake-bigquerys-evolution-toward-a-multi-cloud-lakehouse/
    title: "Google Research: BigLake — BigQuery's Evolution toward a Multi-Cloud Lakehouse"
  - id: firebolt-calcalist
    resource: https://www.calcalistech.com/ctechnews/article/r1cj0csuwl
    title: "Calcalist: Unicorn Firebolt slashes workforce as AI reshapes operations (2026-02-20)"
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
---

# Summary

**Verdict: won.** The cloud data warehouse displaced Teradata, Netezza, Vertica and Exadata-style appliances for new analytics spending. It offered elastic compute over shared storage, pay-per-use pricing and zero administration. Snowflake's September 2020 IPO raised $3.4B and closed at about a $70B valuation, the largest software IPO up to that point[^snow-ipo]. Snowflake's product revenue then grew to $3.46B in FY2025, though growth slowed to 30%[^snow-fy25]. After 2022 the closed warehouse lost ground to the lakehouse. Snowflake, BigQuery, Redshift and Microsoft (Synapse → Fabric) all reworked their products around open table formats, and Databricks became a full warehouse competitor[^dbx-sql-bbg]. The idea won. The proprietary-storage version of it is fading.

# The idea

Snowflake's design, separated storage in S3 with independent virtual warehouses for compute, set the template. BigQuery offered a serverless query service from the start. Redshift moved from shared-nothing nodes to RA3 managed storage (2019) and Serverless (GA July 2022)[^redshift-serverless]. The selling points were no tuning, instant scaling, per-second billing, data sharing between accounts and SQL for everyone.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019 | Redshift RA3 (managed storage) | + |
| 2020 | Snowflake IPO: $3.4B raised, ~$70B market cap on day one[^snow-ipo]; BigQuery Omni (multi-cloud) announced | + |
| 2021 | Databricks–Snowflake TPC-DS benchmark spat[^pavlo-2021]; Firebolt raises $127M for a ClickHouse-fork warehouse[^pavlo-2021] | ± |
| 2022 | Redshift Serverless GA[^redshift-serverless]; BigLake (Google) bridges warehouse and lake[^biglake-paper]; Snowflake previews Iceberg | ± |
| 2023 | Microsoft Fabric replaces Synapse as the flagship (announced May, GA Nov)[^fabric-ga]; Snowflake buys Ponder and Sisu[^pavlo-2023] | ± |
| 2024 | Slootman retires and Ramaswamy becomes Snowflake CEO (Feb)[^snow-fy25]; Snowflake Iceberg GA | ± |
| 2025 | Snowflake FY25 product revenue $3.46B (+30%), NRR 126%[^snow-fy25]; Databricks SQL run-rate heading to $1B[^dbx-sql-bbg] | ± |
| 2026 | Snowflake FY26 revenue ~$4.72B[^snow-wiki]; Fabric reaches 35,000 paid customers[^msft-fy26q3]; Firebolt cuts staff[^firebolt-calcalist] | ± |

# What succeeded

- **The operating model.** Separated storage and compute, consumption pricing, serverless scaling and cross-account data sharing are now standard in every analytics product.
- **Snowflake as a business.** Multi-billion revenue, 120%+ net revenue retention for years and a large enterprise base[^snow-fy25].
- **BigQuery's serverless model.** BigQuery has had no clusters to size since day one, and it evolved into a lakehouse engine with BigLake and Omni[^biglake-paper].
- **Microsoft's reset.** Fabric reached 35,000 paid customers by April 2026 by bundling with Power BI and Microsoft 365 licensing[^msft-fy26q3].

# What failed

- **Proprietary storage as a moat.** Customers revolted against copying data into closed formats, and every vendor added Iceberg/Delta support (see [lakehouse](/ideas/analytics-lakehouse/lakehouse.md)).
- **Cost predictability.** Consumption pricing produced bill shocks and a "FinOps" counter-industry. Some workloads moved to cheaper engines (DuckDB, ClickHouse) or back on-prem.
- **New independent warehouses.** Firebolt raised over $260M at a $1.4B valuation. By 2025–2026 it was giving away a free self-hosted edition and had cut most of its engineering staff[^firebolt-calcalist]. Azure Synapse was effectively replaced by Fabric two years after GA.
- **Snowflake's growth story.** Growth fell from triple digits (2020–2021) to about 30% (FY2025). Snowflake's attempts to expand beyond the warehouse (Unistore, Snowpark Container Services, LLM training with Arctic) produced uneven results.

# Why

1. **The cloud changed the economics.** Elastic compute over S3/GCS made the shared-nothing appliance obsolete. Paying for idle hardware made no sense once compute could scale to zero.
2. **Simplicity sold.** Snowflake won analysts and BI teams with "it just works" SQL, while Hadoop and Spark required engineers.
3. **But the margin invited attack.** High consumption margins gave Databricks, the hyperscalers and open-source engines an incentive to unbundle storage (open formats) and compute (cheaper engines). The lakehouse is the warehouse with its storage margin removed.
4. **Distribution decides second-tier fights.** Microsoft's Fabric succeeded through Office/Power BI bundling more than on technical merit. Firebolt had a fast engine but no distribution and no differentiator against BigQuery and Snowflake.

# Lessons

- Being first to the right architecture (Snowflake 2014) gives a decade of rent, but the rent attracts unbundling.
- Performance benchmarks did not decide market share. Distribution, simplicity and ecosystem did. The 2021 TPC-DS spat changed little.
- A single fast engine is not a company once hyperscalers offer comparable engines bundled with storage.

# Related

- [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md) · [Single-node analytics](/ideas/analytics-lakehouse/single-node-analytics.md) · [Serverless databases](/ideas/cloud-architecture/serverless-databases.md)
- [Snowflake](/systems/snowflake.md) · [BigQuery](/systems/bigquery.md) · [Redshift](/systems/redshift.md) · [Microsoft Fabric](/systems/microsoft-fabric.md) · [Firebolt](/systems/firebolt.md)
- [Snowflake IPO](/events/2020-09-snowflake-ipo.md) · [Microsoft Fabric announced](/events/2023-05-microsoft-fabric-announced.md) · [TPC-DS benchmark war](/events/2021-11-databricks-snowflake-tpcds-benchmark-war.md)
