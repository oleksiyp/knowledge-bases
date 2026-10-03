---
type: Idea
title: "The database company graveyard, 2018–2026"
description: "A sourced list of database companies and products that shut down, were absorbed and discontinued, or exited at a loss between 2018 and 2026, with the causes. Verdict on the underlying bet (that a new venture-funded database can become an independent company): failed more often than not. Common causes were the capital cost of running a global DBaaS, Postgres absorbing the niche, and acquirers wanting the team rather than the product."
tags: [shutdowns, failures, startups, acquisitions, postmortem, graveyard]
area: business-licensing
verdict: failed
hype_peak: 2025
adoption_2026: rare
origins: "RethinkDB (company shut down 2016, project moved to the Linux Foundation) and FoundationDB (bought by Apple in 2015) are the pre-2018 precedents."
key_systems: [systems/fauna, systems/ottertune, systems/rockset, systems/postgresml, systems/voltron-data, systems/edgedb-gel, systems/kuzu, systems/amazon-qldb, systems/mariadb, systems/couchbase, systems/singlestore, systems/datastax, systems/dgraph, systems/heavydb]
related_ideas: [ideas/business-licensing/funding-boom-and-consolidation, ideas/business-licensing/database-acquisitions-as-ai-acquihires, ideas/business-licensing/managed-service-is-the-business]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: fauna-future
    resource: https://fauna.com/blog/the-future-of-fauna
    title: "Fauna: The Future of Fauna (Mar 2025)"
  - id: infoq-fauna
    resource: https://www.infoq.com/news/2025/03/fauna-shuts-down/
    title: "InfoQ: Fauna shutting down (Mar 2025)"
  - id: ottertune-dead
    resource: https://ottertune.com/about-us
    title: "OtterTune is Dead (2020–2024)"
  - id: hn-ottertune
    resource: https://news.ycombinator.com/item?id=40682165
    title: "Hacker News: OtterTune is dead (June 2024)"
  - id: bnf-rockset
    resource: https://blocksandfiles.com/2024/06/24/openai-buys-rockset/
    title: "Blocks & Files: OpenAI buys Rockset (2024-06-24)"
  - id: bitio-sunset
    resource: https://blog.bit.io/whats-next-for-bit-io-joining-databricks-ace9a40bce0d
    title: "bit.io: What's next for bit.io, joining Databricks (2023)"
  - id: gel-vercel
    resource: https://www.geldata.com/blog/gel-joins-vercel
    title: "Gel joins Vercel (Dec 2025)"
  - id: kuzu-macrumors
    resource: https://www.macrumors.com/2026/02/11/apple-acquires-new-database-app/
    title: "MacRumors: Apple acquires Kuzu (2026-02-11)"
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: mariadb-tc
    resource: https://techcrunch.com/2024/02/20/mariadbs-potential-take-private-deal-is-an-indictment-of-2021s-spac-mania/
    title: "TechCrunch: MariaDB's potential take-private deal is an indictment of 2021's SPAC mania (2024-02-20)"
  - id: couchbase-close
    resource: https://www.couchbase.com/press-releases/haveli-investments-completes-acquisition-of-couchbase/
    title: "Couchbase: Haveli completes acquisition (2025-09-24)"
  - id: singlestore-bnf
    resource: https://www.blocksandfiles.com/ai-ml/2025/09/17/singlestore-sidesteps-into-private-equity-ownership/1589537
    title: "Blocks & Files: SingleStore sidesteps into private equity ownership (2025-09-17)"
  - id: dbta-datastax
    resource: https://www.dbta.com/Editorial/News-Flashes/IBM-Officially-Closes-Acquisition-of-DataStax-169711.aspx
    title: "DBTA: IBM officially closes acquisition of DataStax (May 2025)"
  - id: hypermode-dgraph
    resource: https://hypermode.com/blog/dgraph-part-of-hypermode
    title: "Hypermode: Dgraph Labs is becoming part of Hypermode (2023)"
  - id: istari-dgraph
    resource: https://www.morningstar.com/news/pr-newswire/20251023ph05843/istari-digital-acquires-dgraph-to-strengthen-data-foundation-for-ai-and-engineering
    title: "Istari Digital acquires Dgraph (2025-10-23)"
  - id: crdb-private
    resource: https://www.cockroachlabs.com/blog/source-code-protection/
    title: "Cockroach Labs: Protecting source code in the age of AI (2026-09-15)"
---

# Summary

