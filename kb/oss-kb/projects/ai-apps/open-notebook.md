---
type: OSS Project
title: Open Notebook (and SurfSense)
description: "The breakout open NotebookLM clones of 2026: MIT-licensed Open Notebook (~40k stars, ~+15k in four months after a June 2026 trending run) and SurfSense (~16k), which carved a BSL-1.1 'proprietary' directory out of its Apache code in July 2026 — growing fast."
resource: https://github.com/lfnovo/open-notebook
tags: [ai-apps, notebooklm-clone, research-assistant, podcasts, mit, open-core]
domain: ai-apps
license: "MIT (Open Notebook); Apache-2.0 + BSL-1.1 proprietary dir (SurfSense)"
license_history: ["Open Notebook MIT (2024-)", "SurfSense Apache-2.0 (2024-08) → Apache-2.0 + BSL-1.1 for surfsense_backend/app/proprietary (2026-07-02)"]
governance: community
steward: "Luis Novo (Open Notebook); SurfSense (MODSetter)"
backing_orgs: []
metrics:
  github_stars: { value: 39746, as_of: 2026-10-03 }
  latest_release: { value: "v1.14.0 (2026-07-21)", as_of: 2026-10-03 }
  surfsense_github_stars: { value: 16311, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: flat, W24: up }
status: emerging
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: on-gh
    resource: https://github.com/lfnovo/open-notebook
    title: Open Notebook GitHub repository (GitHub API, 2026-10-03)
  - id: on-weekly
    resource: https://note.com/cc_works_cl/n/nf3743fb5eed3?hl=en
    title: "CWorksL weekly: open-notebook hits 27,030 stars (June 2026)"
  - id: on-review
    resource: https://dev.to/andrew-ooo/open-notebook-review-self-hosted-notebooklm-alternative-1210
    title: "DEV: Open Notebook review"
  - id: ss-gh
    resource: https://github.com/MODSetter/SurfSense
    title: SurfSense GitHub repository and LICENSE history (GitHub API, 2026-10-03)
  - id: ss-oth
    resource: https://www.opentechhub.io/surfsense/
    title: "OpenTechHub: SurfSense — commercialisation roadmap and licence risk"
---

# Summary
Google's NotebookLM spawned a wave of self-hosted clones. **Open Notebook** (MIT) supports 18+ model providers including local ones, multi-speaker podcast generation and a REST API[^on-review]; it went from ~27k stars in early June 2026 (trending after v1.9.0) to ~39.7k by 2026-10-03[^on-weekly][^on-gh], with releases through v1.14.0 (2026-07-21)[^on-gh]. **SurfSense** (~16k stars) positions as an air-gapped NotebookLM/Perplexity/Glean alternative and is commercialising: on 2026-07-02 its licence was changed so that `surfsense_backend/app/proprietary/` is under BSL-1.1 while the rest stays Apache-2.0[^ss-gh][^ss-oth]. Verdict: growing — one of the few 2026 breakout categories in AI apps.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026-06-02 | Open Notebook v1.9.0; GitHub trending (~27k stars)[^on-weekly] | OSS | + |
| W6 | 2026-07-02 | SurfSense adds BSL-1.1 proprietary directory[^ss-gh] | OSS/Business | − |
| W3 | 2026-07-21 | Open Notebook v1.14.0[^on-gh] | OSS | + |
| W3 | 2026-10-03 | Open Notebook ~39.7k stars[^on-gh] | OSS | + |

# OSS successes
- Fast organic growth with a permissive licence[^on-gh].
# OSS failures / risks
- Open Notebook is effectively single-maintainer; SurfSense's BSL carve-out signals open-core creep[^ss-gh][^ss-oth].
# Business successes
- n/a (SurfSense pursuing licences/plugins)[^ss-oth].
# Business failures / risks
- Competes with free NotebookLM.

# By window
## W3
- v1.14.0; continued star growth[^on-gh].
## W6
- Trending surge; SurfSense BSL carve-out[^on-weekly][^ss-gh].
## W9
- Steady growth; no discrete events found.
## W12
- No notable events found.
## W24
- Projects launched (2024) and grew.

# Lessons
- "Private/local version of a hit Google product" is a reliable star magnet; monetisers quickly add source-available carve-outs.

# Related
- [Vane/Perplexica](/projects/ai-apps/vane.md), [Khoj](/projects/ai-apps/khoj.md), [Open TTS models](/projects/ai-apps/open-tts-models.md)

[^on-gh]: GitHub API, lfnovo/open-notebook — https://github.com/lfnovo/open-notebook
[^on-weekly]: CWorksL weekly — https://note.com/cc_works_cl/n/nf3743fb5eed3?hl=en
[^on-review]: DEV review — https://dev.to/andrew-ooo/open-notebook-review-self-hosted-notebooklm-alternative-1210
[^ss-gh]: GitHub API and LICENSE history, MODSetter/SurfSense — https://github.com/MODSetter/SurfSense
[^ss-oth]: OpenTechHub — https://www.opentechhub.io/surfsense/
