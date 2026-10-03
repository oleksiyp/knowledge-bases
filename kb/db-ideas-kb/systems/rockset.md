---
type: System
title: Rockset
description: "Cloud-only real-time analytics database built on RocksDB with 'converged indexing', founded by ex-Facebook RocksDB engineers. OpenAI acquired it in June 2024 for retrieval infrastructure and shut down the public service on 30 Sept 2024, an AI acquihire that ended a database product."
resource: https://venturebeat.com/ai/openai-acquires-rockset-to-strengthen-its-retrieval-capabilities
tags: [olap, real-time, rocksdb, acquisition, ai-acquihire, shutdown]
kind: cloud-service
first_release: 2019
org: "Rockset, Inc. (acquired by OpenAI, 2024)"
outcome: dead
ideas: [ideas/analytics-lakehouse/real-time-olap]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: rockset-vb
    resource: https://venturebeat.com/ai/openai-acquires-rockset-to-strengthen-its-retrieval-capabilities
    title: "VentureBeat: OpenAI acquires Rockset (2024-06-21)"
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Rockset (founded 2016, about $105M raised from Sequoia, Greylock and others) offered SQL over semi-structured data with sub-second latency. It indexed every field in a row index, a column index and an inverted index ("converged indexing") on RocksDB-Cloud, and ingested from Kafka, DynamoDB and MongoDB CDC streams[^rockset-vb]. In 2023 it added vector search[^pavlo-2023]. On 2024-06-21 OpenAI announced it was acquiring Rockset to power retrieval infrastructure across its products. Customers had to move off by 2024-09-30[^rockset-vb][^pavlo-2024].

# Timeline

| Year | Event |
|---|---|
| 2016 | Founded |
| 2019 | Service launched |
| 2023 | Vector search added[^pavlo-2023] |
| 2024 | Acquired by OpenAI (June 21); service shut down Sept 30[^rockset-vb][^pavlo-2024] |

# What worked

- Its technology and team were good enough that a leading AI lab bought them for its core retrieval stack.

# What didn't

- As a closed, cloud-only database it competed against free open-source engines (ClickHouse, Druid, Pinot) and never broke out commercially. Its customers lost the product with three months' notice.

# Related

- [Real-time OLAP](/ideas/analytics-lakehouse/real-time-olap.md) · [RocksDB](/systems/rocksdb.md) · [OpenAI acquires Rockset](/events/2024-06-openai-acquires-rockset.md)
