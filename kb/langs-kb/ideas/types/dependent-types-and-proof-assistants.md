---
type: Idea
title: Dependent types and proof assistants
description: "Types that can depend on values, so programs and proofs live in one language (Lean, Rocq/Coq, Agda, Idris, F*). In 2018–2026 the idea won decisively in formal mathematics and AI theorem proving, mainly through Lean 4 and Mathlib, and in high-assurance niches like verified crypto and policy engines. It did not reach mainstream programming languages: Dependent Haskell stalled and no top-20 language adopted full dependent types."
area: types
tags: [dependent-types, proof-assistants, lean, rocq, coq, agda, idris, fstar, formal-verification, ai-theorem-proving]
outcome: mixed
maturity_2026: adopted
origin_year: 1972
mainstream_year: null
languages: [languages/lean, languages/idris, languages/haskell, languages/bend-hvm]
runtimes: []
related_ideas: [ideas/ai-and-languages/ai-and-formal-verification, ideas/types/linear-and-affine-types, ideas/types/perceus-and-reference-counting-fp, ideas/types/algebraic-effects-and-handlers]
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: demoura-floc26
    resource: https://leodemoura.github.io/static/floc26/
    title: "Leonardo de Moura: The Lean Theorem Prover — Design, Evolution, and Impact (FLoC 2026)"
  - id: lean-x-port
    resource: https://x.com/leanprover/status/1754921156006838459
    title: "Lean (X): Mathlib port to Lean 4 completed 21 July 2023"
  - id: lean-fro-about
    resource: https://lean-lang.org/fro/about/
    title: "Lean FRO: About"
  - id: wiki-lean
    resource: https://en.wikipedia.org/wiki/Lean_(proof_assistant)
    title: "Wikipedia: Lean (proof assistant)"
  - id: deepmind-alphaproof
    resource: https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/
    title: "Google DeepMind: AI achieves silver-medal standard solving IMO problems"
  - id: nature-alphaproof
    resource: https://www.nature.com/articles/d41586-025-03585-5
    title: "Nature: Mathematicians put AI model AlphaProof to the test (2025)"
  - id: harmonic-aristotle
    resource: https://arxiv.org/abs/2510.01346
    title: "Harmonic: Aristotle — IMO-level Automated Theorem Proving"
  - id: deepseek-prover-v2
    resource: https://arxiv.org/abs/2504.21801
    title: "DeepSeek-Prover-V2 (arXiv 2504.21801, April 2025)"
  - id: mathinc-gauss
    resource: https://www.math.inc/gauss
    title: "Math, Inc.: Introducing Gauss, an agent for autoformalization"
  - id: buzzard-flt
    resource: https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/
    title: "Kevin Buzzard: FLT — Anthropic has beaten me to it (2026-09-04)"
  - id: amazon-lean-fro
    resource: https://www.amazon.science/news/amazon-is-investing-in-the-lean-focused-research-organization
    title: "Amazon Science: Amazon is investing in the Lean FRO (2026)"
  - id: amazon-lean-blog
    resource: https://www.amazon.science/blog/how-the-lean-language-brings-math-to-coding-and-coding-to-math
    title: "Amazon Science: How the Lean language brings math to coding and coding to math"
  - id: rocq-90
    resource: https://rocq-prover.org/releases/9.0.0
    title: "Rocq Prover 9.0.0 release notes (2025-03-12)"
  - id: wiki-rocq
    resource: https://en.wikipedia.org/wiki/Rocq
    title: "Wikipedia: Rocq"
  - id: idris2-qtt
    resource: https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ECOOP.2021.9
    title: "Edwin Brady: Idris 2 — Quantitative Type Theory in Practice (ECOOP 2021)"
  - id: idris-080
    resource: https://idris-lang.org/idris-2-version-080-released.html
    title: "Idris 2 version 0.8.0 Released (2025-10-31)"
  - id: hacl-mozilla
    resource: https://blog.mozilla.org/security/2020/07/06/performance-improvements-via-formally-verified-cryptography-in-firefox/
    title: "Mozilla Security Blog: Performance improvements via formally-verified cryptography in Firefox (2020)"
  - id: cpython-hacl
    resource: https://github.com/python/cpython/issues/99108
    title: "CPython issue #99108: Replace built-in hashlib with verified implementations from HACL*"
  - id: dh-roadmap
    resource: https://ghc.serokell.io/dh
    title: "Serokell: Dependent Haskell Roadmap"
  - id: hf-eisenberg
    resource: https://haskell.foundation/podcast/28/
    title: "Haskell Foundation podcast #28: Richard Eisenberg"
---

