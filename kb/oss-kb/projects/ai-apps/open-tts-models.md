---
type: OSS Project
title: Open TTS models (Kokoro, Chatterbox, F5-TTS, Sesame CSM, Dia, Bark, VibeVoice)
description: "The post-Coqui wave of open text-to-speech models: tiny Apache Kokoro, MIT Chatterbox from Resemble AI (1.7M monthly HF downloads), non-commercial-weights F5-TTS, Sesame's CSM-1B (company then raised $250M), and Microsoft's VibeVoice — pulled 11 days after release over misuse. Growing but fragmented, with deepfake risk driving retractions."
resource: https://github.com/resemble-ai/chatterbox
tags: [ai-apps, text-to-speech, voice-cloning, open-weights, deepfakes]
domain: ai-apps
license: "Mixed: Apache-2.0 (Kokoro, CSM, Dia), MIT (Chatterbox, Bark, VibeVoice code), MIT code + CC-BY-NC weights (F5-TTS)"
license_history: ["Varies per model; VibeVoice TTS code removed by Microsoft 2025-09-05"]
governance: single-vendor
steward: "Various: hexgrad (individual), Resemble AI, SWivid (academic), Sesame, Nari Labs, Suno, Microsoft"
backing_orgs: []
metrics:
  chatterbox_github_stars: { value: 26657, as_of: 2026-10-03 }
  vibevoice_github_stars: { value: 54606, as_of: 2026-10-03 }
  bark_github_stars: { value: 39273, as_of: 2026-10-03 }
  dia_github_stars: { value: 19396, as_of: 2026-10-03 }
  f5tts_github_stars: { value: 15326, as_of: 2026-10-03 }
  csm_github_stars: { value: 14729, as_of: 2026-10-03 }
  kokoro_github_stars: { value: 9128, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: chatterbox-gh
    resource: https://github.com/resemble-ai/chatterbox
    title: resemble-ai/chatterbox GitHub (GitHub API, 2026-10-03)
  - id: chatterbox-hf
    resource: https://huggingface.co/ResembleAI/chatterbox
    title: "ResembleAI/chatterbox on Hugging Face (monthly downloads)"
  - id: decoder-turbo
    resource: https://the-decoder.com/resemble-ai-drops-chatterbox-turbo-an-open-source-text-to-speech-model-that-clones-voices-in-five-seconds/
    title: "The Decoder: Resemble AI drops Chatterbox Turbo"
  - id: kokoro-gh
    resource: https://github.com/hexgrad/kokoro
    title: hexgrad/kokoro GitHub (GitHub API, 2026-10-03)
  - id: kokoro-overview
    resource: https://unfoldai.substack.com/p/kokoro-82m-overview
    title: "UnfoldAI: Kokoro-82M overview"
  - id: f5-gh
    resource: https://github.com/swivid/f5-tts
    title: "SWivid/F5-TTS GitHub (code MIT, weights CC-BY-NC)"
  - id: decoder-csm
    resource: https://the-decoder.com/sesame-releases-csm-1b-ai-voice-generator-as-open-source/
    title: "The Decoder: Sesame releases CSM-1B as open source (Mar 2025)"
  - id: tc-sesame
    resource: https://techcrunch.com/2025/10/21/sesame-the-conversational-ai-startup-from-oculus-founders-raises-250m-and-launches-beta/
    title: "TechCrunch: Sesame raises $250M (2025-10-21)"
  - id: dia-gh
    resource: https://github.com/nari-labs/dia
    title: nari-labs/dia GitHub (GitHub API, 2026-10-03)
  - id: bark-gh
    resource: https://github.com/suno-ai/bark
    title: suno-ai/bark GitHub (GitHub API, 2026-10-03)
  - id: vibevoice-byteiota
    resource: https://byteiota.com/microsoft-vibevoice-the-voice-ai-microsoft-pulled-back/
    title: "byteiota: Microsoft VibeVoice — the voice AI Microsoft pulled back"
  - id: vibevoice-hf
    resource: https://huggingface.co/microsoft/VibeVoice-1.5B/discussions/30
    title: "HF discussion: VibeVoice GitHub repo is deleted"
  - id: vibevoice-gh
    resource: https://github.com/microsoft/VibeVoice
    title: microsoft/VibeVoice GitHub (GitHub API, 2026-10-03)
---

# Summary
After Coqui's collapse, open TTS fragmented into single-model releases. **Kokoro-82M** (Apache-2.0, Dec 2024) showed an 82M-param model could top TTS arenas[^kokoro-overview], though its repo has been idle since Aug 2025[^kokoro-gh]. **Chatterbox** (MIT, Resemble AI, Apr 2025; Turbo later) became the most-downloaded open voice-cloning model (~1.69M monthly HF downloads) and doubles as Resemble's lead-gen funnel[^chatterbox-gh][^chatterbox-hf][^decoder-turbo]. **F5-TTS** code is MIT but weights are CC-BY-NC due to its Emilia training data[^f5-gh]. **Sesame CSM-1B** (Apache-2.0, Mar 2025) preceded Sesame's $250M Series B (Oct 2025) — the open model as marketing for a closed product[^decoder-csm][^tc-sesame]. **Dia** (Nari Labs) and **Bark** (Suno) went quiet after their launches (last pushes Nov 2025 and Aug 2024)[^dia-gh][^bark-gh]. **Microsoft VibeVoice** (Aug 25, 2025) had its TTS code removed on Sep 5, 2025 after misuse, though weights stayed on HF and the repo later pivoted to ASR/realtime models[^vibevoice-byteiota][^vibevoice-hf][^vibevoice-gh]. Verdict: OSS growing in capability but fragmented, with permissive licensing winning and deepfake misuse driving retractions.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-25 | Kokoro v0.19 weights released (Apache-2.0)[^kokoro-overview] | OSS | + |
| W24 | 2025-03 | Sesame open-sources CSM-1B[^decoder-csm] | OSS | + |
| W24 | 2025-04 | Chatterbox (MIT) and Dia released[^chatterbox-gh][^dia-gh] | OSS | + |
| W24 | 2025-09-05 | Microsoft removes VibeVoice TTS code over misuse[^vibevoice-byteiota] | OSS | − |
| W12 | 2025-10-21 | Sesame raises $250M Series B (Sequoia, Spark)[^tc-sesame] | Business | + |
| W12 | 2025-11/12 | Chatterbox Turbo (350M, MIT)[^decoder-turbo] | OSS | + |
| W3 | 2026-07-21 | Chatterbox last push; Kokoro idle since 2025-08[^chatterbox-gh][^kokoro-gh] | OSS | ± |

# OSS successes
- Permissively licensed small models (Kokoro, Chatterbox) displaced XTTS[^kokoro-overview][^chatterbox-hf].
# OSS failures / risks
- Many projects are one-shot drops with no maintenance (Bark, Dia, Kokoro repo)[^bark-gh][^dia-gh][^kokoro-gh].
- Voice-cloning misuse triggered takedowns (VibeVoice)[^vibevoice-byteiota]; non-commercial weights (F5) limit products[^f5-gh].
# Business successes
- Open model → hosted API/enterprise funnel (Resemble, Sesame)[^decoder-turbo][^tc-sesame].
# Business failures / risks
- The open model rarely is the business; the best voices stay closed.

# By window
## W3
- Maintenance lull; no major new open TTS release verified in this window.
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- Sesame $250M; Chatterbox Turbo[^tc-sesame][^decoder-turbo].
## W24
- Kokoro, CSM, Chatterbox, Dia launches; VibeVoice retraction[^kokoro-overview][^decoder-csm][^vibevoice-byteiota].

# Lessons
- In voice, permissive licences + small size beat raw quality for adoption.
- Responsible-release pressure is stronger for voice cloning than for text or images.

# Related
- [Coqui TTS](/projects/ai-apps/coqui-tts.md), [Whisper ecosystem](/projects/ai-apps/whisper.md), [Open music generation](/projects/ai-apps/open-music-generation.md), [VibeVoice pulled](/events/2025-09-microsoft-vibevoice-pulled.md)

[^chatterbox-gh]: GitHub API, resemble-ai/chatterbox — https://github.com/resemble-ai/chatterbox
[^chatterbox-hf]: Hugging Face — https://huggingface.co/ResembleAI/chatterbox
[^decoder-turbo]: The Decoder — https://the-decoder.com/resemble-ai-drops-chatterbox-turbo-an-open-source-text-to-speech-model-that-clones-voices-in-five-seconds/
[^kokoro-gh]: GitHub API, hexgrad/kokoro — https://github.com/hexgrad/kokoro
[^kokoro-overview]: UnfoldAI — https://unfoldai.substack.com/p/kokoro-82m-overview
[^f5-gh]: GitHub, SWivid/F5-TTS — https://github.com/swivid/f5-tts
[^decoder-csm]: The Decoder — https://the-decoder.com/sesame-releases-csm-1b-ai-voice-generator-as-open-source/
[^tc-sesame]: TechCrunch, 2025-10-21 — https://techcrunch.com/2025/10/21/sesame-the-conversational-ai-startup-from-oculus-founders-raises-250m-and-launches-beta/
[^dia-gh]: GitHub API, nari-labs/dia — https://github.com/nari-labs/dia
[^bark-gh]: GitHub API, suno-ai/bark — https://github.com/suno-ai/bark
[^vibevoice-byteiota]: byteiota — https://byteiota.com/microsoft-vibevoice-the-voice-ai-microsoft-pulled-back/
[^vibevoice-hf]: HF discussion — https://huggingface.co/microsoft/VibeVoice-1.5B/discussions/30
[^vibevoice-gh]: GitHub API, microsoft/VibeVoice — https://github.com/microsoft/VibeVoice
