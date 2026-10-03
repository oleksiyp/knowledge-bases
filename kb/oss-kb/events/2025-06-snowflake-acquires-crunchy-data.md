---
type: Event
title: "Snowflake acquires Crunchy Data (~$250M)"
description: "Snowflake agreed on 2025-06-02 to buy open source Postgres company Crunchy Data for about $250M (closed 2025-06-06), weeks after Databricks bought Neon."
event_kind: acquisition
date: 2025-06-02
window: W24
impact: positive
projects: [projects/databases/postgresql]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cnbc-crunchy
    resource: "https://www.cnbc.com/2025/06/02/snowflake-to-buy-crunchy-data-250-million.html"
    title: "CNBC: Snowflake to buy Crunchy Data for about $250 million (2025-06-02)"
  - id: sa-crunchy
    resource: "https://siliconangle.com/2025/06/02/snowflake-buys-crunchy-data-add-bite-ai-agents/"
    title: "SiliconANGLE: Snowflake buys Crunchy Data (2025-06-02)"
  - id: db-reg-pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: pgBackRest gets backing after sole maintainer sounds alarm (2026-05-20)"
---
# What happened
Snowflake announced the acquisition of Crunchy Data, a long-standing enterprise Postgres vendor (~100 employees), for about $250M; its technology became the basis of Snowflake Postgres[^cnbc-crunchy][^sa-crunchy].

# Why it matters
Confirms that both data-platform giants saw Postgres as essential to agentic AI applications; Crunchy's open source Postgres operator and extensions moved under Snowflake.

# Outcome so far
Snowflake Postgres launched on Crunchy technology[^sa-crunchy].

# Related
- [/events/2025-05-databricks-acquires-neon.md](/events/2025-05-databricks-acquires-neon.md), [COSS M&A](/projects/coss-market/coss-ma-2024-2026.md)

[^cnbc-crunchy]: CNBC: Snowflake to buy Crunchy Data for about $250 million (2025-06-02).
[^sa-crunchy]: SiliconANGLE: Snowflake buys Crunchy Data (2025-06-02).

## Additional notes (databases)
- **OSS collateral damage:** Crunchy Data employed pgBackRest's long-time maintainer, David Steele. After the sale he could not find a sponsored role and said in Apr 2026 that he could no longer maintain it. AWS, Percona, Supabase, pgEdge and Tiger Data stepped in with funding on 2026-05-20[^db-reg-pgbackrest]. See [/events/2026-05-pgbackrest-consortium-rescue.md](/events/2026-05-pgbackrest-consortium-rescue.md).
- Related: [/projects/databases/postgresql.md](/projects/databases/postgresql.md).

[^db-reg-pgbackrest]: The Register, 2026-05-20.
