---
type: Idea
title: "Kafka as the central log of the enterprise"
description: "A durable, replayable, partitioned log (Apache Kafka) as the backbone that every system writes to and reads from. It won decisively as technology: Kafka is the default event backbone in large companies. The business built on it did less well: Confluent IPO'd at $36 in 2021 and sold to IBM at $31 in 2025."
tags: [streaming, kafka, log, event-streaming, messaging, confluent]
area: streaming-messaging
verdict: won
hype_peak: 2021
adoption_2026: mainstream
origins: "Built at LinkedIn around 2010–2011 (Kreps, Narkhede, Rao); Jay Kreps' 2013 essay 'The Log'; Confluent founded 2014."
key_systems: [systems/apache-kafka, systems/confluent, systems/redpanda, systems/warpstream, systems/amazon-kinesis]
related_ideas: [ideas/streaming-messaging/kafka-protocol-as-standard, ideas/streaming-messaging/kraft-removing-zookeeper, ideas/streaming-messaging/diskless-kafka-on-object-storage, ideas/streaming-messaging/event-sourcing-and-database-inside-out, ideas/streaming-messaging/cdc-as-integration-backbone, ideas/business-licensing/source-available-licenses, ideas/business-licensing/database-company-ipos, ideas/business-licensing/hyperscalers-capture-dbms-market]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: kafka-home
    resource: https://kafka.apache.org/
    title: "Apache Kafka home page (adoption claims)"
    author: org:apache
  - id: cnbc-ipo
    resource: https://www.cnbc.com/2021/06/24/confluent-climbs-26percent-after-raising-828-million-in-ipo.html
    title: "CNBC: Confluent climbs 25% in Nasdaq debut after raising over $800 million in IPO (2021-06-24)"
  - id: ibm-cflt
    resource: https://newsroom.ibm.com/2025-12-08-ibm-to-acquire-confluent-to-create-smart-data-platform-for-enterprise-generative-ai
    title: "IBM to Acquire Confluent (2025-12-08)"
    author: org:ibm
  - id: yahoo-close
    resource: https://finance.yahoo.com/news/ibm-completes-11bn-confluent-acquisition-101728540.html
    title: "IBM completes $11bn Confluent acquisition"
  - id: sa-sale
    resource: https://siliconangle.com/2025/10/08/data-streaming-provider-confluent-reportedly-exploring-sale/
    title: "SiliconANGLE: Data streaming provider Confluent reportedly exploring a sale (2025-10-08)"
  - id: cflt-wiki
    resource: https://en.wikipedia.org/wiki/Confluent
    title: "Confluent — Wikipedia (financials)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: waehner-q3-2026
    resource: https://www.kai-waehner.de/blog/2026/09/21/data-streaming-trends-q3-2026-what-changes-through-2027/
    title: "Kai Waehner: Data Streaming Trends Q3 2026"
    author: person:kai-waehner
  - id: sdx-kreps
    resource: https://www.sdxcentral.com/news/ibm-in-new-software-blow-as-confluent-ceo-exits/
    title: "SDxCentral: IBM in new software blow as Confluent CEO exits (2026)"
  - id: kleppmann-2019
    resource: https://martin.kleppmann.com/2019/05/13/kafka-summit.html
    title: "Martin Kleppmann: Is Kafka a Database? (Kafka Summit London keynote, 2019)"
    author: person:martin-kleppmann
  - id: infoq-ccl
    resource: https://www.infoq.com/news/2018/12/confluent-license-changes/
    title: "InfoQ: License Changes for Confluent Platform Restricting Cloud Vendor Usage (Dec 2018)"
    author: org:infoq
  - id: kora-vldb
    resource: https://vldb.org/pvldb/vol16/p3822-povzner.pdf
    title: "Povzner et al.: Kora: A Cloud-Native Event Streaming Platform for Kafka (VLDB 2023)"
---

# Summary

**Verdict: won (as technology); mixed (as a standalone business).** Between 2018 and 2026 Apache Kafka became the default way large organizations move events between systems. The project claims use at more than 80% of the Fortune 100[^kafka-home]. Every hyperscaler sells a managed Kafka, and newer competitors copy its wire protocol instead of replacing it. The company built around it had a harder time. Confluent IPO'd in June 2021 at $36 a share[^cnbc-ipo] and sold to IBM in December 2025 for $31 a share, an $11B enterprise value[^ibm-cflt]. The deal closed on March 17, 2026[^yahoo-close]. The log won. Owning the log as an independent vendor was squeezed by hyperscalers, cheap Kafka-compatible rivals, and object-storage economics.

# The idea

