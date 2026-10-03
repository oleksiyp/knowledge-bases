---
type: Event
title: IBM acquires Confluent for ~$11B
description: IBM agreed on 2025-12-08 to buy Kafka leader Confluent for $31/share in cash (~$11B EV); the deal closed 2026-03-17 and Confluent was delisted.
event_kind: acquisition
date: 2025-12-08
window: W12
impact: mixed
projects: [projects/data-engineering/apache-kafka, projects/data-engineering/apache-flink]
organizations: [organizations/confluent]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ibm-confluent
    resource: https://newsroom.ibm.com/2025-12-08-ibm-to-acquire-confluent-to-create-smart-data-platform-for-enterprise-generative-ai
    title: "IBM to acquire Confluent (2025-12-08)"
  - id: ibm-close
    resource: https://www.hpcwire.com/bigdatawire/this-just-in/ibm-completes-acquisition-of-confluent/
    title: "BigDATAwire: IBM completes acquisition of Confluent"
  - id: tipranks-close
    resource: https://www.tipranks.com/news/company-announcements/ibm-completes-confluent-acquisition-company-delists-from-nasdaq
    title: "TipRanks: IBM completes Confluent acquisition, company delists from Nasdaq"
  - id: ibm-10q
    resource: https://www.sec.gov/Archives/edgar/data/0000051143/000005114326000038/ibm-20260331.htm
    title: IBM Form 10-Q Q1 2026
  - id: cm-ibm-q2-2026
    resource: "https://newsroom.ibm.com/2026-07-22-IBM-RELEASES-SECOND-QUARTER-RESULTS"
    title: "IBM Q2 2026 results (Red Hat +11%; HashiCorp and Confluent in High-Growth Portfolio)"
---

# What happened
On 2025-12-08 IBM announced it would acquire Confluent for $31 per share in cash, an enterprise value of ~$11B, positioning it as "the smart data platform for enterprise IT, purpose-built for AI" and expecting adjusted-EBITDA accretion within the first full year[^ibm-confluent]. The deal was expected to close mid-2026 but completed early, on 2026-03-17; Confluent's stock was suspended and delisted from Nasdaq and its board replaced by IBM designees[^ibm-close][^tipranks-close][^ibm-10q].

# Why it matters
- The largest commercial Apache Kafka (and a major Flink) contributor is now owned by IBM — following IBM's HashiCorp and DataStax purchases, a pattern of IBM absorbing COSS infrastructure companies.
- Confluent serves 6,500+ enterprises including ~40% of the Fortune 500[^ibm-close], so roadmap/pricing changes ripple widely.

# Outcome so far
Confluent continues to ship (Confluent Platform 8.3, Confluent Intelligence with IBM Granite models) and co-founded the Streamhouse Working Group in Sept 2026. No evidence yet of reduced upstream Kafka investment.

# Related
- [Confluent](/organizations/confluent.md), [Apache Kafka](/projects/data-engineering/apache-kafka.md), [Apache Flink](/projects/data-engineering/apache-flink.md), [IBM closes DataStax](/events/2025-05-ibm-closes-datastax-langflow.md), [Streamhouse](/events/2026-09-streamhouse-working-group.md)

[^ibm-confluent]: IBM newsroom, 2025-12-08.
[^ibm-close]: BigDATAwire.
[^tipranks-close]: TipRanks.
[^ibm-10q]: IBM 10-Q.

## Additional notes (coss-market)

Market context: With HashiCorp (Feb 2025) and Couchbase (Sept 2025, PE), Confluent is the third US-listed COSS company to leave public markets in the window, making IBM the largest owner of COSS franchises (Red Hat, HashiCorp, Confluent). In Q2 2026 IBM reported Red Hat +11% and grouped HashiCorp and Confluent in its "High-Growth Portfolio" without standalone figures[^cm-ibm-q2-2026]. See [IBM's open source portfolio](/projects/coss-market/ibm-open-source-portfolio.md).

[^cm-ibm-q2-2026]: IBM Newsroom, 2026-07-22.
