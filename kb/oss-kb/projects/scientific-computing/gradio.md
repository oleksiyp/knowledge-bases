---
type: OSS Project
title: Gradio
description: "Hugging Face's Python UI framework for ML demos (~44k stars) and the engine of HF Spaces; shipped security-audited Gradio 5 (Oct 2024), native MCP servers (2025), Svelte-5-based Gradio 6 (Nov 2025) and visual workflows (2026) — now headed into NVIDIA ownership with Hugging Face."
resource: https://github.com/gradio-app/gradio
tags: [ml-demos, data-apps, python, apache-2.0, corporate-owned, hugging-face, mcp]
domain: scientific-computing
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: single-vendor
steward: Hugging Face
backing_orgs: [organizations/hugging-face]
metrics:
  github_stars: { value: 43662, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gr-gh
    resource: https://github.com/gradio-app/gradio
    title: Gradio GitHub repository
    last_modified: 2026-10-02T00:00:00Z
  - id: pypi-gr
    resource: https://pypi.org/project/gradio/
    title: "PyPI: gradio (5.0.0 2024-10-09; 6.0.0 2025-11-21; 6.29.1 2026-10-02)"
  - id: gr5-sec
    resource: https://github.com/huggingface/blog/blob/main/gradio-5-security.md
    title: "Hugging Face blog: Gradio 5 security (Trail of Bits audit)"
    author: org:hugging-face
  - id: gr-mcp
    resource: https://huggingface.co/blog/gradio-mcp
    title: "Hugging Face blog: How to build an MCP server with Gradio"
    author: org:hugging-face
  - id: gr6-mig
    resource: https://gradio.app/main/guides/gradio-6-migration-guide
    title: Gradio 6 migration guide
  - id: gr-html
    resource: https://huggingface.co/blog/gradio-html-one-shot-apps
    title: "Hugging Face blog: One-shot any web app with Gradio's gr.HTML"
  - id: daggr
    resource: https://huggingface.co/blog/daggr
    title: "Hugging Face blog: Introducing Daggr (2026-01-29)"
  - id: gr-workflow
    resource: https://huggingface.co/blog/gradio-workflow-guide
    title: "Hugging Face blog: AI workflows in Gradio — gr.Workflow (2026-08-25)"
  - id: nv-hf
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA blog: NVIDIA to acquire Hugging Face (2026-09-03)"
    author: org:nvidia
---

# Summary
Gradio is the default way to put a UI on an ML model and the runtime behind most Hugging Face Spaces. Gradio 5 (2024-10-09) shipped after a Trail of Bits security audit whose findings (CORS token theft, SSRF, RCE via nginx config, etc.) were fixed pre-release[^pypi-gr][^gr5-sec]; `mcp_server=True` in 2025 turned any Gradio app into an MCP tool server[^gr-mcp]; Gradio 6 (2025-11-21) moved to Svelte 5 and made `gr.HTML` a full custom-component system aimed at LLM "one-shot" app generation[^pypi-gr][^gr6-mig][^gr-html]. In 2026 it expanded into AI workflows (Daggr in Jan, `gr.Workflow` canvas in Aug)[^daggr][^gr-workflow]. NVIDIA's agreed $12.93B acquisition of Hugging Face (2026-09-03) makes Gradio an NVIDIA-owned project once it closes[^nv-hf]. Verdict: OSS thriving; ownership risk rising.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-09 | Gradio 5.0 with Trail of Bits-audited security fixes[^pypi-gr][^gr5-sec] | OSS | + |
| W24 | 2025 (5.3x) | Native MCP server support (`mcp_server=True`)[^gr-mcp] | OSS | + |
| W12 | 2025-11-21 | Gradio 6.0 (Svelte 5, lighter, gr.HTML templates); only 6.x maintained going forward[^pypi-gr][^gr6-mig] | OSS | + |
| W9 | 2026-01-29 | Daggr: code-first visual chaining of Gradio apps/models[^daggr] | OSS | + |
| W3 | 2026-08-25 | gr.Workflow drag-and-drop pipeline canvas[^gr-workflow] | OSS | + |
| W3 | 2026-09-03 | NVIDIA agrees to acquire Hugging Face (Gradio's owner)[^nv-hf] | Business | ± |

# OSS successes
- ~44k stars and very high cadence (≈30 minor releases in 6.x within ten months)[^gr-gh][^pypi-gr].
- Early MCP adoption made Spaces a large catalog of agent tools[^gr-mcp].
- Public third-party audit set a security bar uncommon for UI frameworks[^gr5-sec].

# OSS failures / risks
- Heavy churn: two major versions in ~13 months and a policy of maintaining only 6.x[^gr6-mig].
- Single-vendor control, soon to be NVIDIA's[^nv-hf].

# Business successes
- Gradio drives Hugging Face Spaces engagement; its parent's NVIDIA deal is the largest exit in open-source AI[^nv-hf].

# Business failures / risks
- No standalone revenue; Gradio's future priorities depend on NVIDIA post-close (expected H1 2027 per the NVIDIA announcement)[^nv-hf].

# By window
## W3
- gr.Workflow (Aug 25)[^gr-workflow]; 6.21–6.29 releases[^pypi-gr]; NVIDIA–HF deal (Sept 3)[^nv-hf].
## W6
- 6.13–6.20 releases[^pypi-gr].
## W9
- Daggr launch (Jan 29)[^daggr]; 6.3–6.10[^pypi-gr].
## W12
- Gradio 6.0 (Nov 21, 2025)[^pypi-gr].
## W24
- Gradio 5 + security audit (Oct 2024); MCP support (2025)[^gr5-sec][^gr-mcp].

# Lessons
- Riding the protocol wave early (MCP) can re-position a demo tool as agent infrastructure.
- Corporate-owned OSS inherits its owner's M&A fate.

# Related
- [/organizations/hugging-face.md](/organizations/hugging-face.md), [/events/2026-09-nvidia-to-acquire-hugging-face.md](/events/2026-09-nvidia-to-acquire-hugging-face.md)
- [/projects/scientific-computing/streamlit.md](/projects/scientific-computing/streamlit.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^gr-gh]: https://github.com/gradio-app/gradio
[^pypi-gr]: https://pypi.org/project/gradio/
[^gr5-sec]: https://github.com/huggingface/blog/blob/main/gradio-5-security.md
[^gr-mcp]: https://huggingface.co/blog/gradio-mcp
[^gr6-mig]: https://gradio.app/main/guides/gradio-6-migration-guide
[^gr-html]: https://huggingface.co/blog/gradio-html-one-shot-apps
[^daggr]: https://huggingface.co/blog/daggr
[^gr-workflow]: https://huggingface.co/blog/gradio-workflow-guide
[^nv-hf]: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
