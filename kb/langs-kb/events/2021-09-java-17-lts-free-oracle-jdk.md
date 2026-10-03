---
type: Event
title: Java 17 LTS ships sealed classes; Oracle JDK made free again under NFTC
description: "JDK 17 (2021-09-14), the first LTS after the six-month cadence settled, finalised sealed classes and strong encapsulation of JDK internals. Oracle reversed its 2019 policy by licensing Oracle JDK 17 under the No-Fee Terms and Conditions (NFTC)."
event_kind: release
date: 2021-09-14
era: E2
impact: positive
languages: [languages/java]
runtimes: [runtimes/hotspot-openjdk, runtimes/graalvm]
ideas: [ideas/types/sum-types-and-pattern-matching, ideas/runtime-performance/aot-native-images]
tags: [java, lts, sealed-classes, licensing, oracle, nftc]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: jdk17
    resource: https://openjdk.org/projects/jdk/17/
    title: "OpenJDK: JDK 17"
  - id: jep409
    resource: https://openjdk.org/jeps/409
    title: "JEP 409: Sealed Classes"
  - id: jep403
    resource: https://openjdk.org/jeps/403
    title: "JEP 403: Strongly Encapsulate JDK Internals"
  - id: jep410
    resource: https://openjdk.org/jeps/410
    title: "JEP 410: Remove the Experimental AOT and JIT Compiler"
  - id: swone
    resource: https://www.softwareone.com/en/blog/articles/2021/09/20/oracle-java-release-17
    title: "SoftwareOne: Oracle Java Release 17 — is it free again?"
  - id: nr-2024
    resource: https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
    title: "New Relic: 2024 State of the Java Ecosystem"
---

# What happened
JDK 17 reached general availability on 2021-09-14 as a long-term-support release.[^jdk17] It finalised sealed classes (JEP 409), which together with JDK 16's records gave Java algebraic data types.[^jep409] It strongly encapsulated JDK internals (JEP 403), ending the `--illegal-access` grace period.[^jep403] It also removed the experimental Graal-based AOT and JIT compilers (JEP 410).[^jep410] Oracle released Oracle JDK 17 under the new No-Fee Terms and Conditions, which allow free production use until one year after the next LTS (i.e. until Sept 2024 for 17).[^swone]

# Why it matters
JDK 17 became the migration target that finally moved enterprises off Java 8 and 11. Spring Boot 3 required it, and its share of production applications rose from 9% to over 35% in a year (New Relic 2024).[^nr-2024] The NFTC was Oracle's partial retreat from the 2019 [end of free updates](/events/2019-01-oracle-java-8-public-updates-end.md). Its time limit and the [2023 per-employee pricing](/events/2023-01-oracle-java-per-employee-licensing.md) kept users moving to other OpenJDK builds anyway.

# Related
- [Java](/languages/java.md), [HotSpot / OpenJDK](/runtimes/hotspot-openjdk.md), [GraalVM](/runtimes/graalvm.md)
- [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md)

[^jdk17]: OpenJDK JDK 17 — https://openjdk.org/projects/jdk/17/
[^jep409]: JEP 409 — https://openjdk.org/jeps/409
[^jep403]: JEP 403 — https://openjdk.org/jeps/403
[^jep410]: JEP 410 — https://openjdk.org/jeps/410
[^swone]: SoftwareOne, 2021-09-20 — https://www.softwareone.com/en/blog/articles/2021/09/20/oracle-java-release-17
[^nr-2024]: New Relic 2024 — https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
