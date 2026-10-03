---
type: Idea
title: "Self-driving / autonomous databases"
description: "A DBMS that tunes, indexes, scales and repairs itself with no DBA. As a research system (CMU Peloton, then NoisePage) it was abandoned. As a product category, Oracle's 2017–18 'Autonomous Database' set the marketing term. In practice 'autonomous' turned out to mean a well-automated managed cloud service, which did win, mostly through rules, fleet telemetry and narrow ML rather than a self-driving brain."
tags: [autonomous-database, self-driving, automation, oracle, cmu]
area: ml-for-db
verdict: mixed
hype_peak: 2018
adoption_2026: common
origins: "IBM autonomic computing / DB2 self-tuning and Microsoft AutoAdmin (late 1990s–2000s); Pavlo et al., 'Self-Driving Database Management Systems' (CIDR 2017)."
key_systems: [systems/oracle-autonomous-database, systems/peloton, systems/noisepage, systems/azure-sql-automatic-tuning, systems/ottertune]
related_ideas: [ideas/ml-for-db/ml-knob-tuning, ideas/ml-for-db/automatic-indexing-and-plan-correction, ideas/ml-for-db/instance-optimized-systems, ideas/ml-for-db/llm-database-tuning-and-diagnosis]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: peloton-cidr
    resource: https://db.cs.cmu.edu/papers/2017/p42-pavlo-cidr17.pdf
    title: "Pavlo et al.: Self-Driving Database Management Systems (CIDR 2017)"
  - id: electric-sheep
    resource: https://db.cs.cmu.edu/papers/2021/p3211-pavlo.pdf
    title: "Pavlo et al.: Make Your Database System Dream of Electric Sheep: Towards Self-Driving Operation (PVLDB 14(12), 2021)"
  - id: dbdb-noisepage
    resource: https://dbdb.io/db/noisepage
    title: "Database of Databases: NoisePage"
  - id: firebolt-pavlo
    resource: https://www.firebolt.io/blog/vector-databases-wont-replace-sql---andy-pavlo
    title: "Firebolt: Vector Databases Won't Replace SQL – Andy Pavlo (interview)"
  - id: tc-ellison-2017
    resource: https://techcrunch.com/2017/10/02/larry-ellison-pokes-aws-while-unveiling-intelligent-database-service-at-oracle-openworld-keynote/
    title: "TechCrunch: Larry Ellison pokes AWS while unveiling intelligent database service (2017-10-02)"
  - id: infoage-ellison
    resource: https://www.information-age.com/oracles-larry-ellison-unveils-worlds-first-autonomous-database-cloud-7976/
    title: "Information Age: Oracle's Larry Ellison unveils the world's first autonomous database cloud"
  - id: foote
    resource: https://richardfoote.wordpress.com/2019/03/22/intro-initial-thoughts-on-oracle-autonomous-database-cloud-services-automatic-for-the-people/
    title: "Richard Foote: Initial Thoughts On Oracle Autonomous Database Cloud Services (2019-03-22)"
  - id: oracle-sla
    resource: https://blogs.oracle.com/autonomous-ai-database/autonomous-database-updated-sla
    title: "Oracle: Autonomous Database now provides a 99.995% availability SLA with Autonomous Data Guard"
  - id: azure-autotune
    resource: https://learn.microsoft.com/en-us/azure/azure-sql/database/automatic-tuning-overview?view=azuresql
    title: "Microsoft Learn: Automatic tuning overview – Azure SQL"
  - id: ottertune-dead
    resource: https://news.ycombinator.com/item?id=40690380
    title: "Hacker News: OtterTune shuts down, cites failed acquisition by a 'PE Postgres' company (June 2024)"
  - id: dbgym
    resource: https://github.com/cmu-db/dbgym
    title: "cmu-db/dbgym: Database Gym"
  - id: oracle-26ai
    resource: https://www.oracle.com/news/announcement/ai-world-database-26ai-powers-the-ai-for-data-revolution-2025-10-14/
    title: "Oracle: Oracle AI Database 26ai Powers the AI for Data Revolution (2025-10-14)"
---

# Summary

**Verdict: mixed.** Two versions of the idea ran in parallel, and they ended differently.

- **The research version failed to produce a system.** CMU's self-driving DBMS meant a database designed from scratch so that ML models forecast the workload and choose actions. Peloton was dropped in 2018. Its rewrite, NoisePage, was abandoned around 2021 and archived in 2023.[^dbdb-noisepage] The commercial spin-off OtterTune shut down in June 2024.[^ottertune-dead]
- **The product version succeeded as a label for managed services.** Oracle launched "Autonomous Database" in 2018, and every cloud now automates patching, backups, scaling, failover and some index and plan tuning. The "no humans" claims were overstated, though. Oracle's own baseline SLA ended up at the same 99.95% Ellison had mocked AWS for in 2017.[^oracle-sla][^tc-ellison-2017] Most of the automation is rules plus fleet telemetry, not a learned controller.

# The idea

