---
type: Idea
title: "Automatic indexing and plan-regression correction in managed databases"
description: "Let the database service create and drop indexes and pin the last good plan when a query regresses, with every action validated and automatically rolled back. A quiet success: Azure SQL has done it across millions of databases since about 2016, Oracle added automatic indexing in 19c, and SQL Server added feedback loops. It works because it relies on classical what-if tuning plus continuous validation rather than ML, and because the cloud vendor owns the control plane."
tags: [auto-indexing, automatic-tuning, cloud, sql-server, azure, oracle, query-store]
area: ml-for-db
verdict: won
hype_peak: 2019
adoption_2026: common
origins: "Microsoft AutoAdmin and Database Tuning Advisor (1997–2004); SQL Server Query Store (2016) and automatic plan correction (SQL Server 2017)."
key_systems: [systems/azure-sql-automatic-tuning, systems/oracle-autonomous-database]
related_ideas: [ideas/ml-for-db/self-driving-databases, ideas/ml-for-db/learned-query-optimizers, ideas/ml-for-db/ml-knob-tuning, ideas/ml-for-db/llm-database-tuning-and-diagnosis]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: azure-autoidx
    resource: https://www.microsoft.com/en-us/research/uploads/prod/2019/02/autoindexing_azuredb.pdf
    title: "Das et al.: Automatically Indexing Millions of Databases in Microsoft Azure SQL Database (SIGMOD 2019)"
  - id: azure-doc
    resource: https://learn.microsoft.com/en-us/azure/azure-sql/database/automatic-tuning-overview?view=azuresql
    title: "Microsoft Learn: Automatic tuning overview – Azure SQL & SQL database in Fabric (updated 2025)"
  - id: plan-correction
    resource: https://azure.microsoft.com/en-us/blog/automatic-tuning-introduces-automatic-plan-correction-and-t-sql-management/
    title: "Azure blog: Automatic tuning introduces automatic plan correction and T-SQL management"
  - id: iqp-2022
    resource: https://www.microsoft.com/en-us/sql-server/blog/2022/09/15/intelligent-query-processing-feature-family-additions/
    title: "Microsoft SQL Server Blog: Intelligent Query Processing feature family additions (2022-09-15)"
  - id: oracle-autoidx
    resource: https://dl.acm.org/doi/abs/10.14778/3750601.3750616
    title: "Automatic Indexing in Oracle (PVLDB 18, 2025)"
  - id: ozar
    resource: https://www.brentozar.com/archive/2019/08/research-paper-week-automatic-indexing-in-azure-sql-db/
    title: "Brent Ozar: Research Paper Week: Automatic Indexing in Azure SQL DB (Aug 2019)"
  - id: devops-guru
    resource: https://techcrunch.com/2021/12/01/aws-launches-a-new-tool-for-diagnosing-and-fixing-database-issues-in-its-cloud/
    title: "TechCrunch: AWS launches a new tool for diagnosing and fixing database issues in its cloud (2021-12-01)"
  - id: ml-index-overview
    resource: https://arxiv.org/pdf/2308.13641
    title: "ML-Powered Index Tuning: An Overview of Recent Progress and Open Challenges (2023)"
  - id: llm-index-sqlserver
    resource: https://arxiv.org/abs/2603.09181
    title: "Wang, Wu, Narasayya, Chaudhuri: Evaluating the Practical Effectiveness of LLM-Driven Index Tuning on Microsoft SQL Server (arXiv 2026)"
---

# Summary

**Verdict: won (quietly).** This is the most successful "self-tuning" idea of the period, and it is barely ML. Azure SQL Database generates index recommendations for **every** database it hosts. As of October 2018, about a quarter of databases had auto-implementation enabled, with roughly 50K indexes created and 20K dropped in an average week. About 11% of automated actions were reverted after validation found regressions.[^azure-autoidx] Automatic plan correction (force the last known good plan) is **on by default** for new Azure SQL servers.[^azure-doc] Oracle shipped automatic indexing in 19c and runs it in Autonomous Database.[^oracle-autoidx] SQL Server 2022 added cardinality, parallelism and memory-grant feedback.[^iqp-2022] What made this work: classical what-if index analysis, a vendor-run control plane, and strict validate-and-revert loops.

# The idea

