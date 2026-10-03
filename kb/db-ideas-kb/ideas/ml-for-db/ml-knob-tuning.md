---
type: Idea
title: "ML-based configuration (knob) tuning"
description: "Use Bayesian optimization or reinforcement learning to set a DBMS's hundreds of configuration knobs. Strong papers (OtterTune, CDBTune, many follow-ups) and real gains on badly configured databases, but the leading startup, OtterTune, shut down in 2024. Customers preferred bigger instances, cloud defaults improved, and safe experimentation on production was too hard."
tags: [knob-tuning, bayesian-optimization, reinforcement-learning, autonomous-database, startups]
area: ml-for-db
verdict: niche
hype_peak: 2022
adoption_2026: rare
origins: "Rule-based tuners and DB2/Oracle self-tuning memory (2000s); iTuned (2009); OtterTune (Van Aken et al., SIGMOD 2017)."
key_systems: [systems/ottertune]
related_ideas: [ideas/ml-for-db/self-driving-databases, ideas/ml-for-db/llm-database-tuning-and-diagnosis, ideas/ml-for-db/automatic-indexing-and-plan-correction]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ottertune-2017
    resource: https://db.cs.cmu.edu/papers/2017/p1009-van-aken.pdf
    title: "Van Aken et al.: Automatic Database Management System Tuning Through Large-scale Machine Learning (SIGMOD 2017)"
  - id: inquiry-2021
    resource: https://dl.acm.org/doi/10.14778/3450980.3450992
    title: "Van Aken et al.: An Inquiry into Machine Learning-based Automatic Configuration Tuning Services on Real-World Database Management Systems (PVLDB 14(7), 2021)"
  - id: hpo-eval
    resource: https://dl.acm.org/doi/10.14778/3538598.3538604
    title: "Zhang et al.: Facilitating Database Tuning with Hyper-Parameter Optimization: A Comprehensive Experimental Evaluation (PVLDB 15(9), 2022)"
  - id: tc-seriesa
    resource: https://techcrunch.com/2022/05/10/2309852/
    title: "TechCrunch: OtterTune, which taps AI to optimize databases, raises $12M (2022-05-10)"
  - id: technically-followup
    resource: https://technical.ly/startups/ottertune-series-a-followup/
    title: "Technical.ly: After a $12M raise, OtterTune dedicated the past year to improving its product"
  - id: pg-contest
    resource: https://www.postgresql.org/message-id/165851243845.271454.16321282173046377969%40wrigleys.postgresql.org
    title: "PostgreSQL announce list: Human vs. OtterTune AI PostgreSQL tuning contest, $10,000 prize (2022)"
  - id: hn-dead
    resource: https://news.ycombinator.com/item?id=40690380
    title: "Hacker News: OtterTune shuts down, cites failed acquisition by a 'PE Postgres' company"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: firebolt-pavlo
    resource: https://www.firebolt.io/blog/vector-databases-wont-replace-sql---andy-pavlo
    title: "Firebolt: Vector Databases Won't Replace SQL – Andy Pavlo (interview)"
  - id: dbtune
    resource: https://www.dbtune.com/blog/ottertune
    title: "DBtune: OtterTune is closed but don't let your database optimization slide"
  - id: protox
    resource: https://github.com/cmu-db/dbgym
    title: "cmu-db/dbgym (includes Proto-X, VLDB 2024)"
  - id: llm-knob-eval
    resource: https://arxiv.org/abs/2408.02213
    title: "Li et al.: Is Large Language Model Good at Database Knob Tuning? A Comprehensive Experimental Evaluation (arXiv 2024)"
---

# Summary

**Verdict: niche.** The research worked. Bayesian-optimization and RL tuners reliably beat default configurations of PostgreSQL, MySQL and Oracle, sometimes by large factors, and a Société Générale study showed gains on real enterprise Oracle workloads too.[^ottertune-2017][^inquiry-2021] The business did not. OtterTune, the best-known company in the space, raised $14.5M in total, pivoted from pure knob tuning to broader "health checks", and shut down in June 2024 after an acquisition by a "PE Postgres company" fell through.[^tc-seriesa][^hn-dead][^pavlo-2024] In 2026, knob tuning is mostly done by better cloud defaults, simple rules of thumb and, increasingly, LLM assistants that read the manual.

# The idea

