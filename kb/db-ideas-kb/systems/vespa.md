---
type: System
title: Vespa
description: "Yahoo's big-data serving engine (search, recommendation, vectors, ML ranking), open-sourced in 2017 and spun out as Vespa.ai in October 2023 with $31M. A mature hybrid-search engine that had vectors before the boom, and evidence that retrieval favors full search engines."
resource: https://vespa.ai
tags: [search-engine, vector-search, ranking, hybrid-search, open-source]
kind: oss
first_release: 2017
org: "Vespa.ai AS (spun out of Yahoo, 2023)"
license: Apache-2.0
outcome: stable
ideas: [ideas/vector-ai/dedicated-vector-databases, ideas/vector-ai/rag-stack-consolidation-and-graphrag]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: v-tc
    resource: https://techcrunch.com/2023/11/01/yahoo-spin-out-vespa-lands-31m-investment-from-blossom
    title: "TechCrunch: Yahoo spin-out Vespa lands $31M investment from Blossom"
  - id: v-blog
    resource: https://blog.vespa.ai/announcing-our-series-a-funding/
    title: "Vespa blog: Announcing our Series A funding"
    author: org:vespa
  - id: v-gh
    resource: https://github.com/vespa-engine/vespa
    title: "vespa-engine/vespa GitHub repository (≈7.1k stars, 2026-10-03)"
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
---

# Summary

Vespa came from Yahoo's acquisition of Overture/AlltheWeb and was retooled as a general engine for real-time computation over large datasets: text search, structured filters, tensors/vectors and ML-model ranking in one distributed system.[^v-tc] Yahoo open-sourced it in 2017. In October 2023 Vespa.ai was spun out as an independent company with a $31M investment from Blossom Capital, selling Vespa Cloud; users of the open-source or cloud product include Spotify, OkCupid and Wix.[^v-tc][^v-blog] Pavlo's 2023 framing put vector DBs either on a path to becoming general databases, or remaining secondary systems "like search engines (Elasticsearch, Vespa)".[^pavlo-2023] Vespa is the existence proof of the second path.

# Timeline

| Date | Event |
|---|---|
| 2017 | Open-sourced by Yahoo (Oath) |
| 2023-10 | Spun out as Vespa.ai; $31M from Blossom Capital[^v-tc] |

# What worked

- Hybrid lexical + vector + learned ranking at web scale, years before "hybrid search" was a RAG buzzword.
- An independent company with a mature codebase and no need to chase the "vector DB" label.

# What didn't

- Steep learning curve and smaller community (about 7k stars) compared with Elasticsearch and the vector startups.[^v-gh]

# Related

- [RAG stack consolidation](/ideas/vector-ai/rag-stack-consolidation-and-graphrag.md) · [Elasticsearch](/systems/elasticsearch.md)

[^v-tc]: TechCrunch.
[^v-blog]: Vespa blog.
[^v-gh]: GitHub API.
[^pavlo-2023]: Pavlo, 2023 review.
