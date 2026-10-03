---
type: Reference
title: Methodology
description: How this knowledge base was researched and how to read its fields.
tags: [methodology, meta]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: okf-spec
    resource: https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
    title: OKF v0.2 specification
---

# Scope

The bundle covers Horizon Europe Cluster 4 "Open Internet Stack" topics, their NGI predecessors
(2021–2024) and adjacent topics. It also covers the projects those topics funded, the cascade
funding (FSTP) those projects run, the rules that govern applying, and the policy context. The
format is OKF v0.2.[^okf-spec]

# Research

The bundle was researched by four parallel agents on 2026-10-03, working from primary sources:
- EU Funding & Tenders Portal topic pages and topic updates.
- The Cluster 4 Work Programme and General Annexes (versions dated 29 Sep 2026).
- CORDIS project data.
- NLnet and NGI pages.
- Commission documents.

The agents then synthesised the guides. Everything is **unverified** (no human review), so treat
the portal as authoritative.

# Concept types

| Type | Folder | Key fields |
|---|---|---|
| Call Topic | `topics/` | `topic_id`, `action_type`, `total_budget_eur`, `deadline`, `topic_state`, `cascade_funding`, `fstp_max_per_third_party_eur` |
| Funding Call | `calls/` | `date` (deadline), `call_state` |
| Funded Project | `projects/` | `grant_id`, `coordinator`, `eu_contribution_eur`, `start`/`end`, `runs_cascade` |
| Cascade Fund | `cascade/` | `amount_per_grantee_eur`, `fund_state`, `next_deadline` |
| Organization | `organizations/` | `org_kind`, `country`, `projects` |
| Rule / Context / Guide | `rules/`, `context/`, `guides/` | — |

[^okf-spec]: OKF specification.
