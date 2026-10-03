---
type: Idea
title: Native rewrites of developer tooling (Rust/Go/Zig replacing JS and Python tools)
description: "Rewrite a language's own tooling (bundler, linter, formatter, package manager, type checker) in a compiled language for 10–100x speed. 2018–2026 verdict: the most reliable adoption lever in tooling. esbuild, swc, Ruff, uv, Rolldown/Vite 8 and the Go port of TypeScript all won, while VC-funded 'one tool to replace everything' attempts such as Rome collapsed."
area: tooling-and-ecosystem
tags: [rust, go, zig, tooling, performance, bundlers, linters, package-managers, ai-rewrites]
outcome: succeeded
maturity_2026: mainstream
origin_year: 2020
mainstream_year: 2024
languages: [languages/rust, languages/go, languages/zig, languages/typescript, languages/javascript, languages/python]
runtimes: [runtimes/bun, runtimes/nodejs]
related_ideas: [ideas/tooling-and-ecosystem/integrated-toolchains, ideas/tooling-and-ecosystem/packaging-revolution-python, ideas/ai-and-languages/ai-assisted-code-migration, ideas/platforms-and-portability/js-runtime-competition]
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: esbuild-faq
    resource: https://esbuild.github.io/faq/
    title: "esbuild: FAQ — Why is esbuild fast?"
  - id: rome-fall
    resource: https://bytes.dev/archives/219
    title: "Bytes #219: Rome has fallen"
  - id: biome-announce
    resource: https://biomejs.dev/blog/announcing-biome/
    title: "Biome blog: Announcing Biome"
  - id: ts-native
    resource: https://devblogs.microsoft.com/typescript/typescript-native-port/
    title: "TypeScript blog: A 10x Faster TypeScript"
    author: org:microsoft
  - id: vite8
    resource: https://vite.dev/blog/announcing-vite8
    title: "Vite blog: Vite 8.0 is out!"
  - id: reg-vite8
    resource: https://www.theregister.com/2026/03/16/vite_8_rolldown/
    title: "The Register: Vite team claims 10-30x faster builds with Rolldown"
  - id: openai-astral
    resource: https://www.theregister.com/2026/03/19/openai_aims_for_the_stars/
    title: "The Register: OpenAI tries to build its coding cred by acquiring Astral"
  - id: jb-astral
    resource: https://blog.jetbrains.com/pycharm/2026/03/openai-acquires-astral-what-it-means-for-pycharm-users/
    title: "JetBrains blog: OpenAI acquires Astral — what it means for PyCharm users"
  - id: bun-anthropic
    resource: https://bun.com/blog/bun-joins-anthropic
    title: "Bun blog: Bun is joining Anthropic"
  - id: bun-rust
    resource: https://lilting.ch/en/articles/bun-zig-rust-ai-port
    title: "Bun PR #30412 merged: 1M-line Zig-to-Rust rewrite hits main"
  - id: biome-v2
    resource: https://dev.to/pockit_tools/biome-the-eslint-and-prettier-killer-complete-migration-guide-for-2026-27m
    title: "DEV: Biome migration guide 2026 (Biome 2 type-aware rules)"
---

# Summary

**Succeeded, decisively.** Between 2020 and 2026 the tools that JavaScript and Python
developers run hundreds of times a day were rewritten in Rust, Go or Zig. The rewrites that kept
the old interface won quickly: esbuild, swc, Ruff, uv, Rolldown, Oxc, Biome and TypeScript 7's
Go compiler. By 2026 the leading teams had been bought by AI companies. OpenAI agreed to buy
Astral (uv/Ruff/ty) in March 2026,[^openai-astral] and Anthropic bought Bun in December 2025.[^bun-anthropic]
The failures came from business models and scope, not technology. Rome raised venture money to
build "one tool for everything", laid off its staff, and survived only as the community fork Biome.[^rome-fall][^biome-announce]

# The idea

Tooling for dynamic languages was traditionally written in the language itself: webpack and Babel
in JS, pip, flake8 and mypy in Python, tsc in TypeScript. That made contribution easy, but the
tools became slow as codebases grew. The idea is to rewrite the hot tools in a compiled language
with real parallelism, while keeping the configuration and CLI surface compatible.
esbuild (Evan Wallace, 2020) showed the gap was 10–100x, not 2x. Its FAQ credits native
code, parallelism and few passes over the AST.[^esbuild-faq]

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020 | esbuild released (Go); swc (Rust) gaining use in Next.js | + |
| E2 | 2021-05 | Rome Tools Inc. formed with VC funding to unify JS tooling in Rust | mixed |
| E2 | 2022-08 | Ruff (Rust Python linter) first release | + |
| E3 | 2023 | Rome staff laid off; community fork Biome announced 2023-08-29[^biome-announce] | − |
| E3 | 2024-02 | uv released by Astral; quickly becomes default Python installer for many | + |
| E4 | 2025-03 | Microsoft announces the Go port of the TypeScript compiler (about 10x faster)[^ts-native] | + |
| E4 | 2025 | Biome 2 adds type-aware lint rules without tsc[^biome-v2] | + |
| E4 | 2025-12-02 | Anthropic acquires Bun[^bun-anthropic] | mixed |
| E4 | 2026-03-12 | Vite 8 ships with Rolldown (Rust) as the only bundler[^vite8] | + |
| E4 | 2026-03-19 | OpenAI announces acquisition of Astral[^openai-astral] | mixed |
| E4 | 2026-05-14 | Bun merges an AI-generated Zig→Rust port of about 1M lines[^bun-rust] | mixed |
| E4 | 2026-07-08 | TypeScript 7.0 GA on the Go compiler | + |

