---
type: Idea
title: Startup snapshotting and training-run caches
description: "Make a slow-starting runtime fast by saving pre-initialised state — class metadata, heap objects, profiles, or a whole warmed-up process — and reloading it at launch. Between 2018 and 2026 this quietly beat full AOT as the mainstream answer to cold starts: AWS Lambda SnapStart (2022/2024), Node.js user-land V8 snapshots (2022) and OpenJDK Project Leyden's AOT cache (JDK 24–26) all shipped, while CRaC stayed outside mainline OpenJDK. Verdict: succeeding."
area: runtime-performance
tags: [startup, snapshots, cds, appcds, leyden, crac, criu, snapstart, v8-snapshot, cold-start, serverless]
outcome: succeeding
maturity_2026: adopted
origin_year: 1980
mainstream_year: 2022
languages: [languages/java, languages/csharp, languages/javascript, languages/python, languages/kotlin]
runtimes: [runtimes/hotspot-openjdk, runtimes/graalvm, runtimes/v8, runtimes/nodejs, runtimes/dotnet-clr, runtimes/android-art]
related_ideas: [ideas/runtime-performance/aot-native-images, ideas/runtime-performance/js-engine-tiering, ideas/platforms-and-portability/edge-isolates, ideas/runtime-performance/time-to-first-plot]
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: jep341
    resource: https://openjdk.org/jeps/341
    title: "OpenJDK: JEP 341 — Default CDS Archives (JDK 12)"
    author: org:openjdk
  - id: jep350
    resource: https://openjdk.org/jeps/350
    title: "OpenJDK: JEP 350 — Dynamic CDS Archives (JDK 13)"
    author: org:openjdk
  - id: leyden-shift
    resource: https://openjdk.org/projects/leyden/notes/02-shift-and-constrain
    title: "OpenJDK: Mark Reinhold — Selectively Shifting and Constraining Computation (Project Leyden, 2022-10-13)"
    author: org:openjdk
  - id: jep483
    resource: https://openjdk.org/jeps/483
    title: "OpenJDK: JEP 483 — Ahead-of-Time Class Loading & Linking (JDK 24)"
    author: org:openjdk
  - id: jep515
    resource: https://openjdk.org/jeps/515
    title: "OpenJDK: JEP 515 — Ahead-of-Time Method Profiling (JDK 25)"
    author: org:openjdk
  - id: leyden-514-515
    resource: https://softwaremill.com/whats-new-in-project-leyden-jep-514-and-jep-515-explained/
    title: "SoftwareMill: What's New in Project Leyden — JEP 514 and JEP 515 Explained"
  - id: jep516
    resource: https://softwaremill.com/project-leyden-and-jdk-26-bringing-aot-caching-to-zgc/
    title: "SoftwareMill: Project Leyden & JDK 26 — Bringing AOT Caching to ZGC (JEP 516)"
  - id: jep544
    resource: https://openjdk.org/jeps/544
    title: "OpenJDK: JEP 544 — Ahead-of-Time Code Compilation (targeted to JDK 28)"
    author: org:openjdk
  - id: crac-infoq
    resource: https://www.infoq.com/news/2023/06/crac-cracks-mainstream-adoption/
    title: "InfoQ: CRaC Cracks Mainstream Adoption (June 2023)"
  - id: crac-openjdk
    resource: https://openjdk.org/projects/crac/
    title: "OpenJDK: Project CRaC"
    author: org:openjdk
  - id: snapstart-java
    resource: https://adtmag.com/articles/2022/11/29/aws-intros-snapstart-for-java.aspx
    title: "ADTmag: AWS Introduces Lambda SnapStart for Java (2022-11-29)"
  - id: snapstart-net
    resource: https://aws.amazon.com/blogs/aws/aws-lambda-snapstart-for-python-and-net-functions-is-now-generally-available/
    title: "AWS News Blog: Lambda SnapStart for Python and .NET is now generally available (2024-11-18)"
    author: org:aws
  - id: azul-snapstart
    resource: https://www.azul.com/blog/aws-snapstart-builds-momentum-for-the-crac-api/
    title: "Azul: AWS SnapStart Builds Momentum for the CRaC API"
    author: org:azul
  - id: node-1880
    resource: https://nodejs.org/en/blog/release/v18.8.0
    title: "Node.js: Node.js 18.8.0 release (user-land startup snapshots, --build-snapshot)"
    author: org:openjs
  - id: node-sea
    resource: https://nodejs.org/api/single-executable-applications.html
    title: "Node.js docs: Single executable applications (useSnapshot, useCodeCache since v20.6.0)"
    author: org:openjs
  - id: graalvm-detach
    resource: https://blogs.oracle.com/java/detaching-graalvm-from-the-java-ecosystem-train
    title: "Oracle Java Blog: Detaching GraalVM from the Java Ecosystem Train (Sept 2025)"
    author: org:oracle
  - id: quarkus-analytics
    resource: https://quarkus.io/blog/quarkus-insights-253-build-analytics/
    title: "Quarkus Blog: Quarkus Insights #253 — build analytics (2026-06-30)"
    author: org:red-hat
