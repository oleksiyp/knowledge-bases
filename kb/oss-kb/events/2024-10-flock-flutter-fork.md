---
type: Event
title: Flock — community fork of Google's Flutter
description: Ex-Flutter-team engineer Matt Carroll forked Flutter as "Flock", citing a ~50-person Google team for ~1M developers and 2024 layoffs; the fork stayed small and went dormant by Dec 2025 while Google shifted desktop stewardship to Canonical.
event_kind: fork
date: 2024-10-27
window: W24
impact: mixed
projects: [projects/devtools-languages/flutter]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: infoworld-flock
    resource: https://www.infoworld.com/article/3595687/googles-flutter-framework-has-been-forked.html
    title: "InfoWorld: Google's Flutter framework has been forked"
    author: org:infoworld
  - id: tns-flock
    resource: https://thenewstack.io/flutter-fork-designed-to-give-developers-release-valve/
    title: "The New Stack: Flutter fork designed to give developers 'release valve'"
    author: org:the-new-stack
  - id: flock-gh
    resource: https://github.com/join-the-flock/flock
    title: "Flock GitHub repository (382 stars, last push 2025-12-15; via GitHub API 2026-10-03)"
  - id: omg-canonical-flutter
    resource: https://www.omgubuntu.co.uk/2026/05/flutter-desktop-canonical-maintained
    title: "OMG! Ubuntu: Canonical takes over Flutter desktop maintenance & roadmap"
---

# What happened
In late October 2024 Matt Carroll, a former Flutter team member, announced Flock, "Flutter, by the community for the community". He described it as a "Flutter+" fork that would stay in sync with upstream while merging bug fixes and features Google could not or would not prioritize. He also announced Nest, a set of tools for maintaining Flutter forks.[^infoworld-flock] His reasons were a Google Flutter team of about 50 people serving about 1M developers, a headcount freeze around 2023, layoffs in 2024, and reduced attention to desktop.[^infoworld-flock] Carroll stressed that Flock was a "release valve", not a divergence.[^tns-flock]

# Why it matters
It was the most visible public sign of strain in a Google-controlled OSS framework during the AI-driven reprioritization at Google.

# Outcome so far
- Flock did not gain traction: 382 stars and no pushes since 2025-12-15 as of 2026-10-03.[^flock-gh]
- Google addressed the underlying complaint differently. At Google I/O 2026 Canonical became lead maintainer and "strategic steward" of Flutter desktop, and Material/Cupertino were split out of core.[^omg-canonical-flutter]

# Related
- [Flutter](/projects/devtools-languages/flutter.md)

[^infoworld-flock]: InfoWorld: Google's Flutter framework has been forked — https://www.infoworld.com/article/3595687/googles-flutter-framework-has-been-forked.html
[^tns-flock]: The New Stack: Flutter fork designed to give developers 'release valve' — https://thenewstack.io/flutter-fork-designed-to-give-developers-release-valve/
[^flock-gh]: Flock GitHub repository (382 stars, last push 2025-12-15; via GitHub API 2026-10-03) — https://github.com/join-the-flock/flock
[^omg-canonical-flutter]: OMG! Ubuntu: Canonical takes over Flutter desktop maintenance & roadmap — https://www.omgubuntu.co.uk/2026/05/flutter-desktop-canonical-maintained
