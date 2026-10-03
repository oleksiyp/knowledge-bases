---
type: OSS Project
title: Gradio (and Hugging Face Spaces)
description: "Hugging Face's Apache-2.0 Python UI library for ML demos (~44k stars), the default front end of HF Spaces and many local AI apps; Gradio 6 (Nov 2025) rebuilt it on Svelte 5 — stable OSS whose owner is being acquired by NVIDIA."
resource: https://github.com/gradio-app/gradio
tags: [ai-apps, ui-framework, python, apache-2.0, hugging-face]
domain: ai-apps
license: Apache-2.0
license_history: ["Apache-2.0 (2018-)"]
governance: single-vendor
steward: Hugging Face
backing_orgs: [organizations/hugging-face]
metrics:
  github_stars: { value: 43662, as_of: 2026-10-03 }
  latest_release: { value: "gradio 6.29.1 (2026-10-02)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: acquired
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gradio-gh
    resource: https://github.com/gradio-app/gradio
    title: Gradio GitHub repository (GitHub API, 2026-10-03)
  - id: gradio6
    resource: https://alternativeto.net/news/2025/11/gradio-6-released-with-faster-performance-for-creating-machine-learning-apps-in-python/
    title: "AlternativeTo: Gradio 6 released (2025-11-26)"
  - id: nv-hf
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA blog: NVIDIA to Acquire Hugging Face (2026-09-03)"
---

# Summary
Gradio is the Python UI layer behind most Hugging Face Spaces and many local AI tools (e.g., TextGen, early A1111-style apps); ~44k stars with continuous releases (6.29.1 on 2026-10-02)[^gradio-gh]. Gradio 6 (2025-11-26) switched to Svelte 5, added inline HTML/JS components and made 5.x maintenance-only[^gradio6]. Its owner Hugging Face agreed in Sep 2026 to be acquired by NVIDIA[^nv-hf]. Verdict: OSS stable; business attached to HF (acquired).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-11-26 | Gradio 6 (Svelte 5, breaking API cleanup)[^gradio6] | OSS | + |
| W3 | 2026-09-03 | NVIDIA agrees to acquire Hugging Face[^nv-hf] | Business | ± |
| W3 | 2026-10-02 | gradio 6.29.1[^gradio-gh] | OSS | + |

# OSS successes
- Ubiquity in ML demos; steady releases[^gradio-gh].
# OSS failures / risks
- End-user apps increasingly built on React/Next.js rather than Gradio; breaking changes in 6.x[^gradio6].
# Business successes
- Drives HF Spaces usage.
# Business failures / risks
- Future priorities under NVIDIA ownership uncertain[^nv-hf].

# By window
## W3
- NVIDIA–HF deal; 6.2x releases[^nv-hf][^gradio-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- Gradio 6[^gradio6].
## W24
- No notable events found.

# Lessons
- Demo frameworks win researchers but lose production consumer apps to full web stacks.

# Related
- [Hugging Face](/organizations/hugging-face.md), [Streamlit](/projects/ai-apps/streamlit.md), [Chainlit](/projects/ai-apps/chainlit.md), [Transformers](/projects/ai-inference/transformers.md), [NVIDIA to acquire HF](/events/2026-09-nvidia-to-acquire-hugging-face.md)

[^gradio-gh]: GitHub API, gradio-app/gradio — https://github.com/gradio-app/gradio
[^gradio6]: AlternativeTo, 2025-11-26 — https://alternativeto.net/news/2025/11/gradio-6-released-with-faster-performance-for-creating-machine-learning-apps-in-python/
[^nv-hf]: NVIDIA blog, 2026-09-03 — https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
