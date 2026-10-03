---
type: Executive Summary
title: "Open Source Successes & Failures, Oct 2024 – Oct 2026: Executive Summary"
description: "Synthesis of 435 OSS projects, 175 organizations and 247 events across 15 domains, in two research passes (pass 2 verified pass 1 against primary sources and added 4 domains). AI agents became OSS's biggest customer. AI labs, platforms and chip vendors bought the stack. Foundation-governed projects survived while single-vendor ones were closed, sunset or decayed. China took the open-weight lead."
tags: [executive-summary, synthesis, trends, oss, coss]
as_of: 2026-10-03
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T18:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nvidia-hf
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA to acquire Hugging Face (2026-09-03)"
  - id: supabase-f
    resource: https://supabase.com/blog/supabase-series-f
    title: "Supabase Series F (2026-06-04)"
  - id: atom-report
    resource: https://arxiv.org/html/2604.07190v1
    title: "The ATOM Report: Measuring the Open Language Model Ecosystem"
  - id: lf-coss-2025
    resource: https://www.linuxfoundation.org/press/linux-foundation-cossa-and-serena-report-shows-venture-investment-in-open-source-outperforms-proprietary-counterparts-and-benefits-communities
    title: "LF/COSSA/Serena: State of Commercial Open Source 2025"
  - id: redmonk-valkey
    resource: https://redmonk.com/sogrady/2026/04/06/valkey-at-two/
    title: "RedMonk: Two Years of Valkey"
  - id: crdb-private
    resource: https://www.cockroachlabs.com/blog/source-code-protection/
    title: "Cockroach Labs: Protecting source code in the age of AI"
  - id: vulncheck-glasswing
    resource: https://www.vulncheck.com/blog/anthropic-glasswing-receipts
    title: "VulnCheck: The Anthropic Glasswing receipts (2026-09-08)"
  - id: kb-stats
    resource: /references/methodology.md
    title: "This bundle: frontmatter aggregates over projects/**/*.md (computed 2026-10-03, after pass 2)"
---

# Bottom line

1. **AI agents became open source's biggest customer, and the money followed.** The steepest business wins went to OSS in the path of code-generating agents:
   - Supabase went from $2B to $10.5B in about 14 months, and agents now create about 70% of new databases.[^supabase-f]
   - Others: Temporal at $12.55B, Databricks at $190B ($7B run-rate), ClickHouse at about $15B, and Neon (more than 80% agent-created databases).

   → [trend](/trends/ai-agents-become-the-customer.md)
2. **AI labs, platforms and chip vendors bought the OSS stack.** Licenses stayed permissive; control moved.
   - AI labs: Anthropic bought Bun; OpenAI bought Astral and Promptfoo.
   - Platforms: Cloudflare bought VoidZero and Astro; Vercel bought NuxtLabs and Better Auth; Figma bought Payload; ClickHouse bought LibreChat and Langfuse; AWS bought DuckLabs.
   - Chip vendors: Qualcomm bought Arduino, Ventana, Modular and PickNik.
   - NVIDIA agreed to buy Hugging Face for about $12.9B, the largest COSS deal ever, with closing expected in H1 2027.[^nvidia-hf]

   → [trend](/trends/ai-labs-and-compute-owners-buy-the-stack.md)
3. **Governance predicted survival better than any other factor tracked.** Foundation-governed projects ended "declining", "dead" or "in crisis" in **3%** of cases (n=103). Single-vendor projects did so in **20%** (n=133).[^kb-stats] The "donate the project, then sell the company" pattern protected users through every ownership change: Ray, vLLM, DuckDB, SQLMesh, MCP. → [trend](/trends/foundations-as-insurance.md)
4. **Relicensing lost the community but not the revenue, and it spread to the app layer.**
   - Foundation forks beat their relicensed parents on community: Valkey, OpenTofu, OpenSearch and OpenBao.[^redmonk-valkey] The vendors still grew or sold well.
   - Elastic, Redis and dbt moved back to OSI licenses.
   - The new tactics:
     - Gating binaries and images (Bitnami, MinIO).
     - Going closed with AI as the stated reason (CockroachDB, Cal.com).[^crdb-private]
     - A second wave of app-layer source-available licenses, now even at seed stage: Open WebUI, NocoDB, Directus, Screenpipe.

   → [trend](/trends/license-pendulum.md)
5. **China took the open-weight lead and turned it into capital.**
   - Chinese models passed US models on downloads and derivatives, and took more than 70% of OpenRouter tokens.[^atom-report]
   - Capital followed: Zhipu and MiniMax IPOs in Hong Kong (Zhipu peaked above HK$1T), Moonshot at $35B and filing for an IPO, DeepSeek at about $75B with about $1B in run-rate revenue.
   - Meta shipped closed models.

   → [trend](/trends/china-leads-open-weights.md)
