---
type: System
title: Microsoft Fabric
description: "Microsoft's SaaS analytics platform (announced May 2023, GA Nov 2023) that replaced the Synapse PaaS collection with one lake (OneLake) in Delta-Parquet. It reached 35,000 paid customers by April 2026, a distribution-driven success."
resource: https://www.microsoft.com/microsoft-fabric
tags: [lakehouse, data-warehouse, saas, delta-lake, power-bi, azure]
kind: cloud-service
first_release: 2023
org: "Microsoft"
outcome: growing
ideas: [ideas/analytics-lakehouse/lakehouse, ideas/analytics-lakehouse/cloud-data-warehouses]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: fabric-ga
    resource: https://www.jamesserra.com/archive/2023/11/microsoft-fabric-is-now-ga/
    title: "James Serra: Microsoft Fabric is now GA (Nov 2023)"
  - id: fabric-ignite
    resource: https://msdynamicsworld.com/story/ignite-2023-microsoft-announces-general-availability-fabric
    title: "MSDW: Ignite 2023 — Microsoft announces GA of Fabric"
  - id: msft-fy26q3
    resource: https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3
    title: "Microsoft FY26 Q3 earnings call (2026-04-29)"
---

# Summary

Fabric is Microsoft's reset of its analytics portfolio. Azure Synapse Analytics (2019–2020) had combined a dedicated SQL pool (from SQL DW/PDW), Spark and pipelines into a PaaS that customers found complex. Fabric, announced at Build in May 2023 and GA at Ignite in November 2023, rebuilt it as SaaS. A single tenant-wide lake, OneLake, stores everything in Delta-Parquet, and data engineering, warehousing, real-time analytics and Power BI run as experiences over it[^fabric-ga][^fabric-ignite]. Microsoft reported 35,000 paid Fabric customers, up 60% year over year, and nearly 4× growth in OneLake data on 2026-04-29[^msft-fy26q3].

# Timeline

| Year | Event |
|---|---|
| 2019–2020 | Azure Synapse Analytics announced and GA |
| 2023 | Fabric announced (May), GA (Nov)[^fabric-ga] |
| 2024–2025 | Delta tables also exposed as Iceberg; mirroring of external databases |
| 2026 | 35,000 paid customers[^msft-fy26q3] |

# What worked

- Bundling with Power BI capacity and Microsoft enterprise agreements drove adoption, the strongest example in this area of distribution beating architecture.
- Standardising on open Delta-Parquet in one lake simplified the Synapse sprawl.

# What didn't

- Synapse customers faced a platform change about four years after Synapse GA.
- Practitioners reported early maturity gaps (capacity-based billing confusion, feature parity), and the reputation lagged the revenue (anecdotal; no hard data found).

# Related

- [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md) · [Cloud data warehouses](/ideas/analytics-lakehouse/cloud-data-warehouses.md)
- [Delta Lake](/systems/delta-lake.md) · [Fabric announced](/events/2023-05-microsoft-fabric-announced.md)
