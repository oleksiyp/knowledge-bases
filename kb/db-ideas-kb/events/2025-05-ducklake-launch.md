---
type: Event
title: DuckLake launches with transactional SQL metadata
description: DuckLake keeps analytical data in Parquet but places lakehouse metadata in an ordinary SQL database.
date: '2025-05-27'
year: 2025
kind: launch
signal: mixed
ideas:
- ideas/analytics-lakehouse/lakehouse
- ideas/analytics-lakehouse/catalog-wars
systems:
- systems/ducklake
- systems/duckdb
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: launch
  resource: https://ducklake.select/2025/05/27/ducklake-01/
  title: 'DuckLake: SQL as a Lakehouse Format'
---

# What happened

DuckLake was introduced on May 27, 2025 as an open lakehouse format with a DuckDB extension. Its distinguishing choice is to store table metadata in a SQL database while retaining Parquet for bulk data. The announcement describes snapshots, schema evolution and transactional coordination without a separate custom catalog-server implementation.[^launch]

# Why it matters

Lakehouse design had often treated object-storage metadata files as part of the price of openness. DuckLake challenged that premise: a transactional database can perform metadata work while large analytical files remain independently accessible. This moves database technology into the catalog rather than attempting to replace the SQL database everywhere.[^launch]

The mixed signal concerns the adoption burden. A simpler metadata architecture can still introduce a new interoperability boundary: engines need support for the new format, and an operator must run or obtain the metadata database. That is an architectural tradeoff, not evidence of failure. The launch established a concrete alternative and a design critique; it did not establish that DuckLake had displaced Iceberg.

# Related

- [DuckLake](/systems/ducklake.md)
- [Catalog wars](/ideas/analytics-lakehouse/catalog-wars.md)
- [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md)
