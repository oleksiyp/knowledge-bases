---
type: Organization
title: GitLab Inc.
description: "Public open-core DevSecOps company (NASDAQ: GTLB); revenue grew 26% to $955.2M in FY2026 but decelerated to 21% by mid-2026, it cut ~14% of staff in June 2026, and it has been a recurring takeover target (Datadog interest in 2024 and 2025)."
resource: https://about.gitlab.com
tags: [commercial-open-source, public-company, devsecops, open-core]
org_kind: public-company
hq: San Francisco, USA (all-remote)
funding: { total_usd: "public since 2021 IPO", last_round: "IPO (Oct 2021)", last_round_date: 2021-10, valuation_usd: "~$8B market value cited in Jul 2024 sale reports" }
business_verdict: struggling
projects: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gitlab-q2fy27
    resource: https://ir.gitlab.com/news/news-details/2026/GitLab-Reports-Second-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx
    title: "GitLab Reports Q2 FY2027 results (2026-09-01)"
  - id: gitlab-fy26
    resource: https://www.sec.gov/Archives/edgar/data/1653482/000162828026013795/gitlab-ex99120260131fy26.htm
    title: "GitLab 8-K Ex.99.1: Q4 and FY2026 results"
  - id: gitlab-10q
    resource: https://www.sec.gov/Archives/edgar/data/0001653482/000162828026059943/gtlb-20260731.htm
    title: "GitLab 10-Q for quarter ended 2026-07-31 (restructuring plan approved 2026-06-01)"
  - id: tc-gitlab-cuts
    resource: https://techcrunch.com/2026/06/03/gitlab-cuts-14-of-staff-as-it-scales-its-platform-to-serve-ai-workloads/
    title: "TechCrunch: GitLab cuts 14% of staff (2026-06-03)"
  - id: sa-gitlab-datadog
    resource: https://siliconangle.com/2024/07/17/report-github-rival-gitlab-acquired-datadog/
    title: "SiliconANGLE: Report — GitLab could be acquired by Datadog (2024-07-17)"
  - id: gn-gitlab
    resource: https://www.streetinsider.com/Hot+M+and+A/Datadog+(DDOG)+to+explore+fresh+takeover+bid+for+GitLab+(GTLB)+-+source/25466188.html
    title: "StreetInsider: Datadog (DDOG) to explore fresh takeover bid for GitLab (GTLB) — source (2025-10-16)"
  - id: sa-gitlab-dd
    resource: https://seekingalpha.com/news/4504982-gitlab-jumps-on-report-of-takeover-interest-from-datadog
    title: "Seeking Alpha: GitLab jumps on report of takeover interest from Datadog (2025-10)"
  - id: hn-gitlab-ceo
    resource: https://news.ycombinator.com/item?id=42333052
    title: "Hacker News: GitLab names Bill Staples as new CEO (Dec 2024)"
---

# Summary
GitLab is the largest remaining public pure-play open-core developer platform. FY2026 (ended 2026-01-31) revenue was **$955.2M (+26%)** with non-GAAP operating margin of 17%[^gitlab-fy26]; by Q2 FY2027 growth slowed to **21% ($286.3M)**, NRR 117%, though net ARR growth exceeded 40% and gross bookings hit a record[^gitlab-q2fy27]. In June 2026 it cut ~14% of staff (~350), exited 22 countries and removed up to three management layers to fund AI-workload infrastructure[^tc-gitlab-cuts][^gitlab-10q]. Sale talk has recurred since 2024 (Datadog)[^sa-gitlab-datadog][^gn-gitlab].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2024-12 | Bill Staples (ex-New Relic) succeeds Sid Sijbrandij as CEO[^hn-gitlab-ceo] | ± |
| W12 | 2025-10-16 | Reports Datadog (with Morgan Stanley) exploring a takeover bid; GTLB +11%[^gn-gitlab][^sa-gitlab-dd] | ± |
| W9 | 2026-03 | FY2026: $955.2M, +26%[^gitlab-fy26] | + |
| W6 | 2026-06-03 | 14% layoff, 22-country exit, $30–35M charges[^tc-gitlab-cuts] | − |
| W3 | 2026-09-01 | Q2 FY27 $286.3M, +21%, NRR 117%[^gitlab-q2fy27] | ± |

# Monetization model
Open core: MIT-licensed Community Edition plus proprietary Premium/Ultimate tiers sold per seat, SaaS (GitLab.com) and self-managed; add-on AI (GitLab Duo).

# Successes
- Crossed ~$1B run-rate; non-GAAP profitable[^gitlab-fy26].
- Net ARR acceleration in Q2 FY27[^gitlab-q2fy27].

# Failures / risks
- Seat-based pricing exposed to AI coding agents; growth deceleration; stock −17% YTD at June 2026[^tc-gitlab-cuts].
- Persistent takeover speculation signals market doubts about standalone value[^gn-gitlab].

# Related
- [COSS IPOs and public companies](/projects/coss-market/coss-ipos-and-public-companies.md), [/events/2026-06-gitlab-layoffs-restructuring.md](/events/2026-06-gitlab-layoffs-restructuring.md)

## Additional notes (devtools-languages)
- Project file for the MIT-licensed open core: [GitLab Community Edition](/projects/devtools-languages/gitlab-ce.md). GitLab 19.0 shipped 2026-05-21 (15 breaking changes); Duo Agent Platform went GA in Jan 2026 and AI credits became purchasable on the Free tier in March 2026.

[^gitlab-q2fy27]: GitLab IR, 2026-09-01.
[^gitlab-fy26]: GitLab 8-K, FY2026.
[^gitlab-10q]: GitLab 10-Q, Q2 FY2027.
[^tc-gitlab-cuts]: TechCrunch, 2026-06-03.
[^sa-gitlab-datadog]: SiliconANGLE, 2024-07-17.
[^gn-gitlab]: StreetInsider, 2025-10-16.
[^sa-gitlab-dd]: Seeking Alpha, Oct 2025.
[^hn-gitlab-ceo]: Hacker News, Dec 2024.
