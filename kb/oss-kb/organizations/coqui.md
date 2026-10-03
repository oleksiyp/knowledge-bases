---
type: Organization
title: Coqui
description: "Open speech-AI startup (Coqui TTS, XTTS) that shut down in early January 2024; its MPL code survives via the Idiap fork but its non-commercial model licence was orphaned — failed."
resource: https://github.com/coqui-ai
tags: [commercial-open-source, ai-apps, text-to-speech, shutdown]
org_kind: coss-startup
hq: undisclosed
funding: { total_usd: "undisclosed", last_round: "undisclosed", last_round_date: null, valuation_usd: "n/a" }
business_verdict: failed
projects: [projects/ai-apps/coqui-tts]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: coqui-pq
    resource: https://www.promptquorum.com/power-local-llm/coqui-tts-review
    title: "PromptQuorum: Coqui TTS review 2026"
  - id: coqui-disc
    resource: https://github.com/coqui-ai/TTS/discussions/4048
    title: "Discussion #4048: Is Coqui no longer maintained?"
  - id: idiap-gh
    resource: https://github.com/idiap/coqui-ai-TTS
    title: Idiap fork of Coqui TTS
---

# Summary
Coqui commercialised Coqui TTS/XTTS through Coqui Studio and an API, then shut down at the start of January 2024[^coqui-pq][^coqui-disc]. The Idiap Research Institute maintains the code as `coqui-tts`[^idiap-gh]. Shutdown predates this KB's W24 window but shapes the 2024–2026 open-TTS landscape.

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| (pre-W24) | 2024-01 | Company shuts down[^coqui-pq] | − |

# Monetization model
Formerly: hosted voice studio/API and commercial licences for XTTS weights.

# Successes
- Seeded the open-TTS ecosystem; code continued via fork[^idiap-gh].

# Failures / risks
- Could not compete with ElevenLabs; non-commercial model licence left without a licensor.

# Related
- [Coqui TTS](/projects/ai-apps/coqui-tts.md), [Open TTS models](/projects/ai-apps/open-tts-models.md)

[^coqui-pq]: PromptQuorum — https://www.promptquorum.com/power-local-llm/coqui-tts-review
[^coqui-disc]: GitHub discussion #4048 — https://github.com/coqui-ai/TTS/discussions/4048
[^idiap-gh]: GitHub — https://github.com/idiap/coqui-ai-TTS
