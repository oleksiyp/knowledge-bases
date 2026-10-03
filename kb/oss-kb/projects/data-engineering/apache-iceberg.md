---
type: OSS Project
title: Apache Iceberg
description: Winner of the open table format war; V3 spec went GA in 1.10 (Sept 2025) and every major vendor (Snowflake, Databricks, Google, AWS, Confluent) now reads/writes Iceberg, while catalogs became the new battleground.
resource: https://github.com/apache/iceberg
tags: [table-format, lakehouse, apache-2.0, asf, foundation-hosted]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0 (2018-)"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: [organizations/databricks, organizations/snowflake]
metrics:
  github_stars: { value: 9293, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ice-gh
    resource: https://github.com/apache/iceberg
    title: Apache Iceberg GitHub repository (releases 1.9.2 → 1.12.0)
    last_modified: 2026-10-03T00:00:00Z
  - id: google-ice110
    resource: https://opensource.googleblog.com/2025/09/apache-iceberg-110-maturing-the-v3-spec-the-rest-api-and-google-contributions.html
    title: "Google Open Source: Apache Iceberg 1.10 – maturing the V3 spec"
  - id: dremio-ice110
    resource: https://www.dremio.com/blog/whats-new-in-apache-iceberg-1-10-0-and-what-comes-next/
    title: "Dremio: What's new in Apache Iceberg 1.10.0"
  - id: snow-v3
    resource: https://docs.snowflake.com/en/release-notes/2026/other/2026-03-04-iceberg-v3-support-preview
    title: "Snowflake release note: Iceberg v3 support (preview), 2026-03-04"
  - id: dbx-tabular
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-tabular-company-founded-original-creators
    title: "Databricks agrees to acquire Tabular (2024-06-04)"
  - id: confluent-press
    resource: https://www.confluent.io/press-releases/
    title: Confluent press releases (Tableflow GA 2025-03-18)
  - id: polaris-grad
    resource: https://polaris.apache.org/blog/2026/02/19/apache-polaris-graduates-to-top-level-project/
    title: Apache Polaris graduates to Top-Level Project
  - id: ice111
    resource: https://datalakehousehub.com/blog/2026-05-apache-iceberg-1-11-0-deep-dive/
    title: "An In-Depth Overview of the Apache Iceberg 1.11.0 Release"
---

# Summary
Iceberg won the table-format war. After Databricks bought Tabular (Iceberg's creators) in June 2024[^dbx-tabular], the industry converged: Iceberg 1.10.0 (2025-09-11) made V3 features — deletion vectors, row lineage, VARIANT, geo types, nanosecond timestamps, default values — generally available[^ice-gh][^google-ice110][^dremio-ice110]; Snowflake previewed V3 support in March 2026[^snow-v3]; Confluent's Tableflow (GA March 2025) materializes Kafka topics as Iceberg tables[^confluent-press]. Releases continued with 1.11 (2026-05-20) and 1.12 (2026-09-30)[^ice-gh][^ice111]. The fight moved up a layer, to REST catalogs (Polaris, Unity Catalog, Gravitino)[^polaris-grad].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2024-06-04 | Databricks agrees to acquire Tabular[^dbx-tabular] | Business | ± |
| W24 | 2025-03-18 | Confluent Tableflow GA (topics → Iceberg tables)[^confluent-press] | Business | + |
| W24 | 2025-09-11 | Iceberg 1.10.0: V3 spec features GA[^ice-gh][^dremio-ice110] | OSS | + |
| W12 | 2025-12-22 | 1.10.1 maintenance[^ice-gh] | OSS | + |
| W9 | 2026-02-18 | Apache Polaris (Iceberg REST catalog) graduates to TLP[^polaris-grad] | OSS | + |
| W9 | 2026-03-04 | Snowflake previews Iceberg v3 support[^snow-v3] | Business | + |
| W6 | 2026-05-20 | Iceberg 1.11.0[^ice-gh][^ice111] | OSS | + |
| W3 | 2026-09-30 | Iceberg 1.12.0[^ice-gh] | OSS | + |

# OSS successes
- V3 spec closed and shipped after ~4 years, with contributions from Google, Snowflake, Dremio, Databricks and others[^google-ice110].
- Iceberg became the interchange format for streaming (Tableflow, Fluss tiering), warehouses and engines (Polars 1.44 added Iceberg schema evolution)[^confluent-press].

# OSS failures / risks
- Engine support for V3 lags the spec (Snowflake only in preview in March 2026)[^snow-v3].
- Catalog fragmentation (Polaris vs Unity vs Gravitino vs vendor catalogs) replaces format fragmentation.
- Lightweight alternative DuckLake (DuckDB, MIT, ~3k stars) challenges Iceberg's file-based metadata design.

# Business successes
- Iceberg is the basis of products at Snowflake, Databricks, Confluent, Starburst, Dremio, AWS, Google.

# Business failures / risks
- No company "owns" Iceberg; Tabular's exit to Databricks (2024) ended the pure-play Iceberg vendor model[^dbx-tabular].

# By window
## W3
- Iceberg 1.12.0 (2026-09-30)[^ice-gh].
## W6
- Iceberg 1.11.0 (2026-05-20)[^ice111].
## W9
- Polaris TLP; Snowflake V3 preview[^polaris-grad][^snow-v3].
## W12
- 1.10.1 maintenance[^ice-gh].
## W24
- 1.10.0 V3 GA; Tableflow GA[^dremio-ice110][^confluent-press].

# Lessons
- Neutral foundation governance + multi-vendor contribution beat a single-vendor format (Delta) in the interoperability market.
- When the format commoditizes, value capture moves to catalogs, engines and governance.

# Related
- [Delta Lake](/projects/data-engineering/delta-lake.md), [Apache Hudi](/projects/data-engineering/apache-hudi.md), [Apache XTable](/projects/data-engineering/apache-xtable.md), [Apache Polaris](/projects/data-engineering/apache-polaris.md), [Unity Catalog](/projects/data-engineering/unity-catalog.md), [Apache Gravitino](/projects/data-engineering/apache-gravitino.md)
- [Databricks](/organizations/databricks.md), [Snowflake](/organizations/snowflake.md), [Polaris graduates](/events/2026-02-apache-polaris-graduates.md)

[^ice-gh]: Apache Iceberg GitHub releases.
[^google-ice110]: Google Open Source blog, Sept 2025.
[^dremio-ice110]: Dremio blog on 1.10.0.
[^snow-v3]: Snowflake release notes, 2026-03-04.
[^dbx-tabular]: Databricks press release, 2024-06-04.
[^confluent-press]: Confluent press releases.
[^polaris-grad]: Apache Polaris blog, 2026-02-19.
[^ice111]: Datalakehouse Hub, Iceberg 1.11.0 deep dive.
