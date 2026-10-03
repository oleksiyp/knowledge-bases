---
type: Event
title: dbt Labs and Fivetran merge
description: Announced 2025-10-13 and closed 2026-06-01, the all-stock merger combined the leading ELT and transformation vendors into a ~$600M-ARR company led by George Fraser.
event_kind: acquisition
date: 2025-10-13
window: W12
impact: mixed
projects: [projects/data-engineering/dbt-core, projects/data-engineering/sqlmesh]
organizations: [organizations/fivetran, organizations/dbt-labs]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: fivetran-close
    resource: https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents
    title: "Fivetran press: Fivetran + dbt Labs complete merger (2026-06-01)"
  - id: merger-close
    resource: https://www.getdbt.com/blog/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents
    title: "Fivetran + dbt Labs complete merger (2026-06-01)"
  - id: techtarget
    resource: https://www.techtarget.com/searchdatamanagement/news/366643590/Fivetran-DBT-Labs-complete-merger-to-form-data-layer-for-AI
    title: "TechTarget: Fivetran, dbt Labs complete merger"
  - id: hevo
    resource: https://hevodata.com/learn/fivetran-dbt-merge/
    title: "Hevo: Fivetran and dbt merger explained"
---

# What happened
Fivetran and dbt Labs announced an all-stock merger on 2025-10-13; the combined company was projected to approach $600M ARR[^hevo][^fivetran-close]. It closed on 2026-06-01 with George Fraser as CEO and Tristan Handy as co-founder and President; the company cites 80,000–100,000+ data teams and customers such as OpenAI, HubSpot, Pfizer and Siemens[^merger-close][^techtarget][^hevo].

# Why it matters
The defining consolidation of the "modern data stack": ingestion + transformation + (via Tobiko) a second transformation framework + (via GX) data quality under one owner, built on SQL and Iceberg[^hevo].

# Outcome so far
dbt Core v2 open-sourced as Apache-2.0 at close; dbt State, dbt Wizard and an "Agents Schema" announced[^merger-close]. The companies' own press release confirms the close on June 1, 2026 (Wikipedia's 'pending' note is outdated)[^fivetran-close][^merger-close].

# Related
- [Fivetran](/organizations/fivetran.md), [dbt Labs](/organizations/dbt-labs.md), [dbt Core](/projects/data-engineering/dbt-core.md), [SQLMesh](/projects/data-engineering/sqlmesh.md), [dbt Core v2](/events/2026-06-dbt-core-v2-fusion-runtime-apache-2.md)

[^fivetran-close]: Fivetran — https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents
[^merger-close]: dbt Labs blog.
[^techtarget]: TechTarget.
[^hevo]: Hevo.
