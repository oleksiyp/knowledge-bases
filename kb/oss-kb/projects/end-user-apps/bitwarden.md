---
type: OSS Project
title: Bitwarden (and Vaultwarden)
description: "Open-source password manager whose 'open' credentials eroded: 2024 SDK license scare, Jan 2026 price doubling, leadership turnover, a supply-chain compromise of its CLI and removal of 'Always free' messaging; the community Rust server Vaultwarden keeps thriving."
resource: https://github.com/bitwarden/clients
tags: [password-manager, gpl-3.0, open-core, supply-chain-security]
domain: end-user-apps
license: GPL-3.0 (clients) / AGPL-3.0 (server) / mixed SDK
license_history: ["GPL-3.0 clients", "2024-10: proprietary SDK dependency added, then sdk-internal relicensed to GPL-3.0 (2024-10-24)"]
governance: company-led-open-core
steward: Bitwarden Inc.
backing_orgs: [organizations/bitwarden]
metrics:
  github_stars_clients: { value: 13895, as_of: 2026-10-03 }
  github_stars_vaultwarden: { value: 68444, as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: stable
momentum_by_window: { W3: flat, W6: down, W9: down, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: issue
    resource: https://github.com/bitwarden/clients/issues/11611
    title: "GitHub issue: Bitwarden is no longer free software (#11611)"
  - id: sdk-gpl
    resource: https://github.com/bitwarden/sdk-internal/commit/db648d7ea85878e9cce03283694d01d878481f6b
    title: "Bitwarden sdk-internal relicensed from proprietary to GPLv3 (commit)"
  - id: fastco-price
    resource: https://www.fastcompany.com/91483458/bitwarden-price-increase
    title: "Fast Company: Bitwarden announced a price hike in the worst way possible (Jan 2026)"
    author: org:fast-company
  - id: alt-price
    resource: https://alternativeto.net/news/2026/1/bitwarden-enhances-premium-and-families-plans-with-more-security-features-and-raises-prices/
    title: "AlternativeTo: Bitwarden enhances Premium and Families plans and raises prices (Jan 2026)"
  - id: linuxiac-changes
    resource: https://linuxiac.com/bitwarden-faces-questions-after-quiet-leadership-and-messaging-changes/
    title: "Linuxiac: Bitwarden faces questions after quiet leadership and messaging changes (2026-05-19)"
  - id: itsfoss-changes
    resource: https://itsfoss.com/news/bitwarden-quiet-changes/
    title: "It's FOSS: Things are quietly changing at Bitwarden, and people are worried (2026-05)"
  - id: psg-100m
    resource: https://psgequity.com/news/bitwarden-announces-100-million-growth-investment-led-by-psg
    title: "PSG: Bitwarden announces $100M growth investment led by PSG (2022-09-06)"
  - id: bw-redesign
    resource: https://finance.yahoo.com/technology/articles/bitwarden-announces-redesigned-password-manager-163800624.html
    title: "Bitwarden announces redesigned Password Manager interface, now in beta (Sept 2026)"
  - id: bw-sept-update
    resource: https://bitwarden.com/blog/september-2026-product-update-for-bitwarden-business-plans/
    title: "Bitwarden blog: September 2026 product update for Business plans (Privileged Controls preview, FedRAMP commitment)"
  - id: cli
    resource: https://socket.dev/blog/bitwarden-cli-compromised
    title: "Socket: Bitwarden CLI compromised in ongoing Checkmarx supply chain campaign"
  - id: fastco
    resource: https://www.fastcompany.com/91542655/bitwarden-scrubs-always-free-and-inclusion-values-from-its-website-as-longtime-execs-step-down
    title: "Fast Company: Bitwarden scrubs 'Always free' and 'Inclusion' values as longtime execs step down"
    author: org:fast-company
  - id: renovation
    resource: https://blog.ppb1701.com/the-quiet-renovation-at-bitwarden
    title: "The quiet renovation at Bitwarden"
  - id: osnews
    resource: https://www.osnews.com/story/145029/get-your-passwords-out-of-bitwarden-while-you-still-can/
    title: "OSNews: Get your passwords out of Bitwarden while you still can"
  - id: vw-sso
    resource: https://github.com/dani-garcia/vaultwarden/pull/3899
    title: "Vaultwarden: SSO using OpenID Connect (PR #3899)"
  - id: vw-gh
    resource: https://github.com/dani-garcia/vaultwarden
    title: Vaultwarden repository
  - id: 2fa
    resource: https://bitwarden.com/help/new-device-verification/
    title: "Bitwarden: new device verification"
---
# Summary
Bitwarden spent two years losing its "the open-source password manager" halo. In October 2024 a restricted-use SDK dependency made the desktop client non-buildable as free software; after outcry (issue #11611) the company called it a "bug" and relicensed sdk-internal to GPLv3 on 24 Oct 2024[^issue][^sdk-gpl]. 2026 brought a cluster of negatives. In January Premium went from $10 to $19.80/year, its first price rise in ten years, announced inside a feature blog post.[^fastco-price][^alt-price] CEO Michael Crandell moved to an advisory role (Feb) and was replaced by Michael Sullivan, ex-CEO of Acquia; CFO Stephen Morrison left in April.[^fastco][^linuxiac-changes] On 23 Apr the npm @bitwarden/cli 2026.4.0 was trojaned via a compromised GitHub Action in the Checkmarx supply-chain campaign.[^cli] In May the company removed "Always free" (later restored) and changed its GRIT values from Inclusion/Transparency to Innovation/Trust.[^fastco][^linuxiac-changes] (Corrected in pass 2: the price rise was January 2026, not February.) Commentators urged users to export vaults[^osnews][^renovation]. Meanwhile Vaultwarden, the community AGPL Rust server, reached ~68k stars and added OpenID Connect SSO (Aug 2025)[^vw-gh][^vw-sso]. Verdict: OSS contested; business stable (private, ~10M users and 50k+ businesses per Socket)[^cli].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-20 | "Bitwarden is no longer free software" issue over SDK license[^issue] | OSS | − |
| W24 | 2024-10-24 | sdk-internal relicensed to GPLv3[^sdk-gpl] | OSS | + |
| W24 | 2025-01 | New-device 2FA verification default[^2fa] | OSS | + |
| W24 | 2025-08-15 | Vaultwarden merges OIDC SSO[^vw-sso] | OSS | + |
| W9 | 2026-01 | Premium price $10 → $19.80/yr, first increase in 10 years[^fastco-price][^alt-price] | Business | − |
| W9 | 2026-02 | CEO Michael Crandell → advisor; Michael Sullivan (ex-Acquia) CEO[^linuxiac-changes][^fastco] | Business | − |
| W6 | 2026-04 | CFO Stephen Morrison leaves; replaced by Michael Shenkman[^fastco][^itsfoss-changes] | Business | − |
| W6 | 2026-04-23 | @bitwarden/cli 2026.4.0 compromised via CI GitHub Action[^cli] | OSS | − |
| W6 | 2026-05-15 | "Always free"/"Inclusion" scrubbed from site (Always free later restored)[^fastco][^linuxiac-changes] | Business | − |
| W3 | 2026-09 | Redesigned client UI beta; Privileged Controls (PAM) preview; FedRAMP commitment[^bw-redesign][^bw-sept-update] | Business | + |

# OSS successes
- Quick SDK relicensing showed community pressure works[^sdk-gpl]; Vaultwarden ecosystem healthy[^vw-gh].
# OSS failures / risks
- Supply-chain compromise of an official package[^cli]; repeated ambiguity about what is open.
# Business successes
- Large user and enterprise base (10M+ users, 50k+ businesses per Socket)[^cli]. Last disclosed raise: $100M led by PSG (Sept 2022); no 2025–2026 funding found.[^psg-100m]
- Enterprise push in 2026: PAM-style Privileged Controls and FedRAMP plans.[^bw-sept-update]
# Business failures / risks
- Price hikes and messaging changes after leadership turnover read as a pivot toward monetization[^fastco][^renovation].

# By window
## W3
- Redesigned UI beta, Privileged Controls preview, FedRAMP commitment (Sept 2026).[^bw-redesign][^bw-sept-update]
## W6
- CLI compromise; exec change; values scrub[^cli][^fastco].
## W9
- Price doubling (Jan 2026); CEO change (Feb 2026).[^fastco-price][^linuxiac-changes]
## W12
- No notable events found.
## W24
- SDK license controversy and fix[^issue][^sdk-gpl].

# Lessons
- In security software, licensing ambiguity and supply-chain incidents compound trust loss.
- A healthy independent reimplementation (Vaultwarden) is the community's insurance policy.

# Related
- [Bitwarden Inc.](/organizations/bitwarden.md), [Proton](/organizations/proton.md)

[^issue]: https://github.com/bitwarden/clients/issues/11611
[^sdk-gpl]: https://github.com/bitwarden/sdk-internal/commit/db648d7ea85878e9cce03283694d01d878481f6b
[^fastco-price]: https://www.fastcompany.com/91483458/bitwarden-price-increase
[^alt-price]: https://alternativeto.net/news/2026/1/bitwarden-enhances-premium-and-families-plans-with-more-security-features-and-raises-prices/
[^linuxiac-changes]: https://linuxiac.com/bitwarden-faces-questions-after-quiet-leadership-and-messaging-changes/
[^itsfoss-changes]: https://itsfoss.com/news/bitwarden-quiet-changes/
[^psg-100m]: https://psgequity.com/news/bitwarden-announces-100-million-growth-investment-led-by-psg
[^bw-redesign]: https://finance.yahoo.com/technology/articles/bitwarden-announces-redesigned-password-manager-163800624.html
[^bw-sept-update]: https://bitwarden.com/blog/september-2026-product-update-for-bitwarden-business-plans/
[^cli]: https://socket.dev/blog/bitwarden-cli-compromised
[^fastco]: https://www.fastcompany.com/91542655/bitwarden-scrubs-always-free-and-inclusion-values-from-its-website-as-longtime-execs-step-down
[^renovation]: https://blog.ppb1701.com/the-quiet-renovation-at-bitwarden
[^osnews]: https://www.osnews.com/story/145029/get-your-passwords-out-of-bitwarden-while-you-still-can/
[^vw-sso]: https://github.com/dani-garcia/vaultwarden/pull/3899
[^vw-gh]: https://github.com/dani-garcia/vaultwarden
[^2fa]: https://bitwarden.com/help/new-device-verification/
