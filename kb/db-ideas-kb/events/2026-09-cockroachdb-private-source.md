---
type: Event
title: "CockroachDB moves development to private repositories, citing AI"
description: "On 15 Sept 2026 Cockroach Labs said new CockroachDB and Pebble development would happen privately, leaving the public GitHub repo as a frozen snapshot. The reasons given were AI-accelerated exploit discovery and code reproduction."
date: 2026-09-15
year: 2026
kind: license-change
signal: negative
ideas: [ideas/business-licensing/source-available-licenses, ideas/business-licensing/database-company-graveyard]
systems: [systems/cockroachdb, systems/pebble]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: crl-source
    resource: "https://www.cockroachlabs.com/blog/source-code-protection/"
    title: "Cockroach Labs: Protecting Cockroach Labs source code in the age of AI (2026-09-15)"
  - id: crl-continuum
    resource: "https://www.cockroachlabs.com/blog/continuum-announcement/"
    title: "Cockroach Labs: Cockroach Continuum, the agentic database cloud (2026-09-15)"
  - id: crdb-2024
    resource: "https://www.cockroachlabs.com/blog/enterprise-license-announcement/"
    title: "Cockroach Labs: Enterprise license announcement (2024-08-15)"
---

# What happened

Cockroach Labs announced that CockroachDB and its Pebble storage engine would be developed in private repositories. The public repo stays as a historical snapshot and no longer takes contributions. The license and customer terms are unchanged. The company said LLMs can quickly "surface implementation details, internal logic, and architectural patterns", which makes exploits easier, and raised concerns about AI-assisted functional reproduction of its code.[^crl-source] It launched "Cockroach Continuum", an agentic database cloud, the same day.[^crl-continuum]

# Why it matters

It completes a ratchet: Apache 2.0 (to 2019) → BSL (2019) → retired free Core edition (2024)[^crdb-2024] → no public source (2026). It is the first major database in the period to end source availability, and it introduces "AI makes public source risky" as a new reason other single-vendor projects could use.

# Related

- [Source-available licenses](/ideas/business-licensing/source-available-licenses.md) · [CockroachDB BSL](/events/2019-06-cockroachdb-bsl.md) · [CockroachDB](/systems/cockroachdb.md)

[^crl-source]: Cockroach Labs: Protecting Cockroach Labs source code in the age of AI (2026-09-15).
[^crl-continuum]: Cockroach Labs: Cockroach Continuum, the agentic database cloud (2026-09-15).
[^crdb-2024]: Cockroach Labs: Enterprise license announcement (2024-08-15).
