---
type: Idea
title: "Source-available licenses as a defense against cloud providers"
description: "From 2018 database vendors moved from OSI licenses to SSPL, BSL, ELv2, RSAL and similar terms to stop hyperscalers from reselling their code. Verdict: mixed. The licenses did not stop AWS (it forked or reimplemented), but they gave vendors leverage for licensed cloud deals while the evidence does not isolate their effect on revenue. They cost community trust and produced durable forks."
tags: [licensing, sspl, bsl, elastic-license, open-source, cloud, hyperscalers]
area: business-licensing
verdict: mixed
hype_peak: 2021
adoption_2026: common
origins: "MongoDB's SSPL (Oct 2018) and Redis Labs' Commons Clause for modules (Aug 2018); MariaDB had created the BSL for MaxScale in 2016."
key_systems: [systems/mongodb, systems/elasticsearch, systems/redis, systems/cockroachdb, systems/scylladb, systems/confluent, systems/timescaledb, systems/couchbase, systems/arangodb]
related_ideas: [ideas/business-licensing/forks-as-backlash, ideas/business-licensing/return-to-agpl, ideas/business-licensing/managed-service-is-the-business, ideas/business-licensing/hyperscalers-capture-dbms-market]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: sspl-wiki
    resource: https://en.wikipedia.org/wiki/Server_Side_Public_License
    title: "Wikipedia: Server Side Public License (dates, OSI withdrawal, distro removals)"
  - id: mdb-sspl-faq
    resource: https://www.mongodb.com/legal/licensing/server-side-public-license/faq
    title: "MongoDB: Server Side Public License FAQ"
  - id: redis-2019
    resource: https://www.theregister.com/2019/02/22/redis_labs_changes_license_funding_60m/
    title: "The Register: Redis kills Modules' Commons Clause licensing and replaces it with one of their own (2019-02-22)"
  - id: confluent-ccl
    resource: https://www.confluent.io/blog/license-changes-confluent-platform/
    title: "Confluent: License changes for Confluent Platform (2018-12-14)"
  - id: timescale-tsl
    resource: https://www.tigerdata.com/blog/how-we-are-building-a-self-sustaining-open-source-business-in-the-cloud-era
    title: "Timescale: How we are building a self-sustaining open-source business in the cloud era (Dec 2018)"
  - id: crdb-bsl-redmonk
    resource: https://redmonk.com/sogrady/2019/06/21/cockroach-source-available/
    title: "RedMonk: Cockroach and the Source Available Future (2019-06-21)"
  - id: elastic-2021
    resource: https://www.elastic.co/blog/elastic-license-update
    title: "Elastic: Elastic License Update (2021-01-14)"
  - id: infoq-elastic-aws
    resource: https://www.infoq.com/news/2021/01/elastic-aws-open-source/
    title: "InfoQ: Elastic changes licences for Elasticsearch and Kibana; AWS forks both"
  - id: redis-2024
    resource: https://redis.io/blog/redis-adopts-dual-source-available-licensing/
    title: "Redis: Redis adopts dual source-available licensing (2024-03-20)"
  - id: crdb-2024
    resource: https://www.cockroachlabs.com/blog/enterprise-license-announcement/
    title: "Cockroach Labs: Enterprise license announcement (2024-08-15)"
  - id: scylla-2024
    resource: https://forum.scylladb.com/t/scylladb-source-available-licensing/4214
    title: "ScyllaDB forum: ScyllaDB source available licensing (Dec 2024)"
  - id: arango-bsl
    resource: https://arango.ai/blog/update-evolving-arangodbs-licensing-model-for-a-sustainable-future/
    title: "ArangoDB: Evolving ArangoDB's licensing model (Oct 2023)"
  - id: crdb-private
    resource: https://www.cockroachlabs.com/blog/source-code-protection/
    title: "Cockroach Labs: Protecting Cockroach Labs' source code in the age of AI (2026-09-15)"
  - id: documentdb-geekwire
    resource: https://www.geekwire.com/2019/amazon-web-services-calls-mongodbs-licensing-bluff-documentdb-new-managed-database/
    title: "GeekWire: AWS calls MongoDB's licensing bluff with DocumentDB (Jan 2019)"
  - id: mdb-alibaba
    resource: https://www.mongodb.com/press/mongodb-and-alibaba-cloud-launch-new-partnership
    title: "MongoDB and Alibaba Cloud launch new partnership (2019-10-30)"
  - id: gcp-next19
    resource: https://www.nextplatform.com/cloud/2019/04/12/google-turns-to-partners-in-cloud-tangle/1647586
    title: "The Next Platform: Google turns to partners (Confluent, DataStax, Elastic, InfluxData, MongoDB, Neo4j, Redis Labs) (2019-04-12)"
  - id: redmonk-valkey
    resource: https://redmonk.com/sogrady/2026/04/06/valkey-at-two/
    title: "RedMonk: Two Years of Valkey (2026-04-06)"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: mdb-q4fy25
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000144181625000046/mdb-13125xex991xrelease.htm
    title: "MongoDB Q4 and FY2025 results (8-K exhibit)"
  - id: mdb-q4fy19
    resource: https://www.sec.gov/Archives/edgar/data/1441816/000144181619000044/mdb-013119xex991xrelease.htm
    title: "MongoDB Q4 and FY2019 results (8-K exhibit, 2019-03-13)"
