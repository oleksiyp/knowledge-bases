---
type: Event
title: Apache Polaris graduates to Top-Level Project
description: The Snowflake/Dremio-originated Iceberg REST catalog became an ASF Top-Level Project on 2026-02-18, cementing a vendor-neutral catalog for the Iceberg ecosystem.
event_kind: foundation-move
date: 2026-02-18
window: W9
impact: positive
projects: [projects/data-engineering/apache-polaris, projects/data-engineering/apache-iceberg]
organizations: [organizations/snowflake]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: polaris-grad
    resource: https://polaris.apache.org/blog/2026/02/19/apache-polaris-graduates-to-top-level-project/
    title: Apache Polaris Graduates to Top Level Project!
  - id: asf-grad
    resource: https://news.apache.org/foundation/entry/the-apache-software-foundation-graduates-two-open-source-projects-from-incubator
    title: "ASF: graduates two projects from the Incubator (Gluten, Polaris)"
  - id: snow-polaris
    resource: https://www.snowflake.com/en/blog/apache-polaris-top-level-project/
    title: "Snowflake: Apache Polaris graduates"
---

# What happened
Polaris graduated on 2026-02-18 after ~18 months of incubation (donated Aug 2024), six releases (0.9.0–1.3.0), 2,800+ PRs and ~100 contributors; its PMC spans Dremio, Snowflake, Google, Microsoft, Confluent and LanceDB[^polaris-grad]. The ASF graduated Apache Gluten (native Spark acceleration) at the same time[^asf-grad].

# Why it matters
With table formats settled on Iceberg, catalogs became the control point. Polaris gives the non-Databricks ecosystem a neutral alternative to Unity Catalog[^snow-polaris].

# Outcome so far
Releases 1.4–1.8 shipped between April and September 2026.

# Related
- [Apache Polaris](/projects/data-engineering/apache-polaris.md), [Apache Iceberg](/projects/data-engineering/apache-iceberg.md), [Unity Catalog](/projects/data-engineering/unity-catalog.md), [Snowflake](/organizations/snowflake.md)

[^polaris-grad]: Apache Polaris blog.
[^asf-grad]: ASF news.
[^snow-polaris]: Snowflake blog.
