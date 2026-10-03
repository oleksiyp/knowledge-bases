---
type: Idea
title: "BYOC (bring your own cloud) deployment for data infrastructure"
description: "The vendor runs the control plane and the data plane runs in the customer's own cloud account. Verdict: mixed. It became a standard enterprise tier for streaming and analytics vendors (Redpanda, WarpStream, ClickHouse, Databricks-style) and helps close deals with committed-spend and sovereignty buyers. It shifts real operational and security burden to customers and never displaced plain SaaS."
tags: [byoc, deployment-model, saas, data-sovereignty, cloud-cost, streaming]
area: cloud-architecture
verdict: mixed
hype_peak: 2024
adoption_2026: niche
origins: "Databricks' classic data plane in customer VPCs (2010s); managed-service VPC peering"
key_systems: [systems/warpstream, systems/redpanda, systems/clickhouse, systems/databricks, systems/confluent, systems/s3]
related_ideas: [ideas/cloud-architecture/object-storage-native-databases, ideas/cloud-architecture/managed-dbaas-vs-repatriation]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: rp-byoc
    resource: https://www.redpanda.com/blog/data-sovereignty-fully-managed-cloud-byoc
    title: "Redpanda: A middle path for data sovereignty: Bring Your Own Cloud"
    author: org:redpanda
  - id: ws-byoc
    resource: https://www.warpstream.com/blog/secure-by-default-how-warpstreams-byoc-deployment-model-secures-the-most-sensitive-workloads
    title: "WarpStream: Secure by default: how WarpStream's BYOC deployment model secures the most sensitive workloads"
    author: org:warpstream
  - id: ch-byoc
    resource: https://clickhouse.com/blog/announcing-general-availability-of-clickhouse-bring-your-own-cloud-on-aws
    title: "ClickHouse: General availability of ClickHouse BYOC on AWS (Feb 2025)"
    author: org:clickhouse
  - id: ch-byoc-docs
    resource: https://clickhouse.com/docs/cloud/reference/byoc/overview
    title: "ClickHouse docs: BYOC overview"
    author: org:clickhouse
  - id: datagravity
    resource: https://www.datagravity.dev/p/the-rise-of-cloudprem-newprem-and
    title: "Data Gravity: The Rise of CloudPrem, NewPrem and BYOC"
  - id: railway-byoc
    resource: https://blog.railway.com/p/what-is-byoc-developer-guide-2026
    title: "Railway: What is BYOC? A developer's guide for 2026"
  - id: northflank-byoc
    resource: https://northflank.com/blog/what-is-byoc-in-cloud-computing
    title: "Northflank: What is BYOC in cloud computing?"
---

# Summary
**Mixed.** BYOC splits a managed service in two. The vendor's **control plane** (UI, API, billing, orchestration) stays in the vendor's account. The **data plane** (compute, storage, backups) runs in the customer's VPC[^ch-byoc-docs]. Between 2022 and 2025 it went from a Databricks peculiarity to a checkbox for data-infrastructure vendors. Redpanda and WarpStream led in streaming (WarpStream offered *only* BYOC and was bought by Confluent in 2024), and ClickHouse made BYOC on AWS GA in February 2025[^rp-byoc][^ws-byoc][^ch-byoc]. It works as a **sales instrument**: it lets customers spend committed cloud credits, keeps data in their perimeter, and avoids vendor egress. It has not replaced SaaS. Customers inherit IAM, networking and quota work, and the security story is weaker than advertised when vendors need broad cross-account permissions to operate[^railway-byoc][^northflank-byoc].

# The idea
The promise is "the operational experience of SaaS with the data control of self-hosting." Three drivers:
1. **Committed spend.** Big enterprises have multi-year cloud commitments. Infrastructure that runs in their own account burns down that commitment, while SaaS invoices are new budget.
2. **Sovereignty and compliance.** The data never leaves the customer's account or region.
3. **Network costs.** Keeping high-volume data (Kafka traffic, logs) inside the customer's VPC avoids cross-account and cross-AZ egress.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018–21 | Databricks' "classic" data plane in customer accounts is the template. Most DBaaS stays pure SaaS | ± |
| 2022–23 | Redpanda markets BYOC as its main cloud model[^rp-byoc]. WarpStream launches BYOC-only, stateless agents on S3[^ws-byoc] | + |
| 2024 | Confluent acquires WarpStream, which industry commentary reads as validating BYOC[^datagravity] | + |
| 2025 | ClickHouse BYOC on AWS GA (Feb 21), part of a five-year AWS collaboration[^ch-byoc] | + |
| 2026 | BYOC is a standard enterprise tier for streaming, analytics and vector vendors. Platform tools (Northflank, Railway, Distr) sell "BYOC enablement"[^railway-byoc] | ± |

# What succeeded
- **Streaming.** Kafka-compatible vendors used BYOC to win sovereignty-sensitive and high-volume customers. WarpStream's stateless agents writing to the customer's S3 made BYOC almost free to operate[^ws-byoc].
- **Analytics.** ClickHouse, Databricks and others offer it as the enterprise tier. The vendor keeps upgrades and on-call, and the customer keeps the bytes[^ch-byoc].
- **Deal velocity.** BYOC lets procurement count spend against existing hyperscaler commitments. That is the most-cited reason enterprises ask for it[^datagravity].

# What failed / limits
- **Shared-responsibility friction.** Customers manage IAM roles, network configuration and quotas. Incidents need joint debugging across two organizations[^northflank-byoc].
- **Sovereignty is partial.** Many BYOC designs need vendor permissions inside the customer VPC for monitoring and troubleshooting. Critics note this "fundamentally defeats the promise of data sovereignty"[^railway-byoc].
- **No benefit without a cloud commitment.** For small customers it adds complexity with no financial offset[^railway-byoc]. Self-serve users still pick SaaS.
- **Stateful engines suffer.** BYOC suits stateless compute on object storage. For classic stateful databases the vendor must operate disks it doesn't own, which is why OLTP DBaaS leaders (Atlas, Aurora, Neon) stayed mostly SaaS.

# Why
1. **Object storage made BYOC operable.** If all state lives in the customer's S3 bucket and the vendor's processes are stateless, the vendor can manage a fleet it doesn't own. This is why BYOC grew alongside [object-storage-native](/ideas/cloud-architecture/object-storage-native-databases.md) designs.
2. **Enterprise purchasing beats architecture.** BYOC spread because of how cloud commitments and security reviews work, not because it is technically superior.
3. **Hyperscaler marketplaces partly substitute.** Buying SaaS through AWS/GCP/Azure marketplaces also burns commitments, which limits BYOC to buyers with strict sovereignty needs.

# Lessons
- Deployment models follow procurement. Ask where the money is budgeted before choosing an architecture.
- BYOC is cheap to offer only if the data plane is stateless.
- "Your data never leaves your account" claims need an audit of the vendor's IAM permissions.

# Related
- Systems: [WarpStream](/systems/warpstream.md), [Redpanda](/systems/redpanda.md), [ClickHouse](/systems/clickhouse.md), [Databricks](/systems/databricks.md), [Confluent](/systems/confluent.md)
- Ideas: [Object-storage-native databases](/ideas/cloud-architecture/object-storage-native-databases.md), [Managed DBaaS vs repatriation](/ideas/cloud-architecture/managed-dbaas-vs-repatriation.md)
