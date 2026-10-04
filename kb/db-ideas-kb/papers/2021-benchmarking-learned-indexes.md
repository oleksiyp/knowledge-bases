---
type: Paper
title: Benchmarking Learned Indexes
description: SOSD compares tuned learned and traditional indexes and confirms a bounded performance win for read-only in-memory
  search over dense arrays.
year: 2021
venue: PVLDB 14(1), 1–13
authors:
- Ryan Marcus
- Andreas Kipf
- Alexander van Renen
- Mihail Stoian
- Sanchit Misra
- Alfons Kemper
- Thomas Neumann
- Tim Kraska
impact: high
resource: https://vldb.org/pvldb/vol14/p1-marcus.pdf
ideas:
- ideas/ml-for-db/learned-indexes
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: sosd
  resource: https://vldb.org/pvldb/vol14/p1-marcus.pdf
  title: 'Marcus et al.: Benchmarking Learned Indexes (PVLDB 14(1), 2021)'
- id: wongkham
  resource: https://vldb.org/pvldb/vol15/p3004-wongkham.pdf
  title: 'Wongkham et al.: Are Updatable Learned Indexes Ready? (PVLDB 15(11), 2022)'
---

# Claim
This benchmark compares well-tuned implementations of learned indexes with strong traditional baselines. On four real-world datasets, it finds that learned indexes can win for read-only, in-memory workloads over densely packed arrays. It also examines caching, pipelining, dataset size and key width.[^sosd] The paper's own reference format uses 2021, which is the year used in this page.

# What happened next
The benchmark helped make the learned-index debate more reproducible by testing implementations under a shared setup. Later work explicitly evaluated updatable learned indexes under changing distributions and concurrency, extending the problem beyond the original search setting.[^wongkham]

Our assessment is that the benchmark supports a real but bounded success. It does not show that a database can substitute the winning search routine for its entire index subsystem and retain concurrency control, recovery and update performance. Nor should a narrow workload be dismissed merely because it is narrow: sorted immutable runs are a legitimate systems building block. The right conclusion is to state the operation being optimized, the representation being searched and the costs excluded from the measurement. That makes the result useful without turning it into a universal comparison between learning and classical algorithms.

# Related
- [Learned indexes](/ideas/ml-for-db/learned-indexes.md)
- [Original learned-index paper](/papers/2018-learned-index-structures.md)

[^sosd]: [Marcus et al.: Benchmarking Learned Indexes (PVLDB 14(1), 2021)](https://vldb.org/pvldb/vol14/p1-marcus.pdf).
[^wongkham]: [Wongkham et al.: Are Updatable Learned Indexes Ready? (PVLDB 15(11), 2022)](https://vldb.org/pvldb/vol15/p3004-wongkham.pdf).
