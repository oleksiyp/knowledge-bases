---
type: OSS Project
title: Cube
description: Open-source semantic layer (Cube Core) that rode the "semantic layer for AI agents" wave — founding member of the Open Semantic Interchange (Sept 2025), with a dbt integration and Claude connector in 2026.
resource: https://github.com/cube-js/cube
tags: [semantic-layer, bi, open-core]
domain: data-engineering
license: "Apache-2.0 (default) / MIT (some packages)"
license_history: ["Apache-2.0 default with MIT for some packages (GitHub reports NOASSERTION)"]
governance: company-led-open-core
steward: Cube Dev
backing_orgs: []
metrics:
  github_stars: { value: 20949, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cube-gh
    resource: https://github.com/cube-js/cube
    title: Cube GitHub repository (v1.7.x near-daily releases)
    last_modified: 2026-10-03T00:00:00Z
  - id: cube-25m
    resource: https://cube.dev/blog/cubes-raises-25-million
    title: "Cube raises $25 million, with Databricks Ventures (2024-06-06)"
  - id: tc-cube-25m
    resource: https://techcrunch.com/2024/06/06/cube-is-building-a-semantic-layer-for-company-data/
    title: "TechCrunch: Cube is building a 'semantic layer' for company data (2024-06-06)"
  - id: cube-blog
    resource: https://cube.dev/blog
    title: Cube blog (2026 posts)
  - id: snow-osi
    resource: https://www.snowflake.com/en/blog/open-semantic-interchange-ai-standard/
    title: "Snowflake: Open Semantic Interchange (2025-09-23)"
---

# Summary
Cube ships near-daily 1.7.x releases (21k stars)[^cube-gh]. Semantic layers became strategic as AI agents need governed metrics: Cube was a founding member of Snowflake's Open Semantic Interchange (2025-09-23) alongside dbt Labs, Salesforce, ThoughtSpot and others[^snow-osi]. In 2026 Cube marketed itself as "the open-source Looker alternative for the AI era", added a dbt integration (July), Claude connector and skills (August) and a Snowflake Cortex Code integration (September)[^cube-blog]. Its last announced round was $25M in June 2024 with Databricks Ventures and 645 Ventures; no new round was announced in 2025–2026[^cube-25m][^tc-cube-25m]. Verdict: growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-23 | Founding member of Open Semantic Interchange[^snow-osi] | Business | + |
| W3 | 2026-07-15/16 | "Open-source Looker alternative" positioning; dbt integration[^cube-blog] | Business | + |
| W3 | 2026-08-20 | Claude connector and skills[^cube-blog] | Business | + |
| W3 | 2026-09-17 | Cube + Snowflake CoCo[^cube-blog] | Business | + |

# OSS successes
- High release cadence; open semantic layer standardization[^cube-gh][^snow-osi].

# OSS failures / risks
- Licensing is permissive (Apache-2.0 default, MIT for some packages) but GitHub cannot auto-detect it (NOASSERTION)[^cube-gh]; the commercial Cube Cloud carries most AI features.

# Business successes
- Ecosystem partnerships (Snowflake, Anthropic Claude, dbt)[^cube-blog].

# Business failures / risks
- dbt (now Fivetran) and warehouses ship their own semantic layers.

# By window
## W3
- dbt integration; Claude connector; Snowflake integration[^cube-blog].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- OSI founding member[^snow-osi].

# Lessons
- AI agents revived demand for semantic layers, a category that struggled in 2022–2024.

# Related
- [Apache Superset](/projects/data-engineering/apache-superset.md), [dbt Core](/projects/data-engineering/dbt-core.md), [Snowflake](/organizations/snowflake.md)

[^cube-gh]: Cube GitHub releases.
[^cube-blog]: Cube blog.
[^snow-osi]: Snowflake blog, OSI.
[^cube-25m]: Cube blog, 2024-06-06.
[^tc-cube-25m]: TechCrunch, 2024-06-06.
