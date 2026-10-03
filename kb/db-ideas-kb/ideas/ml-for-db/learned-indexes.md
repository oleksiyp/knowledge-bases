---
type: Idea
title: "Learned index structures"
description: "Replace B-trees and hash tables with models that learn the key distribution (the CDF). A big research hit after 2018, with hundreds of follow-up papers, but almost no production adoption by 2026: the gains were mostly for read-only, in-memory, sorted data, and tuned classical structures closed most of the gap."
tags: [learned-systems, indexing, machine-learning, research]
area: ml-for-db
verdict: niche
hype_peak: 2019
adoption_2026: rare
origins: "Kraska et al., 'The Case for Learned Index Structures' (arXiv Dec 2017, SIGMOD 2018), Google + MIT."
key_systems: [systems/sagedb]
related_ideas: [ideas/ml-for-db/instance-optimized-systems, ideas/ml-for-db/learned-query-optimizers]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: kraska-2018
    resource: https://arxiv.org/abs/1712.01208
    title: "Kraska et al.: The Case for Learned Index Structures (SIGMOD 2018)"
  - id: neumann-btree
    resource: http://databasearchitects.blogspot.com/2017/12/the-case-for-b-tree-index-structures.html
    title: "Neumann & Boncz: The Case for B-Tree Index Structures (Database Architects blog, Dec 2017)"
    author: person:thomas-neumann
  - id: dawn-cuckoo
    resource: https://dawnd9.sites.stanford.edu/news/dont-throw-out-your-algorithms-book-just-yet-classical-data-structures-can-outperform-learned
    title: "Bailis, Tai, Thaker, Zaharia: Don't Throw Out Your Algorithms Book Just Yet (Stanford DAWN, Jan 2018)"
  - id: sosd
    resource: https://vldb.org/pvldb/vol14/p1-marcus.pdf
    title: "Marcus et al.: Benchmarking Learned Indexes (PVLDB 14(1), 2021)"
  - id: wongkham
    resource: https://vldb.org/pvldb/vol15/p3004-wongkham.pdf
    title: "Wongkham et al.: Are Updatable Learned Indexes Ready? (PVLDB 15(11), 2022)"
  - id: bigtable-li
    resource: https://arxiv.org/abs/2012.12501
    title: "Abu-Libdeh et al.: Learned Indexes for a Google-scale Disk-based Database (NeurIPS ML for Systems workshop 2020)"
  - id: sagedb
    resource: https://research.google/pubs/pub47669/
    title: "Kraska et al.: SageDB: A Learned Database System (CIDR 2019)"
  - id: hist-tree
    resource: https://cs.brown.edu/people/acrotty/pubs/cidr2021_paper20.pdf
    title: "Crotty: Hist-Tree: Those Who Ignore It Are Doomed to Learn (CIDR 2021)"
  - id: lsm-eval
    resource: https://arxiv.org/pdf/2506.08671
    title: "Evaluating Learned Indexes in LSM-tree Systems: Benchmarks, Insights and Design Choices (arXiv 2025)"
---

# Summary

**Verdict: niche.** Learned indexes were the most visible ML-for-databases idea of the period and changed the research agenda. They did not change production systems. By 2026 no major commercial or open-source DBMS ships a learned index as its default access method. The early claims held only in a narrow setting: read-only, in-memory, densely packed sorted keys.[^sosd] Once updates, concurrency, disk pages and changing data distributions came in, the advantage over well-engineered B-trees, radix structures and hash tables shrank or disappeared.[^wongkham] The idea survives as a design technique, "model the data distribution and exploit it", rather than as a component you install.

# The idea

An index maps a key to a position. For a sorted array, that mapping is the cumulative distribution function (CDF) of the keys. Kraska et al. argued that a small hierarchy of models (the "recursive model index") could approximate the CDF better and more compactly than a B-tree's inner nodes. They reported up to 70% faster lookups than cache-optimized B-trees and an order of magnitude less memory on several real datasets.[^kraska-2018] The authors were from Google and MIT, Jeff Dean was a co-author, and the paper landed during the deep-learning peak, so it got a lot of attention. SageDB (CIDR 2019) extended the pitch to a whole database built from learned components.[^sagedb]

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| Dec 2017 – Jan 2018 | Preprint published. Neumann & Boncz and the Stanford DAWN group publish rebuttals within weeks | − |
| 2018 | SIGMOD 2018 publication; a wave of follow-ups (FITing-tree, ALEX, PGM-index, RadixSpline) | + |
| 2019 | SageDB vision paper (CIDR) | + |
| 2020 | Google describes learned indexes inside Bigtable at a NeurIPS workshop | + |
| 2021 | SOSD benchmark (PVLDB): learned indexes win on read-only in-memory sorted arrays | + / − |
| 2021 | "Hist-Tree" (CIDR) shows a simple non-learned histogram tree matching learned indexes | − |
| 2022 | "Are Updatable Learned Indexes Ready?" (PVLDB): robustness and concurrency problems under realistic workloads | − |
| 2023–2026 | Research turns to on-disk, LSM and multi-dimensional variants; still no default-on production deployment | − |