6. **No US COSS IPOs, consolidation instead, and durable bootstrappers.**
   - HashiCorp, Couchbase and Confluent left the public market. Fivetran–dbt and Prefect–Dagster rolled up the data stack.
   - COSS funding was $26.4B in 2024.[^lf-coss-2025] No reliable aggregate exists for 2025–26.
   - Meanwhile bootstrapped and nonprofit-anchored projects grew quietly: Ghost, Plausible, Bruno, Home Assistant, Proxmox.

   → [consolidation](/trends/consolidation-and-private-for-longer.md), [bootstrappers](/trends/bootstrapped-and-nonprofit-durability.md)
7. **The commons is strained.**
   - Formal retirements became routine: ingress-nginx, TGI, MinIO, the curl bounty.
   - Steward organizations ran deficits: the Drupal Association, NumFOCUS, Ruby Central.
   - Supply-chain attacks escalated from stolen tokens to worms to CI-provenance theft and editor extensions (the Nx Console extension led to a GitHub breach).
   - AI added slop reports and more real findings than maintainers can fix: of 26,153 Glasswing findings, 0.8% were fixed.[^vulncheck-glasswing]
   - Many 2023–25 AI hits were silently abandoned while their star counts kept climbing.

   → [maintainers](/trends/maintainer-cliff-and-ai-burden.md), [supply chain](/trends/supply-chain-industrialized.md), [hype churn](/trends/ai-hype-churn-stars-not-survival.md)
