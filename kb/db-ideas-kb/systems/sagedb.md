---
type: System
title: SageDB
description: "Vision for a 'learned database system' (Kraska et al., CIDR 2019, MIT and Google): every component, from indexes and sorting to joins and the optimizer, synthesized from models of the data and workload. Never released as a system; its ideas fed MIT DSAIL research and later AWS Redshift's Learned Systems Group."
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

SageDB was presented at CIDR 2019 by Tim Kraska, Mohammad Alizadeh, Alex Beutel, Ed Chi, Ani Kristo, Guillaume Leclerc, Samuel Madden, Hongzi Mao and Vikram Nathan.[^sagedb] It extended the learned-index argument to a whole DBMS. By modelling data distribution, workload and hardware, the system would use code synthesis to generate specialized index structures, sorting and join algorithms, and even the query optimizer.[^sagedb][^acolyer] It was a position paper with micro-experiments. No SageDB system was ever released.

# Timeline

| Date | Event |
|---|---|
| Jan 2019 | CIDR paper |
| 2019–2022 | MIT DSAIL publishes components: learned multi-dimensional indexes, Neo, Bao, learned sorting |
| Nov 2022 | Kraska (on leave from MIT[^csail]) leads AWS's new Learned Systems Group to bring "instance optimization" to Redshift[^amzn-lsg] |

# What worked

- It named and popularized "instance-optimized" systems. It was a productive research agenda with many PhD theses and follow-up papers.
- Pieces went to industry: runtime prediction, scheduling and scaling in Redshift (see [instance-optimized systems](/ideas/ml-for-db/instance-optimized-systems.md)).

# What didn't

- The integrated learned DBMS was never built. Learned replacements for core algorithms did not beat tuned classical code enough to justify the engineering and risk.
- Kraska said instance optimization "is extremely hard to test in academia", which is part of why the work moved to a cloud vendor.[^amzn-lsg]

# Related

- Ideas: [Instance-optimized systems](/ideas/ml-for-db/instance-optimized-systems.md), [Learned indexes](/ideas/ml-for-db/learned-indexes.md)
- Paper: [SageDB (CIDR 2019)](/papers/2019-sagedb.md)
- Systems: [Redshift](/systems/redshift.md), [Bao](/systems/bao.md)

[^sagedb]: CIDR 2019.
[^acolyer]: Adrian Colyer's summary.
[^amzn-lsg]: Amazon Science.
[^csail]: MIT CSAIL profile.
