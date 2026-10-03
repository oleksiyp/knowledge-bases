---
type: Language
title: Perl and Raku
description: "The Perl family resolved its identity crisis between 2018 and 2026. Perl 6 was renamed Raku (2019) and has stayed a tiny niche. Perl 5 announced Perl 7 (2020), then shelved it in favour of opt-in version bundles and a new core class system. Perl is in maintenance-mode decline among developers; its 2025 TIOBE comeback was a measurement artefact."
tags: [perl, raku, scripting, text-processing, language-redesign, versioning, corinna]
paradigms: [imperative, scripting, multi-paradigm]
typing: dynamic
memory_model: rc
first_released: 1987
steward: Perl Steering Council / perl5-porters; Raku Steering Council (Rakudo)
governance: community
trajectory: declining
ideas: [ideas/tooling-and-ecosystem/language-editions-and-evolution, ideas/types/scala-3-and-language-redesigns, ideas/metaprogramming/multiple-dispatch]
runtimes: []
adoption_signals:
  tiobe_rank: { value: 23, as_of: 2026-09 }
  so_survey_usage_pct: { value: 3.8, as_of: 2025 }
era_momentum: { E1: down, E2: down, E3: flat, E4: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: raku-rename
    resource: https://developers.slashdot.org/story/19/10/12/2134246/larry-wall-approves-re-naming-perl-6-to-raku
    title: "Slashdot: Larry Wall Approves Re-Naming Perl 6 To Raku (Oct 2019)"
  - id: perl7-announce
    resource: https://www.perl.com/article/announcing-perl-7/
    title: "perl.com: Announcing Perl 7 (2020-06-24)"
  - id: perl7-psc
    resource: https://www.nntp.perl.org/group/perl.perl5.porters/2022/05/msg263741.html
    title: "Neil Bowers (PSC), perl5-porters: Wherefore art thou Perl 7? (2022-05-21)"
  - id: perl5380delta
    resource: https://perldoc.perl.org/perl5380delta
    title: "perldoc: perl5380delta (new experimental class feature)"
  - id: perl-eol
    resource: https://endoflife.date/perl
    title: "endoflife.date: Perl (5.42 released 2025-07-03)"
  - id: tiobe-2026-09
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index, September 2026"
    author: org:tiobe
  - id: iprog-perl
    resource: https://www.i-programmer.info/news/222-perl/18308-perl-rebounds-in-tiobe-index-why.html
    title: "I Programmer: Perl Rebounds In TIOBE Index — Why? (Sept 2025)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
    author: org:stack-overflow
---

# Summary
**Perl 5: managed decline with modernisation. Raku: an elegant language almost no one adopted.** In October 2019 Larry Wall approved renaming Perl 6 to Raku. This ended nearly twenty years in which "Perl 6" implied that Perl 5 was obsolete.[^raku-rename] In June 2020, Perl 5 tried to rebrand forward as **Perl 7**: Perl 5 with modern defaults, breaking some old scripts.[^perl7-announce] Core contributors objected to both the breakage and the governance. By May 2022 the new Perl Steering Council had replaced the plan. Modern defaults became opt-in through `use v5.36`, and "Perl 7" would only ship when the accumulated features justified a new baseline.[^perl7-psc] Perl 5.38 (2023) added a native `class` feature (the Corinna object model), and 5.42 shipped on 2025-07-03.[^perl5380delta][^perl-eol]

Developer usage is small: 3.8% in the 2025 Stack Overflow survey and #23 on TIOBE in September 2026.[^so-2025][^tiobe-2026-09] Perl's jump to TIOBE #10 in September 2025, from #32 in January, was explained by TIOBE's CEO largely as an effect of the number of books on Amazon. It was not a real adoption signal.[^iprog-perl]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-10 | Perl 6 renamed Raku with Larry Wall's approval [^raku-rename] | mixed |
| E1 | 2020-06-24 | Perl 7 announced (Perl 5 with modern defaults) [^perl7-announce] | + |
| E2 | 2020–2021 | Pushback over compatibility and governance; Perl Steering Council formed [^perl7-psc] | − |
| E2 | 2022-05-21 | PSC: no Perl 7 for now; `use v5.36` bundles instead [^perl7-psc] | − |
| E3 | 2023-07 | Perl 5.38 adds an experimental core `class` syntax (Corinna) [^perl5380delta] | + |
| E4 | 2025-07-03 | Perl 5.42 released [^perl-eol] | flat |
| E4 | 2025-09 | Perl re-enters the TIOBE top 10, driven by the book-count metric [^iprog-perl] | mixed |
| E4 | 2026-09 | Back to #23 on TIOBE (0.70%) [^tiobe-2026-09] | − |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| [Language editions and evolution](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md) | Perl 7's "new defaults" failed; opt-in version bundles (an editions-like approach) succeeded |
| [Language redesigns](/ideas/types/scala-3-and-language-redesigns.md) | Raku is the cautionary tale: a redesign so large it became a separate language |
| [Multiple dispatch](/ideas/metaprogramming/multiple-dispatch.md) | Raku has `multi` subs and gradual types; little real-world use |

# What succeeded
- **The rename.** Separating Raku from Perl ended the "dead language waiting for its successor" story. TIOBE's CEO cited this settling of identity when explaining Perl's 2025 bounce.[^iprog-perl]
- **Opt-in modernisation.** `use v5.36` turns on strict, warnings and signatures in one line without breaking CPAN. This is the same choice Rust editions made: new behaviour is opt-in per file.[^perl7-psc]
- **Governance.** An elected Steering Council replaced the informal "pumpking" model after the Perl 7 dispute.

# What failed or stalled
- **Perl 7.** A major-version bump that broke defaults was rejected by the people who maintain decades of CPAN code. The cost of breaking compatibility outweighed the marketing benefit of a new number.[^perl7-psc]
- **Raku adoption.** Raku has powerful features (grammars, gradual typing, multiple dispatch, concurrency) but no killer niche, no corporate sponsor and a slow runtime. It never registered in the major surveys.
- **New developers.** Python and shell-plus-Go took over Perl's sysadmin and text-processing niche. Perl is mostly maintained, not chosen.

# By era
## E1
Raku rename (2019); Perl 7 announcement (2020).
## E2
Perl 7 plan unwinds; Steering Council era begins; `use v5.36`.
## E3
Corinna `class` lands in 5.38; maintenance releases continue.
## E4
5.42 ships. A TIOBE blip in 2025 reverses by 2026.

# Lessons
- Version numbers are promises. Perl 6 taught that a new major version can freeze the old one's community; Perl 7 taught that breaking defaults to signal modernity alienates core maintainers.
- When a "next version" is really a new language, it is better to name it as one early.

# Related
- [Python](/languages/python.md) · [Ruby](/languages/ruby.md)
- [Perl 6 renamed Raku](/events/2019-10-perl-6-renamed-raku.md) · [Perl 7 announced](/events/2020-06-perl-7-announced.md)
- [Scala 3 and language redesigns](/ideas/types/scala-3-and-language-redesigns.md)

[^raku-rename]: Slashdot: Larry Wall Approves Re-Naming Perl 6 To Raku — https://developers.slashdot.org/story/19/10/12/2134246/larry-wall-approves-re-naming-perl-6-to-raku
[^perl7-announce]: perl.com: Announcing Perl 7 — https://www.perl.com/article/announcing-perl-7/
[^perl7-psc]: Neil Bowers: Wherefore art thou Perl 7? — https://www.nntp.perl.org/group/perl.perl5.porters/2022/05/msg263741.html
[^perl5380delta]: perldoc: perl5380delta — https://perldoc.perl.org/perl5380delta
[^perl-eol]: endoflife.date: Perl — https://endoflife.date/perl
[^tiobe-2026-09]: TIOBE Index, September 2026 — https://www.tiobe.com/tiobe-index/
[^iprog-perl]: I Programmer: Perl Rebounds In TIOBE Index — Why? — https://www.i-programmer.info/news/222-perl/18308-perl-rebounds-in-tiobe-index-why.html
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
