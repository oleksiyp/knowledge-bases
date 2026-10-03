---
type: OSS Project
title: Dagster
description: Asset-oriented orchestrator; strong OSS (16k stars, weekly releases) but Dagster Labs was acquired by long-time rival Prefect in July 2026, which pledged to keep Dagster and its license intact.
resource: https://github.com/dagster-io/dagster
tags: [orchestration, apache-2.0, company-led-open-core, acquired]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: company-led-open-core
steward: Prefect (acquired Dagster Labs, 2026)
backing_orgs: [organizations/dagster-labs, organizations/prefect]
metrics:
  github_stars: { value: 16232, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: acquired
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dagster-gh
    resource: https://github.com/dagster-io/dagster
    title: Dagster GitHub repository (1.13.x weekly releases)
    last_modified: 2026-10-03T00:00:00Z
  - id: prefect-acq
    resource: https://www.prefect.io/prefect-acquires-dagster
    title: "Prefect acquires Dagster Labs (2026-07-13)"
  - id: dagster-prefect
    resource: https://dagster.io/prefect
    title: "Dagster is now part of Prefect"
  - id: osfy-prefect
    resource: https://www.opensourceforu.com/2026/07/prefect-expands-open-source-ai-stack-with-dagster-acquisition/
    title: "Open Source For You: Prefect expands open source AI stack with Dagster acquisition"
  - id: tns-prefect-dagster
    resource: https://thenewstack.io/prefect-acquires-dagster-orchestrator/
    title: "The New Stack: Prefect just bought Dagster, another big Airflow rival"
  - id: dagster-blog-acq
    resource: https://dagster.io/blog/prefect-is-acquiring-dagster
    title: "Dagster blog: Prefect is Acquiring Dagster (2026-07-13)"
  - id: dagster-compass
    resource: https://dagster.io/events/introducing-compass-data-driven-decisions-right-in-slack
    title: "Dagster: Introducing Compass — data-driven decisions right in Slack (launched 2025-09-09)"
---

# Summary
Dagster popularized software-defined assets and was the most credible "modern Airflow". On 2026-07-13 Prefect announced it was acquiring Dagster Labs — product, codebase, customers and many staff — with the combined company operating under the Prefect name from August 2026[^prefect-acq][^osfy-prefect]. Prefect pledged that "Dagster and Dagster+ are here to stay", that Dagster keeps its name, open-source license and roadmap, and that founder Nick Schrock and CEO Pete Hunt become strategic advisers[^prefect-acq][^dagster-prefect][^osfy-prefect]. Price undisclosed[^tns-prefect-dagster][^dagster-blog-acq]. OSS releases continue weekly (1.13.25 on 2026-10-01)[^dagster-gh]. Verdict: OSS stable; independent business ended.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-09-09 | Dagster Labs launches Compass (Slack-native AI analytics)[^dagster-compass] | Business | + |
| W3 | 2026-07-13 | Prefect agrees to acquire Dagster Labs[^prefect-acq][^dagster-blog-acq] | Business | ± |
| W3 | 2026-08 | Combined company operates as Prefect[^osfy-prefect] | Business | ± |
| W3 | 2026-10-01 | Dagster 1.13.25 — weekly releases continue post-deal[^dagster-gh] | OSS | + |

# OSS successes
- No disruption to release cadence after acquisition[^dagster-gh].
- License and roadmap commitments made publicly[^osfy-prefect].

# OSS failures / risks
- Long-term investment depends on a smaller acquirer that now maintains two overlapping orchestrators.

# Business successes
- Exit for investors/employees in a consolidating market (terms undisclosed)[^prefect-acq].

# Business failures / risks
- Dagster Labs did not reach independent scale; the acquirer emphasized its own profitability[^prefect-acq].

# By window
## W3
- Acquisition by Prefect; continued 1.13.x releases[^prefect-acq][^dagster-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Compass launched (2025-09-09), an AI analytics product beyond orchestration[^dagster-compass]. No funding or layoff news found for this period (last disclosed round: 2023).

# Lessons
- In crowded OSS categories, rivals consolidate; preserving the acquired project's license is now the expected norm.

# Related
- [Prefect](/projects/data-engineering/prefect.md), [Dagster Labs](/organizations/dagster-labs.md), [Prefect (org)](/organizations/prefect.md), [Prefect acquires Dagster](/events/2026-07-prefect-acquires-dagster.md), [Apache Airflow](/projects/data-engineering/apache-airflow.md)

[^dagster-gh]: Dagster GitHub releases.
[^prefect-acq]: Prefect announcement, 2026-07-13.
[^dagster-prefect]: Dagster site, "Dagster is now part of Prefect".
[^osfy-prefect]: Open Source For You, July 2026.
[^tns-prefect-dagster]: The New Stack, July 2026.
[^dagster-blog-acq]: Dagster blog, 2026-07-13.
[^dagster-compass]: Dagster events page.
