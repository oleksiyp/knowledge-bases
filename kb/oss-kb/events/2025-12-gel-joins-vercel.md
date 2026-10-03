---
type: Event
title: Gel (formerly EdgeDB) team joins Vercel; Gel Cloud shut down
description: "On Dec 2 2025 Gel Data's team joined Vercel to build its Python cloud. Gel Cloud closed to new signups and shut down on Jan 31 2026, and the Apache-2.0 repo has had no commits since Dec 24 2025."
event_kind: acquisition
date: 2025-12-02
window: W12
impact: negative
projects: [projects/databases/gel]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gel-vercel
    resource: https://www.geldata.com/blog/gel-joins-vercel
    title: "Gel joins Vercel"
  - id: gel-rename
    resource: https://www.geldata.com/blog/edgedb-is-now-gel-and-postgres-is-the-future
    title: "EdgeDB is now Gel and Postgres is the Future (2025-02-25)"
  - id: gel-gh
    resource: https://github.com/geldata/gel
    title: Gel GitHub repository
---

# What happened
Founder Yury Selivanov announced that the Gel Data team was joining Vercel "to help build the best Python cloud in the world". Gel Cloud stopped taking new registrations immediately and was shut down on Jan 31 2026. Users were advised to move to managed Postgres or self-host[^gel-vercel]. This came ten months after the company renamed itself from EdgeDB to Gel[^gel-rename].

# Why it matters
It is a typical acqui-hire ending for a VC-backed open-source database. The project is "still open source", but the repo's last push was Dec 24 2025[^gel-gh].

# Outcome so far
The project is dormant, and the hosted service is gone[^gel-gh][^gel-vercel].

# Related
- [/projects/databases/gel.md](/projects/databases/gel.md)

[^gel-vercel]: Gel blog, 2025-12-02.
[^gel-rename]: Gel blog, 2025-02-25.
[^gel-gh]: GitHub API, 2026-10-03.
