---
type: Market Study
title: "COSS venture funding 2024-2026"
description: "Venture funding into commercial open source (COSS) companies 2024-2026: a ~$9B/yr baseline (LF/COSSA) swamped from 2025 onward by AI-adjacent mega-rounds (Databricks, Mistral, ClickHouse, Supabase, Temporal); capital is abundant but extremely concentrated."
resource: https://www.linuxfoundation.org/research/2025-state-of-commercial-open-source
tags: [coss, venture-capital, funding, ai, market-study]
domain: coss-market
metrics:
  coss_funding_2024_usd: { value: "26.4B", as_of: 2025-08-25, source: lf-coss-2025 }
  coss_avg_annual_2019_2024_usd: { value: "~9B across ~250 deals/yr", as_of: 2025-08-25 }
  global_vc_2025_usd: { value: "425B (AI 211B, ~50%)", as_of: 2026-01-07 }
  global_vc_h1_2026_usd: { value: "510B (AI >70% of Q2)", as_of: 2026-07-02 }
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T18:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T18:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lf-coss-2025
    resource: https://www.linuxfoundation.org/press/linux-foundation-cossa-and-serena-report-shows-venture-investment-in-open-source-outperforms-proprietary-counterparts-and-benefits-communities
    title: "Linux Foundation, COSSA and Serena: The State of Commercial Open Source 2025 (press release, 2025-08-25)"
    author: org:linux-foundation
  - id: lf-coss-report
    resource: https://www.linuxfoundation.org/research/2025-state-of-commercial-open-source
    title: "The State of Commercial Open Source 2025 (Boysel, Lavergne, Trifiro)"
  - id: cb-2025
    resource: https://news.crunchbase.com/venture/funding-data-third-largest-year-2025/
    title: "Crunchbase News: 2025 global venture funding, third-largest year"
    author: org:crunchbase
  - id: cb-h1-2026
    resource: https://news.crunchbase.com/venture/global-startup-exits-ipo-ma-soar-ai-q2-h1-2026/
    title: "Crunchbase News: Global startup investment hit record $510B in H1 2026"
    author: org:crunchbase
  - id: cnbc-dbx-feb26
    resource: https://www.cnbc.com/2026/02/09/databricks-completes-5-billion-funding-round-with-2-billion-in-debt.html
    title: "CNBC: Databricks completes $5B funding round at $134B valuation (2026-02-09)"
  - id: cnbc-dbx-aug26
    resource: "https://www.cnbc.com/2026/08/13/databricks-funding-round-190-billion-valuation.html"
    title: "CNBC: Databricks wraps $5 billion funding round at $190 billion valuation (2026-08-13)"
  - id: dbx-7b
    resource: "https://www.databricks.com/company/newsroom/press-releases/databricks-grows-80-yoy-surpasses-7b-revenue-run-rate-scales"
    title: "Databricks press release: grows >80% YoY, surpasses $7B revenue run-rate (2026-08)"
  - id: bbg-clickhouse
    resource: https://www.bloomberg.com/news/articles/2026-01-16/clickhouse-lands-15-billion-valuation-in-ai-database-race
    title: "Bloomberg: ClickHouse lands $15B valuation (2026-01-16)"
  - id: sa-clickhouse
    resource: https://siliconangle.com/2026/01/16/database-maker-clickhouse-raises-400m-acquires-ai-observability-startup-langfuse/
    title: "SiliconANGLE: ClickHouse raises $400M, acquires Langfuse"
  - id: supabase-f
    resource: https://supabase.com/blog/supabase-series-f
    title: "Supabase blog: Series F ($500M, GIC-led, 2026-06-04)"
  - id: supabase-e
    resource: "https://supabase.com/blog/supabase-series-e"
    title: "Supabase blog: Series E ($100M at $5B, led by Accel and Peak XV, 2025-10-03)"
  - id: turso-supabase
    resource: https://turso.tech/blog/turso-is-joining-supabase
    title: "Turso blog: Turso is joining Supabase (2026-10-02)"
  - id: temporal-e
    resource: https://temporal.io/blog/temporal-raises-usd550m-series-e-at-usd12-55b-valuation-ai
    title: "Temporal: raises $550M at $12.55B valuation (2026-09-14)"
  - id: sa-grafana
    resource: https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/
    title: "SiliconANGLE: Grafana Labs reportedly raising at $9B valuation (2026-02-13)"
  - id: n8n-sap
    resource: "https://blog.n8n.io/n8n-sap/"
    title: "n8n blog: Announcing SAP's strategic investment in n8n ($5.2B valuation, 2026-05-12)"
  - id: bbg-n8n-sap
    resource: "https://www.bloomberg.com/news/articles/2026-05-12/sap-invests-in-ai-automation-startup-n8n-at-5-2-billion-value"
    title: "Bloomberg: SAP invests in AI startup n8n, doubling valuation to $5.2B (2026-05-12)"
  - id: n8n-c
    resource: "https://www.finsmes.com/2025/10/n8n-raises-180m-in-series-c-funding-at-2-5-billion-post-money-valuation.html"
    title: "FinSMEs: n8n raises $180M Series C at $2.5B post-money (Accel-led, Oct 2025)"
  - id: chainguard-d
    resource: "https://www.chainguard.dev/unchained/announcing-chainguards-series-d-building-the-safe-source-for-all-open-source"
    title: "Chainguard blog: Announcing Chainguard's Series D ($356M at $3.5B, 2025-04-23)"
  - id: sw-chainguard
    resource: "https://www.securityweek.com/chainguard-raises-280-million-in-growth-funding/"
    title: "SecurityWeek: Chainguard raises $280 million in growth funding (General Catalyst CVF, Oct 2025)"
  - id: mistral-c
    resource: "https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai/"
    title: "Mistral AI: raises EUR 1.7B Series C led by ASML at EUR 11.7B post-money (2025-09-09)"
  - id: cnbc-mistral26
    resource: "https://www.cnbc.com/2026/09/08/mistral-ai-funding-valuation-samsung.html"
    title: "CNBC: Mistral bags $24 billion valuation as Samsung leads funding (2026-09-08)"
  - id: bbg-mistral26
    resource: "https://www.bloomberg.com/news/articles/2026-09-08/mistral-ai-raises-at-21-billion-valuation-in-samsung-led-round"
    title: "Bloomberg: Mistral AI raises at EUR 21 billion valuation in Samsung-led round (2026-09-08)"
  - id: vercel-f
    resource: "https://vercel.com/blog/series-f"
    title: "Vercel blog: Towards the AI Cloud: our Series F ($300M at $9.3B, Sept 2025)"
  - id: supabase-150m
    resource: "https://www.prnewswire.com/news-releases/supabase-announces-150m-in-new-funding-and-turso-acquisition-302896752.html"
    title: "PR Newswire: Supabase announces $150M in new funding (GIC-led) and Turso acquisition (2026-10-02)"
  - id: grafana-600m
    resource: "https://grafana.com/press/2026/08/26/grafana-labs-crosses-10000-customer-milestone-as-ai-adoption-accelerates-growth-across-the-platform/"
    title: "Grafana Labs press release: crosses 10,000 customers, surpasses $600M ARR (2026-08-26)"
  - id: together-c
    resource: "https://theaiinsider.tech/2026/07/02/together-ai-raises-800m-at-8-3b-valuation-to-make-frontier-ai-accessible-to-all/"
    title: "The AI Insider: Together AI raises $800M Series C at $8.3B, led by Aramco Ventures (2026-07-02)"
  - id: tc-modal
    resource: "https://techcrunch.com/2026/09/28/source-inference-provider-modal-labs-closing-in-on-750m-round-at-15-75b-valuation/"
    title: "TechCrunch: Modal Labs closing in on $750M round at $15.75B valuation (sources, 2026-09-28)"
  - id: cossa-ar-2025
    resource: "https://cossa.org/cossa-releases-2025-annual-report/"
    title: "COSSA: COSSA releases 2025 Annual Report (2026-09-08)"
