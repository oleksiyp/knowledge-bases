---
type: Event
title: InfluxData closes cloud regions and deletes customer data
description: InfluxData discontinued its AWS Sydney and GCP Belgium Cloud regions
  on June 30, 2023. Some active customers had not migrated before deletion. Its CTO
  acknowledged communication failures. The July 14 update reported recovery of Belgium
  time-series data; Sydney data remained unavailable.
date: '2023-06-30'
year: 2023
kind: shutdown
signal: negative
ideas:
- ideas/nosql-models/time-series-databases
systems:
- systems/influxdb
status: stable
generated:
  by: codex
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  resource: https://www.influxdata.com/blog/update-from-influxdata-paul-dix-july-10/
  title: InfluxData CTO statement and recovery updates
---

# What happened

InfluxData discontinued its AWS Sydney and GCP Belgium Cloud regions on June 30, 2023. Some active customers had not migrated before deletion. Its CTO acknowledged communication failures. The July 14 update reported recovery of Belgium time-series data; Sydney data remained unavailable.[^announcement]

# Why it matters

This was a managed-service lifecycle failure, distinct from the storage engine's query performance. Notices sent to account contacts did not ensure that every active workload had a completed migration. The practical lesson is to validate customer exits and retain recoverable data before a region is destroyed.

The asymmetric recovery also matters: describing all data as permanently lost would overstate the incident, while describing it as a routine planned shutdown would omit the harm. The episode shows why operational trust belongs in an evaluation of database success, alongside benchmarks and feature releases.

# Related

- [influxdb](/systems/influxdb.md)
- [time series databases](/ideas/nosql-models/time-series-databases.md)
