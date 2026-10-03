---
type: System
title: StarRocks
description: "MPP analytics engine forked from Apache Doris in 2020, relicensed to Apache-2.0 and moved to the Linux Foundation in 2022–2023. It became a fast Iceberg/lakehouse query engine. Its sponsor CelerData rebranded as PhoenixAI around AI agents in 2026."
resource: https://www.starrocks.io
tags: [olap, mpp, lakehouse, linux-foundation, real-time]
kind: oss
first_release: 2021
org: "Linux Foundation; sponsor CelerData (now PhoenixData AI)"
license: Apache-2.0
outcome: stable
ideas: [ideas/analytics-lakehouse/real-time-olap, ideas/analytics-lakehouse/lakehouse]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: starrocks-lf
    resource: https://www.globenewswire.com/en/news-release/2023/02/14/2607982/0/en/CelerData-Contributes-StarRocks-Project-to-the-Linux-Foundation.html
    title: "GlobeNewswire: CelerData contributes StarRocks to the Linux Foundation (2023-02-14)"
  - id: dbta-phoenix
    resource: https://www.dbta.com/Editorial/News-Flashes/CelerData-Rebrands-as-PhoenixAI-Introduces-Analytical-Engine-Designed-for-AI-Agents-174972.aspx
    title: "DBTA: CelerData rebrands as PhoenixAI (May 2026)"
  - id: bf-phoenix
    resource: https://www.blocksandfiles.com/ai-ml/2026/06/15/phoenixai-leaves-legacy-analytics-ashes-behind-to-build-ai-agent-database/5255402
    title: "Blocks and Files: PhoenixAI leaves legacy analytics behind (2026-06-15)"
---

# Summary

StarRocks began in 2020 as a commercial fork of Apache Doris (as DorisDB). By 2023 about 80% of the code had been rewritten, adding a vectorized engine and a cost-based optimizer. It moved from the Elastic License to Apache-2.0 in December 2022 and was contributed to the Linux Foundation in February 2023[^starrocks-lf]. It found a role both as a real-time OLAP store and as a fast engine over Iceberg/Hudi/Delta lakes. Its sponsor CelerData rebranded as PhoenixData AI ("PhoenixAI") on 2026-05-27 and pitched an "agentic AI database", while keeping contracts and support unchanged[^dbta-phoenix][^bf-phoenix].

# Timeline

| Year | Event |
|---|---|
| 2020 | Forked from Doris |
| 2022 | Relicensed Apache-2.0 (Dec)[^starrocks-lf] |
| 2023 | Linux Foundation (Feb)[^starrocks-lf] |
| 2026 | CelerData becomes PhoenixAI[^dbta-phoenix] |

# What worked

- It has strong performance on joins and lakehouse queries, and moving to a permissive licence and neutral foundation helped adoption.

# What didn't

- The company's repeated repositioning (StarRocks Inc. → CelerData → PhoenixAI) suggests the standalone OLAP business did not scale as hoped.

# Related

- [Real-time OLAP](/ideas/analytics-lakehouse/real-time-olap.md) · [ClickHouse](/systems/clickhouse.md) · [Apache Iceberg](/systems/apache-iceberg.md)
