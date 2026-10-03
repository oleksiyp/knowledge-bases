---
type: Language
title: Lean
description: "Dependently typed functional language and proof assistant (Lean 4) that became the de facto standard for formalized mathematics and for AI theorem proving in 2023–2026; the biggest success story for dependent types in this period, though it remains a specialist tool rather than a general-purpose language."
tags: [proof-assistant, dependent-types, functional, formal-verification, mathematics, ai-theorem-proving]
paradigms: [functional, proof-assistant, metaprogramming]
typing: static
memory_model: rc
first_released: 2013
steward: Lean FRO (non-profit under Convergent Research) / Lean community (Mathlib)
governance: foundation
trajectory: rising
ideas: [ideas/types/dependent-types-and-proof-assistants, ideas/types/perceus-and-reference-counting-fp, ideas/ai-and-languages/ai-and-formal-verification]
runtimes: []
adoption_signals:
  github_stars_lean4: { value: 9380, as_of: 2026-10-03 }
  mathlib_lines_of_code: { value: "2.4M+ (280k+ theorems, 750+ contributors)", as_of: 2026 }
  editor_installs: { value: "285,000+ unique VS Code / Open VSX installs", as_of: 2026 }
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: demoura-floc26
    resource: https://leodemoura.github.io/static/floc26/
    title: "Leonardo de Moura: The Lean Theorem Prover — Design, Evolution, and Impact (FLoC 2026 talk)"
  - id: wiki-lean
    resource: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
    title: "Wikipedia: Lean (proof assistant)"
  - id: lean-fro-about
    resource: https://lean-lang.org/fro/about/
    title: "Lean FRO: About"
  - id: lean-x-port
    resource: https://x.com/leanprover/status/1754921156006838459
    title: "Lean (X): Mathlib port to Lean 4 completed 21 July 2023; growth since"
  - id: lean4-paper
    resource: https://lean-lang.org/papers/lean4.pdf
    title: "de Moura & Ullrich: The Lean 4 Theorem Prover and Programming Language (CADE 2021)"
  - id: amazon-lean-fro
    resource: https://www.amazon.science/news/amazon-is-investing-in-the-lean-focused-research-organization
    title: "Amazon Science: Amazon is investing in the Lean Focused Research Organization (2026-07)"
  - id: amazon-lean-blog
    resource: https://www.amazon.science/blog/how-the-lean-language-brings-math-to-coding-and-coding-to-math
    title: "Amazon Science: How the Lean language brings math to coding and coding to math"
  - id: deepmind-alphaproof
    resource: https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/
    title: "Google DeepMind: AI achieves silver-medal standard solving IMO problems"
  - id: harmonic-aristotle
    resource: https://arxiv.org/abs/2510.01346
    title: "Harmonic: Aristotle — IMO-level Automated Theorem Proving (arXiv 2510.01346)"
  - id: buzzard-flt
    resource: https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/
    title: "Kevin Buzzard (Xena): FLT — Anthropic has beaten me to it (2026-09-04)"
  - id: mathinc-gauss
    resource: https://www.math.inc/gauss
    title: "Math, Inc.: Introducing Gauss, an agent for autoformalization"
  - id: lean-roadmap-y4
    resource: https://lean-lang.org/fro/roadmap/y4-1/
    title: "Lean FRO: Year 4 Part 1 Roadmap"
  - id: sigplan-award
    resource: https://dev.to/adolfont/lean-won-the-sigplan-programming-languages-software-award-2025-3gf
    title: "DEV: Lean won the SIGPLAN Programming Languages Software Award 2025"
---

