---
type: Event
title: Kimi K3 and the 2026 tightening of flagship open-weight licenses
description: "Kimi K3 (16 Jul 2026, 2.8T) shipped under a license requiring commercial agreements from large MaaS hosts; Qwen3.8-2.4T (12 Aug) and Mistral Medium 3.5 (May) also added revenue gates — a shift from MIT/Apache toward 'open but monetised' flagships."
event_kind: license-change
date: 2026-07-16
window: W3
impact: mixed
projects: [projects/ai-models/kimi, projects/ai-models/qwen, projects/ai-models/mistral]
organizations: [organizations/moonshot-ai, organizations/mistral-ai]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: k3-license
    resource: https://huggingface.co/moonshotai/Kimi-K3/blob/main/LICENSE
    title: Kimi K3 License
  - id: hf-k3
    resource: https://huggingface.co/moonshotai/Kimi-K3
    title: Kimi-K3 model card
  - id: wiki-moonshot
    resource: https://en.wikipedia.org/wiki/Moonshot_AI
    title: "Wikipedia: Moonshot AI"
  - id: bbg-moonshot-arr
    resource: https://www.bloomberg.com/news/articles/2026-09-11/china-ai-star-moonshot-eyes-2-billion-annualized-sales-in-2026
    title: "Bloomberg: China AI star Moonshot eyes $2 billion annualized sales in 2026 (2026-09-11; ARR >$1B in Aug, $300M in Jun)"
    author: org:bloomberg
  - id: qz-k3-revshare
    resource: https://qz.com/moonshot-ai-kimi-k3-revenue-sharing-microsoft-amazon-google-082626
    title: "Quartz (citing Reuters): Moonshot AI is seeking a revenue cut from Microsoft, Amazon and Google (2026-08-26)"
    author: org:quartz
  - id: vb-k3-license
    resource: https://venturebeat.com/technology/kimi-k3s-full-weights-are-here-but-theyre-open-with-a-caveat-what-enterprises-should-know
    title: "VentureBeat: Kimi K3's full weights are here, but they're 'open' with a caveat (2026-07-27/28)"
    author: org:venturebeat
  - id: wiki-qwen
    resource: https://en.wikipedia.org/wiki/Qwen
    title: "Wikipedia: Qwen"
  - id: hf-medium35
    resource: https://huggingface.co/mistralai/Mistral-Medium-3.5-128B
    title: Mistral-Medium-3.5-128B model card
  - id: wiki-zai
    resource: https://en.wikipedia.org/wiki/Z.ai
    title: "Wikipedia: Z.ai"
---

# What happened
- **Kimi K3** (16 Jul 2026; 2.8T total / 104B active, 1M context)[^wiki-moonshot][^hf-k3]: code and weights under the "Kimi K3 License". Model-as-a-Service providers exceeding $20M revenue over 12 months must negotiate a separate agreement; products with >100M MAU or >$20M monthly revenue must display "Kimi K3"[^k3-license]. Full weights were published on 27 July[^vb-k3-license]. The license text sets no revenue-share percentage[^vb-k3-license]; the "up to 30%" figure is what Moonshot sought from Microsoft, Amazon and Google in hosting talks reported by Reuters on 26 Aug 2026[^qz-k3-revshare]. (Corrected in pass 2: 30% share = negotiating ask, not a license term.)
- **Qwen3.8-2.4T-A95B** (12 Aug 2026): requires a commercial license with Alibaba for providers above $50M annual revenue, while the distilled Qwen3.8-27B stays Apache-2.0[^wiki-qwen].
- **Mistral Medium 3.5** (May 2026): open weights under a Modified MIT license with exceptions for large-revenue companies[^hf-medium35].

# Why it matters
Through 2025 the Chinese labs won share with plain MIT/Apache weights. Once third-party inference hosts were reselling their flagships at scale, labs moved to capture that value — the AI analogue of the database world's BSL/SSPL relicensing, aimed at clouds/hosts rather than end users. Not all followed: Zhipu's GLM-5.x and DeepSeek V4 remain MIT[^wiki-zai].

# Outcome so far
K3 still drew ~1.2M monthly downloads (Oct 2026)[^hf-k3], and Moonshot's ARR rose from ~$300M in June to over $1B in August[^bbg-moonshot-arr]. No major fork or host boycott found. Smaller models remain permissive, creating a two-tier openness model.

# Related
- [Kimi](/projects/ai-models/kimi.md), [Qwen](/projects/ai-models/qwen.md), [Mistral](/projects/ai-models/mistral.md), [OSI definition](/events/2024-10-osi-open-source-ai-definition.md)

[^k3-license]: Kimi K3 License (Hugging Face).
[^hf-k3]: Kimi-K3 model card and HF org page (2026-10-03).
[^wiki-moonshot]: Wikipedia, Moonshot AI.
[^wiki-qwen]: Wikipedia, Qwen.
[^hf-medium35]: Mistral Medium 3.5 model card.
[^wiki-zai]: Wikipedia, Z.ai.
[^bbg-moonshot-arr]: Bloomberg, 2026-09-11.
[^qz-k3-revshare]: Quartz citing Reuters, 2026-08-26.
[^vb-k3-license]: VentureBeat, July 2026.
