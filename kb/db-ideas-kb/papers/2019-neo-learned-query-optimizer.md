---
type: Paper
title: 'Neo: A Learned Query Optimizer'
description: Neo demonstrated learned plan generation bootstrapped from an existing optimizer; the subsequent practical direction
  favored smaller decision spaces and integration with existing engines.
year: 2019
venue: PVLDB 12(11), 1705–1718
authors:
- Ryan Marcus
- Parimarjan Negi
- Hongzi Mao
- Chi Zhang
- Mohammad Alizadeh
- Tim Kraska
- Olga Papaemmanouil
- Nesime Tatbul
impact: high
resource: https://www.vldb.org/pvldb/vol12/p1705-marcus.pdf
ideas:
- ideas/ml-for-db/learned-query-optimizers
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: neo
  resource: https://www.vldb.org/pvldb/vol12/p1705-marcus.pdf
  title: 'Marcus et al.: Neo: A Learned Query Optimizer (PVLDB 12(11), 2019)'
- id: bao-preprint
  resource: https://arxiv.org/abs/2004.03814
  title: 'Bao: Learning to Steer Query Optimizers, author preprint'
- id: balsa
  resource: https://arxiv.org/abs/2201.01441
  title: 'Yang et al.: Balsa: Learning a Query Optimizer Without Expert Demonstrations (SIGMOD 2022)'
---

# Claim
Neo uses deep learning to generate execution plans, starting with experience supplied by an existing optimizer and improving through executed queries. The paper reports that a model bootstrapped from PostgreSQL can match or surpass commercial optimizers in parts of its evaluation.[^neo] The important claim is workload-specific learning of planning behavior, not that one fixed model optimizes every database.

# What happened next
Later papers attacked different obstacles. Bao retained the classical optimizer and learned per-query hints, explicitly targeting training cost, adaptation and tail performance.[^bao-preprint] Balsa investigated learning without expert optimizer demonstrations.[^balsa] These directions show that Neo established a research possibility while leaving the acquisition of useful experience and control of bad plans unresolved.

Our assessment is that Neo's influence is stronger than the evidence for broad deployment of Neo itself. Learning a plan requires feedback about plans that may be expensive to execute; a production team must account for that exploration cost as well as the eventual speedup. Results against selected baselines also need a stated training budget and workload split. None of those limits makes the experiment unimportant, but they prevent its benchmark result from being read as a turnkey replacement for an established optimizer.

# Related
- [Learned query optimizers](/ideas/ml-for-db/learned-query-optimizers.md)
- [Bao paper](/papers/2021-bao.md), [Bao system](/systems/bao.md)

[^neo]: [Marcus et al.: Neo: A Learned Query Optimizer (PVLDB 12(11), 2019)](https://www.vldb.org/pvldb/vol12/p1705-marcus.pdf).
[^bao-preprint]: [Bao: Learning to Steer Query Optimizers, author preprint](https://arxiv.org/abs/2004.03814).
[^balsa]: [Yang et al.: Balsa: Learning a Query Optimizer Without Expert Demonstrations (SIGMOD 2022)](https://arxiv.org/abs/2201.01441).
