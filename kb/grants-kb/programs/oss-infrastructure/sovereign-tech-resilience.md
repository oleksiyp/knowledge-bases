---
type: Grant Program
title: Sovereign Tech Resilience
description: In-kind security services (audits, tech-debt work, memory-safety migration, post-quantum readiness, supply-chain hardening, Cyber Resilience Act compliance, bug & fix bounties) at no cost for critical FOSS projects; relaunched 28 Sept 2026, rolling applications.
resource: https://www.sovereign.tech/programs/bug-resilience
tags: [open-source, security, audits, bug-bounty, cra, memory-safety, germany]
category: oss-infrastructure
funder: funders/sovereign-tech-agency
funder_type: government
region: global
applicant_types: [oss-project, nonprofit]
software_focus: [oss-infrastructure, security]
funding_type: contract
oss_required: yes
equity_free: yes
amount_text: "In-kind services delivered by contracted firms (no cash to the project); value not published per project"
application_model: rolling
program_status: rolling
deadline_note: "Rolling via apply.sovereign.tech; bug bounty platform paused for new programs until fall 2026 due to report backlog"
effort_to_apply: low
example_funded: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: sta-resilience
    resource: https://www.sovereign.tech/programs/bug-resilience
    title: "Sovereign Tech Agency: Sovereign Tech Resilience"
  - id: sta-resilience-relaunch
    resource: https://www.sovereign.tech/news/resilience-relaunch
    title: "Sovereign Tech Resilience relaunches with four new services (2026-09-28)"
---

# Summary

Sovereign Tech Resilience (formerly "Bug Resilience") gives critical FOSS projects free professional security services paid by the German federal government.[^sta-resilience] On 28 September 2026 it relaunched with four new services — memory-safety transition (Tweede golf), post-quantum readiness (IAV GmbH), supply-chain security (Liquid Reply) and **EU Cyber Resilience Act compliance** (EY Consulting) — alongside expanded tech-debt and audit providers and the YesWeHack bug & fix bounty platform.[^sta-resilience-relaunch] Applications are rolling. This is the most concrete 2026 program aimed at helping OSS maintainers with the CRA, whose vulnerability-reporting obligations started 11 September 2026.[^sta-resilience-relaunch]

# Eligibility

- Open source projects meeting STA's documented criteria (critical, widely used FOSS).[^sta-resilience]
- Entry routes: application portal, direct invitation for prior STA participants, or partner recommendation.[^sta-resilience]

# What it funds

Seven service lines:[^sta-resilience][^sta-resilience-relaunch]
- Technical debt management (modernisation, dependencies, docs, tests, CI) — three providers
- Memory-safety transition (C/C++ → memory-safe languages)
- Post-quantum cryptography readiness
- CRA compliance gap assessment and documentation
- Security audits (code review, architecture review, fuzzing) — Ada Logics, EY, mgm security partners
- Supply-chain security (build hardening, SBOMs, reproducible builds, SLSA)
- Bug & fix bounties via YesWeHack

Not cash: if you need direct funding, use the [Sovereign Tech Fund](/programs/oss-infrastructure/sovereign-tech-fund.md).[^sta-resilience-relaunch]

# Amounts & terms

- Services are free to the project; scope is agreed jointly between STA, the project and the implementation partner.[^sta-resilience]

# How to apply

- Create an account at the application platform and submit the form; STA reviews against criteria and either invites or declines.[^sta-resilience]

# Deadlines

| Date | Event |
|---|---|
| Rolling | Open since relaunch 2026-09-28[^sta-resilience-relaunch] |
| Fall 2026 | Bug bounty platform expected to resume new programs[^sta-resilience] |

# Track record

- Bug bounty since 2023: 790+ submissions, 80+ paid bounties (3 critical, 19 high).[^sta-resilience-relaunch]

# Fit

- Good fit if: your project needs an audit, CRA readiness, fuzzing, or a memory-safety/PQC migration plan, and you lack money to buy it.
- Poor fit if: you need salary money or are a commercial product.

# Related

- [/funders/sovereign-tech-agency](/funders/sovereign-tech-agency.md), [Alpha-Omega](/programs/oss-infrastructure/alpha-omega-grants.md), [GitHub Secure Open Source Fund](/programs/oss-infrastructure/github-secure-open-source-fund.md)

[^sta-resilience]: Sovereign Tech Agency, "Sovereign Tech Resilience", https://www.sovereign.tech/programs/bug-resilience
[^sta-resilience-relaunch]: Sovereign Tech Agency news, 2026-09-28, https://www.sovereign.tech/news/resilience-relaunch
