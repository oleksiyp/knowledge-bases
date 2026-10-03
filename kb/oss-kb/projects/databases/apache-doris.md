---
type: OSS Project
title: Apache Doris
description: "ASF top-level, Apache-2.0 real-time analytics database (16k stars). It ships regularly (4.1.x in Sept 2026) and is commercialised by VeloDB. A stable foundation project with limited Western mindshare."
resource: https://github.com/apache/doris
tags: [olap, apache-2.0, asf, foundation-hosted]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: []
metrics:
  github_stars: { value: 16023, as_of: 2026-10-03 }
  latest_release: { value: "4.1.4.1", as_of: 2026-09-29 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: doris-gh
    resource: https://github.com/apache/doris
    title: Apache Doris GitHub repository
  - id: doris-blog
    resource: https://doris.apache.org/blog/
    title: Apache Doris blog (5.0 preview, Lance integration, Doris Summit 26)
    author: org:apache
  - id: velodb-about
    resource: https://www.velodb.io/about
    title: About VeloDB (commercial company founded by Doris creators, May 2023)
    author: org:velodb
  - id: tracxn-velodb
    resource: https://tracxn.com/d/companies/velodb/__RfW2ZHPJAE9eoJcWnxWmrQZcnep1lJu6wfZ22v1gNDQ
    title: "Tracxn: VeloDB company profile (aggregator)"
---

# Summary
Apache Doris has 16k stars and a steady 4.1.x release line (4.1.4 on Sept 7 2026, 4.1.4.1 on Sept 29 2026)[^doris-gh]. It remains one of the most-starred open-source OLAP engines after ClickHouse. VeloDB, founded in May 2023 by Doris's original developers, is its commercial steward[^velodb-about]; no priced VeloDB funding round could be found in press or company announcements (aggregators conflict on whether it has raised beyond seed)[^tracxn-velodb]. A Doris 5.0 preview ("unified multimodal lakehouse") was published on Sept 4 2026, alongside Lance integration for physical-AI analytics, and Doris Summit 26 is set for Oct 21-22[^doris-blog]. No licensing or governance events were found, so the business verdict is n/a.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W3 | 2026-09-04 | Doris 5.0 preview: unified multimodal lakehouse [^doris-blog] | OSS | + |
| W3 | 2026-09-07 / 09-29 | 4.1.4 and 4.1.4.1 [^doris-gh] | OSS | + |
| W3 | 2026-09-08 | Lance dataset integration for autonomous-driving/robotics analytics [^doris-blog] | OSS | + |

# OSS successes
- ASF governance and active releases[^doris-gh].

# OSS failures / risks
- Concentrated contributor base. Weaker presence outside Asia (qualitative).

# Business successes
- VeloDB sells a managed cloud (VeloDB Cloud, also on AWS Marketplace) on top of Doris[^velodb-about]. No revenue or funding figures are public.

# Business failures / risks
- No disclosed priced funding for VeloDB; it competes against far better-capitalised ClickHouse (~$15B) and PhoenixAI/StarRocks[^tracxn-velodb].

# By window
## W3
- 4.1.4.x, 5.0 preview, Lance integration[^doris-gh][^doris-blog].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found in this research.

# Lessons
- Foundation hosting gives durability but not market share. ClickHouse captured the category's capital.

# Related
- [StarRocks](/projects/databases/starrocks.md), [ClickHouse](/projects/databases/clickhouse.md)

[^doris-gh]: GitHub API, apache/doris releases, 2026-10-03.
[^doris-blog]: Apache Doris blog, accessed 2026-10-03.
[^velodb-about]: VeloDB about page.
[^tracxn-velodb]: Tracxn aggregator profile (conflicting/unconfirmed funding data).
