---
type: Runtime
title: HotSpot / OpenJDK
description: "The reference JVM. Between 2018 and 2026 it delivered sub-millisecond GCs (ZGC, Shenandoah), virtual threads, compact object headers and Project Leyden's AOT cache, absorbing GraalVM's startup agenda in-house. Valhalla value objects and the Graal JIT integration (Galahad) never landed."
tags: [jvm, jit, gc, openjdk, leyden, loom, valhalla, lilliput]
runtime_kind: vm
languages: [languages/java, languages/kotlin, languages/scala, languages/clojure]
ideas:
  - ideas/concurrency/virtual-threads
  - ideas/runtime-performance/low-pause-gc
  - ideas/runtime-performance/startup-snapshotting
  - ideas/runtime-performance/value-types
  - ideas/runtime-performance/aot-native-images
  - ideas/platforms-and-portability/ffi-modernization
trajectory: stable
first_released: 1999
steward: Oracle-led OpenJDK community (Red Hat, Amazon, Microsoft, SAP, Azul, Google, Alibaba contributors)
governance: single-vendor
adoption_signals:
  java_17_share_of_prod_apps_pct: { value: 35, as_of: 2024 }
  oracle_jdk_share_pct: { value: 21, as_of: 2024 }
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: jep377
    resource: https://openjdk.org/jeps/377
    title: "JEP 377: ZGC — A Scalable Low-Latency Garbage Collector (Production)"
  - id: jep379
    resource: https://openjdk.org/jeps/379
    title: "JEP 379: Shenandoah — A Low-Pause-Time Garbage Collector (Production)"
  - id: jep439
    resource: https://openjdk.org/jeps/439
    title: "JEP 439: Generational ZGC"
  - id: jep490
    resource: https://openjdk.org/jeps/490
    title: "JEP 490: ZGC — Remove the Non-Generational Mode"
  - id: jep410
    resource: https://openjdk.org/jeps/410
    title: "JEP 410: Remove the Experimental AOT and JIT Compiler"
  - id: jep444
    resource: https://openjdk.org/jeps/444
    title: "JEP 444: Virtual Threads"
  - id: jep491
    resource: https://openjdk.org/jeps/491
    title: "JEP 491: Synchronize Virtual Threads without Pinning"
  - id: jep483
    resource: https://openjdk.org/jeps/483
    title: "JEP 483: Ahead-of-Time Class Loading & Linking"
  - id: infoq-leyden
    resource: https://www.infoq.com/news/2025/03/java-24-leyden-ships
    title: "InfoQ: Java 24 ships first Leyden feature"
  - id: infoq-java25
    resource: https://www.infoq.com/news/2025/09/java25-released
    title: "InfoQ: JDK 25 released"
  - id: oracle-java26
    resource: https://www.oracle.com/news/announcement/oracle-releases-java-26-2026-03-17/
    title: "Oracle: Oracle Releases Java 26"
    author: org:oracle
  - id: jdk27
    resource: https://inside.java/2026/09/15/jdk-27-available/
    title: "Inside.java: The Arrival of Java 27"
    author: org:oracle
  - id: galahad
    resource: https://openjdk.org/projects/galahad/
    title: "OpenJDK: Project Galahad"
  - id: jvmweekly-graal
    resource: https://www.jvm-weekly.com/p/the-last-train-from-metropolis-whatever
    title: "JVM Weekly: The Last Train from Metropolis — Whatever Happened to GraalVM"
  - id: reg-valhalla
    resource: https://www.theregister.com/devops/2026/06/15/javas-project-valhalla-finally-lands-a-preview-in-jdk-28/5255557
    title: "The Register: Java's Project Valhalla finally lands a preview in JDK 28"
  - id: jep486
    resource: https://openjdk.org/jeps/486
    title: "JEP 486: Permanently Disable the Security Manager"
  - id: jep372
    resource: https://openjdk.org/jeps/372
    title: "JEP 372: Remove the Nashorn JavaScript Engine"
  - id: nr-2024
    resource: https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
    title: "New Relic: 2024 State of the Java Ecosystem"
---

