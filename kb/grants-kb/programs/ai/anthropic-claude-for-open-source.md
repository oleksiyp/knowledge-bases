---
type: Grant Program
title: Anthropic Claude for Open Source (and Project Glasswing maintainer access)
description: Six months of free Claude Max 20x (about $1,200 value) for qualifying open-source maintainers and contributors, capped at 10,000 recipients. Since April 2026 it is also the route for maintainers into Project Glasswing / Claude Mythos Preview access. Rolling.
resource: https://claude.com/contact-sales/claude-for-oss
tags: [ai, open-source, maintainers, security, credits]
category: ai
funder: funders/anthropic
funder_type: corporate
region: global
applicant_types: [individual, oss-project]
software_focus: [oss-infrastructure, developer-tools, security, ai]
funding_type: credits
oss_required: yes
equity_free: yes
amount_min_usd: 1200
amount_max_usd: 1200
amount_text: "6 months of Claude Max 20x (≈$200/month, ≈$1,200 value); no API credits; Glasswing usage credits separately at Anthropic's discretion"
application_model: rolling
program_status: rolling
deadline_note: "Open until Anthropic closes it or 10,000 recipients are approved"
effort_to_apply: low
example_funded: [Alpha-Omega, OpenSSF, Apache Software Foundation (Glasswing donations)]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: cfoss
    resource: https://claude.com/contact-sales/claude-for-oss
    title: "Claude for Open Source (Anthropic)"
  - id: cfoss-terms
    resource: https://www.anthropic.com/claude-for-oss-terms
    title: "Claude for Open Source Program Terms"
  - id: willison-cfoss
    resource: https://simonwillison.net/2026/Feb/27/claude-max-oss-six-months/
    title: "Free Claude Max for (large project) open source maintainers (Simon Willison, 27 Feb 2026)"
  - id: glasswing
    resource: https://www.anthropic.com/glasswing
    title: "Project Glasswing: Securing critical software for the AI era (Anthropic)"
  - id: aiwire-glasswing
    resource: https://www.hpcwire.com/aiwire/2026/04/09/anthropic-unveils-project-glasswing-as-claude-mythos-targets-software-vulnerabilities/
    title: "Anthropic Unveils Project Glasswing (AIwire, 9 Apr 2026)"
  - id: cyberdive-glasswing
    resource: https://www.cybersecuritydive.com/news/ai-anthropic-claude-mythos-project-glasswing-expand/821714/
    title: "Anthropic shares Mythos with 150 more organizations (Cybersecurity Dive)"
---

# Summary

Claude for Open Source gives qualifying maintainers and contributors **six months of Claude Max 20x** at no cost.[^cfoss] It launched on 27 February 2026 with a strict bar (5,000+ stars or 1M+ monthly npm downloads).[^willison-cfoss] The current terms use broader dependency, download and contribution metrics, plus a discretionary "Ecosystem Impact" track.[^cfoss-terms] The program is capped at **10,000 approved recipients** and stays open until Anthropic closes it.[^cfoss-terms] Since **Project Glasswing** launched on 7 April 2026, the same program is also how open-source maintainers apply for Claude Mythos Preview access. Anthropic committed up to $100M in Mythos usage credits across Glasswing and $4M in donations to OSS security organizations.[^glasswing][^aiwire-glasswing]

# Eligibility

The terms set two tracks.[^cfoss-terms] The program page lists five qualifying categories.[^cfoss]
- **Maintainer track**, meeting any one of:
  - 500+ dependent repos or 100+ dependent packages
  - 200k+ monthly downloads across registries
  - 100+ merged PRs in repos you don't own in the last 12 months
  - 20+ unique external contributors with merged PRs
  - OpenSSF criticality score of 0.4 or higher
  - The program page also accepts listed committers on major foundations such as CPython, Rust, Node.js, Apache, CNCF, Linux, Django and Rails.[^cfoss]
- **Ecosystem Impact track:** a written case for projects the ecosystem quietly depends on.[^cfoss-terms]
- Every applicant must be 18+, have a GitHub account at least 2 years old with recent activity, and work on OSI-licensed projects.[^cfoss-terms]

# What it funds

- A personal Claude Max 20x subscription, which includes Claude Code usage.[^cfoss]
- Glasswing: access to Claude Mythos Preview for scanning and securing critical OSS, given through the same application.[^glasswing]
- Not funded: API credits (in the base offer), team seats or cash.[^cfoss-terms]

# Amounts & terms

- Six consecutive months from activation. Afterwards, paid subscribers return to their previous terms and free users drop to the free plan.[^cfoss][^cfoss-terms]
- Glasswing donations: $2.5M to Alpha-Omega and OpenSSF (Linux Foundation) and $1.5M to the Apache Software Foundation.[^glasswing]

# How to apply

- Apply through the form on the program page. Borderline cases are encouraged to "apply anyway and tell us about it".[^cfoss]

# Deadlines

| Date | Event |
|---|---|
| 2026-02-27 | Launched[^willison-cfoss] |
| 2026-04-07 | Glasswing announced; maintainers routed via this program[^glasswing] |
| Rolling | Until cap / closure |

# Track record

- Glasswing expanded access to 40+ additional organizations, and later about 150 more, including critical-infrastructure operators.[^aiwire-glasswing][^cyberdive-glasswing]

# Fit

- **Good fit if:** you maintain a dependency-heavy or critical package, or are a prolific cross-project contributor.
- **Poor fit if:** you need cash or org-wide API budgets. Use [Claude for Startups](/programs/ai/anthropic-claude-for-startups.md) or apply to Alpha-Omega (which Anthropic funds) through its own process.

# Related

- [Anthropic (funder)](/funders/anthropic.md)
- [OpenAI Codex for Open Source](/programs/ai/openai-codex-for-open-source.md)
- [OpenAI Daybreak](/programs/ai/openai-daybreak-frontline-defenders.md)

[^cfoss]: Claude for Open Source — https://claude.com/contact-sales/claude-for-oss
[^cfoss-terms]: Program terms — https://www.anthropic.com/claude-for-oss-terms
[^willison-cfoss]: Simon Willison — https://simonwillison.net/2026/Feb/27/claude-max-oss-six-months/
[^glasswing]: Project Glasswing — https://www.anthropic.com/glasswing
[^aiwire-glasswing]: AIwire — https://www.hpcwire.com/aiwire/2026/04/09/anthropic-unveils-project-glasswing-as-claude-mythos-targets-software-vulnerabilities/
[^cyberdive-glasswing]: Cybersecurity Dive — https://www.cybersecuritydive.com/news/ai-anthropic-claude-mythos-project-glasswing-expand/821714/
