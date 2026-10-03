---
type: Organization
title: Snowflake
description: Public cloud data-warehouse company that turned "open" — co-creating Apache Polaris (TLP Feb 2026), launching the Open Semantic Interchange, open-sourcing pg_lake and adopting Iceberg v3 — while buying Crunchy Data and Observe.
resource: https://www.snowflake.com
tags: [public-company, data-warehouse, iceberg, polaris]
org_kind: public-company
hq: Menlo Park, California, USA (relocated 2025)
funding: { total_usd: "n/a (public, NYSE: SNOW)", last_round: "n/a", last_round_date: null, valuation_usd: "n/a" }
business_verdict: growing
projects: [projects/data-engineering/apache-polaris, projects/data-engineering/apache-iceberg, projects/ai-apps/streamlit]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: snow-wiki
    resource: https://en.wikipedia.org/wiki/Snowflake_Inc.
    title: "Wikipedia: Snowflake Inc. (FY results, acquisitions, Openflow)"
  - id: polaris-grad
    resource: https://www.snowflake.com/en/blog/apache-polaris-top-level-project/
    title: "Snowflake: Apache Polaris graduates to Top-Level Project"
  - id: snow-osi
    resource: https://www.snowflake.com/en/blog/open-semantic-interchange-ai-standard/
    title: "Snowflake: Open Semantic Interchange (2025-09-23)"
  - id: snow-v3
    resource: https://docs.snowflake.com/en/release-notes/2026/other/2026-03-04-iceberg-v3-support-preview
    title: "Snowflake release note: Iceberg v3 support (preview), 2026-03-04"
  - id: pglake-gh
    resource: https://github.com/Snowflake-Labs/pg_lake
    title: "Snowflake-Labs/pg_lake GitHub repository (Apache-2.0, created 2025-11-04)"
  - id: contrary-rp
    resource: https://research.contrary.com/company/redpanda
    title: "Contrary Research: Redpanda (Snowflake talks Jan 2025)"
  - id: db-reg-pgbackrest
    resource: https://www.theregister.com/databases/2026/05/20/postgresql-backup-tool-gets-some-backup-of-its-own-after-sole-maintainer-sounds-alarm/5242822
    title: "The Register: pgBackRest gets backing after sole maintainer sounds alarm (2026-05-20)"
  - id: db-gn-snowpg
    resource: https://www.snowflake.com/en/engineering-blog/postgres-public-preview/
    title: "Snowflake engineering blog: Snowflake Postgres is now available in public preview (2025-12-17)"
    author: org:snowflake
  - id: sc-snow-10q-streamlit
    resource: https://www.sec.gov/Archives/edgar/data/1640147/000164014722000044/snow-20220430.htm
    title: "Snowflake Form 10-Q (quarter ended 2022-04-30): Streamlit acquisition"
  - id: sc-sis-ga
    resource: https://docs.snowflake.com/en/release-notes/2026/other/2026-03-09-sis-container-runtime-ga
    title: "Snowflake: Streamlit in Snowflake container runtime GA (2026-03-09)"
  - id: sc-jf-members
    resource: https://jupyterfoundation.org/members/
    title: Jupyter Foundation members (Snowflake listed as premier member)
  - id: aiapps-streamlit-gh
    resource: https://github.com/streamlit/streamlit
    title: Streamlit GitHub repository (GitHub API, 2026-10-03)
---

# Summary
Snowflake's open-source strategy in 2024–2026 centered on Iceberg interoperability: it co-created Apache Polaris with Dremio (ASF TLP 2026-02-18)[^polaris-grad], launched the vendor-neutral Open Semantic Interchange with 16 partners on 2025-09-23[^snow-osi], open-sourced pg_lake (Postgres ↔ Iceberg/lake, Apache-2.0, Nov 2025; ~1.6k stars)[^pglake-gh] and previewed Iceberg v3 support in March 2026[^snow-v3]. Business: acquired Crunchy Data (~$250M, June 2025), launched Openflow (Apache NiFi-based managed integration), agreed to acquire Observe (Jan 2026), and reported FY revenue of $4.72B with Q4 product revenue $1.23B (+30% YoY) in Feb 2026[^snow-wiki]. It reportedly explored buying Redpanda (Jan 2025)[^contrary-rp]. Verdict: **growing**.

