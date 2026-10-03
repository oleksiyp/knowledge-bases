---
type: Organization
title: Mediar / Screenpipe
description: "San Francisco startup (Mediar, Inc.; Screenpipe licence names Negentropy Labs, Inc. dba Screenpipe) behind Screenpipe and the Terminator Windows-automation SDK; ~$2.8M seed (2025, aggregator), relicensed Screenpipe to source-available in June 2026 and joined YC S26 — growing."
resource: https://screenpipe.com
tags: [commercial-open-source, ai-apps, source-available, yc]
org_kind: coss-startup
hq: San Francisco, USA
funding: { total_usd: "~$2.8M seed (aggregator) + YC S26", last_round: "Seed; YC S26", last_round_date: 2026-05-14, valuation_usd: "undisclosed" }
business_verdict: growing
projects: [projects/ai-apps/screenpipe]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sp-license
    resource: https://screenpipe.com/blog/screenpipe-license-update
    title: "Screenpipe blog: license update (2026-06-09)"
  - id: sp-mediar
    resource: https://www.mediar.ai/t/mediar-ai-screenpipe
    title: "Mediar: where the screenpipe repo went"
  - id: sp-yc
    resource: https://explainx.ai/blog/screenpipe-yc-s26-local-work-memory-agents-july-2026
    title: "ExplainX: screenpipe YC S26 (July 2026)"
  - id: sp-pb
    resource: https://pitchbook.com/profiles/company/711341-29
    title: "PitchBook: Mediar (aggregator)"
  - id: sp-gh
    resource: https://github.com/screenpipe/screenpipe
    title: Screenpipe GitHub (LICENSE.md)
---

# Summary
Mediar built Screenpipe (2024) and later Terminator (Windows UI automation, 2025); Screenpipe moved to its own GitHub org as the two diverged[^sp-mediar]. Aggregators report a ~$2.8M seed in 2025[^sp-pb]. On 2026-06-09 Screenpipe moved from MIT to the source-available Screenpipe Commercial License[^sp-license]; its LICENSE names "Negentropy Labs, Inc. (dba Screenpipe)"[^sp-gh]. It joined YC S26 (2026-05-14 per README) and relaunched on 2026-07-14[^sp-yc].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-04 | Seed ~$2.8M (aggregator)[^sp-pb] | + |
| W6 | 2026-05-14 | Joins YC S26[^sp-yc] | + |
| W6 | 2026-06-09 | MIT → Screenpipe Commercial License[^sp-license] | ± |
| W3 | 2026-07-14 | Public relaunch[^sp-yc] | + |

# Monetization model
App subscriptions/lifetime licences plus paid commercial licences for any business use of the source[^sp-license].

# Successes
- Turned an MIT hobby-scale project into a licensable product.

# Failures / risks
- Loss of open-source status; corporate-entity naming is inconsistent across sources.

# Related
- [Screenpipe](/projects/ai-apps/screenpipe.md), [Screenpipe relicense](/events/2026-06-screenpipe-source-available-relicense.md)

[^sp-license]: Screenpipe blog — https://screenpipe.com/blog/screenpipe-license-update
[^sp-mediar]: Mediar — https://www.mediar.ai/t/mediar-ai-screenpipe
[^sp-yc]: ExplainX — https://explainx.ai/blog/screenpipe-yc-s26-local-work-memory-agents-july-2026
[^sp-pb]: PitchBook (aggregator) — https://pitchbook.com/profiles/company/711341-29
[^sp-gh]: GitHub — https://github.com/screenpipe/screenpipe
