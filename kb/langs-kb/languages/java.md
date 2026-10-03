---
type: Language
title: Java
description: "The enterprise incumbent that modernised on a six-month cadence: records, sealed types, pattern matching, virtual threads and Leyden AOT caches shipped 2020–2025, while Valhalla value types slipped past a decade and Oracle's licensing pushed users to other OpenJDK builds."
tags: [jvm, enterprise, android, openjdk, oracle, virtual-threads, pattern-matching]
paradigms: [object-oriented, imperative, functional]
typing: static
memory_model: gc
first_released: 1996
steward: Oracle (OpenJDK lead) with the OpenJDK community and the JCP
governance: single-vendor
trajectory: stable
ideas:
  - ideas/concurrency/virtual-threads
  - ideas/concurrency/structured-concurrency
  - ideas/types/sum-types-and-pattern-matching
  - ideas/types/null-safety
  - ideas/runtime-performance/value-types
  - ideas/runtime-performance/low-pause-gc
  - ideas/runtime-performance/aot-native-images
  - ideas/runtime-performance/startup-snapshotting
  - ideas/platforms-and-portability/ffi-modernization
  - ideas/metaprogramming/source-generators-and-annotation-processing
runtimes: [runtimes/hotspot-openjdk, runtimes/graalvm, runtimes/android-art]
adoption_signals:
  tiobe_rank: { value: 4, as_of: 2026-09 }
  so_survey_usage_pct: { value: 29.4, as_of: 2025 }
  oracle_jdk_share_of_prod_jvms_pct: { value: 21, as_of: 2024 }
