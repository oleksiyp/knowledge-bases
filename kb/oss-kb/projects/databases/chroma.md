---
type: OSS Project
title: Chroma
description: "Apache-2.0 embedding database popular in LLM prototyping (29k stars, 11-15M monthly downloads). It rewrote its core in Rust and launched Chroma Cloud GA (Aug 2025), but tagged releases slowed in 2026."
resource: https://github.com/chroma-core/chroma
tags: [vector-database, apache-2.0, rust, serverless]
domain: databases
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: company-led-open-core
steward: Chroma Inc.
backing_orgs: []
metrics:
  github_stars: { value: 29428, as_of: 2026-10-03 }
  latest_tagged_release: { value: "1.5.9", as_of: 2026-05-05 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: chroma-gh
    resource: https://github.com/chroma-core/chroma
    title: Chroma GitHub repository
  - id: chroma-site
    resource: https://www.trychroma.com/
    title: Chroma website (Cloud GA, download stats)
    author: org:chroma
  - id: chroma-cloud-ga
    resource: https://www.trychroma.com/changelog/introducing-chroma-cloud
    title: "Chroma changelog: Introducing Chroma Cloud (2025-08-18)"
    author: org:chroma
  - id: chroma-1
    resource: https://www.trychroma.com/project/1.0.0
    title: "Chroma: Chroma is now 4x faster (1.0.0, Rust core)"
    author: org:chroma
  - id: chroma-seed
    resource: https://www.trychroma.com/company/seed
    title: "Chroma raises $18M seed round (Apr 2023)"
    author: org:chroma
  - id: chroma-wiki
    resource: https://en.wikipedia.org/wiki/Chroma_(vector_database)
    title: Chroma — Wikipedia
---

# Summary
Chroma remains one of the most-used vector stores for prototyping. Its site claims 11-15M monthly downloads and use in 90k+ open-source codebases[^chroma-site], and the repo has 29.4k stars[^chroma-gh]. Its commercial bet is Chroma Cloud, a serverless, object-storage-backed service with BYOC options, GA since Aug 18 2025, running on AWS and GCP with collection forking[^chroma-cloud-ga]. The 1.0 series rebuilt the core in Rust ("4x faster" local writes and queries, true multithreading)[^chroma-1]; v1.0.15 shipped in July 2025[^chroma-wiki]. The most recent tagged release is 1.5.9 (May 2026), although the repo is pushed daily[^chroma-gh]. The only disclosed funding is the $18M seed led by Quiet Capital in Apr 2023[^chroma-seed].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07-02 | v1.0.15 (Rust-core 1.x line) [^chroma-wiki] | OSS | + |
| W24 | 2025-08-18 | Chroma Cloud GA (AWS, GCP; serverless, BYOC) [^chroma-cloud-ga] | Business | + |
| W6 | 2026-05-05 | 1.5.9, the latest tagged release [^chroma-gh] | OSS | flat |

# OSS successes
- Massive download footprint and a permissive license[^chroma-site].

# OSS failures / risks
- Tagged release cadence slowed in mid-2026[^chroma-gh].

# Business successes
- Cloud GA[^chroma-cloud-ga].

# Business failures / risks
- No new funding disclosed. Prototype users often graduate to Postgres/pgvector or managed services.

# By window
## W3
- No notable events found.
## W6
- 1.5.9[^chroma-gh].
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- 1.0.x Rust line. Cloud GA[^chroma-1][^chroma-cloud-ga].

# Lessons
- Download counts from tutorials and frameworks do not translate easily into paid cloud usage.

# Related
- [Qdrant](/projects/databases/qdrant.md), [Milvus](/projects/databases/milvus.md), [LanceDB](/projects/databases/lancedb.md)

[^chroma-gh]: GitHub API, chroma-core/chroma, 2026-10-03.
[^chroma-site]: trychroma.com, accessed 2026-10-03.
[^chroma-wiki]: Wikipedia, Chroma.
[^chroma-cloud-ga]: Chroma changelog, 2025-08-18.
[^chroma-1]: Chroma 1.0.0 announcement page.
[^chroma-seed]: Chroma company post, Apr 2023.
