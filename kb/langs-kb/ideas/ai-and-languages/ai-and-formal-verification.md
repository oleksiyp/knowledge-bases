---
type: Idea
title: AI and formal verification (provers as the oracle for generated code and proofs)
description: "Pairing LLMs and RL with machine-checkable languages (Lean, Dafny, Verus, Coq/Rocq) so that generated proofs and programs are verified rather than trusted. 2023–2026 verdict: succeeding fast in mathematics (IMO silver in 2024 and formal gold in 2025) and in verified-code benchmarks (Dafny about 82%). Industrial uptake (AWS Cedar, verified Rust) is real but narrow, because writing the specification is still the hard human work."
area: ai-and-languages
tags: [formal-verification, lean, dafny, verus, theorem-proving, llm, vericoding, alphaproof, aws, cedar]
outcome: succeeding
maturity_2026: adopted
origin_year: 2019
mainstream_year: null
languages: [languages/lean, languages/rust, languages/idris, languages/haskell]
runtimes: []
related_ideas: [ideas/types/dependent-types-and-proof-assistants, ideas/ai-and-languages/natural-language-programming-and-vibe-coding, ideas/ai-and-languages/ai-assisted-code-migration, ideas/platforms-and-portability/smart-contract-languages]
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: alphaproof-nature
    resource: https://www.nature.com/articles/s41586-025-09833-y
    title: "Nature: Olympiad-level formal mathematical reasoning with reinforcement learning (AlphaProof)"
  - id: alphaproof-press
    resource: https://www.natureasia.com/en/info/press-releases/detail/9147
    title: "Nature press release: A mathematics medal-worthy AI system"
  - id: aristotle
    resource: https://arxiv.org/pdf/2510.01346
    title: "arXiv: Aristotle — IMO-level Automated Theorem Proving (Harmonic)"
  - id: vericoding
    resource: https://arxiv.org/abs/2509.22908
    title: "arXiv: A benchmark for vericoding — formally verified program synthesis"
  - id: verusage
    resource: https://arxiv.org/pdf/2512.18436
    title: "arXiv: VeruSAGE — agent-based verification for Rust systems"
  - id: cedar-paper
    resource: https://dl.acm.org/doi/10.1145/3649835
    title: "OOPSLA 2024: Cedar — A New Language for Expressive, Fast, Safe, and Analyzable Authorization"
  - id: aws-correctness
    resource: https://cacm.acm.org/practice/systems-correctness-practices-at-amazon-web-services/
    title: "CACM: Systems Correctness Practices at Amazon Web Services"
  - id: lean-cedar
    resource: https://x.com/leanprover/status/1978179689849258151
    title: "Lean FRO on X: AWS's Cedar authorization policy use case"
  - id: gemini-imo
    resource: https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/
    title: "Google DeepMind: Gemini Deep Think achieves gold-medal standard at IMO 2025"
  - id: verina
    resource: https://arxiv.org/pdf/2505.23135
    title: "arXiv: VERINA — Benchmarking Verifiable Code Generation"
---

# Summary

**Succeeding. Provers became the oracle that makes AI output trustworthy.** If AI makes code and
proofs cheap, the scarce resource is checking them, and a proof assistant checks perfectly.
Results in 2024–2026:

- **AlphaProof** (DeepMind) reached IMO 2024 silver-medal level by finding Lean proofs with
  reinforcement learning, published in *Nature* in 2025.[^alphaproof-press][^alphaproof-nature]
- **Harmonic's Aristotle** reached gold-medal-equivalent performance at IMO 2025 with fully
  Lean-verified solutions.[^aristotle] Gemini Deep Think reached gold in natural language.[^gemini-imo]
- A 2025 **vericoding** benchmark of 12,504 formal specifications found LLMs succeed on 82% in
  Dafny, 44% in Verus/Rust and 27% in Lean. Pure-Dafny success rose from 68% to 97% in a year.[^vericoding]

In industry, AWS built the **Cedar** authorization language with Dafny and Lean models checked
against the Rust implementation through differential testing.[^cedar-paper][^aws-correctness][^lean-cedar]
The bottleneck moved to **writing specifications**. Benchmarks start from a formal spec, and
real systems rarely have one.[^verina]

# The idea

