---
type: Event
title: Synadia tries to reclaim NATS from the CNCF, then settles
description: "In late April 2025 Synadia demanded NATS back from the CNCF and planned BSL for future releases; the CNCF filed trademark petitions and on May 1, 2025 Synadia agreed to assign NATS trademarks to the Linux Foundation, keeping NATS Apache-2.0."
event_kind: governance
date: 2025-04-24
window: W24
impact: positive
projects: [projects/licensing-forks/nats]
organizations: [organizations/synadia, organizations/cncf]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: reg-nats
    resource: https://www.theregister.com/2025/04/28/cncf_synadia_nats_dispute/
    title: "The Register: CNCF tells Synadia it's free to fork off (2025-04-28)"
  - id: cncf-nats-agree
    resource: https://www.cncf.io/announcements/2025/05/01/cncf-and-synadia-align-on-securing-the-future-of-the-nats-io-project/
    title: "CNCF and Synadia align on NATS (2025-05-01)"
---

# What happened
Synadia asked the CNCF to return NATS, including the domain and repositories, and said it would move future server releases to BSL. The CNCF refused and on Apr 24, 2025 filed USPTO petitions over the NATS marks and domain.[^reg-nats] On May 1, 2025 the parties announced a settlement. Synadia assigns its two NATS trademark registrations to the Linux Foundation, the CNCF keeps the domain and GitHub org, NATS stays Apache-2.0, and Synadia's proprietary offerings must use a different name.[^cncf-nats-agree]

# Why it matters
It was the first public test of whether a vendor can take back a project it donated to a foundation. Foundation trademark ownership decided the outcome.

# Outcome so far
NATS continued development without a fork (2.15.0 in Sept 2026).

# Related
- [NATS](/projects/licensing-forks/nats.md), [Synadia](/organizations/synadia.md), [CNCF](/organizations/cncf.md)

[^reg-nats]: The Register — https://www.theregister.com/2025/04/28/cncf_synadia_nats_dispute/
[^cncf-nats-agree]: CNCF — https://www.cncf.io/announcements/2025/05/01/cncf-and-synadia-align-on-securing-the-future-of-the-nats-io-project/
