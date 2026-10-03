---
type: OSS Project
title: Ollama
description: "The most popular local-LLM runner (182k stars, ~8.9M monthly developers) that pivoted toward cloud subscriptions and raised a $65M Series B in July 2026 — business thriving, OSS reputation contested over attribution, a closed desktop app and lock-in."
resource: https://github.com/ollama/ollama
tags: [ai-inference, local-ai, mit, open-core, vc-backed, controversy]
domain: ai-inference
license: MIT
license_history: ["MIT (2023-) for the CLI/server; desktop GUI app (Jul 2025) shipped from a private repo without a published license"]
governance: company-led-open-core
steward: Ollama Inc.
backing_orgs: [organizations/ollama-inc]
metrics:
  github_stars: { value: 182072, as_of: 2026-10-03 }
  monthly_active_developers: { value: 8900000, as_of: 2026-07-09 }
  employees: { value: 14, as_of: 2026-07-09 }
  commits_last_3_months: { value: 301, as_of: 2026-10-03 }
  total_funding_usd: { value: 88000000, as_of: 2026-07-09 }
oss_verdict: contested
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ollama-gh
    resource: https://github.com/ollama/ollama
    title: Ollama GitHub repository (stars, releases, commits via GitHub API)
  - id: ollama-blog
    resource: https://ollama.com/blog
    title: Ollama blog index (2025–2026 posts)
    author: org:ollama-inc
  - id: tc-ollama
    resource: https://techcrunch.com/2026/07/09/popular-open-source-ai-developer-tool-ollama-raises-65m-grows-to-nearly-9m-users/
    title: "TechCrunch: Ollama raises $65M, grows to nearly 9M users (2026-07-09)"
    author: org:techcrunch
  - id: ollama-turbo
    resource: https://ollama.com/turbo
    title: Ollama Turbo preview page
  - id: biggo-turbo
    resource: https://biggo.com/news/202508060113_Ollama_Launches_Turbo_Cloud_Service
    title: "BigGo: Ollama Launches Turbo Cloud Service, Sparking Community Debate (2025-08)"
  - id: ollama-3185
    resource: https://github.com/ollama/ollama/issues/3185
    title: "Issue #3185: ollama doesn't distribute notice licenses in its release artifacts"
  - id: sleeping-robots
    resource: https://sleepingrobots.com/dreams/stop-using-ollama/
    title: "Friends Don't Let Friends Use Ollama (2026-04-15)"
  - id: thn-exposed
    resource: https://thehackernews.com/2026/01/researchers-find-175000-publicly.html
    title: "The Hacker News: Researchers find 175,000 publicly exposed Ollama AI servers across 130 countries (2026-01)"
  - id: secweek-exposed
    resource: https://www.securityweek.com/175000-exposed-ollama-hosts-could-enable-llm-abuse/
    title: "SecurityWeek: 175,000 exposed Ollama hosts could enable LLM abuse (2026-01)"
---

# Summary
Ollama is the breakout *business* in local AI: 182k GitHub stars[^ollama-gh], ~8.9M monthly active developers and presence in 85% of the Fortune 500 with only 14 employees, culminating in a $65M Series B led by Theory Ventures on 2026-07-09 ($88M total raised)[^tc-ollama]. It got there by turning a llama.cpp wrapper into a product and then layering paid cloud: Turbo ($20/mo, Aug 2025)[^biggo-turbo], cloud models (Sep 2025), and tiered plans up to $100/month with per-token pricing (Aug 2026)[^ollama-blog][^tc-ollama]. Its OSS standing is contested: the llama.cpp MIT-notice issue has been open since March 2024[^ollama-3185], the July 2025 desktop app was closed-source[^sleeping-robots], and SentinelOne/Censys reported ~175,000 internet-exposed Ollama hosts across 130 countries in January 2026[^thn-exposed][^secweek-exposed]. Verdict: business growing fast; OSS contested.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-15 | New multimodal engine (moving partly off llama.cpp)[^ollama-blog] | OSS | + |
| W24 | 2025-07-30 | New native macOS/Windows app — source not published[^ollama-blog][^sleeping-robots] | OSS | − |
| W24 | 2025-08 | Turbo cloud inference preview at $20/month[^ollama-turbo][^biggo-turbo] | Business | + |
| W24 | 2025-09-19 | Cloud models preview; web search API (2025-09-24)[^ollama-blog] | Business | + |
| W9 | 2026-01 | ~175,000 publicly exposed Ollama hosts in 130 countries found by SentinelOne/Censys (default-off auth; users binding 0.0.0.0)[^thn-exposed][^secweek-exposed] | Security | − |
| W9 | 2026-01-16 | Anthropic-API compatibility for Claude Code and similar agents; `ollama launch` (01-23)[^ollama-blog] | OSS/Business | + |
| W9 | 2026-03-30 | MLX engine preview for Apple Silicon[^ollama-blog] | OSS | + |
| W6 | 2026-04-15 | Widely shared "stop using Ollama" critique (attribution, lock-in, cloud pivot)[^sleeping-robots] | OSS | − |
| W3 | 2026-07-09 | $65M Series B (Theory Ventures; Benchmark, 8VC, YC); $88M total[^tc-ollama] | Business | + |
| W3 | 2026-08-31 | Transparent per-token pricing across Pro, Max, Team plans[^ollama-blog] | Business | + |

