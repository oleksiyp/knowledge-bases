---
type: OSS Project
title: Fooocus
description: "lllyasviel's Midjourney-like SDXL app (~53k stars), frozen in 'limited long-term support' (bug fixes only) since its last release in Aug 2024 — declining."
resource: https://github.com/lllyasviel/Fooocus
tags: [ai-apps, image-generation, gpl-3.0, maintenance-mode]
domain: ai-apps
license: GPL-3.0
license_history: ["GPL-3.0 (2023-)"]
governance: community
steward: lllyasviel (individual)
backing_orgs: []
metrics:
  github_stars: { value: 53268, as_of: 2026-10-03 }
  last_release: { value: "v2.5.5 (2024-08-12)", as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: n/a
momentum_by_window: { W3: down, W6: down, W9: down, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: fooocus-gh
    resource: https://github.com/lllyasviel/Fooocus
    title: Fooocus GitHub repository and README (GitHub API, 2026-10-03)
  - id: fooocus-abandoned
    resource: https://github.com/lllyasviel/Fooocus/discussions/3613
    title: "Discussion #3613: is this project abandoned?"
  - id: fooocus-guide
    resource: https://localaimaster.com/blog/fooocus-guide
    title: "Fooocus in 2026: setup, status and alternatives"
---

# Summary
Fooocus offered a prompt-only, Midjourney-like experience on SDXL and gathered ~53k stars[^fooocus-gh]. Its README declares "limited long-term support" — bug fixes only, no migration to newer architectures — and the last release is v2.5.5 (2024-08-12), with the last push in Dec 2025[^fooocus-gh][^fooocus-guide]. Users ask whether it is abandoned[^fooocus-abandoned]. Verdict: declining, intentionally frozen.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-08-12 (pre-window) → 2025 | LTS/bug-fix-only status; no new model support[^fooocus-guide] | OSS | − |
| W12 | 2025-12-01 | Last repository push[^fooocus-gh] | OSS | − |

# OSS successes
- Showed demand for opinionated simple UX on open models.
# OSS failures / risks
- Tied to SDXL; creator moved to other projects[^fooocus-guide].
# Business successes
- n/a.
# Business failures / risks
- n/a.

# By window
## W3
- No notable events found (frozen).
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- Final push (2025-12-01)[^fooocus-gh].
## W24
- Bug-fix-only LTS[^fooocus-guide].

# Lessons
- Opinionated apps bound to one model family age as fast as the model.

# Related
- [AUTOMATIC1111 & Forge](/projects/ai-apps/automatic1111-webui.md), [ComfyUI](/projects/ai-apps/comfyui.md)

[^fooocus-gh]: GitHub API/README, lllyasviel/Fooocus — https://github.com/lllyasviel/Fooocus
[^fooocus-abandoned]: Discussion #3613 — https://github.com/lllyasviel/Fooocus/discussions/3613
[^fooocus-guide]: LocalAIMaster — https://localaimaster.com/blog/fooocus-guide
