---
type: System
title: Confluent
description: "Company founded by Kafka's creators to commercialize it (Confluent Platform, Confluent Cloud on the Kora engine, managed Flink, Tableflow, WarpStream BYOC). IPO'd in 2021 at $36/share; acquired by IBM for $31/share ($11B) in a deal closed March 2026."
resource: https://www.confluent.io
tags: [kafka, streaming, cloud-service, company, flink, ibm]
kind: product
first_release: 2014
org: "Confluent, Inc. (acquired by IBM, closed 2026-03-17)"
license: "Proprietary (Confluent Community License for some components; Apache Kafka is Apache-2.0)"
outcome: acquired
ideas: [ideas/streaming-messaging/kafka-as-central-log, ideas/streaming-messaging/diskless-kafka-on-object-storage, ideas/streaming-messaging/stream-processing-engines-consolidate-on-flink, ideas/streaming-messaging/streams-as-lakehouse-tables, ideas/streaming-messaging/tiered-storage-for-streams, ideas/business-licensing/source-available-licenses]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: infoq-ccl
    resource: https://www.infoq.com/news/2018/12/confluent-license-changes/
    title: "InfoQ: License changes for Confluent Platform (Dec 2018)"
    author: org:infoq
  - id: cnbc-ipo
    resource: https://www.cnbc.com/2021/06/24/confluent-climbs-26percent-after-raising-828-million-in-ipo.html
    title: "CNBC: Confluent IPO (2021-06-24)"
  - id: immerok
    resource: https://investors.confluent.io/news-releases/news-release-details/confluent-announces-intent-acquire-immerok-accelerate
    title: "Confluent announces intent to acquire Immerok (2023-01-06)"
    author: org:confluent
  - id: kora-award
    resource: https://www.confluent.io/blog/cloud-native-kafka-kora-vldb-award/
    title: "Confluent: Kora wins Best Industry Paper at VLDB 2023"
    author: org:confluent
  - id: tc-ws
    resource: https://techcrunch.com/2024/09/09/confluent-acquires-streaming-data-startup-warpstream/
    title: "TechCrunch: Confluent acquires WarpStream (2024-09-09)"
  - id: cflt-wiki
    resource: https://en.wikipedia.org/wiki/Confluent
    title: "Confluent — Wikipedia"
  - id: sa-sale
    resource: https://siliconangle.com/2025/10/08/data-streaming-provider-confluent-reportedly-exploring-sale/
    title: "SiliconANGLE: Confluent reportedly exploring a sale (2025-10-08)"
  - id: ibm-cflt
    resource: https://newsroom.ibm.com/2025-12-08-ibm-to-acquire-confluent-to-create-smart-data-platform-for-enterprise-generative-ai
    title: "IBM to Acquire Confluent (2025-12-08)"
    author: org:ibm
  - id: sdx-kreps
    resource: https://www.sdxcentral.com/news/ibm-in-new-software-blow-as-confluent-ceo-exits/
    title: "SDxCentral: Confluent CEO exits (2026)"
  - id: tableflow-ga
    resource: https://www.confluent.io/press-release/confluent-announces-tableflow-general-availability/
    title: "Confluent announces GA of Tableflow (2025-03-19)"
    author: org:confluent
---

# Summary

Confluent was founded in September 2014 by Jay Kreps, Neha Narkhede and Jun Rao[^cflt-wiki]. It was the main commercial steward of Kafka and the reference "open-source to IPO" company of the period. Its cloud service runs on Kora, a cloud-native Kafka engine with tens of thousands of clusters, described in a VLDB 2023 Best Industry Paper[^kora-award]. Its strategy moved up the stack: managed Flink (Immerok, 2023[^immerok]), Tableflow (Iceberg GA Mar 2025[^tableflow-ga]), and BYOC through WarpStream (2024[^tc-ws]). Growth slowed and an AI-native customer moved in-house in 2025[^sa-sale]. IBM bought the company at $31/share, below the $36 IPO price[^ibm-cflt][^cnbc-ipo].

# Timeline

| Date | Event |
|---|---|
| 2018-12 | Confluent Community License for KSQL, Schema Registry, REST Proxy and connectors[^infoq-ccl] |
| 2021-06-24 | IPO: $828M raised at $36/share[^cnbc-ipo] |
| 2023-01 | Acquires Immerok (Flink)[^immerok] |
| 2023-08 | Kora paper wins VLDB Best Industry Paper[^kora-award] |
| 2024 | Freight clusters (direct-to-S3); acquires WarpStream (Sept)[^tc-ws] |
| 2024 | FY revenue $963M, net loss $345M[^cflt-wiki] |
| 2025-03 | Tableflow GA (Iceberg)[^tableflow-ga] |
| 2025-12-08 | IBM agrees to acquire for $11B[^ibm-cflt] |
| 2026-03-17 | Deal closes; Aug 2026 Kreps steps back, Shaun Clowes leads Confluent at IBM[^sdx-kreps] |

# What worked

- Turned an open-source project into a business with about $1B in annual revenue.
- Confluent Cloud (Kora) showed that a multi-tenant cloud-native Kafka could run at scale.
- Early read on market shifts: Flink, diskless and Iceberg were all adopted or bought within 1–2 years of becoming important.

# What didn't

- No GAAP profitability as an independent public company. Exit price below IPO price.
- The Community License did not stop AWS, Azure or Google from offering Kafka.
- Lost cost leadership to S3-native startups and had to buy one (WarpStream).
- ksqlDB was effectively abandoned after the Flink pivot.

# Related

- [Apache Kafka](/systems/apache-kafka.md), [WarpStream](/systems/warpstream.md), [ksqlDB](/systems/ksqldb.md), [Apache Flink](/systems/apache-flink.md)
- [Confluent IPO](/events/2021-06-confluent-ipo.md), [IBM to acquire Confluent](/events/2025-12-ibm-to-acquire-confluent.md), [Confluent acquires WarpStream](/events/2024-09-confluent-acquires-warpstream.md)
