---
type: Runtime
title: Android Runtime (ART)
description: Google's DEX-bytecode runtime for Android, running Java and Kotlin on ~3 billion devices; 2018–2026 it became an updatable Mainline module (Android 12), leaned on profile-guided AOT (cloud and Baseline Profiles) and new collectors (userfaultfd concurrent mark-compact, generational CMC in Android 16 QPR2) — a quiet success whose main weakness is a Java library level that trails OpenJDK by years.
tags: [android, jvm-languages, aot, jit, gc, google, mobile]
runtime_kind: vm
languages: [languages/kotlin, languages/java]
ideas:
  - ideas/runtime-performance/aot-native-images
  - ideas/runtime-performance/startup-snapshotting
  - ideas/runtime-performance/low-pause-gc
  - ideas/platforms-and-portability/kotlin-multiplatform
steward: Google (Android Open Source Project)
governance: single-vendor
trajectory: stable
first_released: 2014
adoption_signals:
  active_android_devices: { value: "3 billion+", as_of: 2021-05 }
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: art-aug2023
    resource: https://android-developers.googleblog.com/2023/08/latest-artwork-on-hundreds-of-millions-of-devices.html
    title: "Android Developers Blog: Latest ARTwork on hundreds of millions of devices (Aug 2023)"
    author: org:google
  - id: art-nov2023
    resource: https://android-developers.googleblog.com/2023/11/the-secret-to-androids-improved-memory-latest-android-runtime-update.html
    title: "Android Developers Blog: The secret to Android's improved memory on 1B+ devices: the latest Android Runtime update"
    author: org:google
  - id: baseline
    resource: https://android-developers.googleblog.com/2022/01/improving-app-performance-with-baseline.html
    title: "Android Developers Blog: Improving App Performance with Baseline Profiles (Jan 2022)"
    author: org:google
  - id: qpr2
    resource: https://android-developers.googleblog.com/2025/12/android-16-qpr2-is-released.html
    title: "Android Developers Blog: Android 16 QPR2 is Released (Dec 2025)"
    author: org:google
  - id: cmc-src
    resource: https://android.googlesource.com/platform/art/+/master/runtime/gc/heap.cc
    title: "AOSP: platform/art runtime/gc/heap.cc (CMC and YoungMarkCompact collectors)"
    author: org:google
  - id: nterp
    resource: https://android.googlesource.com/platform/art/+/master/runtime/interpreter/mterp/nterp.cc
    title: "AOSP: platform/art nterp interpreter"
    author: org:google
  - id: android-3b
    resource: https://techcrunch.com/2021/05/18/android-now-powers-3b-devices
    title: "TechCrunch: Android now powers 3B devices (2021-05-18)"
  - id: page16k
    resource: https://9to5google.com/2025/05/08/android-memory-page-size/
    title: "9to5Google: Google requiring Android apps support 16 KB memory page size"
  - id: 9to5-art
    resource: https://9to5google.com/2023/08/21/android-runtime-13-14-updates/
    title: "9to5Google: Latest Android Runtime (ART) update led to apps starting 30% faster"
---

# Summary
ART is the most widely deployed managed runtime on Earth — Google counted 3 billion active Android devices in May 2021 — yet it rarely makes headlines.[^android-3b] Between 2018 and 2026 its story is one of **steady engineering wins**: it was split into an updatable Mainline module (`com.android.art`) from Android 12, so runtime and core-library improvements now ship via Google Play system updates to every device on Android 12+ instead of waiting for OEM OS updates;[^art-aug2023] it doubled down on **profile-guided AOT** (crowd-sourced Cloud Profiles from Android 9, developer-shipped Baseline Profiles in 2022, which Google says cut startup by up to ~30–40%);[^baseline] and it replaced its read-barrier Concurrent Copying GC with a userfaultfd-based Concurrent Mark-Compact collector, gaining a generational CMC mode in Android 16 QPR2 (Dec 2025).[^cmc-src][^qpr2] The weakness is language-level: ART implements a subset of OpenJDK APIs that historically trailed Java by years (OpenJDK 11 libraries in ART 13, OpenJDK 17 only in ART 14, 2023), which helped push Android developers toward [Kotlin](/languages/kotlin.md) instead of newer Java.[^art-aug2023]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-05 | [Android goes "Kotlin-first"](/events/2019-05-android-kotlin-first.md); ART remains the execution target for both Java and Kotlin | + |
| E2 | 2021-04 | [Google v. Oracle](/events/2021-04-google-v-oracle-supreme-court.md): Supreme Court rules Android's Java API reimplementation fair use, removing legal risk to ART's core libraries | + |
| E2 | 2021-05 | Android passes 3 billion active devices[^android-3b] | + |
| E2 | 2021-10 | Android 12: ART becomes an updatable Mainline module; new mostly-assembly "nterp" interpreter[^art-aug2023][^nterp] | + |
| E2 | 2022-01 | Baseline Profiles launched (AOT-compile hot startup paths at install)[^baseline] | + |
| E3 | 2022-08 | Android 13 introduces userfaultfd-based Concurrent Mark-Compact (CMC) GC, removing read barriers[^cmc-src] | + |
| E3 | 2023-08 | [ART 13 update via Play](/events/2023-08-art-mainline-update-faster-startup.md): up to 30% faster app startup on some devices; ART 14 brings OpenJDK 17 libraries to Android 12+[^art-aug2023][^9to5-art] | + |
| E3 | 2023-11 | ART update cuts compiled-code size 9.3% (50–100 MB per device) on 1B+ devices[^art-nov2023] | + |
| E4 | 2025-05 | Google Play mandates 16 KB page-size support for apps targeting Android 15+ (from Nov 2025, later extended)[^page16k] | mixed |
| E4 | 2025-12 | Android 16 QPR2: generational Concurrent Mark-Compact GC[^qpr2] | + |

