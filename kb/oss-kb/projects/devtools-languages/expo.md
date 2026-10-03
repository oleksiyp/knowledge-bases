---
type: OSS Project
title: Expo
description: MIT-licensed React Native framework and toolchain whose company monetizes cloud build/update services (EAS); became React Native's de facto default, went New-Architecture-only in SDK 55 (Feb 2026) and raised a $45M Series B with an AI "Expo Agent" (Apr 2026) — the healthiest open-core business in this domain.
resource: https://github.com/expo/expo
tags: [mobile, react-native, javascript, mit, open-core, coss, ai-agents]
domain: devtools-languages
license: MIT
license_history: ["MIT (2015-)"]
governance: company-led-open-core
steward: Expo (650 Industries, Inc.)
backing_orgs: [organizations/expo]
metrics:
  github_stars: { value: 52540, as_of: 2026-10-03 }
  weekly_downloads: { value: "~4M", as_of: 2026-04-16, note: "company-reported" }
  developers: { value: "3M+", as_of: 2026-04-16, note: "company-reported community size" }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: flat, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: expo-gh
    resource: https://github.com/expo/expo
    title: Expo GitHub repository (stars via GitHub API, 2026-10-03)
  - id: prn-expo-b
    resource: https://www.prnewswire.com/news-releases/expo-raises-45m-series-b-and-launches-expo-agent-to-close-the-gap-from-idea-to-production-ready-mobile-apps-302744423.html
    title: "PR Newswire: Expo raises $45M Series B and launches Expo Agent"
    author: org:expo
  - id: finsmes-expo
    resource: https://www.finsmes.com/2026/04/expo-raises-45m-in-series-b-funding.html
    title: "FinSMEs: Expo raises $45M in Series B funding"
  - id: expo-sdk55
    resource: https://expo.dev/changelog/sdk-55
    title: "Expo changelog: SDK 55"
    author: org:expo
  - id: expo-sdk56
    resource: https://expo.dev/changelog/sdk-56
    title: "Expo changelog: SDK 56"
    author: org:expo
  - id: expo-sdk57
    resource: https://expo.dev/changelog/sdk-57
    title: "Expo changelog: SDK 57"
    author: org:expo
  - id: alt-sdk54
    resource: https://alternativeto.net/news/2025/8/expo-sdk-54-beta-launches-with-react-native-0-81-and-faster-ios-builds
    title: "AlternativeTo: Expo SDK 54 beta launches with React Native 0.81 and faster iOS builds"
---

# Summary
Expo is a clear commercial-open-source success in developer tooling for 2024–26. The framework, CLI, router and SDK modules are MIT. The company earns money from Expo Application Services (EAS) for cloud builds, submissions and over-the-air updates. On **2026-04-16 it raised a $45M Series B led by Georgian**, with Leadout Capital, A.Capital Ventures and Red Swan Ventures participating. It also launched **Expo Agent**, a mobile-specific coding agent, in public beta. Secondary coverage says it runs on Claude Code; the press release does not say so. The company reported about 4M weekly downloads and more than 3M developers.[^prn-expo-b][^finsmes-expo] Technically Expo pushed the React Native ecosystem forward. SDK 54 (Aug–Sept 2025, RN 0.81) was the last to support the old architecture, SDK 55 (2026-02-25, RN 0.83) is New Architecture only, SDK 56 (2026-05-21, RN 0.85) made Expo UI production-ready, and SDK 57 (2026-06-30, RN 0.86) was a no-breaking-changes release that hints at a move to RN's twice-yearly cadence.[^alt-sdk54][^expo-sdk55][^expo-sdk56][^expo-sdk57] Verdict: OSS thriving, business growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-08 | SDK 54 beta (RN 0.81; faster iOS builds); last SDK with legacy architecture [^alt-sdk54][^expo-sdk55] | OSS | + |
| W9 | 2026-02-25 | SDK 55 (RN 0.83, React 19.2); New Architecture only [^expo-sdk55] | OSS | + |
| W6 | 2026-04-16 | $45M Series B led by Georgian; Expo Agent public beta [^prn-expo-b] | Business | + |
| W6 | 2026-05-21 | SDK 56 (RN 0.85); Expo UI production-ready; faster Android cold starts and iOS builds [^expo-sdk56] | OSS | + |
| W6 | 2026-06-30 | SDK 57 (RN 0.86), "easiest upgrade", no breaking changes; Expo explores aligning with RN's twice-yearly cadence [^expo-sdk57] | OSS | + |

# OSS successes
- About 52.5k GitHub stars as of 2026-10-03.[^expo-gh]
- Became the recommended way to start React Native apps and led the move to the New Architecture.[^expo-sdk55]
- Consistent SDK cadence (three per year, possibly moving to two) that tracks RN releases.[^expo-sdk55][^expo-sdk56][^expo-sdk57]

# OSS failures / risks
- Heavy coupling to Meta's React Native release schedule.
- Ending legacy-architecture support forced migrations on libraries that lag behind.[^expo-sdk55]

# Business successes
- Usage-based EAS cloud services are a monetization model that does not depend on restrictive licensing.[^finsmes-expo]
- Raised a large Series B in 2026 by framing Expo as the "production" layer for AI-generated mobile apps.[^prn-expo-b]

# Business failures / risks
- AI app builders (and the agent platforms Expo itself builds on) could absorb the developer relationship.[^prn-expo-b]
- Revenue and valuation are undisclosed. The 2018 Series A ($10M, CRV-led) is reported only by aggregators.

# By window
## W3
- No notable events found beyond SDK 57 patch releases and EAS CLI updates.
## W6
- $45M Series B and Expo Agent (2026-04-16); SDK 56 (2026-05-21); SDK 57 (2026-06-30).[^prn-expo-b][^expo-sdk56][^expo-sdk57]
## W9
- SDK 55, New Architecture only (2026-02-25).[^expo-sdk55]
## W12
- No notable events found.
## W24
- SDK 54 (RN 0.81).[^alt-sdk54]

# Lessons
- Selling compute (builds, updates) around a permissive framework scales better than selling licenses. Expo did not need a license change.
- In 2026, "AI agent + OSS framework" became the funding pitch for developer-tool companies.

# Related
- [Expo (organization)](/organizations/expo.md)
- [Expo Series B (event)](/events/2026-04-expo-series-b.md)
- [React](/projects/devtools-languages/react.md), [Flutter](/projects/devtools-languages/flutter.md)

[^prn-expo-b]: PR Newswire: Expo raises $45M Series B and launches Expo Agent — https://www.prnewswire.com/news-releases/expo-raises-45m-series-b-and-launches-expo-agent-to-close-the-gap-from-idea-to-production-ready-mobile-apps-302744423.html
[^finsmes-expo]: FinSMEs: Expo raises $45M in Series B funding — https://www.finsmes.com/2026/04/expo-raises-45m-in-series-b-funding.html
[^alt-sdk54]: AlternativeTo: Expo SDK 54 beta launches with React Native 0.81 and faster iOS builds — https://alternativeto.net/news/2025/8/expo-sdk-54-beta-launches-with-react-native-0-81-and-faster-ios-builds
[^expo-sdk55]: Expo changelog: SDK 55 — https://expo.dev/changelog/sdk-55
[^expo-sdk56]: Expo changelog: SDK 56 — https://expo.dev/changelog/sdk-56
[^expo-sdk57]: Expo changelog: SDK 57 — https://expo.dev/changelog/sdk-57
[^expo-gh]: Expo GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/expo/expo
