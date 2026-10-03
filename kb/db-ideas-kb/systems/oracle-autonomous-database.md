---
type: System
title: Oracle Autonomous Database
description: "Oracle's managed 'self-driving' database cloud service, announced by Larry Ellison in October 2017 and launched in 2018 (Autonomous Data Warehouse in March, Autonomous Transaction Processing in August). Renamed 'Autonomous AI Database' in 2025. It defined the 'autonomous database' marketing category; its real substance is heavy operational automation on Exadata plus automatic indexing."
resource: https://www.oracle.com/autonomous-database/
tags: [oracle, autonomous-database, cloud-service, exadata, auto-indexing]
kind: cloud-service
first_release: 2018
org: "Oracle"
license: proprietary
outcome: stable
ideas: [ideas/ml-for-db/self-driving-databases, ideas/ml-for-db/automatic-indexing-and-plan-correction]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: infoage
    resource: https://www.information-age.com/oracles-larry-ellison-unveils-worlds-first-autonomous-database-cloud-7976/
    title: "Information Age: Larry Ellison unveils the world's first autonomous database cloud (Oct 2017)"
  - id: tc-2017
    resource: https://techcrunch.com/2017/10/02/larry-ellison-pokes-aws-while-unveiling-intelligent-database-service-at-oracle-openworld-keynote/
    title: "TechCrunch: Larry Ellison pokes AWS while unveiling intelligent database service (2017-10-02)"
  - id: lightreading-adw
    resource: https://www.lightreading.com/it-infrastructure/oracle-launches-autonomous-data-warehouse-cloud
    title: "Light Reading: Oracle Launches Autonomous Data Warehouse Cloud (2018)"
  - id: atp-pr
    resource: https://www.oracle.com/asean/corporate/pressrelease/oracle-autonomous-transaction-processing-2018-08-07.html
    title: "Oracle press release: Larry Ellison Announces Availability of Oracle Autonomous Transaction Processing (2018-08-07)"
  - id: foote
    resource: https://richardfoote.wordpress.com/2019/03/22/intro-initial-thoughts-on-oracle-autonomous-database-cloud-services-automatic-for-the-people/
    title: "Richard Foote: Initial Thoughts On Oracle Autonomous Database Cloud Services (2019)"
  - id: sla
    resource: https://blogs.oracle.com/autonomous-ai-database/autonomous-database-updated-sla
    title: "Oracle blog: 99.995% availability SLA with Autonomous Data Guard"
  - id: oracle-26ai
    resource: https://www.oracle.com/news/announcement/ai-world-database-26ai-powers-the-ai-for-data-revolution-2025-10-14/
    title: "Oracle: Oracle AI Database 26ai (2025-10-14)"
  - id: oracle-autoidx
    resource: https://dl.acm.org/doi/abs/10.14778/3750601.3750616
    title: "Automatic Indexing in Oracle (PVLDB 18, 2025)"
---

# Summary

At OpenWorld on 2 October 2017, Larry Ellison announced a database that "automatically provisions itself, patches itself, updates itself, tunes itself, without any human intervention whatsoever". He promised 99.995% availability, under 30 minutes of downtime a year, and contrasted it with AWS's 99.95%.[^infoage][^tc-2017] Autonomous Data Warehouse launched in March 2018 and Autonomous Transaction Processing in August 2018.[^lightreading-adw][^atp-pr] The service runs on Exadata in OCI, later also on dedicated infrastructure, Cloud@Customer and other clouds. In October 2025 Oracle rebranded its database as "Oracle AI Database 26ai" and the service as "Autonomous AI Database".[^oracle-26ai]

# Timeline

| Date | Event |
|---|---|
| 2017-10-02 | Announced at OpenWorld |
| Mar 2018 | Autonomous Data Warehouse available |
| Aug 2018 | Autonomous Transaction Processing available |
| 2019 | Oracle 19c automatic indexing, used in ADB; early reviews say "not there yet" |
| 2022 | 99.995% SLA, but only with an Autonomous Data Guard standby; the baseline stays 99.95% |
| Oct 2025 | Renamed Autonomous AI Database; marketing turns to AI vector search and agents |

# What worked

- Real operational automation: provisioning, patching, backups, scaling and failover without a customer DBA. This is what every major cloud database service now does.
- Automatic indexing in Oracle uses validate-before-publish and was documented in PVLDB 2025.[^oracle-autoidx]
- It gave Oracle a cloud story for its installed base and set the vocabulary ("self-driving", "autonomous") that competitors and researchers used.

# What didn't

- **The claims.** Early ADW disabled user index creation and listed workload optimization as "coming soon". Oracle expert Richard Foote: "are we there yet? ... In a word, no."[^foote]
- **The SLA.** The headline 99.995% needs a paid standby. The baseline SLA is the same 99.95% Ellison derided at launch.[^sla]
- **"No DBA" did not happen.** Data modelling, SQL quality and application design still need humans, and Oracle DBAs remain a large profession. Oracle does not break out ADB revenue, so adoption numbers can't be checked (unconfirmed).

# Related

- Ideas: [Self-driving databases](/ideas/ml-for-db/self-driving-databases.md), [Automatic indexing and plan correction](/ideas/ml-for-db/automatic-indexing-and-plan-correction.md)
- Event: [Oracle ADW launch](/events/2018-03-oracle-autonomous-data-warehouse-launch.md)
- Related systems: [Azure SQL automatic tuning](/systems/azure-sql-automatic-tuning.md)

[^infoage]: Information Age.
[^tc-2017]: TechCrunch.
[^lightreading-adw]: Light Reading.
[^atp-pr]: Oracle press release, 2018-08-07.
[^foote]: Richard Foote, 2019-03-22.
[^sla]: Oracle blog.
[^oracle-26ai]: Oracle, 2025-10-14.
[^oracle-autoidx]: PVLDB 18.
