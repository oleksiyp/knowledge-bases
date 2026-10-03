---
type: Domain Review
title: "AI Inference, Training Frameworks & Local Runtimes: 2-year review"
description: "Oct 2024 – Oct 2026: vLLM and SGLang won the serving war and became VC-backed companies; local AI consolidated around llama.cpp (now under Hugging Face, itself being bought by NVIDIA) and Ollama; foundations absorbed key projects while their commercial stewards were acquired by compute owners (Qualcomm–Modular, Nscale–Anyscale, Cloudflare–Replicate)."
domain: ai-inference
tags: [ai-inference, llm-serving, local-ai, training, mlops, consolidation, foundations, vc-spinouts]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ptf-vllm
    resource: https://pytorch.org/blog/pytorch-foundation-welcomes-vllm/
    title: PyTorch Foundation Welcomes vLLM (2025-05-06)
  - id: ptf-ray
    resource: https://www.prnewswire.com/news-releases/pytorch-foundation-welcomes-ray-to-deliver-a-unified-open-source-ai-compute-stack-302591184.html
    title: PyTorch Foundation Welcomes Ray (2025-10-22)
  - id: sa-inferact
    resource: https://siliconangle.com/2026/01/22/inferact-launches-150m-funding-commercialize-vllm/
    title: "SiliconANGLE: Inferact launches with $150M"
  - id: tc-radixark
    resource: https://techcrunch.com/2026/01/21/sources-project-sglang-spins-out-as-radixark-with-400m-valuation-as-inference-market-explodes
    title: "TechCrunch: SGLang spins out as RadixArk"
  - id: bw-radixark
    resource: https://www.businesswire.com/news/home/20260505077157/en/RadixArk-Launches-with-$100-Million-in-Seed-Funding-Led-by-Accel-to-Grow-SGLang-and-Democratize-Frontier-AI-Infrastructure
    title: "BusinessWire: RadixArk $100M seed"
  - id: hf-ggml
    resource: https://huggingface.co/blog/ggml-joins-hf
    title: "HF blog: GGML and llama.cpp join HF"
  - id: nv-hf
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: NVIDIA to Acquire Hugging Face (2026-09-03)
  - id: tc-ollama
    resource: https://techcrunch.com/2026/07/09/popular-open-source-ai-developer-tool-ollama-raises-65m-grows-to-nearly-9m-users/
    title: "TechCrunch: Ollama raises $65M"
  - id: tgi-gh
    resource: https://github.com/huggingface/text-generation-inference
    title: TGI repository (maintenance mode / archived)
  - id: qcom-10q
    resource: https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
    title: Qualcomm 10-Q (Modular acquisition)
  - id: nscale-pr
    resource: https://www.nscale.com/press-releases/nscale-acquires-anyscale
    title: Nscale Acquires Anyscale
  - id: cf-replicate
    resource: https://blog.cloudflare.com/replicate-joins-cloudflare/
    title: Replicate joins Cloudflare
  - id: modular-bento
    resource: https://www.modular.com/blog/bentoml-joins-modular
    title: BentoML Joins Modular
  - id: hf-tf5
    resource: https://huggingface.co/blog/transformers-v5
    title: Transformers v5
  - id: otpp-fireworks
    resource: https://www.otpp.com/en-ca/about-us/news-and-insights/2026/fireworks-raises-a-1-5-billion-series-d-to-lead-the-specialized-intelligence-revolution/
    title: "Fireworks raises a $1.5 billion Series D (press release via Ontario Teachers' Pension Plan, 2026-07-16)"
  - id: radixark-x
    resource: https://x.com/radixark/status/2051648113014882586
    title: "RadixArk on X: $100M seed at $400M valuation (2026-05-05)"
  - id: groq-nv
    resource: https://groq.com/newsroom/groq-and-nvidia-enter-non-exclusive-inference-technology-licensing-agreement-to-accelerate-ai-inference-at-global-scale
    title: Groq–NVIDIA licensing agreement (2025-12-24)
  - id: gh-api
    resource: https://github.com
    title: GitHub API (stars, releases, commit counts collected 2026-10-03)
