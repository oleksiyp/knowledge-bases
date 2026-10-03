---
type: Event
title: "SAP completes acquisition of Dremio"
description: "SAP agreed on 2026-05-04 to buy Dremio, the Iceberg-native lakehouse company behind major contributions to Apache Arrow, Iceberg and Polaris, and closed the deal on 2026-07-06 (terms undisclosed)."
event_kind: acquisition
date: 2026-07-06
window: W3
impact: mixed
projects: [projects/data-engineering/apache-iceberg, projects/data-engineering/apache-polaris, projects/data-engineering/apache-arrow]
organizations: []
tags: [data-engineering, lakehouse, iceberg, acquisition]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sap-dremio-close
    resource: https://news.sap.com/2026/07/sap-completes-dremio-acquisition/
    title: "SAP News: SAP Completes Acquisition of Dremio (2026-07-06)"
    author: org:sap
  - id: sap-dremio-announce
    resource: https://news.sap.com/2026/05/sap-to-acquire-dremio-unify-sap-and-non-sap-data-power-agentic-ai/
    title: "SAP News: SAP to Acquire Dremio to Unify SAP and Non-SAP Data to Power Agentic AI (2026-05-04)"
    author: org:sap
  - id: dremio-blog
    resource: https://www.dremio.com/blog/sap-intends-to-acquire-dremio/
    title: "Dremio blog: SAP Intends to Acquire Dremio (2026-05)"
    author: org:dremio
  - id: reg-sap-dremio
    resource: https://www.theregister.com/software/2026/05/05/sap-dives-deeper-into-iceberg-with-dremio-acquisition/5226560
    title: "The Register: SAP dives deeper into Iceberg with Dremio acquisition (2026-05-05)"
    author: org:the-register
---

# What happened
On 4 May 2026 SAP announced an agreement to acquire Dremio, an "Iceberg-native" data lakehouse. The deal was subject to regulatory approval and expected to close in Q3 2026[^sap-dremio-announce][^dremio-blog][^reg-sap-dremio]. SAP completed the acquisition on 6 July 2026. Financial terms were not disclosed[^sap-dremio-close]. SAP Business Data Cloud is to become an Apache Iceberg-native lakehouse that queries SAP and non-SAP data without moving or converting it[^sap-dremio-announce].

# Why it matters
Dremio is a major corporate contributor to Apache Arrow and Apache Iceberg, and co-created Apache Polaris. Under SAP, a big enterprise-application vendor now has a direct stake in open table formats. Whether Dremio keeps the same level of upstream contribution is the open question for the OSS projects.

# Outcome so far
The deal closed ahead of the Q3 target. No change to Dremio's upstream Apache commitments has been announced as of 2026-10-03.

# Related
- [Apache Iceberg](/projects/data-engineering/apache-iceberg.md), [Apache Polaris](/projects/data-engineering/apache-polaris.md), [Apache Arrow](/projects/data-engineering/apache-arrow.md), [SAP invests in n8n](/events/2026-05-sap-invests-in-n8n.md)

[^sap-dremio-close]: SAP News, 2026-07-06.
[^sap-dremio-announce]: SAP News, 2026-05-04.
[^dremio-blog]: Dremio blog, 2026-05.
[^reg-sap-dremio]: The Register, 2026-05-05.
