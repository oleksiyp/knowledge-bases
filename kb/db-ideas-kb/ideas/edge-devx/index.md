# Verdict: won

* [Serverless database connectivity: HTTP drivers and connection poolers](serverless-db-connectivity.md) - Making TCP-and-process-per-connection databases (Postgres, MySQL) usable from thousands of short-lived serverless and edge functions, using HTTP/WebSocket drivers and external poolers (PgBouncer, Supavisor, Hyperdrive, RDS Proxy). Verdict: won. It is unglamorous infrastructure that every serverless Postgres vendor now ships.
* [Type-safe ORMs and query builders (TypeScript era)](type-safe-orms.md) - Schema-first, type-generating database clients (Prisma) and SQL-shaped type-safe query builders (Drizzle, Kysely) as the main way application developers touch databases. Verdict: won. The style flipped from heavy, Rust-engine ORM to thin, SQL-like builder: Drizzle overtook Prisma in npm downloads and Prisma removed its Rust engine in 2025.

# Verdict: winning

* [Reactive backend databases (Backend-as-a-Service 2.0)](reactive-backend-databases.md) - Databases that bundle the backend: reactive queries pushed to clients, server functions, auth and storage (Firebase, Supabase, Convex, InstantDB). Verdict: winning, mainly because AI app builders and coding agents adopted them as the default backend. The Postgres-based variant (Supabase) won the market over proprietary data models.
* [SQLite as a production server database](sqlite-in-production.md) - Running SQLite as the primary database of a web application, made safe by streaming replication to object storage (Litestream) and platform support (D1, Durable Objects, Rails 8). Verdict: winning for single-node and per-tenant apps; the attempts to make it a distributed database (LiteFS, edge replicas) stalled.
* [Sync engines: a database replica in the client](sync-engines.md) - Generic engines that keep a partial, queryable replica of server data inside the client and sync it in real time (Replicache/Zero, ElectricSQL, PowerSync, InstantDB, Convex). Verdict: winning. They became a recognised product category by 2025–26 with 1.0 releases, but none had become a default the way an ORM has.

# Verdict: mixed

* [Forking and rewriting SQLite (libSQL, Turso)](sqlite-forks-and-rewrites.md) - Building a company on an open-contribution fork of SQLite (libSQL, 2022) and then a from-scratch Rust rewrite (Limbo, now Turso, 2024). Verdict: mixed. The fork got real adoption as a client and server library, but the rewrite was still in beta in 2026, and the company sold to Supabase in October 2026.

# Verdict: niche

* [Local-first software and CRDTs](local-first-crdts.md) - Apps whose primary copy of data lives on the user's device and merges with others through CRDTs, with the cloud as an optional relay. Verdict: niche. CRDTs won as the engine of collaborative text editing (Yjs), but the full local-first vision of user-owned data with no server authority stayed a research and indie movement, and commercial sync products dropped CRDTs.

# Verdict: fading

* [Edge databases and globally distributed reads](edge-databases.md) - Putting database replicas, or the database itself, in dozens of edge locations so that serverless edge functions get low-latency data. Verdict: fading. Global multi-region data for small apps found little demand (Fauna shut down, Turso and PlanetScale dropped edge features). What survived was moving compute to the data (Durable Objects, smart placement) and pooling connections to one central database.

# Verdict: failed

* [Replacing SQL with a better query language](sql-alternatives.md) - New query languages meant to replace or sit above SQL: PRQL, Malloy, EdgeQL (EdgeDB/Gel), GraphQL-as-database-API, FQL. Verdict: failed as replacements. SQL absorbed the best idea, pipelined syntax, through Google's pipe syntax (2024), which spread to BigQuery, Spark/Databricks and others, while the standalone languages stayed niche or died with their companies.
