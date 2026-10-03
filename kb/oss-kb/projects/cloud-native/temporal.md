---
type: OSS Project
title: "Temporal"
description: "MIT-licensed durable-execution / workflow engine; became the breakout infrastructure business of 2026 as the reliability layer for AI agents — $300M Series D at $5B (Feb 2026) then $550M Series E at $12.55B (Sep 2026), ARR >$250M growing >200%."
resource: https://github.com/temporalio/temporal
tags: [cloud-native, workflow, durable-execution, ai-agents, mit, company-led, open-core]
domain: cloud-native
license: MIT
license_history: ["MIT (2019-)"]
governance: company-led-open-core
steward: Temporal Technologies
backing_orgs: [organizations/temporal-technologies]
metrics:
  github_stars: { value: 23430, as_of: 2026-10-03 }
  arr_usd: { value: "250M+", as_of: 2026-09-14 }
  oss_installs: { value: "43M+", as_of: 2026-09-14 }
  paying_customers: { value: "4,300+", as_of: 2026-09-14 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: temporal-gh
    resource: https://github.com/temporalio/temporal
    title: "Temporal GitHub repository"
    last_modified: 2026-10-03T00:00:00Z
  - id: temporal-d
    resource: https://temporal.io/news/temporal-raises-300M-to-make-agentic-ai-real-for-companies
    title: "Temporal raises $300M Series D (Feb 17, 2026)"
    author: org:temporal
  - id: gw-temporal-d
    resource: https://www.geekwire.com/2026/temporal-raises-300m-hits-5b-valuation-as-seattle-infrastructure-startup-rides-ai-wave/
    title: "GeekWire: Temporal raises $300M, hits $5B valuation"
    author: org:geekwire
  - id: temporal-e
    resource: https://temporal.io/news/temporal-raises-550m-at-a-12-55b-valuation
    title: "Temporal press release: raises $550M at a $12.55B valuation (Sep 14, 2026)"
    author: org:temporal
  - id: tfn-temporal-e
    resource: https://techfundingnews.com/temporal-raises-550m-led-by-lightspeed-at-12-55b-valuation-why-ai-agents-need-infrastructure-that-can-survive-failure/
    title: "Tech Funding News: Temporal raises $550M led by Lightspeed (total raised ~$1.2B)"
  - id: temporal-secondary
    resource: https://temporal.io/blog/temporal-raises-secondary-funding
    title: "Temporal blog: secondary funding at $2.5B valuation (Oct 1, 2025)"
    author: org:temporal
  - id: bw-temporal-c
    resource: https://www.businesswire.com/news/home/20250330487137/en/Temporal-Technologies-Secures-$146M-at-$1.72B-Valuation-to-Fuel-Durable-Production-Agentic-Workloads-Globally
    title: "Business Wire: Temporal secures $146M at $1.72B valuation (Mar 2025)"
  - id: gw-temporal-e
    resource: https://www.geekwire.com/2026/temporal-raises-550m-hits-12-55b-valuation-as-agentic-ai-wave-fuels-massive-growth/
    title: "GeekWire: Temporal raises $550M, hits $12.55B valuation"
    author: org:geekwire
---

# Summary
Temporal is the most dramatic business success in the cloud-native domain over the last two years. Its MIT-licensed server and SDKs provide durable execution, and AI-agent builders adopted it to make long-running, failure-prone agent workflows reliable. On Feb 17, 2026 it raised a $300M Series D led by a16z at a $5B valuation, citing >380% YoY revenue growth and 20M+ monthly installs[^temporal-d][^gw-temporal-d]. Seven months later (Sep 14, 2026) it raised a $550M Series E led by Lightspeed at $12.55B, co-led by Wellington, Goldman Sachs Alternatives and Tiger Global, bringing total capital raised to about $1.2B[^tfn-temporal-e]; it reported ARR above $250M (>200% YoY), 4,300+ paying customers including OpenAI, Snap, NVIDIA, Netflix and JPMorgan Chase, 43M+ open-source installs and 570 employees[^temporal-e][^gw-temporal-e]. Verdict: OSS **thriving**, business **thriving**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03 | $146M Series C at $1.72B valuation[^bw-temporal-c] | Business | + |
| W24 | 2025-06-27 | Temporal server v1.28[^temporal-gh] | OSS | + |
| W24 | 2025-10-01 | $105M secondary led by GIC at $2.5B valuation[^temporal-secondary] | Business | + |
| W12 | 2025-10-03 | Temporal server v1.29[^temporal-gh] | OSS | + |
| W9 | 2026-02-17 | $300M Series D at $5B (a16z lead); valuation doubled from $2.5B (Oct 2025 secondary)[^temporal-d][^gw-temporal-d] | Business | + |
| W6 | 2026-04-29 | Temporal server v1.31[^temporal-gh] | OSS | + |
| W3 | 2026-09-11 | Temporal server v1.32[^temporal-gh] | OSS | + |
| W3 | 2026-09-14 | $550M Series E at $12.55B (Lightspeed lead); ARR >$250M[^temporal-e] | Business | + |

# OSS successes
- Permissive MIT license retained; installs grew 134% Jan-Sep 2026 to 43M+[^temporal-e].
- Became the default "durable agent" substrate across AI-native companies[^temporal-d].

# OSS failures / risks
- Self-hosting the server (Cassandra/Postgres + Elasticsearch) is operationally heavy, nudging users to Temporal Cloud.

# Business successes
- Valuation $1.72B (Mar 2025) → $2.5B (Oct 2025) → $5B (Feb 2026) → $12.55B (Sep 2026)[^bw-temporal-c][^temporal-secondary][^temporal-d][^temporal-e]; ~$1.2B raised in total[^tfn-temporal-e].
- Net dollar retention above 200% since February 2026; Temporal Cloud processed 1.9T+ actions in Aug 2026[^temporal-e].

# Business failures / risks
- Valuation is a multiple of ~50x ARR — exposed to any AI-spend slowdown.
- Rising competition from AI-specific orchestration (and from cloud providers' durable-function offerings).

# By window
## W3
- Series E $550M at $12.55B (Sep 14, 2026); server v1.32[^temporal-e][^temporal-gh].
## W6
- Server v1.31[^temporal-gh].
## W9
- Series D $300M at $5B (Feb 17, 2026)[^temporal-d].
## W12
- No notable business events found; server v1.29 (Oct 3, 2025)[^temporal-gh]. (Corrected in pass 2: the $2.5B secondary is dated Oct 1, 2025, i.e. W24, not W12.)
## W24
- $146M Series C at $1.72B (Mar 2025) and $105M GIC-led secondary at $2.5B (Oct 1, 2025)[^bw-temporal-c][^temporal-secondary]; server v1.28[^temporal-gh].

# Lessons
- Mature, permissively licensed infrastructure can be re-rated overnight when a new workload (AI agents) needs exactly its guarantees.
- Cloud service + permissive OSS can outgrow license-restrictive peers.

# Related
- [Temporal Technologies](/organizations/temporal-technologies.md), [Event: Temporal Series E](/events/2026-09-temporal-series-e.md), [Dagger](/projects/cloud-native/dagger.md)

[^temporal-gh]: https://github.com/temporalio/temporal
[^temporal-d]: https://temporal.io/news/temporal-raises-300M-to-make-agentic-ai-real-for-companies
[^tfn-temporal-e]: https://techfundingnews.com/temporal-raises-550m-led-by-lightspeed-at-12-55b-valuation-why-ai-agents-need-infrastructure-that-can-survive-failure/
[^temporal-secondary]: https://temporal.io/blog/temporal-raises-secondary-funding
[^bw-temporal-c]: https://www.businesswire.com/news/home/20250330487137/en/Temporal-Technologies-Secures-$146M-at-$1.72B-Valuation-to-Fuel-Durable-Production-Agentic-Workloads-Globally
[^gw-temporal-d]: https://www.geekwire.com/2026/temporal-raises-300m-hits-5b-valuation-as-seattle-infrastructure-startup-rides-ai-wave/
[^temporal-e]: https://temporal.io/news/temporal-raises-550m-at-a-12-55b-valuation
[^gw-temporal-e]: https://www.geekwire.com/2026/temporal-raises-550m-hits-12-55b-valuation-as-agentic-ai-wave-fuels-massive-growth/
