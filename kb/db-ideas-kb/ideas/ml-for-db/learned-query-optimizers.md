---
type: Idea
title: "Learned query optimizers and learned cardinality estimation"
description: "Use deep learning or reinforcement learning to estimate cardinalities, cost plans or choose join orders. Replacing the optimizer outright failed. The surviving form is narrow: 'steering' a classical optimizer with hints learned from repeated workloads, plus execution feedback loops. Both run in production at Microsoft, Amazon and Meta."
tags: [learned-systems, query-optimization, cardinality-estimation, reinforcement-learning]
area: ml-for-db
verdict: niche
hype_peak: 2021
adoption_2026: niche
origins: "IBM DB2 LEO learning optimizer (2001) and Leis et al. 'How Good Are Query Optimizers, Really?' (VLDB 2015), which showed cardinality errors dominate plan quality."
key_systems: [systems/bao, systems/qo-advisor, systems/azure-sql-automatic-tuning]
related_ideas: [ideas/ml-for-db/instance-optimized-systems, ideas/ml-for-db/learned-indexes, ideas/ml-for-db/automatic-indexing-and-plan-correction]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: neo
    resource: https://www.vldb.org/pvldb/vol12/p1705-marcus.pdf
    title: "Marcus et al.: Neo: A Learned Query Optimizer (PVLDB 12(11), 2019)"
  - id: bao
    resource: https://dblp.org/rec/conf/sigmod/MarcusNMTAK21.html
    title: "Marcus et al.: Bao: Making Learned Query Optimization Practical (SIGMOD 2021, Best Paper)"
  - id: bao-award
    resource: https://www.intel.com/content/www/us/en/research/blogs/sigmod-conference-2021.html
    title: "Intel Labs: award-winning research at SIGMOD 2021"
  - id: balsa
    resource: https://arxiv.org/abs/2201.01441
    title: "Yang et al.: Balsa: Learning a Query Optimizer Without Expert Demonstrations (SIGMOD 2022)"
  - id: ready-ce
    resource: https://arxiv.org/abs/2012.06743
    title: "Wang et al.: Are We Ready For Learned Cardinality Estimation? (PVLDB 14(9), 2021)"
  - id: steering
    resource: https://par.nsf.gov/biblio/10347330-steering-query-optimizers-practical-take-big-data-workloads
    title: "Negi et al.: Steering Query Optimizers: A Practical Take on Big Data Workloads (SIGMOD 2021)"
  - id: qo-advisor
    resource: https://arxiv.org/abs/2210.13625
    title: "Zhang et al.: Deploying a Steered Query Optimizer in Production at Microsoft (SIGMOD 2022)"
  - id: autosteer
    resource: https://vldb.org/pvldb/vol16/p3515-anneser.pdf
    title: "Anneser et al.: AutoSteer: Learned Query Optimization for Any SQL Database (PVLDB 16(12), 2023)"
  - id: kepler
    resource: https://arxiv.org/abs/2306.06798
    title: "Doshi et al.: Kepler: Robust Learning for Faster Parametric Query Optimization (SIGMOD 2023)"
  - id: presto-hbo
    resource: https://www.vldb.org/pvldb/vol17/p4077-shankhdhar.pdf
    title: "Shankhdhar et al. (Meta): Presto's History-Based Query Optimizer (PVLDB 17, 2024)"
  - id: sqlserver-iqp
    resource: https://www.microsoft.com/en-us/sql-server/blog/2022/09/15/intelligent-query-processing-feature-family-additions/
    title: "Microsoft SQL Server Blog: Intelligent Query Processing feature family additions (Sept 2022)"
  - id: stage
    resource: https://arxiv.org/abs/2403.02286
    title: "Wu et al.: Stage: Query Execution Time Prediction in Amazon Redshift (SIGMOD 2024 Companion)"
  - id: tian-wild
    resource: https://arxiv.org/abs/2510.20082
    title: "Tian: Query Optimization in the Wild: Realities and Trends (SIGMOD Record 2026)"
---

# Summary

**Verdict: niche.** From 2018 to 2022 this was the busiest corner of ML-for-databases. Neo (2019), Bao (SIGMOD 2021 best paper), Balsa (2022) and dozens of learned cardinality estimators showed large speedups on the Join Order Benchmark.[^neo][^bao][^balsa] None of them replaced the optimizer in a production DBMS. Two narrower, conservative forms did ship. The first is **steering**: keep the classical Cascades/System-R optimizer and learn which hints to give it for recurring queries. Microsoft's QO-Advisor is on by default for SCOPE.[^qo-advisor] The second is **feedback loops** that correct estimates from observed runtimes: SQL Server 2022 cardinality/DOP/memory-grant feedback and Meta's history-based optimizer for Presto.[^sqlserver-iqp][^presto-hbo] Learned models also predict query runtimes for scheduling in Amazon Redshift.[^stage] In 2026 the core optimizers of PostgreSQL, Oracle, SQL Server, Snowflake and DuckDB are still hand-built.[^tian-wild]

# The idea

