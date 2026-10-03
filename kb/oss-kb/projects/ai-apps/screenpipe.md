---
type: OSS Project
title: Screenpipe
description: "Local screen+audio recorder and 'work memory' for AI agents (~22k stars) that relicensed from MIT to the source-available Screenpipe Commercial License on 2026-06-09, then joined YC S26 — growing business, OSS status lost."
resource: https://github.com/screenpipe/screenpipe
tags: [ai-apps, personal-ai, recall-alternative, source-available, license-change, yc]
domain: ai-apps
license: "Screenpipe Commercial License (source-available; not OSI)"
license_history: ["MIT (2024-06 → 2026-06)", "Screenpipe Commercial License (2026-06-09-)"]
governance: single-vendor
steward: Mediar, Inc. / Screenpipe (Negentropy Labs, Inc. dba Screenpipe per LICENSE)
backing_orgs: [organizations/mediar]
metrics:
  github_stars: { value: 21796, as_of: 2026-10-03 }
  latest_release: { value: "app-v2.7.84 (2026-10-01)", as_of: 2026-10-03 }
oss_verdict: contested
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: sp-gh
    resource: https://github.com/screenpipe/screenpipe
    title: Screenpipe GitHub repository and LICENSE.md (GitHub API, 2026-10-03)
  - id: sp-license
    resource: https://screenpipe.com/blog/screenpipe-license-update
    title: "Screenpipe blog: An update to screenpipe's license (2026-06-09)"
  - id: sp-mediar
    resource: https://www.mediar.ai/t/mediar-ai-screenpipe
    title: "Mediar: where the screenpipe repo went and why"
  - id: sp-yc
    resource: https://explainx.ai/blog/screenpipe-yc-s26-local-work-memory-agents-july-2026
    title: "ExplainX: screenpipe YC S26 relaunch (July 2026)"
  - id: sp-pb
    resource: https://pitchbook.com/profiles/company/711341-29
    title: "PitchBook: Mediar (aggregator; $2.8M seed 2025)"
---

# Summary
Screenpipe continuously records screen (OCR/accessibility tree) and audio (local Whisper) into SQLite and exposes it to agents via REST and MCP — an open Rewind/Recall alternative; ~22k stars[^sp-gh][^sp-yc]. The repo moved from mediar-ai to its own org as Mediar shifted to Windows automation (Terminator)[^sp-mediar]. On **2026-06-09** it switched from MIT to the source-available "Screenpipe Commercial License": personal/non-commercial/research use free, any commercial production use paid regardless of company size; the blog said "open source on its own is not a business model"[^sp-license]. It then joined YC S26 and relaunched as "local work memory" on 2026-07-14[^sp-yc]. Funding: ~$2.8M seed (2025, aggregator)[^sp-pb]. Verdict: OSS contested (no longer open source); business growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025 | Repo moves from mediar-ai to screenpipe org[^sp-mediar] | OSS | ± |
| W24 | 2025-04 | ~$2.8M seed (aggregator)[^sp-pb] | Business | + |
| W6 | 2026-06-09 | MIT → Screenpipe Commercial License[^sp-license] | OSS/Business | − |
| W3 | 2026-07-14 | YC S26 relaunch as "work memory" for agents[^sp-yc] | Business | + |
| W3 | 2026-10-01 | app-v2.7.84 (very high release cadence)[^sp-gh] | OSS | + |

# OSS successes
- Source remains readable and self-buildable for personal use[^sp-license].
# OSS failures / risks
- No longer OSI open source; contributors' MIT-era code now ships under commercial terms[^sp-license].
# Business successes
- Clear paid licence + app subscription; YC backing[^sp-yc].
# Business failures / risks
- Privacy/regulatory exposure of always-on recording; competes with OS-native Recall.

# By window
## W3
- YC S26 relaunch; rapid app releases[^sp-yc][^sp-gh].
## W6
- Relicence to source-available[^sp-license].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Repo transfer; seed round[^sp-mediar][^sp-pb].

# Lessons
- AI-app startups that began MIT increasingly relicense before raising, not after — the 2026 version of the HashiCorp/Redis pattern at seed stage.

# Related
- [Mediar](/organizations/mediar.md), [Screenpipe relicense event](/events/2026-06-screenpipe-source-available-relicense.md), [Whisper ecosystem](/projects/ai-apps/whisper.md), [Open WebUI](/projects/ai-apps/open-webui.md)

[^sp-gh]: GitHub API and LICENSE.md, screenpipe/screenpipe — https://github.com/screenpipe/screenpipe
[^sp-license]: Screenpipe blog, 2026-06-09 — https://screenpipe.com/blog/screenpipe-license-update
[^sp-mediar]: Mediar — https://www.mediar.ai/t/mediar-ai-screenpipe
[^sp-yc]: ExplainX — https://explainx.ai/blog/screenpipe-yc-s26-local-work-memory-agents-july-2026
[^sp-pb]: PitchBook (aggregator) — https://pitchbook.com/profiles/company/711341-29