---

# Summary

**Verdict: mixed.** Between 2018 and 2024 several prominent venture-backed database companies moved its core or its add-ons to a non-OSI "source-available" license: SSPL (MongoDB 2018, Elastic 2021, Redis 2024), BSL (CockroachDB 2019, Couchbase 2021, ArangoDB 2023), the Elastic License, the Confluent Community License, the Timescale License, RSAL. The stated goal was to stop hyperscalers from selling the software as a managed service without paying. **That goal mostly failed.** AWS reimplemented the API (DocumentDB), forked the last open version (OpenSearch, Valkey) or simply waited. **The revenue effect is not established by growth alone.** Some vendors grew after relicensing and used licensing in paid cloud agreements, but these observations do not isolate what the license change caused. The cost was paid in community trust: the Elastic and Redis disputes produced durable foundation-backed alternatives, OpenSearch and Valkey. By 2024–2026 the trend had split. The best-known projects went back to AGPL, and smaller vendors went further toward closed (CockroachDB moved to private development in September 2026).[^crdb-private]

# The idea

The managed-service era broke the open-core bargain. A cloud provider could take an Apache-licensed database, run it as a service and capture most of the value without contributing. The response was a new family of licenses. These licenses have different conditions. Some restrict competing hosted services; SSPL instead imposes extensive source-disclosure conditions for providing the software as a service. BSL terms depend on the additional-use grant and a future change date. Source visibility therefore does not imply identical production or redistribution permissions. The promise was that this would keep the developer funnel of open source while closing the one door that cloud resellers used.

# Timeline 2018–2026

| Year | Event | Signal +/− |
|---|---|---|
| 2018 | Redis Labs puts its modules under Apache 2.0 plus Commons Clause (Aug), then replaces it with RSAL in Feb 2019[^redis-2019] | − (confusion) |
| 2018 | MongoDB announces SSPL (Oct 16); Debian, Fedora and RHEL drop MongoDB[^sspl-wiki] | − |
| 2018 | Confluent Community License for KSQL and other components (Dec 14); Kafka itself stays Apache[^confluent-ccl] | mixed |
| 2018 | Timescale License for new TimescaleDB features (Dec)[^timescale-tsl] | mixed |
| 2019 | AWS launches DocumentDB, MongoDB-compatible but with no MongoDB code (Jan 9)[^documentdb-geekwire] | − |
| 2019 | MongoDB withdraws SSPL from OSI review (Mar 9)[^sspl-wiki] | − |
| 2019 | CockroachDB moves to BSL (Jun)[^crdb-bsl-redmonk] | mixed |
| 2019 | MongoDB signs a licensed deal with Alibaba Cloud (Oct 30)[^mdb-alibaba] | + |
| 2021 | Elastic moves Elasticsearch and Kibana to SSPL/ELv2 (Jan 14); AWS forks them as OpenSearch[^elastic-2021][^infoq-elastic-aws] | − |
| 2023 | ArangoDB announces BSL 1.1 from v3.12[^arango-bsl] | mixed |
| 2024 | Redis moves to RSALv2/SSPLv1 (Mar 20); Valkey fork follows within days[^redis-2024] | − |
| 2024 | Elastic adds AGPL (Aug); CockroachDB retires free Core (Nov)[^crdb-2024]; ScyllaDB ends its AGPL edition (Dec)[^scylla-2024] | mixed |
| 2025 | Redis adds AGPL with Redis 8 (May) | + for OSS |
| 2026 | CockroachDB moves development to private repos, citing AI (Sept 15)[^crdb-private] | − |

# What succeeded

- **Leverage for paid partnerships.** SSPL did not stop clouds from offering MongoDB-like services, but it did stop them from shipping *current* MongoDB. Alibaba Cloud signed an authorized MongoDB-as-a-service deal in 2019,[^mdb-alibaba] and Google Cloud announced first-party integrated partnerships with seven open-source data companies (Confluent, DataStax, Elastic, InfluxData, MongoDB, Neo4j, Redis Labs) in April 2019.[^gcp-next19] For vendors without such leverage these deals would not have existed.
- **Revenue did not suffer.** MongoDB went from Atlas at 32% of revenue in early 2019 to 71% in Q4 FY2025 and $2.01B annual revenue.[^mdb-q4fy19][^mdb-q4fy25] Elastic, Redis, Couchbase and Confluent all grew after relicensing. No company was shown to have lost meaningful revenue because of its license.
- **Low-drama cases.** Where the vendor controlled almost all contributions and no hyperscaler cared enough to fork (CockroachDB, Confluent's KSQL, TimescaleDB's TSL features, ScyllaDB, ArangoDB), the change passed with grumbling and no viable fork.

