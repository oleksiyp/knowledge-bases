---
type: Event
title: "AWS AQUA for Redshift becomes generally available"
description: "AWS launched AQUA, a Nitro- and FPGA-based accelerator cache for Redshift RA3, claiming up to 10x faster scan-heavy queries; the opt-in feature was later made automatic and its configuration API retired."
date: 2021-04-14
year: 2021
kind: launch
signal: mixed
ideas: [ideas/hardware-engines/rdma-smartnic-fpga-offload]
systems: [systems/aws-aqua, systems/redshift]
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
---

# What happened

In mid-April 2021 AWS made AQUA (Advanced Query Accelerator) generally available for Redshift RA3 nodes at no extra charge. AQUA used AWS Nitro chips and FPGAs alongside SSDs to run scans, filters and aggregations close to storage, with AWS claiming up to 10x faster queries for suitable workloads[^aqua-ga][^blocks-aqua]. Later, AWS retired the AQUA configuration API; Redshift now decides automatically when to apply AQUA techniques[^aqua-retired].

# Why it matters

AQUA was the most visible attempt to sell FPGA offload as a named cloud database feature. Its quiet absorption into the platform fits a broader pattern: hardware offload survives as invisible infrastructure rather than as a product.

# Related

- [AWS AQUA](/systems/aws-aqua.md)
- [RDMA, SmartNIC and FPGA offload](/ideas/hardware-engines/rdma-smartnic-fpga-offload.md)