# Summary
HotSpot, the OpenJDK virtual machine, had its most productive period since the 2000s. Low-pause collectors went from experimental to default-quality: ZGC and Shenandoah became production features in JDK 15, generational ZGC arrived in 21, and the non-generational mode was removed in 24.[^jep377][^jep379][^jep439][^jep490] Project Loom's virtual threads shipped in JDK 21, and JDK 24 removed the pinning-on-`synchronized` caveat.[^jep444][^jep491] Project Leyden answered GraalVM Native Image *inside* the JVM. AOT class loading in JDK 24 gave up to about 42% faster startup; method profiling and command-line ergonomics followed in 25, and AOT caching with any GC in 26.[^jep483][^infoq-leyden][^infoq-java25][^oracle-java26] Project Lilliput's compact object headers became a product feature in 25 and the default in 27.[^infoq-java25][^jdk27]

Two big structural bets did not land. **Valhalla** (value objects) only reached a preview targeted at JDK 28.[^reg-valhalla] **Graal as HotSpot's JIT** went in a full circle. JDK 17 removed the experimental Graal JIT and AOT, pointing users to GraalVM.[^jep410] Project Galahad (Dec 2022) set out to bring Graal back and was dissolved in March 2026 after Oracle detached GraalVM from Java.[^galahad][^jvmweekly-graal] Verdict: **thriving runtime**. Its strategy changed from adopting a second VM's ideas to re-implementing them in-house without breaking compatibility.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-03 | JDK 12: Shenandoah (experimental) merged | + |
| E1 | 2020-09 | JDK 15: ZGC and Shenandoah production; Nashorn removed [^jep377][^jep379][^jep372] | + |
| E2 | 2021-09 | JDK 17: experimental Graal JIT and jaotc AOT removed [^jep410] | − |
| E3 | 2022-12 | Project Galahad proposed to re-integrate Graal [^galahad] | + |
| E3 | 2023-09 | JDK 21: virtual threads, generational ZGC ([event](/events/2023-09-java-21-virtual-threads.md)) [^jep444][^jep439] | + |
| E4 | 2025-03 | JDK 24: Leyden AOT cache, pinning fix, Security Manager permanently disabled, non-generational ZGC removed [^jep483][^jep491][^jep486][^jep490] | + |
| E4 | 2025-09 | JDK 25: compact object headers, generational Shenandoah, AOT profiling ([event](/events/2025-09-java-25-lts.md)) [^infoq-java25] | + |
| E4 | 2025-09 | Oracle detaches GraalVM from Java SE ([event](/events/2025-09-graalvm-detaches-from-java-se.md)) [^jvmweekly-graal] | mixed |
| E4 | 2026-03 | JDK 26: AOT cache works with ZGC; Galahad dissolved [^oracle-java26][^galahad] | mixed |
| E4 | 2026-06 | Valhalla JEP 401 targeted to JDK 28 as preview [^reg-valhalla] | mixed |
| E4 | 2026-09 | JDK 27: compact headers default, G1 default everywhere [^jdk27] | + |

# Ideas it bet on
| Idea | Outcome for HotSpot |
|---|---|
| [Low-pause GC](/ideas/runtime-performance/low-pause-gc.md) | succeeded: ZGC, Shenandoah, generational variants |
| [Virtual threads](/ideas/concurrency/virtual-threads.md) | succeeded: M:N scheduling in the VM, not the language |
| [Startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md) | succeeding: Leyden AOT cache. Azul CRaC stayed a vendor feature |
| [AOT native images](/ideas/runtime-performance/aot-native-images.md) | abandoned in-tree (jaotc removed); handed to GraalVM, then to Leyden |
| [Value types](/ideas/runtime-performance/value-types.md) | stalled: about 12 years to a preview |
| [FFI modernisation](/ideas/platforms-and-portability/ffi-modernization.md) | succeeded: Panama FFM final in JDK 22 |

