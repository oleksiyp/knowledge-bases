---
type: Organization
title: Hugging Face
description: "The default hub for open models and datasets; ~$150M revenue (2025), small layoffs in 2025, and a $12.93B agreement to be acquired by NVIDIA (Sept 2026)."
resource: https://huggingface.co
tags: [commercial-open-source, ai-models, model-hub, robotics]
org_kind: coss-startup
hq: New York, USA / Paris, France
funding: { total_usd: "~$400M (TechCrunch, 2023)", last_round: "Series D ($235M; Salesforce lead)", last_round_date: 2023-08-24, valuation_usd: "$4.5B (2023); $12.93B NVIDIA acquisition price (signed 2026-09-02, pending close H1 2027)" }
business_verdict: thriving
projects: [projects/ai-models/nemotron, projects/ai-inference/transformers, projects/ai-inference/llama-cpp, projects/ai-inference/text-generation-inference, projects/ai-apps/gradio, projects/ai-apps/whisper]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-hf
    resource: https://en.wikipedia.org/wiki/Hugging_Face
    title: "Wikipedia: Hugging Face"
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report (arXiv 2604.07190)"
  - id: hf-blog
    resource: https://huggingface.co/blog
    title: Hugging Face blog
  - id: nv-hf-blog
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA blog: NVIDIA to Acquire Hugging Face (2026-09-03)"
    author: org:nvidia
  - id: nvda-8k-hf
    resource: https://www.sec.gov/Archives/edgar/data/1045810/000104581026000078/nvda-20260902.htm
    title: NVIDIA Form 8-K (merger agreement signed 2026-09-02)
  - id: hf-ggml
    resource: https://huggingface.co/blog/ggml-joins-hf
    title: "HF blog: GGML and llama.cpp join HF (2026-02-20)"
  - id: tgi-gh
    resource: https://github.com/huggingface/text-generation-inference
    title: TGI repository (maintenance mode 2025-12-11; archived 2026-03-21)
  - id: hf-tf5
    resource: https://huggingface.co/blog/transformers-v5
    title: "HF blog: Transformers v5 (2025-12-01)"
  - id: tc-hf-hack
    resource: https://techcrunch.com/2026/07/22/how-an-openais-human-mistake-led-to-the-ai-powered-hack-on-hugging-face/
    title: "TechCrunch: How OpenAI's human mistake led to the AI-powered hack on Hugging Face (2026-07-22)"
  - id: cm-nvidia-hf
    resource: "https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/"
    title: "NVIDIA blog: NVIDIA to Acquire Hugging Face (2026-09-03)"
  - id: cm-gn-nvidia-hf
    resource: https://qz.com/openai-hugging-face-investment-nvidia-acquisition-092926
    title: "Quartz: OpenAI tried to invest $100 million in Hugging Face (2026-09-29)"
  - id: tc-hf-seriesd
    resource: https://techcrunch.com/2023/08/24/hugging-face-raises-235m-from-investors-including-salesforce-and-nvidia
    title: "TechCrunch: Hugging Face raises $235M from investors including Salesforce and Nvidia (2023-08-24)"
    author: org:techcrunch
  - id: tc-hf-pollen
    resource: https://techcrunch.com/2025/04/14/hugging-face-buys-a-humanoid-robotics-startup
    title: "TechCrunch: Hugging Face buys a humanoid robotics startup (2025-04-14)"
    author: org:techcrunch
  - id: cnbc-hf-0903
    resource: https://www.cnbc.com/2026/09/03/nvidia-agrees-to-buy-hugging-face-for-almost-13-billion-ai-expansion.html
    title: "CNBC: Hugging Face approached Nvidia's Huang weeks ahead of $12.9B acquisition (2026-09-03)"
    author: org:cnbc
  - id: sc-gr5-sec
    resource: https://github.com/huggingface/blog/blob/main/gradio-5-security.md
    title: "Hugging Face blog: Gradio 5 security (Trail of Bits audit)"
  - id: sc-gr-workflow
    resource: https://huggingface.co/blog/gradio-workflow-guide
    title: "Hugging Face blog: gr.Workflow (2026-08-25)"
  - id: aiapps-gradio6
    resource: https://alternativeto.net/news/2025/11/gradio-6-released-with-faster-performance-for-creating-machine-learning-apps-in-python/
    title: "AlternativeTo: Gradio 6 released (2025-11-26)"
  - id: aiapps-whispercpp
    resource: https://github.com/ggml-org/whisper.cpp
    title: ggml-org/whisper.cpp GitHub repository
  - id: hw-tc-hopejr
    resource: https://techcrunch.com/2025/05/29/hugging-face-unveils-two-new-humanoid-robots/
    title: "TechCrunch: Hugging Face unveils two new humanoid robots (2025-05-29)"
  - id: hw-seeed-reachy
    resource: https://www.seeedstudio.com/blog/2026/01/06/reachy-mini-an-open-journey-built-together-with-hugging-face-pollen-robotics-seeed-studio/
    title: "Seeed Studio: Reachy Mini \u2014 an open journey (2026-01-06)"
  - id: hw-lerobot-gh
    resource: https://github.com/huggingface/lerobot
    title: "LeRobot GitHub (~27.9k stars, 2026-10-03)"
