---
type: Paper
title: "OLTP in the Cloud: Architectures, Tradeoffs, and Cost"
description: "An analytical cost model comparing six cloud OLTP architectures (Classic, In-Memory, remote block device, HADR, Aurora-like, Socrates-like) on real AWS prices. It finds cloud-native disaggregated designs usually cheapest, but full-copy replication and cross-AZ traffic dominate their cost."
year: 2025
venue: VLDB Journal 2025
authors: [Michael Haubenschild, Viktor Leis]
resource: https://www.cs.cit.tum.de/fileadmin/w00cfj/dis/papers/CloudOLTP.pdf
impact: medium
ideas: [ideas/cloud-architecture/disaggregated-storage-compute-oltp, ideas/cloud-architecture/managed-dbaas-vs-repatriation]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: preprint
    resource: https://www.cs.cit.tum.de/fileadmin/w00cfj/dis/papers/CloudOLTP.pdf
    title: "Preprint: OLTP in the Cloud: Architectures, Tradeoffs, and Cost"
  - id: springer
    resource: https://link.springer.com/article/10.1007/s00778-025-00913-z
    title: "VLDB Journal (Springer) version"
  - id: cidr23
    resource: https://www.cidrdb.org/cidr2023/papers/p50-ziegler.pdf
    title: "Ziegler, Bernstein, Leis, Binnig: Is Scalable OLTP in the Cloud a Solved Problem? (CIDR 2023)"
---

# Claim
Given a workload (data size, transaction rate, latency, durability, availability), a model calibrated with the LeanStore engine and AWS instance and service prices can pick the cost-optimal architecture and hardware[^preprint]. Twelve observations follow, including:
- Cloud-native designs "perform well and scale to very large dataset sizes, while usually being cheaper than traditional designs".
- Socrates-like is the most cost-efficient design for many workloads. Aurora-like costs are dominated by **3x replication of the full database** for large cold datasets. Replicating only the log tail would suffice for durability.
- EBS-based designs get expensive at high transaction rates because of provisioned IOPS. In one case they cost 13x more than Aurora-like and Socrates-like designs.
- Inter-AZ traffic can multiply costs: Aurora-like costs rose 13x for a 10k tx/s workload deployed across AZs.
- Classic local-SSD designs remain cheapest when durability requirements are low, and ARM (Graviton) instances were cheapest in 21 of 28 workloads[^preprint].

# What happened next
It is the most rigorous public answer to "is Aurora-style disaggregation actually cheaper?". The answer is usually yes, though the paper also finds specific waste in how the designs replicate data. It follows the same group's CIDR 2023 critique that cloud OLTP remains single-writer despite decades of multi-writer shared-storage research[^cidr23]. Industry impact by 2026 is indirect: it supports later "replicate the log, not the pages" designs and the move of WAL tiers onto cheaper storage.

# Related
[Disaggregated OLTP](/ideas/cloud-architecture/disaggregated-storage-compute-oltp.md) · [Socrates (2019)](/papers/2019-socrates.md) · [LeanStore](/systems/leanstore.md) · [AWS Graviton](/systems/aws-graviton.md)