---

# Summary

Commercial open source (COSS) has never had more capital available — but almost all of it flows to a handful of AI-adjacent data/infra platforms. The best baseline is the Linux Foundation / COSSA / Serena study: COSS startups raised **$26.4B in 2024**, against a 2019–2024 average of **~$9B/year across ~250 deals**[^lf-coss-2025]. Since then, single rounds have rivalled the old annual baseline: Databricks completed a $5B round (incl. $2B debt) at $134B (Feb 2026)[^cnbc-dbx-feb26] and a $5B round at $190B (2026-08-13) while crossing a $7B revenue run-rate at >80% growth[^cnbc-dbx-aug26][^dbx-7b]. The second tier — ClickHouse ($15B)[^bbg-clickhouse], Temporal ($12.55B)[^temporal-e], Supabase ($10.5B)[^supabase-f], Grafana (reported ~$9B)[^sa-grafana], n8n ($5.2B)[^n8n-sap], Chainguard ($3.5B)[^chainguard-d] — saw valuations double within 6–12 months, almost always justified by "AI agents/vibe coding drive our usage". **Verdict: boom for AI-adjacent COSS; long tail of non-AI COSS faces a scarcer, more selective market.**

# Key numbers

| Metric | Value | Source |
|---|---|---|
| COSS funding 2024 (LF/COSSA/Serena) | $26.4B | [^lf-coss-2025] |
| COSS avg annual deployment 2019–2024 | ~$9B, ~250 deals/yr | [^lf-coss-2025] |
| COSS median IPO valuation vs closed | $1.3B vs $171M (7x) | [^lf-coss-2025] |
| COSS median M&A valuation vs closed | $482M vs $34M (14x) | [^lf-coss-2025] |
| COSS geographic split | US 65%, EU 25%; ~90% infrastructure software | [^lf-coss-2025] |
| COSS exit rate (IPO or M&A) | 12% of 800+ VC-backed cos | [^lf-coss-2025] |
| Global VC 2025 (all sectors) | $425B (+30% YoY from $328B), AI $211B (~50%, +85% YoY) | [^cb-2025] |
| Global VC H1 2026 | $510B (Q1 $305B, Q2 $205B); Q2 >70% to AI; OpenAI+Anthropic $217B = 43% of H1 | [^cb-h1-2026] |

