---
type: Idea
title: "Instance-optimized databases (SageDB and the learned-systems agenda)"
description: "Specialize every component of a database (indexes, layouts, scheduling, scaling) to one customer's data and workload using learned models. SageDB produced an integrated research prototype, but broad production adoption of the whole-system vision is not established. Its practical descendant, ML for fleet-wide scheduling, runtime prediction and scaling inside cloud warehouses, shipped in Amazon Redshift and became the default in 2026."
tags: [learned-systems, instance-optimization, redshift, cloud, workload-forecasting]
area: ml-for-db
verdict: mixed
hype_peak: 2020
adoption_2026: niche
origins: "Kraska et al., 'SageDB: A Learned Database System' (CIDR 2019), building on the learned index paper."
key_systems: [systems/sagedb, systems/redshift]
related_ideas: [ideas/ml-for-db/learned-indexes, ideas/ml-for-db/learned-query-optimizers, ideas/ml-for-db/self-driving-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: sage-prototype
    resource: https://www.vldb.org/pvldb/vol15/p4062-ding.pdf
    title: "Ding et al.: SageDB prototype, PVLDB 15(13), 2022"
  - id: sagedb
    resource: https://research.google/pubs/pub47669/
    title: "Kraska et al.: SageDB: A Learned Database System (CIDR 2019)"
  - id: amzn-lsg
    resource: https://www.amazon.science/blog/building-systems-that-automatically-adjust-to-workloads-and-data
    title: "Amazon Science: Building systems that automatically adjust to workloads and data (2022-11-03)"
  - id: redset
    resource: https://www.vldb.org/pvldb/vol17/p3694-saxena.pdf
    title: "Saxena et al.: Why TPC Is Not Enough: An Analysis of the Amazon Redshift Fleet (PVLDB 17, 2024)"
  - id: stage
    resource: https://arxiv.org/abs/2403.02286
    title: "Wu et al.: Stage: Query Execution Time Prediction in Amazon Redshift (SIGMOD 2024 Companion)"
  - id: rais-paper
    resource: https://assets.amazon.science/64/da/6f7ad2174272ae22a20f6058baca/intelligent-scaling-in-amazon-redshift.pdf
    title: "Nathan et al.: Intelligent Scaling in Amazon Redshift (SIGMOD 2024 Companion)"
  - id: rais-preview
    resource: https://aws.amazon.com/about-aws/whats-new/2023/11/amazon-redshift-serverless-ai-driven-scaling-optimizations-preview
    title: "AWS: Amazon Redshift Serverless with AI-driven scaling and optimizations (Preview), Nov 2023"
  - id: rais-ga
    resource: https://aws.amazon.com/about-aws/whats-new/2024/10/amazon-redshift-serverless-ai-driven-scaling-optimization/
    title: "AWS: Announcing Amazon Redshift Serverless with AI-driven scaling and optimization (2024-10-30)"
  - id: rais-default
    resource: https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-redshift-serverless-ai-driven-scaling-default/
    title: "AWS: Amazon Redshift Serverless AI-driven scaling is now the default for new workgroups (Apr 2026)"
  - id: qb5000
    resource: https://dl.acm.org/doi/10.1145/3183713.3196908
    title: "Ma et al.: Query-based Workload Forecasting for Self-Driving Database Management Systems (SIGMOD 2018)"
  - id: brad
    resource: https://arxiv.org/pdf/2407.15363
    title: "Yu et al.: Blueprinting the Cloud: Unifying and Automatically Optimizing Cloud Data Infrastructures with BRAD (VLDB 2024)"
---

# Summary

**Verdict: mixed.** SageDB (CIDR 2019) proposed a database whose every component, from indexes and sorting to joins and the optimizer, is synthesized from learned models of the customer's data and workload.[^sagedb] A 2022 paper documents an integrated SageDB prototype combining optimized layouts and partial materialized views; it would be incorrect to call the project unbuilt.[^sage-prototype] Many other pieces remained research (see [learned indexes](/ideas/ml-for-db/learned-indexes.md) and [learned optimizers](/ideas/ml-for-db/learned-query-optimizers.md)). The practical version of the idea moved into a cloud vendor. In 2022 AWS hired Tim Kraska and his group to form the Learned Systems Group and bring "instance optimization" to Redshift.[^amzn-lsg] The results shipped: learned runtime prediction for scheduling, ML-driven scaling for Redshift Serverless (GA October 2024), and from April 2026 that scaling is the default for new workgroups.[^stage][^rais-ga][^rais-default] The verdict separates outcomes: an integrated prototype exists, while the stronger production evidence is for **operational decisions** such as compute allocation and scheduling.

# The idea

General-purpose engines are tuned for no one in particular. If the system models the data distribution, the workload and the hardware, it can specialize itself to each instance: choose layouts, indexes, join algorithms and resources for that instance. Kraska put it this way: "Whenever a developer has to make a trade-off between two techniques or defines a constant, the developer should think about if this constant or trade-off shouldn't be automatically tuned."[^amzn-lsg]

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018 | QueryBot 5000 (CMU): forecast query arrival rates per query template[^qb5000] | + |
| 2019 | SageDB vision paper (CIDR) | + |
| 2019–2021 | MIT DSAIL papers on learned multi-dimensional indexes (Flood, Tsunami), Neo, Bao | + |
| 2022 | SageDB integrated analytics prototype published, beyond the original vision paper.[^sage-prototype] |
| Nov 2022 | Amazon announces Kraska's Learned Systems Group for Redshift | + |
| Nov 2023 | Redshift Serverless "AI-driven scaling and optimizations" preview[^rais-preview] | + |
| 2024 | Redshift publishes Stage predictor, Intelligent Scaling, and the Redset fleet analysis | + |
| 2024 | BRAD (MIT, VLDB 2024) routes work automatically across multiple cloud engines (research)[^brad] | + |
| Oct 2024 | AI-driven scaling GA, with a price/performance slider; AWS claims up to 10x better price-performance for variable workloads | + |
| Apr 2026 | AI-driven scaling becomes the default for new Redshift Serverless workgroups | + |

# What succeeded

- **Learning from the fleet, not one instance.** Stage pairs per-instance local models with a global model trained across all Redshift instances. It improved average query latency by about 20% through better scheduling.[^stage]
- **Exploiting repetition.** Redshift's own fleet data showed that in half of clusters, 80% of queries exactly repeat earlier ones.[^redset] That makes caching, learned prediction and history-based decisions very effective. It also means TPC-style benchmarks understate what workload-specific learning can do.
- **Scaling and resource decisions.** The ML forecasts compute needs before queries queue, and the customer only picks a price/performance point.[^rais-ga][^rais-paper] Kraska's group's early Redshift work included automated materialized views and automatic workload management.[^amzn-lsg]

# What failed

- **Broad deployment of the whole-system vision.** SageDB progressed to an integrated prototype.[^sage-prototype] The collected evidence does not establish a broadly adopted standalone product.
- **Universal component replacement.** The sources do not establish that learned versions of indexes, sorting, joins and planning displaced classical implementations across mainstream engines.
- **Academic evaluation.** Kraska: instance optimization "is extremely hard to test in academia", because the value appears only with real, evolving workloads that academics don't have.[^amzn-lsg]

# Why

1. **Value is in operations, not algorithms.** Choosing how much compute to run and when is a forecasting problem with a clear cost signal and a safe fallback. Replacing a sort or an index changes correctness-critical code paths for small gains.
2. **Fleet data is the moat.** A cloud vendor sees millions of queries across thousands of customers. That data is what makes global models and forecasting work, and access to such fleet data is a substantial advantage.
3. **Repetition makes simple learning pay.** With 80% repeats in half the clusters, memoization and per-template models are enough.[^redset]
4. **People followed the data.** The research leaders joined the vendor whose data they needed. The results are therefore proprietary features, not open-source components.

# Lessons

- "Specialize to the instance" works best for control decisions (scaling, scheduling, caching), where mistakes cost money but not correctness.
- Ideas that need production workloads to validate end up at cloud vendors, and come out as features rather than papers or open source.
- Vision papers set agendas but rarely become systems. Judge them by which pieces ship.

# Related

- [Learned indexes](/ideas/ml-for-db/learned-indexes.md), [Learned query optimizers](/ideas/ml-for-db/learned-query-optimizers.md), [Self-driving databases](/ideas/ml-for-db/self-driving-databases.md)
- Systems: [SageDB](/systems/sagedb.md), [Redshift](/systems/redshift.md)
- Event: [AWS forms Learned Systems Group](/events/2022-11-aws-learned-systems-group.md)
- Papers: [SageDB vision](/papers/2019-sagedb.md), [2022 prototype](/papers/2022-sagedb-instance-optimized-analytics.md)

[^sagedb]: CIDR 2019.
[^amzn-lsg]: Amazon Science, 2022-11-03.
[^redset]: PVLDB 17, 2024: "in 50% of database clusters 80% of queries are 1-to-1 repetitions of previously seen queries".
[^stage]: SIGMOD Companion 2024.
[^rais-paper]: SIGMOD Companion 2024.
[^rais-preview]: AWS What's New, November 2023.
[^rais-ga]: AWS What's New, 2024-10-30.
[^rais-default]: AWS What's New, April 2026.
[^qb5000]: SIGMOD 2018.
[^brad]: VLDB 2024.

[^sage-prototype]: [Ding et al.: SageDB prototype, PVLDB 15(13), 2022](https://www.vldb.org/pvldb/vol15/p4062-ding.pdf).
