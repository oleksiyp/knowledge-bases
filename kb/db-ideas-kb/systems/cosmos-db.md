---
type: System
title: Azure Cosmos DB
description: "Microsoft's globally distributed, multi-API NoSQL service (2017). It offers its own document API plus MongoDB, Cassandra, Gremlin and Table APIs over one partitioned engine with five consistency levels. By 2025 the separate vCore MongoDB offering used a Postgres-based engine (Azure DocumentDB) and put Cosmos DB into Fabric."
resource: https://azure.microsoft.com/en-us/products/cosmos-db
tags: [multi-model, document, global-distribution, cloud-service, wire-compatibility]
kind: cloud-service
first_release: 2017
org: "Microsoft"
license: proprietary
outcome: stable
ideas: [ideas/nosql-models/multi-model-databases, ideas/nosql-models/document-databases, ideas/nosql-models/wide-column-stores]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ignite25
    resource: https://devblogs.microsoft.com/cosmosdb/announced-at-ignite-2025-azure-documentdb-mcp-toolkit-fleet-analytics-and-more/
    title: "Azure Cosmos DB blog: Announced at Ignite 2025"
    author: org:microsoft
  - id: build25
    resource: https://devblogs.microsoft.com/cosmosdb/announced-at-build-2025-foundry-connection-for-azure-cosmos-db-global-secondary-index-full-text-search-and-more/
    title: "Azure Cosmos DB blog: Announced at Build 2025"
    author: org:microsoft
  - id: reg-ms
    resource: https://www.theregister.com/2025/01/27/microsoft_builds_open_source_document/
    title: "The Register: Microsoft builds open source document database on PostgreSQL (2025-01-27)"
    author: org:the-register
---

# Summary

Cosmos DB, launched in 2017 from the earlier DocumentDB service, is a major managed multi-API database. The model is multi-API on one engine, not one query language for all models. It offered turnkey multi-region writes, SLAs on latency, and five consistency levels between strong and eventual. Over 2018–2026 Microsoft added serverless and autoscale, vector and full-text search, and global secondary indexes (Build 2025)[^build25]. The MongoDB story changed shape. The vCore MongoDB offering ran on Postgres plus the DocumentDB extensions, which Microsoft open-sourced in 2025[^reg-ms]. In November 2025 it was renamed Azure DocumentDB, while Cosmos DB became generally available inside Microsoft Fabric[^ignite25].

# Timeline

| Year | Event |
|---|---|
| 2017 | Cosmos DB launched (successor to Azure DocumentDB) |
| 2022 | Cosmos DB for PostgreSQL (Citus) |
| 2025 | DocumentDB engine open-sourced (Jan)[^reg-ms]; GSI and full-text (May)[^build25]; vCore Mongo renamed Azure DocumentDB; Cosmos DB in Fabric GA (Nov)[^ignite25] |

# What worked

- Wire compatibility with popular APIs as a migration path to a managed global service.
- Strong ties to Azure's AI stack (vector search, Foundry integration)[^build25].

# What didn't

- API compatibility is not identity of semantics, performance or pricing. A migration needs workload-level validation.
- The vCore offering's rename does not mean every Cosmos DB MongoDB workload moved to PostgreSQL: the RU-based and vCore services are distinct. The narrower lesson is that Microsoft used more than one underlying architecture for document workloads.[^ignite25]

# Related

- [Multi-model databases](/ideas/nosql-models/multi-model-databases.md), [Document databases](/ideas/nosql-models/document-databases.md)
- [DocumentDB](/systems/documentdb.md), [DynamoDB](/systems/dynamodb.md), [Microsoft Fabric](/systems/microsoft-fabric.md)
