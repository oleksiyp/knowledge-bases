---
type: Trend
title: Consolidation, and COSS companies stayed private for longer
description: "The listed COSS cohort shrank: HashiCorp, Couchbase and Confluent were taken out and there was no US COSS IPO in two years. Point tools merged into platforms (Fivetran–dbt, Prefect–Dagster, IBM's roll-up), and AI-adjacent winners raised giant private rounds instead of listing."
tags: [m-and-a, ipo, consolidation, venture, coss, cross-domain]
strength: dominant
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
domains: [coss-market, data-engineering, licensing-forks, cloud-native, databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: tc-ibm-hashicorp
    resource: https://techcrunch.com/2025/02/27/ibm-closes-6-4b-hashicorp-acquisition/
    title: "TechCrunch: IBM closes $6.4B HashiCorp acquisition"
  - id: ibm-confluent-close
    resource: https://newsroom.ibm.com/2026-03-17-ibm-completes-acquisition-of-confluent,-making-real-time-data-the-engine-of-enterprise-ai-and-agents
    title: "IBM completes acquisition of Confluent (2026-03-17)"
  - id: couchbase-close
    resource: https://www.couchbase.com/press-releases/haveli-investments-completes-acquisition-of-couchbase/
    title: "Haveli completes acquisition of Couchbase"
  - id: lf-coss-2025
    resource: https://www.linuxfoundation.org/press/linux-foundation-cossa-and-serena-report-shows-venture-investment-in-open-source-outperforms-proprietary-counterparts-and-benefits-communities
    title: "LF/COSSA/Serena: State of Commercial Open Source 2025"
  - id: cb-h1-2026
    resource: https://news.crunchbase.com/venture/global-startup-exits-ipo-ma-soar-ai-q2-h1-2026/
    title: "Crunchbase: H1 2026 venture and exits"
---

# Summary

COSS capital was abundant but **concentrated**, and exits happened **through M&A, not IPOs**.

- **Public cohort shrank.** HashiCorp went to IBM for $6.4B[^tc-ibm-hashicorp], Couchbase to Haveli[^couchbase-close] and Confluent to IBM for about $11B.[^ibm-confluent-close] No US COSS company went public between Oct 2024 and Oct 2026. The only open-weight IPOs were Zhipu and MiniMax in Hong Kong.
- **Private mega-rounds replaced IPOs.** Databricks raised at $134B and then $190B, ClickHouse at about $15B, Temporal at $12.55B, Supabase at $10.5B and Grafana at a reported ~$9B. H1 2026 venture funding hit a record, with more than 70% going to AI.[^cb-h1-2026]
- **Point tools were rolled up into platforms:**
  - Fivetran bought Tobiko, merged with dbt Labs and took over Great Expectations.
  - Prefect bought Dagster.
  - IBM bought HashiCorp, then DataStax/Langflow, then Confluent.
  - Snowflake bought Crunchy; Databricks bought Neon and Tabular.
- **The COSS valuation premium still exists.** LF/COSSA found COSS companies reach IPO at 7x and M&A at 14x the valuations of comparable closed-source peers.[^lf-coss-2025]

# Deal list

| Window | Deal | Link |
|---|---|---|
| W24 | IBM–HashiCorp closes ($6.4B) | [event](/events/2025-02-ibm-completes-hashicorp-acquisition.md) |
| W24 | IBM–DataStax (Langflow) closes | [event](/events/2025-05-ibm-closes-datastax-langflow.md) |
| W24 | Databricks–Neon (~$1B); Snowflake–Crunchy (~$250M) | [Neon](/events/2025-05-databricks-acquires-neon.md), [Crunchy](/events/2025-06-snowflake-acquires-crunchy-data.md) |
| W24 | Fivetran–Tobiko; Couchbase taken private | [Tobiko](/events/2025-09-fivetran-acquires-tobiko-data.md), [Couchbase](/events/2025-09-couchbase-taken-private-by-haveli.md) |
| W12 | dbt Labs–Fivetran merger; IBM–Confluent announced; Palo Alto–Chronosphere ($3.35B) | [dbt](/events/2025-10-dbt-labs-fivetran-merger.md), [Confluent](/events/2025-12-ibm-acquires-confluent.md), [Chronosphere](/events/2025-11-palo-alto-acquires-chronosphere.md) |
| W9 | IBM closes Confluent; EQT explores a SUSE sale | [SUSE](/events/2026-03-eqt-explores-suse-sale.md) |
| W3 | Prefect–Dagster; Supabase–Turso; NVIDIA–Hugging Face | [Dagster](/events/2026-07-prefect-acquires-dagster.md), [Turso](/events/2026-10-supabase-acquires-turso.md), [HF](/events/2026-09-nvidia-to-acquire-hugging-face.md) |

# Public COSS companies still listed

- MongoDB re-accelerated to +30% growth, then lost its CEO to Meta ([event](/events/2026-09-mongodb-ceo-departs-for-meta.md)).
- Elastic grew a steady +15–17%.
- GitLab is struggling ([event](/events/2026-06-gitlab-layoffs-restructuring.md)).

See [IPOs and public companies](/projects/coss-market/coss-ipos-and-public-companies.md).

# Implications

- Exits now come mostly from strategic buyers: IBM, NVIDIA, cloud vendors, data platforms and AI labs.
- Mid-cap public COSS companies without an AI growth story are takeover targets.
- Watch for a 2027 IPO window (Databricks, ClickHouse, Grafana, Supabase) after the large AI-lab IPOs.

# Related

- [COSS M&A 2024–2026 (market study)](/projects/coss-market/coss-ma-2024-2026.md), [COSS funding](/projects/coss-market/coss-funding-2024-2026.md)
- [AI labs and compute owners bought the stack](/trends/ai-labs-and-compute-owners-buy-the-stack.md)

[^tc-ibm-hashicorp]: TechCrunch.
[^ibm-confluent-close]: IBM Newsroom.
[^couchbase-close]: Couchbase press release.
[^lf-coss-2025]: Linux Foundation press release.
[^cb-h1-2026]: Crunchbase News.
