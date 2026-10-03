---
type: Idea
title: FFI modernization (Panama FFM, Swift–C++ interop, Kotlin/Native and Swift export)
description: "Replacing hand-written, unsafe glue (JNI, Objective-C bridging headers, runtime-generated P/Invoke stubs) with safe, tool-generated, compiler-understood foreign-function interfaces. Verdict: succeeding. Java's FFM API went final in JDK 22 (2024) and JNI is being restricted; Swift gained bidirectional C++ interop; .NET moved P/Invoke to source generation. Kotlin's direct Swift export is still alpha, and the JVM's SIMD companion (Vector API) is stuck in incubation."
area: platforms-and-portability
tags: [ffi, interop, panama, ffm, jni, jextract, swift-cxx-interop, kotlin-native, swift-export, pinvoke, libraryimport]
outcome: succeeding
maturity_2026: adopted
origin_year: 1997
mainstream_year: 2024
languages: [languages/java, languages/swift, languages/kotlin, languages/csharp, languages/cpp, languages/c, languages/objective-c]
runtimes: [runtimes/hotspot-openjdk, runtimes/dotnet-clr, runtimes/graalvm, runtimes/android-art]
related_ideas: [ideas/runtime-performance/value-types, ideas/platforms-and-portability/kotlin-multiplatform, ideas/memory-safety/cpp-successor-languages, ideas/metaprogramming/source-generators-and-annotation-processing, ideas/platforms-and-portability/wasi-and-component-model]
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: jep454
    resource: https://openjdk.org/jeps/454
    title: "OpenJDK: JEP 454 — Foreign Function & Memory API (final, JDK 22)"
    author: org:openjdk
  - id: jep412
    resource: https://openjdk.org/jeps/412
    title: "OpenJDK: JEP 412 — Foreign Function & Memory API (Incubator), JDK 17"
    author: org:openjdk
  - id: jep472
    resource: https://openjdk.org/jeps/472
    title: "OpenJDK: JEP 472 — Prepare to Restrict the Use of JNI (JDK 24)"
    author: org:openjdk
  - id: jextract
    resource: https://github.com/openjdk/jextract
    title: "GitHub: openjdk/jextract"
    author: org:openjdk
  - id: jep529
    resource: https://openjdk.org/jeps/529
    title: "OpenJDK: JEP 529 — Vector API (Eleventh Incubator)"
    author: org:openjdk
  - id: swift59
    resource: https://www.swift.org/blog/swift-5.9-released/
    title: "Swift.org: Swift 5.9 Released (C++ interoperability)"
    author: org:apple
  - id: swift-cxx-status
    resource: https://www.swift.org/documentation/cxx-interop/status/
    title: "Swift.org: Supported Features and Constraints of C++ Interoperability"
    author: org:apple
  - id: swift-java-gsoc
    resource: https://www.swift.org/blog/gsoc-2025-showcase-swift-java/
    title: "Swift.org: GSoC 2025 Showcase — Extending Swift-Java Interoperability"
    author: org:apple
  - id: swift-java
    resource: https://github.com/swiftlang/swift-java
    title: "GitHub: swiftlang/swift-java"
    author: org:apple
  - id: kotlin-swift-export
    resource: https://kotlinlang.org/docs/native-swift-export.html
    title: "kotlinlang.org: Interoperability with Swift using Swift export"
    author: org:jetbrains
  - id: kotlin-2220
    resource: https://kotlinlang.org/docs/whatsnew2220.html
    title: "kotlinlang.org: What's new in Kotlin 2.2.20"
    author: org:jetbrains
  - id: dotnet-libraryimport
    resource: https://learn.microsoft.com/en-us/dotnet/standard/native-interop/pinvoke-source-generation
    title: "Microsoft Learn: P/Invoke source generation (LibraryImport, .NET 7)"
    author: org:microsoft
  - id: devclass-pinvoke
    resource: https://devclass.com/2022/11/14/microsoft-platform-invoke-in-net-7-0-sweeps-away-old-weird-behaviors-in-fundamental-shift/
    title: "DevClass: Microsoft Platform Invoke in .NET 7.0 sweeps away 'old weird behaviors'"
---

