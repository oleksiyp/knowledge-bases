---
type: System
title: AWS AQUA (Advanced Query Accelerator)
description: "Hardware-accelerated cache layer for Amazon Redshift RA3 using AWS Nitro chips and FPGAs near SSD storage; announced 2019, GA April 2021 with 'up to 10x' claims, then turned from an opt-in feature into an automatic, non-configurable part of Redshift."
resource: https://aws.amazon.com/about-aws/whats-new/2021/04/aws-announces-general-availability-of-aqua-for-amazon-redshift/
tags: [hardware, fpga, nitro, redshift, offload, cloud]
kind: cloud-service
first_release: 2021
org: "Amazon Web Services"
outcome: pivoted
ideas: [ideas/hardware-engines/rdma-smartnic-fpga-offload, ideas/hardware-engines/gpu-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: aqua-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2021/04/aws-announces-general-availability-of-aqua-for-amazon-redshift/
    title: "AWS: General availability of AQUA for Amazon Redshift"
    author: org:aws
  - id: blocks-aqua
    resource: https://blocksandfiles.com/2021/04/15/amazon-brings-compute-to-redshift-storage-nodes-with-aqua/
    title: "Blocks & Files: Amazon brings more compute to Redshift nodes with AQUA"
  - id: aqua-retired
    resource: https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyAquaConfiguration.html
    title: "Amazon Redshift API: ModifyAquaConfiguration (retired)"
    author: org:aws
  - id: aqua-repost
    resource: https://repost.aws/questions/QUo-xUw4fvQQ2TmdpQxUWUPA/where-did-redshift-aqua-go
    title: "AWS re:Post: Where did Redshift AQUA go?"
---

# Summary

AQUA added a distributed, hardware-accelerated cache in front of Redshift Managed Storage: AWS Nitro chips handled compression and encryption and FPGAs ran scans, filters and aggregation (including LIKE/SIMILAR TO predicates) before data reached compute nodes[^blocks-aqua]. AWS announced it at re:Invent 2019 and made it generally available in April 2021 for RA3 nodes at no extra charge, claiming up to 10x faster queries for scan-heavy workloads[^aqua-ga]. Later, AWS retired the configuration API: Redshift now "automatically determines" when to use AQUA techniques, and users can no longer turn it on or off per cluster[^aqua-retired][^aqua-repost]. AWS never published an explanation; whether the FPGA hardware path still exists is not public (unconfirmed).

# Timeline

| Year | Event |
|---|---|
| 2019 | Announced at re:Invent |
| 2021 | GA (April); expanded to ra3.xlplus and more regions[^aqua-ga] |
| 2022–23 | Configuration API retired; feature automatic[^aqua-retired] |

# What worked

- No-cost, no-code-change acceleration was easy to adopt for RA3 customers.
- Validated the idea of pushing filtering toward storage in a disaggregated warehouse.

# What didn't

- The marketed "10x" applied to a narrow class of scan/LIKE-heavy queries; independent benchmarks are scarce.
- As a visible product feature, it was short-lived: within about two years it stopped being something customers could see or control.

# Related

- [RDMA, SmartNIC and FPGA offload](/ideas/hardware-engines/rdma-smartnic-fpga-offload.md)
- [Redshift](/systems/redshift.md)
- [AQUA GA (2021)](/events/2021-04-aws-aqua-ga.md)
