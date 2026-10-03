---
type: System
title: EDB (EnterpriseDB)
description: "The largest dedicated enterprise Postgres vendor (Oracle-compatible EDB Postgres Advanced Server, support, BigAnimal DBaaS), now branded EDB Postgres AI. Private-equity owned since 2019, it absorbed 2ndQuadrant in 2020. It is steady but no longer where Postgres's growth or valuations are."
resource: https://www.enterprisedb.com
tags: [postgres, enterprise, oracle-compatibility, private-equity, support]
kind: product
first_release: 2004
org: "EnterpriseDB Corp. (Great Hill Partners 2019; Bain Capital majority 2022)"
outcome: stable
ideas: [ideas/postgres-ecosystem/postgres-hosting-consolidation, ideas/postgres-ecosystem/pluggable-storage-engines]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: edb-2ndq
    resource: https://www.enterprisedb.com/news/edb-completes-acquisition-2ndquadrant-becomes-largest-dedicated-provider-postgresql-products
    title: "EDB completes acquisition of 2ndQuadrant (2020-09-30)"
    author: org:edb
  - id: bain-edb
    resource: https://www.baincapital.com/news/edb-leading-global-provider-enterprise-class-software-and-services-postgres-announces-majority
    title: "Bain Capital: majority growth investment in EDB (2022-06-07)"
  - id: zheap-wiki
    resource: https://wiki.postgresql.org/wiki/Zheap
    title: "PostgreSQL wiki: Zheap"
  - id: desdelinux-2ndq
    resource: "https://blog.desdelinux.net/en/2ndquadrant's-acquisition-by-enterprisedb-could-be-a-danger-to-the-community/"
    title: "DesdeLinux: 2ndQuadrant's acquisition by EnterpriseDB could be a danger to the community (2020)"
  - id: edb-wiki
    resource: https://en.wikipedia.org/wiki/EnterpriseDB
    title: "Wikipedia: EnterpriseDB (fallback for corporate history)"
---

# Summary
EDB is the incumbent enterprise Postgres company. Its core business is support plus EDB Postgres Advanced Server, which adds Oracle compatibility for customers leaving Oracle. Great Hill Partners bought it in 2019. On Sept 30 2020 it completed the acquisition of 2ndQuadrant, giving it more than 500 employees, 26 Postgres contributors and committers, and over 5,000 lifetime customers[^edb-2ndq]. Bain Capital took a majority stake in June 2022, citing Postgres as the fastest-growing DBMS in an ~$80B market and its BigAnimal DBaaS as a growth area[^bain-edb]. EDB also originated zheap, the undo-based heap replacement, which never shipped[^zheap-wiki]. By 2024–26 it had rebranded around "EDB Postgres AI"[^edb-wiki]. The visible growth, money and talent in Postgres, though, went to developer-first clouds (Neon, Supabase) and data platforms (Databricks, Snowflake).

# Timeline
| Date | Event |
|---|---|
| 2018 | zheap development led by EDB engineers[^zheap-wiki] |
| 2019 | Acquired by Great Hill Partners[^bain-edb] |
| 2020-09-30 | Completes 2ndQuadrant acquisition[^edb-2ndq] |
| 2022-06-07 | Bain Capital majority investment[^bain-edb] |
| 2024–25 | Rebrand around EDB Postgres AI[^edb-wiki] |

# What worked
- Concentrated much of the community's committer talent and remains a major upstream contributor[^edb-2ndq].
- A durable niche in regulated enterprises and Oracle migrations, where support contracts and compatibility matter.

# What didn't
- The 2ndQuadrant merger concentrated influence over Postgres development in one company, which worried parts of the community[^desdelinux-2ndq].
- Its own DBaaS (BigAnimal) did not become a major player next to RDS/Aurora, Azure, Neon and Supabase.
- Its storage-engine R&D (zheap) did not reach production[^zheap-wiki].

# Related
- [Postgres hosting consolidation](/ideas/postgres-ecosystem/postgres-hosting-consolidation.md), [Pluggable storage engines](/ideas/postgres-ecosystem/pluggable-storage-engines.md)
- [PostgreSQL](/systems/postgresql.md), [Crunchy Data](/systems/crunchy-data.md)
