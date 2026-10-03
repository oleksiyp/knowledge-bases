---
type: Event
title: "CockroachDB relicenses under the Business Source License"
description: "In June 2019 Cockroach Labs moved CockroachDB core from Apache 2.0 to BSL 1.1 (starting with v19.2), forbidding commercial DBaaS resale without a license; each release would convert to Apache after three years."
date: 2019-06-04
year: 2019
kind: license-change
signal: mixed
ideas: [ideas/business-licensing/source-available-licenses, ideas/business-licensing/forks-as-backlash]
systems: [systems/cockroachdb]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: redmonk
    resource: "https://redmonk.com/sogrady/2019/06/21/cockroach-source-available/"
    title: "RedMonk: Cockroach and the Source Available Future (2019-06-21)"
  - id: devclass
    resource: "https://devclass.com/2019/06/05/cockroachdb-shelters-from-aws-extermination-under-business-software-license/"
    title: "DEVCLASS: CockroachDB shelters from AWS under Business Source License (2019-06-05)"
  - id: crdb-2024
    resource: "https://www.cockroachlabs.com/blog/enterprise-license-announcement/"
    title: "Cockroach Labs: Enterprise license announcement (2024-08-15)"
---

# What happened

Cockroach Labs announced that CockroachDB, from version 19.2, would ship under the Business Source License. Users could run any number of nodes and use it in their own applications or as an internal service, but could not sell CockroachDB as a commercial DBaaS without a license. Each release converts to Apache 2.0 three years later.[^devclass][^redmonk] The founders cited AWS's handling of Elasticsearch as the threat.[^devclass]

# Why it matters

It made BSL the default choice for VC-backed infrastructure databases. No fork followed, because nearly all contributors were Cockroach employees. It was also the first step of a ratchet: the free Core edition was retired in November 2024 (free only below $10M revenue)[^crdb-2024], and in September 2026 development moved to private repositories.

# Related

- [Source-available licenses](/ideas/business-licensing/source-available-licenses.md) · [CockroachDB source goes private](/events/2026-09-cockroachdb-private-source.md) · [CockroachDB](/systems/cockroachdb.md)

[^redmonk]: RedMonk: Cockroach and the Source Available Future (2019-06-21).
[^devclass]: DEVCLASS: CockroachDB shelters from AWS under Business Source License (2019-06-05).
[^crdb-2024]: Cockroach Labs: Enterprise license announcement (2024-08-15).
