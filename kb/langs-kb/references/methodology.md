---
type: Reference
title: Methodology and conventions
description: How this knowledge base on programming-language and runtime ideas (Oct 2018 – Oct 2026) was researched, structured and scored, and how to read its verdicts.
tags: [methodology, meta]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: okf-spec
    resource: https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
    title: Open Knowledge Format (OKF) v0.2 specification
    author: org:google-cloud
---

# Scope

The bundle covers what happened to programming languages and runtimes between 2018-10-03 and
2026-10-03, and which ideas succeeded or failed. Failures get the same weight as successes:
withdrawn proposals, stalled projects, abandoned runtimes and hype that did not pay off.
It conforms to OKF v0.2.[^okf-spec]

# Eras

| Label | Range |
|---|---|
| E1 | 2018-10-03 → 2020-10-03 |
| E2 | 2020-10-03 → 2022-10-03 |
| E3 | 2022-10-03 → 2024-10-03 |
| E4 | 2024-10-03 → 2026-10-03 |

`era_momentum` on ideas, languages and runtimes records `up`, `flat`, `down` or `n/a` per era.

# Concept types

| Type | Location | Purpose |
|---|---|---|
| Idea | `/ideas/<area>/*.md` | The core unit: one language or runtime idea, its outcome and *why* |
| Language | `/languages/*.md` | One language: the ideas it bet on and how they turned out |
| Runtime | `/runtimes/*.md` | VMs, JS and Wasm runtimes, JITs, compiler backends |
| Event | `/events/YYYY-MM-*.md` | Dated evidence: releases, proposal decisions, shutdowns, policy |
| Area Review | `/areas/*.md` | Scorecard for one idea area |
| Theme | `/themes/*.md` | Cross-cutting pattern with evidence |
| Era Review | `/eras/*.md` | What happened in one era |
| Lesson | `/lessons/*.md` | A reusable explanation of why ideas win or lose |

The idea areas are memory safety, types, concurrency, runtime performance, platforms and
portability, metaprogramming, tooling and ecosystem, and AI and languages.

# Verdict scales

These are producer-defined frontmatter extensions:

- `outcome` (ideas): succeeded · succeeding · mixed · unproven · stalled · failed · abandoned.
- `maturity_2026` (ideas): mainstream · adopted · niche · experimental · gone.
- `trajectory` (languages, runtimes): rising · growing · stable · niche · stalled · declining · dead.

The verdicts are the research agents' judgements from the cited evidence: surveys (Stack
Overflow, JetBrains, State of JS, GitHub Octoverse), rankings (TIOBE, RedMonk), proposal status
(PEPs, JEPs, RFCs, TC39, WG21), release notes, and team or company changes. They are not
measurements.

# Research process

Six research agents ran in parallel, each owning a disjoint slice:

1. Systems languages and memory safety.
2. Managed and app languages and their VMs.
3. Dynamic languages and their runtimes.
4. JavaScript, the web and WebAssembly.
5. Functional, research and emerging languages.
6. Compiler infrastructure, tooling, accelerators and AI.

Agents used web search and preferred primary sources. Every non-trivial claim carries a footnote
keyed to `sources[].id`. All concepts are agent-generated and unverified (no `verified` key)
until a reviewer checks them.

Conformance is checked with `python3 references/validate_okf.py .`. Index files are regenerated
with `python3 references/build_indexes.py .`.

# Limitations

- The bundle is being published in stages. Synthesis concepts (area reviews, themes, era
  reviews, lessons) and a verification pass are still to come, and some links point to concepts
  that are not written yet.
- Coverage leans toward languages with English-language documentation and press.
- Survey figures depend on each survey's audience and methodology. Read them as signals, not
  market share.

[^okf-spec]: Open Knowledge Format (OKF) v0.2 specification — https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
