---
type: Event
title: Jane Street open-sources OxCaml
description: On 2025-06-14 Jane Street published OxCaml, its production OCaml compiler branch. It adds modes for locality (stack allocation), uniqueness, affinity and data-race freedom, plus unboxed layouts, and is the most ambitious attempt yet to bring Rust-style resource control into a GC'd functional language.
event_kind: release
date: 2025-06-14
era: E4
impact: positive
languages: [languages/ocaml]
runtimes: [runtimes/ocaml-5-runtime]
ideas: [ideas/types/linear-and-affine-types, ideas/concurrency/multicore-ocaml-and-effects-based-concurrency]
tags: [ocaml, jane-street, modes, oxcaml, data-race-freedom]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: js-oxcaml
    resource: https://blog.janestreet.com/introducing-oxcaml/
    title: "Jane Street Blog: Introducing OxCaml"
    author: org:jane-street
  - id: tarides-oxcaml
    resource: https://tarides.com/blog/2025-07-09-introducing-jane-street-s-oxcaml-branch/
    title: "Tarides: Introducing Jane Street's OxCaml Branch (2025-07-09)"
  - id: oxcaml-modes
    resource: https://oxcaml.org/documentation/modes/intro/
    title: "OxCaml documentation: Modes"
  - id: drf-mode
    resource: https://dl.acm.org/doi/pdf/10.1145/3704859
    title: "Georges et al.: Data Race Freedom à la Mode (POPL 2025)"
  - id: ocaml-540
    resource: https://ocaml.org/releases/5.4.0
    title: "OCaml 5.4.0 Release Notes"
---

# What happened
On 2025-06-14 Jane Street announced OxCaml. It is both "Jane Street's production compiler" and an open laboratory for performance-oriented OCaml extensions. The extensions carry no stability promise, but plain OCaml code still compiles.[^js-oxcaml] The extensions use *modes*: locality (values that may live on the stack), uniqueness and affinity, and contention and portability, which statically rule out data races between domains. There are also unboxed types and layouts.[^oxcaml-modes][^drf-mode] Tarides sorted the features into three groups: ones ready to upstream (labelled tuples and immutable arrays, both shipped in OCaml 5.4 in Oct 2025), ones that may be upstreamed later (modes), and Jane Street-only ones.[^tarides-oxcaml][^ocaml-540]

# Why it matters
OxCaml is a large industrial bet that *modes* layered on a GC'd language can give much of Rust's control over allocation and aliasing, and its data-race freedom, without Rust's syntax and lifetime burden. It also shows a governance pattern: a single heavy user runs a public fork and upstreams in pieces. That speeds up progress, but it could split the ecosystem if upstreaming stalls.

# Related
- [OCaml](/languages/ocaml.md), [OCaml 5 runtime](/runtimes/ocaml-5-runtime.md)
- [Linear and affine types](/ideas/types/linear-and-affine-types.md)
- [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md)

[^js-oxcaml]: Jane Street Blog: Introducing OxCaml — https://blog.janestreet.com/introducing-oxcaml/
[^tarides-oxcaml]: Tarides: Introducing Jane Street's OxCaml Branch — https://tarides.com/blog/2025-07-09-introducing-jane-street-s-oxcaml-branch/
[^oxcaml-modes]: OxCaml documentation: Modes — https://oxcaml.org/documentation/modes/intro/
[^drf-mode]: Data Race Freedom à la Mode — https://dl.acm.org/doi/pdf/10.1145/3704859
[^ocaml-540]: OCaml 5.4.0 Release Notes — https://ocaml.org/releases/5.4.0
