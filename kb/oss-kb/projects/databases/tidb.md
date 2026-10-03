---
type: OSS Project
title: TiDB
description: "Apache-2.0 MySQL-compatible distributed SQL database from PingCAP. Steady OSS releases, a 'TiDB X' and agent-oriented cloud push (TiDB Cloud Zero, Kimi as a customer), and no announced funding since its $270M Series D (Nov 2020)."
resource: https://github.com/pingcap/tidb
tags: [distributed-sql, mysql-compatible, apache-2.0, ai-agents]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0 (2015-)"]
governance: company-led-open-core
steward: PingCAP
backing_orgs: []
metrics:
  github_stars: { value: 40619, as_of: 2026-10-03 }
  latest_release: { value: "v8.5.8", as_of: 2026-08-27 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tidb-gh
    resource: https://github.com/pingcap/tidb
    title: TiDB GitHub repository
  - id: pingcap-stevie
    resource: https://www.pingcap.com/press-release/pingcap-wins-2026-gold-stevie-award-tidb-x/
    title: "PingCAP Wins 2026 Gold Stevie Award for TiDB X"
    author: org:pingcap
  - id: pingcap-pr
    resource: https://www.pingcap.com/press-releases-news/
    title: PingCAP press releases archive (TiDB Cloud Zero, Kimi)
    author: org:pingcap
  - id: yahoo-tidbx
    resource: https://finance.yahoo.com/news/pingcap-launches-tidb-x-ai-183000280.html
    title: "PingCAP Launches TiDB X and New AI Capabilities at SCaiLE Summit 2025 (2025-10-08)"
    author: org:pingcap
  - id: tracxn-pingcap
    resource: https://tracxn.com/d/companies/pingcap/__fYybWiFfmjNK0hJZgdlj0JiGtGvK9rFRupmMP7aYTis
    title: "Tracxn: PingCAP company profile (aggregator)"
  - id: pingcap-d
    resource: https://www.pingcap.com/press-release/pingcap-the-company-behind-tidb-raises-270-million-in-series-d-funding/
    title: "PingCAP, the Company Behind TiDB, Raises $270 Million in Series D Funding (2020-11-17)"
    author: org:pingcap
  - id: reg-oursql
    resource: https://www.theregister.com/databases/2026/05/26/mysql-faithful-launch-oursql-foundation-to-keep-oracle-honest/5246451
    title: "The Register: OurSQL Foundation launched"
    author: org:the-register
---

# Summary
TiDB (40.6k stars) stays Apache-2.0 with regular LTS patch releases (v8.5.8 Aug 2026, v7.5.8 Sept 2026)[^tidb-gh]. PingCAP's recent product push is "TiDB X", a compute/storage-separated architecture on object storage launched with an AI SDK and MCP server on Oct 8 2025[^yahoo-tidbx], which won a 2026 Gold Stevie Award in April 2026[^pingcap-stevie]. It also targets agents: TiDB Cloud Zero launched in Mar 2026, and Kimi.ai picked TiDB for agent data infrastructure in Aug 2026[^pingcap-pr]. PingCAP co-founded the OurSQL Foundation[^reg-oursql], which means TiDB gains if MySQL users leave Oracle. No new funding has been announced since the $270M Series D of Nov 17 2020[^pingcap-d]; aggregators list a further 2021 tranche and ~$640M total, which PingCAP has not announced (aggregator only)[^tracxn-pingcap]. (Corrected in pass 2: "since 2021" → last announced round Nov 2020.)

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-08 | TiDB X (object-storage architecture) plus TiDB AI SDK and MCP Server launched at SCaiLE Summit [^yahoo-tidbx] | OSS/Business | + |
| W9 | 2026-03-24 | TiDB Cloud Zero launched [^pingcap-pr] | Business | + |
| W6 | 2026-04-23 | TiDB X wins Gold Stevie [^pingcap-stevie] | Business | + |
| W6 | 2026-05-26 | PingCAP co-founds OurSQL Foundation [^reg-oursql] | Governance | + |
| W3 | 2026-08-25 | Kimi.ai selects TiDB for agent infrastructure [^pingcap-pr] | Business | + |
| W3 | 2026-08/09 | v8.5.8, v7.5.8 LTS patches [^tidb-gh] | OSS | + |

# OSS successes
- Stayed permissively licensed while CockroachDB went proprietary. That is a differentiator in distributed SQL[^tidb-gh].

# OSS failures / risks
- Development is concentrated in one company.

# Business successes
- Agentic positioning and logos among Chinese and global AI companies[^pingcap-pr].

# Business failures / risks
- No announced funding since Nov 2020. Revenue is not public[^pingcap-d].

# By window
## W3
- Kimi deal. Patch releases[^pingcap-pr][^tidb-gh].
## W6
- Award. OurSQL[^pingcap-stevie][^reg-oursql].
## W9
- Cloud Zero[^pingcap-pr].
## W12
- TiDB X launch (Oct 8 2025)[^yahoo-tidbx].
## W24
- No notable events found in this research.

# Lessons
- MySQL compatibility plus an open license puts TiDB in a position to absorb MySQL's governance crisis.

# Related
- [MySQL](/projects/databases/mysql.md), [CockroachDB](/projects/databases/cockroachdb.md), [YugabyteDB](/projects/databases/yugabytedb.md)

[^tidb-gh]: GitHub API, pingcap/tidb, 2026-10-03.
[^pingcap-stevie]: PingCAP press release, 2026-04-23.
[^pingcap-pr]: PingCAP press archive.
[^pingcap-d]: PingCAP press release, 2020-11-17.
[^yahoo-tidbx]: PingCAP press release via Yahoo Finance, 2025-10-08.
[^tracxn-pingcap]: Tracxn aggregator profile (unconfirmed by company).
[^reg-oursql]: The Register, 2026-05-26.
