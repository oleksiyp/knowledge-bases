---
type: OSS Project
title: "Grafana (and the LGTM stack)"
description: "AGPL-licensed dashboarding plus Loki/Grafana Tempo/Mimir/Pyroscope; Grafana 12 and 13 shipped on schedule, 35M+ open-source users, and its steward Grafana Labs grew ARR from $250M (Aug 2024) to $400M+ (Sep 2025) and $600M+ (Aug 2026), with a reported (unconfirmed) ~$9B valuation in 2026 — the strongest open-core business in the domain."
resource: https://github.com/grafana/grafana
tags: [cloud-native, observability, dashboards, agpl-3.0, open-core, company-led]
domain: cloud-native
license: AGPL-3.0
license_history: ["Apache-2.0 (2014-2021)", "AGPL-3.0 (2021-)"]
governance: company-led-open-core
steward: Grafana Labs
backing_orgs: [organizations/grafana-labs]
metrics:
  github_stars: { value: 77045, as_of: 2026-10-03 }
  loki_github_stars: { value: 28986, as_of: 2026-10-03 }
  oss_users: { value: "35M+", as_of: 2026-04-21 }
oss_verdict: thriving
business_verdict: thriving
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: grafana-gh
    resource: https://github.com/grafana/grafana
    title: "Grafana GitHub repository and releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: grafanacon26
    resource: https://grafana.com/blog/grafanacon-2026-announcements/
    title: "GrafanaCON 2026 announcements"
    author: org:grafana-labs
  - id: sa-grafana
    resource: https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/
    title: "SiliconANGLE: Grafana Labs reportedly raising funding at $9B valuation"
    author: org:siliconangle
  - id: ti-grafana
    resource: https://www.theinformation.com/articles/grafana-labs-talk-raise-9-billion-valuation
    title: "The Information: Grafana Labs in talks to raise at $9 billion valuation"
    author: org:the-information
  - id: grafana-pr-2025
    resource: https://grafana.com/press/2025/09/30/grafana-labs-surpasses-400m-arr-and-7000-customers-gains-new-investors-to-accelerate-global-expansion/
    title: "Grafana Labs press release: surpasses $400M ARR and 7,000 customers (Sep 30, 2025)"
    author: org:grafana-labs
  - id: grafana-pr-2024
    resource: https://grafana.com/press/2024/08/21/grafana-labs-soars-past-250m-arr-and-5000-customers-completes-270m-primary-and-secondary-transaction-and-named-a-leader-in-the-gartner-magic-quadrant-for-observability-platforms/
    title: "Grafana Labs press release: $250M ARR, $270M primary and secondary transaction (Aug 21, 2024)"
    author: org:grafana-labs
  - id: grafana-pr-2026
    resource: https://grafana.com/press/2026/08/26/grafana-labs-crosses-10000-customer-milestone-as-ai-adoption-accelerates-growth-across-the-platform/
    title: "Grafana Labs press release: 10,000 customers, ARR above $600M (Aug 26, 2026)"
    author: org:grafana-labs
  - id: edgar-fts
    resource: https://efts.sec.gov/LATEST/search-index?q=%22Grafana%20Labs%22&forms=S-1
    title: "SEC EDGAR full-text search: no S-1 mentioning Grafana Labs (checked 2026-10-03)"
  - id: obi
    resource: https://opentelemetry.io/blog/2025/obi-announcing-first-release/
    title: "OpenTelemetry eBPF Instrumentation (OBI): first release"
---

# Summary
Grafana is the most widely used open-source observability UI, and with Loki, Tempo, Mimir, Pyroscope, k6 and Alloy it forms the "LGTM" stack that Grafana Labs monetizes via Grafana Cloud and Enterprise. Over two years the OSS side shipped Grafana 12 (2025) and Grafana 13 (GrafanaCON, Apr 21, 2026), with dynamic dashboards GA, Git Sync, a Loki redesign claiming up to 10x faster queries, Pyroscope 2.0 and k6 2.0[^grafanacon26][^grafana-gh]. Grafana Labs reports 35M+ open-source users[^grafanacon26] and company-announced ARR of $400M+ (Sep 30, 2025), up from $250M (Aug 21, 2024), then above $600M with 10,000+ customers (Aug 26, 2026)[^grafana-pr-2024][^grafana-pr-2025][^grafana-pr-2026]. Verdict: OSS **thriving**, business **thriving**; the AGPL relicense of 2021 did not dent adoption.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025 | Beyla donated to OpenTelemetry as OBI[^obi] | OSS | + |
| W24 | 2025-09-23 | Grafana 12.2 released[^grafana-gh] | OSS | + |
| W24 | 2025-09-30 | Grafana Labs ARR passes $400M, 7,000+ customers; secondary sale led by Ontario Teachers' Pension Plan[^grafana-pr-2025] | Business | + |
| W12 | 2025-11-19 | Grafana 12.3 released[^grafana-gh] | OSS | + |
| W9 | 2026-02-13 | Reported (not company-confirmed) GIC-led raise at ~$9B valuation (vs $6.6B in 2024)[^sa-grafana][^ti-grafana] | Business | + |
| W9 | 2026-02-25 | Grafana 12.4 released[^grafana-gh] | OSS | + |
| W6 | 2026-04-21 | GrafanaCON: Grafana 13, Loki redesign, Pyroscope 2.0, k6 2.0, Logline acquisition, plugin marketplace pilot[^grafanacon26] | Both | + |
| W3 | 2026-07-01, 2026-08-18 | Grafana 13.1, 13.2[^grafana-gh] | OSS | + |
| W3 | 2026-07-27 → 07-31 | "AI Week": Assistant Investigations, Agent Observability, Grafana Cloud MCP Server, gcx CLI[^grafana-pr-2026] | Business | + |
| W3 | 2026-08-26 | Grafana Labs: ARR above $600M, 10,000+ customers, 251k monthly active Cloud users[^grafana-pr-2026] | Business | + |

