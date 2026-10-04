---
type: Event
title: Cockroach Labs announces retirement of Core
description: Cockroach Labs announces the November retirement of self-hosted Core in favor of Enterprise licensing, with free
  eligibility limited by user and business criteria.
date: '2024-08-15'
year: 2024
kind: license-change
signal: mixed
ideas:
- ideas/distributed-sql/newsql-distributed-sql
systems:
- systems/cockroachdb
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: crdb-enterprise
  resource: https://www.cockroachlabs.com/blog/enterprise-license-announcement/
  title: 'Cockroach Labs: Evolving our self-hosted offering and license model, August 15, 2024'
---

# What happened
On August 15, 2024, Cockroach Labs announced that version 24.3 in November would retire self-hosted Core and consolidate users onto Enterprise licensing. Enterprise Free was offered to individuals and qualifying businesses below $10 million annual revenue; the announcement also covered new patches of specified older versions.[^crdb-enterprise]

# Why it matters
The vendor explicitly linked the change to larger businesses using free Core while benefiting from a mature product with low support needs.[^crdb-enterprise] That makes it unusually direct evidence of a monetization problem: reliability can reduce the reason to buy support. Small eligible users gained enterprise features, while larger self-hosters faced a new commercial boundary. The event therefore has a mixed signal. It says little about whether distributed SQL works technically, but changes the cost and continuity assumptions under which teams originally adopted it. August is the announcement date, not the effective release date.

# Related
- [Cockroachdb](/systems/cockroachdb.md)
- [Newsql Distributed Sql](/ideas/distributed-sql/newsql-distributed-sql.md)

[^crdb-enterprise]: [Cockroach Labs: Evolving our self-hosted offering and license model, August 15, 2024](https://www.cockroachlabs.com/blog/enterprise-license-announcement/).