Index selection is the oldest physical-design problem, and tools like Microsoft's Database Tuning Advisor have existed since the early 2000s. The cloud added two things. The vendor can run the advisor continuously for every customer, and it can **measure** the effect of each change on the real workload and undo it. Plan regression correction applies the same logic to query plans. Query Store records plan history. If a new plan is slower than an earlier one, the system forces the old plan and keeps watching.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2017 | SQL Server 2017 / Azure SQL ship automatic plan correction (FORCE_LAST_GOOD_PLAN)[^plan-correction] | + |
| Oct 2018 | Azure auto-indexing statistics: ~250K create and ~3.4M drop recommendations outstanding; ~50K indexes created per week | + |
| 2019 | SIGMOD 2019 industry paper on auto-indexing millions of Azure databases; Oracle 19c adds automatic indexing | + |
| Dec 2021 | AWS launches DevOps Guru for RDS (ML anomaly detection and diagnosis for Aurora)[^devops-guru] | + |
| 2022 | SQL Server 2022 adds CE feedback, DOP feedback, persisted percentile memory-grant feedback | + |
| 2024–2025 | Azure docs: plan correction on by default; CREATE/DROP INDEX off by default; SQL database in Microsoft Fabric turns CREATE INDEX on automatically | ± |
| 2025 | Oracle publishes its automatic-indexing design (PVLDB 18) | + |
| 2026 | Microsoft study finds LLM index recommendations high-variance and often worse than DTA by optimizer cost | − (for LLMs) |

# What succeeded

- **Scale with safety.** Azure's service implemented and validated millions of indexes. It cut CPU time or logical reads by more than 2x for hundreds of thousands of queries, and halved aggregate CPU for tens of thousands of databases.[^azure-autoidx]
- **Matching most humans.** In Azure's comparison, automated recommenders matched or beat the human administrators' own indexes in 85–90% of databases. The paper is candid that for complex premium-tier workloads with expert users they did **not** beat expert DBAs.[^azure-autoidx]
- **Validation as the core feature.** Every action is checked against real execution data, from 30 minutes to 72 hours depending on query frequency, and reverted on regression. Changes are applied only at low utilization.[^azure-doc] Practitioners such as Brent Ozar called the paper "wonderfully candid" about where it fails.[^ozar]

# What failed or stayed limited

- **Customers kept index creation opt-in.** Azure's defaults still leave CREATE_INDEX and DROP_INDEX **off**. Only plan correction is on by default.[^azure-doc] Managed Instance supports only plan correction. Most of the tables involved are small: recommendations are skipped for tables over 10 GB.[^azure-doc]
- **Optimizer errors cause reverts.** A significant fraction of Azure's reverts happened because the optimizer's cost model thought an index-backed plan was cheaper when it was actually slower. Write overhead caused others.[^azure-autoidx]
- **Little transfer to open source.** PostgreSQL and MySQL have no built-in equivalent. Third-party tools (pganalyze, HypoPG-based advisors) recommend but rarely act.

# Why

1. **Owning the control plane.** Microsoft and Oracle can see the workload, apply changes in low-load windows and roll back. A plugin or SaaS tuner cannot do this as safely. Compare [OtterTune](/ideas/ml-for-db/ml-knob-tuning.md).
2. **Classical techniques were good enough.** The what-if optimizer API, missing-index DMVs and DTA were mature. ML went into narrow places, such as classifiers predicting whether an index will regress a query (Microsoft's "AI Meets AI" work, SIGMOD 2019[^ml-index-overview]), not into the core search.
3. **Reversibility.** Indexes and forced plans are easy to undo, so customers can let the system experiment. Knob changes needing restarts, or schema changes, are not.
4. **Small, repetitive SaaS workloads.** Millions of small cloud databases have no DBA at all. For them "matches a typical human" is a big improvement.

# Lessons

- The winning form of "autonomous" was **closed-loop validation plus automatic rollback**, not a smarter model.
- Default-on happens only for the safest action (plan forcing). Physical design changes stay opt-in even after years of success.
- LLMs have not displaced cost-based advisors here as of 2026.[^llm-index-sqlserver]

# Related

- [Self-driving databases](/ideas/ml-for-db/self-driving-databases.md), [Learned query optimizers](/ideas/ml-for-db/learned-query-optimizers.md), [LLM-based tuning and diagnosis](/ideas/ml-for-db/llm-database-tuning-and-diagnosis.md)
- Systems: [Azure SQL automatic tuning](/systems/azure-sql-automatic-tuning.md), [Oracle Autonomous Database](/systems/oracle-autonomous-database.md)
- Paper: [Automatically Indexing Millions of Databases in Azure SQL](/papers/2019-azure-sql-auto-indexing.md)

[^azure-autoidx]: Das et al., SIGMOD 2019, Sections 7–8.
[^azure-doc]: Microsoft Learn, Automatic tuning overview.
[^plan-correction]: Azure blog.
[^iqp-2022]: Microsoft SQL Server blog.
[^oracle-autoidx]: PVLDB 18, 2025.
[^ozar]: Brent Ozar, August 2019.
[^devops-guru]: TechCrunch, 2021-12-01.
[^ml-index-overview]: Overview of ML-powered index tuning, 2023.
[^llm-index-sqlserver]: arXiv 2603.09181.
