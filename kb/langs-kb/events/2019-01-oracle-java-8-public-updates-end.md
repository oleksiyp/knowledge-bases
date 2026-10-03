---
type: Event
title: Oracle ends free public Java 8 updates for commercial users
description: "Oracle's January 2019 Critical Patch Update (8u201/8u202) was the last Java 8 build free for commercial production use. From April 2019 Oracle JDK moved to the OTN licence, which requires a paid subscription for production use. The change set off a mass move to third-party OpenJDK builds."
event_kind: policy
date: 2019-01-15
era: E1
impact: negative
languages: [languages/java, languages/kotlin]
runtimes: [runtimes/hotspot-openjdk]
ideas: []
tags: [java, oracle, licensing, openjdk, adoptium, corretto]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: oracle-faq
    resource: https://blogs.oracle.com/java/oracle-java-se-releases-faq
    title: "Oracle Java Blog: Oracle Java SE Releases FAQ"
    author: org:oracle
  - id: oracle-roadmap
    resource: https://www.oracle.com/java/technologies/java-se-support-roadmap.html
    title: "Oracle Java SE Support Roadmap"
    author: org:oracle
  - id: nr-2024
    resource: https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
    title: "New Relic: 2024 State of the Java Ecosystem"
---

# What happened
Java SE 8 reached the end of free public updates for commercial users in January 2019. The 2019-01-15 Critical Patch Update (8u201 and 8u202) was the last released under the old Binary Code Licence, which allowed free production use.[^oracle-faq] The next update, 8u211 on 2019-04-16, shipped under the new Oracle Technology Network (OTN) licence. That licence is free for personal, development and testing use, but production use needs a paid Java SE Subscription.[^oracle-faq][^oracle-roadmap] Oracle also offered GPL-licensed OpenJDK builds, but only for six months per release.

# Why it matters
For most enterprises this was the first time "Java" and "Oracle JDK" were no longer synonymous. Vendors filled the gap with free long-term-supported OpenJDK builds: AdoptOpenJDK (later Eclipse Adoptium), Amazon Corretto, Azul Zulu, Red Hat, and later Microsoft. By 2024 Oracle's share of production JVMs had fallen to 21%, with Adoptium at 18% and Amazon at 18%.[^nr-2024] The episode strengthened OpenJDK as the real platform and weakened Oracle's commercial control. Oracle's later licence changes repeated the pattern ([NFTC 2021](/events/2021-09-java-17-lts-free-oracle-jdk.md), [per-employee pricing 2023](/events/2023-01-oracle-java-per-employee-licensing.md)).

# Related
- [Java](/languages/java.md), [HotSpot / OpenJDK](/runtimes/hotspot-openjdk.md)

[^oracle-faq]: Oracle Java SE Releases FAQ — https://blogs.oracle.com/java/oracle-java-se-releases-faq
[^oracle-roadmap]: Oracle Java SE Support Roadmap — https://www.oracle.com/java/technologies/java-se-support-roadmap.html
[^nr-2024]: New Relic 2024 State of the Java Ecosystem — https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
