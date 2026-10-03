---
type: OSS Project
title: vLLM
description: "The de facto open-source LLM serving engine; moved to the PyTorch Foundation in May 2025 and spawned Inferact ($150M seed, $800M valuation, Jan 2026) — thriving on both OSS and business axes."
resource: https://github.com/vllm-project/vllm
tags: [ai-inference, llm-serving, apache-2.0, foundation-hosted, vc-spinout]
domain: ai-inference
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: foundation
steward: PyTorch Foundation (Linux Foundation)
backing_orgs: [organizations/inferact, organizations/pytorch-foundation]
metrics:
  github_stars: { value: 93086, as_of: 2026-10-03 }
  contributors: { value: "2000+", as_of: 2026-01-22 }
  commits_last_3_months: { value: 4074, as_of: 2026-10-03 }
  latest_release: { value: v0.30.0, as_of: 2026-09-22 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: vllm-gh
    resource: https://github.com/vllm-project/vllm
    title: vLLM GitHub repository (stars, releases, commit counts via GitHub API)
    last_modified: 2026-10-03T00:00:00Z
  - id: vllm-blog
    resource: https://vllm.ai/blog
    title: vLLM blog index (V1, hardware plugins, TPU, vllm-metal)
  - id: ptf-vllm
    resource: https://pytorch.org/blog/pytorch-foundation-welcomes-vllm/
    title: "PyTorch Foundation Welcomes vLLM as a Hosted Project (2025-05-06)"
    author: org:pytorch-foundation
  - id: ptf-umbrella
    resource: https://pytorch.org/blog/pt-foundation-expands/
    title: "PyTorch Foundation Expands to an Umbrella Foundation (2025-05)"
    author: org:pytorch-foundation
  - id: sa-inferact
    resource: https://siliconangle.com/2026/01/22/inferact-launches-150m-funding-commercialize-vllm/
    title: "SiliconANGLE: Inferact launches with $150M in funding to commercialize vLLM"
    author: org:siliconangle
  - id: bbg-inferact
    resource: https://www.bloomberg.com/news/articles/2026-01-22/andreessen-backed-inferact-raises-150-million-in-seed-round
    title: "Bloomberg: Inferact Raises $150 Million in Seed Funding Led by Andreessen Horowitz"
    author: org:bloomberg
  - id: tc-radixark
    resource: https://techcrunch.com/2026/01/21/sources-project-sglang-spins-out-as-radixark-with-400m-valuation-as-inference-market-explodes
    title: "TechCrunch: Project SGLang spins out as RadixArk with $400M valuation (also reports vLLM raise talks)"
    author: org:techcrunch
  - id: rh-llmd
    resource: https://www.redhat.com/en/about/press-releases/red-hat-launches-llm-d-community-powering-distributed-gen-ai-inference-scale
    title: "Red Hat launches the llm-d community (2025-05-20)"
    author: org:red-hat
  - id: tgi-gh
    resource: https://github.com/huggingface/text-generation-inference
    title: TGI repository maintenance-mode notice recommending vLLM/SGLang
---

# Summary
vLLM is the clear winner of the open-source LLM serving race over 2024–2026. It grew from ~46.5k stars and 1,000+ contributors when it joined the PyTorch Foundation in May 2025[^ptf-vllm] to 93k stars[^vllm-gh] and 2,000+ contributors by January 2026[^sa-inferact], shipping roughly biweekly releases (v0.30.0 on 2026-09-22)[^vllm-gh]. Its neutral foundation home let competitors (Red Hat/IBM, Google, NVIDIA, AMD, Intel, Huawei) all build on it — llm-d explicitly positions vLLM as "the definitive open standard"[^rh-llmd], and Hugging Face retired its own TGI engine in favour of vLLM/SGLang[^tgi-gh]. Commercially, the core team formed Inferact, which raised a $150M seed at an $800M valuation in January 2026[^sa-inferact][^bbg-inferact]. Verdict: OSS thriving, business growing (Inferact still pre-scale; revenue undisclosed).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-27 | vLLM V1 re-architected engine announced (simpler scheduler, near-zero-overhead prefix caching)[^vllm-blog] | OSS | + |
| W24 | 2025-05-06 | Becomes PyTorch Foundation-hosted project, contributed by UC Berkeley[^ptf-vllm][^ptf-umbrella] | OSS/governance | + |
| W24 | 2025-05-12 | Hardware plugin framework (Ascend, IBM Spyre)[^vllm-blog] | OSS | + |
| W24 | 2025-05-20 | Red Hat, Google, IBM, NVIDIA, CoreWeave launch llm-d on top of vLLM[^rh-llmd] | OSS | + |
| W12 | 2025-10-16 | TPU backend redesign unifying PyTorch and JAX[^vllm-blog] | OSS | + |
| W12 | 2025-11-30 | vLLM-Omni for omni-modal models[^vllm-blog] | OSS | + |
| W12 | 2025-12-11 | HF TGI enters maintenance mode, recommends vLLM/SGLang[^tgi-gh] | OSS | + |
| W9 | 2026-01-22 | Inferact launches with $150M seed (a16z + Lightspeed), $800M valuation[^sa-inferact][^bbg-inferact] | Business | + |
| W3 | 2026-08-06 | Blog reports 25K tokens/s/GPU on Qwen3.5[^vllm-blog] | OSS | + |
| W3 | 2026-09-22 | v0.30.0; vllm-metal brings batched serving to Apple Silicon[^vllm-gh][^vllm-blog] | OSS | + |

# OSS successes
- Neutral governance under the PyTorch Foundation (May 2025) made vLLM the shared substrate for chip vendors and clouds[^ptf-vllm].
- Breadth: NVIDIA, AMD, TPU, Neuron, Intel, Ascend, Spyre and (2026) Apple Silicon backends via plugins[^ptf-vllm][^vllm-blog].
- Extremely high velocity: 4,074 commits in the last three months[^vllm-gh].
- Became the default engine for downstream platforms (llm-d, KServe, Ray Serve, HF Inference Endpoints)[^rh-llmd][^tgi-gh].

# OSS failures / risks
- SGLang now matches or exceeds vLLM commit velocity (4,530 vs 4,074 commits in W3) and wins many frontier-lab deployments; the "one standard engine" is really a duopoly.
- Release cadence (new minor every ~2 weeks) creates upgrade churn for enterprise users.
- Concentration risk: Inferact employs many core maintainers; foundation governance is the main counterweight.

# Business successes
- Inferact: $150M seed at $800M valuation, co-led by Andreessen Horowitz and Lightspeed, with Databricks Ventures and UC Berkeley Chancellor's Fund; founders include Woosuk Kwon and Ion Stoica[^sa-inferact][^bbg-inferact].
- Large ecosystem of vendors monetizing vLLM indirectly (Red Hat AI Inference Server, cloud endpoints)[^rh-llmd].

# Business failures / risks
- Inferact product (managed serverless vLLM) competes with well-funded inference clouds (Baseten, Fireworks, Together) that already run vLLM/SGLang themselves[^tc-radixark].
- Earlier press reported talks at ~$1B valuation; the final $800M figure was lower than reported speculation[^tc-radixark][^sa-inferact].

# By window
## W3
- v0.28–v0.30 releases; Apple Silicon support via vllm-metal (2026-09-22)[^vllm-gh][^vllm-blog].
- 4,074 commits in the quarter — velocity undiminished[^vllm-gh].
## W6
- No notable governance/business events found; steady releases and llm-d v0.8 built on vLLM.
## W9
- Inferact $150M seed (2026-01-22)[^sa-inferact].
## W12
- TPU backend redesign; vLLM-Omni; TGI deprecation channels HF users to vLLM[^vllm-blog][^tgi-gh].
## W24
- V1 engine (Jan 2025), PyTorch Foundation hosting (May 2025), llm-d launch (May 2025)[^vllm-blog][^ptf-vllm][^rh-llmd].

# Lessons
- Academic origin + early foundation donation + permissive license = maximal multi-vendor adoption; the commercial company came after, not before, neutrality.
- Hardware-plugin architecture turned competitors into contributors.
- A foundation-hosted project can still raise a large VC round for a commercial spinout — investors pay for the team, not IP control.

# Related
- [Inferact](/organizations/inferact.md), [PyTorch Foundation](/organizations/pytorch-foundation.md)
- [SGLang](/projects/ai-inference/sglang.md), [llm-d](/projects/ai-inference/llm-d.md), [TGI](/projects/ai-inference/text-generation-inference.md), [Ray](/projects/ai-inference/ray.md)
- [Event: Inferact seed](/events/2026-01-inferact-vllm-seed.md), [Event: PyTorch Foundation umbrella + vLLM](/events/2025-05-pytorch-foundation-umbrella-vllm.md)

[^vllm-gh]: vLLM GitHub repository — https://github.com/vllm-project/vllm
[^vllm-blog]: vLLM blog — https://vllm.ai/blog
[^ptf-vllm]: PyTorch Foundation Welcomes vLLM — https://pytorch.org/blog/pytorch-foundation-welcomes-vllm/
[^ptf-umbrella]: PyTorch Foundation Expands to an Umbrella Foundation — https://pytorch.org/blog/pt-foundation-expands/
[^sa-inferact]: SiliconANGLE, 2026-01-22 — https://siliconangle.com/2026/01/22/inferact-launches-150m-funding-commercialize-vllm/
[^bbg-inferact]: Bloomberg, 2026-01-22 — https://www.bloomberg.com/news/articles/2026-01-22/andreessen-backed-inferact-raises-150-million-in-seed-round
[^tc-radixark]: TechCrunch, 2026-01-21 — https://techcrunch.com/2026/01/21/sources-project-sglang-spins-out-as-radixark-with-400m-valuation-as-inference-market-explodes
[^rh-llmd]: Red Hat press release, 2025-05-20 — https://www.redhat.com/en/about/press-releases/red-hat-launches-llm-d-community-powering-distributed-gen-ai-inference-scale
[^tgi-gh]: TGI repository notice — https://github.com/huggingface/text-generation-inference
