---
type: Paper
title: "SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL"
description: "Google paper (PVLDB 17(12), 2024) proposing pipe syntax (|>) as a backwards-compatible extension of SQL, deployed across BigQuery, F1, Spanner and Procella. It quickly influenced Spark/Databricks and showed SQL can absorb the ideas of would-be replacements."
year: 2024
venue: "VLDB 2024 (PVLDB vol. 17, no. 12)"
authors: [Jeff Shute, Shannon Bales, Matthew Brown, Jean-Daniel Browne, Brandon Dolphin, Romit Kudtarkar, Andrey Litvinov, Jingchi Ma, John Morcos, Michael Shen, David Wilhite, Xi Wu, Lulan Yu]
resource: https://vldb.org/pvldb/vol17/p4051-shute.pdf
impact: high
ideas: [ideas/edge-devx/sql-alternatives]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: paper
    resource: https://vldb.org/pvldb/vol17/p4051-shute.pdf
    title: "Shute et al.: SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL"
    author: org:google
  - id: research
    resource: https://research.google/pubs/sql-has-problems-we-can-fix-them-pipe-syntax-in-sql/
    title: "Google Research publication page"
    author: org:google
  - id: databricks
    resource: https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-pipeline
    title: "Databricks docs: SQL pipeline syntax"
    author: org:databricks
---

# Claim
SQL's rigid clause order (SELECT … FROM … WHERE … GROUP BY …) doesn't match the logical flow of data, which makes queries hard to read, write and extend. Rather than replacing SQL, which loses the ecosystem, add a pipe operator `|>` so a query can be written as a linear chain of operations (`FROM t |> WHERE … |> AGGREGATE … GROUP BY …`). This can be done "without removing anything", fully compatible with existing SQL. Google implemented it in its shared ZetaSQL-based dialect used by F1, BigQuery, Spanner and Procella[^paper][^research].

# What happened next
Pipe syntax shipped in BigQuery. Apache Spark 4.0 and Databricks (Runtime 16.2+) adopted `|>`[^databricks], and other engines followed or discussed it. It achieved the readability goal of PRQL and similar languages without asking users to leave SQL, and it fits LLM-generated queries, since each step can be appended and checked on its own. Impact: high for a language-design paper. Within two years it changed the syntax of major production SQL engines.

# Related
[SQL alternatives](/ideas/edge-devx/sql-alternatives.md) · [PRQL](/systems/prql.md) · [BigQuery](/systems/bigquery.md) · [Databricks](/systems/databricks.md)
