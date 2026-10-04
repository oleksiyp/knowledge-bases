---
type: System
title: Supabase
description: "Open-source Postgres backend platform (auth, auto-generated APIs, realtime, storage, functions). Founded 2020 as a Firebase alternative, it became the default backend of AI app builders and was valued at $10.5B in June 2026. It owns OrioleDB and Multigres and agreed to buy Turso in Oct 2026."
resource: https://supabase.com
tags: [postgres, baas, firebase-alternative, ai-agents, apache-2.0]
kind: product
first_release: 2020
org: "Supabase Inc."
license: Apache-2.0
outcome: thriving
ideas: [ideas/postgres-ecosystem/postgres-backend-as-a-service, ideas/postgres-ecosystem/postgres-hosting-consolidation, ideas/postgres-ecosystem/pluggable-storage-engines, ideas/postgres-ecosystem/just-use-postgres]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tc-sb-a
    resource: https://techcrunch.com/2021/09/09/supabase-raises-30m-for-its-open-source-insta-backend/
    title: "TechCrunch: Supabase raises $30M (2021-09-09)"
    author: org:techcrunch
  - id: oriole-joins
    resource: https://supabase.com/blog/supabase-acquires-oriole
    title: "Supabase: Oriole joins Supabase (2024-04-15)"
    author: org:supabase
  - id: fortune-sb-d
    resource: https://www.fortune.com/2025/04/22/exclusive-supabase-raises-200-million-series-d-at-2-billion-valuation
    title: "Fortune: Supabase raises $200M Series D at $2B (2025-04-22)"
    author: org:fortune
  - id: sb-series-e
    resource: https://supabase.com/blog/supabase-series-e
    title: "Supabase: Series E (2025-10-03)"
    author: org:supabase
  - id: sb-series-f
    resource: https://supabase.com/blog/supabase-series-f
    title: "Supabase: Series F (2026-06-04)"
    author: org:supabase
  - id: tipranks-150
    resource: https://www.tipranks.com/news/private-companies/supabase-raises-150-million-and-acquires-turso-to-scale-agentic-database-infrastructure
    title: "TipRanks: Supabase raises $150M and acquires Turso (2026-10-02)"
  - id: turso-joins
    resource: https://turso.tech/blog/turso-is-joining-supabase
    title: "Turso: Turso is joining Supabase (2026-10-02)"
    author: org:turso
  - id: sb-select-2026
    resource: https://supabase.com/blog/select-2026-scale-without-limits
    title: "Supabase: Scale without limits: Multigres, OrioleDB, and dbarena (2026-10-02)"
    author: org:supabase
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary
Supabase is the breakout commercial Postgres company of the period. It went through Y Combinator in Summer 2020 and raised a $30M Series A in Sept 2021, when it had 50,000 databases[^tc-sb-a]. Valuations then rose quickly: $2B (Series D, Apr 2025)[^fortune-sb-d], $5B (Series E, Oct 2025)[^sb-series-e], and $10.5B post-money ($500M Series F led by GIC, June 2026)[^sb-series-f]. Its growth engine is AI app builders and coding agents. AI tools launch more than 60% of new databases[^sb-series-f], and by Oct 2026 the company cited about 70% of new databases created by agents[^tipranks-150]. It uses its capital on deep Postgres work: it bought OrioleDB (Apr 2024)[^oriole-joins], hired Vitess co-creator Sugu Sougoumarane to build Multigres sharding (announced June 2025)[^pavlo-2025], and on Oct 2 2026 agreed to acquire Turso, the SQLite/libSQL company[^turso-joins].

# Timeline
| Date | Event |
|---|---|
| 2020 | Founded; YC S20[^tc-sb-a] |
| 2021-09 | $30M Series A (Coatue)[^tc-sb-a] |
| 2024-04-15 | Acquires OrioleDB[^oriole-joins] |
| 2025-04 | $200M Series D at $2B[^fortune-sb-d] |
| 2025-06 | Multigres announced[^pavlo-2025] |
| 2025-10 | $100M Series E at $5B[^sb-series-e] |
| 2026-06-04 | $500M Series F at $10.5B[^sb-series-f] |
| 2026-10-02 | $150M more. Agrees to acquire Turso. OrioleDB public beta, Multigres private alpha[^tipranks-150][^sb-select-2026] |

# What worked
- Kept Postgres visible (SQL, RLS, extensions), reducing the need to migrate solely to gain direct database access.
- Apache-2.0 and self-hostable, which built trust with developers burned by Firebase or Parse lock-in.
- Gained distribution through AI coding tools; its announcement reports a majority of new databases launched by AI tools.[^sb-series-f]

# What didn't
- Its deep-tech bets are slow. OrioleDB is still a public beta 2.5 years after the acquisition, and Multigres is an invite-only alpha "not for production workloads"[^sb-select-2026].
- Revenue relative to valuation is not public. Agent-created databases are numerous but often small (unconfirmed economics).
- Running both Postgres and SQLite (Turso) lines risks diluting focus.

# Related
- [Postgres as a backend platform](/ideas/postgres-ecosystem/postgres-backend-as-a-service.md), [Postgres hosting consolidation](/ideas/postgres-ecosystem/postgres-hosting-consolidation.md)
- [OrioleDB](/systems/orioledb.md), [Turso](/systems/turso.md), [Neon](/systems/neon.md), [Hasura](/systems/hasura.md), [Firebase](/systems/firebase.md)
- [Supabase acquires OrioleDB](/events/2024-04-supabase-acquires-orioledb.md), [Supabase Series F](/events/2026-06-supabase-series-f.md)
