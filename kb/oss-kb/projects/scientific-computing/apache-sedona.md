---
type: OSS Project
title: Apache Sedona
description: Apache-2.0 distributed geospatial engine (Spark/Flink/Snowflake) plus the new Rust/DataFusion single-node SedonaDB (Sept 2025, GPU joins in 0.4 Jun 2026); downloads passed 65M and commits rose ~40% in 2025, with commercial steward Wherobots ($21.5M Series A, Nov 2024) — growing.
resource: https://github.com/apache/sedona
tags: [geospatial, apache-2.0, foundation-hosted, spark, rust, datafusion, coss]
domain: scientific-computing
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: []
metrics:
  github_stars: { value: 2415, as_of: 2026-10-03, note: "apache/sedona; apache/sedona-db has 509" }
  total_downloads: { value: 65000000, as_of: 2026-01-11, note: "project-reported, >65M overall, >2M/month" }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sedona-gh
    resource: https://github.com/apache/sedona
    title: Apache Sedona GitHub repository and releases (1.7.0 2024-12-03 … 1.9.1 2026-08-05)
    last_modified: 2026-10-03T00:00:00Z
  - id: sedonadb-gh
    resource: https://github.com/apache/sedona-db
    title: apache/sedona-db repository (0.1.0 2025-09-19 … 0.4.1 2026-08-18, 0.5.0-rc0 2026-10-02)
    last_modified: 2026-10-03T00:00:00Z
  - id: sedonadb-intro
    resource: https://sedona.apache.org/latest/blog/2025/09/24/introducing-sedonadb-a-single-node-analytical-database-engine-with-geospatial-as-a-first-class-citizen/
    title: "Apache Sedona: Introducing SedonaDB (2025-09-24)"
  - id: sedona-2025-review
    resource: https://sedona.apache.org/latest/blog/2026/01/11/apache-sedona-2025-year-in-review/
    title: "Apache Sedona 2025 Year in Review (2026-01-11)"
  - id: sedonadb-04
    resource: https://sedona.apache.org/latest/blog/2026/06/26/sedonadb-04-gpu-accelerated-spatial-joins/
    title: "SedonaDB 0.4: GPU-Accelerated Spatial Joins (2026-06-26)"
  - id: wherobots-a
    resource: https://wherobots.com/blog/unlocking-answers-to-planetary-scale-questions/
    title: "Wherobots: Announcing our $21.5M Series A"
  - id: wherobots-bdw
    resource: https://www.hpcwire.com/bigdatawire/this-just-in/wherobots-announces-21-5m-funding-to-transform-spatial-data-utilization/
    title: "BigDATAwire: Wherobots announces $21.5M funding"
---

# Summary
Apache Sedona is the breakout of open-source geospatial computing. The Spark/Flink-based engine kept a steady cadence (1.7.0 Dec 2024 → 1.9.1 Aug 2026), and in 2025 its commits rose from 1,509 to 2,137 while total downloads exceeded 65M (>2M/month)[^sedona-gh][^sedona-2025-review]. In September 2025 the community launched SedonaDB, a single-node Rust engine on Apache Arrow and DataFusion with spatial as a first-class type, plus the SpatialBench benchmark; SedonaDB 0.4 (June 2026) added GPU spatial joins using NVIDIA RT cores (up to ~5.9x on heavy joins)[^sedonadb-intro][^sedona-2025-review][^sedonadb-04]. Founders Mo Sarwat and Jia Yu run Wherobots, which raised a $21.5M Series A led by Felicis (Nov 2024; ~$27M total)[^wherobots-a][^wherobots-bdw]. Verdict: growing OSS and business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-26 | Wherobots $21.5M Series A (Felicis; Wing, Clear, JetBlue Ventures, P7)[^wherobots-a] | Business | + |
| W24 | 2024-12-03 | Sedona 1.7.0[^sedona-gh] | OSS | + |
| W24 | 2025-09-19/24 | SedonaDB 0.1.0 launched (Rust, Arrow/DataFusion)[^sedonadb-gh][^sedonadb-intro] | OSS | + |
| W12 | 2025-12-01 | SedonaDB 0.2.0 — raster support, GeoParquet 1.1 write[^sedona-2025-review] | OSS | + |
| W9 | 2026-01-11 | 2025 review: >65M downloads, 2,137 commits, 155 contributors total[^sedona-2025-review] | OSS | + |
| W9 | 2026-03-06 | SedonaDB 0.3.0[^sedonadb-gh] | OSS | + |
| W6 | 2026-04-23 | Sedona 1.9.0[^sedona-gh] | OSS | + |
| W6 | 2026-06-26 | SedonaDB 0.4 — GPU (RT-core) spatial joins; VLDB 2026 industry paper[^sedonadb-04] | OSS | + |
| W3 | 2026-08-05 / 08-18 | Sedona 1.9.1; SedonaDB 0.4.1; 0.5.0-rc0 on 10-02[^sedona-gh][^sedonadb-gh] | OSS | + |