---

# Executive summary
- **The serving-engine war ended in a duopoly of academic, permissively-licensed projects.** vLLM (93k stars, PyTorch Foundation since May 2025) and SGLang (37k stars, but the highest commit velocity in the domain) won; Hugging Face retired TGI (maintenance mode 2025-12-11, archived 2026-03-21)[^ptf-vllm][^tgi-gh][^gh-api].
- **Both winners became venture companies within a week in January 2026:** Inferact (vLLM) raised a $150M seed at $800M; RadixArk (SGLang) was reported at $400M in January and launched in May 2026 with a $100M Accel-led seed at that $400M valuation, with NVIDIA, AMD and MediaTek all investing[^sa-inferact][^tc-radixark][^bw-radixark][^radixark-x].
- **Local AI consolidated around llama.cpp + wrappers.** ggml.ai joined Hugging Face (2026-02-20); seven months later NVIDIA agreed to acquire Hugging Face for $12.93B (2026-09-03), putting transformers and llama.cpp on track for NVIDIA stewardship[^hf-ggml][^nv-hf].
- **Ollama is the business breakout of local AI** — ~8.9M monthly developers, 14 employees, $65M Series B (Jul 2026) — despite a contested OSS reputation (closed GUI, unresolved licence-notice issue, cloud pivot)[^tc-ollama].
- **Compute owners bought the software layers:** Qualcomm acquired Modular (~$3.1B, closed 2026-07-28), Nscale agreed to buy Anyscale (~$1.65B, 2026-07-30), Cloudflare bought Replicate (2025-11-17), Modular bought BentoML (2026-02-10)[^qcom-10q][^nscale-pr][^cf-replicate][^modular-bento].
- **Foundations became the safety valve:** projects were donated before their companies were sold (Ray → PyTorch Foundation Oct 2025; vLLM May 2025), so ownership changes did not threaten the code[^ptf-ray][^ptf-vllm].
- **The money is in operating inference, not writing engines:** Fireworks went from $4B (Series C, Oct 2025) to a $1.5B Series D at $17.5B (16 Jul 2026) with >$1B ARR and 40T tokens/day, far exceeding any engine company[^otpp-fireworks].

