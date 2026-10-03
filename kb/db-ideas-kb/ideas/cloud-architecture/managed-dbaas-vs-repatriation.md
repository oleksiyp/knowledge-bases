---
type: Idea
title: "Managed cloud DBaaS as the default (and the cloud-repatriation counter-trend)"
description: "Running databases as cloud-provider or vendor managed services instead of self-hosting. Verdict: won. Cloud dbPaaS passed half of DBMS spend in 2022 and generated almost all market growth. Cloud repatriation (37signals, 2022–25) produced real savings for steady, predictable workloads but stayed a vocal niche."
tags: [dbaas, cloud, repatriation, cost, market-share, self-hosting]
area: cloud-architecture
verdict: won
hype_peak: 2023
adoption_2026: mainstream
origins: "Amazon RDS (2009), DynamoDB (2012), Aurora (2014); MongoDB Atlas (2016)"
key_systems: [systems/aurora, systems/dynamodb, systems/s3, systems/alloydb, systems/azure-sql-hyperscale, systems/mongodb]
related_ideas: [ideas/cloud-architecture/byoc-deployment, ideas/cloud-architecture/disaggregated-storage-compute-oltp]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: reg-gartner-2020
    resource: https://www.theregister.com/2020/12/02/gartner_cloud_dbms/
    title: "The Register: 75% of databases to be cloud-hosted by 2022, says Gartner (2020-12-02)"
    author: org:the-register
  - id: gartner-2022
    resource: https://www.gartner.com/en/documents/4432699
    title: "Gartner: Market Share Analysis: Database Management Systems, Worldwide, 2022"
    author: org:gartner
  - id: gartner-2023
    resource: https://www.gartner.com/en/documents/5441963
    title: "Gartner: Market Share: Database Management Systems, Worldwide, 2023"
    author: org:gartner
  - id: a16z
    resource: https://a16z.com/the-cost-of-cloud-a-trillion-dollar-paradox/
    title: "Andreessen Horowitz: The Cost of Cloud, a Trillion Dollar Paradox (2021)"
    author: org:a16z
  - id: dhh-leaving
    resource: https://world.hey.com/dhh/why-we-re-leaving-the-cloud-654b47e0
    title: "DHH: Why we're leaving the cloud (2022-10-19)"
    author: person:dhh
  - id: dhh-10m
    resource: https://world.hey.com/dhh/our-cloud-exit-savings-will-now-top-ten-million-over-five-years-c7d9b5bd
    title: "DHH: Our cloud-exit savings will now top ten million over five years"
    author: person:dhh
  - id: dcd-2m
    resource: https://www.datacenterdynamics.com/en/news/37signals-claims-it-saved-almost-2m-last-year-from-cloud-repatriation/
    title: "DCD: 37signals claims it saved almost $2m last year from cloud repatriation"
  - id: stack-s3exit
    resource: https://www.thestack.technology/dhh-aws-egress-s3-pure/
    title: "The Stack: AWS takes the egress hit as DHH actually exits the cloud (2025)"
  - id: aws-free-dto
    resource: https://www.networkworld.com/article/1311925/aws-removes-transfer-fees-for-customers-leaving-with-their-data.html
    title: "Network World: AWS removes transfer fees for customers leaving with their data (Mar 2024)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: aurora-10y
    resource: https://aws.amazon.com/blogs/aws/celebrating-10-years-of-amazon-aurora-innovation/
    title: "AWS News Blog: Celebrating 10 years of Amazon Aurora innovation"
    author: org:aws
---

# Summary
**Won.** In 2020 Gartner predicted that 75% of databases would be cloud-hosted by 2022[^reg-gartner-2020]. By its own later numbers, cloud database platform-as-a-service was **55% of DBMS spend in 2022 and 98% of the market's growth**. In 2023, cloud reached 61% of a $103.2B market[^gartner-2022][^gartner-2023]. The fastest-growing database products of the period were all managed services: Aurora, Atlas, Snowflake, BigQuery, Neon and Supabase. The counter-movement, **cloud repatriation**, had one famous success. 37signals left AWS and GCP from 2022 to 2025. Its cloud bill fell from $3.2M to $1.3M a year before the S3 exit, and it projects more than $10M saved over five years[^dhh-leaving][^dcd-2m][^dhh-10m]. That was a stable, mid-sized, ops-heavy company with steady load. Few followed publicly, and DBaaS share kept rising.