---

# Summary
**Succeeding.** The cheapest way to make a managed runtime start fast turned out not to be "compile everything ahead of time" but "do the startup work once, save it, and reload it". Three flavours matured in 2018–2026: (1) **metadata/heap caches** — HotSpot's CDS/AppCDS grew into Project Leyden's AOT cache, which in JDK 24 cut Spring PetClinic startup 42% with no code changes and by JDK 26 works with every GC;[^jep483][^jep516] (2) **language-runtime heap snapshots** — Node.js 18.8 (Aug 2022) let users build V8 startup snapshots of their own apps;[^node-1880] (3) **whole-process checkpoint/restore** — CRaC/CRIU and Firecracker-based AWS Lambda SnapStart, which went from Java (Nov 2022) to .NET and Python (Nov 2024).[^snapstart-java][^snapstart-net] The idea's weakness is not technical but distribution: CRaC never entered mainline OpenJDK, and restore-based approaches need care with secrets, randomness and connections.[^crac-infoq][^crac-openjdk]

# The idea
Instead of executing class loading, parsing, linking, static initialisation and JIT warm-up on every launch, run the program once (a *training run* or *checkpoint*), persist the resulting state, and map it into memory next time. Prior art is old: Smalltalk and Lisp images (1970s–80s), Emacs `unexec`/portable dumper (2019), JVM Class Data Sharing (JDK 5, 2004), V8 context snapshots (Chrome, 2015). The 2018–2026 pressure came from serverless billing, container autoscaling and CLI tools, and from the competing [AOT native image](/ideas/runtime-performance/aot-native-images.md) approach, which demanded a closed world.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-03 | JDK 12 ships a default CDS archive for JDK classes (JEP 341)[^jep341] | + |
| E1 | 2019-09 | JDK 13 adds dynamic AppCDS archiving at application exit (JEP 350)[^jep350] | + |
| E2 | 2021–22 | OpenJDK Project CRaC created (Azul-led) — Linux/CRIU-based checkpoint/restore[^crac-openjdk] | + |
| E2 | 2022-08 | Node.js 18.8.0: `--build-snapshot` user-land V8 startup snapshots[^node-1880] | + |
| E3 | 2022-11 | AWS Lambda SnapStart for Java (up to 10x faster cold starts), coordinated via the CRaC API[^snapstart-java][^azul-snapstart] | + |
| E3 | 2023-06 | Micronaut and Quarkus support CRaC; Spring Boot 3.2 adds it Nov 2023 (Spring Boot 3.9s→38ms demo)[^crac-infoq] | + |
| E3 | 2023-08 | Node.js 20.6: snapshots and code cache inside single executable applications[^node-sea] | + |
| E4 | 2024-11 | Lambda SnapStart GA for Python 3.12+ and .NET 8+[^snapstart-net] | + |
| E4 | 2025-03 | JDK 24 ships JEP 483 AOT class loading & linking (PetClinic 4.49s→2.60s)[^jep483] | + |
| E4 | 2025-09 | JDK 25: one-step cache creation (JEP 514) and cached method profiles (JEP 515); Oracle names Leyden as the successor to Native Image for Java SE customers[^leyden-514-515][^jep515][^graalvm-detach] | + |
| E4 | 2026-03 | JDK 26: AOT object caching with any GC incl. ZGC (JEP 516)[^jep516] | + |
| E4 | 2026-09 | JEP 544 (AOT code in the cache; 65–80% startup reduction on benchmarks) targeted to JDK 28[^jep544] | + |

# Where it succeeded
- **Serverless Java.** SnapStart made Java a viable Lambda language without code changes; extending it to Python and .NET in 2024 showed AWS sees snapshotting, not AOT, as the general cold-start answer.[^snapstart-net]
- **Mainline OpenJDK.** Leyden's incremental approach landed four JEPs across JDK 24–26 with full Java semantics preserved, and is positioned by Oracle as *the* standard startup technology.[^jep483][^jep515][^jep516][^graalvm-detach] JEP 515 profiles cut warm-up of a sample by 19%.[^jep515]
- **JS tooling.** Node's snapshot APIs plus SEA give CLI tools fast boot; V8 snapshotting underpins isolate-based platforms (see [edge isolates](/ideas/platforms-and-portability/edge-isolates.md)).[^node-sea]
- **Framework support** for CRaC across Spring, Quarkus and Micronaut arrived within 18 months.[^crac-infoq]