# Summary
**Mixed, with a decisive niche win.** Dependent types and proof assistants were the most dramatic "research idea goes big" story of 2018–2026, but the success came in **mathematics, AI and high-assurance verification**, not in everyday programming. Lean 4 plus Mathlib (2.4M+ lines, 280k+ theorems) became the shared foundation for formal mathematics.[^demoura-floc26] AI labs adopted Lean's kernel as the arbiter of correctness: AlphaProof (IMO 2024 silver), DeepSeek-Prover-V2 (2025), Harmonic's Aristotle (IMO 2025 gold), Math Inc's Gauss (strong PNT in about 3 weeks), and in September 2026 a 13.4M-line AI-agent formalization of Fermat's Last Theorem.[^deepmind-alphaproof][^deepseek-prover-v2][^harmonic-aristotle][^mathinc-gauss][^buzzard-flt] Industry used proof assistants for narrow, high-value components: AWS Cedar and SampCert in Lean, and F*'s HACL* crypto in Firefox, Linux and CPython.[^amazon-lean-blog][^hacl-mozilla][^cpython-hacl] Meanwhile **full dependent types did not reach a mainstream programming language**. Dependent Haskell's proposals are partly merged and partly dormant, and Idris 2 stayed small.[^dh-roadmap][^idris-080] Mainstream languages took only fragments (const generics, TypeScript type-level computation, Scala 3 match types).

# The idea
In a dependently typed language a type can mention a value: `Vector n Int`, or "a proof that this list is sorted". By Curry–Howard, programs are proofs and types are propositions, so one language can be both a programming language and a logic. The lineage runs from Martin-Löf type theory (1972) and Coq (1989) through Agda, Idris, Lean (2013) and F*. The promise: bugs become type errors, specifications become machine-checked, and mathematics can be checked by computer. The historical problems: proofs are expensive to write, libraries are fragmented across systems, type checking is slow, and programmers find it unergonomic.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-07 | Mozilla ships HACL* (F*-verified) crypto in Firefox for performance and assurance [^hacl-mozilla] | + |
| E1 | 2020-10 | Lean 4 compiles itself [^demoura-floc26] | + |
| E2 | 2021-06 | Liquid Tensor Experiment: Scholze's challenge theorem checked in Lean [^demoura-floc26] | + |
| E2 | 2021-07 | Idris 2 / QTT paper (ECOOP 2021) [^idris2-qtt] | + |
| E3 | 2022-11 | CPython proposes replacing built-in hashes with HACL* (landed for 3.12) [^cpython-hacl] | + |
| E3 | 2023-07 | Mathlib port to Lean 4 completed; Lean FRO founded [^lean-x-port][^lean-fro-about] | + |
| E3 | 2023-10 | Coq announces its rename to Rocq [^wiki-rocq] | mixed |
| E3 | 2024-07 | AlphaProof: IMO silver standard via Lean [^deepmind-alphaproof] | + |
| E4 | 2025-03-12 | Rocq 9.0, first release under the new name [^rocq-90] | mixed |
| E4 | 2025-04 | DeepSeek-Prover-V2: 88.9% on miniF2F, open weights [^deepseek-prover-v2] | + |
| E4 | 2025-07 | Harmonic Aristotle: gold-level IMO 2025 with formal Lean proofs [^harmonic-aristotle] | + |
| E4 | 2025-09 | Math Inc's Gauss formalizes strong PNT (25k lines) in about 3 weeks [^mathinc-gauss] | + |
| E4 | 2025-10-31 | Idris 2 0.8.0, about two years after 0.7.0 [^idris-080] | − |
| E4 | 2025-11 | AlphaProof methods published in Nature [^nature-alphaproof] | + |
| E4 | 2026-07 | Amazon makes its largest donation to the Lean FRO, citing agent safety [^amazon-lean-fro] | + |
| E4 | 2026-09-04 | Fermat's Last Theorem fully formalized in Lean by AI agents (13.4M lines, 11 days) [^buzzard-flt] | + / mixed |

# Where it succeeded
- **Formal mathematics.** Lean/Mathlib became the de facto standard, with Fields medalists taking part.[^demoura-floc26]
- **AI theorem proving.** A proof kernel is a perfect verifier for reinforcement learning and for checking LLM output. Every major AI-for-math effort of 2024–2026 targeted Lean.[^deepmind-alphaproof][^harmonic-aristotle][^deepseek-prover-v2]
- **High-assurance components.** Verified crypto (HACL* in Firefox and CPython), AWS's Cedar authorization engine and differential-privacy samplers (SampCert), and Microsoft's SymCrypt via Lean/Aeneas.[^hacl-mozilla][^cpython-hacl][^amazon-lean-blog][^demoura-floc26]
- **Funding.** The Lean FRO (2023), $10M from Alex Gerko (2025) and Amazon (2026) moved proof-assistant engineering beyond academic grants.[^lean-fro-about][^wiki-lean][^amazon-lean-fro]

# Where it failed or stalled
- **Mainstream programming.** No top-20 language gained full dependent types. Dependent Haskell exists as a roadmap and a proof-of-concept branch, with some proposals dormant, and its main designer now spends most of his time on committee review.[^dh-roadmap][^hf-eisenberg]
- **Programming-first dependent languages.** Idris 2 is elegant but slow-moving, with no 1.0.[^idris-080]
- **Fragmentation.** Rocq, Isabelle, Agda and Lean libraries do not interoperate. Lean's rise came partly at others' expense; Rocq spent E3–E4 on a rename and tooling consolidation.[^rocq-90][^wiki-rocq]
- **Scale and readability of AI proofs.** The AI-generated FLT proof compiles about 20 times slower than all of Mathlib, and Buzzard notes it adds "essentially nothing" mathematically. Human-curated libraries remain a separate job.[^buzzard-flt]

