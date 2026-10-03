---
type: OSS Project
title: Flutter
description: Google's BSD-licensed cross-platform UI toolkit (with Dart); survived 2024 layoffs and the Flock community fork (Oct 2024, now dormant) by shipping steadily and offloading — Canonical became steward of Flutter desktop (May 2026) and Material/Cupertino left the core SDK (3.47, Aug 2026).
resource: https://github.com/flutter/flutter
tags: [mobile, cross-platform, ui-toolkit, dart, google, bsd-3-clause, single-vendor, fork]
domain: devtools-languages
license: BSD-3-Clause
license_history: ["BSD-3-Clause (2015-)"]
governance: single-vendor
steward: Google (with Canonical as desktop steward since May 2026)
backing_orgs: []
metrics:
  github_stars: { value: 179272, as_of: 2026-10-03 }
  flock_fork_github_stars: { value: 382, as_of: 2026-10-03, note: "join-the-flock/flock; last push 2025-12-15" }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: flutter-gh
    resource: https://github.com/flutter/flutter
    title: Flutter GitHub repository (stars via GitHub API, 2026-10-03)
  - id: flock-gh
    resource: https://github.com/join-the-flock/flock
    title: "Flock fork GitHub repository (stars 382, last push 2025-12-15, via GitHub API 2026-10-03)"
  - id: infoworld-flock
    resource: https://www.infoworld.com/article/3595687/googles-flutter-framework-has-been-forked.html
    title: "InfoWorld: Google's Flutter framework has been forked"
    author: org:infoworld
  - id: tns-flock
    resource: https://thenewstack.io/flutter-fork-designed-to-give-developers-release-valve/
    title: "The New Stack: Flutter fork designed to give developers 'release valve'"
    author: org:the-new-stack
  - id: flutter-roadmap-2026
    resource: https://flutter.dev/blog/flutter-darts-2026-roadmap
    title: "Flutter blog: Flutter & Dart's 2026 roadmap"
    author: org:google
  - id: omg-canonical-flutter
    resource: https://www.omgubuntu.co.uk/2026/05/flutter-desktop-canonical-maintained
    title: "OMG! Ubuntu: Canonical takes over Flutter desktop maintenance & roadmap"
  - id: flutter-344-notes
    resource: https://docs.flutter.dev/release/release-notes/release-notes-3.44.0
    title: "Flutter 3.44.0 release notes"
    author: org:google
  - id: flutter-341-blog
    resource: https://blog.flutter.dev/whats-new-in-flutter-3-41-302ec140e632
    title: "Flutter blog: What's new in Flutter 3.41"
    author: org:google
  - id: wiki-flutter
    resource: https://en.wikipedia.org/wiki/Flutter_(software)
    title: "Wikipedia: Flutter (software) — release history"
  - id: flutter-archive
    resource: https://docs.flutter.dev/install/archive
    title: "Flutter SDK archive (3.47.0 on 2026-08-12; 3.47.1 on 2026-08-19)"
    author: org:google
  - id: dartway-347
    resource: https://dartway.dev/blog/flutter-3-47-what-breaks
    title: "Dartway: Flutter 3.47 — what actually breaks"
---

# Summary
Flutter is the most popular cross-platform UI toolkit by GitHub stars (about 179k). Its 2024–26 story is about a single-vendor project under strain and how it adjusted. Google froze Flutter headcount around 2023 and laid off Flutter/Dart staff in 2024. In late October 2024 ex-Flutter-team engineer Matt Carroll launched **Flock**, a "Flutter+" fork meant as a "release valve" for fixes Google would not prioritize. He cited about 50 Google engineers serving about 1M developers.[^infoworld-flock][^tns-flock] Flock never gained traction: 382 stars and no pushes since 2025-12-15.[^flock-gh] Google instead kept shipping (3.38 Nov 2025, 3.41 Feb 2026, 3.44 at I/O May 2026, 3.47 on 2026-08-12) and redistributed the work.[^wiki-flutter][^flutter-archive] At Google I/O 2026 **Canonical became the lead maintainer and "strategic steward" of Flutter desktop**, and Material/Cupertino were split out of the core SDK into standalone packages, which first shipped in 3.47.[^omg-canonical-flutter][^dartway-347] The 2026 roadmap is focused on AI (GenUI SDK, the A2UI protocol, MCP servers, Gemini CLI/Antigravity).[^flutter-roadmap-2026] Verdict: OSS stable. The fork threat faded, but governance is moving away from Google-only maintenance.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-27 | Flock fork announced by Matt Carroll, citing ~50-person Google team, 2024 layoffs [^infoworld-flock][^tns-flock] | OSS | − |
| W12 | 2025-11-12 | Flutter 3.38 (iOS 26 / Xcode 26 support) [^wiki-flutter] | OSS | + |
| W12 | 2025-12-15 | Last push to Flock repository (dormant since) [^flock-gh] | OSS | mixed |
| W9 | 2026-02-11 | Flutter 3.41 [^flutter-341-blog][^wiki-flutter] | OSS | + |
| W9 | 2026-02-24 | 2026 roadmap: Impeller-only Android, Wasm default on web, GenUI/A2UI, Dart Cloud Functions [^flutter-roadmap-2026] | OSS | + |
| W6 | 2026-05 | Google I/O: Flutter 3.44; Canonical named lead maintainer/steward of Flutter desktop [^flutter-344-notes][^omg-canonical-flutter] | Governance | + |
| W3 | 2026-08-12 | Flutter 3.47: Material/Cupertino standalone packages; Impeller default on desktop; Widget Previews stable [^flutter-archive][^dartway-347] | OSS | + |

