---
type: Event
title: "Confluent introduces the Confluent Community License"
description: "On 14 Dec 2018 Confluent moved KSQL and some Confluent Platform components from Apache 2.0 to the Confluent Community License, which bars offering them as a competing SaaS. Apache Kafka itself was unaffected."
date: 2018-12-14
year: 2018
kind: license-change
signal: mixed
ideas: [ideas/business-licensing/source-available-licenses]
systems: [systems/confluent, systems/ksqldb, systems/apache-kafka]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ccl-blog
    resource: "https://www.confluent.io/blog/license-changes-confluent-platform/"
    title: "Confluent: License changes for Confluent Platform (2018-12-14)"
  - id: infoq-ccl
    resource: "https://www.infoq.com/news/2018/12/confluent-license-changes/"
    title: "InfoQ: License changes for Confluent Platform restricting cloud vendor usage (Dec 2018)"
---

# What happened

Confluent announced that KSQL, its REST proxy, Schema Registry and some connectors would move from Apache 2.0 to the new Confluent Community License.[^ccl-blog] Users could download, modify and embed the software, including in their own SaaS products. What they could not do was offer, in Jay Kreps' words, "a KSQL-as-a-service offering" that competes with Confluent.[^infoq-ccl] Apache Kafka stayed Apache-licensed under the ASF.

# Why it matters

It showed the "protect the add-ons, leave the core in a foundation" version of the source-available strategy. It drew little backlash because Kafka itself was untouched. The real defense turned out to be Confluent Cloud, which reached about 56% of subscription revenue by 2025. ksqlDB later faded against Flink.

# Related

- [Source-available licenses](/ideas/business-licensing/source-available-licenses.md) · [Confluent](/systems/confluent.md) · [Confluent IPO](/events/2021-06-confluent-ipo.md)

[^ccl-blog]: Confluent: License changes for Confluent Platform (2018-12-14).
[^infoq-ccl]: InfoQ: License changes for Confluent Platform restricting cloud vendor usage (Dec 2018).
