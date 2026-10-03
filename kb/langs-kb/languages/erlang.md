---
type: Language
title: Erlang
description: The original BEAM language. Over 2018–2026 it was stable and steadily modernised (JIT, better errors, json, Markdown docs, native records) and remained critical at WhatsApp, Cisco and Ericsson. Its mindshare shifted to Elixir and Gleam, and its static-typing story stayed fragmented (Dialyzer, eqWAlizer, etylizer).
tags: [erlang, beam, otp, functional, actor-model, telecom, fault-tolerance]
paradigms: [functional, concurrent, actor]
typing: dynamic
memory_model: gc
first_released: 1986
steward: Ericsson OTP team; Erlang Ecosystem Foundation
governance: single-vendor
trajectory: stable
ideas: [ideas/concurrency/actor-model, ideas/types/set-theoretic-types, ideas/tooling-and-ecosystem/hot-reload-and-live-programming]
runtimes: [runtimes/beam]
adoption_signals:
  so_survey_usage_pct: { value: 1.5, as_of: 2025 }
  github_stars_erlang_otp: { value: 12349, as_of: 2026-10-03 }
era_momentum: { E1: flat, E2: up, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: otp24-highlights
    resource: https://www.erlang.org/blog/my-otp-24-highlights/
    title: "Erlang/OTP blog: My OTP 24 highlights"
    author: org:ericsson
  - id: otp27-highlights
    resource: https://www.erlang.org/blog/highlights-otp-27/
    title: "Erlang/OTP blog: Erlang/OTP 27 Highlights"
    author: org:ericsson
  - id: otp28-highlights
    resource: https://www.erlang.org/blog/highlights-otp-28/
    title: "Erlang/OTP blog: Erlang/OTP 28 Highlights"
    author: org:ericsson
  - id: otp29-highlights
    resource: https://www.erlang.org/blog/highlights-otp-29/
    title: "Erlang/OTP blog: Erlang/OTP 29 Highlights"
    author: org:ericsson
  - id: native-records
    resource: https://www.erlang.org/doc/system/ref_man_native_records.html
    title: "Erlang System Documentation: Native Records"
    author: org:ericsson
  - id: erlang-news
    resource: https://www.erlang.org/news
    title: "Erlang/OTP: News"
    author: org:ericsson
  - id: eqwalizer
    resource: https://github.com/WhatsApp/eqwalizer
    title: "WhatsApp/eqwalizer: A type-checker for Erlang (archived 2026-06-26, moved into ELP)"
    author: org:meta
  - id: etylizer
    resource: https://github.com/etylizer/etylizer
    title: "etylizer: Static typechecker for Erlang based on set-theoretic types"
  - id: cve-2025-32433
    resource: https://www.tenable.com/blog/cve-2025-32433-erlangotp-ssh-unauthenticated-remote-code-execution-vulnerability
    title: "Tenable: CVE-2025-32433 Erlang/OTP SSH Unauthenticated Remote Code Execution Vulnerability"
  - id: so-2025-tech
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
  - id: so-2024-tech
    resource: https://survey.stackoverflow.co/2024/technology
    title: "Stack Overflow Developer Survey 2024: Technology"
  - id: erlef
    resource: https://codesync.global/media/introducing-erlang-ecosystem-foundation/
    title: "Code Sync: Introducing the Erlang Ecosystem Foundation"
---

# Summary
Erlang is a **stable incumbent**. It is not growing, but it remains essential where it is used. Over 2018–2026 the OTP team modernised it on a strict yearly cadence: the BeamAsm JIT and readable error messages in OTP 24, Markdown docs, `json` and triple-quoted strings in OTP 27, priority messages in OTP 28, and experimental native records in OTP 29.[^otp24-highlights][^otp27-highlights][^otp28-highlights][^otp29-highlights] It runs WhatsApp's backend and Cisco/Ericsson network gear. Its share of new developers is small: Stack Overflow usage was 0.9% in 2024 and 1.5% in 2025.[^so-2024-tech][^so-2025-tech] Most newcomers reach the BEAM through Elixir or Gleam.

The language never settled on one answer to static typing. Dialyzer's success typing remains the default. WhatsApp built eqWAlizer, which it open-sourced in 2022 and folded into the Erlang Language Platform in 2026.[^eqwalizer] Academic set-theoretic checkers such as etylizer still lack map support.[^etylizer] The 2025 SSH CVE showed how much critical infrastructure depends on code from a small team.[^cve-2025-32433]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-03 | Erlang Ecosystem Foundation launched [^erlef] | + |
| E2 | 2021-05-12 | OTP 24: BeamAsm JIT, EEP-54 error messages, process aliases [^otp24-highlights] | + |
| E2 | 2022-08 | WhatsApp open-sources the eqWAlizer type checker [^eqwalizer] | + |
| E3 | 2024-05-15 | OTP 27: `-doc` Markdown docs, `json`, triple-quoted strings, sigils [^otp27-highlights][^erlang-news] | + |
| E4 | 2025-04-16 | CVE-2025-32433 SSH pre-auth RCE, CVSS 10 [^cve-2025-32433] | − |
| E4 | 2025-05-21 | OTP 28: priority messages, zip generators [^otp28-highlights] | + |
| E4 | 2026-05-13 | OTP 29: experimental native records, unsafe-function warnings [^otp29-highlights][^native-records] | + |
| E4 | 2026-06-26 | eqWAlizer repo archived and merged into ELP [^eqwalizer] | mixed |

# Ideas it bet on
| Idea | Outcome for Erlang |
|---|---|
| [Actor model](/ideas/concurrency/actor-model.md) / OTP supervision | Succeeded. It is the canonical, battle-tested implementation. |
| Success typing (Dialyzer) instead of a sound static type system | Mixed. It is low-friction but weak, and big users built their own checkers.[^eqwalizer] |
| [Set-theoretic types](/ideas/types/set-theoretic-types.md) for Erlang | Unproven. Research tools exist (etylizer) but nothing ships in OTP.[^etylizer] |
| Hot code loading | Mixed. It is still valued in telecom but rarely used in cloud deployments. |

# What succeeded
- **Steady modernisation without breakage.** Each OTP release removed old pain points: cryptic `badarg` errors (OTP 24), XML documentation (OTP 27), the lack of a JSON library (OTP 27), and tuple-based records, which native records in OTP 29 replace with a real runtime type.[^otp24-highlights][^otp27-highlights][^native-records]
- **Industrial tooling from WhatsApp.** eqWAlizer and ELP gave large Erlang codebases a Flow/Hack-style checker and a modern language server.[^eqwalizer]
- **Shared ecosystem with Elixir.** OTP 27 adopted ExDoc, and Erlang's new `json` module came from the author of Elixir's Jason library, so the BEAM languages now share tooling.[^otp27-highlights]

# What failed or stalled
- **Mindshare.** Erlang's syntax and tooling kept pushing newcomers to Elixir, and its own usage share stayed at 1–1.5%.[^so-2025-tech]
- **Static types.** No checker became standard. Dialyzer, Gradualizer, eqWAlizer and etylizer coexist, and native records in OTP 29 are still experimental.[^eqwalizer][^etylizer][^native-records]
- **Security of the bundled SSH stack.** The CVSS 10 pre-auth RCE was exploited in the wild, and its fallout reached Cisco products.[^cve-2025-32433]

# By era
## E1
OTP 22 and 23 shipped. The Erlang Ecosystem Foundation was created to fund tooling and working groups.[^erlef]
## E2
OTP 24 brought the JIT and better errors.[^otp24-highlights] WhatsApp released eqWAlizer.[^eqwalizer]
## E3
OTP 26 and 27 modernised docs and literals and added `json`.[^otp27-highlights]
## E4
CVE-2025-32433 was the low point.[^cve-2025-32433] OTP 28 added priority messages, and OTP 29 added native records and a secure-coding push.[^otp28-highlights][^otp29-highlights]

# Lessons
- A language with a single corporate steward and a yearly release train can stay healthy for decades if the steward keeps modernising conservatively.
- When typing arrives late, every large user tends to build its own checker. Fragmentation follows unless the core team picks one.

# Related
- [BEAM](/runtimes/beam.md), [Elixir](/languages/elixir.md), [Gleam](/languages/gleam.md)
- [Actor model](/ideas/concurrency/actor-model.md), [Set-theoretic types](/ideas/types/set-theoretic-types.md)
- [Gradual typing for dynamic languages](/ideas/types/gradual-typing-for-dynamic-languages.md)

[^otp24-highlights]: Erlang/OTP blog: My OTP 24 highlights — https://www.erlang.org/blog/my-otp-24-highlights/
[^otp27-highlights]: Erlang/OTP 27 Highlights — https://www.erlang.org/blog/highlights-otp-27/
[^otp28-highlights]: Erlang/OTP 28 Highlights — https://www.erlang.org/blog/highlights-otp-28/
[^otp29-highlights]: Erlang/OTP 29 Highlights — https://www.erlang.org/blog/highlights-otp-29/
[^native-records]: Erlang System Documentation: Native Records — https://www.erlang.org/doc/system/ref_man_native_records.html
[^erlang-news]: Erlang/OTP News — https://www.erlang.org/news
[^eqwalizer]: WhatsApp/eqwalizer — https://github.com/WhatsApp/eqwalizer
[^etylizer]: etylizer — https://github.com/etylizer/etylizer
[^cve-2025-32433]: Tenable: CVE-2025-32433 — https://www.tenable.com/blog/cve-2025-32433-erlangotp-ssh-unauthenticated-remote-code-execution-vulnerability
[^so-2025-tech]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^so-2024-tech]: Stack Overflow Developer Survey 2024 — https://survey.stackoverflow.co/2024/technology
[^erlef]: Code Sync: Introducing the Erlang Ecosystem Foundation — https://codesync.global/media/introducing-erlang-ecosystem-foundation/