# The idea
A managed DBaaS sells undifferentiated operations (provisioning, patching, backups, HA, scaling) as a metered service. The repatriation counter-argument (a16z 2021, DHH 2022) says that at scale, with predictable load, the cloud margin on compute and storage costs more than the operations it saves[^a16z][^dhh-leaving].

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018–20 | Aurora, Atlas and Snowflake grow fast. Gartner predicts 75% of databases cloud-hosted by 2022[^reg-gartner-2020] | + |
| 2021 | a16z's "Trillion Dollar Paradox" argues cloud costs depress the market caps of scaled software companies[^a16z] | − |
| 2022 | dbPaaS reaches 55% of DBMS spend and 98% of growth[^gartner-2022]. 37signals announces cloud exit (Oct 19)[^dhh-leaving] | + / − |
| 2023 | Cloud reaches 61% of a $103.2B DBMS market[^gartner-2023] | + |
| 2024 | AWS waives egress fees for customers leaving AWS (Mar 5, following the EU Data Act)[^aws-free-dto]. 37signals reports ~$2M/yr saved[^dcd-2m] | ± |
| 2025 | 37signals moves ~18 PB from S3 to on-prem Pure Storage. AWS covers the ~$250k egress bill[^stack-s3exit] | − |
| 2026 | Managed services remain the default for new databases. AI-agent provisioning further favors API-driven DBaaS | + |

# What succeeded
- **DBaaS as default.** Market share, growth share and the size of acquisitions (Neon about $1B, Crunchy Data about $250M[^pavlo-2025]) all point the same way: the database business is now mostly a managed-service business[^gartner-2023].
- **Repatriation for the right profile.** 37signals' numbers are public and specific: a $3.2M/yr cloud bill, under $200k/yr for Pure Storage replacing a ~$1.5M/yr S3 bill, and $10M+ projected savings[^dhh-leaving][^stack-s3exit][^dhh-10m].
- **Regulation lowered lock-in.** Free exit egress under EU Data Act pressure made leaving cheaper, at least formally[^aws-free-dto].

# What failed
- **Repatriation as a mass movement.** Despite heavy coverage, Gartner's numbers show cloud share *rising* through 2023[^gartner-2023], and the 2025 Neon and Crunchy deals reflect managed-service demand. Public case studies remain few and similar: stable load, strong in-house operations.
- **Cost predictability of DBaaS.** Opaque pricing (Aurora I/O charges until 2023, cross-AZ traffic, egress) fed the repatriation argument. Providers answered with new pricing tiers rather than architecture changes[^aurora-10y].

# Why
1. **Operations are the scarce resource.** Most teams lack database expertise for HA, backups and upgrades, so DBaaS removes the most dangerous work.
2. **Elasticity matters most for growth and spiky companies.** Repatriation pays off when load is flat and the team is already strong in operations, which is 37signals' exact profile.
3. **New features ship managed-first.** Serverless, branching, vector search and zero-ETL arrived as managed features. Self-hosters get them late or never.
4. **Hardware got cheaper faster than cloud list prices.** Dense flash and many-core servers widened the gap for steady workloads. That is why repatriation is real at the margin, even if it stays small.

# Lessons
- Repatriation is a cost-of-goods optimization for mature, predictable workloads, not a reversal of the cloud.
- DBaaS vendors lose trust through unpredictable pricing, not through architecture.
- Track spend share (Gartner dbPaaS) rather than anecdotes when judging infrastructure trends.

# Related
- Systems: [Aurora](/systems/aurora.md), [DynamoDB](/systems/dynamodb.md), [S3](/systems/s3.md), [MongoDB](/systems/mongodb.md)
- Events: [37signals leaves the cloud](/events/2022-10-37signals-leaves-cloud.md)
- Ideas: [BYOC](/ideas/cloud-architecture/byoc-deployment.md)
- Cross-area: [Hyperscalers capture the DBMS market](/ideas/business-licensing/hyperscalers-capture-dbms-market.md), [Managed service is the business](/ideas/business-licensing/managed-service-is-the-business.md)
