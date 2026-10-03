---
type: OSS Project
title: Kimi (Moonshot AI)
description: "Moonshot AI's trillion-parameter open-weight agentic models (K2 → K2.5 → K3); a huge 2025-26 success that underpins US products like Cursor Composer 2, but K3 (Jul 2026) brought a revenue-gated license and distillation allegations shadow the lab."
resource: https://huggingface.co/moonshotai
tags: [open-weights, llm, china, moe, agentic, modified-mit]
domain: ai-models
license: "Kimi K3 License (K3); Modified MIT (K2.x)"
license_history: ["Modified MIT with attribution clause (K2, 2025-07; K2.5, 2026-01)", "Kimi K3 License: separate agreement for MaaS providers >$20M/12 months (2026-07)"]
governance: single-vendor
steward: Moonshot AI
backing_orgs: [organizations/moonshot-ai]
metrics:
  kimi_k3_downloads_last_month: { value: "1.2M", as_of: 2026-10-03 }
  hf_followers: { value: 19167, as_of: 2026-10-03 }
  arr: { value: "$1B+ (Aug 2026; $200M Apr, $300M Jun)", as_of: 2026-08-31 }
  valuation_usd: { value: "35B (Jul 2026 round); ~50B in follow-on talks", as_of: 2026-09-03 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-moonshot
    resource: https://en.wikipedia.org/wiki/Moonshot_AI
    title: "Wikipedia: Moonshot AI"
  - id: tc-moonshot
    resource: https://techcrunch.com/2026/05/07/chinas-moonshot-ai-raises-2b-at-20b-valuation-as-demand-for-open-source-ai-skyrockets/
    title: "TechCrunch: China's Moonshot AI raises $2B at $20B valuation (2026-05-07)"
    author: org:techcrunch
  - id: siliconangle-k25
    resource: https://siliconangle.com/2026/01/27/moonshot-ai-releases-open-source-kimi-k2-5-model-1t-parameters/
    title: "SiliconANGLE: Moonshot AI releases open-source Kimi K2.5 model with 1T parameters (2026-01-27)"
  - id: hf-moonshot
    resource: https://huggingface.co/moonshotai
    title: moonshotai organization on Hugging Face
    last_modified: 2026-10-03T00:00:00Z
  - id: k3-license
    resource: https://huggingface.co/moonshotai/Kimi-K3/blob/main/LICENSE
    title: Kimi K3 License
  - id: hf-k3
    resource: https://huggingface.co/moonshotai/Kimi-K3
    title: Kimi-K3 model card
  - id: fortune-ipo
    resource: https://fortune.com/2026/07/23/moonshot-deepseek-great-chinese-ai-ipo-rush/
    title: "Fortune: Moonshot, DeepSeek, and the great Chinese AI IPO rush (2026-07-23)"
    author: org:fortune
  - id: wiki-tml
    resource: https://en.wikipedia.org/wiki/Thinking_Machines_Lab
    title: "Wikipedia: Thinking Machines Lab"
  - id: aiinsider-seriesc
    resource: https://theaiinsider.tech/2026/01/02/moonshot-ai-raises-500m-series-c-valuation-reaches-4-3b-as-kimi-models-gain-global-traction/
    title: "The AI Insider: Moonshot AI raises $500M Series C, valuation reaches $4.3B (2026-01-02)"
  - id: bbg-35b
    resource: https://news.bloomberglaw.com/antitrust/chinas-moonshot-ai-passes-funding-goal-to-hit-35-billion-value
    title: "Bloomberg: China's Moonshot AI passes funding goal to hit $35 billion value (2026-07-29)"
    author: org:bloomberg
  - id: reuters-ipo
    resource: https://www.zawya.com/en/capital-markets/ai-shaping-digital-future/chinese-ai-firm-moonshot-files-confidentially-for-hong-kong-ipo-sources-say-476792
    title: "Reuters (via Zawya): Chinese AI firm Moonshot files confidentially for Hong Kong IPO (2026-09-03)"
    author: org:reuters
  - id: tc-2b-arr
    resource: https://techcrunch.com/2026/09/11/kimi-maker-moonshot-ai-targets-2-billion-in-annual-revenue/
    title: "TechCrunch: Kimi-maker Moonshot AI targets $2B in annual revenue (2026-09-11)"
    author: org:techcrunch
  - id: 36kr-arr
    resource: https://eu.36kr.com/en/p/3978923620177539
    title: "36Kr: Kimi targets $2B annual revenue & prepares for $50B valuation Hong Kong IPO"
  - id: reuters-revshare
    resource: https://news.slashdot.org/story/26/08/26/2042210/chinas-moonshot-in-talks-with-microsoft-amazon-google-over-k3-revenue-sharing
    title: "Reuters (via Slashdot): Moonshot in talks with Microsoft, Amazon, Google over K3 revenue sharing (2026-08-26)"
    author: org:reuters
  - id: decrypt-cac
    resource: https://decrypt.co/379120/china-probes-deepseek-moonshot-data-leaks-anthropic-claude
    title: "Decrypt: China probes DeepSeek, Moonshot over alleged data leaks to Anthropic's Claude (2026-09-23)"
---

# Summary
Kimi went from a domestic chatbot to the leading open agentic model family. Kimi K2 (Jul 2025; 1T params, 32B active, modified MIT) became HF's most-downloaded model the day after release; K2 Thinking (Nov 2025), K2.5 (27 Jan 2026, native multimodal, Agent Swarm) and K2.6 followed[^wiki-moonshot][^siliconangle-k25]. K2.6 was the #2 most-used LLM on OpenRouter by May 2026[^tc-moonshot], and K2.5 became the base or data source for US products (Cursor's Composer 2; Thinking Machines' Inkling)[^wiki-moonshot][^wiki-tml]. K3 (16 Jul 2026; 2.8T params, 104B active, 1M context) is the largest open model to date but ships under a new Kimi K3 License requiring a separate agreement for MaaS providers above $20M revenue per 12 months[^hf-k3][^k3-license]. Business is booming: valuation $4.3B (Dec 2025) → $10B (early 2026) → $20B (May) → $35B (Jul 2026)[^aiinsider-seriesc][^tc-moonshot][^bbg-35b]; ARR went $200M (Apr) → $300M (Jun) → $1B+ (Aug) with a $2B end-2026 target[^tc-moonshot][^36kr-arr][^tc-2b-arr]; and Moonshot confidentially filed for a ~$3B Hong Kong IPO on 3 Sept 2026[^reuters-ipo]. But Anthropic's distillation accusations (Feb and 10 Sept 2026), US blacklist threats and a Chinese CAC data-transfer probe are live risks[^wiki-moonshot][^decrypt-cac][^reuters-revshare].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07 | Kimi K2 (1T/32B active, 15.5T tokens) under modified MIT; #1 HF download next day[^wiki-moonshot] | OSS | + |
| W24 | 2025-09-09 | K2-Instruct-0905, 256K context[^wiki-moonshot] | OSS | + |
| W12 | 2025-11 | K2 Thinking (200–300 sequential tool calls; ~$4.6M reported training cost)[^wiki-moonshot] | OSS | + |
| W12 | 2025-12-31 | $500M Series C at $4.3B led by IDG (announced ~2 Jan 2026)[^aiinsider-seriesc] | Business | + |
| W9 | 2026-01-27 | K2.5 multimodal + Kimi Code CLI[^siliconangle-k25][^wiki-moonshot] | OSS | + |
| W9 | 2026-02 | Anthropic alleges Moonshot/DeepSeek/MiniMax distillation via fraudulent accounts[^wiki-moonshot] | OSS | − |
| W9 | 2026-Q1 | $700M round at $10B[^tc-moonshot] | Business | + |
| W9 | 2026-03 | Cursor Composer 2 built on Kimi base[^wiki-moonshot] | OSS | + |
| W6 | 2026-04 | US House Homeland Security Committee presses DoorDash and Anysphere over Kimi use[^wiki-moonshot] | Business | − |
| W6 | 2026-05-07 | $2B at $20B led by Meituan's Long-Z; ARR $200M (April); K2.6 #2 most-used LLM on OpenRouter[^tc-moonshot] | Business | + |
| W6 | 2026-06 | ARR ~$300M[^36kr-arr] | Business | + |
| W3 | 2026-07-16 | Kimi K3 (2.8T/104B active, 1M context) launched; weights on HF (late Jul) under Kimi K3 License (separate agreement for MaaS >$20M/12 mo; "Kimi K3" branding for >100M MAU or >$20M monthly revenue)[^hf-k3][^k3-license] | OSS | mixed |
| W3 | 2026-07-29 | $3.5B round (target was $1–2B) at $35B; national AI fund among leads[^bbg-35b] | Business | + |
| W3 | 2026-08 | ARR passes $1B; $2B end-2026 target[^36kr-arr][^tc-2b-arr] | Business | + |
| W3 | 2026-08-26 | Reuters: talks with Microsoft, Amazon, Google to host K3 for up to 30% revenue share; US officials allege chip smuggling and distillation, Bessent floats blacklist[^reuters-revshare] | Business | mixed |
| W3 | 2026-09-03 | Confidential HK IPO filing seeking ~$3B; follow-on round at ~$50B[^reuters-ipo] | Business | + |
| W3 | 2026-09-10 / 09-23 | Anthropic threat report names 7 Chinese labs; alleges Moonshot used 5,380 fraudulent accounts for 23M+ exchanges. CAC then probes DeepSeek and Moonshot over user data reaching Anthropic (reported 23 Sept)[^decrypt-cac] | OSS/Business | − |

# OSS successes
- Pioneered open trillion-parameter agentic models; adopted as base by US startups[^wiki-moonshot][^wiki-tml].
- K3 drew ~1.2M monthly downloads despite 2.8T size[^hf-moonshot].

# OSS failures / risks
- K3 license moves away from (modified) MIT to negotiated commercial terms for large hosts[^k3-license].
- Distillation allegations undermine trust; US political scrutiny of downstream users[^wiki-moonshot].

# Business successes
- Valuation $4.3B (end-2025) → $10B → $20B (May 2026) → $35B (Jul 2026)[^aiinsider-seriesc][^tc-moonshot][^bbg-35b]; ARR $200M (Apr) → $1B+ (Aug 2026)[^tc-moonshot][^36kr-arr]. Corrected in pass 2: ARR "$200M/$300M" conflict resolved as a timeline — $200M in April (TechCrunch), $300M in June (36Kr).

# Business failures / risks
- Reports of access to restricted Nvidia GPUs (denied by Alibaba) raise export-control risk; US Treasury has floated a trade blacklist[^wiki-moonshot][^reuters-revshare].
- Open weights compress margins vs closed rivals, and K3 usage reportedly declined slightly after launch[^tc-2b-arr].

# By window
## W3
- K3 release and license (Jul 16)[^hf-k3]; $3.5B at $35B (Jul 29)[^bbg-35b]; ARR >$1B (Aug)[^36kr-arr]; HK IPO filing (Sept 3)[^reuters-ipo]; Sept distillation accusation and CAC probe[^decrypt-cac].
## W6
- $2B at $20B; K2.6 #2 on OpenRouter[^tc-moonshot].
## W9
- K2.5 (Jan 27)[^siliconangle-k25]; distillation accusation (Feb)[^wiki-moonshot].
## W12
- K2 Thinking (Nov 2025); $500M at $4.3B[^wiki-moonshot][^tc-moonshot].
## W24
- K2 launch (Jul 2025)[^wiki-moonshot].

# Lessons
- Open weights can be a go-to-market for API revenue: inference-provider competition grows demand, then the license is tightened to capture value from large hosts.
- Model provenance (distillation from closed models) is becoming a legal/political attack surface for open labs.

# Related
- [Moonshot AI org](/organizations/moonshot-ai.md)
- [Flagship license tightening](/events/2026-07-kimi-k3-and-flagship-license-tightening.md), [Distillation accusations](/events/2026-02-anthropic-distillation-accusations.md)
- [Inkling](/projects/ai-models/inkling.md)

[^wiki-moonshot]: Wikipedia, Moonshot AI.
[^tc-moonshot]: TechCrunch, 7 May 2026.
[^siliconangle-k25]: SiliconANGLE, 27 Jan 2026.
[^hf-moonshot]: HF moonshotai org (2026-10-03).
[^k3-license]: Kimi K3 License text on Hugging Face (Wikipedia's "30% revenue share" claim is NOT reflected in the license text, which requires a negotiated agreement).
[^hf-k3]: Kimi-K3 model card.
[^fortune-ipo]: Fortune, 23 Jul 2026.
[^wiki-tml]: Wikipedia, Thinking Machines Lab.
[^aiinsider-seriesc]: The AI Insider, 2 Jan 2026.
[^bbg-35b]: Bloomberg, 29 Jul 2026.
[^reuters-ipo]: Reuters via Zawya, 3 Sept 2026.
[^tc-2b-arr]: TechCrunch, 11 Sept 2026.
[^36kr-arr]: 36Kr, Sept 2026.
[^reuters-revshare]: Reuters via Slashdot, 26 Aug 2026 (the "30% revenue share" figure is what Moonshot sought from US clouds, not a license term).
[^decrypt-cac]: Decrypt, 23 Sept 2026.
