---
type: Organization
title: "Grafana Labs"
description: "Commercial steward of Grafana, Loki, Tempo, Mimir, Pyroscope, k6 and Alloy; the strongest open-core business in cloud-native observability — ARR $250M (Aug 2024) → $400M+ (Sept 2025) → $600M+ (2026-08-26), reported ~$9B GIC-led raise in Feb 2026, still private."
resource: https://grafana.com
tags: [commercial-open-source, observability, agpl, open-core]
org_kind: coss-startup
hq: New York, USA
funding: { total_usd: "~$790M (trackers; not confirmed by company)", last_round: "Reported GIC-led round at ~$9B (The Information, Feb 2026; size/close not announced by Grafana — trackers list $250M Series E); prior confirmed: $270M primary+secondary, Aug 2024, ~$6B", last_round_date: 2026-02, valuation_usd: "~9B (reported, not confirmed by company)" }
business_verdict: thriving
projects: [projects/cloud-native/grafana, projects/cloud-native/prometheus, projects/cloud-native/opentelemetry]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sa-grafana
    resource: https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/
    title: "SiliconANGLE: Grafana Labs reportedly raising funding at $9B valuation"
    author: org:siliconangle
  - id: ti-grafana
    resource: https://www.theinformation.com/articles/grafana-labs-talk-raise-9-billion-valuation
    title: "The Information: Grafana Labs in talks to raise at $9 billion valuation"
    author: org:the-information
  - id: grafanacon26
    resource: https://grafana.com/blog/grafanacon-2026-announcements/
    title: "GrafanaCON 2026 announcements"
    author: org:grafana-labs
  - id: obi
    resource: https://opentelemetry.io/blog/2025/obi-announcing-first-release/
    title: "OpenTelemetry eBPF Instrumentation first release"
  - id: cm-grafana-pr
    resource: "https://grafana.com/press/2026/02/03/grafana-labs-caps-a-breakout-year-of-growth-and-product-innovation/"
    title: "Grafana Labs: caps a breakout year (2026-02-03; $400M+ ARR, 7,000+ customers)"
  - id: cm-sa-grafana
    resource: "https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/"
    title: "SiliconANGLE: Grafana reportedly raising at $9B (2026-02-13)"
  - id: grafana-600m
    resource: https://grafana.com/press/2026/08/26/grafana-labs-crosses-10000-customer-milestone-as-ai-adoption-accelerates-growth-across-the-platform/
    title: "Grafana Labs: Crosses 10,000-customer milestone; ARR surpasses $600M (2026-08-26)"
    author: org:grafana-labs
  - id: bw-grafana-2024
    resource: https://www.businesswire.com/news/home/20240821710104/en/Grafana-Labs-Soars-Past-$250M-ARR-and-5000-Customers-Completes-$270M-Primary-and-Secondary-Transaction-and-Named-a-Leader-in-the-Gartner-Magic-Quadrant-for-Observability-Platforms
    title: "Business Wire: Grafana Labs soars past $250M ARR and completes $270M primary and secondary transaction (2024-08-21)"
    author: org:grafana-labs
  - id: forbes-grafana-2024
    resource: https://www.forbes.com/sites/kenrickcai/2024/05/24/grafana-labs-flat-funding-round-lightspeed-gic/
    title: "Forbes: Grafana Labs in talks to raise at $6 billion valuation (2024-05-24)"
    author: org:forbes
  - id: afr-grafana
    resource: https://www.afr.com/work-and-careers/careers/anthony-woods-was-a-uni-dropout-now-his-tech-company-is-worth-13b-20260911-p60wk0
    title: "Australian Financial Review: The uni dropout whose $13b company survived the SaaSpocalypse (2026-09)"
    author: org:afr
  - id: thn-grafana-breach
    resource: https://thehackernews.com/2026/05/grafana-github-token-breach-led-to.html
    title: "The Hacker News: Grafana GitHub token breach led to codebase download and extortion attempt (2026-05-17)"
---

