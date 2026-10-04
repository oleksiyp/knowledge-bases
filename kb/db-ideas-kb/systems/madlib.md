---
type: System
title: Apache MADlib
description: "Open-source library of in-database machine learning and statistics for PostgreSQL and Greenplum, started in 2011 by Greenplum/EMC with UC Berkeley and backed by Pivotal/VMware. Apache top-level project from 2017; went dormant, survived a 2022 termination proposal, and was terminated by the Apache board in September 2026."
resource: https://madlib.apache.org
tags: [in-database-ml, postgresql, greenplum, apache, sql]
kind: oss
first_release: 2011
org: "Apache Software Foundation (originally Greenplum/EMC, Pivotal, VMware)"
license: Apache-2.0
outcome: dead
ideas: [ideas/ml-for-db/in-database-ml]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: minutes
    resource: https://whimsy.apache.org/board/minutes/MADlib.html
    title: "Apache Board minutes: MADlib"
  - id: vote
    resource: http://www.mail-archive.com/dev@madlib.apache.org/msg05081.html
    title: "dev@madlib.apache.org: [RESULT][VOTE] Moving to the Attic (2026-09-03)"
  - id: revive
    resource: http://www.mail-archive.com/dev@madlib.apache.org/msg05082.html
    title: "dev@madlib.apache.org: [DISCUSS] Reviving Apache MADlib by re-establishing its PMC"
  - id: attic-pr
    resource: https://github.com/apache/attic/pull/60
    title: "apache/attic PR #60: Retire madlib"
  - id: gh
    resource: https://github.com/apache/madlib
    title: "apache/madlib (GitHub mirror)"
  - id: tlp
    resource: https://news.apache.org/foundation/entry/the-apache-software-foundation-announces17
    title: "ASF: The Apache Software Foundation Announces Apache MADlib as a Top-Level Project (2017-08-22)"
  - id: madlib-vldb
    resource: https://vldb.org/pvldb/vol5/p1700_joehellerstein_vldb2012.pdf
    title: "Hellerstein et al.: The MADlib Analytics Library or MAD Skills, the SQL (PVLDB 5(12), 2012)"
---

# Summary

MADlib implemented regression, clustering, decision trees, graph algorithms, and later deep-learning orchestration as SQL-callable functions running in parallel inside PostgreSQL and Greenplum.[^madlib-vldb] It was the reference open-source example of "bring the computation to the data". Its contributors were mostly employees of Pivotal, later VMware. As that support faded, the project went quiet. An October 2022 proposal to terminate MADlib was tabled, and a new PMC rebooted the project in March 2023.[^minutes] Activity did not recover. After missed reports and failed roll calls, the PMC voted in early September 2026 to move to the Attic.[^vote] The apache/attic tracking PR records "Termination decided during board meeting on 2026-09-16".[^attic-pr] A late-September 2026 thread proposes reviving it via Apache Cloudberry members.[^revive]

# Timeline

| Date | Event |
|---|---|
| 2011 | Project starts (Greenplum/EMC with UC Berkeley) |
| 2015 / 2017 | Enters Apache Incubator (Sept 2015); graduates to top-level project (announced 2017-08-22)[^tlp] |
| Oct 2022 | Board termination resolution, tabled |
| Mar 2023 | Reboot with a new PMC |
| 2026-09-03 | PMC vote result: move to the Attic |
| 2026-09-16 | Board terminates the project |

# What worked

- It proved scalable in-database analytics on MPP Postgres and influenced vendor features (Greenplum, later cloud warehouses' SQL-ML).

# What didn't

- Data scientists chose Python ecosystems (scikit-learn, Spark MLlib, PyTorch), not SQL UDF libraries.
- Single-vendor dependency. When Greenplum's open-source future dimmed under VMware/Broadcom, contributors left.

# Related

- Idea: [In-database ML](/ideas/ml-for-db/in-database-ml.md)
- Systems: [BigQuery ML](/systems/bigquery-ml.md), [PostgreSQL](/systems/postgresql.md)
- Event: [Apache MADlib terminated](/events/2026-09-apache-madlib-terminated.md)

[^madlib-vldb]: PVLDB 2012.
[^minutes]: Apache Whimsy.
[^vote]: Mailing list, 2026-09-03.
[^attic-pr]: GitHub apache/attic PR #60.
[^revive]: Mailing list.
[^gh]: GitHub mirror.
[^tlp]: ASF announcement.
