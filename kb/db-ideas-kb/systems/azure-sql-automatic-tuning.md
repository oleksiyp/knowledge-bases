---
type: System
title: Azure SQL automatic tuning
description: "Built-in service in Azure SQL Database (and SQL Server's engine) that creates and drops indexes and forces the last good plan when a query regresses, validating every action and reverting regressions automatically. Runs across millions of databases; the quiet success story of 'self-tuning' databases."
resource: https://learn.microsoft.com/en-us/azure/azure-sql/database/automatic-tuning-overview
tags: [azure, sql-server, auto-indexing, plan-correction, query-store, cloud-service]
kind: cloud-service
first_release: 2016
org: "Microsoft"
license: proprietary
outcome: thriving
ideas: [ideas/ml-for-db/automatic-indexing-and-plan-correction, ideas/ml-for-db/self-driving-databases, ideas/ml-for-db/llm-database-tuning-and-diagnosis]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: paper
    resource: https://www.microsoft.com/en-us/research/uploads/prod/2019/02/autoindexing_azuredb.pdf
    title: "Das et al.: Automatically Indexing Millions of Databases in Microsoft Azure SQL Database (SIGMOD 2019)"
  - id: docs
    resource: https://learn.microsoft.com/en-us/azure/azure-sql/database/automatic-tuning-overview?view=azuresql
    title: "Microsoft Learn: Automatic tuning overview"
  - id: plan-correction
    resource: https://azure.microsoft.com/en-us/blog/automatic-tuning-introduces-automatic-plan-correction-and-t-sql-management/
    title: "Azure blog: Automatic tuning introduces automatic plan correction and T-SQL management"
  - id: iqp
    resource: https://www.microsoft.com/en-us/sql-server/blog/2022/09/15/intelligent-query-processing-feature-family-additions/
    title: "SQL Server blog: Intelligent Query Processing additions (2022)"
  - id: copilot-ga
    resource: https://techcommunity.microsoft.com/blog/azuresqlblog/announcing-general-availability-of-azure-sql-database-capabilities-for-microsoft/4403518
    title: "Microsoft: GA of Azure SQL Database capabilities for Microsoft Copilot in Azure"
  - id: llm-index
    resource: https://arxiv.org/abs/2603.09181
    title: "Wang et al.: Evaluating the Practical Effectiveness of LLM-Driven Index Tuning on Microsoft SQL Server (2026)"
---

# Summary

Azure SQL automatic tuning has three actions: **CREATE INDEX**, **DROP INDEX** (unused for 90 days, or duplicate) and **FORCE LAST GOOD PLAN** (automatic plan correction, built on Query Store).[^docs] Changes are applied in low-utilization windows and validated against real execution for 30 minutes to 72 hours. Anything that regresses is reverted. By Microsoft's SIGMOD 2019 account, the auto-indexing service had generated recommendations for every Azure SQL database for more than two years. In October 2018, about a quarter of databases had auto-implementation on, with about 50K indexes created and 20K dropped per week. About 11% of actions were reverted.[^paper] Automated recommendations matched or beat human administrators in 85–90% of databases, though not expert DBAs on complex premium-tier workloads.[^paper]

# Timeline

| Date | Event |
|---|---|
| ~2016 | Auto-indexing service in Azure SQL Database (generally available "more than two years" before the 2019 paper) |
| 2017 | Automatic plan correction in Azure SQL and SQL Server 2017[^plan-correction] |
| 2019 | SIGMOD industry paper with fleet statistics |
| 2022 | SQL Server 2022 adds CE, DOP and memory-grant feedback[^iqp] |
| 2024–2025 | Copilot in Azure adds natural-language performance troubleshooting for Azure SQL[^copilot-ga] |
| 2025 | SQL database in Microsoft Fabric enables CREATE INDEX automatically[^docs] |

# What worked

- Closed-loop validation and rollback made automatic changes safe enough for a multi-tenant cloud at a scale of millions of databases.
- It is built on mature classical tools (the Database Tuning Advisor, missing-index analysis, the what-if API). ML is used only narrowly, e.g., to predict regressions.
- Plan correction is **on by default** for new servers.[^docs]

# What didn't

- Index creation and dropping are still **off by default** in Azure SQL Database. Managed Instance supports only plan correction. Recommendations skip tables over 10 GB.[^docs]
- Optimizer cost-model errors cause a significant share of reverts.[^paper]
- LLMs have not improved on it yet. Microsoft Research found LLM index advice high-variance compared with DTA.[^llm-index]

# Related

- Ideas: [Automatic indexing and plan correction](/ideas/ml-for-db/automatic-indexing-and-plan-correction.md), [Self-driving databases](/ideas/ml-for-db/self-driving-databases.md)
- Paper: [Automatically Indexing Millions of Databases](/papers/2019-azure-sql-auto-indexing.md)
- Related: [QO-Advisor](/systems/qo-advisor.md), [Azure SQL Hyperscale](/systems/azure-sql-hyperscale.md), [Oracle Autonomous Database](/systems/oracle-autonomous-database.md)

[^paper]: SIGMOD 2019.
[^docs]: Microsoft Learn.
[^plan-correction]: Azure blog.
[^iqp]: SQL Server blog.
[^copilot-ga]: Microsoft Tech Community.
[^llm-index]: arXiv 2603.09181.
