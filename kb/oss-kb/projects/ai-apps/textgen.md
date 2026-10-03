---
type: OSS Project
title: TextGen (text-generation-webui)
description: "oobabooga's long-running AGPL Gradio web UI for local LLMs (~48k stars), renamed TextGen in April 2026 with a native desktop app — stable single-maintainer project."
resource: https://github.com/oobabooga/textgen
tags: [ai-apps, local-ai, gradio, agpl-3.0, single-maintainer]
domain: ai-apps
license: AGPL-3.0
license_history: ["AGPL-3.0 (2022-)"]
governance: community
steward: oobabooga (individual)
backing_orgs: []
metrics:
  github_stars: { value: 47724, as_of: 2026-10-03 }
  latest_release: { value: "v4.9 (2026-05-20)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tg-gh
    resource: https://github.com/oobabooga/textgen
    title: TextGen GitHub repository (GitHub API, 2026-10-03; redirected from oobabooga/text-generation-webui)
  - id: tg-rename
    resource: https://localaimaster.com/blog/text-generation-webui-guide
    title: "LocalAIMaster: text-generation-webui guide (now TextGen)"
  - id: tg-pq
    resource: https://www.promptquorum.com/local-llms/text-generation-webui-review
    title: "PromptQuorum: text-generation-webui (TextGen) 2026 review"
---

# Summary
TextGen (formerly text-generation-webui, "oobabooga") was the power-user local LLM UI of 2023 and still has ~48k stars[^tg-gh]. In April 2026 (v4.5.x) it was renamed TextGen, moved repo (old URLs redirect) and shipped a native desktop app[^tg-rename][^tg-pq]. Releases continued to v4.9 (2026-05-20), with commits into August 2026[^tg-gh]. Verdict: stable single-maintainer project overshadowed by Ollama/Open WebUI.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026-04 | Renamed TextGen, new repo, desktop app[^tg-rename][^tg-pq] | OSS | + |
| W6 | 2026-05-20 | v4.9[^tg-gh] | OSS | + |

# OSS successes
- Longevity; supports many backends (llama.cpp, ExLlama, Transformers).
# OSS failures / risks
- Bus factor of one; no release since May 2026[^tg-gh].
# Business successes
- n/a.
# Business failures / risks
- n/a.

# By window
## W3
- No release; commits continue[^tg-gh].
## W6
- Rename + desktop app; v4.9[^tg-rename][^tg-gh].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- Gradio-based "everything UIs" lost mainstream users to opinionated, daemon-plus-UI stacks (Ollama + Open WebUI).

# Related
- [SillyTavern](/projects/ai-apps/sillytavern.md), [Gradio](/projects/ai-apps/gradio.md), [ExLlama](/projects/ai-inference/exllama.md)

[^tg-gh]: GitHub API, oobabooga/textgen — https://github.com/oobabooga/textgen
[^tg-rename]: LocalAIMaster — https://localaimaster.com/blog/text-generation-webui-guide
[^tg-pq]: PromptQuorum — https://www.promptquorum.com/local-llms/text-generation-webui-review
