---
type: OSS Project
title: CockroachDB
description: "Distributed SQL database that completed its move away from open source. Core was retired for a proprietary Enterprise license (Nov 2024), and in Sept 2026 development went fully private, citing AI-era security and copyright risk."
resource: https://github.com/cockroachdb/cockroach
tags: [distributed-sql, proprietary, source-available, license-change, ai-agents]
domain: databases
license: CockroachDB Software License (proprietary)
license_history: ["Apache-2.0 (2015-2019)", "BSL-1.1 + CCL (2019-2024)", "CockroachDB Software License, Core retired (2024-11-18-)", "Private development, public repo frozen (announced 2026-09-15)"]
governance: single-vendor
steward: Cockroach Labs
backing_orgs: [organizations/cockroach-labs]
metrics:
  github_stars: { value: 32539, as_of: 2026-10-03 }
oss_verdict: dead
business_verdict: stable
momentum_by_window: { W3: down, W6: flat, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sdtimes-core
    resource: https://sdtimes.com/os/cockroachdb-retires-self-hosted-core-offering-makes-enterprise-version-free-for-companies-under-10m-in-annual-revenue/
    title: "SD Times: CockroachDB retires self-hosted Core offering, makes Enterprise free under $10M revenue"
  - id: tns-core
    resource: https://thenewstack.io/cockroach-rescinds-open-core-for-a-free-enterprise-version/
    title: "The New Stack: Cockroach Rescinds Open Core for a Free Enterprise Version"
  - id: crl-source
    resource: https://www.cockroachlabs.com/blog/source-code-protection/
    title: "Cockroach Labs: Protecting Cockroach Labs' Source Code in the Age of AI"
    author: org:cockroach-labs
  - id: crl-continuum
    resource: https://www.cockroachlabs.com/blog/continuum-announcement/
    title: "Cockroach Labs: Cockroach Continuum, the Agentic Database Cloud"
    author: org:cockroach-labs
  - id: crl-blog
    resource: https://www.cockroachlabs.com/blog/
    title: Cockroach Labs blog index (BYOC GA 2026-09-24)
    author: org:cockroach-labs
  - id: reg-sprawl
    resource: https://www.theregister.com/ai-and-ml/2026/06/30/ai-agents-cause-of-database-sprawl-and-also-the-proposed-solution/5264430
    title: "The Register: AI agents: Cause of database sprawl. And also the proposed solution"
    author: org:the-register
  - id: runtime-fork
    resource: https://www.runtime.news/after-cockroach-labs-went-proprietary-one-customer-took-matters-into-its-own-hands/
    title: "Runtime: After Cockroach Labs went proprietary, one customer took matters into its own hands"
  - id: crdb-gh
    resource: https://github.com/cockroachdb/cockroach
    title: CockroachDB GitHub repository
---

# Summary
CockroachDB's open-source story ended in these two years. On Nov 18 2024 Cockroach Labs retired the free self-hosted Core edition. Only an Enterprise edition remains, under a proprietary license, free only to companies under $10M in revenue[^sdtimes-core][^tns-core]. At least one customer responded by maintaining its own copy of the last open code[^runtime-fork]. On Sept 15 2026 the company went further. CockroachDB and its Pebble storage engine moved to private development, and the public repo became a historical snapshot. The reasons given were AI-assisted exploit discovery, unsettled copyright and "AI-assisted functional reproduction"[^crl-source]. The same day it launched "Cockroach Continuum", an agentic database cloud[^crl-continuum]. The business continues (BYOC GA on Sept 24 2026[^crl-blog]), but CockroachDB should no longer be counted as open-source software.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-18 | Core retired. Enterprise-only under the CockroachDB Software License, free under $10M revenue [^sdtimes-core][^tns-core] | OSS/Business | − |
| W6 | 2026-06-30 | CEO Spencer Kimball pitches an "Agentic Database Cloud" for agent-driven traffic [^reg-sprawl] | Business | + |
| W3 | 2026-09-15 | Source code goes private, public repo frozen. Cockroach Continuum launched [^crl-source][^crl-continuum] | OSS | − |
| W3 | 2026-09-24 | CockroachDB BYOC GA [^crl-blog] | Business | + |

# OSS successes
- None of substance. Non-core Go libraries and upstream contributions continue[^crl-source].

# OSS failures / risks
- A two-step exit from open source (open core → proprietary → private). The 32.5k-star repo is now an archive in practice[^crdb-gh][^crl-source].
- This sets a new precedent: closing source on "AI risk" grounds. Other vendors may copy it.

# Business successes
- Repositioned toward agentic workloads and enterprise BYOC[^crl-continuum][^crl-blog].

# Business failures / risks
- Developer adoption funnels shrink. Distributed-Postgres rivals that stay open (YugabyteDB, TiDB, Multigres/Neki) gain from the move.

# By window
## W3
- Source goes private. Continuum. BYOC GA[^crl-source][^crl-continuum][^crl-blog].
## W6
- Agentic database cloud vision[^reg-sprawl].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Core retired, proprietary license[^sdtimes-core].

# Lessons
- "AI makes public source dangerous" is now a stated reason for closing code. Expect more single-vendor databases to use it.
- Once a free self-hosted tier is gone, closing the repository costs little commercially. The damage to the community was already done.

# Related
- [/organizations/cockroach-labs.md](/organizations/cockroach-labs.md), [/events/2026-09-cockroachdb-source-goes-private.md](/events/2026-09-cockroachdb-source-goes-private.md)
- [YugabyteDB](/projects/databases/yugabytedb.md), [TiDB](/projects/databases/tidb.md), [ScyllaDB](/projects/databases/scylladb.md)
- Licensing-change context: [CockroachDB (licensing-forks view)](/projects/licensing-forks/cockroachdb.md), [/events/2024-11-cockroachdb-ends-core-edition.md](/events/2024-11-cockroachdb-ends-core-edition.md)

[^sdtimes-core]: SD Times, Aug 2024 (effective 2024-11-18).
[^tns-core]: The New Stack, 2024.
[^crl-source]: Cockroach Labs blog, 2026-09-15.
[^crl-continuum]: Cockroach Labs blog, 2026-09-15.
[^crl-blog]: Cockroach Labs blog index, accessed 2026-10-03.
[^reg-sprawl]: The Register, 2026-06-30.
[^runtime-fork]: Runtime (runtime.news), undated in this research.
[^crdb-gh]: GitHub API, cockroachdb/cockroach, 2026-10-03.
