---
type: Idea
title: "AI-native file formats: Lance, Vortex and the challenge to Parquet"
description: "New columnar formats (Lance, Vortex, Nimble, and others) claim Parquet is wrong for AI: too slow for random access, bad at wide multimodal rows and embeddings, hostile to GPUs. Lance found a real niche in multimodal ML data. But Parquet is entrenched, tuned Parquet closes much of the gap, and by 2026 none of the challengers is a standard."
tags: [file-formats, lance, parquet, vortex, multimodal, lakehouse]
area: vector-ai
verdict: niche
hype_peak: 2025
adoption_2026: niche
origins: "Parquet (2013) and ORC dominated the Hadoop/lakehouse era. Lance started in 2022 (by a pandas co-author, Chang She) for computer-vision and ML datasets."
key_systems: [systems/lancedb, systems/apache-arrow, systems/duckdb, systems/apache-polaris]
related_ideas: [ideas/vector-ai/object-storage-vector-search, ideas/vector-ai/dedicated-vector-databases, ideas/analytics-lakehouse/open-table-formats]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: lance-paper
    resource: https://arxiv.org/abs/2504.15247
    title: "Pace, She et al.: Lance: Efficient Random Access in Columnar Storage through Adaptive Structural Encodings (2025)"
  - id: lance-gov
    resource: https://lancedb.com/blog/lance-community-governance/
    title: "LanceDB: Introducing Lance community governance"
    author: org:lancedb
  - id: lancedb-a
    resource: https://tech.yahoo.com/ai/articles/lancedb-raises-30-million-multimodal-100430958.html
    title: "LanceDB raises $30 million for multimodal AI data infrastructure (Jun 2025)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: vortex-lf
    resource: https://www.linuxfoundation.org/press/lf-ai-data-foundation-hosts-vortex-project-to-power-high-performance-data-access-for-ai-and-analytics
    title: "Linux Foundation: LF AI & Data hosts Vortex (2025)"
    author: org:linux-foundation
  - id: gpu-parquet
    resource: https://arxiv.org/abs/2602.17335
    title: "Do GPUs Really Need New Tabular File Formats? (arXiv, Feb 2026)"
  - id: duck-lance
    resource: https://duckdb.org/2026/05/21/test-driving-lance
    title: "DuckDB: Test-driving the Lance lakehouse format in DuckDB (2026-05-21)"
    author: org:duckdb
  - id: duck-vortex
    resource: https://duckdb.org/2026/01/23/duckdb-vortex-extension
    title: "DuckDB: Announcing Vortex support in DuckDB (2026-01-23)"
    author: org:duckdb
  - id: polaris-lance
    resource: https://polaris.apache.org/blog/2026/01/06/apache-polaris-and-lance-bringing-ai-native-storage-to-the-open-multimodal-lakehouse/
    title: "Apache Polaris and Lance (2026-01-06)"
  - id: lance-gh
    resource: https://github.com/lance-format/lance
    title: "lance-format/lance GitHub repository (≈7k stars on 2026-10-03)"
---

# Summary

**Verdict: niche (possibly too early).** Parquet was designed for full scans of flat analytic tables. AI workloads want random row access (training-data shuffles, fetching a vector's source row), wide rows holding images, video and embeddings, and versioned datasets. The Lance paper shows Lance matching Parquet on full scans while doing far better at random access. It also finds Parquet needs about 20 GB of RAM of page index per billion vectors to compete, where Lance needs none.[^lance-paper] Lance has funding (LanceDB's $30M Series A, 2025), users among AI model makers, a neutral governance model and integrations with DuckDB and Apache Polaris.[^lancedb-a][^lance-gov][^duck-lance][^polaris-lance] But 2025 brought five more challengers to Parquet, one of them abandoned within the year.[^pavlo-2025] A 2026 study found Parquet's poor GPU performance came from configuration, not the format.[^gpu-parquet] Parquet remains the default. Lance is the most credible specialist.

