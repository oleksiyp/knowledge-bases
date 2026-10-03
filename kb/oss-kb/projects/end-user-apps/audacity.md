---
type: OSS Project
title: Audacity
description: "Muse Group-stewarded GPL audio editor; after years of trust repair, shipped Audacity 4.0 (Sept 2026), a full Qt UI rebuild with a new clip model, plus OpenVINO AI effects (2025)."
resource: https://github.com/audacity/audacity
tags: [audio, creative, gpl, company-stewarded, muse-group]
domain: end-user-apps
license: GPL-3.0
license_history: ["GPL family (Muse Group stewardship since 2021; GitHub reports NOASSERTION)"]
governance: single-vendor
steward: Muse Group
backing_orgs: []
metrics:
  github_stars: { value: 18634, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: stable
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: a4
    resource: https://github.com/audacity/audacity/releases/tag/Audacity-4.0.0
    title: "Audacity 4.0.0 release"
  - id: building
    resource: https://www.youtube.com/watch?v=QYM3TWf_G38
    title: "How we are building Audacity 4 (video)"
  - id: cdm
    resource: https://cdm.link/audacity-4-in-ui-preview/
    title: "CDM: Audacity 4 — a glimpse of a new, more modern UI"
  - id: openvino
    resource: https://www.audacityteam.org/blog/openvino-ai-effects/
    title: "Audacity: OpenVINO AI effects"
---
# Summary
Audacity, stewarded by Muse Group since 2021, released its biggest update in decades: Audacity 4.0 on 3 Sept 2026, rebuilt on Qt with native high-DPI support, a new clip-editing model, customizable workspaces and a new .aup4 project format (one-way conversion from .aup3)[^a4][^cdm]. Earlier, Intel's OpenVINO AI effects plugin (Feb 2025) brought local AI separation/transcription[^openvino]. Verdict: OSS growing; business (Muse Group) stable but undisclosed.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-14 | OpenVINO AI effects (local)[^openvino] | OSS | + |
| W24 | 2025-10-03 | "How we are building Audacity 4" talk[^building] | OSS | + |
| W12 | 2025-10-06 | Audacity 4 UI preview[^cdm] | OSS | + |
| W3 | 2026-09-03 | Audacity 4.0.0 released[^a4] | OSS | + |

# OSS successes
- Modernized UI without abandoning GPL; 18.6k stars[^a4].
# OSS failures / risks
- Format break (.aup4) and UI change may alienate long-time users[^a4].
# Business successes
- Muse Group continues to fund full-time development (figures not disclosed).
# Business failures / risks
- Single-company stewardship.

# By window
## W3
- Audacity 4.0[^a4].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- UI preview[^cdm].
## W24
- OpenVINO AI effects[^openvino].

# Lessons
- Company stewardship can deliver large rewrites that volunteer projects struggle to finish.

# Related
- [Blender](/projects/end-user-apps/blender.md)

[^a4]: https://github.com/audacity/audacity/releases/tag/Audacity-4.0.0
[^building]: https://www.youtube.com/watch?v=QYM3TWf_G38
[^cdm]: https://cdm.link/audacity-4-in-ui-preview/
[^openvino]: https://www.audacityteam.org/blog/openvino-ai-effects/
