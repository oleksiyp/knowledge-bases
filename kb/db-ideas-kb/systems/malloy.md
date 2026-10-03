---
type: System
title: Malloy
description: "Semantic data modelling and query language created at Google by Looker founder Lloyd Tabb. It compiles to SQL for BigQuery, Postgres and DuckDB. Respected but niche; Tabb moved to Meta in 2024 to continue the work."
resource: https://www.malloydata.dev
tags: [query-language, semantic-layer, sql-alternative]
kind: oss
first_release: 2021
org: "Originally Google; maintained by Lloyd Tabb and community (Tabb at Meta since 2024)"
license: MIT
outcome: stable
ideas: [ideas/edge-devx/sql-alternatives]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tabb-meta
    resource: https://x.com/lloydtabb/status/1786784460702376077
    title: "Lloyd Tabb: starting at Meta to work on Malloy (May 2024)"
    author: person:lloyd-tabb
  - id: gh
    resource: https://github.com/malloydata/malloy
    title: "Malloy GitHub repository"
  - id: santacruz
    resource: https://www.santacruzworks.org/news/looker-founder-helps-create-new-data-exploration-language-malloy
    title: "Santa Cruz Works: Looker founder helps create new data exploration language, Malloy"
---

# Summary
After Looker (whose LookML modelling layer Google bought in 2019–20), Lloyd Tabb built Malloy at Google. It is a language in which reusable semantic models (joins, measures, dimensions) and queries live together, with nested results and compilation to SQL[^santacruz]. In May 2024 Tabb announced he was joining Meta "to work on Malloy and to bring Malloy into Meta's internal data tooling"[^tabb-meta]. The open-source project remained active, with about 2.6k GitHub stars and commits in October 2026[^gh]. It did not become a general SQL replacement, but its semantic-model ideas match the broader rise of semantic layers, including those feeding LLM text-to-SQL.

# Timeline
| Year | Event |
|---|---|
| 2021 | Malloy introduced by Google (approximate) |
| 2024 | Tabb joins Meta to continue Malloy (May)[^tabb-meta] |
| 2026 | Project active[^gh] |

# What worked
- A well-designed semantic modelling approach, with backing from a founder who had already built a successful BI product.

# What didn't
- Adoption outside enthusiasts. A new language must overcome all of SQL's tooling.

# Related
[SQL alternatives](/ideas/edge-devx/sql-alternatives.md) · [PRQL](/systems/prql.md) · [BigQuery](/systems/bigquery.md)
