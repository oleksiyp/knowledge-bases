---
type: Organization
title: Cohere
description: "Toronto enterprise-LLM company that long released research-only weights (Command, Aya) before its first Apache-2.0 model (Command A+, May 2026); revenue ~$240M (Feb 2026); definitive agreement to combine with Germany's Aleph Alpha at ~$20B (Sept 2026)."
resource: https://cohere.com
tags: [ai-models, enterprise, canada, sovereign-ai]
org_kind: coss-startup
hq: Toronto, Canada
funding: { total_usd: "aggregate not company-confirmed (>$1.5B incl. $500M Jul 2024, $500M Aug 2025, $100M Sept 2025)", last_round: "$100M extension at ~$7B (Sept 2025); Schwarz Group committing $600M to an upcoming Series E (2026)", last_round_date: 2025-09-24, valuation_usd: "~$7B (2025); ~$20B combined with Aleph Alpha (2026, reported)" }
business_verdict: growing
projects: [projects/ai-models/cohere-command]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki-cohere
    resource: https://en.wikipedia.org/wiki/Cohere
    title: "Wikipedia: Cohere"
  - id: cohere-aug25
    resource: https://cohere.com/blog/august-2025-funding-round
    title: "Cohere blog: Cohere raises $500M to accelerate enterprise AI (2025-08-14)"
    author: org:cohere
  - id: tc-cohere-7b
    resource: https://techcrunch.com/2025/09/24/cohere-hits-7b-valuation-a-month-after-its-last-raise-partners-with-amd
    title: "TechCrunch: Cohere hits $7B valuation a month after its last raise (2025-09-24)"
    author: org:techcrunch
  - id: axios-cohere-aa
    resource: https://www.axios.com/2026/04/24/cohere-20-billion-aleph-alpha-europe
    title: "Axios: Cohere valued at around $20B in Aleph Alpha deal (2026-04-24)"
    author: org:axios
  - id: tnw-cohere-aa
    resource: https://thenextweb.com/news/cohere-aleph-alpha-definitive-agreement-transatlantic-sovereign-ai
    title: "The Next Web: Cohere and Aleph Alpha sign definitive agreement (2026-09-16)"
    author: org:thenextweb
  - id: commandaplus
    resource: https://lasvegassun.com/news/2026/may/20/cohere-releases-command-a-an-open-source-enterpris/
    title: "Cohere release (via Las Vegas Sun): Cohere releases Command A+, an open-source enterprise AI model (2026-05-20)"
    author: org:cohere
---

# Summary
Cohere sells private/sovereign enterprise AI (North platform, Command models). Until May 2026 it released weights only for research; on 2026-05-20 it released Command A+ (218B MoE, 25B active) under Apache-2.0, its first truly open-weight model[^commandaplus]. Funding: $500M at $5.5B (Jul 2024), $500M at $6.8B (Aug 2025, Radical Ventures and Inovia lead)[^cohere-aug25], +$100M at ~$7B (Sept 2025)[^tc-cohere-7b]; revenue $22M run-rate (Mar 2024) → $100M (May 2025) → $150M (Oct 2025) → $240M (Feb 2026)[^wiki-cohere]. It announced a combination with Aleph Alpha on 24 Apr 2026 (~$20B combined valuation; Schwarz Group to invest $600M)[^axios-cohere-aa] and signed a definitive business combination agreement on 16 Sept 2026 (dual HQ Toronto/Berlin; close expected later in 2026 pending approvals)[^tnw-cohere-aa].

# Business timeline
| Date | Event |
|---|---|
| 2024-07 | $500M at $5.5B[^wiki-cohere] |
| 2024-12 | $240M Canadian government data-center support[^wiki-cohere] |
| 2025-05 | Acquires Ottogrid[^wiki-cohere] |
| 2025-08-14 | $500M at $6.8B; Pineau joins as CAIO[^cohere-aug25] |
| 2025-09-24 | +$100M at ~$7B; AMD partnership[^tc-cohere-7b] |
| 2026-02 | $240M revenue[^wiki-cohere] |
| 2026-04-24 | Aleph Alpha combination announced (~$20B)[^axios-cohere-aa] |
| 2026-05-20 | Command A+ released under Apache-2.0[^commandaplus] |
| 2026-09-16 | Definitive combination agreement signed[^tnw-cohere-aa] |

# Monetization model
Enterprise licenses and private deployments; government/sovereign contracts.

# Successes
- Steady revenue growth; transatlantic sovereign-AI consolidation.

# Failures / risks
- Open-source footprint only began with Command A+ (May 2026); merger execution risk.

# Related
- [Cohere Command/Aya](/projects/ai-models/cohere-command.md), [Mistral AI](/organizations/mistral-ai.md)

[^wiki-cohere]: Wikipedia, Cohere.
[^cohere-aug25]: Cohere blog, 2025-08-14.
[^tc-cohere-7b]: TechCrunch, 2025-09-24.
[^axios-cohere-aa]: Axios, 2026-04-24.
[^tnw-cohere-aa]: The Next Web, 2026-09-16.
[^commandaplus]: Cohere release, 2026-05-20.
