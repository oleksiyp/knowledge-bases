---
type: Event
title: Polaris and Unity Catalog announcements move competition to catalogs
description: June announcements promise open catalogs; Unity code is released in June and Polaris follows on July
  30.
date: '2024-06-12'
year: 2024
kind: launch
signal: mixed
ideas:
- ideas/analytics-lakehouse/catalog-wars
- ideas/analytics-lakehouse/open-table-formats
systems:
- systems/apache-polaris
- systems/unity-catalog
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: polaris
  resource: https://www.snowflake.com/en/blog/polaris-catalog-open-source/
  title: Polaris Catalog Is Now Open Source (July 30, 2024)
- id: unity
  resource: https://www.databricks.com/company/newsroom/press-releases/databricks-open-sources-unity-catalog-creating-industrys-only-open
  title: Databricks Open Sources Unity Catalog (June 12, 2024)
---

# What happened

Snowflake announced Polaris Catalog in June 2024 and subsequently released its code under Apache 2.0 on July 30. Databricks announced an Apache-licensed open-source Unity Catalog on June 12. The two moves placed catalog interoperability at the center of the lakehouse contest.[^polaris][^unity]

The June date here marks the competing announcements, not simultaneous source-code releases. Snowflake's July statement explicitly distinguishes its earlier announcement from code availability and a managed-service public preview.[^polaris]

# Why it matters

An open table format needs a way to discover tables, obtain metadata and coordinate access. Snowflake presented Polaris as an Iceberg catalog supporting multiple engines; Databricks presented Unity as a broader catalog for data and AI assets.[^polaris][^unity] Opening these interfaces can lower integration costs even when the managed platforms remain commercially distinct.

The inference is that openness became a competitive requirement at a second layer of the stack. Neither announcement alone proves that every commercial governance feature became portable, or that an enterprise could replace its catalog without changing policies and integrations. Code availability is a starting point for interoperability, not a completed migration guarantee.

# Related

- [Catalog wars](/ideas/analytics-lakehouse/catalog-wars.md)
- [Apache Polaris](/systems/apache-polaris.md)
- [Unity Catalog](/systems/unity-catalog.md)
