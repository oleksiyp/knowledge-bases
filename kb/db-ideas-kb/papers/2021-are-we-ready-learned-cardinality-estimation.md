---
type: Paper
title: Are We Ready For Learned Cardinality Estimation?
description: A comparative evaluation finds accuracy gains but also training, inference and update costs, making deployment
  readiness a broader question than static estimation error.
year: 2021
venue: PVLDB 14(9), 1640–1654
authors:
- Xiaoying Wang
- Changbo Qu
- Weiyuan Wu
- Jiannan Wang
- Qingqing Zhou
impact: high
resource: https://arxiv.org/abs/2012.06743
ideas:
- ideas/ml-for-db/learned-query-optimizers
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: ready-ce
  resource: https://arxiv.org/abs/2012.06743
  title: 'Wang et al.: Are We Ready For Learned Cardinality Estimation? (PVLDB 14(9), 2021)'
---

# Claim
The study asks whether learned cardinality estimators are ready for real deployment, rather than merely whether they can improve accuracy on a fixed dataset. Its final abstract compares five learned methods with eight traditional methods across four datasets. Learned estimators often improve static accuracy, but incur training and inference costs and struggle to keep pace with rapid updates. Changes in correlation, skew and domain size can also produce hard-to-predict errors.[^ready-ce]

# What happened next
The paper supplies a useful evaluation checklist: account for refresh cost, online prediction latency, changing data and the interpretability of failures. It should be read as an assessment of the methods and workloads tested in 2021, not a permanent verdict on every later estimator.[^ready-ce]

Our assessment is that its importance lies in changing the question from average error to the lifetime cost of an optimizer component. A model used inside plan search may be consulted many times, so a more accurate prediction can still be too expensive. Likewise, a model that needs retraining must justify the time and resources spent keeping it useful. Broad adoption of the specific evaluated methods is not established by this study; neither is universal impossibility of learned estimation.

# Related
- [Learned query optimizers](/ideas/ml-for-db/learned-query-optimizers.md)
- [Neo](/papers/2019-neo-learned-query-optimizer.md), [Bao](/papers/2021-bao.md)

[^ready-ce]: [Wang et al.: Are We Ready For Learned Cardinality Estimation? (PVLDB 14(9), 2021)](https://arxiv.org/abs/2012.06743).
