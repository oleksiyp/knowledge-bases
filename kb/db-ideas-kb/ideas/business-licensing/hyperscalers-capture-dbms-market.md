---
type: Idea
title: "Hyperscalers capture the database market"
description: "Cloud providers became the largest database vendors by reselling open-source engines and building compatible ones (RDS, Aurora, DocumentDB, OpenSearch Service, ElastiCache). Verdict: won. Cloud dbPaaS passed 50% of DBMS revenue by 2022 per Gartner and AWS became the #1 DBMS vendor by revenue. Independent vendors survived only with their own managed service or a licensed partnership."
tags: [cloud, hyperscalers, aws, market-share, gartner, strip-mining, dbaas]
area: business-licensing
verdict: won
hype_peak: 2021
adoption_2026: mainstream
origins: "Amazon RDS (2009), DynamoDB (2012) and Aurora (2014). Gartner's 2019 note 'the future of the database market is the cloud'."
key_systems: [systems/aurora, systems/dynamodb, systems/documentdb, systems/opensearch, systems/valkey, systems/mongodb, systems/elasticsearch]
related_ideas: [ideas/business-licensing/source-available-licenses, ideas/business-licensing/managed-service-is-the-business, ideas/business-licensing/forks-as-backlash, ideas/cloud-architecture/managed-dbaas-vs-repatriation]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: gartner-2019
    resource: https://www.gartner.com/en/newsroom/press-releases/2019-07-01-gartner-says-the-future-of-the-database-market-is-the
    title: "Gartner: The future of the database market is the cloud (2019-07-01)"
  - id: gartner-2022-share
    resource: https://www.gartner.com/en/documents/4432699
    title: "Gartner: Market Share Analysis: Database Management Systems, Worldwide, 2022"
  - id: reg-gartner-2026
    resource: https://www.theregister.com/software/2026/04/21/the-dbms-chart-that-shows-oracles-crown-is-slowly-slipping/5226401
    title: "The Register: The DBMS chart that shows Oracle's crown is slowly slipping (2026-04-21)"
  - id: reg-gartner-2020
    resource: https://www.theregister.com/2020/12/02/gartner_cloud_dbms/
    title: "The Register: 75% of databases to be cloud-hosted by 2022, says Gartner (2020-12-02)"
  - id: documentdb-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2019/01/amazon-documentdb-with-mongodb-compatibility-generally-available/
    title: "AWS: Amazon DocumentDB (with MongoDB compatibility) generally available (2019-01-09)"
  - id: documentdb-geekwire
    resource: https://www.geekwire.com/2019/amazon-web-services-calls-mongodbs-licensing-bluff-documentdb-new-managed-database/
    title: "GeekWire: AWS calls MongoDB's licensing bluff with DocumentDB (Jan 2019)"
  - id: elastic-tm
    resource: https://www.theregister.com/2022/02/17/elastic_amazon_trademark/
    title: "The Register: Elastic and Amazon settle trademark case (2022-02-17)"
  - id: aws-valkey
    resource: https://aws.amazon.com/about-aws/whats-new/2024/10/amazon-elasticache-valkey
    title: "AWS: Announcing Amazon ElastiCache for Valkey (2024-10-08)"
  - id: gcp-next19
    resource: https://www.nextplatform.com/cloud/2019/04/12/google-turns-to-partners-in-cloud-tangle/1647586
    title: "The Next Platform: Google turns to partners in cloud tangle (2019-04-12)"
  - id: mdb-alibaba
    resource: https://www.mongodb.com/press/mongodb-and-alibaba-cloud-launch-new-partnership
    title: "MongoDB and Alibaba Cloud launch new partnership (2019-10-30)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: duck-aws
    resource: https://duckdb.org/2026/08/26/ducklabs-to-join-aws
    title: "DuckDB: DuckLabs to join AWS, projects to remain open source (2026-08-26)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: ccn-gartner
    resource: https://www.cloudcomputing-news.net/news/gartner-notes-inexorable-shift-database-market-cloud/
    title: "CloudTech: Gartner notes the inexorable shift of the database market to the cloud (July 2019)"
---

# Summary

**Verdict: won (for the hyperscalers).** The defining commercial fact of databases in 2018–2026 is that the cloud providers became the market. Gartner put 2018 DBMS revenue at about $46B (+18.4%), with cloud DBMS accounting for 68% of that year's growth.[^gartner-2019][^ccn-gartner] By 2022 the market had grown to over $91B, and cloud dbPaaS was 55% of it.[^gartner-2022-share] Gartner's revenue ranking shows AWS, Microsoft, Oracle, Google and IBM as the top five since 2022; Oracle held the #1 position only until 2019.[^reg-gartner-2026] Independent vendors responded with source-available licenses and their own DBaaS. That kept some of them alive, but it did not change who owns most of the market.

# The idea

Hyperscalers do not need to invent a database to sell one. They can host popular open-source engines (MySQL, PostgreSQL, Redis, Elasticsearch, Kafka), build API-compatible engines when licensing blocks them (DocumentDB, Keyspaces, Aurora), and bundle all of it into committed-spend contracts. Vendors called this "strip-mining": the cloud captures the operational revenue that funds development.

# Timeline 2018–2026

