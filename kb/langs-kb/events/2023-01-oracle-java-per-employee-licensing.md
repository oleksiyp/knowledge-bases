---
type: Event
title: Oracle switches Java SE licensing to a per-employee metric
description: "On 2023-01-23 Oracle replaced per-processor and per-user Java SE subscriptions with the Java SE Universal Subscription, priced per employee of the whole organisation (from $15 per employee per month). Gartner warned of large cost increases and audits, and migration to non-Oracle OpenJDK builds sped up."
event_kind: policy
date: 2023-01-23
era: E3
impact: negative
languages: [languages/java]
runtimes: [runtimes/hotspot-openjdk]
ideas: []
tags: [java, oracle, licensing, audits, openjdk-distributions]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: infoworld
    resource: https://www.infoworld.com/article/2338028/oracles-new-java-subscription-model-to-cost-a-lot-more-gartner.html
    title: "InfoWorld: Oracle's new Java subscription model to cost a lot more — Gartner"
  - id: azul-faq
    resource: https://www.azul.com/products/core/oracle-pricing-change-faq/
    title: "Azul: Oracle Java Licensing Pricing Change FAQ"
    author: org:azul
  - id: cw
    resource: https://www.computerweekly.com/news/365531580/Oracle-goes-on-hunt-for-Java-non-compliance
    title: "Computer Weekly: Oracle goes on hunt for Java non-compliance"
  - id: nr-2024
    resource: https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
    title: "New Relic: 2024 State of the Java Ecosystem"
---

# What happened
On 2023-01-23 Oracle introduced the Java SE Universal Subscription. Instead of counting processors or named users actually running Oracle Java, it counts **every employee** in the organisation, including part-timers and contractors. List prices start at $15 per employee per month for under 1,000 employees and fall to $5.25 at 40,000–49,999.[^infoworld][^azul-faq] Gartner reported that 52% of its Oracle audit-related client conversations in 2022 concerned Java, and predicted one in five Java users would face an Oracle audit within three years.[^infoworld]

# Why it matters
It turned the [2019 licence change](/events/2019-01-oracle-java-8-public-updates-end.md) into a board-level cost issue, and Oracle's audit activity continued afterwards.[^cw] Because OpenJDK is GPL-with-Classpath-exception and vendors such as Adoptium, Amazon, Azul, Microsoft and Red Hat ship compatible builds, the cheapest response was to stop using Oracle JDK. Oracle's share of production JVMs fell from 29% (2023) to 21% (2024).[^nr-2024] This is a failure of commercial stewardship that did not hurt the language. Java's portability across distributions protected users from its owner.

# Related
- [Java](/languages/java.md), [HotSpot / OpenJDK](/runtimes/hotspot-openjdk.md)
- [Java 17 / NFTC](/events/2021-09-java-17-lts-free-oracle-jdk.md)

[^infoworld]: InfoWorld on Gartner — https://www.infoworld.com/article/2338028/oracles-new-java-subscription-model-to-cost-a-lot-more-gartner.html
[^azul-faq]: Azul pricing change FAQ — https://www.azul.com/products/core/oracle-pricing-change-faq/
[^cw]: Computer Weekly — https://www.computerweekly.com/news/365531580/Oracle-goes-on-hunt-for-Java-non-compliance
[^nr-2024]: New Relic 2024 — https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
