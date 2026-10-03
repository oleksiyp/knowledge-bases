---
type: Market Study
title: "COSS IPOs and public companies 2024-2026"
description: "The listed commercial open source cohort shrank (HashiCorp, Couchbase, Confluent taken out) while survivors diverged: MongoDB reaccelerated to 30% growth then lost its CEO to Meta, Elastic steady at ~15-17%, GitLab decelerated and cut 14% of staff; no US COSS IPO happened — the late-stage private cohort (Databricks, ClickHouse, Grafana, Supabase) prefers private mega-rounds."
resource: https://ir.gitlab.com/news/news-details/2026/GitLab-Reports-Second-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx
tags: [coss, ipo, public-markets, earnings, market-study]
domain: coss-market
metrics:
  us_coss_ipos_2y: { value: 0, as_of: 2026-10-03, note: "no US-listed COSS IPO found Oct 2024-Oct 2026" }
  public_coss_delistings_2y: { value: 3, as_of: 2026-10-03, note: "HashiCorp, Couchbase, Confluent" }
momentum_by_window: { W3: down, W6: down, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T18:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T18:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gitlab-q2fy27
    resource: https://ir.gitlab.com/news/news-details/2026/GitLab-Reports-Second-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx
    title: "GitLab Reports Q2 FY2027 results (2026-09-01)"
  - id: gitlab-fy26
    resource: https://www.sec.gov/Archives/edgar/data/1653482/000162828026013795/gitlab-ex99120260131fy26.htm
    title: "GitLab 8-K Ex.99.1: Q4 and FY2026 results"
  - id: tc-gitlab-cuts
    resource: https://techcrunch.com/2026/06/03/gitlab-cuts-14-of-staff-as-it-scales-its-platform-to-serve-ai-workloads/
    title: "TechCrunch: GitLab cuts 14% of staff (2026-06-03)"
  - id: sa-gitlab-datadog
    resource: https://siliconangle.com/2024/07/17/report-github-rival-gitlab-acquired-datadog/
    title: "SiliconANGLE: Report — GitLab could be acquired by Datadog (2024-07-17)"
  - id: fool-ddog-gitlab
    resource: "https://www.fool.com/investing/breakfast-news/2025/10/17/breakfast-news-ddog-mulls-gitlab-takeover/"
    title: "Motley Fool: DDOG mulls GitLab takeover (StreetInsider report, 2025-10-17)"
  - id: yf-gitlab-buyout
    resource: "https://finance.yahoo.com/news/gitlab-gtlb-seen-potential-buyout-053232598.html"
    title: "Yahoo Finance: GitLab seen as potential buyout candidate as tech valuations reset (Jan 2026)"
  - id: hn-gitlab-ceo
    resource: https://news.ycombinator.com/item?id=42333052
    title: "Hacker News: GitLab names Bill Staples as new CEO (Dec 2024)"
  - id: elastic-fy26
    resource: https://ir.elastic.co/News--Events/news/news-details/2026/Elastic-Reports-Fourth-Quarter-and-Fiscal-2026-Financial-Results/default.aspx
    title: "Elastic Reports Q4 and Fiscal 2026 results"
  - id: elastic-q1fy27
    resource: https://ir.elastic.co/News--Events/news/news-details/2026/Elastic-Reports-First-Quarter-Fiscal-2027-Financial-Results/default.aspx
    title: "Elastic Reports Q1 Fiscal 2027 results (2026-08-27)"
  - id: mdb-q2fy27
    resource: https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-second-quarter-fiscal-2027-financial
    title: "MongoDB announces Q2 FY2027 results (2026-09-01)"
  - id: mdb-ceo
    resource: https://www.morningstar.com/news/pr-newswire/20260928ny57721/mongodb-announces-ceo-transition
    title: "MongoDB Announces CEO Transition (PR Newswire, 2026-09-28)"
  - id: yf-mdb-stock
    resource: "https://finance.yahoo.com/markets/stocks/articles/mongodb-stock-fell-18-ceo-081850950.html"
    title: "Yahoo Finance: MongoDB stock fell 18% when its CEO left for Meta (2026-09)"
  - id: street-mdb
    resource: "https://www.thestreet.com/investing/stocks/mongodb-stock-crash-ceo-resigns-meta"
    title: "TheStreet: MongoDB stock crashes as its CEO jumps ship (intraday low ~-26%, 2026-09-28)"
  - id: ibm-confluent-close
    resource: https://newsroom.ibm.com/2026-03-17-ibm-completes-acquisition-of-confluent,-making-real-time-data-the-engine-of-enterprise-ai-and-agents
    title: "IBM completes acquisition of Confluent (2026-03-17)"
  - id: tc-ibm-hashicorp
    resource: https://techcrunch.com/2025/02/27/ibm-closes-6-4b-hashicorp-acquisition/
    title: "TechCrunch: IBM closes $6.4B HashiCorp acquisition"
  - id: couchbase-close
    resource: https://www.couchbase.com/press-releases/haveli-investments-completes-acquisition-of-couchbase/
    title: "Couchbase: Haveli completes acquisition (2025-09-24)"
  - id: ibm-q2-2026
    resource: https://newsroom.ibm.com/2026-07-22-IBM-RELEASES-SECOND-QUARTER-RESULTS
    title: "IBM Releases Second-Quarter 2026 Results (2026-07-22)"
  - id: cnbc-zhipu
    resource: "https://www.cnbc.com/2026/01/08/china-ai-tiger-goes-ipo-zhipu-hong-kong-debut-openai-knowledge-atlas-hsi-hang-seng-listing.html"
    title: "CNBC: Zhipu climbs in Hong Kong debut (2026-01-08)"
  - id: cnbc-minimax
    resource: "https://www.cnbc.com/2026/01/09/minimax-hong-kong-ipo-ai-tigers-zhipu.html"
    title: "CNBC: MiniMax doubles in Hong Kong debut (2026-01-09)"
  - id: cnbc-dbx-aug26
    resource: "https://www.cnbc.com/2026/08/13/databricks-funding-round-190-billion-valuation.html"
    title: "CNBC: Databricks wraps $5 billion funding round at $190 billion valuation (2026-08-13)"
  - id: forge-dbx
    resource: https://forgeglobal.com/insights/databricks-upcoming-ipo-news/
    title: "Forge: Databricks IPO news (Ghodsi: 2026 a 'terrible' year to list)"
  - id: bbg-clickhouse
    resource: https://www.bloomberg.com/news/articles/2026-01-16/clickhouse-lands-15-billion-valuation-in-ai-database-race
    title: "Bloomberg: ClickHouse lands $15B valuation"
  - id: sa-grafana
    resource: https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/
    title: "SiliconANGLE: Grafana Labs reportedly raising at $9B valuation"
  - id: lf-coss-2025
    resource: https://www.linuxfoundation.org/press/linux-foundation-cossa-and-serena-report-shows-venture-investment-in-open-source-outperforms-proprietary-counterparts-and-benefits-communities
    title: "LF/COSSA/Serena: State of Commercial Open Source 2025"
  - id: cb-h1-2026
    resource: https://news.crunchbase.com/venture/global-startup-exits-ipo-ma-soar-ai-q2-h1-2026/
    title: "Crunchbase: H1 2026 exits, IPOs, M&A"
  - id: elastic-fy26-8k
    resource: "https://www.sec.gov/Archives/edgar/data/0001707753/000170775326000008/a26q4erex991.htm"
    title: "Elastic 8-K Ex.99.1: Q4 and FY2026 results (FY26 revenue $1.739B, +17%)"
  - id: grafana-600m
    resource: "https://grafana.com/press/2026/08/26/grafana-labs-crosses-10000-customer-milestone-as-ai-adoption-accelerates-growth-across-the-platform/"
    title: "Grafana Labs press release: crosses 10,000 customers, surpasses $600M ARR (2026-08-26)"
---

# Summary

The US-listed COSS cohort **shrank from six to three** pure-plays in two years: HashiCorp (IBM, Feb 2025)[^tc-ibm-hashicorp], Couchbase (Haveli, Sept 2025)[^couchbase-close] and Confluent (IBM, Mar 2026)[^ibm-confluent-close] left the market, and **no US COSS IPO** took place. The survivors diverged: **MongoDB** re-accelerated to 30% growth (Q2 FY27 $771.8M)[^mdb-q2fy27] only to see CEO CJ Desai leave for Meta on 2026-09-28 (one day before its Investor Day; Ittycheria returned as interim CEO and guidance was reaffirmed) and the stock fall ~18% (intraday lows reported near −26%)[^mdb-ceo][^yf-mdb-stock][^street-mdb]; **Elastic** grew a steady 15–17% to a $1.739B FY2026 (+17%) and $478M in Q1 FY27 (+15%), raising FY27 guidance to $1.998–2.010B[^elastic-fy26-8k][^elastic-q1fy27]; **GitLab** grew 26% in FY2026 to $955.2M but decelerated to 21%, cut ~14% of staff and remains perennial takeover bait[^gitlab-fy26][^gitlab-q2fy27][^tc-gitlab-cuts]. Meanwhile the IPO-ready private cohort — Databricks (>$7B run-rate), ClickHouse, Grafana, Supabase — chose private mega-rounds; Databricks' CEO called 2026 a "terrible" year to list amid SpaceX/OpenAI/Anthropic IPO traffic[^forge-dbx]. The only "open" IPOs of note were Chinese open-weight model makers Zhipu (2026-01-08, +13% on debut) and MiniMax (2026-01-09, +109%) in Hong Kong[^cnbc-zhipu][^cnbc-minimax].

# Public COSS scorecard (latest reported)

| Company | Status | Latest revenue | Growth | Notable 2y events | Verdict |
|---|---|---|---|---|---|
| MongoDB (SSPL core, Atlas) | NASDAQ: MDB | Q2 FY27 $771.8M; FY27 guide $2.99–3.03B | +30% | CEO Ittycheria → Desai (Nov 2025) → Desai to Meta, Ittycheria interim (Sept 2026) | growing, leadership risk |
| Elastic (AGPL/ELv2/SSPL) | NYSE: ESTC | FY26 $1.739B; Q1 FY27 $478M | +17% / +15% | AGPL option added Aug 2024 | stable-growing |
| GitLab (MIT core, open core) | NASDAQ: GTLB | FY26 $955.2M; Q2 FY27 $286.3M; NRR 117% | +26% / +21% | CEO Staples (Dec 2024); Datadog interest (2024, 2025); 14% layoffs (Jun 2026) | struggling relative to AI-native peers |
| Confluent (Apache Kafka) | Delisted 2026-03-17 | — | — | IBM ~$11B, $31/sh | acquired |
| HashiCorp (BSL) | Delisted 2025-02-27 | — | — | IBM $6.4B EV | acquired |
| Couchbase | Delisted 2025-09-24 | — | — | Haveli ~$1.5B, $24.50/sh | acquired (PE) |
| Red Hat (inside IBM) | Segment | IBM Q2 2026: Red Hat +11% | +11% | China R&D exit, IBM job cuts | stable |

Sources: [^mdb-q2fy27][^mdb-ceo][^elastic-fy26][^elastic-q1fy27][^gitlab-fy26][^gitlab-q2fy27][^tc-gitlab-cuts][^ibm-q2-2026].

# IPO pipeline (private COSS at IPO scale)

| Company | Latest valuation | Scale | IPO stance | Source |
|---|---|---|---|---|
| Databricks | $190B (Aug 2026) | >$7B run-rate, >80% growth | not in 2026; "eventual" | [^cnbc-dbx-aug26][^forge-dbx] |
| ClickHouse | ~$15B (Jan 2026) | ARR +250% in a year | "within the next few years" (May 2026) | [^bbg-clickhouse] |
| Grafana Labs | ~$9B (Feb 2026, reported round; not confirmed closed) | >$600M ARR, 10,000+ customers (2026-08-26) | no IPO filing found as of 2026-10-03 | [^sa-grafana][^grafana-600m] |
| Supabase | $10.5B (Jun 2026) | ~10M developers | none announced | see [funding](/projects/coss-market/coss-funding-2024-2026.md) |

# GitLab: takeover talk timeline
- Jul 2024: Reuters reports GitLab working with bankers on a sale; Datadog named as interested[^sa-gitlab-datadog].
- Dec 2024: Bill Staples (ex-New Relic) replaces Sid Sijbrandij as CEO[^hn-gitlab-ceo].
- Oct 2025 (~10-16/17): StreetInsider reports Datadog working with Morgan Stanley on a renewed GitLab takeover bid (possibly >$60/share); GTLB +~11% intraday[^fool-ddog-gitlab].
- Jun 2026: 14% layoff (~350 people), exit from 22 countries, $30–35M charges; stock −17% YTD at the time[^tc-gitlab-cuts].
- Jan 2026: GitLab named on lists of potential buyout candidates as software valuations reset[^yf-gitlab-buyout]. (Corrected in pass 2: date "Aug 2026" → Jan 2026.)
- Sep 2026: Q2 FY27 revenue $286.3M (+21%), net ARR growth >40% YoY, record gross bookings; FY27 guide $1.129–1.133B[^gitlab-q2fy27]. No sale or activist campaign found as of 2026-10-03.

# Analysis
- **Public markets pay for AI consumption growth, not for "open source".** MongoDB's Atlas re-acceleration was rewarded; GitLab's seat-based DevSecOps model was punished by fears of AI coding agents compressing seats.
- **COSS still wins at exit** (median IPO valuation $1.3B vs $171M closed-source)[^lf-coss-2025], but the exit route in 2024–26 was overwhelmingly M&A.
- **2026 IPO window was absorbed by mega-AI listings** (SpaceX raised $75B in Q2 2026)[^cb-h1-2026], crowding out mid-size infra listings.

# By window
## W3
- MongoDB CEO departs for Meta; stock ~−18% (intraday near −26%)[^yf-mdb-stock][^street-mdb]; Grafana passes $600M ARR[^grafana-600m]; MongoDB Q2 +30%[^mdb-q2fy27]; GitLab Q2 +21%[^gitlab-q2fy27]; Elastic Q1 +15%[^elastic-q1fy27].
## W6
- GitLab 14% layoffs (~350 people, exit from 22 countries)[^tc-gitlab-cuts]; Elastic FY26 $1.739B[^elastic-fy26-8k].
## W9
- Confluent delisted after IBM close[^ibm-confluent-close]; Zhipu/MiniMax HK IPOs[^cnbc-zhipu].
## W12
- MongoDB names CJ Desai CEO (Nov 2025)[^mdb-ceo]; Datadog–GitLab takeover report (Oct 2025)[^fool-ddog-gitlab].
## W24
- HashiCorp delisted[^tc-ibm-hashicorp]; Couchbase taken private[^couchbase-close]; GitLab CEO change[^hn-gitlab-ceo].

# Lessons
- Sub-$10B public COSS firms with <25% growth are acquisition targets, not compounders, in this market.
- Late-stage COSS can stay private indefinitely when sovereign funds (GIC) and crossovers fund $500M–$5B rounds.
- Founder/CEO continuity is a material risk factor: MongoDB lost roughly $6B of market cap in a day on a CEO exit (per press estimates)[^yf-mdb-stock][^street-mdb].

# Related
- [GitLab](/organizations/gitlab.md), [Elastic](/organizations/elastic.md), [MongoDB](/organizations/mongodb.md), [Confluent](/organizations/confluent.md), [HashiCorp](/organizations/hashicorp.md), [Couchbase](/organizations/couchbase.md), [Red Hat](/organizations/red-hat.md)
- [/events/2026-09-mongodb-ceo-departs-for-meta.md](/events/2026-09-mongodb-ceo-departs-for-meta.md), [/events/2026-06-gitlab-layoffs-restructuring.md](/events/2026-06-gitlab-layoffs-restructuring.md), [/events/2026-01-zhipu-minimax-hong-kong-ipos.md](/events/2026-01-zhipu-minimax-hong-kong-ipos.md)

[^gitlab-q2fy27]: GitLab IR, 2026-09-01.
[^gitlab-fy26]: GitLab 8-K, FY2026.
[^tc-gitlab-cuts]: TechCrunch, 2026-06-03.
[^sa-gitlab-datadog]: SiliconANGLE, 2024-07-17.
[^fool-ddog-gitlab]: Motley Fool: DDOG mulls GitLab takeover (StreetInsider report, 2025-10-17).
[^hn-gitlab-ceo]: Hacker News, Dec 2024.
[^elastic-fy26]: Elastic IR, FY2026.
[^elastic-q1fy27]: Elastic IR, 2026-08-27.
[^mdb-q2fy27]: MongoDB IR, 2026-09-01.
[^mdb-ceo]: PR Newswire, 2026-09-28.
[^yf-mdb-stock]: Yahoo Finance: MongoDB stock fell 18% when its CEO left for Meta (2026-09).
[^ibm-confluent-close]: IBM Newsroom, 2026-03-17.
[^tc-ibm-hashicorp]: TechCrunch, 2025-02-27.
[^couchbase-close]: Couchbase, 2025-09-24.
[^ibm-q2-2026]: IBM Newsroom, 2026-07-22.
[^cnbc-zhipu]: CNBC: Zhipu climbs in Hong Kong debut (2026-01-08).
[^cnbc-dbx-aug26]: CNBC: Databricks wraps $5 billion funding round at $190 billion valuation (2026-08-13).
[^forge-dbx]: Forge Global.
[^bbg-clickhouse]: Bloomberg, 2026-01-16.
[^sa-grafana]: SiliconANGLE, 2026-02-13.
[^lf-coss-2025]: LF/COSSA/Serena, 2025-08-25.
[^cb-h1-2026]: Crunchbase News, July 2026.
[^cnbc-minimax]: CNBC: MiniMax doubles in Hong Kong debut (2026-01-09).
[^elastic-fy26-8k]: Elastic 8-K Ex.99.1: Q4 and FY2026 results (FY26 revenue $1.739B, +17%).
[^grafana-600m]: Grafana Labs press release: crosses 10,000 customers, surpasses $600M ARR (2026-08-26).
[^street-mdb]: TheStreet: MongoDB stock crashes as its CEO jumps ship (intraday low ~-26%, 2026-09-28).
[^yf-gitlab-buyout]: Yahoo Finance: GitLab seen as potential buyout candidate as tech valuations reset (Jan 2026).
