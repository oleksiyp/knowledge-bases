---
type: OSS Project
title: Apache Polaris
description: Snowflake/Dremio-donated Iceberg REST catalog that graduated to an Apache TLP in Feb 2026 and ships monthly; the leading vendor-neutral catalog in the post-format-war "catalog war".
resource: https://github.com/apache/polaris
tags: [catalog, iceberg, apache-2.0, asf, breakout]
domain: data-engineering
license: Apache-2.0
license_history: ["Apache-2.0 (2024-)"]
governance: foundation
steward: Apache Software Foundation
backing_orgs: [organizations/snowflake]
metrics:
  github_stars: { value: 2078, as_of: 2026-10-03 }
  contributors: { value: 100, as_of: 2026-02-19, note: "approx., per graduation post" }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: polaris-100
    resource: https://polaris.apache.org/downloads/1.0.0/
    title: "Apache Polaris 1.0.0-incubating (released 2025-07-09)"
  - id: reg-sap-dremio
    resource: https://www.theregister.com/software/2026/05/05/sap-dives-deeper-into-iceberg-with-dremio-acquisition/5226560
    title: "The Register: SAP dives deeper into Iceberg with Dremio acquisition (2026-05-05)"
  - id: sap-dremio-close
    resource: https://news.sap.com/2026/07/sap-completes-dremio-acquisition/
    title: "SAP News: SAP Completes Dremio Acquisition (2026-07-06)"
  - id: polaris-gh
    resource: https://github.com/apache/polaris
    title: Apache Polaris GitHub repository (releases 1.4.0 → 1.8.0)
    last_modified: 2026-10-03T00:00:00Z
  - id: polaris-grad
    resource: https://polaris.apache.org/blog/2026/02/19/apache-polaris-graduates-to-top-level-project/
    title: Apache Polaris Graduates to Top Level Project!
  - id: dremio-polaris
    resource: https://www.dremio.com/blog/apache-polaris-graduates-to-a-top-level-apache-project/
    title: "Dremio: Apache Polaris graduates to a Top-Level Apache Project"
  - id: asf-grad
    resource: https://news.apache.org/foundation/entry/the-apache-software-foundation-graduates-two-open-source-projects-from-incubator
    title: "ASF: The ASF graduates two open source projects from Incubator (Gluten, Polaris)"
---

# Summary
Polaris implements the Iceberg REST catalog API so any engine (Spark, Flink, Trino, Doris, StarRocks, Dremio) can share governed Iceberg tables. Co-created by Snowflake and Dremio and donated to the ASF in August 2024, it graduated to a Top-Level Project on 2026-02-18 after ~18 months, six incubating releases, 2,800+ merged PRs and ~100 contributors[^polaris-grad][^dremio-polaris][^asf-grad]. PMC members now span Dremio, Snowflake, Google, Microsoft, Confluent and LanceDB[^polaris-grad]. It ships roughly monthly (1.4.0 April 2026 → 1.8.0 Sept 2026)[^polaris-gh]. Co-creator Dremio was acquired by SAP (announced May 2026, closed 2026-07-06), with SAP saying it will build on Apache Polaris and the Iceberg REST Catalog API[^reg-sap-dremio][^sap-dremio-close]. Verdict: growing, credible neutral alternative to Databricks' Unity Catalog.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2024-08 | Donated to ASF Incubator by Snowflake & Dremio[^polaris-grad] | OSS | + |
| W9 | 2026-02-18 | Graduates to Apache TLP[^polaris-grad][^asf-grad] | OSS | + |
| W6 | 2026-04-21 | Polaris 1.4.0[^polaris-gh] | OSS | + |
| W6 | 2026-05-05 | SAP agrees to acquire co-creator Dremio, pledges to build on Polaris[^reg-sap-dremio] | Business | ± |
| W6 | 2026-05-18 | Polaris 1.5.0[^polaris-gh] | OSS | + |
| W3 | 2026-07-06 | SAP completes Dremio acquisition[^sap-dremio-close] | Business | ± |
| W3 | 2026-07-09 / 08-02 / 09-28 | 1.6.0, 1.7.0, 1.8.0[^polaris-gh] | OSS | + |

# OSS successes
- Fast graduation with diverse PMC (multiple competing vendors)[^polaris-grad].
- High release cadence in 2026[^polaris-gh].

# OSS failures / risks
- Star count modest (~2.1k)[^polaris-gh]; real adoption largely via vendor products (Snowflake Open Catalog, Dremio).
- Competes with Unity Catalog OSS, Gravitino, AWS/Google native catalogs.

# Business successes
- Gives Snowflake a credible "open" story against Databricks.

# Business failures / risks
- n/a (no standalone company). Vendor concentration risk: one of the two founding vendors (Dremio) is now inside SAP[^sap-dremio-close].

# By window
## W3
- Releases 1.6–1.8[^polaris-gh]; SAP closes Dremio deal (07-06)[^sap-dremio-close].
## W6
- SAP agrees to buy Dremio (May 2026)[^reg-sap-dremio].
- 1.4 and 1.5 releases[^polaris-gh].
## W9
- TLP graduation[^polaris-grad].
## W12
- Incubating 1.x releases (1.3.0 among six incubating releases)[^polaris-grad].
## W24
- Incubation progress; 1.0.0-incubating released 2025-07-09[^polaris-100].

# Lessons
- Donating to the ASF with a co-founder competitor (Dremio) accelerated neutrality and graduation.

# Related
- [Apache Iceberg](/projects/data-engineering/apache-iceberg.md), [Unity Catalog](/projects/data-engineering/unity-catalog.md), [Apache Gravitino](/projects/data-engineering/apache-gravitino.md), [Snowflake](/organizations/snowflake.md), [Polaris graduates](/events/2026-02-apache-polaris-graduates.md)

[^polaris-gh]: Apache Polaris GitHub releases.
[^polaris-grad]: Apache Polaris blog, 2026-02-19.
[^dremio-polaris]: Dremio blog.
[^asf-grad]: ASF news.
[^polaris-100]: Apache Polaris 1.0.0 download page.
[^reg-sap-dremio]: The Register, 2026-05-05.
[^sap-dremio-close]: SAP News, 2026-07-06.