8. **Geopolitics became a direct driver.**
   - In Europe, open source became industrial policy: a €2B open source strategy, the CRA, and government migrations away from Microsoft.
   - In the US, science funding for OSS contracted (NSF terminations, the end of CZI's EOSS program), and the FCC banned new foreign-made drones and routers.
   - The AI-driven DRAM shortage stopped small open-hardware makers (Pine64).

   → [sovereignty](/trends/sovereignty-and-public-money.md), [hardware](/trends/hardware-geopolitics-and-memory-shock.md)

# Scoreboard (435 projects, 15 domains)

| OSS verdict | Count | | Business verdict | Count |
|---|---|---|---|---|
| thriving | 107 | | thriving | 27 |
| growing | 114 | | growing | 82 |
| stable | 139 | | stable | 70 |
| contested | 35 | | acquired | 39 |
| declining | 21 | | struggling | 28 |
| crisis | 5 | | failed | 5 |
| dead | 14 | | n/a (no company) | 184 |

**Momentum by window** (share of projects rated "up"): W24 61% · W12 43% · W9 43% · W6 54% · W3 60%.[^kb-stats] There was a trough in late 2025 to early 2026, then a strong re-acceleration over the last six months. W24 is a 12-month band, so its share is inflated.

| Governance | n | Thriving or growing | Declining, dead or crisis |
|---|---|---|---|
| Foundation | 103 | 60% | **3%** |
| Company-led open core | 110 | 55% | 2% |
| Community / volunteer | 81 | 46% | 10% |
| Single-vendor | 133 | 44% | **20%** |

| License family | n | Thriving or growing | Declining, dead or crisis |
|---|---|---|---|
| Permissive (MIT, Apache, BSD, MPL) | 317 | 55% | 7% |
| Copyleft (GPL family, AGPL) | 59 | 39% | 14% |
| Source-available or other | 59 | 39% | 15% |

Caveat: verdicts are research-agent judgements from cited evidence, not measurements, and the license families confound age and category. Treat these gaps as directional.

# By window

| Window | Mood | Biggest OSS success | Biggest OSS failure | Biggest business success | Biggest business failure | Review |
|---|---|---|---|---|---|---|
| **W3** (Jul–Oct 2026) | Hot but polarized | A2A joins AAIF; DuckDB survives AWS purchase as MIT; Intrinsic Core open-sourced | CockroachDB closes source; Flowise sunset; keyv worm wave | NVIDIA–HF ~$12.9B; Databricks $190B; Temporal $12.55B; Mistral €3B | MongoDB CEO exit (−18%); Tailwind sold to Shopify; Drupal Association deficit; Pine64 halt | [W3](/periods/w3-2026-07-to-2026-10.md) |
| **W6** (Apr–Jul 2026) | Strong private, weak public | OpenTelemetry graduates; dbt returns to Apache-2.0 | Meta's closed Muse Spark; Roo Code shutdown; MinIO archived; GitHub breach via Nx Console | Supabase $10.5B; SAP–n8n $5.2B; Together $8.3B; ComfyUI $500M; SiFive $3.65B | GitLab −14% staff; Snyk −20% staff; Cal.com goes closed | [W6](/periods/w6-2026-04-to-2026-07.md) |
| **W9** (Jan–Apr 2026) | Strong | OpenClaw breakout; Gemma 4 to Apache-2.0; OpenTitan ships in Chromebooks | Trivy→LiteLLM and axios compromises; NocoDB leaves AGPL; AI agent attacks a Matplotlib maintainer | Zhipu/MiniMax IPOs; ClickHouse $15B; OpenAI–Astral; vLLM/SGLang spinouts | Tailwind lays off 3 of 4 engineers; NumFOCUS cuts staff; Snyk CEO exit | [W9](/periods/w9-2026-01-to-2026-04.md) |
| **W12** (Oct 2025–Jan 2026) | Strong, consolidating | AAIF launch (MCP); React Foundation; BUILD Foundation for Bazel | Shai-Hulud 2.0; React2Shell; ingress-nginx retirement; FFmpeg's "CVE slop" dispute | IBM–Confluent; Anthropic–Bun; n8n $2.5B; LangChain unicorn | K-Scale shuts down; Invoke absorbed by Adobe; Gel Cloud shuts | [W12](/periods/w12-2025-10-to-2026-01.md) |
| **W24** (Oct 2024–Oct 2025) | Recovering → heating | DeepSeek-R1; MCP adoption; Redis to AGPL; OpenTofu to CNCF; RVA23 | Llama 4 flop; WP Engine war; Bitnami paywall; RubyGems takeover; Open WebUI leaves OSI | IBM–HashiCorp $6.4B; Databricks–Neon; Chainguard $3.5B; Mistral €11.7B | Couchbase taken private; Efabless shuts; US science grant terminations | [W24](/periods/w24-2024-10-to-2025-10.md) |

**Last 3 months (W3):** peak consolidation. Neutral projects came through ownership changes intact; single-vendor projects were closed or sunset; hardware was hit by memory shortages.
**Last 6 months (W3+W6):** the hottest private COSS market. Meta left the open frontier. The EU made OSS industrial policy. Security incumbents shrank (Snyk) while newer security companies grew (Socket, Aikido).
**Last 9 months (+W9):** the agent era's breakout OSS (OpenClaw), the first open-weight IPOs, and visible AI damage to monetization and maintainers.
**Last year (+W12):** agent standards went to a neutral foundation, and AI labs and platforms started buying runtimes and frameworks.
**Last 2 years (+W24):** DeepSeek-R1 and MCP set the agenda, the source-available era reversed at the infrastructure layer, and US public science funding began to retreat.

# What made OSS projects succeed

- **A neutral home, a permissive or AGPL license, and maintainers from many vendors:** Postgres, Iceberg, OTel, Kafka, vLLM, MCP, Valkey, OpenTofu, Zephyr, ROS 2. → [standards win](/trends/standards-win-value-moves-up.md)
- **Speed improvements users notice immediately,** often from native rewrites: uv, Ruff, TypeScript 7, Vite/Rolldown, Polars, Rattler/pixi. → [trend](/trends/native-rewrites-and-speed.md)
- **Compatibility with the incumbent:** uv with pip, Valkey with Redis, OpenTofu with Terraform, Bruno with Postman collections.
- **Being in the AI-agent path:** MCP servers, agent-friendly CLIs, branchable databases.
- **Fast release cadence with a full range of model sizes,** in open weights (Qwen, DeepSeek, GLM).

# What made OSS projects fail

- **Single-vendor control plus a strategy change:** Roo Code, AutoGen, Flowise, MinIO, CockroachDB, Llama, Hasura v2.
- **One or two maintainers on critical infrastructure, or a hype project without a funding engine:** ingress-nginx, Aider, AUTOMATIC1111, GPT4All, Ibis. → [hype churn](/trends/ai-hype-churn-stars-not-survival.md)
- **Acquisition into a larger platform:** the license stays but development stops within 3–12 months (Neon, Gel, BentoML, CDKTF, Payload Cloud). → [trend](/trends/acquired-oss-goes-quiet.md)
- **Restricting distribution of a commoditized product:** Bitnami, MinIO's binaries, Nx's paid cache (reversed).
- **Fragile steward governance:** RubyGems/Ruby Central, the Drupal Association, NumFOCUS, Nixpkgs.

# What made OSS businesses succeed

- **A usage-priced managed cloud on an open core that agents can provision through an API:** Supabase, ClickHouse, Temporal, Databricks, ComfyUI.
- **A closed product layered on a permissive core:** LangSmith, Ollama Cloud, n8n Cloud (fair-code), Expo's build service, Laravel Cloud.
- **A strategic sale to a buyer that depends on the layer:** HashiCorp, Confluent, Hugging Face, Modular, Bun, Astral, Better Auth.
- **Bootstrapped or nonprofit discipline:** Ghost, Plausible, Proxmox, Nabu Casa. → [trend](/trends/bootstrapped-and-nonprofit-durability.md)
- **Sovereignty or defense positioning:** Mistral (€21B), Nextcloud, Proton, Auterion (PX4). → [sovereignty](/trends/sovereignty-and-public-money.md)

# What made OSS businesses fail

- **Monetizing human attention or seats when agents replace both:** Tailwind Labs, GitLab. → [trend](/trends/ai-breaks-oss-monetization.md)
- **Charging for developer tools rather than hosting:** Vite+ licensing withdrawn, pyx wound down, Astro Studio and CrabNebula Cloud.
- **Sub-scale public companies without an AI narrative,** which were taken out (Couchbase, Confluent, HashiCorp), or **security incumbents disrupted by AI-native rivals** (Snyk).
- **Relicensing after a hyperscaler already competes:** Redis lost the community to Valkey, then made layoffs despite $300M ARR.
- **Being exposed to hardware supply shocks without inventory:** Pine64, Framework. → [trend](/trends/hardware-geopolitics-and-memory-shock.md)

# Watchlist (next 6 months)

1. Regulatory review of NVIDIA–Hugging Face (H1 2027), and whether the Hub stays neutral toward Chinese labs and LeRobot users.
2. Whether "AI makes open code unsafe" (CockroachDB, Cal.com, NHS England) spreads, and whether app-layer relicensing provokes forks.
3. Whether uv, Bun, Vite or Astro move into foundations, or get forked if their buyers' interests diverge.
4. A 2027 COSS IPO window: Databricks, ClickHouse, Grafana, Supabase; the Moonshot and DeepSeek IPOs.
5. Open-weight license tightening, and whether DeepSeek keeps MIT after its ~$75B round.
6. The CRA steward regime (Dec 2027), the EU's €2B, US FY2027 science budget cuts, and Android verification versus F-Droid.
7. Agent-ecosystem security: MCP, OpenClaw skills, editor extensions, ComfyUI nodes.
8. WP Engine v. Automattic, which goes to trial on 2027-10-19 after the trademark ruling.
9. DRAM prices and Qualcomm's next acquisition of an open community.

# Research quality

- **Two research passes.** Pass 2 had an unrestricted search budget and checked pass-1 claims against primary sources. It corrected about 130 claims. Notable corrections:
  - Chainguard's "$800M 2026 round" does not exist; that figure is its cumulative funding.
  - Bluesky raised $100M, not ~$700M.
  - DeepSeek, Moonshot and Mistral round figures were clarified.
  - The WP Engine ruling was on 09-24, and Automattic does not own the WordPress marks.
  - libxml2 gained maintainers.
- **Sourcing now.** News-feed headline sources fell from 84 to 1, and Wikipedia sources from 232 to 160 (kept mainly for background). 113 concepts carry a `verified:` stamp from the verifier agent. Remaining hedges are marked in each file. See [methodology](/references/methodology.md).

# How to navigate this bundle

- Domain reviews: [AI models](/domains/ai-models.md) · [AI inference](/domains/ai-inference.md) · [AI agents](/domains/ai-agents.md) · [AI apps](/domains/ai-apps.md) · [Licensing & forks](/domains/licensing-forks.md) · [Databases](/domains/databases.md) · [Data engineering](/domains/data-engineering.md) · [Scientific computing](/domains/scientific-computing.md) · [Cloud native](/domains/cloud-native.md) · [Devtools & languages](/domains/devtools-languages.md) · [Web platforms](/domains/web-platforms.md) · [Security & sustainability](/domains/security-sustainability.md) · [End-user apps](/domains/end-user-apps.md) · [Hardware & embedded](/domains/hardware-embedded.md) · [COSS market](/domains/coss-market.md)
- [Trends](/trends/) (16) · [Period reviews](/periods/) · [Events](/events/) · [Organizations](/organizations/) · [Methodology](/references/methodology.md)

[^nvidia-hf]: NVIDIA blog and 8-K.
[^supabase-f]: Supabase blog.
[^atom-report]: ATOM Report.
[^lf-coss-2025]: Linux Foundation press release.
[^redmonk-valkey]: RedMonk.
[^crdb-private]: Cockroach Labs blog.
[^vulncheck-glasswing]: VulnCheck.
[^kb-stats]: Computed from this bundle's frontmatter after pass 2.
