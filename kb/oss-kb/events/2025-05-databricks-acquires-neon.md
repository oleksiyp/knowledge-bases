---
type: Event
title: "Databricks acquires Neon for ~$1B"
description: "In May 2025 Databricks agreed to buy serverless-Postgres startup Neon for about $1B to serve AI-agent workloads, opening a Postgres land-grab among data platforms."
event_kind: acquisition
date: 2025-05-14
window: W24
impact: positive
projects: [projects/databases/neon, projects/databases/postgresql]
organizations: [organizations/databricks]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: yf-neon
    resource: "https://finance.yahoo.com/news/databricks-buy-startup-neon-1-094745186.html"
    title: "Reuters via Yahoo Finance: Databricks to buy Neon for $1 billion (May 2025)"
  - id: ts-neon
    resource: "https://techstartups.com/2025/05/14/databricks-acquires-serverless-database-startup-neon-for-1b-to-boost-ai-agent-development/"
    title: "Tech Startups: Databricks acquires Neon for $1B (2025-05-14)"
  - id: db-neon-gh
    resource: https://github.com/neondatabase/neon
    title: "Neon GitHub repository — commit history via GitHub API (queried 2026-10-03)"
  - id: db-infoq-lakebase
    resource: https://www.infoq.com/news/2026/02/databricks-lakebase-postgresql/
    title: "InfoQ: Databricks Introduces Lakebase (Feb 2026)"
  - id: db-neon-blog
    resource: https://neon.com/blog
    title: "Neon blog index (pricing changes 2025-08-14 / 2025-11-03; Electric joins 2026-08-11; backend GA 2026-09-17)"
---
# What happened
Databricks announced it would acquire Neon, a 2021-founded open source serverless Postgres company integrated with Vercel, Replit, Cloudflare and GitHub, in a deal valued at about $1B[^yf-neon][^ts-neon]. CEO Ali Ghodsi framed it as giving developers "a serverless Postgres that can keep up with agentic speed"[^yf-neon].

# Why it matters
Kick-started the 2025–26 Postgres consolidation: Snowflake bought Crunchy Data weeks later, and Supabase bought Turso in Oct 2026. Postgres became the transactional database of choice for AI-agent-generated apps.

# Outcome so far
Neon continues as Databricks' serverless Postgres offering; detailed post-deal metrics not verified in this research.

# Related
- [Databricks](/organizations/databricks.md), [/events/2025-06-snowflake-acquires-crunchy-data.md](/events/2025-06-snowflake-acquires-crunchy-data.md), [COSS M&A](/projects/coss-market/coss-ma-2024-2026.md)

[^yf-neon]: Reuters via Yahoo Finance: Databricks to buy Neon for $1 billion (May 2025).
[^ts-neon]: Tech Startups: Databricks acquires Neon for $1B (2025-05-14).

## Additional notes (databases)
- **Outcome for the OSS project:** The Apache-2.0 `neondatabase/neon` repo went from 100+ commits in July 2025 to a single commit in Aug 2025. It has had only 11 commits since Sept 1 2025 and no tagged releases since July 2025[^db-neon-gh]. The code was not relicensed, but public development has effectively stopped.
- **Outcome for the product:** Lakebase went GA on AWS in Feb 2026 and on Azure on 2026-03-03[^db-infoq-lakebase]. Neon continued as a brand with lower prices, the Electric acquisition (Aug 2026) and "Neon backend" GA (Sept 2026)[^db-neon-blog].
- See [/projects/databases/neon.md](/projects/databases/neon.md) and [/organizations/neon.md](/organizations/neon.md).

[^db-neon-gh]: GitHub API, 2026-10-03.
[^db-infoq-lakebase]: InfoQ, Feb 2026.
[^db-neon-blog]: Neon blog.
