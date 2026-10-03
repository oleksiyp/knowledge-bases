---
type: OSS Project
title: Apache Cassandra
description: "ASF-governed wide-column database. 5.0 (Sept 2024) brought vector search and SAI, and 6.0 (alpha since Apr 2026) brings Accord ACID transactions and transactional cluster metadata. A healthy foundation project that has gained from ScyllaDB's relicensing."
resource: https://github.com/apache/cassandra
tags: [nosql, wide-column, apache-2.0, foundation-hosted, asf]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: []
metrics:
  github_stars: { value: 10112, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: c5-announce
    resource: https://cassandra.apache.org/_/blog/Apache-Cassandra-5.0-Announcement.html
    title: "Announcing Apache Cassandra 5.0"
    author: org:apache
  - id: c6-instaclustr
    resource: https://www.instaclustr.com/blog/whats-new-in-cassandra-6-a-roundup-of-features-for-users-and-operators/
    title: "Instaclustr: What's new in Cassandra 6"
  - id: c6-tns
    resource: https://thenewstack.io/apache-cassandra-6-features/
    title: "The New Stack: For years, Apache Cassandra handed this work to your team — 6.0 takes it back"
  - id: c6-consensus
    resource: https://theconsensus.dev/p/2026/08/16/transactions-in-cassandra.html
    title: "The Consensus: The road to ACID transactions in Cassandra 6"
  - id: c-gh
    resource: https://github.com/apache/cassandra
    title: Apache Cassandra GitHub mirror
  - id: c-508
    resource: https://lists.apache.org/thread/x51mzdk7g39b9ocy6lzmf3kn1zpsq9xq
    title: "[RELEASE] Apache Cassandra 5.0.8"
    author: org:apache
---

# Summary
Cassandra is a stable, foundation-governed counterweight to vendor relicensing. 5.0 shipped on Sept 5 2024, just before the window, with SAI indexing, vector search, trie memtables and SSTables, and JDK 17, and it ended the 3.x line[^c5-announce]. 5.0.x patches continued (5.0.8)[^c-508]. Cassandra 6.0 reached alpha in Apr 2026. It brings Accord ACID transactions, Transactional Cluster Metadata, automated repair and a constraints framework, which shift operational work into the database itself[^c6-instaclustr][^c6-tns][^c6-consensus]. GA had not shipped as of Sept 2026.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-2025 | 5.0.x patch releases [^c-508] | OSS | + |
| W6 | 2026-04 | Cassandra 6.0 alpha1 [^c6-instaclustr] | OSS | + |
| W3 | 2026-08-16 | Accord transactions deep-dive. 6.0 still pre-GA [^c6-consensus] | OSS | flat |

# OSS successes
- Long-awaited ACID transactions (Accord) and automated repair are arriving[^c6-tns].

# OSS failures / risks
- Slow major-release cadence. 6.0 GA is still pending.

# Business successes
- n/a. The vendor ecosystem includes DataStax (bought by IBM in 2025, covered elsewhere) and NetApp Instaclustr.

# Business failures / risks
- n/a.

# By window
## W3
- 6.0 maturing[^c6-consensus].
## W6
- 6.0 alpha[^c6-instaclustr].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- 5.0.x maintenance[^c-508].

# Lessons
- Foundation-held projects give a durable option when vendors relicense ([ScyllaDB](/projects/databases/scylladb.md)).

# Related
- [ScyllaDB](/projects/databases/scylladb.md), [/events/2025-05-ibm-closes-datastax-langflow.md](/events/2025-05-ibm-closes-datastax-langflow.md)

[^c5-announce]: Apache Cassandra blog, 2024-09-05.
[^c6-instaclustr]: Instaclustr blog, 2026.
[^c6-tns]: The New Stack, 2026.
[^c6-consensus]: The Consensus, 2026-08-16.
[^c-gh]: GitHub API, apache/cassandra, 2026-10-03.
[^c-508]: Apache mailing list, Cassandra 5.0.8 release.
