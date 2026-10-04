---
type: Event
title: "Supabase acquires OrioleDB"
description: "On 2024-04-15 Supabase acquired the company behind OrioleDB, an undo-log storage engine for Postgres. It was the best-funded attempt yet to replace the heap. By Oct 2026 it was still in public beta."
date: 2024-04-15
year: 2024
kind: acquisition
signal: mixed
ideas: [ideas/postgres-ecosystem/pluggable-storage-engines, ideas/postgres-ecosystem/postgres-backend-as-a-service]
systems: [systems/orioledb, systems/supabase]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: oriole-joins
    resource: https://supabase.com/blog/supabase-acquires-oriole
    title: "Supabase: Oriole joins Supabase (2024-04-15)"
    author: org:supabase
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: sb-select-2026
    resource: https://supabase.com/blog/select-2026-scale-without-limits
    title: "Supabase: Scale without limits: Multigres, OrioleDB, and dbarena (2026-10-02)"
    author: org:supabase
---

# What happened
Supabase announced that the Oriole team was joining it, with three goals: build a faster storage engine for Postgres, help develop pluggable storage upstream, and work toward decoupled storage and compute. It said upstreaming "could be a few major Postgres versions away"[^oriole-joins]. Pavlo called it a sensible move because Postgres "has an outdated storage architecture. OrioleDB fixes that problem"[^pavlo-2024].

# Why it matters
It moved Postgres storage-engine R&D from a small startup to a platform company with a product reason to finish it. It also showed how slow the work is: two and a half years later OrioleDB was a per-table public beta claiming up to 1.8x heap throughput, not yet production-ready[^sb-select-2026].

# Related
- [OrioleDB](/systems/orioledb.md), [Supabase](/systems/supabase.md), [Pluggable storage engines](/ideas/postgres-ecosystem/pluggable-storage-engines.md)
