---
type: OSS Project
title: Weaviate
description: "Open-source (BSD-3-Clause) AI-native vector database with a fast release train (1.38 to 1.39 in 2026, built-in MCP server GA). No priced round since its $50M Series B (Apr 2023), only a Ricoh strategic investment (June 2026)."
resource: https://github.com/weaviate/weaviate
tags: [vector-database, bsd-3-clause, open-core, mcp]
domain: databases
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: company-led-open-core
steward: Weaviate B.V.
backing_orgs: []
metrics:
  github_stars: { value: 16859, as_of: 2026-10-03 }
  latest_release: { value: "v1.39.8", as_of: 2026-10-01 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wv-gh
    resource: https://github.com/weaviate/weaviate
    title: Weaviate GitHub repository
  - id: wv-blog
    resource: https://weaviate.io/blog
    title: Weaviate blog index (1.38, 1.39)
    author: org:weaviate
  - id: gn-ricoh
    resource: https://japanstartupobserver.substack.com/p/ricoh-backs-ai-database-startup-weaviate
    title: "Japan Startup Observer: Ricoh Backs AI Database Startup Weaviate (2026-06-16)"
  - id: recycler-ricoh
    resource: https://therecycler.com/posts/ricoh-backs-dutch-ai-startup-as-digital-transformation-strategy-gathers-pace/
    title: "The Recycler: Ricoh backs Dutch AI startup as digital transformation strategy gathers pace (2026-06-17)"
  - id: wv-about
    resource: https://weaviate.io/company/about-us
    title: Weaviate about page (funding, headcount)
    author: org:weaviate
---

# Summary
Weaviate ships often. 1.38 (June 25 2026) made the HFresh disk-based index and a built-in MCP server GA. 1.39 (Aug 13 2026) added the Boost API, MMR diversity and 4-bit rotational quantization in preview[^wv-blog]. Patches arrive weekly (v1.39.8, Oct 1 2026)[^wv-gh]. The company lists 90 employees and 15M+ downloads. Its most recent disclosed funding is still the $50M Series B from Apr 2023 (Index Ventures)[^wv-about]. The only new capital found is a strategic investment from Ricoh's innovation fund (announced June 16 2026, amount undisclosed)[^gn-ricoh][^recycler-ricoh]. That is a weak business signal compared with Qdrant's $50M Series B.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026-06-16 | Ricoh strategic investment (undisclosed) [^gn-ricoh] | Business | + |
| W6 | 2026-06-25 | 1.38: HFresh GA, MCP Server GA [^wv-blog] | OSS | + |
| W3 | 2026-08-13 | 1.39: Boost API, MMR, RQ-4bit preview [^wv-blog] | OSS | + |
| W3 | 2026-10-01 | v1.39.8 [^wv-gh] | OSS | + |

# OSS successes
- A fast release cadence and early MCP integration for agents[^wv-blog].

# OSS failures / risks
- A smaller community (16.9k stars) than Milvus or Qdrant[^wv-gh].

# Business successes
- Steady product progress.

# Business failures / risks
- No priced round disclosed since 2023. Only a Ricoh strategic investment[^wv-about][^gn-ricoh]. Vector search is being commoditised.

# By window
## W3
- 1.39[^wv-blog].
## W6
- 1.38. Ricoh investment[^wv-blog][^gn-ricoh].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- No notable events found in this research.

# Lessons
- Release velocity alone does not bring new capital. Investors in 2026 favour "agent infrastructure" stories over vector stores.

# Related
- [Qdrant](/projects/databases/qdrant.md), [Milvus](/projects/databases/milvus.md), [Chroma](/projects/databases/chroma.md)

[^wv-gh]: GitHub API, weaviate/weaviate, 2026-10-03.
[^wv-blog]: Weaviate blog index.
[^wv-about]: Weaviate about page, accessed 2026-10-03.
[^gn-ricoh]: Japan Startup Observer, 2026-06-16.
[^recycler-ricoh]: The Recycler, 2026-06-17.
