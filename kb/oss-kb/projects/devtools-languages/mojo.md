---
type: OSS Project
title: Mojo
description: Modular's Python-superset language for AI/GPU programming; went from proprietary compiler to Mojo 1.0 (Aug 2026) and an Apache-2.0 open-sourced compiler (2026-08-18), after a $250M round at $1.6B (Sept 2025) and Qualcomm's ~$3.1B acquisition of Modular (closed July 2026).
resource: https://github.com/modular/modular
tags: [programming-language, ai-compute, gpu, apache-2.0, vc-backed, open-sourced]
domain: devtools-languages
license: Apache-2.0 WITH LLVM-exception
license_history: ["Proprietary compiler + Apache-2.0 stdlib (2024-03)", "Apache-2.0 WITH LLVM-exception compiler (2026-08-18)"]
governance: company-led-open-core
steward: Modular Inc. (a Qualcomm company since 2026-07)
backing_orgs: [organizations/modular]
metrics:
  github_stars: { value: 29921, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: modular-gh
    resource: https://github.com/modular/modular
    title: Modular GitHub repository (stars via GitHub API, 2026-10-03)
  - id: modular-250m
    resource: https://www.modular.com/blog/modular-raises-250m-to-scale-ais-unified-compute-layer
    title: "Modular blog: Modular raises $250M to scale AI's unified compute layer (2025-09-24)"
    author: org:modular
  - id: modular-263
    resource: https://www.modular.com/blog/modular-26-3-mojo-1-0-beta-max-video-gen-and-more
    title: "Modular blog: Modular 26.3 — Mojo 1.0 Beta, mojolang.org (2026-05-07)"
    author: org:modular
  - id: mojo-1-forum
    resource: https://forum.modular.com/t/mojo-1-0-is-here/3391
    title: "Modular forum: Mojo 1.0 is here! (2026-08-11)"
    author: org:modular
  - id: mojo-oss
    resource: https://www.modular.com/blog/mojo-open-source
    title: "Modular blog: Mojo is now open source! (2026-08-18)"
    author: org:modular
  - id: modular-266
    resource: https://www.modular.com/blog/modular-26-6-open-compiler-contributions-audio-generation-and-expanded-model-support
    title: "Modular blog: Modular 26.6 — open compiler contributions, Mojo 1.1 (2026-09-17)"
    author: org:modular
  - id: gv-qcom
    resource: https://www.gv.com/news/modular-qualcomm-inference
    title: "GV: Modular and Qualcomm — The Next Chapter (2026-06-25)"
  - id: modular-qcom-close
    resource: https://www.modular.com/blog/qualcomm-completes-acquisition-of-modular
    title: "Modular blog: Qualcomm Completes Acquisition of Modular (2026-07-29)"
    author: org:modular
  - id: mfgdive-qcom
    resource: https://www.manufacturingdive.com/news/qualcomm-acquires-modular-AI-data-centers-semiconductors/823703/
    title: "Manufacturing Dive: Qualcomm Technologies agrees to acquire Modular for $3.9B"
  - id: qcom-10q
    resource: https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
    title: "Qualcomm Form 10-Q (Modular acquisition note)"
---

# Summary
Mojo is one of the few cases in this period of a language moving *toward* open source. Modular open-sourced the standard library under Apache-2.0 in 2024, shipped the Mojo 1.0 beta with mojolang.org on 2026-05-07, declared Mojo 1.0 on 2026-08-11, and **open-sourced the compiler** under Apache-2.0 with LLVM exceptions on 2026-08-18; with Mojo 1.1 (2026-09-17) the compiler began accepting external contributions.[^modular-263][^mojo-1-forum][^mojo-oss][^modular-266] The company raised $250M led by Thomas Tull's US Innovative Technology Fund at a $1.6B valuation on 2025-09-24 ($380M total since 2022), then agreed on 2026-06-25 to be acquired by Qualcomm (reported at $3.9B at signing); the deal closed and was announced on 2026-07-29, valued at ~$3.1B based on Qualcomm's share price at closing (~18M shares).[^modular-250m][^gv-qcom][^mfgdive-qcom][^modular-qcom-close][^qcom-10q] Verdict: OSS growing (credibility now that the compiler is open), business acquired; adoption beyond Modular's own MAX stack is still unproven.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-24 | Modular raises $250M Series C at $1.6B [^modular-250m] | Business | + |
| W6 | 2026-05-07 | Mojo 1.0.0 beta 1 (Modular 26.3); mojolang.org launched [^modular-263] | OSS | + |
| W6 | 2026-06-25 | Modular signs definitive agreement to be acquired by Qualcomm [^gv-qcom] | Business | + / mixed |
| W3 | 2026-07-29 | Qualcomm completes acquisition (~$3.1B at closing share price, mostly stock); Mojo/MAX continue as brands; Lattner becomes Qualcomm EVP [^modular-qcom-close][^qcom-10q] | Business | + |
| W3 | 2026-08-11 | Mojo 1.0 (Modular 26.5) with 1.x compatibility commitment [^mojo-1-forum] | OSS | + |
| W3 | 2026-08-18 | Compiler open-sourced (Apache-2.0 w/ LLVM exception) at ModCon [^mojo-oss] | OSS / license | + |
| W3 | 2026-09-17 | Mojo 1.1 (Modular 26.6); compiler accepts outside contributions; issues moved to public GitHub [^modular-266] | OSS | + |

# OSS successes
- Full open-source compiler removes the biggest adoption objection.[^mojo-oss]
- Stable 1.0 language API after three years; ~200 stdlib contributors and 1,000+ issue filers since 2024.[^mojo-1-forum]
- Compiler opened to outside contributions within a month of release.[^modular-266]

# OSS failures / risks
- Single-vendor governance, now under a chipmaker parent; ecosystem small (30k stars on the combined Modular repo).[^modular-gh][^gv-qcom]

# Business successes
- Large late-stage round in a crowded AI-infrastructure market, then a ~2x-valuation exit to Qualcomm within a year.[^modular-250m][^qcom-10q]

# Business failures / risks
- Revenue figures never disclosed; the language's direction may now track Qualcomm's hardware priorities.

# By window
## W3
- Qualcomm deal closes (announced 2026-07-29); Mojo 1.0 (2026-08-11); compiler open-sourced (2026-08-18); Mojo 1.1 opens compiler to contributions (2026-09-17).[^qcom-10q][^mojo-1-forum][^mojo-oss][^modular-266]
## W6
- 1.0 beta 1 and mojolang.org (2026-05-07); Qualcomm acquisition agreement (2026-06-25).[^modular-263][^gv-qcom]
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- $250M raise at $1.6B (2025-09-24).[^modular-250m]

# Lessons
- A language with a closed compiler struggles to win trust; opening it at 1.0 is the standard path (cf. Swift).
- Hardware-portable AI software is worth billions to non-NVIDIA silicon vendors; open-sourcing the compiler right after the acquisition signals the buyer wants ecosystem reach over licensing control.

# Related
- [Modular](/organizations/modular.md)
- [Mojo & MAX (AI inference view)](/projects/ai-inference/mojo-max.md)
- [Qualcomm acquires Modular](/events/2026-06-qualcomm-acquires-modular.md)
- [Mojo 1.0 and open-source compiler](/events/2026-08-mojo-compiler-open-sourced.md)
- [CPython](/projects/devtools-languages/cpython.md), [Swift](/projects/devtools-languages/swift.md)

[^modular-gh]: Modular GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/modular/modular
[^modular-250m]: Modular blog: Modular raises $250M — https://www.modular.com/blog/modular-raises-250m-to-scale-ais-unified-compute-layer
[^modular-263]: Modular blog: Modular 26.3 — https://www.modular.com/blog/modular-26-3-mojo-1-0-beta-max-video-gen-and-more
[^mojo-1-forum]: Modular forum: Mojo 1.0 is here! — https://forum.modular.com/t/mojo-1-0-is-here/3391
[^mojo-oss]: Modular blog: Mojo is now open source! — https://www.modular.com/blog/mojo-open-source
[^modular-266]: Modular blog: Modular 26.6 — https://www.modular.com/blog/modular-26-6-open-compiler-contributions-audio-generation-and-expanded-model-support
[^gv-qcom]: GV: Modular and Qualcomm — The Next Chapter — https://www.gv.com/news/modular-qualcomm-inference
[^modular-qcom-close]: Modular blog: Qualcomm Completes Acquisition of Modular — https://www.modular.com/blog/qualcomm-completes-acquisition-of-modular
[^mfgdive-qcom]: Manufacturing Dive: Qualcomm agrees to acquire Modular for $3.9B — https://www.manufacturingdive.com/news/qualcomm-acquires-modular-AI-data-centers-semiconductors/823703/
[^qcom-10q]: Qualcomm Form 10-Q (Modular acquisition note) — https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
