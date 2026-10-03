---
type: System
title: Xata
description: "Started (2020–22) as a spreadsheet-like serverless data platform on Postgres plus Elasticsearch, then rebuilt in 2024–25 as a vanilla-Postgres platform with copy-on-write branching and scale-to-zero aimed at AI agents. Open-sourced under Apache-2.0 in 2026."
resource: https://xata.io
tags: [postgres, branching, copy-on-write, serverless, ai-agents, pivot]
kind: product
first_release: 2022
org: "Xata (founded 2020 by Monica Sarbu)"
license: Apache-2.0
outcome: pivoted
ideas: [ideas/cloud-architecture/database-branching, ideas/cloud-architecture/serverless-databases, ideas/cloud-architecture/database-per-tenant]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: tc-2021
    resource: https://techcrunch.com/2021/09/19/xata-is-a-database-service-for-serverless-apps/
    title: "TechCrunch: Xata is a database service for serverless apps (2021-09-19)"
  - id: tc-2022
    resource: https://techcrunch.com/2022/11/02/xata-gives-jamstack-developers-access-to-a-serverless-data-platform-with-an-api-call/
    title: "TechCrunch: Xata gives Jamstack developers access to a serverless data platform (2022-11-02)"
  - id: xata-a
    resource: https://xata.io/blog/xata-series-a-announcement
    title: "Xata: Xata launches a serverless database with the usability of a spreadsheet (Series A)"
    author: org:xata
  - id: xata-oss
    resource: https://xata.io/blog/xata-is-now-open-source
    title: "Xata: Postgres for agent scale, open source"
    author: org:xata
  - id: xata-cow
    resource: https://xata.io/blog/open-source-postgres-branching-copy-on-write
    title: "Xata: open source Postgres platform with CoW branching"
    author: org:xata
---

# Summary
Monica Sarbu founded Xata in 2020. Its first product, covered by TechCrunch in 2021–22 and backed by a $30M Series A, was a "serverless database with the usability of a spreadsheet". Postgres, Kafka and Elasticsearch sat behind a proprietary API aimed at Jamstack developers[^tc-2021][^tc-2022][^xata-a]. That abstraction layer did not hold. In 2024–25 Xata deprecated it and rebuilt as **100% vanilla PostgreSQL** with copy-on-write branching at the block-storage layer, using NVMe-over-Fabrics rather than a Postgres fork. It added scale-to-zero and PII masking, and pitched it for AI agents that "need a database they can break". A private beta opened in May 2025[^xata-oss][^xata-cow]. In 2026 it open-sourced the platform under Apache-2.0[^xata-oss].

# Timeline
| Date | Event |
|---|---|
| 2020 | Founded |
| 2021-09 | Launch coverage, serverless data platform[^tc-2021] |
| 2022-11 | GA for Jamstack developers[^tc-2022] |
| 2025-05 | Rebuilt platform private beta[^xata-oss] |
| 2026 | Open-sourced (Apache-2.0)[^xata-oss] |

# What worked
- The pivot followed the market: plain Postgres plus branching for agents and preview environments[^xata-cow].

# What didn't
- The original "database as a spreadsheet API" abstraction. Developers wanted real Postgres, not a proprietary API on top of it.

# Related
[Database branching](/ideas/cloud-architecture/database-branching.md) · [Neon](/systems/neon.md) · [Supabase](/systems/supabase.md)
