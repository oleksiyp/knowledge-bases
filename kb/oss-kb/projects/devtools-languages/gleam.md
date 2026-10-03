---
type: OSS Project
title: Gleam
description: Statically typed, Apache-2.0 functional language for the Erlang VM and JavaScript; a breakout small-language success of 2024–26 — v1.0 (Mar 2024) to v1.18 (Jul 2026), second "most admired" language in Stack Overflow's 2025 survey, first all-Gleam conference — funded entirely by sponsors.
resource: https://github.com/gleam-lang/gleam
tags: [programming-language, beam, erlang, javascript, apache-2.0, sponsor-funded, community]
domain: devtools-languages
license: Apache-2.0
license_history: ["Apache-2.0 (2016-)"]
governance: community
steward: Louis Pilfold / Otter Nonsense Ltd (sponsor-funded)
backing_orgs: []
metrics:
  github_stars: { value: 21957, as_of: 2026-10-03 }
  so_survey_admired: { value: "70% (2nd after Rust 72%)", as_of: 2025-07 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gleam-gh
    resource: https://github.com/gleam-lang/gleam
    title: gleam-lang/gleam GitHub repository (stars via GitHub API, 2026-10-03)
  - id: gleam-news
    resource: https://gleam.run/news/
    title: "gleam.run: News (release posts v1.6–v1.18, Gleam Gathering, GitHub Security Lab)"
  - id: gleam-v1
    resource: https://gleam.run/news/gleam-version-1/
    title: "gleam.run: Gleam version 1"
  - id: gleam-lsp-118
    resource: https://gleam.run/news/a-field-day-for-gleams-language-server/
    title: "gleam.run: A field day for Gleam's language server (v1.18.0)"
  - id: gleam-sponsor
    resource: https://gleam.run/sponsor/
    title: "gleam.run: Sponsor"
  - id: gleam-lambda
    resource: https://gleam.run/news/welcome-lambda/
    title: "gleam.run: Welcome Lambda!"
  - id: so-2025-tech
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
  - id: infoworld-gleam-v1
    resource: https://www.infoworld.com/article/2336354/gleam-language-available-in-first-stable-release.html
    title: "InfoWorld: Gleam language available in first stable release"
---

# Summary
Gleam is the clearest small-language breakout of the period. After v1.0 in March 2024,[^gleam-v1][^infoworld-gleam-v1] it shipped a minor release roughly every 6–8 weeks — v1.6 (Nov 2024) through v1.14 (Dec 2025) and v1.15–v1.18 in 2026 (v1.18 on 2026-07-29, focused on language-server refactorings).[^gleam-news][^gleam-lsp-118] In its first appearance in the Stack Overflow survey (2025) it was the second most admired language (70%), behind only Rust.[^so-2025-tech] The community held its first all-Gleam conference, Gleam Gathering (announced Feb 2026), and announced a 2027 edition in London.[^gleam-news] It is funded entirely by sponsors (400+ individuals; corporate sponsors incl. Lambda, Atuin, NineFX, n8n) through Louis Pilfold's company.[^gleam-sponsor][^gleam-lambda] Verdict: OSS growing; no commercial business, sustainability rests on sponsorship.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11-18 | v1.6.0 context-aware compilation [^gleam-news] | OSS | + |
| W24 | 2024-12-06 | Public Gleam roadmap published [^gleam-news] | OSS | + |
| W24 | 2025-06-02 | v1.11.0: Gleam JavaScript ~30% faster [^gleam-news] | OSS | + |
| W24 | 2025-07 | Stack Overflow 2025: 2nd most admired language (70%) [^so-2025-tech] | OSS | + |
| W12 | 2025-12-25 | v1.14.0 [^gleam-news] | OSS | + |
| W9 | 2026-02-11 | First all-Gleam conference (Gleam Gathering) announced [^gleam-news] | OSS | + |
| W9 | 2026-03-16 | v1.15.0: Hex package-registry security upgrades [^gleam-news] | OSS | + |
| W6 | 2026-04-24 | v1.16.0: JavaScript source maps [^gleam-news] | OSS | + |
| W6 | 2026-06-02 | v1.17.0: single-file BEAM programs via escript [^gleam-news] | OSS | + |
| W3 | 2026-07-29 | v1.18.0 language-server release [^gleam-lsp-118] | OSS | + |
| W3 | 2026-08-17 | Takeaways from GitHub Secure Open Source Fund participation [^gleam-news] | OSS | + |
| W3 | 2026-09-11 | Gleam Gathering 2027 (London) announced [^gleam-news] | OSS | + |

# OSS successes
- Rapid, steady release cadence with strong tooling focus (LSP, formatter, package manager in one binary).[^gleam-news]
- Exceptional developer sentiment (SO 2025 admiration 70%).[^so-2025-tech]
- Dual target (BEAM + JavaScript) broadens use cases (Lustre front-end framework).[^gleam-sponsor]

# OSS failures / risks
- Small core team (four sponsored developers) and very small usage share — admiration is high, usage low.[^gleam-sponsor][^so-2025-tech]

# Business successes
- Sustained a full-time creator and several contributors on sponsorship alone; corporate sponsor Lambda since Aug 2024.[^gleam-lambda][^gleam-sponsor]

# Business failures / risks
- No revenue model; bus-factor risk around Louis Pilfold.

# By window
## W3
- v1.18.0 (2026-07-29); GitHub Secure Open Source Fund write-up (2026-08-17); Gleam Gathering 2027 announced (2026-09-11).[^gleam-news][^gleam-lsp-118]
## W6
- v1.16.0 source maps (2026-04-24); v1.17.0 escript single-file programs (2026-06-02).[^gleam-news]
## W9
- First Gleam Gathering announced; v1.15.0 Hex security (2026-03-16).[^gleam-news]
## W12
- v1.13.0 (2025-10-19) and v1.14.0 (2025-12-25).[^gleam-news]
## W24
- v1.6–v1.12 releases; SO 2025 second-most-admired language.[^gleam-news][^so-2025-tech]

# Lessons
- A small, sponsor-funded language can compete on developer experience by shipping integrated tooling from day one.
- Riding an established VM (BEAM) and compiling to JavaScript lowers the adoption barrier for a new language.

# Related
- [Elixir](/projects/devtools-languages/elixir.md)
- [Rust](/projects/devtools-languages/rust.md)
