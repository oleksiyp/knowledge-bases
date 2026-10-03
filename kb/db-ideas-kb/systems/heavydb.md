---
type: System
title: HeavyDB (MapD / OmniSci / HEAVY.AI)
description: "Pioneering GPU-accelerated SQL database and visual analytics platform, renamed MapD → OmniSci (2018) → HEAVY.AI/HeavyDB (2022). Nvidia acquired the company in 2025 and HeavyDB development stopped, the clearest end point of the standalone GPU-database idea."
resource: https://github.com/heavyai/heavydb
tags: [gpu, olap, visualization, geospatial, acquisition]
kind: product
first_release: 2013
org: "HEAVY.AI (acquired by Nvidia, 2025)"
license: Apache-2.0
outcome: dead
ideas: [ideas/analytics-lakehouse/gpu-accelerated-analytics, ideas/hardware-engines/gpu-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: heavy-dbdb
    resource: https://dbdb.io/db/heavydb
    title: "Database of Databases: HeavyDB"
  - id: heavy-rebrand
    resource: https://insidehpc.com/2022/03/omnisci-rebrands-as-heavy-ai/
    title: "insideHPC: OmniSci rebrands as HEAVY.AI (2022-03)"
  - id: heavy-wiki
    resource: https://en.wikipedia.org/wiki/HEAVY.AI
    title: "Wikipedia: HEAVY.AI"
---

# Summary

MapD began in 2013 as Todd Mostak's MIT project to query and visualise billions of rows (tweets, geospatial points) interactively on GPUs. It was renamed OmniSci in 2018, and in March 2022 it rebranded again as HEAVY.AI, with the database renamed HeavyDB[^heavy-rebrand][^heavy-dbdb]. The core was open-sourced (Apache-2.0) and the visual front end and enterprise features were sold commercially, mainly to telecom, defense and geospatial users. In 2025 Nvidia acquired the company, and the HeavyDB repository's last commit is dated June 2025. Database of Databases records the project as abandoned[^heavy-dbdb][^heavy-wiki].

# Timeline

| Year | Event |
|---|---|
| 2013 | MapD founded |
| 2017 | Core open-sourced |
| 2018 | Renamed OmniSci[^heavy-dbdb] |
| 2022 | Renamed HEAVY.AI / HeavyDB[^heavy-rebrand] |
| 2025 | Acquired by Nvidia; development stops[^heavy-dbdb] |

# What worked

- Impressive interactive visual analytics on very large point datasets, and a real niche customer base.

# What didn't

- It never broke into mainstream analytics. Repeated rebrands signalled a search for a market, and CPU engines narrowed the performance gap.

# Related

- [GPU-accelerated analytics](/ideas/analytics-lakehouse/gpu-accelerated-analytics.md) · [GPU databases](/ideas/hardware-engines/gpu-databases.md) · [Kinetica](/systems/kinetica.md) · [Voltron Data](/systems/voltron-data.md)
