---
type: Market Study
title: "AI labs acquiring open source developer tools"
description: "2025-2026 trend in which AI labs and AI-coding companies bought the OSS runtimes and toolchains their agents depend on — Anthropic–Bun, OpenAI–Astral, Anthropic–Stainless, Cursor–Continue — keeping licenses permissive but moving control into AI-lab perimeters."
resource: https://bun.com/blog/bun-joins-anthropic
tags: [coss, acquisitions, ai-labs, developer-tools, acqui-hire, market-study]
domain: coss-market
momentum_by_window: { W3: flat, W6: up, W9: up, W12: up, W24: n/a }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T18:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T18:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bun-anthropic
    resource: https://bun.com/blog/bun-joins-anthropic
    title: "Bun is joining Anthropic (2025-12-02)"
  - id: sw-bun
    resource: https://simonwillison.net/2025/Dec/2/anthropic-acquires-bun/
    title: "Simon Willison: Anthropic acquires Bun"
  - id: astral-openai
    resource: https://astral.sh/blog/openai
    title: "Astral to join OpenAI (2026-03-19)"
  - id: tns-astral
    resource: "https://thenewstack.io/openai-astral-acquisition/"
    title: "The New Stack: OpenAI acquires Astral to bring open source Python tools to Codex (2026-03)"
  - id: tc-stainless
    resource: "https://techcrunch.com/2026/05/18/anthropic-has-acquired-the-dev-tools-startup-used-by-openai-google-and-cloudflare/"
    title: "TechCrunch: Anthropic has acquired the dev tools startup used by OpenAI, Google, and Cloudflare (2026-05-18; >$300M per The Information)"
  - id: tns-continue
    resource: "https://thenewstack.io/cursor-acquires-continue-coding/"
    title: "The New Stack: Cursor quietly acquires Continue, an open-source alternative to GitHub Copilot (June 2026)"
  - id: cb-h1-2026
    resource: https://news.crunchbase.com/venture/global-startup-exits-ipo-ma-soar-ai-q2-h1-2026/
    title: "Crunchbase: SpaceX acquired Anysphere (Cursor) for $60B"
  - id: tailwind-shopify
    resource: https://tailwindcss.com/blog/tailwind-is-joining-shopify
    title: "Tailwind Labs is joining Shopify"
  - id: nvidia-hf
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA to acquire Hugging Face"
---

# Summary

A distinctive 2025–26 pattern: **AI labs bought the open source developer tools sitting under their coding agents.** Anthropic acquired **Bun** (Dec 2, 2025) because Claude Code ships as a Bun executable; Bun had raised $26M and had $0 revenue, and stays MIT[^bun-anthropic][^sw-bun]. OpenAI agreed to acquire **Astral** (uv, Ruff, ty — "hundreds of millions of downloads per month") on Mar 19, 2026 to join the Codex team, pledging continued open development[^astral-openai][^tns-astral]. Anthropic bought **Stainless** (SDK generator used by OpenAI, Google and Cloudflare; >$300M per The Information) on 2026-05-18 and wound down its hosted products[^tc-stainless], and Cursor — itself being acquired by SpaceX for $60B[^cb-h1-2026] — bought the Apache-2.0 assistant **Continue** in June 2026, discontinuing its hosted service (users had until 2026-07-15 to export)[^tns-continue]. Bun and Astral are not classic acqui-hires — the projects keep permissive licenses and public repos, though roadmaps now serve a single AI vendor — whereas Continue and Stainless show the other outcome: the hosted product is shut down and only the code (or customers' generated SDKs) survives.

# Deals

| Date | Acquirer | Target | OSS assets | Terms | Commitments |
|---|---|---|---|---|---|
| 2025-12-02 | Anthropic | Bun (Oven) | Bun runtime (MIT) | undisclosed; Bun had $26M raised, $0 revenue, 7.2M monthly downloads | stays MIT, same team, public GitHub[^bun-anthropic] |
| 2026-03-19 | OpenAI | Astral | uv, Ruff, ty (MIT/Apache) | undisclosed | "continue supporting our open source tools"[^astral-openai] |
| 2026-05-18 | Anthropic | Stainless | SDK generator (commercial) | >$300M (The Information) | hosted SDK generator wound down; customers keep generated SDKs[^tc-stainless] |
| ~2026-06-16 | Cursor (Anysphere) | Continue | Continue (Apache-2.0, ~34k GitHub stars) | undisclosed | product discontinued; code remains forkable[^tns-continue] |

Adjacent: Nvidia–Hugging Face (~$12.9B), where a hardware/AI platform buys the neutral model hub[^nvidia-hf]; Shopify–Tailwind Labs, where a platform company adopts a framework its own frontend depends on[^tailwind-shopify].

# Analysis
- **Supply-chain capture**: competing labs now depend on tools owned by rivals (OpenAI and Google used Stainless; Python developers on every AI platform use uv). Expect forks or foundation moves if neutrality erodes.
- **Exit route for unmonetized OSS**: venture-backed OSS tools without a business (Bun) found a strategic buyer rather than a revenue model.
- **Signal for founders**: the most valuable OSS dev tools are those in the hot path of coding agents (runtimes, package managers, linters, SDK generators).

# By window
## W3
- No new AI-lab OSS tool acquisition found; Nvidia–HF is the adjacent mega-deal[^nvidia-hf].
## W6
- Anthropic–Stainless; Cursor–Continue[^tc-stainless][^tns-continue].
## W9
- OpenAI–Astral[^astral-openai].
## W12
- Anthropic–Bun[^bun-anthropic].
## W24
- No notable events found for this specific pattern (it starts in late 2025).

# Lessons
- Permissive licenses make acquisitions reversible by the community (forkable) — which is why acquirers pledge openness.
- Watch governance: foundation donation (or not) of uv/Bun is the key test of neutrality.

# Related
- [COSS M&A](/projects/coss-market/coss-ma-2024-2026.md), [Astral](/organizations/astral.md), [/events/2025-12-anthropic-acquires-bun.md](/events/2025-12-anthropic-acquires-bun.md), [/events/2026-03-openai-acquires-astral.md](/events/2026-03-openai-acquires-astral.md)

[^bun-anthropic]: Bun blog, 2025-12-02.
[^sw-bun]: Simon Willison, 2025-12-02.
[^astral-openai]: Astral blog, 2026-03-19.
[^tns-astral]: The New Stack: OpenAI acquires Astral to bring open source Python tools to Codex (2026-03).
[^tc-stainless]: TechCrunch: Anthropic has acquired the dev tools startup used by OpenAI, Google, and Cloudflare (2026-05-18; >$300M per The Information).
[^tns-continue]: The New Stack: Cursor quietly acquires Continue, an open-source alternative to GitHub Copilot (June 2026).
[^cb-h1-2026]: Crunchbase News, July 2026.
[^tailwind-shopify]: Tailwind blog, 2026-09-09.
[^nvidia-hf]: NVIDIA blog, 2026-09-03.
