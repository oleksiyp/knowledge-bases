---
type: System
title: Firebase (Realtime Database, Firestore, SQL Connect)
description: "Google's backend-as-a-service, the template for reactive app backends. Its NoSQL databases (Realtime Database, Firestore) defined the category. Between 2024 and 2026 Google added a Postgres-based offering, Data Connect (GA Apr 2025), renamed SQL Connect with realtime queries in 2026, conceding that SQL won."
resource: https://firebase.google.com
tags: [baas, realtime, nosql, postgres, google]
kind: cloud-service
first_release: 2012
org: "Google (acquired 2014)"
outcome: pivoted
ideas: [ideas/edge-devx/reactive-backend-databases, ideas/edge-devx/sync-engines]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: dc-preview
    resource: https://firebase.blog/posts/2024/10/data-connect-public-preview/
    title: "Firebase Data Connect: now in public preview (Oct 2024)"
    author: org:google
  - id: dc-ga
    resource: https://firebase.blog/posts/2025/04/dataconnect-general-availability/
    title: "Firebase: Data Connect is now generally available (Apr 2025)"
    author: org:google
  - id: sqlconnect
    resource: https://firebase.blog/posts/2026/04/whats-new-sql-connect/
    title: "Firebase: Realtime PostgreSQL, from Data Connect to SQL Connect (2026-04-29)"
    author: org:google
---

# Summary
Firebase's Realtime Database (2012) and Cloud Firestore (2017–19) made "subscribe to data, get pushed updates, secure it with rules" the default way to build mobile and web apps without a backend. The 2020s "Firebase alternative" wave (Supabase, Appwrite, Convex, InstantDB) targeted its weaknesses: NoSQL modelling, weak querying, and vendor lock-in. Google's answer was Postgres. Firebase Data Connect, a GraphQL-defined schema over Cloud SQL for PostgreSQL with generated type-safe SDKs, entered public preview in October 2024 and reached GA at Cloud Next in April 2025[^dc-preview][^dc-ga]. In April 2026 it was renamed SQL Connect and gained realtime query subscriptions, offline caching, native SQL and a price cut to $0.90 per million operations[^sqlconnect]. Firestore remains widely used, but Google's new investment points to relational, SQL-backed backends.

# Timeline
| Year | Event |
|---|---|
| 2019 | Firestore GA |
| 2024 | Data Connect public preview (Oct)[^dc-preview] |
| 2025 | Data Connect GA on Cloud SQL Postgres (Apr)[^dc-ga] |
| 2026 | Renamed SQL Connect. Realtime subscriptions and native SQL (Apr)[^sqlconnect] |

# What worked
- It defined the reactive BaaS experience and keeps a huge installed base on mobile.

# What didn't
- The NoSQL data model became a competitive weakness against Postgres-based rivals, so Google built a Postgres product.

# Related
[Reactive backends](/ideas/edge-devx/reactive-backend-databases.md) · [Supabase](/systems/supabase.md) · [Convex](/systems/convex.md) · [InstantDB](/systems/instantdb.md)
