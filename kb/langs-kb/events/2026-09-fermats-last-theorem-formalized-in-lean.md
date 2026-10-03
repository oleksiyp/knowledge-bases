---
type: Event
title: Fermat's Last Theorem fully formalized in Lean by AI agents
description: "Anthropic published a complete, machine-checked Lean 4 formalization of Fermat's Last Theorem — about 13.4 million lines produced largely by Claude agents in 11 days — completing the last item on Freek Wiedijk's '100 theorems' formalization list. Kevin Buzzard, who leads the human FLT formalization project, called it impressive but mathematically uninformative and hard to maintain."
event_kind: announcement
date: 2026-09-04
era: E4
impact: mixed
languages: [languages/lean]
runtimes: []
ideas: [ideas/types/dependent-types-and-proof-assistants, ideas/ai-and-languages/ai-and-formal-verification]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: buzzard-flt
    resource: https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/
    title: "Kevin Buzzard (Xena): FLT — Anthropic has beaten me to it (2026-09-04)"
  - id: wiki-lean
    resource: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
    title: "Wikipedia: Lean (proof assistant)"
  - id: devto-flt
    resource: https://dev.to/axrisi/lean-4-proof-of-fermats-last-theorem-how-claude-did-it-in-11-days-1ig2
    title: "DEV: Lean 4 proof of Fermat's Last Theorem — how Claude did it in 11 days"
---

# What happened
On 4 September 2026 Anthropic released a complete Lean 4 proof of Fermat's Last Theorem, generated mostly by Claude agents over 11 days. It runs to about 13.4 million lines and relies only on Lean's standard axioms. A comparator confirmed that the theorem proved matches Mathlib's own statement of FLT.[^buzzard-flt][^devto-flt] The proof follows the 1995 Darmon–Diamond–Taylor exposition (for exponents p ≥ 17, with smaller cases covered by earlier formalizations). It completes the last open entry of Freek Wiedijk's 100-theorem formalization benchmark.[^buzzard-flt][^wiki-lean]

# Why it matters
It shows the "AI generates, kernel verifies" model at a scale far beyond human formalization. It also shows the limits. Kevin Buzzard (whose EPSRC-funded project had targeted FLT for years) said it tells mathematicians "essentially nothing" new. The code compiles about 20 times slower than all of Mathlib on a 96-core machine, and it is "sluggish" to navigate. His project continues with human-readable, Mathlib-quality foundations.[^buzzard-flt] Verified correctness is now cheap, but readable, reusable libraries are still scarce.

# Related
- [Lean](/languages/lean.md), [Dependent types and proof assistants](/ideas/types/dependent-types-and-proof-assistants.md), [AI and formal verification](/ideas/ai-and-languages/ai-and-formal-verification.md)
- [AlphaProof IMO silver](/events/2024-07-alphaproof-imo-silver.md)

[^buzzard-flt]: Kevin Buzzard: FLT — Anthropic has beaten me to it — https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/
[^wiki-lean]: Wikipedia: Lean (proof assistant) — https://en.wikipedia.org/wiki/Lean_(proof_assistant)
[^devto-flt]: DEV: Lean 4 proof of FLT, how Claude did it in 11 days — https://dev.to/axrisi/lean-4-proof-of-fermats-last-theorem-how-claude-did-it-in-11-days-1ig2
