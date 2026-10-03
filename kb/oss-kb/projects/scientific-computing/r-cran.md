---
type: OSS Project
title: R language and CRAN
description: The GPL statistical language and its curated package archive; R climbed back into the TIOBE top 10 (Dec 2025, peaking at #8 in May 2026), CRAN keeps growing (~2,000 new packages in H1 2026) on a tiny volunteer team, and the R Foundation got its first major infrastructure grant (Sovereign Tech Fund, $450k).
resource: https://www.r-project.org
tags: [language, statistics, gpl-2.0, community, academic, package-repository, sovereign-tech-fund]
domain: scientific-computing
license: GPL-2.0-or-later
license_history: ["GPL-2.0 | GPL-3.0 (unchanged)"]
governance: community
steward: R Foundation for Statistical Computing (R Core Team); CRAN team (volunteers)
backing_orgs: [organizations/posit]
metrics:
  tiobe_rank: { value: 9, as_of: 2026-09-30, note: "1.69%; #8 in May 2026; #10 in Dec 2025" }
  cran_new_packages_h1_2026: { value: 1992, as_of: 2026-06-30 }
  cran_submissions_h1_2026: { value: 18293, as_of: 2026-06-30 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: r-450
    resource: https://www.r-bloggers.com/2025/04/whats-new-in-r-4-5-0/
    title: "R-bloggers: What's new in R 4.5.0? (released 2025-04-11)"
  - id: r-460
    resource: https://www.jumpingrivers.com/blog/whats-new-r46/
    title: "Jumping Rivers: What's New in R 4.6.0? (released 2026-04-24)"
  - id: r-project
    resource: https://www.r-project.org/
    title: "R Project home page (R 4.6.2 scheduled 2026-10-29)"
  - id: cran-rj-2026-2
    resource: https://journal.r-project.org/news/RJ-2026-2-cran/
    title: "The R Journal: Changes on CRAN (Jan–Jun 2026)"
  - id: stf-r
    resource: https://r-consortium.org/posts/sovereign-tech-fund-invests-450000-in-r-foundation-to-enhance-r-sustainability-and-security/
    title: "R Consortium: Sovereign Tech Fund invests $450,000 in R Foundation (2025-10-02)"
  - id: infoworld-tiobe
    resource: https://www.infoworld.com/article/4102696/r-language-is-making-a-comeback-tiobe.html
    title: "InfoWorld: R language is making a comeback — Tiobe (2025-12-08)"
    author: org:infoworld
  - id: tr-tiobe-may
    resource: https://www.techrepublic.com/article/news-tiobe-may-2026-r-hits-8/
    title: "TechRepublic: TIOBE Index for May 2026 — R Ascends"
  - id: tr-tiobe-sep
    resource: https://www.techrepublic.com/article/news-tiobe-index-language-rankings/
    title: "TechRepublic: TIOBE Index for September 2026"
  - id: rc-grants-2026
    resource: https://r-consortium.org/posts/r-consortium-awards-first-round-of-2026-technical-grants/
    title: "R Consortium: First round of 2026 technical grants"
  - id: webr-060
    resource: https://opensource.posit.co/blog/2026-06-18_webr-0-6-0/
    title: "Posit: webR 0.6.0 (2026-06-18)"
  - id: user-2026
    resource: https://r-consortium.org/posts/what-makes-r-strong-reflections-from-user-2026/
    title: "R Consortium: Reflections from useR! 2026 (Warsaw, July 2026)"
---

# Summary
R had an unexpectedly good two years. It returned to the TIOBE top 10 in December 2025 (1.96%) — TIOBE's CEO attributing it to the growing importance of statistics and large-scale visualization[^infoworld-tiobe] — reached #8 (its best-ever rank) in May 2026[^tr-tiobe-may] and sat at #9 in September 2026[^tr-tiobe-sep]. Annual releases landed on schedule (R 4.5.0 on 2025-04-11; R 4.6.0 on 2026-04-24 with C++20 default and `%notin%`)[^r-450][^r-460]. CRAN processed 18,293 submissions and added 1,992 new packages in H1 2026, with 72% of actions auto-processed, still run by a handful of academics[^cran-rj-2026-2]. The R Foundation received $450k (€392k) from Germany's Sovereign Tech Fund in Oct 2025 for infrastructure modernization, Windows ARM, binary signing and reproducibility[^stf-r]. Verdict: growing in academia/research; commercial energy around R flows through Posit.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-11 | R 4.5.0 released[^r-450] | OSS | + |
| W12 | 2025-10-02 | Sovereign Tech Fund invests $450k in R Foundation (18 months)[^stf-r] | OSS | + |
| W12 | 2025-12-08 | R re-enters TIOBE top 10 (#10, 1.96%)[^infoworld-tiobe] | OSS | + |
| W6 | 2026-04-24 | R 4.6.0 released (C++20 default, `%notin%`)[^r-460] | OSS | + |
| W6 | 2026-05 | R at TIOBE #8, matching best-ever rank[^tr-tiobe-may] | OSS | + |
| W6 | 2026-06-18 | webR 0.6.0 brings R 4.6 to the browser (WebAssembly)[^webr-060] | OSS | + |
| W3 | 2026-07-07/09 | useR! 2026 in Warsaw[^user-2026] | OSS | + |
| W3 | 2026-07-14 | R Consortium awards first round of 2026 ISC grants (7 projects)[^rc-grants-2026] | OSS | + |
| W3 | 2026-09 | TIOBE #9 (1.69%)[^tr-tiobe-sep] | OSS | 0 |

# OSS successes
- Popularity rebound in TIOBE[^infoworld-tiobe][^tr-tiobe-may]; reliable annual release train[^r-450][^r-460].
- First sizeable public infrastructure grant to the R Foundation[^stf-r].
- CRAN scales via automation (72% of actions automated)[^cran-rj-2026-2]; webR keeps R in the browser[^webr-060].

# OSS failures / risks
- CRAN depends on very few volunteer maintainers; 1,273 packages archived in H1 2026 alone[^cran-rj-2026-2].
- R Core succession and aging codebase are explicit concerns the STF grant targets[^stf-r].
- Industry ML/AI work keeps consolidating on Python[^tr-tiobe-sep].

# Business successes
- n/a (non-profit). Posit remains the main commercial actor (see [Posit](/organizations/posit.md)).

# Business failures / risks
- n/a.

# By window
## W3
- useR! 2026; R Consortium 2026 grants (7 projects)[^rc-grants-2026]; R steady at TIOBE #9; R 4.6.2 scheduled for 2026-10-29[^user-2026][^tr-tiobe-sep][^r-project].
## W6
- R 4.6.0; TIOBE #8; webR 0.6.0[^r-460][^tr-tiobe-may][^webr-060].
## W9
- No notable events found (CRAN routine operations continued[^cran-rj-2026-2]).
## W12
- STF $450k grant; return to TIOBE top 10[^stf-r][^infoworld-tiobe].
## W24
- R 4.5.0[^r-450].

# Lessons
- Domain-specific languages with entrenched academic communities can regain share even as Python dominates.
- Public "sovereign tech" funding is filling maintenance gaps that grants from industry and philanthropy never covered.
- Automation is how a tiny volunteer curation team survives package-archive growth.

# Related
- [/organizations/posit.md](/organizations/posit.md), [/projects/scientific-computing/positron.md](/projects/scientific-computing/positron.md), [/projects/scientific-computing/quarto.md](/projects/scientific-computing/quarto.md)
- [/projects/security-sustainability/sovereign-tech-agency.md](/projects/security-sustainability/sovereign-tech-agency.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^r-450]: https://www.r-bloggers.com/2025/04/whats-new-in-r-4-5-0/
[^r-460]: https://www.jumpingrivers.com/blog/whats-new-r46/
[^r-project]: https://www.r-project.org/
[^cran-rj-2026-2]: https://journal.r-project.org/news/RJ-2026-2-cran/
[^stf-r]: https://r-consortium.org/posts/sovereign-tech-fund-invests-450000-in-r-foundation-to-enhance-r-sustainability-and-security/
[^infoworld-tiobe]: https://www.infoworld.com/article/4102696/r-language-is-making-a-comeback-tiobe.html
[^tr-tiobe-may]: https://www.techrepublic.com/article/news-tiobe-may-2026-r-hits-8/
[^tr-tiobe-sep]: https://www.techrepublic.com/article/news-tiobe-index-language-rankings/
[^rc-grants-2026]: https://r-consortium.org/posts/r-consortium-awards-first-round-of-2026-technical-grants/
[^webr-060]: https://opensource.posit.co/blog/2026-06-18_webr-0-6-0/
[^user-2026]: https://r-consortium.org/posts/what-makes-r-strong-reflections-from-user-2026/
