---
type: Paper
title: 'Elle: Inferring Isolation Anomalies from Experimental Observations'
description: A practical checker infers transaction dependency graphs from carefully chosen client observations; Jepsen applications
  demonstrate its industry impact.
year: 2020
venue: PVLDB 14(3), 268–280
authors:
- Kyle Kingsbury
- Peter Alvaro
resource: https://arxiv.org/abs/2003.10554
impact: high
ideas:
- ideas/distributed-sql/jepsen-correctness-culture
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: elle-paper
  resource: https://arxiv.org/abs/2003.10554
  title: 'Elle: Inferring Isolation Anomalies from Experimental Observations'
- id: j-pg12
  resource: https://jepsen.io/analyses/postgresql-12.3
  title: 'Jepsen: PostgreSQL 12.3 (2020-06)'
- id: j-rds
  resource: https://jepsen.io/analyses/amazon-rds-for-postgresql-17.4
  title: 'Jepsen: Amazon RDS for PostgreSQL 17.4 (2025-04)'
---

# Claim
Elle makes isolation testing tractable by choosing operations whose results reveal version order. It infers dependency graphs from client histories and looks for cycles prohibited by a consistency model, rather than attempting to enumerate every legal serialization. The paper appeared in PVLDB volume 14, issue 3 in 2020.[^elle-paper]

# What happened next
Jepsen applied the approach to PostgreSQL and later managed database deployments, turning a research checker into practical diagnostic infrastructure.[^j-pg12][^j-rds] This is stronger evidence of impact than citation counts alone: the method exposed concrete disagreements between documented guarantees and observed behavior.

Our assessment is that the lasting contribution is a reusable way to connect a client's observation to a named isolation anomaly. That improves bug reports and makes independent reproduction easier. The boundary remains important: inference depends on the operations and observations the checker can interpret. A clean run is conditional evidence for those histories, not a proof for every transaction shape or deployment. This distinction is especially important when reading vendor summaries of a Jepsen engagement.

# Related
- [Jepsen](/systems/jepsen.md), [Correctness culture](/ideas/distributed-sql/jepsen-correctness-culture.md)

[^elle-paper]: [Elle: Inferring Isolation Anomalies from Experimental Observations](https://arxiv.org/abs/2003.10554).
[^j-pg12]: [Jepsen: PostgreSQL 12.3 (2020-06)](https://jepsen.io/analyses/postgresql-12.3).
[^j-rds]: [Jepsen: Amazon RDS for PostgreSQL 17.4 (2025-04)](https://jepsen.io/analyses/amazon-rds-for-postgresql-17.4).
