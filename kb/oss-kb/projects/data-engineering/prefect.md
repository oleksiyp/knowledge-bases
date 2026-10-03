---
type: OSS Project
title: Prefect
description: Pythonic workflow orchestrator whose company cut staff in 2025, claimed profitability, gained a second act via FastMCP, and became a consolidator by acquiring Dagster Labs in July 2026.
resource: https://github.com/PrefectHQ/prefect
tags: [orchestration, apache-2.0, company-led-open-core, consolidator]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: company-led-open-core
steward: Prefect Technologies
backing_orgs: [organizations/prefect]
metrics:
  github_stars: { value: 23963, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: prefect-gh
    resource: https://github.com/PrefectHQ/prefect
    title: Prefect GitHub repository (3.8.x releases)
    last_modified: 2026-10-03T00:00:00Z
  - id: prefect-acq
    resource: https://www.prefect.io/prefect-acquires-dagster
    title: "Prefect acquires Dagster Labs (2026-07-13)"
  - id: osfy-prefect
    resource: https://www.opensourceforu.com/2026/07/prefect-expands-open-source-ai-stack-with-dagster-acquisition/
    title: "Open Source For You: Prefect expands open source AI stack with Dagster acquisition"
  - id: tns-prefect-dagster
    resource: https://thenewstack.io/prefect-acquires-dagster-orchestrator/
    title: "The New Stack: Prefect just bought Dagster, another big Airflow rival"
  - id: dagster-blog-acq
    resource: https://dagster.io/blog/prefect-is-acquiring-dagster
    title: "Dagster blog: Prefect is Acquiring Dagster (2026-07-13)"
  - id: fastmcp-v3
    resource: https://github.com/PrefectHQ/fastmcp/releases/tag/v3.0.0
    title: "FastMCP v3.0.0 'Three at Last' release (2026-02-18)"
  - id: prefect-horizon
    resource: https://www.prefect.io/blog/prefect-horizon
    title: "Prefect blog: Introducing Prefect Horizon"
  - id: builtin-prefect
    resource: https://builtin.com/company/prefect/faq/stability-growth
    title: "Built In: Prefect company growth, stability & outlook 2026"
---

# Summary
Prefect (3.x) remains a popular Python-native orchestrator (24k stars, near-daily dev releases)[^prefect-gh]. The company reportedly laid off ~20 staff on 2025-03-25 and moved to a profitability-first posture — reported by Built In, consistent with employee reviews; not confirmed by the company[^builtin-prefect]. In February 2026 it shipped FastMCP 3.0 (GA 2026-02-18; ~28k stars) and launched Prefect Horizon, a platform for deploying and governing MCP servers and agents[^fastmcp-v3][^prefect-horizon]. By 2026 it described itself as "a profitable, fast-growing business"[^prefect-acq] and, on 2026-07-13, acquired Dagster Labs, building a portfolio of Prefect (execution), Dagster (asset orchestration) and FastMCP (MCP server framework for AI agents)[^prefect-acq][^osfy-prefect]. Verdict: from cost-cutting to consolidator in ~16 months.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-25 | ~20 employees laid off (reported)[^builtin-prefect] | Business | − |
| W24 | 2025-07-15 | Hobby tier changes (reported)[^builtin-prefect] | Business | ± |
| W9 | 2026-02-18 | FastMCP 3.0 GA; Prefect Horizon platform launched[^fastmcp-v3][^prefect-horizon] | OSS/Business | + |
| W3 | 2026-07-13 | Acquires Dagster Labs (terms undisclosed)[^prefect-acq][^tns-prefect-dagster][^dagster-blog-acq] | Business | + |
| W3 | 2026-09-26 | Prefect 3.8.7[^prefect-gh] | OSS | + |

# OSS successes
- Very active release train[^prefect-gh]; FastMCP gives Prefect a foothold in the AI-agent tooling ecosystem[^osfy-prefect].

# OSS failures / risks
- Maintaining two orchestrators (Prefect + Dagster) may split engineering focus.

# Business successes
- Claimed profitability and an acquisition of its closest rival[^prefect-acq].

# Business failures / risks
- 2025 layoffs (reported)[^builtin-prefect]; acquisition price/financing undisclosed.

# By window
## W3
- Dagster acquisition; 3.8.x releases[^prefect-acq][^prefect-gh].
## W6
- No notable events found.
## W9
- FastMCP 3.0 GA and Prefect Horizon (Feb 2026)[^fastmcp-v3][^prefect-horizon].
## W12
- No notable events found.
## W24
- Layoffs and pricing changes (reported)[^builtin-prefect].

# Lessons
- Profitability discipline let a mid-size COSS company become the acquirer rather than the acquired.
- Adjacent AI-agent OSS (FastMCP) can rejuvenate a data-tooling company's narrative.

# Related
- [Dagster](/projects/data-engineering/dagster.md), [Prefect (org)](/organizations/prefect.md), [Prefect acquires Dagster](/events/2026-07-prefect-acquires-dagster.md), [Apache Airflow](/projects/data-engineering/apache-airflow.md)

[^prefect-gh]: Prefect GitHub releases.
[^prefect-acq]: Prefect announcement, 2026-07-13.
[^osfy-prefect]: Open Source For You.
[^builtin-prefect]: Built In (third-party).
[^tns-prefect-dagster]: The New Stack, July 2026.
[^dagster-blog-acq]: Dagster blog, 2026-07-13.
[^fastmcp-v3]: FastMCP GitHub release v3.0.0.
[^prefect-horizon]: Prefect blog.
