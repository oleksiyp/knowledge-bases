---
type: Event
title: "Oracle launches Autonomous Data Warehouse, the first 'self-driving' database service"
description: "In March 2018 Oracle made Autonomous Data Warehouse available, the first service of the Autonomous Database announced by Larry Ellison in October 2017; Autonomous Transaction Processing followed in August 2018."
date: 2018-03-27
year: 2018
kind: launch
signal: mixed
ideas: [ideas/ml-for-db/self-driving-databases, ideas/ml-for-db/automatic-indexing-and-plan-correction]
systems: [systems/oracle-autonomous-database]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: lightreading
    resource: https://www.lightreading.com/it-infrastructure/oracle-launches-autonomous-data-warehouse-cloud
    title: "Light Reading: Oracle Launches Autonomous Data Warehouse Cloud"
  - id: siliconangle
    resource: https://siliconangle.com/2018/03/27/oracle-serves-autonomous-data-warehouse-cloud-seasoned-amazon-bashing/
    title: "SiliconANGLE: Oracle serves up its Autonomous Data Warehouse Cloud, seasoned with Amazon-bashing (2018-03-27)"
  - id: infoage
    resource: https://www.information-age.com/oracles-larry-ellison-unveils-worlds-first-autonomous-database-cloud-7976/
    title: "Information Age: Oracle's Larry Ellison unveils the world's first autonomous database cloud"
  - id: atp
    resource: https://www.oracle.com/asean/corporate/pressrelease/oracle-autonomous-transaction-processing-2018-08-07.html
    title: "Oracle: Larry Ellison Announces Availability of Oracle Autonomous Transaction Processing (2018-08-07)"
  - id: foote
    resource: https://richardfoote.wordpress.com/2019/03/22/intro-initial-thoughts-on-oracle-autonomous-database-cloud-services-automatic-for-the-people/
    title: "Richard Foote: Initial Thoughts On Oracle Autonomous Database Cloud Services (2019)"
---

# What happened

On 27 March 2018, at Oracle headquarters, Larry Ellison announced the availability of Autonomous Data Warehouse (ADW). He called it "the world's first self-driving, self-securing, self-repairing database cloud service", promised "half the cost" of AWS, and took more shots at Amazon.[^lightreading][^siliconangle] This delivered the "self-driving database" Larry Ellison had announced at OpenWorld in October 2017. He had claimed it would provision, patch, update and tune itself "without any human intervention whatsoever", with under 30 minutes of downtime a year.[^infoage] Autonomous Transaction Processing followed on 7 August 2018.[^atp]

# Why it matters

This launch turned "autonomous database" from a research term (CMU's self-driving DBMS) into a vendor category. What shipped was mostly operational automation on Exadata. Early users found key tuning features missing ("Workload Optimization – coming soon") and user index creation disabled in ADW.[^foote] It marks the peak of the autonomous-database hype. The lasting result was cloud-ops automation, not ML autonomy.

# Related

- [Oracle Autonomous Database](/systems/oracle-autonomous-database.md)
- [Self-driving databases](/ideas/ml-for-db/self-driving-databases.md)

[^lightreading]: Light Reading.
[^infoage]: Information Age, October 2017.
[^siliconangle]: SiliconANGLE, 2018-03-27.
[^atp]: Oracle press release.
[^foote]: Richard Foote, 2019.
