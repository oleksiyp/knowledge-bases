---
type: System
title: Peloton
description: "CMU's first 'self-driving' DBMS (2015–2018): an in-memory HTAP engine meant to host ML models that forecast workloads and tune the system automatically. Abandoned in 2018 in favour of a from-scratch rewrite, NoisePage."
resource: https://github.com/cmu-db/peloton
tags: [research, self-driving, cmu, in-memory, htap]
kind: research
first_release: 2015
org: "Carnegie Mellon University Database Group"
license: Apache-2.0
outcome: dead
ideas: [ideas/ml-for-db/self-driving-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: cidr17
    resource: https://db.cs.cmu.edu/papers/2017/p42-pavlo-cidr17.pdf
    title: "Pavlo et al.: Self-Driving Database Management Systems (CIDR 2017)"
  - id: gh
    resource: https://github.com/cmu-db/peloton
    title: "cmu-db/peloton (GitHub, archived)"
  - id: dbdb-noisepage
    resource: https://dbdb.io/db/noisepage
    title: "Database of Databases: NoisePage"
  - id: qb5000
    resource: https://dl.acm.org/doi/10.1145/3183713.3196908
    title: "Ma et al.: Query-based Workload Forecasting for Self-Driving DBMSs (SIGMOD 2018)"
---

# Summary

Peloton was the system behind the CIDR 2017 paper "Self-Driving Database Management Systems". It was an in-memory, multi-version HTAP DBMS designed so that an embedded ML "brain" could forecast workload and apply tuning actions (indexes, layouts, knobs) on its own.[^cidr17] Its workload forecaster, QueryBot 5000, was published at SIGMOD 2018.[^qb5000] The engine itself never became stable enough for real use. The CMU group abandoned Peloton in 2018 and started NoisePage from scratch, carrying over a few components such as the Bw-Tree index.[^dbdb-noisepage] The repository's last push was in May 2019, and it is archived with about 2,000 GitHub stars.[^gh]

# Timeline

| Date | Event |
|---|---|
| 2015 | Development starts at CMU |
| 2017 | CIDR "self-driving DBMS" vision paper |
| 2018 | QueryBot 5000 forecasting paper; Peloton abandoned, NoisePage started |
| 2019 | Last commit; repository later archived |

# What worked

- It defined the research agenda and vocabulary of "self-driving" DBMSs. Forecasting, action planning and behaviour modelling all came out of the project.
- It trained a generation of CMU database students.

# What didn't

- Building a production-quality engine as a student project, while also building the ML layer on top, was too much. Code quality problems led to a full rewrite rather than incremental repair.[^dbdb-noisepage]

# Related

- [NoisePage](/systems/noisepage.md) (successor), [OtterTune](/systems/ottertune.md)
- Idea: [Self-driving databases](/ideas/ml-for-db/self-driving-databases.md)

[^cidr17]: CIDR 2017.
[^qb5000]: SIGMOD 2018.
[^dbdb-noisepage]: dbdb.io: "The CMU Database Group abandoned the Peloton project in 2018 and started building NoisePage from scratch."
[^gh]: GitHub metadata.
