---
type: Trend
title: "AI hype-cycle churn: stars do not predict survival"
description: "Many of the most-starred AI OSS projects of 2023–2025 were quietly abandoned, archived or pivoted within 12–24 months: AUTOMATIC1111, GPT4All, Fooocus, OpenManus, AutoGPT, Aider, Void, Roo Code, h2oGPT. Their star counts kept climbing long after development stopped. The survivors had a paid cloud, a foundation, or lab backing."
tags: [ai, abandonment, stars, maintainers, ai-apps, ai-agents, cross-domain]
strength: strong
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
domains: [ai-apps, ai-agents, ai-inference, devtools-languages]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: a1111-gh
    resource: https://github.com/AUTOMATIC1111/stable-diffusion-webui
    title: AUTOMATIC1111 stable-diffusion-webui repository (GitHub API, 2026-10-03)
  - id: g4a-gh
    resource: https://github.com/nomic-ai/gpt4all
    title: GPT4All repository (GitHub API, 2026-10-03)
  - id: aider-gh
    resource: https://github.com/Aider-AI/aider
    title: Aider repository activity
  - id: openmanus-gh
    resource: https://github.com/FoundationAgents/OpenManus
    title: OpenManus repository
  - id: gnw-comfy
    resource: https://www.globenewswire.com/news-release/2026/04/24/3281014/0/en/comfyui-raises-30m-at-500m-valuation-to-scale-open-source-ai-for-creative-production.html
    title: "ComfyUI raises $30M at $500M valuation (2026-04-24)"
---

# Summary

GitHub stars measure attention at launch, not whether a project is maintained. Across the AI domains, a large group of the most-starred 2023–2025 projects stopped meaningful development while their star counts kept rising:

- **AUTOMATIC1111**, with about 165k stars, had its last release in Feb 2025.[^a1111-gh]
- **GPT4All** had its last release in Feb 2025 and its last commit in May 2025.[^g4a-gh]
- **Aider** has made no commits since May 2026.[^aider-gh]
- **OpenManus** has made no releases since Apr 2025.[^openmanus-gh]

Meanwhile, projects with a revenue engine or an institutional home kept shipping. ComfyUI, with Comfy Cloud and its API, raised $30M at a $500M valuation.[^gnw-comfy]

# Evidence

| Project | Peak attention | What happened | Window | Link |
|---|---|---|---|---|
| AUTOMATIC1111 / Forge | ~165k stars | Dormant; final release Feb 2025 | W24 | [A1111](/projects/ai-apps/automatic1111-webui.md) |
| Fooocus | Very high | Frozen, bug fixes only | W24 | [Fooocus](/projects/ai-apps/fooocus.md) |
| GPT4All | Very high | Silently abandoned | W24 | [GPT4All](/projects/ai-apps/gpt4all.md) |
| OpenManus | Viral spike in 2025 | No releases since Apr 2025 | W24 | [OpenManus](/projects/ai-agents/openmanus.md) |
| AutoGPT | Most-starred agent of 2023 | Platform still in beta under a restrictive license | — | [AutoGPT](/projects/ai-agents/autogpt.md) |
| Aider | Pioneer coding agent | Stalled solo project | W6 | [Aider](/projects/ai-agents/aider.md) |
| Void | VC-backed VS Code fork | Deprecated and archived | W6 | [Void](/projects/ai-agents/void-editor.md) |
| Roo Code | 24k stars | Shut down to pivot to a cloud product | W6 | [Roo Code](/events/2026-04-roo-code-shutdown.md) |
| Coqui TTS | Leading open TTS | Company shut down | earlier | [Coqui TTS](/projects/ai-apps/coqui-tts.md) |
| Khoj Cloud, Quivr | Popular "second brain" apps | Cloud sunset; pivot away from OSS | W6, W24 | [Khoj Cloud sunset](/events/2026-04-khoj-cloud-sunset.md), [Quivr](/events/2025-02-quivr-pivots-away-from-oss.md) |
| TGI | HF's serving engine | Archived | W9 | [TGI](/events/2025-12-tgi-maintenance-mode.md) |

# Why projects survived or died

- **Survivors** had one of three things:
  - A paid cloud or API: ComfyUI, Ollama, n8n, Dify, Open WebUI (with branding terms).
  - A foundation: vLLM, MCP, OpenClaw.
  - Lab or hyperscaler backing: Codex CLI, Gemini CLI.
- **Casualties** were typically one of four kinds:
  - Solo or hobby projects facing subsidized lab tools (Aider, A1111).
  - Thin wrappers that frontier labs absorbed as features ("second brain" apps, chat UIs).
  - Projects whose model category moved on (SD1.5-era UIs once FLUX and video arrived).
  - IDE forks displaced by terminal and cloud agents.

# Implications

- When doing due diligence, look at the last release, commit velocity over the last 90 days, and who funds the maintainers. Do not rely on star totals.
- Expect more silent abandonment among 2024–2025 agent and RAG apps as lab products absorb their features.

# Related

- [The maintainer cliff](/trends/maintainer-cliff-and-ai-burden.md), [Acquired OSS often goes quiet](/trends/acquired-oss-goes-quiet.md)
- [Domain review: AI apps](/domains/ai-apps.md), [AI agents](/domains/ai-agents.md)

[^a1111-gh]: GitHub.
[^g4a-gh]: GitHub.
[^aider-gh]: GitHub.
[^openmanus-gh]: GitHub.
[^gnw-comfy]: GlobeNewswire.