# Scorecard
| Project | OSS verdict | Business verdict | 2y trajectory | One-line why |
|---|---|---|---|---|
| [vLLM](/projects/ai-inference/vllm.md) | thriving | growing | ↑↑ | Foundation-hosted default engine; Inferact $150M seed |
| [SGLang](/projects/ai-inference/sglang.md) | thriving | growing | ↑↑ | Fastest-moving rival; RadixArk $100M seed |
| [llama.cpp / ggml](/projects/ai-inference/llama-cpp.md) | thriving | acquired | ↑ | 130k stars; team joined HF, HF → NVIDIA pending |
| [Ollama](/projects/ai-inference/ollama.md) | contested | growing | ↑ | 8.9M MAU, $65M B; trust issues |
| [LM Studio](/projects/ai-inference/lm-studio.md) | stable | growing | → | Free-for-work, mobile and agent expansion |
| [LocalAI](/projects/ai-inference/localai.md) | growing | n/a | ↑ | Community, no company, v4 |
| [TGI](/projects/ai-inference/text-generation-inference.md) | dead | n/a | ↓↓ | Maintenance mode then archived |
| [TensorRT-LLM](/projects/ai-inference/tensorrt-llm.md) | stable | n/a | → | v1.0; backend behind Dynamo |
| [NVIDIA Dynamo](/projects/ai-inference/nvidia-dynamo.md) | growing | n/a | ↑ | 0.1 → 1.5 in 18 months |
| [llm-d](/projects/ai-inference/llm-d.md) | growing | n/a | ↑ | Multi-vendor control plane; CNCF Sandbox |
| [KServe](/projects/ai-inference/kserve.md) | growing | n/a | ↑ | CNCF Incubating (Sep 2025) |
| [Ray](/projects/ai-inference/ray.md) | thriving | acquired | ↑ | PTF-hosted; Anyscale → Nscale |
| [PyTorch](/projects/ai-inference/pytorch.md) | thriving | n/a | ↑ | Umbrella foundation; sole transformers backend |
| [JAX](/projects/ai-inference/jax.md) | stable | n/a | → | Dropped from transformers v5 |
| [MLX](/projects/ai-inference/mlx.md) | growing | n/a | ↑ | Adopted by LM Studio, Ollama, vLLM |
| [Mojo & MAX](/projects/ai-inference/mojo-max.md) | growing | acquired | ↑↑ | Qualcomm ~$3.1B; compiler open-sourced |
| [tinygrad](/projects/ai-inference/tinygrad.md) | stable | stable | → | Hardware-funded niche |
| [ExLlama](/projects/ai-inference/exllama.md) | stable | n/a | → | Single maintainer; V2 dormant |
| [Unsloth](/projects/ai-inference/unsloth.md) | thriving | growing | ↑↑ | 77k stars; Studio under AGPL |
| [Axolotl](/projects/ai-inference/axolotl.md) | stable | stable | → | Steady but overshadowed |
| [DeepSpeed](/projects/ai-inference/deepspeed.md) | stable | n/a | → | PTF-hosted; research cadence |
| [Triton](/projects/ai-inference/triton.md) | stable | n/a | → | Ubiquitous kernel layer |
| [ONNX Runtime](/projects/ai-inference/onnx-runtime.md) | stable | n/a | → | Edge/Windows, peripheral to LLMs |
| [transformers](/projects/ai-inference/transformers.md) | thriving | acquired | ↑ | v5 PyTorch-only model-definition hub |
| [MLflow](/projects/ai-inference/mlflow.md) | stable | n/a | → | MLflow 3 GenAI pivot |
| [Kubeflow](/projects/ai-inference/kubeflow.md) | stable | n/a | → | Split into sub-projects |
| [BentoML](/projects/ai-inference/bentoml.md) | declining | acquired | ↓ | 6 commits/quarter post-acquisition |

# By window
## W3 (2026-07-03 → 2026-10-03)
**Successes**
- Ollama $65M Series B (2026-07-09) — [event](/events/2026-07-ollama-series-b.md); Fireworks $1.5B Series D at $17.5B, >$1B ARR (2026-07-16)[^otpp-fireworks].
- Qualcomm closes Modular (~$3.1B, 2026-07-28); Mojo 1.0 and compiler open-sourced (2026-08-11/18) — [event](/events/2026-08-mojo-compiler-open-sourced.md).
- vLLM v0.30 with Apple Silicon (vllm-metal); SGLang 4,530 commits in the quarter.
**Failures / risks**
- NVIDIA agrees to acquire Hugging Face (2026-09-03) — neutrality concerns for transformers and llama.cpp — [event](/events/2026-09-nvidia-to-acquire-hugging-face.md).
- Nscale–Anyscale at ~$1.65B: only ~20% over 2022 valuation — [event](/events/2026-07-nscale-acquires-anyscale.md).
- BentoML activity collapses (6 commits).
## W6 (2026-04-03 → 2026-07-03)
**Successes**
- RadixArk $100M seed (2026-05-05).
- Qualcomm–Modular definitive agreement (2026-06-25) — [event](/events/2026-06-qualcomm-acquires-modular.md).
- LM Studio acquires Locally AI (2026-04-10); llm-d v0.8 control plane.
**Failures / risks**
- Viral "stop using Ollama" critique (2026-04-15).
- BentoML's last release (2026-05-07).
## W9 (2026-01-03 → 2026-04-03)
**Successes**
- Inferact $150M seed (2026-01-22) — [event](/events/2026-01-inferact-vllm-seed.md); RadixArk spinout reported — [event](/events/2026-01-radixark-sglang-spinout.md).
- ggml.ai joins Hugging Face (2026-02-20) — [event](/events/2026-02-ggml-joins-hugging-face.md); transformers v5.0.0 GA (2026-01-26); Dynamo 1.0 (2026-03-13); llm-d CNCF Sandbox (2026-03-12).
**Failures / risks**
- ~175k exposed Ollama servers found (Jan 2026).
- TGI archived (2026-03-21); BentoML absorbed by Modular (2026-02-10) — [event](/events/2026-02-modular-acquires-bentoml.md).
## W12 (2025-10-03 → 2026-01-03)
**Successes**
- Ray joins PyTorch Foundation (2025-10-22) — [event](/events/2025-10-ray-joins-pytorch-foundation.md).
- transformers v5 announced (2025-12-01); Fireworks $250M at ~$4B (Oct 2025).
**Failures / risks**
- TGI maintenance mode (2025-12-11) — [event](/events/2025-12-tgi-maintenance-mode.md).
- Replicate sold to Cloudflare (2025-11-17) — [event](/events/2025-11-cloudflare-acquires-replicate.md); NVIDIA–Groq ~$20B license-and-hire (2025-12-24) — [event](/events/2025-12-nvidia-groq-licensing-deal.md).
## W24 (2024-10-03 → 2025-10-03)
**Successes**
- vLLM V1 (Jan 2025) and PyTorch Foundation umbrella + vLLM (May 2025) — [event](/events/2025-05-pytorch-foundation-umbrella-vllm.md).
- llm-d launched (2025-05-20); NVIDIA Dynamo launched (2025-03-18); KServe to CNCF Incubating (2025-09-29); Modular $250M at $1.6B (2025-09-24); Together AI $305M at $3.3B (2025-02-20).
- LM Studio becomes free for work (2025-07-08).
**Failures / risks**
- Ollama closed-source desktop app and cloud pivot (Jul–Sep 2025) — [event](/events/2025-07-ollama-closed-app-cloud-pivot.md).
- TGI's last release (2025-09-17).

