---
type: Paper
title: "Aurora DSQL: Scalable, Multi-Region OLTP"
description: "AWS's design paper for Aurora DSQL: stateless PostgreSQL-compatible query processors in Firecracker microVMs, coordination-free MVCC reads at precise timestamps, and OCC that defers all coordination to commit through adjudicators and a replicated journal."
year: 2026
venue: arXiv 2607.13276 (July 2026)
authors: [Marc Brooker, Marc Bowes, Mike Hershey, Zak van der Merwe, James Morle, Matthys Strydom]
resource: https://arxiv.org/abs/2607.13276
impact: low
ideas: [ideas/cloud-architecture/hyperscaler-distributed-sql, ideas/cloud-architecture/disaggregated-storage-compute-oltp]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: arxiv
    resource: https://arxiv.org/abs/2607.13276
    title: "arXiv: Aurora DSQL: Scalable, Multi-Region OLTP"
  - id: brooker-writes
    resource: https://brooker.co.za/blog/2024/12/05/inside-dsql-writes.html
    title: "Marc Brooker: DSQL Vignette: Transactions and Durability"
    author: person:marc-brooker
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Claim
A serverless SQL database can provide strong consistency, ACID transactions and continuous availability through AZ *and* region failures. It does this by splitting into three independently scalable services and deferring all coordination to COMMIT. Reads use MVCC with precision timestamps and need no coordination. Writes are buffered in the query processor and validated optimistically by adjudicators, then made durable through the journal. The authors claim the system scales "from zero to millions of transactions per second"[^arxiv][^brooker-writes].

# What happened next
Published in July 2026, about 14 months after GA, it filled the gap Pavlo noted in his 2024 review, when there was little public information about how DSQL worked[^pavlo-2024]. Its real-world impact can't be judged yet. The design is influential as a statement of how hyperscalers can build distributed SQL from internal primitives (time sync, journal, Firecracker), but product adoption data is not public. "Impact: low" reflects measurable impact as of Oct 2026, not quality.

# Related
[Hyperscaler distributed SQL](/ideas/cloud-architecture/hyperscaler-distributed-sql.md) · [Aurora DSQL](/systems/aurora-dsql.md) · [Spanner](/systems/spanner.md)
