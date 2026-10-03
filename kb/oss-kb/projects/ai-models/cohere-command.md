---
type: OSS Project
title: Cohere Command / Aya open weights
description: "Cohere's Command and Aya weights were research-only (CC-BY-NC) until Command A+ (May 2026) became its first Apache-2.0 model; the business grew to ~$240M ARR and signed a definitive merger with Aleph Alpha (Sept 2026, ~$20B combined)."
resource: https://huggingface.co/CohereLabs
tags: [open-weights, apache-2.0, non-commercial, enterprise, multilingual, canada, europe, sovereign-ai]
domain: ai-models
license: "Apache-2.0 (Command A+, 2026-05); CC-BY-NC-4.0 (earlier Command R/R+/A and Aya weights)"
license_history: ["CC-BY-NC-4.0 for Command R/R+/A and Aya weights (2024-)", "Apache-2.0 for Command A+ (2026-05-20)"]
governance: single-vendor
steward: Cohere
backing_orgs: [organizations/cohere]
metrics:
  arr_usd: { value: "~240M (2025 exit)", as_of: 2026-02-13 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
sources:
  - id: wiki-cohere
    resource: https://en.wikipedia.org/wiki/Cohere
    title: "Wikipedia: Cohere"
  - id: cnbc-cohere-rev
    resource: https://www.cnbc.com/2026/02/13/ai-startup-cohere-revenue-ipo.html
    title: "CNBC: Enterprise AI startup Cohere tops revenue target as momentum builds to IPO (2026-02-13)"
    author: org:cnbc
  - id: tc-aleph
    resource: https://techcrunch.com/2026/04/25/why-cohere-is-merging-with-aleph-alpha/
    title: "TechCrunch: Why Cohere is merging with Aleph Alpha (2026-04-25)"
    author: org:techcrunch
  - id: tnw-aleph-definitive
    resource: https://thenextweb.com/news/cohere-aleph-alpha-definitive-agreement-transatlantic-sovereign-ai
    title: "TNW: Cohere and Aleph Alpha sign, with headquarters in Berlin and Toronto (2026-09-16)"
  - id: vb-command-a-plus
    resource: https://venturebeat.com/technology/cohere-cracks-lossless-quantization-and-native-citations-with-first-full-apache-2-0-licensed-open-model-command-a
    title: "VentureBeat: Cohere's first full Apache 2.0 licensed open model, Command A+ (2026-05)"
    author: org:venturebeat
  - id: decoder-command-a-plus
    resource: https://the-decoder.com/cohere-open-sources-its-strongest-model-yet/
    title: "The Decoder: Cohere open-sources its strongest model yet"
---

# Summary
Until 2026 Cohere published Command and Aya weights for research only (CC-BY-NC-4.0), so its OSS footprint was minor[^wiki-cohere]. That changed on 20 May 2026 with Command A+ — a 218B-parameter MoE (25B active, 48 languages, 128K context) and Cohere's first model under a true Apache-2.0 license, aimed at sovereign/air-gapped deployments[^vb-command-a-plus][^decoder-command-a-plus]. The business grew steadily: $500M at $6.8B (Aug 2025), ~$7B after a further $100M (Sept 2025), and ~$240M ARR for 2025 against a $200M target[^wiki-cohere][^cnbc-cohere-rev]. In April 2026 Cohere announced a combination with Germany's Aleph Alpha (~$20B combined, with $600M from Schwarz Gruppe), signed definitively on 16 Sept 2026[^tc-aleph][^tnw-aleph-definitive].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03 | Aya Vision (non-commercial weights)[^wiki-cohere] | OSS | + |
| W24 | 2025-08 | $500M at $6.8B; Joëlle Pineau joins as Chief AI Officer[^wiki-cohere] | Business | + |
| W24 | 2025-09 | Additional $100M, ~$7B valuation[^wiki-cohere] | Business | + |
| W12 | 2025-10 | ~$150M annualized revenue[^wiki-cohere] | Business | + |
| W9 | 2026-02-13 | Investor memo: ~$240M ARR for 2025, beating $200M target; ~70% gross margins[^cnbc-cohere-rev] | Business | + |
| W6 | 2026-04-24/25 | Combination with Aleph Alpha announced (~$20B combined; $600M from Schwarz Gruppe)[^tc-aleph] | Business | + |
| W6 | 2026-05-20 | Command A+ (218B MoE, 25B active) — first Cohere model under Apache-2.0[^vb-command-a-plus] | OSS | + |
| W3 | 2026-09-16 | Definitive combination agreement; dual HQ Berlin/Toronto; close expected later in 2026[^tnw-aleph-definitive] | Business | + |

# OSS successes
- License shift from CC-BY-NC to Apache-2.0 on a frontier-class enterprise model (Command A+)[^vb-command-a-plus].
- Aya multilingual research models valuable to academia[^wiki-cohere].

# OSS failures / risks
- Older weights remain non-commercial; derivative ecosystem still small.

# Business successes
- Enterprise/sovereign focus produced real revenue growth (~$240M ARR)[^cnbc-cohere-rev].

# Business failures / risks
- Merger integration risk and regulatory approvals pending[^tnw-aleph-definitive]; Aleph Alpha had itself pivoted away from frontier models.

# By window
## W3
- Definitive Aleph Alpha agreement (Sept 16)[^tnw-aleph-definitive].
## W6
- Aleph Alpha combination announced (Apr)[^tc-aleph]; Command A+ under Apache-2.0 (May 20)[^vb-command-a-plus].
## W9
- ~$240M ARR disclosed (Feb)[^cnbc-cohere-rev].
## W12
- ~$150M ARR[^wiki-cohere].
## W24
- Funding rounds; Aya Vision[^wiki-cohere].

# Lessons
- "Open for research, closed for business" weights earned credibility but not adoption; sovereign-AI demand pushed even Cohere to Apache-2.0.

# Related
- [Cohere org](/organizations/cohere.md), [Mistral](/projects/ai-models/mistral.md)

[^wiki-cohere]: Wikipedia, Cohere.
[^cnbc-cohere-rev]: CNBC, 13 Feb 2026.
[^tc-aleph]: TechCrunch, 25 Apr 2026.
[^tnw-aleph-definitive]: The Next Web, 16 Sept 2026.
[^vb-command-a-plus]: VentureBeat, May 2026. Corrected in pass 2: license "CC-BY-NC-4.0" → Apache-2.0 for Command A+.
[^decoder-command-a-plus]: The Decoder, May 2026.
