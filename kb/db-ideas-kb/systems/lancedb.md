---
type: System
title: LanceDB
description: "Embedded and cloud vector database and 'multimodal lakehouse' built on the open Lance columnar format. It raised a $30M Series A (2025) and is used by AI model makers. It is the most credible attempt to make an AI-specific data format stick next to Parquet."
resource: https://lancedb.com
tags: [vector-database, lance, file-format, multimodal, lakehouse, embedded]
kind: product
first_release: 2023
org: "LanceDB Inc. (formerly Eto Labs)"
license: Apache-2.0
outcome: growing
ideas: [ideas/vector-ai/ai-native-file-formats, ideas/vector-ai/object-storage-vector-search, ideas/vector-ai/dedicated-vector-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: l-a
    resource: https://tech.yahoo.com/ai/articles/lancedb-raises-30-million-multimodal-100430958.html
    title: "LanceDB raises $30 million for multimodal AI data infrastructure (Jun 2025)"
  - id: l-paper
    resource: https://arxiv.org/abs/2504.15247
    title: "Lance: Efficient Random Access in Columnar Storage through Adaptive Structural Encodings (2025)"
  - id: l-gov
    resource: https://lancedb.com/blog/lance-community-governance/
    title: "LanceDB: Introducing Lance community governance"
    author: org:lancedb
  - id: l-rabitq
    resource: https://www.lancedb.com/blog/feature-rabitq-quantization
    title: "LanceDB: RaBitQ quantization"
    author: org:lancedb
  - id: l-gh
    resource: https://github.com/lancedb/lancedb
    title: "lancedb/lancedb (≈11.6k stars) and lance-format/lance (≈7.1k stars), 2026-10-03"
  - id: duck-lance
    resource: https://duckdb.org/2026/05/21/test-driving-lance
    title: "DuckDB: Test-driving the Lance lakehouse format (2026-05-21)"
    author: org:duckdb
---

# Summary

LanceDB was co-founded by Chang She, a pandas co-author.[^l-a] It began as an in-process vector database that runs directly on files in S3, with "no server" for small deployments. The underlying **Lance** format adds random-access-friendly encodings, versioning and built-in vector indexes. The 2025 Lance paper argues it matches Parquet on scans while doing far better at point lookups.[^l-paper] LanceDB raised a $30M Series A in June 2025 led by Theory Ventures, with Databricks Ventures participating. It names Midjourney, Runway, World Labs, Harvey and Character.AI as users.[^l-a] The Lance format moved to community governance with a PMC model separate from the company.[^l-gov] It added RaBitQ quantization,[^l-rabitq] and DuckDB began testing Lance support in 2026.[^duck-lance]

# Timeline

| Date | Event |
|---|---|
| 2022 | Lance format project begins[^l-gh] |
| 2023 | LanceDB embedded vector DB released |
| 2025-04 | Lance paper on arXiv[^l-paper] |
| 2025-06 | $30M Series A[^l-a] |
| 2025–26 | Lance community governance; DuckDB and Polaris integrations[^l-gov][^duck-lance] |

# What worked

- Picked a different battle from other vector DBs: multimodal *training data* management, not just retrieval.
- Embedded, object-storage-first design matched where the market went.

# What didn't

- Competing with Parquet's ecosystem is slow. Lance is still a niche format outside AI labs, and other challengers (Vortex, Nimble) split attention.

# Related

- [AI-native file formats](/ideas/vector-ai/ai-native-file-formats.md) · [Object-storage vector search](/ideas/vector-ai/object-storage-vector-search.md) · [DuckDB](/systems/duckdb.md)

[^l-a]: Yahoo Tech.
[^l-paper]: arXiv.
[^l-gov]: LanceDB blog.
[^l-rabitq]: LanceDB blog.
[^l-gh]: GitHub API.
[^duck-lance]: DuckDB blog.
