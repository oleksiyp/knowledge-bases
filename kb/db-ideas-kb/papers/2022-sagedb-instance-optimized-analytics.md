---
type: Paper
title: 'SageDB: An Instance-Optimized Data Analytics System'
description: A working SageDB prototype combines optimized data layouts with partial materialized views, correcting the impression
  that the 2019 agenda never progressed beyond a vision paper.
year: 2022
venue: PVLDB 15(13), 4062–4078
authors:
- Jialin Ding
- Ryan Marcus
- Andreas Kipf
- Vikram Nathan
- Aniruddha Nrusimha
- Kapil Vaidya
- Alexander van Renen
- Tim Kraska
impact: medium
resource: https://www.vldb.org/pvldb/vol15/p4062-ding.pdf
ideas:
- ideas/ml-for-db/instance-optimized-systems
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: sage-prototype
  resource: https://www.vldb.org/pvldb/vol15/p4062-ding.pdf
  title: 'Ding et al.: SageDB: An Instance-Optimized Data Analytics System, PVLDB 15(13), 2022'
- id: sage-extended
  resource: https://jialinding.github.io/sagedb.pdf
  title: 'Ding et al.: SageDB extended prototype report'
---

# Claim
This progress report presents an integrated SageDB analytics prototype. Rather than replace every component simultaneously, it combines optimized data layouts and replication with partial materialized views. Users request optimization with a space budget; the system jointly configures these components for the observed workload.[^sage-prototype][^sage-extended]

# What happened next
The documented implementation establishes that the research progressed beyond isolated learned components. It does not establish broad deployment or completion of every ambition in the original vision. The report explicitly frames the work as ongoing and discusses the risk that separately optimized components can interfere.[^sage-extended]

Our assessment is that this is the necessary counterweight to describing SageDB as a failed idea that was never built. A prototype is a real engineering outcome, while a broadly adopted product is another outcome requiring separate evidence. The system also illustrates a practical way to scope instance optimization: give it a specific workload, a resource budget and a bounded set of choices. Its existence strengthens the case for coordinated physical design, while leaving operational automation over continuously changing production workloads as a further challenge.

# Related
- [2019 SageDB vision](/papers/2019-sagedb.md), [SageDB system](/systems/sagedb.md)
- [Instance-optimized systems](/ideas/ml-for-db/instance-optimized-systems.md)

[^sage-prototype]: [Ding et al.: SageDB: An Instance-Optimized Data Analytics System, PVLDB 15(13), 2022](https://www.vldb.org/pvldb/vol15/p4062-ding.pdf).
[^sage-extended]: [Ding et al.: SageDB extended prototype report](https://jialinding.github.io/sagedb.pdf).
