---
type: Event
title: ClickHouse acquires Langfuse
description: "Alongside its $400M Series D on 2026-01-16, ClickHouse acquired Langfuse, the MIT-core LLM observability platform (2,000+ paying customers), promising no licence changes."
event_kind: acquisition
date: 2026-01-16
window: W9
impact: positive
projects: [projects/ai-apps/langfuse]
organizations: [organizations/clickhouse-inc]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lf-join
    resource: https://langfuse.com/blog/joining-clickhouse
    title: "Langfuse blog: Langfuse joins ClickHouse (2026-01-16)"
  - id: ch-seriesd
    resource: https://clickhouse.com/blog/clickhouse-raises-400-million-series-d-acquires-langfuse-launches-postgres
    title: "ClickHouse blog: $400M Series D, acquires Langfuse (2026-01-16)"
  - id: orrick-lf
    resource: https://www.orrick.com/en/News/2026/01/Open-source-LLM-Observability-Langfuse-Acquired-by-ClickHouse-Inc
    title: "Orrick: Langfuse acquired by ClickHouse (2026-01-26)"
  - id: lf-gh
    resource: https://github.com/langfuse/langfuse
    title: Langfuse GitHub repository
---

# What happened
ClickHouse announced on 2026-01-16 that it had acquired Langfuse together with a $400M Series D[^ch-seriesd]. The whole Langfuse team joined; self-hosting, Langfuse Cloud and the MIT core were to remain unchanged with "no licensing changes planned"[^lf-join]. Langfuse had been about to raise a Series A[^lf-join] and reported 2,000+ paying customers, 26M+ monthly SDK installs and use at 19 of the Fortune 50[^orrick-lf].

# Why it matters
A clean venture exit for a European COSS company that had *opened* more features (June 2025) rather than relicensing; it also consolidates LLMOps as competitors are absorbed (Promptfoo → OpenAI two months later).

# Outcome so far
Licence unchanged (copyright now ClickHouse, Inc.), v4 re-architecture on ClickHouse shipped through 2026 and releases are near-daily (v4.50.0 on 2026-10-02)[^lf-gh].

# Related
- [Langfuse](/projects/ai-apps/langfuse.md), [ClickHouse, Inc.](/organizations/clickhouse-inc.md), [ClickHouse $400M round](/events/2026-01-clickhouse-400m-15b-valuation.md), [ClickHouse acquires LibreChat](/events/2025-11-clickhouse-acquires-librechat.md), [OpenAI acquires Promptfoo](/events/2026-03-openai-acquires-promptfoo.md)

[^lf-join]: Langfuse blog — https://langfuse.com/blog/joining-clickhouse
[^ch-seriesd]: ClickHouse blog — https://clickhouse.com/blog/clickhouse-raises-400-million-series-d-acquires-langfuse-launches-postgres
[^orrick-lf]: Orrick — https://www.orrick.com/en/News/2026/01/Open-source-LLM-Observability-Langfuse-Acquired-by-ClickHouse-Inc
[^lf-gh]: GitHub — https://github.com/langfuse/langfuse
