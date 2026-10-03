---
type: OSS Project
title: SGLang
description: "High-performance LLM/VLM serving framework from the LMSYS/Berkeley orbit that became vLLM's main rival in 2025–26 and spun out RadixArk ($400M valuation; $100M Accel-led seed) — thriving."
resource: https://github.com/sgl-project/sglang
tags: [ai-inference, llm-serving, apache-2.0, vc-spinout, community]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2024-)"]
governance: company-led-open-core
steward: sgl-project community / RadixArk
backing_orgs: [organizations/radixark]
metrics:
  github_stars: { value: 36735, as_of: 2026-10-03 }
  commits_last_3_months: { value: 4530, as_of: 2026-10-03 }
  latest_release: { value: v0.5.21, as_of: 2026-10-02 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sglang-gh
    resource: https://github.com/sgl-project/sglang
    title: SGLang GitHub repository (stars, releases, commit counts via GitHub API)
  - id: wiki-sglang
    resource: https://en.wikipedia.org/wiki/SGLang
    title: "Wikipedia: SGLang"
  - id: tc-radixark
    resource: https://techcrunch.com/2026/01/21/sources-project-sglang-spins-out-as-radixark-with-400m-valuation-as-inference-market-explodes
    title: "TechCrunch: Sources: Project SGLang spins out as RadixArk with $400M valuation"
    author: org:techcrunch
  - id: tfn-radixark
    resource: https://techfundingnews.com/radixark-sglang-spinoff-400m-valuation-ai-inference/
    title: "Tech Funding News: From Berkeley lab to $400M startup: SGLang becomes RadixArk"
  - id: bw-radixark
    resource: https://www.businesswire.com/news/home/20260505077157/en/RadixArk-Launches-with-$100-Million-in-Seed-Funding-Led-by-Accel-to-Grow-SGLang-and-Democratize-Frontier-AI-Infrastructure
    title: "BusinessWire: RadixArk Launches with $100 Million in Seed Funding Led by Accel"
  - id: tgi-gh
    resource: https://github.com/huggingface/text-generation-inference
    title: TGI repository maintenance-mode notice recommending vLLM/SGLang
  - id: radixark-x
    resource: https://x.com/radixark/status/2051648113014882586
    title: "RadixArk on X: launch with $100M seed at a $400M valuation (2026-05-05)"
    author: org:radixark
  - id: tfn-radixark-seed
    resource: https://techfundingnews.com/radixark-100m-seed-accel-spark-nvidia-sglang-ai-inference/
    title: "Tech Funding News: Nvidia and Accel pour $100M into RadixArk (2026-05)"
---

# Summary
SGLang went from a NeurIPS 2024 research artifact (introduced January 2024 by Stanford/Berkeley/TAMU/SJTU researchers)[^wiki-sglang] to the engine of choice for many frontier and coding labs (xAI, Cursor)[^tc-radixark]. By October 2026 it had 36.7k stars and actually out-committed vLLM in the last quarter (4,530 commits vs 4,074)[^sglang-gh]. Its maintainers spun out RadixArk — reported in January 2026 at a ~$400M valuation[^tc-radixark] and formally launched on 5 May 2026 with a $100M seed at a $400M valuation, led by Accel and co-led by Spark Capital, with NVIDIA (NVentures), AMD, MediaTek and Databricks investing[^bw-radixark][^radixark-x][^tfn-radixark-seed]. (Pass 2: the January "$400M valuation" report and the May "$100M seed" are the same round — $100M at $400M.) Verdict: OSS thriving; business early but well capitalised.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08 | RadixArk first publicly surfaced (per later reporting)[^tfn-radixark] | Business | + |
| W12 | 2025-12-11 | HF TGI enters maintenance mode, recommending vLLM and SGLang[^tgi-gh] | OSS | + |
| W9 | 2026-01-21 | TechCrunch: SGLang spins out as RadixArk at ~$400M valuation, Accel leading; Intel CEO Lip-Bu Tan angel[^tc-radixark] | Business | + |
| W6 | 2026-05-05 | RadixArk launches with $100M seed at $400M valuation (Accel lead, Spark co-lead; NVIDIA, AMD, MediaTek, Databricks participate)[^bw-radixark][^radixark-x] | Business | + |
| W3 | 2026-07 → 2026-10 | 4,530 commits in quarter; v0.5.19–v0.5.21[^sglang-gh] | OSS | + |

# OSS successes
- Highest commit velocity in the domain over W3[^sglang-gh].
- Chosen by labs needing large-scale MoE/expert-parallel serving and RL rollouts (xAI, Cursor cited)[^tc-radixark].
- Recommended alongside vLLM as TGI's successor by Hugging Face[^tgi-gh].

# OSS failures / risks
- Not foundation-hosted (unlike vLLM); trademark/governance sit with the project/company, a latent neutrality risk as RadixArk commercialises.
- Still pre-1.0 versioning (v0.5.x) after nearly 3 years[^sglang-gh].

# Business successes
- RadixArk: $100M seed at a $400M valuation[^radixark-x]; founders Ying Sheng (ex-xAI) and Banghua Zhu; angels include Lip-Bu Tan, Hock Tan, John Schulman, Soumith Chintala, Thomas Wolf[^bw-radixark][^tc-radixark].
- Competing chipmakers co-investing signals SGLang is seen as neutral infrastructure[^bw-radixark].

# Business failures / risks
- Revenue undisclosed; hosted-service plan competes with customers' own inference clouds[^tfn-radixark].
- Direct, overlapping competition with Inferact (vLLM) — both Berkeley Sky Lab lineage.

# By window
## W3
- Record commit velocity; continuous patch releases[^sglang-gh].
## W6
- RadixArk $100M seed (2026-05-05)[^bw-radixark].
## W9
- RadixArk spinout reported at $400M valuation (2026-01-21)[^tc-radixark].
## W12
- TGI deprecation names SGLang a preferred successor[^tgi-gh].
## W24
- Rapid adoption for DeepSeek-style MoE serving; RadixArk first surfaces Aug 2025[^tfn-radixark].

# Lessons
- In fast-moving infra, raw performance on the newest model architectures can let a second-mover catch the incumbent within ~18 months.
- Chip vendors now invest in neutral software layers to avoid CUDA-style lock-in by others.

# Related
- [RadixArk](/organizations/radixark.md), [vLLM](/projects/ai-inference/vllm.md), [Inferact](/organizations/inferact.md)
- [Event: RadixArk spinout](/events/2026-01-radixark-sglang-spinout.md)

[^sglang-gh]: SGLang GitHub — https://github.com/sgl-project/sglang
[^wiki-sglang]: Wikipedia: SGLang — https://en.wikipedia.org/wiki/SGLang
[^tc-radixark]: TechCrunch, 2026-01-21 — https://techcrunch.com/2026/01/21/sources-project-sglang-spins-out-as-radixark-with-400m-valuation-as-inference-market-explodes
[^tfn-radixark]: Tech Funding News — https://techfundingnews.com/radixark-sglang-spinoff-400m-valuation-ai-inference/
[^bw-radixark]: BusinessWire, 2026-05-05 — https://www.businesswire.com/news/home/20260505077157/en/RadixArk-Launches-with-$100-Million-in-Seed-Funding-Led-by-Accel-to-Grow-SGLang-and-Democratize-Frontier-AI-Infrastructure
[^tgi-gh]: TGI repository — https://github.com/huggingface/text-generation-inference
[^radixark-x]: RadixArk announcement on X, 2026-05-05.
[^tfn-radixark-seed]: Tech Funding News, May 2026.
