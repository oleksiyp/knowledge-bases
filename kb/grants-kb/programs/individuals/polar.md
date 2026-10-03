---
type: Grant Program
title: Polar (polar.sh)
description: Open-source merchant-of-record billing platform for developers selling subscriptions, licenses and digital products (with pay-what-you-want pricing); its original issue-funding and donations features were sunset in v2 — now a monetization tool rather than a donation platform. Fees from 5% + 50¢ (2026 Starter).
resource: https://polar.sh/
tags: [platform, monetization, merchant-of-record, open-source]
category: individuals
funder_type: corporate
region: global
applicant_types: [individual, startup, oss-project]
software_focus: [developer-tools, startup-rnd]
funding_type: grant
oss_required: no
equity_free: yes
amount_text: "Platform (sales/billing, not donations) — 2026 Starter 5% + $0.50 per transaction; paid tiers lower"
application_model: rolling
program_status: open
deadline_note: "Sign up anytime."
effort_to_apply: low
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: polar-docs
    resource: https://polar.sh/docs/introduction
    title: "Polar docs — Introduction"
  - id: polar-v2
    resource: https://github.com/orgs/polarsource/discussions/3998
    title: "Polar v2.0: Focus & Changes ahead (GitHub discussion)"
  - id: polar-pricing-2026
    resource: https://dodopayments.com/blogs/polar-sh-review
    title: "Polar.sh Review 2026 (Dodo Payments, competitor review)"
  - id: polar-gh-funding
    resource: https://news.ycombinator.com/item?id=39382281
    title: "GitHub now officially supports polar.sh as a funding platform (HN)"
---

# Summary

Polar began in 2023 as a way to fund open-source issues and maintainers, and became an official option in GitHub's FUNDING.yml in 2024.[^polar-gh-funding] With Polar v2 it sunset issue funding and the separate Donations product, replacing them with "pay what you want" pricing. Polar is now an open-source merchant of record for selling software subscriptions, licenses and digital products.[^polar-v2][^polar-docs] A competitor's 2026 review reports tiered pricing starting at 5% + $0.50 per transaction on the free Starter plan.[^polar-pricing-2026] For maintainers it is now a commercialization tool, not a donation channel.

# Eligibility

- Any developer or company selling digital products.[^polar-docs]

# What it funds

- Nothing directly. It handles payments, tax and delivery for your own paid offerings.[^polar-docs]

# Amounts & terms

- Fees per the 2026 review: Starter 5% + $0.50, Pro $20/month at 3.8% + $0.40, plus a 1.5% international surcharge.[^polar-pricing-2026]

# How to apply

- Sign up.

# Deadlines

None.

# Track record

- No figures were collected for this entry.

# Fit

- **Good fit if** you want to sell sponsorware, licenses or support for an OSS project.
- **Poor fit if** you want issue bounties or plain donations, which were sunset. Use [GitHub Sponsors](/programs/individuals/github-sponsors.md).

# Related

- Other platforms: [GitHub Sponsors](/programs/individuals/github-sponsors.md), [Open Collective](/programs/individuals/open-collective.md)

[^polar-docs]: Polar docs.
[^polar-v2]: polarsource GitHub discussion #3998 (via search snippet; the page was not reachable when fetched).
[^polar-pricing-2026]: Dodo Payments review, 2026.
[^polar-gh-funding]: Hacker News, 2024.