**No aggregate COSS funding figure for 2025 or H1 2026 has been published** (checked in pass 2, 2026-10-03): the LF/COSSA/Serena study covers 2000–2024 only[^lf-coss-report]; COSSA's own 2025 annual report (released 2026-09-08) is an activity report without a funding census[^cossa-ar-2025]; Crunchbase's 2025 and H1 2026 reports do not break out open source[^cb-2025][^cb-h1-2026]; OSS Capital publishes no index. As an indicative floor only, the rounds tabulated below sum to **~$3.5B for calendar 2025** (excluding Databricks' Series L, announced Dec 2025 and completed Feb 2026) and **~$16B for Jan–Sep 2026** (of which Databricks ~$10B). Corrected in pass 2: earlier ">$20B for 2025" bottom-up estimate → removed (not supported by the tabulated rounds).

# Major COSS rounds (2024-10 → 2026-10)

| Window | Date | Company | Round | Valuation | Source |
|---|---|---|---|---|---|
| W24 | 2025-04-23 | Chainguard | $356M Series D (Kleiner Perkins, IVP) | $3.5B | [^chainguard-d] |
| W24 | 2025-09-09 | Mistral AI (open-weight models) | €1.7B Series C, ASML-led (€1.3B) | €11.7B post | [^mistral-c] |
| W24 | 2025-09-30 | Vercel (Next.js) | $300M Series F (Accel, GIC) + ~$300M tender | $9.3B | [^vercel-f] |
| W12 | 2025-10-03 | Supabase | $100M Series E (Accel, Peak XV) | $5B | [^supabase-e] |
| W12 | 2025-10-09 | n8n (fair-code) | $180M Series C (Accel) | $2.5B | [^n8n-c] |
| W12 | 2025-10-23 | Chainguard | $280M growth financing (General Catalyst CVF); total raised ~$892M | $3.5B (unchanged) | [^sw-chainguard] |
| W9 | 2026-01-16 | ClickHouse | $400M Series D (Dragoneer) + bought Langfuse | ~$15B | [^bbg-clickhouse] [^sa-clickhouse] |
| W9 | 2026-02-09 | Databricks | $5B (incl. $2B debt), Series L completed | $134B | [^cnbc-dbx-feb26] |
| W9 | 2026-02 | Grafana Labs | GIC-led round **reported** by The Information (amount undisclosed; close not confirmed) | ~$9B (from $6.6B) | [^sa-grafana] |
| W6 | 2026-05-12 | n8n | SAP strategic investment (~$60M secondary, <1.3% stake) | $5.2B | [^n8n-sap][^bbg-n8n-sap] |
| W6 | 2026-06-04 | Supabase | $500M Series F (GIC) | $10.5B post | [^supabase-f] |
| W3 | 2026-07-01 | Together AI (open-model inference cloud) | $800M Series C (Aramco Ventures) | $8.3B post | [^together-c] |
| W3 | 2026-08-13 | Databricks | $5B (Coatue, Blackstone, MGX, T. Rowe; Sixth Street new) | $190B; >$7B run-rate, >80% growth | [^cnbc-dbx-aug26][^dbx-7b] |
| W3 | 2026-09-08 | Mistral AI | €3B Series D, Samsung-led (Scaleup Europe Fund, PSG co-lead) | >€21B (~$24B) | [^cnbc-mistral26][^bbg-mistral26] |
| W3 | 2026-09-14 | Temporal (MIT) | $550M Series E (Lightspeed, Wellington) | $12.55B | [^temporal-e] |
| W3 | 2026-10-02 | Supabase | $150M (GIC-led; CapitalG) + Turso acquisition | n/d | [^supabase-150m][^turso-supabase] |

Corrected in pass 2: Mistral 2026 valuation "reports vary €21B–$31B" → ">€21B (~$24B)" per Bloomberg/CNBC; Mistral 2026 round date 2026-09-07 → 2026-09-08. Chainguard: there was **no separate ~$800M round in 2026** — the "$800M+" figure in some coverage is Chainguard's cumulative funding (~$892M after the Oct 2025 growth round)[^sw-chainguard].

# Analysis

- **Funding follows AI usage, not license purity.** Every top round cites AI agents: Supabase says 70% of new databases are now created by agents or AI tools (Oct 2026, up from >60% in June)[^supabase-150m][^supabase-f]; Databricks frames itself as an AI platform[^dbx-7b]; Temporal pitches "reliable AI infrastructure" and >200% run-rate growth[^temporal-e].
- **Valuation doubling in <12 months became normal for the winners**: Supabase $2B→$5B→$10.5B in ~14 months[^supabase-e][^supabase-f]; ClickHouse doubled in under a year[^bbg-clickhouse]; n8n $2.5B→$5.2B in 7 months[^n8n-sap]; Databricks $134B→$190B in ~8 months[^cnbc-dbx-aug26].
- **Inference clouds for open-weight models are the new COSS-adjacent mega-round category** — Together AI $8.3B (Jul 2026)[^together-c]; Modal reportedly closing $750M at $15.75B (Sept 2026, not yet announced)[^tc-modal].
- **Grafana shows growth without a confirmed new round**: the Feb 2026 $9B raise remains a press report, but the company disclosed >$600M ARR and 10,000+ customers on 2026-08-26[^grafana-600m].
- **COSS's structural advantage persists** per LF data (7x IPO and 14x M&A valuation premium, ~2x seed→A progression)[^lf-coss-2025] — but exits are rare (12%).
- **Concentration risk**: in H1 2026 two AI labs took 43% of all venture dollars[^cb-h1-2026]; COSS companies without an AI narrative compete for what's left.

# By window

## W3
- Databricks $5B at $190B[^cnbc-dbx-aug26]; Temporal $550M at $12.55B[^temporal-e]; Mistral €3B[^cnbc-mistral26]; Together AI $800M at $8.3B[^together-c]; Supabase $150M + Turso[^supabase-150m]; Grafana >$600M ARR[^grafana-600m].
## W6
- Supabase $500M at $10.5B[^supabase-f]; SAP invests in n8n at $5.2B[^n8n-sap].
## W9
- ClickHouse $400M at ~$15B[^bbg-clickhouse]; Databricks $134B[^cnbc-dbx-feb26]; Grafana ~$9B (reported)[^sa-grafana].
## W12
- Supabase $5B[^supabase-e]; n8n $2.5B[^n8n-c]; Chainguard $280M[^sw-chainguard].
## W24
- LF/COSSA report: $26.4B COSS funding in 2024[^lf-coss-2025]; Chainguard $3.5B[^chainguard-d]; Mistral €11.7B[^mistral-c]; Vercel $9.3B[^vercel-f].

# Lessons
- An open-source wedge plus a managed cloud that AI agents consume programmatically is the most-funded COSS archetype of 2025–26.
- Headline "open source funding" totals are dominated by 3–5 companies; medians tell a very different story.
- Valuations set in 2026 imply revenue multiples that will need IPO markets to validate (see [IPOs and public companies](/projects/coss-market/coss-ipos-and-public-companies.md)).

# Related
- [AI capture of COSS funding](/projects/coss-market/ai-capture-of-coss-funding.md)
- [COSS M&A 2024–2026](/projects/coss-market/coss-ma-2024-2026.md)
- [Databricks](/organizations/databricks.md), [ClickHouse](/organizations/clickhouse-inc.md), [Supabase](/organizations/supabase.md), [Temporal](/organizations/temporal-technologies.md), [Grafana Labs](/organizations/grafana-labs.md)
- [Domain review](/domains/coss-market.md)

[^lf-coss-2025]: Linux Foundation/COSSA/Serena press release, 2025-08-25.
[^cb-2025]: Crunchbase News, 2025 year-end.
[^cb-h1-2026]: Crunchbase News, H1 2026.
[^cnbc-dbx-feb26]: CNBC, 2026-02-09.
[^cnbc-dbx-aug26]: CNBC: Databricks wraps $5 billion funding round at $190 billion valuation (2026-08-13).
[^bbg-clickhouse]: Bloomberg, 2026-01-16.
[^sa-clickhouse]: SiliconANGLE, 2026-01-16.
[^supabase-f]: Supabase blog, 2026-06-04.
[^supabase-e]: Supabase blog: Series E ($100M at $5B, led by Accel and Peak XV, 2025-10-03).
[^turso-supabase]: Turso blog, 2026-10-02.
[^temporal-e]: Temporal blog, 2026-09-14.
[^sa-grafana]: SiliconANGLE, 2026-02-13.
[^n8n-sap]: n8n blog: Announcing SAP's strategic investment in n8n ($5.2B valuation, 2026-05-12).
[^chainguard-d]: Chainguard blog: Announcing Chainguard's Series D ($356M at $3.5B, 2025-04-23).
[^mistral-c]: Mistral AI: raises EUR 1.7B Series C led by ASML at EUR 11.7B post-money (2025-09-09).
[^cnbc-mistral26]: CNBC: Mistral bags $24 billion valuation as Samsung leads funding (2026-09-08).
[^vercel-f]: Vercel blog: Towards the AI Cloud: our Series F ($300M at $9.3B, Sept 2025).
[^bbg-mistral26]: Bloomberg: Mistral AI raises at EUR 21 billion valuation in Samsung-led round (2026-09-08).
[^bbg-n8n-sap]: Bloomberg: SAP invests in AI startup n8n, doubling valuation to $5.2B (2026-05-12).
[^cossa-ar-2025]: COSSA: COSSA releases 2025 Annual Report (2026-09-08).
[^dbx-7b]: Databricks press release: grows >80% YoY, surpasses $7B revenue run-rate (2026-08).
[^grafana-600m]: Grafana Labs press release: crosses 10,000 customers, surpasses $600M ARR (2026-08-26).
[^lf-coss-report]: The State of Commercial Open Source 2025 (Boysel, Lavergne, Trifiro).
[^n8n-c]: FinSMEs: n8n raises $180M Series C at $2.5B post-money (Accel-led, Oct 2025).
[^supabase-150m]: PR Newswire: Supabase announces $150M in new funding (GIC-led) and Turso acquisition (2026-10-02).
[^sw-chainguard]: SecurityWeek: Chainguard raises $280 million in growth funding (General Catalyst CVF, Oct 2025).
[^tc-modal]: TechCrunch: Modal Labs closing in on $750M round at $15.75B valuation (sources, 2026-09-28).
[^together-c]: The AI Insider: Together AI raises $800M Series C at $8.3B, led by Aramco Ventures (2026-07-02).