# What succeeded

- **Research impact.** The paper started a subfield, with workshops, benchmarks (SOSD) and dozens of index designs. Many later systems papers frame their work as "instance-optimized" because of it.
- **A real insight.** Data distributions are often regular, and exploiting that regularity can shrink the inner levels of an index a lot. The PGM-index and RadixSpline turned this into simple, provable structures (piecewise-linear models with error bounds) instead of neural networks.
- **One credible industrial experiment.** Google engineers integrated learned indexes into Bigtable's disk-based SSTable lookup and reported better end-to-end read latency and throughput. Most of the gain came from second-order effects: smaller indexes, fewer index-block reads and simpler prefetching.[^bigtable-li] This was a workshop paper. Whether it became a permanent production default was never publicly confirmed (unconfirmed).

# What failed

- **Replacing the B-tree.** No mainstream engine (PostgreSQL, MySQL/InnoDB, SQL Server, Oracle, RocksDB, DuckDB) adopted learned indexes as a standard index type.
- **Updates and robustness.** Wongkham et al. ran updatable learned indexes on ten real datasets with concurrency and distribution shift and found their advantages were fragile. Performance and memory use varied widely, and tail behaviour was hard to predict.[^wongkham]
- **Neural networks specifically.** Even the original authors' follow-ups moved to simple linear/spline models. "Deep learning replaces data structures" was not borne out.

# Why

1. **The baseline was stronger than claimed.** Within weeks, Neumann & Boncz showed that a well-tuned B-tree variant closed much of the gap.[^neumann-btree] The DAWN group showed that bucketized cuckoo hashing used 5–20x less space overhead than learned hash indexes and ran nearly 2x faster.[^dawn-cuckoo] Later, Hist-Tree matched learned indexes with no learning at all.[^hist-tree]
2. **The index lookup is rarely the bottleneck.** In a disk- or network-bound OLTP system, the inner nodes of a B-tree are already cached. A faster in-memory search barely moves end-to-end latency. Bigtable gained mainly by shrinking index size, a storage-layout effect.[^bigtable-li]
3. **Engineering cost and risk.** A B-tree has predictable worst cases, decades of concurrency-control and recovery work behind it, and integration with locking and WAL. A model-based index needs retraining when data drifts, and its worst case depends on the data. Engine maintainers would not swap a known structure for a probabilistic one to gain tens of percent on lookups.
4. **LSM and columnar engines already cover much of the space.** Sorted runs with fence pointers and Bloom filters, or zone maps in columnar stores, are cheap "models" already. Studies of learned indexes inside LSM trees found gains only in specific configurations.[^lsm-eval]

# Lessons

- A benchmark win on a microbenchmark (read-only, in-memory, dense integer keys) is not a systems win. Measure end to end, with updates and concurrency.
- When a learned component wins, check whether a simple model or a better classical structure gets the same result. Here it usually did.
- The lasting value was the framing: specialize data structures to the data. That framing outlived the neural networks.

# Related

- [Instance-optimized systems (SageDB and successors)](/ideas/ml-for-db/instance-optimized-systems.md)
- [Learned query optimizers](/ideas/ml-for-db/learned-query-optimizers.md)
- Papers: [The Case for Learned Index Structures](/papers/2018-learned-index-structures.md), [Benchmarking Learned Indexes](/papers/2021-benchmarking-learned-indexes.md), [SageDB](/papers/2019-sagedb.md)
- Systems: [SageDB](/systems/sagedb.md), [RocksDB](/systems/rocksdb.md)

[^kraska-2018]: Kraska et al., arXiv 1712.01208 abstract.
[^neumann-btree]: Database Architects blog, December 2017.
[^dawn-cuckoo]: Stanford DAWN blog, January 2018.
[^sosd]: Marcus et al., PVLDB 2021.
[^wongkham]: Wongkham et al., PVLDB 2022.
[^bigtable-li]: Abu-Libdeh et al., 2020.
[^sagedb]: CIDR 2019.
[^hist-tree]: Crotty, CIDR 2021.
[^lsm-eval]: arXiv 2506.08671.
