---
type: Event
title: "Greenplum, the open-source MPP Postgres fork, goes closed-source"
description: "In May 2024, after Broadcom's VMware acquisition, Greenplum's GitHub repositories were archived and development went closed-source without announcement. Original developers continued the open fork as Apache Cloudberry."
date: 2024-05-28
year: 2024
kind: license-change
signal: negative
ideas: [ideas/postgres-ecosystem/postgres-compatibility-standard, ideas/business-licensing/source-available-licenses]
systems: [systems/postgresql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: cloudberry-incubator
    resource: https://cloudberry.apache.org/blog/cloudberry-database-enters-the-apache-incubator/
    title: "Apache Cloudberry: Cloudberry Database enters the Apache Incubator"
  - id: hn-greenplum
    resource: https://news.ycombinator.com/item?id=40507691
    title: "HN: Greenplum Database is archived on GitHub (May 2024)"
  - id: noel-x
    resource: https://x.com/philippemnoel/status/1796265788820906177
    title: "Philippe Noël on X: Greenplum repository went closed-source"
---

# What happened
Greenplum, a massively parallel analytics database forked from PostgreSQL and open-sourced by Pivotal in 2015, passed to VMware and then to Broadcom (Nov 2023). In May 2024 almost all of its GitHub repositories were archived and made read-only, the community Slack was deleted and mailing lists went quiet, all without an announcement. Development continued as closed source under Tanzu by Broadcom[^cloudberry-incubator][^hn-greenplum][^noel-x]. Cloudberry, a fork started by original Greenplum developers in 2022 on a newer Postgres kernel, moved to the Apache Software Foundation in Nov 2024[^cloudberry-incubator].

# Why it matters
It is the clearest example of the risks of a corporate Postgres *fork*, as opposed to Postgres itself. The fork's code, community and roadmap belonged to whoever bought the company. Greenplum had also long lagged upstream Postgres versions, a cost that every deep fork pays.

# Related
- [Postgres compatibility as a standard](/ideas/postgres-ecosystem/postgres-compatibility-standard.md), [PostgreSQL](/systems/postgresql.md)
