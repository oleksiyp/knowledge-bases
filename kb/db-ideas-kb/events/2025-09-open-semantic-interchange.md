---
type: Event
title: Open Semantic Interchange launches as a cross-vendor initiative
description: Snowflake and partners propose portable semantic metadata for BI and AI, reviving the semantic-layer
  interoperability question.
date: '2025-09-23'
year: 2025
kind: standard
signal: mixed
ideas:
- ideas/analytics-lakehouse/semantic-layers
systems:
- systems/snowflake
- systems/dbt
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: launch
  resource: https://www.snowflake.com/en/news/press-releases/snowflake-salesforce-dbt-labs-and-more-revolutionize-data-readiness-for-ai-with-open-semantic-interchange-initiative/
  title: Snowflake and partners announce Open Semantic Interchange (September 23, 2025)
---

# What happened

On September 23, 2025, Snowflake and partners including Salesforce, dbt Labs and RelationalAI announced Open Semantic Interchange (OSI). The initiative proposed a vendor-neutral specification for sharing semantic metadata so BI tools and AI applications could use consistent business definitions.[^launch]

This was the launch of a standardization effort. It should not be read as evidence that all participating products already exchanged complete semantic models or produced identical query results.[^launch]

# Why it matters

Semantic layers address a problem that open storage formats do not: two tools can read the same rows and still disagree about revenue, active users or valid joins. OSI made that distinction explicit and connected it to AI-assisted analysis.[^launch]

The analytical verdict is mixed. A coalition improves the chance of useful interchange, but vendor support alone does not settle differences in metric semantics, model expressiveness or execution behavior. The relevant success tests are lossless model exchange and consistent answers across independently implemented tools. The event records a renewed attempt to solve those issues, not proof that they were solved at launch.

# Related

- [Semantic layers](/ideas/analytics-lakehouse/semantic-layers.md)
- [dbt](/systems/dbt.md)
- [Snowflake](/systems/snowflake.md)
