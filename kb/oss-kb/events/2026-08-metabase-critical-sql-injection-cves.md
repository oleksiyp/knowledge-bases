---
type: Event
title: Metabase critical vulnerabilities (SQL injection to admin, H2 file access)
description: Between 2026-07-12 and 2026-08-11 Metabase disclosed several critical advisories, including unauthenticated SQL injection leading to admin access (CVE-2026-72898).
event_kind: security-incident
date: 2026-08-06
window: W3
impact: negative
projects: [projects/data-engineering/metabase]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mb-adv
    resource: https://github.com/metabase/metabase/security/advisories
    title: Metabase GitHub security advisories
  - id: mb-blog
    resource: https://www.metabase.com/blog
    title: "Metabase blog: Security update available – please upgrade now (2026-08-06); August 2026 Security Vulnerability: What happened? (2026-08-27)"
---

# What happened
Metabase published: a critical arbitrary file read/write via unsafe H2 built-in functions (2026-07-12); critical CVE-2026-72898 (SQL injection via an unauthenticated endpoint → admin access) and CVE-2026-72899 (SQL injection via publicly shared dashboards → admin access) plus medium CVE-2026-72900 (data leak to low-privilege users) on 2026-08-06; and a further critical multi-issue advisory on 2026-08-11[^mb-adv]. It urged immediate upgrades and later posted a "what happened" explainer[^mb-blog].

# Why it matters
Metabase is widely self-hosted and often internet-exposed; pre-auth admin takeover of a BI tool exposes connected warehouses.

# Outcome so far
Patched releases shipped on multiple trains; exploitation-in-the-wild status unverified.

# Related
- [Metabase](/projects/data-engineering/metabase.md), [Apache Superset](/projects/data-engineering/apache-superset.md)

[^mb-adv]: GitHub security advisories.
[^mb-blog]: Metabase blog.
