---
type: Event
title: AWS acquires DuckLabs, the company of DuckDB's creators
description: "On Aug 26 2026 DuckLabs (formerly DuckDB Labs) announced it would join AWS. DuckDB, DuckLake and extensions stay MIT under the non-profit DuckDB Foundation, which adds a stakeholder advisory board."
event_kind: acquisition
date: 2026-08-26
window: W3
impact: mixed
projects: [projects/databases/duckdb]
organizations: [organizations/ducklabs]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: duck-aws
    resource: https://duckdb.org/2026/08/26/ducklabs-to-join-aws
    title: "DuckLabs to Join AWS, Projects to Remain Open Source"
  - id: reg-aws-duck
    resource: https://www.theregister.com/databases/2026/08/26/aws-buys-ducklabs-the-people-behind-the-popular-in-process-olap-database/5292590
    title: "The Register: AWS buys DuckLabs"
  - id: reg-aws-tissue
    resource: https://www.theregister.com/databases/2026/09/01/aws-duckdb-will-provide-connective-tissue-across-the-data-estate/5293304
    title: "The Register: AWS: DuckDB will provide 'connective tissue' across the data estate"
---

# What happened
DuckLabs announced it would be acquired by AWS, with closing expected in early Sept 2026. Terms were not disclosed. The team stays in Amsterdam. DuckDB, DuckLake, Quack and related extensions "remain free and open source software under the MIT license". Roadmap, licensing and governance are unchanged, and the DuckDB Foundation keeps stewardship and will add an advisory board[^duck-aws][^reg-aws-duck]. AWS VP Andy Warfield said DuckDB is "very much loved by S3 customers"[^reg-aws-duck]. AWS later described DuckDB as "connective tissue" across the data estate[^reg-aws-tissue].

# Why it matters
It is the first hyperscaler acquisition of the core team of a top-tier open-source database in this period. Because the Foundation holds the IP, the license cannot be pulled, unlike in the Redis and Elastic sagas.

# Outcome so far
The advisory board has not yet been formed. MotherDuck now competes with an AWS-employed core team. DuckDB v2.0 previews continue[^duck-aws].

# Related
- [/projects/databases/duckdb.md](/projects/databases/duckdb.md), [/organizations/ducklabs.md](/organizations/ducklabs.md)

[^duck-aws]: DuckDB blog, 2026-08-26.
[^reg-aws-duck]: The Register, 2026-08-26.
[^reg-aws-tissue]: The Register, 2026-09-01.
