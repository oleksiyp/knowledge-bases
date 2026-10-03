---
type: Event
title: Bend launches on HVM2, promising automatic GPU parallelism
description: "Higher Order Company released Bend, a Python-like functional language that runs on the HVM2 interaction-net runtime across CPU and GPU cores with no explicit parallel code. The launch went viral, but critics quickly showed very poor single-core performance."
event_kind: release
date: 2024-05-17
era: E3
impact: mixed
languages: [languages/bend-hvm]
runtimes: []
ideas: [ideas/runtime-performance/interaction-nets-and-automatic-parallelism, ideas/platforms-and-portability/gpu-programming-languages]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: hn-bend
    resource: https://news.ycombinator.com/item?id=40390287
    title: "Hacker News: Bend — a high-level language that runs on GPUs (via HVM2)"
  - id: speedfox-bend
    resource: https://blog.speedfox.co.uk/
    title: "Speedfox blog: Breaking Bend — Benchmarking the HVM (2024-09-03)"
  - id: bend-gh
    resource: https://github.com/HigherOrderCO/Bend
    title: "GitHub: HigherOrderCO/Bend"
  - id: hoc-gist
    resource: https://gist.github.com/VictorTaelin/77fd5a2a8a4a07e1da6157ebca3c7cf1
    title: "Victor Taelin: Higher Order Company — Historical Overview"
---

# What happened
On 17 May 2024 Higher Order Company (Rio de Janeiro) released Bend and the HVM2 runtime. Its claim was that recursive, higher-order code scales near-linearly to 10,000+ threads, including on NVIDIA GPUs.[^hn-bend][^hoc-gist] The HN post reached 1,041 points and the repo passed 20k stars.[^hn-bend][^hoc-gist] Commenters found serious problems: only 24-bit numbers, no FFI, a recursive sum that took 42+ minutes single-threaded versus 4.5 s in PyPy, and a C++ loop beating the RTX 4090 demo. Victor Taelin conceded that the code generation was "embarrassingly bad" and that the claim was about scaling, not raw speed.[^hn-bend] A September 2024 benchmark found Go faster than Bend single- and multi-core.[^speedfox-bend]

# Why it matters
It was the high-water mark of the interaction-net automatic-parallelism idea, and a textbook hype cycle. By September 2026 HOC had replaced it with Bend 2, which compiles to C, CUDA and Metal and does not run Bend 1 or HVM programs.[^bend-gh]

# Related
- [Bend and HVM](/languages/bend-hvm.md), [Interaction nets and automatic parallelism](/ideas/runtime-performance/interaction-nets-and-automatic-parallelism.md)

[^hn-bend]: Hacker News: Bend (via HVM2) — https://news.ycombinator.com/item?id=40390287
[^speedfox-bend]: Breaking Bend: Benchmarking the HVM — https://blog.speedfox.co.uk/
[^bend-gh]: HigherOrderCO/Bend — https://github.com/HigherOrderCO/Bend
[^hoc-gist]: Taelin: HOC historical overview — https://gist.github.com/VictorTaelin/77fd5a2a8a4a07e1da6157ebca3c7cf1
