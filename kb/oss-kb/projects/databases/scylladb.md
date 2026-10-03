---
type: OSS Project
title: ScyllaDB
description: "C++ Cassandra/DynamoDB-compatible NoSQL database that ended its AGPL open-source line (6.2 was the last) and moved to a source-available license with a free tier capped at 50 vCPU / 10 TB (Dec 2024)."
resource: https://github.com/scylladb/scylladb
tags: [nosql, wide-column, license-change, source-available, cassandra-compatible]
domain: databases
license: ScyllaDB Source Available License
license_history: ["AGPL-3.0 (OSS, to 6.2)", "ScyllaDB Source Available License (2024-12-18-)"]
governance: single-vendor
steward: ScyllaDB Inc.
backing_orgs: []
metrics:
  github_stars: { value: 15782, as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: scylla-why
    resource: https://www.scylladb.com/2024/12/18/why-were-moving-to-a-source-available-license/
    title: "ScyllaDB: Why We're Moving to a Source Available License"
    author: org:scylladb
  - id: scylla-faq
    resource: https://www.scylladb.com/source-available-faq/
    title: ScyllaDB source-available FAQ
    author: org:scylladb
  - id: zaitsev-scylla
    resource: https://peterzaitsev.com/thoughts-on-scylladb-license-change/
    title: "Peter Zaitsev: Thoughts on ScyllaDB License Change"
  - id: scylla-gh
    resource: https://github.com/scylladb/scylladb
    title: ScyllaDB GitHub repository
---

# Summary
On Dec 18 2024 ScyllaDB merged its OSS and Enterprise code. AGPL 6.2 became the final open-source release, and later versions ship under a ScyllaDB Source Available License. Production use is free up to 50 vCPU and 10 TB per organisation[^scylla-why][^scylla-faq]. As a partial offset, Scylla Manager moved to AGPL and the Kubernetes multi-region operator was folded into the Apache-licensed operator[^scylla-faq]. Open-source advocates criticised the move[^zaitsev-scylla]. Development continues in public (15.8k stars, active pushes)[^scylla-gh]. ScyllaDB's main open-source alternative is now [Apache Cassandra](/projects/databases/cassandra.md).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-18 | Move to source-available. AGPL 6.2 is the last OSS release [^scylla-why] | OSS | − |
| W3 | 2026-10-03 | Active development continues on GitHub [^scylla-gh] | OSS | flat |

# OSS successes
- Some tooling was opened up as part of the change (Manager under AGPL, operator consolidation)[^scylla-faq].

# OSS failures / risks
- The core database is no longer OSI open source. Free-tier caps push larger users to Cassandra or to contracts[^scylla-faq].

# Business successes
- A single enterprise codebase lowers costs. The free tier keeps a funnel open[^scylla-why].

# Business failures / risks
- Community goodwill lost. A fork of 6.2 is possible but none was found.

# By window
## W3
- No notable events found.
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- License change[^scylla-why].

# Lessons
- Part of a 2024 wave of database relicensing (CockroachDB, ScyllaDB). Unlike Redis or Elastic, these changes have not been reversed.

# Related
- [Apache Cassandra](/projects/databases/cassandra.md), [CockroachDB](/projects/databases/cockroachdb.md); license-change context: [CockroachDB (licensing-forks)](/projects/licensing-forks/cockroachdb.md), [Redis](/projects/licensing-forks/redis.md)

[^scylla-why]: ScyllaDB blog, 2024-12-18.
[^scylla-faq]: ScyllaDB FAQ.
[^zaitsev-scylla]: Peter Zaitsev blog, Dec 2024.
[^scylla-gh]: GitHub API, scylladb/scylladb, 2026-10-03.
