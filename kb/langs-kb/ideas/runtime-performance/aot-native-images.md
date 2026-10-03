---
type: Idea
title: AOT native images for managed languages
description: "Compile a JIT-oriented managed language (Java, C#, Kotlin) ahead of time into a self-contained native executable under a closed-world assumption. GraalVM Native Image and .NET Native AOT both shipped production-grade versions in 2022–2023, but adoption stayed niche (about 2% of Quarkus builds in 2026) and Oracle stopped supporting Native Image for Java SE customers in 2025 in favour of Project Leyden's JIT-friendly caching. Verdict: mixed — it works, and it pushed whole ecosystems toward reflection-free code, but it did not become the default."
area: runtime-performance
tags: [aot, native-image, graalvm, nativeaot, closed-world, trimming, kotlin-native, serverless, startup]
outcome: mixed
maturity_2026: adopted
origin_year: 1996
mainstream_year: 2022
languages: [languages/java, languages/csharp, languages/kotlin, languages/go, languages/dart]
runtimes: [runtimes/graalvm, runtimes/dotnet-clr, runtimes/hotspot-openjdk, runtimes/android-art]
related_ideas: [ideas/runtime-performance/startup-snapshotting, ideas/metaprogramming/source-generators-and-annotation-processing, ideas/platforms-and-portability/kotlin-multiplatform, ideas/runtime-performance/low-pause-gc]
era_momentum: { E1: up, E2: up, E3: up, E4: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: graalvm-19
    resource: https://medium.com/graalvm/announcing-graalvm-19-4590cf354df8
    title: "GraalVM Blog: Announcing GraalVM 19.0 — first production release (May 2019)"
    author: org:oracle
  - id: spring-boot-3-ga
    resource: https://spring.io/blog/2022/11/24/spring-boot-3-0-goes-ga/
    title: "Spring Blog: Spring Boot 3.0 Goes GA (2022-11-24)"
    author: org:vmware
  - id: spring-native-archived
    resource: https://github.com/spring-attic/spring-native
    title: "GitHub: spring-attic/spring-native — superseded by Spring Boot 3 official native support"
  - id: graalvm-free
    resource: https://blogs.oracle.com/graal/graalvm-free-license
    title: "Oracle GraalVM Blog: Introducing the GraalVM Free License (June 2023)"
    author: org:oracle
  - id: graalvm-detach
    resource: https://blogs.oracle.com/java/detaching-graalvm-from-the-java-ecosystem-train
    title: "Oracle Java Blog: Detaching GraalVM from the Java Ecosystem Train (Sept 2025)"
    author: org:oracle
  - id: adtmag-graalvm
    resource: https://adtmag.com/articles/2025/09/30/oracle-shifts-graalvm-focus-away-from-java.aspx
    title: "ADTmag: Oracle Shifts GraalVM Focus Away from Java, Highlights Native Image Updates in JDK 25"
  - id: micronaut-graal
    resource: https://github.com/micronaut-projects/micronaut-core/discussions/12073
    title: "GitHub: micronaut-core discussion #12073 — Impact of recent announcement from Oracle regarding GraalVM"
  - id: quarkus-analytics
    resource: https://quarkus.io/blog/quarkus-insights-253-build-analytics/
    title: "Quarkus Blog: Quarkus Insights #253 — What the Build Analytics Tell Us (2026-06-30)"
    author: org:red-hat
  - id: dotnet7
    resource: https://devblogs.microsoft.com/dotnet/announcing-dotnet-7/
    title: ".NET Blog: .NET 7 is Available Today (Nov 2022)"
    author: org:microsoft
  - id: aspnet-aot
    resource: https://learn.microsoft.com/en-us/aspnet/core/fundamentals/native-aot?view=aspnetcore-10.0
    title: "Microsoft Learn: ASP.NET Core support for Native AOT"
    author: org:microsoft
  - id: aot-libs
    resource: https://devblogs.microsoft.com/dotnet/creating-aot-compatible-libraries/
    title: ".NET Blog: How to make libraries compatible with native AOT"
    author: org:microsoft
  - id: kn-mm
    resource: https://kotlinlang.org/docs/whatsnew1720.html
    title: "kotlinlang.org: What's new in Kotlin 1.7.20 (new Kotlin/Native memory manager by default)"
    author: org:jetbrains
  - id: jep544
    resource: https://openjdk.org/jeps/544
    title: "OpenJDK: JEP 544 — Ahead-of-Time Code Compilation (targeted to JDK 28)"
    author: org:openjdk
  - id: snapstart-net
    resource: https://aws.amazon.com/blogs/aws/aws-lambda-snapstart-for-python-and-net-functions-is-now-generally-available/
    title: "AWS News Blog: AWS Lambda SnapStart for Python and .NET functions is now generally available (2024-11-18)"
    author: org:aws
  - id: baseline-profiles
    resource: https://android-developers.googleblog.com/2022/01/improving-app-performance-with-baseline.html
    title: "Android Developers Blog: Improving App Performance with Baseline Profiles (Jan 2022)"
    author: org:google
---

# Summary
**Mixed.** Between 2018 and 2023 the managed-language world built genuinely production-ready AOT compilers: GraalVM Native Image became the backbone of Quarkus and Micronaut and went GA inside Spring Boot 3.0 (2022-11-24),[^spring-boot-3-ga] .NET 7 shipped Native AOT for console apps (Nov 2022) and .NET 8 extended it to ASP.NET Core minimal APIs,[^dotnet7][^aspnet-aot] and Kotlin/Native finally got a usable memory model in 2022.[^kn-mm] The technology works: tens-of-milliseconds startup, small images, low RSS. But it never became the default way to ship Java or C#. Quarkus' own telemetry showed native builds falling from 2.5% to 2% of all builds between May 2025 and May 2026,[^quarkus-analytics] and in September 2025 Oracle stopped supporting Native Image for Java SE subscribers, pointing customers to Project Leyden's JIT-preserving AOT cache instead.[^graalvm-detach][^adtmag-graalvm] The lasting impact is indirect: AOT forced frameworks to become reflection-free and build-time-oriented (source generators, Spring AOT, trimming analyzers), which helps everyone, including JIT users.

# The idea
Managed runtimes traditionally load classes lazily, interpret, profile and JIT-compile; this gives excellent peak throughput but slow startup and high memory. An AOT "native image" instead analyses the whole program at build time under a **closed-world assumption** (no unknown classes loaded later, reflection declared up front), runs static initialisers at build time, and emits a single native executable. Prior art: GCJ (1998), Excelsior JET, .NET NGen/CoreRT/.NET Native for UWP, Mono AOT for iOS (required because iOS bans JIT), RoboVM. The 2018–2026 driver was containers and serverless, where per-instance startup and memory are billed, and competition from Go, whose static binaries set the expectation.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-05 | GraalVM 19.0 first production release; Native Image ships as an early-adopter plugin[^graalvm-19] | + |
| E1 | 2019 | Quarkus (Mar 2019) and Micronaut build "native-first" Java frameworks on Native Image | + |
| E2 | 2021-03 | Spring Native beta (experimental) | + |
| E2 | 2022-01 | Android ships Baseline Profiles: ART AOT-compiles critical paths, ~30% faster first launch[^baseline-profiles] | + |
| E2 | 2022-09 | Kotlin 1.7.20 enables new Kotlin/Native memory manager by default; freezing deprecated[^kn-mm] | + |
| E3 | 2022-11 | Spring Boot 3.0 GA with official native support; Spring Native archived Feb 2023[^spring-boot-3-ga][^spring-native-archived] | + |
| E3 | 2022-11 | .NET 7 ships Native AOT for console apps[^dotnet7] | + |
| E3 | 2023-06 | Oracle GraalVM (ex-Enterprise, with better Native Image optimizations) made free under GFTC[^graalvm-free] | + |
| E3 | 2023-11 | .NET 8: Native AOT for ASP.NET Core minimal APIs, gRPC, worker services; MVC still unsupported[^aspnet-aot] | mixed |
| E4 | 2024-11 | AWS Lambda SnapStart extended to .NET and Python — snapshotting competes with AOT for cold starts[^snapstart-net] | − |
| E4 | 2025-09 | Oracle detaches GraalVM from Java SE; Native Image discontinued for Java SE Product customers; Leyden named as the path[^graalvm-detach][^adtmag-graalvm] | − |
| E4 | 2026-06 | Quarkus telemetry: native builds 2% of builds, down from 2.5%[^quarkus-analytics] | − |
| E4 | 2026-09 | JEP 544 (AOT code compilation into the Leyden cache) targeted to JDK 28[^jep544] | mixed |

# Where it succeeded
- **Serverless and CLIs.** Native Image and .NET Native AOT are the standard answer for Java/C# command-line tools and AWS Lambda functions where cold start dominates cost; .NET 8's AOT template cut minimal-API startup and image size substantially (Microsoft's benchmark chart shows lower size, memory and startup for AOT vs trimmed and untrimmed apps).[^aspnet-aot]
- **Framework design.** Quarkus and Micronaut proved that moving dependency injection, configuration and proxy generation to build time works; Spring followed with "Spring AOT" processing in Boot 3, which is used even by JVM (non-native) deployments.[^spring-boot-3-ga]
- **iOS and mobile.** Where JIT is forbidden (iOS) AOT is not optional; Kotlin/Native's 2022 memory-manager rewrite unblocked [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md) on iOS.[^kn-mm] On Android, ART's hybrid JIT/AOT with Baseline Profiles is a pragmatic success.[^baseline-profiles]
- **Ecosystem hygiene.** .NET's trimming/AOT analyzers and "AOT-compatible" library guidance pushed System.Text.Json, Regex, logging and DI toward [source generators](/ideas/metaprogramming/source-generators-and-annotation-processing.md).[^aot-libs]

# Where it failed or stalled
- **Never the default.** Native builds remain a small minority even in Quarkus, the most native-friendly Java framework (2% of builds in 2026).[^quarkus-analytics] Spring Boot users overwhelmingly deploy on the JVM.
- **Compatibility tax.** ASP.NET Core MVC, Blazor Server, Session and OData are still listed as unsupported under Native AOT in the .NET 10 docs; minimal APIs only "partially" supported.[^aspnet-aot] Java libraries need reachability metadata for reflection, proxies, resources and JNI.
- **Steward retreat.** Oracle's September 2025 decision ended Native Image support for Java SE subscribers and removed the experimental Graal JIT after JDK 24; the GraalVM team refocused on GraalPy/GraalJS.[^graalvm-detach][^adtmag-graalvm] Native Image continues as open source (Micronaut maintainers stressed users "will continue to get the instant startup"), but the strategic signal was negative.[^micronaut-graal]
- **Out-competed on its own turf.** Checkpoint/restore (Lambda SnapStart for Java in 2022 and for .NET in 2024) delivers sub-second cold starts with no closed-world restrictions.[^snapstart-net] See [startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md).

# Why
1. **The closed-world assumption collides with how enterprise Java/C# is written.** Decades of frameworks rely on runtime reflection, dynamic proxies, classpath scanning and bytecode generation. AOT requires either rewriting those (expensive, slow) or hand-maintained metadata (fragile). The payoff — startup — matters for only a subset of workloads.
2. **Peak throughput and tooling regress.** Without a profiling JIT, long-running services often run slower (Oracle GraalVM's PGO narrows the gap, but needs a training run), builds take minutes and lots of RAM, and debugging/profiling tools are weaker. Most server workloads are long-running, so the JIT wins.
3. **Cheaper substitutes arrived.** Leyden's AOT cache (JDK 24–26) gets 40–70% of the startup win with zero code changes and full compatibility,[^jep544] and CRaC/SnapStart restores warmed heaps. When a 80%-solution is free and compatible, the 100%-solution with a tax stays niche.
4. **Steward economics.** Oracle could not monetize Native Image separately once it was free (GFTC 2023) and Leyden was going to absorb the use case into the JDK itself; maintaining two strategies was redundant.[^graalvm-free][^graalvm-detach] Microsoft, by contrast, keeps investing because AOT also serves iOS/Android (MAUI) and WASM — multiple strategic customers.
5. **Go set the bar but also took the market.** Many teams that needed static binaries and fast startup simply chose Go (or Rust) for those services rather than fighting the JVM's closed-world tax.

# Lessons
- Retrofitting a closed world onto an open-world language ecosystem takes ~5–10 years of library migration; the indirect benefits (build-time frameworks, reflection-free libraries) can outlast the headline feature.
- Incremental, compatibility-preserving optimizations (Leyden, profile caching, snapshots) tend to beat "rewrite the deployment model" approaches for mainstream adoption.
- AOT is non-negotiable only where the platform forbids JIT (iOS, consoles, some embedded) — that's where it is mainstream.

# Related
- [GraalVM](/runtimes/graalvm.md), [.NET CLR](/runtimes/dotnet-clr.md), [HotSpot/OpenJDK](/runtimes/hotspot-openjdk.md), [Android ART](/runtimes/android-art.md)
- [Java](/languages/java.md), [C#](/languages/csharp.md), [Kotlin](/languages/kotlin.md), [Go](/languages/go.md)
- [Startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md), [Source generators and annotation processing](/ideas/metaprogramming/source-generators-and-annotation-processing.md), [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md)
- Events: [GraalVM detaches from Java SE](/events/2025-09-graalvm-detaches-from-java-se.md), [Java 25 LTS](/events/2025-09-java-25-lts.md), [KMP stable](/events/2023-11-kotlin-multiplatform-stable.md)

[^graalvm-19]: Announcing GraalVM 19.0 — https://medium.com/graalvm/announcing-graalvm-19-4590cf354df8
[^spring-boot-3-ga]: Spring Blog: Spring Boot 3.0 Goes GA — https://spring.io/blog/2022/11/24/spring-boot-3-0-goes-ga/
[^spring-native-archived]: GitHub: spring-attic/spring-native — https://github.com/spring-attic/spring-native
[^graalvm-free]: Oracle: Introducing the GraalVM Free License — https://blogs.oracle.com/graal/graalvm-free-license
[^graalvm-detach]: Oracle: Detaching GraalVM from the Java Ecosystem Train — https://blogs.oracle.com/java/detaching-graalvm-from-the-java-ecosystem-train
[^adtmag-graalvm]: ADTmag: Oracle Shifts GraalVM Focus Away from Java — https://adtmag.com/articles/2025/09/30/oracle-shifts-graalvm-focus-away-from-java.aspx
[^micronaut-graal]: Micronaut discussion #12073 — https://github.com/micronaut-projects/micronaut-core/discussions/12073
[^quarkus-analytics]: Quarkus Insights #253: build analytics — https://quarkus.io/blog/quarkus-insights-253-build-analytics/
[^dotnet7]: .NET Blog: .NET 7 is Available Today — https://devblogs.microsoft.com/dotnet/announcing-dotnet-7/
[^aspnet-aot]: Microsoft Learn: ASP.NET Core support for Native AOT — https://learn.microsoft.com/en-us/aspnet/core/fundamentals/native-aot?view=aspnetcore-10.0
[^aot-libs]: .NET Blog: How to make libraries compatible with native AOT — https://devblogs.microsoft.com/dotnet/creating-aot-compatible-libraries/
[^kn-mm]: What's new in Kotlin 1.7.20 — https://kotlinlang.org/docs/whatsnew1720.html
[^jep544]: JEP 544: Ahead-of-Time Code Compilation — https://openjdk.org/jeps/544
[^snapstart-net]: AWS: Lambda SnapStart for Python and .NET GA — https://aws.amazon.com/blogs/aws/aws-lambda-snapstart-for-python-and-net-functions-is-now-generally-available/
[^baseline-profiles]: Android Developers Blog: Baseline Profiles — https://android-developers.googleblog.com/2022/01/improving-app-performance-with-baseline.html
