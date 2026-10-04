---
type: System
title: SageDB
description: "Vision for a 'learned database system' (Kraska et al., CIDR 2019, MIT and Google): every component, from indexes and sorting to joins and the optimizer, synthesized from models of the data and workload. An integrated research prototype followed in 2022; the broader agenda also influenced AWS Redshift's Learned Systems Group."
resource: https://research.google/pubs/pub47669/
tags: [learned-systems, instance-optimization, research, mit, google]
kind: research
first_release: 2019
org: "MIT CSAIL / Google (Tim Kraska et al.)"
outcome: pivoted
ideas: [ideas/ml-for-db/instance-optimized-systems, ideas/ml-for-db/learned-indexes]
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
  - id: acolyer
    resource: https://blog.acolyer.org/2019/01/16/sagedb-a-learned-database-system/
    title: "The Morning Paper: SageDB: a learned database system (2019-01-16)"
  - id: amzn-lsg
    resource: https://www.amazon.science/blog/building-systems-that-automatically-adjust-to-workloads-and-data
    title: "Amazon Science: Building systems that automatically adjust to workloads and data (2022-11-03)"
  - id: csail
    resource: https://www.csail.mit.edu/person/tim-kraska
    title: "MIT CSAIL: Tim Kraska"
---

# Summary

SageDB was presented at CIDR 2019 by Tim Kraska, Mohammad Alizadeh, Alex Beutel, Ed Chi, Jialin Ding, Ani Kristo, Guillaume Leclerc, Samuel Madden, Hongzi Mao and Vikram Nathan.[^sagedb] It extended the learned-index argument to a whole DBMS. By modelling data distribution, workload and hardware, the system would use code synthesis to generate specialized index structures, sorting and join algorithms, and even the query optimizer.[^sagedb][^acolyer] The 2019 paper set out a vision. A 2022 follow-up implemented an integrated analytics prototype using instance-optimized layouts and partial materialized views.[^sage-prototype] The collected evidence does not establish broad deployment as a standalone product.

# Timeline

| Date | Event |
|---|---|
| Jan 2019 | CIDR paper |
| 2019–2022 | MIT DSAIL publishes components: learned multi-dimensional indexes, Neo, Bao, learned sorting |
| 2022 | Integrated analytics prototype published in PVLDB, with coordinated layout and partial-view optimization.[^sage-prototype] |
| Nov 2022 | Kraska (on leave from MIT[^csail]) leads AWS's new Learned Systems Group to bring "instance optimization" to Redshift[^amzn-lsg] |

# What worked

- It named and popularized "instance-optimized" systems. It was a productive research agenda with many PhD theses and follow-up papers.
- Pieces went to industry: runtime prediction, scheduling and scaling in Redshift (see [instance-optimized systems](/ideas/ml-for-db/instance-optimized-systems.md)).

# What didn't

- The prototype implemented a bounded subset of the original agenda. An integrated research system is evidence of engineering progress, not proof of a mature general-purpose database or broad production adoption.[^sage-prototype]
- Kraska said instance optimization "is extremely hard to test in academia", which is part of why the work moved to a cloud vendor.[^amzn-lsg]

# Related

- Ideas: [Instance-optimized systems](/ideas/ml-for-db/instance-optimized-systems.md), [Learned indexes](/ideas/ml-for-db/learned-indexes.md)
- Papers: [SageDB (CIDR 2019)](/papers/2019-sagedb.md), [2022 integrated prototype](/papers/2022-sagedb-instance-optimized-analytics.md)
- Systems: [Redshift](/systems/redshift.md), [Bao](/systems/bao.md)

[^sagedb]: CIDR 2019.
[^acolyer]: Adrian Colyer's summary.
[^amzn-lsg]: Amazon Science.
[^csail]: MIT CSAIL profile.

[^sage-prototype]: [Ding et al.: SageDB prototype, PVLDB 15(13), 2022](https://www.vldb.org/pvldb/vol15/p4062-ding.pdf).