# OSS successes
- About 179k GitHub stars as of 2026-10-03.[^flutter-gh]
- No release slipped despite the layoffs. Quarterly stable releases continued through 2026.[^wiki-flutter][^flutter-archive]
- Shared stewardship: Canonical now owns the desktop platforms, which reduces dependence on Google headcount.[^omg-canonical-flutter]
- Material/Cupertino decoupling lets the framework core evolve separately from design systems.[^dartway-347]

# OSS failures / risks
- The 2024 layoffs and the small core team (about 50 engineers per Carroll) exposed single-vendor fragility.[^infoworld-flock]
- Flock showed that community forks of big corporate frameworks rarely gain momentum. It went dormant within about 14 months.[^flock-gh]
- Google's AI-first priorities (GenUI, Gemini integrations) shape the roadmap.[^flutter-roadmap-2026]

# Business successes
- n/a (no Flutter business; Google funds it).

# Business failures / risks
- n/a.

# By window
## W3
- Flutter 3.47 (2026-08-12) with Material/Cupertino split; 3.47.1 hotfix (2026-08-19).[^flutter-archive][^dartway-347]
## W6
- Google I/O 2026: Flutter 3.44; Canonical becomes desktop steward.[^flutter-344-notes][^omg-canonical-flutter]
## W9
- Flutter 3.41 (2026-02-11); 2026 roadmap (2026-02-24).[^flutter-341-blog][^flutter-roadmap-2026]
## W12
- Flutter 3.38 (2025-11-12); Flock goes quiet (last push 2025-12-15).[^wiki-flutter][^flock-gh]
## W24
- Flock fork announced (2024-10-27) after 2024 layoffs.[^infoworld-flock]

# Lessons
- A "soft fork" is often more useful as a signal than as a product. Google's response (shared stewardship, decoupling) addressed Flock's complaints without the fork itself succeeding.
- When a corporate steward shrinks, bringing in an interested platform partner (Canonical) works better than a community fork.

# Related
- [Flock fork of Flutter (event)](/events/2024-10-flock-flutter-fork.md)
- [Expo](/projects/devtools-languages/expo.md), [Angular](/projects/devtools-languages/angular.md)

[^infoworld-flock]: InfoWorld: Google's Flutter framework has been forked — https://www.infoworld.com/article/3595687/googles-flutter-framework-has-been-forked.html
[^tns-flock]: The New Stack: Flutter fork designed to give developers 'release valve' — https://thenewstack.io/flutter-fork-designed-to-give-developers-release-valve/
[^flock-gh]: Flock fork GitHub repository (stars 382, last push 2025-12-15, via GitHub API 2026-10-03) — https://github.com/join-the-flock/flock
[^wiki-flutter]: Wikipedia: Flutter (software) — release history — https://en.wikipedia.org/wiki/Flutter_(software)
[^flutter-archive]: Flutter SDK archive (3.47.0 on 2026-08-12; 3.47.1 on 2026-08-19) — https://docs.flutter.dev/install/archive
[^omg-canonical-flutter]: OMG! Ubuntu: Canonical takes over Flutter desktop maintenance & roadmap — https://www.omgubuntu.co.uk/2026/05/flutter-desktop-canonical-maintained
[^dartway-347]: Dartway: Flutter 3.47 — what actually breaks — https://dartway.dev/blog/flutter-3-47-what-breaks
[^flutter-roadmap-2026]: Flutter blog: Flutter & Dart's 2026 roadmap — https://flutter.dev/blog/flutter-darts-2026-roadmap
[^flutter-341-blog]: Flutter blog: What's new in Flutter 3.41 — https://blog.flutter.dev/whats-new-in-flutter-3-41-302ec140e632
[^flutter-344-notes]: Flutter 3.44.0 release notes — https://docs.flutter.dev/release/release-notes/release-notes-3.44.0
[^flutter-gh]: Flutter GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/flutter/flutter
