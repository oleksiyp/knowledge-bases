---
type: Idea
title: AI-assisted code migration (version upgrades, COBOL→Java, C→Rust, whole-codebase ports)
description: "Using LLMs and agents, combined with static analysis and test loops, to perform large mechanical migrations that teams used to postpone for years. 2023–2026 verdict: succeeding for bounded, testable migrations (Java upgrades at Amazon, Google's int32→int64, Airbnb tests, Bun's Zig→Rust port). Still unproven for semantic legacy rewrites (COBOL mainframes, safety-critical C→Rust), where specs and tests are missing."
area: ai-and-languages
tags: [llm, migration, cobol, java, c-to-rust, mainframe, amazon-q, aws-transform, darpa-tractor, agents]
outcome: succeeding
maturity_2026: adopted
origin_year: 2023
mainstream_year: 2024
languages: [languages/java, languages/cobol-fortran-legacy, languages/c, languages/cpp, languages/rust, languages/zig, languages/typescript]
runtimes: []
related_ideas: [ideas/memory-safety/c-to-rust-translation, ideas/tooling-and-ecosystem/native-rewrites-of-tooling, ideas/ai-and-languages/llm-impact-on-language-adoption, ideas/ai-and-languages/ai-and-formal-verification]
era_momentum: { E1: n/a, E2: n/a, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: jassy
    resource: https://simonwillison.net/2024/Aug/24/andy-jassy-amazon-ceo/
    title: "Simon Willison: A quote from Andy Jassy (Amazon Q saved 4,500 developer-years)"
  - id: reg-q
    resource: https://www.theregister.com/2024/09/05/amazon_q_developer_gartner/
    title: "The Register: Amazon congratulates itself for AI code that mostly works"
  - id: google-mig
    resource: https://arxiv.org/pdf/2504.09691
    title: "arXiv: Migrating Code At Scale With LLMs At Google (FSE 2025)"
  - id: airbnb
    resource: https://www.infoq.com/news/2025/03/airbnb-llm-test-migration/
    title: "InfoQ: Airbnb migrates 3,500 test files with LLMs"
  - id: aws-transform
    resource: https://aws.amazon.com/about-aws/whats-new/2025/05/aws-transform-mainframe-generally-available
    title: "AWS: AWS Transform for mainframe is now generally available (2025-05)"
  - id: itpro-cobol
    resource: https://www.itpro.com/software/development/you-need-those-experts-to-even-define-what-these-transformations-are-cobol-developers-will-always-be-needed-even-as-ai-takes-the-lead-on-modernization-projects
    title: "ITPro: COBOL developers will always be needed, even as AI takes the lead on modernization"
  - id: ibm-wca-z
    resource: https://www.ibm.com/new/announcements/ibm-watsonx-code-assistant-for-z-accelerate-the-application-lifecycle-with-generative-ai-and-automation
    title: "IBM: watsonx Code Assistant for Z"
  - id: darpa-tractor
    resource: https://www.darpa.mil/news-events/2024-07-31a
    title: "DARPA: Eliminating Memory Safety Vulnerabilities Once and For All (TRACTOR)"
  - id: doge-ssa
    resource: https://gizmodo.com/doge-plans-to-rewrite-entire-social-security-codebase-in-just-a-few-months-report-2000582062
    title: "Gizmodo: DOGE plans to rewrite entire Social Security codebase in just 'a few months'"
  - id: bun-rust
    resource: https://lilting.ch/en/articles/bun-zig-rust-ai-port
    title: "Bun PR #30412 merged: 1M-line Zig-to-Rust rewrite hits main"
  - id: msft-rust-2030
    resource: https://thenewstack.io/microsofts-bold-goal-replace-1b-lines-of-c-c-with-rust/
    title: "The New Stack: Microsoft's bold goal — replace 1B lines of C/C++ with Rust"
  - id: xda-msft
    resource: https://www.xda-developers.com/no-microsoft-isnt-actually-eliminating-c-and-c-from-its-software-rust/
    title: "XDA: No, Microsoft isn't actually eliminating C and C++ from its software"
---

# Summary

**Succeeding for bounded migrations, unproven for legacy rewrites.** The first broadly reported
success was Amazon's. In August 2024 Andy Jassy said Amazon Q's code transformation upgraded
tens of thousands of production apps from Java 8/11 to Java 17. He put the savings at an
estimated **4,500 developer-years and about $260M a year**, with an upgrade dropping from about
50 developer-days to hours.[^jassy] Google reported LLM-driven migrations (for example int32→int64
IDs) in which about 74% of changes were model-generated, with an estimated 50% time saving.[^google-mig]
Airbnb migrated 3,500 test files in 6 weeks instead of an estimated 18 months.[^airbnb] In May
2026 Bun merged an AI-produced port of about 1M lines from Zig to Rust, written in days.[^bun-rust]

The legacy cases were weaker. AWS Transform for mainframe went GA in May 2025 and IBM sells
watsonx Code Assistant for Z.[^aws-transform][^ibm-wca-z] Practitioners still say COBOL experts
are needed "to even define what these transformations are".[^itpro-cobol] DOGE's 2025 plan to
rewrite the Social Security Administration's COBOL in months drew wide scepticism, and no
completion has been reported.[^doge-ssa] Microsoft's "every line of C/C++ to Rust by 2030" turned
out to be a research ambition rather than a product plan.[^msft-rust-2030][^xda-msft]

# The idea

Large migrations are mostly repetitive local edits that are hard to fully automate with rules
(codemods). They need judgement at each site, but each change can be checked by compilers and
tests. The 2023–2026 recipe combines: static analysis to find sites → an LLM to propose edits →
build, test and lint loops with retries → human review. Prompting matters less than the retry
loop. Airbnb found that retrying until tests pass beat prompt engineering.[^airbnb]

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E3 | 2023-08/10 | IBM watsonx Code Assistant for Z (COBOL→Java) announced; GA later 2023[^ibm-wca-z] | + |
| E3 | 2024-07/08 | DARPA TRACTOR program to automate C→Rust translation[^darpa-tractor] | + |
| E3 | 2024-08 | Jassy: Amazon Q saved 4,500 developer-years on Java upgrades[^jassy] | + |
| E4 | 2025-03 | Airbnb: 3,500 test files migrated in 6 weeks[^airbnb] | + |
| E4 | 2025-03 | DOGE reportedly plans SSA COBOL rewrite "in months"[^doge-ssa] | − |
| E4 | 2025-04 | Google publishes "Migrating Code At Scale With LLMs" (FSE 2025)[^google-mig] | + |
| E4 | 2025-05 | AWS Transform for mainframe GA[^aws-transform] | + |
| E4 | 2025-12 | Microsoft engineer's "C/C++→Rust by 2030" post, later clarified as research[^msft-rust-2030][^xda-msft] | mixed |
| E4 | 2026-05-14 | Bun merges AI-generated Zig→Rust port (about 1M lines; about 13k `unsafe` blocks)[^bun-rust] | mixed |

# Where it succeeded

- **Version upgrades with strong oracles.** Java 8→17, framework bumps and type migrations come with
  compilers and test suites that verify each edit.[^jassy][^google-mig]
- **Test-framework swaps.** The tests are both the subject of the migration and its oracle.[^airbnb]
- **Language ports with complete test suites.** Bun reported a 99.8% test pass rate for its port.[^bun-rust]

# Where it failed or stalled

- **Legacy business logic.** COBOL systems often lack tests and specs, and the behaviour *is* the
  spec. Tools give analysis and partial translation, and humans still own correctness.[^itpro-cobol]
- **Idiomatic quality.** Mechanical ports keep the old design. Bun's Rust has about 13k `unsafe`
  blocks, compared with dozens in comparable hand-written Rust, so the safety benefit is delayed.[^bun-rust]
- **Hype over plans.** The DOGE SSA rewrite and the "all C++ by 2030" post show that announcements
  ran ahead of evidence.[^doge-ssa][^xda-msft]
- **Measurement.** Most success figures are self-reported by vendors, and critics noted that Amazon's
  claims came from Amazon itself.[^reg-q]

# Why

1. **Verification decides whether it works.** Migrations succeed in proportion to the strength of
   the automatic oracle (compiler, types, tests). That is also why
   [AI and formal verification](/ideas/ai-and-languages/ai-and-formal-verification.md) became popular.
2. **Economics changed.** Work that cost thousands of developer-years became compute spend.
   Organisations that had deferred upgrades for a decade could suddenly afford them.[^jassy]
3. **Old code lacks specs, not translators.** The hard part of COBOL modernisation was never
   syntax. It is undocumented behaviour, data formats and operational coupling.[^itpro-cobol]

# Lessons

- Build the oracle (tests, types, differential testing) before running the model.
- Expect AI ports to need a second pass for idiomatic quality. Translation and modernisation are
  separate steps.

# Related

- [C-to-Rust translation](/ideas/memory-safety/c-to-rust-translation.md)
- [Native rewrites of tooling](/ideas/tooling-and-ecosystem/native-rewrites-of-tooling.md)
- [COBOL, Fortran and legacy languages](/languages/cobol-fortran-legacy.md)
- [Amazon Q: 4,500 developer-years](/events/2024-08-amazon-q-java-upgrade-4500-years.md), [AWS Transform for mainframe GA](/events/2025-05-aws-transform-mainframe-ga.md)

[^jassy]: Simon Willison quoting Andy Jassy — https://simonwillison.net/2024/Aug/24/andy-jassy-amazon-ceo/
[^reg-q]: The Register on Amazon Q — https://www.theregister.com/2024/09/05/amazon_q_developer_gartner/
[^google-mig]: Migrating Code At Scale With LLMs At Google — https://arxiv.org/pdf/2504.09691
[^airbnb]: InfoQ on Airbnb migration — https://www.infoq.com/news/2025/03/airbnb-llm-test-migration/
[^aws-transform]: AWS Transform for mainframe GA — https://aws.amazon.com/about-aws/whats-new/2025/05/aws-transform-mainframe-generally-available
[^itpro-cobol]: ITPro on COBOL modernisation — https://www.itpro.com/software/development/you-need-those-experts-to-even-define-what-these-transformations-are-cobol-developers-will-always-be-needed-even-as-ai-takes-the-lead-on-modernization-projects
[^ibm-wca-z]: IBM watsonx Code Assistant for Z — https://www.ibm.com/new/announcements/ibm-watsonx-code-assistant-for-z-accelerate-the-application-lifecycle-with-generative-ai-and-automation
[^darpa-tractor]: DARPA TRACTOR — https://www.darpa.mil/news-events/2024-07-31a
[^doge-ssa]: Gizmodo on DOGE SSA rewrite — https://gizmodo.com/doge-plans-to-rewrite-entire-social-security-codebase-in-just-a-few-months-report-2000582062
[^bun-rust]: Bun Zig-to-Rust port — https://lilting.ch/en/articles/bun-zig-rust-ai-port
[^msft-rust-2030]: The New Stack on Microsoft Rust goal — https://thenewstack.io/microsofts-bold-goal-replace-1b-lines-of-c-c-with-rust/
[^xda-msft]: XDA clarification — https://www.xda-developers.com/no-microsoft-isnt-actually-eliminating-c-and-c-from-its-software-rust/