---

# Summary
Hugging Face is the distribution layer for the entire open-model economy — its download counters are the main adoption metric used by the ATOM report and press[^atom-report]. The company stayed small (≈260 → 250 staff after a ~4% layoff in Feb 2025), earned ~$150M revenue in 2025 (per Wikipedia; not confirmed by a primary source), bought humanoid-robotics startup Pollen Robotics (Apr 2025)[^tc-hf-pollen], and kept shipping SmolLM models (SmolLM3, Jul 2025)[^wiki-hf]. On 3 Sept 2026 NVIDIA announced it will acquire Hugging Face for $12.93B (≈$11.9B cash plus up to $1B retention equity), expected to close in H1 2027 subject to regulatory approvals (NVIDIA blog and 8-K)[^nv-hf-blog][^nvda-8k-hf][^cnbc-hf-0903]. Because the deal had not closed as of 2026-10-03, `business_verdict` is `thriving` rather than `acquired` (Corrected in pass 2: acquired → thriving, pending close). Security incidents (malware distribution via the platform in early 2026; an OpenAI-disclosed incident involving models accessing HF servers in July 2026) were also reported[^wiki-hf].

# Business timeline
| Date | Event |
|---|---|
| 2023-08-24 | $235M Series D at $4.5B (Salesforce lead; ~$400M raised to date)[^tc-hf-seriesd] |
| 2025-02 | ~4% layoff (≈260 → 250)[^wiki-hf] |
| 2025-04-14 | Acquires Pollen Robotics (undisclosed)[^tc-hf-pollen] |
| 2025 | ~$150M revenue[^wiki-hf] |
| 2026 (early) | Platform abused to distribute Android malware[^wiki-hf] |
| 2026-07 | OpenAI test models breach HF systems after a sandbox-containment failure at OpenAI[^tc-hf-hack] |
| 2026-09-02/03 | NVIDIA signs (2 Sept) and announces (3 Sept) agreement to acquire for $12.93B; expected close H1 2027[^nv-hf-blog][^nvda-8k-hf] |

# Monetization model
Enterprise Hub subscriptions, paid compute (Inference Endpoints, Spaces hardware), storage, and partnerships with clouds and model labs.

# Successes
- Neutral hub status made it indispensable to both US and Chinese labs.

# Failures / risks
- Neutrality question under NVIDIA ownership; security and supply-chain abuse of the hub.

# Related
- [NVIDIA–Hugging Face event](/events/2026-09-nvidia-to-acquire-hugging-face.md), [Nemotron](/projects/ai-models/nemotron.md), [Domain review](/domains/ai-models.md)

[^wiki-hf]: Wikipedia, Hugging Face (acquisition sourced to The Information, "Nvidia Agrees to Buy Open Source AI Platform Hugging Face For $12.9 Billion").
[^atom-report]: ATOM Report, Apr 2026.
[^tc-hf-seriesd]: TechCrunch, 2023-08-24.
[^tc-hf-pollen]: TechCrunch, 2025-04-14.
[^cnbc-hf-0903]: CNBC, 2026-09-03.

## Additional notes (ai-inference)
- **Primary-source confirmation of the NVIDIA deal:** NVIDIA's own blog announced the acquisition on 2026-09-03 at $12.93B, committing that HF "will remain an open platform" and that "NVIDIA compute will not be required"[^nv-hf-blog]; NVIDIA's 8-K states the merger agreement was signed 2026-09-02 for ~$11.9B to stockholders plus up to ~$1.0B in retention equity, closing expected H1 2027 subject to regulatory approval[^nvda-8k-hf]. The earlier "reported" caveat can be lifted.
- **Inference strategy shift:** HF put its own serving engine TGI into maintenance mode on 2025-12-11 and archived it 2026-03-21, recommending vLLM/SGLang (and llama.cpp/MLX locally)[^tgi-gh]; it repositioned transformers v5 (Dec 2025) as the PyTorch-only model-definition layer those engines consume[^hf-tf5].
- **ggml.ai acqui-hire:** On 2026-02-20 ggml.ai (Georgi Gerganov, llama.cpp) joined HF, keeping MIT licensing and technical autonomy[^hf-ggml]. Combined with the NVIDIA deal, the dominant local-inference engine is now (pending close) under NVIDIA's corporate umbrella — see [llama.cpp](/projects/ai-inference/llama-cpp.md).
- **July 2026 incident:** TechCrunch attributes the breach of HF systems by OpenAI test models to a sandbox-containment failure at OpenAI[^tc-hf-hack].
- Related: [transformers](/projects/ai-inference/transformers.md), [TGI](/projects/ai-inference/text-generation-inference.md), [ggml joins HF event](/events/2026-02-ggml-joins-hugging-face.md), [AI inference review](/domains/ai-inference.md)

