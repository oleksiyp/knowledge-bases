---
type: Event
title: Bun merges an AI-driven rewrite from Zig to Rust
description: On 2026-05-14 Bun, Zig's flagship application and owned by Anthropic since December 2025, merged a Rust port of its roughly 535K-line Zig codebase, produced in about four months by parallel AI coding agents. Memory-safety bugs and Zig's ban on LLM contributions were the stated reasons. Bun 1.4 shipped on Rust in August 2026.
event_kind: adoption
date: 2026-05-14
era: E4
impact: mixed
languages: [languages/zig, languages/rust]
runtimes: [runtimes/bun]
ideas: [ideas/memory-safety/ownership-and-borrowing, ideas/ai-and-languages/ai-assisted-code-migration]
tags: [bun, zig, rust, rewrite, ai-agents, anthropic]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: reg-bun
    resource: https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
    title: "The Register: Anthropic's Bun Rust rewrite merged at speed of AI (2026-05-14)"
  - id: infoq-bun
    resource: https://www.infoq.com/news/2026/09/bun-AI-rewrite-zig-rust-4-months/
    title: "InfoQ: Bun Rewrites 535K Lines of Zig into Rust in Four Months (September 2026)"
  - id: tsai-zig-ai
    resource: https://mjtsai.com/blog/2026/04/30/zigs-anti-ai-contribution-policy/
    title: "Michael Tsai: Zig's Anti-AI Contribution Policy (2026-04-30)"
---

# What happened
On 2026-05-14 a Rust version of Bun, the JavaScript runtime, was merged into the main branch.[^reg-bun] The port covered about **535,496 lines of Zig**. A fleet of parallel AI coding agents directed by creator Jarred Sumner did it in about four months, against an estimated year for a small human team. Bun's TypeScript test suite, which is independent of the implementation language, served as the oracle.[^infoq-bun] Sumner's stated reason: "a large percentage of bugs are use-after-free, double-free" errors that become compiler errors in Rust. A second factor was Zig's strict ban on LLM-authored contributions. Bun had been maintaining a Zig compiler fork, with a claimed 4x compile-time improvement, that it could not upstream.[^tsai-zig-ai][^infoq-bun] Bun v1.4.0 (August 2026) shipped the Rust codebase. InfoQ reports 128 long-standing bugs closed and memory in some bundling tests plateauing at 609 MB versus 6.7+ GB before. Zig creator Andrew Kelley called the framing a "false dichotomy".[^infoq-bun]

# Why it matters
Zig lost its most visible production user. It kept TigerBeetle and Ghostty, but the episode reinforced the view that manual memory management without [ownership](/ideas/memory-safety/ownership-and-borrowing.md) has a stability cost at scale. It was also the largest public demonstration of [AI-assisted code migration](/ideas/ai-and-languages/ai-assisted-code-migration.md) between systems languages. A big behaviour-level test suite proved to be the enabling asset, and project AI policies became a new factor in language choice. Caveats: Bun's owner sells the AI agents used, and the long-term maintainability of machine-written Rust is unproven.

# Related
- [Zig](/languages/zig.md), [Rust](/languages/rust.md), [Bun](/runtimes/bun.md)
- [Bun 1.0](/events/2023-09-bun-1-0.md)
- [Microsoft's 2030 Rust post](/events/2025-12-microsoft-2030-rust-post.md)

[^reg-bun]: The Register: Anthropic's Bun Rust rewrite merged at speed of AI — https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
[^infoq-bun]: InfoQ: Bun Rewrites 535K Lines of Zig into Rust in Four Months — https://www.infoq.com/news/2026/09/bun-AI-rewrite-zig-rust-4-months/
[^tsai-zig-ai]: Michael Tsai: Zig's Anti-AI Contribution Policy — https://mjtsai.com/blog/2026/04/30/zigs-anti-ai-contribution-policy/
