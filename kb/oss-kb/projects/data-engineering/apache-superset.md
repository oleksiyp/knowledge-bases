---
type: OSS Project
title: Apache Superset
description: The most-starred open-source BI tool (~75k); shipped 5.0, 6.0 (Dec 2025, themeability) and 6.1 (May 2026), with commit volume up ~4x YoY, while Preset raised a small ($7.27M) a16z-led Series C in March 2026 and bet on MCP/agentic analytics.
resource: https://github.com/apache/superset
tags: [bi, visualization, apache-2.0, asf]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: [organizations/preset]
metrics:
  github_stars: { value: 75015, as_of: 2026-10-03 }
  default_branch_commits_apr_sep_2026: { value: 4012, as_of: 2026-10-01, note: "vs 900 in Apr–Sep 2025" }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: superset-gh
    resource: https://github.com/apache/superset
    title: Apache Superset GitHub repository (tags 6.0.0 2025-12-04, 6.1.0 2026-05-01)
    last_modified: 2026-10-03T00:00:00Z
  - id: preset-blog
    resource: https://preset.io/blog/
    title: Preset blog (Superset 5.0/6.0/6.1 releases; Series C led by a16z; OSI; MCP)
  - id: preset-seriesc
    resource: https://preset.io/blog/preset-series-c/
    title: "Preset blog: Preset Raises Series C Led by a16z ($7.27M, 2026-03-09)"
  - id: preset-recap-jul
    resource: https://preset.io/blog/apache-superset-repo-recap-july-2026/
    title: "Preset: Apache Superset Repo Recap, July 2026 (664 PRs, 132 contributors, 74k stars)"
  - id: preset-june-news
    resource: https://preset.io/blog/preset-ai-agent-skills-june-2026-newsletter/
    title: "Preset: What's New in Preset? June 2026 (open-source Agent Skills library)"
  - id: snow-osi
    resource: https://www.snowflake.com/en/blog/open-semantic-interchange-ai-standard/
    title: "Snowflake: Open Semantic Interchange initiative (2025-09-23)"
---

# Summary
Superset is the open-source BI default for engineers. Superset 5.0 shipped in 2025, 6.0 on 2025-12-04 (theming overhaul) and 6.1 on 2026-05-01[^superset-gh][^preset-blog]. Default-branch commits jumped from 900 (Apr–Sep 2025) to 4,012 (Apr–Sep 2026) — likely partly AI-assisted development, which Preset openly discusses[^superset-gh][^preset-blog]. Preset, the main commercial steward, announced a $7.27M Series C led by a16z with Redpoint and Datatech.fund on 2026-03-09, citing 400+ customers[^preset-seriesc]; it also shipped HIPAA compliance, Azure private cloud, a Preset MCP server and chatbot, and joined the Open Semantic Interchange[^preset-blog][^snow-osi]. Monthly repo recaps show broad participation, e.g. 664 PRs from 132 contributors in July 2026[^preset-recap-jul]. Verdict: thriving.

Corrected in pass 2: Preset Series C "date and amount unverified" → $7.27M, 2026-03-09 (Preset blog).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025 (mid) | Superset 5.0 release[^preset-blog] | OSS | + |
| W24 | 2025-09-23 | Open Semantic Interchange launched (Preset later joins)[^snow-osi][^preset-blog] | Business | + |
| W12 | 2025-12-04 | Superset 6.0.0[^superset-gh] | OSS | + |
| W9 | 2026-03-09 | Preset $7.27M Series C led by a16z[^preset-seriesc] | Business | + |
| W6 | 2026-05-01 | Superset 6.1.0[^superset-gh] | OSS | + |
| W6 | 2026-06 | Preset releases open-source Agent Skills library[^preset-june-news] | OSS/Business | + |
| W3 | 2026-04→09 | Commit volume ~4.5x YoY[^superset-gh] | OSS | + |

# OSS successes
- Highest stars in the domain; explosive commit growth[^superset-gh].

# OSS failures / risks
- Commit inflation may partly reflect AI-assisted churn rather than proportional contributor growth (an inference; contributor counts did rise, e.g. 132 in July 2026[^preset-recap-jul]).

# Business successes
- Preset Series C (a16z lead, $7.27M) and AI/MCP product line[^preset-seriesc][^preset-blog].

# Business failures / risks
- The Series C was small for a late-stage round ($7.27M), signalling a capital-efficient but modest-scale business[^preset-seriesc].
- BI is crowded (Metabase, Lightdash, Evidence, proprietary tools adding AI).

# By window
## W3
- Continued monthly dev recaps; MCP/agent skills[^preset-blog].
## W6
- 6.1.0[^superset-gh]; Preset Agent Skills library[^preset-june-news].
## W9
- Preset Series C ($7.27M, a16z)[^preset-seriesc].
## W12
- 6.0.0[^superset-gh].
## W24
- 5.0; OSI[^preset-blog][^snow-osi].

# Lessons
- Foundation-hosted BI with a single main vendor (Preset) has avoided license drama while growing.

# Related
- [Preset](/organizations/preset.md), [Metabase](/projects/data-engineering/metabase.md), [Cube](/projects/data-engineering/cube.md)

[^superset-gh]: Apache Superset GitHub tags and commit history.
[^preset-blog]: Preset blog.
[^snow-osi]: Snowflake blog, OSI.
[^preset-seriesc]: Preset blog, 2026-03-09.
[^preset-recap-jul]: Preset blog, July 2026 repo recap.
[^preset-june-news]: Preset newsletter, June 2026.
