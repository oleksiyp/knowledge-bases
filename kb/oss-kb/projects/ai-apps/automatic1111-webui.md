---
type: OSS Project
title: AUTOMATIC1111 Stable Diffusion WebUI (and Forge)
description: "The most-starred generative-AI UI ever (~165k stars) and its performance fork Forge (~13k) — both effectively dormant since 2024–2025 (A1111 last release Feb 2025, main branch untouched since Jul 2024; Forge last commit Jun 2025), with users migrating to ComfyUI — declining."
resource: https://github.com/AUTOMATIC1111/stable-diffusion-webui
tags: [ai-apps, image-generation, agpl-3.0, dormant, fork]
domain: ai-apps
license: AGPL-3.0
license_history: ["AGPL-3.0 (2022-)"]
governance: community
steward: AUTOMATIC1111 (individual); Forge by lllyasviel
backing_orgs: []
metrics:
  github_stars: { value: 165185, as_of: 2026-10-03 }
  github_forks: { value: 32254, as_of: 2026-10-03 }
  last_release: { value: "v1.10.1 (2025-02-09)", as_of: 2026-10-03 }
  forge_github_stars: { value: 13041, as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: n/a
momentum_by_window: { W3: down, W6: down, W9: down, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: a1111-gh
    resource: https://github.com/AUTOMATIC1111/stable-diffusion-webui
    title: AUTOMATIC1111 GitHub repository (GitHub API, 2026-10-03)
  - id: forge-gh
    resource: https://github.com/lllyasviel/stable-diffusion-webui-forge
    title: Forge GitHub repository (GitHub API, 2026-10-03)
  - id: forge-classic
    resource: https://github.com/Haoming02/sd-webui-forge-classic
    title: "sd-webui-forge-classic (community fork, GitHub API 2026-10-03)"
  - id: reforge
    resource: https://github.com/Panchovix/stable-diffusion-webui-reForge
    title: "stable-diffusion-webui-reForge (community fork)"
  - id: a1111-review
    resource: https://aifoss.dev/blog/automatic1111-review-2026/
    title: "Automatic1111 Review 2026: Should You Still Use It?"
  - id: wiki-a1111
    resource: https://en.wikipedia.org/wiki/Automatic1111
    title: "Wikipedia: Automatic1111"
---

# Summary
AUTOMATIC1111's Stable Diffusion WebUI defined the 2022–2023 local image-generation era and is still the most-starred repo in this domain (~165k stars, ~32k forks)[^a1111-gh]. But the default branch has had no commits since 2024-07-27 and the final tagged release is v1.10.1 (2025-02-09); it never gained native Flux support[^a1111-gh][^a1111-review]. lllyasviel's Forge fork (faster memory backend, Flux support) also went quiet — last commit 2025-06-26[^forge-gh] — leaving community forks (Forge Classic/Neo, reForge) to carry the A1111 UX[^forge-classic][^reforge]. Verdict: declining/dormant; users migrated to ComfyUI and, for simple UX, to fork-of-forks.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-09 | Final A1111 release v1.10.1[^a1111-gh] | OSS | − |
| W24 | 2025-06-26 | Last Forge commit[^forge-gh] | OSS | − |
| W6 | 2026-04-14 | reForge fork's last push[^reforge] | OSS | − |
| W3 | 2026-10 | Forge Classic/Neo community fork still active (~1.8k stars)[^forge-classic] | OSS | + |

# OSS successes
- Enormous historical impact and extension ecosystem[^wiki-a1111].
# OSS failures / risks
- Single-maintainer dormancy without handover; architecture couldn't keep up with new model families[^a1111-review].
# Business successes
- n/a.
# Business failures / risks
- n/a — never commercialised.

# By window
## W3
- No upstream activity; community forks continue[^forge-classic].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Last A1111 release; Forge goes quiet[^a1111-gh][^forge-gh].

# Lessons
- Stars are a lagging indicator: the most-starred AI UI is functionally dead.
- Fork-of-fork chains are how hobbyist communities preserve a beloved UX after maintainers leave.

# Related
- [ComfyUI](/projects/ai-apps/comfyui.md), [Fooocus](/projects/ai-apps/fooocus.md), [InvokeAI](/projects/ai-apps/invokeai.md), [Stable Diffusion](/projects/ai-models/stable-diffusion.md)

[^a1111-gh]: GitHub API, AUTOMATIC1111/stable-diffusion-webui — https://github.com/AUTOMATIC1111/stable-diffusion-webui
[^forge-gh]: GitHub API, lllyasviel/stable-diffusion-webui-forge — https://github.com/lllyasviel/stable-diffusion-webui-forge
[^forge-classic]: GitHub, Haoming02/sd-webui-forge-classic — https://github.com/Haoming02/sd-webui-forge-classic
[^reforge]: GitHub, Panchovix/stable-diffusion-webui-reForge — https://github.com/Panchovix/stable-diffusion-webui-reForge
[^a1111-review]: aifoss.dev review — https://aifoss.dev/blog/automatic1111-review-2026/
[^wiki-a1111]: Wikipedia — https://en.wikipedia.org/wiki/Automatic1111
