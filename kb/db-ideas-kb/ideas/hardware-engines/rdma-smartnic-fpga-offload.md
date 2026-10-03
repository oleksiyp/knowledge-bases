---
type: Idea
title: "RDMA, SmartNIC/DPU and FPGA offload for databases"
description: "Use one-sided RDMA, programmable NICs and FPGAs to move data and filter it without host CPUs. Niche: it works inside hyperscaler and appliance stacks (Alibaba PolarDB, Oracle Exadata, Microsoft FaRM/A1, AWS Nitro) but stays invisible to users, and the most visible user-facing accelerator, Redshift AQUA, was folded away as a configurable feature within about a year of GA."
tags: [hardware, rdma, fpga, smartnic, dpu, offload, cloud]
area: hardware-engines
verdict: niche
hype_peak: 2020
adoption_2026: niche
origins: "RDMA (InfiniBand, RoCE) research databases 2014–2017 (FaRM, NAM-DB); Microsoft Catapult FPGAs in Azure; AWS Nitro offload cards from 2017."
key_systems: [systems/aws-aqua, systems/polardb, systems/redshift]
related_ideas: [ideas/hardware-engines/cxl-memory-disaggregation, ideas/hardware-engines/gpu-databases, ideas/cloud-architecture/disaggregated-storage-compute-oltp]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: aqua-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2021/04/aws-announces-general-availability-of-aqua-for-amazon-redshift/
    title: "AWS: General availability of AQUA for Amazon Redshift (April 2021)"
    author: org:aws
  - id: blocks-aqua
    resource: https://blocksandfiles.com/2021/04/15/amazon-brings-compute-to-redshift-storage-nodes-with-aqua/
    title: "Blocks & Files: Amazon brings more compute to Redshift nodes with AQUA"
  - id: aqua-retired
    resource: https://docs.aws.amazon.com/redshift/latest/APIReference/API_ModifyAquaConfiguration.html
    title: "Amazon Redshift API reference: ModifyAquaConfiguration (retired)"
    author: org:aws
  - id: aqua-repost
    resource: https://repost.aws/questions/QUo-xUw4fvQQ2TmdpQxUWUPA/where-did-redshift-aqua-go
    title: "AWS re:Post: Where did Redshift AQUA go?"
  - id: a1
    resource: https://arxiv.org/abs/2004.05712
    title: "Buragohain et al.: A1: A Distributed In-Memory Graph Database (SIGMOD 2020)"
  - id: polardb-scc
    resource: https://www.vldb.org/pvldb/vol16/p3754-chen.pdf
    title: "PolarDB-SCC: A Cloud-Native Database Ensuring Low Latency for Strongly Consistent Reads (PVLDB 16, 2023)"
  - id: polardb-tpcc
    resource: https://www.vldb.org/pvldb/vol18/p5059-chen.pdf
    title: "From Scale-Up to Scale-Out: PolarDB's Journey to Achieving 2 Billion tpmC (PVLDB 18, 2025)"
  - id: exadata-xrmem
    resource: https://docs.oracle.com/cd/F86788_01/dbmso/system-overview-exadata-database-machine-dbmso.pdf
    title: "Oracle Exadata Database Machine System Overview 23.1 (XRMEM)"
    author: org:oracle
---

# Summary

**Verdict: niche (successful but invisible).** RDMA and network/storage offload hardware did reach production databases between 2018 and 2026, but almost exclusively inside vertically integrated stacks: Alibaba's PolarDB uses RDMA throughout and set a TPC-C record of over 2 billion tpmC in 2025 with an RDMA-optimized commit protocol[^polardb-tpcc]; Oracle Exadata serves data from remote memory over RoCE (XRMEM)[^exadata-xrmem]; Microsoft ran the A1 graph database on FaRM's one-sided RDMA[^a1]. User-visible accelerator products fared worse. AWS's AQUA for Redshift (Nitro chips plus FPGAs, "up to 10x faster") went GA in April 2021[^aqua-ga]; its configuration API was later retired and AWS now says Redshift decides automatically when to use AQUA techniques[^aqua-retired][^aqua-repost]. Offload became plumbing rather than a product category.

# The idea

- **One-sided RDMA** lets a node read or write remote memory without the remote CPU, enabling distributed transactions and remote buffer pools with microsecond latency.
- **SmartNICs/DPUs** (AWS Nitro, Nvidia BlueField) run networking, storage and encryption off the host CPU.
- **FPGAs near storage** filter and decompress data before it reaches compute (AQUA, earlier Netezza, IBM).

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019 | AWS announces AQUA at re:Invent | + |
| 2020 | Microsoft publishes A1, a graph database on FaRM using one-sided RDMA reads and writes[^a1] | + |
| 2021 | AQUA GA for Redshift RA3, free, claims up to 10x on scan/filter-heavy queries[^aqua-ga][^blocks-aqua] | + |
| 2022–23 | AQUA configuration API retired; feature made automatic[^aqua-retired][^aqua-repost] | − |
| 2023 | PolarDB-SCC in production with RDMA-based low-latency strongly consistent reads[^polardb-scc]; Exadata X10M replaces PMem with DRAM served over RDMA (XRMEM)[^exadata-xrmem] | + |
| 2025 | PolarDB reaches 2.055B tpmC on 2,340 nodes using RDMA-optimized 2PC[^polardb-tpcc] | + |

# What succeeded

- **Hyperscaler internals.** RDMA networks inside cloud regions now underpin disaggregated databases (PolarDB) and storage services. Nitro-style offload is standard in AWS instances.
- **Appliances.** Exadata has used RDMA for years and could swap media (PMem to DRAM) while keeping the RDMA architecture[^exadata-xrmem].
- **Benchmarks.** The PolarDB TPC-C result shows RDMA-optimized distributed transactions at very large scale[^polardb-tpcc].

# What failed

- **User-facing accelerator SKUs.** AQUA's opt-in switch disappeared; AWS did not publish a detailed explanation, and independent evidence of its benefits in practice is scarce.
- **RDMA in open-source databases.** No major OSS database (PostgreSQL, MySQL, CockroachDB, Cassandra) made RDMA a core dependency; public cloud VMs rarely expose general RDMA to customers outside HPC instance types.
- **FPGA databases.** Research prototypes did not become products outside hyperscalers.

# Why

1. **Only the operator of the whole stack can use the hardware.** RDMA needs a lossless, carefully managed network; FPGAs need custom bitstreams per generation. Clouds and appliance vendors can do that; database vendors running on someone else's cloud cannot.
2. **CPUs kept getting cheaper per core** (Graviton, EPYC). Offload has to beat "add more cores", and for scan-heavy work vectorized CPU code got good enough.
3. **Accelerators are a maintenance burden.** A feature that depends on specific hardware must be re-done for every instance generation; folding it into the platform (as AWS did with AQUA) hides that cost.

# Lessons

- Hardware offload tends to win as invisible infrastructure, not as a named database feature.
- Architectures that separate the protocol (RDMA access to remote memory) from the medium survive hardware churn.
- A user-facing "10x" accelerator that later becomes non-configurable is a signal the benefit was narrower than marketed.

# Related

- [AWS AQUA](/systems/aws-aqua.md), [PolarDB](/systems/polardb.md), [Redshift](/systems/redshift.md)
- [CXL memory disaggregation](/ideas/hardware-engines/cxl-memory-disaggregation.md)
- [AQUA GA (2021)](/events/2021-04-aws-aqua-ga.md)