# Where it failed or stalled
- **CRaC never reached mainline.** As of 2026 it ships only in downstream builds (Azul Zulu, BellSoft Liberica, Canonical's openjdk-25-crac); Azul's Simon Ritter said in 2023 "we are definitely some way from this".[^crac-infoq][^crac-openjdk] Linux-only CRIU, fixed CPU features and the need to close files/sockets before checkpoint limit portability.
- **Restore hazards.** Snapshots duplicate in-memory secrets, PRNG seeds and unique IDs across instances; frameworks must implement before-checkpoint/after-restore hooks — a new class of subtle bugs.[^azul-snapstart]
- **Training runs are a new build step.** Leyden's cache must be regenerated whenever the JDK, classpath or flags change, and quality depends on how representative the training run is.[^jep483]
- **Native snapshots remain niche** outside a few CLI tools; most Node apps never use them.

# Why
1. **Compatibility first.** Snapshot/caching approaches preserve the open-world semantics (reflection, dynamic class loading, JIT) that enterprise ecosystems depend on, so adoption costs approach zero — unlike [AOT native images](/ideas/runtime-performance/aot-native-images.md). Quarkus' 2026 data (native = 2% of builds) shows how few teams accept the closed-world tax.[^quarkus-analytics]
2. **Platform owners can deploy it unilaterally.** AWS could add SnapStart inside Firecracker without waiting for language committees; OpenJDK could ship Leyden piecemeal. Ideas that the *platform* can switch on beat ideas every *library* must adopt.
3. **Incrementalism.** Leyden explicitly chose to "shift and constrain computation" step by step, delivering a usable win in each release rather than a big-bang static image: Mark Reinhold's October 2022 design note recast the project from closed-world "static images" (its 2020 framing) to "selectively shifting and constraining computation".[^leyden-shift]
4. **CRaC's governance problem.** A Linux-specific, security-sensitive whole-process snapshot does not fit Java SE's cross-platform specification model; it thrives as a vendor feature (Azul, AWS) rather than a standard.[^crac-infoq]

# Lessons
- When a runtime's slow part is deterministic, cache it; it is cheaper than changing the language model.
- Snapshot ideas succeed when the platform operator owns both the snapshot and the restore environment (Lambda, V8 isolates); portable snapshots across machines are harder to standardise.
- Expect the line between JIT and AOT to blur: by JDK 28 the Leyden cache will hold compiled code, profiles and heap objects — a JIT runtime with an AOT head-start.[^jep544]

# Related
- [HotSpot/OpenJDK](/runtimes/hotspot-openjdk.md), [GraalVM](/runtimes/graalvm.md), [V8](/runtimes/v8.md), [Node.js](/runtimes/nodejs.md), [.NET CLR](/runtimes/dotnet-clr.md)
- [Java](/languages/java.md), [JavaScript](/languages/javascript.md)
- [AOT native images](/ideas/runtime-performance/aot-native-images.md), [JS engine tiering](/ideas/runtime-performance/js-engine-tiering.md), [Julia time-to-first-plot](/ideas/runtime-performance/time-to-first-plot.md)
- Events: [Java 25 LTS](/events/2025-09-java-25-lts.md), [GraalVM detaches from Java SE](/events/2025-09-graalvm-detaches-from-java-se.md), [ART mainline update](/events/2023-08-art-mainline-update-faster-startup.md)

[^jep341]: JEP 341: Default CDS Archives — https://openjdk.org/jeps/341
[^jep350]: JEP 350: Dynamic CDS Archives — https://openjdk.org/jeps/350
[^leyden-shift]: Reinhold: Selectively Shifting and Constraining Computation — https://openjdk.org/projects/leyden/notes/02-shift-and-constrain
[^jep483]: JEP 483: Ahead-of-Time Class Loading & Linking — https://openjdk.org/jeps/483
[^jep515]: JEP 515: Ahead-of-Time Method Profiling — https://openjdk.org/jeps/515
[^leyden-514-515]: SoftwareMill: JEP 514 and JEP 515 Explained — https://softwaremill.com/whats-new-in-project-leyden-jep-514-and-jep-515-explained/
[^jep516]: SoftwareMill: Project Leyden & JDK 26 (JEP 516) — https://softwaremill.com/project-leyden-and-jdk-26-bringing-aot-caching-to-zgc/
[^jep544]: JEP 544: Ahead-of-Time Code Compilation — https://openjdk.org/jeps/544
[^crac-infoq]: InfoQ: CRaC Cracks Mainstream Adoption — https://www.infoq.com/news/2023/06/crac-cracks-mainstream-adoption/
[^crac-openjdk]: OpenJDK Project CRaC — https://openjdk.org/projects/crac/
[^snapstart-java]: ADTmag: AWS Introduces Lambda SnapStart for Java — https://adtmag.com/articles/2022/11/29/aws-intros-snapstart-for-java.aspx
[^snapstart-net]: AWS: Lambda SnapStart for Python and .NET GA — https://aws.amazon.com/blogs/aws/aws-lambda-snapstart-for-python-and-net-functions-is-now-generally-available/
[^azul-snapstart]: Azul: AWS SnapStart Builds Momentum for the CRaC API — https://www.azul.com/blog/aws-snapstart-builds-momentum-for-the-crac-api/
[^node-1880]: Node.js 18.8.0 release — https://nodejs.org/en/blog/release/v18.8.0
[^node-sea]: Node.js: Single executable applications — https://nodejs.org/api/single-executable-applications.html
[^graalvm-detach]: Oracle: Detaching GraalVM from the Java Ecosystem Train — https://blogs.oracle.com/java/detaching-graalvm-from-the-java-ecosystem-train
[^quarkus-analytics]: Quarkus Insights #253 — https://quarkus.io/blog/quarkus-insights-253-build-analytics/
