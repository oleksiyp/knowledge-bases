---
type: Event
title: Rust 1.85 ships the Rust 2024 edition
description: On 2025-02-20 Rust 1.85 stabilised the 2024 edition, Rust's largest edition, plus async closures. It was the fourth time the opt-in, per-crate edition mechanism let Rust make breaking changes without splitting its ecosystem.
event_kind: release
date: 2025-02-20
era: E4
impact: positive
languages: [languages/rust]
runtimes: []
ideas: [ideas/tooling-and-ecosystem/language-editions-and-evolution, ideas/concurrency/async-await-and-function-coloring]
tags: [rust, editions, release, async]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: rust-185
    resource: https://blog.rust-lang.org/2025/02/20/Rust-1.85.0/
    title: "Rust Blog: Announcing Rust 1.85.0 and Rust 2024 (2025-02-20)"
    author: org:rust-project
  - id: infoworld-185
    resource: https://www.infoworld.com/article/3835168/rust-1-85-arrives-with-long-awaited-async-closures.html
    title: "InfoWorld: Rust 1.85 arrives with long-awaited async closures"
---

# What happened
Rust 1.85.0, released 2025-02-20, stabilised **Rust 2024**, the language's fourth edition after 2015, 2018 and 2021.[^rust-185] Changes include new `impl Trait` lifetime-capture rules (with `use<..>` bounds), `unsafe extern` blocks, `unsafe_op_in_unsafe_fn` warning by default, the `gen` keyword reservation, tail-expression temporary-scope fixes and new prelude items. The same release stabilised **async closures** (`async || {}`), a long-requested piece of the async story.[^rust-185][^infoworld-185] As with earlier editions, `cargo fix --edition` automated most of the migration. Crates on different editions keep linking together.

# Why it matters
[Language editions](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md) are one of Rust's most-copied process ideas. They contrast with C++, where the 2019–2020 "epochs" proposal stalled in WG21, and with the decade-long Python 2→3 split. The 2024 edition shows the mechanism scaling to semantic changes such as capture rules and temporary scopes, not only new keywords. It also shows the mechanism's limits: editions cannot change the standard library's types or trait coherence, so problems like [async function colouring](/ideas/concurrency/async-await-and-function-coloring.md) still need slower, separate work.

# Related
- [Rust](/languages/rust.md)
- [Language editions and evolution](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md)
- [Async/await and function colouring](/ideas/concurrency/async-await-and-function-coloring.md)

[^rust-185]: Rust Blog: Announcing Rust 1.85.0 and Rust 2024 — https://blog.rust-lang.org/2025/02/20/Rust-1.85.0/
[^infoworld-185]: InfoWorld: Rust 1.85 arrives with long-awaited async closures — https://www.infoworld.com/article/3835168/rust-1-85-arrives-with-long-awaited-async-closures.html