# Why
1. **One library, one community.** Mathlib's monorepo-plus-CI model created network effects that a better type theory alone could not. Lean won by community engineering more than by logic.[^demoura-floc26]
2. **AI changed the economics.** Writing proofs used to be the bottleneck. LLMs made generating candidate proofs cheap, so the *checker* became the valuable part, and Lean had the largest corpus to train on.[^deepmind-alphaproof][^mathinc-gauss]
3. **Funded stewardship.** The FRO model paid for unglamorous work (compiler, build system, editor) that academic projects such as Idris could not sustain.[^lean-fro-about]
4. **Mainstream languages pay for every feature.** Type inference, error messages, compile time and retraining millions of developers make full dependent types a bad trade for general-purpose languages. They adopted cheap fragments instead.
5. **Verification pays only where bugs are very costly** (crypto, authorization, compilers). That is where industry adopted it.

# Lessons
- Research ideas break out when they gain a killer application (formal mathematics, then AI verification), not when they are pitched as better general-purpose programming.
- In the LLM era, a machine-checkable specification language becomes more valuable: "generate cheaply, verify rigorously."
- Breaking changes (Lean 3→4) are survivable with a funded, coordinated migration.

# Related
- [Lean](/languages/lean.md), [Idris](/languages/idris.md), [Haskell](/languages/haskell.md), [Bend and HVM](/languages/bend-hvm.md) (Bend 2 adds proof-checked "laws")
- [AI and formal verification](/ideas/ai-and-languages/ai-and-formal-verification.md), [Linear and affine types](/ideas/types/linear-and-affine-types.md)
- Events: [Mathlib port to Lean 4 and Lean FRO](/events/2023-07-mathlib-port-to-lean-4-and-lean-fro.md), [AlphaProof IMO silver](/events/2024-07-alphaproof-imo-silver.md), [Rocq 9.0](/events/2025-03-coq-renamed-rocq-9-0.md), [FLT formalized in Lean](/events/2026-09-fermats-last-theorem-formalized-in-lean.md)

[^demoura-floc26]: Leonardo de Moura, FLoC 2026 talk — https://leodemoura.github.io/static/floc26/
[^lean-x-port]: Lean on X, Mathlib port — https://x.com/leanprover/status/1754921156006838459
[^lean-fro-about]: Lean FRO: About — https://lean-lang.org/fro/about/
[^wiki-lean]: Wikipedia: Lean (proof assistant) — https://en.wikipedia.org/wiki/Lean_(proof_assistant)
[^deepmind-alphaproof]: Google DeepMind: AlphaProof IMO silver — https://deepmind.google/blog/ai-solves-imo-problems-at-silver-medal-level/
[^nature-alphaproof]: Nature: Mathematicians put AI model AlphaProof to the test — https://www.nature.com/articles/d41586-025-03585-5
[^harmonic-aristotle]: Harmonic: Aristotle — https://arxiv.org/abs/2510.01346
[^deepseek-prover-v2]: DeepSeek-Prover-V2 — https://arxiv.org/abs/2504.21801
[^mathinc-gauss]: Math, Inc.: Gauss — https://www.math.inc/gauss
[^buzzard-flt]: Kevin Buzzard: FLT — https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/
[^amazon-lean-fro]: Amazon Science: Amazon is investing in the Lean FRO — https://www.amazon.science/news/amazon-is-investing-in-the-lean-focused-research-organization
[^amazon-lean-blog]: Amazon Science: How the Lean language brings math to coding — https://www.amazon.science/blog/how-the-lean-language-brings-math-to-coding-and-coding-to-math
[^rocq-90]: Rocq Prover 9.0.0 release notes — https://rocq-prover.org/releases/9.0.0
[^wiki-rocq]: Wikipedia: Rocq — https://en.wikipedia.org/wiki/Rocq
[^idris2-qtt]: Idris 2: QTT in Practice — https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ECOOP.2021.9
[^idris-080]: Idris 2 version 0.8.0 Released — https://idris-lang.org/idris-2-version-080-released.html
[^hacl-mozilla]: Mozilla Security Blog: formally-verified cryptography in Firefox — https://blog.mozilla.org/security/2020/07/06/performance-improvements-via-formally-verified-cryptography-in-firefox/
[^cpython-hacl]: CPython issue #99108 — https://github.com/python/cpython/issues/99108
[^dh-roadmap]: Serokell: Dependent Haskell Roadmap — https://ghc.serokell.io/dh
[^hf-eisenberg]: Haskell Foundation podcast #28: Richard Eisenberg — https://haskell.foundation/podcast/28/
