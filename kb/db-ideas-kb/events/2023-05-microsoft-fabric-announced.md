---
type: Event
title: "Microsoft announces Fabric (GA November 2023)"
description: "At Build 2023 Microsoft announced Fabric, a SaaS analytics platform on a single Delta-Parquet lake (OneLake) that replaced the Synapse PaaS collection. It went GA at Ignite in November 2023 and had 35,000 paid customers by April 2026."
date: 2023-05-23
year: 2023
kind: launch
signal: positive
ideas: [ideas/analytics-lakehouse/lakehouse, ideas/analytics-lakehouse/cloud-data-warehouses]
systems: [systems/microsoft-fabric, systems/delta-lake]
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

# What happened

Microsoft announced Fabric at Build in May 2023 (public preview) and made it generally available at Ignite in November 2023[^fabric-ga][^fabric-ignite]. Fabric unifies data engineering, warehousing, real-time analytics, data science and Power BI over OneLake, a tenant-wide lake that stores tables in open Delta-Parquet.

# Why it matters

The third hyperscaler adopted the lakehouse architecture and an open table format as its flagship, and quietly retired Synapse as the strategic product. Microsoft reported 35,000 paid customers (+60% year over year) by April 2026[^msft-fy26q3], showing how bundling with Power BI and enterprise agreements can outweigh technical leadership.

# Related

- [Microsoft Fabric](/systems/microsoft-fabric.md) · [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md)
