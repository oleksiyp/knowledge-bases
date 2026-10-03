---
type: Trend
title: AI labs and compute owners bought the OSS stack
description: "From Dec 2025 to Sep 2026, AI labs (Anthropic, OpenAI) and compute owners (NVIDIA, Qualcomm, Cloudflare, AWS, Nscale) bought the companies behind key OSS runtimes, toolchains and hubs. Every deal pledged to keep licenses permissive, but control moved."
tags: [m-and-a, ai, consolidation, devtools, inference, cross-domain]
strength: dominant
first_seen: W12
direction_by_window: { W3: up, W6: up, W9: up, W12: up, W24: n/a }
domains: [devtools-languages, ai-inference, ai-models, databases, coss-market]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bun-anthropic
    resource: https://bun.com/blog/bun-joins-anthropic
    title: "Bun is joining Anthropic (2025-12-02)"
  - id: astral-openai
    resource: https://astral.sh/blog/openai
    title: "Astral to join OpenAI (2026-03-19)"
  - id: nvidia-hf
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA to acquire Hugging Face (2026-09-03)"
  - id: duck-aws
    resource: https://duckdb.org/2026/08/26/ducklabs-to-join-aws
    title: "DuckLabs to join AWS (2026-08-26)"
  - id: gv-modular
    resource: https://www.gv.com/news/modular-qualcomm-inference
    title: "GV: Modular and Qualcomm"
---

# Summary

Between December 2025 and September 2026, the companies behind the most-used OSS developer runtimes, toolchains and model hubs were absorbed by AI labs and by hardware or cloud owners:

- Anthropic bought Bun.[^bun-anthropic]
- OpenAI bought Astral (uv, Ruff, ty).[^astral-openai]
- Cloudflare bought VoidZero (Vite).
- Qualcomm bought Modular (Mojo).[^gv-modular]
- AWS bought DuckLabs.[^duck-aws]
- NVIDIA agreed to buy Hugging Face for about $12.9B ($11.9B to holders plus up to $1B in retention awards), the largest COSS acquisition ever. Closing is expected in H1 2027.[^nvidia-hf]

Every deal promised to keep the license MIT or Apache. Most targets had little or no revenue. The buyers were paying for **strategic control of the layer their agents or chips depend on**.

# Deal list

| Date | Acquirer | Target (OSS) | Window | Link |
|---|---|---|---|---|
| 2025-11-17 | Cloudflare | Replicate (Cog) | W12 | [event](/events/2025-11-cloudflare-acquires-replicate.md) |
| 2025-12-01 | Akamai | Fermyon (Spin) | W12 | [event](/events/2025-12-akamai-acquires-fermyon.md) |
| 2025-12-02 | Anthropic | Oven (Bun) | W12 | [event](/events/2025-12-anthropic-acquires-bun.md) |
| 2025-12-24 | NVIDIA | Groq (license plus team, ~$20B) | W12 | [event](/events/2025-12-nvidia-groq-licensing-deal.md) |
| 2026-02-20 | Hugging Face | ggml.ai (llama.cpp) | W9 | [event](/events/2026-02-ggml-joins-hugging-face.md) |
| 2026-03-19 | OpenAI | Astral (uv, Ruff, ty) | W9 | [event](/events/2026-03-openai-acquires-astral.md) |
| 2026-06-04 | Cloudflare | VoidZero (Vite, Rolldown, Oxc) | W6 | [event](/events/2026-06-cloudflare-acquires-voidzero.md) |
| 2026-06-25 | Qualcomm | Modular (Mojo, MAX), ~$3.1B | W6 | [event](/events/2026-06-qualcomm-acquires-modular.md) |
| 2026-07-15 | Anaconda | Kilo Code | W3 | [event](/events/2026-07-anaconda-acquires-kilo-code.md) |
| 2026-07-30 | Nscale | Anyscale (Ray), ~$1.65B | W3 | [event](/events/2026-07-nscale-acquires-anyscale.md) |
| 2026-08-26 | AWS | DuckLabs (DuckDB) | W3 | [event](/events/2026-08-aws-acquires-ducklabs.md) |
| 2026-09-03 | NVIDIA | Hugging Face, ~$12.9B | W3 | [event](/events/2026-09-nvidia-to-acquire-hugging-face.md) |

