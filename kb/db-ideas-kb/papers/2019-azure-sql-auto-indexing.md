---
type: Paper
title: Automatically Indexing Millions of Databases in Microsoft Azure SQL Database
description: An industry account of continuous index recommendation, implementation and regression validation shows that operational
  feedback can matter more than a novel learning model.
year: 2019
venue: SIGMOD 2019, 666–679
authors:
- Sudipto Das
- Miroslav Grbic
- Igor Ilic
- Isidora Jovandic
- Andrija Jovanovic
- Vivek R. Narasayya
- Miodrag Radulovic
- Maja Stikic
- Gaoxiang Xu
- Surajit Chaudhuri
impact: high
resource: https://www.microsoft.com/en-us/research/uploads/prod/2019/02/autoindexing_azuredb.pdf
ideas:
- ideas/ml-for-db/automatic-indexing-and-plan-correction
- ideas/ml-for-db/self-driving-databases
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: azure-autoidx
  resource: https://www.microsoft.com/en-us/research/uploads/prod/2019/02/autoindexing_azuredb.pdf
  title: 'Das et al.: Automatically Indexing Millions of Databases in Microsoft Azure SQL Database (SIGMOD 2019)'
- id: azure-doc
  resource: https://learn.microsoft.com/en-us/azure/azure-sql/database/automatic-tuning-overview?view=azuresql
  title: 'Microsoft Learn: Automatic tuning overview – Azure SQL & SQL database in Fabric (updated 2025)'
---

# Claim
The paper describes an industrial auto-indexing service that recommends indexes across Azure SQL Database, applies them where enabled, measures their effects and reverses harmful changes. By the period reported in 2019, the service had operated for more than two years and improved performance for hundreds of thousands of databases.[^azure-autoidx] The contribution is the full operational loop, not an assertion that a learned model replaces every physical-design decision.

# What happened next
Azure's documentation continues to distinguish automatic plan correction from index creation and deletion. The defaults enable forcing the last good plan while leaving CREATE_INDEX and DROP_INDEX disabled for Azure SQL Database.[^azure-doc] Availability at large scale therefore must not be confused with every customer granting permission for every action.

Our assessment is that this paper provides unusually concrete evidence for a successful part of the self-tuning agenda. Continuous observation, a bounded change and a rollback path make automation useful even when recommendations are imperfect. An unsuccessful action can become a measured, reversible experiment. That lesson is more transferable than the particular index-ranking method: the deployment mechanism and the response to regression are part of the algorithm's practical value, not implementation details to omit from evaluation.

# Related
- [Azure SQL automatic tuning](/systems/azure-sql-automatic-tuning.md)
- [Automatic indexing and plan correction](/ideas/ml-for-db/automatic-indexing-and-plan-correction.md)

[^azure-autoidx]: [Das et al.: Automatically Indexing Millions of Databases in Microsoft Azure SQL Database (SIGMOD 2019)](https://www.microsoft.com/en-us/research/uploads/prod/2019/02/autoindexing_azuredb.pdf).
[^azure-doc]: [Microsoft Learn: Automatic tuning overview – Azure SQL & SQL database in Fabric (updated 2025)](https://learn.microsoft.com/en-us/azure/azure-sql/database/automatic-tuning-overview?view=azuresql).
