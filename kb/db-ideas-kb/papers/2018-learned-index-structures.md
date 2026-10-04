---
type: Paper
title: The Case for Learned Index Structures
description: The landmark proposal to model key distributions launched learned-index research; later evaluation separated
  real lookup gains from the broader claim of replacing mature engine indexes.
year: 2018
venue: SIGMOD 2018
authors:
- Tim Kraska
- Alex Beutel
- Ed H. Chi
- Jeffrey Dean
- Neoklis Polyzotis
impact: high
resource: https://arxiv.org/abs/1712.01208
ideas:
- ideas/ml-for-db/learned-indexes
- ideas/ml-for-db/instance-optimized-systems
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: kraska-2018
  resource: https://arxiv.org/abs/1712.01208
  title: 'Kraska et al.: The Case for Learned Index Structures (SIGMOD 2018)'
- id: sosd
  resource: https://vldb.org/pvldb/vol14/p1-marcus.pdf
  title: 'Marcus et al.: Benchmarking Learned Indexes (PVLDB 14(1), 2021)'
- id: wongkham
  resource: https://vldb.org/pvldb/vol15/p3004-wongkham.pdf
  title: 'Wongkham et al.: Are Updatable Learned Indexes Ready? (PVLDB 15(11), 2022)'
- id: bigtable-li
  resource: https://arxiv.org/abs/2012.12501
  title: 'Abu-Libdeh et al.: Learned Indexes for a Google-scale Disk-based Database (NeurIPS ML for Systems workshop 2020)'
---

# Claim
An index can be interpreted as a model that maps a lookup key to a record position or predicts membership. The paper proposes learning these mappings from data rather than relying only on a general-purpose structure. Its initial experiments reported up to 70% faster lookup than cache-optimized B-trees and roughly an order of magnitude less index memory on selected datasets.[^kraska-2018] Those are experimental results, not guarantees for every engine or workload.

# What happened next
The SOSD work confirmed that well-tuned learned structures could outperform traditional baselines for read-only, in-memory search over dense arrays.[^sosd] Subsequent evaluation made updates, concurrency and distribution changes explicit parts of the comparison.[^wongkham] Google researchers also reported integrating learned indexes into Bigtable's disk-based lookup path, showing that the idea was not confined to a standalone array benchmark.[^bigtable-li]

Our assessment is high research impact with narrower evidence of production adoption. A lookup improvement must survive storage layout, cache behavior, maintenance and synchronization costs before it improves a database. Conversely, failure to become a default index type does not erase the useful principle of exploiting a data distribution. The paper succeeded at opening that design space; the universal replacement claim remains much stronger than the evidence presented here.

# Related
- [Learned indexes](/ideas/ml-for-db/learned-indexes.md), [SageDB](/papers/2019-sagedb.md)
- [Benchmarking Learned Indexes](/papers/2021-benchmarking-learned-indexes.md)

[^kraska-2018]: [Kraska et al.: The Case for Learned Index Structures (SIGMOD 2018)](https://arxiv.org/abs/1712.01208).
[^sosd]: [Marcus et al.: Benchmarking Learned Indexes (PVLDB 14(1), 2021)](https://vldb.org/pvldb/vol14/p1-marcus.pdf).
[^wongkham]: [Wongkham et al.: Are Updatable Learned Indexes Ready? (PVLDB 15(11), 2022)](https://vldb.org/pvldb/vol15/p3004-wongkham.pdf).
[^bigtable-li]: [Abu-Libdeh et al.: Learned Indexes for a Google-scale Disk-based Database (NeurIPS ML for Systems workshop 2020)](https://arxiv.org/abs/2012.12501).