# Trends
1. **Academic engine → foundation → VC spinout.** vLLM and SGLang (both Berkeley Sky Lab lineage) went from papers to the two standard engines to $800M/$400M startups within ~30 months[^sa-inferact][^bw-radixark]. See [vLLM](/projects/ai-inference/vllm.md), [SGLang](/projects/ai-inference/sglang.md).
2. **"Donate, then sell."** Ray and vLLM moved to the PyTorch Foundation before commercial events (Anyscale sale, Inferact raise), protecting users[^ptf-ray][^nscale-pr].
3. **Compute owners vertically integrate software.** Qualcomm (Modular), Nscale (Anyscale), Cloudflare (Replicate), NVIDIA (Groq licence; Hugging Face) bought the layers above their hardware[^qcom-10q][^nscale-pr][^cf-replicate][^groq-nv][^nv-hf].
4. **Value accrues to operators and UX wrappers, not engine authors.** Fireworks' $17.5B (with >$1B ARR) and Ollama's $88M raised contrast with ggml.ai's quiet acqui-hire[^otpp-fireworks][^tc-ollama][^hf-ggml].
5. **The control plane is the new battleground.** llm-d (Red Hat + Google/IBM/NVIDIA/CoreWeave, CNCF), NVIDIA Dynamo and KServe compete above the engines. See [llm-d](/projects/ai-inference/llm-d.md), [Dynamo](/projects/ai-inference/nvidia-dynamo.md).
6. **Single-vendor engines retreat.** TGI archived; TensorRT-LLM survives as a backend; HF repositions transformers as the model-definition layer[^tgi-gh][^hf-tf5].
7. **Open-core drift in local AI, without relicensing.** Ollama (closed GUI, cloud), Unsloth (AGPL Studio over Apache core), LM Studio (proprietary app, open SDK) monetise new layers instead of relicensing the core.
8. **Hardware portability as strategy.** vLLM plugins, Mojo open-sourcing under Qualcomm, MLX adoption and chip vendors co-investing in RadixArk all aim to dilute CUDA lock-in[^bw-radixark][^qcom-10q].

# Success patterns
- Permissive licence + neutral foundation + plugin architecture → competitors become contributors (vLLM, Ray, llm-d).
- Ruthless performance on the newest model architectures (MoE, long context, RL rollouts) beats incumbency (SGLang).
- Great UX and distribution on top of someone else's engine (Ollama, LM Studio) captures users and revenue.
- Strategic buyers pay premiums for cross-hardware software (Modular ~2x its last round in 10 months).

