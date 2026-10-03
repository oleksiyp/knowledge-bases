---
type: Event
title: Google declares Android development "Kotlin-first"
description: "At Google I/O on 2019-05-07 Google said Android development would be increasingly Kotlin-first, with new Jetpack APIs offered first in Kotlin. This was the decisive platform endorsement that made Kotlin the default Android language."
event_kind: policy
date: 2019-05-07
era: E1
impact: positive
languages: [languages/kotlin, languages/java]
runtimes: [runtimes/android-art]
ideas: [ideas/types/null-safety, ideas/concurrency/structured-concurrency]
tags: [kotlin, android, google, jetpack, compose]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: android-kf
    resource: https://developer.android.com/kotlin/first
    title: "Android Developers: Android's Kotlin-first approach"
    author: org:google
  - id: reg
    resource: https://www.theregister.com/software/2019/05/09/youre-not-still-writing-android-apps-in-oracles-java-are-you-google-tut-tuts-at-dev-conf/882039
    title: "The Register: You're not still writing Android apps in Oracle's Java, are you?"
  - id: adtmag
    resource: https://adtmag.com/articles/2019/05/07/kotlin-android.aspx
    title: "ADTmag: Google Goes Kotlin-First for Android Mobile Development"
  - id: kotlinconf26
    resource: https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/
    title: "JetBrains Blog: KotlinConf'26 Keynote Highlights"
    author: org:jetbrains
---

# What happened
Two years after adding Kotlin as an officially supported language (2017), Google announced at I/O 2019 that "Android development will become increasingly Kotlin-first". Many new Jetpack APIs and features would be offered first in Kotlin, and new projects were told to use it.[^android-kf][^adtmag] In the keynote, Chet Haase urged developers to write new projects in Kotlin. Google said over 50% of professional Android developers already used it.[^reg] Java and C++ remained supported.

# Why it matters
It is the clearest case from 2018–2026 of a platform owner choosing a language and the ecosystem following. Jetpack Compose (1.0 in 2021) is Kotlin-only, so the choice could not be undone. JetBrains reported 92% of professional Android developers using Kotlin by 2026.[^kotlinconf26] The move also took Android out of the Oracle Java dispute ([Google v. Oracle](/events/2021-04-google-v-oracle-supreme-court.md)). The weaker side of the story is that Kotlin's success stayed tied to Android, and it never became a top-20 TIOBE language (see [Kotlin](/languages/kotlin.md)).

# Related
- [Kotlin](/languages/kotlin.md), [Java](/languages/java.md), [Android ART](/runtimes/android-art.md)
- [Null safety](/ideas/types/null-safety.md)

[^android-kf]: Android's Kotlin-first approach — https://developer.android.com/kotlin/first
[^reg]: The Register, 2019-05-09 — https://www.theregister.com/software/2019/05/09/youre-not-still-writing-android-apps-in-oracles-java-are-you-google-tut-tuts-at-dev-conf/882039
[^adtmag]: ADTmag, 2019-05-07 — https://adtmag.com/articles/2019/05/07/kotlin-android.aspx
[^kotlinconf26]: KotlinConf'26 Keynote Highlights — https://blog.jetbrains.com/kotlin/2026/05/kotlinconf26-keynote-highlights/
