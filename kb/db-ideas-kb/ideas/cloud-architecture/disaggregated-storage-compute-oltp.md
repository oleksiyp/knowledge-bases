---
type: Idea
title: "Disaggregated storage and compute for OLTP (\"the log is the database\")"
description: "Split a single-node OLTP engine into a stateless compute node that ships only WAL to a shared, replicated storage service. Verdict: won. Every hyperscaler built one and they now carry most new managed relational workloads. The weak spots are the single-writer ceiling and cost surprises from I/O and cross-AZ traffic."
tags: [cloud-native, storage, oltp, disaggregation, aurora, postgres]
area: cloud-architecture
verdict: won
hype_peak: 2022
adoption_2026: mainstream
origins: "Amazon Aurora (re:Invent 2014 preview, GA July 2015; SIGMOD 2017 paper)"
key_systems: [systems/aurora, systems/azure-sql-hyperscale, systems/alloydb, systems/polardb, systems/neon]
related_ideas: [ideas/cloud-architecture/serverless-databases, ideas/cloud-architecture/database-branching, ideas/cloud-architecture/hyperscaler-distributed-sql, ideas/cloud-architecture/object-storage-native-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: aurora-10y
    resource: https://aws.amazon.com/blogs/aws/celebrating-10-years-of-amazon-aurora-innovation/
    title: "AWS News Blog: Celebrating 10 years of Amazon Aurora innovation"
    author: org:aws
  - id: socrates
    resource: https://www.microsoft.com/en-us/research/publication/socrates-the-new-sql-server-in-the-cloud/
    title: "Antonopoulos et al.: Socrates: The New SQL Server in the Cloud (SIGMOD 2019)"
    author: org:microsoft-research
  - id: hyperscale-ga
    resource: https://azure.microsoft.com/en-us/blog/get-high-performance-scaling-for-your-azure-database-workloads-with-hyperscale/
    title: "Azure blog: Get high-performance scaling for your Azure database workloads with Hyperscale (May 2019)"
    author: org:microsoft
  - id: polardb-serverless
    resource: https://dl.acm.org/doi/abs/10.1145/3448016.3457560
    title: "Cao et al.: PolarDB Serverless: A Cloud Native Database for Disaggregated Data Centers (SIGMOD 2021)"
  - id: polardb-mp
    resource: https://www.alibabacloud.com/blog/601447
    title: "Alibaba Cloud: PolarDB brings Alibaba Cloud SIGMOD Best Paper Award (PolarDB-MP, 2024)"
    author: org:alibaba-cloud
  - id: alloydb-tc
    resource: https://techcrunch.com/2022/05/11/google-cloud-launches-alloydb-a-new-fully-managed-postgresql-database-service/
    title: "TechCrunch: Google Cloud launches AlloyDB (2022-05-11)"
  - id: alloydb-ga
    resource: https://cloud.google.com/blog/products/databases/announcing-the-general-availability-of-alloydb-for-postgresql
    title: "Google Cloud blog: AlloyDB for PostgreSQL GA (Dec 2022)"
    author: org:google-cloud
  - id: io-opt
    resource: https://aws.amazon.com/about-aws/whats-new/2023/05/amazon-aurora-i-o-optimized
    title: "AWS: Amazon Aurora I/O-Optimized (2023-05-11)"
    author: org:aws
  - id: cidr23
    resource: https://www.cidrdb.org/cidr2023/papers/p50-ziegler.pdf
    title: "Ziegler, Bernstein, Leis, Binnig: Is Scalable OLTP in the Cloud a Solved Problem? (CIDR 2023)"
  - id: cloud-oltp-cost
    resource: https://www.cs.cit.tum.de/fileadmin/w00cfj/dis/papers/CloudOLTP.pdf
    title: "Haubenschild, Leis: OLTP in the Cloud: Architectures, Tradeoffs, and Cost (VLDB Journal, 2025)"
  - id: neon-gh
    resource: https://github.com/neondatabase/neon
    title: "Neon GitHub repository"
    author: org:neon
  - id: cnbc-neon
    resource: https://www.cnbc.com/2025/05/14/databricks-is-buying-database-startup-neon-for-about-1-billion.html
    title: "CNBC: Databricks is buying database startup Neon for about $1 billion (2025-05-14)"
---

# Summary
**Won.** "The log is the database" took over cloud OLTP. You keep a familiar engine (MySQL, PostgreSQL, SQL Server) for parsing, planning and executing queries. Pages and durability move to a multi-tenant storage service that receives only WAL records and builds pages itself. Aurora showed the design worked commercially. Between 2018 and 2026, Microsoft (Socrates/Hyperscale, 2019), Alibaba (PolarDB), Google (AlloyDB, 2022) and Neon (open source, 2021–2024) all copied it, and Databricks paid about $1B for Neon in 2025[^cnbc-neon]. AWS says "hundreds of thousands" of customers use Aurora[^aurora-10y]. Two things are still unsolved. Almost every design keeps a **single writer**, and costs depend heavily on I/O and cross-AZ traffic, which surprised users and later caught the attention of researchers.

# The idea
In a classic replicated database, each replica stores a full copy of the data and writes full pages. A disaggregated design changes three things:
- **Only the log crosses the network.** The compute node sends WAL records. Storage nodes replay them into pages on demand.
- **Storage is a shared, replicated, multi-tenant service.** Aurora writes six copies across three AZs and acknowledges on a 4/6 quorum. Socrates goes further and separates a log service (durability) from page servers (availability)[^socrates].
- **Compute becomes close to stateless.** That makes failover, read replicas, clones and autoscaling cheap, because none of them copy data.

The pitch: storage limits of 64–256 TiB without sharding[^aurora-10y], read replicas that share storage, recovery in seconds, and per-GB storage billing. You also keep your existing SQL dialect and drivers.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018 | Aurora Serverless v1 GA (Aug) and Aurora Global Database (Nov) build on the shared storage layer[^aurora-10y] | + |
| 2019 | Azure SQL Database Hyperscale GA (May)[^hyperscale-ga]. Socrates paper at SIGMOD describes support for 100 TB OLTP databases[^socrates] | + |
| 2020 | Aurora max storage rises to 128 TiB[^aurora-10y] | + |
| 2021 | PolarDB Serverless (SIGMOD) adds a disaggregated memory pool over RDMA[^polardb-serverless]. Neon founded | + |
| 2022 | Google announces AlloyDB (May) and ships GA (Dec), claiming 4x stock PostgreSQL on OLTP[^alloydb-tc][^alloydb-ga] | + |
| 2023 | CIDR paper asks why cloud OLTP is still single-writer[^cidr23]. AWS launches Aurora I/O-Optimized to stop I/O billing surprises[^io-opt] | ± |
| 2024 | Neon GA. PolarDB-MP (multi-primary over shared memory) wins the SIGMOD industry best paper award[^polardb-mp] | + |
| 2025 | Databricks buys Neon for ~$1B[^cnbc-neon]. Aurora storage limit reaches 256 TiB[^aurora-10y]. VLDBJ cost model finds Aurora's 3x full-copy replication dominates cost for large cold datasets[^cloud-oltp-cost] | + / ± |
| 2026 | All three hyperscalers plus Alibaba run this architecture as their flagship managed relational offering | + |

# What succeeded
- **Commercial adoption.** Aurora became AWS's flagship relational service[^aurora-10y]. Hyperscale is the Azure SQL tier for large databases, with up to 128 TB per database. AlloyDB is Google's premium PostgreSQL offering. PolarDB reports more than 10,000 customers[^polardb-mp].
- **Operational wins.** Instant clones, fast failover and replicas that don't copy data. These made the newer "serverless" and "branching" features cheap to build ([serverless](/ideas/cloud-architecture/serverless-databases.md), [branching](/ideas/cloud-architecture/database-branching.md)).
- **Keeping compatibility.** None of these systems asked users to adopt a new query language or engine. That is why they spread faster than distributed SQL.
- **Open-source reproduction.** Neon (Apache-2.0) showed a small team could rebuild the pattern for stock PostgreSQL: Safekeepers replicate WAL with Paxos, Pageservers materialize pages, and S3 is the long-term store[^neon-gh].
- **Cost efficiency, mostly.** A 2025 analytical cost model by Haubenschild and Leis concluded that cloud-native designs "perform well and scale to very large dataset sizes, while usually being cheaper than traditional designs." Socrates-style designs were the cheapest for many workloads[^cloud-oltp-cost].

# What failed
- **Write scale-out.** Aurora, Socrates and AlloyDB all scale reads but have one writer. The CIDR 2023 paper calls this "remarkable" given decades of shared-storage multi-writer research such as Oracle RAC and DB2 data sharing[^cidr23]. Only PolarDB-MP has a credible multi-primary design in production[^polardb-mp]. Hyperscalers moved write scaling into separate products instead ([Aurora Limitless/DSQL](/ideas/cloud-architecture/hyperscaler-distributed-sql.md)).
- **Cost predictability.** Aurora billed per I/O for eight years. AWS then added I/O-Optimized, which promises up to 40% savings when I/O exceeds 25% of spend[^io-opt]. That is an admission that the original pricing hurt heavy users. The cost model also finds that Aurora-like systems cost up to **13x more** when deployed across AZs, because they read pages across zones[^cloud-oltp-cost].
- **Fork lag and lock-in.** Each system is a proprietary fork. New PostgreSQL and MySQL major versions arrive months or years late, and you can't run the storage layer yourself. AlloyDB Omni is a partial exception.

# Why
1. **Cloud network economics flipped the classic tradeoff.** Inside a datacenter, sending log records is cheaper than shipping and writing pages on every replica. A shared storage fleet amortizes durability across thousands of tenants. Only a cloud provider has that fleet, so the design suits hyperscalers.
2. **Compatibility beat elegance.** Reusing the engine from the top of the stack down to the buffer manager meant users changed nothing. New distributed engines needed application rewrites, which kept their adoption niche.
3. **Single writer was good enough.** Most OLTP databases fit on one large primary, especially as instances grew to hundreds of cores. Write scale-out is hard, and it adds coordination that slows the common case. Vendors rationally skipped it.
4. **Billing determines perceived value.** Where a design spends money (3x full-copy storage, I/O requests, cross-AZ bytes) shapes how users see it. Haubenschild and Leis show the architecture is sound but the pricing model can make it look expensive[^cloud-oltp-cost].

# Lessons
- Disaggregate along the lines of cloud pricing: pay for log bandwidth, not page bandwidth.
- Keep the user-facing engine stock. Innovation below the SQL layer spreads, while innovation above it has to fight inertia.
- Single-writer plus shared storage covers most OLTP. Write scale-out is a separate product, not a feature.
- Publish the cost model. Opaque I/O pricing cost Aurora goodwill for years.

# Related
- Systems: [Aurora](/systems/aurora.md), [Azure SQL Hyperscale](/systems/azure-sql-hyperscale.md), [AlloyDB](/systems/alloydb.md), [PolarDB](/systems/polardb.md), [Neon](/systems/neon.md)
- Papers: [Socrates (2019)](/papers/2019-socrates.md), [OLTP in the Cloud cost model (2025)](/papers/2025-oltp-in-the-cloud-cost.md)
- Events: [Hyperscale GA](/events/2019-05-azure-sql-hyperscale-ga.md), [AlloyDB launch](/events/2022-05-alloydb-launch.md), [Databricks acquires Neon](/events/2025-05-databricks-acquires-neon.md)