Modern DBMSs expose hundreds of knobs (buffer sizes, checkpoint intervals, parallelism, cost constants). Their effects interact and depend on hardware and workload. OtterTune (SIGMOD 2017) mapped a new workload to previously seen ones using metrics, then used Gaussian-process Bayesian optimization to recommend knob values. Tencent's CDBTune (SIGMOD 2019) and many successors used deep RL instead. The promise: a DBA-quality configuration for every database, continuously, as a service.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2018–2020 | RL and BO tuners proliferate (CDBTune, QTune, ResTune, UDO); OtterTune demo at VLDB 2018 | + |
| 2020 | OtterTune company launches as a cloud service for Amazon RDS/Aurora MySQL and PostgreSQL | + |
| 2021 | Société Générale study: ML tuners improve real Oracle workloads, but deployment issues dominate | + / − |
| 2022 | Benchmark study finds simpler HPO methods (e.g., SMAC) competitive with complex RL tuners | − |
| May 2022 | OtterTune raises a $12M Series A (Intel Capital, Race Capital; Accel) | + |
| Jul 2022 | OtterTune runs a public "Human vs. AI" PostgreSQL tuning contest with a $10,000 prize[^pg-contest] | + |
| 2023 | OtterTune broadens to database "health checks" beyond knobs[^technically-followup] | − |
| Jun 2024 | OtterTune shuts down; all staff let go with a month's notice. Competitors such as DBtune stay in business[^dbtune] | − |
| 2024–2026 | LLM-based tuners (GPTuner, λ-Tune) match BO tuners with far fewer trials[^llm-knob-eval] | ± |

# What succeeded

- **The algorithms.** Across many papers, ML tuners found configurations several times faster than defaults on OLTP benchmarks. The 2021 field study confirmed meaningful improvements on a bank's production Oracle workloads.[^inquiry-2021]
- **Knowledge transfer.** Reusing data from previous tuning sessions to warm-start new ones became standard in later tuners, including CMU's Proto-X.[^protox]
- **Evaluation discipline.** Comparative studies showed which parts mattered (knob selection, the optimizer) and that simpler HPO methods were often as good as deep RL.[^hpo-eval]

# What failed

- **The standalone business.** Pavlo said OtterTune "got screwed over" when the acquisition collapsed and the company had no fallback.[^hn-dead] His 2024 review: "Dana, Bohan, and I worked on this research project and startup for almost a decade. And now it is dead."[^pavlo-2024] Revenue was reportedly small (about $2.2M ARR, unconfirmed).
- **Production practicality.** Pavlo listed the obstacles that academic work skipped: customers could not afford separate clone instances for safe experiments, workload capture and replay tools for open-source DBMSs were poor, and **most users preferred upsizing the instance over optimizing it**. OtterTune had to make its models "more safe and a bit more conservative".[^firebolt-pavlo]

# Why

1. **Hardware got cheaper than tuning.** On a cloud bill, moving up one instance size is a one-click, low-risk fix. Tuning gains of 20–50% compete with that, not with an expert DBA's salary.
2. **Cloud defaults closed the gap.** Managed services ship sensible memory and I/O settings sized to the instance. Most of the gain in the papers came from very poor defaults (e.g., stock PostgreSQL), which managed users rarely run.
3. **Trial-and-error needs a safe sandbox.** BO and RL learn by trying configurations. On production that is risky, and replaying production on a clone is expensive and was poorly tooled.
4. **No control plane.** A third party tuning RDS through APIs cannot see or roll back as much as AWS itself can. The cloud vendors could build this into the platform whenever they chose.
5. **The market for "tuning" is small.** Teams pay for capabilities, not for a few tens of percent of efficiency, unless their bills are huge. Those teams usually have DBAs.

# Lessons

- An optimization product competes with "buy more hardware". Price the gain against an instance upgrade, not against a DBA.
- Research tuners need the boring parts (safe experiments, workload replay, rollback) before customers will turn them on.
- A tuning company that depends on one acquirer or one platform has little room to survive a failed deal.

# Related

- [Self-driving databases](/ideas/ml-for-db/self-driving-databases.md), [LLM-based tuning and diagnosis](/ideas/ml-for-db/llm-database-tuning-and-diagnosis.md), [Automatic indexing and plan correction](/ideas/ml-for-db/automatic-indexing-and-plan-correction.md)
- Systems: [OtterTune](/systems/ottertune.md), [PostgreSQL](/systems/postgresql.md), [MySQL](/systems/mysql.md)
- Events: [OtterTune Series A](/events/2022-05-ottertune-series-a.md), [OtterTune shuts down](/events/2024-06-ottertune-shuts-down.md)
- Paper: [GPTuner](/papers/2024-gptuner.md)

[^ottertune-2017]: SIGMOD 2017.
[^inquiry-2021]: PVLDB 14(7), 2021, with Société Générale co-authors.
[^hpo-eval]: PVLDB 15(9), 2022.
[^tc-seriesa]: TechCrunch, 2022-05-10. Total raised $14.5M per Technical.ly.
[^technically-followup]: Technical.ly.
[^pg-contest]: PostgreSQL announce list, July 2022.
[^hn-dead]: HN thread, June 2024.
[^pavlo-2024]: Pavlo, "Databases in 2024".
[^firebolt-pavlo]: Firebolt interview.
[^dbtune]: DBtune blog.
[^protox]: Database Gym README.
[^llm-knob-eval]: arXiv 2408.02213.