# Summary
Between 2018 and 2026 the three big managed/app platforms rebuilt their native-interop layers around the same pattern: **describe foreign code declaratively, generate bindings with a tool, and let the compiler or JIT see through the call.** Java's Project Panama replaced JNI with the **Foreign Function & Memory (FFM) API**: incubator in JDK 17, final in **JDK 22 (March 2024)**. Since JDK 24, JNI loading emits warnings as a step toward "integrity by default".[^jep412][^jep454][^jep472] Swift 5.9 (2023) added **bidirectional C++ interop** without bridging through Objective-C.[^swift59] It later added a Swift–Java bridge (`swift-java`) built on FFM, with a JNI mode for Android.[^swift-java-gsoc] .NET 7 moved P/Invoke marshalling to compile-time **source generation** (`LibraryImport`) so it works with trimming and Native AOT.[^dotnet-libraryimport] Kotlin/Native still exports to Swift via Objective-C headers; direct **Swift export** arrived as experimental in Kotlin 2.2.20 and was still alpha in 2026.[^kotlin-2220][^kotlin-swift-export] **Verdict: succeeding.** The new APIs are final and adopted by library authors, but migrations from JNI and Objective-C bridges are years-long.

# The idea
- **What:** first-class, type-safe description of native functions and memory layouts (`Linker`, `MemorySegment`, `Arena` in Java; imported C++ types in Swift; `[LibraryImport]` partial methods in C#), with binding generators (jextract, Swift's generated C++ header, `swift-java jextract`) instead of hand-written C glue.
- **Prior art:** JNI (1997), JNA, P/Invoke (2002), Python ctypes/cffi, Rust `bindgen`/`cxx`, LuaJIT FFI. These either required C glue code (JNI), were slow (JNA, reflection-based), or generated stubs at runtime (classic P/Invoke).
- **Problem solved:** calling C/C++ libraries (ML runtimes, databases, codecs, OS APIs) from managed code without crash-prone glue; off-heap memory with deterministic deallocation; letting AOT compilers and trimmers see interop code; letting Swift adopt C++ codebases incrementally.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2021-09-14 | JDK 17: FFM API incubator (JEP 412)[^jep412] | + |
| E2 | 2022-11 | .NET 7: `LibraryImport` source-generated P/Invoke on by default in the SDK[^dotnet-libraryimport][^devclass-pinvoke] | + |
| E3 | 2023-09 | Swift 5.9: bidirectional C++ interoperability (subset, versioned)[^swift59][^swift-cxx-status] | + |
| E3 | 2024-03-19 | JDK 22: FFM API final (JEP 454)[^jep454] | + |
| E4 | 2025-03 | JDK 24: JNI library loading warns by default; FFM and JNI restricted uniformly (JEP 472)[^jep472] | mixed |
| E4 | 2025-09 | Kotlin 2.2.20: experimental Swift export, bypassing Objective-C headers[^kotlin-2220] | + |
| E4 | 2025 | swift-java gains a JNI mode (GSoC 2025) so Swift–Java interop works on Android, not just FFM-capable JDK 22+[^swift-java-gsoc] | + |
| E4 | 2025-12 | Vector API, Panama's SIMD half, enters an 11th incubation in JDK 26[^jep529] | − |

# Where it succeeded
- **Java FFM is final and fast.** It offers safe memory segments with explicit lifetimes (arenas), method handles the JIT can inline, and jextract to generate bindings from C headers.[^jep454][^jextract] JDK 24's JNI warnings made FFM the default path for new native libraries.[^jep472]
- **Swift–C++ interop** let Apple and others adopt Swift inside C++ codebases without an Objective-C++ shim layer, using a compiler-generated header for the reverse direction.[^swift59]
- **.NET source-generated P/Invoke** removed runtime IL-stub generation, made interop trimming- and AOT-safe, and made marshalling behaviour explicit, a precondition for Native AOT.[^dotnet-libraryimport][^devclass-pinvoke]
- **Cross-ecosystem bridges reuse each other.** swift-java's FFM mode builds directly on Java's JEP 454, an example of new FFI layers compounding.[^swift-java]

# Where it failed or stalled
- **The Vector API is still incubating** after eleven rounds (JDK 16–26). It will not leave incubation until Valhalla features are in preview, so Panama's SIMD story is not production-grade.[^jep529]
- **JNI is not going away soon.** JEP 472 explicitly keeps JNI as a standard interop mechanism and only adds warnings; the ecosystem (Netty, database drivers, Android) is still overwhelmingly JNI-based.[^jep472] FFM requires JDK 22+, which excludes Android's ART runtime entirely. That is why swift-java needed a JNI mode.[^swift-java-gsoc]
- **Swift C++ interop is partial.** Many C++ features (some templates, move-only patterns, certain inheritance cases) are unsupported or constrained; the status page lists a long table of limitations.[^swift-cxx-status]
- **Kotlin's Swift export is alpha.** No cross-language inheritance, incomplete feature coverage, incompatible changes expected. KMP's iOS story still depends on Objective-C headers (Swift export status per JetBrains docs).[^kotlin-swift-export]

# Why
1. **AOT and trimming forced the change.** Runtime-generated stubs (JNI glue, reflection-based marshalling) are incompatible with closed-world native images (GraalVM Native Image, .NET Native AOT). Making interop static was a precondition for [AOT native images](/ideas/runtime-performance/aot-native-images.md).
2. **AI/ML and native libraries raised the stakes.** Calling ONNX Runtime, llama.cpp, BLAS or vector databases from the JVM/.NET is now routine. JNI's cost and danger became a competitive liability against Python's cheap C-extension culture.
3. **Platform owners needed interop for strategic migration.** Apple needs Swift to absorb C++ codebases (and safety goals favour Swift over C++). JetBrains needs KMP to feel native to iOS developers. Oracle wants "integrity by default", which means controlling native access.[^jep472]
4. **Slowness came from coupling.** Panama's FFM shipped once it was decoupled; the Vector API stayed blocked because it was tied to Valhalla's value types.[^jep529]
5. **Migration costs are borne by library authors, not users.** That makes the change invisible but slow. Most application developers never write FFI, so adoption is driven by a small number of library maintainers.

# Lessons
- Make interop *declarative and static*. It is safer, faster (JIT/compiler can inline) and compatible with AOT, and it lets tools generate the bindings.
- Do not tie an interop feature to an unrelated, slower project (Vector API ↔ Valhalla).
- Old FFIs stay around for a decade; plan warnings and deprecation in steps (JEP 472's "prepare to restrict").

# Related
- [Value types](/ideas/runtime-performance/value-types.md) — the Vector API waits on Valhalla
- [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md) — Swift export is KMP's iOS interop bet
- [AOT native images](/ideas/runtime-performance/aot-native-images.md)
- [Source generators and annotation processing](/ideas/metaprogramming/source-generators-and-annotation-processing.md) — `LibraryImport` is a source generator
- [C++ successor languages](/ideas/memory-safety/cpp-successor-languages.md) — interop as the migration path
- [WASI and the component model](/ideas/platforms-and-portability/wasi-and-component-model.md) — interop at the Wasm level
- Event: [Java 22 makes the FFM API final](/events/2024-03-java-22-ffm-api-final.md)

[^jep454]: OpenJDK: JEP 454 — https://openjdk.org/jeps/454
[^jep412]: OpenJDK: JEP 412 — https://openjdk.org/jeps/412
[^jep472]: OpenJDK: JEP 472 — https://openjdk.org/jeps/472
[^jextract]: GitHub: openjdk/jextract — https://github.com/openjdk/jextract
[^jep529]: OpenJDK: JEP 529 — https://openjdk.org/jeps/529
[^swift59]: Swift.org: Swift 5.9 Released — https://www.swift.org/blog/swift-5.9-released/
[^swift-cxx-status]: Swift.org: Supported Features and Constraints of C++ Interoperability — https://www.swift.org/documentation/cxx-interop/status/
[^swift-java-gsoc]: Swift.org: GSoC 2025 Showcase — Extending Swift-Java Interoperability — https://www.swift.org/blog/gsoc-2025-showcase-swift-java/
[^swift-java]: GitHub: swiftlang/swift-java — https://github.com/swiftlang/swift-java
[^kotlin-swift-export]: kotlinlang.org: Swift export — https://kotlinlang.org/docs/native-swift-export.html
[^kotlin-2220]: kotlinlang.org: What's new in Kotlin 2.2.20 — https://kotlinlang.org/docs/whatsnew2220.html
[^dotnet-libraryimport]: Microsoft Learn: P/Invoke source generation — https://learn.microsoft.com/en-us/dotnet/standard/native-interop/pinvoke-source-generation
[^devclass-pinvoke]: DevClass: Platform Invoke in .NET 7.0 — https://devclass.com/2022/11/14/microsoft-platform-invoke-in-net-7-0-sweeps-away-old-weird-behaviors-in-fundamental-shift/
