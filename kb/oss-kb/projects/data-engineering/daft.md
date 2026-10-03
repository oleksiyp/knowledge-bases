---
type: OSS Project
title: Daft
description: Rust/Python distributed dataframe for multimodal data from Eventual ($30M raised incl. $20M Series A, June 2025); active 0.7.x releases, but its company has pivoted messaging toward physical-AI/robotics data and commit volume fell ~31% YoY.
resource: https://github.com/Eventual-Inc/Daft
tags: [dataframe, multimodal, rust, apache-2.0, company-led]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: company-led-open-core
steward: Eventual
backing_orgs: []
metrics:
  github_stars: { value: 5790, as_of: 2026-10-03 }
  default_branch_commits_apr_sep_2026: { value: 477, as_of: 2026-10-01, note: "vs 691 in Apr–Sep 2025" }
  total_funding_usd: { value: 30000000, as_of: 2025-06-24, note: "seed (CRV) + $20M Series A (Felicis)" }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T08:19:24Z }
sources:
  - id: daft-gh
    resource: https://github.com/Eventual-Inc/Daft
    title: Daft GitHub repository (v0.7.20–v0.7.25, Jul–Sep 2026)
    last_modified: 2026-10-03T00:00:00Z
  - id: eventual-blog
    resource: https://www.eventual.ai/blog
    title: Eventual blog
  - id: finsmes-eventual
    resource: https://www.finsmes.com/2025/06/eventual-raises-20m-in-series-a-funding.html
    title: "FinSMEs: Eventual Raises $20M in Series A Funding (2025-06-24)"
  - id: yahoo-tc-eventual
    resource: https://finance.yahoo.com/news/data-processing-problem-lyft-became-130000372.html
    title: "How a data-processing problem at Lyft became the basis for Eventual (TechCrunch via Yahoo Finance)"
---

# Summary
Daft targets multimodal (images, video, embeddings) data processing at scale. Its company, Eventual (founded by ex-Lyft engineers Sammy Sidhu and Jay Chia), raised a $20M Series A led by Felicis with M12 and Citi on 2025-06-24, for $30M total including a CRV-led seed[^finsmes-eventual][^yahoo-tc-eventual]. Daft ships frequently (v0.7.20 on 2026-07-14 through v0.7.25 on 2026-09-11)[^daft-gh], and Eventual's blog now centers robot-learning data, VLM evaluation and physical AI[^eventual-blog]. Default-branch commits fell from 691 to 477 (Apr–Sep YoY)[^daft-gh]. Verdict: OSS stable, company funded and repositioning toward AI data.

Corrected in pass 2: "funding unverified" → $20M Series A (June 2025), $30M total (FinSMEs/TechCrunch); business_verdict n/a → growing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-06-24 | Eventual raises $20M Series A (Felicis; M12, Citi), $30M total[^finsmes-eventual][^yahoo-tc-eventual] | Business | + |
| W3 | 2026-07-14 → 09-11 | v0.7.20 → v0.7.25[^daft-gh] | OSS | + |
| W3 | 2026-09 | Blog focus on VLM evaluation / robotics data[^eventual-blog] | Business | ± |

# OSS successes
- Regular releases; niche in multimodal AI data pipelines, used at Amazon, CloudKitchens and Together AI per Eventual[^daft-gh][^finsmes-eventual].

# OSS failures / risks
- Commit volume down ~31% YoY; still 0.x[^daft-gh].

# Business successes
- Series A from a top-tier lead in mid-2025[^finsmes-eventual].

# Business failures / risks
- No revenue disclosed; repositioning toward physical-AI data suggests the general dataframe market was not enough[^eventual-blog].

# By window
## W3
- 0.7.20–0.7.25[^daft-gh].
## W6
- 0.7.x releases[^daft-gh].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- $20M Series A (June 2025)[^finsmes-eventual]; higher commit activity than 2026[^daft-gh].

# Lessons
- Dataframe startups are differentiating on AI/multimodal workloads rather than tabular speed.

# Related
- [Polars](/projects/data-engineering/polars.md), [Apache Spark](/projects/data-engineering/apache-spark.md)

[^daft-gh]: Daft GitHub releases and commit history.
[^eventual-blog]: Eventual blog.
[^finsmes-eventual]: FinSMEs, 2025-06-24.
[^yahoo-tc-eventual]: TechCrunch article syndicated by Yahoo Finance.
