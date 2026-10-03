---
type: Organization
title: Nomic AI
description: "NYC AI company ($17M Series A, 2023, ~$100M valuation) behind GPT4All and nomic-embed; let GPT4All go silent after Feb 2025 while focusing on embeddings and data products — struggling."
resource: https://www.nomic.ai
tags: [commercial-open-source, ai-apps, embeddings]
org_kind: coss-startup
hq: New York, USA
funding: { total_usd: "~$17M+ (Series A)", last_round: "Series A $17M", last_round_date: 2023-07-13, valuation_usd: "~$100M (2023, reported)" }
business_verdict: struggling
projects: [projects/ai-apps/gpt4all]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nomic-17m
    resource: https://finance.yahoo.com/news/ai-startup-nomic-raises-17-000409855.html
    title: "Nomic raises $17M (2023)"
  - id: g4a-gh
    resource: https://github.com/nomic-ai/gpt4all
    title: GPT4All GitHub repository
  - id: g4a-dead
    resource: https://github.com/nomic-ai/gpt4all/issues/3605
    title: "Issue #3605: Is GPT4all dead?"
---

# Summary
Nomic raised a $17M Series A in July 2023 (reported ~$100M valuation)[^nomic-17m]. Its consumer-facing GPT4All app had no release after 2025-02-25 and no commits after 2025-05-27, with community "is it dead?" issues left unanswered[^g4a-gh][^g4a-dead]. No newer funding verified. Verdict: struggling (as an OSS-app steward).

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-02-25 | Last GPT4All release[^g4a-gh] | − |
| W24 | 2025-08-05 | "Is GPT4all dead?" left unanswered[^g4a-dead] | − |

# Monetization model
Enterprise data/embedding products (Atlas, nomic-embed); GPT4All was free.

# Successes
- Early category creation for local LLM apps (2023).

# Failures / risks
- Silent abandonment damaged community trust.

# Related
- [GPT4All](/projects/ai-apps/gpt4all.md)

[^nomic-17m]: Yahoo Finance — https://finance.yahoo.com/news/ai-startup-nomic-raises-17-000409855.html
[^g4a-gh]: GitHub — https://github.com/nomic-ai/gpt4all
[^g4a-dead]: Issue #3605 — https://github.com/nomic-ai/gpt4all/issues/3605
