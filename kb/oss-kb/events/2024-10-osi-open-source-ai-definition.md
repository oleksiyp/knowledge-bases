---
type: Event
title: OSI publishes the Open Source AI Definition 1.0 and the open-washing debate
description: "The OSI's OSAID 1.0 (Oct 2024) set criteria (data information, code, weights) that most 'open' models — Llama, Gemma ≤3, FLUX dev, Grok 2.5 — fail, framing two years of 'open-washing' debate."
event_kind: governance
date: 2024-10-28
window: W24
impact: mixed
projects: [projects/ai-models/olmo, projects/ai-models/meta-llama, projects/ai-models/grok-open-weights, projects/ai-models/gemma]
organizations: [organizations/allen-institute-for-ai]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-osaid
    resource: https://techcrunch.com/2024/10/28/we-finally-have-an-official-definition-for-open-source-ai/
    title: "TechCrunch: We finally have an 'official' definition for open source AI (2024-10-28)"
    author: org:techcrunch
  - id: sa-osaid
    resource: https://siliconangle.com/2024/10/28/osi-clarifies-makes-ai-systems-open-source-open-models-fall-short/
    title: "SiliconANGLE: OSI clarifies what makes AI systems open-source, but most 'open' models fall short (2024-10-28)"
  - id: osi-ato
    resource: https://opensource.org/press-mentions/osis-open-source-ai-definition-1-0-unveiled-at-all-things-open
    title: "OSI: OSAID 1.0 unveiled at All Things Open"
  - id: osi-ai
    resource: https://opensource.org/ai
    title: "OSI: Open Source AI"
  - id: gemma4-blog
    resource: https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/
    title: "Google blog: Gemma 4 (2026-04-02, Apache 2.0)"
  - id: decoder-gemma4
    resource: https://the-decoder.com/googles-gemma-4-is-now-available-with-apache-2-0-licensing-for-the-first-time/
    title: "The Decoder: Gemma 4 available with Apache 2.0 licensing for the first time"
  - id: osi-obrien
    resource: https://www.prnewswire.com/news-releases/open-source-initiative-appoints-duane-obrien-as-executive-director-302742716.html
    title: "PR Newswire: Open Source Initiative appoints Duane O'Brien as Executive Director (2026-04-15)"
---

# What happened
The Open Source Initiative released OSAID 1.0 on Oct 28, 2024 at the All Things Open conference, after a multi-year co-design process.[^tc-osaid][^osi-ato] It requires the four freedoms (use, study, modify, share) and access to the preferred form for modification: sufficiently detailed data information, full code, and weights.[^osi-ai] Endorsers include Mozilla, the Eclipse Foundation, SUSE, EleutherAI and others.[^osi-ai]

# Why it matters
Most headline "open" models fail it. TechCrunch noted that Meta's Llama license requires a special licence above 700M monthly active users, and that Stability AI and Mistral licences restrict commercial use; Meta took part in drafting but disagreed with the final text.[^tc-osaid][^sa-osaid] Earlier Gemma versions shipped under Google's own restrictive terms.[^decoder-gemma4] The EU AI Act's lighter regime for free and open-source models gives the label legal stakes (see the [EU AI Act GPAI event](/events/2025-08-eu-ai-act-gpai-obligations.md)).

# Outcome so far
Two diverging trends: (1) licence liberalisation by some, most notably Google's Gemma 4 under Apache-2.0 (Apr 2, 2026), its first Apache release in the line;[^gemma4-blog][^decoder-gemma4] (2) new revenue-gated "open" licences on 2026 flagships (see [flagship licence tightening](/events/2026-07-kimi-k3-and-flagship-license-tightening.md)). Fully open (OSAID-grade) models such as OLMo remain a small share of downloads. The OSI itself went through leadership change: after a period without a permanent executive director, it appointed Duane O'Brien (ex-Capital One OSPO) effective Apr 13, 2026.[^osi-obrien]

# Related
- [OLMo](/projects/ai-models/olmo.md), [Grok open weights](/projects/ai-models/grok-open-weights.md), [Flagship license tightening](/events/2026-07-kimi-k3-and-flagship-license-tightening.md), [EU AI Act GPAI](/events/2025-08-eu-ai-act-gpai-obligations.md)

[^tc-osaid]: TechCrunch — https://techcrunch.com/2024/10/28/we-finally-have-an-official-definition-for-open-source-ai/
[^sa-osaid]: SiliconANGLE — https://siliconangle.com/2024/10/28/osi-clarifies-makes-ai-systems-open-source-open-models-fall-short/
[^osi-ato]: OSI — https://opensource.org/press-mentions/osis-open-source-ai-definition-1-0-unveiled-at-all-things-open
[^osi-ai]: OSI — https://opensource.org/ai
[^gemma4-blog]: Google blog — https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/
[^decoder-gemma4]: The Decoder — https://the-decoder.com/googles-gemma-4-is-now-available-with-apache-2-0-licensing-for-the-first-time/
[^osi-obrien]: PR Newswire — https://www.prnewswire.com/news-releases/open-source-initiative-appoints-duane-obrien-as-executive-director-302742716.html
