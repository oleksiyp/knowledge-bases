---
type: Event
title: "Databricks claims TPC-DS 100TB record; public benchmark war with Snowflake"
description: "Databricks announced its Photon-based SQL engine had set a 100TB TPC-DS world record. Snowflake replied that Databricks had run Snowflake incorrectly and that Snowflake was faster, and the two traded blog posts. The episode marked the lakehouse's arrival as a direct warehouse competitor."
date: 2021-11-02
year: 2021
kind: launch
signal: mixed
ideas: [ideas/analytics-lakehouse/lakehouse, ideas/analytics-lakehouse/cloud-data-warehouses]
systems: [systems/databricks, systems/snowflake, systems/photon]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2021
    resource: https://www.cs.cmu.edu/~pavlo/blog/2021/12/2021-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2021: A Year in Review"
    author: person:andy-pavlo
---

# What happened

On 2021-11-02 Databricks announced that its SQL engine (Photon) set "a new world record in 100TB TPC-DS". Snowflake responded that Databricks had run the Snowflake comparison incorrectly and that Snowflake was faster. Databricks then asserted "superior execution and price performance over Snowflake"[^pavlo-2021].

# Why it matters

It was the public moment when Databricks positioned the lakehouse as a warehouse replacement rather than a Spark/ML platform. The benchmark changed little in practice. Both companies kept growing, and buyers chose on ecosystem, simplicity and pricing. It is a reminder that vendor benchmarks rarely decide database markets.

# Related

- [Databricks](/systems/databricks.md) · [Snowflake](/systems/snowflake.md) · [Lakehouse](/ideas/analytics-lakehouse/lakehouse.md) · [Cloud data warehouses](/ideas/analytics-lakehouse/cloud-data-warehouses.md)
