---
type: System
title: PostgresML
description: "Postgres extension and hosted service that ran ML training, inference and embeddings inside the database (Rust, MIT). Founded in 2022, it ceased operations in 2025. The canonical failure of 'put the models in your OLTP database'."
resource: https://github.com/postgresml/postgresml
tags: [postgres, extension, in-database-ml, llm, embeddings]
kind: product
first_release: 2022
org: "PostgresML Inc. (ceased operations 2025)"
license: MIT
outcome: dead
ideas: [ideas/vector-ai/llm-functions-in-sql, ideas/ml-for-db/in-database-ml]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: pigsty
    resource: https://pigsty.io/docs/pgsql/kernel/pgml/
    title: "Pigsty docs: PostgresML (deprecated, company ceased operations)"
  - id: gh
    resource: https://github.com/postgresml/postgresml
    title: "postgresml/postgresml GitHub repository (≈6.8k stars; last push 2025-07-01)"
  - id: rust
    resource: https://github.com/postgresml/postgresml/discussions/326
    title: "PostgresML is moving to Rust for our 2.0 release"
  - id: pgcat
    resource: https://github.com/postgresml/pgcat/discussions/933
    title: "PgCat discussion: Is this project dead? no updates in months"
---

# Summary

PostgresML was founded in 2022 by Montana Low and Lev Kokotov. It let users call `pgml.train`, `pgml.predict`, `pgml.embed` and `pgml.transform` (Hugging Face models) from SQL, running on GPUs next to Postgres. Version 2.0 was rewritten in Rust.[^rust] It also sponsored the PgCat connection pooler. The business was a hosted Postgres with GPUs. Pavlo: "The idea seemed obvious", but the company struggled "to convince people to migrate their existing databases to their hosted platform" and went bust in 2025.[^pavlo-2025] The repository was last pushed on 2025-07-01, and downstream distributions mark the extension deprecated because the company ceased operations.[^gh][^pigsty]

# Timeline

| Date | Event |
|---|---|
| 2022-04 | Project starts[^gh] |
| 2022–23 | 2.0 Rust rewrite; hosted cloud; PgCat[^rust] |
| 2025 | Company ceases operations; repo goes quiet[^pavlo-2025][^gh] |

# What worked

- Clean developer experience: embeddings and inference with one SQL call, with no data movement.
- About 6.8k GitHub stars showed real developer interest.[^gh]

# What didn't

- **Wrong place for the GPU.** Inference wants elastic, shared accelerators. A Postgres primary wants predictable CPU and memory.
- **Migration ask.** Users had to move their production database to PostgresML's cloud to get the feature, while AWS, Supabase and others offered pgvector plus external model APIs on the database they already had.[^pavlo-2025]
- Satellite projects (PgCat) stalled with the company.[^pgcat]

# Related

- [LLM functions in SQL](/ideas/vector-ai/llm-functions-in-sql.md) · [pgvector](/systems/pgvector.md) · [Snowflake Cortex](/systems/snowflake-cortex.md)

[^pavlo-2025]: Pavlo, 2025 review.
[^pigsty]: Pigsty extension docs.
[^gh]: GitHub API.
[^rust]: GitHub discussion #326.
[^pgcat]: PgCat discussion #933.