era_momentum: { E1: flat, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: tiobe
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index, September 2026"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
  - id: nr-2024
    resource: https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
    title: "New Relic: 2024 State of the Java Ecosystem"
  - id: oracle-faq-2019
    resource: https://blogs.oracle.com/java/oracle-java-se-releases-faq
    title: "Oracle Java Blog: Oracle Java SE Releases FAQ"
    author: org:oracle
  - id: gartner-ujs
    resource: https://www.infoworld.com/article/2338028/oracles-new-java-subscription-model-to-cost-a-lot-more-gartner.html
    title: "InfoWorld: Oracle's new Java subscription model to cost a lot more — Gartner"
  - id: jep395
    resource: https://openjdk.org/jeps/395
    title: "JEP 395: Records"
  - id: jep409
    resource: https://openjdk.org/jeps/409
    title: "JEP 409: Sealed Classes"
  - id: jep441
    resource: https://openjdk.org/jeps/441
    title: "JEP 441: Pattern Matching for switch"
  - id: jep444
    resource: https://openjdk.org/jeps/444
    title: "JEP 444: Virtual Threads"
  - id: jep491
    resource: https://openjdk.org/jeps/491
    title: "JEP 491: Synchronize Virtual Threads without Pinning"
  - id: jep465
    resource: https://openjdk.org/jeps/465
    title: "JEP 465: String Templates (Third Preview) — Closed/Withdrawn"
  - id: jvmweekly-st
    resource: https://www.jvm-weekly.com/p/why-did-string-templates-have-to
    title: "JVM Weekly: Why Did String Templates Have to Die?"
  - id: infoq-java25
    resource: https://www.infoq.com/news/2025/09/java25-released
    title: "InfoQ: JDK 25 released (18 JEPs)"
  - id: oracle-java26
    resource: https://www.oracle.com/news/announcement/oracle-releases-java-26-2026-03-17/
    title: "Oracle: Oracle Releases Java 26"
    author: org:oracle
  - id: jdk27
    resource: https://inside.java/2026/09/15/jdk-27-available/
    title: "Inside.java: The Arrival of Java 27"
    author: org:oracle
  - id: reg-valhalla
    resource: https://www.theregister.com/devops/2026/06/15/javas-project-valhalla-finally-lands-a-preview-in-jdk-28/5255557
    title: "The Register: Java's Project Valhalla finally lands a preview in JDK 28"
  - id: jep483
    resource: https://openjdk.org/jeps/483
    title: "JEP 483: Ahead-of-Time Class Loading & Linking"
  - id: android-kotlin-first
    resource: https://developer.android.com/kotlin/first
    title: "Android Developers: Android's Kotlin-first approach"
  - id: jakarta-ns
    resource: https://www.infoq.com/news/2019/05/end-of-javax-package/
    title: "InfoQ: The end of the javax package namespace for Jakarta EE"
---

# Summary
Java spent 2018–2026 proving that a 30-year-old enterprise language can modernise without breaking its users. The six-month release train that began with JDK 10 delivered on time through JDK 27 (15 Sep 2026, the 18th consecutive on-time feature release).[^jdk27] Through it Java absorbed the main ideas it had been losing ground on: records (JDK 16), sealed classes (JDK 17), pattern matching for `switch` (JDK 21), virtual threads (JDK 21), the Panama foreign-function API (JDK 22), and Project Leyden's AOT caches (JDK 24–26).[^jep395][^jep409][^jep441][^jep444][^jep483] Java is still TIOBE #4 (Sep 2026) and used by 29.4% of Stack Overflow 2025 respondents.[^tiobe][^so-2025]

The failures were about stewardship and the hardest runtime problems, not language direction. Valhalla value types reached only a preview targeted at JDK 28 (Mar 2027), twelve years after the project began.[^reg-valhalla] String Templates were withdrawn after two previews.[^jep465] Oracle's licensing changes in 2019 and 2023 drove production workloads to other OpenJDK builds, and Oracle JDK's share fell to 21% by 2024.[^oracle-faq-2019][^gartner-ujs][^nr-2024] On Android, Google's 2019 "Kotlin-first" policy ended Java's role as the default app language.[^android-kotlin-first] Verdict: **stable incumbent, successfully modernised**; it is losing mindshare but not share of production code.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-01 | Oracle JDK 8 public updates end for commercial users; OTN licence from April 2019 ([event](/events/2019-01-oracle-java-8-public-updates-end.md)) [^oracle-faq-2019] | − |
| E1 | 2019-05 | Android goes Kotlin-first ([event](/events/2019-05-android-kotlin-first.md)) [^android-kotlin-first] | − |
| E1 | 2019-05 | Oracle–Eclipse trademark deal forces `javax` → `jakarta` rename ([event](/events/2019-05-jakarta-ee-javax-namespace.md)) [^jakarta-ns] | − |
| E2 | 2021-03 | JDK 16: records final [^jep395] | + |
| E2 | 2021-04 | Supreme Court rules for Google in *Google v. Oracle* ([event](/events/2021-04-google-v-oracle-supreme-court.md)) | mixed |
| E2 | 2021-09 | JDK 17 LTS: sealed classes; Oracle JDK free again under NFTC ([event](/events/2021-09-java-17-lts-free-oracle-jdk.md)) [^jep409] | + |
| E3 | 2023-01 | Oracle per-employee Java SE Universal Subscription ([event](/events/2023-01-oracle-java-per-employee-licensing.md)) [^gartner-ujs] | − |
| E3 | 2023-09 | JDK 21 LTS: virtual threads, pattern matching for switch, record patterns ([event](/events/2023-09-java-21-virtual-threads.md)) [^jep444][^jep441] | + |
| E3 | 2024-04 | String Templates withdrawn before JDK 23 [^jep465] | − |
| E4 | 2025-03 | JDK 24: virtual threads no longer pin on `synchronized`; first Leyden AOT cache [^jep491][^jep483] | + |
| E4 | 2025-09 | JDK 25 LTS: scoped values, compact source files, compact object headers ([event](/events/2025-09-java-25-lts.md)) [^infoq-java25] | + |
| E4 | 2026-03 | JDK 26: HTTP/3, AOT cache with any GC, Applet API removed [^oracle-java26] | + |
| E4 | 2026-09 | JDK 27: compact object headers on by default; structured concurrency in its 7th preview; Vector API in its 12th incubator [^jdk27] | mixed |

# Ideas it bet on
| Idea | Outcome for Java |
|---|---|
| [Virtual threads](/ideas/concurrency/virtual-threads.md) | succeeded: final in 21; pinning fixed in 24 |
| [Structured concurrency](/ideas/concurrency/structured-concurrency.md) | stalled: 7 previews by JDK 27 |
| [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md) | succeeded: records + sealed + switch patterns |
| [Value types](/ideas/runtime-performance/value-types.md) | stalled: JEP 401 preview only in JDK 28 |
| [Null safety](/ideas/types/null-safety.md) | unproven: JSpecify annotations, null-restricted types still a draft |
| [Low-pause GC](/ideas/runtime-performance/low-pause-gc.md) | succeeded: ZGC, Shenandoah, generational variants |
| [Startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md) | succeeding: Leyden AOT cache (24–26) |
| [AOT native images](/ideas/runtime-performance/aot-native-images.md) | mixed: worked via GraalVM, which Oracle then detached |
| [FFI modernisation](/ideas/platforms-and-portability/ffi-modernization.md) | succeeded: FFM API final in 22 |

# What succeeded
- **Predictable cadence.** Semi-annual releases plus an LTS every two years (11, 17, 21, 25) turned language change into a steady stream, not a decade-long Java 7→8 gap. JDK 27 was the 18th on-time release in a row.[^jdk27]
- **Data-oriented programming.** Records, sealed interfaces and exhaustive pattern `switch` gave Java the algebraic-data-type style of Kotlin and Scala with full backward compatibility.[^jep395][^jep409][^jep441]
- **Virtual threads.** JEP 444 made thread-per-request scale without changing code to async/reactive style. JDK 24 removed the main caveat, pinning on `synchronized`.[^jep444][^jep491]
- **Startup without leaving the JVM.** Leyden's AOT class loading cut startup by up to about 42% with no code changes.[^jep483] JDK 25–27 added method profiling and made compact object headers the default.[^infoq-java25][^jdk27]
- **Upgrade velocity improved.** Java 17 went from 9% to over 35% of production apps in a year, and Java 21 was adopted 287% faster than 17 in its first six months (New Relic).[^nr-2024]

# What failed or stalled
- **Valhalla.** Value classes reached only a preview targeted at JDK 28. The integration PR was about 197,000 lines, and Brian Goetz warned the feature is likely to still be in preview at the next LTS.[^reg-valhalla] The Vector API depends on it and was in its 12th incubator in JDK 27.[^jdk27]
- **String Templates.** Previewed in JDK 21 and 22, then withdrawn in April 2024 with "no consensus" on a better design. This was the first big feature withdrawn after preview.[^jep465][^jvmweekly-st]
- **Licensing as an own goal.** The 2019 end of free commercial updates and the January 2023 per-employee pricing ($15 per employee per month at the low end) produced audits and an exodus. Oracle JDK fell to 21% of production JVMs, close to Adoptium (18%) and Amazon (18%).[^gartner-ujs][^nr-2024]
- **Enterprise Java fragmentation.** The `javax` trademark restriction forced a namespace break across the whole Jakarta EE ecosystem.[^jakarta-ns]
- **Structured concurrency.** Seven previews by JDK 27, with API redesigns between them.[^jdk27]
- **Mindshare on Android.** New Android APIs and Jetpack Compose are Kotlin-only.[^android-kotlin-first]

# By era
## E1
The six-month train was still new and Java 8 dominated production. Oracle's licence change and the Jakarta namespace dispute dominated the news. Android chose Kotlin. Language work was mostly previews (switch expressions, text blocks).
## E2
Records (16) and sealed classes (17) were finalised. JDK 17 LTS plus the NFTC licence brought migration momentum, and the Supreme Court settled the API copyright question in Google's favour.
## E3
JDK 21 was the strongest LTS in a decade: virtual threads, switch pattern matching, generational ZGC. Oracle's per-employee pricing and the String Templates withdrawal were the setbacks.
## E4
Execution-focused. JDK 24 fixed pinning; JDK 25 LTS shipped nine Leyden-related JEPs and compact headers. Oracle detached GraalVM from Java SE ([event](/events/2025-09-graalvm-detaches-from-java-se.md)). Valhalla was finally scheduled for preview.

# Lessons
- An incumbent can close a language-feature gap if it accepts multi-year previews. The cost is that some previews never ship (String Templates), and the hardest one, Valhalla, took over ten years.
- Licensing and pricing can push users away faster than technology can keep them. OpenJDK's GPL+CPE licence meant users could leave Oracle without leaving Java.
- Doing the work in the runtime (virtual threads, Leyden) beat language-level alternatives (async/await, native images) for an ecosystem with billions of lines of existing code.

# Related
- [Kotlin](/languages/kotlin.md), [C#](/languages/csharp.md), [Go](/languages/go.md), [Scala](/languages/scala.md)
- [HotSpot / OpenJDK](/runtimes/hotspot-openjdk.md), [GraalVM](/runtimes/graalvm.md), [Android ART](/runtimes/android-art.md)

[^tiobe]: TIOBE Index, September 2026 — https://www.tiobe.com/tiobe-index/
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^nr-2024]: New Relic 2024 State of the Java Ecosystem — https://newrelic.com/resources/report/2024-state-of-the-java-ecosystem
[^oracle-faq-2019]: Oracle Java SE Releases FAQ — https://blogs.oracle.com/java/oracle-java-se-releases-faq
[^gartner-ujs]: InfoWorld on Gartner and Java SE Universal Subscription — https://www.infoworld.com/article/2338028/oracles-new-java-subscription-model-to-cost-a-lot-more-gartner.html
[^jep395]: JEP 395 — https://openjdk.org/jeps/395
[^jep409]: JEP 409 — https://openjdk.org/jeps/409
[^jep441]: JEP 441 — https://openjdk.org/jeps/441
[^jep444]: JEP 444 — https://openjdk.org/jeps/444
[^jep491]: JEP 491 — https://openjdk.org/jeps/491
[^jep465]: JEP 465 (withdrawn) — https://openjdk.org/jeps/465
[^jvmweekly-st]: JVM Weekly: Why Did String Templates Have to Die? — https://www.jvm-weekly.com/p/why-did-string-templates-have-to
[^infoq-java25]: InfoQ: JDK 25 released — https://www.infoq.com/news/2025/09/java25-released
[^oracle-java26]: Oracle Releases Java 26 — https://www.oracle.com/news/announcement/oracle-releases-java-26-2026-03-17/
[^jdk27]: Inside.java: The Arrival of Java 27 — https://inside.java/2026/09/15/jdk-27-available/
[^reg-valhalla]: The Register: Valhalla preview in JDK 28 — https://www.theregister.com/devops/2026/06/15/javas-project-valhalla-finally-lands-a-preview-in-jdk-28/5255557
[^jep483]: JEP 483 — https://openjdk.org/jeps/483
[^android-kotlin-first]: Android's Kotlin-first approach — https://developer.android.com/kotlin/first
[^jakarta-ns]: InfoQ: end of javax namespace — https://www.infoq.com/news/2019/05/end-of-javax-package/
