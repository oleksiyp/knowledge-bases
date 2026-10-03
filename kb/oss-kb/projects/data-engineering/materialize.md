---
type: OSS Project
title: Materialize
description: BSL-licensed incremental-view-maintenance streaming database; ships weekly and has pivoted messaging to "live context graphs" and MCP servers for AI agents; no revenue disclosed and no company-announced round since 2021.
resource: https://github.com/MaterializeInc/materialize
tags: [streaming-database, bsl, single-vendor]
domain: data-engineering
license: BSL-1.1
license_history: ["BSL-1.1 (converts to Apache-2.0 after change date)"]
governance: single-vendor
steward: Materialize Inc.
backing_orgs: []
metrics:
  github_stars: { value: 6381, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mz-gh
    resource: https://github.com/MaterializeInc/materialize
    title: Materialize GitHub repository (license NOASSERTION/BSL, v26.x releases)
    last_modified: 2026-10-03T00:00:00Z
  - id: mz-blog
    resource: https://materialize.com/blog/
    title: Materialize blog
  - id: mz-seriesc
    resource: https://materialize.com/blog/materialize-raises-a-series-c/
    title: "Materialize: $60M Series C led by Redpoint (2021-09-30)"
  - id: salestools-mz
    resource: https://salestools.io/en/report/materialize-raises-60m-series-d
    title: "Salestools (aggregator): Materialize raises $60M Series D at $600M valuation (2024-11-13) — not confirmed by company"
---

# Summary
Materialize (Differential Dataflow-based) continues frequent releases (v26.4x through Oct 2026)[^mz-gh] under a source-available BSL license. In 2026 it repositioned around AI: built-in MCP servers (June–July 2026), "live context graphs" for agents (July 2026), cluster autoscaling and an out-of-core buffer pool (Sept 2026)[^mz-blog]. Its last company-announced round is a $60M Series C led by Redpoint (2021-09-30; >$100M total)[^mz-seriesc]; an aggregator reports a $60M Series D at a $600M valuation in Nov 2024, which Materialize has not announced and which is not confirmed[^salestools-mz]. No funding, revenue or layoff news was found for 2025–2026.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026-06-30 | Product update: MCP servers, mz-deploy CLI, SSO[^mz-blog] | OSS/Business | + |
| W3 | 2026-07-16 | "Live Context Graph" positioning for agents[^mz-blog] | Business | + |
| W3 | 2026-09-29 | Out-of-core buffer pool replaces swap[^mz-blog] | OSS | + |

# OSS successes
- High release velocity (multiple v26.x releases per month)[^mz-gh].

# OSS failures / risks
- BSL licensing limits community adoption and third-party hosting[^mz-gh].

# Business successes
- Well-capitalized historically (>$100M raised by 2021)[^mz-seriesc].

# Business failures / risks
- No disclosed revenue and no confirmed round since 2021 (a reported 2024 Series D is unconfirmed)[^salestools-mz]; competes with Apache-2.0 RisingWave and with Flink.

# By window
## W3
- Context-graph/agent positioning; buffer pool[^mz-blog].
## W6
- MCP servers and SSO[^mz-blog].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- Source-available streaming databases are leaning on AI-agent narratives to find demand.

# Related
- [RisingWave](/projects/data-engineering/risingwave.md), [Apache Flink](/projects/data-engineering/apache-flink.md)

[^mz-gh]: Materialize GitHub repository.
[^mz-blog]: Materialize blog.
[^mz-seriesc]: Materialize blog, 2021-09-30.
[^salestools-mz]: Salestools aggregator report (unconfirmed).
