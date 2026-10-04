---
type: Paper
title: 'GPTuner: A Manual-Reading Database Tuning System via GPT-Guided Bayesian Optimization'
description: GPTuner uses language-model extraction of documentation to narrow a Bayesian optimization search, showing a concrete
  role for LLMs without treating generated advice as measured performance.
year: 2024
venue: PVLDB 17(8), 1939–1952
authors:
- Jiale Lao
- Yibo Wang
- Yufei Li
- Jianping Wang
- Yunjia Zhang
- Zhiyuan Cheng
- Wanghu Chen
- Mingjie Tang
- Jianguo Wang
impact: medium
resource: https://arxiv.org/abs/2311.03157
ideas:
- ideas/ml-for-db/llm-database-tuning-and-diagnosis
- ideas/ml-for-db/ml-knob-tuning
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: gptuner
  resource: https://arxiv.org/abs/2311.03157
  title: 'Lao et al.: GPTuner: A Manual-Reading Database Tuning System via GPT-Guided Bayesian Optimization (PVLDB 17(8),
    2024)'
- id: lambda-tune
  resource: https://arxiv.org/abs/2411.03500
  title: 'Giannakouris & Trummer: λ-Tune: Harnessing Large Language Models for Automated Database System Tuning (SIGMOD 2025)'
- id: ms-llm-index
  resource: https://arxiv.org/abs/2603.09181
  title: 'Wang, Wu, Narasayya, Chaudhuri: Evaluating the Practical Effectiveness of LLM-Driven Index Tuning on Microsoft SQL
    Server (arXiv, Mar 2026)'
---

# Claim
GPTuner extracts and reconciles tuning knowledge from manuals and discussions, uses it to select knobs and ranges, and then searches those ranges with coarse-to-fine Bayesian optimization. Its evaluation covers PostgreSQL and MySQL on TPC-C and TPC-H. The authors report finding better configurations in 16 times less tuning time on average than their compared approaches, with up to 30% performance improvement over the strongest alternative.[^gptuner] These are benchmark results, not promises for arbitrary production workloads.

# What happened next
Later research explored different LLM roles: λ-Tune generates complete configuration scripts, while a 2026 Microsoft study evaluates the variability of LLM-driven index recommendations against conventional tuning.[^lambda-tune][^ms-llm-index] These are related directions rather than replications of GPTuner's exact experiment.

Our assessment is that GPTuner's strongest idea is using documentation to reduce expensive experimentation. The LLM supplies useful prior information; actual database runs remain the performance test. This separates plausible advice from measured improvement. Production adoption still requires representative workloads, constraints on disruptive settings and a response to workload drift. A successful tuner also needs to count its search cost and the cost of evaluating bad candidates, rather than reporting only the final configuration's throughput.

# Related
- [LLM tuning and diagnosis](/ideas/ml-for-db/llm-database-tuning-and-diagnosis.md)
- [ML knob tuning](/ideas/ml-for-db/ml-knob-tuning.md), [OtterTune](/systems/ottertune.md)

[^gptuner]: [Lao et al.: GPTuner: A Manual-Reading Database Tuning System via GPT-Guided Bayesian Optimization (PVLDB 17(8), 2024)](https://arxiv.org/abs/2311.03157).
[^lambda-tune]: [Giannakouris & Trummer: λ-Tune: Harnessing Large Language Models for Automated Database System Tuning (SIGMOD 2025)](https://arxiv.org/abs/2411.03500).
[^ms-llm-index]: [Wang, Wu, Narasayya, Chaudhuri: Evaluating the Practical Effectiveness of LLM-Driven Index Tuning on Microsoft SQL Server (arXiv, Mar 2026)](https://arxiv.org/abs/2603.09181).
