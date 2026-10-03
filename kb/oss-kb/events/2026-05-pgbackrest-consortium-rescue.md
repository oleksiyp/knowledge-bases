---
type: Event
title: Vendor consortium rescues pgBackRest after Crunchy Data sale
description: "pgBackRest's maintainer of 13 years lost his sponsored role after Snowflake bought Crunchy Data. AWS, Percona, Supabase, pgEdge and Tiger Data pledged joint funding on May 20 2026."
event_kind: governance
date: 2026-05-20
window: W6
impact: mixed
projects: [projects/databases/postgresql]
organizations: [organizations/supabase, organizations/tiger-data]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: reg-pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: PostgreSQL backup tool gets some backup of its own after sole maintainer sounds alarm"
---

# What happened
David Steele, pgBackRest's maintainer for 13 years and formerly Principal Architect at Crunchy Data, said in Apr 2026: "Since Crunchy Data was sold, I have been maintaining pgBackRest and looking for a position that would allow me to continue the work, but so far I have not been successful." On May 20 2026 AWS, Percona, Supabase, pgEdge and Tiger Data announced coordinated funding. They plan to hire an additional maintainer and recruit more sponsors[^reg-pgbackrest].

# Why it matters
pgBackRest is a critical Postgres backup tool. The episode shows a hidden cost of open-source company M&A: the acquirer (Snowflake) wanted the product, not the upstream maintenance its staff were doing.

# Outcome so far
Funding has been pledged. Success depends on actually broadening the maintainer base[^reg-pgbackrest].

# Related
- [/events/2025-06-snowflake-acquires-crunchy-data.md](/events/2025-06-snowflake-acquires-crunchy-data.md), [/projects/databases/postgresql.md](/projects/databases/postgresql.md)

[^reg-pgbackrest]: The Register, 2026-05-20.
