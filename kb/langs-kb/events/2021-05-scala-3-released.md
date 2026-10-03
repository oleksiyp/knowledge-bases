---
type: Event
title: Scala 3.0 released
description: "Scala 3.0.0 (the Dotty compiler, founded on the DOT calculus) shipped on 2021-05-13 after eight years of work, redesigning implicits, adding enums, union/intersection types and a new macro system; technically successful, but the multi-year 2→3 transition coincided with Scala's loss of momentum."
event_kind: release
date: 2021-05-13
era: E2
impact: mixed
languages: [languages/scala]
runtimes: [runtimes/hotspot-openjdk]
ideas: [ideas/types/scala-3-and-language-redesigns]
tags: [scala, scala-3, dotty, language-redesign, migration]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: scala3-here
    resource: https://www.scala-lang.org/blog/2021/05/14/scala3-is-here.html
    title: "Scala blog: Scala 3 is here! (2021-05-14)"
  - id: gh-300
    resource: https://github.com/lampepfl/dotty/releases/tag/3.0.0
    title: "GitHub: scala/scala3 release 3.0.0"
  - id: scala-39
    resource: https://scala-lang.org/news/3.9/
    title: "Scala news: Scala 3.9 LTS released! (2026-09-03)"
  - id: vl-survey-2026
    resource: https://virtuslab.com/blog/scala/our-impressions-from-the-scala-survey-2026
    title: "VirtusLab: Our impressions from the Scala Survey 2026"
  - id: spark-scala3
    resource: https://sparkingscala.com/latest/2026/04/06/scala-3-spark-2026/
    title: "Sparking Scala: Scala 3 and Spark — Where Things Stand in 2026"
---

# What happened
Scala 3.0.0 was released on 2021-05-13.[^gh-300] It was the result of the Dotty research compiler, about eight years of work and some 28,000 commits.[^scala3-here] The headline changes were `given`/`using` replacing implicits, native `enum` and ADTs, union and intersection types, optional brace-free syntax, opaque types, and a new principled metaprogramming system (`inline`, quotes and splices) that replaced the experimental Scala 2 macros. Scala 3 could use Scala 2.13 libraries directly, and the 2.13 compiler gained a TASTy reader to consume Scala 3 artifacts.[^scala3-here]

# Why it matters
It is the period's reference case for a large, well-tooled language redesign. The engineering held up. The 3.3 LTS line (2023) and 3.9 LTS (2026) completed the transition, and ~1,780 of ~2,000 community-build projects compiled on 3.9 with minimal changes.[^scala-39] The ecosystem cost was high. Spark still had no Scala 3 build in 2026,[^spark-scala3] and the 2026 Scala survey showed 24% fewer respondents than 2023 and half the share of newcomers.[^vl-survey-2026] Scala 3 did not cause the decline on its own (Kotlin and modern Java mattered more), but the long transition was a window competitors used.

# Related
- [Scala](/languages/scala.md), [Breaking language redesigns](/ideas/types/scala-3-and-language-redesigns.md)
- [Akka relicensed under BSL](/events/2022-09-akka-bsl-relicense.md)

[^scala3-here]: Scala 3 is here! — https://www.scala-lang.org/blog/2021/05/14/scala3-is-here.html
[^gh-300]: scala3 release 3.0.0 — https://github.com/lampepfl/dotty/releases/tag/3.0.0
[^scala-39]: Scala 3.9 LTS released! — https://scala-lang.org/news/3.9/
[^vl-survey-2026]: VirtusLab: Scala Survey 2026 — https://virtuslab.com/blog/scala/our-impressions-from-the-scala-survey-2026
[^spark-scala3]: Scala 3 and Spark in 2026 — https://sparkingscala.com/latest/2026/04/06/scala-3-spark-2026/
