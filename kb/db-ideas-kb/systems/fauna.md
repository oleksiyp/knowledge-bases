---
type: System
title: Fauna (FaunaDB)
description: "Serverless, globally distributed document-relational database based on the Calvin deterministic transaction protocol, with its own query language (FQL). It was founded by ex-Twitter engineers and raised about $57M. The service shut down on 30 May 2025, and the core was released under Apache 2.0 and then went dormant."
resource: https://fauna.com
tags: [calvin, deterministic, serverless, document-relational, fql, graphql, shutdown]
kind: cloud-service
first_release: 2017
org: "Fauna Inc. (service shut down 2025)"
license: "Apache-2.0 (core released Apr 2025)"
outcome: dead
ideas: [ideas/distributed-sql/deterministic-transactions, ideas/distributed-sql/jepsen-correctness-culture, ideas/edge-devx/edge-databases, ideas/business-licensing/database-graveyard]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: j-fauna
    resource: https://jepsen.io/analyses/faunadb-2.5.4
    title: "Jepsen: FaunaDB 2.5.4 (2019-03)"
  - id: gw-27m
    resource: https://www.geekwire.com/2020/madrona-leads-27m-round-twitter-vets-fauna-database-startup-bob-muglia-named-chairman/
    title: "GeekWire: Madrona leads $27M round in Fauna; Bob Muglia named chairman (2020)"
  - id: tc-27m
    resource: https://techcrunch.com/2020/07/01/fauna-raises-an-additional-27m-to-turn-databases-into-a-simple-api-call/
    title: "TechCrunch: Fauna raises an additional $27M (2020-07-01)"
  - id: fql10
    resource: https://www.theregister.com/2023/08/22/fauna_query_language/
    title: "The Register: Fauna Query Language tamed (2023-08-22)"
  - id: graphql-eol
    resource: https://answers.netlify.com/t/faunadb-graphql-sunsetting-2023-migration/104395
    title: "Netlify forums: FaunaDB GraphQL sunsetting (2023)"
  - id: future
    resource: https://fauna.com/blog/the-future-of-fauna
    title: "Fauna: The Future of Fauna (2025-03)"
    author: org:fauna
  - id: eol-faq
    resource: https://docs.fauna.com/fauna/current/eol-faq/
    title: "Fauna Service End of Life FAQ"
    author: org:fauna
  - id: gh
    resource: https://github.com/fauna/faunadb
    title: "GitHub: fauna/faunadb"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary
Fauna was the only well-funded commercial implementation of Calvin-style deterministic transactions. It offered strictly serializable, multi-region transactions as a pay-per-request serverless API. The engineering was serious. A three-month Jepsen collaboration in 2019 found 19 issues, and Fauna fixed nearly all of them by 2.6.0[^j-fauna]. The product choices were risky. It used a proprietary functional query language (FQL), made a large GraphQL bet that it ended in 2023[^graphql-eol], and relaunched the language as TypeScript-like FQL v10 in Aug 2023[^fql10]. On 21 March 2025 Fauna announced that its board and investors could not raise the capital to keep going. It stopped taking new customers, switched the service off on 30 May 2025 and deleted all data[^future][^eol-faq]. The core was published under Apache 2.0 on GitHub (Apr 29, 2025) and has had no commits since early May 2025[^gh]. Pavlo's verdict: strong transactions arrived just as Spanner "made transactions cool again", but a proprietary query language and the GraphQL bet held it back[^pavlo-2025].

# Timeline
| Date | Event |
|---|---|
| 2019-03 | Jepsen analysis of 2.5.4[^j-fauna] |
| 2020-07 | $27M (about $57M total), Bob Muglia chairman[^tc-27m][^gw-27m] |
| 2023 | GraphQL API end-of-life. FQL v10 (Aug)[^graphql-eol][^fql10] |
| 2025-03-21 | Wind-down announced[^future] |
| 2025-04-29 | Core released, Apache-2.0[^gh] |
| 2025-05-30 | Service off, accounts deleted[^eol-faq] |

# What worked
- Correctness: one of the most thorough Jepsen results of its time[^j-fauna].
- A clean serverless developer experience and multi-region consistency without operations work.

# What didn't
- It asked developers to learn a new language, a new data model and a serverless-only deployment all at once.
- Its global DBaaS was capital-intensive and never reached scale before funding dried up[^future].
- Open-sourcing at shutdown did not produce a community[^gh].

# Related
- [Deterministic transactions](/ideas/distributed-sql/deterministic-transactions.md), [Jepsen culture](/ideas/distributed-sql/jepsen-correctness-culture.md), [Spanner](/systems/spanner.md)
- Events: [Fauna shuts down](/events/2025-03-fauna-shutdown.md)

[^j-fauna]: Jepsen, March 2019.
[^gw-27m]: GeekWire, 2020.
[^tc-27m]: TechCrunch, 2020-07-01.
[^fql10]: The Register, 2023-08-22.
[^graphql-eol]: Netlify support forum, 2023.
[^future]: Fauna blog, March 2025.
[^eol-faq]: Fauna docs.
[^gh]: GitHub fauna/faunadb, checked 2026-10-03.
[^pavlo-2025]: Pavlo, Databases in 2025.