Every change in a business is written as an event to a durable, ordered, partitioned, replicated log. The log is retained for days or forever. Every downstream system (search indexes, caches, warehouses, microservices, ML features) builds its own view by consuming the log at its own pace and can rebuild by replaying it. Jay Kreps' 2013 essay "The Log" and Martin Kleppmann's "turning the database inside out" talks made this the intellectual case. Kleppmann's 2019 keynote "Is Kafka a Database?" pushed it furthest: Kafka has durability and replication but no data model, indexes or queries, yet it could be the base for ACID-like guarantees across systems[^kleppmann-2019].

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | AWS announces Amazon MSK. Confluent moves KSQL, Schema Registry and connectors to the Confluent Community License, which blocks cloud providers from reselling them; Kafka itself stays Apache 2.0[^infoq-ccl] | mixed |
| 2018 | Azure Event Hubs ships a Kafka-protocol endpoint (GA Nov 2018) | + |
| 2019 | KIP-500 proposes removing ZooKeeper | + |
| 2021 | Confluent IPO: $828M raised at $36/share, ~$11.4B value after the first day[^cnbc-ipo] | + |
| 2023 | Kora paper (Confluent Cloud's engine) wins VLDB Best Industry Paper. It describes tens of thousands of clusters in 70+ regions[^kora-vldb] | + |
| 2023–24 | WarpStream, AutoMQ and Bufstream offer cheaper Kafka-compatible logs on S3 | − for Confluent |
| 2024 | Confluent FY2024 revenue $963M, net loss $345M[^cflt-wiki] | mixed |
| 2025 | Kafka 4.0 removes ZooKeeper (Mar). An "AI-native customer" replaces Confluent with in-house software and the stock drops 20%+ (Jul–Aug)[^sa-sale] | − |
| 2025 | IBM agrees to buy Confluent for $31/share, $11B (Dec 8)[^ibm-cflt] | mixed |
| 2026 | Deal closes (Mar 17). KIP-1150 diskless topics accepted (Mar). Jay Kreps steps back; Shaun Clowes runs Confluent inside IBM (Aug)[^sdx-kreps] | mixed |

# What succeeded

- **Ubiquity.** Kafka is the default event backbone in banking, retail, telecom and manufacturing[^kafka-home]. The surrounding ecosystem (Kafka Connect, Schema Registry, Debezium, Flink, Kafka Streams) made it the integration layer for most data platforms.
- **Protocol as standard.** Competitors (Redpanda, WarpStream, AutoMQ, Event Hubs, StreamNative) implement the Kafka API rather than invent a new one. Waehner's Q3 2026 summary: "the Kafka protocol won the interoperability layer"[^waehner-q3-2026]. See [Kafka protocol as standard](/ideas/streaming-messaging/kafka-protocol-as-standard.md).
- **The project kept evolving.** KRaft, tiered storage, the new consumer rebalance protocol, queues (share groups) and the accepted diskless-topics KIP all shipped or were approved in Apache Kafka itself. None of them required a fork.
- **Grassroots open source to a big exit.** Pavlo calls Confluent "the archetype of how to make a company out of a grassroots open-source project"[^pavlo-2025].

# What failed

- **"Kafka as the database."** Few companies made the log their system of record. Kafka has no indexes, no ad-hoc queries, weak transaction semantics across clients (see Jepsen's Bufstream report), and costly retention until tiered storage. The usual pattern in 2026 is still: the OLTP database is the source of truth, CDC publishes it to Kafka, and the warehouse or lakehouse holds history. See [event sourcing and the database inside out](/ideas/streaming-messaging/event-sourcing-and-database-inside-out.md).
- **Confluent as an independent company.** It never reached GAAP profitability as a public company and sold below its IPO price. Kreps left five months after the deal closed[^sdx-kreps].
- **License defence.** The 2018 Community License did not stop AWS MSK, Azure Event Hubs or Google's managed Kafka (GA Nov 2024). Those services run Apache Kafka or reimplement the protocol and never needed Confluent's add-ons[^infoq-ccl].

# Why

1. **Network effects around the protocol and clients.** Once thousands of applications, connectors and tools spoke the Kafka protocol, the cheapest way to compete was compatibility. This protected Kafka the protocol, but it made Kafka the product interchangeable.
2. **Cloud economics changed the cost model.** Kafka's design (replicated local disks, leader-based replication across availability zones) was built for data centres. On AWS, cross-AZ traffic often dominated the bill. That opened the door to S3-based designs (WarpStream 2023) that Confluent first had to copy (Freight clusters, 2024) and then buy (WarpStream, Sept 2024).
3. **Hyperscaler bundling.** MSK, Event Hubs and Google Managed Kafka sell "good enough" Kafka next to the customer's other cloud spend. Confluent's answer was to move up the stack (Flink, Tableflow, governance, connectors). That is where Waehner says lock-in now lives[^waehner-q3-2026].
4. **AI-native customers build their own.** The 2025 customer loss that started the sale process shows that the largest, most technical buyers will bring streaming in-house when costs get big enough[^sa-sale].

# Lessons

- A protocol can win even when its main vendor does not. Compatibility is the competitive weapon, and it also commoditizes the original.
- Infrastructure designed for on-prem cost structures is vulnerable when cloud pricing (cross-AZ egress, object storage) changes what is cheap.
- "X as the database" claims for a log usually stall on queries, indexes and schema evolution. The log works best as transport and history, not as the system of record.

# Related

- Systems: [Apache Kafka](/systems/apache-kafka.md), [Confluent](/systems/confluent.md), [Redpanda](/systems/redpanda.md), [WarpStream](/systems/warpstream.md), [Amazon Kinesis](/systems/amazon-kinesis.md)
- Events: [Confluent IPO](/events/2021-06-confluent-ipo.md), [IBM to acquire Confluent](/events/2025-12-ibm-to-acquire-confluent.md), [Kafka 4.0 removes ZooKeeper](/events/2025-03-kafka-4-0-removes-zookeeper.md)
- Paper: [Kora (VLDB 2023)](/papers/2023-kora-cloud-native-kafka.md)
- Ideas: [Diskless Kafka](/ideas/streaming-messaging/diskless-kafka-on-object-storage.md), [CDC as backbone](/ideas/streaming-messaging/cdc-as-integration-backbone.md), [Source-available licenses](/ideas/business-licensing/source-available-licenses.md)
- Business: [Database company IPOs](/ideas/business-licensing/database-company-ipos.md), [Hyperscalers capture the DBMS market](/ideas/business-licensing/hyperscalers-capture-dbms-market.md)
