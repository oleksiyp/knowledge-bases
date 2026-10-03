---
type: Idea
title: Breaking language redesigns (Scala 3 and its peers)
description: "Shipping a cleaned-up, partly incompatible 'version 2' of an established language. 2018–2026 verdict: mixed. Scala 3 delivered technically with good interop but lost momentum; Perl 6 had to rename itself Raku and Perl 7 was shelved; the redesigns that worked were opt-in, staged migrations with tooling (Dart 3 null safety, Rust editions) rather than forks of the language."
area: types
tags: [language-evolution, migration, backward-compatibility, scala-3, python-3, raku, perl-7, rhombus, dart-3]
outcome: mixed
maturity_2026: adopted
origin_year: 2008
mainstream_year: 2008
languages: [languages/scala, languages/python, languages/perl-raku, languages/racket, languages/dart]
runtimes: [runtimes/hotspot-openjdk]
related_ideas: [ideas/tooling-and-ecosystem/language-editions-and-evolution, ideas/types/null-safety, ideas/types/gradual-typing-for-dynamic-languages]
era_momentum: { E1: flat, E2: up, E3: flat, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: scala3-here
    resource: https://www.scala-lang.org/blog/2021/05/14/scala3-is-here.html
    title: "Scala blog: Scala 3 is here! (2021-05-14)"
  - id: tasty-reader
    resource: https://www.scala-lang.org/blog/state-of-tasty-reader.html
    title: "Scala blog: State of the TASTy reader and Scala 2.13 ↔ Scala 3 compatibility"
  - id: scala-39
    resource: https://scala-lang.org/news/3.9/
    title: "Scala news: Scala 3.9 LTS released! (2026-09-03)"
  - id: vl-survey-2026
    resource: https://virtuslab.com/blog/scala/our-impressions-from-the-scala-survey-2026
    title: "VirtusLab: Our impressions from the Scala Survey 2026"
  - id: spark-scala3
    resource: https://sparkingscala.com/latest/2026/04/06/scala-3-spark-2026/
    title: "Sparking Scala: Scala 3 and Spark — Where Things Stand in 2026"
  - id: hn-slowed
    resource: https://news.ycombinator.com/item?id=46182202
    title: "Hacker News: Scala 3 slowed us down? (Dec 2025)"
  - id: py2-sunset
    resource: https://www.python.org/doc/sunset-python-2/
    title: "python.org: Sunsetting Python 2"
  - id: raku-register
    resource: https://www.theregister.com/2019/10/11/perl_6_raku_larry_wall/
    title: "The Register: Perl creator blesses new name (Raku) for version 6 (2019-10-11)"
  - id: perl7
    resource: https://blogs.perl.org/users/psc/2022/05/what-happened-to-perl-7.html
    title: "Perl Steering Council: What happened to Perl 7? (May 2022)"
  - id: dart3
    resource: https://dart.dev/blog/announcing-dart-3
    title: "Dart blog: Announcing Dart 3 (May 2023)"
  - id: rhombus-10
    resource: https://blog.racket-lang.org/2026/06/rhombus-v1.0.html
    title: "Racket blog: Rhombus v1.0 (2026-06-22)"
---

# Summary
**Mixed.** In 2018–2026 the "big-bang redesign" of an established language was mostly a cautionary tale. **Scala 3** (May 2021) was the best-engineered attempt in the period. It came with TASTy-based two-way library compatibility, migration rewrites and later an LTS line,[^scala3-here][^tasty-reader][^scala-39] and it still cost Scala years of momentum, while Spark stayed on 2.13.[^spark-scala3][^vl-survey-2026] **Perl 6** had diverged so far that it renamed itself **Raku** in October 2019,[^raku-register] and the **Perl 7** plan (2020) was shelved in favour of opt-in feature bundles.[^perl7] Python 2's end of life on 2020-01-01[^py2-sunset] closed the longest redesign migration in mainstream history and became the warning every later designer cited. The migrations that worked were **staged and opt-in, and ended with a hard cutover only after the ecosystem had moved**. Dart 3 required sound null safety only once 99% of the top 1000 packages supported it.[^dart3] By 2026 the field had settled on editions, feature guards and LTS lines rather than "version 2" forks.

# The idea
Once a language's warts are clear (Scala 2 implicits, Perl 5 sigils and boilerplate, Python 2 strings, Lisp parentheses), designers are tempted to fix them all in one incompatible release. Prior art: Python 3 (2008), Perl 6 (announced 2000), and ECMAScript 4, which was abandoned in 2008. The open question at the start of 2018 was whether better tooling (binary interop, automated rewrites, LTS) could make such a redesign cheap enough.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-10 | Perl 6 renamed Raku; "new wine into old wineskins" [^raku-register] | mixed |
| E1 | 2020-01-01 | Python 2 reaches end of life [^py2-sunset] | + |
| E1 | 2020-06 | Perl 7 announced (defaults change, compatibility break) [^perl7] | mixed |
| E2 | 2021-05-13 | Scala 3.0 ships after 8 years of Dotty work [^scala3-here] | + |
| E2 | 2022-05 | Perl Steering Council shelves the Perl 7 plan in favour of `use v5.36` bundles [^perl7] | − |
| E3 | 2023-05 | Dart 3 requires 100% sound null safety after a 3-year opt-in period [^dart3] | + |
| E4 | 2025-12 | "Scala 3 slowed us down?" revives migration-cost debate [^hn-slowed] | − |
| E4 | 2026-05 | Scala survey: Scala 3 predominant, but respondents −24% vs 2023 [^vl-survey-2026] | mixed |
| E4 | 2026-06-22 | Rhombus 1.0: a new-syntax sibling language, not a replacement for Racket [^rhombus-10] | mixed |
| E4 | 2026-09-03 | Scala 3.9 LTS: the 3.x transition considered complete [^scala-39] | + |

# Where it succeeded
- **Scala 3 as engineering.** given/using, enums and ADTs, union types and principled macros all shipped. TASTy let 2.13 and 3 libraries interoperate for five years, and ~1,780 of ~2,000 community-build projects compiled on 3.9 with minimal changes.[^tasty-reader][^scala-39]
- **Dart 3** shows the successful recipe: an opt-in period, migration tools, ecosystem tracking, and then a hard cutover.[^dart3]
- **Python 3** did eventually "win". Sunsetting Python 2 removed the split, and the Python ecosystem grew a lot in E2–E4.[^py2-sunset]

# Where it failed or stalled
- **Momentum loss.** Scala's community shrank over the transition: only 6% newcomers in 2026, and its biggest user framework, Spark, never moved.[^vl-survey-2026][^spark-scala3]
- **Identity crisis.** Perl 6 needed a new name before it could be judged on its merits. Perl 5 then could not risk even a mild breaking version and retreated to feature bundles.[^raku-register][^perl7]
- **Macro and metaprogramming rewrites** are the expensive part. Scala 2 macros did not carry over, and that blocked libraries.[^hn-slowed]

# Why
1. **Ecosystem migration time is set by the slowest critical dependency** (Spark for Scala, NumPy-era libraries for Python), not by the compiler. Interop helps but cannot remove the need to republish.
2. **Competitors keep improving during the transition.** While Scala 3 matured, Java gained records, sealed types and pattern matching, and Kotlin became the default "better Java". The redesign's benefits arrived just as they stopped being unique.
3. **Staged, opt-in change keeps trust.** Rust editions, Dart's null-safety opt-in and Perl's `use vX` bundles all let old and new code coexist per module. Big-bang breaks force each user into a cost-benefit decision, and many choose to leave.
4. **Naming matters.** If the redesign is a different language (Raku, Rhombus), saying so early avoids a decade of confusion. Rhombus learned from this and presents itself as a sibling, "as Elixir is to Erlang".[^rhombus-10]

# Lessons
- Prefer editions, feature guards and LTS over "version 2". If you must break, ship binary interop and automated rewrites, and make the hard cutover only when the ecosystem metrics say it is safe.
- Budget the momentum cost: a multi-year transition is a window for competitors.

# Related
- [Scala](/languages/scala.md), [Perl/Raku](/languages/perl-raku.md), [Python](/languages/python.md), [Racket](/languages/racket.md), [Dart](/languages/dart.md)
- [Language editions and evolution](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md), [Null safety](/ideas/types/null-safety.md)
- [Scala 3.0 released](/events/2021-05-scala-3-released.md)

[^scala3-here]: Scala 3 is here! — https://www.scala-lang.org/blog/2021/05/14/scala3-is-here.html
[^tasty-reader]: State of the TASTy reader — https://www.scala-lang.org/blog/state-of-tasty-reader.html
[^scala-39]: Scala 3.9 LTS released! — https://scala-lang.org/news/3.9/
[^vl-survey-2026]: VirtusLab: Scala Survey 2026 — https://virtuslab.com/blog/scala/our-impressions-from-the-scala-survey-2026
[^spark-scala3]: Scala 3 and Spark in 2026 — https://sparkingscala.com/latest/2026/04/06/scala-3-spark-2026/
[^hn-slowed]: HN: Scala 3 slowed us down? — https://news.ycombinator.com/item?id=46182202
[^py2-sunset]: Sunsetting Python 2 — https://www.python.org/doc/sunset-python-2/
[^raku-register]: The Register: Raku — https://www.theregister.com/2019/10/11/perl_6_raku_larry_wall/
[^perl7]: What happened to Perl 7? — https://blogs.perl.org/users/psc/2022/05/what-happened-to-perl-7.html
[^dart3]: Announcing Dart 3 — https://dart.dev/blog/announcing-dart-3
[^rhombus-10]: Rhombus v1.0 — https://blog.racket-lang.org/2026/06/rhombus-v1.0.html
