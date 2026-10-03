---
type: Idea
title: "Serverless databases and scale-to-zero"
description: "Databases billed per request or per second of compute that scale automatically and ideally to zero when idle. Verdict: mixed. Usage-based pricing won (DynamoDB on-demand, Neon). The first generation of serverless relational databases with scale-to-zero did badly: Aurora Serverless v1 was retired, and free tiers were cut or renamed. AI agents that spin up thousands of short-lived databases revived the idea in 2025."
tags: [serverless, pricing, scale-to-zero, cloud-native, dbaas]
area: cloud-architecture
verdict: mixed
hype_peak: 2022
adoption_2026: common
origins: "DynamoDB/BigQuery per-request billing; Aurora Serverless preview (Nov 2017)"
key_systems: [systems/aurora-serverless, systems/dynamodb, systems/neon, systems/planetscale, systems/cockroachdb, systems/aurora-dsql, systems/azure-sql-hyperscale]
related_ideas: [ideas/cloud-architecture/disaggregated-storage-compute-oltp, ideas/cloud-architecture/database-branching, ideas/cloud-architecture/database-per-tenant]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: aurora-10y
    resource: https://aws.amazon.com/blogs/aws/celebrating-10-years-of-amazon-aurora-innovation/
    title: "AWS News Blog: Celebrating 10 years of Amazon Aurora innovation"
    author: org:aws
  - id: infoq-v1
    resource: https://www.infoq.com/news/2024/01/aurora-serverless-v1-retirement/
    title: "InfoQ: AWS to retire Aurora Serverless v1 (Jan 2024)"
  - id: doit-v1
    resource: https://www.doit.com/blog/amazon-aurora-serverless-v1-end-of-life-key-steps-and-dates-you-need-to-know
    title: "DoiT: Amazon Aurora Serverless v1 End of Life: key steps and dates"
  - id: v2-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2022/04/amazon-aurora-serverless-v2
    title: "AWS: Amazon Aurora Serverless v2 is generally available (2022-04-21)"
    author: org:aws
  - id: v2-zero
    resource: https://aws.amazon.com/about-aws/whats-new/2024/11/amazon-aurora-serverless-v2-scaling-zero-capacity
    title: "AWS: Aurora Serverless v2 supports scaling to zero capacity (2024-11-20)"
    author: org:aws
  - id: stack-zero
    resource: https://www.thestack.technology/aws-aurora-serverless-v2-finally-lives-up-to-its-name/
    title: "The Stack: AWS Aurora Serverless V2 finally lives up to its name"
  - id: ddb-ondemand-2018
    resource: https://www.infoq.com/news/2018/11/aws-reinvent-recap/
    title: "InfoQ: Recap of AWS re:Invent 2018 announcements"
  - id: ddb-price-2024
    resource: https://aws.amazon.com/blogs/database/new-amazon-dynamodb-lowers-pricing-for-on-demand-throughput-and-global-tables/
    title: "AWS Database Blog: DynamoDB lowers pricing for on-demand throughput and global tables (Nov 2024)"
    author: org:aws
  - id: ps-hobby
    resource: https://planetscale.com/changelog/deprecating-hobby
    title: "PlanetScale changelog: Deprecating the Hobby plan"
    author: org:planetscale
  - id: reg-ps
    resource: https://www.theregister.com/2024/03/11/planetscale_lays_off_staff_and/
    title: "The Register: PlanetScale lays off staff and kills free tier (2024-03-11)"
    author: org:the-register
  - id: crdb-rename
    resource: https://www.cockroachlabs.com/docs/releases/cloud
    title: "CockroachDB Cloud release notes (Serverless renamed Basic, 2024-09-25)"
    author: org:cockroach-labs
  - id: neon-ga-hn
    resource: https://news.ycombinator.com/item?id=40040593
    title: "Hacker News: Neon Serverless Postgres is generally available (Apr 2024)"
  - id: techrepublic-neon
    resource: https://www.techrepublic.com/article/news-databricks-neon-acquisition/
    title: "TechRepublic: Databricks to acquire Neon in $1 billion deal"
  - id: neon-postmortem
    resource: https://neon.com/blog/aws-cni-lessons-from-a-production-outage
    title: "Neon: AWS CNI lessons from a production outage (May 2025)"
    author: org:neon
  - id: hyperscale-serverless
    resource: https://www.infoq.com/news/2023/02/azure-sql-hyperscale-serverless/
    title: "InfoQ: Azure SQL Database Hyperscale serverless (Feb 2023)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary
**Mixed.** Two ideas travel under the "serverless database" label, and they fared differently. **Usage-based billing with no capacity planning won.** DynamoDB on-demand (2018) became the default choice after AWS halved its price in 2024[^ddb-price-2024], and every new DBaaS ships a pay-per-use tier. **Scale-to-zero relational databases had a rough first generation.** AWS retired Aurora Serverless v1 in 2025[^doit-v1]. Its successor could not scale to zero until November 2024[^v2-zero]. PlanetScale killed its free tier in 2024[^ps-hobby], and CockroachDB renamed "Serverless" to "Basic"[^crdb-rename]. The idea came back in 2025 with an unexpected customer: AI coding agents. Neon reported that over 80% of its new databases were created by agents, and Databricks paid about $1B for it[^techrepublic-neon][^pavlo-2025].

