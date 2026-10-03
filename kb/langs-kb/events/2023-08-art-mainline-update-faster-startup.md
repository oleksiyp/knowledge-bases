---
type: Event
title: Updatable ART delivers up to 30% faster app startup via Play system updates
description: In August 2023 Google reported that the ART 13 Mainline update — shipped through Google Play to Android 12+ devices without OS updates — improved app startup by up to 30%, and that ART 14 would bring OpenJDK 17 libraries to the same devices.
event_kind: release
date: 2023-08-21
era: E3
impact: positive
languages: [languages/kotlin, languages/java]
runtimes: [runtimes/android-art]
ideas: [ideas/runtime-performance/aot-native-images]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: art-aug2023
    resource: https://android-developers.googleblog.com/2023/08/latest-artwork-on-hundreds-of-millions-of-devices.html
    title: "Android Developers Blog: Latest ARTwork on hundreds of millions of devices"
    author: org:google
  - id: 9to5-art
    resource: https://9to5google.com/2023/08/21/android-runtime-13-14-updates/
    title: "9to5Google: Latest Android Runtime (ART) update led to apps starting 30% faster"
  - id: art-nov2023
    resource: https://android-developers.googleblog.com/2023/11/the-secret-to-androids-improved-memory-latest-android-runtime-update.html
    title: "Android Developers Blog: The latest Android Runtime update (memory)"
    author: org:google
---

# What happened
Google's Android team reported that ART, an updatable Mainline module since Android 12, had shipped an "ART 13" update through Google Play system updates whose compiler and runtime optimisations gave real-world app startup improvements of up to 30% on some devices.[^art-aug2023][^9to5-art] It announced ART 14 for Android 12+ devices, bringing new compiler optimisations and a jump of the core libraries from OpenJDK 11 to OpenJDK 17.[^art-aug2023] A November 2023 follow-up said ART updates had cut compiled-code size by 9.3% — 50–100 MB per device — across more than a billion devices.[^art-nov2023]

# Why it matters
It proved that decoupling a managed runtime from the OS fixes the fragmentation that had kept Android runtime and Java-library improvements stuck on old devices. It also made the Java library gap visible: Android only reached OpenJDK 17 APIs in 2023, two years after Java 17 shipped.

# Related
- [Android ART](/runtimes/android-art.md), [Kotlin](/languages/kotlin.md), [Java](/languages/java.md)
- [AOT native images](/ideas/runtime-performance/aot-native-images.md)

[^art-aug2023]: Android Developers Blog: Latest ARTwork — https://android-developers.googleblog.com/2023/08/latest-artwork-on-hundreds-of-millions-of-devices.html
[^9to5-art]: 9to5Google: ART update, 30% faster startup — https://9to5google.com/2023/08/21/android-runtime-13-14-updates/
[^art-nov2023]: Android Developers Blog: latest ART update (memory) — https://android-developers.googleblog.com/2023/11/the-secret-to-androids-improved-memory-latest-android-runtime-update.html