# OSS successes
- Rode the Arrow/DataFusion wave to build a new single-node engine quickly[^sedonadb-intro].
- Native geometry types landed in Iceberg and Parquet, which Sedona exploits[^sedona-2025-review].
- Foundation governance (ASF) with steady new committers[^sedona-2025-review].

# OSS failures / risks
- Competes with DuckDB Spatial, BigQuery/Snowflake native GIS and GeoPandas for mindshare.
- SedonaDB is still pre-1.0.

# Business successes
- Wherobots Series A and enterprise customers (Amazon.com, Land O'Lakes cited)[^wherobots-a].

# Business failures / risks
- No new funding round reported since Nov 2024 (unverified beyond the company's own pages).

# By window
## W3
- Sedona 1.9.1 (08-05); SedonaDB 0.4.1 (08-18), 0.5.0-rc0 (10-02)[^sedona-gh][^sedonadb-gh].
## W6
- Sedona 1.9.0 (04-23); SedonaDB 0.4 GPU joins (06-26)[^sedonadb-04].
## W9
- 2025 year-in-review metrics; SedonaDB 0.3.0[^sedona-2025-review][^sedonadb-gh].
## W12
- SedonaDB 0.2.0 (12-01)[^sedona-2025-review].
## W24
- Wherobots Series A (2024-11-26); SedonaDB launch (2025-09)[^wherobots-a][^sedonadb-intro].

# Lessons
- DataFusion lets domain communities ship credible database engines in months.
- Academic founders → ASF project → VC-backed company remains a working COSS path when the ASF holds the IP.

# Related
- [GeoPandas](/projects/scientific-computing/geopandas.md), [Apache DataFusion](/projects/data-engineering/apache-datafusion.md), [Apache Arrow](/projects/data-engineering/apache-arrow.md), [Apache Spark](/projects/data-engineering/apache-spark.md), [Apache Iceberg](/projects/data-engineering/apache-iceberg.md)
- [Scientific computing domain review](/domains/scientific-computing.md)

[^sedona-gh]: https://github.com/apache/sedona
[^sedonadb-gh]: https://github.com/apache/sedona-db
[^sedonadb-intro]: https://sedona.apache.org/latest/blog/2025/09/24/introducing-sedonadb-a-single-node-analytical-database-engine-with-geospatial-as-a-first-class-citizen/
[^sedona-2025-review]: https://sedona.apache.org/latest/blog/2026/01/11/apache-sedona-2025-year-in-review/
[^sedonadb-04]: https://sedona.apache.org/latest/blog/2026/06/26/sedonadb-04-gpu-accelerated-spatial-joins/
[^wherobots-a]: https://wherobots.com/blog/unlocking-answers-to-planetary-scale-questions/
[^wherobots-bdw]: https://www.hpcwire.com/bigdatawire/this-just-in/wherobots-announces-21-5m-funding-to-transform-spatial-data-utilization/
