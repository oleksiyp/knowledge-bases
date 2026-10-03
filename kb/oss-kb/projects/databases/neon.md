---
type: OSS Project
title: Neon
description: "Serverless Postgres with separated storage and compute, acquired by Databricks for about $1B (May 2025) and rebuilt as Lakebase. A big business exit, but the public Apache-2.0 repo has been nearly silent since Aug 2025."
resource: https://github.com/neondatabase/neon
tags: [postgres, serverless, apache-2.0, acquired, ai-agents, databricks]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0 (2021-)"]
governance: single-vendor
steward: Databricks (since 2025)
backing_orgs: [organizations/neon]
metrics:
  github_stars: { value: 23165, as_of: 2026-10-03 }
  public_repo_commits_jul_2025: { value: ">=100", as_of: 2025-07-31 }
  public_repo_commits_since_2025_09_01: { value: 11, as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: acquired
momentum_by_window: { W3: up, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dbx-pr-neon
    resource: https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-neon-help-developers-deliver-ai-systems
    title: "Databricks press release: Databricks Agrees to Acquire Neon (2025-05-14)"
    author: org:databricks
  - id: neon-gh
    resource: https://github.com/neondatabase/neon
    title: Neon GitHub repository (commit history via GitHub API)
  - id: yahoo-neon
    resource: https://finance.yahoo.com/news/databricks-buy-startup-neon-1-094745186.html
    title: "Reuters/Yahoo: Databricks to buy Neon for $1 billion"
  - id: siliconangle-lakebase
    resource: https://siliconangle.com/2025/06/11/following-neon-acquisition-databricks-launches-serverless-lakebase-database/
    title: "SiliconANGLE: Following Neon acquisition, Databricks launches serverless Lakebase database"
  - id: infoq-lakebase
    resource: https://www.infoq.com/news/2026/02/databricks-lakebase-postgresql/
    title: "InfoQ: Databricks Introduces Lakebase, a PostgreSQL Database for AI Workloads"
  - id: neon-lakebase-doc
    resource: https://neon.com/docs/introduction/neon-and-lakebase
    title: Neon and Lakebase — Neon Docs
  - id: neon-blog
    resource: https://neon.com/blog
    title: Neon blog (pricing changes, Electric acquisition, backend GA)
  - id: reg-ltap
    resource: https://www.theregister.com/databases/2026/07/03/databricks-unifies-oltp-and-olap-depending-on-what-counts-as-a-copy/5265733
    title: "The Register: Databricks unifies OLTP and OLAP, depending on what counts as a copy"
    author: org:the-register
---

# Summary
Neon is the biggest exit in the open-source Postgres world of this period. Databricks agreed to buy it for about $1B on May 14 2025[^yahoo-neon]. The deal rationale was agents: more than 80% of Neon databases were being created by AI agents, not people, per Databricks' internal telemetry[^dbx-pr-neon]. Databricks rebuilt Neon's technology as Lakebase, launched in June 2025, GA on AWS in Feb 2026 and on Azure on Mar 3 2026[^siliconangle-lakebase][^infoq-lakebase]. Neon itself kept running as a brand. It cut prices[^neon-blog], bought Electric (Aug 2026), and made its "Neon backend" GA in Sept 2026[^neon-blog]. The open-source story is the opposite. The public `neondatabase/neon` repo went from 100+ commits in July 2025 to one in August 2025, and only 11 commits since Sept 1 2025. There have been no tagged releases since July 2025[^neon-gh]. In practice the code is still Apache-2.0 but frozen.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-14 | Databricks agrees to acquire Neon (~$1B per Reuters; price not in the press release) [^dbx-pr-neon][^yahoo-neon] | Business | + |
| W24 | 2025-06-11 | Databricks launches Lakebase on Neon tech [^siliconangle-lakebase] | Business | + |
| W24 | 2025-07-31 | Last burst of public commits. Last tagged releases 2025-07-28/29 [^neon-gh] | OSS | − |
| W24 | 2025-08-14 | New usage-based pricing, no minimums [^neon-blog] | Business | + |
| W12 | 2025-11-03 | Major compute price reduction [^neon-blog] | Business | + |
| W9 | 2026-02 / 03-03 | Lakebase GA on AWS, then Azure [^infoq-lakebase] | Business | + |
| W3 | 2026-07-03 | Databricks "LTAP" (Lakebase OLTP+OLAP) claims questioned [^reg-ltap] | Business | +/− |
| W3 | 2026-08-11 | Electric (sync engine) joins team Neon at Databricks [^neon-blog] | Business | + |
| W3 | 2026-09-17 | Neon backend GA (Postgres + Auth, Data API, storage, functions) [^neon-blog] | Business | + |
| W3 | 2026-10-02 | Free plan expanded to 100 projects [^neon-blog] | Business | + |

# OSS successes
- Neon's separated-storage design (pageserver plus safekeepers) and copy-on-write branching shaped the whole "agent database" category. Xata, Supabase and others now market branching.
- The code stays Apache-2.0 and readable. It was not relicensed[^neon-gh].

# OSS failures / risks
- Public development effectively stopped after the acquisition. Contributions fell from 100+ commits a month to single digits, with no releases since July 2025[^neon-gh]. Whether work moved to private Databricks repos is not confirmed.
- The core storage engine now evolves inside Databricks (Lakebase stores pages plus Parquet copies)[^reg-ltap]. Anyone self-hosting Neon OSS is stuck on a 2025 snapshot.

# Business successes
- A roughly 4-year-old company (founded 2021) sold for about $1B[^yahoo-neon].
- It is now the transactional piece of Databricks' platform. Lakebase reached GA on two clouds within about 9 months of the deal[^infoq-lakebase].

# Business failures / risks
- Lakebase's "zero copies" marketing was publicly disputed by engineers[^reg-ltap].
- The brand is split between Neon and Lakebase. The developer-first Neon brand risks being subordinated to enterprise priorities.

# By window
## W3
- Electric acquisition, Neon backend GA, free-plan expansion, Lakebase search[^neon-blog].
## W6
- No notable events found. Public repo got one commit in May 2026[^neon-gh].
## W9
- Lakebase GA on AWS and Azure[^infoq-lakebase].
## W12
- Compute price cut[^neon-blog].
## W24
- Acquired by Databricks. Lakebase launched. Public development stops[^yahoo-neon][^siliconangle-lakebase][^neon-gh].

# Lessons
- In an acqui-hire-style deal, a permissive license does not keep a project alive. Public development can stop without any license change.
- Agent-driven provisioning (more than 80% of databases created by agents, per Databricks[^dbx-pr-neon]) was the metric that justified a $1B price for a pre-scale company.

# Related
- [/organizations/neon.md](/organizations/neon.md), [/events/2025-05-databricks-acquires-neon.md](/events/2025-05-databricks-acquires-neon.md)
- [PostgreSQL](/projects/databases/postgresql.md), [Supabase](/projects/databases/supabase.md), [Xata](/projects/databases/xata.md)

[^neon-gh]: GitHub API, neondatabase/neon commits and releases, queried 2026-10-03.
[^dbx-pr-neon]: Databricks press release, 2025-05-14 ("over 80 percent of the databases provisioned on Neon were created automatically by AI agents").
[^yahoo-neon]: Reuters via Yahoo Finance, 2025-05-14.
[^siliconangle-lakebase]: SiliconANGLE, 2025-06-11.
[^infoq-lakebase]: InfoQ, Feb 2026.
[^neon-lakebase-doc]: Neon docs.
[^neon-blog]: Neon blog index, accessed 2026-10-03.
[^reg-ltap]: The Register, 2026-07-03.
