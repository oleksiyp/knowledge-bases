---
type: Event
title: RustConf keynote downgrade derails Rust compile-time reflection work
description: In May 2023 Rust project leadership had JeanHeyd Meneide's RustConf keynote on compile-time reflection downgraded. He withdrew, his Rust Foundation-funded reflection work stopped, and Rust went without a reflection effort until a 2025 project goal.
event_kind: governance
date: 2023-05-26
era: E3
impact: negative
languages: [languages/rust]
runtimes: []
ideas: [ideas/metaprogramming/compile-time-reflection]
tags: [rust, governance, reflection, rustconf, incident]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: thephd
    resource: https://thephd.dev/i-am-no-longer-speaking-at-rustconf-2023
    title: "JeanHeyd Meneide: I Am No Longer Speaking at RustConf 2023"
  - id: soasis
    resource: https://soasis.org/posts/statement-on-rustconf-compile-time-introspection/
    title: "Shepherd's Oasis: Statement on RustConf & Introspection"
  - id: lwn-rustconf
    resource: https://lwn.net/Articles/933276/
    title: "LWN: A post on the RustConf keynote fiasco"
  - id: devclass-rustconf
    resource: https://devclass.com/2023/05/31/more-rust-ructions-as-project-team-confesses-failure-of-leadership-chat/
    title: "DevClass: More Rust ructions as project team confesses failure of 'leadership chat' (2023-05-31)"
  - id: rpg-reflection
    resource: https://rust-lang.github.io/rust-project-goals/2025h2/reflection-and-comptime.html
    title: "Rust Project Goals 2025H2: reflection and comptime"
---

# What happened
JeanHeyd Meneide, a C standards editor, had been invited to give a RustConf 2023 keynote on compile-time introspection. His company Shepherd's Oasis was doing this work under a Rust Foundation grant. Shortly before the conference, a decision made in Rust's informal "leadership chat" downgraded the keynote to a regular talk, on the grounds that the project did not want to appear to endorse the approach. Meneide called this "deeply confusing and ultimately insulting" and withdrew from the conference.[^thephd] Shepherd's Oasis withdrew from the Foundation's grant programme, which ended its reflection work.[^soasis] A lang-team co-lead involved in the decision resigned, and the project publicly admitted that its interim leadership process had failed.[^lwn-rustconf][^devclass-rustconf]

# Why it matters
This is a clear case of governance, not technical merit, killing a language feature. Rust kept relying on proc-macros and derive (for example `serde` and Bevy's `Reflect`) for introspection. C++, meanwhile, [voted reflection into C++26](/events/2025-06-cpp26-reflection-adopted.md) and Zig built on comptime. Rust only restarted the topic with a 2025H2 project goal, "reflection and comptime" (Oli Scherer), which landed an early nightly MVP in 2026.[^rpg-reflection] The incident also pushed Rust to formalise governance through the Leadership Council (2023).

# Related
- [Compile-time reflection](/ideas/metaprogramming/compile-time-reflection.md)
- [Rust](/languages/rust.md)
- [Rust Foundation formed](/events/2021-02-rust-foundation-formed.md)

[^thephd]: JeanHeyd Meneide: I Am No Longer Speaking at RustConf 2023 — https://thephd.dev/i-am-no-longer-speaking-at-rustconf-2023
[^soasis]: Shepherd's Oasis: Statement on RustConf & Introspection — https://soasis.org/posts/statement-on-rustconf-compile-time-introspection/
[^lwn-rustconf]: LWN: A post on the RustConf keynote fiasco — https://lwn.net/Articles/933276/
[^devclass-rustconf]: DevClass: More Rust ructions — https://devclass.com/2023/05/31/more-rust-ructions-as-project-team-confesses-failure-of-leadership-chat/
[^rpg-reflection]: Rust Project Goals 2025H2: reflection and comptime — https://rust-lang.github.io/rust-project-goals/2025h2/reflection-and-comptime.html