# The idea
Developers should never pick an instance size. The database scales capacity with load in fine increments, bills per request or per compute-second, and drops to zero cost (storage only) when idle. That makes thousands of dev, test, preview and per-tenant databases cheap.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018 | Aurora Serverless v1 GA (Aug)[^aurora-10y]. DynamoDB on-demand launched at re:Invent (Nov)[^ddb-ondemand-2018] | + |
| 2021–22 | CockroachDB Serverless and Neon preview. "Serverless" becomes standard DBaaS marketing | + |
| 2022 | Aurora Serverless v2 GA (Apr 21) with fine-grained scaling but a **0.5 ACU floor**[^v2-ga][^infoq-v1] | ± |
| 2023 | Azure SQL Hyperscale gets a serverless option[^hyperscale-serverless] | + |
| 2024 | AWS announces v1 retirement. Users complain about losing scale-to-zero and "double the bill"[^infoq-v1]. PlanetScale drops its Hobby free tier and lays off staff (Mar)[^reg-ps]. Neon GA (Apr)[^neon-ga-hn]. CockroachDB Serverless renamed Basic (Sep)[^crdb-rename]. DynamoDB on-demand price cut 50% (Nov)[^ddb-price-2024]. Aurora Serverless v2 scales to 0 ACU (Nov 20), with a ~15 s resume[^v2-zero][^stack-zero] | − / + |
| 2025 | v1 creation blocked (Jan 8). v1 EOL Mar 31, then forced upgrades from Apr 7[^doit-v1]. Databricks buys Neon (May)[^techrepublic-neon]. Neon's cold-start path fails for 5.5 h in us-east-1 (May 16/19)[^neon-postmortem]. Aurora DSQL GA as a serverless distributed SQL database | ± |
| 2026 | Agent-driven provisioning is the main growth story for serverless Postgres | + |

# What succeeded
- **On-demand pricing for key-value and document stores.** DynamoDB on-demand, plus the 50% price cut in Nov 2024, removed the main reason to choose provisioned capacity for spiky workloads[^ddb-price-2024].
- **Fine-grained autoscaling without zero.** Aurora Serverless v2 scales in half-ACU steps with full Aurora features: Multi-AZ, Global Database, read replicas[^v2-ga]. Production teams use it for variable load.
- **Scale-to-zero for many small databases.** Neon's architecture (stateless compute, storage in S3) let it host hundreds of thousands of mostly idle databases cheaply. When AI app builders and coding agents began creating databases programmatically, that was the right shape. The "80% created by agents" figure was central to the Databricks deal[^techrepublic-neon].

# What failed
- **Aurora Serverless v1.** It scaled in coarse doubling steps, had no Multi-AZ, and lagged on major versions[^infoq-v1]. AWS kept it for 6.5 years and then retired it. Its successor did not scale to zero for 2.5 years, which drew public complaints: "should never have been called serverless"[^infoq-v1].
- **Free serverless tiers as a growth engine.** PlanetScale's free Hobby tier ended in April 2024 with CEO Sam Lambert citing profitability[^ps-hobby][^reg-ps]. CockroachDB folded Serverless into a tiered Basic/Standard/Advanced lineup[^crdb-rename]. Fauna, the purest "serverless database" pitch, shut down in 2025 (see [Fauna](/systems/fauna.md)).
- **Cold starts and control-plane fragility.** Resuming from zero takes seconds (Aurora ~15 s[^stack-zero]). Neon's May 2025 outages showed that a "wake-up" depends on a control plane: Kubernetes ran out of IP addresses while about 8,000 pods ran against a planned capacity of 6,000. Running databases were unaffected, but sleeping ones could not start[^neon-postmortem].

# Why
1. **The economics only work for the provider if storage is disaggregated.** Scale-to-zero needs compute that can vanish without losing state. Aurora v1 retrofitted it onto proxy-managed instance pools. Neon and v2 built it on shared storage, see [disaggregation](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md).
2. **Production databases are rarely idle.** For steady OLTP, per-second billing often costs more than reserved instances. So "serverless" sells mostly to dev/test and long-tail workloads, where revenue per database is tiny. That left startups dependent on free-tier conversion, which broke when 2023–24 funding tightened.
3. **Agents changed the demand curve.** An agent creating a throwaway database per task is the ideal scale-to-zero customer: many databases, mostly idle, created by API. This turned a dev-tier feature into a strategic asset in 2025.

# Lessons
- Separate the pricing model (pay per use, which won) from the architecture claim (zero idle cost, which needs disaggregated storage to be sustainable).
- Free tiers built on venture money are not a moat. Plan for the day they get cut.
- Scale-to-zero moves the critical path to the control plane. Test wake-up at fleet scale.

# Related
- Systems: [Aurora Serverless](/systems/aurora-serverless.md), [DynamoDB](/systems/dynamodb.md), [Neon](/systems/neon.md), [PlanetScale](/systems/planetscale.md), [CockroachDB](/systems/cockroachdb.md), [Aurora DSQL](/systems/aurora-dsql.md)
- Events: [DynamoDB on-demand](/events/2018-11-dynamodb-on-demand.md), [Aurora Serverless v2 GA](/events/2022-04-aurora-serverless-v2-ga.md), [PlanetScale drops free tier](/events/2024-03-planetscale-drops-free-tier.md), [v2 scale to zero](/events/2024-11-aurora-serverless-v2-scale-to-zero.md), [v1 end of life](/events/2025-03-aurora-serverless-v1-end-of-life.md), [Databricks acquires Neon](/events/2025-05-databricks-acquires-neon.md)
- Cross-area: [Database acquisitions as AI acquihires](/ideas/business-licensing/database-acquisitions-as-ai-acquihires.md)