Cardinality misestimates are the main cause of bad plans, and classical estimators assume independence and uniformity. ML could learn the real data correlations (data-driven models such as Naru/DeepDB) or learn from executed queries (query-driven models such as MSCN). Going further, a reinforcement-learning agent could learn the whole plan search from feedback (Neo, Balsa). The promise was an optimizer that improves with experience and adapts to each database.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2019 | Neo (PVLDB): an end-to-end deep RL optimizer bootstrapped from PostgreSQL that matches or beats commercial optimizers on some workloads | + |
| 2021 | Bao wins SIGMOD best paper[^bao-award] by steering PostgreSQL with hint sets instead of replacing it | + |
| 2021 | "Are We Ready For Learned Cardinality Estimation?" finds learned estimators more accurate but slow to train and fragile under data updates | − |
| 2021–2022 | Microsoft steering papers. QO-Advisor enabled by default in SCOPE production | + |
| 2022 | Balsa learns without an expert optimizer and reports 2.1–2.8x faster plans after hours of training | + (lab) |
| 2022 | SQL Server 2022 ships CE feedback, DOP feedback and percentile memory-grant feedback, all non-neural | + |
| 2023 | Google's Kepler (parametric QO)[^kepler] and AutoSteer (Bao generalized to Presto, Spark, MySQL, DuckDB) | + |
| 2024 | Redshift's Stage runtime predictor and Meta's Presto history-based optimizer published | + |
| 2025–2026 | Interest moves to LLM-based query rewriting and hinting. Core optimizers remain classical | − |

# What succeeded

- **Steering beats replacing.** Bao's insight was to keep the existing optimizer and pick among a few hint sets (for example, disable nested-loop joins) per query, using Thompson sampling. This limited the downside and let it learn from few examples.[^bao] Microsoft took this further: QO-Advisor moves the learning into an offline pipeline, budgets the steering actions, validates them against regressions, and is enabled by default for production SCOPE workloads.[^steering][^qo-advisor] AutoSteer showed the approach generalizes across engines (up to 40% gains on PrestoDB).[^autosteer]
- **Feedback from execution.** The most widely deployed "learning optimizer" features observe actual row counts, parallelism or memory use and adjust the next execution, then revert if things get worse. SQL Server 2022 does this through Query Store.[^sqlserver-iqp] Meta's Presto reuses statistics from previous runs of the same query shape.[^presto-hbo]
- **Runtime prediction.** Redshift's Stage predictor combines a cache, a small local model and a global model. It improved average query latency by about 20% through better scheduling compared with the previous predictor.[^stage]

# What failed

- **End-to-end learned optimizers.** Neo and Balsa need hours of training per workload and a stream of executed queries. They also have unpredictable failure modes. No vendor shipped one.
- **Learned cardinality estimators as drop-in replacements.** Wang et al. found they were more accurate in static settings but expensive to train and infer, and fragile when data changes. Their errors were also not monotonic in ways an optimizer could reason about.[^ready-ce]
- **Generality.** Most results were on JOB, TPC-H and Stack running on PostgreSQL, whose optimizer is comparatively easy to beat.

# Why

1. **Regressions cost more than speedups earn.** A DBA or cloud operator remembers the one query that went from 1 s to 10 minutes, not the average 20% gain. Every shipped system (QO-Advisor, SQL Server feedback, Azure automatic plan correction) is built around detecting and rolling back regressions. Research prototypes optimized the mean.
2. **Repetition makes the cheap approach work.** In cloud warehouses most queries recur. That favours caching what worked last time (history-based optimization, hint memorization) over generalizing models.
3. **Training data and drift.** Learned models need executed queries, and they go stale when data or schema change. A classical estimator never needs retraining.
4. **Engineering integration.** An optimizer is entangled with the cost model, rewrite rules, statistics and plan cache. Steering works because it does not touch those internals, so it needs no change to the engine.
5. **The people moved to industry.** Key authors moved into cloud vendors (Kraska to AWS in 2022). The ideas went into fleet-wide services there rather than open-source engines.

# Lessons

- In infrastructure, "learned" components ship when they are wrapped in guardrails: bounded action spaces, offline validation and automatic rollback.
- Feedback and memoization of what happened last time capture much of the value of ML with none of the training cost.
- Benchmarks against PostgreSQL's optimizer overstate gains relative to commercial engines.

# Related

- [Instance-optimized systems](/ideas/ml-for-db/instance-optimized-systems.md)
- [Automatic indexing and plan correction](/ideas/ml-for-db/automatic-indexing-and-plan-correction.md)
- [LLM-based tuning and diagnosis](/ideas/ml-for-db/llm-database-tuning-and-diagnosis.md)
- Systems: [Bao](/systems/bao.md), [QO-Advisor](/systems/qo-advisor.md), [Redshift](/systems/redshift.md), [PostgreSQL](/systems/postgresql.md)
- Papers: [Neo](/papers/2019-neo-learned-query-optimizer.md), [Bao](/papers/2021-bao.md), [Are We Ready For Learned Cardinality Estimation?](/papers/2021-are-we-ready-learned-cardinality-estimation.md)
- Event: [Bao wins SIGMOD 2021 best paper](/events/2021-06-bao-sigmod-best-paper.md)

[^neo]: PVLDB 12(11):1705–1718.
[^bao]: SIGMOD 2021.
[^balsa]: SIGMOD 2022.
[^ready-ce]: PVLDB 14(9), 2021.
[^steering]: SIGMOD 2021.
[^qo-advisor]: arXiv 2210.13625 abstract: "currently enabled by default in production SCOPE workloads".
[^autosteer]: PVLDB 16(12), 2023.
[^kepler]: SIGMOD 2023; 2.41x speedup on Stack.
[^presto-hbo]: PVLDB 17, 2024.
[^sqlserver-iqp]: Microsoft SQL Server Blog, 2022-09-15.
[^stage]: SIGMOD Companion 2024.
[^tian-wild]: Tian, 2025/2026.
[^bao-award]: Intel Labs blog.
