---
type: Organization
title: Bitwarden Inc.
description: "Company behind the open-source Bitwarden password manager (10M+ users, 50k+ businesses); 2026 brought leadership turnover, a Premium price doubling, an npm CLI supply-chain compromise and messaging changes that eroded community trust."
resource: https://bitwarden.com
tags: [commercial-open-source, password-manager, security]
org_kind: coss-startup
hq: Santa Barbara, California, USA
funding: { total_usd: "$100M disclosed (plus an undisclosed 2019 Series A)", last_round: "$100M growth investment (PSG lead; Battery Ventures)", last_round_date: 2022-09-06, valuation_usd: "undisclosed" }
business_verdict: stable
projects: [projects/end-user-apps/bitwarden]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiki
    resource: https://en.wikipedia.org/wiki/Bitwarden
    title: "Wikipedia: Bitwarden"
  - id: fastco
    resource: https://www.fastcompany.com/91542655/bitwarden-scrubs-always-free-and-inclusion-values-from-its-website-as-longtime-execs-step-down
    title: "Fast Company: Bitwarden scrubs 'Always free' and 'Inclusion' values as longtime execs step down"
    author: org:fast-company
  - id: cli
    resource: https://socket.dev/blog/bitwarden-cli-compromised
    title: "Socket: Bitwarden CLI compromised"
  - id: sdk
    resource: https://github.com/bitwarden/sdk-internal/commit/db648d7ea85878e9cce03283694d01d878481f6b
    title: "Bitwarden sdk-internal relicensed to GPLv3"
  - id: tc-bitwarden
    resource: https://techcrunch.com/2022/09/06/open-source-password-manager-bitwarden-raises-100m/
    title: "TechCrunch: Open source password manager Bitwarden raises $100M (2022-09-06)"
    author: org:techcrunch
---
# Summary
Bitwarden serves 10M+ users and 50k+ businesses[^cli]. It defused an Oct 2024 licensing scare by relicensing its internal SDK to GPLv3[^sdk], but 2026 was rough: Premium went from $10 to $20/yr (Feb); long-time executives Michael Crandell and Stephen Morrison stepped down (Feb and Apr) and were replaced; its npm CLI 2026.4.0 was trojaned via a compromised GitHub Action (23 Apr); and in May it removed "Always free" (later restored) and "inclusion/transparency" values from its website[^wiki][^fastco][^cli]. Verdict: stable business, deteriorating community trust. Its only disclosed funding is a $100M growth round led by PSG with Battery Ventures (Sept 2022), following an undisclosed 2019 Series A[^tc-bitwarden].

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2024-10-24 | SDK relicensed GPLv3 after backlash[^sdk] |
| W9 | 2026-02 | Premium price doubled; first exec departure[^wiki] |
| W6 | 2026-04 | Second exec departure[^wiki][^fastco] |
| W6 | 2026-04-23 | npm CLI supply-chain compromise[^cli] |
| W6 | 2026-05-15 | Website values/"Always free" changes reported[^fastco] |

# Monetization model
Freemium SaaS (Premium, Families), Teams/Enterprise, Secrets Manager; self-host licensing.

# Successes
- Large paid base; fast SDK relicensing showed responsiveness.
# Failures / risks
- Trust erosion; supply-chain security of distribution channels.

# Related
- [Bitwarden project](/projects/end-user-apps/bitwarden.md)

[^wiki]: https://en.wikipedia.org/wiki/Bitwarden
[^fastco]: https://www.fastcompany.com/91542655/bitwarden-scrubs-always-free-and-inclusion-values-from-its-website-as-longtime-execs-step-down
[^cli]: https://socket.dev/blog/bitwarden-cli-compromised
[^sdk]: https://github.com/bitwarden/sdk-internal/commit/db648d7ea85878e9cce03283694d01d878481f6b
[^tc-bitwarden]: TechCrunch, 2022-09-06.
