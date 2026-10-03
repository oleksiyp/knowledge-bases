---
type: Organization
title: Synadia
description: "Commercial steward of NATS whose April 2025 attempt to pull NATS out of the CNCF and relicense it to BSL collapsed within a week; settled by assigning the NATS trademarks to the Linux Foundation."
resource: https://www.synadia.com
tags: [commercial-open-source, messaging, nats, trademark, governance]
org_kind: coss-startup
hq: USA
funding: { total_usd: "unverified", last_round: "$25M (reported)", last_round_date: 2024-02, valuation_usd: "unverified" }
business_verdict: stable
projects: [projects/licensing-forks/nats]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: pulse2-25m
    resource: https://pulse2.com/synadia-edge-native-messaging-company-raises-25-million/
    title: "Pulse 2.0: Synadia raises $25 million (2024-02-26)"
  - id: reg-nats
    resource: https://www.theregister.com/2025/04/28/cncf_synadia_nats_dispute/
    title: "The Register: CNCF/Synadia NATS dispute (2025-04-28)"
  - id: cncf-nats-agree
    resource: https://www.cncf.io/announcements/2025/05/01/cncf-and-synadia-align-on-securing-the-future-of-the-nats-io-project/
    title: "CNCF and Synadia align on NATS (2025-05-01)"
---

# Summary
Synadia, founded by NATS creator Derek Collison, raised $25M in Feb 2024.[^pulse2-25m] In April 2025 it asked the CNCF to hand NATS back and said it planned BSL licensing for future server releases. The CNCF refused and filed trademark petitions.[^reg-nats] The May 1, 2025 settlement moved Synadia's two NATS trademark registrations to the Linux Foundation and kept NATS Apache-2.0. Synadia can build proprietary products, but under its own branding.[^cncf-nats-agree]

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| (pre) | 2024-02 | $25M raise[^pulse2-25m] | + |
| W24 | 2025-04-24→05-01 | Clawback attempt and settlement[^reg-nats][^cncf-nats-agree] | − |

# Monetization model
Synadia Cloud and Synadia Platform (commercial NATS distributions and services).

# Successes
- Kept its role as main contributor and its commercial freedom.[^cncf-nats-agree]

# Failures / risks
- Reputational damage, and lost the option to relicense NATS.[^reg-nats]

# Related
- [NATS](/projects/licensing-forks/nats.md), [Synadia–CNCF NATS dispute](/events/2025-04-synadia-cncf-nats-dispute.md)

[^pulse2-25m]: Pulse 2.0 — https://pulse2.com/synadia-edge-native-messaging-company-raises-25-million/
[^reg-nats]: The Register — https://www.theregister.com/2025/04/28/cncf_synadia_nats_dispute/
[^cncf-nats-agree]: CNCF — https://www.cncf.io/announcements/2025/05/01/cncf-and-synadia-align-on-securing-the-future-of-the-nats-io-project/
