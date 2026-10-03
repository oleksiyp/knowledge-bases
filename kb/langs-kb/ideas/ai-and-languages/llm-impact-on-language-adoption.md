---
type: Idea
title: LLM impact on language adoption (training-data incumbency)
description: "The hypothesis that AI coding assistants reshape which languages people adopt. They favour languages with large training corpora (Python, TypeScript, Java), reward static types that let agents check their own work, and raise the barrier for new languages. 2022–2026 verdict: largely confirmed. TypeScript became #1 on GitHub in 2025, top-20 rankings froze, and new languages had to court the models as well as humans."
area: ai-and-languages
tags: [llm, ai-assistants, adoption, typescript, python, rankings, low-resource-languages, stack-overflow, copilot]
outcome: succeeding
maturity_2026: mainstream
origin_year: 2021
mainstream_year: 2024
languages: [languages/typescript, languages/python, languages/javascript, languages/rust, languages/zig, languages/gleam, languages/julia, languages/mojo]
runtimes: []
related_ideas: [ideas/ai-and-languages/languages-designed-for-llms, ideas/ai-and-languages/natural-language-programming-and-vibe-coding, ideas/types/typescript-structural-typing-wins, ideas/types/gradual-typing-for-dynamic-languages]
era_momentum: { E1: n/a, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: octoverse-2025
    resource: https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
    title: "GitHub Octoverse 2025: A new developer joins GitHub every second as AI leads TypeScript to #1"
    author: org:github
  - id: tiobe-jansen
    resource: https://www.infoworld.com/article/4033860/python-popularity-boosted-by-ai-coding-assistants-tiobe.html
    title: "InfoWorld: Python popularity boosted by AI coding assistants — Tiobe"
  - id: tiobe-rust-2026
    resource: https://www.infoworld.com/article/4193406/rust-language-rises-to-top-10-in-tiobe-popularity-index.html
    title: "InfoWorld: Rust language rises to top 10 in Tiobe popularity index (2026)"
  - id: lowres
    resource: https://arxiv.org/html/2501.19085
    title: "arXiv: Enhancing Code Generation for Low-Resource Languages — No Silver Bullet (2025)"
  - id: lowres-survey
    resource: https://arxiv.org/html/2410.03981v3
    title: "arXiv: A Survey on LLM-based Code Generation for Low-Resource and Domain-Specific Programming Languages"
  - id: redmonk-2025
    resource: https://redmonk.com/sogrady/2025/06/18/language-rankings-1-25/
    title: "RedMonk: The RedMonk Programming Language Rankings, January 2025"
  - id: redmonk-so
    resource: https://redmonk.com/rstephens/2025/06/18/stackoverflow/
    title: "RedMonk: Stack Overflow and the Programming Language Rankings"
  - id: so-decline
    resource: https://blog.pragmaticengineer.com/stack-overflow-is-almost-dead/
    title: "The Pragmatic Engineer: Stack Overflow is almost dead"
  - id: devclass-so
    resource: https://www.devclass.com/ai-ml/2026/01/05/dramatic-drop-in-stack-overflow-questions-as-devs-look-elsewhere-for-help/4079575
    title: "DevClass: Dramatic drop in Stack Overflow questions as devs look elsewhere for help (2026-01-05)"
  - id: so-survey-2025
    resource: https://survey.stackoverflow.co/2025/
    title: "Stack Overflow Developer Survey 2025"
  - id: zig-noai
    resource: https://developers.slashdot.org/story/26/05/31/013213/zig-bans-ai-code-contributions-because-theyre-invariably-garbage
    title: "Slashdot: Zig bans AI code contributions because they're 'invariably garbage'"
---

# Summary

**Largely confirmed by 2026.** Three effects became measurable:

1. **Incumbents gained.** TIOBE's CEO credited AI assistants with lifting Python to record
   shares. He asked why anyone would learn "a new obscure language for which no AI assistance is
   available", and cited Stanford work finding assistants are about 20% more effective on
   popular languages.[^tiobe-jansen] RedMonk's 2025 ranking showed "by far the least movement
   within the top 20" in its history.[^redmonk-2025][^redmonk-so]
2. **Typed languages gained most.** **TypeScript overtook Python and JavaScript as GitHub's most-used
   language in August 2025**. It added over 1M contributors (+66% year over year), and GitHub
   attributed this to agents working better with type checking.[^octoverse-2025]
3. **The feedback loop broke.** Stack Overflow questions fell to 2009 levels (−78% year over
   year by December 2025), which removed a public source of training data and of ranking
   signal.[^so-decline][^devclass-so]

Research confirmed that LLMs perform much worse on low-resource languages (Julia, R, Racket, Lua)
than on Python and Java.[^lowres][^lowres-survey] Counter-signals exist: Rust kept rising (TIOBE
top 10 in July 2026)[^tiobe-rust-2026], and some communities rejected AI outright (Zig's 2026
ban).[^zig-noai]

# The idea

Language adoption used to depend on ecosystem, performance, employers and tutorials. With
assistants writing a large share of code, a new variable appears: **how well models know the
language**. That depends on how much public code exists (incumbency), how stable the language
has been (models are trained on old versions), and whether a compiler or type checker gives the
agent quick feedback to repair its own mistakes.

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2021-06 | GitHub Copilot technical preview, strongest in Python/JS/TS | + |
| E3 | 2022-11 | ChatGPT launches; Stack Overflow question volume starts to collapse[^so-decline] | + |
| E3 | 2024–2025 | Studies quantify the low-resource language gap (e.g. 20–39% gaps for R, Racket)[^lowres] | + |
| E4 | 2025 | TIOBE attributes Python's record share to AI assistants[^tiobe-jansen] | + |
| E4 | 2025-06 | RedMonk records least top-20 movement ever; considers dropping Stack Overflow data[^redmonk-so] | + |
| E4 | 2025-08 | TypeScript becomes #1 on GitHub (Octoverse 2025, published 2025-10)[^octoverse-2025] | + |
| E4 | 2025-12 | Stack Overflow questions down 78% year over year[^devclass-so] | + |
| E4 | 2026-07 | Rust enters TIOBE top 10 despite the incumbency effect[^tiobe-rust-2026] | mixed |

# Where it succeeded (the effect is real)

- **TypeScript and Python** were the clear winners. Python dominates AI and data work, and
  TypeScript became the default for agent-built web apps.[^octoverse-2025]
- **Static typing gained a new argument.** Types are now a reliability tool for agents as well as
  for humans, which strengthened the case for TypeScript, typed Python and Rust. See
  [gradual typing](/ideas/types/gradual-typing-for-dynamic-languages.md).
- **Consolidation.** Survey and ranking data show a frozen top 20 during 2024–2026.[^redmonk-2025]

# Where it failed or stalled (limits of the hypothesis)

- **Rust rose anyway.** Memory-safety policy and strong compiler diagnostics (which help agents
  fix their own code) outweighed its smaller corpus.[^tiobe-rust-2026]
- **New languages were not shut out entirely.** Mojo reached 1.0 in 2026 and small languages
  such as Gleam kept growing communities. But none of the post-2015 languages (Zig, Gleam, Mojo,
  Carbon) broke into the major top-20 rankings during 2022–2026 (unverified across all indices).
- **The measurements broke.** With Stack Overflow fading and AI generating much of GitHub's code,
  usage rankings became harder to interpret.[^redmonk-so]

# Why

1. **Training data is a moat, much as libraries were.** A model's skill in a language grows with
   the public code it saw, and Python, JS/TS and Java dominate that corpus.[^lowres]
2. **Agents need fast feedback.** Type checkers and compilers turn guessing into a repair loop, so
   languages with strong static checks get more reliable results from the same model.[^octoverse-2025]
3. **Fewer humans write the code.** When developers delegate, they stop choosing languages for
   ergonomics and pick whatever the agent handles best.
4. **The reaction is cultural as much as technical.** Some projects (Zig) concluded that
   AI-generated contributions cost more review time than they save.[^zig-noai]

# Lessons

- A new language now needs a plan for being learned by models: stable syntax, an abundance of
  examples, machine-readable docs, and excellent compiler errors.
- Type systems gained a second audience. Designs that help agents (precise errors, checkable
  contracts) will shape the next decade of language design.

# Related

- [Languages designed for LLMs](/ideas/ai-and-languages/languages-designed-for-llms.md)
- [Natural-language programming and vibe coding](/ideas/ai-and-languages/natural-language-programming-and-vibe-coding.md)
- [Why TypeScript's structural typing won](/ideas/types/typescript-structural-typing-wins.md)
- [Octoverse 2025: TypeScript #1](/events/2025-10-octoverse-typescript-number-one.md)
- [TypeScript](/languages/typescript.md), [Python](/languages/python.md), [Rust](/languages/rust.md)

[^octoverse-2025]: GitHub Octoverse 2025 — https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
[^tiobe-jansen]: InfoWorld, Python boosted by AI assistants — https://www.infoworld.com/article/4033860/python-popularity-boosted-by-ai-coding-assistants-tiobe.html
[^tiobe-rust-2026]: InfoWorld, Rust enters TIOBE top 10 — https://www.infoworld.com/article/4193406/rust-language-rises-to-top-10-in-tiobe-popularity-index.html
[^lowres]: Enhancing Code Generation for Low-Resource Languages — https://arxiv.org/html/2501.19085
[^lowres-survey]: Survey on LLM code generation for low-resource languages — https://arxiv.org/html/2410.03981v3
[^redmonk-2025]: RedMonk rankings January 2025 — https://redmonk.com/sogrady/2025/06/18/language-rankings-1-25/
[^redmonk-so]: RedMonk, Stack Overflow and the rankings — https://redmonk.com/rstephens/2025/06/18/stackoverflow/
[^so-decline]: Stack Overflow is almost dead — https://blog.pragmaticengineer.com/stack-overflow-is-almost-dead/
[^devclass-so]: DevClass on Stack Overflow drop — https://www.devclass.com/ai-ml/2026/01/05/dramatic-drop-in-stack-overflow-questions-as-devs-look-elsewhere-for-help/4079575
[^so-survey-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/
[^zig-noai]: Slashdot on Zig AI ban — https://developers.slashdot.org/story/26/05/31/013213/zig-bans-ai-code-contributions-because-theyre-invariably-garbage
