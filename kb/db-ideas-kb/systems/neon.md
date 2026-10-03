---
type: System
title: Neon
description: "Open-source serverless PostgreSQL that separates stock Postgres compute from a WAL service (Safekeepers) and page service (Pageservers) backed by object storage, enabling scale-to-zero and instant branching. Acquired by Databricks for about $1B in 2025 and also sold as Lakebase."
resource: https://neon.com
tags: [postgres, serverless, branching, disaggregated-storage, object-storage, ai-agents]
kind: product
first_release: 2022
org: "Neon Inc. (acquired by Databricks, 2025)"
license: Apache-2.0
outcome: acquired
ideas: [ideas/cloud-architecture/disaggregated-storage-compute-oltp, ideas/cloud-architecture/serverless-databases, ideas/cloud-architecture/database-branching, ideas/cloud-architecture/object-storage-native-databases, ideas/cloud-architecture/database-per-tenant]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: neon-gh
    resource: https://github.com/neondatabase/neon
    title: "Neon GitHub repository"
    author: org:neon
  - id: neon-b
    resource: https://neon.com/blog/series-b-funding
    title: "Neon: We raised another $46M (Aug 2023)"
    author: org:neon
  - id: neon-ga
    resource: https://www.hpcwire.com/bigdatawire/this-just-in/neon-unveils-its-serverless-postgres-platform-to-the-global-market/
    title: "BigDATAwire: Neon unveils its serverless Postgres platform (GA, Apr 2024)"
  - id: cnbc-neon
    resource: https://www.cnbc.com/2025/05/14/databricks-is-buying-database-startup-neon-for-about-1-billion.html
    title: "CNBC: Databricks is buying Neon for about $1 billion (2025-05-14)"
  - id: techrepublic-neon
    resource: https://www.techrepublic.com/article/news-databricks-neon-acquisition/
    title: "TechRepublic: Databricks to acquire Neon in $1 billion deal"
  - id: neon-postmortem
    resource: https://neon.com/blog/aws-cni-lessons-from-a-production-outage
    title: "Neon: AWS CNI lessons from a production outage (May 2025)"
    author: org:neon
  - id: vantage
    resource: https://www.vantage.sh/blog/neon-acquisition-new-pricing
    title: "Vantage: Neon price drop likely just from Databricks AWS discounts"
  - id: lakebase
    resource: https://siliconangle.com/2025/06/11/following-neon-acquisition-databricks-launches-serverless-lakebase-database/
    title: "SiliconANGLE: Following Neon acquisition, Databricks launches Lakebase (2025-06-11)"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary
Neon was founded in 2021 by PostgreSQL hackers Heikki Linnakangas and Stas Kelvich with CEO Nikita Shamgunov (formerly of MemSQL)[^neon-b]. It is the open-source reproduction of Aurora's architecture for **unmodified** PostgreSQL compute. Safekeepers form a Paxos-replicated WAL service. Pageservers ingest WAL, materialize pages and offload layers to S3[^neon-gh]. Stateless compute gave it scale-to-zero and copy-on-write **branching**. It raised $104M in total (Series B of $46M, Aug 2023)[^neon-b] and reached GA on Apr 15, 2024, growing from about 6,000 to more than 700,000 databases in a year[^neon-ga]. In May 2025 Databricks agreed to buy it for about $1B, citing that over 80% of Neon databases were created by AI agents. Neon had 18,000+ customers including OpenAI, Replit and Vercel[^cnbc-neon][^techrepublic-neon]. Databricks rebranded the technology as **Lakebase** while keeping Neon as a standalone service[^lakebase][^pavlo-2025]. Prices dropped in late 2025: storage from $1.75 to $0.35/GB-month. Vantage attributes this to Databricks' AWS discounts[^vantage].

# Timeline
| Date | Event |
|---|---|
| 2021 | Founded[^neon-b] |
| 2022 | Public preview |
| 2023-08 | $46M Series B ($104M total)[^neon-b] |
| 2024-04-15 | GA[^neon-ga] |
| 2025-05-14 | Databricks acquisition (~$1B)[^cnbc-neon] |
| 2025-05-16/19 | 5.5 h of cold-start outages in us-east-1 (IP exhaustion, control-plane overload)[^neon-postmortem] |
| 2025-06 | Lakebase announced[^lakebase] |
| 2025-08..11 | Price cuts[^vantage] |

# What worked
- Stock Postgres plus disaggregated storage made scale-to-zero and branching cheap, which matched agent-driven provisioning perfectly[^techrepublic-neon].
- Open source (Apache-2.0) earned developer trust and drew Snowflake and Databricks as Series B investors before the acquisition[^neon-b].

# What didn't
- Cold starts depend on the control plane. The May 2025 outages left sleeping databases unable to wake[^neon-postmortem].
- Never shown to be profitable as an independent company. The exit came through an AI-driven acquisition, not standalone scale.

# Related
[Serverless databases](/ideas/cloud-architecture/serverless-databases.md) · [Branching](/ideas/cloud-architecture/database-branching.md) · [Databricks](/systems/databricks.md) · [Acquisition event](/events/2025-05-databricks-acquires-neon.md) · [GA event](/events/2024-04-neon-ga.md)
