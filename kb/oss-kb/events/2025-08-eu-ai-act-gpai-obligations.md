---
type: Event
title: EU AI Act general-purpose AI obligations take effect
description: "From August 2025, GPAI model providers in the EU must meet transparency/copyright duties; free and open-source models get lighter obligations unless above the 10^25 FLOP systemic-risk threshold. Meta declined the voluntary Code of Practice."
event_kind: governance
date: 2025-08-02
window: W24
impact: mixed
projects: [projects/ai-models/meta-llama, projects/ai-models/mistral, projects/ai-models/olmo]
organizations: [organizations/mistral-ai]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ec-aiact
    resource: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
    title: "European Commission: AI Act (regulatory framework)"
  - id: bm-gpai
    resource: https://www.bakermckenzie.com/en/insight/publications/2025/08/general-purpose-ai-obligations
    title: "Baker McKenzie: General-purpose AI obligations under the EU AI Act kick in from 2 August 2025"
  - id: skadden-gpai
    resource: https://www.skadden.com/insights/publications/2025/08/eus-general-purpose-ai-obligations
    title: "Skadden: EU's general-purpose AI obligations are now in force, with new guidance (2025-08)"
  - id: cnbc-meta-code
    resource: https://www.cnbc.com/2025/07/18/meta-europe-ai-code.html
    title: "CNBC: Meta says it won't sign Europe AI agreement (2025-07-18)"
---

# What happened
The AI Act entered into force on 1 Aug 2024. Obligations for providers of general-purpose AI (GPAI) models applied from 2 Aug 2025 for models placed on the market from that date.[^ec-aiact][^bm-gpai] The Commission published a voluntary GPAI Code of Practice covering transparency, copyright and safety/security on 10 Jul 2025 and confirmed it on 1 Aug.[^skadden-gpai] Meta said on 18 Jul 2025 that it would not sign, calling the Code an overreach that introduces "legal uncertainties".[^cnbc-meta-code] Models released under free and open-source licences get lighter transparency duties but must still publish a training-content summary and a copyright policy, and models above the 10^25 FLOP systemic-risk threshold get no open-source exemption.[^bm-gpai][^skadden-gpai]

# Why it matters
It creates a legal incentive to use genuinely open licences, since the exemption is narrower than "open weights", and adds a compliance burden for the largest open models.

# Outcome so far
Open-weight releases continued into the EU; no enforcement actions against open models were found in this research.

# Related
- [OSI definition](/events/2024-10-osi-open-source-ai-definition.md), [Mistral AI](/organizations/mistral-ai.md)

[^ec-aiact]: European Commission — https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
[^bm-gpai]: Baker McKenzie — https://www.bakermckenzie.com/en/insight/publications/2025/08/general-purpose-ai-obligations
[^skadden-gpai]: Skadden — https://www.skadden.com/insights/publications/2025/08/eus-general-purpose-ai-obligations
[^cnbc-meta-code]: CNBC — https://www.cnbc.com/2025/07/18/meta-europe-ai-code.html
