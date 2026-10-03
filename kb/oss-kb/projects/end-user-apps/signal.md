---
type: OSS Project
title: Signal
description: "AGPL end-to-end encrypted messenger run by the nonprofit Signal Foundation; usage and political salience rose (Signalgate, ~70M MAU) and it shipped secure backups, but it runs a structural deficit ($29.4M revenue vs $38.0M expenses in 2024)."
resource: https://github.com/signalapp
tags: [messaging, agpl-3.0, nonprofit, encryption, donor-funded]
domain: end-user-apps
license: AGPL-3.0
license_history: ["AGPL-3.0 (clients/server)"]
governance: single-vendor
steward: Signal Technology Foundation / Signal Messenger LLC
backing_orgs: [organizations/signal-foundation]
metrics:
  monthly_active_users_claimed: { value: "70M+", as_of: 2025-06-30 }
  revenue_2024_usd: { value: 29413537, as_of: 2024-12-31 }
  expenses_2024_usd: { value: 38019696, as_of: 2024-12-31 }
  github_stars_android: { value: 29412, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: struggling
momentum_by_window: { W3: up, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: propublica-990
    resource: https://projects.propublica.org/nonprofits/organizations/824506840
    title: "ProPublica Nonprofit Explorer: Signal Technology Foundation Form 990s (FY2024: revenue $29.41M, expenses $38.02M)"
  - id: lawfare-mau
    resource: https://www.lawfaremedia.org/article/at-signal-a-revolution-in-messaging
    title: "Lawfare: At Signal, a revolution in messaging (cites Whittaker's 70M+ MAU figure)"
  - id: wapo-signalgate
    resource: https://www.washingtonpost.com/national-security/2025/03/24/trump-leak-signal-jeffrey-goldberg-atlantic/
    title: "Washington Post: Trump officials shared war planning in unclassified chat with journalist (2025-03-24)"
  - id: neowin-pins
    resource: https://www.neowin.net/news/you-can-now-pin-messages-to-the-top-in-signal-messenger/
    title: "Neowin: You can now pin messages to the top in Signal Messenger (2026-01)"
  - id: mobilesyrup-c22
    resource: https://mobilesyrup.com/2026/05/14/signal-threatens-canada-exit-over-law-bill-c-22/
    title: "MobileSyrup: Signal threatens Canada exit over new law (2026-05-14)"
  - id: helpnet-830
    resource: https://helpnetsecurity.com/2026/09/30/signal-encrypted-backups-ios-8-30
    title: "Help Net Security: Signal brings encrypted local backups to iOS and desktop (8.30, 2026-09-30)"
  - id: backups
    resource: https://signal.org/blog/introducing-secure-backups/
    title: "Signal blog: Introducing Signal Secure Backups"
  - id: aws
    resource: https://www.theregister.com/2025/10/27/signal_ceo_meredith_whittaker_aws_dependency/
    title: "The Register: Signal president says they had no choice but to use AWS"
    author: org:the-register
  - id: v8
    resource: https://aboutsignal.com/news/signal-launches-version-8-0-with-signal-secure-backups/
    title: "Signal launches version 8.0 with Signal Secure Backups"
  - id: fbi
    resource: https://www.bleepingcomputer.com/news/security/fbi-russian-hackers-now-target-signal-backup-recovery-keys/
    title: "BleepingComputer: FBI — Russian hackers now target Signal backup recovery keys"
    author: org:bleepingcomputer
  - id: agentic
    resource: https://observer.com/2025/07/signal-meredith-whittaker-agentic-ai-risk/
    title: "Observer: Signal chief Meredith Whittaker sounds alarm on agentic AI's privacy threat"
---
# Summary
Signal's two years were defined by rising relevance and a persistent funding gap. President Meredith Whittaker put monthly active users at 70M+ in 2025 (company statement, not independently audited)[^lawfare-mau]. "Signalgate" (Mar 24, 2025), when senior US officials discussed Yemen strikes in a Signal group that accidentally included The Atlantic's editor, made it a household name[^wapo-signalgate]. Product-wise it shipped Secure Backups (announced Sept 2025; v8.0 Feb 2026; completed across iOS and desktop with local backups in 8.30, Sept 30, 2026) and pinned messages (Jan 29, 2026)[^backups][^v8][^helpnet-830][^neowin-pins]. The Signal Technology Foundation's FY2024 Form 990 shows $29.41M revenue (74% contributions) against $38.02M expenses, an $8.6M deficit, down from $35.75M revenue in 2023[^propublica-990]. That is consistent with earlier warnings that costs would reach ~$50M/yr by 2025. President Meredith Whittaker publicly warned that agentic AI threatens E2EE at the OS layer[^agentic] and acknowledged dependence on AWS after the Oct 2025 outage[^aws]. In May 2026 Signal threatened to leave Canada over the Bill C-22 lawful-access law[^mobilesyrup-c22]. Verdict: OSS stable; business struggling (deficit, donor-dependent).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025 | 70M+ MAU claimed by Whittaker[^lawfare-mau] | OSS | + |
| W24 | 2025-03-24 | Signalgate raises profile[^wapo-signalgate] | OSS | + |
| W24 | 2025-07 | Whittaker: agentic AI threatens privacy[^agentic] | OSS | mixed |
| W24 | 2025-09-08 | Secure Backups announced[^backups] | OSS | + |
| W12 | 2025-10-27 | AWS-dependence remarks after AWS outage[^aws] | Business | − |
| W9 | 2026-01-29 | Pinned messages[^neowin-pins] | OSS | + |
| W9 | 2026-02 | Signal 8.0 with Secure Backups (paid tier for media backup)[^v8] | Business | + |
| W6 | 2026-05-14 | Threatens to exit Canada over Bill C-22[^mobilesyrup-c22] | OSS | mixed |
| W6 | 2026-06-27 | FBI warns Russian hackers target backup recovery keys[^fbi] | OSS | − |
| W3 | 2026-09-30 | Signal 8.30: encrypted backups on all platforms incl. local backups on iOS/desktop[^helpnet-830] | OSS | + |

# OSS successes
- AGPL code and protocol remain the gold standard; continued feature growth without ads.
# OSS failures / risks
- Infrastructure reliance on big cloud[^aws]; new attack surface from backups[^fbi].
# Business successes
- First paid feature (media backups) diversifies away from pure donations[^v8].
# Business failures / risks
- ~$8.6M operating deficit in 2024 and falling revenue (−18% vs 2023)[^propublica-990]; regulatory threats (UK, Canada, EU chat control).

# By window
## W3
- Secure backups complete across all platforms (8.30, Sept 30, 2026)[^helpnet-830].
## W6
- Canada standoff; FBI warning[^mobilesyrup-c22][^fbi].
## W9
- Pinned messages; 8.0 backups[^neowin-pins][^v8].
## W12
- AWS dependence remarks[^aws].
## W24
- Signalgate; Secure Backups announcement[^wapo-signalgate][^backups].

# Lessons
- Nonprofit messengers can scale users but need paid add-ons to close infrastructure deficits.

# Related
- [Signal Foundation](/organizations/signal-foundation.md), [Matrix/Element](/projects/end-user-apps/matrix-element.md)

[^propublica-990]: https://projects.propublica.org/nonprofits/organizations/824506840
[^lawfare-mau]: https://www.lawfaremedia.org/article/at-signal-a-revolution-in-messaging
[^wapo-signalgate]: https://www.washingtonpost.com/national-security/2025/03/24/trump-leak-signal-jeffrey-goldberg-atlantic/
[^neowin-pins]: https://www.neowin.net/news/you-can-now-pin-messages-to-the-top-in-signal-messenger/
[^mobilesyrup-c22]: https://mobilesyrup.com/2026/05/14/signal-threatens-canada-exit-over-law-bill-c-22/
[^helpnet-830]: https://helpnetsecurity.com/2026/09/30/signal-encrypted-backups-ios-8-30
[^backups]: https://signal.org/blog/introducing-secure-backups/
[^aws]: https://www.theregister.com/2025/10/27/signal_ceo_meredith_whittaker_aws_dependency/
[^v8]: https://aboutsignal.com/news/signal-launches-version-8-0-with-signal-secure-backups/
[^fbi]: https://www.bleepingcomputer.com/news/security/fbi-russian-hackers-now-target-signal-backup-recovery-keys/
[^agentic]: https://observer.com/2025/07/signal-meredith-whittaker-agentic-ai-risk/