# The idea

A file format for "AI data" should:
- support cheap point lookups and take/scatter reads (no need to decode a whole page to get one row);
- store large blobs and fixed-width vectors efficiently;
- carry vector and scalar indexes and versioning (Lance is file format, table format and light catalog spec at once);
- be GPU- and object-storage-friendly.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2022 | Lance format begins (Eto Labs, later LanceDB) | + |
| 2024 | Lance v2 file format; Meta releases Nimble; Lance and Nimble named by Pavlo as 2024 newcomers[^pavlo-2025] | + |
| 2025 | Lance paper (Apr); LanceDB $30M Series A (Jun) with users like Midjourney, Runway and Character.AI[^lance-paper][^lancedb-a] | + |
| 2025 | Vortex donated to LF AI & Data, backed by Microsoft, Snowflake and Palantir; FastLanes, F3, AnyBlox appear; Microsoft's Amudai is closed-sourced/abandoned[^vortex-lf][^pavlo-2025] | ± |
| 2026 | DuckDB adds Vortex (Jan) and tests Lance (May); Apache Polaris integrates Lance (Jan); Parquet-on-GPU study (Feb) argues new formats are not needed[^duck-vortex][^duck-lance][^polaris-lance][^gpu-parquet] | ± |

# What succeeded

- **A real workload.** Multimodal training and serving data (images, video, embeddings in one table, with random access) is badly served by Parquet. Lance's design addresses it, and AI labs adopted it.[^lancedb-a]
- **Neutral governance.** Lance moved to a community PMC model and Vortex to the Linux Foundation. Both understood that a format controlled by one vendor will not become a standard.[^lance-gov][^vortex-lf]
- **Engine support is arriving** through DuckDB extensions and lakehouse catalogs.[^duck-lance][^polaris-lance]

# What failed

- **Fragmentation.** Six or more new formats in two years dilute the effort. Parquet's own history is a warning: Pavlo cites the finding that 94% of Parquet files use only 2013-era v1 features.[^pavlo-2025]
- **Displacing Parquet in the lakehouse.** Iceberg/Delta tables remain Parquet-first. Lance's role so far is a sidecar format for AI datasets.
- **"Need a new format for GPUs".** Contradicted when GPU-aware Parquet configuration reached up to 125 GB/s effective read bandwidth.[^gpu-parquet]

# Why

1. **Network effects.** A file format is only as useful as the number of readers, and Parquet is read by everything. Challengers must offer 10x gains on a workload people care about. Lance's random access does that for ML, but not for BI.
2. **Configuration versus format.** Many Parquet weaknesses are writer defaults (page sizes, encodings). Tuning closes part of the gap at zero migration cost.[^gpu-parquet]
3. **Formats bundled with a product** (LanceDB) can spread fast. They still need neutral governance to be trusted as a standard.

# Lessons

- A new storage format wins only by owning a workload the incumbent cannot serve even when tuned. Benchmarks against default settings overstate the gap.
- Too many competing challengers help the incumbent.

# Related

- [Object-storage vector search](/ideas/vector-ai/object-storage-vector-search.md) · [Open table formats](/ideas/analytics-lakehouse/open-table-formats.md)
- Systems: [LanceDB](/systems/lancedb.md), [Apache Arrow](/systems/apache-arrow.md), [DuckDB](/systems/duckdb.md), [Apache Polaris](/systems/apache-polaris.md)

[^lance-paper]: arXiv 2504.15247.
[^lance-gov]: LanceDB blog.
[^lancedb-a]: Yahoo Tech / SiliconANGLE report.
[^pavlo-2025]: Pavlo, 2025 review, file-formats section.
[^vortex-lf]: Linux Foundation press release.
[^gpu-parquet]: arXiv 2602.17335.
[^duck-lance]: DuckDB blog.
[^duck-vortex]: DuckDB blog.
[^polaris-lance]: Apache Polaris blog.
[^lance-gh]: GitHub.