# OSS successes
- Largest developer reach in open-model tooling; 67k+ community integrations reported at Series B[^tc-ollama].
- Fast follow on every new open model and on agent tooling (Claude Code/Codex compatibility)[^ollama-blog].

# OSS failures / risks
- License-notice compliance issue #3185 (opened 2024-03-16) still open[^ollama-3185].
- Closed-source desktop GUI (July 2025) and proprietary hashed model store criticised as lock-in[^sleeping-robots].
- Security posture: CVE-2025-51471 token exfiltration and ~175k exposed servers (Jan 2026)[^sleeping-robots][^thn-exposed].
- Upstream engine (llama.cpp) is now owned via HF → NVIDIA (pending), reducing Ollama's leverage; its own MLX/new engine work hedges this.

# Business successes
- Capital efficiency: ~8.9M MAU with 14 staff[^tc-ollama].
- Cloud subscription monetisation of a local tool without killing the free tier[^tc-ollama][^ollama-turbo].

# Business failures / risks
- Valuation and revenue undisclosed[^tc-ollama].
- Cloud inference competes with every inference provider and with the model labs it partners with.

# By window
## W3
- $65M Series B (2026-07-09)[^tc-ollama]; per-token pricing (2026-08-31)[^ollama-blog].
## W6
- Public backlash essay (2026-04-15)[^sleeping-robots]; MLX engine improvements (June)[^ollama-blog].
## W9
- Exposed-server research[^thn-exposed]; Claude Code/Codex integration; MLX preview[^ollama-blog].
## W12
- Cloud models expansion (MiniMax M2, GLM-4.6, Oct 2025)[^ollama-blog].
## W24
- New engine, closed GUI app, Turbo, cloud models[^ollama-blog][^biggo-turbo].

# Lessons
- UX on top of someone else's engine can capture most of the commercial value of an OSS stack.
- Open-core drift (closed GUI, cloud) is tolerated by mainstream users but erodes trust with the enthusiast core who generate word-of-mouth.

# Related
- [Ollama Inc.](/organizations/ollama-inc.md), [llama.cpp](/projects/ai-inference/llama-cpp.md), [LM Studio](/projects/ai-inference/lm-studio.md), [LocalAI](/projects/ai-inference/localai.md)
- [Event: Ollama closed desktop app & cloud pivot](/events/2025-07-ollama-closed-app-cloud-pivot.md), [Event: Ollama Series B](/events/2026-07-ollama-series-b.md)

[^ollama-gh]: Ollama GitHub — https://github.com/ollama/ollama
[^ollama-blog]: Ollama blog — https://ollama.com/blog
[^tc-ollama]: TechCrunch, 2026-07-09 — https://techcrunch.com/2026/07/09/popular-open-source-ai-developer-tool-ollama-raises-65m-grows-to-nearly-9m-users/
[^ollama-turbo]: Ollama Turbo — https://ollama.com/turbo
[^biggo-turbo]: BigGo News, 2025-08 — https://biggo.com/news/202508060113_Ollama_Launches_Turbo_Cloud_Service
[^ollama-3185]: Issue #3185 — https://github.com/ollama/ollama/issues/3185
[^sleeping-robots]: Sleeping Robots, 2026-04-15 — https://sleepingrobots.com/dreams/stop-using-ollama/
[^thn-exposed]: The Hacker News, Jan 2026.
[^secweek-exposed]: SecurityWeek, Jan 2026.
