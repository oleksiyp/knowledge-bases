---
type: OSS Project
title: GLM (Zhipu AI / Z.ai)
description: "Zhipu's MIT-licensed GLM family (GLM-4.5 → GLM-5.3); a top open coding/agent model line trained on Huawei Ascend, backed by the first listed Chinese foundation-model company (HK IPO Jan 2026)."
resource: https://huggingface.co/zai-org
tags: [open-weights, llm, mit, china, coding, agentic, huawei-ascend]
domain: ai-models
license: MIT
license_history: ["GLM-4 license (custom, 2024)", "MIT (2025-04-)"]
governance: single-vendor
steward: Zhipu AI (Knowledge Atlas Technology, operating as Z.ai)
backing_orgs: [organizations/zhipu-ai]
metrics:
  glm_5_3_flash_downloads_last_month: { value: "5.27M", as_of: 2026-10-03 }
  hf_followers: { value: 21734, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-zai
    resource: https://en.wikipedia.org/wiki/Z.ai
    title: "Wikipedia: Z.ai"
  - id: caixin-glm5
    resource: https://www.caixinglobal.com/2026-02-12/zhipu-ai-launches-new-model-better-at-coding-learning-102413996.html
    title: "Caixin: Zhipu AI launches new model better at coding, learning (2026-02-12)"
    author: org:caixin
  - id: cnbc-zhipu-ipo
    resource: https://www.cnbc.com/2026/01/08/china-ai-tiger-goes-ipo-zhipu-hong-kong-debut-openai-knowledge-atlas-hsi-hang-seng-listing.html
    title: "CNBC: The first of China's 'AI tigers' goes public as Zhipu climbs in Hong Kong debut"
    author: org:cnbc
  - id: hf-zai
    resource: https://huggingface.co/zai-org
    title: zai-org on Hugging Face
    last_modified: 2026-10-03T00:00:00Z
  - id: row-ipo
    resource: https://restofworld.org/2026/zhipu-ai-minimax-ipo/
    title: "Rest of World: China's MiniMax, Zhipu AI beat OpenAI to IPO"
    author: org:rest-of-world
  - id: caixin-1t
    resource: https://www.caixinglobal.com/2026-06-23/new-model-propels-zhipu-ais-market-value-to-record-hk1-trillion-102456760.html
    title: "Caixin: New model propels Zhipu AI's market value to record HK$1 trillion (2026-06-23)"
    author: org:caixin
  - id: caixin-112b
    resource: https://www.caixinglobal.com/2026-05-29/china-ai-developer-zhipu-hits-record-112-billion-valuation-102449295.html
    title: "Caixin: China AI developer Zhipu hits record $112 billion valuation (2026-05-29)"
    author: org:caixin
  - id: nist-caisi-glm53
    resource: https://www.nist.gov/news-events/news/2026/09/caisis-assessment-zais-glm-53-cyber-capabilities
    title: "NIST CAISI: Assessment of Z.ai's GLM-5.3 cyber capabilities (2026-09-17)"
    author: org:nist
  - id: mlq-glm53
    resource: https://mlq.ai/news/zhipu-releases-glm-53-through-its-coding-service-with-weights-still-two-weeks-away/
    title: "MLQ: Zhipu releases GLM-5.3 through its coding service, with weights still two weeks away"
---

# Summary
GLM is the third pillar (with DeepSeek and Qwen) of China's open-weight surge. Since April 2025 Zhipu has released under MIT: GLM-4.5/4.5-Air (Jul 2025), GLM-4.6 (Sept 2025, domestic chips), GLM-4.7 (Dec 2025), GLM-5 (Feb 2026; 744B/40B active, reportedly trained entirely on Huawei Ascend), GLM-5.1 (Apr 2026), GLM-5.2 (Jun 2026, 1M context) and GLM-5.3 (Aug 2026)[^wiki-zai][^caixin-glm5]. Zhipu became the first Chinese LLM company to list (HK, 8 Jan 2026, ~$558M raised)[^cnbc-zhipu-ipo], and its market cap peaked above HK$1 trillion (~US$128B) on 22 Jun 2026 after GLM-5.2 — ~2,400% above the IPO price[^caixin-1t] (Wikipedia gives ~$62B for Aug 2026; not confirmed by press) — despite small revenue ($27M with $330M losses in H1 2025)[^row-ipo].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01 | Added to US Entity List[^wiki-zai] | Business | − |
| W24 | 2025-04 | Models moved to MIT license[^wiki-zai] | OSS | + |
| W24 | 2025-07 | GLM-4.5 / 4.5-Air; international rebrand to Z.ai[^wiki-zai] | OSS | + |
| W24 | 2025-09 | GLM-4.6 using domestic chips[^wiki-zai] | OSS | + |
| W12 | 2025-12 | GLM-4.6V and GLM-4.7[^wiki-zai] | OSS | + |
| W9 | 2026-01-08 | HK IPO, ~$558M raised, ~HK$55.5B valuation[^cnbc-zhipu-ipo] | Business | + |
| W9 | 2026-02-11/12 | GLM-5 (744B MoE), MIT; shares later fall 23% over compute shortage[^caixin-glm5][^wiki-zai] | OSS/Business | +/− |
| W6 | 2026-04-07 | GLM-5.1 open-sourced; stock +11.5%[^wiki-zai] | OSS | + |
| W6 | 2026-05-29 | Market value hits record ~$112B[^caixin-112b] | Business | + |
| W6 | 2026-06-17 | GLM-5.2, 1M context, MIT; ranks #2 on Code Arena web dev[^wiki-zai][^caixin-1t] | OSS | + |
| W6 | 2026-06-22 | Market cap passes HK$1T (~US$128B)[^caixin-1t] | Business | + |
| W3 | 2026-08-14 / 08-28 | GLM-5.3 (post-training upgrade of the ~743B GLM-5 base) via coding service; open weights on HF ~2 weeks later after a safety review[^mlq-glm53][^wiki-zai] | OSS | + |
| W3 | 2026-09-17 | US NIST CAISI calls GLM-5.3 "the most cyber-capable open-weight model released to date", ~4 months behind US frontier[^nist-caisi-glm53] | OSS | mixed |

# OSS successes
- Consistent MIT licensing (no regional or revenue gating) at frontier scale — now among the most permissive top-tier labs[^wiki-zai].
- High usage: GLM-5.3-Flash ~5.3M monthly downloads (Oct 2026)[^hf-zai].

# OSS failures / risks
- Compute scarcity (Feb 2026 stock drop attributed to it)[^wiki-zai].
- Security scrutiny: US government (CAISI) now benchmarks GLM's offensive-cyber capability[^nist-caisi-glm53].

# Business successes
- First listed Chinese LLM company; retail tranche oversubscribed >1,000×[^cnbc-zhipu-ipo]; shares up ~2,400% from IPO by June 2026[^caixin-1t].

# Business failures / risks
- Heavy losses vs revenue ($27M revenue / $330M loss, H1 2025)[^row-ipo]; Entity List limits Western sales[^wiki-zai].

# By window
## W3
- GLM-5.3 (Aug 14; weights late Aug)[^mlq-glm53]; CAISI cyber assessment (Sept 17)[^nist-caisi-glm53].
## W6
- GLM-5.1 (Apr 7), GLM-5.2 (Jun 17)[^wiki-zai]; market cap >HK$1T (Jun 22)[^caixin-1t].
## W9
- IPO (Jan 8)[^cnbc-zhipu-ipo]; GLM-5 on Ascend (Feb)[^caixin-glm5].
## W12
- GLM-4.7 (Dec 2025)[^wiki-zai].
## W24
- MIT relicense; GLM-4.5, 4.6[^wiki-zai].

# Lessons
- Public markets in Hong Kong rewarded open-weight labs richly despite thin revenue — open weights as brand + talent magnet.

# Related
- [Zhipu AI org](/organizations/zhipu-ai.md), [HK IPOs event](/events/2026-01-zhipu-minimax-hong-kong-ipos.md)
- [DeepSeek](/projects/ai-models/deepseek.md), [MiniMax](/projects/ai-models/minimax.md)

[^wiki-zai]: Wikipedia, Z.ai.
[^caixin-glm5]: Caixin, 12 Feb 2026.
[^cnbc-zhipu-ipo]: CNBC, 8 Jan 2026.
[^hf-zai]: HF zai-org (2026-10-03).
[^row-ipo]: Rest of World, Jan 2026.
[^caixin-1t]: Caixin, 23 Jun 2026.
[^caixin-112b]: Caixin, 29 May 2026.
[^nist-caisi-glm53]: NIST CAISI, 17 Sept 2026.
[^mlq-glm53]: MLQ.ai, Aug 2026.