# What succeeded
- **GC portfolio.** HotSpot now offers G1 (default), ZGC with sub-millisecond pauses, and Shenandoah, all generational by JDK 25. This removed the main operational complaint about large Java heaps.[^jep439][^jep490][^infoq-java25]
- **Loom in the VM.** Implementing virtual threads as a runtime feature kept the whole `Thread` / `synchronized` / JDBC ecosystem working. The cost was that it took until JDK 24 to remove pinning.[^jep444][^jep491]
- **Leyden as the compatible answer to native images.** It works by training runs and caching, keeps the JIT and dynamic class loading, and does not require a closed world.[^jep483][^infoq-leyden]
- **Footprint.** Compact object headers (8-byte headers on 64-bit) went from experimental (24) to product (25) to default (27).[^infoq-java25][^jdk27]
- **Cleanup discipline.** Nashorn, the Security Manager, biased locking, the 32-bit x86 port and the Applet API were removed on published schedules.[^jep372][^jep486][^oracle-java26]

# What failed or stalled
- **Valhalla.** The deepest change to the object model was repeatedly re-scoped and remains in preview.[^reg-valhalla]
- **Graal JIT integration.** It went from experimental (JDK 10) to removed (17) to Galahad (2022) to dissolved (2026). Oracle JDK 24 was the last to ship the optional Graal JIT.[^jep410][^galahad][^jvmweekly-graal]
- **In-tree AOT (jaotc).** Removed in JDK 17 for lack of use.[^jep410]
- **Distribution fragmentation.** Oracle's licensing pushed users to Temurin, Corretto, Zulu, Microsoft and others. That is healthy for OpenJDK but split support. By 2024 Oracle JDK had only 21% of production JVMs.[^nr-2024]

# By era
## E1
ZGC and Shenandoah matured and Nashorn was removed. The VM was cleaned up for the six-month cadence.
## E2
JDK 17 LTS. Graal and jaotc were removed from the JDK, marking a split from the GraalVM strategy.
## E3
Loom delivered in JDK 21 along with generational ZGC. Galahad was announced, and Leyden began.
## E4
Leyden shipped in 24–26, along with compact headers and the pinning fix. GraalVM was detached and Galahad dissolved. Valhalla was finally scheduled.

# Lessons
- Re-implementing a competitor's idea inside the compatible runtime (Leyden vs Native Image, Loom vs reactive) beat adopting a second VM for an ecosystem this large.
- Deep object-model changes (Valhalla) take much longer than scheduler or GC changes, because they touch the language, generics and reflection, and they must not break existing code.

# Related
- [Java](/languages/java.md), [Kotlin](/languages/kotlin.md), [GraalVM](/runtimes/graalvm.md), [.NET CLR](/runtimes/dotnet-clr.md), [Go runtime](/runtimes/go-runtime.md)

[^jep377]: JEP 377 — https://openjdk.org/jeps/377
[^jep379]: JEP 379 — https://openjdk.org/jeps/379
[^jep439]: JEP 439 — https://openjdk.org/jeps/439
[^jep490]: JEP 490 — https://openjdk.org/jeps/490
[^jep410]: JEP 410 — https://openjdk.org/jeps/410
[^jep444]: JEP 444 — https://openjdk.org/jeps/444
[^jep491]: JEP 491 — https://openjdk.org/jeps/491
[^jep483]: JEP 483 — https://openjdk.org/jeps/483
[^infoq-leyden]: InfoQ: Java 24 Leyden ships — https://www.infoq.com/news/2025/03/java-24-leyden-ships
[^infoq-java25]: InfoQ: JDK 25 released — https://www.infoq.com/news/2025/09/java25-released
[^oracle-java26]: Oracle Releases Java 26 — https://www.oracle.com/news/announcement/oracle-releases-java-26-2026-03-17/
[^jdk27]: The Arrival of Java 27 — https://inside.java/2026/09/15/jdk-27-available/
[^galahad]: OpenJDK Project Galahad — https://openjdk.org/projects/galahad/
[^jvmweekly-graal]: JVM Weekly vol. 185 — https://www.jvm-weekly.com/p/the-last-train-from-metropolis-whatever
[^reg-valhalla]: The Register on Valhalla — https://www.theregister.com/devops/2026/06/15/javas-project-valhalla-finally-lands-a-preview-in-jdk-28/5255557
[^jep486]: JEP 486 — https://openjdk.org/jeps/486
[^jep372]: JEP 372 — https://openjdk.org/jeps/372
[^nr-2024]: New Relic 2024 State of the Java Ecosystem — https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
