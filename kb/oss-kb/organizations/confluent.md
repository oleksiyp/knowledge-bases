---
type: Organization
title: Confluent
description: The leading commercial Apache Kafka/Flink company; acquired by IBM for $31/share (~$11B EV), announced 2025-12-08 and closed 2026-03-17.
resource: https://www.confluent.io
tags: [commercial-open-source, streaming, kafka, flink, acquired]
org_kind: public-company
hq: Mountain View, California, USA
funding: { total_usd: "n/a (public until 2026-03-17)", last_round: "Acquired by IBM", last_round_date: 2026-03-17, valuation_usd: "~11B enterprise value" }
business_verdict: acquired
projects: [projects/data-engineering/apache-kafka, projects/data-engineering/apache-flink]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ibm-confluent
    resource: https://newsroom.ibm.com/2025-12-08-ibm-to-acquire-confluent-to-create-smart-data-platform-for-enterprise-generative-ai
    title: "IBM to acquire Confluent (2025-12-08)"
  - id: ibm-close
    resource: https://www.hpcwire.com/bigdatawire/this-just-in/ibm-completes-acquisition-of-confluent/
    title: "BigDATAwire: IBM completes acquisition of Confluent"
  - id: ibm-10q
    resource: https://www.sec.gov/Archives/edgar/data/0000051143/000005114326000038/ibm-20260331.htm
    title: "IBM Form 10-Q Q1 2026 (Confluent acquisition completed 2026-03-17)"
  - id: conf-wiki
    resource: https://en.wikipedia.org/wiki/Confluent,_Inc.
    title: "Wikipedia: Confluent, Inc. (FY2024 revenue $963M, net loss $345M)"
  - id: conf-press
    resource: https://www.confluent.io/press-releases/
    title: Confluent press releases
  - id: tc-warpstream
    resource: https://techcrunch.com/2024/09/09/confluent-acquires-streaming-data-startup-warpstream/
    title: "TechCrunch: Confluent acquires WarpStream (2024-09-09)"
  - id: conf-blog
    resource: https://www.confluent.io/blog/
    title: Confluent blog (Streamhouse Working Group 2026-09-15; Platform 8.3)
  - id: cm-gn-ibm-confluent
    resource: https://www.cnbc.com/2025/12/08/ibm-confluent-deal-data.html
    title: "CNBC: Confluent stock soars as IBM announces $11 billion deal to acquire it (2025-12-08)"
    author: org:cnbc
  - id: cm-ibm-q2-2026
    resource: "https://newsroom.ibm.com/2026-07-22-IBM-RELEASES-SECOND-QUARTER-RESULTS"
    title: "IBM Q2 2026 results (Confluent in High-Growth Portfolio)"
  - id: conf-10k
    resource: https://www.sec.gov/Archives/edgar/data/1699838/000095017025022369/cflt-20241231.htm
    title: "Confluent Form 10-K FY2024"
    author: org:confluent
---

# Summary
Confluent built the largest Kafka business (FY2024 revenue $963.6M, +24%; net loss $345.1M)[^conf-10k]. It acquired WarpStream (Sept 2024) to add BYOC diskless Kafka[^tc-warpstream], made Tableflow (Kafka topics → Iceberg tables) GA in March 2025, and launched Confluent Intelligence and Private Cloud in October 2025[^conf-press]. On 2025-12-08 IBM agreed to buy it for $31/share in cash (~$11B EV), expecting the deal to be accretive to adjusted EBITDA within a year[^ibm-confluent]; it closed 2026-03-17 and CFLT was delisted[^ibm-close][^ibm-10q]. Post-close, Confluent continues as an IBM brand, co-founding the Streamhouse Working Group in Sept 2026[^conf-blog]. Verdict: **acquired**.

# Business timeline
| Date | Event |
|---|---|
| 2024-09-09 | Acquires WarpStream[^tc-warpstream] |
| 2025-03-18 | Tableflow GA[^conf-press] |
| 2025-07-30 | Q2 2025 results; $200M partner-ecosystem investment[^conf-press] |
| 2025-10-29 | Confluent Intelligence, Private Cloud, streaming agents[^conf-press] |
| 2025-12-08 | IBM agrees to acquire at $31/share[^ibm-confluent] |
| 2026-03-17 | Acquisition completes; delisted from Nasdaq[^ibm-close][^ibm-10q] |
| 2026-09-15 | Co-founds Streamhouse Working Group[^conf-blog] |

# Monetization model
Fully managed Confluent Cloud (consumption), self-managed Confluent Platform (subscription), WarpStream BYOC; proprietary features (connectors, governance, Tableflow, Flink service) on top of Apache Kafka/Flink.

# Successes
- Category leader with ~$1B revenue; strong exit valuation in cash[^conf-wiki][^ibm-confluent].
- Successful bet on Flink and Iceberg (Tableflow) as complements to Kafka[^conf-press].

# Failures / risks
- Persistent GAAP losses[^conf-wiki]; pressure from cheaper object-storage Kafka and hyperscaler services led to sale rather than independence.
- Under IBM, Apache Kafka committer employment and roadmap priorities may shift (no evidence yet).

# Related
- [Apache Kafka](/projects/data-engineering/apache-kafka.md), [Apache Flink](/projects/data-engineering/apache-flink.md), [IBM acquires Confluent](/events/2025-12-ibm-acquires-confluent.md), [Streamhouse](/events/2026-09-streamhouse-working-group.md)

[^ibm-confluent]: IBM newsroom, 2025-12-08.
[^ibm-close]: BigDATAwire.
[^ibm-10q]: IBM 10-Q, Q1 2026.
[^conf-wiki]: Wikipedia, Confluent.
[^conf-press]: Confluent press releases.
[^tc-warpstream]: TechCrunch, 2024-09-09.
[^conf-blog]: Confluent blog.

## Additional notes (coss-market)

Market context: Confluent was the third US-listed COSS company to leave public markets in 18 months (after HashiCorp, Feb 2025, and Couchbase, Sept 2025); its shares rose 29% on the 2025-12-08 announcement[^cm-gn-ibm-confluent]. IBM reports Confluent in its "High-Growth Portfolio" alongside Red Hat and HashiCorp but discloses no standalone metrics (Q2 2026)[^cm-ibm-q2-2026]. See [IBM's open source portfolio](/projects/coss-market/ibm-open-source-portfolio.md) and [COSS M&A](/projects/coss-market/coss-ma-2024-2026.md).

[^cm-gn-ibm-confluent]: CNBC, 2025-12-08.
[^cm-ibm-q2-2026]: IBM Newsroom, 2026-07-22.
[^conf-10k]: Confluent 10-K, FY2024.
