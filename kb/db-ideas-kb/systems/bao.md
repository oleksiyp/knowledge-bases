---
type: System
title: Bao
description: "Bandit optimizer from MIT and Intel Labs (SIGMOD 2021 best paper) that steers an existing query optimizer by choosing per-query hint sets with a tree-convolutional model and Thompson sampling. The most influential learned-optimizer design: its 'steer, don't replace' approach is what reached production (Microsoft SCOPE) and was later generalized to PrestoDB and other engines (AutoSteer)."
resource: https://github.com/learnedsystems/BaoForPostgreSQL
tags: [learned-query-optimizer, postgresql, reinforcement-learning, research]
kind: research
first_release: 2020
org: "MIT DSAIL / Intel Labs (Ryan Marcus et al.)"
license: AGPL-3.0
outcome: stable
ideas: [ideas/ml-for-db/learned-query-optimizers]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: bao
    resource: https://dblp.org/rec/conf/sigmod/MarcusNMTAK21.html
    title: "Marcus et al.: Bao: Making Learned Query Optimization Practical (SIGMOD 2021)"
  - id: intel
    resource: https://www.intel.com/content/www/us/en/research/blogs/sigmod-conference-2021.html
    title: "Intel Labs: award-winning research at SIGMOD 2021"
  - id: gh
    resource: https://github.com/learnedsystems/BaoForPostgreSQL
    title: "learnedsystems/BaoForPostgreSQL (GitHub)"
  - id: qo-advisor
    resource: https://arxiv.org/abs/2210.13625
    title: "Zhang et al.: Deploying a Steered Query Optimizer in Production at Microsoft (SIGMOD 2022)"
  - id: autosteer
    resource: https://vldb.org/pvldb/vol16/p3515-anneser.pdf
    title: "Anneser et al.: AutoSteer (PVLDB 16(12), 2023)"
---

# Summary

Neo (2019) tried to learn whole query plans. Bao went the other way. It keeps the existing optimizer (PostgreSQL in the prototype) and, for each query, picks one of a few **hint sets** (for example, "no nested-loop joins"). A tree-convolutional neural network predicts each resulting plan's latency, and Thompson sampling balances exploring and exploiting.[^bao] The design limits the damage from a bad prediction, learns quickly, and adapts to schema and data changes. It won the SIGMOD 2021 best paper award.[^intel] The prototype is a PostgreSQL extension under AGPL-3.0, with about 220 GitHub stars and a last push in 2024.[^gh]

# Timeline

| Date | Event |
|---|---|
| 2020 | arXiv preprint and PostgreSQL extension released |
| Jun 2021 | SIGMOD best paper |
| 2021–2022 | Microsoft adapts steering for SCOPE; QO-Advisor on by default in production[^qo-advisor] |
| 2023 | AutoSteer generalizes Bao (automatic hint-set discovery; PostgreSQL, PrestoDB, Spark SQL, MySQL, DuckDB)[^autosteer] |

# What worked

- It turned learned optimization from "replace the optimizer" into "advise the optimizer". That made it deployable, and every later industrial adoption used this framing.
- Low integration cost: it only needs a hint interface.

# What didn't

- The open-source extension stayed a research prototype. No PostgreSQL distribution or managed service ships Bao itself.
- It needs repeated queries and online exploration, which many OLTP owners will not accept.

# Related

- Idea: [Learned query optimizers](/ideas/ml-for-db/learned-query-optimizers.md)
- Paper: [Bao (SIGMOD 2021)](/papers/2021-bao.md); [Neo](/papers/2019-neo-learned-query-optimizer.md)
- Systems: [QO-Advisor](/systems/qo-advisor.md), [PostgreSQL](/systems/postgresql.md)
- Event: [Bao wins SIGMOD best paper](/events/2021-06-bao-sigmod-best-paper.md)

[^bao]: SIGMOD 2021.
[^intel]: Intel Labs blog.
[^gh]: GitHub metadata.
[^qo-advisor]: SIGMOD 2022.
[^autosteer]: PVLDB 2023.
