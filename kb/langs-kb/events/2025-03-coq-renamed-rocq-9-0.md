---
type: Event
title: Coq becomes the Rocq Prover (Rocq 9.0)
description: "The Coq proof assistant shipped its first release under the new name, Rocq Prover 9.0, on 12 March 2025, completing a rename announced in October 2023. The release added a single rocq binary, renamed the standard library to Stdlib and kept compatibility shims for Coq 8.20 projects."
event_kind: release
date: 2025-03-12
era: E4
impact: mixed
languages: []
runtimes: []
ideas: [ideas/types/dependent-types-and-proof-assistants]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: rocq-90
    resource: https://rocq-prover.org/releases/9.0.0
    title: "Rocq Prover 9.0.0 Release Notes"
  - id: rocq-changelog
    resource: https://rocq-prover.org/changelog/2025-03-12-rocq-9.0
    title: "Rocq Changelog: Release of Rocq 9.0 (2025-03-12)"
  - id: wiki-rocq
    resource: https://en.wikipedia.org/wiki/Rocq
    title: "Wikipedia: Rocq"
---

# What happened
Rocq 9.0, released 12 March 2025, was the first release of the Rocq Prover after the renaming of the Coq Proof Assistant. One `rocq` binary now dispatches compilation, the REPL, docs and dependency analysis. The `Coq` standard-library namespace became `Stdlib`, CoqIDE became RocqIDE, and compatibility shims keep Coq 8.20 developments and legacy commands working.[^rocq-90][^rocq-changelog] The rename was announced on 11 October 2023. The new name refers to Inria Rocquencourt, where the system was first developed, and to the mythical bird Roc.[^wiki-rocq]

# Why it matters
Coq/Rocq is the most established proof assistant in software verification — CompCert, the Four Color Theorem, Feit–Thompson, and the 2024 BB(5) proof.[^wiki-rocq] It spent part of E3–E4 on rebranding and tooling consolidation while Lean took the mathematics and AI spotlight. The rename removed a long-standing naming problem and signals continued maintenance, but it is not a growth event.

# Related
- [Dependent types and proof assistants](/ideas/types/dependent-types-and-proof-assistants.md), [Lean](/languages/lean.md), [OCaml](/languages/ocaml.md) (Rocq's implementation language)

[^rocq-90]: Rocq Prover 9.0.0 Release Notes — https://rocq-prover.org/releases/9.0.0
[^rocq-changelog]: Rocq Changelog: Release of Rocq 9.0 — https://rocq-prover.org/changelog/2025-03-12-rocq-9.0
[^wiki-rocq]: Wikipedia: Rocq — https://en.wikipedia.org/wiki/Rocq
