---
type: Grant Program
title: Sovereign Tech Fund (Sovereign Tech Agency)
description: German federal investment program commissioning maintenance and security work on open digital base technologies (minimum €50,000 of work per application); rolling applications, open in October 2026.
resource: https://www.sovereign.tech/programs/fund
tags: [open-source, maintenance, security, germany, public-funding, infrastructure]
category: oss-infrastructure
funder: funders/sovereign-tech-agency
funder_type: government
region: global
applicant_types: [oss-project, nonprofit, company, individual]
software_focus: [oss-infrastructure, security, developer-tools]
funding_type: contract
oss_required: yes
equity_free: yes
amount_min_usd: 54000
amount_text: "Work must exceed €50,000; no published maximum (investments to date average several hundred thousand euro)"
application_model: rolling
program_status: rolling
deadline_note: "Rolling; ~10 weeks initial review + up to 8 weeks scoping + up to 8 weeks contracting (≈6 months to contract start)"
effort_to_apply: high
example_funded: [Python Software Foundation (CPython/PyPI), Let's Encrypt, FFmpeg, OpenSSL Foundation, rustls, FreeBSD, Samba, KDE, Mastodon, Debian CI]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: sta-fund
    resource: https://www.sovereign.tech/programs/fund
    title: "Sovereign Tech Agency: Sovereign Tech Fund"
  - id: sta-programs
    resource: https://www.sovereign.tech/programs
    title: "Sovereign Tech Agency: Programs"
  - id: sta-tech
    resource: https://www.sovereign.tech/tech
    title: "Sovereign Tech Agency: Technologies we invest in"
  - id: sta-resilience-relaunch
    resource: https://www.sovereign.tech/news/resilience-relaunch
    title: "Sovereign Tech Resilience relaunches with four new services (2026-09-28)"
---

# Summary

The Sovereign Tech Fund is the flagship investment program of Germany's Sovereign Tech Agency (STA). It commissions (pays for) concrete maintenance, security and modernisation work on open source "digital base technologies" — libraries, protocols, build tools, runtimes, package infrastructure — that many people use but few contribute to.[^sta-fund] Applications are accepted on a rolling basis via the STA application platform and the work must cost more than €50,000.[^sta-fund] Since October 2022 the agency reports having supported 118 technologies with €41.1 million of commissioned work.[^sta-tech] It is the largest single public source of maintenance money for OSS infrastructure worldwide and is open to applicants from any country.

# Eligibility

- Activities must develop or maintain open digital base technologies; all code and docs under an OSI-approved or FSF-recognised free licence.[^sta-fund]
- Not eligible: prototypes, work already receiving public funding for the same activities, and (currently) end-user applications such as messengers or file-storage apps.[^sta-fund]
- Selection criteria: prevalence, relevance to important sectors, vulnerability (underfunding/structural problems), public interest, quality of proposed activities, applicant expertise.[^sta-fund]

# What it funds

- Maintenance, refactoring, security hardening, documentation, test/CI improvement, dependency modernisation, community/infrastructure work on widely used components.[^sta-fund]
- Does NOT fund new prototypes, startup product development or user-facing apps.[^sta-fund]
- Projects that need services rather than money (audits, CRA compliance, memory-safety migration) should look at [Sovereign Tech Resilience](/programs/oss-infrastructure/sovereign-tech-resilience.md).[^sta-resilience-relaunch]

# Amounts & terms

- Minimum: work costing more than €50,000.[^sta-fund] No public maximum.
- Funding is delivered as commissioned service contracts for scoped milestones (STA "invests" by buying work, not as a donation); scoping is co-developed with STA experts.[^sta-fund]

# How to apply

1. Read the selection criteria and submit through the online application platform only.[^sta-fund]
2. Initial review ≈10 weeks → scoping and expert consultation up to 8 weeks → legal review/contracting up to 8 weeks; plan for ~6 months to contract start.[^sta-fund]
3. Tip: frame the application around prevalence and vulnerability evidence (dependents, downloads, maintainer bus factor) — these are explicit criteria.[^sta-fund]

# Deadlines

| Date | Event |
|---|---|
| Rolling | Applications accepted continuously[^sta-programs] |

# Track record

- 118 technologies supported, €41.1M invested since Oct 2022.[^sta-tech]
- Examples: Python Software Foundation (CPython/PyPI), Let's Encrypt, FFmpeg, OpenSSL Foundation, rustls, Rust Foundation, FreeBSD, Samba, KDE, Mastodon, Debian CI, Apache Arrow, Babel, OpenStreetMap.[^sta-tech]

# Fit

- Good fit if: you maintain a widely depended-upon library/tool/protocol implementation and need ≥€50k of well-scoped maintenance or security work; you can handle a ~6-month procurement-like process.
- Poor fit if: you need small or fast money, are building a new prototype (see [Prototype Fund](/programs/oss-infrastructure/prototype-fund.md) or [NLnet Restack](/programs/oss-infrastructure/nlnet-restack.md)), or build an end-user app.

# Related

- Funder: [/funders/sovereign-tech-agency](/funders/sovereign-tech-agency.md)
- [Sovereign Tech Fellowship](/programs/oss-infrastructure/sovereign-tech-fellowship.md), [Sovereign Tech Resilience](/programs/oss-infrastructure/sovereign-tech-resilience.md), [Sovereign Tech Standards](/programs/oss-infrastructure/sovereign-tech-standards.md)
- Category guide: [/categories/oss-infrastructure](/categories/oss-infrastructure.md)

[^sta-fund]: Sovereign Tech Agency, "Sovereign Tech Fund", https://www.sovereign.tech/programs/fund
[^sta-programs]: Sovereign Tech Agency, "Programs", https://www.sovereign.tech/programs
[^sta-tech]: Sovereign Tech Agency, "Technologies", https://www.sovereign.tech/tech
[^sta-resilience-relaunch]: Sovereign Tech Agency news, 2026-09-28, https://www.sovereign.tech/news/resilience-relaunch
