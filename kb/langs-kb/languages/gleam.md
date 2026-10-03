---
type: Language
title: Gleam
description: A statically typed functional language for the BEAM and JavaScript. It is the clearest new-language breakout of 2024–2026. It reached v1.0 in March 2024, kept a 6–8 week release cadence through v1.18 (Jul 2026), and was the second most admired language in Stack Overflow 2025 (70%). Production use is still tiny and its funding depends on sponsors.
tags: [gleam, beam, javascript, functional, static-typing, sponsor-funded, new-language]
paradigms: [functional, concurrent]
typing: static
memory_model: gc
first_released: 2016
steward: Louis Pilfold and the Gleam core team (sponsor-funded)
governance: bdfl
trajectory: rising
ideas: [ideas/concurrency/actor-model, ideas/tooling-and-ecosystem/integrated-toolchains, ideas/types/sum-types-and-pattern-matching]
runtimes: [runtimes/beam, runtimes/v8]
adoption_signals:
  so_survey_admired_pct: { value: 70, as_of: 2025 }
  so_survey_usage_pct: { value: 1.1, as_of: 2025 }
  github_stars: { value: 21957, as_of: 2026-10-03 }
  survey_production_users: { value: "52 of 841 respondents (~6%)", as_of: 2025-02 }
era_momentum: { E1: n/a, E2: flat, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: gleam-v1
    resource: https://gleam.run/news/gleam-version-1/
    title: "gleam.run: Gleam version 1 (2024-03-04)"
  - id: gleam-news
    resource: https://gleam.run/news/
    title: "gleam.run: News (release posts 2024–2026)"
  - id: gleam-survey-2024
    resource: https://gleam.run/news/developer-survey-2024-results/
    title: "gleam.run: Developer Survey 2024 Results (2025-02-06)"
  - id: gleam-sponsor
    resource: https://gleam.run/sponsor/
    title: "gleam.run: Sponsor"
  - id: gleam-lambda
    resource: https://gleam.run/news/welcome-lambda/
    title: "gleam.run: Welcome Lambda! (2024-08-26)"
  - id: gleam-js-30
    resource: https://gleam.run/news/gleam-javascript-gets-30-percent-faster/
    title: "gleam.run: Gleam JavaScript gets 30% faster (v1.11, 2025-06-02)"
  - id: gleam-lsp-118
    resource: https://gleam.run/news/a-field-day-for-gleams-language-server/
    title: "gleam.run: A field day for Gleam's language server (v1.18, 2026-07-29)"
  - id: so-2025-tech
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
  - id: infoworld-gleam-v1
    resource: https://www.infoworld.com/article/2336354/gleam-language-available-in-first-stable-release.html
    title: "InfoWorld: Gleam language available in first stable release"
---

# Summary
Gleam is the **breakout small language of 2024–2026**. It is a Rust-implemented compiler that targets both Erlang/BEAM and JavaScript, with ML-style static types, no exceptions, no macros, and a deliberately small surface area. One binary includes the build tool, package manager (Hex), formatter and language server. v1.0 shipped on 2024-03-04 with a semantic-versioning stability promise.[^gleam-v1][^infoworld-gleam-v1] The team then released a minor version roughly every 6–8 weeks, mostly focused on language-server features: rename and find-references in 2025, and a refactoring-focused v1.18 in July 2026.[^gleam-news][^gleam-lsp-118]

In its first Stack Overflow appearance in 2025, Gleam was the **second most admired language (70%)**, behind only Rust. Its usage share was 1.1%.[^so-2025-tech] In Gleam's own 2024 survey, about 6% of 841 respondents used it in production.[^gleam-survey-2024] Verdict: rising on sentiment and tooling quality. It is not yet proven in industry, and its funding is fragile.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2021–2022 | Pre-1.0 releases add JavaScript target and the language server (unverified exact dates) | + |
| E3 | 2024-03-04 | Gleam v1.0 released [^gleam-v1] | + |
| E3 | 2024-08-26 | Lambda becomes a corporate sponsor [^gleam-lambda] | + |
| E4 | 2024-12-06 | Public roadmap published [^gleam-news] | + |
| E4 | 2025-02-06 | First developer survey: 841 respondents, about 6% in production [^gleam-survey-2024] | mixed |
| E4 | 2025-06-02 | v1.11: Gleam JavaScript about 30% faster [^gleam-js-30] | + |
| E4 | 2025-07 | Stack Overflow 2025: 2nd most admired language (70%) [^so-2025-tech] | + |
| E4 | 2026-02-11 | First Gleam Gathering conference announced [^gleam-news] | + |
| E4 | 2026-07-29 | v1.18 language-server release [^gleam-lsp-118] | + |
| E4 | 2026-09-11 | Gleam Gathering 2027 (London) announced [^gleam-news] | + |

# Ideas it bet on
| Idea | Outcome for Gleam |
|---|---|
| Ride an existing VM (BEAM) and JS instead of building a runtime | Succeeded. It got OTP, Hex and browser and serverless reach for free. |
| Sound static types on the BEAM | Succeeding. It sits where Elixir's gradual approach does not. |
| [Integrated toolchain](/ideas/tooling-and-ecosystem/integrated-toolchains.md) in one binary | Succeeded. It is a key reason for high admiration. |
| Small language, no macros or type classes | Mixed. It is easy to learn, but users ask for more abstraction (e.g. JSON decoding ergonomics).[^gleam-survey-2024] |
| Typed [actors](/ideas/concurrency/actor-model.md) instead of raw OTP | Unproven. The survey asked for richer OTP/actor libraries.[^gleam-survey-2024] |

# What succeeded
- **Developer experience first.** Release notes in 2024–2026 are mostly about the language server, code actions, auto-imports and fault-tolerant compilation, not new syntax.[^gleam-news][^gleam-lsp-118]
- **Dual target.** The JavaScript target makes Gleam usable for front-end work (the Lustre framework) and edge code. In the 2024 survey, 297 of 841 respondents used the JS target.[^gleam-survey-2024]
- **Sentiment.** It ranked second most admired in 2025, ahead of Elixir (66%) and Zig.[^so-2025-tech]
- **Community events.** Gleam Gathering, the first dedicated conference, was held in 2026, and a 2027 London edition has been announced.[^gleam-news]

# What failed or stalled
- **Production adoption is small.** 52 of 841 survey respondents used it in production, and its usage share is about 1%.[^gleam-survey-2024][^so-2025-tech]
- **Funding fragility.** At v1.0 the creator said he earned less than half a median London lead-developer salary, and Fly.io was then about half of all funding.[^gleam-v1] By 2026 the money came from individual sponsors plus Lambda, Atuin, NineFX and n8n, with four core members listed for sponsorship.[^gleam-sponsor] Bus-factor risk is real.
- **OTP integration gap.** Raw OTP is untyped. Typed actor libraries are still maturing, and users asked for better OTP support in the 2024 survey.[^gleam-survey-2024]

# By era
## E1
Gleam was pre-1.0 and Erlang-only, an experiment by Louis Pilfold. It had very little visibility.
## E2
The JavaScript target and the language server landed. The community grew on Discord (dates unverified).
## E3
v1.0 (March 2024).[^gleam-v1] Lambda began sponsoring.[^gleam-lambda]
## E4
v1.6–v1.18 shipped, along with the SO 2025 admiration result, a public roadmap and the first conference.[^gleam-news][^so-2025-tech]

# Lessons
- In the LLM era, a new language can still break through on sentiment if tooling is excellent from day one and it rides an existing runtime and package registry. Turning that sentiment into production use is the unsolved part.
- Positioning as a "typed Elixir alternative" worked because Elixir's own types were still years away. Elixir 1.20's gradual typing may narrow that gap.

# Related
- [Elixir](/languages/elixir.md), [Erlang](/languages/erlang.md), [BEAM](/runtimes/beam.md)
- [Rust](/languages/rust.md) (implementation language, and the only language more admired in 2025)
- [Event: Gleam 1.0](/events/2024-03-gleam-1-0.md)
- [LLM impact on language adoption](/ideas/ai-and-languages/llm-impact-on-language-adoption.md)

[^gleam-v1]: gleam.run: Gleam version 1 — https://gleam.run/news/gleam-version-1/
[^gleam-news]: gleam.run: News — https://gleam.run/news/
[^gleam-survey-2024]: gleam.run: Developer Survey 2024 Results — https://gleam.run/news/developer-survey-2024-results/
[^gleam-sponsor]: gleam.run: Sponsor — https://gleam.run/sponsor/
[^gleam-lambda]: gleam.run: Welcome Lambda! — https://gleam.run/news/welcome-lambda/
[^gleam-js-30]: gleam.run: Gleam JavaScript gets 30% faster — https://gleam.run/news/gleam-javascript-gets-30-percent-faster/
[^gleam-lsp-118]: gleam.run: A field day for Gleam's language server — https://gleam.run/news/a-field-day-for-gleams-language-server/
[^so-2025-tech]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^infoworld-gleam-v1]: InfoWorld: Gleam language available in first stable release — https://www.infoworld.com/article/2336354/gleam-language-available-in-first-stable-release.html