# Business timeline
| Date | Event |
|---|---|
| 2025-01 | Redpanda acquisition talks reported[^contrary-rp] |
| 2025-06 | Acquires Crunchy Data (~$250M); Openflow launch[^snow-wiki] |
| 2025-09-23 | Open Semantic Interchange launched[^snow-osi] |
| 2025-11-04 | pg_lake repository created (Apache-2.0)[^pglake-gh] |
| 2026-01 | Agreement to acquire Observe[^snow-wiki] |
| 2026-02 | FY revenue $4.72B; Q4 product revenue +30%[^snow-wiki] |
| 2026-02-18 | Polaris graduates to ASF TLP[^polaris-grad] |
| 2026-03-04 | Iceberg v3 preview[^snow-v3] |

# Monetization model
Consumption-based proprietary cloud warehouse; OSS used as interoperability/on-ramp (Polaris, pg_lake, OSI) rather than as the product.

# Successes
- Re-accelerated growth (+30% product revenue) while repositioning as Iceberg-friendly[^snow-wiki].

# Failures / risks
- 2024 customer-credential breach fallout (legal case ongoing into 2026)[^snow-wiki].

# Related
- [Apache Polaris](/projects/data-engineering/apache-polaris.md), [Apache Iceberg](/projects/data-engineering/apache-iceberg.md), [Cube](/projects/data-engineering/cube.md), [Polaris graduates](/events/2026-02-apache-polaris-graduates.md)

[^snow-wiki]: Wikipedia, Snowflake Inc.
[^polaris-grad]: Snowflake blog.
[^snow-osi]: Snowflake blog, OSI.
[^snow-v3]: Snowflake release notes.
[^pglake-gh]: pg_lake GitHub.
[^contrary-rp]: Contrary Research.

## Additional notes (databases)
- **Snowflake Postgres:** Built on Crunchy Data. It reached public preview on 2025-12-17[^db-gn-snowpg] (further 2026 announcements not re-verified in pass 2).
- **OSS side-effect of the Crunchy deal:** pgBackRest's maintainer of 13 years (ex-Crunchy) said in Apr 2026 he could no longer maintain it without a sponsor. AWS, Percona, Supabase, pgEdge and Tiger Data announced joint funding on 2026-05-20[^db-reg-pgbackrest]. See [/events/2026-05-pgbackrest-consortium-rescue.md](/events/2026-05-pgbackrest-consortium-rescue.md).

[^db-gn-snowpg]: Snowflake engineering blog, 2025-12-17.
[^db-reg-pgbackrest]: The Register, 2026-05-20.

## Additional notes (scientific-computing)
- **Streamlit owner:** Snowflake acquired Streamlit in March 2022 (agreement ~$800M; acquisition-date fair value $650.8M)[^sc-snow-10q-streamlit]. It keeps the framework Apache-2.0 and fast-moving (≈27 minor releases Oct 2024–Oct 2026). It monetizes through Streamlit in Snowflake, whose container runtime went GA on 2026-03-09[^sc-sis-ga]. See [/projects/scientific-computing/streamlit.md](/projects/scientific-computing/streamlit.md).
- **Jupyter Foundation premier member** (listed by Oct 2026)[^sc-jf-members].

[^sc-snow-10q-streamlit]: https://www.sec.gov/Archives/edgar/data/1640147/000164014722000044/snow-20220430.htm
[^sc-sis-ga]: https://docs.snowflake.com/en/release-notes/2026/other/2026-03-09-sis-container-runtime-ga
[^sc-jf-members]: https://jupyterfoundation.org/members/

## Additional notes (ai-apps)
- Streamlit (acquired 2022) remains Apache-2.0 with ~46k stars and roughly bi-weekly releases (1.65.0 on 2026-10-02), a common front end for LLM chat/data apps and the basis of Streamlit in Snowflake[^aiapps-streamlit-gh]. See [/projects/ai-apps/streamlit.md](/projects/ai-apps/streamlit.md).

[^aiapps-streamlit-gh]: GitHub API — https://github.com/streamlit/streamlit
