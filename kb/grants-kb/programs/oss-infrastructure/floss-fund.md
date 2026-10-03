---
type: Grant Program
title: FLOSS/fund (Zerodha)
description: $1M/year fund from Indian broker Zerodha giving $10,000–$100,000 grants to FOSS projects worldwide, applied for via a funding.json manifest and reviewed quarterly; a fresh $1M allocated for 2026.
resource: https://floss.fund/
tags: [open-source, india, global, funding-json, maintainers]
category: oss-infrastructure
funder: funders/zerodha
funder_type: corporate
region: global
applicant_types: [individual, oss-project, nonprofit, company]
software_focus: [oss-infrastructure, developer-tools, digital-public-goods]
funding_type: grant
oss_required: yes
equity_free: yes
amount_min_usd: 10000
amount_max_usd: 100000
amount_text: "$10,000 minimum, then multiples of $25,000, up to $100,000 per project per year; $1M/year total"
application_model: rolling
program_status: rolling
deadline_note: "Rolling via public funding.json directory; investment committee reviews at end of every quarter (next: end of Dec 2026)"
effort_to_apply: low
example_funded: [OpenSSL, FFmpeg, OpenStreetMap, Krita, Python Software Foundation, Blender, Matrix, F-Droid]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: floss-home
    resource: https://floss.fund/
    title: "FLOSS/fund"
  - id: floss-faq
    resource: https://floss.fund/faq/
    title: "FLOSS/fund FAQ"
  - id: floss-blog
    resource: https://floss.fund/blog/
    title: "FLOSS/fund blog"
  - id: floss-tranche2
    resource: https://floss.fund/blog/second-tranche-2025-anniversary/
    title: "FLOSS/fund: The second tranche and anniversary reflection (2025-10-18)"
  - id: osfy-tranche
    resource: https://www.opensourceforu.com/2025/10/zerodha-announces-final-675000-tranche-for-global-open-source-projects-advocates-sovereign-foss-fund/
    title: "Open Source For You: Zerodha announces final $675,000 tranche"
---

# Summary

FLOSS/fund is a $1M-per-year fund created by Zerodha (India's largest stock broker) in October 2024 to support "critical, impactful, and valuable" FOSS projects globally, for individuals and organisations of any size.[^floss-home][^floss-blog] Projects publish a machine-readable `funding.json` manifest and submit it to a public directory; an internal investment committee reviews at the end of every quarter.[^floss-faq] Requests run from $10,000 up to $100,000 per year.[^floss-faq] The 2025 year distributed the full $1M ($325k to 9 projects, then $675k to 31 projects), and Zerodha committed a fresh $1M for 2026.[^floss-tranche2][^osfy-tranche]

# Eligibility

- Any FOSS project globally; recipients must provide tax documentation required under Indian law.[^floss-faq]

# What it funds

- General support for maintenance and development of widely used FOSS; no restriction to specific activities.[^floss-home]

# Amounts & terms

- Minimum $10,000, then in multiples of $25,000; up to $100,000 per year.[^floss-faq]
- Paperwork after acceptance can take up to ~4 weeks; FLOSS/fund has been working with GitHub Sponsors as a payout channel.[^floss-faq][^floss-tranche2]

# How to apply

- Create `funding.json` (project, entity, funding plans/channels), host it in your repo/domain, and submit it to the FLOSS/fund directory.[^floss-home]
- Quarterly committee decisions are emailed.[^floss-faq] ~300 applications were received in the first year.[^floss-tranche2]

# Deadlines

| Date | Event |
|---|---|
| Rolling | Quarterly reviews (end of Mar/Jun/Sep/Dec)[^floss-faq] |
| 2025-05-30 | First tranche: $325k to 9 projects[^floss-blog] |
| 2025-10-18 | Second tranche: $675k to 31 projects[^floss-tranche2] |

# Track record

- 2025: $1M to 40 projects including OpenSSL, FFmpeg, OpenStreetMap, Krita, PSF, Blender, Matrix and F-Droid.[^floss-tranche2]

# Fit

- Good fit if: your project is widely used and you can accept a cash grant with simple paperwork; low effort to try.
- Poor fit if: you need predictable deadlines or multi-year funding.

# Related

- [/funders/zerodha](/funders/zerodha.md), [Open Source Pledge](/programs/oss-infrastructure/open-source-pledge.md), [GitHub Sponsors](/programs/individuals/github-sponsors.md)

[^floss-home]: FLOSS/fund, https://floss.fund/
[^floss-faq]: FLOSS/fund FAQ, https://floss.fund/faq/
[^floss-blog]: FLOSS/fund blog index, https://floss.fund/blog/
[^floss-tranche2]: FLOSS/fund blog 2025-10-18, https://floss.fund/blog/second-tranche-2025-anniversary/
[^osfy-tranche]: Open Source For You, Oct 2025, https://www.opensourceforu.com/2025/10/zerodha-announces-final-675000-tranche-for-global-open-source-projects-advocates-sovereign-foss-fund/