# Summary
Grafana Labs monetizes the LGTM observability stack through Grafana Cloud and Enterprise licenses while keeping its core projects AGPL-3.0. ARR grew from $250M (Aug 2024, alongside a $270M primary+secondary transaction at ~$6B)[^bw-grafana-2024][^forbes-grafana-2024] to over $400M by 30 Sept 2025 (reported) and for the fiscal year ended 31 Jan 2026[^sa-grafana][^cm-grafana-pr] and over $600M with 10,000+ customers (company announcement, 26 Aug 2026)[^grafana-600m]. It ran a $150M tender offer in 2025 (reportedly at ~$6.6B) and in February 2026 was reported to be finalizing a GIC-led raise at about $9B[^sa-grafana][^ti-grafana]; Grafana has never announced that round's size or close (trackers list a $250M Series E — unconfirmed), and its Aug 2026 release lists GIC among existing backers without new-round details[^grafana-600m]. A Sept 2026 AFR profile headline calls it a "$13b company" (currency/basis not stated; likely A$)[^afr-grafana]. No S-1 has been found on EDGAR. Business verdict: **thriving**.

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2025 | $150M employee/early-investor tender[^sa-grafana] |
| W24 | 2025 | Donates Beyla to OpenTelemetry (OBI)[^obi] |
| W24 | 2025-09 | ARR passes $400M (reported)[^sa-grafana]; confirmed as $400M+ for FY ended 2026-01-31[^cm-grafana-pr] |
| W9 | 2026-02-13 | Reported ~$9B GIC-led round[^sa-grafana][^ti-grafana] |
| W6 | 2026-04-21 | GrafanaCON: Grafana 13, Logline acquisition, plugin marketplace pilot, AI observability preview; 35M+ OSS users[^grafanacon26] |
| W6 | 2026-05 | GitHub-token breach; codebase downloaded, extortion refused[^thn-grafana-breach] |
| W3 | 2026-08-26 | ARR passes $600M; 10,000+ customers; 18,000+ orgs using Grafana Assistant[^grafana-600m] |

# Monetization model
Open-core + SaaS: AGPL OSS (Grafana, Loki, Tempo, Mimir), paid Grafana Cloud (usage-based), Enterprise plugins/licenses, and AI features (Grafana Assistant) delivered through the cloud[^grafanacon26].

# Successes
- Sustained ~50–60% ARR growth at scale: $250M (Aug 2024) → $400M+ (Sept 2025) → $600M+ (Aug 2026)[^bw-grafana-2024][^cm-grafana-pr][^grafana-600m].
- "Big tent" strategy: contributes to OTel and Prometheus instead of fighting them[^obi].

# Failures / risks
- IPO deferred; IPO-tracker sites claiming a 2026 S-1 filing are contradicted by the absence of any filing on EDGAR and by Grafana's own releases (treated as false).
- Competitive pressure from Datadog, Palo Alto Networks (Chronosphere) and OTel-native/ClickHouse challengers.

# Related
- [Grafana](/projects/cloud-native/grafana.md), [Prometheus](/projects/cloud-native/prometheus.md), [OpenTelemetry](/projects/cloud-native/opentelemetry.md)
- [Event: ~$9B raise](/events/2026-02-grafana-labs-9b-raise-reported.md), [Chronosphere](/organizations/chronosphere.md)

[^sa-grafana]: https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/
[^ti-grafana]: https://www.theinformation.com/articles/grafana-labs-talk-raise-9-billion-valuation
[^grafanacon26]: https://grafana.com/blog/grafanacon-2026-announcements/
[^obi]: https://opentelemetry.io/blog/2025/obi-announcing-first-release/
[^grafana-600m]: Grafana Labs press release, 2026-08-26.
[^bw-grafana-2024]: Business Wire, 2024-08-21.
[^forbes-grafana-2024]: Forbes, 2024-05-24.
[^afr-grafana]: Australian Financial Review, Sept 2026.

## Additional notes (coss-market)

Market context: Grafana is a leading IPO candidate that keeps choosing private capital: $400M+ ARR for the fiscal year ended 2026-01-31 and 7,000+ customers[^cm-grafana-pr]; a reported GIC-led round at ~$9B (the Aug 2024 round was at ~$6B[^bw-grafana-2024]) after a $150M tender in 2025[^cm-sa-grafana]. Aggregators list a $250M Series E (dated Feb or Mar 2026 depending on the tracker) at $9–9.5B; amount and close remain unconfirmed by Grafana Labs or reputable press (pass 2). ARR later passed $600M (Aug 2026)[^grafana-600m]. See [IPOs & public companies](/projects/coss-market/coss-ipos-and-public-companies.md).

[^cm-grafana-pr]: Grafana Labs press release, 2026-02-03.
[^cm-sa-grafana]: SiliconANGLE, 2026-02-13.

## Additional notes (licensing-forks)
- **AGPL as a defensive license that worked:** Grafana's 2021 move from Apache-2.0 to AGPLv3 produced no significant fork, and the company's valuation kept rising. It is the main counterexample to the SSPL/BSL approach. See [Grafana (licensing view)](/projects/licensing-forks/grafana.md).
- **2026 security incident:** in May 2026 a stolen GitHub token allowed an attacker to download Grafana's codebase and attempt extortion. Grafana refused to pay.[^thn-grafana-breach]

[^thn-grafana-breach]: The Hacker News — https://thehackernews.com/2026/05/grafana-github-token-breach-led-to.html
