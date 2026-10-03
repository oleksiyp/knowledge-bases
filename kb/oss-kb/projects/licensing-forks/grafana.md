---
type: OSS Project
title: Grafana (AGPL as a business model)
description: "Observability dashboard relicensed Apache→AGPLv3 in 2021 without a fork; by 2026 Grafana Labs was reportedly raising at ~$9B — the strongest evidence that copyleft (not source-available) can defend a COSS business — though a May 2026 GitHub breach exposed its codebase."
resource: https://github.com/grafana/grafana
tags: [observability, agpl, copyleft, coss, relicensing-success]
domain: licensing-forks
license: AGPL-3.0
license_history: ["Apache-2.0 (2014-2021)", "AGPL-3.0 (2021-)"]
governance: company-led-open-core
steward: Grafana Labs
backing_orgs: [organizations/grafana-labs]
metrics:
  github_stars: { value: 77045, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: flat, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: grafana-gh
    resource: https://github.com/grafana/grafana
    title: Grafana GitHub repository (AGPL-3.0)
  - id: crn-270m
    resource: https://techcrunch.com/2024/08/21/grafana-labs-is-now-valued-at-6b/
    title: "TechCrunch: Grafana Labs raises $270M, now valued at $6B (2024-08-21)"
  - id: info-9b
    resource: https://www.theinformation.com/articles/grafana-labs-talk-raise-9-billion-valuation
    title: "The Information: Grafana Labs in talks to raise at $9 billion valuation (2026-02-13)"
  - id: sa-9b
    resource: https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/
    title: "SiliconANGLE: Grafana Labs reportedly raising funding at $9B valuation (2026-02-13)"
    author: org:siliconangle
  - id: grafana-press
    resource: https://grafana.com/press/releases/
    title: Grafana Labs press releases (index; Aug 26 2026 "Crosses 10,000-Customer Milestone")
  - id: itbrief-600m
    resource: https://itbrief.news/story/grafana-labs-tops-10-000-customers-as-ai-demand-rises
    title: "IT Brief: Grafana Labs tops 10,000 customers as AI demand rises ($600M+ ARR, 2026-08-26)"
  - id: thn-breach
    resource: https://thehackernews.com/2026/05/grafana-github-token-breach-led-to.html
    title: "The Hacker News: Grafana GitHub token breach led to codebase download and extortion attempt (2026-05-17)"
  - id: cd-tanstack
    resource: https://www.yahoo.com/news/articles/grafana-labs-links-github-environment-104954436.html
    title: "Cybersecurity Dive: Grafana Labs links GitHub environment breach to TanStack npm supply chain attack (2026-05-21)"
  - id: tnw-breach
    resource: https://thenextweb.com/news/grafana-labs-codebase-breach-ransom-refused
    title: "The Next Web: Grafana Labs refuses ransom after hackers steal already-open-source code (2026-05-18)"
---

# Summary
Grafana is the main counterexample to the idea that a vendor needs SSPL or BSL. Grafana Labs moved Grafana, Loki and Tempo from Apache-2.0 to AGPLv3 in 2021. AGPL is an OSI-approved copyleft license. No major fork followed.[^grafana-gh] The company raised $270M at a valuation above $6B in Aug 2024.[^crn-270m] The Information reported in Feb 2026 that it was finalising a round at about $9B, with GIC expected to lead.[^info-9b][^sa-9b] As of Oct 2026 Grafana has not announced the round on its press page, so the close and terms remain unconfirmed.[^grafana-press] On 2026-08-26 the company said it had passed 10,000 customers and $600M ARR.[^itbrief-600m] The main negative in this period was security, not licensing. In May 2026 an attacker used a stolen GitHub token, linked to the TanStack npm supply-chain attack, to download Grafana's codebase and demanded a ransom.[^cd-tanstack] Grafana refused, partly because the code was largely open source already.[^thn-breach][^tnw-breach] Verdict: thriving.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2024-08-21 | $270M round at >$6B valuation[^crn-270m] | Business | + |
| W9 | 2026-02-13 | Reported raising at ~$9B valuation[^info-9b] | Business | + |
| W6 | 2026-05-16/18 | GitHub token breach; codebase exfiltrated; ransom refused[^thn-breach][^tnw-breach] | OSS | − |
| W3 | 2026-08-26 | Announces >10,000 customers and >$600M ARR; 251k monthly active Grafana Cloud users[^itbrief-600m] | Business | + |

# OSS successes
- 77k GitHub stars, and AGPL has kept the project open without forks.[^grafana-gh]

# OSS failures / risks
- The 2026 breach shows that supply-chain attacks are now a bigger risk than license disputes for COSS companies.[^thn-breach]

# Business successes
- Valuation rose from >$6B (2024) to a reported ~$9B (2026), with AGPL plus cloud as the model.[^crn-270m][^info-9b]
- ARR passed $600M by Aug 2026 (company announcement), up from ~$400M reported in early 2026.[^itbrief-600m][^sa-9b]

# Business failures / risks
- The ~$9B round was reported by The Information but never announced by Grafana; close and terms remain unconfirmed. No IPO yet.[^grafana-press]

# By window
## W3
- 10,000 customers and $600M+ ARR announced (2026-08-26); Grafana 13.x releases continue under AGPL.[^itbrief-600m]
## W6
- GitHub breach and extortion attempt (May 2026).[^thn-breach]
## W9
- ~$9B funding talks (Feb 2026).[^info-9b]
## W12
- No notable licensing events found.
## W24
- Continued growth after the $270M Aug 2024 round.[^crn-270m]

# Lessons
- AGPL plus a strong managed service gives most of the protection of SSPL/BSL without losing the open-source label or provoking a fork.
- Relicensing to copyleft early, before a hyperscaler builds a competing service, avoids the Redis/Elastic dynamic altogether.

# Related
- [Grafana Labs](/organizations/grafana-labs.md)
- [Elasticsearch](/projects/licensing-forks/elasticsearch.md), [Redis](/projects/licensing-forks/redis.md) — late converts to AGPL

[^grafana-gh]: Grafana GitHub — https://github.com/grafana/grafana
[^crn-270m]: TechCrunch — https://techcrunch.com/2024/08/21/grafana-labs-is-now-valued-at-6b/
[^info-9b]: The Information — https://www.theinformation.com/articles/grafana-labs-talk-raise-9-billion-valuation
[^sa-9b]: SiliconANGLE — https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/
[^grafana-press]: Grafana Labs press releases — https://grafana.com/press/releases/
[^itbrief-600m]: IT Brief — https://itbrief.news/story/grafana-labs-tops-10-000-customers-as-ai-demand-rises
[^thn-breach]: The Hacker News — https://thehackernews.com/2026/05/grafana-github-token-breach-led-to.html
[^cd-tanstack]: Cybersecurity Dive via Yahoo — https://www.yahoo.com/news/articles/grafana-labs-links-github-environment-104954436.html
[^tnw-breach]: The Next Web — https://thenextweb.com/news/grafana-labs-codebase-breach-ransom-refused
