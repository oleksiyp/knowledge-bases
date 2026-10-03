---
type: Grant Program
title: Sovereign Tech Fellowship
description: Paid fellowships (freelance contracts worldwide or German employment at €64k–€82k/yr FTE) for maintainers, community managers and technical writers of critical OSS; 2026 round closed 6 April 2026, next round not yet announced.
resource: https://www.sovereign.tech/programs/fellowship
tags: [open-source, maintainers, fellowship, germany]
category: oss-infrastructure
funder: funders/sovereign-tech-agency
funder_type: government
region: [global, de]
applicant_types: [individual]
software_focus: [oss-infrastructure, security]
funding_type: fellowship
oss_required: yes
equity_free: yes
amount_min_usd: 69000
amount_max_usd: 89000
amount_text: "Employment: €64,000–€82,000/yr FTE (2 years, Germany-based); freelance: negotiated hourly rate, 3–12 months, 6–32 h/week"
application_model: periodic-calls
program_status: closed-between-rounds
deadline_note: "2026 applications closed 2026-04-06; STA says it will 'regularly recruit' new fellows — watch newsletter"
effort_to_apply: medium
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: sta-fellowship
    resource: https://www.sovereign.tech/programs/fellowship
    title: "Sovereign Tech Agency: Sovereign Tech Fellowship"
  - id: sta-programs
    resource: https://www.sovereign.tech/programs
    title: "Sovereign Tech Agency: Programs"
  - id: kobzol-report
    resource: https://kobzol.github.io/rust/2026/08/03/stf-june-july-2026.html
    title: "Sovereign Tech Fellowship for Rust maintenance (June–July 2026 report)"
---

# Summary

The Sovereign Tech Fellowship pays individual maintainers directly to look after critical open source components, addressing the structural problem that maintenance work is rarely paid.[^sta-programs] After a 2025 pilot, the 2026 round recruited up to 12 fellows (up to 3 as German employees, the rest as freelancers); applications closed 6 April 2026 and contracts began 26 May 2026.[^sta-fellowship] Freelance fellowships are open worldwide; employment requires residence and work authorisation in Germany.[^sta-fellowship] No 2027 application window has been announced as of October 2026.

# Eligibility

- Maintainers (involved in 3+ projects, leading at least one), community managers or technical writers on OSS meeting STA's prevalence/relevance/vulnerability criteria.[^sta-fellowship]
- Freelance: no stated geographic restriction. Employment: located in and authorised to work in Germany.[^sta-fellowship]
- Strong English required; German not required.[^sta-fellowship]

# What it funds

- Ongoing maintenance, review, triage, release and community work across one or more critical projects — not a fixed deliverable project. Public fellow reports (e.g., Rust compiler/infra maintenance) show the kind of work done.[^kobzol-report]

# Amounts & terms

- Employment: €64,000–€82,000/yr FTE (German public-sector pay scale), 2 years, 20–40 h/week, 30 days vacation.[^sta-fellowship]
- Freelance: negotiated hourly rate, 3–12 months, 6–32 h/week.[^sta-fellowship]

# How to apply

- Application via STA's platform during announced windows; watch the STA newsletter/social channels for the next round.[^sta-fellowship]

# Deadlines

| Date | Event |
|---|---|
| 2026-04-06 | 2026 applications closed — [call](/calls/2026-04-06-sovereign-tech-fellowship-2026.md)[^sta-fellowship] |
| 2026-05-26 | 2026 contracts began[^sta-fellowship] |
| TBA | Next round not announced |

# Track record

- 2025 pilot cohort announced; 2026 cohort up to 12 fellows.[^sta-programs][^sta-fellowship]
- Example: a Rust compiler/infrastructure maintainer publishes bimonthly fellowship reports.[^kobzol-report]

# Fit

- Good fit if: you are an established maintainer of widely used infrastructure who wants paid, flexible maintenance time.
- Poor fit if: you are new to a project or want to build something new.

# Related

- [/funders/sovereign-tech-agency](/funders/sovereign-tech-agency.md), [Sovereign Tech Fund](/programs/oss-infrastructure/sovereign-tech-fund.md), [Rust Foundation Maintainers Fund](/programs/individuals/rust-maintainers-in-residence.md)

[^sta-fellowship]: Sovereign Tech Agency, "Sovereign Tech Fellowship", https://www.sovereign.tech/programs/fellowship
[^sta-programs]: Sovereign Tech Agency, "Programs", https://www.sovereign.tech/programs
[^kobzol-report]: J. Beránek, fellowship report Jun–Jul 2026, https://kobzol.github.io/rust/2026/08/03/stf-june-july-2026.html
