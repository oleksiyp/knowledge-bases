---
type: Event
title: "US Supreme Court rules Google's use of Java APIs was fair use"
description: "On 2021-04-05 the Supreme Court ruled 6-2 in Google v. Oracle that Google's copying of about 11,500 lines of Java SE declaring code for Android was fair use. This ended a decade-long case that had hung over API reimplementation across the industry."
event_kind: policy
date: 2021-04-05
era: E2
impact: positive
languages: [languages/java, languages/kotlin]
runtimes: [runtimes/android-art, runtimes/hotspot-openjdk]
ideas: []
tags: [java, android, copyright, api, fair-use, oracle, google]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: justia
    resource: https://supreme.justia.com/cases/federal/us/593/18-956/
    title: "Justia: Google LLC v. Oracle America, Inc., 593 U.S. (2021)"
  - id: eff
    resource: https://www.eff.org/deeplinks/2021/04/victory-fair-use-supreme-court-reverses-federal-circuit-oracle-v-google
    title: "EFF: Victory for Fair Use — The Supreme Court Reverses the Federal Circuit in Oracle v. Google"
    author: org:eff
  - id: natlaw
    resource: https://natlawreview.com/article/fair-use-software-apis-google-llc-v-oracle-america-inc-case-no-18-956-us-supreme
    title: "National Law Review: Fair Use of Software APIs"
---

# What happened
In a 6-2 opinion by Justice Breyer, the Court held that Google's copying of about 11,500 lines of Java SE declaring code into Android, so that programmers could keep using familiar method calls on a new platform, was fair use.[^justia][^natlaw] The Court did not decide whether APIs are copyrightable at all.[^natlaw]

# Why it matters
Reimplementing an API is how language and runtime ecosystems create compatible alternatives: OpenJDK forks, Android's libraries, .NET Mono, Node-compatible runtimes such as Deno and Bun. A ruling for Oracle would have put all of these under legal risk.[^eff] For Java specifically, it removed the last strategic reason for Google to tie Android to Oracle's API surface. Google was already moving to Kotlin ([Kotlin-first](/events/2019-05-android-kotlin-first.md)) and OpenJDK-based libraries. The open question of copyrightability means the protection is case by case, not categorical.

# Related
- [Java](/languages/java.md), [Android ART](/runtimes/android-art.md), [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md)

[^justia]: Justia: Google v. Oracle — https://supreme.justia.com/cases/federal/us/593/18-956/
[^eff]: EFF, April 2021 — https://www.eff.org/deeplinks/2021/04/victory-fair-use-supreme-court-reverses-federal-circuit-oracle-v-google
[^natlaw]: National Law Review — https://natlawreview.com/article/fair-use-software-apis-google-llc-v-oracle-america-inc-case-no-18-956-us-supreme
