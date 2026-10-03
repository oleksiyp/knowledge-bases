---
type: OSS Project
title: Thunderbird
description: "MZLA-run open source email client; product revival (Android app, native Exchange, government wins like Schleswig-Holstein) with a donation-only model now supplemented by the optional Thunderbird Pro services."
resource: https://www.thunderbird.net
tags: [email, mpl-2.0, donor-funded, mozilla, digital-sovereignty]
domain: end-user-apps
license: MPL-2.0
license_history: ["MPL-2.0 (2012-)"]
governance: single-vendor
steward: MZLA Technologies Corporation (Mozilla Foundation subsidiary)
backing_orgs: [organizations/mozilla]
metrics: {}
oss_verdict: growing
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: android
    resource: https://blog.thunderbird.net/2024/10/thunderbird-for-android-8-0-takes-flight/
    title: "Thunderbird blog: Thunderbird for Android 8.0 takes flight"
  - id: eclipse
    resource: https://blog.thunderbird.net/2025/07/welcome-to-thunderbird-140-eclipse/
    title: "Thunderbird blog: Welcome to Thunderbird 140 Eclipse"
  - id: pro
    resource: https://blog.thunderbird.net/2025/08/tbpro-august-2025-update/
    title: "Thunderbird blog: Thunderbird Pro August 2025 update"
  - id: exchange
    resource: https://blog.thunderbird.net/2025/11/thunderbird-adds-native-microsoft-exchange-email-support/
    title: "Thunderbird blog: native Microsoft Exchange email support"
  - id: sh
    resource: https://www.zdnet.com/article/german-state-replaces-microsoft-exchange-and-outlook-with-open-source-email/
    title: "ZDNET: German state replaces Microsoft Exchange and Outlook with open-source email"
    author: org:zdnet
  - id: donate
    resource: https://updates.thunderbird.net/en-US/thunderbird/140.0/apr26-1e/donate/
    title: "Thunderbird: Help keep Thunderbird alive (April 2026 appeal)"
---
# Summary
Thunderbird is a rare "revived" OSS desktop app: after years of drift it shipped an Android client (Oct 2024)[^android], a new annual ESR "Eclipse" (140, July 2025)[^eclipse], and native Microsoft Exchange support (Nov 2025)[^exchange], and became the client of choice in Schleswig-Holstein's 40,000-mailbox migration off Exchange/Outlook (completed Oct 2025)[^sh]. Its business is donation-funded (no ads, no data sales, no corporate funding per its own appeal)[^donate], and it is adding optional paid services — Thundermail, Appointment, Send — under "Thunderbird Pro"[^pro]. Verdict: OSS growing, business stable but thin.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-30 | Thunderbird for Android 8.0 (K-9 Mail lineage) released[^android] | OSS | + |
| W24 | 2025-07-07 | Thunderbird 140 "Eclipse" ESR[^eclipse] | OSS | + |
| W24 | 2025-08-22 | Thunderbird Pro (Thundermail, Appointment, Send) update; waitlist, no pricing yet[^pro] | Business | + |
| W24 | 2025-10-02 | Schleswig-Holstein completes move of 40k+ mailboxes to Open-Xchange + Thunderbird[^sh] | OSS | + |
| W12 | 2025-11-19 | Native Exchange (EWS) email support[^exchange] | OSS | + |
| W6 | 2026-04-09 | In-app "Help keep Thunderbird alive" donation appeal (HN front page)[^donate] | Business | mixed |

# OSS successes
- Cross-platform presence (desktop + Android) and enterprise interoperability (Exchange)[^android][^exchange].
- Public-sector adoption as part of European sovereignty migrations[^sh].

# OSS failures / risks
- Small team relative to scope (desktop, Android, iOS in development, services).

# Business successes
- Donation model sustains a full-time team without ads or data sales[^donate].

# Business failures / risks
- The appeal itself stresses that only a small fraction of users contribute; services revenue is unproven and pricing was not public as of Aug 2025[^pro][^donate].

# By window
## W3
- No notable events found.
## W6
- April 2026 donation appeal[^donate].
## W9
- No notable events found.
## W12
- Native Exchange support[^exchange].
## W24
- Android launch, 140 Eclipse, Pro services announced, Schleswig-Holstein migration[^android][^eclipse][^pro][^sh].

# Lessons
- Interop with the incumbent (Exchange) is what unlocks institutional migrations.
- Donation-funded apps increasingly add optional hosted services to cover infrastructure costs.

# Related
- [Mozilla](/organizations/mozilla.md), [Firefox](/projects/end-user-apps/firefox.md)
- [Windows 10 EOL / sovereignty](/events/2025-10-windows-10-end-of-support.md)

[^android]: https://blog.thunderbird.net/2024/10/thunderbird-for-android-8-0-takes-flight/
[^eclipse]: https://blog.thunderbird.net/2025/07/welcome-to-thunderbird-140-eclipse/
[^pro]: https://blog.thunderbird.net/2025/08/tbpro-august-2025-update/
[^exchange]: https://blog.thunderbird.net/2025/11/thunderbird-adds-native-microsoft-exchange-email-support/
[^sh]: https://www.zdnet.com/article/german-state-replaces-microsoft-exchange-and-outlook-with-open-source-email/
[^donate]: https://updates.thunderbird.net/en-US/thunderbird/140.0/apr26-1e/donate/
