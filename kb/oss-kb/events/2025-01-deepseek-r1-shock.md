---
type: Event
title: DeepSeek-R1 release triggers record Nvidia sell-off
description: "DeepSeek's MIT-licensed R1 reasoning model (20 Jan 2025) topped the US App Store and helped wipe $589B off Nvidia's market value on 27 Jan 2025, resetting assumptions about open models and compute moats."
event_kind: release
date: 2025-01-20
window: W24
impact: mixed
projects: [projects/ai-models/deepseek, projects/ai-models/meta-llama]
organizations: [organizations/deepseek]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cnbc-nvda
    resource: https://www.cnbc.com/2025/01/27/nvidia-sheds-almost-600-billion-in-market-cap-biggest-drop-ever.html
    title: "CNBC: Nvidia sheds almost $600 billion in market cap, biggest one-day loss in U.S. history (2025-01-27)"
  - id: bbg-nvda
    resource: https://www.bloomberg.com/news/articles/2025-01-27/asml-sinks-as-china-ai-startup-triggers-panic-in-tech-stocks
    title: "Bloomberg: Nvidia's $589 billion DeepSeek plunge is largest in market history (2025-01-27)"
  - id: tfn-deepseek-raise
    resource: https://techfundingnews.com/deepseek-raises-7-4b-at-50b-valuation-in-first-ever-external-funding-round/
    title: "Tech Funding News: DeepSeek raises $7.4B at $50B valuation in first-ever external funding round (2026-06)"
  - id: tnw-deepseek
    resource: https://thenextweb.com/news/china-big-fund-deepseek-45-billion-funding-round
    title: "The Next Web: DeepSeek's $45bn valuation is also Beijing's strategic statement (2026-05)"
  - id: techspot-nvda
    resource: https://www.techspot.com/news/106534-nvidia-experiences-record-600-billion-market-value-loss.html
    title: "TechSpot: Nvidia loses record $600 billion market value in one day as DeepSeek AI shakes industry"
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report (arXiv 2604.07190)"
  - id: engadget-avocado
    resource: https://www.engadget.com/ai/meta-is-reportedly-working-on-a-new-ai-model-called-avocado-and-it-might-not-be-open-source-215426778.html
    title: "Engadget: Meta's Avocado might not be open source"
---

# What happened
DeepSeek released R1 on 20 Jan 2025 with weights under the MIT license, and within a week its app had overtaken ChatGPT at the top of the US App Store. On 27 Jan Nvidia fell ~17%, losing $589B in market value, the largest single-day loss in US market history. The selloff followed claims that DeepSeek trained V3 on H800s for under $6M.[^cnbc-nvda][^bbg-nvda][^techspot-nvda]

# Why it matters
It proved a Chinese lab could release near-frontier reasoning openly and cheaply, flipping the open-model narrative from "Llama vs closed" to "China vs US". From Jan 2025, derivatives of Alibaba and DeepSeek models outpaced US/EU ones on Hugging Face[^atom-report]. Reports later linked Meta's retreat from open weights partly to concern that DeepSeek had built on Llama's architecture[^engadget-avocado].

# Outcome so far
DeepSeek kept shipping MIT-licensed models. In June 2026 it closed its first external round, about 50B yuan (~$7.4B) at a valuation above $50B, led by China's state "Big Fund"; outside investors reportedly got no voting rights.[^tfn-deepseek-raise][^tnw-deepseek] Several governments banned the app on official devices (not re-verified in pass 2).

# Related
- [DeepSeek](/projects/ai-models/deepseek.md), [DeepSeek org](/organizations/deepseek.md), [Domain review](/domains/ai-models.md)

[^cnbc-nvda]: CNBC — https://www.cnbc.com/2025/01/27/nvidia-sheds-almost-600-billion-in-market-cap-biggest-drop-ever.html
[^bbg-nvda]: Bloomberg — https://www.bloomberg.com/news/articles/2025-01-27/asml-sinks-as-china-ai-startup-triggers-panic-in-tech-stocks
[^tfn-deepseek-raise]: Tech Funding News — https://techfundingnews.com/deepseek-raises-7-4b-at-50b-valuation-in-first-ever-external-funding-round/
[^tnw-deepseek]: The Next Web — https://thenextweb.com/news/china-big-fund-deepseek-45-billion-funding-round
[^techspot-nvda]: TechSpot, Jan 2025.
[^atom-report]: ATOM Report, Apr 2026.
[^engadget-avocado]: Engadget, Dec 2025.
