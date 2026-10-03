---
type: Event
title: DARPA announces TRACTOR (Translating All C to Rust)
description: On 2024-07-31 DARPA announced TRACTOR, a programme to automate translation of legacy C into safe, idiomatic Rust using program analysis plus LLMs. By late 2026 it had produced benchmarks and research prototypes but no turnkey translator.
event_kind: funding
date: 2024-07-31
era: E3
impact: mixed
languages: [languages/c, languages/rust]
runtimes: []
ideas: [ideas/memory-safety/c-to-rust-translation, ideas/ai-and-languages/ai-assisted-code-migration]
tags: [darpa, c-to-rust, llm, translation, funding]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: darpa-news
    resource: https://www.darpa.mil/news-events/2024-07-31a
    title: "DARPA: Eliminating Memory Safety Vulnerabilities Once and For All (2024-07-31)"
    author: org:darpa
  - id: darpa-prog
    resource: https://www.darpa.mil/research/programs/translating-all-c-to-rust
    title: "DARPA: Translating All C to Rust (TRACTOR) programme page"
    author: org:darpa
  - id: ll-tractor
    resource: https://www.ll.mit.edu/r-d/projects/translating-all-c-rust-tractor-benchmarks
    title: "MIT Lincoln Laboratory: TRACTOR Benchmarks"
  - id: tractor-bench
    resource: https://arxiv.org/abs/2609.25121
    title: "arXiv: TRACTOR Benchmark for Evaluating C to Rust Translators (2026)"
---

# What happened
On 2024-07-31 DARPA announced Translating All C to Rust (TRACTOR). Its goal is to "substantially automate the translation of the world's legacy C code to Rust" at the quality "a skilled Rust developer would produce".[^darpa-news] Programme manager Dan Wallach said LLM chatbots already translate C to Rust well "often … but not always". TRACTOR therefore funds combinations of static and dynamic analysis with machine learning.[^darpa-news][^darpa-prog] A proposers' day followed in August 2024. MIT Lincoln Laboratory serves as independent test and evaluation and releases benchmark "batteries" and milestone projects for performers.[^ll-tractor] By September 2026 the benchmark suite had been published as a paper, with two batteries and three milestone projects released.[^tractor-bench]

# Why it matters
TRACTOR is the main public bet that [C-to-Rust translation](/ideas/memory-safety/c-to-rust-translation.md) can be automated rather than rewritten by hand. Older rule-based tools such as c2rust produce compiling but `unsafe`-saturated Rust, and turning that into idiomatic, safe ownership is the hard, unsolved part. By late 2026 TRACTOR had produced research systems and metrics, not a production translator. The higher-profile migrations of 2026 (Bun's Zig-to-Rust port, Microsoft's research push) used general-purpose AI coding agents instead.

# Related
- [C-to-Rust translation](/ideas/memory-safety/c-to-rust-translation.md)
- [AI-assisted code migration](/ideas/ai-and-languages/ai-assisted-code-migration.md)
- [Microsoft's "eliminate C/C++ by 2030" post](/events/2025-12-microsoft-2030-rust-post.md)

[^darpa-news]: DARPA: Eliminating Memory Safety Vulnerabilities Once and For All — https://www.darpa.mil/news-events/2024-07-31a
[^darpa-prog]: DARPA: TRACTOR programme page — https://www.darpa.mil/research/programs/translating-all-c-to-rust
[^ll-tractor]: MIT Lincoln Laboratory: TRACTOR Benchmarks — https://www.ll.mit.edu/r-d/projects/translating-all-c-rust-tractor-benchmarks
[^tractor-bench]: arXiv: TRACTOR Benchmark for Evaluating C to Rust Translators — https://arxiv.org/abs/2609.25121