**Verdict: failed (for most of the cohort).** Between 2018 and 2026 at least a dozen funded database companies or products were shut down, and many more were absorbed into a buyer that discontinued the product or sold at or below their earlier valuation. The pattern is clear. Running a new operational database as a global managed service needs more capital than most startups can raise after 2022 (Fauna). Niche data models lost to PostgreSQL extensions (PostgresML, Hydra, Tembo's hosted service). Buyers in the AI era wanted teams, not products (Rockset, bit.io, Gel, Kùzu). Companies that did survive often did so as private-equity holdings (MariaDB, Couchbase, SingleStore). The table below lists only cases with a public source; "shut down" means the service or company ended, not that the open-source code disappeared. The "main cause" column is this KB's assessment unless the cited source states the cause (Fauna, OtterTune, Rockset, bit.io do).

# The idea

The bet under every entry is the same: a better database engine plus venture capital can become an independent, durable company. The graveyard records where that bet lost and why.

# The graveyard

| Company / product | Fate | Date | What happened | Main cause | Source |
|---|---|---|---|---|---|
| Fauna (FaunaDB) | Shut down | Service ended 30 May 2025 | Distributed, Calvin-style serverless document DB. Promised to open-source the core | Could not raise capital for a global DBaaS | [^fauna-future][^infoq-fauna] |
| OtterTune | Shut down | June 2024 | ML-based database tuning SaaS from CMU research; raised a $12M Series A in 2022 | Acquisition offer from a "PE Postgres company" fell through; narrow product | [^ottertune-dead][^hn-ottertune][^pavlo-2024] |
| Rockset | Acquired, product shut | Acquired June 2024; service ended Sept 2024 | Real-time indexing DB; team moved into OpenAI retrieval | Buyer wanted team and tech | [^bnf-rockset] |
| bit.io | Acquired, product shut | Sunset 29 June 2023 | Serverless Postgres; team joined Databricks | Acquihire | [^bitio-sunset] |
| PostgresML | Shut down | 2025 | ML inference inside Postgres | Niche absorbed by AI APIs and extensions | [^pavlo-2025] |
| Voltron Data | Shut down | 2025 | GPU-accelerated query engine (Theseus), Arrow ecosystem | Product launch failed to find buyers | [^pavlo-2025] |
| Hydra | Shut down (unofficial) | 2025 | DuckDB-inside-Postgres columnar engine | Overtaken by pg_duckdb and others | [^pavlo-2025] |
| MyScaleDB | Shut down | May 2025 | ClickHouse fork with vector search | Vector DB commoditization | [^pavlo-2025] |
| Tembo | Pivoted | 2025 | Discontinued hosted Postgres | Crowded Postgres hosting market | [^pavlo-2025] |
| Gel (EdgeDB) | Company ended; team to Vercel | Dec 2025; Gel Cloud closed 31 Jan 2026 | Postgres-based DB with its own query language; OSS remains | New query language did not reach scale | [^gel-vercel][^pavlo-2025] |
| Kùzu | Acquired by Apple, OSS archived | Agreed 9 Oct 2025; repo archived 10 Oct 2025 | Embedded graph DB; deal revealed via EU filing in Feb 2026 | Acquihire | [^kuzu-macrumors] |
| Amazon QLDB | Discontinued | Deprecation announced 2024 | Ledger database | No demand for ledger DBs | [^pavlo-2024] |
| MariaDB Xpand and SkySQL | Killed / spun out | 2023 | Distributed SQL (ex-Clustrix) and DBaaS | MariaDB plc cash crisis | [^pavlo-2023] |
| MariaDB plc | Taken private at ~$37M | 2024 | Listed via SPAC at $10 (Dec 2022); ~$0.35 before offer | Weak cloud business, SPAC route | [^mariadb-tc] |
| Dgraph Labs | Sold twice | Hypermode Nov 2023; Istari Digital Oct 2025 | Distributed graph DB | Graph DB niche; funding dried up | [^hypermode-dgraph][^istari-dgraph] |
| DataStax | Acquired by IBM | Closed May 2025 | Cassandra / Astra DB vendor, valued at $1.6B in 2022 | Sub-scale; pivoted to AI tooling (Langflow) | [^dbta-datastax] |
| Couchbase | Taken private (PE) | Sept 2025 | Sold for $24.50/share vs $24 IPO | Slow growth as public company | [^couchbase-close] |
| SingleStore (ex-MemSQL) | PE buyout | Sept 2025 | Vector Capital; ~$123M ARR, +23% | No IPO path; still operating | [^singlestore-bnf] |
| HeavyDB (HEAVY.AI, ex-OmniSci/MapD) | Acquired by Nvidia | 2025 | GPU database | GPU analytics did not become a standalone market | [^pavlo-2025] |
| CockroachDB (as open source) | Source moved private | Sept 2026 | Company healthy; public repo frozen | Licensing ratchet; AI cited | [^crdb-private] |

Note on scope: survivors acquired at a good price (Neon, Tabular, Crunchy Data, WarpStream, DuckLabs) are covered in [AI-era acquisitions](/ideas/business-licensing/database-acquisitions-as-ai-acquihires.md), not here.

# Timeline 2018–2026

| Year | Event | Signal +/− |
|---|---|---|
| 2023 | bit.io sunset; MariaDB kills Xpand and SkySQL; Dgraph sold to Hypermode | − |
| 2024 | OtterTune dies; Rockset service shut; MariaDB taken private; QLDB deprecated | − |
| 2025 | Fauna, PostgresML, Voltron Data, Hydra, MyScaleDB shut; DataStax, Couchbase, SingleStore, HeavyDB, Dgraph change hands; Kùzu archived; Gel ends | − (peak) |
| 2026 | Gel Cloud closes (Jan); CockroachDB source goes private (Sept) | − |

# What succeeded

- **Code mostly survived companies.** Fauna promised an open-source core, Gel stays open source, Kùzu has community forks and RethinkDB-style community continuation is common. Users of the open-source edition were less exposed than users of the hosted service.
- **PE kept products alive.** MariaDB, Couchbase and SingleStore all still ship under new owners.

# What failed

- **Hosted-service customers bore the risk.** Rockset, bit.io, Fauna and Gel Cloud gave customers weeks to months to migrate.
- **New query languages and models died first.** FQL (Fauna), EdgeQL (Gel) and ML-in-Postgres (PostgresML) did not reach escape velocity against SQL and Postgres.

# Why

1. **Capital intensity of DBaaS.** A global, multi-region managed service has high fixed costs before revenue arrives. Fauna said so directly.[^fauna-future]
2. **Postgres gravity.** Many deaths are products that Postgres plus an extension now covers (ML inference, columnar analytics, hosted Postgres variants, vector search).
3. **AI-era acquirers wanted people.** Rockset, bit.io, Gel and Kùzu ended as team purchases.
4. **Rate shock and over-capitalization.** Companies funded at 2021 valuations could not raise in 2023–2025 without damaging down rounds. Pavlo predicted in early 2024 that they would "get gobbled up ... or just die".[^pavlo-2023]

# Lessons

- Before adopting a startup database, ask what happens to your data if the hosted service ends with 60 days' notice. Prefer engines with open-source self-hosting and standard interfaces.
- A new query language raises the bar for survival; SQL compatibility has been a survival trait.
- Private-equity ownership is not death, but it usually means maintenance-mode roadmaps and higher prices.

# Related

- [Funding boom and consolidation](/ideas/business-licensing/funding-boom-and-consolidation.md) · [AI-era acquisitions](/ideas/business-licensing/database-acquisitions-as-ai-acquihires.md)
- Events: [Fauna shuts down](/events/2025-03-fauna-shuts-down.md), [OtterTune shuts down](/events/2024-06-ottertune-shuts-down.md), [OpenAI acquires Rockset](/events/2024-06-openai-acquires-rockset.md), [MariaDB taken private](/events/2024-09-mariadb-taken-private-by-k1.md), [Apple acquires Kùzu](/events/2025-10-apple-acquires-kuzu.md), [Gel joins Vercel](/events/2025-12-gel-joins-vercel.md)

[^fauna-future]: Fauna blog, Mar 2025.
[^infoq-fauna]: InfoQ, Mar 2025.
[^ottertune-dead]: OtterTune website.
[^hn-ottertune]: Hacker News, June 2024.
[^bnf-rockset]: Blocks & Files, 2024-06-24.
[^bitio-sunset]: bit.io blog, 2023.
[^gel-vercel]: Gel blog, Dec 2025.
[^kuzu-macrumors]: MacRumors, 2026-02-11.
[^pavlo-2023]: Andy Pavlo, Databases in 2023.
[^pavlo-2024]: Andy Pavlo, Databases in 2024.
[^pavlo-2025]: Andy Pavlo, Databases in 2025.
[^mariadb-tc]: TechCrunch, 2024-02-20.
[^couchbase-close]: Couchbase press release, 2025-09-24.
[^singlestore-bnf]: Blocks & Files, 2025-09-17.
[^dbta-datastax]: DBTA, May 2025.
[^hypermode-dgraph]: Hypermode blog, 2023.
[^istari-dgraph]: PR Newswire, 2025-10-23.
[^crdb-private]: Cockroach Labs blog, 2026-09-15.
