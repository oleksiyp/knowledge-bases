---
type: OSS Project
title: Airbyte
description: Popular open-core ELT connector platform (ELv2 core, MIT connectors); product kept shipping (2.1 Apr, 2.2 Aug, 2.3 Sept 2026; Airbyte Agents in May 2026) but no new priced funding since 2021 and headcount shrank — squeezed by the Fivetran+dbt consolidation.
resource: https://github.com/airbytehq/airbyte
tags: [ingestion, elt, elv2, open-core]
domain: data-engineering
license: ELv2
license_history: ["MIT (2020-2021)", "ELv2 core + MIT connectors (2021-09-)", "ELv2 expanded to some connectors (2023-06-)"]
governance: company-led-open-core
steward: Airbyte Inc.
backing_orgs: []
metrics:
  github_stars: { value: 22159, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: struggling
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: airbyte-gh
    resource: https://github.com/airbytehq/airbyte
    title: Airbyte GitHub repository
    last_modified: 2026-10-03T00:00:00Z
  - id: airbyte-blog
    resource: https://airbyte.com/blog
    title: Airbyte blog (Airbyte 2.2, agent connectors, 2026)
  - id: airbyte-relnotes
    resource: https://docs.airbyte.com/release_notes/self-managed
    title: "Airbyte Self-Managed release notes (2.0 2025-10-14; 2.1 2026-04-03; 2.2 2026-08-10; 2.3 2026-09-15)"
  - id: airbyte-agents
    resource: https://airbyte.com/blog/airbyte-agents
    title: "Airbyte blog: Airbyte Agents — A New Era for Airbyte (2026-05-04)"
  - id: bw-airbyte-21
    resource: https://www.businesswire.com/news/home/20260615814677/en/Airbyte-Announces-Update-to-Data-Movement-Platform-Plus-Industry-Recognition
    title: "Business Wire: Airbyte Announces Update to Data Movement Platform, Plus Industry Recognition (2026-06-15)"
  - id: airbyte-seriesb
    resource: https://airbyte.com/blog/a-150m-series-b-to-power-the-movement-of-data
    title: "Airbyte blog: A $150M Series B to power the movement of data (Dec 2021)"
  - id: contrary-airbyte
    resource: https://research.contrary.com/company/airbyte
    title: "Contrary Research: Airbyte business breakdown"
  - id: revelio-airbyte
    resource: https://www.reveliolabs.com/companies/airbyte/employees
    title: "Revelio Labs: Airbyte number of employees 2026"
---

# Summary
Airbyte remains one of the most-starred data-integration projects (22.2k)[^airbyte-gh]. Its core moved from MIT to ELv2 in 2021 and the ELv2 scope expanded to some connectors in 2023[^contrary-airbyte]. Airbyte 2.0 shipped on 2025-10-14, followed by 2.1 (2026-04-03), 2.2 (2026-08-10) and 2.3 (2026-09-15)[^airbyte-relnotes]. On 2026-05-04 it launched "Airbyte Agents" — a Context Store plus Agent MCP/SDK/CLI that CEO Michel Tricot called "early", with ~50 production-ready connectors[^airbyte-agents]; a June 2026 release touted a Forrester TEI study and industry awards[^bw-airbyte-21]. Its last priced round remains the $150M Series B of Dec 2021 at a $1.5B valuation[^airbyte-seriesb][^contrary-airbyte]; third-party data (Revelio Labs, not confirmed by the company) shows headcount around 130 in March 2026, down from a 2025 peak[^revelio-airbyte].

Corrected in pass 2: "Airbyte 2.2 released 2026-08-24" → 2026-08-10 per official release notes; added 2.1 and 2.3. Verdict: product active, business under pressure.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025 | Headcount peaks (~167 per third-party data), then declines[^revelio-airbyte] | Business | − |
| W12 | 2025-10-14 | Airbyte 2.0[^airbyte-relnotes] | OSS | + |
| W9 | 2026-03 | ~130 employees per Revelio Labs[^revelio-airbyte] | Business | − |
| W6 | 2026-04-03 | Airbyte 2.1[^airbyte-relnotes] | OSS | + |
| W6 | 2026-05-04 | Airbyte Agents launched (Context Store, Agent MCP/SDK/CLI)[^airbyte-agents] | Business | + |
| W3 | 2026-08-10 | Airbyte 2.2[^airbyte-relnotes] | OSS | + |
| W3 | 2026-09-15 | Airbyte 2.3[^airbyte-relnotes] | OSS | + |
| W3 | 2026-08/09 | Agent connector updates (semantic search; new certified connectors)[^airbyte-blog] | Business | + |

# OSS successes
- Large connector catalog and active daily commits[^airbyte-gh][^airbyte-blog].

# OSS failures / risks
- ELv2 means the platform is not OSI open source[^contrary-airbyte].

# Business successes
- Pivot to agent-data connectors gives a new narrative[^airbyte-blog].

# Business failures / risks
- No new priced round found since 2021[^airbyte-seriesb]; shrinking headcount[^revelio-airbyte]; Fivetran+dbt merger creates a ~$600M-ARR rival.

# By window
## W3
- Airbyte 2.2 (08-10) and 2.3 (09-15)[^airbyte-relnotes]; agent connector updates[^airbyte-blog].
## W6
- Airbyte 2.1 (04-03)[^airbyte-relnotes]; Airbyte Agents launch (05-04)[^airbyte-agents]; June platform update and awards[^bw-airbyte-21].
## W9
- Headcount ~130 (third-party)[^revelio-airbyte].
## W12
- Airbyte 2.0 (2025-10-14)[^airbyte-relnotes].
## W24
- Headcount decline from 2025 peak (third-party)[^revelio-airbyte].

# Lessons
- Connector breadth alone is commoditized; ingestion vendors needed transformation/semantic layers (Fivetran+dbt) or AI repositioning.

# Related
- [Fivetran](/organizations/fivetran.md), [dbt Core](/projects/data-engineering/dbt-core.md)

[^airbyte-gh]: Airbyte GitHub repository.
[^airbyte-blog]: Airbyte blog.
[^contrary-airbyte]: Contrary Research.
[^airbyte-relnotes]: Airbyte Self-Managed release notes.
[^airbyte-agents]: Airbyte blog, 2026-05-04.
[^bw-airbyte-21]: Business Wire, 2026-06-15.
[^airbyte-seriesb]: Airbyte blog, Dec 2021.
[^revelio-airbyte]: Revelio Labs (third-party estimate).
