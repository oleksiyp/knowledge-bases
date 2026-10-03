---
type: Event
title: "Oracle Database 23ai ships with AI Vector Search"
description: "Oracle renamed 23c to 23ai and made it GA on 2024-05-02 with a native VECTOR type and AI Vector Search. In October 2025 the product became 'Oracle AI Database 26ai'. Vector search had become a checkbox for the largest commercial RDBMS."
date: 2024-05-02
year: 2024
kind: launch
signal: positive
ideas: [ideas/vector-ai/vector-search-as-a-feature]
systems: []
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ga
    resource: https://blogs.oracle.com/database/oracle-23ai-now-generally-available
    title: "Oracle: Announcing Oracle Database 23ai general availability"
    author: org:oracle
  - id: rename
    resource: https://blog.zeddba.com/2024/05/03/oracle-database-23c-now-oracle-database-23ai/
    title: "Oracle Database 23c now Oracle Database 23ai (2024-05-03)"
  - id: 26ai
    resource: https://mikedietrichde.com/2025/10/14/oracle-ai-database-26ai-replaces-oracle-database-23ai/
    title: "Mike Dietrich: Oracle AI Database 26ai replaces Oracle Database 23ai (2025-10-14)"
---

# What happened

Oracle's long-term-support release, previously called 23c, shipped as **Oracle Database 23ai**. It includes a native `VECTOR` data type, vector indexes and SQL similarity search combined with relational, JSON, graph and spatial predicates, among 300+ new features.[^ga][^rename] In October 2025 Oracle went further and renamed the product **Oracle AI Database 26ai**. The release was delivered as a release update to 23ai with no upgrade, which shows the rename was branding.[^26ai]

# Why it matters

When the most conservative enterprise database renames itself around AI, the feature is fully absorbed. Oracle was also reported as a potential Pinecone acquirer in 2025.

# Related

- [Vector search as a feature](/ideas/vector-ai/vector-search-as-a-feature.md)

[^ga]: Oracle blog.
[^rename]: zeddba blog.
[^26ai]: Oracle product management blog.
