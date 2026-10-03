---
type: Language
title: Bend and HVM
description: "Higher Order Company's Bend, a Python-like language that parallelized automatically on CPUs and GPUs by running on HVM2, a runtime for interaction nets. It went viral at launch in May 2024, was then criticized for poor single-core speed, and in September 2026 was replaced by an incompatible Bend 2 that compiles to C, CUDA and Metal and is pitched as a proof-checked language for AI-written code. HVM no longer carries Bend's programs."
tags: [interaction-nets, automatic-parallelism, gpu, hype-cycle, startup, ai-first]
paradigms: [functional, parallel]
typing: static
memory_model: mixed
first_released: 2024
steward: Higher Order Company (HOC), Rio de Janeiro; creator Victor Taelin
governance: single-vendor
trajectory: niche
ideas: [ideas/runtime-performance/interaction-nets-and-automatic-parallelism, ideas/ai-and-languages/languages-designed-for-llms]
runtimes: []
adoption_signals:
  github_stars_bend: { value: 23298, as_of: 2026-10-03 }
  github_stars_hvm: { value: 11345, as_of: 2026-10-03 }
  hn_launch_points: { value: 1041, as_of: 2024-05 }
era_momentum: { E1: n/a, E2: flat, E3: up, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: bend-gh
    resource: https://github.com/HigherOrderCO/Bend
    title: "GitHub: HigherOrderCO/Bend (README for Bend 2; stars via GitHub API 2026-10-03)"
  - id: hvm-gh
    resource: https://github.com/HigherOrderCO/HVM
    title: "GitHub: HigherOrderCO/HVM"
  - id: hn-bend
    resource: https://news.ycombinator.com/item?id=40390287
    title: "Hacker News: Bend — a high-level language that runs on GPUs (via HVM2), 2024-05-17"
  - id: speedfox-bend
    resource: https://blog.speedfox.co.uk/
    title: "Speedfox blog: Breaking Bend — Benchmarking the HVM (2024-09-03)"
  - id: hoc-gist
    resource: https://gist.github.com/VictorTaelin/77fd5a2a8a4a07e1da6157ebca3c7cf1
    title: "Victor Taelin: Higher Order Company — Historical Overview (gist)"
  - id: taelin-hvm3
    resource: https://x.com/VictorTaelin/status/1856862695028339065
    title: "Taelin (X): HVM3 compiler up to 2400 MIPS single-core (2024-11)"
  - id: taelin-postseed
    resource: https://x.com/VictorTaelin/status/1885328571410853951
    title: "Taelin (X): HOC post-seed to build SupGen / ARC-AGI dataset (2025)"
  - id: taelin-hvm4
    resource: https://x.com/VictorTaelin/status/1985320306001477783
    title: "Taelin (X): HVM4 compiles Interaction Calculus to zero-overhead machine code; HVM2 always interpreted"
  - id: akita-bend2
    resource: https://akitaonrails.com/en/2026/09/19/new-ai-language-just-released-bend-2/
    title: "AkitaOnRails: New AI-focused language just released — Bend 2 (2026-09-19)"
---

# Summary
Bend was the period's most visible attempt to deliver **automatic parallelism from interaction nets**: write ordinary recursive code and let the HVM2 runtime spread it over thousands of GPU threads with near-linear speedup.[^bend-gh][^hvm-gh][^hoc-gist] Launched on 2024-05-17, it reached 1,041 points on Hacker News and tens of thousands of GitHub stars within weeks.[^hn-bend][^hoc-gist] Critics quickly pointed out that the scaling story came from a very slow baseline. There were only 24-bit numbers and no FFI; a recursive sum that PyPy ran in 4.5 s took more than 42 minutes single-threaded; and an optimized C++ loop beat the GPU demo. Taelin acknowledged the "embarrassingly bad" code generation.[^hn-bend] Independent benchmarks found Go faster than Bend even with Bend on many cores.[^speedfox-bend] HOC moved through HVM3 (a compiled backend) and HVM4. In 2025 it raised money for SupGen program synthesis aimed at ARC-AGI.[^taelin-hvm3][^taelin-hvm4][^taelin-postseed] In September 2026 it shipped **Bend 2**, a new language. "Bend 1 programs and HVM do not carry over." It compiles to C, CUDA, Metal and JavaScript, and its pitch is proof-checked "laws" that constrain AI-written code.[^bend-gh][^akita-bend2] Verdict: the interaction-net runtime as a general platform for parallel code has **failed or been abandoned** for now. The brand survived by pivoting to a conventional compiler and an AI-safety angle.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022 | HVM1 (Rust, lazy interaction-net runtime): about 30% of Haskell speed, buggy parallelism [^hoc-gist] | mixed |
| E3 | 2024-05-17 | Bend plus HVM2 launch; viral, 1,041 HN points [^hn-bend] | + |
| E3 | 2024-09-03 | "Breaking Bend": Go beats Bend single- and multi-core on determinant benchmark [^speedfox-bend] | − |
| E4 | 2024-11 | HVM3 compiler preview: "up to 42x faster than Bend" single-thread [^taelin-hvm3] | mixed |
| E4 | 2025 | Post-seed raise to build SupGen dataset and attempt ARC-AGI (focus moves to AI) [^taelin-postseed] | mixed |
| E4 | 2025-11 | HVM4 compiles Interaction Calculus functions to machine code; "HVM2 … always relied on an interpreter" [^taelin-hvm4] | mixed |
| E4 | 2026-09-17 | Bend 2 released: new language, compiles to C/CUDA/Metal/JS, proof-checked LAWS; Bend 1 and HVM do not carry over [^bend-gh][^akita-bend2] | mixed |

# Ideas it bet on
| Idea | Outcome for Bend/HVM |
|---|---|
| [Interaction nets and automatic parallelism](/ideas/runtime-performance/interaction-nets-and-automatic-parallelism.md) | parallel scaling shown; absolute performance poor; dropped as Bend's execution model in Bend 2 |
| Closures and unrestricted recursion on GPUs | genuine novelty, acknowledged even by critics [^hn-bend] |
| Optimal (lazy) beta reduction | still research; no practical win shown |
| [AI-first language with proofs](/ideas/ai-and-languages/languages-designed-for-llms.md) | brand new in Bend 2; unproven [^akita-bend2] |

# What succeeded
- A correct massively parallel interaction-net evaluator on GPUs, which had not been shown before at this level.[^hoc-gist]
- Very effective attention-getting: the launch reached more than 20k stars and a broad audience, which helped HOC raise money.[^hoc-gist]
- Bend 2's early numbers suggest close to C on CPU for some programs and large GPU speedups (Game of Life: 7.8 s vs C's 6.78 s on CPU) — from a friendly reviewer, unverified independently.[^akita-bend2]

