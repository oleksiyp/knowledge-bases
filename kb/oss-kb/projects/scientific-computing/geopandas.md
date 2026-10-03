---
type: OSS Project
title: GeoPandas
description: The standard Python library for vector geospatial dataframes (pandas + Shapely); slow-but-steady releases (1.0 Jun 2024 → 1.1 Jun 2025 → 1.2 Sep 2026 with GeoParquet 2.0 and re-implemented plotting) as scale-out spatial work shifts to Apache Sedona/SedonaDB and DuckDB Spatial — stable volunteer project.
resource: https://github.com/geopandas/geopandas
tags: [geospatial, scientific-python, dataframe, bsd-3-clause, numfocus, community]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: community
steward: GeoPandas core team (NumFOCUS fiscally sponsored)
backing_orgs: [organizations/numfocus]
metrics:
  github_stars: { value: 5272, as_of: 2026-10-03 }
  default_branch_commits_apr_sep: { value: 69, as_of: 2026-10-01, note: "vs 61 in Apr–Sep 2025 (GitHub API)" }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gpd-gh
    resource: https://github.com/geopandas/geopandas
    title: GeoPandas GitHub repository and releases (v1.0.0 2024-06-24 … v1.2.0 2026-09-28)
    last_modified: 2026-10-03T00:00:00Z
  - id: gpd-120
    resource: https://github.com/geopandas/geopandas/releases/tag/v1.2.0
    title: GeoPandas v1.2.0 release
  - id: gpd-changelog
    resource: https://github.com/geopandas/geopandas/blob/main/CHANGELOG.md
    title: GeoPandas CHANGELOG
  - id: sedonadb-intro
    resource: https://sedona.apache.org/latest/blog/2025/09/24/introducing-sedonadb-a-single-node-analytical-database-engine-with-geospatial-as-a-first-class-citizen/
    title: "Apache Sedona: Introducing SedonaDB (2025-09-24)"
---

# Summary
GeoPandas is the default for vector GIS in Python and remains healthy but low-velocity: 1.1.0 (2025-06-01) and 1.2.0 (2026-09-28) were the only feature releases in the window, with roughly 60–70 default-branch commits per half-year[^gpd-gh]. 1.2.0 re-implemented static plotting (categorical style mapping, geometry-aware legends), added `make_grid` and `read_file_info`, supports reading/writing the upcoming GeoParquet 2.0 spec and reads Parquet directly over HTTP; it requires Python 3.11+, pandas 2.2, NumPy 2.0 and Shapely 2.1[^gpd-120][^gpd-changelog]. The competitive frontier for large-scale spatial analytics moved to Rust/Arrow engines such as SedonaDB (Sept 2025) and DuckDB Spatial[^sedonadb-intro]. Verdict: stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-01 | GeoPandas 1.1.0[^gpd-gh] | OSS | + |
| W24 | 2025-09-24 | Apache Sedona launches SedonaDB (Rust, single-node spatial engine)[^sedonadb-intro] | OSS | − (competition) |
| W12 | 2025-12-22 | 1.1.2[^gpd-gh] | OSS | + |
| W9 | 2026-03-10 | 1.1.3[^gpd-gh] | OSS | + |
| W6 | 2026-06-26 | 1.1.4[^gpd-gh] | OSS | + |
| W3 | 2026-09-28 | GeoPandas 1.2.0 — GeoParquet 2.0, new plotting, make_grid[^gpd-120] | OSS | + |

# OSS successes
- Early GeoParquet 2.0 support keeps GeoPandas central to the cloud-native geospatial format story[^gpd-120].
- Modernized dependency floor (Shapely 2.1, NumPy 2)[^gpd-120].

# OSS failures / risks
- Single-threaded pandas-based design limits scale; heavy users move to Sedona, DuckDB Spatial or Polars-based alternatives[^sedonadb-intro].
- Small volunteer core; long gaps between minor releases[^gpd-gh].

# Business successes
- n/a.

# Business failures / risks
- n/a.

# By window
## W3
- 1.2.0 (2026-09-28)[^gpd-120].
## W6
- 1.1.4 (2026-06-26)[^gpd-gh].
## W9
- 1.1.3 (2026-03-10)[^gpd-gh].
## W12
- 1.1.2 (2025-12-22)[^gpd-gh].
## W24
- 1.1.0 (2025-06-01); SedonaDB launched as a competitor (2025-09-24)[^gpd-gh][^sedonadb-intro].

# Lessons
- Standards work (GeoParquet) gives a slow-moving library outsized leverage.

# Related
- [Apache Sedona](/projects/scientific-computing/apache-sedona.md), [pandas](/projects/data-engineering/pandas.md), [Apache Arrow](/projects/data-engineering/apache-arrow.md)
- [NumFOCUS](/organizations/numfocus.md), [Scientific computing domain review](/domains/scientific-computing.md)

[^gpd-gh]: https://github.com/geopandas/geopandas
[^gpd-120]: https://github.com/geopandas/geopandas/releases/tag/v1.2.0
[^gpd-changelog]: https://github.com/geopandas/geopandas/blob/main/CHANGELOG.md
[^sedonadb-intro]: https://sedona.apache.org/latest/blog/2025/09/24/introducing-sedonadb-a-single-node-analytical-database-engine-with-geospatial-as-a-first-class-citizen/
