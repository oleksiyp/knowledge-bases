---
type: OSS Project
title: Coqui TTS
description: "Once-leading open TTS toolkit (~46k stars, XTTS voice cloning) whose company Coqui shut down in Jan 2024; the original repo is frozen since Aug 2024 and lives on via the Idiap fork (coqui-tts on PyPI) — dead upstream, stable fork."
resource: https://github.com/coqui-ai/TTS
tags: [ai-apps, text-to-speech, mpl-2.0, shutdown, fork]
domain: ai-apps
license: MPL-2.0 (code); Coqui Public Model License (XTTS weights, non-commercial)
license_history: ["MPL-2.0 (code, 2021-)", "XTTS weights under CPML (non-commercial)"]
governance: community
steward: Idiap Research Institute (fork)
backing_orgs: [organizations/coqui]
metrics:
  github_stars: { value: 46099, as_of: 2026-10-03 }
  idiap_fork_stars: { value: 2334, as_of: 2026-10-03 }
  idiap_latest_release: { value: "v0.27.5 (2026-01-26)", as_of: 2026-10-03 }
oss_verdict: dead
business_verdict: failed
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: coqui-gh
    resource: https://github.com/coqui-ai/TTS
    title: coqui-ai/TTS GitHub repository (GitHub API, 2026-10-03)
  - id: idiap-gh
    resource: https://github.com/idiap/coqui-ai-TTS
    title: idiap/coqui-ai-TTS fork (GitHub API, 2026-10-03)
  - id: coqui-disc
    resource: https://github.com/coqui-ai/TTS/discussions/4048
    title: "Discussion #4048: Is Coqui no longer maintained?"
  - id: coqui-pq
    resource: https://www.promptquorum.com/power-local-llm/coqui-tts-review
    title: "PromptQuorum: Coqui TTS review 2026 (community-maintained)"
  - id: xtts-license
    resource: https://localaimaster.com/blog/xtts-coqui-commercial-license
    title: "Is XTTS v2 free for commercial use? (CPML explainer)"
---

# Summary
Coqui TTS was the leading open text-to-speech toolkit and XTTS-v2 the go-to open voice-cloning model. Coqui (the company) shut down in early January 2024 — just before this KB's window — and the original repo's last push was 2024-08-16[^coqui-gh][^coqui-disc]. Maintenance moved to the Idiap Research Institute fork, published as `coqui-tts` (v0.27.5, Jan 2026)[^idiap-gh][^coqui-pq]. XTTS weights remain under the non-commercial Coqui Public Model License, which with no company left to sell commercial licences makes them commercially unusable[^xtts-license]. Verdict: upstream dead; business failed; fork stable but small (~2.3k stars).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre-W24) | 2024-01 | Coqui company shuts down[^coqui-pq] | Business | − |
| (pre-W24) | 2024-08-16 | Last push to coqui-ai/TTS[^coqui-gh] | OSS | − |
| W12 | 2025-12-13 | Idiap fork v0.27.3[^idiap-gh] | OSS | + |
| W9 | 2026-01-26 | Idiap fork v0.27.5 (Python 3.10–3.14)[^idiap-gh] | OSS | + |

# OSS successes
- MPL-2.0 code made an institutional fork straightforward[^idiap-gh].
# OSS failures / risks
- Non-commercial model licence orphaned when the licensor died[^xtts-license].
# Business successes
- None.
# Business failures / risks
- Open-core TTS could not compete with ElevenLabs on hosted quality.

# By window
## W3
- No notable events found (fork commits continue)[^idiap-gh].
## W6
- No notable events found.
## W9
- Fork v0.27.5[^idiap-gh].
## W12
- Fork v0.27.3[^idiap-gh].
## W24
- No notable events found (upstream frozen).

# Lessons
- "Non-commercial unless you buy a licence" model terms become a trap when the vendor disappears — permissive successors (Kokoro, Chatterbox) won.

# Related
- [Coqui](/organizations/coqui.md), [Open TTS models](/projects/ai-apps/open-tts-models.md), [Whisper ecosystem](/projects/ai-apps/whisper.md)

[^coqui-gh]: GitHub API, coqui-ai/TTS — https://github.com/coqui-ai/TTS
[^idiap-gh]: GitHub API, idiap/coqui-ai-TTS — https://github.com/idiap/coqui-ai-TTS
[^coqui-disc]: Discussion #4048 — https://github.com/coqui-ai/TTS/discussions/4048
[^coqui-pq]: PromptQuorum — https://www.promptquorum.com/power-local-llm/coqui-tts-review
[^xtts-license]: LocalAIMaster — https://localaimaster.com/blog/xtts-coqui-commercial-license
