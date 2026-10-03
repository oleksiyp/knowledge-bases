---
type: Event
title: Oracle detaches GraalVM from the Java SE platform
description: "On 2025-09-15 Oracle said GraalVM for JDK 24 was the last GraalVM release supported as part of Java SE products. Native Image was discontinued for Java SE customers, the Graal JIT was dropped from Oracle JDK, and Java startup work moved to OpenJDK's Project Leyden. Project Galahad was dissolved in March 2026."
event_kind: withdrawal
date: 2025-09-15
era: E4
impact: negative
languages: [languages/java, languages/kotlin, languages/python, languages/javascript]
runtimes: [runtimes/graalvm, runtimes/hotspot-openjdk]
ideas: [ideas/runtime-performance/aot-native-images, ideas/runtime-performance/startup-snapshotting]
tags: [graalvm, native-image, oracle, leyden, galahad, strategy]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: detach
    resource: https://blogs.oracle.com/java/detaching-graalvm-from-the-java-ecosystem-train
    title: "Oracle Java blog: Detaching GraalVM from the Java Ecosystem Train"
    author: org:oracle
  - id: adtmag
    resource: https://adtmag.com/articles/2025/09/30/oracle-shifts-graalvm-focus-away-from-java.aspx
    title: "ADTmag: Oracle Shifts GraalVM Focus Away from Java"
  - id: infoq
    resource: https://www.infoq.com/news/2025/09/java-news-roundup-sep15-2025/
    title: "InfoQ: Java News Roundup — JDK 25, GraalVM for JDK 25"
  - id: galahad
    resource: https://openjdk.org/projects/galahad/
    title: "OpenJDK: Project Galahad"
  - id: jvmweekly
    resource: https://www.jvm-weekly.com/p/the-last-train-from-metropolis-whatever
    title: "JVM Weekly vol. 185: The Last Train from Metropolis"
---

# What happened
In "Detaching GraalVM from the Java Ecosystem Train" (2025-09-15), Oracle said GraalVM for JDK 24 was the final GraalVM release licensed and supported as part of Oracle Java SE products.[^detach][^infoq] GraalVM "early adopter" technology, including Native Image, was discontinued for Java SE customers. Oracle JDK 24 was the last Oracle JDK with the optional Graal JIT. The GraalVM team would focus on non-Java Graal languages such as GraalPy and GraalJS. The goals of faster startup, faster warm-up and smaller footprint would be pursued in OpenJDK's Project Leyden.[^detach][^adtmag] GraalVM Community Edition and the free-licensed Oracle GraalVM continue as a separate product. Project Galahad, the effort to bring Graal into OpenJDK, was dissolved in March 2026 as "redundant".[^galahad][^jvmweekly]

# Why it matters
Native Image was the main reason cloud-native Java frameworks existed (Quarkus, Micronaut, Spring Boot 3 native). Its steward stepping back from it as a Java SE product confirmed that the JVM ecosystem chose **compatible, incremental AOT (Leyden)** over **closed-world native compilation**. It also ended about eight years of moving Graal into and out of OpenJDK (JEP 295/317 → JEP 410 removal → Galahad → dissolution).[^jvmweekly] Frameworks still support GraalVM CE native builds, but the long-term startup story for Java is now Leyden.

# Related
- [GraalVM](/runtimes/graalvm.md), [HotSpot / OpenJDK](/runtimes/hotspot-openjdk.md), [Java](/languages/java.md)
- [AOT native images](/ideas/runtime-performance/aot-native-images.md), [Startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md)
- [Java 25 LTS](/events/2025-09-java-25-lts.md)

[^detach]: Detaching GraalVM from the Java Ecosystem Train — https://blogs.oracle.com/java/detaching-graalvm-from-the-java-ecosystem-train
[^adtmag]: ADTmag, 2025-09-30 — https://adtmag.com/articles/2025/09/30/oracle-shifts-graalvm-focus-away-from-java.aspx
[^infoq]: InfoQ Java roundup, Sept 2025 — https://www.infoq.com/news/2025/09/java-news-roundup-sep15-2025/
[^galahad]: OpenJDK Project Galahad — https://openjdk.org/projects/galahad/
[^jvmweekly]: JVM Weekly vol. 185 — https://www.jvm-weekly.com/p/the-last-train-from-metropolis-whatever