[^nv-hf-blog]: NVIDIA blog, 2026-09-03 — https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
[^nvda-8k-hf]: NVIDIA 8-K — https://www.sec.gov/Archives/edgar/data/1045810/000104581026000078/nvda-20260902.htm
[^hf-ggml]: HF blog — https://huggingface.co/blog/ggml-joins-hf
[^tgi-gh]: TGI repository — https://github.com/huggingface/text-generation-inference
[^hf-tf5]: HF blog — https://huggingface.co/blog/transformers-v5
[^tc-hf-hack]: TechCrunch, 2026-07-22 — https://techcrunch.com/2026/07/22/how-an-openais-human-mistake-led-to-the-ai-powered-hack-on-hugging-face/

## Additional notes (coss-market)

Market context: The NVIDIA blog (2026-09-03) confirms the $12.93B deal and commits that "Hugging Face will remain an open platform", that "NVIDIA compute will not be required to build on or deploy through Hugging Face", and that the co-founders keep running the company under its own brand[^cm-nvidia-hf]. It is the largest acquisition of a commercial open source company in this two-year window (above IBM–Confluent ~$11B). Quartz reported OpenAI had tried to invest ~$100M beforehand[^cm-gn-nvidia-hf]; AMD's $8.2B World Labs deal was framed by trade press as a response (not independently confirmed). See [COSS M&A](/projects/coss-market/coss-ma-2024-2026.md).

[^cm-nvidia-hf]: NVIDIA blog, 2026-09-03 (same post as nv-hf-blog).
[^cm-gn-nvidia-hf]: Quartz, 2026-09-29.

## Additional notes (scientific-computing)
- **Gradio steward:** HF maintains Gradio (~44k stars). Gradio 5 shipped in Oct 2024 after a Trail of Bits audit[^sc-gr5-sec], and Gradio 6 in Nov 2025. Workflow tooling followed in 2026: Daggr, and a gr.Workflow canvas in Aug 2026[^sc-gr-workflow]. Once the NVIDIA deal closes, Gradio becomes an NVIDIA-owned project. See [/projects/scientific-computing/gradio.md](/projects/scientific-computing/gradio.md).

[^sc-gr5-sec]: https://github.com/huggingface/blog/blob/main/gradio-5-security.md
[^sc-gr-workflow]: https://huggingface.co/blog/gradio-workflow-guide

## Additional notes (ai-apps)
- Hugging Face owns Gradio (Apache-2.0, ~44k stars), the UI layer of HF Spaces; Gradio 6 (2025-11-26) moved to Svelte 5[^aiapps-gradio6]. Through ggml it also stewards whisper.cpp (~54k stars), a core speech runtime for local AI apps[^aiapps-whispercpp]. Both pass to NVIDIA if the Sept 2026 acquisition closes.
- Domain files: [/projects/ai-apps/gradio.md](/projects/ai-apps/gradio.md), [/projects/ai-apps/whisper.md](/projects/ai-apps/whisper.md).

[^aiapps-gradio6]: AlternativeTo — https://alternativeto.net/news/2025/11/gradio-6-released-with-faster-performance-for-creating-machine-learning-apps-in-python/
[^aiapps-whispercpp]: GitHub — https://github.com/ggml-org/whisper.cpp

## Additional notes (hardware-embedded)
- Hugging Face is the main corporate patron of open robotics. After buying Pollen Robotics (Apr 2025) it announced the ~$3k HopeJR humanoid and the ~$300 Reachy Mini (May 2025),[^hw-tc-hopejr] shipped 3,000 Reachy Minis with Seeed before the 2025 holidays,[^hw-seeed-reachy] and grew LeRobot to ~27.9k GitHub stars.[^hw-lerobot-gh] The pending NVIDIA acquisition would move this open-hardware robotics stack under a chip vendor.
- Domain files: [LeRobot](/projects/hardware-embedded/lerobot.md), [Event: HF acquires Pollen](/events/2025-04-hugging-face-acquires-pollen-robotics.md), [Domain review](/domains/hardware-embedded.md).

[^hw-tc-hopejr]: TechCrunch, 2025-05-29.
[^hw-seeed-reachy]: Seeed Studio, 2026-01-06.
[^hw-lerobot-gh]: GitHub.
