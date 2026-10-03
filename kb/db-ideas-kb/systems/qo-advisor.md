---
type: System
title: QO-Advisor (Microsoft SCOPE)
description: "Microsoft's production 'steered query optimizer' for the SCOPE big-data platform: an offline pipeline learns per-job optimizer rule hints from past executions, validates them, and applies them with regression safeguards. Enabled by default in production SCOPE workloads. The clearest industrial deployment of the Bao-style learned-optimizer idea."
resource: https://arxiv.org/abs/2210.13625
tags: [learned-query-optimizer, microsoft, scope, big-data, production]
kind: product
first_release: 2021
org: "Microsoft (Azure Data / Gray Systems Lab)"
license: proprietary
outcome: stable
ideas: [ideas/ml-for-db/learned-query-optimizers]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: steering
    resource: https://par.nsf.gov/biblio/10347330-steering-query-optimizers-practical-take-big-data-workloads
    title: "Negi et al.: Steering Query Optimizers: A Practical Take on Big Data Workloads (SIGMOD 2021)"
  - id: qo-advisor
    resource: https://arxiv.org/abs/2210.13625
    title: "Zhang et al.: Deploying a Steered Query Optimizer in Production at Microsoft (SIGMOD 2022)"
  - id: oasis
    resource: https://www.microsoft.com/en-us/research/wp-content/uploads/2022/07/Oasis_Final-62cc89569ebe0.pdf
    title: "Jindal et al.: Query Optimizer as a Service: An Idea Whose Time Has Come! (SIGMOD Record 2022)"
---

# Summary

SCOPE is Microsoft's internal SQL-like big-data system, running very large numbers of recurring jobs. In 2021, Microsoft and MIT researchers showed that **steering** SCOPE's optimizer, by turning rule configurations on or off per job based on past runs, could speed up recurring workloads without changing the optimizer.[^steering] QO-Advisor, described at SIGMOD 2022, made this operational. The planner's exploration is moved into a large offline pipeline. Steering actions are kept manageable and within a cost budget. Recommendations are validated to avoid unexpected regressions. The paper states QO-Advisor "is currently enabled by default in production SCOPE workloads".[^qo-advisor] The same group argued for "query optimizer as a service", detached from individual engines.[^oasis]

# Timeline

| Date | Event |
|---|---|
| 2021 | Steering paper (SIGMOD 2021), with co-authors from the Bao team |
| 2022 | QO-Advisor production paper (SIGMOD 2022); "Query Optimizer as a Service" vision |

# What worked

- It exploits recurring jobs. The same pipelines run daily, so learning from history pays off.
- Safety engineering (budgets, validation, single-rule-flip actions) made learned steering acceptable in production.

# What didn't

- It covers only one internal system with highly repetitive batch jobs. There is no public evidence of the same approach in Microsoft's customer-facing SQL engines beyond the feedback features in SQL Server 2022 (unconfirmed).
- The gains come from selecting among existing optimizer behaviours, not from discovering new plans.

# Related

- Idea: [Learned query optimizers](/ideas/ml-for-db/learned-query-optimizers.md)
- Systems: [Bao](/systems/bao.md), [Azure SQL automatic tuning](/systems/azure-sql-automatic-tuning.md)

[^steering]: SIGMOD 2021.
[^qo-advisor]: SIGMOD 2022 / arXiv 2210.13625.
[^oasis]: SIGMOD Record 2022.
