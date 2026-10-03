---
type: Runtime
title: GraalVM
description: "Oracle Labs' polyglot VM and Native Image AOT compiler. It made Java native executables mainstream for cloud frameworks (Quarkus, Micronaut, Spring Boot 3), but in Sept 2025 Oracle detached it from Java SE and moved Java startup work to OpenJDK Leyden, leaving GraalVM to focus on polyglot runtimes and sandboxing."
tags: [jvm, aot, native-image, truffle, polyglot, oracle, graalpy, graaljs]
runtime_kind: vm
languages: [languages/java, languages/kotlin, languages/python, languages/javascript, languages/ruby]
ideas:
  - ideas/runtime-performance/aot-native-images
  - ideas/runtime-performance/startup-snapshotting
  - ideas/runtime-performance/jit-for-dynamic-languages
related_runtimes: [runtimes/hotspot-openjdk, runtimes/truffleruby]
trajectory: declining
first_released: 2019
steward: Oracle (Oracle Labs / GraalVM team)
governance: single-vendor
era_momentum: { E1: up, E2: up, E3: up, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: graal-19
    resource: https://medium.com/graalvm/announcing-graalvm-19-4590cf354df8
    title: "GraalVM blog: Announcing GraalVM 19.0 — first production release"
    author: org:oracle
  - id: spring-boot-3
    resource: https://spring.io/blog/2022/11/24/spring-boot-3-0-goes-ga/
    title: "Spring Blog: Spring Boot 3.0 Goes GA"
    author: org:spring
  - id: jep410
    resource: https://openjdk.org/jeps/410
    title: "JEP 410: Remove the Experimental AOT and JIT Compiler"
  - id: infoq-galahad
    resource: https://www.infoq.com/news/2022/12/openjdk-galahad-Dec22
    title: "InfoQ: OpenJDK proposes Project Galahad"
  - id: gftc
    resource: https://blogs.oracle.com/graal/graalvm-free-license
    title: "Oracle Graal blog: Introducing the GraalVM Free License"
    author: org:oracle
  - id: infoq-graal-1720
    resource: https://www.infoq.com/news/2023/07/graalvm-java-17-20
    title: "InfoQ: GraalVM for JDK 17 and JDK 20"
  - id: detach
    resource: https://blogs.oracle.com/java/detaching-graalvm-from-the-java-ecosystem-train
    title: "Oracle Java blog: Detaching GraalVM from the Java Ecosystem Train"
    author: org:oracle
  - id: adtmag-detach
    resource: https://adtmag.com/articles/2025/09/30/oracle-shifts-graalvm-focus-away-from-java.aspx
    title: "ADTmag: Oracle Shifts GraalVM Focus Away from Java"
  - id: galahad
    resource: https://openjdk.org/projects/galahad/
    title: "OpenJDK: Project Galahad"
  - id: jvmweekly-graal
    resource: https://www.jvm-weekly.com/p/the-last-train-from-metropolis-whatever
    title: "JVM Weekly vol. 185: The Last Train from Metropolis — Whatever Happened to GraalVM"
  - id: graal-calendar
    resource: https://www.graalvm.org/release-calendar/
    title: "GraalVM Release Calendar"
  - id: adtmag-2026
    resource: https://adtmag.com/articles/2026/03/03/catching-up-with-graalvm.aspx
    title: "ADTmag: Catching Up with GraalVM — Patch Tuesday and a Clean Break with Intel Macs"
  - id: script-agent
    resource: https://github.com/graalvm/graal-script-agent
    title: "GitHub: graalvm/graal-script-agent"
  - id: jep483
    resource: https://openjdk.org/jeps/483
    title: "JEP 483: Ahead-of-Time Class Loading & Linking"
---

# Summary
GraalVM had two products. One is the **Graal compiler plus the Truffle framework**, a JIT written in Java that hosts language implementations (GraalJS, GraalPy, TruffleRuby, Espresso) on one VM. The other is **Native Image**, a closed-world AOT compiler that turns a JVM app into a fast-starting, small-footprint executable. GraalVM 19.0 (May 2019) was the first production release.[^graal-19] Native Image became the reason cloud-native Java frameworks existed: Quarkus and Micronaut were built around it, and Spring Boot 3.0 (Nov 2022) made native compilation a supported feature, replacing the experimental Spring Native.[^spring-boot-3] In June 2023 Oracle made the formerly paid Enterprise features free under the GraalVM Free Terms and Conditions.[^gftc][^infoq-graal-1720]

Strategically the project lost its place in Java. JDK 17 removed the in-tree Graal JIT in favour of "use GraalVM".[^jep410] Project Galahad (Dec 2022) then tried to bring Graal back into OpenJDK.[^infoq-galahad] On 2025-09-15 Oracle announced it was **detaching GraalVM from the Java ecosystem train**. GraalVM for JDK 24 was the last release supported as part of Java SE products, Native Image was discontinued for Java SE customers, the Graal JIT was dropped from Oracle JDK 25, and Java startup/footprint work moved to Project Leyden.[^detach][^adtmag-detach] Galahad was dissolved in March 2026.[^galahad] Verdict: **Native Image succeeded as an idea but GraalVM is declining as a Java platform**. It continues as a polyglot and sandboxing runtime with monthly feature releases.[^graal-calendar][^jvmweekly-graal]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-05-09 | GraalVM 19.0, first production release; Native Image early adopter [^graal-19] | + |
| E2 | 2021-09 | JDK 17 removes experimental Graal JIT/AOT from OpenJDK [^jep410] | mixed |
| E3 | 2022-11-24 | Spring Boot 3.0 GA with GraalVM native image support [^spring-boot-3] | + |
| E3 | 2022-12 | Project Galahad proposed (Graal back into OpenJDK) [^infoq-galahad] | + |
| E3 | 2023-06-13 | Oracle GraalVM replaces Enterprise Edition; free under GFTC [^gftc][^infoq-graal-1720] | + |
| E4 | 2025-03 | JDK 24 ships Leyden AOT cache, a JVM-native alternative to Native Image [^jep483] | − |
| E4 | 2025-09-15 | "Detaching GraalVM from the Java Ecosystem Train" ([event](/events/2025-09-graalvm-detaches-from-java-se.md)) [^detach] | − |
| E4 | 2026-01 | GraalVM 25.0.2 drops macOS x64; releases tied to quarterly CPUs [^adtmag-2026] | − |
| E4 | 2026-03 | Project Galahad dissolved as "redundant" [^galahad] | − |
| E4 | 2026 | Monthly feature releases (25.x); Truffle sandbox in Community Edition for running AI-generated code [^graal-calendar][^script-agent] | mixed |

# Ideas it bet on
| Idea | Outcome for GraalVM |
|---|---|
| [AOT native images](/ideas/runtime-performance/aot-native-images.md) | succeeded technically; adopted by frameworks; then sidelined by Oracle |
| [Startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md) | mixed: build-time heap snapshot worked; Leyden took over the agenda |
| [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md) (Truffle) | mixed: TruffleRuby and GraalPy are fast but niche |
| Polyglot "one VM to rule them all" | stalled: embedding and sandboxing are the remaining niche |

# What succeeded
- **Native Image changed Java's cloud story.** Startup in tens of milliseconds and much lower RSS let Java compete for serverless and CLI work. Quarkus, Micronaut, Helidon and Spring Boot 3 all built around it.[^spring-boot-3]
- **Free Enterprise features.** The 2023 GFTC licence gave every user profile-guided optimisation and the G1 GC in native images.[^gftc]
- **It forced OpenJDK to act.** Leyden's JDK 24–26 AOT cache is the direct response to GraalVM's startup numbers, and Oracle presented the detachment as "graduating" the goals into OpenJDK.[^jep483][^detach]
- **Truffle as a research platform.** Partial-evaluation-based language implementations (TruffleRuby, GraalPy) reached high peak performance (see [TruffleRuby](/runtimes/truffleruby.md)).

# What failed or stalled
- **The closed-world tax.** Native Image needs reachability metadata for reflection, proxies and resources, and builds are slow and memory-hungry. Leyden's pitch was "no new constraints", which is a tacit admission of this.[^jep483]
- **Never became *the* JVM.** The Graal JIT was added (JDK 10), removed (JDK 17), proposed again (Galahad 2022), and finally dropped from Oracle JDK in 25.[^jep410][^galahad][^jvmweekly-graal]
- **Steward retreat.** The Sept 2025 decision ended Java SE support for Native Image for Oracle customers and pointed GraalVM at non-Java languages.[^detach][^adtmag-detach] Later notes: Intel Mac support dropped and release cadence restructured.[^adtmag-2026][^graal-calendar]
- **Polyglot hype.** "Run any language on one VM" did not displace CPython, Node or CRuby. GraalPy and GraalJS are mostly used for embedding.

# By era
## E1
GraalVM 19 shipped. Native Image was "early adopter" and the polyglot narrative was at its peak.
## E2
Quarkus and Micronaut grew around Native Image. OpenJDK removed the Graal JIT and pointed users to GraalVM.
## E3
Spring Boot 3 native GA, Galahad, and the free Oracle GraalVM licence. This was the high-water mark.
## E4
Leyden shipped in mainline, Oracle detached GraalVM from Java SE, and Galahad was dissolved. GraalVM refocused on polyglot runtimes and sandboxing AI-authored code.[^script-agent]

# Lessons
- A technically superior side runtime loses once the main runtime can deliver 60–80% of the benefit with zero compatibility cost.
- An Oracle-only steward with no independent foundation meant one strategy memo could reverse years of integration work.
- Native Image succeeded as a forcing function: its lasting impact is in Leyden, Spring's AOT engine and framework design, not in GraalVM's own market share.

# Related
- [HotSpot / OpenJDK](/runtimes/hotspot-openjdk.md), [Java](/languages/java.md), [.NET CLR](/runtimes/dotnet-clr.md) (NativeAOT comparison)
- [AOT native images](/ideas/runtime-performance/aot-native-images.md), [Startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md)

[^graal-19]: Announcing GraalVM 19.0 — https://medium.com/graalvm/announcing-graalvm-19-4590cf354df8
[^spring-boot-3]: Spring Boot 3.0 Goes GA — https://spring.io/blog/2022/11/24/spring-boot-3-0-goes-ga/
[^jep410]: JEP 410 — https://openjdk.org/jeps/410
[^infoq-galahad]: InfoQ on Galahad — https://www.infoq.com/news/2022/12/openjdk-galahad-Dec22
[^gftc]: Introducing the GraalVM Free License — https://blogs.oracle.com/graal/graalvm-free-license
[^infoq-graal-1720]: InfoQ: GraalVM for JDK 17 and 20 — https://www.infoq.com/news/2023/07/graalvm-java-17-20
[^detach]: Detaching GraalVM from the Java Ecosystem Train — https://blogs.oracle.com/java/detaching-graalvm-from-the-java-ecosystem-train
[^adtmag-detach]: ADTmag, 2025-09-30 — https://adtmag.com/articles/2025/09/30/oracle-shifts-graalvm-focus-away-from-java.aspx
[^galahad]: OpenJDK Project Galahad — https://openjdk.org/projects/galahad/
[^jvmweekly-graal]: JVM Weekly vol. 185 — https://www.jvm-weekly.com/p/the-last-train-from-metropolis-whatever
[^graal-calendar]: GraalVM Release Calendar — https://www.graalvm.org/release-calendar/
[^adtmag-2026]: ADTmag, 2026-03-03 — https://adtmag.com/articles/2026/03/03/catching-up-with-graalvm.aspx
[^script-agent]: Graal Script Agent — https://github.com/graalvm/graal-script-agent
[^jep483]: JEP 483 — https://openjdk.org/jeps/483
