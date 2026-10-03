---
type: OSS Project
title: Meta Llama (and Muse Glimmer)
description: "Meta's open-weight model line; went from the default open LLM to an abandoned brand after the Llama 4 flop (Apr 2025) and the closed Muse Spark pivot (Apr 2026), partially redeemed by the Apache-2.0 Muse Glimmer 30B (Aug 2026)."
resource: https://huggingface.co/meta-llama
tags: [open-weights, llm, big-tech, llama-community-license, open-washing]
domain: ai-models
license: "Llama 4 Community License (Llama); Apache-2.0 (Muse Glimmer)"
license_history: ["Llama 3.x Community License (2024-)", "Llama 4 Community License (2025-04)", "Muse Spark proprietary, no weights (2026-04)", "Muse Glimmer Apache-2.0 (2026-08)"]
governance: single-vendor
steward: Meta Platforms (Meta Superintelligence Labs)
backing_orgs: []
metrics:
  llama_cumulative_downloads: { value: "1.2 billion", as_of: 2026-04-08 }
  llama_hf_cumulative_downloads_atom: { value: "476 million", as_of: 2026-03-31 }
  muse_glimmer_30b_downloads_last_month: { value: 276597, as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: n/a
momentum_by_window: { W3: up, W6: down, W9: down, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-llama
    resource: https://en.wikipedia.org/wiki/Llama_(language_model)
    title: "Wikipedia: Llama (language model)"
  - id: hf-meta-llama
    resource: https://huggingface.co/meta-llama
    title: meta-llama organization on Hugging Face
    last_modified: 2026-10-03T00:00:00Z
  - id: vb-muse-spark
    resource: https://venturebeat.com/technology/goodbye-llama-meta-launches-new-proprietary-ai-model-muse-spark-first-since
    title: "VentureBeat: Goodbye, Llama? Meta launches new proprietary AI model Muse Spark"
    author: org:venturebeat
  - id: wiki-msl
    resource: https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs
    title: "Wikipedia: Meta Superintelligence Labs"
  - id: wiki-muse
    resource: https://en.wikipedia.org/wiki/Muse_Spark
    title: "Wikipedia: Muse Spark"
  - id: hf-muse-glimmer
    resource: https://huggingface.co/meta-models/Muse-Glimmer-30B
    title: Muse-Glimmer-30B model card (Hugging Face)
    last_modified: 2026-10-03T00:00:00Z
  - id: cnbc-avocado
    resource: https://www.cnbc.com/2025/12/09/meta-avocado-ai-strategy-issues.html
    title: "CNBC: From Llamas to Avocados: Meta's shifting AI strategy is causing internal confusion"
    author: org:cnbc
  - id: engadget-avocado
    resource: https://www.engadget.com/ai/meta-is-reportedly-working-on-a-new-ai-model-called-avocado-and-it-might-not-be-open-source-215426778.html
    title: "Engadget: Meta is reportedly working on a new AI model called Avocado and it might not be open source"
    author: org:engadget
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report: Measuring the Open Language Model Ecosystem (arXiv 2604.07190)"
  - id: infoq-glimmer
    resource: https://www.infoq.com/news/2026/08/meta-muse-glimmer/
    title: "InfoQ: Meta open-sources Muse Glimmer, a 30B local agentic model (2026-08)"
    author: org:infoq
  - id: mtp-glimmer
    resource: https://www.marktechpost.com/2026/08/10/meta-ai-releases-muse-glimmer/
    title: "MarkTechPost: Meta AI releases Muse Glimmer (2026-08-10)"
  - id: ani-spark12
    resource: https://www.aninews.in/news/business/meta-opens-muse-glimmer-weights-zuckerberg-says-muse-spark-12-release-coming-soon20260811103643/
    title: "ANI: Meta opens Muse Glimmer weights; Zuckerberg says Muse Spark 1.2 release coming soon (2026-08-11)"
  - id: vb-spark13
    resource: https://venturebeat.com/technology/meta-says-muse-spark-1-3-has-frontier-performance-but-its-best-results-come-from-a-model-developers-cant-broadly-use-yet
    title: "VentureBeat: Meta says Muse Spark 1.3 has frontier performance (2026-09)"
    author: org:venturebeat
---

# Summary
Llama was the reference open-weight LLM family in 2023–2024, but over the last two years it lost both technical leadership and mindshare. Llama 4 (April 2025) was received poorly and tainted by an LMArena benchmarking controversy[^wiki-llama]; Meta then reorganised AI under Meta Superintelligence Labs (MSL, June 2025)[^wiki-msl] and shipped its next frontier model, Muse Spark (8 Apr 2026), as a closed, API/app-only product[^vb-muse-spark]. No new Llama checkpoint has appeared since Llama 4[^hf-meta-llama]. Meta partially re-entered open weights with Muse Glimmer 30B (2B vision encoder + 28B decoder distilled from Muse Spark) under Apache-2.0 (10 Aug 2026)[^infoq-glimmer][^mtp-glimmer][^hf-muse-glimmer], a far more permissive license than Llama ever had, and Zuckerberg pledged open weights for Muse Spark 1.2 — but as of early Oct 2026 those weights had not shipped and Muse Spark 1.3 (Sept) launched proprietary[^ani-spark12][^vb-spark13]. OSS verdict: declining (Llama brand), with a small W3 rebound.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-07 | Llama 3.3 70B released[^wiki-llama] | OSS | + |
| W24 | 2025-04-05 | Llama 4 Scout/Maverick released (MoE, multimodal); Behemoth unreleased[^wiki-llama] | OSS | − |
| W24 | 2025-04 | LMArena says Meta's use of an unreleased "experimental chat version" did not match its policy[^wiki-llama] | OSS | − |
| W24 | 2025-06 | Meta Superintelligence Labs formed; $14.3B for 49% of Scale AI; Alexandr Wang becomes Chief AI Officer[^wiki-msl] | Business | − (for openness) |
| W24 | 2025-09 | Qwen passes Llama in cumulative HF downloads[^atom-report] | OSS | − |
| W12 | 2025-10 | ~600 jobs cut at MSL[^wiki-msl] | Business | − |
| W12 | 2025-11-20 | Yann LeCun leaves Meta to found AMI Labs[^wiki-msl] | OSS | − |
| W12 | 2025-12 | Reports: next model "Avocado" may be closed; internal confusion[^cnbc-avocado][^engadget-avocado] | OSS | − |
| W6 | 2026-04-08 | Muse Spark launched — proprietary, no weights; Meta says current Llama models stay available[^vb-muse-spark] | OSS | − |
| W3 | 2026-08-10 | Muse Glimmer 30B released under Apache-2.0 (4-bit build fits 24–32 GB GPUs); Zuckerberg promises Muse Spark 1.2 open weights "soon"[^infoq-glimmer][^mtp-glimmer][^ani-spark12] | OSS | + |
| W3 | 2026-09 | Muse Spark 1.3 released as proprietary; Spark 1.2 weights still unreleased[^vb-spark13] | OSS | − |

# OSS successes
- Cumulative reach: Llama reached ~1.2 billion downloads by early 2026 (Meta figure cited by VentureBeat)[^vb-muse-spark].
- Muse Glimmer (Aug 2026) is Apache-2.0 — dropping the 700M-MAU clause, acceptable-use policy and EU multimodal restrictions of the Llama licenses[^wiki-llama][^hf-muse-glimmer]; ~277k downloads in its first full month[^hf-muse-glimmer].

# OSS failures / risks
- Llama 4 failed to gain traction; Maverick-17B-128E-Instruct shows ~10k monthly HF downloads vs ~1M for the two-year-old Llama-3-8B-Instruct[^hf-meta-llama].
- Llama license never met the OSI definition (field-of-use and user restrictions; EU restriction for multimodal versions)[^wiki-llama].
- Lost ecosystem leadership: by Mar 2026 Qwen had 942M cumulative HF downloads vs Llama's 476M, and 69% of new derivatives were Qwen-based[^atom-report].
- Strategic signal that Meta's openness is conditional on not being at the frontier: Muse Spark closed, with only vague "hope to open-source future versions"[^vb-muse-spark].

# Business successes
- n/a (Llama is not sold); MSL's Muse Spark scored 52 on the Artificial Analysis Intelligence Index vs 18 for Llama 4 Maverick[^vb-muse-spark] — a business win bought by abandoning openness.

# Business failures / risks
- Large spending (Scale AI deal, $1–100M pay packages) and reorganisations[^wiki-msl] with the open line demoted.

# By window
## W3
- Muse Glimmer 30B (Apache-2.0) released 10 Aug 2026[^infoq-glimmer]; quickly quantised by community (GGUF, MLX)[^hf-muse-glimmer]; Muse Spark 1.2 open-weights pledge unfulfilled as Spark 1.3 ships closed[^ani-spark12][^vb-spark13].
## W6
- Muse Spark launched closed on 8 Apr 2026[^vb-muse-spark].
## W9
- No new Llama release; Avocado delays reported (spring 2026)[^wiki-llama].
## W12
- LeCun departs (Nov 2025); MSL layoffs (Oct 2025)[^wiki-msl]; Avocado-closed reports (Dec 2025)[^cnbc-avocado].
## W24
- Llama 4 launch and LMArena controversy (Apr 2025)[^wiki-llama]; MSL formed (Jun 2025)[^wiki-msl].

# Lessons
- A single-vendor "open" model is only as durable as the vendor's competitive position; once it stopped leading, Meta re-evaluated openness.
- Benchmark gaming destroys developer trust faster than weaker benchmarks do.
- Permissive licensing (Apache/MIT) from Chinese labs beat a restrictive "community license" on derivatives.

# Related
- [DeepSeek](/projects/ai-models/deepseek.md), [Qwen](/projects/ai-models/qwen.md)
- [Llama 4 launch event](/events/2025-04-llama-4-launch-and-lmarena-controversy.md)
- [Meta Muse Spark closed pivot](/events/2026-04-meta-muse-spark-closed-pivot.md)
- [Domain review](/domains/ai-models.md)

[^wiki-llama]: Wikipedia, Llama (language model).
[^hf-meta-llama]: Hugging Face meta-llama org page (download counts are last-30-day, as of 2026-10-03).
[^vb-muse-spark]: VentureBeat on Muse Spark launch, April 2026.
[^wiki-msl]: Wikipedia, Meta Superintelligence Labs.
[^wiki-muse]: Wikipedia, Muse Spark (includes Muse Glimmer).
[^hf-muse-glimmer]: Muse-Glimmer-30B model card.
[^cnbc-avocado]: CNBC, 9 Dec 2025.
[^engadget-avocado]: Engadget, Dec 2025.
[^atom-report]: ATOM Report, arXiv 2604.07190 (Apr 2026).
[^infoq-glimmer]: InfoQ, Aug 2026.
[^mtp-glimmer]: MarkTechPost, 10 Aug 2026.
[^ani-spark12]: ANI, 11 Aug 2026.
[^vb-spark13]: VentureBeat, Sept 2026.
