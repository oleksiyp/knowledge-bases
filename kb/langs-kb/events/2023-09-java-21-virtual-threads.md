---
type: Event
title: Java 21 LTS ships virtual threads and pattern matching for switch
description: "JDK 21 (2023-09-19) finalised Project Loom's virtual threads, pattern matching for switch, record patterns, sequenced collections and generational ZGC. It was the most significant Java LTS since Java 8. Production use exposed a pinning problem with synchronized, which was fixed in JDK 24."
event_kind: release
date: 2023-09-19
era: E3
impact: positive
languages: [languages/java, languages/kotlin]
runtimes: [runtimes/hotspot-openjdk]
ideas: [ideas/concurrency/virtual-threads, ideas/types/sum-types-and-pattern-matching, ideas/runtime-performance/low-pause-gc, ideas/concurrency/structured-concurrency]
tags: [java, lts, loom, virtual-threads, pattern-matching, zgc]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: jdk21
    resource: https://openjdk.org/projects/jdk/21/
    title: "OpenJDK: JDK 21"
  - id: jep444
    resource: https://openjdk.org/jeps/444
    title: "JEP 444: Virtual Threads"
  - id: jep441
    resource: https://openjdk.org/jeps/441
    title: "JEP 441: Pattern Matching for switch"
  - id: jep439
    resource: https://openjdk.org/jeps/439
    title: "JEP 439: Generational ZGC"
  - id: netflix
    resource: https://netflixtechblog.com/java-21-virtual-threads-dude-wheres-my-lock-3052540e231d
    title: "Netflix Tech Blog: Java 21 Virtual Threads — Dude, Where's My Lock?"
    author: org:netflix
  - id: jep491
    resource: https://openjdk.org/jeps/491
    title: "JEP 491: Synchronize Virtual Threads without Pinning"
  - id: nr-2024
    resource: https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
    title: "New Relic: 2024 State of the Java Ecosystem"
---

# What happened
JDK 21 reached GA on 2023-09-19.[^jdk21] Its 15 JEPs included final **virtual threads** (JEP 444): lightweight, JVM-scheduled threads that let blocking thread-per-request code scale to millions of concurrent tasks.[^jep444] It also finalised **pattern matching for switch** (JEP 441) and record patterns, completing the records + sealed types + patterns design.[^jep441] **Generational ZGC** (JEP 439) arrived too.[^jep439] Structured concurrency and scoped values entered preview.

# Why it matters
Virtual threads were the JVM's answer to async/await and reactive programming: make existing blocking code cheap rather than change how code is written ([Virtual threads](/ideas/concurrency/virtual-threads.md)). Frameworks (Spring Boot 3.2, Quarkus, Helidon 4) enabled them quickly, and Java 21 was adopted 287% faster than Java 17 in its first six months.[^nr-2024] The weak spot appeared in production. A virtual thread blocked inside `synchronized` *pinned* its carrier thread. In July 2024 Netflix described services hanging completely because a tracing library's `synchronized` blocks pinned every carrier.[^netflix] JEP 491 fixed this in JDK 24 (March 2025).[^jep491] The lesson: a "transparent" runtime feature can be undermined by one legacy locking primitive.

# Related
- [Java](/languages/java.md), [HotSpot / OpenJDK](/runtimes/hotspot-openjdk.md)
- [Virtual threads](/ideas/concurrency/virtual-threads.md), [Structured concurrency](/ideas/concurrency/structured-concurrency.md), [Low-pause GC](/ideas/runtime-performance/low-pause-gc.md)

[^jdk21]: OpenJDK JDK 21 — https://openjdk.org/projects/jdk/21/
[^jep444]: JEP 444 — https://openjdk.org/jeps/444
[^jep441]: JEP 441 — https://openjdk.org/jeps/441
[^jep439]: JEP 439 — https://openjdk.org/jeps/439
[^netflix]: Netflix Tech Blog, July 2024 — https://netflixtechblog.com/java-21-virtual-threads-dude-wheres-my-lock-3052540e231d
[^jep491]: JEP 491 — https://openjdk.org/jeps/491
[^nr-2024]: New Relic 2024 — https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
