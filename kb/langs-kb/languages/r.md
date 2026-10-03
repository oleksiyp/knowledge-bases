---
type: Language
title: R
description: "R held its statistics and bioinformatics stronghold from 2018 to 2026 but lost general data-science mindshare to Python. Its main steward, RStudio, renamed itself Posit (2022) and built a bilingual IDE (Positron, 2025). The language changed conservatively: native pipe, stringsAsFactors fix, webR. Verdict: stable niche, not dead; TIOBE even has it rising as MATLAB and SAS fade."
tags: [r, statistics, data-science, bioinformatics, posit, tidyverse, cran, webr]
paradigms: [functional, array, statistical]
typing: dynamic
memory_model: gc
first_released: 1995
steward: R Core Team / R Foundation; ecosystem led by Posit PBC
governance: foundation
trajectory: stable
ideas: [ideas/runtime-performance/copy-and-patch-jit, ideas/platforms-and-portability/webassembly-in-the-browser, ideas/metaprogramming/multiple-dispatch]
runtimes: []
adoption_signals:
  tiobe_rank: { value: 9, as_of: 2026-09 }
  tiobe_rating_pct: { value: 1.69, as_of: 2026-09 }
  so_survey_usage_pct: { value: 4.9, as_of: 2025 }
era_momentum: { E1: flat, E2: down, E3: flat, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: r40
    resource: https://www.r-bloggers.com/2020/04/r-4-0-0-now-available-and-a-look-back-at-rs-history/
    title: "R-bloggers: R 4.0.0 now available (2020-04-24; stringsAsFactors = FALSE)"
  - id: r41-pipe
    resource: https://www.jumpingrivers.com/blog/new-features-r410-pipe-anonymous-functions/
    title: "Jumping Rivers: New features in R 4.1.0 (native pipe, lambda syntax)"
  - id: posit-rename
    resource: https://posit.co/blog/rstudio-is-now-posit
    title: "Posit: RStudio is now Posit (2022)"
    author: org:posit
  - id: webr-010
    resource: https://tidyverse.org/blog/2023/03/webr-0-1-0/
    title: "Tidyverse blog: webR 0.1.0 has been released (March 2023)"
    author: org:posit
  - id: positron-ga
    resource: https://posit.co/blog/positron-product-announcement-aug-2025
    title: "Posit: Announcing Positron, a new Data Science IDE (Aug 2025)"
    author: org:posit
  - id: r46
    resource: https://www.jumpingrivers.com/blog/whats-new-r46/
    title: "Jumping Rivers: What's New in R 4.6.0 (2026-04-24)"
  - id: tiobe-2026-09
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index, September 2026"
    author: org:tiobe
  - id: techrep-tiobe-may26
    resource: https://www.techrepublic.com/article/news-tiobe-may-2026-r-hits-8/
    title: "TechRepublic: TIOBE Index for May 2026 — R Ascends as Statistical Tools Consolidate"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
    author: org:stack-overflow
  - id: r-cp-jit
    resource: https://dl.acm.org/doi/10.1145/3759548.3763370
    title: "ACM: Copy-and-Patch Just-in-Time Compiler for R (2025)"
  - id: posit-typechecker
    resource: https://opensource.posit.co/blog/2026-03-31_python-type-checkers/
    title: "Posit Open Source: How we chose Positron's Python type checker (2026-03-31)"
    author: org:posit
---

# Summary
R's story from 2018 to 2026 is **a specialist language that held its ground while its steward hedged toward Python**. R remains the working language of academic statistics, biostatistics, epidemiology and much of bioinformatics. Python took machine learning and most new "data science" work. The strongest sign of this came from R's own main company: RStudio renamed itself **Posit** in 2022 to stop being R-only.[^posit-rename] Its new IDE, **Positron** (stable 2025), treats R and Python equally.[^positron-ga]

The language changed conservatively:
- **R 4.0** (2020-04-24) finally made `stringsAsFactors = FALSE` the default.[^r40]
- **R 4.1** (May 2021) added the native `|>` pipe and `\(x)` lambdas.[^r41-pipe]
- **webR** (2023) compiled R to WebAssembly.[^webr-010]
- **R 4.6** shipped on 2026-04-24.[^r46]

Signals in 2026 are mixed but not declining: R is used by 4.9% of Stack Overflow respondents and ranks #9 on TIOBE (1.69%). TIOBE attributes R's rise to consolidation of statistical tools, with SAS and MATLAB losing share.[^so-2025][^tiobe-2026-09][^techrep-tiobe-may26]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-04-24 | R 4.0.0: stringsAsFactors = FALSE default, new reference counting [^r40] | + |
| E2 | 2021-05 | R 4.1.0: native pipe `|>` and `\(x)` lambda syntax [^r41-pipe] | + |
| E2 | 2022-07 | RStudio announces rename to Posit, signalling multi-language focus [^posit-rename] | mixed |
| E3 | 2023-03 | webR 0.1.0: R in the browser via WebAssembly [^webr-010] | + |
| E4 | 2025-07/08 | Positron reaches stable/GA: an R+Python IDE built on Code OSS [^positron-ga] | mixed |
| E4 | 2025 | Research prototype: copy-and-patch JIT for R [^r-cp-jit] | + |
| E4 | 2026-04-24 | R 4.6.0 released [^r46] | flat |
| E4 | 2026-05 | TIOBE: R climbs to #8 as statistical tools consolidate [^techrep-tiobe-may26] | + |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| [WebAssembly in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md) | webR works and powers teaching and Shiny-in-browser use |
| [Copy-and-patch JIT](/ideas/runtime-performance/copy-and-patch-jit.md) | research only; R's core still uses a bytecode compiler |
| [Multiple dispatch](/ideas/metaprogramming/multiple-dispatch.md) | S4 generics already multi-dispatch; little new movement |

# What succeeded
- **Domain lock-in.** CRAN, Bioconductor, ggplot2 and the tidyverse have no Python equivalent for many statistical methods, so R stays the reference implementation for new statistics.
- **Bilingual tooling.** Posit chose to serve both communities rather than fight Python. Positron even picked a Python type checker, which shows how far that went.[^posit-typechecker]
- **Careful breaking changes.** R 4.0 fixed a long-standing default with a clear migration path.[^r40]

# What failed or stalled
- **General data science and ML.** Python's deep-learning stack never had an R equivalent. R's share of new data-science practitioners fell through E2.
- **Runtime performance.** R's interpreter got no JIT or free-threading effort comparable to Python's. Research prototypes exist, but nothing has reached GNU R.[^r-cp-jit]
- **Steward dependence.** Much of R's modern experience (RStudio, tidyverse, Shiny, Quarto) comes from one company, which now invests in both languages.

# By era
## E1
R 4.0. The tidyverse is at its peak.
## E2
Native pipe. Python wins machine learning; RStudio→Posit.
## E3
webR and Quarto; R holds its statistics stronghold.
## E4
Positron GA; R rises in TIOBE as proprietary statistics tools fade.[^techrep-tiobe-may26]

# Lessons
- A language survives losing the general market if it owns a domain's reference implementations.
- When a language's main corporate steward goes multi-language, that is a hedge, not an exit. It does change where investment goes.

# Related
- [Python](/languages/python.md) · [Julia](/languages/julia.md)
- [Packaging revolution in Python](/ideas/tooling-and-ecosystem/packaging-revolution-python.md)

[^r40]: R-bloggers: R 4.0.0 now available — https://www.r-bloggers.com/2020/04/r-4-0-0-now-available-and-a-look-back-at-rs-history/
[^r41-pipe]: Jumping Rivers: New features in R 4.1.0 — https://www.jumpingrivers.com/blog/new-features-r410-pipe-anonymous-functions/
[^posit-rename]: Posit: RStudio is now Posit — https://posit.co/blog/rstudio-is-now-posit
[^webr-010]: Tidyverse blog: webR 0.1.0 — https://tidyverse.org/blog/2023/03/webr-0-1-0/
[^positron-ga]: Posit: Announcing Positron — https://posit.co/blog/positron-product-announcement-aug-2025
[^r46]: Jumping Rivers: What's New in R 4.6.0 — https://www.jumpingrivers.com/blog/whats-new-r46/
[^tiobe-2026-09]: TIOBE Index, September 2026 — https://www.tiobe.com/tiobe-index/
[^techrep-tiobe-may26]: TechRepublic: TIOBE Index for May 2026 — https://www.techrepublic.com/article/news-tiobe-may-2026-r-hits-8/
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^r-cp-jit]: ACM: Copy-and-Patch Just-in-Time Compiler for R — https://dl.acm.org/doi/10.1145/3759548.3763370
[^posit-typechecker]: Posit Open Source: How we chose Positron's Python type checker — https://opensource.posit.co/blog/2026-03-31_python-type-checkers/
