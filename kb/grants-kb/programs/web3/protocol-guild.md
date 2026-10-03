---
type: Grant Program
title: "Protocol Guild"
description: "Collective that pools donations (incl. the 1% token pledge) and streams them with a 4-year vest to ~190 Ethereum L1 core contributors; membership by peer curation after 6 months of near-full-time OSS protocol work; ongoing."
resource: https://www.protocolguild.org/
tags: [ethereum, core-developers, retroactive, vesting, public-goods]
category: web3
funder: funders/protocol-guild
funder_type: community
region: global
applicant_types: [individual]
software_focus: [web3, oss-infrastructure]
funding_type: retroactive
oss_required: yes
equity_free: yes
amount_text: "Share of a pooled vesting contract, weighted by sqrt of contribution time; $100M+ cumulative donations"
application_model: nomination
program_status: open
deadline_note: "Membership reviewed in quarterly audits; nominations via GitHub PR"
effort_to_apply: low
example_funded: [Ethereum execution clients, Ethereum consensus clients, EIP research]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: pg-docs
    resource: https://protocol-guild.readthedocs.io/en/latest/01-membership.html
    title: "Protocol Guild docs: Membership"
  - id: pg-audit
    resource: https://www.protocolguild.org/blog/20260826-q3-quarterly-audit
    title: "Protocol Guild: Q3 2026 Membership Audit"
  - id: pg-gitcoin
    resource: https://gitcoin.co/apps/protocol-guild
    title: "Gitcoin: Protocol Guild"
---

# Summary
Protocol Guild is a self-curated collective of Ethereum L1 R&D contributors (client developers, researchers, upgrade/maintenance support) that receives donations and distributes them on-chain to members via a 4-year linear vest.[^pg-docs] Gitcoin lists it as distributing $100M+ to ~190 core protocol contributors, funded in part by the "1% Pledge" of project token supplies.[^pg-gitcoin] The Q3 2026 audit (Aug 2026) reported 190 members, down from 196.[^pg-audit] It is not an application-based grant: you join by being nominated after sustained contribution.

# Eligibility
- Contribute to fully open-source (OSI-licensed) Ethereum L1 projects, with regular presence in R&D venues (ethresear.ch, Magicians, protocol calls).[^pg-docs]
- At least 6 months of continuous contribution before inclusion; ~full-time (40+ h/week = full weight; 20–40 h/week = 0.5x).[^pg-docs]
- Breaks over 3 months trigger review/"Inactive" status.[^pg-docs]

# What it funds
- People, not projects: execution & consensus client development, research/prototyping, upgrade and maintenance support.[^pg-docs]

# Amounts & terms
- Split share = sqrt(time-weighted months × part-time factor), normalized across members; donations vest linearly over 4 years.[^pg-docs]
- Paid on-chain in donated assets (ETH and project tokens); members do not control vesting timelines.[^pg-docs]

# How to apply
- Existing members nominate new members via GitHub PRs with ≥1 week discussion and rough consensus.[^pg-docs]
- Membership is reviewed in quarterly audits.[^pg-audit]

# Deadlines
| Item | Timing |
|---|---|
| Membership audits | Quarterly (latest: Q3 2026, Aug 26 2026)[^pg-audit] |

# Track record
- $100M+ distributed to ~190 contributors.[^pg-gitcoin]

# Fit
- **Good fit if:** you already work ~full time on Ethereum clients/specs and have 6+ months of public contributions.
- **Poor fit if:** you build applications, tooling outside L1, or want project funding.

# Related
- [/funders/protocol-guild.md](/funders/protocol-guild.md), [/programs/web3/ethereum-foundation-esp.md](/programs/web3/ethereum-foundation-esp.md)

[^pg-docs]: https://protocol-guild.readthedocs.io/en/latest/01-membership.html
[^pg-audit]: https://www.protocolguild.org/blog/20260826-q3-quarterly-audit
[^pg-gitcoin]: https://gitcoin.co/apps/protocol-guild
