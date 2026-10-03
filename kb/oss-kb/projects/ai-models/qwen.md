---
type: OSS Project
title: Qwen (Alibaba)
description: "Alibaba's Qwen family became the world's most-downloaded and most-derived open model family (passing Llama in Sept 2025), though 2026 brought a leadership exit, more proprietary tiers and a revenue-gated license on the 2.4T flagship."
resource: https://huggingface.co/Qwen
tags: [open-weights, llm, apache-2.0, china, multimodal, big-tech]
domain: ai-models
license: "Apache-2.0 (most open weights); custom commercial license for Qwen3.8-2.4T flagship"
license_history: ["Mixed Tongyi Qianwen / Qwen Research / Apache-2.0 by size (2024)", "Apache-2.0 for all Qwen3 open weights (2025-04)", "Revenue-gated license (>$50M providers) for Qwen3.8-2.4T-A95B (2026-08)"]
governance: single-vendor
steward: Alibaba Cloud
backing_orgs: []
metrics:
  hf_cumulative_downloads_atom: { value: "942.1 million", as_of: 2026-03-31 }
  share_of_new_derivatives: { value: "69%", as_of: 2026-02-28 }
  hf_followers: { value: 108200, as_of: 2026-10-03 }
  qwen3_8_27b_downloads_last_month: { value: "6.93M", as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: flat, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-qwen
    resource: https://en.wikipedia.org/wiki/Qwen
    title: "Wikipedia: Qwen"
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report (arXiv 2604.07190)"
  - id: cnbc-qwen35
    resource: https://www.cnbc.com/2026/02/17/china-alibaba-qwen-ai-agent-latest-model.html
    title: "CNBC: Alibaba unveils Qwen3.5 as China's chatbot race shifts to AI agents (2026-02-17)"
    author: org:cnbc
  - id: xinhua-700m
    resource: https://english.news.cn/20260113/004b0522f987475cbf83ffc3a8d009aa/c.html
    title: "Xinhua: Alibaba's Qwen leads global open-source AI community with 700 million downloads (2026-01-13)"
  - id: hf-qwen
    resource: https://huggingface.co/Qwen
    title: Qwen organization on Hugging Face
    last_modified: 2026-10-03T00:00:00Z
  - id: hf-qwen38
    resource: https://huggingface.co/models?search=Qwen3.8-2.4T
    title: Hugging Face search results for Qwen3.8-2.4T
  - id: scmp-qwen50
    resource: https://www.scmp.com/tech/big-tech/article/3349552/alibabas-qwen-family-captures-over-50-global-open-source-downloads-report-finds
    title: "SCMP: Alibaba's Qwen family captures over 50% of global open-source downloads, report finds"
    author: org:scmp
  - id: mittr-china
    resource: https://www.technologyreview.com/2026/02/12/1132811/whats-next-for-chinese-open-source-ai/
    title: "MIT Technology Review: What's next for Chinese open-source AI (2026-02-12)"
    author: org:mit-technology-review
  - id: hf-qwen38-card
    resource: https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B
    title: Qwen3.8-2.4T-A95B model card
  - id: qwen38-license
    resource: https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B/blob/main/LICENSE
    title: Qwen3.8-Max License (Hugging Face)
  - id: tc-lin
    resource: https://techcrunch.com/2026/03/03/alibabas-qwen-tech-lead-steps-down-after-major-ai-push/
    title: "TechCrunch: Alibaba's Qwen tech lead steps down after major AI push (2026-03-03)"
    author: org:techcrunch
  - id: tc-apple
    resource: https://techcrunch.com/2026/07/15/apple-intelligence-approved-for-launch-in-china-with-alibabas-qwen-ai/
    title: "TechCrunch: Apple Intelligence approved for launch in China with Alibaba's Qwen AI (2026-07-15)"
    author: org:techcrunch
---

# Summary
Qwen is the most widely adopted open-weight model family of the period. Its Apache-2.0 Qwen3 release (Apr 2025) covering 0.6B–235B made it the default base for fine-tunes; Qwen passed Llama in cumulative Hugging Face downloads in Sept 2025 and reached 942M by Mar 2026, with 69% of new derivatives built on it[^atom-report]. Qwen3.5 (Feb 2026, 397B-A17B, native multimodal) kept momentum[^cnbc-qwen35]. Signs of a shift: Qwen tech lead Lin Junyang resigned on 3–4 Mar 2026[^tc-lin], Alibaba kept Qwen3.7 proprietary, and the 12 Aug 2026 Qwen3.8-2.4T-A95B — the first open Max-class Qwen — ships under a "Qwen3.8-Max License" requiring a separate commercial license for MaaS / AI-work-assistant businesses above $50M revenue in any 12 months — while Qwen3.8-27B stayed Apache-2.0[^qwen38-license][^hf-qwen38-card][^wiki-qwen].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-11 | QwQ-32B-Preview reasoning model (Apache-2.0)[^wiki-qwen] | OSS | + |
| W24 | 2025-04 | Qwen3 family (0.6B–235B), all open weights Apache-2.0, 36T tokens, 119 languages[^wiki-qwen] | OSS | + |
| W24 | 2025-08 / 09 | ATOM: Qwen 40%+ of derivatives vs Llama 15% (Aug 2025); Qwen passes Llama in cumulative downloads (Sept 2025)[^mittr-china][^atom-report] | OSS | + |
| W9 | 2026-01-13 | Xinhua: Qwen passes 700M downloads[^xinhua-700m] | OSS | + |
| W9 | 2026-02-16 | Qwen3.5 open weights (397B-A17B) + proprietary Qwen3.5-Plus[^cnbc-qwen35][^wiki-qwen] | OSS | + |
| W9 | 2026-03-03 | Qwen tech lead Lin Junyang resigns a day after Qwen3.5 small models; CTO Zhou Jingren takes control[^tc-lin][^wiki-qwen] | OSS/Business | − |
| W6 | 2026-04 | Qwen3.6 (Apache-2.0) + Qwen3.6-Plus (proprietary)[^wiki-qwen] | OSS | + |
| W6 | 2026-05/06 | Qwen3.7-Max/Plus — proprietary only[^wiki-qwen] | OSS | − |
| W3 | 2026-07-15 | China's CAC approves Apple Intelligence in China with Qwen as the underlying model[^tc-apple] | Business | + |
| W3 | 2026-08-12 | Qwen3.8-2.4T-A95B (95B active, 262K native context) open weights under Qwen3.8-Max License (separate license for MaaS/AI-assistant businesses >$50M revenue per 12 months)[^hf-qwen38-card][^qwen38-license] | OSS | mixed |
| W3 | 2026-08-14 | Qwen3.8-27B distilled model under Apache-2.0; ~6.9M monthly downloads by Oct[^wiki-qwen][^hf-qwen] | OSS | + |

# OSS successes
- Clear #1 by downloads and derivatives (942.1M cumulative; 69% of new derivatives, Feb 2026)[^atom-report]; >200,000 open variants on HF[^wiki-qwen].
- Full size ladder from 0.6B to 2.4T, plus VL, Omni, Coder, Image and Guard models[^hf-qwen].
- Permissive Apache-2.0 for most weights removed friction that Llama's license imposed.

# OSS failures / risks
- Flagship license tightening in Aug 2026 (commercial license for >$50M revenue MaaS/assistant providers)[^qwen38-license].
- Growing share of best models proprietary (Plus/Max tiers)[^wiki-qwen].
- Key-person risk after Lin Junyang's March 2026 resignation and follow-on departures[^tc-lin].
- Western enterprise/government reluctance to deploy Chinese models.

# Business successes
- Qwen consumer app grew to a reported 200M+ MAU in early 2026 (third-party figures vary; Wikipedia cites 234M users by May 2026 — unconfirmed)[^wiki-qwen]; Apple Intelligence approved in China on Qwen (15 Jul 2026)[^tc-apple].
- Open weights as funnel to Alibaba Cloud API and proprietary tiers[^cnbc-qwen35].

# Business failures / risks
- Monetisation of open weights is indirect; price war across Chinese labs.

# By window
## W3
- Apple Intelligence China approval on Qwen (Jul 15)[^tc-apple]; Qwen3.8 flagship (2.4T) with gated license; Apache-2.0 27B (Aug 2026)[^qwen38-license][^wiki-qwen].
## W6
- Qwen3.6 open; Qwen3.7 proprietary-only[^wiki-qwen].
## W9
- Qwen3.5 (Feb 16)[^cnbc-qwen35]; Lin Junyang resigns (Mar)[^wiki-qwen]; >50% of global open-source model downloads as of March per SCMP[^scmp-qwen50].
## W12
- Continued Qwen3 point releases; consolidation of derivative dominance[^atom-report].
## W24
- Qwen3 launch (Apr 2025) and overtaking Llama (Sept 2025)[^atom-report].

# Lessons
- Breadth of sizes + Apache-2.0 + fast cadence wins the derivative ecosystem.
- Even the most open lab tightens terms on its largest flagship once it is commercially valuable.

# Related
- [Meta Llama](/projects/ai-models/meta-llama.md), [DeepSeek](/projects/ai-models/deepseek.md)
- [Flagship license tightening 2026](/events/2026-07-kimi-k3-and-flagship-license-tightening.md)
- [Domain review](/domains/ai-models.md)

[^wiki-qwen]: Wikipedia, Qwen.
[^atom-report]: ATOM Report, Apr 2026.
[^cnbc-qwen35]: CNBC, 17 Feb 2026.
[^xinhua-700m]: Xinhua, 13 Jan 2026.
[^hf-qwen]: Hugging Face Qwen org (as of 2026-10-03).
[^hf-qwen38]: Hugging Face search, Qwen3.8-2.4T (repos dated 2026-08-12).
[^scmp-qwen50]: South China Morning Post, 2026.
[^mittr-china]: MIT Technology Review, 12 Feb 2026.
[^hf-qwen38-card]: Hugging Face model card, Qwen3.8-2.4T-A95B.
[^qwen38-license]: Qwen3.8-Max License text on Hugging Face (accessed 2026-10-03).
[^tc-lin]: TechCrunch, 3 Mar 2026.
[^tc-apple]: TechCrunch, 15 Jul 2026.
