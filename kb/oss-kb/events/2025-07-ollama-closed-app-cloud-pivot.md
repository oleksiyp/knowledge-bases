---
type: Event
title: "Ollama ships closed-source desktop app and pivots to paid cloud"
description: "Between July and September 2025 Ollama released a desktop GUI without published source, launched the $20/month Turbo cloud service, and previewed cloud-hosted models — drawing open-source backlash."
event_kind: other
date: 2025-07-30
window: W24
impact: mixed
projects: [projects/ai-inference/ollama, projects/ai-inference/llama-cpp]
organizations: [organizations/ollama-inc]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ollama-blog
    resource: https://ollama.com/blog
    title: "Ollama blog index"
  - id: sleeping-robots
    resource: https://sleepingrobots.com/dreams/stop-using-ollama/
    title: "Friends Don't Let Friends Use Ollama (2026-04-15)"
  - id: biggo-turbo
    resource: https://biggo.com/news/202508060113_Ollama_Launches_Turbo_Cloud_Service
    title: "BigGo: Ollama Launches Turbo Cloud Service, Sparking Community Debate"
  - id: ollama-3185
    resource: https://github.com/ollama/ollama/issues/3185
    title: "Ollama issue #3185 (license notices)"
---

# What happened
Ollama launched a native macOS/Windows app on 2025-07-30[^ollama-blog], developed in a private repository without published source or licence[^sleeping-robots]. In August 2025 it launched Turbo, a $20/month datacenter inference service[^biggo-turbo], followed by cloud models (2025-09-19) and a web search API (2025-09-24)[^ollama-blog].

# Why it matters
It marked Ollama's transition from MIT-licensed local tool to open-core cloud business, re-igniting long-standing complaints about llama.cpp attribution (issue #3185 open since 2024-03-16)[^ollama-3185] and model-store lock-in[^sleeping-robots].

# Outcome so far
Commercially it worked: Ollama raised a $65M Series B in July 2026. Community criticism persisted (April 2026 essay)[^sleeping-robots].

# Related
- [Ollama](/projects/ai-inference/ollama.md), [Ollama Inc.](/organizations/ollama-inc.md), [Series B](/events/2026-07-ollama-series-b.md)

[^ollama-blog]: Ollama blog index — https://ollama.com/blog
[^sleeping-robots]: Friends Don't Let Friends Use Ollama (2026-04-15) — https://sleepingrobots.com/dreams/stop-using-ollama/
[^biggo-turbo]: BigGo: Ollama Launches Turbo Cloud Service, Sparking Community Debate — https://biggo.com/news/202508060113_Ollama_Launches_Turbo_Cloud_Service
[^ollama-3185]: Ollama issue #3185 (license notices) — https://github.com/ollama/ollama/issues/3185