# Summary
Lean is the clearest **success** for dependent types in 2018–2026. Lean 4 — a ground-up reimplementation started in 2018 that is both a proof assistant and a general-purpose functional language compiling to C — self-hosted in October 2020, shipped a pre-release in January 2021 and an official 4.0 in September 2023, right after the community finished porting the 1.25M-line Mathlib library from Lean 3 (21 July 2023).[^demoura-floc26][^lean-x-port] The Lean FRO, a non-profit founded in July 2023, gave the language a funded engineering team (about 20 engineers by 2026).[^lean-fro-about][^demoura-floc26] Then AI labs adopted Lean as their proof checker: AlphaProof (IMO 2024 silver), Harmonic's Aristotle (IMO 2025 gold), DeepSeek-Prover-V2, Math Inc's Gauss, and in September 2026 an AI-agent formalization of Fermat's Last Theorem.[^deepmind-alphaproof][^harmonic-aristotle][^mathinc-gauss][^buzzard-flt] Amazon uses it in production verification (Cedar, SampCert, a Trainium compiler) and made the largest donation in the FRO's history in July 2026.[^amazon-lean-fro][^demoura-floc26] **Limits:** Lean is still a specialist tool. Its use as a general-purpose programming language is small, the 2023 Lean 3→4 break was costly, and very large AI-generated proofs raise new maintainability problems.[^buzzard-flt]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018-02 | Lean 4 development begins (full rewrite, written mostly in Lean) [^demoura-floc26] | + |
| E1 | 2020-10 | Lean 4 compiles itself [^demoura-floc26] | + |
| E2 | 2021-01 | Lean 4 pre-release; Mathlib (Lean 3) about 450k lines [^demoura-floc26] | + |
| E2 | 2021-06 | Liquid Tensor Experiment main result (Scholze's challenge) verified in Lean 3 [^demoura-floc26] | + |
| E3 | 2023-07-21 | Mathlib port to Lean 4 completed (1.25M lines) [^lean-x-port] | + |
| E3 | 2023-07 | Lean FRO founded by de Moura and Ullrich under Convergent Research [^lean-fro-about] | + |
| E3 | 2023-09-08 | Lean 4.0 official release [^wiki-lean] | + |
| E3 | 2024-04 | AWS publishes Lean-verified Cedar authorization language [^amazon-lean-blog] | + |
| E3 | 2024-07 | AlphaProof reaches IMO silver standard with Lean proofs [^deepmind-alphaproof] | + |
| E4 | 2025 | SIGPLAN Programming Languages Software Award; `grind` tactic and new compiler shipped [^sigplan-award][^wiki-lean] | + |
| E4 | 2025-07 | Harmonic Aristotle: gold-medal-level IMO 2025 with formal Lean proofs [^harmonic-aristotle] | + |
| E4 | 2025-07 | $10M from Alex Gerko (XTX): $5M to the FRO, $5M to found the Mathlib Initiative [^wiki-lean] | + |
| E4 | 2025-09 | Math Inc's Gauss finishes the strong Prime Number Theorem formalization in about 3 weeks [^mathinc-gauss] | + |
| E4 | 2026-07 | Amazon's largest-ever donation to the Lean FRO, aimed at agent safety [^amazon-lean-fro] | + |
| E4 | 2026-09-04 | AI-agent formalization of Fermat's Last Theorem: 13.4M lines in 11 days [^buzzard-flt] | + / mixed |

# Ideas it bet on
| Idea | Outcome for Lean |
|---|---|
| [Dependent types and proof assistants](/ideas/types/dependent-types-and-proof-assistants.md) | succeeded: the standard for formal mathematics |
| Self-hosting plus extensible syntax and macros (tactics written in Lean) | succeeded: domain-specific automation (`bv_decide`, `grind`) [^lean4-paper][^wiki-lean] |
| [Reference counting with in-place updates](/ideas/types/perceus-and-reference-counting-fp.md) ("functional but in place") | succeeded technically; it influenced Koka and Roc [^lean4-paper] |
| [AI plus formal verification](/ideas/ai-and-languages/ai-and-formal-verification.md) | succeeding: Lean is the default target for AI provers |
| Lean as a general-purpose programming language | unproven: few production programs outside verification |

# What succeeded
- **One big shared library.** Mathlib's single repository with continuous integration, 280k+ theorems and 750+ contributors became a network effect that rival assistants (Rocq, Isabelle, Agda) could not match for mainstream mathematics.[^demoura-floc26]
- **Funded engineering.** The FRO model paid for full-time compiler, build-system (Lake) and editor work outside academic grant cycles: 32 releases and 9,000+ PRs since July 2023.[^demoura-floc26][^lean-roadmap-y4]
- **AI pull.** Lean's kernel gives a cheap, unambiguous reward signal for reinforcement learning, so Lean became the standard benchmark target (miniF2F, PutnamBench) and the output language of AlphaProof, Aristotle, Seed-Prover and DeepSeek-Prover.[^demoura-floc26][^deepmind-alphaproof]
- **Industry verification.** AWS uses Lean models alongside production Rust (Cedar), in AWS Clean Rooms (SampCert), and for a Trainium compiler; Microsoft verified SymCrypt via Aeneas.[^demoura-floc26][^amazon-lean-blog]
- **Mathematician buy-in.** Fields medalists (Tao, Scholze, Viazovska, Gowers) have taken part in Lean projects.[^demoura-floc26]

# What failed or stalled
- **Lean 3→4 break.** Lean 4 was not backward compatible. Mathlib needed a multi-year port (finished July 2023), so community libraries were split during E2.[^lean-x-port]
- **General-purpose programming.** Despite a fast compiler and FFI, Lean barely shows up in general developer surveys. Its users are mathematicians, verification engineers and AI labs.
- **Proof bloat in the AI era.** The 2026 Fermat formalization is 13.4M lines and takes about 20 times longer to compile than all of Mathlib. Kevin Buzzard said it tells mathematicians "essentially nothing" new, and that maintainable, human-readable Mathlib contributions remain separate work.[^buzzard-flt]

# By era
## E1
Lean 4 was being rewritten in private; the community used Lean 3 and Mathlib grew. Lean 4 self-hosted in October 2020.[^demoura-floc26]
## E2
The Lean 4 pre-release and the Liquid Tensor Experiment brought mathematicians in. Mathlib started its port to Lean 4.[^demoura-floc26]
## E3
The port finished, the FRO was founded and Lean 4.0 shipped (2023). AWS Cedar and AlphaProof (2024) showed industry and AI uses.[^lean-x-port][^deepmind-alphaproof]
## E4
AI provers took off: Aristotle, Gauss and the FLT formalization. Funding came from XTX/Gerko and Amazon, and Lean won the SIGPLAN software award.[^harmonic-aristotle][^mathinc-gauss][^amazon-lean-fro][^sigplan-award]

# Lessons
- A dependently typed language wins by owning one community and one killer library, not by courting general programmers.
- A machine-checkable kernel became valuable once AI made generating proofs cheap: verification is where trust now comes from.
- Breaking compatibility (3→4) can pay off if the steward funds and coordinates the migration.

# Related
- [Dependent types and proof assistants](/ideas/types/dependent-types-and-proof-assistants.md)
- [AI and formal verification](/ideas/ai-and-languages/ai-and-formal-verification.md)
- [Idris](/languages/idris.md), [Haskell](/languages/haskell.md), [Koka](/languages/koka.md), [Roc](/languages/roc.md)
- Events: [Mathlib port to Lean 4 completed](/events/2023-07-mathlib-port-to-lean-4-and-lean-fro.md), [AlphaProof IMO silver](/events/2024-07-alphaproof-imo-silver.md), [Fermat's Last Theorem formalized by AI agents](/events/2026-09-fermats-last-theorem-formalized-in-lean.md)

[^demoura-floc26]: Leonardo de Moura, The Lean Theorem Prover: Design, Evolution, and Impact — https://leodemoura.github.io/static/floc26/
[^wiki-lean]: Wikipedia: Lean (proof assistant) — https://en.wikipedia.org/wiki/Lean_(proof_assistant)
[^lean-fro-about]: Lean FRO: About — https://lean-lang.org/fro/about/
[^lean-x-port]: Lean on X, Mathlib port anniversary stats — https://x.com/leanprover/status/1754921156006838459
[^lean4-paper]: The Lean 4 Theorem Prover and Programming Language — https://lean-lang.org/papers/lean4.pdf
[^amazon-lean-fro]: Amazon Science: Amazon is investing in the Lean FRO — https://www.amazon.science/news/amazon-is-investing-in-the-lean-focused-research-organization
[^amazon-lean-blog]: Amazon Science: How the Lean language brings math to coding — https://www.amazon.science/blog/how-the-lean-language-brings-math-to-coding-and-coding-to-math
[^deepmind-alphaproof]: Google DeepMind: AI achieves silver-medal standard solving IMO problems — https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/
[^harmonic-aristotle]: Harmonic: Aristotle — IMO-level Automated Theorem Proving — https://arxiv.org/abs/2510.01346
[^buzzard-flt]: Kevin Buzzard: FLT — Anthropic has beaten me to it — https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/
[^mathinc-gauss]: Math, Inc.: Introducing Gauss — https://www.math.inc/gauss
[^lean-roadmap-y4]: Lean FRO Year 4 Part 1 Roadmap — https://lean-lang.org/fro/roadmap/y4-1/
[^sigplan-award]: Lean won the SIGPLAN Programming Languages Software Award 2025 — https://dev.to/adolfont/lean-won-the-sigplan-programming-languages-software-award-2025-3gf