# Ideas it bet on
| Idea | Outcome for ART |
|---|---|
| Hybrid JIT + profile-guided [AOT](/ideas/runtime-performance/aot-native-images.md) | Succeeded — since Android 7 ART interprets/JITs first, records profiles, and AOT-compiles hot code in idle; Cloud and Baseline Profiles moved the profile to install time[^baseline] |
| Shipping startup knowledge ahead of time ([startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md) cousin) | Succeeded — Baseline Profiles are the mobile analogue of AppCDS/Leyden training runs[^baseline] |
| [Low-pause GC](/ideas/runtime-performance/low-pause-gc.md) | Succeeded — concurrent compaction without read barriers, then generational CMC[^cmc-src][^qpr2] |
| Updatable runtime decoupled from OS | Succeeded — Mainline ART reaches 1B+ devices without OEM updates[^art-nov2023] |
| Full Java SE parity | Failed/stalled by design — ART tracks only a subset of OpenJDK, years behind[^art-aug2023] |

# What succeeded
- **Mainline modularisation.** Making ART updatable fixed Android's fragmentation problem for the runtime itself: performance gains (30% startup) and memory savings (47–95 PB aggregate) reached hundreds of millions of devices with no OS update.[^art-aug2023][^art-nov2023]
- **Profiles as a deployment artifact.** Google reports Maps cut average startup ~30% with Baseline Profiles; the approach (train, ship profile, AOT at install) is now standard Jetpack tooling.[^baseline]
- **GC modernisation.** CMC removes the per-load read barrier cost of Concurrent Copying and compacts using `userfaultfd`; the generational mode reduces CPU and battery cost of GC.[^cmc-src][^qpr2]
- **Kotlin co-design.** ART and D8/R8 optimisations target Kotlin idioms (coroutines, lambdas), helping Kotlin reach dominance on Android.

# What failed or stalled
- **Java API lag.** Android shipped OpenJDK 11-level libraries until ART 14 (2023) brought OpenJDK 17; newer Java SE APIs arrive late or not at all (unverified: no virtual threads or FFM API in ART as of 2026), so "Java on Android" diverged from server Java.[^art-aug2023] See [virtual threads](/ideas/concurrency/virtual-threads.md) — Android uses Kotlin coroutines instead.
- **Opaqueness.** Unlike OpenJDK's JEP process, ART's roadmap is internal to Google; changes surface in AOSP commits and occasional blog posts.
- **Platform churn for native code.** The 16 KB page-size requirement forced apps with native libraries (including those embedding other runtimes) to rebuild, and the deadline was extended.[^page16k]

# By era
## E1
ART was already AOT+JIT+profile hybrid (since Android 7); Cloud Profiles (Android 9) and Kotlin-first set the direction.
## E2
Android 12 made ART updatable and added nterp; Google v. Oracle removed the legal cloud; Baseline Profiles launched.[^nterp][^baseline]
## E3
CMC GC; ART 13/14 Mainline updates with 30% startup improvement and OpenJDK 17 libraries; 9.3% code-size reduction.[^art-aug2023][^art-nov2023]
## E4
16 KB pages and generational CMC (Android 16 QPR2).[^page16k][^qpr2]

# Lessons
- An updatable runtime decoupled from the OS is worth more than any single optimisation on a fragmented platform.
- Profile-guided AOT with shipped profiles gets most of the benefit of full AOT without its compatibility cost.
- A runtime that implements only part of a language's standard library pushes developers to a different language (Kotlin) rather than to the newest version of the original one.

# Related
- [Kotlin](/languages/kotlin.md), [Java](/languages/java.md), [HotSpot/OpenJDK](/runtimes/hotspot-openjdk.md), [.NET CLR](/runtimes/dotnet-clr.md)
- [AOT native images](/ideas/runtime-performance/aot-native-images.md), [Kotlin Multiplatform](/ideas/platforms-and-portability/kotlin-multiplatform.md)

[^art-aug2023]: Android Developers Blog: Latest ARTwork on hundreds of millions of devices — https://android-developers.googleblog.com/2023/08/latest-artwork-on-hundreds-of-millions-of-devices.html
[^art-nov2023]: Android Developers Blog: The latest Android Runtime update (memory) — https://android-developers.googleblog.com/2023/11/the-secret-to-androids-improved-memory-latest-android-runtime-update.html
[^baseline]: Android Developers Blog: Improving App Performance with Baseline Profiles — https://android-developers.googleblog.com/2022/01/improving-app-performance-with-baseline.html
[^qpr2]: Android Developers Blog: Android 16 QPR2 is Released — https://android-developers.googleblog.com/2025/12/android-16-qpr2-is-released.html
[^cmc-src]: AOSP: ART heap.cc (CMC collector) — https://android.googlesource.com/platform/art/+/master/runtime/gc/heap.cc
[^nterp]: AOSP: ART nterp interpreter — https://android.googlesource.com/platform/art/+/master/runtime/interpreter/mterp/nterp.cc
[^android-3b]: TechCrunch: Android now powers 3B devices — https://techcrunch.com/2021/05/18/android-now-powers-3b-devices
[^page16k]: 9to5Google: 16 KB page size requirement — https://9to5google.com/2025/05/08/android-memory-page-size/
[^9to5-art]: 9to5Google: ART update led to apps starting 30% faster — https://9to5google.com/2023/08/21/android-runtime-13-14-updates/
