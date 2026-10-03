---
type: Grant Program
title: Alpha-Omega Grants (OpenSSF / Linux Foundation)
description: Security grants (typically $50,000–$100,000; up to ~$800k for foundations) for OSI-licensed projects, foundations and ecosystem services; quarterly open intake — Q4 2026 submissions 1–31 Oct 2026.
resource: https://alpha-omega.dev/grants/how-to-apply/
tags: [open-source, security, linux-foundation, openssf, package-registries]
category: oss-infrastructure
funder: funders/linux-foundation
funder_type: nonprofit
region: global
applicant_types: [oss-project, nonprofit, company]
software_focus: [oss-infrastructure, security]
funding_type: grant
oss_required: yes
equity_free: yes
amount_min_usd: 50000
amount_max_usd: 800000
amount_text: "Typical $50,000–$100,000; 2025 grants to foundations ranged $135k–$800k"
application_model: periodic-calls
program_status: open
next_deadline: 2026-10-31
deadline_note: "Quarterly: submit in Jan/Apr/Jul/Oct (1st–last day), co-design in following month, decision in third month"
effort_to_apply: medium
example_funded: [Eclipse Foundation, Ruby Central, Rust Foundation, Python Software Foundation, OpenJS Foundation, Apache Software Foundation, FreeBSD, eBPF Foundation]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: ao-apply
    resource: https://alpha-omega.dev/grants/how-to-apply/
    title: "Alpha-Omega: How to apply"
  - id: ao-recipients
    resource: https://alpha-omega.dev/grants/grantrecipients/
    title: "Alpha-Omega: Grant recipients"
  - id: openssf-12-5m
    resource: https://openssf.org/blog/2026/03/17/leading-tech-coalition-invests-12-5-million-through-openssf-and-alpha-omega-to-strengthen-open-source-security/
    title: "OpenSSF: Tech coalition invests $12.5M through OpenSSF and Alpha-Omega (2026-03-17)"
---

# Summary

Alpha-Omega is a Linux Foundation / OpenSSF project that funds security work in the most critical open source projects, ecosystems and package registries.[^ao-apply] In March 2026 Anthropic, AWS, GitHub, Google, Google DeepMind, Microsoft and OpenAI committed $12.5M to Alpha-Omega and OpenSSF, largely to help maintainers cope with the flood of AI-discovered vulnerability reports.[^openssf-12-5m] Since 2025 it runs an **open quarterly intake**: a lightweight form in month 1, co-design of a proposal/statement of work with Alpha-Omega staff in month 2, decision and funding in month 3.[^ao-apply] Typical grants are $50,000–$100,000; the Q4 2026 submission window is 1–31 October 2026.[^ao-apply]

# Eligibility

- Projects under an OSI-approved licence: standalone projects, foundations covering many projects, and core ecosystem services (registries, etc.).[^ao-apply]
- Only submissions via the official form are considered.[^ao-apply]

# What it funds

- Security engineering staff (e.g., security engineers in residence at foundations), audits, vulnerability remediation, supply-chain hardening (MFA, SBOMs, SLSA), triage capacity for incoming reports.[^ao-recipients][^openssf-12-5m]

# Amounts & terms

- Typical $50k–$100k; foundation-scale grants in 2025: e.g. Eclipse Foundation $800k, Ruby Central $700k, Rust Foundation $695,150, PSF $640k, OpenJS $580k, ASF $500k.[^ao-apply][^ao-recipients]
- Scope defined in a co-developed SOW.[^ao-apply]

# How to apply

| Quarter | Submission | Co-design | Decision & funding |
|---|---|---|---|
| Q1 | Jan 1–31 | Feb | Mar |
| Q2 | Apr 1–30 | May | Jun |
| Q3 | Jul 1–31 | Aug | Sep |
| Q4 | Oct 1–31 | Nov | Dec |

Source: Alpha-Omega.[^ao-apply] Tip: emphasise the "security impact the funding will inject into the ecosystem".[^ao-apply]

# Deadlines

| Date | Event |
|---|---|
| 2026-10-31 | Q4 2026 submission window closes — [call](/calls/2026-10-31-alpha-omega-q4-2026.md)[^ao-apply] |
| 2027-01-31 | Q1 2027 submission window closes (schedule-based) — [call](/calls/2027-01-31-alpha-omega-q1-2027.md)[^ao-apply] |

# Track record

- 70+ grants totalling over $20M historically; 2025: 12 recipients, $5.15M.[^openssf-12-5m][^ao-recipients]

# Fit

- Good fit if: you're a foundation, registry or critical project with a concrete security plan and capacity to hire/contract engineers.
- Poor fit if: you're a solo maintainer of a small library — try [GitHub SOSF](/programs/oss-infrastructure/github-secure-open-source-fund.md) or [STA Resilience](/programs/oss-infrastructure/sovereign-tech-resilience.md).

# Related

- [/funders/linux-foundation](/funders/linux-foundation.md), [OpenJS Security Stewardship](/programs/oss-infrastructure/openjs-security-stewardship.md), [LFX Mentorship](/programs/individuals/lfx-mentorship.md)

[^ao-apply]: Alpha-Omega, "How to apply" (updated 2026-09-08), https://alpha-omega.dev/grants/how-to-apply/
[^ao-recipients]: Alpha-Omega, grant recipients, https://alpha-omega.dev/grants/grantrecipients/
[^openssf-12-5m]: OpenSSF blog 2026-03-17, https://openssf.org/blog/2026/03/17/leading-tech-coalition-invests-12-5-million-through-openssf-and-alpha-omega-to-strengthen-open-source-security/
