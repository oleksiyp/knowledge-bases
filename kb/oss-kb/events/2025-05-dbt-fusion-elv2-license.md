---
type: Event
title: dbt Labs launches dbt Fusion under ELv2
description: On 2025-05-28 dbt Labs launched the Rust-based dbt Fusion engine with source-available ELv2 components, sparking fears that Apache-2.0 dbt Core would be left behind.
event_kind: license-change
date: 2025-05-28
window: W24
impact: negative
projects: [projects/data-engineering/dbt-core, projects/data-engineering/sqlmesh]
organizations: [organizations/dbt-labs]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: fusion-license
    resource: https://www.getdbt.com/blog/new-code-new-license-understanding-the-new-license-for-the-dbt-fusion-engine
    title: "dbt Labs: New code, new license (2025-05-28)"
  - id: tobiko-fusion
    resource: https://www.tobikodata.com/blog/dbt-fusion-death-of-dbt-core
    title: "Tobiko Data: Is dbt Fusion the death of dbt Core?"
  - id: dbt-core-v2
    resource: https://docs.getdbt.com/blog/dbt-core-v2-is-here
    title: "dbt Core v2 is here (2026-06-01)"
---

# What happened
dbt Labs released dbt Fusion, a Rust rewrite (built on the SDF acquisition), mixing ELv2 source-available, proprietary and Apache-2.0 code. ELv2 forbids offering the software as a competing managed service. dbt Core stayed Apache-2.0 "indefinitely"; dbt Labs also released Apache-2.0 adapters (ADBC), ANTLR SQL grammars and a Rust Jinja[^fusion-license].

# Why it matters
Critics (notably competitor Tobiko Data) argued the next-generation engine being non-OSI-open signaled the slow death of dbt Core, and that messaging was unclear[^tobiko-fusion].

# Outcome so far
Reversed: on 2026-06-01, with the Fivetran merger close, the Fusion runtime was relicensed Apache-2.0 as dbt Core v2; the Fusion binary became a free distribution with premium features, and is no longer ELv2-restricted for managed-service use[^dbt-core-v2].

# Related
- [dbt Core](/projects/data-engineering/dbt-core.md), [dbt Labs](/organizations/dbt-labs.md), [dbt Core v2 relicense](/events/2026-06-dbt-core-v2-fusion-runtime-apache-2.md), [SQLMesh](/projects/data-engineering/sqlmesh.md)

[^fusion-license]: dbt Labs blog.
[^tobiko-fusion]: Tobiko Data blog.
[^dbt-core-v2]: dbt docs blog.