# Where it succeeded

- **Bundlers.** esbuild became the transform layer inside Vite, and Rolldown replaced both esbuild
  and Rollup in Vite 8. Benchmarks are 10–30x faster than Rollup, and most plugins work unchanged.[^vite8][^reg-vite8]
- **Python linting and packaging.** Ruff replaced flake8, isort and black in many projects. uv
  replaced pip, virtualenv and pip-tools while keeping their command-line shape. See
  [Python packaging revolution](/ideas/tooling-and-ecosystem/packaging-revolution-python.md).
- **Type checkers.** Microsoft's [TypeScript](/languages/typescript.md) team chose Go over Rust
  because Go let them port the code nearly line by line. They kept the semantics and promised
  about 10x faster builds.[^ts-native]
- **Linters and formatters.** Biome survived Rome's collapse and by 2025 ran type-aware rules without
  loading the TypeScript compiler.[^biome-v2]

# Where it failed or stalled

- **Rome (2021–2023).** It had VC funding, a "replace everything" scope, no revenue, and its staff
  were laid off. The npm package went unmaintained, and the community had to fork it under a new
  name because the owner did not respond.[^rome-fall][^biome-announce]
- **Plugin ecosystems.** Native tools usually cannot run JS or Python plugins at full speed.
  Rolldown supports the Rollup plugin API, but plugin calls cross a JS boundary. Embedders of
  TypeScript had to wait for 7.1's stable API.
- **Contributor pool.** A Python tool written in Rust is harder for Python users to patch. The
  maintainer pool narrows to a VC-funded core team, which became a governance concern once
  Astral and Bun were bought by AI labs.[^jb-astral]
- **AI-generated rewrites.** Bun's Rust port was produced by AI agents in days. Reports note about
  13,000 `unsafe` blocks, which moves the cost onto review and trust.[^bun-rust]

# Why

1. **Speed is a feature users notice at once.** A 10x faster linter or installer changes
   workflows, for example linting on save and resolving in CI in seconds. Few other tooling
   improvements are that visible.
2. **Drop-in compatibility removed the migration cost.** uv speaks pip, Rolldown speaks Rollup and
   tsgo speaks tsconfig. Rewrites that also asked users to change config or mental model (Rome)
   lost to ones that did not.
3. **Rust's ecosystem was ready by about 2020.** It had parsers, Rayon for parallelism and cargo
   distribution, and the Go port showed a GC language is enough when the bottleneck is
   single-threaded JS.
4. **Narrow scope beat platform ambition.** Teams that shipped one excellent tool first (esbuild,
   Ruff, then uv) built trust. Rome started as a platform and had no product when funding ran out.
5. **Money followed the attention of AI labs.** By 2025–2026 fast tooling was infrastructure for
   coding agents, which run installers and type checkers in tight loops. That explains the Astral
   and Bun acquisitions.[^openai-astral][^bun-anthropic]

# Lessons

- Rewrite for speed, but keep the interface. Compatibility matters more than elegance.
- The business model is the main risk. The code survives through forks (Biome), but the brand
  and the npm name may not.
- In 2026 AI made ports cheap. Reviewing them now costs more than writing them.

# Related

- [Integrated toolchains](/ideas/tooling-and-ecosystem/integrated-toolchains.md)
- [Python packaging revolution](/ideas/tooling-and-ecosystem/packaging-revolution-python.md)
- [AI-assisted code migration](/ideas/ai-and-languages/ai-assisted-code-migration.md)
- [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md)
- [OpenAI acquires Astral](/events/2026-03-openai-acquires-astral.md)
- [Rust](/languages/rust.md), [Go](/languages/go.md), [Zig](/languages/zig.md)

[^esbuild-faq]: esbuild FAQ — https://esbuild.github.io/faq/
[^rome-fall]: Bytes #219, Rome has fallen — https://bytes.dev/archives/219
[^biome-announce]: Announcing Biome — https://biomejs.dev/blog/announcing-biome/
[^ts-native]: A 10x Faster TypeScript — https://devblogs.microsoft.com/typescript/typescript-native-port/
[^vite8]: Vite 8.0 is out! — https://vite.dev/blog/announcing-vite8
[^reg-vite8]: The Register on Vite 8 — https://www.theregister.com/2026/03/16/vite_8_rolldown/
[^openai-astral]: The Register on OpenAI/Astral — https://www.theregister.com/2026/03/19/openai_aims_for_the_stars/
[^jb-astral]: JetBrains on OpenAI/Astral — https://blog.jetbrains.com/pycharm/2026/03/openai-acquires-astral-what-it-means-for-pycharm-users/
[^bun-anthropic]: Bun is joining Anthropic — https://bun.com/blog/bun-joins-anthropic
[^bun-rust]: Bun Zig-to-Rust port merged — https://lilting.ch/en/articles/bun-zig-rust-ai-port
[^biome-v2]: Biome 2026 migration guide — https://dev.to/pockit_tools/biome-the-eslint-and-prettier-killer-complete-migration-guide-for-2026-27m