# What failed

- **Hyperscalers were not stopped.** AWS shipped DocumentDB three months after SSPL using a pre-SSPL API level,[^documentdb-geekwire] forked Elasticsearch within three months,[^infoq-elastic-aws] and, with Google, Oracle and others, backed Valkey within days of the Redis change.
- **The forks won the community.** OpenSearch and Valkey became foundation projects with more outside contributors than the originals. RedMonk found Valkey "is not behaving like most forks".[^redmonk-valkey]
- **Distribution loss.** SSPL is not accepted as open source by OSI, Debian or Fedora, so MongoDB, and later Elasticsearch and Redis, fell out of Linux distributions.[^sspl-wiki] Over a decade, that shrinks the default developer funnel.
- **Ratchet effect.** BSL did not stay stable. CockroachDB went Apache → BSL (2019) → no free tier above $10M revenue (2024)[^crdb-2024] → private source (2026).[^crdb-private]

# Why

1. **The license targeted the wrong lever.** Clouds win on distribution, billing and integration, not on code access. When the code was closed to them they rebuilt it (DocumentDB, Aurora-style rewrites) or forked it. The license only bites when the project is too complex to reimplement *and* nobody has an incentive to fork.
2. **Forkability depends on contributor concentration.** Redis and Elasticsearch had large outside contributor bases and hyperscaler employees among maintainers, so a fork was viable on day one. CockroachDB, ScyllaDB and ArangoDB were almost entirely company-written, so there was nothing to fork from. Pavlo notes the backlash was strongest where the company "were not the system's original creators" (Redis).[^pavlo-2024]
3. **The real moat was the managed service, not the license.** Companies that relicensed *and* built a strong DBaaS (MongoDB Atlas, Elastic Cloud, Redis Cloud) did well. The license bought time while the cloud product matured. See [Managed service is the business](/ideas/business-licensing/managed-service-is-the-business.md).
4. **Trust is an asset that was underpriced.** Each relicense taught users that the vendor could change terms again. This pushed procurement teams toward foundation-governed alternatives (PostgreSQL, Valkey, OpenSearch).

# Lessons

- A license is a negotiating tool, not a moat. It works when it forces a licensed deal; it fails when the counterparty can fork or rewrite.
- Relicense before the community grows large, or not at all. Late relicensing of a project with many outside contributors invites a fork.
- If you relicense, own a managed service that is better than the hyperscaler's, because that is where revenue comes from.
- Foundation governance (PostgreSQL, DuckDB Foundation, Valkey) has become the signal enterprises read as "safe from relicensing".

# Related

- [Forks as backlash](/ideas/business-licensing/forks-as-backlash.md) · [Return to AGPL](/ideas/business-licensing/return-to-agpl.md) · [Hyperscalers capture the DBMS market](/ideas/business-licensing/hyperscalers-capture-dbms-market.md)
- Events: [MongoDB SSPL](/events/2018-10-mongodb-sspl.md), [Elastic relicense](/events/2021-01-elastic-sspl-relicense.md), [Redis relicense](/events/2024-03-redis-source-available-relicense.md), [CockroachDB BSL](/events/2019-06-cockroachdb-bsl.md), [ScyllaDB source-available](/events/2024-12-scylladb-source-available.md), [CockroachDB private source](/events/2026-09-cockroachdb-private-source.md)
- Systems: [MongoDB](/systems/mongodb.md), [Elasticsearch](/systems/elasticsearch.md), [Redis](/systems/redis.md), [CockroachDB](/systems/cockroachdb.md), [Couchbase](/systems/couchbase.md)

[^sspl-wiki]: Wikipedia, Server Side Public License.
[^mdb-sspl-faq]: MongoDB SSPL FAQ.
[^redis-2019]: The Register, 2019-02-22.
[^confluent-ccl]: Confluent blog, 2018-12-14.
[^timescale-tsl]: Timescale blog, Dec 2018.
[^crdb-bsl-redmonk]: RedMonk, 2019-06-21.
[^elastic-2021]: Elastic blog, 2021-01-14.
[^infoq-elastic-aws]: InfoQ, Jan 2021.
[^redis-2024]: Redis blog, 2024-03-20.
[^crdb-2024]: Cockroach Labs blog, 2024-08-15.
[^scylla-2024]: ScyllaDB forum, Dec 2024.
[^arango-bsl]: ArangoDB blog, Oct 2023.
[^crdb-private]: Cockroach Labs blog, 2026-09-15.
[^documentdb-geekwire]: GeekWire, Jan 2019.
[^mdb-alibaba]: MongoDB press release, 2019-10-30.
[^gcp-next19]: The Next Platform, 2019-04-12.
[^redmonk-valkey]: RedMonk, 2026-04-06.
[^pavlo-2024]: Andy Pavlo, Databases in 2024.
[^mdb-q4fy25]: MongoDB 8-K, Q4 FY2025.
[^mdb-q4fy19]: MongoDB 8-K, Q4 FY2019.
