---
type: Event
title: Bun merges AI-generated Zig-to-Rust rewrite (1M+ lines)
description: Under Anthropic ownership, Bun replaced its Zig codebase with an AI-generated Rust port of more than 1M lines in a single merge, ending its role as Zig's flagship production project.
event_kind: release
date: 2026-05-14
window: W6
impact: mixed
projects: [projects/devtools-languages/bun, projects/devtools-languages/zig, projects/devtools-languages/rust]
organizations: [organizations/oven]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: reg-rust
    resource: https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
    title: "The Register: Anthropic's Bun Rust rewrite merged at speed of AI"
  - id: devclass-rust
    resource: https://www.devclass.com/ai-ml/2026/05/15/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240541
    title: "DevClass: Anthropic's Bun Rust rewrite merged at speed of AI"
  - id: wiki-zig
    resource: https://en.wikipedia.org/wiki/Zig_(programming_language)
    title: "Wikipedia: Zig (Bun written in Zig until v1.3.14, Rust from v1.4.0)"
  - id: wiki-bun
    resource: https://en.wikipedia.org/wiki/Bun_(software)
    title: "Wikipedia: Bun (software)"
---

# What happened
On 2026-05-09 Jarred Sumner reported a 99.8% test-suite pass rate on Linux for the Rust port. Bun 1.3.14, the last Zig-based release, followed on 2026-05-12. On 2026-05-14 the Rust rewrite was merged: more than 1M lines of Rust added and about 600k lines of Zig removed. The binary shrank by 3–8 MB, and the team said performance was neutral or better.[^reg-rust] Sumner said AI writes all the code: "we haven't been typing code ourselves for many months now."[^reg-rust][^devclass-rust] Bun 1.4.0 onward is Rust.[^wiki-zig]

# Why it matters
It is the largest publicly known AI-driven language migration. It also exposed a values split: Bun had been carrying a Zig fork with AI-assisted changes that Zig's no-AI policy would never accept upstream.[^devclass-rust] Commenters questioned whether a commit that size can be meaningfully reviewed.[^reg-rust]

# Outcome so far
The Rust-based 1.4.x line is the stable release, with 1.4.2 released on 2026-09-05.[^wiki-bun] Zig lost its best-known production user.

# Related
- [Bun](/projects/devtools-languages/bun.md), [Zig](/projects/devtools-languages/zig.md), [Rust](/projects/devtools-languages/rust.md), [Anthropic acquires Bun](/events/2025-12-anthropic-acquires-bun.md)

[^reg-rust]: The Register — https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
[^devclass-rust]: DevClass — https://www.devclass.com/ai-ml/2026/05/15/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240541
[^wiki-zig]: Wikipedia: Zig — https://en.wikipedia.org/wiki/Zig_(programming_language)
[^wiki-bun]: Wikipedia: Bun — https://en.wikipedia.org/wiki/Bun_(software)
