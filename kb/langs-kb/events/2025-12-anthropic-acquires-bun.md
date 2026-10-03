---
type: Event
title: Anthropic acquires Bun (Oven)
description: Anthropic bought Oven, the zero-revenue company behind the Bun runtime, because Claude Code ships as a Bun executable; it was the first time an AI lab bought a JavaScript runtime as agent infrastructure.
event_kind: acquisition
date: 2025-12-02
era: E4
impact: mixed
languages: [languages/javascript, languages/typescript, languages/zig, languages/rust]
runtimes: [runtimes/bun, runtimes/javascriptcore]
ideas: [ideas/platforms-and-portability/js-runtime-competition, ideas/ai-and-languages/llm-impact-on-language-adoption]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: bun-joins-anthropic
    resource: https://bun.com/blog/bun-joins-anthropic
    title: "Bun blog: Bun is joining Anthropic (2025-12-02)"
    author: org:oven
  - id: devclass-acq
    resource: https://devclass.com/2025/12/03/bun-javascript-runtime-acquired-by-anthropic-tying-its-future-to-ai-coding/
    title: "DevClass: Bun JavaScript runtime acquired by Anthropic, tying its future to AI coding (2025-12-03)"
  - id: reg-rust
    resource: https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
    title: "The Register: Anthropic's Bun Rust rewrite merged at speed of AI (2026-05-14)"
---

# What happened
On 2025-12-02 Anthropic announced that it had acquired Oven Inc., the company behind Bun. It was Anthropic's first acquisition, and the price was not disclosed.[^bun-joins-anthropic] Oven had raised about $26M ($7M seed, $19M Series A) and had no revenue. Bun stayed MIT-licensed with the same team. At the time Bun had 7.2M monthly downloads, and Claude Code, FactoryAI and OpenCode shipped as Bun single-file executables.[^bun-joins-anthropic][^devclass-acq] In May 2026, under Anthropic, Bun merged an AI-generated Zig-to-Rust rewrite of more than 1M lines. Bun 1.4 (August 2026) was the first Rust-based release.[^reg-rust]

# Why it matters
Runtime competition was not settled by business models. Neither Deno nor Bun found a sustainable one. It was settled by strategic dependency: the runtime under the most-used AI coding agent became worth buying. That gives Bun long-term funding but also single-vendor control tied to one AI product. Together with Deno's 2026 layoffs, it means that by 2026 Node.js under the OpenJS Foundation was the only major JS runtime with neutral governance.

# Related
- [Bun](/runtimes/bun.md), [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md)
- [Bun 1.0](/events/2023-09-bun-1-0.md), [Deno layoffs](/events/2026-03-deno-layoffs.md)
- [LLM impact on language adoption](/ideas/ai-and-languages/llm-impact-on-language-adoption.md)

[^bun-joins-anthropic]: Bun blog: Bun is joining Anthropic — https://bun.com/blog/bun-joins-anthropic
[^devclass-acq]: DevClass: Bun JavaScript runtime acquired by Anthropic — https://devclass.com/2025/12/03/bun-javascript-runtime-acquired-by-anthropic-tying-its-future-to-ai-coding/
[^reg-rust]: The Register: Anthropic's Bun Rust rewrite merged at speed of AI — https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
