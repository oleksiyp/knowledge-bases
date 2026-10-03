---
type: System
title: OtterTune
description: "CMU research project (2014–) turned startup (2020–2024) that used machine learning to tune database knobs, and later indexes and health checks, for Amazon RDS/Aurora MySQL and PostgreSQL. Raised $14.5M and shut down in June 2024 after an acquisition deal collapsed."
resource: https://ottertune.com
tags: [knob-tuning, autonomous-database, startup, cmu, postgresql, mysql]
kind: product
first_release: 2020
org: "OtterTune Inc. (Pittsburgh; founders Andy Pavlo, Dana Van Aken, Bohan Zhang)"
outcome: dead
ideas: [ideas/ml-for-db/ml-knob-tuning, ideas/ml-for-db/self-driving-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ottertune-2017
    resource: https://db.cs.cmu.edu/papers/2017/p1009-van-aken.pdf
    title: "Van Aken et al.: Automatic DBMS Tuning Through Large-scale Machine Learning (SIGMOD 2017)"
  - id: tc-seriesa
    resource: https://techcrunch.com/2022/05/10/2309852/
    title: "TechCrunch: OtterTune raises $12M (2022-05-10)"
  - id: technically
    resource: https://technical.ly/startups/ottertune-series-a/
    title: "Technical.ly: OtterTune closed a $12M Series A"
  - id: hn-dead
    resource: https://news.ycombinator.com/item?id=40690380
    title: "Hacker News: OtterTune shuts down, cites failed acquisition by a 'PE Postgres' company"
  - id: pavlo-2024
    resource: https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
    author: person:andy-pavlo
  - id: firebolt-pavlo
    resource: https://www.firebolt.io/blog/vector-databases-wont-replace-sql---andy-pavlo
    title: "Firebolt: interview with Andy Pavlo"
  - id: gh-ottertune
    resource: https://github.com/cmu-db/ottertune
    title: "cmu-db/ottertune (GitHub, archived)"
  - id: inquiry-2021
    resource: https://dl.acm.org/doi/10.14778/3450980.3450992
    title: "Van Aken et al.: An Inquiry into ML-based Automatic Configuration Tuning Services on Real-World DBMSs (PVLDB 2021)"
---

# Summary

OtterTune was the best-known attempt to commercialize ML-based database tuning. The research system (SIGMOD 2017) used workload mapping and Gaussian-process Bayesian optimization to recommend knob settings.[^ottertune-2017] A 2021 study with Société Générale tested it on real Oracle workloads.[^inquiry-2021] The company launched in 2020 as a SaaS for Amazon RDS and Aurora, raised a $12M Series A in May 2022 (Intel Capital and Race Capital leading, Accel participating; $14.5M total), and broadened into index recommendations and database "health checks".[^tc-seriesa][^technically] It shut down in June 2024. Pavlo said a "PE Postgres company" backed out of an acquisition and the team was let go with a month's notice.[^hn-dead] In his 2024 review: "now it is dead".[^pavlo-2024]

# Timeline

| Date | Event |
|---|---|
| 2017 | SIGMOD paper; open-source research code (archived on GitHub in 2020 when the company took over)[^gh-ottertune] |
| 2020 | Company launches |
| 2021 | Real-world study with Société Générale (PVLDB) |
| May 2022 | $12M Series A |
| 2022–2023 | Expands from knobs to indexes and health checks |
| 2024-06-14 | Pavlo announces shutdown |

# What worked

- Strong, well-cited research, a public benchmark culture, and a credible product on top of managed MySQL/PostgreSQL.
- The team made the models "more safe and a bit more conservative" for production, e.g., rounding recommended values to numbers "a human wouldn't generate".[^firebolt-pavlo]

# What didn't

- **The market.** Pavlo listed the obstacles: customers couldn't afford clone instances for safe experiments, workload replay tooling for open-source DBMSs was poor, and most users preferred upsizing the instance to optimizing it.[^firebolt-pavlo]
- **Platform dependence.** Running on top of RDS/Aurora meant AWS controlled the knobs, the telemetry and the defaults.
- **Dependence on one exit.** When the acquisition collapsed, the company had no fallback.[^hn-dead]

# Related

- Ideas: [ML-based knob tuning](/ideas/ml-for-db/ml-knob-tuning.md), [Self-driving databases](/ideas/ml-for-db/self-driving-databases.md)
- Events: [Series A](/events/2022-05-ottertune-series-a.md), [Shutdown](/events/2024-06-ottertune-shuts-down.md)
- Related systems: [NoisePage](/systems/noisepage.md), [PostgreSQL](/systems/postgresql.md), [Aurora](/systems/aurora.md)

[^ottertune-2017]: SIGMOD 2017.
[^tc-seriesa]: TechCrunch.
[^technically]: Technical.ly; total raised $14.5M.
[^hn-dead]: HN thread, June 2024.
[^pavlo-2024]: Pavlo 2024 review.
[^firebolt-pavlo]: Firebolt interview.
[^gh-ottertune]: GitHub repository metadata: archived, last push Nov 2020.
[^inquiry-2021]: PVLDB 14(7).
