---
type: Event
title: CockroachDB retires free Core edition
description: "With v24.3 (effective Nov 18, 2024) Cockroach Labs ended its free self-hosted Core edition; all self-hosted users now need an Enterprise license, free only under $10M annual revenue."
event_kind: license-change
date: 2024-11-18
window: W24
impact: negative
projects: [projects/licensing-forks/cockroachdb]
organizations: [organizations/cockroach-labs]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: crdb-license
    resource: https://www.cockroachlabs.com/blog/enterprise-license-announcement/
    title: "Cockroach Labs: Enterprise license announcement (2024-08-15)"
---

# What happened
Announced Aug 15, 2024 and effective Nov 18, 2024 with v24.3 (also applied to patch releases of 23.1 and later), the Core edition was retired. Everyone now runs the Enterprise build. It is free for individuals, students, academics and businesses under $10M in annual revenue, and there is a 30-day trial for others.[^crdb-license]

# Why it matters
It is the furthest any major database vendor moved away from open source in this period. It also set the "free under a revenue threshold" pattern.

# Outcome so far
No notable fork, since the project had already been under BSL since 2019. The company has moved its focus to AI-branded cloud products.

# Related
- [CockroachDB](/projects/licensing-forks/cockroachdb.md), [Cockroach Labs](/organizations/cockroach-labs.md)

[^crdb-license]: Cockroach Labs blog — https://www.cockroachlabs.com/blog/enterprise-license-announcement/
