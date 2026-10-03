---
type: Organization
title: Ollama Inc.
description: "14-person company behind Ollama; monetises a free local runner via cloud subscriptions; raised a $65M Series B (Theory Ventures) on 2026-07-09 for $88M total."
resource: https://ollama.com
tags: [commercial-open-source, ai-inference, local-ai, open-core]
org_kind: coss-startup
hq: USA (city not verified)
funding: { total_usd: "88M", last_round: "Series B ($65M; Theory Ventures lead; Benchmark, 8VC, Y Combinator)", last_round_date: 2026-07-09, valuation_usd: "undisclosed" }
business_verdict: growing
projects: [projects/ai-inference/ollama]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-ollama
    resource: https://techcrunch.com/2026/07/09/popular-open-source-ai-developer-tool-ollama-raises-65m-grows-to-nearly-9m-users/
    title: "TechCrunch: Ollama raises $65M, grows to nearly 9M users"
    author: org:techcrunch
  - id: ollama-blog
    resource: https://ollama.com/blog
    title: Ollama blog
  - id: ollama-turbo
    resource: https://ollama.com/turbo
    title: Ollama Turbo
---

# Summary
Founded in 2023 by Jeff Morgan (CEO) and Michael Chiang — who previously built Docker Desktop after Docker acquired their Kitematic — Ollama Inc. has 14 employees, ~8.9M monthly active developers and use in 85% of the Fortune 500[^tc-ollama]. After a $15M Series A led by Benchmark's Peter Fenton, it raised a $65M Series B led by Theory Ventures on 2026-07-09 ($88M total)[^tc-ollama]. Revenue comes from cloud subscriptions (Turbo at $20/month in Aug 2025, now free to $100/month tiers billed by GPU time, plus per-token pricing from Aug 2026)[^ollama-turbo][^tc-ollama][^ollama-blog]. The CEO dated the business inflection to ~January 2026 when large open models became good enough for coding agents[^tc-ollama].

# Business timeline
| Date | Event |
|---|---|
| (pre-2025) | $15M Series A led by Benchmark (date not verified)[^tc-ollama] |
| 2025-08 | Turbo cloud subscription ($20/mo)[^ollama-turbo] |
| 2025-09-19 | Cloud models preview[^ollama-blog] |
| 2026-01 | Claude Code/Codex compatibility; business inflection[^ollama-blog][^tc-ollama] |
| 2026-07-09 | $65M Series B[^tc-ollama] |
| 2026-08-31 | Per-token pricing across Pro/Max/Team[^ollama-blog] |

# Monetization model
Free local runtime (MIT) + paid cloud inference subscriptions and team plans[^tc-ollama].

# Successes
- Extreme capital efficiency and distribution[^tc-ollama].

# Failures / risks
- OSS trust deficit (attribution, closed GUI, lock-in); dependence on upstream llama.cpp now inside HF/NVIDIA; cloud margin competition.

# Related
- [Ollama](/projects/ai-inference/ollama.md), [Event: Series B](/events/2026-07-ollama-series-b.md), [Event: closed app & cloud pivot](/events/2025-07-ollama-closed-app-cloud-pivot.md)

[^tc-ollama]: TechCrunch, 2026-07-09 — https://techcrunch.com/2026/07/09/popular-open-source-ai-developer-tool-ollama-raises-65m-grows-to-nearly-9m-users/
[^ollama-blog]: Ollama blog — https://ollama.com/blog
[^ollama-turbo]: Ollama Turbo — https://ollama.com/turbo
