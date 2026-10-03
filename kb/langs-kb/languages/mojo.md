---
type: Language
title: Mojo
description: "Mojo launched in 2023 as a 'Python superset' with claims of 35,000–68,000x speedups. By 2026 it had become something else: a systems/GPU kernel language with Python-like syntax. The superset goal was quietly dropped, Qualcomm bought Modular for about $3–4B (closed July 2026), and Mojo 1.0 shipped fully open source in August 2026. Commercially a success for its company; as a language, still unproven."
tags: [mojo, modular, python-superset, gpu, mlir, ai, chris-lattner, qualcomm]
paradigms: [systems, multi-paradigm, imperative]
typing: static
memory_model: ownership
first_released: 2023
steward: Modular (a Qualcomm company since 2026-07-29)
governance: single-vendor
trajectory: rising
ideas: [ideas/types/python-superset-languages, ideas/platforms-and-portability/gpu-programming-languages, ideas/runtime-performance/ml-compilers-and-mlir, ideas/ai-and-languages/languages-designed-for-llms, ideas/memory-safety/ownership-and-borrowing]
runtimes: [runtimes/mlir, runtimes/llvm]
adoption_signals:
  so_survey_usage_pct: { value: 0.4, as_of: 2025 }
era_momentum: { E1: n/a, E2: n/a, E3: up, E4: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: reg-mojo-launch
    resource: https://www.theregister.com/2023/05/05/modular_struts_its_mojo_a/
    title: "The Register: Modular reveals Mojo, Python superset with C-level speed (May 2023)"
  - id: mojo-68000
    resource: https://github.com/modular/modular/discussions/843
    title: "modular/modular discussion #843: on the '68,000x faster than Python' blog posts"
  - id: modular-100m
    resource: https://venturebeat.com/ai/modular-looks-to-boost-ai-mojo-with-100m-funding-raise
    title: "VentureBeat: Modular looks to boost AI Mojo with $100M funding raise (Aug 2023)"
  - id: mojo-wiki
    resource: https://en.wikipedia.org/wiki/Mojo_(programming_language)
    title: "Wikipedia: Mojo (programming language)"
  - id: mojo-vision
    resource: https://forum.modular.com/t/mojo-vision-document-and-roadmap/2187
    title: "Modular forum: Mojo Vision Document and Roadmap (2025-08-26)"
    author: org:modular
  - id: sacra-modular
    resource: https://sacra.com/c/modular/
    title: "Sacra: Modular valuation and funding ($250M Series C, Sept 2025, $1.6B valuation)"
  - id: qcom-close
    resource: https://www.modular.com/blog/qualcomm-completes-acquisition-of-modular
    title: "Modular: Qualcomm Completes Acquisition of Modular (2026-07-29)"
    author: org:modular
  - id: storagereview-qcom
    resource: https://www.storagereview.com/news/qualcomm-closes-modular-deal-buying-a-cuda-independent-path-for-its-data-center-silicon
    title: "StorageReview: Qualcomm Closes Modular Deal (announced June 24, closed July 29, 2026)"
  - id: techzine-mojo1
    resource: https://www.techzine.eu/news/devops/143570/mojo-programming-language-reaches-version-1-0/
    title: "Techzine: Mojo programming language reaches version 1.0 (Aug 2026)"
  - id: mojo-oss
    resource: https://www.modular.com/blog/mojo-open-source
    title: "Modular: Mojo is now open source! (2026-08-18; compiler under Apache 2.0 with LLVM exceptions)"
    author: org:modular
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
    author: org:stack-overflow
---

# Summary
Mojo is the decade's clearest case of **a language whose marketing and reality diverged, and whose company still won**. Chris Lattner's Modular announced it on 2023-05-02 as a "superset of Python" with C-level speed. It advertised a 35,000x speedup, later 68,000x, on a Mandelbrot benchmark against unoptimised CPython.[^reg-mojo-launch][^mojo-68000] Modular raised $100M in August 2023 and $250M in September 2025, at a $1.6B valuation.[^modular-100m][^sacra-modular]

By August 2025 Modular's vision document said Mojo "may or may not evolve into a full superset of Python, and it's okay if it doesn't". In practice it had become a statically typed, ownership-based language for CPU/GPU kernels, built on MLIR.[^mojo-vision] Qualcomm announced the acquisition of Modular on 2026-06-24 and closed it on 2026-07-29. Reported deal value is just under $4B, or about $3.1B at closing share price.[^storagereview-qcom][^qcom-close] Mojo 1.0 shipped around 2026-08-11. The compiler was open-sourced under Apache 2.0 with LLVM exceptions on 2026-08-18.[^techzine-mojo1][^mojo-oss]

Developer adoption is still tiny: 0.4% of Stack Overflow respondents in 2025.[^so-2025]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E3 | 2023-05-02 | Mojo announced as a Python superset; 35,000x claim [^reg-mojo-launch] | + (hype) |
| E3 | 2023-08-24 | Modular raises $100M (General Catalyst) [^modular-100m] | + |
| E3 | 2023-09 | Local SDK; "68,000x" blog series draws scepticism [^mojo-68000] | mixed |
| E3 | 2024-03 | Standard library open-sourced [^mojo-wiki] | + |
| E4 | 2025-08-26 | Vision doc: Python superset no longer a commitment [^mojo-vision] | − (for superset idea) |
| E4 | 2025-09 | $250M Series C at $1.6B valuation [^sacra-modular] | + |
| E4 | 2026-07-29 | Qualcomm completes acquisition of Modular [^qcom-close][^storagereview-qcom] | + / mixed |
| E4 | 2026-08 | Mojo 1.0; compiler open-sourced (Apache 2.0 + LLVM exceptions) [^techzine-mojo1][^mojo-oss] | + |

# Ideas it bet on
| Idea | Outcome for Mojo |
|---|---|
| [Python-superset languages](/ideas/types/python-superset-languages.md) | abandoned as a goal; now "Python-like syntax plus interop" |
| [GPU programming languages](/ideas/platforms-and-portability/gpu-programming-languages.md) | the actual product: portable kernels as a CUDA alternative |
| [ML compilers and MLIR](/ideas/runtime-performance/ml-compilers-and-mlir.md) | central: Mojo is a front-end for MLIR |
| [Languages designed for LLMs](/ideas/ai-and-languages/languages-designed-for-llms.md) | marketed as an "AI language"; relies on AI tools for Python→Mojo migration [^mojo-vision] |
| [Ownership and borrowing](/ideas/memory-safety/ownership-and-borrowing.md) | adopted, with value semantics |

# What succeeded
- **The business thesis.** A hardware-portable AI stack (MAX + Mojo) that is not CUDA was worth billions to a chip vendor that needed exactly that.[^storagereview-qcom]
- **Kernel performance.** For GPU and SIMD kernels, Mojo gave Python-familiar syntax with explicit control. That is what Modular's own inference stack uses.
- **Delivering on open source.** After years of criticism for being closed, the compiler shipped under a permissive licence.[^mojo-oss]

# What failed or stalled
- **"Python superset".** Full Python semantics (dynamic typing, C extensions, the CPython object model) do not fit a static, ownership-based compiler. The goal was dropped within about two years.[^mojo-vision]
- **Benchmark marketing.** The 35,000x and 68,000x figures compared hand-vectorised Mojo against pure CPython. They hurt credibility with the Python community.[^mojo-68000]
- **Grassroots adoption.** A closed compiler for three years, frequent breaking changes and a narrow domain kept usage under 1%.[^so-2025]

# By era
## E3
Launch hype, funding, closed SDK, standard library opened.
## E4
Pivot to GPU kernels, superset goal dropped, $250M round, Qualcomm acquisition, 1.0 and full open source.

# Lessons
- "Superset of X" claims for a language with different execution semantics rarely survive implementation.
- A language can succeed as the strategic asset of its company before it succeeds with developers. Whether Mojo makes the second step under Qualcomm is the open question for E5.

# Related
- [Python](/languages/python.md) · [Julia](/languages/julia.md) · [CUDA](/languages/cuda.md) · [Triton](/languages/triton.md) · [MLIR](/runtimes/mlir.md)
- [Mojo announced](/events/2023-05-mojo-announced.md) · [Qualcomm acquires Modular](/events/2026-07-qualcomm-acquires-modular.md)

[^reg-mojo-launch]: The Register: Modular reveals Mojo — https://www.theregister.com/2023/05/05/modular_struts_its_mojo_a/
[^mojo-68000]: modular/modular discussion #843 — https://github.com/modular/modular/discussions/843
[^modular-100m]: VentureBeat: Modular $100M funding — https://venturebeat.com/ai/modular-looks-to-boost-ai-mojo-with-100m-funding-raise
[^mojo-wiki]: Wikipedia: Mojo (programming language) — https://en.wikipedia.org/wiki/Mojo_(programming_language)
[^mojo-vision]: Modular forum: Mojo Vision Document and Roadmap — https://forum.modular.com/t/mojo-vision-document-and-roadmap/2187
[^sacra-modular]: Sacra: Modular — https://sacra.com/c/modular/
[^qcom-close]: Modular: Qualcomm Completes Acquisition of Modular — https://www.modular.com/blog/qualcomm-completes-acquisition-of-modular
[^storagereview-qcom]: StorageReview: Qualcomm Closes Modular Deal — https://www.storagereview.com/news/qualcomm-closes-modular-deal-buying-a-cuda-independent-path-for-its-data-center-silicon
[^techzine-mojo1]: Techzine: Mojo reaches version 1.0 — https://www.techzine.eu/news/devops/143570/mojo-programming-language-reaches-version-1-0/
[^mojo-oss]: Modular: Mojo is now open source! — https://www.modular.com/blog/mojo-open-source
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