| Year | Event | Signal +/− |
|---|---|---|
| 2018 | DBMS market ~$46B (+18.4%); cloud is 68% of the growth (Gartner)[^ccn-gartner] | + |
| 2019 | AWS launches DocumentDB, MongoDB-compatible with no MongoDB code, three months after SSPL[^documentdb-ga][^documentdb-geekwire] | + |
| 2019 | Google Cloud signs partnerships with seven open-source data vendors instead of competing with them[^gcp-next19] | mixed |
| 2019 | Oracle loses the #1 DBMS revenue rank (Gartner)[^reg-gartner-2026] | + |
| 2019 | MongoDB licenses Alibaba Cloud to offer current MongoDB as a service[^mdb-alibaba] | mixed |
| 2021 | AWS forks Elasticsearch as OpenSearch; renames its service (Sept)[^elastic-tm] | + |
| 2022 | Cloud dbPaaS reaches 55% of a $91B+ market[^gartner-2022-share] | + |
| 2024 | AWS ElastiCache for Valkey priced 20–33% below Redis OSS engine[^aws-valkey] | + |
| 2025 | All major clouds offer managed PostgreSQL; distributed Postgres projects proliferate[^pavlo-2025] | + |
| 2026 | AWS acquires DuckLabs, team behind DuckDB[^duck-aws] | + |

# What succeeded

- **Default status.** For most new applications on AWS, Azure or GCP the first database considered is the provider's own (RDS/Aurora, DynamoDB, Cosmos DB, Cloud SQL/AlloyDB/Spanner).
- **Compatibility as strategy.** DocumentDB, Keyspaces (Cassandra), MemoryDB/ElastiCache (Redis, then Valkey), Babelfish (SQL Server on Aurora) and Aurora DSQL all copy a popular API and drop the original vendor from the deal.
- **Forks with price cuts.** AWS used price (20–33% lower for Valkey)[^aws-valkey] to move managed-service customers off a relicensed engine.
- **Buying the team when needed.** AWS acquiring DuckLabs in 2026 shows hyperscalers now also absorb leading OSS teams directly.[^duck-aws]

# What failed

- **Compatibility is never complete.** DocumentDB's API lagged MongoDB for years, which helped MongoDB Atlas win on all three clouds.
- **Licensed partnerships stayed small.** Google's 2019 partner model and Alibaba's MongoDB deal did not become the industry norm; most clouds preferred forks or rewrites.
- **Hyperscalers did not win analytics outright.** Snowflake and Databricks, both independent, became the leading analytics platforms while running on hyperscaler infrastructure.

# Why

1. **Bundled procurement.** Customers with committed cloud spend can buy the provider's database without a new vendor review. Marketplace listings later gave independents part of this benefit.
2. **Operations at scale is cheaper for the landlord.** Hyperscalers pay cost for compute and storage; an ISV running a DBaaS on the same cloud pays retail.
3. **Open source made the engine free to take.** Permissive licenses (Apache, BSD) let any cloud host the software legally. The relicensing wave was a direct response. Pavlo summarized: "If an open-source DBMS takes off, they will start hosting it and make more money than the ISV."[^pavlo-2024]
4. **Independents won where they out-built the cloud.** Snowflake and Databricks differentiated on architecture and multi-cloud neutrality, and MongoDB on developer experience; hyperscaler products in those categories were seen as weaker.

# Lessons

- If your database becomes popular under a permissive license, assume a hyperscaler will host it within two years.
- The winning response is a better multi-cloud managed service, not just a license.
- Market-share data that excludes open source (Gartner counts revenue) understates PostgreSQL and MySQL, but it measures who captured the money.

# Related

- [Source-available licenses](/ideas/business-licensing/source-available-licenses.md) · [Managed service is the business](/ideas/business-licensing/managed-service-is-the-business.md) · [Forks as backlash](/ideas/business-licensing/forks-as-backlash.md)
- Events: [AWS launches DocumentDB](/events/2019-01-amazon-documentdb-launch.md), [AWS acquires DuckLabs](/events/2026-08-aws-acquires-ducklabs.md)
- Systems: [Aurora](/systems/aurora.md), [DynamoDB](/systems/dynamodb.md), [DocumentDB](/systems/documentdb.md), [OpenSearch](/systems/opensearch.md), [Valkey](/systems/valkey.md)

[^gartner-2019]: Gartner press release, 2019-07-01.
[^gartner-2022-share]: Gartner, Market Share Analysis DBMS 2022 (summary).
[^reg-gartner-2026]: The Register, 2026-04-21.
[^reg-gartner-2020]: The Register, 2020-12-02.
[^documentdb-ga]: AWS What's New, 2019-01-09.
[^documentdb-geekwire]: GeekWire, Jan 2019.
[^elastic-tm]: The Register, 2022-02-17.
[^aws-valkey]: AWS What's New, 2024-10-08.
[^gcp-next19]: The Next Platform, 2019-04-12.
[^mdb-alibaba]: MongoDB press release, 2019-10-30.
[^pavlo-2024]: Andy Pavlo, Databases in 2024.
[^duck-aws]: DuckDB blog, 2026-08-26.
[^pavlo-2025]: Andy Pavlo, Databases in 2025.
[^ccn-gartner]: CloudTech, July 2019.
