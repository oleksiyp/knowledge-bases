---
type: OSS Project
title: F-Droid
description: "The FOSS Android app repository; faces an existential threat from Google's Android Developer Verification (enforced from 30 Sept 2026 in Brazil, Indonesia, Singapore, Thailand), while modernizing its build servers and shipping the redesigned F-Droid 2.0 client."
resource: https://f-droid.org
tags: [android, app-store, gpl-3.0, community, platform-gatekeeping, grant-funded]
domain: end-user-apps
license: GPL-3.0
license_history: ["GPL-3.0"]
governance: community
steward: F-Droid Limited / community
backing_orgs: []
metrics: {}
oss_verdict: crisis
business_verdict: n/a
momentum_by_window: { W3: down, W6: down, W9: down, W12: flat, W24: down }
status: active
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-adv
    resource: https://techcrunch.com/2025/08/25/google-will-require-developer-verification-for-android-apps-outside-the-play-store/
    title: "TechCrunch: Google will require developer verification for Android apps outside the Play Store"
    author: org:techcrunch
  - id: fd-decree
    resource: https://f-droid.org/2025/09/29/google-developer-registration-decree.html
    title: "F-Droid: F-Droid and Google's developer registration decree"
  - id: early
    resource: https://android-developers.googleblog.com/2025/11/android-developer-verification-early.html
    title: "Android Developers Blog: Android developer verification — early access starts"
  - id: rollout
    resource: https://android-developers.googleblog.com/2026/03/android-developer-verification-rolling-out-to-all-developers.html
    title: "Android Developers Blog: Android developer verification rolling out to all developers"
  - id: fd-malware
    resource: https://f-droid.org/2026/07/01/adv-malware.html
    title: "F-Droid: Android Developer Verification — threat masquerading as protection"
  - id: fd2
    resource: https://f-droid.org/2026/09/24/f-droid-2.0-a-new-chapter-for-android-freedom.html
    title: "F-Droid 2.0: a new chapter for Android freedom"
  - id: heart
    resource: https://f-droid.org/2025/12/30/a-faster-heart-for-f-droid.html
    title: "F-Droid: A faster heart for F-Droid (new build server)"
  - id: cpus
    resource: https://news.ycombinator.com/item?id=44884709
    title: "HN: F-Droid build servers can't build modern Android apps due to outdated CPUs"
  - id: hsbc
    resource: https://mastodon.neilzone.co.uk/@neil/115807834298031971
    title: "HSBC blocks its app due to F-Droid-installed Bitwarden"
---
# Summary
F-Droid's two years were dominated by Google's Android Developer Verification (ADV). Announced 25 Aug 2025, ADV requires apps installed on certified Android devices to come from registered, identity-verified developers[^tc-adv]; F-Droid called it a "decree" incompatible with anonymous FOSS distribution (29 Sept 2025)[^fd-decree]. Google opened early access in Nov 2025, then on 30 Mar 2026 published the rollout: free limited-distribution accounts (up to 20 devices), an "advanced flow" for power users, enforcement starting 30 Sept 2026 in Brazil, Indonesia, Singapore and Thailand, global from 2027[^early][^rollout]. F-Droid's July 2026 post warned that the undefined "malware" clause lets Google terminate any developer; the Keep Android Open coalition counts 70+ organizations (EFF, FSF, ACLU)[^fd-malware]. Meanwhile F-Droid replaced build servers whose CPUs couldn't build modern apps (Aug→Dec 2025)[^cpus][^heart] and shipped a redesigned F-Droid 2.0 client funded by NLnet/NGI and OTF (24 Sept 2026)[^fd2]. Banks blocking apps installed from F-Droid (HSBC, Dec 2025) show the ecosystem pressure[^hsbc]. Verdict: OSS in crisis (external), no business entity.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08-13 | Build servers can't build modern apps (old CPUs)[^cpus] | OSS | − |
| W24 | 2025-08-25 | Google announces developer verification for sideloaded apps[^tc-adv] | OSS | − |
| W24 | 2025-09-29 | F-Droid statement opposing the "decree"[^fd-decree] | OSS | − |
| W12 | 2025-11-13 | ADV early access starts[^early] | OSS | − |
| W12 | 2025-12-30 | New, faster build server[^heart] | OSS | + |
| W12 | 2025-12-30 | HSBC app blocks F-Droid-installed apps[^hsbc] | OSS | − |
| W9 | 2026-03-30 | Google finalizes rollout; enforcement 2026-09-30 in 4 countries[^rollout] | OSS | − |
| W6 | 2026-07-01 | F-Droid: ADV is "threat masquerading as protection"; 70+ org coalition[^fd-malware] | OSS | − |
| W3 | 2026-09-24 | F-Droid 2.0 client[^fd2] | OSS | + |
| W3 | 2026-09-30 | ADV enforcement begins (BR, ID, SG, TH)[^rollout] | OSS | − |

# OSS successes
- Infrastructure renewal and a modern client funded by public grants (NLnet/NGI, OTF)[^heart][^fd2].
# OSS failures / risks
- Platform gatekeeping may make F-Droid installs require ADB or "advanced flow" friction[^rollout][^fd-malware].
# Business successes
- n/a (grant/donation funded)[^fd2].
# Business failures / risks
- No revenue to fund legal/regulatory fights; relies on coalitions and the EU DMA.

# By window
## W3
- F-Droid 2.0; enforcement begins[^fd2][^rollout].
## W6
- Advocacy escalation[^fd-malware].
## W9
- Google finalizes rollout[^rollout].
## W12
- Early access; new build server; bank blocking[^early][^heart][^hsbc].
## W24
- ADV announced; F-Droid opposition[^tc-adv][^fd-decree].

# Lessons
- On mobile, OSS distribution exists at the platform owner's discretion; regulation (DMA) is the main counterweight.

# Related
- [Android developer verification event](/events/2026-09-android-developer-verification-enforcement.md)
- [GrapheneOS](/projects/end-user-apps/grapheneos.md), [CoMaps](/projects/end-user-apps/comaps.md), [Home Assistant](/projects/end-user-apps/home-assistant.md)

[^tc-adv]: https://techcrunch.com/2025/08/25/google-will-require-developer-verification-for-android-apps-outside-the-play-store/
[^fd-decree]: https://f-droid.org/2025/09/29/google-developer-registration-decree.html
[^early]: https://android-developers.googleblog.com/2025/11/android-developer-verification-early.html
[^rollout]: https://android-developers.googleblog.com/2026/03/android-developer-verification-rolling-out-to-all-developers.html
[^fd-malware]: https://f-droid.org/2026/07/01/adv-malware.html
[^fd2]: https://f-droid.org/2026/09/24/f-droid-2.0-a-new-chapter-for-android-freedom.html
[^heart]: https://f-droid.org/2025/12/30/a-faster-heart-for-f-droid.html
[^cpus]: https://news.ycombinator.com/item?id=44884709
[^hsbc]: https://mastodon.neilzone.co.uk/@neil/115807834298031971
