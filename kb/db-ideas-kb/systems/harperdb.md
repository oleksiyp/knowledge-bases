---
type: System
title: Harper (HarperDB)
description: "Node.js-based platform that fuses database, cache, application runtime and messaging into one process for edge and e-commerce workloads. Renamed from HarperDB to Harper in 2025 and open-sourced its core under Apache 2.0 in October 2025, with enterprise features under ELv2: a move toward open source when most vendors moved away."
resource: https://www.harper.fast
tags: [edge, application-platform, nodejs, open-source, elastic-license, split-licensing]
kind: product
first_release: 2017
org: "Harper (formerly HarperDB, Denver)"
license: "Apache-2.0 core (Harper 5.0+); enterprise features under ELv2"
outcome: pivoted
ideas: [ideas/business-licensing/return-to-agpl, ideas/business-licensing/source-available-licenses]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: harper-rebrand
    resource: https://www.prnewswire.com/news-releases/harperdb-proclaims-new-era-for-web-performance-with-corporate-rebrand-302391013.html
    title: "PR Newswire: HarperDB proclaims new era for web performance with corporate rebrand (2025)"
  - id: harper-oss
    resource: https://www.harper.fast/resources/harper-is-officially-open-source
    title: "Harper is officially open source (2025-10-14)"
  - id: harper-5
    resource: https://www.harper.fast/resources/harper-5-0-is-here-open-source-rocksdb-and-a-runtime-built-for-the-agentic-era
    title: "Harper 5.0: open source, RocksDB, and a runtime for the agentic era"
  - id: harper-gh
    resource: https://github.com/HarperFast/harper
    title: "GitHub: HarperFast/harper"
---

# Summary

HarperDB started in 2017 as a distributed database with SQL and NoSQL interfaces. Over time it became an application platform. Database, cache, Node.js application logic and messaging run inside one in-memory process and are distributed to the edge, mainly for e-commerce page delivery. In 2025 the company dropped "DB" from its name to become Harper, reflecting that it no longer sells a database alone.[^harper-rebrand] On 14 October 2025, at JSConf North America, it open-sourced the core platform under Apache 2.0 and joined the OpenJS Foundation.[^harper-oss] Harper 5.0 adopted RocksDB as its storage engine and a split license: Apache 2.0 core with enterprise-scale features source-available under the Elastic License 2.0.[^harper-5][^harper-gh] The company says it powers nearly 2% of global e-commerce purchases (vendor claim).[^harper-oss]

# Timeline

| Year | Event |
|---|---|
| 2017 | HarperDB launched |
| 2025 | Rebrand to Harper[^harper-rebrand]; core open-sourced under Apache 2.0 (Oct 14)[^harper-oss]; Harper 5.0 on RocksDB[^harper-5] |

# What worked

- Repositioning from "another database" to an edge application platform gave it a clearer buyer (e-commerce performance) than a general-purpose database.
- Opening the core in 2025 reversed the period's trend and used open source as a developer funnel, with ELv2 protecting the paid features.

# What didn't

- As a standalone database it had little traction against PostgreSQL, MongoDB and Redis, hence the pivot.
- Too early to judge whether the open-source move grows adoption; no community metrics verified.

# Related

- [Return to open source](/ideas/business-licensing/return-to-agpl.md) · [Source-available licenses](/ideas/business-licensing/source-available-licenses.md)
- [RocksDB](/systems/rocksdb.md)

[^harper-rebrand]: PR Newswire, 2025.
[^harper-oss]: Harper blog, 2025-10-14.
[^harper-5]: Harper blog, Harper 5.0.
[^harper-gh]: GitHub, HarperFast/harper.
