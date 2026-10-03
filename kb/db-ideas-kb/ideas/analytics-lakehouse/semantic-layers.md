---
type: Idea
title: "Semantic layers and metrics stores (dbt Semantic Layer, Cube, Transform/MetricFlow, OSI)"
description: "Define business metrics once, in code, and serve them consistently to every BI tool and application. Mixed: the 2021–2022 standalone 'metrics store' startups were absorbed and adoption outside BI vendors stayed thin. The idea then revived from 2024 as the grounding layer for LLM/agent text-to-SQL, leading to the Open Semantic Interchange (2025)."
tags: [semantic-layer, metrics, dbt, cube, bi, text-to-sql, ai-agents]
area: analytics-lakehouse
verdict: mixed
hype_peak: 2022
adoption_2026: common
origins: "OLAP cubes and BusinessObjects universes (1990s); LookML (Looker, 2012; Google acquisition 2019–2020); Airbnb Minerva (internal)"
key_systems: [systems/dbt, systems/snowflake, systems/databricks]
related_ideas: [ideas/vector-ai/text-to-sql, ideas/analytics-lakehouse/data-mesh]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: dbt-transform
    resource: https://www.getdbt.com/blog/press-release-dbt-acquisition-transform
    title: "dbt Labs signs definitive agreement to acquire Transform (2023-02-08)"
  - id: dbt-metricflow
    resource: https://www.getdbt.com/blog/dbt-labs-affirms-commitment-to-open-semantic-interchange-by-open-sourcing-metricflow
    title: "dbt Labs: open-sourcing MetricFlow under Apache-2.0 for OSI (2025-10-14)"
  - id: snow-osi
    resource: https://www.snowflake.com/en/blog/open-semantic-interchange-ai-standard/
    title: "Snowflake: Open Semantic Interchange (2025-09-23)"
  - id: cube-25m
    resource: https://cube.dev/blog/cubes-raises-25-million
    title: "Cube raises $25 million (June 2024)"
  - id: tc-cube
    resource: https://techcrunch.com/2024/06/06/cube-is-building-a-semantic-layer-for-company-data/
    title: "TechCrunch: Cube is building a semantic layer for company data (2024-06-06)"
  - id: forbes-dbt-d
    resource: https://www.forbes.com/sites/kenrickcai/2022/02/24/dbt-labs-series-d-4-billion-less-than-planned/
    title: "Forbes: dbt Labs $222M Series D at $4.2B (2022-02-24)"
  - id: dbt-merger
    resource: https://www.getdbt.com/blog/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents
    title: "dbt Labs: Fivetran and dbt Labs complete merger (2026-06-01)"
---

# Summary

**Verdict: mixed, with a second life.** The 2021–2022 "metrics layer" wave (dbt's metrics spec, Transform, Cube, Supergrain, AtScale) promised a headless semantic layer between warehouses and every BI tool. Little of that happened in the first round. Transform was absorbed by dbt Labs in February 2023[^dbt-transform], dbt's first metrics implementation was replaced by Transform's MetricFlow, and most companies kept their metric definitions inside their BI tool (LookML, Power BI datasets, Tableau). The idea came back strongly from 2024 because LLM agents need governed definitions to answer business questions correctly. Snowflake, dbt Labs, Salesforce, Cube and others launched the **Open Semantic Interchange (OSI)** in September 2025[^snow-osi], and dbt relicensed MetricFlow as Apache-2.0 to seed it[^dbt-metricflow]. Whether OSI becomes a real interchange standard is not yet settled.

# The idea

Metric definitions ("active users", "net revenue") drift when every dashboard and notebook re-implements them in SQL. A semantic layer stores entities, dimensions, measures and joins as code under version control and compiles requests ("revenue by region last quarter") into correct SQL for any engine. The "headless BI" version decouples this layer from any one visualization tool.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019–2020 | Google acquires Looker (LookML), confirming the value of a semantic model inside BI | + |
| 2021 | Transform, Cube, Supergrain and others pitch standalone "metrics stores"; dbt announces a metrics layer | + |
| 2022 | dbt Labs raises $222M at $4.2B (Feb)[^forbes-dbt-d]; dbt Semantic Layer preview | + |
| 2023 | dbt Labs acquires Transform; MetricFlow becomes the dbt Semantic Layer engine (Feb)[^dbt-transform] | ± |
| 2024 | Cube raises $25M and pitches the semantic layer as the AI grounding layer[^cube-25m][^tc-cube] | + |
| 2025 | Open Semantic Interchange launched (Sept 23)[^snow-osi]; MetricFlow relicensed Apache-2.0 (Oct)[^dbt-metricflow] | + |
| 2026 | dbt Labs merges with Fivetran (June 1)[^dbt-merger] | ± |

# What succeeded

- **Semantic models inside dominant tools.** LookML, Power BI semantic models and dbt's YAML definitions are widely used. The idea works when it ships inside a platform people already use.
- **AI grounding.** Text-to-SQL accuracy on real enterprise schemas improves a lot when an LLM targets a curated semantic model instead of raw tables. This became the main sales argument for semantic layers in 2024–2026[^tc-cube][^snow-osi].
- **Consolidation into dbt.** Transform's team and technology became part of the most widely used transformation tool[^dbt-transform].

# What failed

- **Standalone metrics-store startups.** None reached independent scale. They were acquired (Transform), pivoted, or stayed small.
- **Headless BI adoption.** BI vendors had no incentive to give up their own semantic models, so the "define once, use in every tool" integration stayed partial.
- **dbt's first metrics spec** (2021–2022) was replaced within about two years. Early standards that are rewritten cost users their trust.

# Why

1. **Distribution beats architecture.** Metric definitions live where analysts work, and that was the BI tool. A separate layer added a hop with no new user-visible capability, until AI arrived.
2. **Incentives of incumbents.** Looker, Microsoft and Tableau treat their semantic model as lock-in, so interoperability went against their interests.
3. **The AI catalyst.** LLMs made the cost of inconsistent definitions visible, because an agent producing wrong numbers is worse than a stale dashboard. Vendors now want a shared standard to feed every agent, hence OSI.
4. **Timing.** The idea was right in 2021 but needed a consumer (agents) that could not use BI-embedded models.

# Lessons

- "Headless" infrastructure needs a consumer that cannot use the embedded version. Here, that consumer turned out to be AI agents.
- Standards consortia (OSI) form when every vendor fears a single owner of a new control point. Results usually take years.

# Related

- [Text-to-SQL](/ideas/vector-ai/text-to-sql.md) · [Data mesh](/ideas/analytics-lakehouse/data-mesh.md)
- [dbt](/systems/dbt.md) · [Snowflake](/systems/snowflake.md)
- [Open Semantic Interchange launched](/events/2025-09-open-semantic-interchange.md)