The pace went from two deals in W12 to five in W3.

# Wider pattern found in pass 2: platforms and chip vendors

The same pattern extends beyond AI labs. **Platforms bought the frameworks and building blocks that drive usage of their services**, and **chip vendors bought open software and hardware communities**:

| Date | Acquirer | Target (OSS) | Link |
|---|---|---|---|
| 2025-04 | Hugging Face | Pollen Robotics (Reachy, LeRobot hardware) | [event](/events/2025-04-hugging-face-acquires-pollen-robotics.md) |
| 2025-06 | Figma | Payload CMS | [event](/events/2025-06-figma-acquires-payload.md) |
| 2025-07 | Vercel | NuxtLabs (Nuxt) | [event](/events/2025-07-vercel-acquires-nuxtlabs.md) |
| 2025-10 | Qualcomm | Arduino | [event](/events/2025-10-qualcomm-acquires-arduino.md) |
| 2025-10 | CoreWeave | marimo | [event](/events/2025-10-coreweave-acquires-marimo.md) |
| 2025-11 | ClickHouse | LibreChat | [event](/events/2025-11-clickhouse-acquires-librechat.md) |
| 2025-12 | Qualcomm | Ventana (RISC-V) | [event](/events/2025-12-qualcomm-acquires-ventana.md) |
| 2026-01 | Cloudflare | Astro | [event](/events/2026-01-cloudflare-acquires-astro.md) |
| 2026-01 | ClickHouse | Langfuse | [event](/events/2026-01-clickhouse-acquires-langfuse.md) |
| 2026-03 | OpenAI | Promptfoo | [event](/events/2026-03-openai-acquires-promptfoo.md) |
| 2026-07 | Vercel | Better Auth | [event](/events/2026-07-vercel-acquires-better-auth.md) |
| 2026-07 | Siemens | Precision Innovations (OpenROAD) | [event](/events/2026-07-siemens-acquires-precision-innovations.md) |
| 2026-09 | Qualcomm | PickNik (MoveIt) | [event](/events/2026-09-qualcomm-to-acquire-picknik.md) |
| 2026-09 | Yardi | Sidero Labs (Talos Linux) | [event](/events/2026-09-yardi-acquires-sidero-labs.md) |

**Qualcomm** is the most acquisitive of these buyers. Its purchases of Arduino, Ventana, Modular and PickNik amount to a full open-source developer funnel, from maker boards to AI compilers to robot planning. **Vercel** (NuxtLabs, Better Auth, Gel) and **Cloudflare** (Replicate, Astro, VoidZero) are buying the JavaScript framework layer.

# Interpretation

- **For the OSS project:** usually a short-term win, because there are more full-time maintainers. The long-term risk is neutrality. Look at what happened after earlier acquisitions in [Acquired OSS often goes quiet](/trends/acquired-oss-goes-quiet.md).
- **For founders:** a strategic sale became the realistic exit for developer tooling. Charging for the tools failed: Vite+ licensing was dropped, pyx was wound down, and Deno laid off staff. See [Deno layoffs](/events/2026-03-deno-layoffs.md).
- **For users:** projects whose IP was in a foundation before the sale (DuckDB, Ray, vLLM) carry less risk. See [Foundations as insurance](/trends/foundations-as-insurance.md).

# Watchlist

- Regulatory review of the NVIDIA–Hugging Face deal.
- Whether uv or Bun moves into a foundation.
- Whether forks appear if a buyer's interests diverge from the community's.

# Related

- [Domain review: devtools](/domains/devtools-languages.md), [AI inference](/domains/ai-inference.md), [COSS market](/domains/coss-market.md)
- [AI-lab dev-tool acquisitions (market study)](/projects/coss-market/ai-lab-devtool-acquisitions.md)

[^bun-anthropic]: Bun blog.
[^astral-openai]: Astral blog.
[^nvidia-hf]: NVIDIA blog.
[^duck-aws]: DuckDB blog.
[^gv-modular]: GV news.
