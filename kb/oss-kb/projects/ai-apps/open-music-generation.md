---
type: OSS Project
title: Open music generation (ACE-Step, YuE, Stable Audio Open)
description: "Open music models that narrowed the gap to Suno/Udio: YuE (Apache, Jan 2025), ACE-Step (Apache, Apr 2025) and ACE-Step 1.5 (MIT, Jan 2026; full songs in <10s on an RTX 3090) — growing, academic/startup-led, no business yet."
resource: https://github.com/ace-step/ACE-Step-1.5
tags: [ai-apps, music-generation, audio, open-weights]
domain: ai-apps
license: "MIT (ACE-Step 1.5), Apache-2.0 (ACE-Step 1.0, YuE), MIT code (stable-audio-tools)"
license_history: ["ACE-Step 1.0 Apache-2.0 (2025-04)", "ACE-Step 1.5 MIT (2026-01)"]
governance: academic
steward: "ACE Studio + StepFun (ACE-Step); HKUST/M-A-P (YuE); Stability AI (Stable Audio)"
backing_orgs: [organizations/stability-ai]
metrics:
  ace_step_15_github_stars: { value: 12999, as_of: 2026-10-03 }
  ace_step_github_stars: { value: 4875, as_of: 2026-10-03 }
  yue_github_stars: { value: 10741, as_of: 2026-10-03 }
  stable_audio_tools_github_stars: { value: 3872, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: flat, W24: up }
status: emerging
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ace15-gh
    resource: https://github.com/ace-step/ACE-Step-1.5
    title: ace-step/ACE-Step-1.5 GitHub (GitHub API, 2026-10-03)
  - id: ace-gh
    resource: https://github.com/ace-step/ACE-Step
    title: ace-step/ACE-Step GitHub (GitHub API, 2026-10-03)
  - id: ace15-paper
    resource: https://arxiv.org/pdf/2602.00744
    title: "ACE-Step 1.5: Pushing the Boundaries of Open-Source Music Generation (arXiv 2602.00744)"
  - id: ace15-nyu
    resource: https://rits.shanghai.nyu.edu/ai/ace-step-1-5-open-source-music-generation-that-rivals-commercial-ai/
    title: "NYU Shanghai RITS: ACE-Step 1.5 rivals commercial AI"
  - id: yue-gh
    resource: https://github.com/multimodal-art-projection/YuE
    title: YuE GitHub (GitHub API, 2026-10-03)
  - id: sat-gh
    resource: https://github.com/Stability-AI/stable-audio-tools
    title: Stability-AI/stable-audio-tools GitHub (GitHub API, 2026-10-03)
---

# Summary
Open music generation matured in 2025–2026. YuE (Apache-2.0, Jan 2025) brought open lyrics-to-song[^yue-gh]; ACE-Step 1.0 (Apache-2.0, Apr 2025) from ACE Studio and StepFun followed[^ace-gh]; and ACE-Step 1.5 (MIT, released 2026-01-28) generates full songs in under 2s on an A100 / under 10s on an RTX 3090 with <4GB VRAM, and is claimed to rival commercial services[^ace15-nyu][^ace15-paper]. ACE-Step 1.5 reached ~13k stars and is integrated into ComfyUI[^ace15-gh]. Stability's stable-audio-tools remains a smaller reference stack[^sat-gh]. Verdict: growing OSS, no standalone business — commercial leaders (Suno, Udio) remain closed and are entangled in label licensing deals.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01 | YuE released (Apache-2.0)[^yue-gh] | OSS | + |
| W24 | 2025-04-28 | ACE-Step 1.0 repo created (Apache-2.0)[^ace-gh] | OSS | + |
| W9 | 2026-01-28 | ACE-Step 1.5 (MIT), consumer-GPU full songs[^ace15-nyu][^ace15-paper] | OSS | + |
| W3 | 2026-10-01 | ACE-Step 1.5 still actively pushed[^ace15-gh] | OSS | + |

# OSS successes
- Permissive licences and consumer-hardware performance[^ace15-nyu].
# OSS failures / risks
- Training-data provenance (copyrighted music) is an unresolved legal risk.
# Business successes
- n/a.
# Business failures / risks
- No monetisation path disclosed; StepFun/ACE Studio use it for brand/research.

# By window
## W3
- Ongoing ACE-Step 1.5 development[^ace15-gh].
## W6
- No notable events found.
## W9
- ACE-Step 1.5 release[^ace15-nyu].
## W12
- No notable events found.
## W24
- YuE and ACE-Step 1.0 launches[^yue-gh][^ace-gh].

# Lessons
- Chinese labs again supply the permissive open alternative to closed US category leaders.

# Related
- [Open TTS models](/projects/ai-apps/open-tts-models.md), [ComfyUI](/projects/ai-apps/comfyui.md), [Stability AI](/organizations/stability-ai.md)

[^ace15-gh]: GitHub API, ace-step/ACE-Step-1.5 — https://github.com/ace-step/ACE-Step-1.5
[^ace-gh]: GitHub API, ace-step/ACE-Step — https://github.com/ace-step/ACE-Step
[^ace15-paper]: arXiv 2602.00744 — https://arxiv.org/pdf/2602.00744
[^ace15-nyu]: NYU Shanghai RITS — https://rits.shanghai.nyu.edu/ai/ace-step-1-5-open-source-music-generation-that-rivals-commercial-ai/
[^yue-gh]: GitHub API, YuE — https://github.com/multimodal-art-projection/YuE
[^sat-gh]: GitHub API, stable-audio-tools — https://github.com/Stability-AI/stable-audio-tools