LLMs are fluent but unreliable. Proof assistants and verification-aware languages are reliable but
laborious. Combine them: the model proposes proofs, invariants or verified code, and the checker
(Lean kernel, Dafny/Z3, Verus) accepts or rejects. The checker's feedback becomes the reward signal
for RL and the repair signal for agents. "Vericoding" is the opposite of
[vibe coding](/ideas/ai-and-languages/natural-language-programming-and-vibe-coding.md): code
generated against a formal spec and proven to meet it.[^vericoding]

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1–E2 | 2019–2021 | GPT-f / early neural provers on Metamath and Lean; Lean 4 development; Mathlib growth | + |
| E3 | 2023 | Lean FRO founded; AWS publishes Cedar, verified in Dafny with Lean models[^cedar-paper] | + |
| E3 | 2024-07 | AlphaProof plus AlphaGeometry reach IMO 2024 silver level[^alphaproof-press] | + |
| E4 | 2025-07 | IMO 2025: Aristotle gold with Lean-verified proofs; Gemini Deep Think gold (informal)[^aristotle][^gemini-imo] | + |
| E4 | 2025-09 | Vericoding benchmark (Dafny/Verus/Lean)[^vericoding] | + |
| E4 | 2025-11 | AlphaProof paper in *Nature*[^alphaproof-nature] | + |
| E4 | 2025-12 | VeruSAGE: agents verifying Rust systems code in Verus[^verusage] | + |

# Where it succeeded

- **Mathematics.** Formal competition maths went from unsolved to gold-medal level in about two
  years. Lean/Mathlib became the shared target. See
  [dependent types and proof assistants](/ideas/types/dependent-types-and-proof-assistants.md).
- **Verified components in industry.** Cedar's verification-guided development shows the pattern:
  a small formal model, proofs, then differential testing against production Rust.[^aws-correctness]
- **Verified code generation** on benchmark specs improved fastest in Dafny, where SMT automation
  hides most proof steps.[^vericoding]

# Where it failed or stalled

- **Specifications.** Turning informal requirements into formal specs is unsolved and largely
  manual. Benchmarks hand the model the spec.[^verina]
- **Proof-heavy languages lag.** Lean and Verus success rates trail Dafny, because the less
  automation the verifier gives, the harder the model's job.[^vericoding]
- **Mainstream code remains unverified.** Most AI-generated production code is checked by tests
  and types, not proofs.

# Why

1. **A perfect checker suits RL.** Binary, unforgeable feedback (the proof checks or it does not)
   is the ideal reward, which is why maths moved fastest.[^alphaproof-nature]
2. **Generation got cheaper than verification.** As AI produced more code, a mechanical way to
   trust it became worth more.
3. **Automation level decides difficulty.** SMT-backed languages (Dafny, Verus) need fewer explicit
   proof steps from the model than interactive provers.

# Lessons

- Verification is the counterweight to AI code generation. Expect demand for spec languages and
  verifiers to grow.
- The scarce skill moves from writing proofs to writing specifications.

# Related

- [Lean](/languages/lean.md), [Dependent types and proof assistants](/ideas/types/dependent-types-and-proof-assistants.md)
- [Natural-language programming and vibe coding](/ideas/ai-and-languages/natural-language-programming-and-vibe-coding.md)
- [AI-assisted code migration](/ideas/ai-and-languages/ai-assisted-code-migration.md)
- [Smart-contract languages](/ideas/platforms-and-portability/smart-contract-languages.md) (Move Prover)

[^alphaproof-nature]: Nature, AlphaProof — https://www.nature.com/articles/s41586-025-09833-y
[^alphaproof-press]: Nature press release — https://www.natureasia.com/en/info/press-releases/detail/9147
[^aristotle]: Aristotle — https://arxiv.org/pdf/2510.01346
[^vericoding]: Vericoding benchmark — https://arxiv.org/abs/2509.22908
[^verusage]: VeruSAGE — https://arxiv.org/pdf/2512.18436
[^cedar-paper]: Cedar (OOPSLA 2024) — https://dl.acm.org/doi/10.1145/3649835
[^aws-correctness]: CACM, Systems Correctness Practices at AWS — https://cacm.acm.org/practice/systems-correctness-practices-at-amazon-web-services/
[^lean-cedar]: Lean FRO on Cedar — https://x.com/leanprover/status/1978179689849258151
[^gemini-imo]: Gemini Deep Think IMO gold — https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/
[^verina]: VERINA benchmark — https://arxiv.org/pdf/2505.23135