# What failed or stalled
- **Single-core performance.** Interpretation overhead and linked-list data meant parallel speedups started far below sequential C, Go or even PyPy.[^hn-bend][^speedfox-bend]
- **Missing basics.** 24-bit integers, no FFI, and limited memory (2 GB in Bend 1).[^hn-bend][^akita-bend2]
- **Continuity.** Bend 1 to Bend 2 is a clean break. Users of HVM2-era Bend were left behind.[^bend-gh]
- **Focus drift.** Company priorities moved from the runtime to program synthesis (SupGen, ARC-AGI) and AI-safety positioning.[^taelin-postseed]

# By era
## E1
Not yet public; Taelin worked on optimal reduction and the Formality/Kind languages.[^hoc-gist]
## E2
HVM1 released; the company was formed and raised its seed round.[^hoc-gist]
## E3
The Bend launch and the backlash over performance.[^hn-bend][^speedfox-bend]
## E4
HVM3/HVM4 compilers, the move toward AI and synthesis, then Bend 2 replaced the HVM-based design.[^taelin-hvm4][^bend-gh]

# Lessons
- "Linear speedup with cores" means little if a single core is 100x slower than C. Benchmarks against strong baselines arrive within days.
- A runtime idea marketed as a language needs the boring parts (numbers, FFI, arrays) on day one.
- Pivoting a language brand to an AI story can keep a startup alive, but it resets user trust.

# Related
- [Interaction nets and automatic parallelism](/ideas/runtime-performance/interaction-nets-and-automatic-parallelism.md)
- [GPU programming languages](/ideas/platforms-and-portability/gpu-programming-languages.md), [Futhark and array languages](/languages/futhark-and-array-languages.md), [Mojo](/languages/mojo.md)
- Event: [Bend launches on HVM2](/events/2024-05-bend-launch-hvm2.md)

[^bend-gh]: HigherOrderCO/Bend README — https://github.com/HigherOrderCO/Bend
[^hvm-gh]: HigherOrderCO/HVM — https://github.com/HigherOrderCO/HVM
[^hn-bend]: Hacker News: Bend (via HVM2) — https://news.ycombinator.com/item?id=40390287
[^speedfox-bend]: Breaking Bend: Benchmarking the HVM — https://blog.speedfox.co.uk/
[^hoc-gist]: Victor Taelin: Higher Order Company historical overview — https://gist.github.com/VictorTaelin/77fd5a2a8a4a07e1da6157ebca3c7cf1
[^taelin-hvm3]: Taelin on X, HVM3 compiler — https://x.com/VictorTaelin/status/1856862695028339065
[^taelin-postseed]: Taelin on X, HOC post-seed — https://x.com/VictorTaelin/status/1885328571410853951
[^taelin-hvm4]: Taelin on X, HVM4 compiler — https://x.com/VictorTaelin/status/1985320306001477783
[^akita-bend2]: AkitaOnRails: Bend 2 — https://akitaonrails.com/en/2026/09/19/new-ai-language-just-released-bend-2/
