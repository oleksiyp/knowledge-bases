---
type: Event
title: Microsoft pulls VibeVoice TTS code after misuse
description: "Eleven days after open-sourcing the VibeVoice long-form multi-speaker TTS (2025-08-25), Microsoft disabled the repo's TTS code on 2025-09-05 citing out-of-scope use; weights stayed on Hugging Face."
event_kind: other
date: 2025-09-05
window: W24
impact: negative
projects: [projects/ai-apps/open-tts-models]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: vibevoice-byteiota
    resource: https://byteiota.com/microsoft-vibevoice-the-voice-ai-microsoft-pulled-back/
    title: "byteiota: Microsoft VibeVoice — the voice AI Microsoft pulled back"
  - id: vibevoice-hf
    resource: https://huggingface.co/microsoft/VibeVoice-1.5B/discussions/30
    title: "HF discussion: The github repo is deleted"
  - id: vibevoice-gh
    resource: https://github.com/microsoft/VibeVoice
    title: microsoft/VibeVoice GitHub repository
---

# What happened
Microsoft released VibeVoice (up to 90 minutes, four speakers) on 2025-08-25; on 2025-09-05 it posted that it had found uses "inconsistent with the stated intent" and disabled the repo's TTS code "until we are confident that out-of-scope use is no longer possible"[^vibevoice-byteiota][^vibevoice-hf].

# Why it matters
A rare big-tech retraction of an open model release, showing voice cloning is the modality where responsible-release pressure is strongest.

# Outcome so far
The weights remained downloadable and community mirrors spread; the repo continued with other models (ASR/realtime) and has ~55k stars[^vibevoice-gh][^vibevoice-byteiota].

# Related
- [Open TTS models](/projects/ai-apps/open-tts-models.md), [Coqui TTS](/projects/ai-apps/coqui-tts.md)

[^vibevoice-byteiota]: byteiota — https://byteiota.com/microsoft-vibevoice-the-voice-ai-microsoft-pulled-back/
[^vibevoice-hf]: Hugging Face discussion — https://huggingface.co/microsoft/VibeVoice-1.5B/discussions/30
[^vibevoice-gh]: GitHub — https://github.com/microsoft/VibeVoice
