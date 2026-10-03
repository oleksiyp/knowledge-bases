---
type: Language
title: Unison
description: "Statically typed functional language where code is content-addressed (each definition identified by a hash of its syntax tree) and stored in a database instead of text files, with algebraic effects (abilities) and a distributed-computing runtime. It reached 1.0 in November 2025 after seven years of VC-backed development, alongside a commercial Unison Cloud. Ideas widely admired, adoption still tiny."
tags: [content-addressed, functional, algebraic-effects, distributed-computing, vc-backed, public-benefit-corp]
paradigms: [functional, distributed]
typing: static
memory_model: gc
first_released: 2019
steward: Unison Computing, PBC
governance: single-vendor
trajectory: niche
ideas: [ideas/tooling-and-ecosystem/content-addressed-code, ideas/types/algebraic-effects-and-handlers]
runtimes: []
adoption_signals:
  github_stars: { value: 6743, as_of: 2026-10-03 }
  unison_share_definitions: { value: "139,811+ published definitions, 1,300+ authors", as_of: 2025-11 }
era_momentum: { E1: up, E2: flat, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: unison-1-0
    resource: https://www.unison-lang.org/unison-1-0/
    title: "Unison: Announcing Unison 1.0"
  - id: unison-releases
    resource: https://github.com/unisonweb/unison/releases
    title: "GitHub: unisonweb/unison releases (dates via GitHub API, 2026-10-03)"
  - id: unison-seed
    resource: https://www.unison-lang.org/blog/our-seed-funding/
    title: "Unison blog: Unison Computing's seed funding and why our investors are special"
  - id: uncork-ga
    resource: https://medium.com/uncorkcapital/welcome-unison-computing-now-in-ga-4d3e763638c3
    title: "Uncork Capital: Welcome, Unison Computing — Now in GA!"
  - id: hn-unison-1
    resource: https://news.ycombinator.com/item?id=46049722
    title: "Hacker News: Unison 1.0 discussion"
  - id: infoworld-unison
    resource: https://www.infoworld.com/article/4100673/futuristic-unison-functional-language-debuts.html
    title: "InfoWorld: 'Futuristic' Unison functional language debuts"
  - id: unison-pbc
    resource: https://www.unison-lang.org/blog/benefit-corp-report/
    title: "Unison blog: Why Unison Computing is a public benefit corporation"
---

# Summary
Unison is the leading test of [content-addressed code](/ideas/tooling-and-ecosystem/content-addressed-code.md). Every definition is identified by a hash of its syntax tree. Names are metadata, and the codebase is a database, so renames are instant and never break callers, and there are no builds or dependency conflicts in the usual sense.[^unison-1-0] Unison Computing (a public benefit corporation founded in 2018 by Paul Chiusano, Rúnar Bjarnason and Arya Irani) raised about $9.75M in seed funding, mostly in late 2022.[^unison-seed][^unison-pbc] It launched Unison Cloud for general availability in February 2024 and shipped **Unison 1.0 on 2025-11-25**, followed by 1.1–1.5 through October 2026.[^uncork-ga][^unison-releases] Verdict: a technical success and a well-regarded design (abilities are one of the most usable [algebraic-effects](/ideas/types/algebraic-effects-and-handlers.md) systems), but adoption is tiny. The decision to leave text files cuts Unison off from git, editors, code review and, increasingly, LLM tooling, all of which assume code is text.[^hn-unison-1]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-08 | Public alpha release [^unison-1-0] | + |
| E3 | 2022 (late) | Most of the ~$9.75M seed round closes (Uncork, Amplify, Good Growth, Bloomberg Beta) [^unison-seed] | + |
| E3 | 2024-02 | Unison Cloud generally available, with a "Bring Your Own Cloud" option [^uncork-ga] | + |
| E4 | 2025-11-25 | Unison 1.0 [^unison-releases][^unison-1-0] | + |
| E4 | 2026-10-02 | Unison 1.5.0 adds GADTs and GADT-indexed abilities [^unison-releases] | + |

# Ideas it bet on
| Idea | Outcome for Unison |
|---|---|
| [Content-addressed code](/ideas/tooling-and-ecosystem/content-addressed-code.md) | works technically; ecosystem cost is high, adoption unproven |
| [Algebraic effects (abilities)](/ideas/types/algebraic-effects-and-handlers.md) | succeeded in-language; often cited as one of the most usable effect systems |
| Code that ships itself (send a computation by hash to a remote node) | works in Unison Cloud, which runs its own orchestration in Unison [^unison-1-0] |
| Language plus hosted cloud as the business model | unproven: revenue not public |

# What succeeded
- Shipped 1.0 with integrated tooling: projects, branches and pull requests on Unison Share, plus type-based search across the ecosystem.[^unison-1-0]
- Uses its own product: Unison Cloud's orchestration layer is written in Unison.[^unison-1-0]
- A steady release cadence after 1.0 (1.0.1 to 1.5.0 in about ten months).[^unison-releases]
- Ecosystem by 1.0: 139,811+ published definitions from 1,300+ authors.[^unison-1-0]

# What failed or stalled
- **Leaving text files is a big ask.** HN discussions repeatedly note that you need Unison's own tools to read or review code, and that existing VCS and editors do not fit.[^hn-unison-1]
- **Time to 1.0.** About seven years from the founding of the company — long enough for the developer-tools market (and LLM coding assistants) to change under it.[^unison-1-0]
- **Small community.** About 6.7k GitHub stars, and Unison is absent from mainstream surveys.[^unison-releases]

# By era
## E1
The alpha (2019) generated "future of programming" buzz.[^unison-1-0]
## E2
Slow, mostly internal progress on the codebase format, the runtime and Unison Share.
## E3
Seed funding, then the Unison Cloud GA (February 2024).[^unison-seed][^uncork-ga]
## E4
1.0 (November 2025) and five minor releases. Press called it a "futuristic" debut.[^infoworld-unison][^unison-releases]

# Lessons
- A radically better representation of code still has to fit the text-based toolchain everyone else uses: git, review, CI and now LLMs.
- Pairing a language with a cloud product gives it a revenue path, but makes adoption depend on trust in one vendor.

# Related
- [Content-addressed code](/ideas/tooling-and-ecosystem/content-addressed-code.md), [Algebraic effects and handlers](/ideas/types/algebraic-effects-and-handlers.md)
- [Haskell](/languages/haskell.md), [Koka](/languages/koka.md), [Roc](/languages/roc.md)
- Event: [Unison 1.0](/events/2025-11-unison-1-0.md)

[^unison-1-0]: Announcing Unison 1.0 — https://www.unison-lang.org/unison-1-0/
[^unison-releases]: unisonweb/unison releases — https://github.com/unisonweb/unison/releases
[^unison-seed]: Unison Computing's seed funding — https://www.unison-lang.org/blog/our-seed-funding/
[^uncork-ga]: Uncork Capital: Welcome, Unison Computing — Now in GA! — https://medium.com/uncorkcapital/welcome-unison-computing-now-in-ga-4d3e763638c3
[^hn-unison-1]: Hacker News: Unison 1.0 — https://news.ycombinator.com/item?id=46049722
[^infoworld-unison]: InfoWorld: 'Futuristic' Unison functional language debuts — https://www.infoworld.com/article/4100673/futuristic-unison-functional-language-debuts.html
[^unison-pbc]: Why Unison Computing is a public benefit corporation — https://www.unison-lang.org/blog/benefit-corp-report/
