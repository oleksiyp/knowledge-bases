---
type: Organization
title: "Temporal Technologies"
description: "Company behind the MIT-licensed Temporal durable-execution engine and Temporal Cloud; 2026's breakout infrastructure business — $300M at $5B (Feb) and $550M at $12.55B (Sep), ARR >$250M."
resource: https://temporal.io
tags: [commercial-open-source, workflow, ai-infrastructure, durable-execution]
org_kind: coss-startup
hq: Bellevue, Washington, USA
funding: { total_usd: "~1.2B (GeekWire and others, after Series E)", last_round: "Series E $550M (Lightspeed lead)", last_round_date: 2026-09-14, valuation_usd: "12.55B" }
business_verdict: thriving
projects: [projects/cloud-native/temporal]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: temporal-d
    resource: https://temporal.io/news/temporal-raises-300M-to-make-agentic-ai-real-for-companies
    title: "Temporal raises $300M Series D"
    author: org:temporal
  - id: gw-temporal-d
    resource: https://www.geekwire.com/2026/temporal-raises-300m-hits-5b-valuation-as-seattle-infrastructure-startup-rides-ai-wave/
    title: "GeekWire: Temporal raises $300M at $5B"
    author: org:geekwire
  - id: temporal-e
    resource: https://theaiinsider.tech/2026/09/14/temporal-closes-550m-funding-round-at-a-12-55b-valuation-as-demand-surges-for-reliable-ai-infrastructure/
    title: "Temporal closes $550M at $12.55B"
  - id: gw-temporal-e
    resource: https://www.geekwire.com/2026/temporal-raises-550m-hits-12-55b-valuation-as-agentic-ai-wave-fuels-massive-growth/
    title: "GeekWire: Temporal raises $550M at $12.55B"
    author: org:geekwire
  - id: gic-temporal-sec
    resource: https://www.gic.com.sg/newsroom/all/temporal-announces-105m-secondary-led-by-gic-at-2-5b-valuation/
    title: "GIC newsroom: Temporal announces $105M secondary led by GIC at $2.5B valuation (2025-10-01)"
    author: org:gic
  - id: cm-temporal-e
    resource: "https://temporal.io/blog/temporal-raises-usd550m-series-e-at-usd12-55b-valuation-ai"
    title: "Temporal: raises $550M at $12.55B (2026-09-14)"
---

# Summary
Temporal Technologies (CEO Samar Abbas) sells Temporal Cloud on top of its MIT-licensed server. Driven by AI-agent workloads, it raised $300M at $5B on Feb 17, 2026 (a16z lead) and $550M at $12.55B on Sep 14, 2026 (Lightspeed lead; co-leads Wellington, Goldman Sachs Alternatives, Tiger Global), with annualized revenue run-rate up more than 200% (above $250M per press), net dollar retention above 200%, 4,300+ paying customers and ~570 employees[^temporal-d][^cm-temporal-e][^gw-temporal-e]. Press coverage of the Series E puts total capital raised at about $1.2B[^gw-temporal-e]. Business verdict: **thriving**.

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2025-10-01 | $105M secondary (employee tender) led by GIC at $2.5B; Feb 2026 round doubled this valuation[^gic-temporal-sec][^gw-temporal-d] |
| W9 | 2026-02-17 | Series D $300M at $5B; revenue +380% YoY[^temporal-d] |
| W3 | 2026-09-14 | Series E $550M at $12.55B; ARR >$250M; NDR >200%[^cm-temporal-e][^gw-temporal-e] |

# Monetization model
Consumption-priced managed Temporal Cloud (actions), with permissive OSS self-hosting as the funnel[^cm-temporal-e].

# Successes
- Customers include OpenAI, Snap, NVIDIA, Netflix, JPMorgan Chase[^cm-temporal-e].
- 43M+ OSS installs; 1.9T+ cloud actions in Aug 2026[^cm-temporal-e].

# Failures / risks
- Very high revenue multiple; dependence on AI-agent spending cycle.

# Related
- [Temporal](/projects/cloud-native/temporal.md), [Event: Temporal Series E](/events/2026-09-temporal-series-e.md)

[^temporal-d]: https://temporal.io/news/temporal-raises-300M-to-make-agentic-ai-real-for-companies
[^gw-temporal-d]: https://www.geekwire.com/2026/temporal-raises-300m-hits-5b-valuation-as-seattle-infrastructure-startup-rides-ai-wave/
[^temporal-e]: https://theaiinsider.tech/2026/09/14/temporal-closes-550m-funding-round-at-a-12-55b-valuation-as-demand-surges-for-reliable-ai-infrastructure/
[^gic-temporal-sec]: GIC newsroom, 2025-10-01.
[^gw-temporal-e]: https://www.geekwire.com/2026/temporal-raises-550m-hits-12-55b-valuation-as-agentic-ai-wave-fuels-massive-growth/

## Additional notes (coss-market)

Market context: Temporal's $550M Series E at $12.55B (2026-09-14) was the largest COSS round of W3 outside Databricks, positioned explicitly as "reliable AI infrastructure"[^cm-temporal-e]. See [COSS funding](/projects/coss-market/coss-funding-2024-2026.md) and [/events/2026-09-temporal-series-e.md](/events/2026-09-temporal-series-e.md).

[^cm-temporal-e]: Temporal blog, 2026-09-14.
