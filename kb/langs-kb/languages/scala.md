---
type: Language
title: Scala
description: "JVM functional/OO hybrid that shipped its long-promised redesign (Scala 3, May 2021) and a working LTS model, yet lost mindshare over 2018–2026: the 2→3 split, the Akka relicensing and Kotlin's rise left it a stable but shrinking niche anchored in data engineering and finance."
tags: [jvm, functional, object-oriented, scala-3, dotty, spark, akka, epfl, virtuslab]
paradigms: [functional, object-oriented, multi-paradigm]
typing: static
memory_model: gc
first_released: 2004
steward: Scala Center (EPFL) / LAMP (EPFL) / VirtusLab — Scala Core Team
governance: community
trajectory: declining
ideas: [ideas/types/scala-3-and-language-redesigns, ideas/concurrency/actor-model, ideas/types/algebraic-effects-and-handlers, ideas/types/sum-types-and-pattern-matching, ideas/types/linear-and-affine-types]
runtimes: [runtimes/hotspot-openjdk, runtimes/graalvm]
adoption_signals:
  so_survey_usage_pct: { value: 2.6, as_of: 2025 }
  redmonk_rank: { value: 14, as_of: 2025-01 }
  scala_survey_respondents: { value: 1056, as_of: 2026-05 }
era_momentum: { E1: flat, E2: down, E3: down, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: scala3-here
    resource: https://www.scala-lang.org/blog/2021/05/14/scala3-is-here.html
    title: "Scala blog: Scala 3 is here! (2021-05-14)"
  - id: scala-33
    resource: https://scala-lang.org/blog/2023/05/30/scala-3.3.0-released.html
    title: "Scala blog: Scala 3.3.0 released! (first LTS)"
  - id: scala-38
    resource: https://www.scala-lang.org/news/3.8/
    title: "Scala news: Scala 3.8 released! (2026-01-22)"
  - id: scala-39
    resource: https://scala-lang.org/news/3.9/
    title: "Scala news: Scala 3.9 LTS released! (2026-09-03)"
  - id: scala2-maint
    resource: https://www.scala-lang.org/blog/2024/12/16/scala-2-maintenance.html
    title: "Scala blog: Scala 2 maintenance plans (2024-12-16)"
  - id: scala-dev
    resource: https://www.scala-lang.org/development/
    title: "scala-lang.org: Scala development guarantees"
  - id: infoq-akka
    resource: https://www.infoq.com/news/2022/09/akka-no-longer-open-source/
    title: "InfoQ: Lightbend Changes Akka License and Is No Longer Open Source"
  - id: play-pekko
    resource: https://www.playframework.com/documentation/3.0.x/General
    title: "Play Framework: How Play Deals with Akka's License Change"
  - id: akka-rename
    resource: https://akka.io/blog/lightbend-is-now-akka
    title: "Akka blog: Lightbend is now Akka (2024)"
  - id: vl-survey-2026
    resource: https://virtuslab.com/blog/scala/our-impressions-from-the-scala-survey-2026
    title: "VirtusLab: Our impressions from the Scala Survey 2026"
  - id: scalac-2025
    resource: https://scalac.io/wp-content/uploads/2025/10/State-of-Scala-2025-report.pdf
    title: "Scalac: State of Scala 2025 report (Oct 2025)"
  - id: devnews-scala
    resource: https://devnewsletter.com/p/state-of-scala-2026/
    title: "Dev Newsletter: State of Scala 2026"
  - id: spark-scala3
    resource: https://sparkingscala.com/latest/2026/04/06/scala-3-spark-2026/
    title: "Sparking Scala: Scala 3 and Spark — Where Things Stand in 2026"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
  - id: hn-slowed
    resource: https://news.ycombinator.com/item?id=46182202
    title: "Hacker News: Scala 3 slowed us down? (Dec 2025)"
---

# Summary
Scala is the clearest 2018–2026 case of a language that **did the redesign right technically and still lost ground**. Scala 3 (the Dotty compiler, built on the DOT calculus) shipped on 2021-05-13 after eight years of work,[^scala3-here] followed by the first LTS line, 3.3, in May 2023[^scala-33] and its successor, 3.9 LTS, on 2026-09-03.[^scala-39] Binary interop through TASTy kept the 2.13→3 split much less painful than Python 2→3. Even so, the ecosystem moved slowly. Spark, Scala's biggest user, still ships only for Scala 2.13 in 2026.[^spark-scala3] Lightbend relicensed Akka under the BSL in 2022,[^infoq-akka] and Kotlin took the "better Java" role. The 2026 Scala survey drew 24% fewer respondents than 2023 and found far fewer newcomers (6% vs 13%). Its authors wrote that "Scala isn't as popular or fashionable as it once was."[^vl-survey-2026] Verdict: **declining but stable niche**. The language is healthy and well governed, but it is not growing.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-06 | Scala 2.13.0: collections redesign, the last big Scala 2 release | mixed |
| E2 | 2021-05-13 | Scala 3.0.0 released (given/using, enums, union types, new macros, optional braces) [^scala3-here] | + |
| E2 | 2022-09-07 | Lightbend moves Akka to BSL 1.1; community forks Apache Pekko [^infoq-akka] | − |
| E3 | 2023-05-30 | Scala 3.3.0, first LTS release (≥3 years support) [^scala-33] | + |
| E3 | 2023-10 | Play 3.0 replaces Akka with Pekko [^play-pekko] | mixed |
| E4 | 2024-11 | Lightbend renames itself Akka and focuses on its own platform [^akka-rename] | − |
| E4 | 2024-12-16 | Scala 2.13 maintenance promised "indefinitely" [^scala2-maint] | mixed |
| E4 | 2025-05 | Spark 4.0 drops Scala 2.12 but still does not support Scala 3 [^spark-scala3] | − |
| E4 | 2025-12 | Viral post "Scala 3 slowed us down?" on migration costs [^hn-slowed] | − |
| E4 | 2026-01-22 | Scala 3.8: stdlib compiled by Scala 3, JDK 17 minimum [^scala-38] | + |
| E4 | 2026-05 | Scala Survey 2026: 1,056 respondents (−24% vs 2023) [^vl-survey-2026] | − |
| E4 | 2026-09-03 | Scala 3.9 LTS replaces 3.3 LTS [^scala-39] | + |

# Ideas it bet on
| Idea | Outcome for Scala |
|---|---|
| [Language redesign (Scala 3)](/ideas/types/scala-3-and-language-redesigns.md) | Technically succeeded; ecosystem migration slow; momentum lost |
| [Actor model (Akka)](/ideas/concurrency/actor-model.md) | Popular in E1; damaged by the 2022 BSL switch; Pekko fork survives |
| [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md) | Scala pioneered them on the JVM; Java 21 and Kotlin adopted the idea, which reduced Scala's advantage |
| Effect systems as libraries (Cats Effect, ZIO) | Strong inside the community; a hiring and onboarding barrier outside it |
| Capture checking / [effects in types](/ideas/types/algebraic-effects-and-handlers.md) | Experimental research (Caprese) in 3.x; unproven |

# What succeeded
- **The compiler rewrite shipped.** Scala 3 delivered a cleaner implicit model (given/using), real enums and ADTs, union and intersection types, and principled `inline` macros.[^scala3-here]
- **TASTy cross-compatibility** let Scala 3 consume 2.13 libraries and, up to 3.7, the reverse. This avoided Python's "two ecosystems" freeze.[^scala-39]
- **An LTS release model** (3.3 → 3.9) gave library authors a stable compile target. About 56% of Scala 3 libraries publish on 3.3 LTS, and ~1,780 of ~2,000 community-build projects built on 3.9 with minimal changes.[^scala-39]
- **Scala 3 became the dominant version** among surveyed users by 2026.[^vl-survey-2026] The Scalac 2025 report found 48% of teams fully migrated in production.[^scalac-2025]
- **Governance survived the loss of its commercial anchor.** By 2026 the Scala Center, EPFL's LAMP and VirtusLab ran the language through a Scala Core Team, and VirtusLab took over most Scala 2 maintenance.[^scala-dev]

# What failed or stalled
- **Ecosystem lag.** Spark depends on Scala 2 runtime reflection and had no Scala 3 build as of 2026.[^spark-scala3] Macro-heavy libraries had to be rewritten for the new metaprogramming model.
- **Akka relicensing (Sept 2022)** turned Scala's best-known framework into source-available software for companies with more than $25M in revenue. Play and others moved to Pekko, and trust suffered.[^infoq-akka][^play-pekko]
- **Shrinking funnel.** Only 6% of 2026 survey respondents were newcomers.[^vl-survey-2026] In the Scalac 2025 report, 44% of teams saw Scala declining and 43% struggled to hire.[^scalac-2025][^devnews-scala] Stack Overflow usage stayed at ~2.6%.[^so-2025]
- **Migration friction never fully went away.** A December 2025 post on performance regressions after a rushed migration (`inline` semantics) reopened the "nobody asked for Scala 3" debate.[^hn-slowed]
- **Library ecosystem split** between Cats/Typelevel and ZIO divided a small community's effort.[^vl-survey-2026]

# By era
## E1
Scala 2.13 shipped and Dotty matured. Akka, Play and Spark kept usage high in data and streaming, but Kotlin was already the default "better Java" on Android and Spring.

## E2
Scala 3.0 (May 2021) arrived as promised. Most production code stayed on 2.12 or 2.13 while waiting for libraries. The Akka BSL announcement (Sept 2022) closed out the era.

## E3
3.3 LTS gave the ecosystem a stable target. The Pekko fork and Play 3 handled the Akka fallout. Scala 3 adoption grew among enthusiasts, but the number of new developers fell.

## E4
Lightbend became "Akka" and stepped back from Scala itself. Scala 3.8 moved the standard library to Scala 3 and set JDK 17 as the minimum, and 3.9 LTS (Sept 2026) closed the transition. Usage held flat at a lower level.

# Lessons
- A sound redesign with good interop tooling still costs years of momentum. Competitors that offer "good enough" features with no migration (Kotlin, then Java 21) take the share in the meantime.
- Commercial stewards are a risk: when the core framework vendor relicensed, the language took the reputational damage.
- An LTS model is the right fix for library-author churn, but it came two years after 3.0.

# Related
- [Kotlin](/languages/kotlin.md), [Java](/languages/java.md), [Haskell](/languages/haskell.md)
- [Scala 3 and language redesigns](/ideas/types/scala-3-and-language-redesigns.md), [Actor model](/ideas/concurrency/actor-model.md)
- [Scala 3.0 released](/events/2021-05-scala-3-released.md), [Akka relicensed under BSL](/events/2022-09-akka-bsl-relicense.md)

[^scala3-here]: Scala 3 is here! — https://www.scala-lang.org/blog/2021/05/14/scala3-is-here.html
[^scala-33]: Scala 3.3.0 released! — https://scala-lang.org/blog/2023/05/30/scala-3.3.0-released.html
[^scala-38]: Scala 3.8 released! — https://www.scala-lang.org/news/3.8/
[^scala-39]: Scala 3.9 LTS released! — https://scala-lang.org/news/3.9/
[^scala2-maint]: Scala 2 maintenance plans — https://www.scala-lang.org/blog/2024/12/16/scala-2-maintenance.html
[^scala-dev]: Scala development guarantees — https://www.scala-lang.org/development/
[^infoq-akka]: InfoQ: Lightbend Changes Akka License — https://www.infoq.com/news/2022/09/akka-no-longer-open-source/
[^play-pekko]: Play: How Play Deals with Akka's License Change — https://www.playframework.com/documentation/3.0.x/General
[^akka-rename]: Lightbend is now Akka — https://akka.io/blog/lightbend-is-now-akka
[^vl-survey-2026]: VirtusLab: Our impressions from the Scala Survey 2026 — https://virtuslab.com/blog/scala/our-impressions-from-the-scala-survey-2026
[^scalac-2025]: Scalac: State of Scala 2025 — https://scalac.io/wp-content/uploads/2025/10/State-of-Scala-2025-report.pdf
[^devnews-scala]: Dev Newsletter: State of Scala 2026 — https://devnewsletter.com/p/state-of-scala-2026/
[^spark-scala3]: Scala 3 and Spark: Where Things Stand in 2026 — https://sparkingscala.com/latest/2026/04/06/scala-3-spark-2026/
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^hn-slowed]: HN: Scala 3 slowed us down? — https://news.ycombinator.com/item?id=46182202
