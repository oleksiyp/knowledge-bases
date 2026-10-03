---
type: OSS Project
title: Langfuse
description: "MIT-core LLM observability, evals and prompt-management platform (~35k stars) that open-sourced nearly all paid features in June 2025 and was acquired by ClickHouse in January 2026 with no licence change — thriving, acquired."
resource: https://github.com/langfuse/langfuse
tags: [ai-apps, llmops, observability, mit, open-core, acquired, clickhouse]
domain: ai-apps
license: "MIT (core) + commercial ee/ directories"
license_history: ["MIT core + ee (2023-)", "Most ee features (LLM-as-judge, annotation queues, playground, prompt experiments) moved to MIT (2025-06-04)", "Copyright transferred to ClickHouse, Inc. (2026)"]
governance: company-led-open-core
steward: ClickHouse, Inc.
backing_orgs: [organizations/clickhouse-inc]
metrics:
  github_stars: { value: 35327, as_of: 2026-10-03 }
  latest_release: { value: "v4.50.0 (2026-10-02)", as_of: 2026-10-03 }
  paying_customers: { value: "2,000+ (at acquisition)", as_of: 2026-01-26 }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lf-gh
    resource: https://github.com/langfuse/langfuse
    title: Langfuse GitHub repository and LICENSE (GitHub API, 2026-10-03)
  - id: lf-oss
    resource: https://langfuse.com/blog/2025-06-04-open-sourcing-langfuse-product
    title: "Langfuse blog: Doubling down on open source (2025-06-04)"
  - id: lf-join
    resource: https://langfuse.com/blog/joining-clickhouse
    title: "Langfuse blog: Langfuse joins ClickHouse (2026-01-16)"
  - id: ch-seriesd
    resource: https://clickhouse.com/blog/clickhouse-raises-400-million-series-d-acquires-langfuse-launches-postgres
    title: "ClickHouse blog: $400M Series D, acquires Langfuse, launches Postgres (2026-01-16)"
  - id: orrick-lf
    resource: https://www.orrick.com/en/News/2026/01/Open-source-LLM-Observability-Langfuse-Acquired-by-ClickHouse-Inc
    title: "Orrick: Langfuse acquired by ClickHouse (2026-01-26)"
  - id: lf-v4
    resource: https://github.com/orgs/langfuse/discussions/12518
    title: "Langfuse discussion #12518: Simplify Langfuse for scale (v4)"
---

# Summary
Langfuse (Berlin/SF; founders Marc Klingen, Max Deichmann, Clemens Rawert; YC, Lightspeed, General Catalyst) is the leading open-source LLM tracing/evals/prompt platform, ~35k stars with near-daily releases[^lf-gh][^orrick-lf]. On 2025-06-04 it moved almost all commercial features to MIT, keeping only enterprise security/platform features (SCIM, audit logs, retention) proprietary[^lf-oss]. On 2026-01-16 ClickHouse — whose database Langfuse v3 already used — acquired it alongside its $400M Series D; the team joined, and "no licensing changes" were planned[^lf-join][^ch-seriesd]. At deal time Langfuse had 2,000+ paying customers, 26M+ monthly SDK installs and 19 of the Fortune 50 as users[^orrick-lf]. v4 (observation-centric ClickHouse schema) previewed in March 2026 and the 4.x line now ships daily[^lf-v4][^lf-gh]. Verdict: OSS thriving; business acquired (successful exit).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-04 | Nearly all product features open-sourced under MIT[^lf-oss] | OSS | + |
| W9 | 2026-01-16 | Acquired by ClickHouse; MIT core unchanged[^lf-join][^ch-seriesd] | Business | + |
| W9 | 2026-03-10 | v4 preview on Langfuse Cloud (ClickHouse wide-table model)[^lf-v4] | OSS | + |
| W3 | 2026-10-02 | v4.50.0[^lf-gh] | OSS | + |

# OSS successes
- Rare reverse of open-core creep: opened more over time[^lf-oss].
- Rapid release cadence post-acquisition[^lf-gh].
# OSS failures / risks
- Copyright now with ClickHouse; future licence decisions rest with a ~$15B company[^lf-gh].
# Business successes
- Exit to ClickHouse after strong commercial traction (2,000+ paying customers)[^orrick-lf].
# Business failures / risks
- Category consolidation (Promptfoo → OpenAI, Mar 2026) leaves fewer independents.

# By window
## W3
- 4.x releases daily[^lf-gh].
## W6
- v4 rollout continues[^lf-v4].
## W9
- ClickHouse acquisition; v4 preview[^lf-join][^lf-v4].
## W12
- No notable events found.
## W24
- MIT open-sourcing of features[^lf-oss].

# Lessons
- Opening paid features grew distribution enough to make the company an acquisition target — the opposite of relicensing to defend revenue.
- Database vendors are buying AI-app-layer OSS (LibreChat, Langfuse) as demand funnels.

# Related
- [ClickHouse, Inc.](/organizations/clickhouse-inc.md), [ClickHouse acquires Langfuse](/events/2026-01-clickhouse-acquires-langfuse.md), [ClickHouse $400M round](/events/2026-01-clickhouse-400m-15b-valuation.md), [LibreChat](/projects/ai-apps/librechat.md), [MLflow](/projects/ai-inference/mlflow.md), [LangChain](/projects/ai-agents/langchain.md), [OpenAI acquires Promptfoo](/events/2026-03-openai-acquires-promptfoo.md)

[^lf-gh]: GitHub API and LICENSE, langfuse/langfuse — https://github.com/langfuse/langfuse
[^lf-oss]: Langfuse blog, 2025-06-04 — https://langfuse.com/blog/2025-06-04-open-sourcing-langfuse-product
[^lf-join]: Langfuse blog, 2026-01-16 — https://langfuse.com/blog/joining-clickhouse
[^ch-seriesd]: ClickHouse blog, 2026-01-16 — https://clickhouse.com/blog/clickhouse-raises-400-million-series-d-acquires-langfuse-launches-postgres
[^orrick-lf]: Orrick, 2026-01-26 — https://www.orrick.com/en/News/2026/01/Open-source-LLM-Observability-Langfuse-Acquired-by-ClickHouse-Inc
[^lf-v4]: GitHub discussion #12518 — https://github.com/orgs/langfuse/discussions/12518