# Failure patterns
- Single-vendor serving engines cannot match community velocity (TGI).
- Acquired OSS projects lose maintainers even when the licence stays (BentoML).
- Foundational engines with no commercial vehicle depend on patrons (ggml.ai → HF → NVIDIA).
- Mid-sized hosting platforms without GPU scale get absorbed (Replicate).
- Ignoring upstream attribution and opening closed components erodes enthusiast trust (Ollama).

# Open questions / watchlist for next 6 months
- Regulatory review and post-close behaviour of NVIDIA–Hugging Face: will llama.cpp's non-NVIDIA backends and transformers' neutrality hold?
- Inferact and RadixArk first revenue/product disclosures; does either company's priorities strain vLLM/SGLang community governance?
- Does SGLang join a foundation (PyTorch or CNCF) to match vLLM's neutrality?
- Mojo compiler opening to outside contributions (promised by end-2026) and MAX licensing under Qualcomm.
- Nscale–Anyscale close and Anyscale's investment in Ray.
- BentoML's fate (formal deprecation?) and whether Ollama resolves issue #3185.
- Next inference-cloud mega-rounds or IPOs (Fireworks, Together, Baseten), and whether any engine company is acquired.

[^ptf-vllm]: PyTorch Foundation, 2025-05-06 — https://pytorch.org/blog/pytorch-foundation-welcomes-vllm/
[^ptf-ray]: PR Newswire, 2025-10-22 — https://www.prnewswire.com/news-releases/pytorch-foundation-welcomes-ray-to-deliver-a-unified-open-source-ai-compute-stack-302591184.html
[^sa-inferact]: SiliconANGLE, 2026-01-22 — https://siliconangle.com/2026/01/22/inferact-launches-150m-funding-commercialize-vllm/
[^tc-radixark]: TechCrunch, 2026-01-21 — https://techcrunch.com/2026/01/21/sources-project-sglang-spins-out-as-radixark-with-400m-valuation-as-inference-market-explodes
[^bw-radixark]: BusinessWire, 2026-05-05 — https://www.businesswire.com/news/home/20260505077157/en/RadixArk-Launches-with-$100-Million-in-Seed-Funding-Led-by-Accel-to-Grow-SGLang-and-Democratize-Frontier-AI-Infrastructure
[^hf-ggml]: HF blog, 2026-02-20 — https://huggingface.co/blog/ggml-joins-hf
[^nv-hf]: NVIDIA blog, 2026-09-03 — https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
[^tc-ollama]: TechCrunch, 2026-07-09 — https://techcrunch.com/2026/07/09/popular-open-source-ai-developer-tool-ollama-raises-65m-grows-to-nearly-9m-users/
[^tgi-gh]: TGI repository — https://github.com/huggingface/text-generation-inference
[^qcom-10q]: Qualcomm 10-Q — https://www.sec.gov/Archives/edgar/data/0000804328/000080432826000086/qcom-20260628.htm
[^nscale-pr]: Nscale, 2026-07-30 — https://www.nscale.com/press-releases/nscale-acquires-anyscale
[^cf-replicate]: Cloudflare, 2025-11-17 — https://blog.cloudflare.com/replicate-joins-cloudflare/
[^modular-bento]: Modular, 2026-02-10 — https://www.modular.com/blog/bentoml-joins-modular
[^hf-tf5]: HF blog — https://huggingface.co/blog/transformers-v5
[^otpp-fireworks]: Fireworks Series D press release, 2026-07-16 — confirmed $1.505B at $17.5B post-money, led by Atreides, Index Ventures and TCV.
[^radixark-x]: RadixArk on X, 2026-05-05.
[^groq-nv]: Groq newsroom, 2025-12-24 — https://groq.com/newsroom/groq-and-nvidia-enter-non-exclusive-inference-technology-licensing-agreement-to-accelerate-ai-inference-at-global-scale
[^gh-api]: GitHub API data collected 2026-10-03 — https://github.com
