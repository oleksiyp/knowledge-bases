---
type: Organization
title: Neon
description: "Serverless Postgres company (founded 2021) acquired by Databricks for about $1B (May 2025). It now runs as a Databricks brand alongside Lakebase and keeps buying (Electric, Aug 2026)."
resource: https://neon.com
tags: [commercial-open-source, postgres, serverless, acquired, databricks]
org_kind: coss-startup
hq: unverified
funding: { total_usd: "$104M through Series B (Aug 2023)", last_round: "acquired by Databricks (~$1B)", last_round_date: 2025-05-14, valuation_usd: "~1B (acquisition price)" }
business_verdict: acquired
projects: [projects/databases/neon]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: prn-neon
    resource: https://databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems
    title: "Databricks press release: Databricks agrees to acquire Neon (2025-05-14)"
    author: org:databricks
  - id: cnbc-neon
    resource: https://www.cnbc.com/2025/05/14/databricks-is-buying-database-startup-neon-for-about-1-billion.html
    title: "CNBC: Databricks is buying database startup Neon for about $1 billion (2025-05-14)"
    author: org:cnbc
  - id: neon-series-b
    resource: https://neon.com/blog/series-b-funding
    title: "Neon blog: We raised another $46M (Series B, 2023-08-01; $104M total)"
    author: org:neon
  - id: yahoo-neon
    resource: https://finance.yahoo.com/news/databricks-buy-startup-neon-1-094745186.html
    title: "Reuters/Yahoo: Databricks to buy Neon for $1 billion"
  - id: neon-blog
    resource: https://neon.com/blog
    title: Neon blog index
  - id: infoq-lakebase
    resource: https://www.infoq.com/news/2026/02/databricks-lakebase-postgresql/
    title: "InfoQ: Databricks Introduces Lakebase"
  - id: neon-gh
    resource: https://github.com/neondatabase/neon
    title: Neon GitHub repository
---

# Summary
Neon built serverless Postgres with separated storage and compute, branching and scale-to-zero. It partnered with Vercel, Replit, Cloudflare, GitHub and Microsoft before Databricks agreed to acquire it for about $1B on May 14 2025; Databricks said over 80% of databases provisioned on Neon were created by AI agents, and Neon had 18,000+ customers[^yahoo-neon][^prn-neon][^cnbc-neon]. Neon had raised $104M, most recently a $46M Series B led by Menlo Ventures (Aug 2023)[^neon-series-b]. Its technology underpins Databricks Lakebase, GA on AWS (Feb 2026) and Azure (Mar 2026)[^infoq-lakebase]. As a Databricks unit, Neon cut prices (Aug and Nov 2025), absorbed the Electric sync-engine team (Aug 2026) and shipped a full "Neon backend" GA (Sept 2026)[^neon-blog]. Its public open-source repo, however, has been largely inactive since Aug 2025[^neon-gh].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-05-14 | Databricks acquisition agreed (~$1B) [^yahoo-neon] | + |
| W24 | 2025-08-14 | Usage-based pricing, no minimums [^neon-blog] | + |
| W12 | 2025-11-03 | Compute price cut [^neon-blog] | + |
| W9 | 2026-02 / 03 | Lakebase GA on AWS and Azure [^infoq-lakebase] | + |
| W3 | 2026-08-11 | Electric joins Neon at Databricks [^neon-blog] | + |
| W3 | 2026-09-17 | Neon backend GA [^neon-blog] | + |

# Monetization model
Usage-based serverless Postgres, now inside Databricks' platform (Lakebase) and sold standalone as Neon.

# Successes
- A $1B exit about four years after founding, justified by agent-driven provisioning[^yahoo-neon].

# Failures / risks
- Public OSS development has nearly stopped[^neon-gh]. The brand may be subordinated to Lakebase.

# Related
- [/projects/databases/neon.md](/projects/databases/neon.md), [/events/2025-05-databricks-acquires-neon.md](/events/2025-05-databricks-acquires-neon.md), [Databricks](/organizations/databricks.md)

[^prn-neon]: Databricks press release, 2025-05-14.
[^cnbc-neon]: CNBC, 2025-05-14.
[^neon-series-b]: Neon blog, 2023-08-01.
[^yahoo-neon]: Reuters via Yahoo Finance, 2025-05-14.
[^neon-blog]: Neon blog.
[^infoq-lakebase]: InfoQ, Feb 2026.
[^neon-gh]: GitHub API, 2026-10-03.
