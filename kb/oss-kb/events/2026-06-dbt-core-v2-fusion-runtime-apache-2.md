---
type: Event
title: dbt Core v2 open-sources the Fusion runtime under Apache-2.0
description: On 2026-06-01 dbt Labs relicensed the Rust Fusion runtime (previously slated for ELv2) as Apache-2.0 "dbt Core v2", reversing its 2025 license strategy; v2.0.0 went GA on 2026-09-14.
event_kind: license-change
date: 2026-06-01
window: W6
impact: positive
projects: [projects/data-engineering/dbt-core]
organizations: [organizations/dbt-labs, organizations/fivetran]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dbt-core-v2
    resource: https://docs.getdbt.com/blog/dbt-core-v2-is-here
    title: "dbt Core v2 is here: still open source, now rebuilt (2026-06-01)"
  - id: merger-close
    resource: https://www.getdbt.com/blog/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents
    title: "Fivetran + dbt Labs complete merger (2026-06-01)"
  - id: dbt-gh
    resource: https://github.com/dbt-labs/dbt
    title: "dbt GitHub repository (v2.0.0 released 2026-09-14)"
---

# What happened
dbt Core v2 builds on the Fusion engine foundations: all code needed for a Rust implementation of the dbt v2.0 framework — including previously proprietary dbt-fusion code and the runtime once committed to ELv2 — is now Apache-2.0. Fusion continues as a precompiled binary with extra capabilities (some requiring login/payment) and is usable as a managed service. ~300 community members had contributed to Fusion in preview[^dbt-core-v2]. It was announced alongside the Fivetran merger close[^merger-close]; v2.0.0 shipped 2026-09-14[^dbt-gh].

# Why it matters
A rare full reversal of a source-available move by a major COSS vendor, within ~12 months, after community pushback and competitive pressure from SQLMesh.

# Outcome so far
v2.0.0–2.0.5 shipped in September 2026[^dbt-gh]; the dbt-fusion repo was archived in favor of the main repo.

# Related
- [dbt Core](/projects/data-engineering/dbt-core.md), [dbt Fusion ELv2](/events/2025-05-dbt-fusion-elv2-license.md), [dbt Labs–Fivetran merger](/events/2025-10-dbt-labs-fivetran-merger.md)

[^dbt-core-v2]: dbt docs blog.
[^merger-close]: dbt Labs blog.
[^dbt-gh]: dbt GitHub releases.
