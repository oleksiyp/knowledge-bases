---
type: System
title: Automerge
description: "Research-led CRDT library from Ink & Switch and Martin Kleppmann for JSON-like documents. Rewritten as a Rust core with Wasm and C bindings for 2.0 (Jan 2023). Technically mature and the reference local-first implementation, but small in adoption next to Yjs."
resource: https://automerge.org
tags: [crdt, local-first, rust, wasm]
kind: oss
first_release: 2017
org: "Ink & Switch / Automerge community"
license: MIT
outcome: stable
ideas: [ideas/edge-devx/local-first-crdts]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: am2
    resource: https://automerge.org/blog/automerge-2/
    title: "Introducing Automerge 2.0 (Jan 2023)"
    author: org:automerge
  - id: localfirst
    resource: https://www.inkandswitch.com/essay/local-first/
    title: "Ink & Switch: Local-first software (2019)"
    author: org:ink-and-switch
  - id: npm
    resource: https://api.npmjs.org/downloads/point/last-week/@automerge/automerge
    title: "npm download API: @automerge/automerge, week ending 2026-10-01"
  - id: gh
    resource: https://github.com/automerge/automerge
    title: "Automerge GitHub repository"
---

# Summary
Automerge is the CRDT library most closely tied to the local-first movement. It was used in the experiments behind Ink & Switch's 2019 essay[^localfirst]. Early JavaScript versions were slow and memory-hungry. Automerge 2.0 (January 2023) was a ground-up rewrite: one Rust core compiled to WebAssembly for browsers, with TypeScript types and C bindings, so the merge logic is identical on every platform. The team called it "production-ready"[^am2]. Automerge-repo added networking and storage adapters. Adoption stayed modest: about 74k weekly npm downloads in late September 2026, against about 11.5M for Yjs[^npm], and about 6.6k GitHub stars[^gh]. It remains the reference implementation for research (history, branching, rich text) rather than a mass-market dependency.

# Timeline
| Year | Event |
|---|---|
| 2017 | First JavaScript releases |
| 2019 | Local-first essay[^localfirst] |
| 2023 | Automerge 2.0 with Rust core (Jan)[^am2] |

# What worked
- Correct, well-specified semantics and full-history documents. The Rust core fixed performance.

# What didn't
- Yjs got to editor integrations first and kept the ecosystem.
- Full-history JSON CRDTs remain heavier than most apps need.

# Related
[Yjs](/systems/yjs.md) · [Local-first and CRDTs](/ideas/edge-devx/local-first-crdts.md) · [Local-first paper](/papers/2019-local-first-software.md)
