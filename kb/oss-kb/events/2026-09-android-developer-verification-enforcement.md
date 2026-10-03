---
type: Event
title: Android developer verification enforcement begins
description: "Google's Android Developer Verification, announced Aug 2025, began enforcement on 2026-09-30 in Brazil, Indonesia, Singapore and Thailand, requiring identity-verified developers for apps installed outside the Play Store — a direct threat to F-Droid-style FOSS distribution."
event_kind: governance
date: 2026-09-30
window: W3
impact: negative
projects: [projects/end-user-apps/f-droid, projects/end-user-apps/grapheneos, projects/end-user-apps/comaps]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc
    resource: https://techcrunch.com/2025/08/25/google-will-require-developer-verification-for-android-apps-outside-the-play-store/
    title: "TechCrunch: Google will require developer verification for Android apps outside the Play Store"
    author: org:techcrunch
  - id: rollout
    resource: https://android-developers.googleblog.com/2026/03/android-developer-verification-rolling-out-to-all-developers.html
    title: "Android Developers Blog: verification rolling out to all developers"
  - id: early
    resource: https://android-developers.googleblog.com/2025/11/android-developer-verification-early.html
    title: "Android Developers Blog: early access starts"
  - id: fd
    resource: https://f-droid.org/2025/09/29/google-developer-registration-decree.html
    title: "F-Droid: F-Droid and Google's developer registration decree"
  - id: fd-malware
    resource: https://f-droid.org/2026/07/01/adv-malware.html
    title: "F-Droid: ADV — threat masquerading as protection"
  - id: commonsware
    resource: https://commonsware.com/blog/2025/08/26/uncomfortable-questions-android-developer-verification.html
    title: "CommonsWare: Uncomfortable questions about Android developer verification"
---
# What happened
Announced on 25 Aug 2025, Android Developer Verification requires apps installed on certified Android devices to be registered to identity-verified developers, including apps distributed outside Google Play[^tc]. Early access opened in Nov 2025[^early]. Google's 30 Mar 2026 rollout plan added free "limited distribution" accounts (up to 20 devices, email only), an "advanced flow" for power users and continued ADB sideloading, and set enforcement for 30 Sept 2026 in Brazil, Indonesia, Singapore and Thailand, expanding globally from 2027[^rollout].

# Why it matters
F-Droid builds apps from source and signs them itself, often for anonymous or pseudonymous developers; it called the scheme a "decree" and argued the undefined "malware" clause lets Google terminate any developer[^fd][^fd-malware]. The Keep Android Open coalition (70+ organizations incl. EFF, FSF, ACLU) opposed it[^fd-malware]. Developers raised questions about privacy and due process[^commonsware].

# Outcome so far
Enforcement began in four countries on schedule; F-Droid shipped its 2.0 client days earlier but its post-enforcement install experience remained unclear as of this writing. The EU DMA is the main regulatory counterweight in Europe.

# Related
- [F-Droid](/projects/end-user-apps/f-droid.md), [GrapheneOS](/projects/end-user-apps/grapheneos.md), [Home Assistant](/projects/end-user-apps/home-assistant.md) (DMA Android interoperability)

[^tc]: https://techcrunch.com/2025/08/25/google-will-require-developer-verification-for-android-apps-outside-the-play-store/
[^rollout]: https://android-developers.googleblog.com/2026/03/android-developer-verification-rolling-out-to-all-developers.html
[^early]: https://android-developers.googleblog.com/2025/11/android-developer-verification-early.html
[^fd]: https://f-droid.org/2025/09/29/google-developer-registration-decree.html
[^fd-malware]: https://f-droid.org/2026/07/01/adv-malware.html
[^commonsware]: https://commonsware.com/blog/2025/08/26/uncomfortable-questions-android-developer-verification.html
