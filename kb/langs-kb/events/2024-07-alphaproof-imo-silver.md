---
type: Event
title: AlphaProof reaches IMO silver-medal standard with Lean proofs
description: "Google DeepMind announced that AlphaProof (a reinforcement-learning prover working in Lean 4) and AlphaGeometry 2 solved four of six IMO 2024 problems, a silver-medal score. It was the first major demonstration that a proof assistant's kernel could be the verifier for AI mathematics."
event_kind: announcement
date: 2024-07-25
era: E3
impact: positive
languages: [languages/lean]
runtimes: []
ideas: [ideas/types/dependent-types-and-proof-assistants, ideas/ai-and-languages/ai-and-formal-verification]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: deepmind-alphaproof
    resource: https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/
    title: "Google DeepMind: AI achieves silver-medal standard solving International Mathematical Olympiad problems"
  - id: nature-alphaproof
    resource: https://www.nature.com/articles/d41586-025-03585-5
    title: "Nature: Mathematicians put AI model AlphaProof to the test (2025)"
  - id: harmonic-aristotle
    resource: https://arxiv.org/abs/2510.01346
    title: "Harmonic: Aristotle — IMO-level Automated Theorem Proving"
---

# What happened
On 25 July 2024 DeepMind reported that AlphaProof and AlphaGeometry 2 together solved four of the six IMO 2024 problems, scoring at silver-medal level.[^deepmind-alphaproof] AlphaProof is an AlphaZero-style agent. It auto-formalized about 80 million problem statements into Lean, learned by reinforcement learning to find Lean proofs, and used test-time RL on problem variants for the hardest problems. Its method was published in *Nature* in November 2025.[^nature-alphaproof]

# Why it matters
It made Lean the default "ground truth" for AI mathematics. A machine-checked proof cannot be hallucinated, so the proof kernel became the reward signal. A year later Harmonic's Aristotle reached gold-medal level at IMO 2025 with formal Lean proofs, and a wave of Lean-based provers followed (DeepSeek-Prover-V2, Seed-Prover, Gauss).[^harmonic-aristotle] It also shows the lasting effect of the 2023 Mathlib/Lean 4 consolidation.

# Related
- [Lean](/languages/lean.md), [Dependent types and proof assistants](/ideas/types/dependent-types-and-proof-assistants.md), [AI and formal verification](/ideas/ai-and-languages/ai-and-formal-verification.md)
- [Mathlib port and Lean FRO](/events/2023-07-mathlib-port-to-lean-4-and-lean-fro.md), [Fermat's Last Theorem formalized in Lean](/events/2026-09-fermats-last-theorem-formalized-in-lean.md)

[^deepmind-alphaproof]: Google DeepMind: AlphaProof — https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/
[^nature-alphaproof]: Nature: Mathematicians put AI model AlphaProof to the test — https://www.nature.com/articles/d41586-025-03585-5
[^harmonic-aristotle]: Harmonic: Aristotle — https://arxiv.org/abs/2510.01346
