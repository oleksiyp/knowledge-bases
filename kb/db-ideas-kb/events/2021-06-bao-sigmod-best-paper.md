---
type: Event
title: "Bao wins SIGMOD 2021 best paper: learned query optimization made practical"
description: "At SIGMOD 2021 (June 2021) the Bao bandit optimizer from MIT and Intel Labs won the best paper award, marking the peak of academic enthusiasm for learned query optimizers and shifting the field from replacing optimizers to steering them."
date: 2021-06-20
year: 2021
kind: paper
signal: positive
ideas: [ideas/ml-for-db/learned-query-optimizers]
systems: [systems/bao, systems/qo-advisor]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: intel
    resource: https://www.intel.com/content/www/us/en/research/blogs/sigmod-conference-2021.html
    title: "Intel Labs: Intel Labs Together with MIT Presents Award-Winning Research on Data Systems and ML (SIGMOD 2021)"
  - id: bao
    resource: https://dblp.org/rec/conf/sigmod/MarcusNMTAK21.html
    title: "Marcus et al.: Bao: Making Learned Query Optimization Practical (SIGMOD 2021)"
  - id: ready-ce
    resource: https://arxiv.org/abs/2012.06743
    title: "Wang et al.: Are We Ready For Learned Cardinality Estimation? (PVLDB 2021)"
---

# What happened

At SIGMOD 2021 (a virtual event hosted from China, 20–25 June 2021; the event date used here is the conference start), "Bao: Making Learned Query Optimization Practical" by Ryan Marcus, Parimarjan Negi, Hongzi Mao, Nesime Tatbul, Mohammad Alizadeh and Tim Kraska won the best paper award.[^intel][^bao] The same conference included Microsoft's paper on steering the SCOPE optimizer.

# Why it matters

The same year, "Are We Ready For Learned Cardinality Estimation?" (PVLDB) reported that learned estimators were fragile under data updates.[^ready-ce] Together the two papers mark a turn. End-to-end learned components were losing credibility, while "advise the existing optimizer" (Bao) was gaining it. The steering approach became the version used in production (Microsoft QO-Advisor). Full learned optimizers did not.

# Related

- [Bao](/systems/bao.md), [QO-Advisor](/systems/qo-advisor.md)
- [Learned query optimizers](/ideas/ml-for-db/learned-query-optimizers.md)
- [Bao paper](/papers/2021-bao.md)

[^intel]: Intel Labs blog.
[^bao]: dblp.
[^ready-ce]: PVLDB 14(9).
