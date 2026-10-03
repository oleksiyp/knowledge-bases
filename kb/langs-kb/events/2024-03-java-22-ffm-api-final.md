---
type: Event
title: Java 22 makes the Foreign Function & Memory API final
description: "JDK 22 (2024-03-19) finalized Project Panama's Foreign Function & Memory API (JEP 454), giving Java a safe, JIT-friendly replacement for JNI after incubation in JDK 17 and previews in JDK 19–21."
event_kind: release
date: 2024-03-19
era: E3
impact: positive
languages: [languages/java, languages/kotlin, languages/swift]
runtimes: [runtimes/hotspot-openjdk, runtimes/graalvm]
ideas: [ideas/platforms-and-portability/ffi-modernization, ideas/runtime-performance/value-types, ideas/runtime-performance/aot-native-images]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: jep454
    resource: https://openjdk.org/jeps/454
    title: "OpenJDK: JEP 454 — Foreign Function & Memory API"
    author: org:openjdk
  - id: jep412
    resource: https://openjdk.org/jeps/412
    title: "OpenJDK: JEP 412 — Foreign Function & Memory API (Incubator)"
    author: org:openjdk
  - id: jep472
    resource: https://openjdk.org/jeps/472
    title: "OpenJDK: JEP 472 — Prepare to Restrict the Use of JNI"
    author: org:openjdk
  - id: jdk22
    resource: https://openjdk.org/projects/jdk/22/
    title: "OpenJDK: JDK 22 (GA 2024-03-19)"
    author: org:openjdk
  - id: swift-java-gsoc
    resource: https://www.swift.org/blog/gsoc-2025-showcase-swift-java/
    title: "Swift.org: GSoC 2025 Showcase — Extending Swift-Java Interoperability"
    author: org:apple
  - id: jep529
    resource: https://openjdk.org/jeps/529
    title: "OpenJDK: JEP 529 — Vector API (Eleventh Incubator)"
    author: org:openjdk
---

# What happened
JDK 22 reached general availability on 2024-03-19 with JEP 454, the final Foreign Function & Memory (FFM) API.[^jdk22][^jep454] It lets Java code call native functions through `Linker` downcalls and upcalls and manage off-heap memory with `MemorySegment` and `Arena` lifetimes, with no C glue code. Bindings can be generated from C headers with jextract. The API had incubated since JDK 17 (JEP 412, 2021) and previewed in JDK 19–21.[^jep412] Calling native code is a *restricted* operation that warns unless enabled with `--enable-native-access`.[^jep454]

# Why it matters
- It closed a 25-year weakness: JNI's hand-written C glue was slow to write, easy to crash, and opaque to the JIT. FFM method handles can be inlined, and memory access is bounds- and lifetime-checked.[^jep454]
- It set up the next step. JDK 24's JEP 472 made JNI library loading warn by default, applying the same restriction model to both APIs as part of OpenJDK's "integrity by default" push.[^jep472]
- Other ecosystems build on it: Swift's `swift-java` jextract uses FFM as its primary mode (JDK 22+), adding a JNI mode only for Android, where FFM is unavailable.[^swift-java-gsoc]
- It also shows the limit of Panama's success. The Vector API, Panama's other half, stayed in incubation (eleventh round in JDK 26) waiting for Valhalla.[^jep529]

# Related
- [FFI modernization](/ideas/platforms-and-portability/ffi-modernization.md)
- [Value types](/ideas/runtime-performance/value-types.md)
- [Java](/languages/java.md), [HotSpot/OpenJDK](/runtimes/hotspot-openjdk.md)

[^jep454]: OpenJDK: JEP 454 — https://openjdk.org/jeps/454
[^jep412]: OpenJDK: JEP 412 — https://openjdk.org/jeps/412
[^jep472]: OpenJDK: JEP 472 — https://openjdk.org/jeps/472
[^jdk22]: OpenJDK: JDK 22 — https://openjdk.org/projects/jdk/22/
[^swift-java-gsoc]: Swift.org: GSoC 2025 Showcase — https://www.swift.org/blog/gsoc-2025-showcase-swift-java/
[^jep529]: OpenJDK: JEP 529 — https://openjdk.org/jeps/529
