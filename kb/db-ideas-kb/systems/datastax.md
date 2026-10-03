---
type: System
title: DataStax (Astra DB)
description: "The main commercial company behind Apache Cassandra, selling DataStax Enterprise and the Astra DB cloud service, later repositioned around vector search and the Langflow agent builder. Valued at $1.6B in 2022; acquired by IBM (announced Feb 2025, closed May 2025; price undisclosed)."
resource: https://www.datastax.com
tags: [cassandra, wide-column, dbaas, vector-search, acquisition, ibm]
kind: product
first_release: 2010
org: "DataStax, Inc. (acquired by IBM, May 2025)"
license: "Apache-2.0 (Cassandra); proprietary (DSE, Astra DB)"
outcome: acquired
ideas: [ideas/business-licensing/funding-boom-and-consolidation, ideas/business-licensing/database-acquisitions-as-ai-acquihires, ideas/business-licensing/database-company-graveyard]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: cb-datastax
    resource: https://news.crunchbase.com/cloud/datastax-valuation-unicorn-vc-goldman/
    title: "Crunchbase News: DataStax raises $115M, valuation hits $1.6B (June 2022)"
  - id: reg-ibm
    resource: https://www.theregister.com/2025/02/25/ibm_datastax/
    title: "The Register: IBM plans to buy DataStax (2025-02-25)"
  - id: dbta-ibm
    resource: https://www.dbta.com/Editorial/News-Flashes/IBM-Officially-Closes-Acquisition-of-DataStax-169711.aspx
    title: "DBTA: IBM officially closes acquisition of DataStax (May 2025)"
  - id: tns-ibm
    resource: https://thenewstack.io/ibm-to-acquire-datastax-to-boost-watsonx-ai-development/
    title: "The New Stack: IBM to acquire DataStax to boost watsonx AI development"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# Summary

DataStax built its business on Apache Cassandra: support, the proprietary DataStax Enterprise distribution, and from 2020 the Astra DB serverless cloud service. Like other open-source database vendors it faced hyperscaler-hosted Cassandra (Amazon Keyspaces, Azure Managed Instance for Cassandra) and the Postgres wave. In June 2022 it raised $115M led by Goldman Sachs at a $1.6B valuation.[^cb-datastax] It then pivoted toward generative AI: vector search in Astra DB and, in April 2024, the acquisition of Langflow. IBM announced it would acquire DataStax on 25 February 2025 and closed in late May 2025, folding Astra DB and Langflow into watsonx.[^reg-ibm][^dbta-ibm][^tns-ibm] The price was not disclosed. Pavlo lists it at about $3B, which this KB treats as unconfirmed.[^pavlo-2025]

# Timeline

| Year | Event |
|---|---|
| 2010 | Founded (as Riptano) to commercialize Cassandra |
| 2020 | Astra DB cloud service launched |
| 2022 | $115M round at $1.6B valuation (Jun)[^cb-datastax] |
| 2024 | Acquires Langflow (Apr)[^tns-ibm] |
| 2025 | IBM announces (Feb 25) and closes (May) acquisition[^reg-ibm][^dbta-ibm] |

# What worked

- The AI repositioning (vector search plus Langflow) made it attractive to IBM, which was assembling a data-for-AI portfolio (HashiCorp, then Confluent).

# What didn't

- Cassandra's commercial market stayed niche. The project's governance is at the Apache Software Foundation, so DataStax could not control the core, and hyperscalers offered Cassandra-compatible services.
- No IPO; the exit was to a strategic buyer at an undisclosed price.

# Related

- [Funding boom and consolidation](/ideas/business-licensing/funding-boom-and-consolidation.md) · [Database company graveyard](/ideas/business-licensing/database-company-graveyard.md)
- [Cassandra](/systems/cassandra.md) · [IBM acquires DataStax](/events/2025-05-ibm-acquires-datastax.md)

[^cb-datastax]: Crunchbase News, June 2022.
[^reg-ibm]: The Register, 2025-02-25.
[^dbta-ibm]: DBTA, May 2025.
[^tns-ibm]: The New Stack.
[^pavlo-2025]: Andy Pavlo, Databases in 2025.
