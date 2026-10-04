---
type: Paper
title: 'SageDB: A Learned Database System'
description: The 2019 vision of instance-specialized database components led to an integrated 2022 research prototype and
  influenced cloud optimization work; broad commercial deployment remains a separate question.
year: 2019
venue: CIDR 2019
authors:
- Tim Kraska
- Mohammad Alizadeh
- Alex Beutel
- Ed H. Chi
- Jialin Ding
- Ani Kristo
- Guillaume Leclerc
- Samuel Madden
- Hongzi Mao
- Vikram Nathan
impact: high
resource: https://research.google/pubs/pub47669/
ideas:
- ideas/ml-for-db/instance-optimized-systems
- ideas/ml-for-db/learned-indexes
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: sagedb
  resource: https://research.google/pubs/pub47669/
  title: 'Kraska et al.: SageDB: A Learned Database System (CIDR 2019)'
- id: sage-prototype
  resource: https://www.vldb.org/pvldb/vol15/p4062-ding.pdf
  title: 'Ding et al.: SageDB: An Instance-Optimized Data Analytics System, PVLDB 15(13), 2022'
- id: amzn-lsg
  resource: https://www.amazon.science/blog/building-systems-that-automatically-adjust-to-workloads-and-data
  title: 'Amazon Science: Building systems that automatically adjust to workloads and data (2022-11-03)'
---

# Claim
SageDB proposes specializing database components to the application's data, workload and hardware through learned models and code synthesis. Instead of treating an index or a query optimizer as a universally fixed implementation, the system would adapt those choices to an instance.[^sagedb] The 2019 paper is a research vision, not a production product launch.

# What happened next
The project did progress beyond that vision. A 2022 paper reports an integrated analytics prototype combining instance-optimized layouts and partial materialized views.[^sage-prototype] It is therefore incorrect to say that SageDB was never built. Separately, Amazon's November 2022 account describes Tim Kraska leading its Learned Systems Group and bringing instance optimization to Redshift.[^amzn-lsg] This establishes continuity of research interests, not that AWS deployed SageDB wholesale.

Our assessment is that the agenda was influential even though the collected evidence does not establish a widely deployed standalone SageDB product. Its harder systems question is how individually beneficial components interact when sharing a workload and a resource budget. A fast local model is not automatically a globally good design. The appropriate verdict distinguishes the vision, the implemented prototype, and later production features rather than reducing all three to one success or failure label.

# Related
- [SageDB system](/systems/sagedb.md), [Instance-optimized systems](/ideas/ml-for-db/instance-optimized-systems.md)
- [2022 prototype paper](/papers/2022-sagedb-instance-optimized-analytics.md)

[^sagedb]: [Kraska et al.: SageDB: A Learned Database System (CIDR 2019)](https://research.google/pubs/pub47669/).
[^sage-prototype]: [Ding et al.: SageDB: An Instance-Optimized Data Analytics System, PVLDB 15(13), 2022](https://www.vldb.org/pvldb/vol15/p4062-ding.pdf).
[^amzn-lsg]: [Amazon Science: Building systems that automatically adjust to workloads and data (2022-11-03)](https://www.amazon.science/blog/building-systems-that-automatically-adjust-to-workloads-and-data).