Pavlo et al. (CIDR 2017) proposed a DBMS that forecasts its workload, models the cost and benefit of actions (indexes, knobs, partitioning, scaling) and applies them without humans. Workload forecasting (QueryBot 5000, SIGMOD 2018) was the first component.[^peloton-cidr] At OpenWorld on 2 October 2017, Larry Ellison announced Oracle's version: a database that "provisions itself, patches itself, updates itself, tunes itself, without any human intervention", with less than 30 minutes of downtime a year (99.995%).[^infoage-ellison]

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| Mar / Aug 2018 | Oracle Autonomous Data Warehouse, then Autonomous Transaction Processing, become available | + |
| 2018 | CMU abandons Peloton and starts NoisePage from scratch | − |
| 2019 | Azure SQL publishes auto-indexing of millions of databases; Oracle 19c adds automatic indexing | + |
| 2019 | Practitioner reviews of Oracle ADB: "are we there yet? ... In a word, no" | − |
| 2020 | NoisePage first release announced (Oct 2020); OtterTune company launches | + |
| 2021 | "Dream of Electric Sheep" paper lays out the full self-driving pipeline[^electric-sheep] | + |
| 2021 | NoisePage development stops; CMU research moves to tuning PostgreSQL | − |
| 2022 | AWS hires Tim Kraska's group to bring "instance optimization" to Redshift | + |
| Feb 2023 | NoisePage repository archived; Database Gym takes its place | − |
| Jun 2024 | OtterTune shuts down after a failed acquisition | − |
| Oct 2025 | Oracle renames its flagship "Oracle AI Database 26ai" and the cloud service "Autonomous AI Database". The new marketing is about AI agents[^oracle-26ai] | ± |

# What succeeded

- **Automating operations in managed clouds.** Provisioning, patching, backup, HA, storage growth and scaling are now automatic in Aurora, Azure SQL, Cloud SQL, AlloyDB, Snowflake and Oracle ADB. Removing routine DBA work is a real, mainstream outcome. It was delivered by cloud control planes, not by a learned DBMS.
- **Narrow, validated tuning loops.** Azure SQL's automatic plan correction and auto-indexing run across millions of databases with automatic verification and rollback.[^azure-autotune] See [automatic indexing](/ideas/ml-for-db/automatic-indexing-and-plan-correction.md).
- **The research produced reusable infrastructure.** Forecasting, behaviour modelling and the action-planning framework were published. Database Gym now packages the pipeline for other researchers.[^dbgym]

# What failed

- **Building a new DBMS around ML.** NoisePage tried to build an entire engine and a self-driving brain at once. Pavlo later gave the reasons: he was "spreading [himself] too thin" after the startup forked off, the pandemic swelled the team to about 35 students, and "we didn't have actually a good query optimizer".[^firebolt-pavlo]
- **"Zero DBA" as a promise.** Early Oracle ADW disabled user-created indexes and listed workload optimization as "coming soon". The DBA community did not take the "no humans" claims at face value.[^foote]
- **Selling autonomy as a standalone product.** OtterTune ([ML knob tuning](/ideas/ml-for-db/ml-knob-tuning.md)) could not build a large enough business on top of other vendors' databases.

# Why

1. **Most DBA toil is operational, not optimization.** Backups, upgrades, failover and capacity are solved with deterministic automation and a control plane. Those are exactly what managed services sell. ML was needed for only a thin layer of the problem.
2. **Whoever owns the control plane owns autonomy.** Microsoft, Oracle and AWS see telemetry from millions of instances and can apply and roll back changes safely. Third parties and research prototypes cannot, and on-premises users rarely allow automated changes.
3. **Building a new engine is a decade-long project.** A self-driving brain needs a competitive engine underneath. Academic teams with student turnover could not build both.
4. **Safety beats optimality.** Customers accepted automation only where it was reversible and verified. That rules out the open-ended action spaces the research vision assumed.

# Lessons

- "Autonomous" won as a marketing word and as cloud-ops automation. It did not win as a learned controller.
- Put ML into an existing, widely deployed engine (as CMU eventually did with PostgreSQL), not into a new one.
- Automation that can't be undone does not get turned on.

# Related

- [ML-based knob tuning](/ideas/ml-for-db/ml-knob-tuning.md), [Automatic indexing and plan correction](/ideas/ml-for-db/automatic-indexing-and-plan-correction.md), [Instance-optimized systems](/ideas/ml-for-db/instance-optimized-systems.md), [LLM-based tuning and diagnosis](/ideas/ml-for-db/llm-database-tuning-and-diagnosis.md)
- Systems: [Oracle Autonomous Database](/systems/oracle-autonomous-database.md), [Peloton](/systems/peloton.md), [NoisePage](/systems/noisepage.md), [OtterTune](/systems/ottertune.md), [Azure SQL automatic tuning](/systems/azure-sql-automatic-tuning.md)
- Events: [Oracle ADW launch](/events/2018-03-oracle-autonomous-data-warehouse-launch.md), [NoisePage archived](/events/2023-02-noisepage-archived.md), [OtterTune shuts down](/events/2024-06-ottertune-shuts-down.md)

[^peloton-cidr]: CIDR 2017.
[^electric-sheep]: PVLDB 14(12), 2021.
[^dbdb-noisepage]: dbdb.io lists NoisePage 2018–2021, abandoned; GitHub shows the repository archived.
[^firebolt-pavlo]: Firebolt interview with Andy Pavlo.
[^tc-ellison-2017]: TechCrunch, 2017-10-02.
[^infoage-ellison]: Information Age report of the OpenWorld 2017 keynote.
[^foote]: Richard Foote blog, 2019-03-22.
[^oracle-sla]: Oracle blog: baseline SLA 99.95%; 99.995% with an Autonomous Data Guard standby.
[^azure-autotune]: Microsoft Learn.
[^ottertune-dead]: Hacker News thread, June 2024.
[^dbgym]: GitHub README.
[^oracle-26ai]: Oracle press release, 2025-10-14.
