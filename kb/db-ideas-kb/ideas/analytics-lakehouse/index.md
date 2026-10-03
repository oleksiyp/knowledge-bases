# Verdict: won

* [Cloud data warehouses with separated storage and compute (Snowflake, BigQuery, Redshift, Synapse → Fabric)](cloud-data-warehouses.md) - Elastic, consumption-priced SQL warehouses with storage and compute separated replaced on-prem MPP appliances. Won decisively by 2020–2022. Since 2023 the category has been squeezed by the lakehouse and open formats, and growth has slowed from hypergrowth to roughly 25–30% a year at Snowflake.
* [The lakehouse: warehouse semantics on open files in object storage](lakehouse.md) - Put ACID tables, SQL and governance directly on Parquet files in cheap object storage instead of loading data into a proprietary warehouse. Won: by 2024–2026 every major warehouse vendor, Snowflake and the hyperscalers included, had adopted the architecture. The winners were the vendors who sell compute and catalogs on top of it, not 'openness' as such.
* [Open table formats war: Iceberg vs Delta Lake vs Hudi](open-table-formats.md) - Three open specs competed to be the transactional table layer over Parquet. Iceberg won the cross-vendor standard by 2024–2025 because it was engine-neutral and the vendor most threatened by it (Snowflake) adopted it. Delta survives as Databricks' native format and Hudi became niche.

# Verdict: winning

* [Composable data systems: Arrow, DataFusion, Velox, Substrait, ADBC](composable-data-systems.md) - Build databases from shared, reusable open components (columnar memory format, execution engines, plan IR, connectivity) instead of monoliths. Winning: Arrow is universal and DataFusion and Velox power dozens of products. The cross-engine plan IR (Substrait) and the company built to sell the stack (Voltron Data) did not succeed.
* ["Big data is dead": single-node and in-process analytics (DuckDB, Polars, MotherDuck)](single-node-analytics.md) - Most analytical datasets fit on one modern machine, so an embedded vectorized engine (DuckDB) or a fast dataframe library (Polars) beats a distributed cluster for most work. Winning: DuckDB and Polars became default tools and AWS bought DuckDB's developer company in 2026. The 'hybrid' cloud business built on the idea (MotherDuck) is still unproven.

# Verdict: mixed

* [Catalog wars: who controls the lakehouse metadata (Unity, Polaris, Glue, REST catalog, DuckLake)](catalog-wars.md) - Once Iceberg won the format layer, vendors fought over the catalog, which controls table discovery, commits and access policy. The Iceberg REST catalog API became the interop standard. Control of governance stays with each platform (Unity in Databricks, Horizon/Polaris in Snowflake, Glue/S3 Tables in AWS), so there was no single winner.
* [Real-time OLAP engines (ClickHouse, Druid, Pinot, StarRocks, Rockset)](real-time-olap.md) - Purpose-built columnar engines for sub-second analytics on fresh, streaming data and user-facing dashboards. Mixed: the category is real and growing, but it consolidated around ClickHouse. Druid and Pinot stagnated commercially, Rockset was absorbed by OpenAI and shut down, and StarRocks' sponsor rebranded around AI agents.
* [Semantic layers and metrics stores (dbt Semantic Layer, Cube, Transform/MetricFlow, OSI)](semantic-layers.md) - Define business metrics once, in code, and serve them consistently to every BI tool and application. Mixed: the 2021–2022 standalone 'metrics store' startups were absorbed and adoption outside BI vendors stayed thin. The idea then revived from 2024 as the grounding layer for LLM/agent text-to-SQL, leading to the Open Semantic Interchange (2025).

# Verdict: fading

* [Data mesh: decentralised, domain-owned data products](data-mesh.md) - An organisational architecture: domain teams own and publish their data as products on a self-serve platform under federated governance. Fading: it peaked as a conference buzzword in 2021–2022. Full implementations were rare and costly, but parts of it ('data products', domain ownership, data contracts) became normal vocabulary.

# Verdict: failed

* [GPU-accelerated analytical databases (OmniSci/HeavyDB, BlazingSQL, Voltron Theseus, Sirius)](gpu-accelerated-analytics.md) - Run SQL analytics on GPUs for order-of-magnitude speedups. Failed commercially in 2018–2025: BlazingSQL folded into Voltron Data, Voltron shut down, and HEAVY.AI was absorbed by Nvidia with HeavyDB abandoned. CPU engines got fast enough and data movement dominated. A research-led revival (Sirius, GPU backends for DuckDB and Polars) is under way but unproven.