# OSS successes
- Consistent major/minor cadence and broad plugin ecosystem; 77k GitHub stars[^grafana-gh].
- Contributes upstream to OTel (OBI) rather than only building proprietary agents[^obi].

# OSS failures / risks
- AGPL and the growing set of Cloud-only AI features (Grafana Assistant; self-managed access via a Cloud connection) concentrate new value in the SaaS[^grafanacon26].
- Large surface area (Loki/Tempo/Mimir/Pyroscope/k6/Alloy) stretches maintainer attention.

# Business successes
- ARR $250M (Aug 2024) → $400M+ (Sep 2025) → $600M+ (Aug 2026)[^grafana-pr-2024][^grafana-pr-2025][^grafana-pr-2026]; reported ~$9B round in Feb 2026 (never announced by the company)[^sa-grafana].
- 18,000+ organizations use the Cloud-only Grafana Assistant; average products per contracted customer rose from 2.3 to 4.4 (company figures, Aug 2026)[^grafana-pr-2026].
- Acquisition of Logline (2026) for log search[^grafanacon26].

# Business failures / risks
- IPO repeatedly deferred ("no plans to go public in the near future", Feb 2026 reporting)[^sa-grafana]. Claims on third-party IPO-tracker sites of a May 2026 S-1 filing are contradicted by SEC EDGAR, which shows no public S-1 mentioning Grafana Labs as of 2026-10-03[^edgar-fts]. (Corrected in pass 2: "unverified S-1" → "no public S-1 on EDGAR".)
- Competition from OTel-native challengers (SigNoz, ClickHouse-based stacks) and from Datadog/Palo Alto (Chronosphere).

# By window
## W3
- Grafana 13.1/13.2; Alloy and Tempo releases continue[^grafana-gh].
- AI Week (Jul 27-31) launches; ARR above $600M and 10,000+ customers announced Aug 26[^grafana-pr-2026].
## W6
- GrafanaCON 2026 / Grafana 13 (Apr 21)[^grafanacon26].
## W9
- Reported ~$9B GIC-led raise (Feb 2026)[^sa-grafana][^ti-grafana].
## W12
- Grafana 12.3[^grafana-gh].
## W24
- ARR passes $400M (Sep 30, 2025); Beyla → OBI donation[^grafana-pr-2025][^obi].

# Lessons
- Copyleft (AGPL) plus a strong SaaS can coexist with massive community adoption when the relicense is OSI-approved.
- "Big tent" data-source neutrality (query any backend) is a durable moat for the UI layer.

# Related
- [Grafana Labs](/organizations/grafana-labs.md), [Prometheus](/projects/cloud-native/prometheus.md), [OpenTelemetry](/projects/cloud-native/opentelemetry.md), [Grafana (licensing view)](/projects/licensing-forks/grafana.md)
- [Event: Grafana Labs ~$9B raise](/events/2026-02-grafana-labs-9b-raise-reported.md)

[^grafana-gh]: https://github.com/grafana/grafana
[^grafanacon26]: https://grafana.com/blog/grafanacon-2026-announcements/
[^sa-grafana]: https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/
[^ti-grafana]: https://www.theinformation.com/articles/grafana-labs-talk-raise-9-billion-valuation
[^grafana-pr-2024]: https://grafana.com/press/2024/08/21/grafana-labs-soars-past-250m-arr-and-5000-customers-completes-270m-primary-and-secondary-transaction-and-named-a-leader-in-the-gartner-magic-quadrant-for-observability-platforms/
[^grafana-pr-2025]: https://grafana.com/press/2025/09/30/grafana-labs-surpasses-400m-arr-and-7000-customers-gains-new-investors-to-accelerate-global-expansion/
[^grafana-pr-2026]: https://grafana.com/press/2026/08/26/grafana-labs-crosses-10000-customer-milestone-as-ai-adoption-accelerates-growth-across-the-platform/
[^edgar-fts]: https://efts.sec.gov/LATEST/search-index?q=%22Grafana%20Labs%22&forms=S-1
[^obi]: https://opentelemetry.io/blog/2025/obi-announcing-first-release/
