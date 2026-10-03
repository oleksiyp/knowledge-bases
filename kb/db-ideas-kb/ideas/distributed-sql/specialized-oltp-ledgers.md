---
type: Idea
title: "Specialized OLTP engines for financial ledgers (TigerBeetle)"
description: "A purpose-built database with exactly one data model (double-entry accounts and transfers), designed for extreme write contention, strict serializability and safety under storage faults. Verdict: niche but credible. TigerBeetle reached production in 2024, passed Jepsen in 2025 and launched a managed cloud in 2026. Adoption is still small, and general-purpose Postgres remains what most ledgers run on."
tags: [oltp, ledger, fintech, double-entry, zig, specialization, tigerbeetle]
area: distributed-sql
verdict: niche
hype_peak: 2024
adoption_2026: niche
origins: "Created in July 2020 while consulting on a central-bank payments switch (Mojaloop context)"
key_systems: [systems/tigerbeetle, systems/amazon-qldb, systems/postgresql]
related_ideas: [ideas/distributed-sql/deterministic-simulation-testing, ideas/distributed-sql/jepsen-correctness-culture, ideas/nosql-models/ledger-databases, ideas/hardware-engines/rust-rewrites]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tb-company
    resource: https://tigerbeetle.com/company
    title: "TigerBeetle: Company (milestones)"
    author: org:tigerbeetle
  - id: tc-tb
    resource: https://techcrunch.com/2024/07/23/tigerbeetle-is-building-database-software-optimized-for-financial-transactions/
    title: "TechCrunch: TigerBeetle is building database software optimized for financial transactions (2024-07-23)"
  - id: j-tb
    resource: https://jepsen.io/analyses/tigerbeetle-0.16.11
    title: "Jepsen: TigerBeetle 0.16.11 (2025-06)"
    author: person:kyle-kingsbury
  - id: tb-zig
    resource: https://tigerbeetle.com/blog/2025-10-25-synadia-and-tigerbeetle-pledge-512k-to-the-zig-software-foundation/
    title: "TigerBeetle: Synadia and TigerBeetle pledge $512,000 to the Zig Software Foundation (2025-10-25)"
    author: org:tigerbeetle
  - id: tb-gh
    resource: https://github.com/tigerbeetle/tigerbeetle
    title: "GitHub: tigerbeetle/tigerbeetle"
---

# Summary
**Verdict: niche, but the most credible new OLTP engine of the period.** TigerBeetle argues that general-purpose SQL databases handle the hottest financial workloads (many debits and credits contending on a few accounts) poorly, because row locks serialize them and each transfer takes several round trips. Its answer is a database that knows only accounts and transfers, batches thousands of transfers per request, enforces double-entry invariants internally, and was designed around simulation testing and storage-fault tolerance. The milestones are concrete. Production release 0.15.3 shipped in March 2024. A $24M Series A followed in 2024 (over $30M raised in total)[^tb-company][^tc-tb]. A Jepsen analysis in 2025 found only two minor safety issues[^j-tb]. Production customers reached 100M transactions per month by January 2025, and TigerBeetle Cloud launched on 26 Aug 2026[^tb-company]. Against that, 100M transactions per month is modest, the company has about 15 listed staff[^tb-company], and most fintechs still build ledgers on Postgres.

# The idea
Specialize to the point of a single schema. Fix the data model (accounts with debit and credit balances, immutable transfers, two-phase pending transfers) so the engine can use static memory allocation, fixed-size records, batch commits and a single-threaded state machine replicated by Viewstamped Replication. All of it is written in Zig and tested in a deterministic simulator. The bet is that for this one workload, orders of magnitude of headroom and stronger safety are worth giving up SQL.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2020 | Joran Dirk Greef creates TigerBeetle (Jul) while consulting on a central-bank switch[^tb-company] | + |
| 2022 | TigerBeetle Inc. founded with a first customer (Aug 29)[^tb-company] | + |
| 2023 | $6.4M seed led by Amplify (Jan 25)[^tb-company] | + |
| 2024 | Production release 0.15.3 (Mar). $24M Series A led by Spark Capital (May 30)[^tb-company][^tc-tb] | + |
| 2025 | 100M transactions per month across production customers (Jan 1)[^tb-company]. Jepsen report (Jun)[^j-tb]. $256k pledged to the Zig Software Foundation (Oct)[^tb-zig] | + |
| 2026 | One trillion transactions processed in a scale test (Mar 19). TigerBeetle Cloud launches (Aug 26)[^tb-company] | + |

# What succeeded
- **Engineering credibility.** Jepsen tested versions 0.16.11 to 0.16.30. It found seven crashes and some latency and retry issues, but only two minor safety bugs, all fixed by 0.16.45 except indefinite retries[^j-tb]. That is an unusually clean result for a young database.
- **Influence beyond its niche.** TigerBeetle's public writing on static allocation, deterministic simulation and handling storage faults ("TigerStyle") shaped the 2023–2025 discussion of how to build databases. It also gave Zig a flagship production user[^tb-zig]. The Apache-2.0 repository has about 17k GitHub stars[^tb-gh].
- **Clear positioning.** It does not try to be a general database. It sits beside the system-of-record SQL database as the ledger.

# What failed / open risks
- **Scale of adoption.** The published production volume (100M transactions per month in Jan 2025)[^tb-company] is small next to the card networks and real-time payment systems TigerBeetle is designed for. We found no named large bank in production (unconfirmed).
- **Integration cost.** It has no SQL, a fixed schema and a custom client protocol. Teams must keep a second database for everything else and keep the two consistent.
- **The last ledger-database wave failed.** Amazon QLDB, a different idea (a verifiable journal), was deprecated in 2024, and blockchain-style ledger databases faded. Buyers are wary of single-purpose financial databases.
- **Cloud only arrived in 2026.** Until then, adopters had to operate a new database themselves.

# Why
1. **Contention is the real bottleneck.** Hot accounts (fee accounts, settlement accounts) serialize under row locks, and specialization with batching actually removes that limit. Few teams hit it, though. Most ledgers run on Postgres comfortably.
2. **Trust takes years in finance.** Core banking changes slowly, and the Jepsen-plus-DST evidence shortens but does not remove that cycle.
3. **Sound financing.** A modest raise (~$30M) and a narrow scope fit a slow-adoption market better than 2021-style mega-rounds would have.

# Lessons
- A narrow engine can be far faster and safer for one workload, but it must make integration with the general database easy.
- In regulated markets, a public correctness record (simulation plus Jepsen) is a go-to-market asset, not just engineering hygiene.
- Funding should match the speed at which the market adopts.

# Related
- Systems: [TigerBeetle](/systems/tigerbeetle.md), [Amazon QLDB](/systems/amazon-qldb.md), [PostgreSQL](/systems/postgresql.md), [Jepsen](/systems/jepsen.md)
- Ideas: [DST](/ideas/distributed-sql/deterministic-simulation-testing.md), [Jepsen culture](/ideas/distributed-sql/jepsen-correctness-culture.md)
- Events: [Jepsen tests TigerBeetle](/events/2025-06-jepsen-tigerbeetle.md)

[^tb-company]: tigerbeetle.com/company, checked 2026-10-03.
[^tc-tb]: TechCrunch, 2024-07-23.
[^j-tb]: Jepsen, June 2025.
[^tb-zig]: TigerBeetle blog, 2025-10-25.
[^tb-gh]: GitHub, checked 2026-10-03.
