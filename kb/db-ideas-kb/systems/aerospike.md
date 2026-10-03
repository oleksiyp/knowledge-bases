---
type: System
title: Aerospike
description: "Hybrid-memory (RAM index, flash data) key-value and multi-model database used for ad-tech, fraud and payments at very low latency. A rare independent NoSQL vendor that stayed private and growing: $109M from Sumeru Equity in 2024 and strictly serializable distributed ACID transactions in Aerospike 8 (Feb 2025)."
resource: https://aerospike.com
tags: [key-value, nosql, flash, real-time, multi-model, private-equity]
kind: product
first_release: 2012
org: "Aerospike, Inc. (founded 2009 as Citrusleaf)"
license: "AGPL-3.0 (Community Edition); proprietary Enterprise Edition"
outcome: stable
ideas: [ideas/business-licensing/funding-boom-and-consolidation, ideas/business-licensing/managed-service-is-the-business]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tc-aero
    resource: https://techcrunch.com/2024/04/04/aerospike-raises-100m-for-its-real-time-database-platform-to-capitalize-on-the-ai-boom/
    title: "TechCrunch: Aerospike raises $109M for its real-time database platform (2024-04-04)"
  - id: gnw-aero
    resource: https://www.globenewswire.com/news-release/2024/04/04/2857562/0/en/Aerospike-Closes-109M-in-Growth-Capital-from-Sumeru-Equity-Partners.html
    title: "Aerospike closes $109M in growth capital from Sumeru Equity Partners (2024-04-04)"
  - id: aero8
    resource: https://www.globenewswire.com/news-release/2025/02/05/3021000/0/en/Aerospike-8-Delivers-The-First-Real-Time-Distributed-ACID-Transaction-Database-With-High-Performance-at-Scale.html
    title: "Aerospike 8 delivers real-time distributed ACID transactions (2025-02-05)"
  - id: reg-aero8
    resource: https://www.theregister.com/2025/02/13/aerospike_acid_transactions/
    title: "The Register: Analysts welcome ACID transactions on Aerospike (2025-02-13)"
---

# Summary

Aerospike is a distributed key-value database designed around flash: indexes in RAM, records on SSD, with predictable sub-millisecond latency at high throughput. It is used in ad-tech, fraud detection, telecom and payments (customers named in 2024 included Airtel, TransUnion, Snap, Yahoo, PayPal, Barclays and Flipkart).[^tc-aero][^gnw-aero] Commercially it took a different path from the 2021 unicorns. It did not raise a giant round at the peak. In April 2024 it raised $109M from Sumeru Equity Partners, its first round since 2019, and pitched itself into AI workloads with vector and graph features.[^tc-aero] In February 2025 Aerospike 8 added distributed ACID transactions with strict serializability, aimed at OLTP use beyond caching. Analysts saw it as overcoming a "significant challenge" for distributed NoSQL.[^aero8][^reg-aero8]

# Timeline

| Year | Event |
|---|---|
| 2009 | Founded as Citrusleaf |
| 2022 | Document (JSON) support added[^tc-aero] |
| 2024 | $109M growth round led by Sumeru (Apr)[^gnw-aero] |
| 2025 | Aerospike 8 with distributed ACID transactions (Feb 5)[^aero8] |

# What worked

- A clear performance-per-dollar niche (flash-optimized storage) that hyperscaler services did not directly copy.
- Capital efficiency: growth equity rather than a 2021 mega-round, so no forced exit.

# What didn't

- Remains niche outside latency-critical industries; multi-model and vector features compete with many larger platforms.
- No public revenue figures, so commercial momentum cannot be verified.

# Related

- [Funding boom and consolidation](/ideas/business-licensing/funding-boom-and-consolidation.md)
- [Redis](/systems/redis.md), [ScyllaDB](/systems/scylladb.md), [DynamoDB](/systems/dynamodb.md)

[^tc-aero]: TechCrunch, 2024-04-04.
[^gnw-aero]: GlobeNewswire, 2024-04-04.
[^aero8]: GlobeNewswire, 2025-02-05.
[^reg-aero8]: The Register, 2025-02-13.
