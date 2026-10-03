---
type: Event
title: Mathlib port to Lean 4 completes and the Lean FRO is founded
description: "In July 2023 the Lean community finished porting Mathlib (about 1.25M lines) from Lean 3 to Lean 4, and Leonardo de Moura and Sebastian Ullrich launched the Lean Focused Research Organization, a non-profit under Convergent Research. Lean 4.0 followed in September 2023."
event_kind: release
date: 2023-07-21
era: E3
impact: positive
languages: [languages/lean]
runtimes: []
ideas: [ideas/types/dependent-types-and-proof-assistants, ideas/ai-and-languages/ai-and-formal-verification]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: lean-x-port
    resource: https://x.com/leanprover/status/1754921156006838459
    title: "Lean (X): Mathlib port to Lean 4 completed 21 July 2023; growth since"
  - id: lean-fro-about
    resource: https://lean-lang.org/fro/about/
    title: "Lean FRO: About"
  - id: convergent-x
    resource: https://x.com/Convergent_FROs/status/1683845558879014914
    title: "Convergent Research (X): announcing the Lean FRO (July 2023)"
  - id: xena-2024
    resource: https://xenaproject.wordpress.com/2024/01/20/lean-in-2024/
    title: "Kevin Buzzard (Xena): Lean in 2024"
  - id: demoura-floc26
    resource: https://leodemoura.github.io/static/floc26/
    title: "Leonardo de Moura: The Lean Theorem Prover — Design, Evolution, and Impact (FLoC 2026)"
---

# What happened
On 21 July 2023 the community completed the multi-year port of Mathlib — the largest unified library of formalized mathematics, then about 1.25M lines — from Lean 3 to the incompatible Lean 4.[^lean-x-port] The same month, Leonardo de Moura and Sebastian Ullrich launched the **Lean FRO**, a non-profit Focused Research Organization hosted by Convergent Research, to work on Lean's scalability, usability, documentation and proof automation and to make it self-sustaining.[^lean-fro-about][^convergent-x] Lean 4.0 was officially released in September 2023.[^demoura-floc26] By early 2024 Mathlib had grown to 1.4M lines, and the instruction count to build it had fallen by 40%.[^lean-x-port]

# Why it matters
It ended the Lean 3/Lean 4 split and gave Lean a funded engineering team. Most later dependent-types successes build on these two things: AWS's Cedar verification, AlphaProof, Harmonic's Aristotle and the 2026 Fermat formalization. The FRO went on to ship 32 releases and 9,000+ PRs by 2026, and attracted donations from XTX's Alex Gerko and Amazon.[^demoura-floc26][^xena-2024]

# Related
- [Lean](/languages/lean.md), [Dependent types and proof assistants](/ideas/types/dependent-types-and-proof-assistants.md)
- [AlphaProof IMO silver](/events/2024-07-alphaproof-imo-silver.md)

[^lean-x-port]: Lean on X, Mathlib port stats — https://x.com/leanprover/status/1754921156006838459
[^lean-fro-about]: Lean FRO: About — https://lean-lang.org/fro/about/
[^convergent-x]: Convergent Research on X — https://x.com/Convergent_FROs/status/1683845558879014914
[^xena-2024]: Xena: Lean in 2024 — https://xenaproject.wordpress.com/2024/01/20/lean-in-2024/
[^demoura-floc26]: de Moura, FLoC 2026 — https://leodemoura.github.io/static/floc26/
