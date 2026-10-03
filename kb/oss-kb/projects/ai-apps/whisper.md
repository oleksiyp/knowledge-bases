---
type: OSS Project
title: Whisper ecosystem (Whisper, whisper.cpp, faster-whisper, WhisperX)
description: "OpenAI's MIT speech-recognition model and its community runtimes (whisper.cpp ~54k, faster-whisper ~26k, WhisperX ~24k stars) remain the default open ASR stack embedded in countless apps — thriving OSS; whisper.cpp now sits under ggml/Hugging Face (being bought by NVIDIA)."
resource: https://github.com/openai/whisper
tags: [ai-apps, speech-recognition, asr, mit, ggml]
domain: ai-apps
license: MIT
license_history: ["MIT (2022-)"]
governance: single-vendor
steward: OpenAI (model); ggml-org / SYSTRAN / community (runtimes)
backing_orgs: [organizations/hugging-face]
metrics:
  whisper_github_stars: { value: 109896, as_of: 2026-10-03 }
  whisper_cpp_github_stars: { value: 54103, as_of: 2026-10-03 }
  faster_whisper_github_stars: { value: 25680, as_of: 2026-10-03 }
  whisperx_github_stars: { value: 24341, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: whisper-gh
    resource: https://github.com/openai/whisper
    title: openai/whisper GitHub repository (GitHub API, 2026-10-03)
  - id: whispercpp-gh
    resource: https://github.com/ggml-org/whisper.cpp
    title: ggml-org/whisper.cpp GitHub repository (GitHub API, 2026-10-03)
  - id: fw-gh
    resource: https://github.com/SYSTRAN/faster-whisper
    title: SYSTRAN/faster-whisper GitHub repository (GitHub API, 2026-10-03)
  - id: wx-gh
    resource: https://github.com/m-bain/whisperX
    title: m-bain/whisperX GitHub repository (GitHub API, 2026-10-03)
  - id: whisper-turbo
    resource: https://github.com/openai/whisper/discussions/2363
    title: "openai/whisper Discussion #2363: turbo model release (Oct 2024)"
  - id: hf-ggml
    resource: https://huggingface.co/blog/ggml-joins-hf
    title: "HF blog: GGML and llama.cpp join HF (2026-02-20)"
  - id: nv-hf
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA blog: NVIDIA to Acquire Hugging Face (2026-09-03)"
---

# Summary
Whisper (MIT, 2022) is still the default open speech-to-text model; OpenAI's last major drop was large-v3-turbo (809M params, ~2–5x faster) in October 2024[^whisper-turbo]. Real-world usage runs mostly through community runtimes: whisper.cpp (ggml, ~54k stars, v1.9.4 Sep 2026)[^whispercpp-gh], faster-whisper (CTranslate2, ~26k)[^fw-gh] and WhisperX (alignment/diarisation, ~24k)[^wx-gh]; together they power apps such as Open WebUI voice, Screenpipe and countless dictation tools. whisper.cpp's home, ggml, joined Hugging Face in Feb 2026[^hf-ggml], which NVIDIA agreed to acquire in Sep 2026[^nv-hf]. Verdict: thriving OSS infrastructure, no direct business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10 | large-v3-turbo released[^whisper-turbo] | OSS | + |
| W9 | 2026-02-20 | ggml (whisper.cpp) joins Hugging Face[^hf-ggml] | Business | ± |
| W3 | 2026-09-11 | whisper.cpp v1.9.4[^whispercpp-gh] | OSS | + |
| W3 | 2026-09-03 | NVIDIA agrees to acquire Hugging Face (ggml's new parent)[^nv-hf] | Business | ± |

# OSS successes
- Permissive licences; runtimes active (all pushed within the last week as of 2026-10-03)[^whispercpp-gh][^fw-gh][^wx-gh].
# OSS failures / risks
- OpenAI's own repo is largely static; newer open ASR (NVIDIA Parakeet/Canary, Microsoft VibeVoice-ASR) compete.
# Business successes
- n/a (OpenAI monetises via hosted gpt-4o-transcribe).
# Business failures / risks
- Runtime stewardship consolidating into big-tech-owned entities.

# By window
## W3
- whisper.cpp v1.9.x; NVIDIA–HF deal[^whispercpp-gh][^nv-hf].
## W6
- No notable events found.
## W9
- ggml joins Hugging Face[^hf-ggml].
## W12
- No notable events found.
## W24
- large-v3-turbo[^whisper-turbo].

# Lessons
- A permissively licensed model plus community ports (C++, CTranslate2) becomes infrastructure even when the originator stops investing.

# Related
- [llama.cpp](/projects/ai-inference/llama-cpp.md), [ggml joins Hugging Face](/events/2026-02-ggml-joins-hugging-face.md), [NVIDIA to acquire Hugging Face](/events/2026-09-nvidia-to-acquire-hugging-face.md), [Open TTS models](/projects/ai-apps/open-tts-models.md), [Screenpipe](/projects/ai-apps/screenpipe.md)

[^whisper-gh]: GitHub API, openai/whisper — https://github.com/openai/whisper
[^whispercpp-gh]: GitHub API, ggml-org/whisper.cpp — https://github.com/ggml-org/whisper.cpp
[^fw-gh]: GitHub API, SYSTRAN/faster-whisper — https://github.com/SYSTRAN/faster-whisper
[^wx-gh]: GitHub API, m-bain/whisperX — https://github.com/m-bain/whisperX
[^whisper-turbo]: openai/whisper discussion #2363 — https://github.com/openai/whisper/discussions/2363
[^hf-ggml]: HF blog, 2026-02-20 — https://huggingface.co/blog/ggml-joins-hf
[^nv-hf]: NVIDIA blog, 2026-09-03 — https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
