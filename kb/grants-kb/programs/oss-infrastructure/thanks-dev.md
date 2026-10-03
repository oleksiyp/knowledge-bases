---
type: Grant Program
title: thanks.dev (dependency-based donations)
description: Platform where companies set a monthly budget that is auto-distributed across their dependency tree (up to 3 levels); maintainers claim payouts by registering — Sentry routed $375k through it for 2025.
resource: https://thanks.dev/
tags: [open-source, platform, dependencies, donations, retroactive]
category: oss-infrastructure
funder: funders/sentry
funder_type: corporate
region: global
applicant_types: [individual, oss-project]
software_focus: [oss-infrastructure, developer-tools]
funding_type: retroactive
oss_required: yes
equity_free: yes
amount_text: "Varies with donors' budgets and dependency position; 0% platform fee (voluntary tip + Stripe fees)"
application_model: rolling
program_status: rolling
deadline_note: "Register your GitHub/GitLab account to claim accrued donations"
effort_to_apply: low
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: thanksdev-register
    resource: https://www.theregister.com/2023/04/07/thanksdev_open_source_funding/
    title: "The Register: thanks.dev open source funding (2023-04-07)"
  - id: canonical-thanksdev
    resource: https://ubuntu.com/blog/canonical-thanks-dev-giving-back-to-open-source-developers
    title: "Canonical + thanks.dev = giving back to open source developers"
  - id: sentry-750k-2025
    resource: https://blog.sentry.io/another-year-another-750-000-to-open-source-maintainers
    title: "Sentry: $750,000 to open source maintainers (2026-01-06)"
---

# Summary

thanks.dev is a donation platform: a company (or individual) sets a monthly budget, thanks.dev scans its repositories' manifests, builds the dependency tree up to three levels deep and distributes the money across the maintainers in that tree; donors can boost or exclude dependencies.[^thanksdev-register] Maintainers receive funds by registering their account and claiming their packages.[^thanksdev-register] It is the main channel for Sentry's annual giving ($375k in 2025) and is used by Canonical.[^sentry-750k-2025][^canonical-thanksdev]

# Eligibility

- Maintainers of packages in supported ecosystems (npm, PyPI, crates.io, etc.) that appear in donors' dependency trees.[^thanksdev-register]

# What it funds

- Unrestricted, retroactive support proportional to dependency usage.[^thanksdev-register]

# Amounts & terms

- 0% platform fee; voluntary tip and payment-processor fees deducted (per platform descriptions; verify current terms).[^thanksdev-register]

# How to apply

- Sign in with GitHub/GitLab, verify packages, set payout details.[^thanksdev-register]

# Deadlines

| Date | Event |
|---|---|
| Rolling | Monthly distributions |

# Track record

- Sentry distributed $375,000 via thanks.dev for 2025.[^sentry-750k-2025]

# Fit

- Good fit if: you maintain transitive dependencies that nobody "sees" but everybody installs.
- Poor fit if: you need predictable income.

# Related

- [Sentry funding](/programs/oss-infrastructure/sentry-open-source-funding.md), [Ecosystem Funds](/programs/oss-infrastructure/ecosystem-funds.md), [GitHub Sponsors](/programs/individuals/github-sponsors.md)

[^thanksdev-register]: The Register, 2023-04-07, https://www.theregister.com/2023/04/07/thanksdev_open_source_funding/
[^canonical-thanksdev]: Ubuntu blog, https://ubuntu.com/blog/canonical-thanks-dev-giving-back-to-open-source-developers
[^sentry-750k-2025]: Sentry blog, https://blog.sentry.io/another-year-another-750-000-to-open-source-maintainers
